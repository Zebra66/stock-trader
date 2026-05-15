# Hourly Macro Memory
*Updated 2026-05-15 13:35 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
Using the fixed **2026-05-04 close** anchor, leadership is still concentrated in semiconductors and large-cap technology: **NVDA +15.73%**, **SOXX +11.64%**, **XLK +9.98%**, and **QQQ +6.13%** versus **SPY +3.45%**. The laggards remain the wrong catch-up vehicles for this benchmark window: **XLE -0.67%**, **XLF -0.83%**, and **SHLD -8.30%**. Today’s tape is softer inside tech, but it is a rotation day rather than a market free-fall: **SPY is down about 0.7% intraday**, **QQQ about 0.8%**, **XLK about 0.7%**, while **SOXX is down about 2.7%** after a strong multi-day run and **XLE is green**.

Tactical fills have already added to the leadership stack: live broker holdings are now **AVGO 2, GOOG 3, NVDA 3, QQQ 6, SOXX 2, XLK 8**. That lifted deployment, but the portfolio is still behind SPY because it spent too much of the evaluation window underinvested. With **$10,124.89 equity**, **$652.45 cash**, and **$9,472.44 long market value**, the remaining cash should be used on the highest-conviction add that still fits concentration limits. **SOXX** is the cleanest remaining deployment because **QQQ is already near its cap** and another **GOOG** share would breach the **15% single-stock cap**.

## Goal Check
- **Status:** **Off track — cash drag**
- **Portfolio return since fixed 2026-05-04 baseline:** **+1.25%** (**$10,124.89 vs $10,000.00**)
- **SPY return since fixed 2026-05-04 close baseline:** **+3.45%** (**742.84 vs 718.09**)
- **Dominant failure mode:** **cash drag**
- **Assessment:** the book is profitable in dollars, but it still trails the benchmark because earlier capital deployment was too slow.

## Tactical Update
Submitted a market buy for **1 share of SOXX** because it traded back above the hourly breakout trigger at **$516.80** and was the highest-conviction remaining deployment in the leadership stack. The order was placed during the regular session to keep pushing gross exposure toward the target band without adding a new symbol or exceeding the single-cycle authorization.

No conditions met — held all positions.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,124.89 / $652.45 / $9,472.44**
- **Current gross exposure:** **93.6%**
- **Target gross-exposure band:** **98-100%**
- **Blocker:** **PDT pressure (`daytrade_count = 3`) means any new buy must be treated as overnight swing exposure; QQQ is already near its 45% cap and GOOG is capped at 3 shares.**
- **Share-count reconciliation:** broker-confirmed holdings are **AVGO 2, GOOG 3, NVDA 3, QQQ 6, SOXX 2, XLK 8**. `memory/todo.md` has been refreshed so stale pre-fill NVDA/XLK assumptions cannot double-count exposure.
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T173514Z.json`
  - `memory/research/alpaca_positions_20260515T173514Z.json`
  - `memory/research/alpaca_clock_20260515T173514Z.json`
  - `memory/research/price_cli_20260515T173514Z.jsonl`
  - `memory/research/alpaca_snapshots_20260515T173514Z.json`
  - `memory/research/market_summary_20260515T173514Z.json`

## Ranked Deployment Queue
1. **SOXX** — buy **1 share** at market on strength through **$516.80**. This uses about **$516.80** of cash, lifts gross exposure to about **98.7%**, and keeps SOXX near **15.3%** of equity post-fill.
2. **XLK** — reserve as the next-hour alternate if SOXX never reclaims. A **1-share** add near **$178.60** would keep XLK near **15.8%** of equity and still respect the ETF cap.
3. **NVDA** — reserve as the second alternate if leadership broadens late day. A **1-share** add near **$230.80** would keep NVDA near **9.1%** of equity and stay well inside the single-stock cap.

**Queued-buy check:** only the **SOXX** order is active this cycle. That avoids over-queuing beyond current cash while still pushing exposure into the target band without margin.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth beta remains the anchor, but current weight is already near the 45% cap | 42 |
| SOXX | Buy-on-strength | Best remaining deployment for benchmark-window leadership and still well under the ETF cap | 15 |
| XLK | Hold / alternate add | Diversified tech beta with room, but secondary to SOXX for this cash tranche | 14 |
| GOOG | Hold | Solid AI/cloud exposure, but another share would breach the 15% single-stock cap | 12 |
| NVDA | Hold / alternate add | Elite AI leader; keep existing size and use only as backup deployment this hour | 7 |
| AVGO | Hold | AI infrastructure winner, but lower priority than SOXX for remaining cash | 9 |
| META | Watch | Trend is constructive, but not a higher-priority add than semis or diversified tech | 0-4 |
| QTUM | Watch | Positive thematic exposure, but less urgent than the primary leadership stack | 0-3 |
| RKLB | Avoid new adds | Exceptional relative strength but still too extended/speculative for this hour’s deployment | 0-2 |
| GLD | Avoid | No defensive macro regime requiring new gold exposure | 0-2 |
| XLF | Avoid | Financials continue to lag the tech leadership needed to beat SPY | 0-3 |
| XLE | Avoid | Energy is firmer today, but its benchmark-window relative performance still trails tech | 0-3 |
| SHLD | Avoid | Weak relative strength and no catalyst strong enough to displace current leaders | 0 |
