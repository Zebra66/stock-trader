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
There is **no custom algorithmic code, machine learning models, or hardcoded trading logic**. Instead, the system relies entirely on an Autonomous LLM (Gemini) acting as the decision engine.
1. **The Harness**: A lightweight Bun/TypeScript shell that wakes up the LLM Agent every 10 minutes.
2. **LLM Capabilities**: The Agent is equipped with tools allowing it to:
   - Read and write files (to modify its own prompts, write new skills, update documentations).
   - Execute shell commands.
   - Fetch live market data, news, and analyst estimations (via Alpaca and FMP scripts).
   - Execute buy/sell orders.
3. **Continuous Evolution**: The LLM analyzes the market, executes trades, and updates `./memory/MEMORY.md` (and additional memory files if needed, e.g. ./memory/market_analysis.md, MEMORY.md will be the root document, and will have links to all of the additional memory files) and `./memory/todo.md`. It can actively rewrite its own data-gathering scripts or prompt logic if it decides a different strategy is needed.
4. **Execution Tiers**: A large model (e.g., Gemini Pro) may be invoked less frequently for macro-strategy and code-refactoring, while a fast model (e.g., Gemini Flash) is invoked every 10 minutes for immediate execution and bookkeeping.

## 4. Core Technologies
- **Language**: TypeScript
- **Runtime**: Bun (https://bun.com/) for the Harness loop and fast script execution.
- **Agent Framework**: Custom Bun-based LLM Harness using the **Google Gemini API** (`@google/genai` SDK) with tool-calling capabilities.
- **Web Framework**: ElysiaJS for the read-only dashboard.
- **Deployment**: Google Cloud Run / Compute Engine.

## 5. Data Providers & APIs
- **Brokerage & Execution**: **Alpaca API** (accessed directly by the LLM via tools).
- **Analyst Estimations**: **Financial Modeling Prep (FMP) API** (accessed directly by the LLM via tools).

## 6. Architecture & Workflow
### 6.1 Periodic Execution (10-Minute Heartbeat)
1. **Wake Up & State Recovery**: Read `./memory/MEMORY.md` and `./memory/todo.md`.
2. **Fetch Data**: Get current prices, Analyst Estimations, and News.
3. **Algorithm Execution**: Run the multi-factor scoring model.
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
│   ├── index.ts        # Entry point (Bun server & scheduler)
│   ├── api/            # Alpaca and FMP API wrappers
│   ├── engine/         # Algorithmic Trading Logic (VWAP, RSI, Sentiment)
│   └── web/            # Dashboard UI and Google Auth
├── scripts/            # Shell scripts (deploy.sh, run_local.sh, etc.)
├── docs/               # Documentation
│   └── specs/          # Specifications (this file)
├── memory/             # Persistent memory logs (MEMORY.md, dry_run_ledger.json)
├── Dockerfile          # For Google Cloud Run
└── package.json        # Dependencies
```
