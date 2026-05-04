import './env';
import { createOpencode, type ServerOptions } from '@opencode-ai/sdk';
import { AgentRunner, AgentRunnerOptions } from './runner_interface';
import type { AppLogger } from './logger';
import { getLogger } from './logger';
import { parseModelSpec } from './agent_config';

const rootLogger = getLogger('opencode');

export type AgentMode = 'hourly' | 'tactical';

interface OpencodeSessionApi {
  create(payload: { body: { title: string } }): Promise<{ data: { id: string } }>;
  prompt(payload: {
    path: { id: string };
    body: {
      model: { providerID: string; modelID: string };
      parts: Array<{ type: 'text'; text: string }>;
    };
  }): Promise<{ data: { info?: { id?: string; error?: { message?: string } } } }>;
}

interface OpencodeEventApi {
  subscribe(): Promise<{ stream: AsyncIterable<OpencodeEvent> }>;
}

interface OpencodeRuntime {
  client: {
    session: OpencodeSessionApi;
    event: OpencodeEventApi;
  };
  server: { close(): void };
}

interface StreamResult {
  status: 'idle' | 'error';
  errorMessage?: string;
}

type OpencodeEvent = {
  type: string;
  properties: Record<string, unknown>;
};

export type CreateClient = () => Promise<OpencodeRuntime>;

export interface RunOpencodePromptOptions extends AgentRunnerOptions {
  createClient?: CreateClient;
}

export class OpenCodeRunner implements AgentRunner {
  async runPrompt(options: AgentRunnerOptions): Promise<void> {
    return runOpencodePrompt(options as RunOpencodePromptOptions);
  }
}

export function buildTraderOpencodeConfig(): NonNullable<ServerOptions['config']> {
  return {
    logLevel: 'DEBUG',
    enabled_providers: ['trader-gemini'],
    provider: {
      'trader-gemini': {
        npm: '@ai-sdk/google',
        name: 'Trader Gemini',
        options: {
          apiKey: process.env.GEMINI_API_KEY,
        },
        models: {
          'gemini-3.1-pro-preview': {
            name: 'Gemini 3.1 Pro Preview',
          },
          'gemini-3.1-flash-lite-preview': {
            name: 'Gemini 3.1 Flash Lite Preview',
          },
        },
      },
    },
    permission: {
      bash: 'allow',
      edit: 'allow',
      webfetch: 'allow',
      doom_loop: 'allow',
      external_directory: 'allow',
    },
  };
}

export function buildTraderOpencodeServerOptions(): ServerOptions {
  return {
    port: 0,
    config: buildTraderOpencodeConfig(),
  };
}

export async function runOpencodePrompt(options: RunOpencodePromptOptions): Promise<void> {
  const log = createChildLogger(options.logger ?? rootLogger, { component: 'opencode', mode: options.mode });
  const createClient = options.createClient ?? createDefaultClient;
  const runtime = await createClient();

  try {
    const session = await runtime.client.session.create({
      body: { title: `${options.mode} agent run` },
    });
    const sessionID = session.data.id;
    const sessionLogger = createChildLogger(log, { sessionID });
    const events = await runtime.client.event.subscribe();
    const idlePromise = streamSessionEvents(events.stream, sessionID, sessionLogger);

    sessionLogger.info('[opencode] session created');

    console.log("[DEBUG] Calling runtime.client.session.prompt...");
    const response = await runtime.client.session.prompt({
      path: { id: sessionID },
      body: {
        model: parseModelSpec(options.model),
        parts: [{ type: 'text', text: options.prompt }],
      },
    });
    console.log("[DEBUG] prompt() returned. Awaiting idlePromise...");

    const streamResult = await idlePromise;
    console.log("[DEBUG] idlePromise resolved.");

    if (streamResult.status === 'error') {
      throw new Error(`OpenCode session failed: ${streamResult.errorMessage ?? 'unknown error'}`);
    }

    const errorMessage = response.data.info?.error?.message;
    if (errorMessage) {
      throw new Error(`OpenCode session failed: ${errorMessage}`);
    }

    sessionLogger.info('[opencode] prompt completed');
  } finally {
    runtime.server.close();
  }
}

function createChildLogger<T extends Pick<AppLogger, 'info' | 'warn' | 'error' | 'debug' | 'child'>>(
  logger: T,
  bindings: Record<string, string>,
): T {
  const child = logger.child(bindings) as T | undefined;
  return child ?? logger;
}

async function createDefaultClient(): Promise<OpencodeRuntime> {
  const runtime = await createOpencode(buildTraderOpencodeServerOptions());
  return runtime as unknown as OpencodeRuntime;
}

async function streamSessionEvents(
  stream: AsyncIterable<OpencodeEvent>,
  sessionID: string,
  logger: Pick<AppLogger, 'info' | 'warn' | 'error' | 'debug' | 'child'>,
): Promise<StreamResult> {
  for await (const event of stream) {
    if (!belongsToSession(event, sessionID)) {
      continue;
    }

    if (event.type === 'message.part.updated') {
      const part = event.properties.part as { type?: string; text?: string } | undefined;
      const delta = typeof event.properties.delta === 'string' ? event.properties.delta : undefined;
      const text = delta ?? part?.text;

      if (part?.type === 'text' && text) {
        logger.info(`[opencode] ${text}`);
      }
      continue;
    }

    if (event.type === 'permission.updated') {
      const title = typeof event.properties.title === 'string' ? event.properties.title : 'permission request';
      logger.warn(`[opencode] permission requested: ${title}`);
      continue;
    }

    if (event.type === 'file.edited') {
      const file = typeof event.properties.file === 'string' ? event.properties.file : 'unknown';
      logger.info(`[opencode] edited file: ${file}`);
      continue;
    }

    if (event.type === 'session.error') {
      const error = event.properties.error as { data?: { message?: string } } | undefined;
      const errorMessage = error?.data?.message ?? 'unknown error';
      logger.error(`[opencode] session error: ${errorMessage}`);
      return { status: 'error', errorMessage };
    }

    if (event.type === 'session.idle') {
      logger.info('[opencode] session idle');
      return { status: 'idle' };
    }

    logger.debug(`[opencode] event: ${event.type} ${JSON.stringify(event.properties)}`);
  }

  return { status: 'idle' };
}

function belongsToSession(event: OpencodeEvent, sessionID: string): boolean {
  const eventSessionID = event.properties.sessionID;
  return typeof eventSessionID === 'string' ? eventSessionID === sessionID : true;
}
