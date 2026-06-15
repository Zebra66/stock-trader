import { Elysia } from 'elysia';
import { getLogger } from '../../logger';
import { getAlpacaModeLabel, resolveAlpacaCredentials } from '../../tools/alpaca_client_factory';
import { resolveDashboardMode } from '../cache';

const logger = getLogger('web-server');

interface AlpacaPosition {
  symbol: string;
  qty: string;
  avg_entry_price: string;
  current_price: string;
  market_value: string;
  cost_basis: string;
  unrealized_pl: string;
  unrealized_plpc: string;
  side: string;
}

interface AlpacaTradeActivity {
  id: string;
  symbol?: string;
  side?: string;
  qty?: string;
  price?: string;
  transaction_time?: string;
}

export const portfolioRoutes = new Elysia()
  .get('/api/portfolio', async ({ query }: { query: { mode?: string } }) => {
    const mode = resolveDashboardMode(query.mode);
    try {
      const creds = resolveAlpacaCredentials(mode);
      if (!creds) {
        return { error: `${getAlpacaModeLabel(mode)} credentials not configured`, positions: [], trades: [] };
      }
      const baseUrl = creds.paper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
      const headers = {
        'APCA-API-KEY-ID': creds.keyId,
        'APCA-API-SECRET-KEY': creds.secretKey,
      };

      const [posRes, actRes] = await Promise.all([
        fetch(`${baseUrl}/v2/positions`, { headers }),
        fetch(`${baseUrl}/v2/account/activities?activity_type=FILL&page_size=100`, { headers }),
      ]);

      if (!posRes.ok) {
        const errText = await posRes.text();
        logger.warn({ status: posRes.status }, 'portfolio positions API error');
        return { error: `Alpaca positions API ${posRes.status}: ${errText}`, positions: [], trades: [] };
      }
      if (!actRes.ok) {
        const errText = await actRes.text();
        logger.warn({ status: actRes.status }, 'portfolio activities API error');
        return { error: `Alpaca activities API ${actRes.status}: ${errText}`, positions: [], trades: [] };
      }

      const positions = await posRes.json() as AlpacaPosition[];
      const activities = await actRes.json() as AlpacaTradeActivity[];

      const trades = activities
        .filter((a) => !!a.transaction_time)
        .sort((a, b) => new Date(b.transaction_time!).getTime() - new Date(a.transaction_time!).getTime());

      return { positions, trades, mode };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.error({ err: msg, mode }, 'portfolio API error');
      return { error: msg, positions: [], trades: [] };
    }
  });
