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
  history: DashboardPoint[];
  buys: DashboardTradePoint[];
  sells: DashboardTradePoint[];
  equity: number;
  cash: number;
  buyingPower: number;
  dayChange: number;
  dayChangePct: number;
  historyUnavailableMessage?: string;
  periodStart: number;   // ms — start of the requested period window
  periodEnd: number;     // ms — end of the requested period window
}

/** Supported view windows */
export type ChartPeriod = '1D' | '1W' | '1M';

/** Map period → Alpaca API period string and timeframe resolution */
const PERIOD_CONFIG: Record<ChartPeriod, { alpacaPeriod: string; alpacaTimeframe: string; windowMs: number }> = {
  '1D': { alpacaPeriod: '1D',  alpacaTimeframe: '10Min', windowMs: 24 * 60 * 60 * 1000 },
  '1W': { alpacaPeriod: '1W',  alpacaTimeframe: '10Min', windowMs: 7 * 24 * 60 * 60 * 1000 },
  '1M': { alpacaPeriod: '1M',  alpacaTimeframe: '30Min', windowMs: 30 * 24 * 60 * 60 * 1000 },
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
): Promise<DashboardData> {
  const account = await client.getAccount();
  const equity = parseNumeric(account.equity);
  const cash = parseNumeric(account.cash);
  const buyingPower = parseNumeric(account.buying_power);
  const lastEquity = parseNumeric(account.last_equity);
  const dayChange = equity - lastEquity;
  const dayChangePct = lastEquity === 0 ? 0 : dayChange / lastEquity;

  const config = PERIOD_CONFIG[period] ?? PERIOD_CONFIG['1W'];
  const nowMs = Date.now();
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

    const candidateHistory = timestamps.map((timestamp, index) => ({
      x: parseNumeric(timestamp) * 1000,
      y: parseNumeric(equities[index]),
    }));

    if (isHistoryUsable(candidateHistory, equity)) {
      history = candidateHistory;
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

      // Find y position: snap to nearest equity history point, or use 0 as fallback
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
    historyUnavailableMessage,
    periodStart: history.length > 0 ? (history[0]?.x ?? periodStart) : periodStart,
    periodEnd: history.length > 0 ? (history[history.length - 1]?.x ?? periodEnd) : periodEnd,
  };
}
