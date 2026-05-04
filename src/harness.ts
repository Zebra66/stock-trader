import './env';
import { isMarketOpen } from './tools/alpaca_cli';
import { getLogger } from './logger';

const logger = getLogger('harness');
const TACTICAL_MINUTES = [10, 20, 30, 40, 50] as const;

let isPaused = false;
const repoRoot = new URL('..', import.meta.url).pathname;

export function setPaused(paused: boolean) {
  isPaused = paused;
  logger.info({ paused: isPaused }, 'Trading paused state updated');
}

export function getPaused() {
  return isPaused;
}

async function runGitPull(): Promise<void> {
  try {
    await Bun.$`git pull origin main`.quiet();
    logger.info('Git pull completed');
  } catch {
    logger.warn('Git pull skipped or failed');
  }
}

async function spawnAgent(mode: 'hourly' | 'tactical'): Promise<void> {
  if (isPaused && mode === 'tactical') {
    logger.info('Trading is paused. Skipping tactical agent');
    return;
  }
  logger.info({ mode }, 'Spawning agent');
  const proc = Bun.spawn(['bun', 'run', 'src/agent.ts', mode], {
    stdout: 'inherit',
    stderr: 'inherit',
    cwd: repoRoot,
  });
  await proc.exited;
}

export function getDelayUntilNextHourlyRun(now: Date): number {
  return getNextHourlyRunAt(now).getTime() - now.getTime();
}

export function getDelayUntilNextTacticalRun(now: Date): number {
  return getNextTacticalRunAt(now).getTime() - now.getTime();
}

export function getNextHourlyRunAt(now: Date): Date {
  const next = new Date(now);

  next.setMinutes(0, 0, 0);
  next.setHours(next.getHours() + 1);

  return next;
}

export function getNextTacticalRunAt(now: Date): Date {
  const next = new Date(now);
  const nextMinute = TACTICAL_MINUTES.find((minute) => minute > now.getMinutes());

  if (nextMinute === undefined) {
    next.setHours(next.getHours() + 1);
    next.setMinutes(TACTICAL_MINUTES[0], 0, 0);
  } else {
    next.setMinutes(nextMinute, 0, 0);
  }

  return next;
}

async function runWhenMarketOpen(mode: 'hourly' | 'tactical'): Promise<void> {
  const open = await isMarketOpen();
  if (!open) {
    logger.info({ mode }, 'Market is closed. Skipping scheduled run');
    return;
  }

  // Only pull when the market is open — no point syncing code when nothing can trade
  await runGitPull();

  // NOTE: agent.ts is spawned as a fresh child process every cycle, so it always
  // picks up any code changes that arrived via git pull automatically.
  // The harness process itself (this file) does NOT auto-reload after a git pull —
  // it must be restarted manually if harness.ts itself changes.

  await spawnAgent(mode);
}

function scheduleAlignedRun(
  mode: 'hourly' | 'tactical',
  getNextRunAt: (now: Date) => Date,
): void {
  const now = new Date();
  const nextRunAt = getNextRunAt(now);
  const delay = nextRunAt.getTime() - now.getTime();

  logger.info({ mode, delayMs: delay, nextRunAt: nextRunAt.toISOString() }, 'Scheduled next aligned run');

  setTimeout(async () => {
    try {
      await runWhenMarketOpen(mode);
    } finally {
      scheduleAlignedRun(mode, getNextRunAt);
    }
  }, delay);
}

async function runStartupCycle(): Promise<void> {
  await runWhenMarketOpen('hourly');
  await runWhenMarketOpen('tactical');
}

export async function startHarnessLoop(): Promise<void> {
  logger.info({ repoRoot }, 'Starting Autonomous Harness Loop');

  // Start web server — shares process memory for the pause toggle
  await import('./web/server');

  // Run both jobs once on startup, then switch to wall-clock aligned scheduling.
  await runStartupCycle();

  scheduleAlignedRun('hourly', getNextHourlyRunAt);
  scheduleAlignedRun('tactical', getNextTacticalRunAt);
}

if (import.meta.main) {
  startHarnessLoop();
}
