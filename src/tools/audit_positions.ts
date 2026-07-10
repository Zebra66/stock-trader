import '../env';
import { getDefaultAlpacaClient } from './alpaca_client_factory';

const UNIVERSE = new Set([
  'AVGO','EIS','GLD','GOOG','HOOD','META','NVDA','QQQ','QTUM','RKLB','SHLD','SOXX','VOO','ARKX'
]);

interface AuditResult {
  timestamp: string;
  unauthorizedPositions: Array<{
    symbol: string;
    qty: number;
    marketValue: number;
    reason: string;
  }>;
  concentrationBreaches: Array<{
    symbol: string;
    weight: number;
    cap: number;
    reason: string;
  }>;
  grossExposure: number;
  equity: number;
  cash: number;
  hardLockRecommended: boolean;
  summary: string;
  daytradeInference?: {
    estimatedDaytrades: number;
    pdtLimitReached: boolean;
    details: string[];
  };
}

async function inferDaytrades(): Promise<AuditResult['daytradeInference']> {
  try {
    const client = getDefaultAlpacaClient();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const after = today.toISOString();
    const orders = await client.getOrders({ status: 'closed', after, limit: 100 }) as any[];

    const filled = orders.filter((o: any) => o.status === 'filled' && o.filled_at != null);
    const buyOrders = filled.filter((o: any) => o.side?.toLowerCase() === 'buy');
    const sellOrders = filled.filter((o: any) => o.side?.toLowerCase() === 'sell');

    const details: string[] = [];
    let estimatedDaytrades = 0;

    // Count same-day round trips: for each buy, if there is a sell of same symbol today
    for (const buy of buyOrders) {
      const sym = buy.symbol?.toUpperCase();
      const buyQty = parseFloat(buy.filled_qty ?? buy.qty ?? '0');
      const buyTime = new Date(buy.filled_at).getTime();
      if (!sym || buyQty <= 0) continue;

      let remainingBuyQty = buyQty;
      for (const sell of sellOrders) {
        if (sell.symbol?.toUpperCase() !== sym) continue;
        const sellQty = parseFloat(sell.filled_qty ?? sell.qty ?? '0');
        const sellTime = new Date(sell.filled_at).getTime();
        if (sellQty <= 0 || sellTime < buyTime) continue;

        const matched = Math.min(remainingBuyQty, sellQty);
        if (matched > 0) {
          estimatedDaytrades += matched;
          remainingBuyQty -= matched;
          details.push(`${sym}: ${matched} share(s) bought @ ${buy.filled_avg_price} then sold @ ${sell.filled_avg_price} same day`);
        }
      }
    }

    const pdtLimitReached = estimatedDaytrades >= 3;

    return {
      estimatedDaytrades,
      pdtLimitReached,
      details: details.length > 0 ? details : ['No same-day round trips detected today.'],
    };
  } catch (e: unknown) {
    return {
      estimatedDaytrades: -1,
      pdtLimitReached: false,
      details: [`Daytrade inference failed: ${(e as Error).message}`],
    };
  }
}

async function main(): Promise<void> {
  const client = getDefaultAlpacaClient();
  const account = await client.getAccount() as any;
  const positions = await client.getPositions() as any[];
  const equity = parseFloat(account.equity ?? '0');
  const cash = parseFloat(account.cash ?? '0');
  const longMarketValue = parseFloat(account.long_market_value ?? '0');
  const grossExposure = equity > 0 ? longMarketValue / equity : 0;

  const unauthorizedPositions: AuditResult['unauthorizedPositions'] = [];
  const concentrationBreaches: AuditResult['concentrationBreaches'] = [];

  // Read lock file
  let bannedSymbols: string[] = [];
  try {
    const lockFile = Bun.file('./memory/.trading_lock.json');
    if (await lockFile.exists()) {
      const lock = JSON.parse(await lockFile.text()) as { bannedSymbols?: string[] };
      bannedSymbols = (lock.bannedSymbols ?? []).map((s: string) => s.toUpperCase());
    }
  } catch {
    // ignore
  }

  for (const pos of positions) {
    const symbol = String(pos.symbol).toUpperCase();
    const qty = parseFloat(pos.qty ?? '0');
    const marketValue = parseFloat(pos.market_value ?? '0');
    const weight = equity > 0 ? marketValue / equity : 0;

    if (!UNIVERSE.has(symbol)) {
      unauthorizedPositions.push({
        symbol,
        qty,
        marketValue,
        reason: 'Out of approved investment universe',
      });
    } else if (bannedSymbols.includes(symbol)) {
      unauthorizedPositions.push({
        symbol,
        qty,
        marketValue,
        reason: 'Symbol is in bannedSymbols list',
      });
    }

    // Concentration caps
    if (symbol === 'QQQ' && weight > 0.45) {
      concentrationBreaches.push({ symbol, weight, cap: 0.45, reason: 'QQQ exceeds 45% cap' });
    }
    if (symbol !== 'QQQ' && !UNIVERSE.has(symbol)) {
      // already flagged above
    } else if (symbol !== 'QQQ' && ['SOXX','VOO','EIS','GLD','QTUM','ARKX','SHLD'].includes(symbol)) {
      if (weight > 0.20) {
        concentrationBreaches.push({ symbol, weight, cap: 0.20, reason: 'Non-QQQ ETF exceeds 20% cap' });
      }
    } else if (symbol !== 'QQQ' && UNIVERSE.has(symbol)) {
      if (weight > 0.15) {
        concentrationBreaches.push({ symbol, weight, cap: 0.15, reason: 'Single stock exceeds 15% cap' });
      }
    }
  }

  const daytradeInference = await inferDaytrades();
  const hardLockRecommended = unauthorizedPositions.length > 0 || grossExposure > 1.05 || concentrationBreaches.length > 0;

  const result: AuditResult = {
    timestamp: new Date().toISOString(),
    unauthorizedPositions,
    concentrationBreaches,
    grossExposure,
    equity,
    cash,
    hardLockRecommended,
    daytradeInference,
    summary: hardLockRecommended
      ? `ALERT: ${unauthorizedPositions.length} unauthorized position(s), ${concentrationBreaches.length} concentration breach(es), gross exposure ${(grossExposure*100).toFixed(1)}%. Recommend HARD_LOCK.`
      : `OK: All positions authorized, within concentration caps. Gross exposure ${(grossExposure*100).toFixed(1)}%. Estimated daytrades today: ${daytradeInference?.estimatedDaytrades ?? 'N/A'}.`,
  };

  console.log(JSON.stringify(result, null, 2));

  // If unauthorized positions exist, write emergency note to a temp file
  if (unauthorizedPositions.length > 0) {
    const alertPath = './temp_files/audit_alert.json';
    await Bun.write(alertPath, JSON.stringify(result, null, 2));
    console.error(`\nEMERGENCY: Unauthorized positions detected. Alert written to ${alertPath}.`);
    process.exitCode = 1;
  }

  if (daytradeInference?.pdtLimitReached) {
    console.error(`\nWARNING: Estimated daytrades (${daytradeInference.estimatedDaytrades}) reached or exceeded PDT threshold. No same-day sells for positions opened today.`);
  }
}

main().catch((e) => {
  console.error('Audit failed:', (e as Error).message);
  process.exit(1);
});
