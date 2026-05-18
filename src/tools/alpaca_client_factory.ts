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
