import '../env';
import { getDefaultAlpacaClient } from './alpaca_client_factory';

export const alpaca = getDefaultAlpacaClient();

const UNIVERSE = new Set([
  'AVGO','EIS','GLD','GOOG','HOOD','META','NVDA','QQQ','QTUM','RKLB','SHLD','SOXX','VOO','ARKX'
]);

export const alpacaTools = {
  getAccount: async (): Promise<string> => {
    try {
      const account = await alpaca.getAccount();
      return JSON.stringify(account);
    } catch (e: unknown) {
      return `Error getting account: ${(e as Error).message}`;
    }
  },

  getPositions: async (): Promise<string> => {
    try {
      const positions = await alpaca.getPositions();
      return JSON.stringify(positions);
    } catch (e: unknown) {
      return `Error getting positions: ${(e as Error).message}`;
    }
  },

  getLatestPrice: async (symbol: string): Promise<string> => {
    try {
      const bar = await alpaca.getLatestBar(symbol);
      return JSON.stringify(bar);
    } catch (e: unknown) {
      return `Error getting latest price for ${symbol}: ${(e as Error).message}`;
    }
  },

  submitOrder: async (
    symbol: string,
    qty: number,
    side: 'buy' | 'sell',
    type: 'market' | 'limit' = 'market',
    timeInForce: 'day' | 'gtc' = 'day',
    limitPrice?: number
  ): Promise<string> => {
    if (side === 'buy' && !UNIVERSE.has(symbol.toUpperCase())) {
      return `Error submitting order: Symbol ${symbol} is not in the approved investment universe.`;
    }
    if (process.env.DRY_RUN === '1') {
      return `[DRY RUN] Order NOT submitted: ${side} ${qty} shares of ${symbol} @ ${type}${limitPrice ? ` limit ${limitPrice}` : ''} (${timeInForce})`;
    }
    try {
      const order = await alpaca.createOrder({
        symbol,
        qty,
        side,
        type,
        time_in_force: timeInForce,
        limit_price: limitPrice,
      });
      return `Successfully placed order: ${JSON.stringify(order)}`;
    } catch (e: unknown) {
      return `Error submitting order: ${(e as Error).message}`;
    }
  },

  getMarketClock: async (): Promise<string> => {
    try {
      const clock = await alpaca.getClock();
      return JSON.stringify(clock);
    } catch (e: unknown) {
      return `Error fetching market clock: ${(e as Error).message}`;
    }
  },

  getOrders: async (status?: string, symbols?: string[]): Promise<string> => {
    try {
      const opts: any = {};
      if (status) opts.status = status;
      if (symbols) opts.symbols = symbols;
      const orders = await alpaca.getOrders(opts);
      return JSON.stringify(orders);
    } catch (e: unknown) {
      return `Error fetching orders: ${(e as Error).message}`;
    }
  },

  cancelOrder: async (orderId: string): Promise<string> => {
    try {
      const result = await alpaca.cancelOrder(orderId);
      return JSON.stringify(result);
    } catch (e: unknown) {
      return `Error cancelling order: ${(e as Error).message}`;
    }
  },
};

export async function isMarketOpen(): Promise<boolean> {
  try {
    const clock = await alpaca.getClock() as { is_open: boolean };
    return clock.is_open;
  } catch {
    return false;
  }
}

// ── CLI ────────────────────────────────────────────────────────────────────────

const HELP = `
Usage: bun run src/tools/alpaca_cli.ts <command> [options]

Commands:
  get-account
      Get Alpaca account info (cash, buying power, equity, status).

  get-positions
      List all current holdings with qty, market value, and unrealised P&L.

  get-latest-price --symbol <TICKER>
      Get the latest OHLCV bar for a symbol.

  get-clock
      Get market clock: whether the market is currently open, next open/close times.

  get-orders [--status <open|closed|all>] [--symbols <TICKER,TICKER>]
      List open (or closed/all) orders. Defaults to open orders.

  cancel-order --id <ORDER_ID>
      Cancel a specific open order by its ID.

  submit-order --symbol <TICKER> --qty <n> --side <buy|sell>
               [--type <market|limit>] [--time-in-force <day|gtc>]
               [--limit-price <n>]
      Place a buy or sell order. Defaults: type=market, time-in-force=day.

Options:
  --help   Show this help message.

Examples:
  bun run src/tools/alpaca_cli.ts get-account
  bun run src/tools/alpaca_cli.ts get-positions
  bun run src/tools/alpaca_cli.ts get-latest-price --symbol NVDA
  bun run src/tools/alpaca_cli.ts submit-order --symbol NVDA --qty 5 --side buy
  bun run src/tools/alpaca_cli.ts submit-order --symbol MSFT --qty 2 --side sell --type limit --limit-price 420
`.trim();

function parseFlags(argv: string[]): Record<string, string> {
  const flags: Record<string, string> = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const next = argv[i + 1];
      flags[key] = next && !next.startsWith('--') ? (i++, next) : 'true';
    }
  }
  return flags;
}

if (import.meta.main) {
  const [command, ...rest] = process.argv.slice(2);

  if (!command || command === '--help') {
    console.log(HELP);
    process.exit(0);
  }

  const flags = parseFlags(rest);

  let task: Promise<string>;

  switch (command) {
    case 'get-account':
      task = alpacaTools.getAccount();
      break;

    case 'get-positions':
      task = alpacaTools.getPositions();
      break;

    case 'get-clock':
      task = alpacaTools.getMarketClock();
      break;

    case 'get-orders': {
      const statusFlag = flags.status || 'open';
      const symbolsFlag = flags.symbols ? flags.symbols.split(',') : undefined;
      task = alpacaTools.getOrders(statusFlag, symbolsFlag);
      break;
    }

    case 'cancel-order': {
      const orderId = flags.id;
      if (!orderId) { console.error('Error: --id is required'); process.exit(1); }
      task = alpacaTools.cancelOrder(orderId);
      break;
    }

    case 'get-latest-price': {
      if (!flags.symbol) { console.error('Error: --symbol is required'); process.exit(1); }
      task = alpacaTools.getLatestPrice(flags.symbol);
      break;
    }

    case 'submit-order': {
      const { symbol, qty, side } = flags;
      if (!symbol) { console.error('Error: --symbol is required'); process.exit(1); }
      if (!qty)    { console.error('Error: --qty is required');    process.exit(1); }
      if (side !== 'buy' && side !== 'sell') {
        console.error('Error: --side must be "buy" or "sell"');
        process.exit(1);
      }
      const orderType = flags.type === 'limit' ? 'limit' : 'market';
      const tif       = flags['time-in-force'] === 'gtc' ? 'gtc' : 'day';
      const lp        = flags['limit-price'] ? parseFloat(flags['limit-price']) : undefined;
      task = alpacaTools.submitOrder(symbol, parseFloat(qty), side, orderType, tif, lp);
      break;
    }

    default:
      console.error(`Unknown command: "${command}"\n\n${HELP}`);
      process.exit(1);
  }

  task.then(output => console.log(output)).catch(e => {
    console.error((e as Error).message);
    process.exit(1);
  });
}
