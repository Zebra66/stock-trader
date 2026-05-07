import { describe, expect, test } from 'bun:test';
import {
  createSerializedScheduledRunner,
  createSerializedRunner,
  getDelayUntilNextHourlyRun,
  getDelayUntilNextTacticalRun,
  getNextHourlyRunAt,
  getNextTacticalRunAt,
  parseHarnessArgs,
  runMarketGatedAgent,
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
  test('hourly delay aligns to :35 past the current hour', () => {
    // now = 09:07:15 UTC; minutes=7 < 35, so next target = 09:35:00 UTC
    // delay = 27 min 45 s = 1665 s
    const now = new Date('2026-05-04T09:07:15.000Z');

    expect(getDelayUntilNextHourlyRun(now)).toBe(27 * 60 * 1000 + 45 * 1000);
  });

  test('hourly next run timestamp lands on :35 of the current hour when before :35', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');

    expect(getNextHourlyRunAt(now).toISOString()).toBe('2026-05-04T09:35:00.000Z');
  });

  test('hourly rolls over to :35 of next hour when already past :35', () => {
    // now = 09:40:00 UTC; minutes=40 >= 35, so next target = 10:35:00 UTC
    const now = new Date('2026-05-04T09:40:00.000Z');

    expect(getNextHourlyRunAt(now).toISOString()).toBe('2026-05-04T10:35:00.000Z');
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

describe('harness run serialization', () => {
  test('queues same-mode agent runs in order', async () => {
    const events: string[] = [];
    let releaseHourly: (() => void) | undefined;
    const hourlyStarted = Promise.withResolvers<void>();
    let hourlyRuns = 0;

    const runSerialized = createSerializedRunner(async (mode) => {
      events.push(`start:${mode}`);

      if (mode === 'hourly') {
        hourlyRuns += 1;
        if (hourlyRuns === 1) {
          hourlyStarted.resolve();
          await new Promise<void>((resolve) => {
            releaseHourly = resolve;
          });
        }
      }

      events.push(`end:${mode}`);
    });

    const hourlyRun = runSerialized('hourly');
    await hourlyStarted.promise;
    const secondHourlyRun = runSerialized('hourly');

    await Promise.resolve();
    expect(events).toEqual(['start:hourly']);

    releaseHourly?.();
    await Promise.all([hourlyRun, secondHourlyRun]);

    expect(events).toEqual(['start:hourly', 'end:hourly', 'start:hourly', 'end:hourly']);
  });

  test('allows tactical and hourly runs to proceed independently', async () => {
    const events: string[] = [];
    let releaseHourly: (() => void) | undefined;
    const hourlyStarted = Promise.withResolvers<void>();

    const runSerialized = createSerializedRunner(async (mode) => {
      events.push(`start:${mode}`);

      if (mode === 'hourly') {
        hourlyStarted.resolve();
        await new Promise<void>((resolve) => {
          releaseHourly = resolve;
        });
      }

      events.push(`end:${mode}`);
    });

    const hourlyRun = runSerialized('hourly');
    await hourlyStarted.promise;
    const tacticalRun = runSerialized('tactical');

    await tacticalRun;
    expect(events).toEqual(['start:hourly', 'start:tactical', 'end:tactical']);

    releaseHourly?.();
    await hourlyRun;

    expect(events).toEqual(['start:hourly', 'start:tactical', 'end:tactical', 'end:hourly']);
  });

  test('rechecks market status after a same-mode queued run waits behind another run', async () => {
    const events: string[] = [];
    let marketOpen = true;
    let releaseHourly: (() => void) | undefined;
    const hourlyStarted = Promise.withResolvers<void>();

    const runSerialized = createSerializedScheduledRunner((mode, options) => runMarketGatedAgent(mode, options, {
      isMarketOpen: async () => marketOpen,
      runGitPull: async (pullMode) => {
        events.push(`pull:${pullMode}`);
      },
      spawnAgent: async (mode) => {
        events.push(`start:${mode}`);
        if (mode === 'hourly') {
          hourlyStarted.resolve();
          await new Promise<void>((resolve) => {
            releaseHourly = resolve;
          });
        }
        events.push(`end:${mode}`);
      },
    }));

    const hourlyRun = runSerialized('hourly', { forceRun: false });
    await hourlyStarted.promise;

    marketOpen = false;
    const secondHourlyRun = runSerialized('hourly', { forceRun: false });

    releaseHourly?.();
    await Promise.all([hourlyRun, secondHourlyRun]);

    expect(events).toEqual(['pull:hourly', 'start:hourly', 'end:hourly']);
  });
});
