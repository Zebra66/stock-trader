import { Elysia } from 'elysia';
import * as fs from 'fs/promises';
import { getPaused, setPaused } from '../../harness';
import { getLogger } from '../../logger';
import { getConfiguredAlpacaModes, resolveAlpacaCredentials } from '../../tools/alpaca_client_factory';
import { clockCache, setClockCache, CLOCK_CACHE_TTL_MS, resolveDashboardMode } from '../cache';
import type { MarketClockData } from '../cache';

const logger = getLogger('web-server');

export const dashboardRoutes = new Elysia()
  .get('/api/health', () => {
    return { status: 'ok', timestamp: Date.now(), deployKey: process.env.DEPLOY_API_KEY };
  })
  .get('/api/status', () => {
    return { paused: getPaused() };
  })
  .post('/api/toggle', () => {
    setPaused(!getPaused());
    return { paused: getPaused() };
  })
  .get('/api/market-clock', async () => {
    if (clockCache && Date.now() < clockCache.expiresAt) {
      return clockCache.data;
    }
    try {
      const { defaultMode } = getConfiguredAlpacaModes();
      const creds = resolveAlpacaCredentials(defaultMode);
      if (!creds) throw new Error('Alpaca credentials not configured');
      const baseUrl = creds.paper
        ? 'https://paper-api.alpaca.markets'
        : 'https://api.alpaca.markets';
      const res = await fetch(`${baseUrl}/v2/clock`, {
        headers: {
          'APCA-API-KEY-ID': creds.keyId,
          'APCA-API-SECRET-KEY': creds.secretKey,
        },
      });
      if (!res.ok) {
        const errText = await res.text();
        logger.warn({ status: res.status, body: errText }, 'Alpaca clock API error');
        return { error: `Alpaca clock API ${res.status}` };
      }
      const data = await res.json() as MarketClockData;
      setClockCache({ data, expiresAt: Date.now() + CLOCK_CACHE_TTL_MS });
      return data;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'market-clock fetch failed');
      return { error: msg };
    }
  })
  .get('/api/memory', async () => {
    try {
      const memory = await fs.readFile('memory/MEMORY.md', 'utf8');
      return memory;
    } catch (e) {
      return "Memory file not found.";
    }
  })
  .get('/api/ledger', async () => {
    try {
      const file = Bun.file('memory/ledger.md');
      const reader = file.stream().getReader();
      const decoder = new TextDecoder();
      let text = '';
      let lineCount = 0;
      const TARGET_LINES = 60;

      while (lineCount < TARGET_LINES) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: !done });
        lineCount = text.split('\n').length - 1;
      }
      reader.releaseLock();

      const allLines = text.split('\n');
      const enough = allLines.length >= 4 && allLines[3].startsWith('Format');
      const bodyStart = enough ? 4 : 0;
      const header = allLines.slice(0, bodyStart);
      const body = allLines.slice(bodyStart).filter(l => l.trim());
      const lines = [...header, '', ...body.slice(0, 50)];
      return lines.join('\n');
    } catch (e) {
      return "Ledger file not found.";
    }
  });
