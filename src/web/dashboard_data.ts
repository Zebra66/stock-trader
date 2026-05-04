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
}

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

export async function buildDashboardData(client: DashboardDataClient): Promise<DashboardData> {
  const account = await client.getAccount();
  const equity = parseNumeric(account.equity);
  const cash = parseNumeric(account.cash);
  const buyingPower = parseNumeric(account.buying_power);
  const lastEquity = parseNumeric(account.last_equity);
  const dayChange = equity - lastEquity;
  const dayChangePct = lastEquity === 0 ? 0 : dayChange / lastEquity;

  let history: DashboardPoint[] = [];
  let historyUnavailableMessage: string | undefined;

  try {
    const portfolioHistory = await client.getPortfolioHistory({ period: '1W', timeframe: '1H' });
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

  let buys: DashboardTradePoint[] = [];
  let sells: DashboardTradePoint[] = [];

  if (history.length > 0) {
    try {
      const activities = await client.getAccountActivities({ activityTypes: ['FILL'] });

      for (const activity of activities) {
        if (!activity.transaction_time) {
          continue;
        }

        const timeMs = new Date(activity.transaction_time).getTime();
        const point: DashboardTradePoint = {
          x: timeMs,
          y: findNearestEquity(history, timeMs),
          symbol: activity.symbol,
          qty: parseNumeric(activity.qty),
          price: parseNumeric(activity.price),
        };

        if (activity.side === 'buy') {
          buys.push(point);
        } else {
          sells.push(point);
        }
      }
    } catch {
      buys = [];
      sells = [];
    }
  }

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
  };
}
