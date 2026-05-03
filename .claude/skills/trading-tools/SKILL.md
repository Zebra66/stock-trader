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
