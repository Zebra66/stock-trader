import { describe, expect, test } from 'bun:test';
import { logPiEvent } from './pi_runner';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface CapturedLog {
  level: LogLevel;
  payload: unknown;
  message?: string;
}

function createCapturingLogger() {
  const logs: CapturedLog[] = [];

  return {
    logs,
    logger: {
      debug: (payload: unknown, message?: string) => logs.push({ level: 'debug', payload, message }),
      info: (payload: unknown, message?: string) => logs.push({ level: 'info', payload, message }),
      warn: (payload: unknown, message?: string) => logs.push({ level: 'warn', payload, message }),
      error: (payload: unknown, message?: string) => logs.push({ level: 'error', payload, message }),
    },
  };
}

describe('pi runner logging', () => {
  test('logs assistant message_end payloads with full Pi metadata at severity matching stopReason', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'assistant',
        api: 'google-generative-ai',
        provider: 'google',
        model: 'gemini-3.1-pro-preview',
        responseId: 'resp-123',
        usage: {
          input: 120,
          output: 45,
          cacheRead: 0,
          cacheWrite: 0,
          totalTokens: 165,
          cost: {
            input: 0,
            output: 0,
            cacheRead: 0,
            cacheWrite: 0,
            total: 0,
          },
        },
        stopReason: 'error',
        errorMessage: 'provider failed',
        timestamp: 1,
        content: [],
      },
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'error',
      message: '[PiRunner] assistant message',
      payload: {
        eventType: 'message_end',
        role: 'assistant',
        stopReason: 'error',
        provider: 'google',
        model: 'gemini-3.1-pro-preview',
        responseId: 'resp-123',
        contentBlockTypes: [],
        piMessage: {
          errorMessage: 'provider failed',
          stopReason: 'error',
        },
      },
    });
  });

  test('summarizes user message_end payloads instead of logging the full prompt', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'user',
        timestamp: 2,
        content: 'Top secret prompt contents',
      },
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'info',
      message: '[PiRunner] user message summary',
      payload: {
        eventType: 'message_end',
        role: 'user',
        contentKind: 'text',
        textLength: 26,
        textPreview: 'Top secret prompt contents',
      },
    });
    expect(logs[0].payload).not.toHaveProperty('piMessage');
  });

  test('logs toolResult message_end payloads with tool metadata', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'toolResult',
        toolCallId: 'tool-1',
        toolName: 'bash',
        isError: true,
        timestamp: 3,
        content: [{ type: 'text', text: 'command failed' }],
        details: { exitCode: 1 },
      },
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'error',
      message: '[PiRunner] tool result message',
      payload: {
        eventType: 'message_end',
        role: 'toolResult',
        toolName: 'bash',
        toolCallId: 'tool-1',
        isError: true,
        contentBlockTypes: ['text'],
        piMessage: {
          toolName: 'bash',
          isError: true,
        },
      },
    });
  });

  test('logs tool execution payloads with ids, args, result, and matching severity', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'tool_execution_end',
      toolCallId: 'tool-2',
      toolName: 'read',
      result: { content: [{ type: 'text', text: 'oops' }] },
      isError: true,
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'error',
      message: '[PiRunner] tool execution end',
      payload: {
        eventType: 'tool_execution_end',
        toolCallId: 'tool-2',
        toolName: 'read',
        isError: true,
        result: { content: [{ type: 'text', text: 'oops' }] },
      },
    });
  });
});
