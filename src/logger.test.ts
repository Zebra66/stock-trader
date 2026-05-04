import { describe, expect, test } from 'bun:test';
import { extractCallerLocation, formatLogLine } from './logger';

describe('logger formatting', () => {
  test('formats lines in Nasdaq timezone with timezone suffix', () => {
    const line = formatLogLine({
      time: '2026-05-04T14:32:11.123Z',
      level: 30,
      module: 'pi_runner',
      msg: 'assistant message',
      stopReason: 'toolUse',
    });

    expect(line).toBe(
      '2026-05-04 10:32:11.123 EDT | INFO  | pi_runner | assistant message  stopReason="toolUse"',
    );
  });

  test('includes line number when caller metadata is present', () => {
    const line = formatLogLine({
      time: '2026-05-04T14:32:11.123Z',
      level: 50,
      module: 'pi_runner',
      caller: '173',
      msg: 'assistant message',
      stopReason: 'error',
    });

    expect(line).toBe(
      '2026-05-04 10:32:11.123 EDT | ERROR | pi_runner:173 | assistant message  stopReason="error"',
    );
  });
});

describe('logger caller extraction', () => {
  test('extracts a line number from an app stack frame', () => {
    const caller = extractCallerLocation([
      'Error',
      '    at mixin (/Users/zbenzuk/Documents/git/ziv/stock-trader/src/logger.ts:88:12)',
      '    at runPrompt (/Users/zbenzuk/Documents/git/ziv/stock-trader/src/pi_runner.ts:173:9)',
      '    at main (/Users/zbenzuk/Documents/git/ziv/stock-trader/src/agent.ts:27:3)',
    ].join('\n'));

    expect(caller).toBe('173');
  });
});
