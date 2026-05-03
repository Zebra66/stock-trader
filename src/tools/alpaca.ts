import Alpaca from '@alpacahq/alpaca-trade-api';

const paper = process.env.ALPACA_PAPER === 'true';

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_API_KEY || 'dummy_key',
  secretKey: process.env.ALPACA_API_SECRET || 'dummy_secret',
  paper: paper,
});

export const alpacaTools = {
  getAccount: async () => {
    try {
      const account = await alpaca.getAccount();
      return JSON.stringify(account);
    } catch (e: any) {
      return `Error getting account: ${e.message}`;
    }
  },

  getPositions: async () => {
    try {
      const positions = await alpaca.getPositions();
      return JSON.stringify(positions);
    } catch (e: any) {
      return `Error getting positions: ${e.message}`;
    }
  },

  getLatestPrice: async (symbol: string) => {
    try {
      const bar = await alpaca.getLatestBar(symbol);
      return JSON.stringify(bar);
    } catch (e: any) {
      return `Error getting latest price for ${symbol}: ${e.message}`;
    }
  },

  submitOrder: async (symbol: string, qty: number, side: 'buy' | 'sell', type: 'market' | 'limit' = 'market', timeInForce: 'day' | 'gtc' = 'day', limitPrice?: number) => {
    try {
      const order = await alpaca.createOrder({
        symbol,
        qty,
        side,
        type,
        time_in_force: timeInForce,
        limit_price: limitPrice
      });
      return `Successfully placed order: ${JSON.stringify(order)}`;
    } catch (e: any) {
      return `Error submitting order: ${e.message}`;
    }
  }
};
