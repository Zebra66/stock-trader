import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Globals
let isPaused = false;
let lastHourlyRun = 0;

export function setPaused(paused: boolean) {
  isPaused = paused;
  console.log(`Trading Paused state set to: ${isPaused}`);
}

export function getPaused() {
  return isPaused;
}

async function runGitPull() {
  try {
    console.log("Running git pull...");
    const { stdout } = await execAsync('git pull origin main || echo "Git pull skipped or failed"');
    console.log(stdout);
  } catch (e: any) {
    console.error("Git pull error:", e.message);
  }
}

async function spawnAgent(mode: 'hourly' | 'tactical') {
  if (isPaused && mode === 'tactical') {
    console.log("Trading is paused. Skipping tactical execution but allowing hourly strategy to run if needed.");
    return;
  }

  try {
    console.log(`Spawning Agent in ${mode} mode...`);
    const { stdout, stderr } = await execAsync(`bun run src/agent.ts ${mode}`);
    console.log(`[Agent ${mode}] STDOUT:\n`, stdout);
    if (stderr) console.error(`[Agent ${mode}] STDERR:\n`, stderr);
  } catch (e: any) {
    console.error(`Error executing agent in ${mode} mode:`, e.message);
  }
}

export async function startHarnessLoop() {
  console.log("Starting Autonomous Harness Loop...");

  // Start the web server from the harness so they share memory (for the pause button)
  require('./web/server');

  // The 10-minute interval loop (10 * 60 * 1000 = 600000 ms)
  setInterval(async () => {
    await runGitPull();

    const now = Date.now();
    // Run hourly if 60 minutes have passed (60 * 60 * 1000 = 3600000 ms)
    if (now - lastHourlyRun > 3600000) {
      await spawnAgent('hourly');
      lastHourlyRun = Date.now();
    }

    // Always run tactical every 10 mins
    await spawnAgent('tactical');

  }, 600000);

  // Run initial cycle immediately
  await runGitPull();
  await spawnAgent('hourly');
  lastHourlyRun = Date.now();
  await spawnAgent('tactical');
}

// If this file is executed directly (not imported)
if (require.main === module) {
  startHarnessLoop();
}
