# Stock Trader System Specification

## 1. Overview
The Standalone Stock Trader System is an automated algorithmic trading bot designed to maximize portfolio value and beat the S&P 500 index over 3 months. It operates on a 10-minute interval to capture short-term intraday and swing trading opportunities. The system features a "Dry Run" validation phase (tracking virtual trades in local files) before being deployed to "Prod" with real capital.

## 2. Investment Universe (Thematic)
The bot focuses on high-growth and future-tech sectors. It prioritizes ETFs but includes key individual stocks:
- **High-Tech & LLMs**: `QQQ`, `XLK`, `MSFT`, `GOOGL`, `NVDA`, `META`. Will dynamically track 2026 AI/LLM IPOs.
- **Nuclear Energy**: `URA`, `NLR`, `CCJ`, `CEG`.
- **Space Exploration**: `ARKX`, `UFO`, `RKLB`.
- **Quantum Computing**: `QTUM`, `IONQ`, `RGTI`.

## 3. Autonomous LLM Agent Architecture
There is **no custom algorithmic code, machine learning models, or hardcoded trading logic**. Instead, the system relies entirely on an autonomous coding-agent runtime acting as the decision engine.
1. **The Harness**: A lightweight Bun/TypeScript shell wakes the agent every 10 minutes and once per hour for macro work.
2. **Agent Runtime**: `src/agent.ts` starts an **OpenCode SDK** session with the repository root as the workspace. The agent receives:
   - repo-local prompts from `./prompts/`
   - persistent state from `./memory/`
   - repo guidance from `AGENTS.md` and local skills
   - shell/file/search/web tooling from OpenCode's native workspace runtime
3. **Continuous Evolution**: The agent analyzes the market, executes trades via repo CLI tools, updates `./memory/MEMORY.md` and `./memory/todo.md`, and may also improve prompts, docs, or code when warranted.
4. **Execution Tiers**: The exact model for each mode is configured in `./config/agent_runtime.json`, with separate entries for `hourly` and `tactical`. OpenCode uses the Gemini provider configured in `./opencode.json`.

## 4. Core Technologies
- **Language**: TypeScript
- **Runtime**: Bun (https://bun.com/) for the Harness loop and fast script execution.
- **Agent Framework**: OpenCode SDK (`@opencode-ai/sdk`) running a repo-aware coding-agent session in the project workspace.
- **Logging**: Pino structured logging for harness and agent runtime output.
- **Web Framework**: ElysiaJS for the read-only dashboard.
- **Deployment**: Google Cloud Run / Compute Engine.

## 5. Data Providers & APIs
- **Brokerage & Execution**: **Alpaca API** (accessed directly by the LLM via tools).
- **Analyst Estimations**: **Financial Modeling Prep (FMP) API** (accessed directly by the LLM via tools).

## 6. Architecture & Workflow
### 6.1 Periodic Execution (10-Minute Heartbeat)
1. **Wake Up & State Recovery**: Read `./memory/MEMORY.md` and `./memory/todo.md`.
2. **Start Agent Session**: Launch the tactical OpenCode session in the repo root.
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
│   ├── agent.ts        # OpenCode-backed hourly/tactical runner
│   ├── tools/          # Alpaca, FMP, and system CLIs
│   └── web/            # Dashboard UI and Google Auth
├── prompts/            # Hourly and tactical agent prompts
├── config/             # Agent runtime config (mode -> model)
├── opencode.json       # OpenCode provider/runtime config
├── scripts/            # Shell scripts (deploy.sh, run_local.sh, etc.)
├── docs/               # Documentation
│   └── specs/          # Specifications (this file)
├── memory/             # Persistent memory logs (MEMORY.md, dry_run_ledger.json)
├── Dockerfile          # For Google Cloud Run
└── package.json        # Dependencies
```
