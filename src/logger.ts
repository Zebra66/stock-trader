import pino from 'pino';
import { Writable } from 'stream';
import { appendFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const LOG_CALLSITE = process.env.LOG_CALLSITE === '1';

// ─── Session timestamp ────────────────────────────────────────────────────────
// All harness child processes share SESSION_TIMESTAMP via env var (set in run_local.sh).
// Falls back to "now" when running standalone (tests, manual invocation, etc.).
function buildTimestamp(): string {
  const d = new Date();
  const p = (n: number, w = 2) => String(n).padStart(w, '0');
  return (
    `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_` +
    `${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
  );
}

const SESSION_TIMESTAMP: string = process.env.SESSION_TIMESTAMP ?? buildTimestamp();

// ─── Log file path ────────────────────────────────────────────────────────────
const LOG_DIR = join(process.cwd(), 'temp_files', 'logs');
mkdirSync(LOG_DIR, { recursive: true });

export const LOG_FILE_PATH: string = join(LOG_DIR, `${SESSION_TIMESTAMP}_session.log`);
export const EVENTS_LOG_FILE_PATH: string = join(LOG_DIR, `${SESSION_TIMESTAMP}_events.ndjson`);

// ─── Level → label ────────────────────────────────────────────────────────────
const LEVEL_LABELS: Record<number, string> = {
  10: 'TRACE',
  20: 'DEBUG',
  30: 'INFO ',
  40: 'WARN ',
  50: 'ERROR',
  60: 'FATAL',
};

function levelLabel(n: number): string {
  return LEVEL_LABELS[n] ?? 'INFO ';
}

const NASDAQ_TIMEZONE = 'America/New_York';
const nasdaqDateTimeFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: NASDAQ_TIMEZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});
const nasdaqTimezoneFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: NASDAQ_TIMEZONE,
  timeZoneName: 'short',
});

function formatNasdaqTimestamp(date: Date): string {
  const parts = nasdaqDateTimeFormatter.formatToParts(date);
  const lookup = new Map(parts.map((part) => [part.type, part.value]));
  const timezone = nasdaqTimezoneFormatter
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value;

  return `${lookup.get('year')}-${lookup.get('month')}-${lookup.get('day')} ` +
    `${lookup.get('hour')}:${lookup.get('minute')}:${lookup.get('second')}.` +
    `${String(date.getMilliseconds()).padStart(3, '0')} ${timezone ?? 'ET'}`;
}

// ─── Pretty-print a single pino JSON line ─────────────────────────────────────
const SKIP_KEYS = new Set(['level', 'time', 'pid', 'hostname', 'module', 'caller', 'msg', 'v']);

export function extractCallerLocation(stack?: string): string | undefined {
  if (!stack) {
    return undefined;
  }

  for (const line of stack.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.includes('/src/') || trimmed.includes('/src/logger.ts') || trimmed.includes('/node_modules/')) {
      continue;
    }

    const match = trimmed.match(/:(\d+):(\d+)\)?$/);
    if (match) {
      return match[1];
    }
  }

  return undefined;
}

function getCallerLocation(): string | undefined {
  return extractCallerLocation(new Error().stack);
}

export function formatLogLine(obj: Record<string, unknown>): string {
  // Timestamp
  const raw = typeof obj.time === 'string' ? obj.time : new Date().toISOString();
  const ts = formatNasdaqTimestamp(new Date(raw));

  // Level, module, message
  const level = typeof obj.level === 'number' ? levelLabel(obj.level) : 'INFO ';
  const module = typeof obj.module === 'string' ? obj.module : 'app';
  const caller = typeof obj.caller === 'string' ? obj.caller : undefined;
  const location = caller ? `${module}:${caller}` : module;
  const msg = typeof obj.msg === 'string' ? obj.msg : '';

  // Extra bindings
  const extras: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    if (!SKIP_KEYS.has(k)) {
      extras.push(`${k}=${JSON.stringify(v)}`);
    }
  }

  const suffix = extras.length > 0 ? `  ${extras.join(' ')}` : '';
  return `${ts} | ${level} | ${location} | ${msg}${suffix}`;
}

// ─── Dual-write stream: stdout + session log file ────────────────────────────
// We accumulate log content in memory and rewrite the file on every write.
// This is fine for the low-volume logs this system produces.
let fileContent = '';

function makeLogStream(): Writable {
  return new Writable({
    write(chunk: Buffer, _enc: string, cb: () => void) {
      const text = chunk.toString();
      const lines = text.split('\n');
      const formatted: string[] = [];

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
          const obj = JSON.parse(trimmed) as Record<string, unknown>;
          formatted.push(formatLogLine(obj));
        } catch {
          // Non-JSON passthrough (e.g. bun test runner header lines)
          formatted.push(trimmed);
        }
      }

      if (formatted.length === 0) {
        cb();
        return;
      }

      const out = formatted.map(l => `${l}\n`).join('');

      // Write to stdout
      process.stdout.write(out);

      // Append to file (async, fire-and-forget — we don't want log I/O to block)
      fileContent += out;
      Bun.write(LOG_FILE_PATH, fileContent).catch(() => {});

      cb();
    },
  });
}

// ─── Root pino logger ─────────────────────────────────────────────────────────
const level = process.env.LOG_LEVEL ?? 'info';

const rootLogger = pino(
  {
    level,
    base: undefined,   // suppress pid / hostname
    timestamp: pino.stdTimeFunctions.isoTime,
    mixin() {
      if (!LOG_CALLSITE) {
        return {};
      }

      const caller = getCallerLocation();
      return caller ? { caller } : {};
    },
  },
  makeLogStream(),
);

export type AppLogger = typeof rootLogger;

// ─── Per-module factory ───────────────────────────────────────────────────────
/**
 * Create a child logger bound to a module label.
 *
 * @example
 *   import { getLogger } from './logger';
 *   const log = getLogger('harness');
 *   log.info('Starting harness loop');
 *
 * Output:
 *   2026-05-04 07:19:21.042 | INFO  | harness | Starting harness loop
 */
export function getLogger(module: string): AppLogger {
  return rootLogger.child({ module }) as AppLogger;
}

export function appendStructuredLogEvent(event: Record<string, unknown>): void {
  const targetPath = process.env.PI_RUNNER_EVENTS_FILE ?? EVENTS_LOG_FILE_PATH;

  try {
    appendFileSync(targetPath, `${JSON.stringify(event)}\n`);
  } catch {
    // Avoid breaking primary app behavior if sidecar logging fails.
  }
}

// Backwards-compatible default export (used by existing `import { logger }` calls)
export const logger: AppLogger = getLogger('app');
