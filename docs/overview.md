# Autonomous Stock Trader — System Overview

## Goal

Beat the S&P 500 over a 3-month period by operating an **autonomous, self-evolving AI trading agent** with zero hardcoded algorithms. All decisions — what to buy, when to sell, how to allocate — are made by a Gemini-powered OpenCode coding agent running inside this repo workspace, which can also update its own code, prompts, and strategy files between cycles.

The system runs on real brokerage infrastructure (Alpaca Paper Trading → Live when ready) and is designed to be left running unattended, with a web dashboard as the human override mechanism.

---

## Investment Universe

AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, ARKX, META

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
│  │  OpenCode SDK │          │  OpenCode SDK     │           │
│  │  config model │          │  config model     │           │
│  └───────┬───────┘          └────────┬──────────┘           │
│          │ OpenCode session          │ OpenCode session      │
│          ▼                           ▼                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  OpenCode Workspace Runtime                         │    │
│  │                                                     │    │
│  │  AGENTS.md / skills / prompts / bash / edits        │    │
│  │  grep / glob / web tools / git-aware repo context   │    │
│  │  provider config via opencode.json                  │    │
│  └──────────────┬──────────────────────────────────────┘    │
│                 │                                            │
│     ┌───────────┴──────────────────────────────────┐        │
│     ▼                    ▼                        ▼        │
│  memory/          prompts/      config/         GitHub     │
│  MEMORY.md        hourly.txt    agent_runtime.json(push)   │
│  todo.md          tactical.txt                               │
│  dry_run_ledger.json  opencode.json  src/tools/*_cli.ts     │
└─────────────────────────────────────────────────────────────┘
```

---

## The 10-Minute Tactical Cycle

Runs every 10 minutes **while the market is open**. Uses OpenCode SDK with the model configured for `tactical` in `config/agent_runtime.json`.

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
│  4. OpenCode starts in the repo root and loads:              │
│     → prompts/tactical.txt — tactical instructions           │
│     → memory/MEMORY.md — macro directive                     │
│     → memory/todo.md   — buy/sell conditions                 │
│     → AGENTS.md / skills / opencode.json                     │
│                                                              │
│  5. Uses repo tools + CLI tools for portfolio data:          │
│     → alpaca_cli get-account                                 │
│     → alpaca_cli get-positions                               │
│     → alpaca_cli get-latest-price --symbol <each symbol>    │
│                                                              │
│  6. OpenCode streams logs with `[opencode]` prefixes while   │
│     it reasons, edits files, and runs tools                  │
│                                                              │
│  7. Executes orders matching todo.md conditions:             │
│     → alpaca_cli submit-order --symbol NVDA --qty 5          │
│                               --side buy                     │
│                                                              │
│  8. Updates state and commits:                               │
│     → memory/MEMORY.md — execution summary                   │
│     → memory/todo.md   — update/close flags                  │
│     → git add / git commit / git push                        │
│                                                              │
│  9. agent.ts process exits                                   │
└──────────────────────────────────────────────────────────────┘
```

---

## The 1-Hour Macro Strategy Cycle

Runs once per hour on the first 10-min tick where 60+ minutes have elapsed. Uses OpenCode SDK with the model configured for `hourly` in `config/agent_runtime.json`.

```
┌──────────────────────────────────────────────────────────────┐
│  MACRO CYCLE (every 60 min, market hours only)               │
│                                                              │
│  1. Bun.spawn → agent.ts hourly                              │
│                                                              │
│  2. OpenCode starts in the repo root and loads:              │
│     → prompts/hourly.txt — hourly instructions               │
│     → memory/MEMORY.md — last directive + exec               │
│     → memory/todo.md   — tactical flags/issues               │
│     → AGENTS.md / skills / opencode.json                     │
│                                                              │
│  3. The agent decides which data it needs, then gathers it:  │
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
│     → memory/MEMORY.md:                                      │
│         • Current thesis                                     │
│         • Priority actions for next hour                     │
│         • Symbol | Bias | Rationale | Target % table         │
│     → memory/todo.md:                                        │
│         • "BUY <T> if price < X — rationale"                 │
│         • "SELL <T> if price > X or < Y — rationale"         │
│         • "HOLD <T> — target allocation Z%"                  │
│                                                              │
│  6. Logs stream with `[opencode]` prefixes, then commits:    │
│     → git add / git commit / git push                        │
│                                                              │
│  7. agent.ts exits, then tactical cycle runs immediately     │
└──────────────────────────────────────────────────────────────┘
```

---

## OpenCode Runtime

The agent runtime is no longer a hand-written Gemini function-calling loop. `src/agent.ts` now starts an OpenCode SDK session in the repository root and lets OpenCode use its native workspace-aware tooling.

Key runtime inputs:
- `opencode.json` — project-level OpenCode provider/runtime config
- `config/agent_runtime.json` — mode-to-model mapping for `hourly` and `tactical`
- `prompts/hourly.txt` / `prompts/tactical.txt` — task prompts
- `AGENTS.md` and local skills — repo-specific guidance automatically available to OpenCode

The CLI tools (`alpaca_cli.ts`, `fmp_cli.ts`) are still invoked from the repo shell environment, but now through OpenCode's native bash/tooling runtime instead of the old custom shell wrapper layer.

**OpenCode is used for:**
- Reading and editing repo files with project context
- Discovering and applying local skills/instructions
- Running bash and git commands in the repo root
- Streaming structured runtime events that the harness logs with `[opencode]` prefixes

**Gemini models are used for:**
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
| `opencode.json` | Project-level OpenCode config. Limits providers, disables sharing/autoupdate, and reads `GEMINI_API_KEY` for the Gemini provider. |
| `config/agent_runtime.json` | Declares which model OpenCode should use for `hourly` and `tactical` runs. |
| `prompts/hourly.txt` | External system prompt template for the hourly macro strategist. Loaded by `src/agent.ts` at runtime. |
| `prompts/tactical.txt` | External system prompt template for the 10-minute tactical executor. Loaded by `src/agent.ts` at runtime. |
| `src/tools/alpaca_cli.ts` | CLI: account info, positions, prices, order execution. |
| `src/tools/fmp_cli.ts` | CLI: analyst estimates, 1w–3y historical performance. |
| `src/logger.ts` | Structured logging via `pino` for the harness and agent runtime. |
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
| `GEMINI_API_KEY` | Gemini provider API key used by OpenCode via `opencode.json` |
| `ALPACA_API_KEY` / `ALPACA_API_SECRET` | Brokerage execution & market data |
| `ALPACA_PAPER=true` | Paper trading mode |
| `FMP_API_KEY` | Analyst estimates & historical data (optional) |
| `PORT` | Web dashboard port (default 3000) |
