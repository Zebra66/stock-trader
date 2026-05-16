import './env';

export type AgentMode = 'hourly' | 'tactical' | 'analyst';

const UNIVERSE = 'AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, ARKX';

const CLI_TOOLS_INTRO = `
## Available Repo CLI Tools

Run \`--help\` on any tool to see full usage:
  bun run src/tools/alpaca_cli.ts --help   # account, positions, prices, orders
  bun run src/tools/fmp_cli.ts --help      # analyst estimates, historical performance
  bun run src/tools/system_cli.ts --help   # read-file, write-file
  bun run src/tools/ledger_cli.ts --help   # append or prepend per-cycle ledger entries
  bun run src/tools/event_detector.ts --help  # detect major market events (tactical only)

Quick reference:
  bun run src/tools/alpaca_cli.ts get-account
  bun run src/tools/alpaca_cli.ts get-positions
  bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>
  bun run src/tools/alpaca_cli.ts submit-order --symbol <TICKER> --qty <n> --side <buy|sell> [--type limit --limit-price <n>]
  bun run src/tools/fmp_cli.ts get-analyst-estimates --symbol <TICKER>
  bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>
  bun run src/tools/ledger_cli.ts prepend --mode <hourly|tactical> --tldr <TEXT> [--detail <TEXT> ...]
  bun run src/tools/event_detector.ts                     # run event detector and read report
`.trim();

/**
 * Recursively resolves {{INCLUDE:path}} directives in a prompt template.
 * Paths are resolved relative to the prompts/ directory.
 * Circular includes are detected and throw.
 */
async function resolveIncludes(template: string, visited: Set<string>): Promise<string> {
  const includeRegex = /\{\{INCLUDE:([^}]+)\}\}/g;
  const matches = [...template.matchAll(includeRegex)];

  if (matches.length === 0) {
    return template;
  }

  let result = template;
  for (const match of matches) {
    const includePath = match[1].trim();
    if (visited.has(includePath)) {
      throw new Error(`Circular include detected: ${includePath}`);
    }

    const file = Bun.file(new URL(`../${includePath}`, import.meta.url));
    const content = await file.text();

    const newVisited = new Set(visited);
    newVisited.add(includePath);
    const resolved = await resolveIncludes(content, newVisited);

    result = result.replace(match[0], resolved);
  }

  return result;
}

export async function buildPrompt(mode: AgentMode): Promise<string> {
  const templatePath = new URL(`../prompts/${mode}.txt`, import.meta.url);
  const template = await Bun.file(templatePath).text();

  const resolved = await resolveIncludes(template, new Set());

  return resolved
    .replaceAll('{{UNIVERSE}}', UNIVERSE)
    .replaceAll('{{CLI_TOOLS_INTRO}}', CLI_TOOLS_INTRO);
}
