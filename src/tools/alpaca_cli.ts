import '../env';
import { getDefaultAlpacaClient } from './alpaca_client_factory';

export const alpaca = getDefaultAlpacaClient();

const UNIVERSE = new Set([
  'AVGO','EIS','GLD','GOOG','HOOD','META','NVDA','QQQ','QTUM','RKLB','SHLD','SOXX','VOO','ARKX'
]);

// ── Trading Lock (enforced at code level) ───────────────────────────────────
const LOCK_FILE = 'memory/.trading_lock.json';

async function getTradingLock(): Promise<{ active: boolean; allowed?: string[]; reason?: string; expiresAt?: string } | null> {
  try {
    const file = Bun.file(LOCK_FILE);
    if (!(await file.exists())) return null;
    const text = await file.text();
    return JSON.parse(text) as any;
  } catch {
    return null;
  }
}

function isOrderAllowed(lock: { active: boolean; allowed?: string[]; expiresAt?: string } | null, symbol: string, side: string): boolean {
  // Lock file is an explicit allowlist. No entry = no permission.
  if (lock?.allowed) {
    const key = `${side.toUpperCase()}_${symbol.toUpperCase()}`;
    for (const a of lock.allowed) {
      if (a === key || a === `ANY_${symbol.toUpperCase()}` || a === `${side.toUpperCase()}_ANY`) return true;
    }
  }
  return false;
}

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
    const symUpper = symbol.toUpperCase();
    // HARD_LOCK primary check: always read memory/todo.md first and reject if HARD_LOCK is present.
    // The lock file is a secondary/optional mechanism; todo.md text is the authoritative source.
    try {
      const todo = await Bun.file('./memory/todo.md').text();
      const currentSection = todo.slice(0, 3000);
      // Find the HARD_LOCK control line (heading or bold line near the top).
      // This avoids false positives from regime descriptions that mention HARD_LOCK.
      const lockLineMatch = currentSection.match(/^##?\s*[*_]{0,2}HARD_LOCK[_*]{0,2}\s*[:—-].*$/im);
      if (lockLineMatch) {
        const lockLine = lockLineMatch[0];
        // Only allow if the control line explicitly starts with HARD_LOCK ... LIFTED
        const isExplicitlyLifted = /^##?\s*[*_]{0,2}HARD_LOCK[_*]{0,2}\s*[:—-]\s*[*_]{0,2}LIFTED\b/i.test(lockLine);
        if (!isExplicitlyLifted) {
          return `Error submitting order: HARD_LOCK is active in memory/todo.md. No orders permitted.`;
        }
      }
    } catch {
      // todo.md not readable — proceed to lock-file check as fallback
    }
    // Trading lock check (code-level enforcement via lock file)
    const lock = await getTradingLock();
    const lockAllows = isOrderAllowed(lock, symbol, side);
    if (lock && lock.active && !lockAllows) {
      return `Error submitting order: Trading lock is active for ${symbol} ${side}. Reason: ${lock.reason || 'No reason provided'}.`;
    }
    // Symbol ban check (enforced regardless of lock active state)
    if (side === 'buy') {
      try {
        const lockFile = Bun.file(LOCK_FILE);
        if (await lockFile.exists()) {
          const lockJson = JSON.parse(await lockFile.text()) as { bannedSymbols?: string[]; allowed?: string[]; reason?: string };
          const banned = (lockJson.bannedSymbols ?? []).map((s: string) => s.toUpperCase());
          if (banned.includes(symUpper)) {
            const key = `${side.toUpperCase()}_${symUpper}`;
            const isExcepted = (lockJson.allowed ?? []).some((a: string) => a === key || a === `ANY_${symUpper}` || a === `${side.toUpperCase()}_ANY`);
            if (!isExcepted) {
              return `Error submitting order: Symbol ${symbol} is currently banned. Reason: ${lockJson.reason || 'No reason provided'}.`;
            }
          }
        }
      } catch (e: unknown) {
        if (e instanceof Error && e.message.includes('currently banned')) return e.message;
      }
    }
    if (side === 'buy' && !UNIVERSE.has(symUpper)) {
      // Allow closing an existing short position even for out-of-universe symbols
      try {
        const positions = await alpaca.getPositions();
        const pos = positions.find((p: any) => p.symbol.toUpperCase() === symUpper);
        if (!pos || parseFloat(pos.qty) >= 0) {
          return `Error submitting order: Symbol ${symbol} is not in the approved investment universe.`;
        }
      } catch {
        return `Error submitting order: Symbol ${symbol} is not in the approved investment universe.`;
      }
    }
    if (side === 'sell') {
      try {
        const positions = await alpaca.getPositions();
        const pos = positions.find((p: { symbol: string; qty: string }) => p.symbol.toUpperCase() === symUpper && parseFloat(p.qty) > 0);
        const longQty = pos ? parseFloat(pos.qty) : 0;
        if (longQty < qty) {
          return `Error submitting order: Sell of ${qty} shares of ${symbol} blocked — account only holds ${longQty} shares long. Short selling is prohibited.`;
        }
      } catch (e: unknown) {
        return `Error submitting order: Unable to verify long position before sell: ${(e as Error).message}`;
      }
    }
    // Concentration cap guard (BUY orders only)
    if (side === 'buy') {
      try {
        const account = await alpaca.getAccount();
        const positions = await alpaca.getPositions();
        const equity = parseFloat(account.equity);
        if (!equity || equity <= 0) {
          return `Error submitting order: Unable to compute concentration caps — invalid equity ${account.equity}`;
        }
        const pos = positions.find((p: any) => p.symbol.toUpperCase() === symUpper);
        const currentMkt = pos ? parseFloat(pos.market_value) : 0;
        const bar = await alpaca.getLatestBar(symbol);
        const price = limitPrice || (bar && (bar as any).ClosePrice) || 0;
        if (!price || price <= 0) {
          return `Error submitting order: Unable to compute concentration caps — no price for ${symbol}`;
        }
        const orderValue = qty * price;
        const newMkt = currentMkt + orderValue;
        const pct = (newMkt / equity) * 100;
        const isETF = ['QQQ','VOO','SOXX','GLD','EIS','ARKX'].includes(symUpper);
        if (symUpper === 'QQQ' && pct > 45) {
          return `Error submitting order: QQQ concentration cap breached. Post-order QQQ would be ${pct.toFixed(2)}% of equity (max 45%).`;
        }
        if (isETF && symUpper !== 'QQQ' && pct > 20) {
          return `Error submitting order: ETF concentration cap breached. Post-order ${symbol} would be ${pct.toFixed(2)}% of equity (max 20%).`;
        }
        if (!isETF && pct > 15) {
          return `Error submitting order: Single-stock concentration cap breached. Post-order ${symbol} would be ${pct.toFixed(2)}% of equity (max 15%).`;
        }
      } catch (e: unknown) {
        return `Error submitting order: Concentration cap check failed: ${(e as Error).message}`;
      }
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
