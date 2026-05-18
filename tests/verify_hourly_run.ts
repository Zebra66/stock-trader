import { loadAgentConfig } from '../src/agent_config';
import { PiRunner } from '../src/pi_runner';
import { buildPrompt } from '../src/prompt_loader';

const prompt = await buildPrompt('hourly');
const config = await loadAgentConfig();

console.log(
  JSON.stringify(
    {
      phase: 'preflight',
      cwd: process.cwd(),
      model: config.modes.hourly.model,
      promptStartsWith: prompt.split('\n').slice(0, 8),
    },
    null,
    2,
  ),
);

const runner = new PiRunner();
await runner.runPrompt({
  mode: 'hourly',
  model: config.modes.hourly.model,
  prompt:
    `${prompt}\n\n## Verification-only override\n` +
    `This is a safe verification run. Do not modify any files, do not place orders, and do not submit git commits or pushes. Instead:\n` +
    `1. Confirm your current working directory and whether it is the repository root.\n` +
    `2. Read memory/MEMORY.md and memory/todo.md if they exist.\n` +
    `3. Run these exact harmless commands from the workspace root and inspect the output: ` +
    '`bun run src/tools/alpaca_cli.ts --help`, `bun run src/tools/fmp_cli.ts --help`, `bun run src/tools/system_cli.ts --help`.\n' +
    `4. State whether those CLI tools were callable without errors.\n` +
    `5. Mention the first sentence of the prompt you were given so the operator can confirm the correct hourly prompt was loaded.\n` +
    `6. Do not edit anything.`,
});
