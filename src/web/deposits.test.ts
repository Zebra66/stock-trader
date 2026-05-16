import { describe, expect, test, beforeEach, afterEach } from 'bun:test';
import * as fs from 'fs/promises';
import * as path from 'path';
import {
  readDeposits,
  writeDeposits,
  addDeposit,
  totalInvestedAt,
  computePnlPercent,
  syncDepositsFromAlpaca,
  type DepositEntry,
} from './deposits';
import { buildDashboardData } from './dashboard_data';

// ── Helpers ──────────────────────────────────────────────────────────────────

const TEST_DIR = 'data_test_tmp';

/** Run test code with an isolated deposits file. */
async function withTempDeposits(entries: DepositEntry[], fn: () => Promise<void>) {
  const tmpFile = path.join(TEST_DIR, `deposits_${Date.now()}_${Math.random().toString(36).slice(2)}.json`);
  await fs.mkdir(TEST_DIR, { recursive: true });
  await fs.writeFile(tmpFile, JSON.stringify(entries, null, 2) + '\n', 'utf8');

  const previous = process.env.DEPOSITS_FILE;
  process.env.DEPOSITS_FILE = tmpFile;
  try {
    await fn();
  } finally {
    if (previous !== undefined) {
      process.env.DEPOSITS_FILE = previous;
    } else {
      delete process.env.DEPOSITS_FILE;
    }
    await fs.unlink(tmpFile).catch(() => {});
  }
}

// ── totalInvestedAt ────────────────────────────────────────────────────────────

describe('totalInvestedAt', () => {
  const deposits: DepositEntry[] = [
    { amount: 25000, at: '2026-05-01T00:00:00Z' },
    { amount: 10000, at: '2026-05-15T00:00:00Z' },
    { amount: -5000, at: '2026-05-20T00:00:00Z' },
  ];

  test('returns 0 with no deposits', () => {
    expect(totalInvestedAt([], Date.now())).toBe(0);
  });

  test('includes only deposits before or at the given time', () => {
    const atMay10 = new Date('2026-05-10T12:00:00Z').getTime();
    expect(totalInvestedAt(deposits, atMay10)).toBe(25000);
  });

  test('includes deposits up to and on the exact timestamp', () => {
    const atMay15 = new Date('2026-05-15T00:00:00Z').getTime();
    expect(totalInvestedAt(deposits, atMay15)).toBe(35000);
  });

  test('sums all deposits including withdrawals (negative amounts)', () => {
    const atMay25 = new Date('2026-05-25T00:00:00Z').getTime();
    expect(totalInvestedAt(deposits, atMay25)).toBe(30000);
  });

  test('returns 0 if all deposits are in the future', () => {
    const atPast = new Date('2020-01-01T00:00:00Z').getTime();
    expect(totalInvestedAt(deposits, atPast)).toBe(0);
  });
});

// ── computePnlPercent ─────────────────────────────────────────────────────────

describe('computePnlPercent', () => {
  test('returns 0 when no investment has been made', () => {
    expect(computePnlPercent(25000, 0)).toBe(0);
  });

  test('computes positive return correctly', () => {
    // $25k invested, $27.5k equity = +10%
    expect(computePnlPercent(27500, 25000)).toBeCloseTo(10, 5);
  });

  test('computes negative return correctly', () => {
    // $25k invested, $20k equity = -20%
    expect(computePnlPercent(20000, 25000)).toBeCloseTo(-20, 5);
  });

  test('returns 0% for breakeven', () => {
    expect(computePnlPercent(25000, 25000)).toBe(0);
  });
});

// ── addDeposit / readDeposits ─────────────────────────────────────────────────

describe('addDeposit / readDeposits', () => {
  test('adds a deposit and reads it back sorted by date', async () => {
    await withTempDeposits([], async () => {
      // Add later deposit first to verify sort
      await addDeposit({ amount: 5000, at: '2026-05-20T00:00:00Z', note: 'second' });
      await addDeposit({ amount: 25000, at: '2026-05-01T00:00:00Z', note: 'first' });

      const entries = await readDeposits();
      expect(entries).toHaveLength(2);
      expect(entries[0]?.at).toBe('2026-05-01T00:00:00Z');
      expect(entries[1]?.at).toBe('2026-05-20T00:00:00Z');
      expect(entries[0]?.amount).toBe(25000);
    });
  });

  test('returns empty array when file does not exist', async () => {
    // Temporarily point at nonexistent file by writing empty state
    await withTempDeposits([], async () => {
      await fs.unlink(ORIG_FILE).catch(() => {});
      const entries = await readDeposits();
      expect(entries).toEqual([]);
    });
  });
});

// ── buildDashboardData with deposits ─────────────────────────────────────────

describe('buildDashboardData P&L history', () => {
  const t0 = 1746057600; // 2025-05-01T00:00:00Z in seconds
  const t1 = 1746144000; // 2025-05-02T00:00:00Z in seconds

  const mockClient = {
    getAccount: async () => ({
      equity: '26000',
      cash: '5000',
      buying_power: '10000',
      last_equity: '25000',
    }),
    getPortfolioHistory: async () => ({
      timestamp: [t0, t1],
      equity: [25500, 26000],
    }),
    getAccountActivities: async () => ([]),
  };

  test('Y values are P&L (equity - invested) when deposits are provided', async () => {
    const deposits: DepositEntry[] = [
      { amount: 25000, at: '2025-04-30T00:00:00Z' }, // before t0 (2025-05-01)
    ];
    const data = await buildDashboardData(mockClient, '1W', deposits);

    // At t0: equity=25500, invested=25000 → pnl=500
    expect(data.history[0]?.y).toBeCloseTo(500, 2);
    // At t1: equity=26000, invested=25000 → pnl=1000
    expect(data.history[1]?.y).toBeCloseTo(1000, 2);
  });

  test('Y values equal raw equity when no deposits are provided', async () => {
    const data = await buildDashboardData(mockClient, '1W', []);
    // No deposit baseline → falls back to raw equity
    expect(data.history[0]?.y).toBe(25500);
    expect(data.history[1]?.y).toBe(26000);
  });

  test('baseline shifts correctly when a mid-period deposit is added', async () => {
    const deposits: DepositEntry[] = [
      { amount: 25000, at: '2025-04-30T00:00:00Z' }, // before t0 (2025-05-01)
      { amount: 5000,  at: new Date(t1 * 1000).toISOString() }, // exactly at t1 (2025-05-02)
    ];
    const data = await buildDashboardData(mockClient, '1W', deposits);

    // At t0: invested=25000 → pnl=25500-25000=500
    expect(data.history[0]?.y).toBeCloseTo(500, 2);
    // At t1: invested=30000 → pnl=26000-30000=-4000
    expect(data.history[1]?.y).toBeCloseTo(-4000, 2);
  });

  test('currentPnl and currentPnlPct are returned correctly', async () => {
    const deposits: DepositEntry[] = [
      { amount: 25000, at: '2025-04-30T00:00:00Z' },
    ];
    const data = await buildDashboardData(mockClient, '1W', deposits);

    expect(data.totalInvested).toBe(25000);
    expect(data.currentPnl).toBeCloseTo(1000, 2);       // 26000 - 25000
    expect(data.currentPnlPct).toBeCloseTo(4.0, 2);    // 1000 / 25000 * 100
  });
});

// ── syncDepositsFromAlpaca ───────────────────────────────────────────────────

describe('syncDepositsFromAlpaca', () => {
  test('syncs new deposits from Alpaca without duplicating existing ones', async () => {
    await withTempDeposits([{ amount: 1000, at: '2026-05-01T10:00:00Z', note: 'existing' }], async () => {
      const mockClient = {
        getAccountActivities: async () => [
          { activity_type: 'CSD', net_amount: '1000', transaction_time: '2026-05-01T10:00:00Z' }, // Duplicate
          { activity_type: 'CSD', net_amount: '500', transaction_time: '2026-05-02T10:00:00Z' }, // New deposit
          { activity_type: 'CSW', net_amount: '200', transaction_time: '2026-05-03T10:00:00Z' }, // New withdrawal
        ]
      };

      await syncDepositsFromAlpaca(mockClient);

      const entries = await readDeposits();
      expect(entries).toHaveLength(3);
      
      expect(entries[0]?.amount).toBe(1000);
      expect(entries[0]?.note).toBe('existing');

      expect(entries[1]?.amount).toBe(500);
      expect(entries[1]?.note).toBe('Auto-synced CSD');

      expect(entries[2]?.amount).toBe(-200);
      expect(entries[2]?.note).toBe('Auto-synced CSW');
    });
  });

  test('does not write to file if no new deposits are found', async () => {
    await withTempDeposits([{ amount: 1000, at: '2026-05-01T10:00:00Z' }], async () => {
      const mockClient = {
        getAccountActivities: async () => [
          { activity_type: 'CSD', net_amount: '1000', transaction_time: '2026-05-01T10:00:00Z' }
        ]
      };

      const file = process.env.DEPOSITS_FILE!;
      const statBefore = await fs.stat(file);
      await new Promise(r => setTimeout(r, 10)); // Ensure mtime would change if written
      await syncDepositsFromAlpaca(mockClient);
      const statAfter = await fs.stat(file);
      
      expect(statAfter.mtimeMs).toBe(statBefore.mtimeMs);
    });
  });
});
