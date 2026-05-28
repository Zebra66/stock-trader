import { type AlpacaMode } from '../tools/alpaca_client_factory';
import { getConfiguredAlpacaModes } from '../tools/alpaca_client_factory';

export const CLOCK_CACHE_TTL_MS = 5 * 60 * 1000;

export interface MarketClockData {
  is_open: boolean;
  next_open: string;
  next_close: string;
}

interface ClockCache {
  data: MarketClockData;
  expiresAt: number;
}

export let clockCache: ClockCache | null = null;

export function setClockCache(entry: ClockCache | null) {
  clockCache = entry;
}

export interface CacheEntry {
  data: any;
  expiresAt: number;
}

export const chartDataCache = new Map<string, CacheEntry>();
export const CHART_CACHE_TTL_MS = 60 * 1000;

export let sp500Cache: CacheEntry | null = null;

export function setSp500Cache(entry: CacheEntry | null) {
  sp500Cache = entry;
}

export const SP500_CACHE_TTL_MS = 60 * 60 * 1000;

function parseRequestedMode(value: string | undefined): AlpacaMode | undefined {
  return value === 'paper' || value === 'live' ? value : undefined;
}

export function resolveDashboardMode(requestedMode?: string): AlpacaMode {
  const explicitMode = parseRequestedMode(requestedMode);
  if (explicitMode) return explicitMode;
  return getConfiguredAlpacaModes().defaultMode;
}
