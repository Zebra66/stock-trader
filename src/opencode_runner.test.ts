import { describe, expect, test } from 'bun:test';
import { buildTraderOpencodeConfig, buildTraderOpencodeServerOptions, runOpencodePrompt } from './opencode_runner';

function createAsyncIterable<T>(items: T[]): AsyncIterable<T> {
  return {
    async *[Symbol.asyncIterator]() {
      for (const item of items) {
        yield item;
      }
    },
  };
}

describe('opencode runner', () => {
  test('builds a trader-specific Gemini provider config', () => {
    expect(buildTraderOpencodeConfig()).toMatchObject({
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
    });
  });

  test('builds trader server options with an ephemeral port', () => {
    expect(buildTraderOpencodeServerOptions()).toMatchObject({
      port: 0,
      config: buildTraderOpencodeConfig(),
    });
  });

  test('runs a session with the requested model and logs streamed opencode output', async () => {
    const logs: string[] = [];
    const promptCalls: Array<Record<string, unknown>> = [];

    const fakeOpencode = {
      client: {
        event: {
          subscribe: async () => ({
            stream: createAsyncIterable([
              {
                type: 'message.part.updated',
                properties: {
                  sessionID: 'session-1',
                  part: { type: 'text', text: 'streamed chunk' },
                },
              },
              {
                type: 'session.idle',
                properties: { sessionID: 'session-1' },
              },
            ]),
          }),
        },
        session: {
          create: async () => ({ data: { id: 'session-1' } }),
          prompt: async (payload: Record<string, unknown>) => {
            promptCalls.push(payload);
            return { data: { info: { id: 'message-1' } } };
          },
        },
      },
      server: {
        close: () => undefined,
      },
    };

    await runOpencodePrompt({
      mode: 'hourly',
      prompt: 'test prompt',
      model: 'gemini/gemini-2.5-pro',
      createClient: async () => fakeOpencode,
      logger: {
        info: (message: string) => logs.push(message),
        warn: (message: string) => logs.push(message),
        error: (message: string) => logs.push(message),
        debug: (message: string) => logs.push(message),
        child: () => ({
          info: (message: string) => logs.push(message),
          warn: (message: string) => logs.push(message),
          error: (message: string) => logs.push(message),
          debug: (message: string) => logs.push(message),
          child: () => undefined as never,
        }),
      },
    });

    expect(promptCalls).toHaveLength(1);
    expect(promptCalls[0]).toMatchObject({
      path: { id: 'session-1' },
      body: {
        model: { providerID: 'gemini', modelID: 'gemini-2.5-pro' },
        parts: [{ type: 'text', text: 'test prompt' }],
      },
    });
    expect(logs.some((entry) => entry.includes('[opencode] streamed chunk'))).toBe(true);
  });

  test('throws when the session stream reports an error and does not log prompt completion', async () => {
    const logs: string[] = [];

    const fakeOpencode = {
      client: {
        event: {
          subscribe: async () => ({
            stream: createAsyncIterable([
              {
                type: 'session.error',
                properties: {
                  sessionID: 'session-2',
                  error: { data: { message: 'model exploded' } },
                },
              },
            ]),
          }),
        },
        session: {
          create: async () => ({ data: { id: 'session-2' } }),
          prompt: async () => ({ data: { info: { id: 'message-2' } } }),
        },
      },
      server: {
        close: () => undefined,
      },
    };

    await expect(
      runOpencodePrompt({
        mode: 'hourly',
        prompt: 'test prompt',
        model: 'gemini/gemini-3.1-pro-preview',
        createClient: async () => fakeOpencode,
        logger: {
          info: (message: string) => logs.push(message),
          warn: (message: string) => logs.push(message),
          error: (message: string) => logs.push(message),
          debug: (message: string) => logs.push(message),
          child: () => ({
            info: (message: string) => logs.push(message),
            warn: (message: string) => logs.push(message),
            error: (message: string) => logs.push(message),
            debug: (message: string) => logs.push(message),
            child: () => undefined as never,
          }),
        },
      }),
    ).rejects.toThrow('OpenCode session failed: model exploded');

    expect(logs.some((entry) => entry.includes('[opencode] session error: model exploded'))).toBe(true);
    expect(logs.some((entry) => entry.includes('[opencode] prompt completed'))).toBe(false);
  });
});
