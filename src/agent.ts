import './env';
import { loadAgentConfig } from './agent_config';
import { getLogger } from './logger';
import type { AgentMode } from './types';
import { PiRunner } from './pi_runner';
import { buildPrompt } from './prompt_loader';

const logger = getLogger('agent');

const mode = process.argv[2] as AgentMode | undefined;
const isDryRun = process.argv.includes('--dry-run');

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

  const prompt = await buildPrompt(mode);
  const config = await loadAgentConfig();
  const model = config.modes[mode].model;
  const runner = new PiRunner();
  const modeLogger = logger.child({ mode, dryRun: isDryRun });

  modeLogger.info({ model, repoRoot }, 'Starting Pi agent run');

  try {
    await runner.runPrompt({ mode, prompt, model, logger: modeLogger });
    
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
