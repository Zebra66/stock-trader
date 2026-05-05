import { type DepositEntry, totalInvestedAt } from './deposits';

export interface AlpacaAccountSnapshot {
  equity?: number | string;
  cash?: number | string;
  buying_power?: number | string;
  last_equity?: number | string;
}

export interface AlpacaPortfolioHistorySnapshot {
  timestamp?: Array<number | string>;
  equity?: Array<number | string>;
}

export interface AlpacaActivitySnapshot {
  transaction_time?: string;
  price?: number | string;
  symbol?: string;
  qty?: number | string;
  side?: string;
}

export interface DashboardDataClient {
  getAccount(): Promise<AlpacaAccountSnapshot>;
  getPortfolioHistory(args: { period: string; timeframe: string }): Promise<AlpacaPortfolioHistorySnapshot>;
  getAccountActivities(args: { activityTypes: string[] }): Promise<AlpacaActivitySnapshot[]>;
}

export interface DashboardPoint {
  x: number;
  y: number;
}

export interface DashboardTradePoint extends DashboardPoint {
  symbol?: string;
  qty: number;
  price: number;
}

export interface DashboardData {
  history: DashboardPoint[];         // Y = P&L in USD at each point
  buys: DashboardTradePoint[];
  sells: DashboardTradePoint[];
  equity: number;                    // current total equity
  cash: number;
  buyingPower: number;
  dayChange: number;
  dayChangePct: number;
  totalInvested: number;             // total capital deposited up to now
  currentPnl: number;               // equity - totalInvested (USD)
  currentPnlPct: number;            // (currentPnl / totalInvested) * 100
  historyUnavailableMessage?: string;
  periodStart: number;   // ms — start of the requested period window
  periodEnd: number;     // ms — end of the requested period window
}

/** Supported view windows */
export type ChartPeriod = '1D' | '1W' | '1M';

/** Map period → Alpaca API period string and timeframe resolution */
const PERIOD_CONFIG: Record<ChartPeriod, { alpacaPeriod: string; alpacaTimeframe: string; windowMs: number }> = {
  '1D': { alpacaPeriod: '1D',  alpacaTimeframe: '5Min', windowMs: 24 * 60 * 60 * 1000 },
  '1W': { alpacaPeriod: '1W',  alpacaTimeframe: '5Min', windowMs: 7 * 24 * 60 * 60 * 1000 },
  '1M': { alpacaPeriod: '1M',  alpacaTimeframe: '15Min', windowMs: 30 * 24 * 60 * 60 * 1000 },
};

function parseNumeric(value: number | string | undefined): number {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === 'string') {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

function findNearestEquity(history: DashboardPoint[], timeMs: number): number {
  if (history.length === 0) {
    return 0;
  }

  for (const point of history) {
    if (point.x >= timeMs) {
      return point.y;
    }
  }

  return history[history.length - 1]?.y ?? 0;
}

function isHistoryUsable(history: DashboardPoint[], equity: number): boolean {
  if (history.length === 0) {
    return false;
  }

  if (equity <= 0) {
    return true;
  }

  return history.some((point) => point.y > 0);
}

export async function buildDashboardData(
  client: DashboardDataClient,
  period: ChartPeriod = '1W',
  deposits: DepositEntry[] = [],
): Promise<DashboardData> {
  const account = await client.getAccount();
  const equity = parseNumeric(account.equity);
  const cash = parseNumeric(account.cash);
  const buyingPower = parseNumeric(account.buying_power);
  const lastEquity = parseNumeric(account.last_equity);
  const dayChange = equity - lastEquity;
  const dayChangePct = lastEquity === 0 ? 0 : dayChange / lastEquity;

  // P&L baseline: total capital invested up to now
  const nowMs = Date.now();
  const totalInvested = totalInvestedAt(deposits, nowMs);
  const currentPnl = totalInvested > 0 ? equity - totalInvested : 0;
  const currentPnlPct = totalInvested > 0 ? (currentPnl / totalInvested) * 100 : 0;

  const config = PERIOD_CONFIG[period] ?? PERIOD_CONFIG['1W'];
  const periodEnd = nowMs;
  const periodStart = nowMs - config.windowMs;

  let history: DashboardPoint[] = [];
  let historyUnavailableMessage: string | undefined;

  try {
    const portfolioHistory = await client.getPortfolioHistory({
      period: config.alpacaPeriod,
      timeframe: config.alpacaTimeframe,
    });
    const timestamps = portfolioHistory.timestamp ?? [];
    const equities = portfolioHistory.equity ?? [];

    // Step 1: build raw equity history and validate it has real data.
    // isHistoryUsable MUST check raw equity (not P&L), because if the portfolio
    // is down vs the deposit, all P&L values are negative — and the check
    // `some(p => p.y > 0)` would wrongly declare real data "unavailable".
    const rawHistory: DashboardPoint[] = timestamps
      .map((timestamp, index) => ({
        x: parseNumeric(timestamp) * 1000,
        y: parseNumeric(equities[index]),
      }))
      .filter(point => point.x % (10 * 60 * 1000) === 0);

    if (isHistoryUsable(rawHistory, equity)) {
      // Step 2: transform Y from raw equity → P&L (equity - invested at that moment)
      history = rawHistory.map((point) => {
        const investedAtPoint = totalInvestedAt(deposits, point.x);
        return {
          x: point.x,
          y: investedAtPoint > 0 ? point.y - investedAtPoint : point.y,
        };
      });
    } else {
      historyUnavailableMessage = 'Portfolio history is currently unavailable.';
    }
  } catch {
    historyUnavailableMessage = 'Portfolio history is currently unavailable.';
  }

  // Always attempt to fetch trade activities regardless of history availability.
  // We need them even if history has gaps so the user can see what trades happened.
  let allBuys: DashboardTradePoint[] = [];
  let allSells: DashboardTradePoint[] = [];

  try {
    const activities = await client.getAccountActivities({ activityTypes: ['FILL'] });

    for (const activity of activities) {
      if (!activity.transaction_time) {
        continue;
      }

      const timeMs = new Date(activity.transaction_time).getTime();

      // Find y position: snap to nearest P&L history point, or use 0 as fallback
      const yVal = history.length > 0 ? findNearestEquity(history, timeMs) : 0;

      const point: DashboardTradePoint = {
        x: timeMs,
        y: yVal,
        symbol: activity.symbol,
        qty: parseNumeric(activity.qty),
        price: parseNumeric(activity.price),
      };

      if (activity.side === 'buy') {
        allBuys.push(point);
      } else {
        allSells.push(point);
      }
    }
  } catch {
    allBuys = [];
    allSells = [];
  }

  // Filter trades to the requested window only
  const windowStart = history.length > 0 ? (history[0]?.x ?? periodStart) : periodStart;
  const buys = allBuys.filter((p) => p.x >= windowStart);
  const sells = allSells.filter((p) => p.x >= windowStart);

  return {
    history,
    buys,
    sells,
    equity,
    cash,
    buyingPower,
    dayChange,
    dayChangePct,
    totalInvested,
    currentPnl,
    currentPnlPct,
    historyUnavailableMessage,
    periodStart: history.length > 0 ? (history[0]?.x ?? periodStart) : periodStart,
    periodEnd: history.length > 0 ? (history[history.length - 1]?.x ?? periodEnd) : periodEnd,
  };
}
