import './env';
import { isMarketOpen } from './tools/alpaca_cli';
import { getLogger, formatNasdaqTimestamp } from './logger';

const logger = getLogger('harness');
const TACTICAL_MINUTES = [10, 20, 30, 40, 50] as const;
const HELP = `
Usage: bun run src/harness.ts [options]

Options:
  --force-run  Start the harness and agents even when the market is closed
  --help       Show this help message
`.trim();

let isPaused = false;
const repoRoot = new URL('..', import.meta.url).pathname;

interface HarnessArgs {
  forceRun: boolean;
  help: boolean;
  dryRun: boolean;
}

interface HarnessOptions {
  forceRun: boolean;
  dryRun: boolean;
}

interface StartHarnessDeps {
  loadWebServer: () => Promise<unknown>;
  runStartupCycle: (options: HarnessOptions) => Promise<void>;
  scheduleAlignedRun: (
    mode: 'hourly' | 'tactical',
    getNextRunAt: (now: Date) => Date,
    options: HarnessOptions,
  ) => void;
}

type AgentRunFunction = (mode: 'hourly' | 'tactical', dryRun?: boolean) => Promise<void>;
type ScheduledRunFunction = (mode: 'hourly' | 'tactical', options: HarnessOptions) => Promise<void>;

interface MarketGatedAgentDeps {
  isMarketOpen: () => Promise<boolean>;
  runGitPull: (mode: 'hourly' | 'tactical') => Promise<void>;
  spawnAgent: AgentRunFunction;
}

export function setPaused(paused: boolean) {
  isPaused = paused;
  logger.info({ paused: isPaused }, 'Trading paused state updated');
}

export function getPaused() {
  return isPaused;
}

export function parseHarnessArgs(argv: string[]): HarnessArgs {
  return {
    forceRun: argv.includes('--force-run'),
    help: argv.includes('--help'),
    dryRun: argv.includes('--dry-run'),
  };
}

export function shouldRunWhenMarketClosed(forceRun: boolean): boolean {
  return forceRun;
}

async function runGitPull(mode: 'hourly' | 'tactical'): Promise<void> {
  try {
    await Bun.$`git pull origin main`.quiet();
    logger.info({ mode }, 'Git pull completed');
  } catch {
    logger.warn({ mode }, 'Git pull skipped or failed');
  }
}

async function spawnAgent(mode: 'hourly' | 'tactical', dryRun = false): Promise<void> {
  if (isPaused && mode === 'tactical' && !dryRun) {
    logger.info({ mode }, 'Trading is paused. Skipping tactical agent');
    return;
  }
  logger.info({ mode, dryRun }, '🤖 Spawning agent');
  const args = ['bun', 'run', 'src/agent.ts', mode];
  if (dryRun) args.push('--dry-run');
  const proc = Bun.spawn(args, {
    stdout: 'inherit',
    stderr: 'inherit',
    cwd: repoRoot,
  });
  await proc.exited;
}

export function createSerializedRunner(run: AgentRunFunction): AgentRunFunction {
  const queues: Record<'hourly' | 'tactical', Promise<void>> = {
    hourly: Promise.resolve(),
    tactical: Promise.resolve(),
  };

  return (mode) => {
    const nextRun = queues[mode].then(() => run(mode));
    queues[mode] = nextRun.catch((error: unknown) => {
      logger.error({ mode, error: (error as Error).message }, 'Serialized agent run failed');
    });

    return nextRun;
  };
}

export function createSerializedScheduledRunner(run: ScheduledRunFunction): ScheduledRunFunction {
  const queues: Record<'hourly' | 'tactical', Promise<void>> = {
    hourly: Promise.resolve(),
    tactical: Promise.resolve(),
  };

  return (mode, options) => {
    const nextRun = queues[mode].then(() => run(mode, options));
    queues[mode] = nextRun.catch((error: unknown) => {
      logger.error({ mode, error: (error as Error).message }, 'Serialized scheduled run failed');
    });

    return nextRun;
  };
}

export async function runMarketGatedAgent(
  mode: 'hourly' | 'tactical',
  options: HarnessOptions,
  deps: MarketGatedAgentDeps = { isMarketOpen, runGitPull, spawnAgent },
): Promise<void> {
  const open = await deps.isMarketOpen();
  if (!open && !shouldRunWhenMarketClosed(options.forceRun)) {
    logger.info({ mode }, 'Market is closed. Skipping scheduled run');
    return;
  }

  if (!open && options.forceRun) {
    logger.info({ mode }, 'Market is closed. Continuing because --force-run is enabled');
  }

  // Only pull when the run is allowed — no point syncing code when nothing can trade.
  await deps.runGitPull(mode);

  // NOTE: agent.ts is spawned as a fresh child process every cycle, so it always
  // picks up any code changes that arrived via git pull automatically.
  // The harness process itself (this file) does NOT auto-reload after a git pull —
  // it must be restarted manually if harness.ts itself changes.
  await deps.spawnAgent(mode, options.dryRun);
}

const runScheduledSerialized = createSerializedScheduledRunner(runMarketGatedAgent);

export function getDelayUntilNextHourlyRun(now: Date): number {
  return getNextHourlyRunAt(now).getTime() - now.getTime();
}

export function getDelayUntilNextTacticalRun(now: Date): number {
  return getNextTacticalRunAt(now).getTime() - now.getTime();
}

export function getNextHourlyRunAt(now: Date): Date {
  const next = new Date(now);

  // Target the :35 mark of each hour so the first run of the trading day
  // lands at 9:35 AM ET — 5 minutes after the 9:30 AM Nasdaq open —
  // giving tactical agents at :40 and :50 fresh directives immediately.
  if (now.getMinutes() < 35) {
    // Still before :35 this hour — target this hour's :35
    next.setMinutes(35, 0, 0);
  } else {
    // Already past :35 — target next hour's :35
    next.setHours(next.getHours() + 1);
    next.setMinutes(35, 0, 0);
  }

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

async function runWhenMarketOpen(
  mode: 'hourly' | 'tactical',
  options: HarnessOptions,
): Promise<void> {
  await runScheduledSerialized(mode, options);
}

function scheduleAlignedRun(
  mode: 'hourly' | 'tactical',
  getNextRunAt: (now: Date) => Date,
  options: HarnessOptions,
): void {
  const now = new Date();
  const nextRunAt = getNextRunAt(now);
  const delay = nextRunAt.getTime() - now.getTime();

  logger.info({ mode, delayMs: delay, nextRunAt: formatNasdaqTimestamp(nextRunAt) }, 'Scheduled next aligned run');

  setTimeout(async () => {
    try {
      await runWhenMarketOpen(mode, options);
    } finally {
      scheduleAlignedRun(mode, getNextRunAt, options);
    }
  }, delay);
}

async function runStartupCycle(options: HarnessOptions): Promise<void> {
  await runWhenMarketOpen('hourly', options);
  await runWhenMarketOpen('tactical', options);
}

export async function startHarnessLoop(
  options: HarnessOptions = { forceRun: false },
  deps: StartHarnessDeps = {
    loadWebServer: () => import('./web/server'),
    runStartupCycle,
    scheduleAlignedRun,
  },
): Promise<void> {
  logger.info(
    { repoRoot, forceRun: options.forceRun },
    options.forceRun
      ? 'Starting Autonomous Harness Loop in --force-run mode'
      : 'Starting Autonomous Harness Loop',
  );

  // Start web server — shares process memory for the pause toggle
  await deps.loadWebServer();

  // Install wall-clock aligned scheduling immediately so later windows are not
  // missed while the startup cycle is still working through a long run.
  deps.scheduleAlignedRun('hourly', getNextHourlyRunAt, options);
  deps.scheduleAlignedRun('tactical', getNextTacticalRunAt, options);

  // Run both jobs once on startup. Per-mode serialization prevents overlap with
  // the aligned timers above while still letting hourly and tactical progress independently.
  await deps.runStartupCycle(options);
}

if (import.meta.main) {
  const args = parseHarnessArgs(process.argv.slice(2));

  if (args.help) {
    console.log(HELP);
    process.exit(0);
  }

  startHarnessLoop({ forceRun: args.forceRun, dryRun: args.dryRun });
}
