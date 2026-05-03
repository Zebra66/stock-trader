const FMP_API_KEY = process.env.FMP_API_KEY;
const isFmpDisabled = !FMP_API_KEY || FMP_API_KEY === 'dummy_key' || FMP_API_KEY === 'your_fmp_api_key_here';

const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fmpTools = {
  getAnalystEstimates: async (symbol: string) => {
    if (isFmpDisabled) {
      console.warn("[FMP] FMP_API_KEY is missing. Returning disabled message.");
      return `[WARNING]: FMP_API_KEY is not configured. Analyst estimates are disabled. Please rely on other data.`;
    }
    try {
      const response = await fetch(`${BASE_URL}/analyst-estimates/${symbol}?apikey=${FMP_API_KEY}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: any = await response.json();
      return JSON.stringify(data.slice(0, 5)); // Return top 5
    } catch (e: any) {
      return `Error fetching FMP analyst estimates: ${e.message}`;
    }
  },

  getHistoricalPerformance: async (symbol: string) => {
    if (isFmpDisabled) {
      console.warn("[FMP] FMP_API_KEY is missing. Returning disabled message.");
      return `[WARNING]: FMP_API_KEY is not configured. Historical performance is disabled. Please rely on other data.`;
    }
    try {
      const response = await fetch(`${BASE_URL}/historical-price-full/${symbol}?apikey=${FMP_API_KEY}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: any = await response.json();
      
      // We don't want to return the entire history to the LLM (too many tokens)
      // We will summarize it: current, 1w ago, 1m ago, 3m ago, 6m ago, 1y ago, 1.5y ago, 3y ago.
      if (!data.historical || data.historical.length === 0) {
        return `No historical data for ${symbol}`;
      }

      const h = data.historical; // Note: FMP returns newest to oldest usually
      const current = h[0].close;
      
      const getVal = (daysAgo: number) => {
        // Trading days vs Calendar days approx
        const tradingDays = Math.floor(daysAgo * 0.7);
        if (tradingDays < h.length) return h[tradingDays].close;
        return h[h.length - 1].close; // fallback to oldest available
      };

      const summary = {
        symbol,
        current,
        '1_week_ago': getVal(7),
        '1_month_ago': getVal(30),
        '3_months_ago': getVal(90),
        '6_months_ago': getVal(180),
        '1_year_ago': getVal(365),
        '1.5_years_ago': getVal(547),
        '3_years_ago': getVal(1095)
      };

      return JSON.stringify(summary);
    } catch (e: any) {
      return `Error fetching FMP historical performance: ${e.message}`;
    }
  }
};
