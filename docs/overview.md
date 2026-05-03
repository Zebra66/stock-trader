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
│  │    1. Check market open (Alpaca API)                 │   │
│  │    2. If closed → skip everything, sleep 10 min      │   │
│  │    3. git pull origin main          ← only if open   │   │
│  │    4. If 60 min elapsed → spawn agent hourly        │   │
│  │    5. Spawn agent tactical                           │   │
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
│  │  (gemini-     │          │  (gemini-         │           │
│  │  3.1-pro-     │          │  3-flash-         │           │
│  │  preview)     │          │  preview)         │           │
│  └───────┬───────┘          └────────┬──────────┘           │
│          │ Function Calls            │ Function Calls        │
│          ▼                           ▼                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  4 Registered Gemini Tools                          │    │
│  │                                                     │    │
│  │  readFile(path)          → Bun.file().text()        │    │
│  │  writeFile(path,content) → Bun.write()              │    │
│  │  executeBash(command)    → Bun.spawn(['sh','-c'...])│    │
│  │  googleSearch (built-in) → Live web search          │    │
│  └──────────────┬──────────────────────────────────────┘    │
│                 │                                            │
│     ┌───────────┴────────────────────────────────┐          │
│     ▼                     ▼                      ▼          │
│  memory/           prompts/                GitHub           │
│  MEMORY.md         hourly.txt              (git push)       │
│  todo.md           tactical.txt                              │
│  dry_run_ledger.json  src/tools/*_cli.ts (Alpaca, FMP, System)│
└─────────────────────────────────────────────────────────────┘
```

---

## The 10-Minute Tactical Cycle

Runs every 10 minutes **while the market is open**. Uses **Gemini 3 Flash** (fast, low cost).

```
┌──────────────────────────────────────────────────────────────┐
│  TACTICAL CYCLE (every 10 min, market hours only)            │
│                                                              │
│  1. isMarketOpen() — if closed, skip everything              │
│                                                              │
│  2. git pull origin main                                     │
│     └─ agent.ts (spawned fresh each cycle) always picks up  │
│        the latest code automatically                         │
│                                                              │
│  3. Bun.spawn → agent.ts tactical                            │
│                                                              │
│  4. Gemini 3 Flash loads prompt + reads state:               │
│     → prompts/tactical.txt — tactical instructions           │
│     → readFile("memory/MEMORY.md") — macro directive        │
│     → readFile("memory/todo.md")   — buy/sell conditions    │
│                                                              │
│  5. Gets live portfolio + market data:                       │
│     → alpaca_cli get-account                                 │
│     → alpaca_cli get-positions                               │
│     → alpaca_cli get-latest-price --symbol <each symbol>    │
│                                                              │
│  6. Google Search: quick news check on any symbol            │
│     before executing an order                                │
│                                                              │
│  7. Executes orders matching todo.md conditions:             │
│     → alpaca_cli submit-order --symbol NVDA --qty 5          │
│                               --side buy                     │
│                                                              │
│  8. Updates state and commits:                               │
│     → writeFile("memory/MEMORY.md") — execution summary     │
│     → writeFile("memory/todo.md")   — update/close flags    │
│     → git add memory/ && git commit -m "[agent] tactical:…" │
│     → git push                                               │
│                                                              │
│  9. agent.ts process exits                                   │
└──────────────────────────────────────────────────────────────┘
```

---

## The 1-Hour Macro Strategy Cycle

Runs once per hour on the first 10-min tick where 60+ minutes have elapsed. Uses **Gemini 3.1 Pro** (more capable, deeper reasoning).

```
┌──────────────────────────────────────────────────────────────┐
│  MACRO CYCLE (every 60 min, market hours only)               │
│                                                              │
│  1. Bun.spawn → agent.ts hourly                              │
│                                                              │
│  2. Gemini 3.1 Pro loads prompt + reads current state:       │
│     → prompts/hourly.txt — hourly instructions               │
│     → readFile("memory/MEMORY.md") — last directive + exec  │
│     → readFile("memory/todo.md")   — tactical flags/issues  │
│                                                              │
│  3. The model decides which data it needs, then gathers it:  │
│     → alpaca_cli get-positions + get-account                 │
│     → fmp_cli get-historical-performance on ALL symbols      │
│       (1w, 1m, 3m, 6m, 1y, 3y)                             │
│     → fmp_cli get-analyst-estimates on key symbols           │
│     → Google Search: breaking news, top investor moves,      │
│       earnings calendars, macro events, analyst upgrades     │
│                                                              │
│  4. Analyses:                                                │
│     - Are we in the right sectors?                           │
│     - What did the tactical agent flag in todo.md?           │
│     - Has anything changed that warrants a strategy shift?   │
│                                                              │
│  5. Writes new macro directive:                              │
│     → writeFile("memory/MEMORY.md"):                         │
│         • Current thesis                                     │
│         • Priority actions for next hour                     │
│         • Symbol | Bias | Rationale | Target % table         │
│     → writeFile("memory/todo.md"):                           │
│         • "BUY <T> if price < X — rationale"                 │
│         • "SELL <T> if price > X or < Y — rationale"         │
│         • "HOLD <T> — target allocation Z%"                  │
│                                                              │
│  6. Commits:                                                 │
│     → git add memory/ && git commit -m "[agent] hourly:…"   │
│     → git push                                               │
│                                                              │
│  7. agent.ts exits, then tactical cycle runs immediately     │
└──────────────────────────────────────────────────────────────┘
```

---

## The 4 Registered Gemini Tools

These are the capabilities registered directly with the Gemini Function Calling API.

| Tool | Signature | Implementation |
|---|---|---|
| `readFile` | `readFile(path: string)` | `Bun.file(path).text()` |
| `writeFile` | `writeFile(path: string, content: string)` | `Bun.write(path, content)` |
| `executeBash` | `executeBash(command: string)` | `Bun.spawn(['sh', '-c', command])` |
| `googleSearch` | Built-in Gemini tool | Live Google Search results |

The CLI tools (`alpaca_cli.ts`, `fmp_cli.ts`) are invoked **through** `executeBash` — this keeps the Gemini tool surface minimal while giving the agent full flexibility to discover and invoke any CLI command.

**Google Search is used for:**
- Breaking market news and macro events
- Top investor portfolio filings (Burry, Ackman, Dalio, Buffett, Cathie Wood, etc.)
- Analyst upgrades/downgrades and price target changes
- Buy/sell timing best practices
- Pre-trade news checks before executing any order

---

## What the Agent "Sees" — Workspace Structure

The agent's working directory is the repository root. It has access to:

| Path | Purpose |
|---|---|
| `memory/MEMORY.md` | **Primary communication bus.** Macro agent writes strategy; Tactical agent reads and executes. Both update after each cycle. |
| `memory/todo.md` | **Action queue.** Macro writes buy/sell conditions; Tactical checks and clears them each cycle. |
| `memory/dry_run_ledger.json` | Optional virtual ledger for manual bookkeeping. |
| `prompts/hourly.txt` | External system prompt template for the hourly macro strategist. Loaded by `src/agent.ts` at runtime. |
| `prompts/tactical.txt` | External system prompt template for the 10-minute tactical executor. Loaded by `src/agent.ts` at runtime. |
| `src/tools/alpaca_cli.ts` | CLI: account info, positions, prices, order execution. |
| `src/tools/fmp_cli.ts` | CLI: analyst estimates, 1w–3y historical performance. |
| `src/tools/system_cli.ts` | CLI: read/write files. |
| `skills/` | Skill docs the agent can read to improve its own approach. |
| `docs/` | Project documentation. |

---

## How Data Flows Between Components

### Inter-cycle state (agent → agent)
```
Hourly Agent writes:              Tactical Agent reads:
  memory/MEMORY.md  ──────────→    memory/MEMORY.md (macro directive)
  memory/todo.md    ──────────→    memory/todo.md   (buy/sell conditions)

Tactical Agent writes:            Hourly Agent reads next cycle:
  memory/MEMORY.md  (append) ─→    memory/MEMORY.md (exec summary)
  memory/todo.md    (update) ─→    memory/todo.md   (flags/issues)
```

### Pause/Resume (dashboard ↔ harness)
The harness and web dashboard share a single OS process, so the pause state is a simple in-memory variable:
```
harness.ts                     web/server.ts
─────────────────────────────────────────────
let isPaused = false;  ←───── import { getPaused, setPaused }
                        ────→  GET /api/status  → { paused: false }
setPaused(true)        ←───── POST /api/toggle
```

---

## Git as the Communication Bus

Git is a first-class citizen of this system — not just version control. It serves two roles:

### 1. State persistence across machines
The agent writes `memory/MEMORY.md` and commits it. The next cycle runs `git pull`, so if deployed to Cloud Run or running on multiple machines, all instances stay in sync.

### 2. Self-evolution
The agent may rewrite its own source files (`src/agent.ts`, `prompts/*.txt`, CLI tools) and commit them. On the next cycle, after `git pull`, the spawned child process loads the new code automatically.

```
Agent modifies src/agent.ts
    → git add . && git commit -m "[agent] refactor: ..."
    → git push

Next harness tick (market open):
    → git pull                      ← new code downloaded
    → Bun.spawn('bun run agent.ts') ← fresh process loads new code ✓
```

> **Important:** The harness process (`harness.ts`) itself does **NOT** auto-reload after a git pull. Only files spawned as fresh child processes (agent.ts) benefit. If `harness.ts` changes, it must be restarted manually. The web server (`server.ts`) uses `--hot` so it auto-reloads on file changes during local development.

---

## Commit Convention

| Author | Prefix | Example |
|---|---|---|
| You (human) | *(none)* | `fix: update chart colors` |
| Autonomous agent | `[agent]` | `[agent] tactical: bought NVDA x5` |

Filter agent commits:
```bash
./scripts/git_agent_log.sh --oneline
# or
git log --grep='^\[agent\]' --oneline
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
| `GEMINI_API_KEY` | Gemini LLM API (Pro + Flash + Search) |
| `ALPACA_API_KEY` / `ALPACA_API_SECRET` | Brokerage execution & market data |
| `ALPACA_PAPER=true` | Paper trading mode |
| `FMP_API_KEY` | Analyst estimates & historical data (optional) |
| `PORT` | Web dashboard port (default 3000) |
