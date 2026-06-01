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

const ETF_SYMBOLS = new Set(['VOO', 'SOXX', 'GLD', 'EIS', 'ARKX']);

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
  const isETF = symUpper === 'QQQ' || ETF_SYMBOLS.has(symUpper);

  if (symUpper === 'QQQ' && pct > 45) {
    return {
      ok: false,
      error: `QQQ concentration cap breached. Post-order QQQ would be ${pct.toFixed(2)}% of equity (max 45%).`,
      pct,
    };
  }
  if (isETF && symUpper !== 'QQQ' && pct > 20) {
    return {
      ok: false,
      error: `ETF concentration cap breached. Post-order ${symbol} would be ${pct.toFixed(2)}% of equity (max 20%).`,
      pct,
    };
  }
  if (!isETF && pct > 15) {
    return {
      ok: false,
      error: `Single-stock concentration cap breached. Post-order ${symbol} would be ${pct.toFixed(2)}% of equity (max 15%).`,
      pct,
    };
  }

  return { ok: true, pct };
}
