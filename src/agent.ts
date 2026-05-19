import './env';
import { loadAgentConfig } from './agent_config';
import { getLogger } from './logger';
import type { AgentMode } from './types';
import { PiRunner } from './pi_runner';
import { buildPrompt } from './prompt_loader';
import { getUnexecutedPrompts, markPromptsExecuted } from './web/user_prompts';

const logger = getLogger('agent');

const mode = process.argv[2] as AgentMode | undefined;
const isDryRun = process.argv.includes('--dry-run');

async function preFetchContext(mode: AgentMode): Promise<string> {
  const memoryFile = Bun.file('memory/MEMORY.md');
  const memoryContent = await memoryFile.exists() ? await memoryFile.text() : '(missing memory/MEMORY.md)';

  const todoFile = Bun.file('memory/todo.md');
  const todoContent = await todoFile.exists() ? await todoFile.text() : '(missing memory/todo.md)';

  logger.info({ mode }, 'Pre-fetching Alpaca and event data to optimize tokens...');

  // 1. Run event detector programmatically
  let eventReportStr = '';
  try {
    const { detectEvents } = await import('./tools/event_detector');
    const report = await detectEvents();
    eventReportStr = JSON.stringify(report, null, 2);
  } catch (e: any) {
    eventReportStr = `Error running event detector: ${e.message}`;
  }

  // 2. Fetch account & positions
  let accountStr = '';
  let positionsStr = '';
  try {
    const { alpacaTools } = await import('./tools/alpaca_cli');
    accountStr = await alpacaTools.getAccount();
    positionsStr = await alpacaTools.getPositions();
  } catch (e: any) {
    accountStr = `Error: ${e.message}`;
    positionsStr = `Error: ${e.message}`;
  }

  // 3. Fetch latest prices for universe symbols in parallel
  const UNIVERSE = ['AVGO', 'EIS', 'GLD', 'GOOG', 'HOOD', 'META', 'NVDA', 'QQQ', 'QTUM', 'RKLB', 'SHLD', 'SOXX', 'VOO', 'ARKX'];
  const prices: Record<string, any> = {};
  try {
    const { alpacaTools } = await import('./tools/alpaca_cli');
    await Promise.all(UNIVERSE.map(async (symbol) => {
      try {
        const priceStr = await alpacaTools.getLatestPrice(symbol);
        prices[symbol] = JSON.parse(priceStr);
      } catch (e: any) {
        prices[symbol] = { error: e.message };
      }
    }));
  } catch (e: any) {
    logger.warn({ error: e.message }, 'Failed to fetch latest prices in pre-fetch');
  }

  return `
# PRE-FETCHED CONTEXT (DO NOT RETRIEVE OR RUN COMMANDS FOR THESE)
The harness has pre-fetched the current state for you to save token costs and execution time. Do NOT run the corresponding read/get commands (e.g. event_detector, get-account, get-positions, get-latest-price, file reads of MEMORY.md and todo.md) unless you need to double-check or they are missing:

## Content of memory/MEMORY.md
\`\`\`markdown
${memoryContent}
\`\`\`

## Content of memory/todo.md
\`\`\`markdown
${todoContent}
\`\`\`

## Event Detector Report (temp_files/event_report.json)
\`\`\`json
${eventReportStr}
\`\`\`

## Alpaca Account Info
\`\`\`json
${accountStr}
\`\`\`

## Alpaca Positions Info
\`\`\`json
${positionsStr}
\`\`\`

## Latest Prices for Universe Symbols
\`\`\`json
${JSON.stringify(prices, null, 2)}
\`\`\`
  `.trim();
}

async function runAgent(): Promise<void> {
  if (mode !== 'hourly' && mode !== 'tactical') {
    logger.error({ mode }, "Invalid mode. Use 'hourly' or 'tactical'.");
    process.exit(1);
  }

  if (isDryRun) {
    process.env.DRY_RUN = '1';
    logger.info({ mode }, '🧪 DRY RUN mode enabled — no orders will be submitted');
  }

  const repoRoot = new URL('..', import.meta.url).pathname;
  process.chdir(repoRoot);

  // Short-circuit check for tactical mode under hard lock to save 100% of LLM cost
  if (mode === 'tactical') {
    const todoFile = Bun.file('memory/todo.md');
    const todoContent = await todoFile.exists() ? await todoFile.text() : '';
    const isHardLocked = todoContent.includes('HARD_LOCK');

    const lockFile = Bun.file('memory/.trading_lock.json');
    let isLockActive = false;
    try {
      if (await lockFile.exists()) {
        const lockData = JSON.parse(await lockFile.text());
        isLockActive = !!lockData.active;
      }
    } catch {}

    if (isHardLocked || isLockActive) {
      const unexecuted = await getUnexecutedPrompts();
      if (unexecuted.length === 0) {
        const { detectEvents } = await import('./tools/event_detector');
        const report = await detectEvents();
        if (report.classification === 'NONE' || report.classification === 'MINOR') {
          logger.info('🔒 Tactical run skipped: HARD_LOCK is active and no MAJOR/CRITICAL market events detected.');
          process.exit(0);
        }
      } else {
        logger.info('🔓 Tactical run proceeding despite HARD_LOCK because there are pending user requests.');
      }
    }
  }

  const prompt = await buildPrompt(mode);
  
  const unexecuted = await getUnexecutedPrompts();
  let finalPrompt = prompt;
  if (unexecuted.length > 0) {
    const textPrompts = unexecuted.map(p => p.text).join('\n\n---\n\n');
    finalPrompt += '\n\n# User Instructions (Account Manager Requests)\n\n' +
      'The account manager added the following requests. Please address them:\n\n' +
      textPrompts;
  }

  // Pre-fetch all state to inject into the prompt context to save turns
  const prefetchedContext = await preFetchContext(mode);
  finalPrompt += '\n\n' + prefetchedContext;

  const config = await loadAgentConfig();
  const model = config.modes[mode].model;
  const runner = new PiRunner();
  const modeLogger = logger.child({ mode, dryRun: isDryRun });

  modeLogger.info({ model, repoRoot }, 'Starting Pi agent run');

  try {
    await runner.runPrompt({ mode, prompt: finalPrompt, model, logger: modeLogger });
    
    if (unexecuted.length > 0) {
      const ids = unexecuted.map(p => p.id);
      await markPromptsExecuted(ids);
      modeLogger.info({ count: ids.length }, 'Marked user prompts as executed');
    }
    
    // Auto-stage all changes (including new memory files) so they are captured.
    // .gitignore ensures temp_files/ and other sensitive files are not staged.
    try {
      await Bun.$`git add .`.quiet();
      modeLogger.info('Auto-staged changes after run');
    } catch (gitError: unknown) {
      modeLogger.warn({ error: (gitError as Error).message }, 'Failed to auto-stage changes');
    }

    modeLogger.info('Agent completed');
  } catch (error: unknown) {
    modeLogger.error({ error: (error as Error).message }, 'Agent execution error');
    process.exit(1);
  }
}

runAgent();
