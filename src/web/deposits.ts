import * as fs from 'fs/promises';
import { getLogger } from '../logger';
import { getDefaultAlpacaClient } from '../tools/alpaca_client_factory';

const logger = getLogger('deposits');
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

/**
 * Periodically sync transfers and cash deposits from Alpaca.
 * This reads 'TRANS', 'CSD', and 'CSW' activities and appends them
 * if they are not already recorded in the local file.
 */
export async function syncDepositsFromAlpaca(client?: any): Promise<void> {
  try {
    const alpaca = client ?? getDefaultAlpacaClient();
    // Catch errors gracefully if the paper account doesn't support these types
    const activities = await alpaca.getAccountActivities({ activityTypes: ['CSD', 'CSW', 'TRANS'] }).catch(() => []);
    
    if (!activities || activities.length === 0) return;

    const existingDeposits = await readDeposits();
    const existingSet = new Set(existingDeposits.map(d => `${d.at}_${d.amount}`));
    
    let added = false;
    for (const activity of activities) {
      if (!activity.transaction_time || !activity.net_amount) continue;
      
      const amount = Number(activity.net_amount);
      if (!amount || Number.isNaN(amount)) continue;
      
      const isWithdrawal = activity.activity_type === 'CSW';
      const finalAmount = isWithdrawal ? -Math.abs(amount) : Math.abs(amount);
      const at = activity.transaction_time;
      
      const key = `${at}_${finalAmount}`;
      if (!existingSet.has(key)) {
        existingDeposits.push({
          amount: finalAmount,
          at,
          note: `Auto-synced ${activity.activity_type}`
        });
        existingSet.add(key);
        added = true;
      }
    }

    if (added) {
      existingDeposits.sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());
      await writeDeposits(existingDeposits);
      logger.info('Synced new deposits/withdrawals from Alpaca');
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    logger.warn({ err: msg }, 'Failed to sync deposits from Alpaca');
  }
}
