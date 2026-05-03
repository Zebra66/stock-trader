import { GoogleGenAI, Type } from '@google/genai';
import { systemTools } from './tools/system_cli';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const mode = process.argv[2]; // 'hourly' or 'tactical'

interface FunctionDeclarationParam {
  type: Type;
  description?: string;
}

interface FunctionDeclaration {
  name: string;
  description: string;
  parameters?: {
    type: Type;
    properties: Record<string, FunctionDeclarationParam>;
    required: string[];
  };
}

const functionDeclarations: FunctionDeclaration[] = [
  {
    name: 'readFile',
    description: 'Read a local file and return its contents as a string.',
    parameters: {
      type: Type.OBJECT,
      properties: { path: { type: Type.STRING, description: 'Relative or absolute file path' } },
      required: ['path'],
    },
  },
  {
    name: 'writeFile',
    description: 'Write (or overwrite) a local file with the given content.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        path:    { type: Type.STRING, description: 'File path to write' },
        content: { type: Type.STRING, description: 'Full content to write' },
      },
      required: ['path', 'content'],
    },
  },
  {
    name: 'executeBash',
    description: 'Execute a bash command and return stdout (and stderr if non-empty). Use this to invoke CLI tools, git commands, or any shell operation.',
    parameters: {
      type: Type.OBJECT,
      properties: { command: { type: Type.STRING, description: 'The bash command to run' } },
      required: ['command'],
    },
  },
];

interface ReadFileArgs    { path: string }
interface WriteFileArgs   { path: string; content: string }
interface ExecuteBashArgs { command: string }

async function dispatch(name: string, args: unknown): Promise<string> {
  switch (name) {
    case 'readFile':    return systemTools.readFile((args as ReadFileArgs).path);
    case 'writeFile':   return systemTools.writeFile((args as WriteFileArgs).path, (args as WriteFileArgs).content);
    case 'executeBash': return systemTools.executeBash((args as ExecuteBashArgs).command);
    default:            return `Unknown function: ${name}`;
  }
}

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

async function runAgent(): Promise<void> {
  console.log(`Starting Agent in ${mode} mode...`);

  let prompt = '';
  let modelName = '';

  // Google Search grounding tool — gives the model live web access
  const googleSearchTool = { googleSearch: {} };

  if (mode === 'hourly') {
    modelName = 'gemini-3.1-pro-preview';
    prompt = `You are the Hourly Macro Strategist Agent for an autonomous stock trader designed to beat the S&P 500 over 3 months.
Investment Universe: ${UNIVERSE}

${CLI_TOOLS_INTRO}

You also have access to Google Search — use it freely to:
- Find breaking market news, earnings reports, and macro events
- Research top investor portfolio moves (Burry, Ackman, Dalio, Buffett, Cathie Wood, etc.)
- Look up analyst upgrades/downgrades and price target changes
- Find best practices for buy/sell timing and position sizing

## Your tasks (execute in order):

### Step 1 — Read current state
- readFile("memory/MEMORY.md") — last cycle's directive and execution summary
- readFile("memory/todo.md") — tasks and buy/sell conditions set by previous tactical cycles

### Step 2 — Gather market intelligence
First, decide which data and in which format you need to make a sound macro decision. Then:
- Use executeBash with FMP CLI to pull multi-timeframe performance (1w, 1m, 3m, 6m, 1y, 3y) for ALL symbols in the Investment Universe
- Use executeBash with Alpaca CLI to get current portfolio positions and buying power
- Use Google Search to find: latest market news, top investor portfolio changes, analyst sentiment for the universe
- Use Google Search to research any specific symbol that needs deeper investigation

### Step 3 — Analyse and decide
- Are we still in the right sectors? What is the macro trend?
- Which positions should be increased, reduced, or exited?
- Are there new opportunities in the Investment Universe?
- Review the tactical todo.md — did the tactical agent flag any issues? Are those still valid?
- Based on market changes, are there new buy/sell conditions to set?

### Step 4 — Update directives
- writeFile("memory/MEMORY.md") with:
  - Current macro thesis (1-2 paragraphs)
  - Priority actions for the next hour
  - Clear table: Symbol | Bias (Buy/Hold/Sell) | Rationale | Target %
- writeFile("memory/todo.md") with specific, actionable buy/sell conditions for the tactical agent:
  - "BUY <TICKER> if price drops below <X> — rationale"
  - "SELL <TICKER> if price rises above <X> or drops below <X> — rationale"
  - "HOLD <TICKER> — target allocation <Y>%"
  - Any other instructions for the tactical agent

### Step 5 — Commit
- executeBash: git add memory/ && git commit -m "[agent] hourly: <one-line summary>" && git push`;

  } else if (mode === 'tactical') {
    modelName = 'gemini-3-flash-preview';
    prompt = `You are the 10-Minute Tactical Executor Agent for an autonomous stock trader.
Investment Universe: ${UNIVERSE}

${CLI_TOOLS_INTRO}

You also have access to Google Search — use it to:
- Check for breaking news on any symbol you are about to trade
- Verify no major earnings or macro event is about to happen that would change the trade

## Your tasks (execute in order):

### Step 1 — Read current state
- readFile("memory/MEMORY.md") — macro directive from the Hourly Strategist
- readFile("memory/todo.md") — specific buy/sell conditions and instructions

### Step 2 — Get live portfolio and market data
- executeBash: bun run src/tools/alpaca_cli.ts get-account
- executeBash: bun run src/tools/alpaca_cli.ts get-positions
- For EVERY symbol mentioned in the directive or todo.md, fetch the latest price:
  executeBash: bun run src/tools/alpaca_cli.ts get-latest-price --symbol <TICKER>

### Step 3 — Review trends and todo conditions
- Compare current prices to the buy/sell conditions in todo.md
- Check if any position has drifted significantly from the target allocation
- Use Google Search to quickly confirm no adverse news before executing any order

### Step 4 — Execute orders
- For each condition met in todo.md, execute the corresponding order via the Alpaca CLI
- Log each decision: why you acted (or why you held)

### Step 5 — Update state and commit
- writeFile("memory/MEMORY.md") — append an execution summary block:
  - What was done this cycle, current holdings, next expected action
- writeFile("memory/todo.md") — update/remove completed conditions, add any new flags
- executeBash: git add memory/ && git commit -m "[agent] tactical: <one-line summary>" && git push`;

  } else {
    console.error("Invalid mode. Use 'hourly' or 'tactical'.");
    process.exit(1);
  }

  const chat = ai.chats.create({
    model: modelName,
    config: { tools: [{ functionDeclarations }, googleSearchTool] },
  });

  try {
    let response = await chat.sendMessage({ message: prompt });

    while (response.functionCalls && response.functionCalls.length > 0) {
      const results = [];

      for (const call of response.functionCalls) {
        if (!call.name) continue;
        console.log(`→ ${call.name}`, JSON.stringify(call.args).substring(0, 120));

        let result: string;
        try {
          result = await dispatch(call.name, call.args);
        } catch (e: unknown) {
          result = `Function error: ${(e as Error).message}`;
        }

        console.log(`← ${call.name}: ${result.substring(0, 120)}...`);
        results.push({
          functionResponse: {
            name: call.name,
            response: { result },
          },
        });
      }

      response = await chat.sendMessage({ message: results });
    }

    console.log(`\nAgent [${mode}] completed.`);
    if (response.text) console.log(response.text);

  } catch (error: unknown) {
    console.error('Agent execution error:', (error as Error).message);
    process.exit(1);
  }
}

runAgent();
