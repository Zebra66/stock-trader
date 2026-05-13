import { expect, test, describe, beforeAll } from 'bun:test';
import { fmpTools } from './tools/fmp_cli';
import { systemTools } from './tools/system_cli';
import { alpacaTools, isMarketOpen } from './tools/alpaca_cli';

// ── Shared helpers ─────────────────────────────────────────────────────────────

async function runCli(script: string, args: string[] = []): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  const proc = Bun.spawn(['bun', 'run', script, ...args], {
    stdout: 'pipe',
    stderr: 'pipe',
    cwd: import.meta.dir + '/../',
  });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  const exitCode = await proc.exited;
  return { stdout, stderr, exitCode };
}

// ── FMP module ─────────────────────────────────────────────────────────────────

describe('FMP Tool', () => {
  test('getAnalystEstimates: graceful fallback when key is missing', async () => {
    const saved = process.env.FMP_API_KEY;
    process.env.FMP_API_KEY = 'dummy_key';
    const result = await fmpTools.getAnalystEstimates('AAPL');
    expect(result).toContain('[WARNING]: FMP_API_KEY is not configured');
    process.env.FMP_API_KEY = saved;
  });

  test('getHistoricalPerformance: graceful fallback when key is missing', async () => {
    const saved = process.env.FMP_API_KEY;
    process.env.FMP_API_KEY = 'dummy_key';
    const result = await fmpTools.getHistoricalPerformance('NVDA');
    expect(result).toContain('[WARNING]: FMP_API_KEY is not configured');
    process.env.FMP_API_KEY = saved;
  });
});

// ── System module ──────────────────────────────────────────────────────────────

describe('System Tool', () => {
  test('executeBash: runs a simple command', async () => {
    const result = await systemTools.executeBash("echo 'hello world'");
    expect(result).toContain('hello world');
  });

  test('executeBash: captures stderr separately', async () => {
    const result = await systemTools.executeBash('echo out && echo err >&2');
    expect(result).toContain('out');
    expect(result).toContain('err');
  });

  test('readFile / writeFile: round-trip', async () => {
    const path = '/tmp/stock-trader-test.txt';
    const content = 'test-content-' + Date.now();
    const writeResult = await systemTools.writeFile(path, content);
    expect(writeResult).toContain('Successfully wrote');
    const readResult = await systemTools.readFile(path);
    expect(readResult).toBe(content);
  });

  test('writeFile: overwrites existing content', async () => {
    const path = '/tmp/stock-trader-overwrite.txt';
    await systemTools.writeFile(path, 'first');
    await systemTools.writeFile(path, 'second');
    const result = await systemTools.readFile(path);
    expect(result).toBe('second');
  });

  test('readFile: returns error string for missing file', async () => {
    const result = await systemTools.readFile('/tmp/does-not-exist-xyz.txt');
    expect(result).toContain('Error reading file');
  });
});

// ── Alpaca module ──────────────────────────────────────────────────────────────

describe('Alpaca module', () => {
  test('isMarketOpen: returns a boolean', async () => {
    const result = await isMarketOpen();
    expect(typeof result).toBe('boolean');
  });

  test('getAccount: returns JSON string with expected fields', async () => {
    const result = await alpacaTools.getAccount();
    // Should be valid JSON (not an error string)
    expect(() => JSON.parse(result)).not.toThrow();
    const account = JSON.parse(result);
    expect(account).toHaveProperty('id');
    expect(account).toHaveProperty('status');
    expect(account).toHaveProperty('equity');
  });

  test('getPositions: returns a JSON array', async () => {
    const result = await alpacaTools.getPositions();
    expect(() => JSON.parse(result)).not.toThrow();
    const positions = JSON.parse(result);
    expect(Array.isArray(positions)).toBe(true);
  });

  test('getLatestPrice: returns live snapshot data for a valid symbol', async () => {
    const result = await alpacaTools.getLatestPrice('SPY');
    expect(() => JSON.parse(result)).not.toThrow();
    const snapshot = JSON.parse(result);
    expect(snapshot).toHaveProperty('CurrentPrice');
    expect(snapshot).toHaveProperty('LatestTrade');
    expect(snapshot).toHaveProperty('LatestQuote');
    expect(snapshot).toHaveProperty('MinuteBar');
  });

  test('getLatestPrice: returns error string for invalid symbol', async () => {
    const result = await alpacaTools.getLatestPrice('INVALID_TICKER_XYZ');
    // Should degrade gracefully — either an error string or valid JSON
    expect(typeof result).toBe('string');
  });

  test('getMarketClock: returns is_open boolean and timestamps', async () => {
    const result = await alpacaTools.getMarketClock();
    expect(() => JSON.parse(result)).not.toThrow();
    const clock = JSON.parse(result);
    expect(typeof clock.is_open).toBe('boolean');
    expect(clock).toHaveProperty('next_open');
    expect(clock).toHaveProperty('next_close');
  });
});

// ── Harness logic (pure, no side-effects) ─────────────────────────────────────

describe('Harness: pause state', () => {
  // Import the functions directly — they operate on module-level state
  test('setPaused / getPaused round-trip', async () => {
    const { setPaused, getPaused } = await import('./harness');
    setPaused(true);
    expect(getPaused()).toBe(true);
    setPaused(false);
    expect(getPaused()).toBe(false);
  });

  test('scheduled runner serializes hourly and tactical runs together', async () => {
    const { createSerializedScheduledRunner } = await import('./harness');
    const events: string[] = [];

    let releaseHourly: () => void = () => {};
    let markHourlyStarted: () => void = () => {};
    const hourlyStarted = new Promise<void>((resolve) => {
      markHourlyStarted = resolve;
    });
    const hourlyRelease = new Promise<void>((resolve) => {
      releaseHourly = resolve;
    });

    const runner = createSerializedScheduledRunner(async (mode) => {
      events.push(`start:${mode}`);
      if (mode === 'hourly') {
        markHourlyStarted();
        await hourlyRelease;
      }
      events.push(`end:${mode}`);
    });

    const hourlyRun = runner('hourly', { forceRun: true });
    await hourlyStarted;
    const tacticalRun = runner('tactical', { forceRun: true });
    await Promise.resolve();

    expect(events).toEqual(['start:hourly']);

    releaseHourly();
    await Promise.all([hourlyRun, tacticalRun]);

    expect(events).toEqual(['start:hourly', 'end:hourly', 'start:tactical', 'end:tactical']);
  });
});

// ── Prompt memory management ──────────────────────────────────────────────────

describe('Agent prompts: memory management', () => {
  test('current-state memory files are replaced instead of accumulated', async () => {
    const hourlyPrompt = await Bun.file(new URL('../prompts/hourly.txt', import.meta.url)).text();
    const tacticalPrompt = await Bun.file(new URL('../prompts/tactical.txt', import.meta.url)).text();

    expect(hourlyPrompt).toContain('Replace the entire `memory/MEMORY.md`');
    expect(hourlyPrompt).toContain('Replace the entire `memory/todo.md`');
    expect(hourlyPrompt).not.toContain('ALL the learnings that we created so far');

    expect(tacticalPrompt).toContain('update `memory/MEMORY.md`');
    expect(tacticalPrompt).toContain('Update `memory/todo.md`');
    expect(tacticalPrompt).not.toContain('Prefix all your updates');
  });

  test('active instructions expire while dated long-term learnings can persist', async () => {
    const hourlyPrompt = await Bun.file(new URL('../prompts/hourly.txt', import.meta.url)).text();
    const tacticalPrompt = await Bun.file(new URL('../prompts/tactical.txt', import.meta.url)).text();

    expect(hourlyPrompt).toContain('Executable instructions older than one trading day must be removed from `memory/MEMORY.md`');
    expect(hourlyPrompt).toContain('Remove stale closed-market summaries, duplicate learnings, and conflicting account snapshots');
    expect(tacticalPrompt).toContain('remove completed conditions, keep only conditions that are still pending');
  });
});

// ── Alpaca CLI ─────────────────────────────────────────────────────────────────

describe('Alpaca CLI', () => {
  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca_cli.ts', ['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('get-account');
    expect(stdout).toContain('get-positions');
    expect(stdout).toContain('get-latest-price');
    expect(stdout).toContain('submit-order');
    expect(stdout).toContain('get-clock');
  });

  test('no args prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca_cli.ts');
    expect(exitCode).toBe(0);
    expect(stdout).toContain('Usage:');
  });

  test('unknown command exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca_cli.ts', ['bad-command']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('Unknown command');
  });

  test('get-latest-price without --symbol exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca_cli.ts', ['get-latest-price']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--symbol is required');
  });

  test('submit-order validates --qty required', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca_cli.ts', ['submit-order', '--symbol', 'NVDA']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--qty is required');
  });

  test('submit-order validates --side value', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca_cli.ts', ['submit-order', '--symbol', 'NVDA', '--qty', '1', '--side', 'hold']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--side must be');
  });

  test('get-clock returns market clock JSON', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca_cli.ts', ['get-clock']);
    expect(exitCode).toBe(0);
    const clock = JSON.parse(stdout);
    expect(typeof clock.is_open).toBe('boolean');
  });

  test('get-account returns valid JSON', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca_cli.ts', ['get-account']);
    expect(exitCode).toBe(0);
    expect(() => JSON.parse(stdout)).not.toThrow();
  });

  test('get-positions returns valid JSON array', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca_cli.ts', ['get-positions']);
    expect(exitCode).toBe(0);
    expect(() => JSON.parse(stdout)).not.toThrow();
    expect(Array.isArray(JSON.parse(stdout))).toBe(true);
  });
});

// ── FMP CLI ────────────────────────────────────────────────────────────────────

describe('FMP CLI', () => {
  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/fmp_cli.ts', ['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('get-analyst-estimates');
    expect(stdout).toContain('get-historical-performance');
  });

  test('no args prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/fmp_cli.ts');
    expect(exitCode).toBe(0);
    expect(stdout).toContain('Usage:');
  });

  test('unknown command exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/fmp_cli.ts', ['bad-command']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('Unknown command');
  });

  test('get-analyst-estimates without --symbol exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/fmp_cli.ts', ['get-analyst-estimates']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--symbol is required');
  });

  test('get-historical-performance without --symbol exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/fmp_cli.ts', ['get-historical-performance']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--symbol is required');
  });
});

// ── System CLI ─────────────────────────────────────────────────────────────────

describe('System CLI', () => {
  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/system_cli.ts', ['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('read-file');
    expect(stdout).toContain('write-file');
  });

  test('read-file prints file contents', async () => {
    await Bun.write('/tmp/cli-test.txt', 'hello from cli');
    const { stdout, exitCode } = await runCli('src/tools/system_cli.ts', ['read-file', '--path', '/tmp/cli-test.txt']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('hello from cli');
  });

  test('write-file creates a file with content', async () => {
    const path = '/tmp/cli-write-test.txt';
    const content = 'written-by-cli-' + Date.now();
    const { exitCode } = await runCli('src/tools/system_cli.ts', ['write-file', '--path', path, '--content', content]);
    expect(exitCode).toBe(0);
    const written = await Bun.file(path).text();
    expect(written).toBe(content);
  });

  test('read-file without --path exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/system_cli.ts', ['read-file']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--path is required');
  });

  test('write-file without --content exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/system_cli.ts', ['write-file', '--path', '/tmp/x.txt']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--content is required');
  });

  test('unknown command exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/system_cli.ts', ['bad-command']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('Unknown command');
  });
});
