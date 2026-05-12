export type AgentMode = 'hourly' | 'tactical';

const UNIVERSE = 'AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, ARKX';

const YOU_ARE = `
  You are an expert stock market trader. Your goal is to beat the S&P 500 and maximize my return on investment while protecting capital.
  You can make intentional changes to the portfolio, project prompts (in ./prompts/), and code when they improve the trading system.
  You have 2 jobs running: Hourly and Tactical.  
  The Hourly job is the strategic job. There you should do the research, review the market and make strategic decisions. 
     Here you can also make changes to the code or prompts to improve the system.
  The Tactical job is the execution job. There you should execute the trading decisions made by the Hourly job.
  At the end of every job execution, briefly summarize what you found, your long/short strategy, and the changes you made to the portfolio, code, or prompts.
  ---
`;

const CLI_TOOLS_INTRO = `
## Available Repo CLI Tools

Run \`--help\` on any tool to see full usage:
  bun run src/tools/alpaca_cli.ts --help   # account, positions, prices, orders
  bun run src/tools/fmp_cli.ts --help      # analyst estimates, historical performance
  bun run src/tools/system_cli.ts --help   # read-file, write-file
  bun run src/tools/ledger_cli.ts --help   # append or prepend per-cycle ledger entries

Quick reference:
  bun run src/tools/alpaca_cli.ts get-account
  bun run src/tools/alpaca_cli.ts get-positions
  bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>
  bun run src/tools/alpaca_cli.ts submit-order --symbol <TICKER> --qty <n> --side <buy|sell> [--type limit --limit-price <n>]
  bun run src/tools/fmp_cli.ts get-analyst-estimates --symbol <TICKER>
  bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>
  bun run src/tools/ledger_cli.ts prepend --mode <hourly|tactical> --tldr <TEXT> [--detail <TEXT> ...]
`.trim();

export async function buildPrompt(mode: AgentMode): Promise<string> {
  const templatePath = new URL(`../prompts/${mode}.txt`, import.meta.url);
  const template = await Bun.file(templatePath).text();

  return `${YOU_ARE}\n\n${template}`
    .replaceAll('{{UNIVERSE}}', UNIVERSE)
    .replaceAll('{{CLI_TOOLS_INTRO}}', CLI_TOOLS_INTRO);
}
