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

  const hardLockRecommended = unauthorizedPositions.length > 0 || grossExposure > 1.05 || concentrationBreaches.length > 0;

  const result: AuditResult = {
    timestamp: new Date().toISOString(),
    unauthorizedPositions,
    concentrationBreaches,
    grossExposure,
    equity,
    cash,
    hardLockRecommended,
    summary: hardLockRecommended
      ? `ALERT: ${unauthorizedPositions.length} unauthorized position(s), ${concentrationBreaches.length} concentration breach(es), gross exposure ${(grossExposure*100).toFixed(1)}%. Recommend HARD_LOCK.`
      : `OK: All positions authorized, within concentration caps. Gross exposure ${(grossExposure*100).toFixed(1)}%.`,
  };

  console.log(JSON.stringify(result, null, 2));

  // If unauthorized positions exist, write emergency note to a temp file
  if (unauthorizedPositions.length > 0) {
    const alertPath = './temp_files/audit_alert.json';
    await Bun.write(alertPath, JSON.stringify(result, null, 2));
    console.error(`\nEMERGENCY: Unauthorized positions detected. Alert written to ${alertPath}.`);
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error('Audit failed:', (e as Error).message);
  process.exit(1);
});
