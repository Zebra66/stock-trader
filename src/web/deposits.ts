import * as fs from 'fs/promises';

const DEPOSITS_FILE = 'data/investment_deposits.json';

export interface DepositEntry {
  /** Delta amount in USD. Positive = deposit, negative = withdrawal from broker. */
  amount: number;
  /** ISO-8601 timestamp of the deposit/withdrawal. */
  at: string;
  /** Optional human-readable note. */
  note?: string;
}

/** Read all deposit entries from disk, sorted ascending by timestamp. */
export async function readDeposits(): Promise<DepositEntry[]> {
  try {
    const raw = await fs.readFile(DEPOSITS_FILE, 'utf8');
    const parsed = JSON.parse(raw) as DepositEntry[];
    if (!Array.isArray(parsed)) return [];
    // Always return sorted by time ascending
    return parsed.sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());
  } catch {
    // File missing or malformed — return empty (no baseline)
    return [];
  }
}

/** Persist the full deposits array to disk. */
export async function writeDeposits(entries: DepositEntry[]): Promise<void> {
  await fs.mkdir('data', { recursive: true });
  await fs.writeFile(DEPOSITS_FILE, JSON.stringify(entries, null, 2) + '\n', 'utf8');
}

/** Append a single new deposit entry and persist. */
export async function addDeposit(entry: DepositEntry): Promise<DepositEntry[]> {
  const entries = await readDeposits();
  entries.push(entry);
  entries.sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());
  await writeDeposits(entries);
  return entries;
}

/**
 * Compute the total invested capital as of a given timestamp (in ms).
 * Sums all deposit entries whose `at` timestamp is <= the given time.
 */
export function totalInvestedAt(deposits: DepositEntry[], atMs: number): number {
  return deposits
    .filter((d) => new Date(d.at).getTime() <= atMs)
    .reduce((sum, d) => sum + d.amount, 0);
}

/**
 * Compute the overall P&L percentage given current equity and deposits.
 *
 * Handles multiple deposits correctly by using the TWRR-inspired approach:
 *   P&L% = (currentEquity / totalInvested - 1) * 100
 *
 * Returns 0 if no deposits have been recorded yet (avoid division by zero).
 */
export function computePnlPercent(currentEquity: number, totalInvested: number): number {
  if (totalInvested <= 0) return 0;
  return ((currentEquity - totalInvested) / totalInvested) * 100;
}
