import { isMarketOpen } from './tools/alpaca_cli';

let isPaused = false;
let lastHourlyRun = 0;

export function setPaused(paused: boolean) {
  isPaused = paused;
  console.log(`Trading paused state set to: ${isPaused}`);
}

export function getPaused() {
  return isPaused;
}

async function runGitPull(): Promise<void> {
  try {
    await Bun.$`git pull origin main`.quiet();
    console.log('Git pull completed.');
  } catch {
    console.log('Git pull skipped or failed.');
  }
}

async function spawnAgent(mode: 'hourly' | 'tactical'): Promise<void> {
  if (isPaused && mode === 'tactical') {
    console.log('Trading is paused. Skipping tactical agent.');
    return;
  }
  console.log(`[${new Date().toISOString()}] Spawning ${mode} agent...`);
  const proc = Bun.spawn(['bun', 'run', 'src/agent.ts', mode], {
    stdout: 'inherit',
    stderr: 'inherit',
  });
  await proc.exited;
}

async function runCycle(): Promise<void> {
  const open = await isMarketOpen();
  if (!open) {
    console.log(`[${new Date().toISOString()}] Market is closed. Skipping cycle.`);
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
  console.log('Starting Autonomous Harness Loop...');

  // Start web server — shares process memory for the pause toggle
  await import('./web/server');

  // Run an initial cycle immediately, then every 10 minutes
  await runCycle();
  setInterval(runCycle, 600_000);
}

if (import.meta.main) {
  startHarnessLoop();
}
