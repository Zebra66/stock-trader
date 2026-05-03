import { expect, test, describe } from "bun:test";
import { alpacaTools } from "./tools/alpaca";
import { fmpTools } from "./tools/fmp";
import { systemTools } from "./tools/system";

describe("Tool Functionality Verification", () => {
  test("Alpaca Tool: getAccount should return stringified JSON", async () => {
    // Note: Since this hits the live Alpaca paper API, it requires keys
    if (process.env.ALPACA_API_KEY) {
      const result = await alpacaTools.getAccount();
      expect(typeof result).toBe("string");
      expect(result).not.toContain("Error getting account");
    }
  });

  test("FMP Tool: Missing Key Graceful Fallback", async () => {
    // We expect it to return a warning string when the key is missing or dummy
    const originalKey = process.env.FMP_API_KEY;
    process.env.FMP_API_KEY = "dummy_key"; // Force the fallback behavior
    
    const result = await fmpTools.getAnalystEstimates("AAPL");
    expect(result).toContain("[WARNING]: FMP_API_KEY is not configured");
    
    // Restore
    process.env.FMP_API_KEY = originalKey;
  });

  test("System Tool: executeBash", async () => {
    const result = await systemTools.executeBash("echo 'hello'");
    expect(result).toContain("hello");
  });
});
