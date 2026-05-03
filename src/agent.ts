import { GoogleGenAI, Type } from '@google/genai';
import { buildPrompt } from './prompt_loader';
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

async function runAgent(): Promise<void> {
  console.log(`Starting Agent in ${mode} mode...`);

  let prompt = '';
  let modelName = '';

  // Google Search grounding tool — gives the model live web access
  const googleSearchTool = { googleSearch: {} };

  if (mode === 'hourly') {
    modelName = 'gemini-3.1-pro-preview';
    prompt = await buildPrompt('hourly');

  } else if (mode === 'tactical') {
    modelName = 'gemini-3-flash-preview';
    prompt = await buildPrompt('tactical');

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
