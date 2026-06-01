import { Elysia } from 'elysia';
import { getLogger } from '../../logger';
import { createAlpacaClient, getAlpacaModeLabel, getConfiguredAlpacaModes } from '../../tools/alpaca_client_factory';
import { buildDashboardData } from '../dashboard_data';
import { readDeposits } from '../deposits';
import { chartDataCache, CHART_CACHE_TTL_MS, resolveDashboardMode } from '../cache';
import type { ChartPeriod } from '../dashboard_data';

const logger = getLogger('web-server');

export const chartDataRoutes = new Elysia()
  .get('/api/chart-data', async ({ query }: { query: { mode?: string; period?: string } }) => {
    const mode = resolveDashboardMode(query.mode);
    const { modes } = getConfiguredAlpacaModes();
    const validPeriods: ChartPeriod[] = ['1D', '1W', '1M'];
    const period: ChartPeriod = validPeriods.includes(query.period as ChartPeriod)
      ? (query.period as ChartPeriod)
      : '1M';

    const cacheKey = `${mode}:${period}`;
    const cached = chartDataCache.get(cacheKey);
    if (cached && Date.now() < cached.expiresAt) {
      return cached.data;
    }

    try {
      const alpaca = createAlpacaClient(mode);
      const deposits = await readDeposits();
      const data = await buildDashboardData(alpaca, period, deposits);

      const result = {
        ...data,
        mode,
        modeLabel: getAlpacaModeLabel(mode),
        availableModes: modes,
      };

      chartDataCache.set(cacheKey, { data: result, expiresAt: Date.now() + CHART_CACHE_TTL_MS });
      return result;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.error({ err: msg, mode }, 'chart-data API error');
      return {
        error: msg,
        mode,
        modeLabel: getAlpacaModeLabel(mode),
        availableModes: modes,
      };
    }
  });
