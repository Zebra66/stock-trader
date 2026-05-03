import { GoogleGenAI, Type } from '@google/genai';
import { systemTools } from './tools/system';

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

interface ReadFileArgs   { path: string }
interface WriteFileArgs  { path: string; content: string }
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
  bun run src/tools/alpaca.ts --help   # account, positions, prices, orders
  bun run src/tools/fmp.ts --help      # analyst estimates, historical performance
  bun run src/tools/system.ts --help   # read-file, write-file

Quick reference:
  bun run src/tools/alpaca.ts get-account
  bun run src/tools/alpaca.ts get-positions
  bun run src/tools/alpaca.ts get-latest-price --symbol <TICKER>
  bun run src/tools/alpaca.ts submit-order --symbol <TICKER> --qty <n> --side <buy|sell> [--type limit --limit-price <n>]
  bun run src/tools/fmp.ts get-analyst-estimates --symbol <TICKER>
  bun run src/tools/fmp.ts get-historical-performance --symbol <TICKER>
`.trim();

async function runAgent(): Promise<void> {
  console.log(`Starting Agent in ${mode} mode...`);

  let prompt = '';
  let modelName = '';

  if (mode === 'hourly') {
    modelName = 'gemini-2.5-pro';
    prompt = `You are the Hourly Macro Strategist Agent for an autonomous stock trader designed to beat the S&P 500 over 3 months.
Investment Universe: ${UNIVERSE}

${CLI_TOOLS_INTRO}

Your tasks:
1. Read memory/MEMORY.md and memory/todo.md via readFile.
2. Use executeBash with the FMP CLI to evaluate multi-timeframe trends (1w–3y) on key symbols.
3. Optionally check top-investor portfolio movements via executeBash (web scraping or public filings if accessible).
4. Formulate the overarching macro strategy for the next hour.
5. Rewrite memory/MEMORY.md (via writeFile) with a clear directive for the 10-minute Tactical Agent to execute.
6. Update memory/todo.md with any pending actions.
7. You may rewrite your own prompts, data-gathering scripts, or strategy logic if you identify improvements.`;

  } else if (mode === 'tactical') {
    modelName = 'gemini-2.5-flash';
    prompt = `You are the 10-Minute Tactical Executor Agent for an autonomous stock trader.
Investment Universe: ${UNIVERSE}

${CLI_TOOLS_INTRO}

Your tasks:
1. Read memory/MEMORY.md via readFile to get the Macro Strategist's directive.
2. Use executeBash with the Alpaca CLI to check current positions and buying power.
3. Use executeBash with the Alpaca CLI to fetch latest prices for symbols in the directive.
4. Execute any buy/sell orders dictated by the strategy using the Alpaca CLI submit-order command.
5. Update memory/MEMORY.md with a brief execution summary (what was done, current holdings, next action).
6. Commit memory changes: executeBash with git add memory/ && git commit -m "tactical: <summary>"`;

  } else {
    console.error("Invalid mode. Use 'hourly' or 'tactical'.");
    process.exit(1);
  }

  const chat = ai.chats.create({
    model: modelName,
    config: { tools: [{ functionDeclarations }] },
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
