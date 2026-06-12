const LEDGER_PATH = 'memory/ledger.md';

const UNIVERSE = [
  'AVGO','EIS','GLD','GOOG','HOOD','META','NVDA','QQQ','QTUM','RKLB','SHLD','SOXX','VOO','ARKX',
];

async function loadReferencePrices(): Promise<Record<string, number>> {
  try {
    const file = Bun.file('./memory/tactical_last_prices.json');
    if (!(await file.exists())) return {};
    const json = await file.json() as { prices?: Record<string, number> };
    return json.prices ?? {};
  } catch {
    return {};
  }
}

function validateLedgerDetails(details: string[], prices: Record<string, number>): void {
  for (const detail of details) {
    const upper = detail.toUpperCase();
    for (const sym of UNIVERSE) {
      if (!new RegExp(`\\b${sym}\\b`, 'i').test(detail)) continue;
      const knownPrice = prices[sym];
      if (!knownPrice || knownPrice <= 0) continue;
      // Extract all numbers from the detail (allow $ prefix and commas)
      const numMatches = detail.match(/\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?\b(?!%)|\$?\d+(?:\.\d+)?\b(?!%)/g);
      if (!numMatches) continue;
      for (const raw of numMatches) {
        const cleaned = raw.replace(/[$,]/g, '');
        const num = parseFloat(cleaned);
        if (Number.isNaN(num) || num <= 0) continue;
        // Skip small integers that are likely quantities (e.g., "VOO 2", "shares 3")
        const isInteger = !raw.includes('.');
        if (isInteger && num < 50) continue;
        // If the number is < 20% of the known price, it's likely a hallucination
        if (num < knownPrice * 0.20) {
          throw new Error(
            `Ledger detail contains likely price hallucination for ${sym}: "${raw}" (parsed $${num}) is < 20% of reference price ${knownPrice}. Full detail: "${detail}". Please verify the price and retry.`
          );
        }
      }
    }
  }
}

const HELP = `
Usage: bun run src/tools/ledger_cli.ts <command> [options]

Commands:
  append --mode <hourly|tactical> --tldr <TEXT> [--detail <TEXT> ...] [--details <TEXT>] [--path <PATH>]
      Append one ledger entry in New York time.
  prepend --mode <hourly|tactical> --tldr <TEXT> [--detail <TEXT> ...] [--details <TEXT>] [--path <PATH>]
      Prepend one ledger entry after the header in New York time.

Options:
  --help   Show this help message.

Examples:
  bun run src/tools/ledger_cli.ts append --mode hourly --tldr "Raised QQQ priority" --detail "Cash drag remains dominant"
  bun run src/tools/ledger_cli.ts append --mode tactical --tldr "No trade" --details "Quote was stale\nEdge did not clear friction threshold"
  bun run src/tools/ledger_cli.ts prepend --mode hourly --tldr "Raised QQQ priority" --detail "Cash drag remains dominant"
`.trim();

interface ParsedArgs {
  command?: string;
  flags: Map<string, string[]>;
}

interface AppendLedgerOptions {
  mode: 'hourly' | 'tactical';
  tldr: string;
  details?: string[];
  now?: Date;
  ledgerPath?: string;
}

const ledgerTimestampFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/New_York',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function parseArgs(argv: string[]): ParsedArgs {
  const [command, ...rest] = argv;
  const flags = new Map<string, string[]>();

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith('--')) {
      continue;
    }

    const key = token.slice(2);
    const next = rest[index + 1];
    const value = next && !next.startsWith('--') ? (index += 1, next) : 'true';
    const current = flags.get(key) ?? [];
    current.push(value);
    flags.set(key, current);
  }

  return { command, flags };
}

function getRequiredFlag(flags: Map<string, string[]>, key: string): string {
  const value = flags.get(key)?.at(-1)?.trim();
  if (!value) {
    throw new Error(`--${key} is required`);
  }

  return value;
}

function getMode(flags: Map<string, string[]>): 'hourly' | 'tactical' {
  const mode = getRequiredFlag(flags, 'mode');
  if (mode !== 'hourly' && mode !== 'tactical') {
    throw new Error('--mode must be hourly or tactical');
  }

  return mode;
}

function normalizeDetails(flags: Map<string, string[]>): string[] {
  const detailFlags = flags.get('detail') ?? [];
  const multilineDetails = (flags.get('details') ?? []).flatMap((value) => value.split('\n'));

  return [...detailFlags, ...multilineDetails]
    .map((detail) => detail.trim().replace(/^-\s*/, ''))
    .filter((detail) => detail.length > 0)
    .slice(0, 5);
}

export function formatLedgerTimestamp(now: Date): string {
  const parts = ledgerTimestampFormatter.formatToParts(now);
  const lookup = new Map(parts.map((part) => [part.type, part.value]));
  return `${lookup.get('year')}-${lookup.get('month')}-${lookup.get('day')} : ${lookup.get('hour')}:${lookup.get('minute')}`;
}

export function buildLedgerEntry(options: AppendLedgerOptions): string {
  const details = options.details?.filter((detail) => detail.trim().length > 0).slice(0, 5) ?? [];
  const lines = [
    `${formatLedgerTimestamp(options.now ?? new Date())} : [${options.mode}] ${options.tldr.trim()}`,
    ...details.map((detail) => `- ${detail.trim()}`),
  ];

  return `${lines.join('\n')}\n\n`;
}

function buildLedgerHeader(): string {
  return [
    '# Trading Ledger',
    '',
    'Per-cycle summary of the hourly and tactical agent findings and decisions.',
    'Format: `<YYYY-MM-DD : HH:MM> : [mode] TL;DR`, followed by up to 5 bullets.',
    '',
  ].join('\n');
}

function splitLedgerContent(existing: string): { header: string; body: string } {
  const defaultHeader = buildLedgerHeader();
  if (existing.startsWith(defaultHeader)) {
    return {
      header: defaultHeader,
      body: existing.slice(defaultHeader.length),
    };
  }

  const headerEnd = existing.indexOf('\n\n');
  if (headerEnd >= 0) {
    return {
      header: `${existing.slice(0, headerEnd)}\n\n`,
      body: existing.slice(headerEnd + 2),
    };
  }

  return {
    header: defaultHeader,
    body: existing,
  };
}

export async function appendLedgerEntry(options: AppendLedgerOptions): Promise<string> {
  const ledgerPath = options.ledgerPath ?? LEDGER_PATH;
  const ledgerFile = Bun.file(ledgerPath);
  const exists = await ledgerFile.exists();
  const existing = exists ? await ledgerFile.text() : buildLedgerHeader();
  const prices = await loadReferencePrices();
  const details = options.details?.filter((detail) => detail.trim().length > 0).slice(0, 5) ?? [];
  validateLedgerDetails(details, prices);
  const separator = existing.endsWith('\n') ? '' : '\n';
  const updated = `${existing}${separator}${buildLedgerEntry(options)}`;

  await Bun.write(ledgerPath, updated);
  return `Appended ledger entry to ${ledgerPath}`;
}

export async function prependLedgerEntry(options: AppendLedgerOptions): Promise<string> {
  const ledgerPath = options.ledgerPath ?? LEDGER_PATH;
  const ledgerFile = Bun.file(ledgerPath);
  const exists = await ledgerFile.exists();
  const existing = exists ? await ledgerFile.text() : buildLedgerHeader();
  const prices = await loadReferencePrices();
  const details = options.details?.filter((detail) => detail.trim().length > 0).slice(0, 5) ?? [];
  validateLedgerDetails(details, prices);
  const { header, body } = splitLedgerContent(existing);
  const updated = `${header}${buildLedgerEntry(options)}${body}`;

  await Bun.write(ledgerPath, updated);
  return `Prepended ledger entry to ${ledgerPath}`;
}

function getOptionalFlag(flags: Map<string, string[]>, key: string): string | undefined {
  return flags.get(key)?.at(-1)?.trim() || undefined;
}

async function runCli(argv: string[]): Promise<void> {
  const { command, flags } = parseArgs(argv);

  if (!command || command === '--help' || flags.has('help')) {
    console.log(HELP);
    return;
  }

  switch (command) {
    case 'append': {
      const mode = getMode(flags);
      const tldr = getRequiredFlag(flags, 'tldr');
      const details = normalizeDetails(flags);
      const ledgerPath = getOptionalFlag(flags, 'path');
      const output = await appendLedgerEntry({ mode, tldr, details, ledgerPath });
      console.log(output);
      return;
    }
    case 'prepend': {
      const mode = getMode(flags);
      const tldr = getRequiredFlag(flags, 'tldr');
      const details = normalizeDetails(flags);
      const ledgerPath = getOptionalFlag(flags, 'path');
      const output = await prependLedgerEntry({ mode, tldr, details, ledgerPath });
      console.log(output);
      return;
    }
    default:
      throw new Error(`Unknown command: "${command}"`);
  }
}

if (import.meta.main) {
  runCli(process.argv.slice(2)).catch((error: unknown) => {
    const message = (error as Error).message;
    console.error(`${message}\n\n${HELP}`);
    process.exit(1);
  });
}
