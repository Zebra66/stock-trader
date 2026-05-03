# Autonomous Stock Trader — System Overview

## Goal

Beat the S&P 500 over a 3-month period by operating an **autonomous, self-evolving AI trading agent** with zero hardcoded algorithms. All decisions — what to buy, when to sell, how to allocate — are made exclusively by the Gemini LLM, which can also update its own code, prompts, and strategy files between cycles.

The system runs on real brokerage infrastructure (Alpaca Paper Trading → Live when ready) and is designed to be left running unattended, with a web dashboard as the human override mechanism.

---

## Investment Universe

| Theme | Instruments |
|---|---|
| High-Tech / LLMs | QQQ, XLK, MSFT, GOOGL, NVDA, META |
| Nuclear Energy | URA, NLR, CCJ, CEG |
| Space | ARKX, UFO, RKLB |
| Quantum Computing | QTUM, IONQ, RGTI |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Local Machine / Cloud Run               │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  harness.ts  (single always-on process)              │   │
│  │                                                      │   │
│  │  Every 10 min:                                       │   │
│  │    1. git pull origin main                           │   │
│  │    2. Check market open (Alpaca API)                 │   │
│  │    3. If 60 min elapsed → spawn agent hourly        │   │
│  │    4. Spawn agent tactical                           │   │
│  │                                                      │   │
│  │  Always-on co-routines:                              │   │
│  │    • Web Dashboard (Elysia, port 3000)               │   │
│  │    • Pause/Resume toggle (shared memory)             │   │
│  └──────────────────────────────────────────────────────┘   │
│                         │ Bun.spawn                          │
│          ┌──────────────┴──────────────┐                     │
│          ▼                             ▼                     │
│  ┌───────────────┐          ┌──────────────────┐            │
│  │  agent.ts     │          │  agent.ts         │           │
│  │  mode=hourly  │          │  mode=tactical    │           │
│  │  (gemini-2.5- │          │  (gemini-2.5-     │           │
│  │   pro)        │          │   flash)          │           │
│  └───────┬───────┘          └────────┬──────────┘           │
│          │ Function Calls            │ Function Calls        │
│          ▼                           ▼                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  3 Gemini Tools (registered as Function Declarations)│    │
│  │                                                     │    │
│  │  readFile(path)          → Bun.file().text()        │    │
│  │  writeFile(path,content) → Bun.write()              │    │
│  │  executeBash(command)    → Bun.spawn(['sh','-c'...])│    │
│  └──────────────┬──────────────────────────────────────┘    │
│                 │                                            │
│     ┌───────────┴────────────────────────────────┐          │
│     ▼                     ▼                      ▼          │
│  memory/           src/tools/*_cli.ts        GitHub         │
│  MEMORY.md         (Alpaca, FMP, System)     (git push)     │
│  todo.md                                                    │
│  dry_run_ledger.json                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## The 10-Minute Tactical Cycle

Runs every 10 minutes while the market is open. Uses **Gemini 2.5 Flash** (fast, cheap).

```
┌──────────────────────────────────────────────────────────────┐
│  TACTICAL CYCLE (every 10 min)                               │
│                                                              │
│  1. harness.ts: git pull origin main                         │
│     └─ Any code/prompt changes from the previous cycle       │
│        are now live before the next agent run                │
│                                                              │
│  2. harness.ts: isMarketOpen() via Alpaca                    │
│     └─ Skip entire cycle if market is closed                 │
│                                                              │
│  3. Bun.spawn → agent.ts tactical                            │
│                                                              │
│  4. agent.ts sends prompt to Gemini Flash:                   │
│     "Read MEMORY.md, check positions, check prices,          │
│      execute orders per the macro directive,                 │
│      then commit memory changes to git."                     │
│                                                              │
│  5. Gemini calls tools in a loop:                            │
│     → readFile("memory/MEMORY.md")                           │
│     → executeBash("bun run src/tools/alpaca_cli.ts           │
│                    get-positions")                           │
│     → executeBash("bun run src/tools/alpaca_cli.ts           │
│                    get-latest-price --symbol NVDA")          │
│     → executeBash("bun run src/tools/alpaca_cli.ts           │
│                    submit-order --symbol NVDA --qty 5        │
│                    --side buy")                              │
│     → writeFile("memory/MEMORY.md", "<updated summary>")    │
│     → executeBash("git add memory/ && git commit -m          │
│                    '[agent] tactical: bought NVDA x5'        │
│                    && git push")                             │
│                                                              │
│  6. agent.ts process exits                                   │
│  7. harness.ts waits 10 min, repeats                         │
└──────────────────────────────────────────────────────────────┘
```

---

## The 1-Hour Macro Strategy Cycle

Runs once per hour (the first 10-min tick where 60+ minutes have elapsed since the last hourly run). Uses **Gemini 2.5 Pro** (more capable, slightly more expensive).

```
┌──────────────────────────────────────────────────────────────┐
│  MACRO CYCLE (every 60 min)                                  │
│                                                              │
│  1. Bun.spawn → agent.ts hourly                              │
│                                                              │
│  2. agent.ts sends prompt to Gemini Pro:                     │
│     "Read memory files, evaluate multi-timeframe             │
│      performance for key symbols (1w to 3y), optionally      │
│      research top investor filings, formulate macro          │
│      strategy, rewrite MEMORY.md with clear directive        │
│      for the next 60 minutes of tactical cycles."            │
│                                                              │
│  3. Gemini calls tools in a loop:                            │
│     → readFile("memory/MEMORY.md")                           │
│     → readFile("memory/todo.md")                             │
│     → executeBash("bun run src/tools/fmp_cli.ts              │
│                    get-historical-performance                 │
│                    --symbol QQQ")                            │
│     → executeBash("bun run src/tools/fmp_cli.ts              │
│                    get-analyst-estimates --symbol NVDA")     │
│     → writeFile("memory/MEMORY.md", "<new strategy>")        │
│     → writeFile("memory/todo.md", "<updated tasks>")         │
│     → executeBash("git add memory/ && git commit -m          │
│                    '[agent] hourly: updated macro strategy'  │
│                    && git push")                             │
│                                                              │
│  4. agent.ts process exits                                   │
│  5. Tactical cycle runs immediately after (same tick)        │
└──────────────────────────────────────────────────────────────┘
```

---

## What the Agent "Sees" — Its Workspace

The agent's working directory is the repository root. When it boots, it has access to:

| Path | Purpose |
|---|---|
| `memory/MEMORY.md` | Primary inter-cycle communication. The Macro agent writes the strategy here; the Tactical agent reads it. |
| `memory/todo.md` | Backlog of pending tasks/investigations for the agent. |
| `memory/dry_run_ledger.json` | Manual bookkeeping ledger (used by the agent to track virtual trades if needed). |
| `src/tools/alpaca_cli.ts` | CLI binary: account info, positions, prices, order execution. |
| `src/tools/fmp_cli.ts` | CLI binary: analyst estimates, 1w–3y historical performance. |
| `src/tools/system_cli.ts` | CLI binary: read/write files. |
| `skills/` | Coding/debugging/trading skill documentation for the agent to read. |
| `docs/` | Project documentation. |

The agent can **read, write, and execute anything in this tree** via its 3 tools.

---

## The 3 Registered Gemini Tools

These are the only capabilities directly registered with the Gemini Function Calling API. Everything else is accessed via `executeBash`.

| Tool | Signature | Implementation |
|---|---|---|
| `readFile` | `readFile(path: string)` | `Bun.file(path).text()` |
| `writeFile` | `writeFile(path: string, content: string)` | `Bun.write(path, content)` |
| `executeBash` | `executeBash(command: string)` | `Bun.spawn(['sh', '-c', command])` |

The CLI tools (`alpaca_cli.ts`, `fmp_cli.ts`) are invoked **through** `executeBash`, not registered as separate tools. This design keeps the Gemini tool surface minimal while giving the agent full flexibility to discover and invoke any CLI command.

---

## How Data Flows Between Harness and TypeScript App

The harness and the web dashboard share a single OS process, so state is communicated via **in-memory module-level variables** in `harness.ts`:

```
harness.ts                     web/server.ts
─────────────────────────────────────────────
let isPaused = false;  ←───── import { getPaused, setPaused }
                        ────→  GET /api/status  → { paused: false }
setPaused(true)        ←───── POST /api/toggle
```

The dashboard also reads `memory/MEMORY.md` directly from disk on each request — no in-memory caching — so it always reflects the latest state written by the agent.

---

## Git as the Communication Bus

Git is a first-class citizen of this system — not just version control. It serves two roles:

1. **State persistence**: The agent writes `memory/MEMORY.md` and commits it. On the next cycle the harness runs `git pull`, so if running on multiple machines (or Cloud Run), all instances stay in sync.

2. **Self-evolution**: The agent may rewrite its own source files (`src/agent.ts`, prompts, CLI tools) and commit them. On the next `git pull`, the harness picks up those changes, meaning the agent's self-modifications are live within one 10-minute cycle.

```
Agent modifies src/agent.ts
    → git add . && git commit -m "[agent] refactor: ..."
    → git push
    
Next harness tick:
    → git pull                 ← new code downloaded
    → Bun.spawn agent.ts      ← new code executes
```

---

## Running Locally

```bash
# Start just the web dashboard (hot-reload on code changes)
./scripts/local_run_web_server.sh

# Start the full harness (web dashboard + agent loops)
./scripts/run_local.sh

# Stop everything
./scripts/local_stop_all.sh

# View only agent commits
./scripts/git_agent_log.sh --oneline
```

**Required environment variables** (copy `.env.example` → `.env`):

| Variable | Purpose |
|---|---|
| `GEMINI_API_KEY` | Gemini LLM API |
| `ALPACA_API_KEY` / `ALPACA_API_SECRET` | Brokerage execution & market data |
| `ALPACA_PAPER=true` | Paper trading mode |
| `FMP_API_KEY` | Analyst estimates & historical data (optional) |
| `PORT` | Web dashboard port (default 3000) |
