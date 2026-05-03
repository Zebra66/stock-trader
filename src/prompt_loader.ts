export type AgentMode = 'hourly' | 'tactical';

const UNIVERSE = 'High-Tech/LLMs (QQQ, XLK, MSFT, GOOGL, NVDA, META), Nuclear (URA, NLR, CCJ, CEG), Space (ARKX, UFO, RKLB), Quantum (QTUM, IONQ, RGTI)';

const CLI_TOOLS_INTRO = `
## Available CLI Tools (invoke via executeBash)

Run \`--help\` on any tool to see full usage:
  bun run src/tools/alpaca_cli.ts --help   # account, positions, prices, orders
  bun run src/tools/fmp_cli.ts --help      # analyst estimates, historical performance
  bun run src/tools/system_cli.ts --help   # read-file, write-file

Quick reference:
  bun run src/tools/alpaca_cli.ts get-account
  bun run src/tools/alpaca_cli.ts get-positions
  bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>
  bun run src/tools/alpaca_cli.ts submit-order --symbol <TICKER> --qty <n> --side <buy|sell> [--type limit --limit-price <n>]
  bun run src/tools/fmp_cli.ts get-analyst-estimates --symbol <TICKER>
  bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>
`.trim();

export async function buildPrompt(mode: AgentMode): Promise<string> {
  const templatePath = new URL(`../prompts/${mode}.txt`, import.meta.url);
  const template = await Bun.file(templatePath).text();

  return template
    .replaceAll('{{UNIVERSE}}', UNIVERSE)
    .replaceAll('{{CLI_TOOLS_INTRO}}', CLI_TOOLS_INTRO);
}
