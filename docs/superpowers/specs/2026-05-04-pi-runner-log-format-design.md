# PiRunner Log Format Design

## Goal

Replace verbose Pi event dumps with short human-readable log messages while preserving compact structured payloads that still include prompt and response text previews when available.

## Scope

This change applies to `logPiEvent()` in `src/pi_runner.ts` and the tests in `src/pi_runner.test.ts`.

It does not change:

- Pi session behavior
- stdout streaming of `text_delta`
- model execution flow
- logger interface shape (`logger.info(payload, message)` and peers)

## Problem

Current logs emit large raw payloads such as full `piMessage`, `partialMessage`, raw tool args, and raw tool results. They are hard to scan in terminal output and bury the main information:

- what event happened
- which tool or model was involved
- whether it started, completed, or failed
- what prompt or response text was actually sent

## Design Summary

Each log entry will continue to call the existing logger with two values:

1. A compact structured payload for filtering and tests
2. A short message string optimized for humans scanning logs

The message string becomes the primary readable output. The payload remains structured, but raw nested Pi objects are removed from normal logs.

## Message Format

Format:

`<emoji> <subject> <status>: <preview>`

Examples:

- `📨 user sent: Buy 100 shares of AAPL if...`
- `🤖 gpt-5.4 responding: I’ll inspect the trading config...`
- `🛠 bash started: git status`
- `✅ bash completed: On branch main...`
- `❌ read failed: file not found`
- `⚠️ gpt-5.4 truncated: response hit token limit`

## Payload Shape

All event payloads should be normalized to a compact shape. Fields are included only when relevant.

Shared fields:

- `eventType`
- `status`
- `preview`

Context fields by event:

- `role`
- `model`
- `toolName`
- `toolCallId`
- `responseId`
- `timestamp`
- `stopReason`
- `usage`
- `contentBlockTypes`
- `promptLength`
- `isError`

Raw fields to remove from normal logs:

- `piMessage`
- `partialMessage`
- raw nested `args`
- raw nested `result`
- large `details` objects unless reduced to a short preview

## Preview Extraction Rules

Default preview length is 200 characters.

Preview extraction rules:

1. If content is plain text, use that text.
2. If content is block-based, join all text blocks with spaces.
3. If no text blocks exist, fall back to a short structural label such as:
   - `[tool call blocks]`
   - `[image content]`
   - `[non-text content]`
4. Trim whitespace and collapse repeated internal whitespace.
5. Truncate to 200 characters.
6. Empty previews should be omitted rather than logged as empty strings.

Tool arg/result previews follow the same 200-character cap. Non-string values should be converted to a concise string summary before truncation.

## Status Normalization

Stop reason to status mapping:

- `stop` -> `completed`
- `toolUse` -> `needs tool`
- `length` -> `truncated`
- `aborted` -> `aborted`
- `error` -> `failed`

Assistant update mapping:

- `thinking_delta` -> `thinking`
- `toolcall_delta` -> `preparing tool`
- `done` -> status from the final stop reason mapping
- `error` -> `failed`
- other non-text-delta updates -> `responding`

Tool execution mapping:

- start -> `started`
- successful end -> `completed`
- error end -> `failed`

User message mapping:

- `message_end` for user role -> `sent`

## Emoji Mapping

- `📨` user prompt sent
- `🤖` assistant/model activity
- `🛠` tool execution start
- `✅` successful completion
- `❌` failure
- `⚠️` warning states such as `truncated` or `aborted`

Selection rule:

- use `❌` for failures
- use `⚠️` for warning-like terminal states
- use `✅` for successful tool or assistant completion
- use `🤖` for in-progress assistant updates
- use `🛠` for tool start
- use `📨` for user prompt summaries

## Event-Specific Behavior

### `message_end` for `role: user`

Message example:

- `📨 user sent: Buy 100 shares of AAPL if...`

Payload:

- `eventType: "message_end"`
- `role: "user"`
- `status: "sent"`
- `preview`
- `promptLength`
- `timestamp`
- `contentBlockTypes` when block-based

This keeps the prompt visible in logs, limited to the preview length.

### `message_update`

`text_delta` continues to be suppressed from logger output and streamed directly to stdout as today.

All other assistant updates emit a compact log.

Message examples:

- `🤖 gpt-5.4 thinking: considering stop loss thresholds`
- `🤖 gpt-5.4 preparing tool: bash git status`
- `❌ gpt-5.4 failed: provider error`
- `✅ gpt-5.4 completed: final answer text`

Payload:

- `eventType: "message_update"`
- `status`
- `assistantEventType`
- `model`
- `preview`
- `stopReason` when present
- `contentBlockTypes`

### `message_end` for `role: assistant`

Message examples:

- `✅ gpt-5.4 completed: I updated the trading strategy...`
- `⚠️ gpt-5.4 truncated: partial response text`
- `❌ gpt-5.4 failed: provider failed`

Payload:

- `eventType: "message_end"`
- `role: "assistant"`
- `status`
- `model`
- `preview`
- `stopReason`
- `responseId`
- `usage`
- `timestamp`
- `contentBlockTypes`

### `message_end` for `role: toolResult`

Message examples:

- `✅ bash completed: On branch main`
- `❌ read failed: file not found`

Payload:

- `eventType: "message_end"`
- `role: "toolResult"`
- `status`
- `toolName`
- `toolCallId`
- `preview`
- `timestamp`
- `contentBlockTypes`
- `isError`

`details` should only be preserved if reduced to a concise preview-worthy field in the future; the initial implementation should omit the raw object.

### `message_end` for unknown roles

Message example:

- `ℹ️ message completed: [non-standard message]`

Payload:

- `eventType: "message_end"`
- `role`
- `status: "completed"`
- `preview` when extractable

### `tool_execution_start`

Message example:

- `🛠 bash started: git status`

Payload:

- `eventType: "tool_execution_start"`
- `status: "started"`
- `toolName`
- `toolCallId`
- `preview` from args

### `tool_execution_end`

Message examples:

- `✅ read completed: file contents preview`
- `❌ bash failed: exit code 1`

Payload:

- `eventType: "tool_execution_end"`
- `status`
- `toolName`
- `toolCallId`
- `preview` from result
- `isError`

### `session_error`

Message example:

- `❌ session failed: unexpected session error`

Payload:

- `eventType: "session_error"`
- `status: "failed"`
- `preview`

## Implementation Notes

Keep the change localized to `src/pi_runner.ts` by adding small formatter helpers:

- preview extraction from strings and content blocks
- status normalization
- emoji selection
- subject selection (`user`, model name, tool name, `session`)
- final message assembly

Tests in `src/pi_runner.test.ts` should be updated to assert:

- readable message strings
- compact payload fields
- prompt and response previews are present when available
- raw `piMessage` and `partialMessage` are no longer logged

## Non-Goals

- configurable preview lengths in this change
- redaction or secret detection logic beyond the 200-character cap
- changing the logger transport format outside PiRunner
- changing stdout token streaming behavior

## Open Decisions Resolved

- Keep prompt text visible: yes, as a 200-character preview
- Keep response text visible: yes, as a 200-character preview
- Preserve structured payloads: yes, but compact and normalized
- Keep current `text_delta` suppression: yes

## Risks

- Prompt previews may still include sensitive text if callers send secrets. This is an accepted trade-off for observability in the current design.
- Non-text tool results may require iterative tuning so previews remain useful.
- Tests that currently expect raw Pi objects will need to be updated.
