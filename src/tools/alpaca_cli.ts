import '../env';
import { getDefaultAlpacaClient } from './alpaca_client_factory';
import { withTimeout } from './with_timeout';
import { checkConcentrationCap } from './concentration_guard';
import type Alpaca from '@alpacahq/alpaca-trade-api';

let _alpaca: Alpaca | null = null;
function getAlpaca(): Alpaca {
  if (!_alpaca) {
    _alpaca = getDefaultAlpacaClient();
  }
  return _alpaca;
}

const API_TIMEOUT_MS = 15_000;

const UNIVERSE = new Set([
  'AVGO','EIS','GLD','GOOG','HOOD','META','NVDA','QQQ','QTUM','RKLB','SHLD','SOXX','VOO','ARKX'
]);

// ── Stale-memory guard (enforced at code level) ───────────────────────────
const STALE_MEMORY_HOURS = 24;

async function isMemoryStale(): Promise<{ stale: boolean; reason?: string }> {
  try {
    const memFile = Bun.file('./memory/MEMORY.md');
    const todoFile = Bun.file('./memory/todo.md');
    if (!(await memFile.exists()) || !(await todoFile.exists())) {
      return { stale: true, reason: 'Memory files missing' };
    }
    const memStat = await memFile.stat();
    const todoStat = await todoFile.stat();
    const now = Date.now();
    const memMtime = memStat.mtimeMs ?? memStat.mtime?.getTime() ?? 0;
    const todoMtime = todoStat.mtimeMs ?? todoStat.mtime?.getTime() ?? 0;
    const newest = Math.max(memMtime, todoMtime);
    const ageHours = (now - newest) / (1000 * 60 * 60);
    if (ageHours > STALE_MEMORY_HOURS) {
      return { stale: true, reason: `Memory files are ${ageHours.toFixed(1)} hours old (max ${STALE_MEMORY_HOURS}h)` };
    }
    return { stale: false };
  } catch {
    return { stale: true, reason: 'Unable to read memory file timestamps' };
  }
}

// ── Duplicate-order guard (enforced at code level) ──────────────────────────
async function hasSimilarOpenOrder(symbol: string, side: 'buy' | 'sell', qty: number): Promise<boolean> {
  try {
    const orders = await withTimeout(getAlpaca().getOrders({ status: 'open' }), API_TIMEOUT_MS, 'Alpaca getOrders (duplicate check)');
    return orders.some((o: any) =>
      o.symbol.toUpperCase() === symbol.toUpperCase() &&
      o.side === side &&
      Math.abs(parseFloat(o.qty) - qty) < 1
    );
  } catch {
    return false;
  }
}

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
  if (lock?.allowed) {
    const key = `${side.toUpperCase()}_${symbol.toUpperCase()}`;
    for (const a of lock.allowed) {
      if (a === key || a === `ANY_${symbol.toUpperCase()}` || a === `${side.toUpperCase()}_ANY`) return true;
    }
  }
  return false;
}

async function hasSameDayFill(symbol: string, side: 'buy' | 'sell'): Promise<boolean> {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const after = `${today}T00:00:00Z`;
    const orders = await withTimeout(getAlpaca().getOrders({ status: 'closed', after }), API_TIMEOUT_MS, 'Alpaca getOrders (anti-churn)');
    return orders.some((o: any) => o.symbol.toUpperCase() === symbol.toUpperCase() && o.side === side && o.filled_qty && parseFloat(o.filled_qty) > 0);
  } catch {
    return false;
  }
}

export const alpacaTools = {
  getAccount: async (): Promise<string> => {
    try {
      const account = await withTimeout(getAlpaca().getAccount(), API_TIMEOUT_MS, 'Alpaca getAccount');
      return JSON.stringify(account);
    } catch (e: unknown) {
      return `Error getting account: ${(e as Error).message}`;
    }
  },

  getPositions: async (): Promise<string> => {
    try {
      const positions = await withTimeout(getAlpaca().getPositions(), API_TIMEOUT_MS, 'Alpaca getPositions');
      return JSON.stringify(positions);
    } catch (e: unknown) {
      return `Error getting positions: ${(e as Error).message}`;
    }
  },

  getLatestPrice: async (symbol: string): Promise<string> => {
    try {
      const bar = await withTimeout(getAlpaca().getLatestBar(symbol), API_TIMEOUT_MS, `Alpaca getLatestBar(${symbol})`);
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
    // HARD_LOCK primary check
    try {
      const todo = await Bun.file('./memory/todo.md').text();
      const currentSection = todo.slice(0, 3000);
      const lockLineMatch = currentSection.match(/^[\s]*(?:##?\s+)?(?:[-*]\s+)?[*_]{0,2}HARD_LOCK[_*]{0,2}\s*[:—-].*$/im);
      if (lockLineMatch) {
        const lockLine = lockLineMatch[0];
        const isExplicitlyLifted = /^[\s]*(?:##?\s+)?(?:[-*]\s+)?[*_]{0,2}HARD_LOCK[_*]{0,2}\s*[:—-]?\s*[*_]{0,2}LIFTED\b/i.test(lockLine);
        if (!isExplicitlyLifted && side === 'buy') {
          return `Error submitting order: HARD_LOCK is active in memory/todo.md. No buy orders permitted.`;
        }
      }
    } catch {
      // todo.md not readable — proceed to lock-file check as fallback
    }
    // Symbol-specific no-buy directive parser (todo.md)
    try {
      const noBuySymbols = new Set<string>();
      const todo = await Bun.file('./memory/todo.md').text();
      for (const line of todo.split('\n')) {
        const upper = line.toUpperCase();
        // Broader pattern matching to catch variants like "NO NEW BUY ORDERS", "NO BUY", etc.
        const hasNoBuy = upper.includes('DO NOT BUY') || upper.includes('DO NOT RE-BUY') || upper.includes('DO NOT ADD') ||
                         upper.includes('NO NEW BUY') || upper.includes('NO BUY') || upper.includes('NO ADD') ||
                         upper.includes('PROHIBITED') || upper.includes('BANNED');
        if (!hasNoBuy) continue;
        // Skip lines that contain explicit authorization overrides
        if (upper.includes('UNLESS') || upper.includes(' IF ') || upper.includes('CONDITION') || upper.includes('AUTHORIZE') || upper.includes('AUTHORIZED')) continue;
        for (const sym of UNIVERSE) {
          if (new RegExp(`\\b${sym}\\b`, 'i').test(line)) noBuySymbols.add(sym);
        }
      }
      if (side === 'buy' && noBuySymbols.has(symUpper)) {
        return `Error submitting order: Symbol ${symbol} is on the active no-buy list derived from memory/todo.md.`;
      }
    } catch {
      // todo.md not readable — proceed
    }
    // Trading lock check
    const lock = await getTradingLock();
    const lockAllows = isOrderAllowed(lock, symbol, side);
    if (side === 'buy' && lock && lock.active && !lockAllows) {
      return `Error submitting order: Trading lock is active for ${symbol} ${side}. Reason: ${lock.reason || 'No reason provided'}.`;
    }
    // Symbol ban check
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
      try {
        const positions = await withTimeout(getAlpaca().getPositions(), API_TIMEOUT_MS, 'Alpaca getPositions (universe check)');
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
        const positions = await withTimeout(getAlpaca().getPositions(), API_TIMEOUT_MS, 'Alpaca getPositions (sell guard)');
        const pos = positions.find((p: { symbol: string; qty: string }) => p.symbol.toUpperCase() === symUpper && parseFloat(p.qty) > 0);
        const longQty = pos ? parseFloat(pos.qty) : 0;
        if (longQty < qty) {
          return `Error submitting order: Sell of ${qty} shares of ${symbol} blocked — account only holds ${longQty} shares long. Short selling is prohibited.`;
        }
      } catch (e: unknown) {
        return `Error submitting order: Unable to verify long position before sell: ${(e as Error).message}`;
      }
    }
    // Anti-churn guard
    if (side === 'sell') {
      const boughtToday = await hasSameDayFill(symUpper, 'buy');
      if (boughtToday) {
        try {
          const todo = await Bun.file('./memory/todo.md').text();
          const authPattern = new RegExp(`AUTHORIZE SAME-DAY SELL ${symUpper}\\b`, 'i');
          if (!authPattern.test(todo)) {
            return `Error submitting order: Anti-churn rule — ${symbol} was bought today and same-day sell is not authorized in todo.md.`;
          }
        } catch {
          return `Error submitting order: Anti-churn rule — ${symbol} was bought today and same-day sell is not authorized in todo.md.`;
        }
      }
    }
    if (side === 'buy') {
      const soldToday = await hasSameDayFill(symUpper, 'sell');
      if (soldToday) {
        try {
          const todo = await Bun.file('./memory/todo.md').text();
          const authPattern = new RegExp(`AUTHORIZE SAME-DAY BUY ${symUpper}\\b`, 'i');
          if (!authPattern.test(todo)) {
            return `Error submitting order: Anti-churn rule — ${symbol} was sold today and same-day re-buy is not authorized in todo.md.`;
          }
        } catch {
          return `Error submitting order: Anti-churn rule — ${symbol} was sold today and same-day re-buy is not authorized in todo.md.`;
        }
      }
    }
    // Concentration cap guard (BUY orders only)
    if (side === 'buy') {
      try {
        const account = await withTimeout(getAlpaca().getAccount(), API_TIMEOUT_MS, 'Alpaca getAccount (concentration check)');
        const positions = await withTimeout(getAlpaca().getPositions(), API_TIMEOUT_MS, 'Alpaca getPositions (concentration check)');
        const equity = parseFloat((account as any).equity);
        const pos = positions.find((p: any) => p.symbol.toUpperCase() === symUpper);
        const currentMkt = pos ? parseFloat(pos.market_value) : 0;
        const bar = await withTimeout(getAlpaca().getLatestBar(symbol), API_TIMEOUT_MS, `Alpaca getLatestBar(${symbol}) (concentration check)`);
        const latestBarPrice = bar ? parseFloat((bar as any).ClosePrice ?? '0') : undefined;
        const check = checkConcentrationCap({
          symbol: symUpper,
          qty,
          limitPrice,
          latestBarPrice,
          currentMktValue: currentMkt,
          equity,
        });
        if (!check.ok) {
          return `Error submitting order: ${check.error}`;
        }
      } catch (e: unknown) {
        return `Error submitting order: Concentration cap check failed: ${(e as Error).message}`;
      }
    }
    // Stale-memory block (buy orders only)
    if (side === 'buy') {
      const stale = await isMemoryStale();
      if (stale.stale) {
        return `Error submitting order: Stale memory — ${stale.reason}. No new buy orders permitted until hourly strategist updates memory.`;
      }
    }
    // Duplicate-order block
    const dup = await hasSimilarOpenOrder(symUpper, side, qty);
    if (dup) {
      return `Error submitting order: Duplicate order detected for ${symbol} ${side} ${qty}. Cancel existing open order before resubmitting.`;
    }
    if (process.env.DRY_RUN === '1') {
      return `[DRY RUN] Order NOT submitted: ${side} ${qty} shares of ${symbol} @ ${type}${limitPrice ? ` limit ${limitPrice}` : ''} (${timeInForce})`;
    }
    try {
      const order = await withTimeout(getAlpaca().createOrder({
        symbol,
        qty,
        side,
        type,
        time_in_force: timeInForce,
        limit_price: limitPrice,
      }), API_TIMEOUT_MS, 'Alpaca createOrder');
      return `Successfully placed order: ${JSON.stringify(order)}`;
    } catch (e: unknown) {
      return `Error submitting order: ${(e as Error).message}`;
    }
  },

  getMarketClock: async (): Promise<string> => {
    try {
      const clock = await withTimeout(getAlpaca().getClock(), API_TIMEOUT_MS, 'Alpaca getClock');
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
      const orders = await withTimeout(getAlpaca().getOrders(opts), API_TIMEOUT_MS, 'Alpaca getOrders');
      return JSON.stringify(orders);
    } catch (e: unknown) {
      return `Error fetching orders: ${(e as Error).message}`;
    }
  },

  cancelOrder: async (orderId: string): Promise<string> => {
    try {
      const result = await withTimeout(getAlpaca().cancelOrder(orderId), API_TIMEOUT_MS, 'Alpaca cancelOrder');
      return JSON.stringify(result);
    } catch (e: unknown) {
      return `Error cancelling order: ${(e as Error).message}`;
    }
  },
};

export async function isMarketOpen(): Promise<boolean> {
  try {
    const clock = await withTimeout(getAlpaca().getClock(), API_TIMEOUT_MS, 'Alpaca getClock') as { is_open: boolean };
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
