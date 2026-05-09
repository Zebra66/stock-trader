import { describe, expect, test } from 'bun:test';

import { deriveLogSeverity } from './log_severity';

describe('deriveLogSeverity', () => {
  test('keeps non-default Cloud Logging severities', () => {
    expect(deriveLogSeverity('ERROR', '2026-05-07 17:42:37.445 EDT | INFO  | agent | something')).toBe('ERROR');
  });

  test('derives severity from formatted ERROR log lines', () => {
    expect(deriveLogSeverity('DEFAULT', '2026-05-07 17:42:37.445 EDT | ERROR | agent | tool failed')).toBe('ERROR');
  });

  test('derives severity from formatted WARN log lines', () => {
    expect(deriveLogSeverity('DEFAULT', '2026-05-07 17:42:37.445 EDT | WARN | agent | tool failed')).toBe('WARNING');
  });

  test('derives severity from formatted INFO and DEBUG log lines', () => {
    expect(deriveLogSeverity(undefined, '2026-05-07 17:42:37.445 EDT | INFO  | agent | tool succeeded')).toBe('INFO');
    expect(deriveLogSeverity('DEFAULT', '2026-05-07 17:42:37.445 EDT | DEBUG | agent | extra detail')).toBe('DEBUG');
  });

  test('falls back to DEFAULT when no pattern matches', () => {
    expect(deriveLogSeverity('DEFAULT', 'plain text message')).toBe('DEFAULT');
  });
});
