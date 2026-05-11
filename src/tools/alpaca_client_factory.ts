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

export function createAlpacaClient(mode: AlpacaMode, env: EnvSource = process.env): Alpaca {
  const credentials = resolveAlpacaCredentials(mode, env);

  if (!credentials) {
    throw new Error(`${MODE_LABELS[mode]} credentials are not configured.`);
  }

  return new Alpaca(credentials);
}

export function getDefaultAlpacaClient(env: EnvSource = process.env): Alpaca {
  const { defaultMode } = getConfiguredAlpacaModes(env);
  return createAlpacaClient(defaultMode, env);
}
