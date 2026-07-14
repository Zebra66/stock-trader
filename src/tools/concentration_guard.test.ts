import { describe, expect, test } from 'bun:test';
import { checkConcentrationCap } from './concentration_guard';

describe('checkConcentrationCap', () => {
  test('allows buy within single-stock cap', () => {
    const result = checkConcentrationCap({
      symbol: 'GOOG',
      qty: 1,
      limitPrice: 370,
      currentMktValue: 1149,
      equity: 10135,
    });
    expect(result.ok).toBe(true);
    expect(result.pct).toBeCloseTo(14.97, 1);
  });

  test('blocks buy that would breach single-stock cap', () => {
    const result = checkConcentrationCap({
      symbol: 'GOOG',
      qty: 1,
      limitPrice: 400,
      currentMktValue: 1149,
      equity: 10135,
    });
    expect(result.ok).toBe(false);
    expect(result.error).toContain('Single-stock concentration cap breached');
    expect(result.pct).toBeCloseTo(15.28, 1);
  });

  test('allows VOO buy within 30% broad-beta cap', () => {
    const result = checkConcentrationCap({
      symbol: 'VOO',
      qty: 1,
      limitPrice: 640,
      currentMktValue: 1379,
      equity: 10135,
    });
    expect(result.ok).toBe(true);
    expect(result.pct).toBeCloseTo(19.92, 1);
  });

  test('allows VOO above former 20% cap when under 30%', () => {
    const result = checkConcentrationCap({
      symbol: 'VOO',
      qty: 2,
      limitPrice: 689,
      currentMktValue: 1379,
      equity: 10135,
    });
    expect(result.ok).toBe(true);
    expect(result.pct).toBeCloseTo(27.2, 1);
  });

  test('blocks VOO buy that would breach 30% cap', () => {
    const result = checkConcentrationCap({
      symbol: 'VOO',
      qty: 3,
      limitPrice: 689,
      currentMktValue: 1379,
      equity: 10135,
    });
    expect(result.ok).toBe(false);
    expect(result.error).toContain('VOO concentration cap breached');
    expect(result.error).toContain('max 30%');
  });

  test('blocks other ETF buy that would breach 20% cap', () => {
    const result = checkConcentrationCap({
      symbol: 'SOXX',
      qty: 2,
      limitPrice: 560,
      currentMktValue: 1100,
      equity: 10135,
    });
    expect(result.ok).toBe(false);
    expect(result.error).toContain('ETF concentration cap breached');
  });

  test('allows QQQ within 45% cap', () => {
    const result = checkConcentrationCap({
      symbol: 'QQQ',
      qty: 1,
      limitPrice: 180,
      currentMktValue: 4371,
      equity: 10135,
    });
    expect(result.ok).toBe(true);
    expect(result.pct).toBeCloseTo(44.91, 1); // 4371+180=4551 / 10135 = 44.91%
  });

  test('blocks QQQ above 45% cap', () => {
    const result = checkConcentrationCap({
      symbol: 'QQQ',
      qty: 1,
      limitPrice: 728,
      currentMktValue: 4371,
      equity: 9000,
    });
    expect(result.ok).toBe(false);
    expect(result.error).toContain('QQQ concentration cap breached');
  });

  test('rejects invalid equity', () => {
    const result = checkConcentrationCap({
      symbol: 'NVDA',
      qty: 1,
      limitPrice: 210,
      currentMktValue: 0,
      equity: 0,
    });
    expect(result.ok).toBe(false);
    expect(result.error).toContain('Invalid equity');
  });

  test('rejects when no price available', () => {
    const result = checkConcentrationCap({
      symbol: 'NVDA',
      qty: 1,
      currentMktValue: 0,
      equity: 10135,
    });
    expect(result.ok).toBe(false);
    expect(result.error).toContain('No price');
  });

  test('prefers limit price over latest bar price', () => {
    const result = checkConcentrationCap({
      symbol: 'GOOG',
      qty: 1,
      limitPrice: 370,
      latestBarPrice: 383,
      currentMktValue: 1149,
      equity: 10135,
    });
    expect(result.ok).toBe(true);
    // Should use 370, not 383
    expect(result.pct).toBeCloseTo(14.97, 1);
  });

  test('falls back to latest bar price when limit not provided', () => {
    const result = checkConcentrationCap({
      symbol: 'GOOG',
      qty: 1,
      latestBarPrice: 370,
      currentMktValue: 1149,
      equity: 10135,
    });
    expect(result.ok).toBe(true);
    expect(result.pct).toBeCloseTo(14.97, 1);
  });
});
