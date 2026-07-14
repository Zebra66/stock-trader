import { getConcentrationCapPct, getTradingConfig, isConfiguredEtf } from '../trading_config';

export interface ConcentrationCheckInput {
  symbol: string;
  qty: number;
  limitPrice?: number;
  latestBarPrice?: number;
  currentMktValue: number;
  equity: number;
}

export interface ConcentrationCheckResult {
  ok: boolean;
  error?: string;
  pct?: number;
}

export { getConcentrationCapPct };

function breachLabel(symbol: string): string {
  const sym = symbol.toUpperCase();
  const overrides = getTradingConfig().concentration.symbolCapsPct;
  if (overrides[sym] !== undefined) {
    return `${sym} concentration cap breached`;
  }
  if (isConfiguredEtf(sym)) {
    return 'ETF concentration cap breached';
  }
  return 'Single-stock concentration cap breached';
}

export function checkConcentrationCap(input: ConcentrationCheckInput): ConcentrationCheckResult {
  const { symbol, qty, limitPrice, latestBarPrice, currentMktValue, equity } = input;

  if (!equity || equity <= 0) {
    return { ok: false, error: `Invalid equity ${equity}` };
  }

  const price =
    limitPrice !== undefined && !Number.isNaN(limitPrice) && limitPrice > 0
      ? limitPrice
      : latestBarPrice !== undefined && !Number.isNaN(latestBarPrice) && latestBarPrice > 0
      ? latestBarPrice
      : 0;

  if (!price || price <= 0) {
    return { ok: false, error: `No price for ${symbol}` };
  }

  const orderValue = qty * price;
  const newMkt = currentMktValue + orderValue;
  const pct = (newMkt / equity) * 100;
  const symUpper = symbol.toUpperCase();
  const cap = getConcentrationCapPct(symUpper);

  if (pct > cap) {
    return {
      ok: false,
      error: `${breachLabel(symUpper)}. Post-order ${symUpper} would be ${pct.toFixed(2)}% of equity (max ${cap}%).`,
      pct,
    };
  }

  return { ok: true, pct };
}
