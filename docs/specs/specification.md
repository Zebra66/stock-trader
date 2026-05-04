# Stock Trader System Specification

## 1. Overview
The Standalone Stock Trader System is an automated algorithmic trading bot designed to maximize portfolio value and beat the S&P 500 index over 3 months. It operates on a 10-minute interval to capture short-term intraday and swing trading opportunities. The system features a "Dry Run" validation phase (tracking virtual trades in local files) before being deployed to "Prod" with real capital.

## 2. Investment Universe
The bot operates on this configured symbol list:
`AVGO`, `EIS`, `GLD`, `GOOG`, `HOOD`, `META`, `NVDA`, `QQQ`, `QTUM`, `RKLB`, `SHLD`, `SOXX`, `VOO`, `ARKX`, `META`.

## 3. Autonomous LLM Agent Architecture
There is **no custom algorithmic code, machine learning models, or hardcoded trading logic**. Instead, the system relies entirely on an autonomous coding-agent runtime acting as the decision engine.
1. **The Harness**: A lightweight Bun/TypeScript shell schedules both agent modes against wall-clock time:
   - **Hourly agent** fires at **:35 past each hour** (9:35, 10:35 … 3:35 PM ET) — 5 min after the 9:30 AM Nasdaq open.
   - **Tactical agent** fires at **:10, :20, :30, :40, :50** past each hour.
   - Both are skipped when the market is closed unless `--force-run` is passed.
2. **Agent Runtime**: `src/agent.ts` starts a **Pi.dev coding-agent** session with the repository root as the workspace. The agent receives:
   - repo-local prompts from `./prompts/`
   - persistent state from `./memory/`
   - repo guidance from `AGENTS.md` and local skills
   - shell/file/search/web tooling from the Pi.dev workspace runtime
3. **Continuous Evolution**: The agent analyzes the market, executes trades via repo CLI tools, updates `./memory/MEMORY.md` and `./memory/todo.md`, and may also improve prompts, docs, or code when warranted.
4. **Execution Tiers**: The exact model for each mode is configured in `./config/agent_runtime.json`, with separate entries for `hourly` and `tactical`. Each entry is a single `provider/model` string, so switching providers is a one-line change per mode. `src/pi_runner.ts` resolves `trader-gemini/...` to Pi.dev's `google` provider and `trader-openai/...` to Pi.dev's `openai` provider, then prepares the matching API credentials.

## 4. Core Technologies
- **Language**: TypeScript
- **Runtime**: Bun (https://bun.com/) for the Harness loop and fast script execution.
- **Agent Framework**: Pi.dev coding agent (`@mariozechner/pi-coding-agent` with `@mariozechner/pi-ai`) running a repo-aware agent session in the project workspace.
- **Logging**: Pino structured logging for harness and agent runtime output.
- **Web Framework**: ElysiaJS for the read-only dashboard.
- **Deployment**: Google Cloud Run / Compute Engine.

## 5. Data Providers & APIs
- **Brokerage & Execution**: **Alpaca API** (accessed directly by the LLM via tools).
- **Analyst Estimations**: **Financial Modeling Prep (FMP) API** (accessed directly by the LLM via tools).

## 6. Architecture & Workflow
### 6.1 Periodic Execution (10-Minute Heartbeat)
1. **Wake Up & State Recovery**: Read `./memory/MEMORY.md` and `./memory/todo.md`.
2. **Start Agent Session**: Launch the tactical Pi.dev session in the repo root.
3. **Fetch Data**: Get current prices, analyst estimations, and news via repo CLI tools and web research.
4. **Execution Mode Evaluation**:
   - **Dry Run Mode**: Log buy/sell decisions and track PnL in a local SQLite/JSON ledger (`./memory/dry_run_ledger.json`). No actual broker orders are placed.
   - **Prod Mode**: Place real market/limit orders via Alpaca API.
5. **Persist State**: Write updated holdings and decisions to `./memory/`.
6. **Commit**: Git commit changes to `./memory/` to maintain the audit trail on GitHub.

### 6.2 Web Dashboard
- **Endpoints**: `/` (Dashboard UI), `/api/portfolio` (Holdings & PnL), `/api/decisions` (Logs).
- **Authentication**: Google OAuth 2.0 (Allowed Users only).

## 7. Directory Structure
```
.
├── src/                # TypeScript Source Code
│   ├── harness.ts      # Scheduler / web server launcher
│   ├── agent.ts        # Pi.dev-backed hourly/tactical runner
│   ├── tools/          # Alpaca, FMP, and system CLIs
│   └── web/            # Dashboard UI and Google Auth
├── prompts/            # Hourly and tactical agent prompts
├── config/             # Agent runtime config (mode -> model)
├── opencode.json       # Legacy repo-level config retained after Pi.dev migration
├── scripts/            # Shell scripts (deploy.sh, run_local.sh, etc.)
├── docs/               # Documentation
│   └── specs/          # Specifications (this file)
├── memory/             # Persistent memory logs (MEMORY.md, dry_run_ledger.json)
├── Dockerfile          # For Google Cloud Run
└── package.json        # Dependencies
```
