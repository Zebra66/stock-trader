import { describe, expect, test } from 'bun:test';

import { getConfiguredAlpacaModes, resolveAlpacaCredentials } from './alpaca_client_factory';

describe('resolveAlpacaCredentials', () => {
  test('uses dedicated paper credentials when provided', () => {
    const credentials = resolveAlpacaCredentials('paper', {
      ALPACA_PAPER_API_KEY: 'paper-key',
      ALPACA_PAPER_API_SECRET: 'paper-secret',
    });

    expect(credentials).toEqual({
      keyId: 'paper-key',
      secretKey: 'paper-secret',
      paper: true,
    });
  });

  test('uses dedicated live credentials when provided', () => {
    const credentials = resolveAlpacaCredentials('live', {
      ALPACA_LIVE_API_KEY: 'live-key',
      ALPACA_LIVE_API_SECRET: 'live-secret',
    });

    expect(credentials).toEqual({
      keyId: 'live-key',
      secretKey: 'live-secret',
      paper: false,
    });
  });

  test('falls back to the generic configured paper account', () => {
    const credentials = resolveAlpacaCredentials('paper', {
      ALPACA_API_KEY: 'generic-key',
      ALPACA_API_SECRET: 'generic-secret',
      ALPACA_PAPER: 'true',
    });

    expect(credentials).toEqual({
      keyId: 'generic-key',
      secretKey: 'generic-secret',
      paper: true,
    });
  });

  test('falls back to the generic configured live account', () => {
    const credentials = resolveAlpacaCredentials('live', {
      ALPACA_API_KEY: 'generic-key',
      ALPACA_API_SECRET: 'generic-secret',
      ALPACA_PAPER: 'false',
    });

    expect(credentials).toEqual({
      keyId: 'generic-key',
      secretKey: 'generic-secret',
      paper: false,
    });
  });
});

describe('getConfiguredAlpacaModes', () => {
  test('prefers the active configured mode as the default selection', () => {
    const result = getConfiguredAlpacaModes({
      ALPACA_API_KEY: 'generic-key',
      ALPACA_API_SECRET: 'generic-secret',
      ALPACA_PAPER: 'true',
      ALPACA_LIVE_API_KEY: 'live-key',
      ALPACA_LIVE_API_SECRET: 'live-secret',
    });

    expect(result.defaultMode).toBe('paper');
    expect(result.modes).toEqual([
      { mode: 'paper', label: 'Paper Trading', available: true },
      { mode: 'live', label: 'Live Trading', available: true },
    ]);
  });
});
