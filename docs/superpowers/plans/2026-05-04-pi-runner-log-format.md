# PiRunner Log Format Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace PiRunner's verbose event dumps with short readable log lines and compact payloads that still include 200-character prompt and response previews when available.

**Architecture:** Keep the change localized to `src/pi_runner.ts` by introducing small helpers for preview extraction, status normalization, emoji selection, and final message assembly. Update `src/pi_runner.test.ts` to assert the new message strings and payload fields, including prompt and response previews and the absence of raw Pi message objects.

**Tech Stack:** Bun, TypeScript, `bun:test`, Pi agent session event types from `@mariozechner/pi-ai` and `@mariozechner/pi-coding-agent`

---

## File Map

- Modify: `src/pi_runner.ts`
  Responsibility: normalize Pi event data into short message strings and compact payloads.
- Modify: `src/pi_runner.test.ts`
  Responsibility: verify the normalized log output and severity mapping.
- Reference: `docs/superpowers/specs/2026-05-04-pi-runner-log-format-design.md`
  Responsibility: approved behavior spec for the logging format.

### Task 1: Add failing tests for the new log format

**Files:**
- Modify: `src/pi_runner.test.ts`
- Reference: `docs/superpowers/specs/2026-05-04-pi-runner-log-format-design.md`

- [ ] **Step 1: Replace the old raw-payload expectations with preview-based expectations**

Update the existing tests so they verify human-readable messages and compact payloads instead of `piMessage` passthroughs.

Use assertions shaped like this:

```ts
expect(logs[0]).toMatchObject({
  level: 'error',
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
expect(logs[0].payload).not.toHaveProperty('piMessage');
```

- [ ] **Step 2: Add an assistant `message_end` test that requires a preview-based success message**

Add a test that exercises a final assistant response and checks both the compact payload and readable message.

```ts
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
});
```

- [ ] **Step 3: Add a `message_update` test for assistant progress status and preview content**

Add a test that verifies non-`text_delta` updates become compact progress logs.

```ts
test('logs assistant message_update events with model status and preview', () => {
  const { logger, logs } = createCapturingLogger();

  logPiEvent(logger, {
    type: 'message_update',
    assistantMessageEvent: {
      type: 'toolcall_delta',
      partial: {
        role: 'assistant',
        model: 'gpt-5.4',
        content: [{ type: 'text', text: 'bash git status' }],
      },
    },
  } as never);

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
});
```

- [ ] **Step 4: Add a user prompt summary test that preserves prompt preview visibility**

Keep the prompt visible through a capped preview and assert the summary message.

```ts
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
});
```

- [ ] **Step 5: Run the PiRunner test file and confirm it fails against the old implementation**

Run:

```sh
bun test src/pi_runner.test.ts
```

Expected: FAIL because the current implementation still emits messages like `[PiRunner] tool result message` and still includes raw `piMessage` data.

### Task 2: Implement preview extraction and normalized log formatting

**Files:**
- Modify: `src/pi_runner.ts`

- [ ] **Step 1: Add helpers for text extraction, preview truncation, and status normalization**

Insert focused helpers near the existing payload helpers.

```ts
function collapseWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function truncatePreview(value: string, maxLength = 200): string {
  return value.length <= maxLength ? value : `${value.slice(0, maxLength)}...`;
}

function getPreviewFromContent(content: unknown): string | undefined {
  if (typeof content === 'string') {
    const preview = truncatePreview(collapseWhitespace(content));
    return preview.length > 0 ? preview : undefined;
  }

  if (!Array.isArray(content)) {
    return undefined;
  }

  const text = collapseWhitespace(
    content
      .filter((block): block is { type: 'text'; text: string } => typeof block === 'object' && block !== null && 'type' in block && block.type === 'text' && 'text' in block && typeof block.text === 'string')
      .map((block) => block.text)
      .join(' '),
  );

  if (text.length > 0) {
    return truncatePreview(text);
  }

  const blockTypes = getContentBlockTypes(content);
  if (blockTypes.includes('tool-call')) {
    return '[tool call blocks]';
  }
  if (blockTypes.includes('image')) {
    return '[image content]';
  }
  return blockTypes.length > 0 ? '[non-text content]' : undefined;
}

function getNormalizedStatus(stopReason: StopReason): 'completed' | 'needs tool' | 'truncated' | 'aborted' | 'failed' {
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
```

- [ ] **Step 2: Add message formatting helpers for emoji, subject, and final human-readable lines**

Build small helpers instead of inlining string concatenation inside `logPiEvent()`.

```ts
function getEmoji(status: string, subject: 'user' | 'assistant' | 'toolStart' | 'tool' | 'session'): string {
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
```

- [ ] **Step 3: Replace assistant, tool result, and user payload builders with compact normalized payloads**

Update the current payload helpers so they emit only the fields required by the spec.

```ts
function getAssistantMessagePayload(message: AssistantMessage) {
  return {
    eventType: 'message_end',
    role: message.role,
    status: getNormalizedStatus(message.stopReason),
    stopReason: message.stopReason,
    model: message.model,
    responseId: message.responseId,
    usage: message.usage,
    timestamp: message.timestamp,
    contentBlockTypes: getContentBlockTypes(message.content),
    preview: getPreviewFromContent(message.content) ?? message.errorMessage,
  };
}

function getToolResultPayload(message: ToolResultMessage) {
  return {
    eventType: 'message_end',
    role: message.role,
    status: message.isError ? 'failed' : 'completed',
    toolCallId: message.toolCallId,
    toolName: message.toolName,
    isError: message.isError,
    timestamp: message.timestamp,
    contentBlockTypes: getContentBlockTypes(message.content),
    preview: getPreviewFromContent(message.content),
  };
}

function getUserMessageSummary(message: UserMessage) {
  const preview = getPreviewFromContent(message.content);
  const promptLength = typeof message.content === 'string'
    ? message.content.length
    : collapseWhitespace(
        message.content
          .filter((block): block is { type: 'text'; text: string } => block.type === 'text')
          .map((block) => block.text)
          .join(' '),
      ).length;

  return {
    eventType: 'message_end',
    role: message.role,
    status: 'sent' as const,
    preview,
    promptLength,
    timestamp: message.timestamp,
    contentBlockTypes: Array.isArray(message.content) ? getContentBlockTypes(message.content) : undefined,
  };
}
```

- [ ] **Step 4: Replace the `message_update`, `message_end`, `tool_execution_start`, `tool_execution_end`, and `session_error` log calls**

Update `logPiEvent()` so each branch uses the new payload plus a readable message string.

```ts
if (event.type === 'message_update') {
  const assistantEvent = event.assistantMessageEvent;
  if (assistantEvent.type === 'text_delta') {
    return;
  }

  const payload = getAssistantUpdatePayload(assistantEvent);
  const message = buildLogMessage(
    getEmoji(payload.status, 'assistant'),
    payload.model ?? 'assistant',
    payload.status,
    payload.preview,
  );

  logAtLevel(log, getAssistantUpdateLogLevel(assistantEvent), payload, message);
  return;
}
```

Apply the same pattern to the remaining branches:

- assistant `message_end` -> subject `message.model ?? 'assistant'`
- tool result `message_end` -> subject `message.toolName`
- user `message_end` -> subject `user`
- `tool_execution_start` -> subject `event.toolName`, status `started`
- `tool_execution_end` -> subject `event.toolName`, status based on `event.isError`
- `session_error` -> subject `session`, status `failed`

- [ ] **Step 5: Run the PiRunner test file and make the new expectations pass**

Run:

```sh
bun test src/pi_runner.test.ts
```

Expected: PASS for the updated logging tests.

### Task 3: Cover edge cases and verify the full test pass

**Files:**
- Modify: `src/pi_runner.test.ts`
- Modify: `src/pi_runner.ts` if needed for fixes

- [ ] **Step 1: Add or adjust one edge-case test for preview fallback behavior**

Ensure non-text content still yields a useful preview label.

```ts
test('falls back to a structural preview for non-text tool results', () => {
  const { logger, logs } = createCapturingLogger();

  logPiEvent(logger, {
    type: 'message_end',
    message: {
      role: 'toolResult',
      toolCallId: 'tool-3',
      toolName: 'read',
      isError: false,
      timestamp: 3,
      content: [{ type: 'image' }],
    },
  } as never);

  expect(logs[0]).toMatchObject({
    message: '✅ read completed: [image content]',
    payload: {
      preview: '[image content]',
      contentBlockTypes: ['image'],
    },
  });
});
```

- [ ] **Step 2: Run the focused test file again**

Run:

```sh
bun test src/pi_runner.test.ts
```

Expected: PASS with all new logging assertions.

- [ ] **Step 3: Run the full project test suite**

Run:

```sh
bun test
```

Expected: PASS, or at minimum no regressions caused by the PiRunner logging change.

- [ ] **Step 4: Review the diff to confirm the change stayed localized**

Run:

```sh
git diff -- src/pi_runner.ts src/pi_runner.test.ts docs/superpowers/specs/2026-05-04-pi-runner-log-format-design.md docs/superpowers/plans/2026-05-04-pi-runner-log-format.md
```

Expected: only the formatter helpers, log payload/message changes, updated tests, and planning docs are present.
