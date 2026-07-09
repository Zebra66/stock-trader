import '../env';
import { getDefaultAlpacaClient } from './alpaca_client_factory';
import { withTimeout } from './with_timeout';
import { AlpacaPosition } from '@alpacahq/alpaca-trade-api/dist/resources/datav2/entityv2';
import type Alpaca from '@alpacahq/alpaca-trade-api';

let _alpaca: Alpaca | null = null;
function getAlpaca(): Alpaca {
  if (!_alpaca) _alpaca = getDefaultAlpacaClient();
  return _alpaca;
}

const API_TIMEOUT_MS = 15_000;

const SNAPSHOT_PATH = './memory/tactical_last_prices.json';

const BENCHMARK_SYMBOLS = ['SPY', 'QQQ', 'SOXX', 'XLK', 'GLD', 'SMH'];

interface LastSnapshot {
  timestamp: string;
  prices: Record<string, number>;
}

interface EventReport {
  timestamp: string;
  priorTimestamp: string | null;
  broadMarket: Array<{
    symbol: string;
    priorPrice: number | null;
    currentPrice: number;
    pctChange: number;
    severity: 'OK' | 'MINOR' | 'MAJOR' | 'CRITICAL';
  }>;
  heldPositions: Array<{
    symbol: string;
    qty: number;
    priorPrice: number | null;
    currentPrice: number;
    pctChange: number;
    severity: 'OK' | 'MINOR' | 'MAJOR' | 'CRITICAL';
  }>;
  sectorRotation: {
    signal: 'NONE' | 'WEAK' | 'STRONG';
    details: string;
  };
  classification: 'NONE' | 'MINOR' | 'MAJOR' | 'CRITICAL';
  recommendedResponse: string[];
}

function classifyBroadMarket(pctChange: number): EventReport['broadMarket'][0]['severity'] {
  const abs = Math.abs(pctChange);
  if (abs >= 0.015) return 'CRITICAL';
  if (abs >= 0.01) return 'MAJOR';
  if (abs >= 0.005) return 'MINOR';
  return 'OK';
}

function classifyPosition(pctChange: number): EventReport['heldPositions'][0]['severity'] {
  if (pctChange <= -0.04) return 'CRITICAL';
  if (pctChange <= -0.025) return 'MAJOR';
  if (pctChange <= -0.015) return 'MINOR';
  if (pctChange >= 0.04) return 'MAJOR'; // upward spike also noteworthy
  return 'OK';
}

async function loadLastSnapshot(): Promise<LastSnapshot | null> {
  try {
    const raw = await Bun.file(SNAPSHOT_PATH).text();
    return JSON.parse(raw) as LastSnapshot;
  } catch {
    return null;
  }
}

async function saveSnapshot(prices: Record<string, number>) {
  const snapshot: LastSnapshot = {
    timestamp: new Date().toISOString(),
    prices,
  };
  await Bun.write(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2));
}

async function fetchPrice(symbol: string): Promise<number | null> {
  try {
    const snap = await withTimeout(getAlpaca().getSnapshot(symbol), API_TIMEOUT_MS, `Alpaca getSnapshot(${symbol})`) as {
      LatestTrade?: { Price?: number };
      MinuteBar?: { ClosePrice?: number };
    };
    return snap.LatestTrade?.Price ?? snap.MinuteBar?.ClosePrice ?? null;
  } catch {
    return null;
  }
}

function pctChange(oldPrice: number, newPrice: number): number {
  return (newPrice - oldPrice) / oldPrice;
}

export async function detectEvents(): Promise<EventReport> {
  const now = new Date().toISOString();
  const prior = await loadLastSnapshot();

  // Fetch positions
  let positions: AlpacaPosition[] = [];
  try {
    positions = await withTimeout(getAlpaca().getPositions(), API_TIMEOUT_MS, 'Alpaca getPositions') as AlpacaPosition[];
  } catch {
    positions = [];
  }

  const heldSymbols = positions.map(p => p.symbol);
  const allSymbols = Array.from(new Set([...heldSymbols, ...BENCHMARK_SYMBOLS]));

  const currentPrices: Record<string, number> = {};
  for (const sym of allSymbols) {
    const price = await fetchPrice(sym);
    if (price != null) currentPrices[sym] = price;
  }

  const broadMarket: EventReport['broadMarket'] = [];
  for (const sym of BENCHMARK_SYMBOLS) {
    const cur = currentPrices[sym];
    const priorPrice = prior?.prices[sym] ?? null;
    if (cur == null) continue;
    const change = priorPrice != null ? pctChange(priorPrice, cur) : 0;
    broadMarket.push({
      symbol: sym,
      priorPrice,
      currentPrice: cur,
      pctChange: change,
      severity: classifyBroadMarket(change),
    });
  }

  const heldPositions: EventReport['heldPositions'] = [];
  for (const p of positions) {
    const cur = currentPrices[p.symbol];
    const priorPrice = prior?.prices[p.symbol] ?? null;
    if (cur == null) continue;
    const change = priorPrice != null ? pctChange(priorPrice, cur) : 0;
    heldPositions.push({
      symbol: p.symbol,
      qty: Number(p.qty),
      priorPrice,
      currentPrice: cur,
      pctChange: change,
      severity: classifyPosition(change),
    });
  }

  // Sector rotation: semis down while defensives up
  const soxx = broadMarket.find(b => b.symbol === 'SOXX');
  const smh = broadMarket.find(b => b.symbol === 'SMH');
  const gld = broadMarket.find(b => b.symbol === 'GLD');
  const semiChange = Math.min(soxx?.pctChange ?? 0, smh?.pctChange ?? 0);
  const defensiveChange = gld?.pctChange ?? 0;
  let rotationSignal: EventReport['sectorRotation']['signal'] = 'NONE';
  let rotationDetails = 'No significant rotation detected.';
  if (semiChange <= -0.015 && defensiveChange >= 0.005) {
    rotationSignal = 'STRONG';
    rotationDetails = `Semis selling off (${(semiChange * 100).toFixed(2)}%) while defensives rally (${(defensiveChange * 100).toFixed(2)}%)`;
  } else if (semiChange <= -0.01 && defensiveChange >= 0.003) {
    rotationSignal = 'WEAK';
    rotationDetails = `Semis weak (${(semiChange * 100).toFixed(2)}%) with defensives bid (${(defensiveChange * 100).toFixed(2)}%)`;
  }

  // Overall classification
  const allSeverities = [
    ...broadMarket.map(b => b.severity),
    ...heldPositions.map(p => p.severity),
  ];
  let classification: EventReport['classification'] = 'NONE';
  if (allSeverities.includes('CRITICAL')) classification = 'CRITICAL';
  else if (allSeverities.includes('MAJOR') || rotationSignal === 'STRONG') classification = 'MAJOR';
  else if (allSeverities.includes('MINOR') || rotationSignal === 'WEAK') classification = 'MINOR';

  const recommendedResponse: string[] = [];
  if (classification === 'CRITICAL') {
    recommendedResponse.push('IMMEDIATE: Review all open SELL stops. Execute any protective sells that are now deeper in the money.');
    recommendedResponse.push('Do NOT initiate new buys during a crash.');
    recommendedResponse.push('Update todo.md to mark all buy conditions as SUSPENDED until hourly reset.');
  } else if (classification === 'MAJOR') {
    recommendedResponse.push('Reassess all open buy conditions — some may no longer be valid in this tape.');
    recommendedResponse.push('Consider protective trims on positions that have hit MAJOR drop thresholds if below their stop-loss levels.');
    recommendedResponse.push('Do NOT chase breakouts during elevated volatility.');
    recommendedResponse.push('Update todo.md and flag in MEMORY.md that an autonomous override occurred.');
  } else if (classification === 'MINOR') {
    recommendedResponse.push('Monitor closely. No autonomous action required unless a specific todo condition is met.');
  } else {
    recommendedResponse.push('No events. Proceed with normal todo execution.');
  }

  const report: EventReport = {
    timestamp: now,
    priorTimestamp: prior?.timestamp ?? null,
    broadMarket,
    heldPositions,
    sectorRotation: { signal: rotationSignal, details: rotationDetails },
    classification,
    recommendedResponse,
  };

  // Save snapshot for next run
  await saveSnapshot(currentPrices);

  return report;
}

function formatReport(report: EventReport): string {
  const lines: string[] = [];
  lines.push('=== MAJOR EVENT DETECTOR REPORT ===');
  lines.push(`Timestamp: ${report.timestamp}`);
  lines.push(`Prior snapshot: ${report.priorTimestamp ?? '(first run — no comparison baseline)'}`);
  lines.push('');
  lines.push('BROAD MARKET:');
  for (const m of report.broadMarket) {
    const arrow = m.pctChange >= 0 ? '+' : '';
    lines.push(`  ${m.symbol.padEnd(5)}: ${(m.priorPrice ?? 0).toFixed(2)} → ${m.currentPrice.toFixed(2)}  (${arrow}${(m.pctChange * 100).toFixed(2)}%)  [${m.severity}]`);
  }
  lines.push('');
  lines.push('HELD POSITIONS:');
  for (const p of report.heldPositions) {
    const arrow = p.pctChange >= 0 ? '+' : '';
    lines.push(`  ${p.symbol.padEnd(5)}: ${(p.priorPrice ?? 0).toFixed(2)} → ${p.currentPrice.toFixed(2)}  (${arrow}${(p.pctChange * 100).toFixed(2)}%)  qty=${p.qty}  [${p.severity}]`);
  }
  lines.push('');
  lines.push(`SECTOR ROTATION: ${report.sectorRotation.signal}`);
  lines.push(`  ${report.sectorRotation.details}`);
  lines.push('');
  lines.push(`EVENT CLASSIFICATION: ${report.classification}`);
  lines.push('');
  lines.push('RECOMMENDED RESPONSE:');
  for (const r of report.recommendedResponse) {
    lines.push(`  • ${r}`);
  }
  lines.push('');
  lines.push('=== END REPORT ===');
  return lines.join('\n');
}

async function main() {
  const report = await detectEvents();
  console.log(formatReport(report));

  // Also write structured JSON for programmatic use
  await Bun.write('./temp_files/event_report.json', JSON.stringify(report, null, 2));
}

main();
