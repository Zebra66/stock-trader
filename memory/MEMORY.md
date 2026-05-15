# Hourly Macro Memory
*Updated 2026-05-15 11:37 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
Using the fixed **2026-05-04 close** anchor, the leadership basket is still technology-heavy and remains the only place with enough relative strength to close the benchmark gap. Current benchmark-window returns are **NVDA +15.18%**, **SOXX +11.44%**, **SMH +10.91%**, **XLK +9.57%**, and **QQQ +5.88%** versus **SPY +3.27%**. The lagging alternatives are still poor catch-up vehicles: **XLE -0.79%**, **XLF -0.87%**, and **SHLD -7.99%**. Today is a controlled pullback, not a free-fall tape: **SPY is down about 0.9% intraday**, **QQQ about 1.0%**, and the heavier weakness is concentrated in semis after a strong prior run.

Broker data confirms the account already owns the correct growth complex: **QQQ 6, SOXX 3, XLK 7, GOOG 3, NVDA 2, AVGO 1**. The issue is still earlier underdeployment, not symbol selection. Live equity is **$10,106.09** with **$975.85 cash** and **$9,130.24 long market value**, so the book is **90.3% gross exposed**. Because **daytrade_count = 3**, any fresh buys written now must be treated as carry positions rather than same-day flip candidates. New capital should keep flowing into the diversified and single-name AI stack with remaining cap room: **XLK first, then NVDA, then AVGO**.

## Goal Check
- **Status:** **Off track — cash drag**
- **Portfolio return since fixed 2026-05-04 baseline:** **+1.06%** (**$10,106.09 vs $10,000.00**)
- **SPY return since fixed 2026-05-04 close baseline:** **+3.27%** (**741.56 vs 718.09**)
- **Dominant failure mode:** **cash drag**
- **Assessment:** positive in dollars, but still trailing SPY because too much of the evaluation window was spent below full exposure.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,106.09 / $975.85 / $9,130.24**
- **Current gross exposure:** **90.3%**
- **Target gross-exposure band:** **97-100%**
- **Blocker:** **PDT pressure (`daytrade_count = 3`) prevents planning same-day closing sells for any new buys; QQQ is already near its 45% cap and SOXX would breach its 20% ETF cap on another share.**
- **Share-count reconciliation:** broker-confirmed holdings are **AVGO 1, GOOG 3, NVDA 2, QQQ 6, SOXX 3, XLK 7**. `memory/todo.md` has been refreshed so there are no stale already-filled buy lines.
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T153737Z.json`
  - `memory/research/alpaca_positions_20260515T153737Z.json`
  - `memory/research/alpaca_clock_20260515T153737Z.json`
  - `memory/research/alpaca_snapshots_20260515T153737Z.json`
  - `memory/research/price_cli_20260515T153737Z.jsonl`
  - `memory/research/anchor_bars_20260515T153737Z.json`
  - `memory/research/market_summary_20260515T153737Z.json`

## Ranked Deployment Queue
1. **XLK** — buy **1 share** on continued strength through **$177.60**. XLK has already reclaimed the earlier recovery level, so this refreshed trigger intentionally asks tactical to buy only if the breakout is still live on the next check. Post-fill weight is about **14.1%** of equity.
2. **NVDA** — buy **1 share** on recovery through **$229.00**. This adds the strongest AI single-name leader while keeping NVDA near **6.8%** of equity, well under the 15% stock cap.
3. **AVGO** — buy **1 share** on recovery through **$428.50**. This completes near-full cash deployment and lifts AVGO toward about **8.5%** of equity without using margin.

**Queued-buy check:** if all three orders fill, combined notional is about **$835.10**, gross exposure rises to about **98.6%**, and cash remains about **$140.75**. No margin is required.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth beta remains the anchor, but sizing is already near the 45% cap | 42 |
| SOXX | Hold | Semiconductor trend leadership is intact, but another share would breach the ETF cap | 15 |
| GOOG | Hold | AI/cloud exposure is constructive, but one more share would breach the 15% single-stock cap | 12 |
| XLK | Buy-on-strength | Best remaining diversified tech add with cap room and immediate tactical relevance | 14 |
| NVDA | Buy-on-strength | Highest-quality AI leader; recovery buy keeps exposure aggressive without overcrowding | 7 |
| AVGO | Buy-on-strength | AI infrastructure winner with room under the single-stock cap | 8 |
| META | Watch | Trend is healthy, but this cash tranche fits better in XLK/NVDA/AVGO | 0-5 |
| SMH | Watch | Strong semiconductor proxy, but redundant versus existing SOXX plus the planned NVDA add | 0-4 |
| QTUM | Watch | Theme remains positive, but lower priority than the current leadership stack | 0-4 |
| RKLB | Avoid new adds | Exceptional relative strength, but too extended/speculative for this hourly deployment | 0-2 |
| GLD | Avoid | No defensive regime requiring fresh gold exposure | 0-3 |
| XLF | Avoid | Financials continue to lag the tech leaders needed to beat SPY | 0-3 |
| XLE | Avoid | Energy remains a laggard versus the benchmark window's winners | 0-3 |
| SHLD | Avoid | Weak relative strength and no catalyst strong enough to displace tech leadership | 0 |

No conditions met this cycle — held all positions.
