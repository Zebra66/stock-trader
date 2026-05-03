const FMP_BASE_URL = 'https://financialmodelingprep.com/api/v3';

function isFmpDisabled(): boolean {
  const key = process.env.FMP_API_KEY;
  return !key || key === 'dummy_key' || key === 'your_fmp_api_key_here';
}

interface FmpEstimate {
  date: string;
  symbol: string;
  estimatedRevenueLow: number;
  estimatedRevenueHigh: number;
  estimatedEpsLow: number;
  estimatedEpsHigh: number;
  estimatedEpsAvg: number;
  numberAnalystEstimatedEps: number;
  numberAnalystsEstimatedRevenue: number;
}

interface FmpHistoricalDay {
  date: string;
  close: number;
}

interface FmpHistoricalResponse {
  symbol: string;
  historical: FmpHistoricalDay[];
}

export const fmpTools = {
  getAnalystEstimates: async (symbol: string): Promise<string> => {
    if (isFmpDisabled()) {
      return '[WARNING]: FMP_API_KEY is not configured. Analyst estimates are disabled. Please rely on other data.';
    }
    try {
      const res = await fetch(`${FMP_BASE_URL}/analyst-estimates/${symbol}?apikey=${process.env.FMP_API_KEY}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as FmpEstimate[];
      return JSON.stringify(data.slice(0, 5));
    } catch (e: unknown) {
      return `Error fetching analyst estimates for ${symbol}: ${(e as Error).message}`;
    }
  },

  getHistoricalPerformance: async (symbol: string): Promise<string> => {
    if (isFmpDisabled()) {
      return '[WARNING]: FMP_API_KEY is not configured. Historical performance is disabled. Please rely on other data.';
    }
    try {
      const res = await fetch(`${FMP_BASE_URL}/historical-price-full/${symbol}?apikey=${process.env.FMP_API_KEY}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as FmpHistoricalResponse;

      if (!data.historical || data.historical.length === 0) {
        return `No historical data found for ${symbol}`;
      }

      const h = data.historical; // newest → oldest
      const current = h[0].close;

      const atDaysAgo = (calendarDays: number): number => {
        const idx = Math.floor(calendarDays * 0.7);
        return idx < h.length ? h[idx].close : h[h.length - 1].close;
      };

      const pct = (past: number) => (((current - past) / past) * 100).toFixed(2) + '%';
      const past1w  = atDaysAgo(7);
      const past1m  = atDaysAgo(30);
      const past3m  = atDaysAgo(90);
      const past6m  = atDaysAgo(180);
      const past1y  = atDaysAgo(365);
      const past15y = atDaysAgo(547);
      const past3y  = atDaysAgo(1095);

      return JSON.stringify({
        symbol,
        current,
        '1w_ago': past1w,  '1w_return': pct(past1w),
        '1m_ago': past1m,  '1m_return': pct(past1m),
        '3m_ago': past3m,  '3m_return': pct(past3m),
        '6m_ago': past6m,  '6m_return': pct(past6m),
        '1y_ago': past1y,  '1y_return': pct(past1y),
        '1.5y_ago': past15y, '1.5y_return': pct(past15y),
        '3y_ago': past3y,  '3y_return': pct(past3y),
      });
    } catch (e: unknown) {
      return `Error fetching historical performance for ${symbol}: ${(e as Error).message}`;
    }
  },
};

// ── CLI ────────────────────────────────────────────────────────────────────────

const HELP = `
Usage: bun run src/tools/fmp.ts <command> [options]

Commands:
  get-analyst-estimates --symbol <TICKER>
      Fetch the latest analyst EPS and revenue estimates (top 5 periods).
      Requires FMP_API_KEY env var.

  get-historical-performance --symbol <TICKER>
      Summarise historical close prices: 1w, 1m, 3m, 6m, 1y, 1.5y, 3y ago
      with percentage returns vs today.
      Requires FMP_API_KEY env var.

Options:
  --help   Show this help message.

Examples:
  bun run src/tools/fmp.ts get-analyst-estimates --symbol NVDA
  bun run src/tools/fmp.ts get-historical-performance --symbol QQQ
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
    case 'get-analyst-estimates': {
      if (!flags.symbol) { console.error('Error: --symbol is required'); process.exit(1); }
      task = fmpTools.getAnalystEstimates(flags.symbol);
      break;
    }
    case 'get-historical-performance': {
      if (!flags.symbol) { console.error('Error: --symbol is required'); process.exit(1); }
      task = fmpTools.getHistoricalPerformance(flags.symbol);
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
