import { describe, expect, test } from 'bun:test';
import {
  formatConcentrationCapsSummary,
  formatUniverseForPrompt,
  getConcentrationCapPct,
  getTradingConfig,
  getUniverseSet,
  isConfiguredEtf,
  loadTradingConfig,
} from './trading_config';

describe('trading_config', () => {
  test('loads universe and concentration caps from config/trading.json', () => {
    const cfg = loadTradingConfig(true);
    expect(cfg.universe).toContain('QQQ');
    expect(cfg.universe).toContain('VOO');
    expect(cfg.concentration.symbolCapsPct.QQQ).toBe(45);
    expect(cfg.concentration.symbolCapsPct.VOO).toBe(30);
    expect(cfg.concentration.etfCapPct).toBe(20);
    expect(cfg.concentration.stockCapPct).toBe(15);
  });

  test('getConcentrationCapPct prefers symbol overrides then ETF then stock', () => {
    expect(getConcentrationCapPct('QQQ')).toBe(45);
    expect(getConcentrationCapPct('voo')).toBe(30);
    expect(getConcentrationCapPct('SOXX')).toBe(20);
    expect(getConcentrationCapPct('NVDA')).toBe(15);
  });

  test('universe helpers and ETF classification', () => {
    expect(getUniverseSet().has('HOOD')).toBe(true);
    expect(isConfiguredEtf('SOXX')).toBe(true);
    expect(isConfiguredEtf('NVDA')).toBe(false);
    expect(formatUniverseForPrompt()).toContain('AVGO');
    expect(formatConcentrationCapsSummary()).toContain('VOO');
  });

  test('getTradingConfig returns cached validated config', () => {
    const a = getTradingConfig();
    const b = getTradingConfig();
    expect(a).toBe(b);
  });
});
