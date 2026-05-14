# Hourly Macro Memory
*Updated 2026-05-14 10:37 ET from Alpaca CLI/direct REST and Yahoo chart snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

Tactical update 2026-05-14 11:20 ET: no conditions met — held all positions. **GOOG** stayed below the buy trigger, while **QQQ** and **NVDA** stayed above their sell triggers, so the tactical book remained unchanged.

Tactical update 2026-05-14 11:30 ET: No conditions met — held all positions.

## Macro Thesis
Nasdaq leadership remains intact and the tape is not in free-fall. **SPY is about 746 (+0.5% intraday, +3.9% since the fixed 2026-05-04 close baseline)** while **QQQ is near 719 (+0.6% intraday, +6.8% since baseline)**. Relative strength still sits with **semiconductors and AI infrastructure**: **NVDA +18.1%, SOXX +14.9%, SMH +14.2%, XLK +10.6%, QTUM +8.8%** since the benchmark anchor. By contrast, **XLE (-2.7%)**, **XLF (-0.6%)**, and weak single names like **SHLD (-6.0%)** are lagging. This remains a pro-growth regime, not a defensive or commodity-led tape.

The book is profitable, but the tactical stack has slipped back into underexposure after trimming winners earlier in the session. Live broker data now shows only **GOOG 1, NVDA 1, QQQ 6** with cash back up above **$5.2k**. Because **QQQ is already ~42.1% of equity**, the catch-up plan for the next 1-2 hours is to deploy fresh risk into **SOXX first, then GOOG, then AVGO, then NVDA** on explicit breakout levels. If all four triggers fill, gross exposure rises from roughly **48.3%** to about **63-64%**, back inside the target band without breaching concentration limits.

## Goal Check
- **Status:** **Off track — cash drag**
- **Since fixed 2026-05-04 close baseline:** portfolio **+2.35%** vs **SPY +3.90%**
- **Dominant failure mode:** **cash drag**
- **Reason:** recent symbol selection is mostly correct, but the account keeps surrendering benchmark ground whenever exposure drops too far below the market's tech-led advance.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,235.22 / $5,292.75 / $4,942.47**
- **Current gross exposure:** **48.3%**
- **Target gross-exposure band:** **60-68%**
- **Blocker:** **QQQ is already ~42.1% of equity**, so new deployment cannot come from more QQQ buying.
- **Authoritative holdings:** **GOOG 1, NVDA 1, QQQ 6**
- **Research snapshots:**
  - `memory/research/alpaca_hourly_20260514T143638Z.json`
  - `memory/research/yahoo_market_20260514T143638Z.json`

## Ranked Deployment Queue
1. **SOXX** — first add above **$531.50**; strongest ETF route to semiconductor leadership and fastest way to add size without violating single-name caps.
2. **GOOG** — second add above **$395.50**; broad AI/cloud exposure with less concentration risk than adding more QQQ.
3. **AVGO** — third add above **$435.00**; strong AI infrastructure participation and fills the remaining exposure gap efficiently.
4. **NVDA** — fourth add above **$235.00**; still the strongest single-name winner, but queue it after SOXX/GOOG/AVGO to keep single-stock concentration balanced.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth winner, but already near the 45% cap | 40% |
| SOXX | Buy-on-breakout | Best ETF for semiconductor leadership and catch-up deployment | 10% |
| GOOG | Buy-on-breakout / Hold | Adds AI/cloud beta without worsening QQQ concentration | 6% |
| AVGO | Buy-on-breakout | High-quality AI infrastructure exposure after SOXX/GOOG | 5% |
| NVDA | Buy-on-breakout / Hold | Strongest single-name momentum, but keep below 15% cap | 4% |
| XLK | Watch | Strong diversified tech ETF, but behind SOXX in priority | 0-4% |
| SMH | Watch | Strong peer to SOXX; use only if SOXX liquidity or trigger quality degrades | 0-4% |
| QTUM | Avoid new adds | Good relative strength, but thinner and less necessary than SOXX/GOOG/AVGO | 0% |
| META | Avoid new adds | Relative strength lags current AI/semi leaders | 0% |
| GLD | Avoid | No active risk-off regime | 0-3% |
| XLF | Avoid | Financials are not leading this benchmark window | 0-3% |
| XLE | Avoid | Energy is lagging badly versus tech leadership | 0-3% |
| SHLD | Avoid | Negative benchmark-period relative strength | 0% |
| RKLB | Avoid new adds | Too extended and speculative for catch-up capital | 0-2% |
