import { expect, test, describe } from 'bun:test';
import { fmpTools } from './tools/fmp';
import { systemTools } from './tools/system';

// ── Module-level unit tests ────────────────────────────────────────────────────

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

describe('System Tool', () => {
  test('executeBash: runs a simple command', async () => {
    const result = await systemTools.executeBash("echo 'hello world'");
    expect(result).toContain('hello world');
  });

  test('readFile / writeFile: round-trip', async () => {
    const path = '/tmp/stock-trader-test.txt';
    const content = 'test-content-' + Date.now();

    const writeResult = await systemTools.writeFile(path, content);
    expect(writeResult).toContain('Successfully wrote');

    const readResult = await systemTools.readFile(path);
    expect(readResult).toBe(content);
  });

  test('readFile: returns error string for missing file', async () => {
    const result = await systemTools.readFile('/tmp/does-not-exist-xyz.txt');
    expect(result).toContain('Error reading file');
  });
});

// ── CLI integration tests ──────────────────────────────────────────────────────

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

describe('Alpaca CLI', () => {
  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca.ts', ['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('get-account');
    expect(stdout).toContain('get-positions');
    expect(stdout).toContain('get-latest-price');
    expect(stdout).toContain('submit-order');
  });

  test('no args prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/alpaca.ts');
    expect(exitCode).toBe(0);
    expect(stdout).toContain('Usage:');
  });

  test('unknown command exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca.ts', ['bad-command']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('Unknown command');
  });

  test('get-latest-price without --symbol exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca.ts', ['get-latest-price']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--symbol is required');
  });

  test('submit-order validates required flags', async () => {
    const { exitCode, stderr } = await runCli('src/tools/alpaca.ts', ['submit-order', '--symbol', 'NVDA']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--qty is required');
  });
});

describe('FMP CLI', () => {
  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/fmp.ts', ['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('get-analyst-estimates');
    expect(stdout).toContain('get-historical-performance');
  });

  test('no args prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/fmp.ts');
    expect(exitCode).toBe(0);
    expect(stdout).toContain('Usage:');
  });

  test('unknown command exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/fmp.ts', ['bad-command']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('Unknown command');
  });

  test('get-analyst-estimates without --symbol exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/fmp.ts', ['get-analyst-estimates']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--symbol is required');
  });
});

describe('System CLI', () => {
  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli('src/tools/system.ts', ['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('read-file');
    expect(stdout).toContain('write-file');
  });

  test('read-file prints file contents', async () => {
    await Bun.write('/tmp/cli-test.txt', 'hello from cli');
    const { stdout, exitCode } = await runCli('src/tools/system.ts', ['read-file', '--path', '/tmp/cli-test.txt']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('hello from cli');
  });

  test('read-file without --path exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/system.ts', ['read-file']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--path is required');
  });

  test('unknown command exits non-zero', async () => {
    const { exitCode, stderr } = await runCli('src/tools/system.ts', ['bad-command']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('Unknown command');
  });
});
