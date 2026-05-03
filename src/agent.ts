import { GoogleGenAI, Type } from '@google/genai';
import { systemTools } from './tools/system';
import { alpacaTools } from './tools/alpaca';
import { fmpTools } from './tools/fmp';
import * as fs from 'fs/promises';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const mode = process.argv[2]; // 'hourly' or 'tactical'

// Define the tools for the model
const modelTools = {
  getAccount: alpacaTools.getAccount,
  getPositions: alpacaTools.getPositions,
  getLatestPrice: alpacaTools.getLatestPrice,
  submitOrder: process.env.ALPACA_PAPER === 'true' 
    ? async (...args: any) => `[DRY RUN - ORDER MOCKED]: ${JSON.stringify(args)}` 
    : alpacaTools.submitOrder,
  getAnalystEstimates: fmpTools.getAnalystEstimates,
  getHistoricalPerformance: fmpTools.getHistoricalPerformance,
  readFile: systemTools.readFile,
  writeFile: systemTools.writeFile,
  executeBash: systemTools.executeBash
};

// Map JS functions to Gemini Tool Declarations
const functionDeclarations: any[] = [
  { name: 'getAccount', description: 'Get Alpaca account info' },
  { name: 'getPositions', description: 'Get Alpaca current positions' },
  { 
    name: 'getLatestPrice', 
    description: 'Get latest price for a symbol',
    parameters: { type: Type.OBJECT, properties: { symbol: { type: Type.STRING } }, required: ['symbol'] }
  },
  {
    name: 'submitOrder',
    description: 'Submit an order (Buy/Sell) to Alpaca. Will mock if in paper/dry-run mode.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        symbol: { type: Type.STRING },
        qty: { type: Type.NUMBER },
        side: { type: Type.STRING, description: 'buy or sell' }
      },
      required: ['symbol', 'qty', 'side']
    }
  },
  {
    name: 'getAnalystEstimates',
    description: 'Get top analyst estimates from FMP for a symbol',
    parameters: { type: Type.OBJECT, properties: { symbol: { type: Type.STRING } }, required: ['symbol'] }
  },
  {
    name: 'getHistoricalPerformance',
    description: 'Get 1w, 1m, 3m, 6m, 1y, 1.5y, 3y historical performance summary from FMP',
    parameters: { type: Type.OBJECT, properties: { symbol: { type: Type.STRING } }, required: ['symbol'] }
  },
  {
    name: 'readFile',
    description: 'Read a local file',
    parameters: { type: Type.OBJECT, properties: { path: { type: Type.STRING } }, required: ['path'] }
  },
  {
    name: 'writeFile',
    description: 'Write to a local file',
    parameters: { type: Type.OBJECT, properties: { path: { type: Type.STRING }, content: { type: Type.STRING } }, required: ['path', 'content'] }
  },
  {
    name: 'executeBash',
    description: 'Execute a bash command',
    parameters: { type: Type.OBJECT, properties: { command: { type: Type.STRING } }, required: ['command'] }
  }
];

const THEMATIC_UNIVERSE = "High-Tech/LLMs (QQQ, XLK, MSFT, GOOGL, NVDA, META), Nuclear (URA, NLR, CCJ, CEG), Space (ARKX, UFO, RKLB), Quantum (QTUM, IONQ, RGTI)";

async function runAgent() {
  console.log(`Starting Agent in ${mode} mode...`);

  let prompt = "";
  let modelName = "";

  if (mode === 'hourly') {
    modelName = "gemini-1.5-pro";
    prompt = `You are the Hourly Macro Strategist Agent for a standalone stock trader system designed to beat the S&P 500 over 3 months.
Your Investment Universe is: ${THEMATIC_UNIVERSE}

Your tasks:
1. Use 'executeBash' or 'readFile' to track recent portfolio changes of known top investors if possible.
2. Use 'getHistoricalPerformance' on key symbols to evaluate multi-timeframe trends (1w to 3y).
3. Read 'memory/MEMORY.md' and 'memory/todo.md' using 'readFile'.
4. Formulate the overarching strategy for the next hour based on this data.
5. Use 'writeFile' to completely update 'memory/MEMORY.md' with your new strategic directive. You must leave a clear, concise instruction for the 10-minute tactical agent to execute.
6. You may also rewrite your own prompts or commands if you find a better strategy.`;
  } else if (mode === 'tactical') {
    modelName = "gemini-1.5-flash";
    prompt = `You are the 10-Minute Tactical Executor Agent for a stock trader system.
Your Investment Universe is: ${THEMATIC_UNIVERSE}

Your tasks:
1. Use 'readFile' to read 'memory/MEMORY.md' to understand the Hourly Macro Strategist's directive.
2. Use 'getLatestPrice' to check immediate price action for symbols you are instructed to trade or hold.
3. Use 'getPositions' and 'getAccount' to check current holdings and buying power.
4. If the Strategy dictates, use 'submitOrder' to Buy or Sell stocks.
5. You must follow the macro directive strictly.
6. If the dashboard paused trading, 'submitOrder' will be mocked automatically. Check if we should hold.`;
  } else {
    console.error("Invalid mode. Use 'hourly' or 'tactical'.");
    process.exit(1);
  }

  const chat = ai.chats.create({
    model: modelName,
    config: {
      tools: [{ functionDeclarations }],
    }
  });

  try {
    let response = await chat.sendMessage({ message: prompt });
    
    // Process function calls
    while (response.functionCalls && response.functionCalls.length > 0) {
      for (const call of response.functionCalls) {
        if (!call.name) continue;
        console.log(`Model called function: ${call.name} with args:`, call.args);
        
        // Execute the actual function
        const func = (modelTools as any)[call.name];
        let result = "";
        if (func) {
          try {
            // Function args are passed as an object or ordered params depending on implementation
            // Since we defined our tools to take positional args mapped from the object properties:
            const argValues = call.args ? Object.values(call.args as any) : [];
            result = await func(...argValues);
          } catch (e: any) {
            result = `Function Error: ${e.message}`;
          }
        } else {
          result = `Function ${call.name} not found.`;
        }

        // Send the result back
        console.log(`Function ${call.name} result:`, result.substring(0, 200) + '...');
        response = await chat.sendMessage({ 
          message: [{
            functionResponse: {
              name: call.name,
              response: { result }
            }
          }]
        });
      }
    }
    
    console.log(`Agent ${mode} run completed. Final response:`);
    console.log(response.text);

  } catch (error) {
    console.error("Agent Execution Error:", error);
  }
}

runAgent();
