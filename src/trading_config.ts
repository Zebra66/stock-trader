import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export interface TradingConcentrationConfig {
  symbolCapsPct: Record<string, number>;
  etfSymbols: string[];
  etfCapPct: number;
  stockCapPct: number;
}

export interface TradingRiskConfig {
  hardLockGrossExposureAbove: number;
}

export interface TradingLedgerConfig {
  priceHallucinationMinRatio: number;
  priceHallucinationMaxRatio: number;
  skipIntegerBelow: number;
}

export interface TradingEvaluationConfig {
  inceptionDate: string;
  spyBaseline: number;
}

export interface TradingConfig {
  universe: string[];
  concentration: TradingConcentrationConfig;
  risk: TradingRiskConfig;
  ledger: TradingLedgerConfig;
  evaluation: TradingEvaluationConfig;
}

const CONFIG_PATH = fileURLToPath(new URL('../config/trading.json', import.meta.url));

let cached: TradingConfig | null = null;

function isPositiveNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function validateTradingConfig(parsed: Partial<TradingConfig>): TradingConfig {
  if (!Array.isArray(parsed.universe) || parsed.universe.length === 0) {
    throw new Error('trading.json: universe must be a non-empty string array');
  }
  if (parsed.universe.some((s) => typeof s !== 'string' || s.trim() === '')) {
    throw new Error('trading.json: universe entries must be non-empty strings');
  }

  const concentration = parsed.concentration;
  if (!concentration || typeof concentration !== 'object') {
    throw new Error('trading.json: concentration is required');
  }
  if (!concentration.symbolCapsPct || typeof concentration.symbolCapsPct !== 'object') {
    throw new Error('trading.json: concentration.symbolCapsPct is required');
  }
  if (!Array.isArray(concentration.etfSymbols) || concentration.etfSymbols.length === 0) {
    throw new Error('trading.json: concentration.etfSymbols must be a non-empty array');
  }
  if (!isPositiveNumber(concentration.etfCapPct) || !isPositiveNumber(concentration.stockCapPct)) {
    throw new Error('trading.json: etfCapPct and stockCapPct must be positive numbers');
  }

  const risk = parsed.risk;
  if (!risk || !isPositiveNumber(risk.hardLockGrossExposureAbove)) {
    throw new Error('trading.json: risk.hardLockGrossExposureAbove must be a positive number');
  }

  const ledger = parsed.ledger;
  if (
    !ledger ||
    !isPositiveNumber(ledger.priceHallucinationMinRatio) ||
    !isPositiveNumber(ledger.priceHallucinationMaxRatio) ||
    !isPositiveNumber(ledger.skipIntegerBelow)
  ) {
    throw new Error('trading.json: ledger ratios/skipIntegerBelow must be positive numbers');
  }

  const evaluation = parsed.evaluation;
  if (
    !evaluation ||
    typeof evaluation.inceptionDate !== 'string' ||
    !isPositiveNumber(evaluation.spyBaseline)
  ) {
    throw new Error('trading.json: evaluation.inceptionDate and spyBaseline are required');
  }

  return {
    universe: parsed.universe.map((s) => s.toUpperCase()),
    concentration: {
      symbolCapsPct: Object.fromEntries(
        Object.entries(concentration.symbolCapsPct).map(([k, v]) => [k.toUpperCase(), Number(v)]),
      ),
      etfSymbols: concentration.etfSymbols.map((s) => s.toUpperCase()),
      etfCapPct: concentration.etfCapPct,
      stockCapPct: concentration.stockCapPct,
    },
    risk: {
      hardLockGrossExposureAbove: risk.hardLockGrossExposureAbove,
    },
    ledger: {
      priceHallucinationMinRatio: ledger.priceHallucinationMinRatio,
      priceHallucinationMaxRatio: ledger.priceHallucinationMaxRatio,
      skipIntegerBelow: ledger.skipIntegerBelow,
    },
    evaluation: {
      inceptionDate: evaluation.inceptionDate,
      spyBaseline: evaluation.spyBaseline,
    },
  };
}

export function loadTradingConfig(forceReload = false): TradingConfig {
  if (cached && !forceReload) {
    return cached;
  }

  const raw = readFileSync(CONFIG_PATH, 'utf8');
  const parsed = JSON.parse(raw) as Partial<TradingConfig>;
  cached = validateTradingConfig(parsed);
  return cached;
}

export function getTradingConfig(): TradingConfig {
  return loadTradingConfig();
}

export function getUniverseSymbols(): string[] {
  return [...getTradingConfig().universe];
}

export function getUniverseSet(): Set<string> {
  return new Set(getUniverseSymbols());
}

export function formatUniverseForPrompt(): string {
  return getUniverseSymbols().join(', ');
}

export function getConcentrationCapPct(symbol: string): number {
  const cfg = getTradingConfig().concentration;
  const sym = symbol.toUpperCase();
  if (cfg.symbolCapsPct[sym] !== undefined) {
    return cfg.symbolCapsPct[sym];
  }
  if (cfg.etfSymbols.includes(sym)) {
    return cfg.etfCapPct;
  }
  return cfg.stockCapPct;
}

export function isConfiguredEtf(symbol: string): boolean {
  return getTradingConfig().concentration.etfSymbols.includes(symbol.toUpperCase());
}

export function getSymbolCapFraction(symbol: string): number {
  return getConcentrationCapPct(symbol) / 100;
}

export function formatConcentrationCapsSummary(): string {
  const cfg = getTradingConfig().concentration;
  const specials = Object.entries(cfg.symbolCapsPct)
    .map(([sym, pct]) => `${sym} ≤${pct}%`)
    .join(', ');
  return `${specials}, other ETFs ≤${cfg.etfCapPct}%, single stock ≤${cfg.stockCapPct}%`;
}

export function resetTradingConfigCacheForTests(): void {
  cached = null;
}
