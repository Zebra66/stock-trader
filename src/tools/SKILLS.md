# Available CLI Tools

Use `executeBash` to invoke any of these tools. Run `--help` on each one to see full usage and all available commands.

| Tool | File | Purpose |
|------|------|---------|
| Alpaca | `src/tools/alpaca_cli.ts` | Brokerage — account info, positions, prices, orders |
| FMP | `src/tools/fmp_cli.ts` | Market data — analyst estimates, historical performance |
| System | `src/tools/system_cli.ts` | File I/O — read and write local files |

## Discover usage

```bash
bun run src/tools/alpaca_cli.ts --help
bun run src/tools/fmp_cli.ts --help
bun run src/tools/system_cli.ts --help
```
