import { loadAgentConfig } from './agent_config';
import { getLogger } from './logger';
import { runOpencodePrompt, type AgentMode } from './opencode_runner';
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

  logger.info({ mode, model, repoRoot }, 'Starting OpenCode agent run');

  try {
    await runOpencodePrompt({ mode, prompt, model });
    logger.info({ mode }, 'Agent completed');
  } catch (error: unknown) {
    logger.error({ mode, error: (error as Error).message }, 'Agent execution error');
    process.exit(1);
  }
}

runAgent();
