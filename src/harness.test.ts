import { describe, expect, test } from 'bun:test';
import {
  getDelayUntilNextHourlyRun,
  getDelayUntilNextTacticalRun,
  getNextHourlyRunAt,
  getNextTacticalRunAt,
  parseHarnessArgs,
  shouldRunWhenMarketClosed,
} from './harness';

describe('harness CLI args', () => {
  test('parses --force-run', () => {
    expect(parseHarnessArgs(['--force-run'])).toEqual({
      forceRun: true,
      help: false,
    });
  });

  test('parses --help', () => {
    expect(parseHarnessArgs(['--help'])).toEqual({
      forceRun: false,
      help: true,
    });
  });

  test('defaults to no flags', () => {
    expect(parseHarnessArgs([])).toEqual({
      forceRun: false,
      help: false,
    });
  });
});

describe('harness market gate', () => {
  test('does not run closed-market cycles by default', () => {
    expect(shouldRunWhenMarketClosed(false)).toBe(false);
  });

  test('runs closed-market cycles in force-run mode', () => {
    expect(shouldRunWhenMarketClosed(true)).toBe(true);
  });
});

describe('harness scheduler alignment', () => {
  test('hourly delay aligns to the top of the next hour', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');

    expect(getDelayUntilNextHourlyRun(now)).toBe(52 * 60 * 1000 + 45 * 1000);
  });

  test('hourly next run timestamp lands on the next top of hour', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');

    expect(getNextHourlyRunAt(now).toISOString()).toBe('2026-05-04T10:00:00.000Z');
  });

  test('tactical delay aligns to the next 10-minute boundary after startup', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');

    expect(getDelayUntilNextTacticalRun(now)).toBe(2 * 60 * 1000 + 45 * 1000);
  });

  test('tactical next run timestamp lands on the next tactical boundary', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');

    expect(getNextTacticalRunAt(now).toISOString()).toBe('2026-05-04T09:10:00.000Z');
  });

  test('tactical skips :00 and waits for :10', () => {
    const now = new Date('2026-05-04T10:00:05.000Z');

    expect(getDelayUntilNextTacticalRun(now)).toBe(9 * 60 * 1000 + 55 * 1000);
  });

  test('tactical rolls over to the next hour after :50', () => {
    const now = new Date('2026-05-04T09:58:00.000Z');

    expect(getDelayUntilNextTacticalRun(now)).toBe(12 * 60 * 1000);
  });
});
