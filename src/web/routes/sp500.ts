import { Elysia } from 'elysia';
import * as fs from 'fs/promises';
import { getLogger } from '../../logger';
import { getConfiguredAlpacaModes, resolveAlpacaCredentials } from '../../tools/alpaca_client_factory';
import { readDeposits } from '../deposits';
import { sp500Cache, setSp500Cache, SP500_CACHE_TTL_MS } from '../cache';

const logger = getLogger('web-server');

interface AlpacaBar {
  t: string;
  o: number;
  c: number;
  h: number;
  l: number;
  v: number;
}

interface AlpacaBarsResponse {
  bars: AlpacaBar[] | null;
}

export const sp500Routes = new Elysia()
  .get('/api/sp500-comparison', async () => {
    if (sp500Cache && Date.now() < sp500Cache.expiresAt) {
      return sp500Cache.data;
    }
    try {
      const deposits = await readDeposits();
      if (deposits.length === 0) {
        return { error: 'No deposits recorded yet', changePct: null };
      }

      const firstDeposit = deposits[0]!;
      const startDate = firstDeposit.at;

      const { defaultMode } = getConfiguredAlpacaModes();
      const creds = resolveAlpacaCredentials(defaultMode);
      if (!creds) return { error: 'Alpaca credentials not configured', changePct: null };

      const dataBase = 'https://data.alpaca.markets';
      const headers = {
        'APCA-API-KEY-ID': creds.keyId,
        'APCA-API-SECRET-KEY': creds.secretKey,
      };

      let spyStart: number;
      let spyStartDateStr: string | undefined;
      try {
        const spyCsv = await fs.readFile('./memory/spy.csv', 'utf8');
        spyStart = parseFloat(spyCsv.trim());
        if (Number.isNaN(spyStart)) throw new Error('Invalid spy.csv');
        spyStartDateStr = startDate;
      } catch (err) {
        const startDay = startDate.substring(0, 10);
        const endScan = new Date(startDay);
        endScan.setDate(endScan.getDate() + 7);
        const endScanStr = endScan.toISOString().substring(0, 10);

        const startRes = await fetch(
          `${dataBase}/v2/stocks/SPY/bars?timeframe=1Day&start=${startDay}&end=${endScanStr}&limit=1&feed=iex`,
          { headers },
        );

        if (!startRes.ok) {
          const errText = await startRes.text();
          logger.warn({ status: startRes.status, body: errText }, 'SPY start bar fetch failed');
          return { error: `Alpaca data API ${startRes.status}`, changePct: null };
        }
        const startData = await startRes.json() as AlpacaBarsResponse;
        const startBar = startData.bars?.[0];
        if (!startBar) {
          return { error: 'No SPY data found near first deposit date', changePct: null };
        }
        spyStart = startBar.c;
        spyStartDateStr = startBar.t;
        await fs.mkdir('./memory', { recursive: true }).catch(() => {});
        await fs.writeFile('./memory/spy.csv', spyStart.toString(), 'utf8');
      }

      const today = new Date();
      const todayStr = today.toISOString().substring(0, 10);
      const lookbackDate = new Date(today);
      lookbackDate.setDate(lookbackDate.getDate() - 7);
      const lookbackStr = lookbackDate.toISOString().substring(0, 10);

      const latestRes = await fetch(
        `${dataBase}/v2/stocks/SPY/bars?timeframe=1Day&start=${lookbackStr}&end=${todayStr}&limit=10&feed=iex`,
        { headers },
      );
      if (!latestRes.ok) {
        const errText = await latestRes.text();
        logger.warn({ status: latestRes.status, body: errText }, 'SPY latest bar fetch failed');
        return { error: `Alpaca data API ${latestRes.status}`, changePct: null };
      }
      const latestData = await latestRes.json() as AlpacaBarsResponse;
      const bars = latestData.bars ?? [];
      const latestBar = bars[bars.length - 1];
      if (!latestBar) {
        return { error: 'No recent SPY bar found', changePct: null };
      }
      const spyCurrent = latestBar.c;

      const changePct = ((spyCurrent - spyStart) / spyStart) * 100;

      const result = {
        changePct: Math.round(changePct * 100) / 100,
        startDate: spyStartDateStr,
        latestDate: latestBar.t,
        spyStart: Math.round(spyStart * 100) / 100,
        spyCurrent: Math.round(spyCurrent * 100) / 100,
      };

      setSp500Cache({ data: result, expiresAt: Date.now() + SP500_CACHE_TTL_MS });
      return result;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'sp500-comparison failed');
      return { error: msg, changePct: null };
    }
  });
