import { alpacaTools } from './tools/alpaca_cli';
import { fmpTools } from './tools/fmp_cli';

async function runTests() {
  console.log("--- Testing Alpaca Connection ---");
  const account = await alpacaTools.getAccount();
  console.log("Account response:", account.substring(0, 150) + "...");

  console.log("\n--- Testing Alpaca Market Data ---");
  const price = await alpacaTools.getLatestPrice("AAPL");
  console.log("AAPL Latest Price:", price.substring(0, 150) + "...");

  console.log("\n--- Testing FMP Graceful Fallback ---");
  const fmp = await fmpTools.getAnalystEstimates("AAPL");
  console.log("FMP Response:", fmp);
}

runTests();
