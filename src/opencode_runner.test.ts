import { describe, expect, test } from 'bun:test';
import { runOpencodePrompt } from './opencode_runner';

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
});
