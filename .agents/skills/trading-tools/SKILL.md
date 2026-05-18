---
name: trading-tools
description: Reference for the three CLI tools available in this project (Alpaca, FMP, System). Use when asked to interact with the broker, fetch market data, or do file I/O — or to remind yourself what tools exist before writing agent code.
allowed-tools: Bash(bun run src/tools/*)
argument-hint: "[tool-name]"
---

# Trading CLI Tools

This project provides three CLI tools under `src/tools/`. Each is a standalone Bun script that doubles as an importable module.

| Tool | File | Responsibility |
|------|------|----------------|
| Alpaca | `src/tools/alpaca_cli.ts` | Brokerage: account info, positions, prices, orders |
| FMP | `src/tools/fmp_cli.ts` | Market data: analyst estimates, historical performance |
| System | `src/tools/system_cli.ts` | File I/O: read and write local files |

## Usage

Run `--help` on any tool to see every command and its flags:

```bash
bun run src/tools/alpaca_cli.ts --help
bun run src/tools/fmp_cli.ts --help
bun run src/tools/system_cli.ts --help
```

## Current --help output

!`bun run src/tools/alpaca_cli.ts --help`

!`bun run src/tools/fmp_cli.ts --help`

!`bun run src/tools/system_cli.ts --help`

## Fallback: When the Alpaca CLI Is Unavailable

If the `alpaca_cli.ts` tool returns timeouts or connection errors, use the Alpaca REST API directly as a reliable fallback.

### Direct REST API Call

```bash
bun -e '
const res = await fetch(
  "https://paper-api.alpaca.markets/v2/orders?status=all&limit=50",
  {
    headers: {
      "APCA-API-KEY-ID": process.env.ALPACA_API_KEY!,
      "APCA-API-SECRET-KEY": process.env.ALPACA_SECRET_KEY!,
    },
  }
);
const data = await res.json();
console.log(data);
'
```

> **Warning:** Always validate that the response is an array before calling `.slice()` or array methods. The API may return an error object instead of an array under certain failure conditions.

### Validation Pattern

```typescript
const orders = await response.json();
if (!Array.isArray(orders)) {
  throw new Error(`Unexpected Alpaca response: ${JSON.stringify(orders)}`);
}
const recent = orders.slice(0, 10);
```
