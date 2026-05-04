import './env';
import { isMarketOpen } from './tools/alpaca_cli';
import { getLogger } from './logger';

const logger = getLogger('harness');

let isPaused = false;
let lastHourlyRun = 0;
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

async function runCycle(): Promise<void> {
  const open = await isMarketOpen();
  if (!open) {
    logger.info('Market is closed. Skipping cycle');
    return;
  }

  // Only pull when the market is open — no point syncing code when nothing can trade
  await runGitPull();

  // NOTE: agent.ts is spawned as a fresh child process every cycle, so it always
  // picks up any code changes that arrived via git pull automatically.
  // The harness process itself (this file) does NOT auto-reload after a git pull —
  // it must be restarted manually if harness.ts itself changes.

  const now = Date.now();
  if (now - lastHourlyRun > 3_600_000) {
    await spawnAgent('hourly');
    lastHourlyRun = Date.now();
  }

  await spawnAgent('tactical');
}

export async function startHarnessLoop(): Promise<void> {
  logger.info({ repoRoot }, 'Starting Autonomous Harness Loop');

  // Start web server — shares process memory for the pause toggle
  await import('./web/server');

  // Run an initial cycle immediately, then every 10 minutes
  await runCycle();
  setInterval(runCycle, 600_000); // [mili-seconds]
}

if (import.meta.main) {
  startHarnessLoop();
}
