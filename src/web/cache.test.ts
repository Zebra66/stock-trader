import { test, expect, describe, beforeEach, afterEach } from 'bun:test';
import { resolveDashboardMode } from './cache';

describe('cache', () => {
  describe('resolveDashboardMode', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      process.env = { ...originalEnv };
      delete process.env.ALPACA_PAPER;
      delete process.env.ALPACA_API_KEY;
      delete process.env.ALPACA_API_SECRET;
      delete process.env.ALPACA_PAPER_API_KEY;
      delete process.env.ALPACA_PAPER_API_SECRET;
      delete process.env.ALPACA_LIVE_API_KEY;
      delete process.env.ALPACA_LIVE_API_SECRET;
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    test('returns explicit paper mode when requested', () => {
      expect(resolveDashboardMode('paper')).toBe('paper');
    });

    test('returns explicit live mode when requested', () => {
      expect(resolveDashboardMode('live')).toBe('live');
    });

    test('returns default mode when no mode requested', () => {
      process.env.ALPACA_API_KEY = 'test-key';
      process.env.ALPACA_API_SECRET = 'test-secret';
      expect(resolveDashboardMode()).toBe('live');
    });

    test('returns paper as default when ALPACA_PAPER is true', () => {
      process.env.ALPACA_PAPER = 'true';
      process.env.ALPACA_API_KEY = 'test-key';
      process.env.ALPACA_API_SECRET = 'test-secret';
      expect(resolveDashboardMode()).toBe('paper');
    });

    test('ignores invalid requested mode and falls back to default', () => {
      process.env.ALPACA_API_KEY = 'test-key';
      process.env.ALPACA_API_SECRET = 'test-secret';
      expect(resolveDashboardMode('invalid')).toBe('live');
    });

    test('ignores undefined requested mode and falls back to default', () => {
      process.env.ALPACA_API_KEY = 'test-key';
      process.env.ALPACA_API_SECRET = 'test-secret';
      expect(resolveDashboardMode(undefined)).toBe('live');
    });
  });
});
