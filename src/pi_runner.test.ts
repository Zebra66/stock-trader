import { afterEach, describe, expect, test } from 'bun:test';
import type { AgentSessionEvent } from '@mariozechner/pi-coding-agent';
import {
  applyProviderEnv,
  buildStructuredPiEventRecord,
  logPiEvent,
  resolveConfiguredProvider,
  resolvePiModel,
} from './pi_runner';

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

describe('pi runner model resolution', () => {
  const originalZen = process.env.ZEN_API_KEY;
  const originalOpencode = process.env.OPENCODE_API_KEY;

  afterEach(() => {
    if (originalZen === undefined) {
      delete process.env.ZEN_API_KEY;
    } else {
      process.env.ZEN_API_KEY = originalZen;
    }

    if (originalOpencode === undefined) {
      delete process.env.OPENCODE_API_KEY;
    } else {
      process.env.OPENCODE_API_KEY = originalOpencode;
    }
  });

  test('maps trader-zen specs to the opencode provider with exact Zen model ids', () => {
    expect(resolveConfiguredProvider('trader-zen/grok-4.5')).toEqual({
      configuredProvider: 'trader-zen',
      provider: 'opencode',
      modelID: 'grok-4.5',
    });
    expect(resolveConfiguredProvider('trader-zen/kimi-k2.7-code')).toEqual({
      configuredProvider: 'trader-zen',
      provider: 'opencode',
      modelID: 'kimi-k2.7-code',
    });
  });

  test('resolves grok-4.5 and kimi-k2.7-code even when missing from built-in pi-ai registry', () => {
    const grok = resolvePiModel(resolveConfiguredProvider('trader-zen/grok-4.5'));
    const kimi = resolvePiModel(resolveConfiguredProvider('trader-zen/kimi-k2.7-code'));

    expect(grok).toMatchObject({
      id: 'grok-4.5',
      provider: 'opencode',
      api: 'openai-completions',
      baseUrl: 'https://opencode.ai/zen/v1',
    });
    expect(kimi).toMatchObject({
      id: 'kimi-k2.7-code',
      provider: 'opencode',
      api: 'openai-completions',
      baseUrl: 'https://opencode.ai/zen/v1',
    });
  });

  test('maps ZEN_API_KEY to OPENCODE_API_KEY for opencode provider', () => {
    delete process.env.OPENCODE_API_KEY;
    process.env.ZEN_API_KEY = 'test-zen-key';

    applyProviderEnv('opencode');

    expect(process.env.OPENCODE_API_KEY).toBe('test-zen-key');
  });
});

describe('pi runner logging', () => {
  test('logs assistant message_end payloads as readable completion summaries', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'assistant',
        api: 'openai-responses',
        provider: 'openai',
        model: 'gpt-5.4',
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
        stopReason: 'stop',
        timestamp: 1,
        content: [{ type: 'text', text: 'I updated the trading strategy.' }],
      },
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'info',
      message: '✅ gpt-5.4 completed: I updated the trading strategy.',
      payload: {
        eventType: 'message_end',
        role: 'assistant',
        status: 'completed',
        model: 'gpt-5.4',
        responseId: 'resp-123',
        preview: 'I updated the trading strategy.',
        stopReason: 'stop',
        contentBlockTypes: ['text'],
      },
    });
    expect(logs[0].payload).not.toHaveProperty('piMessage');
  });

  test('logs user message_end payloads with prompt preview and length', () => {
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
      message: '📨 user sent: Top secret prompt contents',
      payload: {
        eventType: 'message_end',
        role: 'user',
        status: 'sent',
        preview: 'Top secret prompt contents',
        promptLength: 26,
        timestamp: 2,
      },
    });
    expect(logs[0].payload).not.toHaveProperty('piMessage');
  });

  test('logs failed toolResult message_end payloads as readable summaries', () => {
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
      level: 'warn',
      message: '❌ bash failed: command failed',
      payload: {
        eventType: 'message_end',
        role: 'toolResult',
        status: 'failed',
        toolName: 'bash',
        toolCallId: 'tool-1',
        preview: 'command failed',
        isError: true,
        contentBlockTypes: ['text'],
      },
    });
    expect(logs[0].payload).not.toHaveProperty('details');
    expect(logs[0].payload).not.toHaveProperty('piMessage');
  });

  test('logs successful toolResult message_end payloads as readable summaries', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'toolResult',
        toolCallId: 'tool-2',
        toolName: 'read',
        isError: false,
        timestamp: 4,
        content: [{ type: 'text', text: 'loaded README.md' }],
        details: { bytesRead: 128 },
      },
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'info',
      message: '✅ read completed: loaded README.md',
      payload: {
        eventType: 'message_end',
        role: 'toolResult',
        status: 'completed',
        toolName: 'read',
        toolCallId: 'tool-2',
        preview: 'loaded README.md',
        isError: false,
        contentBlockTypes: ['text'],
      },
    });
    expect(logs[0].payload).not.toHaveProperty('details');
    expect(logs[0].payload).not.toHaveProperty('piMessage');
  });

  test('uses tool call fallback preview for tool-call-only assistant content', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'assistant',
        api: 'openai-responses',
        provider: 'openai',
        model: 'gpt-5.4',
        responseId: 'resp-tool',
        usage: {
          input: 10,
          output: 5,
          cacheRead: 0,
          cacheWrite: 0,
          totalTokens: 15,
          cost: {
            input: 0,
            output: 0,
            cacheRead: 0,
            cacheWrite: 0,
            total: 0,
          },
        },
        stopReason: 'toolUse',
        timestamp: 10,
        content: [{ type: 'toolCall' }],
      },
    } as never);

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'info',
      message: '🤖 gpt-5.4 needs tool: [tool call blocks]',
      payload: {
        eventType: 'message_end',
        role: 'assistant',
        status: 'needs tool',
        model: 'gpt-5.4',
        preview: '[tool call blocks]',
        stopReason: 'toolUse',
        contentBlockTypes: ['toolCall'],
      },
    });
  });

  test('logs assistant message_update events with model status and preview', () => {
    const { logger, logs } = createCapturingLogger();
    const event: Extract<AgentSessionEvent, { type: 'message_update' }> = {
      type: 'message_update',
      assistantMessageEvent: {
        type: 'toolcall_delta',
        partial: {
          role: 'assistant',
          model: 'gpt-5.4',
          content: [{ type: 'text', text: 'bash git status' }],
        },
      },
    };

    logPiEvent(logger, event);

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'debug',
      message: '🤖 gpt-5.4 preparing tool: bash git status',
      payload: {
        eventType: 'message_update',
        assistantEventType: 'toolcall_delta',
        status: 'preparing tool',
        model: 'gpt-5.4',
        preview: 'bash git status',
        contentBlockTypes: ['text'],
      },
    });
    expect(logs[0].payload).not.toHaveProperty('partialMessage');
  });

  test('logs tool execution end payloads as readable summaries with compact previews', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'tool_execution_end',
      toolCallId: 'tool-2',
      toolName: 'read',
      result: { content: [{ type: 'text', text: 'file contents preview' }] },
      isError: true,
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({
      level: 'warn',
      message: '❌ read failed: file contents preview',
      payload: {
        eventType: 'tool_execution_end',
        status: 'failed',
        toolCallId: 'tool-2',
        toolName: 'read',
        preview: 'file contents preview',
        isError: true,
      },
    });
    expect(logs[0].payload).not.toHaveProperty('result');
  });

  test('uses concise previews and omits irrelevant optional payload fields', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'tool_execution_start',
      toolCallId: 'tool-3',
      toolName: 'bash',
      args: { command: 'git status', timeout: 120000 },
    });

    logPiEvent(logger, {
      type: 'message_update',
      assistantMessageEvent: {
        type: 'response_metadata',
        partial: {
          role: 'assistant',
          model: 'gpt-5.4',
        },
      },
    } as Extract<AgentSessionEvent, { type: 'message_update' }>);

    logPiEvent(logger, {
      type: 'session_error',
      error: new Error('unexpected session error'),
    });

    expect(logs).toHaveLength(3);
    expect(logs[0]).toMatchObject({
      level: 'info',
      message: '🛠 bash started: git status',
      payload: {
        eventType: 'tool_execution_start',
        status: 'started',
        toolCallId: 'tool-3',
        toolName: 'bash',
        preview: 'git status',
      },
    });
    expect(logs[0].message).not.toContain('{');

    expect(logs[1]).toMatchObject({
      level: 'info',
      message: '🤖 gpt-5.4 responding',
      payload: {
        eventType: 'message_update',
        assistantEventType: 'response_metadata',
        status: 'responding',
        model: 'gpt-5.4',
      },
    });
    expect(logs[1].payload).not.toHaveProperty('stopReason');
    expect(logs[1].payload).not.toHaveProperty('contentBlockTypes');
    expect(logs[1].payload).not.toHaveProperty('preview');

    expect(logs[2]).toMatchObject({
      level: 'error',
      message: '❌ session failed: unexpected session error',
      payload: {
        eventType: 'session_error',
        status: 'failed',
        preview: 'unexpected session error',
      },
    });
    expect(logs[2].message).not.toContain('Error:');
  });

  test('preserves raw prompt length and uses specific fallbacks for error and tool previews', () => {
    const { logger, logs } = createCapturingLogger();

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'user',
        timestamp: 5,
        content: 'Alpha   beta\n\ngamma',
      },
    });

    logPiEvent(logger, {
      type: 'message_update',
      assistantMessageEvent: {
        type: 'error',
        error: {
          role: 'assistant',
          model: 'gpt-5.4',
          message: 'provider exploded',
        },
      },
    } as Extract<AgentSessionEvent, { type: 'message_update' }>);

    logPiEvent(logger, {
      type: 'message_end',
      message: {
        role: 'toolResult',
        toolCallId: 'tool-4',
        toolName: 'bash',
        isError: true,
        timestamp: 6,
        content: [],
        details: { exitCode: 7 },
      },
    });

    logPiEvent(logger, {
      type: 'tool_execution_end',
      toolCallId: 'tool-5',
      toolName: 'read',
      result: { metadata: { bytesRead: 128 } },
      isError: false,
    });

    expect(logs).toHaveLength(4);
    expect(logs[0]).toMatchObject({
      level: 'info',
      message: '📨 user sent: Alpha beta gamma',
      payload: {
        eventType: 'message_end',
        role: 'user',
        status: 'sent',
        preview: 'Alpha beta gamma',
        promptLength: 19,
        timestamp: 5,
      },
    });

    expect(logs[1]).toMatchObject({
      level: 'error',
      message: '❌ gpt-5.4 failed: provider exploded',
      payload: {
        eventType: 'message_update',
        assistantEventType: 'error',
        status: 'failed',
        model: 'gpt-5.4',
        preview: 'provider exploded',
      },
    });

    expect(logs[2]).toMatchObject({
      level: 'warn',
      message: '❌ bash failed: exit code 7',
      payload: {
        eventType: 'message_end',
        role: 'toolResult',
        status: 'failed',
        toolName: 'bash',
        toolCallId: 'tool-4',
        preview: 'exit code 7',
        isError: true,
      },
    });

    expect(logs[3]).toMatchObject({
      level: 'info',
      message: '✅ read completed: 128 bytes',
      payload: {
        eventType: 'tool_execution_end',
        status: 'completed',
        toolCallId: 'tool-5',
        toolName: 'read',
        preview: '128 bytes',
        isError: false,
      },
    });
  });
});

describe('pi runner structured event records', () => {
  afterEach(async () => {
    delete process.env.PI_RUNNER_EVENTS_FILE;
  });

  test('captures full user prompt content in structured records', () => {
    const event = {
      type: 'message_end',
      message: {
        role: 'user',
        timestamp: 2,
        content: 'Top secret prompt contents',
      },
    } as const;

    expect(buildStructuredPiEventRecord(event)).toEqual({
      eventType: 'message_end',
      role: 'user',
      status: 'sent',
      preview: 'Top secret prompt contents',
      promptLength: 26,
      timestamp: 2,
      fullContent: 'Top secret prompt contents',
    });
  });

  test('captures full tool args and results in structured records', () => {
    const startEvent = {
      type: 'tool_execution_start',
      toolCallId: 'tool-3',
      toolName: 'bash',
      args: { command: 'git status', timeout: 120000 },
    } as const;

    const endEvent = {
      type: 'tool_execution_end',
      toolCallId: 'tool-3',
      toolName: 'bash',
      result: { stdout: 'On branch main', exitCode: 0 },
      isError: false,
    } as const;

    expect(buildStructuredPiEventRecord(startEvent)).toEqual({
      eventType: 'tool_execution_start',
      status: 'started',
      toolCallId: 'tool-3',
      toolName: 'bash',
      preview: 'git status',
      args: { command: 'git status', timeout: 120000 },
    });

    expect(buildStructuredPiEventRecord(endEvent)).toEqual({
      eventType: 'tool_execution_end',
      status: 'completed',
      toolCallId: 'tool-3',
      toolName: 'bash',
      preview: 'On branch main',
      isError: false,
      result: { stdout: 'On branch main', exitCode: 0 },
    });
  });

  test('captures raw error context for failed tool results in structured records', () => {
    const event = {
      type: 'message_end',
      message: {
        role: 'toolResult',
        toolCallId: 'tool-4',
        toolName: 'bash',
        isError: true,
        timestamp: 6,
        content: [],
        details: { exitCode: 7, stderr: 'command failed' },
      },
    } as const;

    expect(buildStructuredPiEventRecord(event)).toEqual({
      eventType: 'message_end',
      role: 'toolResult',
      status: 'failed',
      toolName: 'bash',
      toolCallId: 'tool-4',
      preview: 'command failed',
      isError: true,
      timestamp: 6,
      details: { exitCode: 7, stderr: 'command failed' },
    });
  });
});
