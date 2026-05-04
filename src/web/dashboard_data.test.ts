import { describe, expect, test } from 'bun:test';

import { buildDashboardData } from './dashboard_data';

describe('buildDashboardData', () => {
  test('uses live account fields for summary values instead of portfolio history values', async () => {
    const data = await buildDashboardData({
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
    });

    expect(data.equity).toBe(25000.75);
    expect(data.cash).toBe(4300.10);
    expect(data.buyingPower).toBe(17200.40);
    expect(data.dayChange).toBe(500);
    expect(data.dayChangePct).toBeCloseTo(500 / 24500.75, 12);
    expect(data.history).toEqual([
      { x: 1714953600 * 1000, y: 10000 },
      { x: 1714957200 * 1000, y: 10100 },
    ]);
  });

  test('returns account summary even when portfolio history is unavailable', async () => {
    const data = await buildDashboardData({
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
    });

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
});
