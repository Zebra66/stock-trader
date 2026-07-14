import { describe, expect, test } from 'bun:test';
import {
  appendLedgerEntry,
  buildLedgerEntry,
  formatLedgerTimestamp,
  prependLedgerEntry,
  validateLedgerDetails,
} from './ledger_cli';

async function runCli(args: string[]): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  const proc = Bun.spawn(['bun', 'run', 'src/tools/ledger_cli.ts', ...args], {
    stdout: 'pipe',
    stderr: 'pipe',
    cwd: import.meta.dir + '/../..',
  });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  const exitCode = await proc.exited;
  return { stdout, stderr, exitCode };
}

describe('ledger_cli', () => {
  test('formatLedgerTimestamp uses New York time', () => {
    const timestamp = formatLedgerTimestamp(new Date('2026-05-11T14:35:00.000Z'));
    expect(timestamp).toBe('2026-05-11 : 10:35');
  });

  test('buildLedgerEntry renders mode and bullets', () => {
    const entry = buildLedgerEntry({
      mode: 'hourly',
      tldr: 'Raised QQQ priority',
      details: ['Cash drag is still dominant', 'QQQ remains the cleanest deployment vehicle'],
      now: new Date('2026-05-11T14:35:00.000Z'),
    });

    expect(entry).toContain('2026-05-11 : 10:35 : [hourly] Raised QQQ priority');
    expect(entry).toContain('- Cash drag is still dominant');
    expect(entry).toContain('- QQQ remains the cleanest deployment vehicle');
  });

  test('appendLedgerEntry creates header and appends entry', async () => {
    const ledgerPath = `/tmp/ledger-test-${Date.now()}.md`;

    await appendLedgerEntry({
      mode: 'tactical',
      tldr: 'No trade',
      details: ['Quote was stale'],
      now: new Date('2026-05-11T14:40:00.000Z'),
      ledgerPath,
    });

    const content = await Bun.file(ledgerPath).text();
    expect(content).toContain('# Trading Ledger');
    expect(content).toContain('2026-05-11 : 10:40 : [tactical] No trade');
    expect(content).toContain('- Quote was stale');
  });

  test('prependLedgerEntry inserts entry after header', async () => {
    const ledgerPath = `/tmp/ledger-prepend-test-${Date.now()}.md`;

    await appendLedgerEntry({
      mode: 'hourly',
      tldr: 'Older entry',
      details: ['Existing details'],
      now: new Date('2026-05-11T14:35:00.000Z'),
      ledgerPath,
    });

    await prependLedgerEntry({
      mode: 'tactical',
      tldr: 'Newest entry',
      details: ['Fresh details'],
      now: new Date('2026-05-11T14:40:00.000Z'),
      ledgerPath,
    });

    const content = await Bun.file(ledgerPath).text();
    const newestIndex = content.indexOf('2026-05-11 : 10:40 : [tactical] Newest entry');
    const olderIndex = content.indexOf('2026-05-11 : 10:35 : [hourly] Older entry');

    expect(content).toContain('# Trading Ledger');
    expect(newestIndex).toBeGreaterThan(0);
    expect(olderIndex).toBeGreaterThan(newestIndex);
  });

  test('--help prints usage', async () => {
    const { stdout, exitCode } = await runCli(['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('append');
    expect(stdout).toContain('prepend');
    expect(stdout).toContain('--mode <hourly|tactical>');
  });

  test('append without required flags exits non-zero', async () => {
    const { stderr, exitCode } = await runCli(['append', '--mode', 'hourly']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toContain('--tldr is required');
  });

  test('append writes entry from repeated detail flags', async () => {
    const ledgerPath = `/tmp/ledger-cli-test-${Date.now()}.md`;
    const { stdout, exitCode } = await runCli([
      'append',
      '--mode',
      'hourly',
      '--tldr',
      'Updated watchlist',
      '--detail',
      'Raised QQQ above GOOG',
      '--detail',
      'Kept SOXX as a hold',
      '--details',
      'Ignored stale QTUM quote',
      '--path',
      ledgerPath,
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Appended ledger entry');
    const content = await Bun.file(ledgerPath).text();
    expect(content).toContain('- Raised QQQ above GOOG');
    expect(content).toContain('- Kept SOXX as a hold');
    expect(content).toContain('- Ignored stale QTUM quote');
  });

  test('prepend writes newest entry before existing entries', async () => {
    const ledgerPath = `/tmp/ledger-cli-prepend-test-${Date.now()}.md`;

    await appendLedgerEntry({
      mode: 'tactical',
      tldr: 'Existing trade log',
      details: ['Holding position'],
      now: new Date('2026-05-11T14:40:00.000Z'),
      ledgerPath,
    });

    const { stdout, exitCode } = await runCli([
      'prepend',
      '--mode',
      'hourly',
      '--tldr',
      'Raised QQQ priority',
      '--detail',
      'Cash drag remains dominant',
      '--path',
      ledgerPath,
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Prepended ledger entry');

    const content = await Bun.file(ledgerPath).text();
    const prependedIndex = content.indexOf('[hourly] Raised QQQ priority');
    const existingIndex = content.indexOf('[tactical] Existing trade log');

    expect(prependedIndex).toBeGreaterThan(0);
    expect(existingIndex).toBeGreaterThan(prependedIndex);
  });

  test('validateLedgerDetails rejects hallucinated prices near a symbol', () => {
    expect(() =>
      validateLedgerDetails(['AVGO at $3.61 above hard stop'], { AVGO: 368.65 }),
    ).toThrow(/price hallucination for AVGO/);
  });

  test('validateLedgerDetails allows deltas when a plausible price is present', () => {
    expect(() =>
      validateLedgerDetails(['AVGO at $368.61, $3.61 above $365.00 hard stop'], {
        AVGO: 368.65,
      }),
    ).not.toThrow();
  });

  test('validateLedgerDetails allows exposure percentages near symbols', () => {
    expect(() =>
      validateLedgerDetails(['QQQ $712.94, VOO $688.41, exposure 76.4%'], {
        QQQ: 712.94,
        VOO: 688.41,
      }),
    ).not.toThrow();
  });
});
