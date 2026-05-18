import { describe, expect, test } from 'bun:test';

import { buildDashboardData } from './dashboard_data';

describe('buildDashboardData', () => {
  test('uses live account fields for summary values instead of portfolio history values', async () => {
    const data = await buildDashboardData(
      {
        getAccount: async () => ({
          equity: '25000.75',
          cash: '4300.10',
          buying_power: '17200.40',
          last_equity: '24500.75',
        }),
        getPortfolioHistory: async () => ({
          timestamp: [1714953600, 1714957200],
          equity: [10000, 10100],
        }),
        getAccountActivities: async () => ([]),
      },
      '1W',
    );

    expect(data.equity).toBe(25000.75);
    expect(data.cash).toBe(4300.10);
    expect(data.buyingPower).toBe(17200.40);
    expect(data.dayChange).toBe(500);
    expect(data.dayChangePct).toBeCloseTo(500 / 24500.75, 12);
    expect(data.history).toEqual([
      { x: 1714953600 * 1000, y: 10000 },
      { x: 1714957200 * 1000, y: 25000.75 },
    ]);
  });

  test('returns account summary even when portfolio history is unavailable', async () => {
    const data = await buildDashboardData(
      {
        getAccount: async () => ({
          equity: '25000.75',
          cash: '4300.10',
          buying_power: '17200.40',
          last_equity: '24500.75',
        }),
        getPortfolioHistory: async () => {
          throw new Error('history offline');
        },
        getAccountActivities: async () => ([]),
      },
    );

    expect(data.equity).toBe(25000.75);
    expect(data.cash).toBe(4300.10);
    expect(data.buyingPower).toBe(17200.40);
    expect(data.history).toEqual([]);
    expect(data.historyUnavailableMessage).toBe('Portfolio history is currently unavailable.');
  });

  test('treats zero-only history as unavailable when live equity is positive', async () => {
    const data = await buildDashboardData({
      getAccount: async () => ({
        equity: '10000',
        cash: '10000',
        buying_power: '20000',
        last_equity: '10000',
      }),
      getPortfolioHistory: async () => ({
        timestamp: [1714953600, 1714957200],
        equity: [0, 0],
      }),
      getAccountActivities: async () => ([]),
    });

    expect(data.history).toEqual([]);
    expect(data.historyUnavailableMessage).toBe('Portfolio history is currently unavailable.');
  });

  test('filters buy/sell trades to the history window', async () => {
    const t0 = 1714953600; // within history
    const t1 = 1714957200; // within history
    const tBefore = 1714940000; // before history window
    const tWithin = 1714955400; // within history window

    const data = await buildDashboardData({
      getAccount: async () => ({
        equity: '10000',
        cash: '5000',
        buying_power: '10000',
        last_equity: '9900',
      }),
      getPortfolioHistory: async () => ({
        timestamp: [t0, t1],
        equity: [9900, 10000],
      }),
      getAccountActivities: async () => ([
        { transaction_time: new Date(tBefore * 1000).toISOString(), side: 'buy', symbol: 'AAPL', qty: '5', price: '150' },
        { transaction_time: new Date(tWithin * 1000).toISOString(), side: 'buy', symbol: 'MSFT', qty: '2', price: '200' },
      ]),
    });

    // Only the trade within the history window should appear
    expect(data.buys).toHaveLength(1);
    expect(data.buys[0]?.symbol).toBe('MSFT');
  });

  test('uses 5Min timeframe for 1D and 1W periods', async () => {
    const calls: Array<{ period: string; timeframe: string }> = [];
    await buildDashboardData(
      {
        getAccount: async () => ({ equity: '10000', cash: '5000', buying_power: '10000', last_equity: '9900' }),
        getPortfolioHistory: async (args) => { calls.push(args); return { timestamp: [1714953600], equity: [10000] }; },
        getAccountActivities: async () => ([]),
      },
      '1D',
    );
    expect(calls[0]?.timeframe).toBe('5Min');

    await buildDashboardData(
      {
        getAccount: async () => ({ equity: '10000', cash: '5000', buying_power: '10000', last_equity: '9900' }),
        getPortfolioHistory: async (args) => { calls.push(args); return { timestamp: [1714953600], equity: [10000] }; },
        getAccountActivities: async () => ([]),
      },
      '1W',
    );
    expect(calls[1]?.timeframe).toBe('5Min');
  });

  test('periodStart and periodEnd are populated from history', async () => {
    const t0 = 1714953600;
    const t1 = 1714957200;

    const data = await buildDashboardData({
      getAccount: async () => ({ equity: '10000', cash: '5000', buying_power: '10000', last_equity: '9900' }),
      getPortfolioHistory: async () => ({ timestamp: [t0, t1], equity: [9900, 10000] }),
      getAccountActivities: async () => ([]),
    });

    expect(data.periodStart).toBe(t0 * 1000);
    expect(data.periodEnd).toBe(t1 * 1000);
  });
});
