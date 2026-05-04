import { AgentRunner, AgentRunnerOptions } from './runner_interface';
import { createAgentSession, loadSkillsFromDir, formatSkillsForPrompt } from '@mariozechner/pi-coding-agent';
import type { AgentSessionEvent } from '@mariozechner/pi-coding-agent';
import { getModel } from '@mariozechner/pi-ai';
import type { AssistantMessage, AssistantMessageEvent, KnownProvider, StopReason, ToolResultMessage, UserMessage } from '@mariozechner/pi-ai';
import { parseModelSpec } from './agent_config';
import fs from 'fs';
import path from 'path';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

type PiEvent = AgentSessionEvent | { type: 'session_error'; [key: string]: unknown };

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

function getUserMessageSummary(message: UserMessage) {
  if (typeof message.content === 'string') {
    return {
      contentKind: 'text',
      textLength: message.content.length,
      textPreview: message.content.slice(0, 200),
    };
  }

  const textPreview = message.content
    .filter((block): block is { type: 'text'; text: string } => block.type === 'text')
    .map((block) => block.text)
    .join(' ')
    .slice(0, 200);

  return {
    contentKind: 'blocks',
    contentBlockTypes: getContentBlockTypes(message.content),
    textPreview,
  };
}

function getAssistantMessagePayload(message: AssistantMessage) {
  return {
    eventType: 'message_end',
    role: message.role,
    stopReason: message.stopReason,
    errorMessage: message.errorMessage,
    api: message.api,
    provider: message.provider,
    model: message.model,
    responseModel: message.responseModel,
    responseId: message.responseId,
    usage: message.usage,
    timestamp: message.timestamp,
    contentBlockTypes: getContentBlockTypes(message.content),
    piMessage: message,
  };
}

function getToolResultPayload(message: ToolResultMessage) {
  return {
    eventType: 'message_end',
    role: message.role,
    toolCallId: message.toolCallId,
    toolName: message.toolName,
    isError: message.isError,
    timestamp: message.timestamp,
    contentBlockTypes: getContentBlockTypes(message.content),
    details: message.details,
    piMessage: message,
  };
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

  return {
    eventType: 'message_update',
    assistantEventType: event.type,
    role: partial.role,
    stopReason: partial.stopReason,
    errorMessage: partial.errorMessage,
    provider: partial.provider,
    model: partial.model,
    contentBlockTypes: getContentBlockTypes(partial.content),
    partialMessage: partial,
  };
}

export function logPiEvent(log: PiLogger, event: PiEvent): void {
  if (event.type === 'message_update') {
    const assistantEvent = event.assistantMessageEvent;

    if (assistantEvent.type === 'text_delta') {
      return;
    }

    logAtLevel(
      log,
      getAssistantUpdateLogLevel(assistantEvent),
      getAssistantUpdatePayload(assistantEvent),
      `[PiRunner] assistant ${assistantEvent.type}`,
    );
    return;
  }

  if (event.type === 'message_end') {
    const { message } = event;

    if (isAssistantMessage(message)) {
      logAtLevel(
        log,
        getStopReasonLogLevel(message.stopReason),
        getAssistantMessagePayload(message),
        '[PiRunner] assistant message',
      );
      return;
    }

    if (isToolResultMessage(message)) {
      logAtLevel(
        log,
        message.isError ? 'error' : 'info',
        getToolResultPayload(message),
        '[PiRunner] tool result message',
      );
      return;
    }

    if (isUserMessage(message)) {
      logAtLevel(
        log,
        'info',
        {
          eventType: 'message_end',
          role: message.role,
          timestamp: message.timestamp,
          ...getUserMessageSummary(message),
        },
        '[PiRunner] user message summary',
      );
      return;
    }

    logAtLevel(
      log,
      'info',
      {
        eventType: 'message_end',
        role: message.role,
        piMessage: message,
      },
      '[PiRunner] non-standard message',
    );
    return;
  }

  if (event.type === 'tool_execution_start') {
    logAtLevel(
      log,
      'info',
      {
        eventType: 'tool_execution_start',
        toolCallId: event.toolCallId,
        toolName: event.toolName,
        args: event.args,
      },
      '[PiRunner] tool execution start',
    );
    return;
  }

  if (event.type === 'tool_execution_end') {
    logAtLevel(
      log,
      event.isError ? 'error' : 'info',
      {
        eventType: 'tool_execution_end',
        toolCallId: event.toolCallId,
        toolName: event.toolName,
        isError: event.isError,
        result: event.result,
      },
      '[PiRunner] tool execution end',
    );
    return;
  }

  if (event.type === 'session_error') {
    logAtLevel(
      log,
      'error',
      {
        eventType: 'session_error',
        piEvent: event,
      },
      '[PiRunner] session error',
    );
  }
}

export class PiRunner implements AgentRunner {
  async runPrompt(options: AgentRunnerOptions): Promise<void> {
    const log: PiLogger = options.logger ?? console;
    
    // Map the GEMINI_API_KEY to the env var expected by the Google provider in pi-ai
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY && process.env.GEMINI_API_KEY) {
      process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GEMINI_API_KEY;
    }
    
    // 1. Configure the Google model
    const parsedModel = parseModelSpec(options.model);
    // parseModelSpec returns providerID and modelID. 
    // We map trader-gemini to google for pi-ai.
    const provider = (parsedModel.providerID === 'trader-gemini' ? 'google' : parsedModel.providerID) as KnownProvider;
    const model = getModel(provider, parsedModel.modelID as never);
    
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
