import './env';
import { AgentRunner, AgentRunnerOptions } from './runner_interface';
import { createAgentSession, loadSkillsFromDir, formatSkillsForPrompt } from '@mariozechner/pi-coding-agent';
import type { AgentSessionEvent } from '@mariozechner/pi-coding-agent';
import { getModel } from '@mariozechner/pi-ai';
import type { AssistantMessage, AssistantMessageEvent, KnownProvider, StopReason, ToolResultMessage, UserMessage } from '@mariozechner/pi-ai';
import { parseModelSpec } from './agent_config';
import { appendStructuredLogEvent } from './logger';
import fs from 'fs';
import path from 'path';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type NormalizedStatus = 'completed' | 'needs tool' | 'truncated' | 'aborted' | 'failed';
type AssistantUpdateStatus = NormalizedStatus | 'thinking' | 'preparing tool' | 'responding';
type LogSubject = 'user' | 'assistant' | 'toolStart' | 'tool' | 'session';
type StructuredPiEventRecord = Record<string, unknown>;

type PiEvent = AgentSessionEvent | { type: 'session_error'; [key: string]: unknown };

interface ResolvedConfiguredProvider {
  configuredProvider: string;
  provider: KnownProvider;
  modelID: string;
}

interface PiLogger {
  debug?: (payload: unknown, message?: string) => void;
  info?: (payload: unknown, message?: string) => void;
  warn?: (payload: unknown, message?: string) => void;
  error?: (payload: unknown, message?: string) => void;
}

function logAtLevel(log: PiLogger, level: LogLevel, payload: unknown, message: string): void {
  const writer = log[level] ?? log.info ?? console.info;
  writer.call(log, payload, message);
}

function getStopReasonLogLevel(stopReason: StopReason): LogLevel {
  switch (stopReason) {
    case 'error':
      return 'error';
    case 'aborted':
    case 'length':
      return 'warn';
    case 'stop':
    case 'toolUse':
      return 'info';
  }
}

function getContentBlockTypes(content: unknown): string[] {
  if (typeof content === 'string') {
    return ['text'];
  }

  if (!Array.isArray(content)) {
    return [];
  }

  return content
    .map((block) => (typeof block === 'object' && block !== null && 'type' in block ? block.type : undefined))
    .filter((type): type is string => typeof type === 'string');
}

function collapseWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function truncatePreview(value: string, maxLength = 200): string {
  return value.length <= maxLength ? value : `${value.slice(0, maxLength)}...`;
}

function normalizePreviewText(value: string): string | undefined {
  const collapsed = collapseWhitespace(value);
  if (collapsed.length === 0) {
    return undefined;
  }

  return truncatePreview(collapsed);
}

function omitUndefinedAndEmpty<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined && (!Array.isArray(entry) || entry.length > 0)),
  ) as T;
}

function omitUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined)) as T;
}

function isTextBlock(block: unknown): block is { type: 'text'; text: string } {
  return typeof block === 'object' && block !== null && 'type' in block && block.type === 'text' && 'text' in block && typeof block.text === 'string';
}

function getPreviewFromContent(content: unknown): string | undefined {
  if (typeof content === 'string') {
    return normalizePreviewText(content);
  }

  if (!Array.isArray(content)) {
    return undefined;
  }

  const textPreview = normalizePreviewText(content.filter(isTextBlock).map((block) => block.text).join(' '));
  if (textPreview) {
    return textPreview;
  }

  const blockTypes = getContentBlockTypes(content);
  if (blockTypes.some((type) => type === 'tool-call' || type === 'toolCall' || type === 'tool_call')) {
    return '[tool call blocks]';
  }
  if (blockTypes.includes('image')) {
    return '[image content]';
  }

  return blockTypes.length > 0 ? '[non-text content]' : undefined;
}

function getPreviewFromUnknown(value: unknown): string | undefined {
  const contentPreview =
    typeof value === 'object' && value !== null && 'content' in value
      ? getPreviewFromContent(value.content)
      : undefined;
  if (contentPreview) {
    return contentPreview;
  }

  if (typeof value === 'string') {
    return normalizePreviewText(value);
  }

  if (Array.isArray(value)) {
    return getPreviewFromContent(value);
  }

  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
    return truncatePreview(String(value));
  }

  if (typeof value === 'object' && value !== null) {
    if ('stdout' in value && typeof value.stdout === 'string') {
      return normalizePreviewText(value.stdout);
    }
    if ('stderr' in value && typeof value.stderr === 'string') {
      return normalizePreviewText(value.stderr);
    }
    if ('message' in value && typeof value.message === 'string') {
      return normalizePreviewText(value.message);
    }
    if ('command' in value && typeof value.command === 'string') {
      return normalizePreviewText(value.command);
    }
    if ('filePath' in value && typeof value.filePath === 'string') {
      return normalizePreviewText(value.filePath);
    }
    if ('url' in value && typeof value.url === 'string') {
      return normalizePreviewText(value.url);
    }
    if ('error' in value && typeof value.error === 'string') {
      return normalizePreviewText(value.error);
    }
    if ('exitCode' in value && typeof value.exitCode === 'number') {
      return `exit code ${value.exitCode}`;
    }
    if ('bytesRead' in value && typeof value.bytesRead === 'number') {
      return `${value.bytesRead} bytes`;
    }
    if ('metadata' in value) {
      return getPreviewFromUnknown(value.metadata);
    }
  }

  return undefined;
}

function getNormalizedStatus(stopReason: StopReason): NormalizedStatus {
  switch (stopReason) {
    case 'stop':
      return 'completed';
    case 'toolUse':
      return 'needs tool';
    case 'length':
      return 'truncated';
    case 'aborted':
      return 'aborted';
    case 'error':
      return 'failed';
  }
}

function getAssistantUpdateStatus(event: AssistantMessageEvent): AssistantUpdateStatus {
  switch (event.type) {
    case 'thinking_delta':
      return 'thinking';
    case 'toolcall_delta':
      return 'preparing tool';
    case 'done':
      return getNormalizedStatus(event.reason);
    case 'error':
      return 'failed';
    default:
      return 'responding';
  }
}

function getEmoji(status: string, subject: LogSubject): string {
  if (status === 'failed') {
    return '❌';
  }
  if (status === 'truncated' || status === 'aborted') {
    return '⚠️';
  }
  if (subject === 'user') {
    return '📨';
  }
  if (subject === 'toolStart') {
    return '🛠';
  }
  if (status === 'completed') {
    return '✅';
  }
  if (subject === 'session') {
    return '❌';
  }

  return '🤖';
}

function buildLogMessage(emoji: string, subject: string, status: string, preview?: string): string {
  return preview ? `${emoji} ${subject} ${status}: ${preview}` : `${emoji} ${subject} ${status}`;
}

function getUserMessageSummary(message: UserMessage) {
  const promptText = typeof message.content === 'string'
    ? message.content
    : message.content.filter(isTextBlock).map((block) => block.text).join(' ');

  return omitUndefinedAndEmpty({
    eventType: 'message_end' as const,
    role: message.role,
    status: 'sent' as const,
    preview: getPreviewFromContent(message.content),
    promptLength: promptText.length,
    timestamp: message.timestamp,
    contentBlockTypes: Array.isArray(message.content) ? getContentBlockTypes(message.content) : undefined,
  });
}

function getFullTextFromContent(content: unknown): string | undefined {
  if (typeof content === 'string') {
    return content;
  }

  if (!Array.isArray(content)) {
    return undefined;
  }

  const text = content.filter(isTextBlock).map((block) => block.text).join('');
  return text.length > 0 ? text : undefined;
}

function getAssistantMessagePayload(message: AssistantMessage) {
  return omitUndefinedAndEmpty({
    eventType: 'message_end',
    role: message.role,
    status: getNormalizedStatus(message.stopReason),
    stopReason: message.stopReason,
    model: message.model,
    responseId: message.responseId,
    usage: message.usage,
    timestamp: message.timestamp,
    contentBlockTypes: getContentBlockTypes(message.content),
    preview: getPreviewFromContent(message.content) ?? normalizePreviewText(message.errorMessage ?? ''),
  });
}

function getToolResultPayload(message: ToolResultMessage) {
  return omitUndefinedAndEmpty({
    eventType: 'message_end',
    role: message.role,
    status: message.isError ? 'failed' : 'completed',
    toolCallId: message.toolCallId,
    toolName: message.toolName,
    isError: message.isError,
    timestamp: message.timestamp,
    contentBlockTypes: getContentBlockTypes(message.content),
    preview: getPreviewFromContent(message.content) ?? (message.isError ? getPreviewFromUnknown(message.details) : undefined),
  });
}

function isAssistantMessage(message: { role: string }): message is AssistantMessage {
  return message.role === 'assistant';
}

function isToolResultMessage(message: { role: string }): message is ToolResultMessage {
  return message.role === 'toolResult';
}

function isUserMessage(message: { role: string }): message is UserMessage {
  return message.role === 'user';
}

function getAssistantUpdateLogLevel(event: AssistantMessageEvent): LogLevel {
  switch (event.type) {
    case 'error':
      return 'error';
    case 'done':
      return getStopReasonLogLevel(event.reason);
    case 'thinking_delta':
    case 'toolcall_delta':
      return 'debug';
    default:
      return 'info';
  }
}

function getAssistantUpdatePayload(event: AssistantMessageEvent) {
  const partial = event.type === 'done' ? event.message : event.type === 'error' ? event.error : event.partial;
  const errorPreview =
    event.type === 'error'
      ? getPreviewFromContent(partial.content) ?? normalizePreviewText(partial.errorMessage ?? '') ?? getPreviewFromUnknown(partial)
      : undefined;

  return omitUndefinedAndEmpty({
    eventType: 'message_update',
    assistantEventType: event.type,
    status: getAssistantUpdateStatus(event),
    stopReason: event.type === 'done' ? partial.stopReason : undefined,
    model: partial.model,
    contentBlockTypes: getContentBlockTypes(partial.content),
    preview: errorPreview ?? getPreviewFromContent(partial.content) ?? normalizePreviewText(partial.errorMessage ?? ''),
  });
}

export function buildStructuredPiEventRecord(event: PiEvent): StructuredPiEventRecord | undefined {
  if (event.type === 'message_update') {
    const assistantEvent = event.assistantMessageEvent;

    if (assistantEvent.type === 'text_delta') {
      return undefined;
    }

    const partial = assistantEvent.type === 'done'
      ? assistantEvent.message
      : assistantEvent.type === 'error'
        ? assistantEvent.error
        : assistantEvent.partial;

    return omitUndefined({
      eventType: 'message_update',
      assistantEventType: assistantEvent.type,
      status: getAssistantUpdateStatus(assistantEvent),
      stopReason: assistantEvent.type === 'done' ? partial.stopReason : undefined,
      model: partial.model,
      preview: getAssistantUpdatePayload(assistantEvent).preview,
      contentBlockTypes: getContentBlockTypes(partial.content),
      content: partial.content,
      errorMessage: partial.errorMessage,
      message: 'message' in partial && typeof partial.message === 'string' ? partial.message : undefined,
    });
  }

  if (event.type === 'message_end') {
    const { message } = event;

    if (isAssistantMessage(message)) {
      return omitUndefined({
        eventType: 'message_end',
        role: message.role,
        status: getNormalizedStatus(message.stopReason),
        stopReason: message.stopReason,
        model: message.model,
        responseId: message.responseId,
        usage: message.usage,
        timestamp: message.timestamp,
        preview: getPreviewFromContent(message.content) ?? normalizePreviewText(message.errorMessage ?? ''),
        contentBlockTypes: getContentBlockTypes(message.content),
        content: message.content,
        errorMessage: message.errorMessage,
      });
    }

    if (isToolResultMessage(message)) {
      return omitUndefined({
        eventType: 'message_end',
        role: message.role,
        status: message.isError ? 'failed' : 'completed',
        toolCallId: message.toolCallId,
        toolName: message.toolName,
        isError: message.isError,
        timestamp: message.timestamp,
        preview: getPreviewFromContent(message.content) ?? (message.isError ? getPreviewFromUnknown(message.details) : undefined),
        contentBlockTypes: getContentBlockTypes(message.content).length > 0 ? getContentBlockTypes(message.content) : undefined,
        content: Array.isArray(message.content) && message.content.length > 0 ? message.content : undefined,
        details: message.details,
      });
    }

    if (isUserMessage(message)) {
      const promptText = getFullTextFromContent(message.content);
      return omitUndefined({
        eventType: 'message_end',
        role: message.role,
        status: 'sent',
        preview: getPreviewFromContent(message.content),
        promptLength: promptText?.length,
        timestamp: message.timestamp,
        contentBlockTypes: Array.isArray(message.content) ? getContentBlockTypes(message.content) : undefined,
        fullContent: promptText,
      });
    }

    return omitUndefined({
      eventType: 'message_end',
      role: message.role,
      status: 'completed',
      preview: getPreviewFromUnknown('content' in message ? message.content : undefined) ?? '[non-standard message]',
      content: 'content' in message ? message.content : undefined,
    });
  }

  if (event.type === 'tool_execution_start') {
    return omitUndefined({
      eventType: 'tool_execution_start',
      status: 'started',
      toolCallId: event.toolCallId,
      toolName: event.toolName,
      preview: getPreviewFromUnknown(event.args),
      args: event.args,
    });
  }

  if (event.type === 'tool_execution_end') {
    return omitUndefined({
      eventType: 'tool_execution_end',
      status: event.isError ? 'failed' : 'completed',
      toolCallId: event.toolCallId,
      toolName: event.toolName,
      preview: getPreviewFromUnknown(event.result),
      isError: event.isError,
      result: event.result,
    });
  }

  if (event.type === 'session_error') {
    return omitUndefined({
      eventType: 'session_error',
      status: 'failed',
      preview: getPreviewFromUnknown('error' in event ? event.error : event),
      error: 'error' in event ? event.error : event,
    });
  }

  return undefined;
}

export function logPiEvent(log: PiLogger, event: PiEvent): void {
  const structuredRecord = buildStructuredPiEventRecord(event);
  if (structuredRecord) {
    appendStructuredLogEvent(structuredRecord);
  }

  if (event.type === 'message_update') {
    const assistantEvent = event.assistantMessageEvent;

    if (assistantEvent.type === 'text_delta') {
      return;
    }

    const payload = getAssistantUpdatePayload(assistantEvent);
    logAtLevel(
      log,
      getAssistantUpdateLogLevel(assistantEvent),
      payload,
      buildLogMessage(getEmoji(payload.status, 'assistant'), payload.model ?? 'assistant', payload.status, payload.preview),
    );
    return;
  }

  if (event.type === 'message_end') {
    const { message } = event;

    if (isAssistantMessage(message)) {
      const payload = getAssistantMessagePayload(message);
      logAtLevel(
        log,
        getStopReasonLogLevel(message.stopReason),
        payload,
        buildLogMessage(getEmoji(payload.status, 'assistant'), message.model ?? 'assistant', payload.status, payload.preview),
      );
      return;
    }

    if (isToolResultMessage(message)) {
      const payload = getToolResultPayload(message);
      logAtLevel(
        log,
        message.isError ? 'warn' : 'info',
        payload,
        buildLogMessage(getEmoji(payload.status, 'tool'), message.toolName, payload.status, payload.preview),
      );
      return;
    }

    if (isUserMessage(message)) {
      const payload = getUserMessageSummary(message);
      logAtLevel(
        log,
        'info',
        payload,
        buildLogMessage(getEmoji(payload.status, 'user'), 'user', payload.status, payload.preview),
      );
      return;
    }

    const preview = getPreviewFromUnknown('content' in message ? message.content : undefined) ?? '[non-standard message]';
    logAtLevel(
      log,
      'info',
      {
        eventType: 'message_end',
        role: message.role,
        status: 'completed',
        preview,
      },
      buildLogMessage('ℹ️', 'message', 'completed', preview),
    );
    return;
  }

  if (event.type === 'tool_execution_start') {
    const preview = getPreviewFromUnknown(event.args);
    const payload = omitUndefinedAndEmpty({
      eventType: 'tool_execution_start' as const,
      status: 'started' as const,
      toolCallId: event.toolCallId,
      toolName: event.toolName,
      preview,
    });
    logAtLevel(
      log,
      'info',
      payload,
      buildLogMessage(getEmoji(payload.status, 'toolStart'), event.toolName, payload.status, payload.preview),
    );
    return;
  }

  if (event.type === 'tool_execution_end') {
    const preview = getPreviewFromUnknown(event.result);
    const payload = omitUndefinedAndEmpty({
      eventType: 'tool_execution_end' as const,
      status: event.isError ? 'failed' as const : 'completed' as const,
      toolCallId: event.toolCallId,
      toolName: event.toolName,
      preview,
      isError: event.isError,
    });
    logAtLevel(
      log,
      event.isError ? 'warn' : 'info',
      payload,
      buildLogMessage(getEmoji(payload.status, 'tool'), event.toolName, payload.status, payload.preview),
    );
    return;
  }

  if (event.type === 'session_error') {
    const payload = omitUndefinedAndEmpty({
      eventType: 'session_error' as const,
      status: 'failed' as const,
      preview: getPreviewFromUnknown('error' in event ? event.error : event),
    });
    logAtLevel(
      log,
      'error',
      payload,
      buildLogMessage(getEmoji(payload.status, 'session'), 'session', payload.status, payload.preview),
    );
  }
}

export class PiRunner implements AgentRunner {
  async runPrompt(options: AgentRunnerOptions): Promise<void> {
    const log: PiLogger = options.logger ?? console;

    const resolvedProvider = resolveConfiguredProvider(options.model);
    applyProviderEnv(resolvedProvider.provider);
    const model = getModel(resolvedProvider.provider, resolvedProvider.modelID as never);
    
    // 2. Create the Agent Session with Pi Coding Agent
    // This automatically supports read, write, edit, bash, and we can configure it to load skills.
    const { session } = await createAgentSession({
      model,
      // Allow the agent to use bash, and we don't disable tools.
      // Pi naturally supports internet browsing via its bash/curl or if it has a built in webfetch tool.
    });

    logAtLevel(log, 'info', { mode: options.mode }, '[PiRunner] session created');

    // Subscribe to event stream for logging
    session.subscribe((event) => {
      if (event.type === 'message_update' && event.assistantMessageEvent?.type === 'text_delta') {
        process.stdout.write(event.assistantMessageEvent.delta);
      }

      logPiEvent(log, event as PiEvent);
    });

    // 3. Load Skills
    const skillsDir = path.join(process.cwd(), '.claude/skills');
    let finalPrompt = options.prompt;
    
    if (fs.existsSync(skillsDir)) {
      const { skills } = loadSkillsFromDir({ dir: skillsDir, source: skillsDir });
      if (skills && skills.length > 0) {
        const skillsText = formatSkillsForPrompt(skills);
        finalPrompt = `${skillsText}\n\n${options.prompt}`;
        logAtLevel(log, 'info', { skillsDir, skillCount: skills.length }, '[PiRunner] loaded skills');
      }
    }

    // Run the prompt
    await session.prompt(finalPrompt);
    
    // Add a trailing newline after generation
    process.stdout.write('\n');
    logAtLevel(log, 'info', { mode: options.mode }, '[PiRunner] prompt execution completed');
  }
}

export function resolveConfiguredProvider(model: string): ResolvedConfiguredProvider {
  const parsedModel = parseModelSpec(model);

  switch (parsedModel.providerID) {
    case 'trader-gemini':
      return {
        configuredProvider: parsedModel.providerID,
        provider: 'google',
        modelID: parsedModel.modelID,
      };
    case 'trader-openai':
      return {
        configuredProvider: parsedModel.providerID,
        provider: 'openai',
        modelID: parsedModel.modelID,
      };
    case 'trader-zen':
      return {
        configuredProvider: parsedModel.providerID,
        provider: 'opencode',
        modelID: parsedModel.modelID,
      };
    case 'google':
    case 'openai':
      return {
        configuredProvider: parsedModel.providerID,
        provider: parsedModel.providerID,
        modelID: parsedModel.modelID,
      } as ResolvedConfiguredProvider;
    default:
      throw new Error(`Unsupported model provider: ${parsedModel.providerID}`);
  }
}

export function applyProviderEnv(provider: KnownProvider): void {
  if (provider === 'google') {
    if (process.env.GEMINI_API_KEY) {
      process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GEMINI_API_KEY;
    }
    return;
  }

  if (provider === 'openai') {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is required for trader-openai models');
    }
  }

  if (provider === 'opencode') {
    if (process.env.ZEN_API_KEY && !process.env.OPENCODE_API_KEY) {
      process.env.OPENCODE_API_KEY = process.env.ZEN_API_KEY;
    }
  }
}
