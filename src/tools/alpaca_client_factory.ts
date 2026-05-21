import Alpaca from '@alpacahq/alpaca-trade-api';

export type AlpacaMode = 'paper' | 'live';

export interface AlpacaCredentials {
  keyId: string;
  secretKey: string;
  paper: boolean;
}

export interface AlpacaModeOption {
  mode: AlpacaMode;
  label: string;
  available: boolean;
}

type EnvSource = Record<string, string | undefined>;

const MODE_LABELS: Record<AlpacaMode, string> = {
  paper: 'Paper Trading',
  live: 'Live Trading',
};

function getActiveConfiguredMode(env: EnvSource): AlpacaMode {
  return env.ALPACA_PAPER === 'true' ? 'paper' : 'live';
}

function getDedicatedCredentials(mode: AlpacaMode, env: EnvSource): AlpacaCredentials | null {
  const prefix = mode === 'paper' ? 'ALPACA_PAPER' : 'ALPACA_LIVE';
  const keyId = env[`${prefix}_API_KEY`];
  const secretKey = env[`${prefix}_API_SECRET`];

  if (!keyId || !secretKey) {
    return null;
  }

  return {
    keyId,
    secretKey,
    paper: mode === 'paper',
  };
}

function getGenericCredentials(mode: AlpacaMode, env: EnvSource): AlpacaCredentials | null {
  if (getActiveConfiguredMode(env) !== mode) {
    return null;
  }

  const keyId = env.ALPACA_API_KEY;
  const secretKey = env.ALPACA_API_SECRET;

  if (!keyId || !secretKey) {
    return null;
  }

  return {
    keyId,
    secretKey,
    paper: mode === 'paper',
  };
}

export function resolveAlpacaCredentials(mode: AlpacaMode, env: EnvSource = process.env): AlpacaCredentials | null {
  return getDedicatedCredentials(mode, env) ?? getGenericCredentials(mode, env);
}

export function getConfiguredAlpacaModes(env: EnvSource = process.env): { defaultMode: AlpacaMode; modes: AlpacaModeOption[] } {
  const modes: AlpacaModeOption[] = (['paper', 'live'] as const).map((mode) => ({
    mode,
    label: MODE_LABELS[mode],
    available: resolveAlpacaCredentials(mode, env) !== null,
  }));

  const activeMode = getActiveConfiguredMode(env);
  const defaultMode = modes.find((mode) => mode.mode === activeMode && mode.available)?.mode
    ?? modes.find((mode) => mode.available)?.mode
    ?? activeMode;

  return { defaultMode, modes };
}

export function getAlpacaModeLabel(mode: AlpacaMode): string {
  return MODE_LABELS[mode];
}

const UNIVERSE = new Set([
  'AVGO','EIS','GLD','GOOG','HOOD','META','NVDA','QQQ','QTUM','RKLB','SHLD','SOXX','VOO','ARKX',
]);

export function createAlpacaClient(mode: AlpacaMode, env: EnvSource = process.env): Alpaca {
  const credentials = resolveAlpacaCredentials(mode, env);

  if (!credentials) {
    throw new Error(`${MODE_LABELS[mode]} credentials are not configured.`);
  }

  const client = new Alpaca(credentials);
  const originalCreateOrder = client.createOrder.bind(client);

  // Universal order guards — intercept every createOrder call regardless of which
  // file / temp script / direct SDK usage initiated it.
  client.createOrder = async (params: any) => {
    const symbol = String(params.symbol ?? '').toUpperCase();
    const side = String(params.side ?? '').toLowerCase();
    const qty =
      typeof params.qty === 'string'
        ? parseFloat(params.qty)
        : typeof params.qty === 'number'
        ? params.qty
        : NaN;

    if (!symbol || Number.isNaN(qty) || qty <= 0) {
      throw new Error(
        `Invalid order parameters: symbol=${params.symbol}, qty=${params.qty}`
      );
    }

    // ── HARD_LOCK check (todo.md) ──────────────────────────────────────────
    try {
      const todo = await Bun.file('./memory/todo.md').text();
      const currentSection = todo.slice(0, 3000);
      const lockLineMatch = currentSection.match(/^##?\s*[*_]{0,2}HARD_LOCK[_*]{0,2}\s*[:—-].*$/im);
      if (lockLineMatch) {
        const lockLine = lockLineMatch[0];
        const isExplicitlyLifted = /^##?\s*[*_]{0,2}HARD_LOCK[_*]{0,2}\s*[:—-]\s*[*_]{0,2}LIFTED\b/i.test(lockLine);
        if (!isExplicitlyLifted) {
          throw new Error(
            `Order blocked: HARD_LOCK is active in memory/todo.md. No orders permitted.`
          );
        }
      }
    } catch (e) {
      if (e instanceof Error && e.message.includes('HARD_LOCK')) throw e;
      // todo.md unreadable — fall through to lock-file check
    }

    // ── Trading lock file check ────────────────────────────────────────────
    try {
      const lockFile = Bun.file('./memory/.trading_lock.json');
      if (await lockFile.exists()) {
        const lock = JSON.parse(await lockFile.text()) as { active: boolean; allowed?: string[]; reason?: string; bannedSymbols?: string[] };
        if (lock?.active) {
          const key = `${side.toUpperCase()}_${symbol}`;
          let allowed = false;
          for (const a of lock.allowed ?? []) {
            if (a === key || a === `ANY_${symbol}` || a === `${side.toUpperCase()}_ANY`) {
              allowed = true;
              break;
            }
          }
          if (!allowed) {
            throw new Error(
              `Order blocked: Trading lock is active for ${symbol} ${side}. Reason: ${lock.reason || 'No reason provided'}.`
            );
          }
        }
        // Symbol ban check (enforced regardless of lock active state)
        if (side === 'buy') {
          const banned = (lock.bannedSymbols ?? []).map((s: string) => s.toUpperCase());
          if (banned.includes(symbol)) {
            const key = `${side.toUpperCase()}_${symbol}`;
            const isExcepted = (lock.allowed ?? []).some((a: string) => a === key || a === `ANY_${symbol}` || a === `${side.toUpperCase()}_ANY`);
            if (!isExcepted) {
              throw new Error(
                `Order blocked: Symbol ${params.symbol} is currently banned. Reason: ${lock.reason || 'No reason provided'}.`
              );
            }
          }
        }
      }
    } catch (e) {
      if (e instanceof Error && e.message.includes('Trading lock')) throw e;
      if (e instanceof Error && e.message.includes('currently banned')) throw e;
      // lock file unreadable — continue
    }

    // ── Universe gate (BUY) ───────────────────────────────────────────────
    if (side === 'buy' && !UNIVERSE.has(symbol)) {
      try {
        const positions = await client.getPositions();
        const pos = positions.find(
          (p: any) => String(p.symbol ?? '').toUpperCase() === symbol
        );
        // Allow buy-to-cover only when an existing short position exists
        if (!pos || parseFloat(pos.qty ?? 0) >= 0) {
          throw new Error(
            `Symbol ${params.symbol} is not in the approved investment universe.`
          );
        }
      } catch (e) {
        if (e instanceof Error && e.message.includes('investment universe')) {
          throw e;
        }
        throw new Error(
          `Symbol ${params.symbol} is not in the approved investment universe (position check failed).`
        );
      }
    }

    // ── Short-sale guard (SELL) ─────────────────────────────────────────────
    if (side === 'sell') {
      try {
        const positions = await client.getPositions();
        const pos = positions.find(
          (p: any) =>
            String(p.symbol ?? '').toUpperCase() === symbol &&
            parseFloat(p.qty ?? 0) > 0
        );
        const longQty = pos ? parseFloat(pos.qty ?? 0) : 0;
        if (longQty < qty) {
          throw new Error(
            `Sell of ${qty} shares of ${params.symbol} blocked — account only holds ${longQty} shares long. Short selling is prohibited.`
          );
        }
      } catch (e) {
        if (e instanceof Error && e.message.includes('Short selling is prohibited')) {
          throw e;
        }
        throw new Error(
          `Sell of ${params.symbol} blocked — unable to verify long position before sell: ${e instanceof Error ? e.message : String(e)}`
        );
      }
    }

    return originalCreateOrder(params);
  };

  return client;
}

export function getDefaultAlpacaClient(env: EnvSource = process.env): Alpaca {
  const { defaultMode } = getConfiguredAlpacaModes(env);
  return createAlpacaClient(defaultMode, env);
}
