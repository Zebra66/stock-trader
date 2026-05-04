import './env';
import { loadAgentConfig } from './agent_config';
import { getLogger } from './logger';
import type { AgentMode } from './opencode_runner';
import { PiRunner } from './pi_runner';
import { buildPrompt } from './prompt_loader';

const logger = getLogger('agent');

const mode = process.argv[2] as AgentMode | undefined;

async function runAgent(): Promise<void> {
  if (mode !== 'hourly' && mode !== 'tactical') {
    logger.error({ mode }, "Invalid mode. Use 'hourly' or 'tactical'.");
    process.exit(1);
  }

  const repoRoot = new URL('..', import.meta.url).pathname;
  process.chdir(repoRoot);

  const prompt = await buildPrompt(mode);
  const config = await loadAgentConfig();
  const model = config.modes[mode].model;
  const runner = new PiRunner();

  logger.info({ mode, model, repoRoot }, 'Starting Pi agent run');

  try {
    await runner.runPrompt({ mode, prompt, model, logger });
    
    // Auto-stage all changes (including new memory files) so they are captured.
    // .gitignore ensures temp_files/ and other sensitive files are not staged.
    try {
      await Bun.$`git add .`.quiet();
      logger.info({ mode }, 'Auto-staged changes after run');
    } catch (gitError: unknown) {
      logger.warn({ mode, error: (gitError as Error).message }, 'Failed to auto-stage changes');
    }

    logger.info({ mode }, 'Agent completed');
  } catch (error: unknown) {
    logger.error({ mode, error: (error as Error).message }, 'Agent execution error');
    process.exit(1);
  }
}

runAgent();
