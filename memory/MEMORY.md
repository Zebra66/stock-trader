# Hourly Macro Memory
*Updated 2026-05-15 12:36 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
Using the fixed **2026-05-04 close** anchor, the leadership stack is still concentrated in technology and semiconductors: **NVDA +14.78%**, **SOXX +11.12%**, **SMH +10.55%**, **XLK +9.46%**, and **QQQ +5.72%** versus **SPY +3.21%**. The laggards remain poor catch-up vehicles: **XLE -0.63%**, **XLF -0.77%**, and **SHLD -8.41%**. Today’s tape is weak but orderly rather than a free-fall: **SPY is down about 0.9% intraday**, **QQQ about 1.2%**, **XLK about 1.2%**, and the sharper damage is concentrated in semis with **SOXX down about 3.1%** after a strong run.

Broker data says the portfolio still owns the right complex, but the book is not yet fully deployed enough to close the benchmark gap. Live holdings are **AVGO 2, GOOG 3, NVDA 2, QQQ 6, SOXX 2, XLK 7** with **$10,089.59 equity**, **$1,059.81 cash**, and **$9,029.78 long market value**, so gross exposure is only **89.5%**. Because **daytrade_count = 3**, any new buys must be treated as carry positions rather than same-day flip candidates. Fresh capital should go to the remaining cap-efficient leaders with room under sizing limits: **SOXX first, then XLK, then NVDA**. QQQ is already near its cap and GOOG would breach its single-stock cap on another share.

## Goal Check
- **Status:** **Off track — cash drag**
- **Portfolio return since fixed 2026-05-04 baseline:** **+0.90%** (**$10,089.59 vs $10,000.00**)
- **SPY return since fixed 2026-05-04 close baseline:** **+3.21%** (**741.18 vs 718.09**)
- **Dominant failure mode:** **cash drag**
- **Assessment:** the book is profitable in absolute dollars, but it is still behind SPY because too much of the benchmark window was spent below full exposure.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,089.59 / $1,059.81 / $9,029.78**
- **Current gross exposure:** **89.5%**
- **Target gross-exposure band:** **97-100%**
- **Blocker:** **PDT pressure (`daytrade_count = 3`) means new buys must be treated as overnight swing risk; QQQ is already near its 45% cap and GOOG is effectively capped at 3 shares.**
- **Share-count reconciliation:** broker-confirmed holdings are **AVGO 2, GOOG 3, NVDA 2, QQQ 6, SOXX 2, XLK 7**. `memory/todo.md` has been refreshed so stale AVGO/SOXX counts do not double-count exposure.
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T163540Z.json`
  - `memory/research/alpaca_positions_20260515T163540Z.json`
  - `memory/research/alpaca_clock_20260515T163540Z.json`
  - `memory/research/alpaca_snapshots_20260515T163540Z.json`
  - `memory/research/price_cli_20260515T163540Z.jsonl`
  - `memory/research/anchor_bars_20260515T163540Z.json`
  - `memory/research/market_summary_20260515T163540Z.json`

## Ranked Deployment Queue
1. **SOXX** — buy **1 share** on reclaim through **$516.50**. This restores semiconductor exposure after the live share-count drop to 2 shares and still leaves SOXX at only about **15.3%** of equity post-fill.
2. **XLK** — buy **1 share** on reclaim through **$177.70**. This adds diversified large-cap tech beta and lifts XLK to about **14.1%** of equity.
3. **NVDA** — buy **1 share** on recovery through **$229.20**. This keeps pressure on the highest-quality AI leader while leaving NVDA near **6.8%** of equity.

**Queued-buy check:** if all three orders fill near their triggers, combined notional is about **$923.40**, cash remains about **$136.41**, and gross exposure rises to about **98.6%**. No margin is required.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth beta remains the anchor, but sizing is already near the 45% cap | 42 |
| SOXX | Buy-on-strength | Best remaining sector add; benchmark-window leadership is intact and current weight is back to 10% after live reconciliation | 15 |
| GOOG | Hold | Cloud/AI exposure is constructive, but another share would breach the 15% single-stock cap | 12 |
| XLK | Buy-on-strength | Diversified tech add with cap room and cleaner risk than adding to QQQ | 14 |
| NVDA | Buy-on-strength | Strongest liquid AI single-name leader; recovery buy keeps posture aggressive without overcrowding | 7 |
| AVGO | Hold | AI infrastructure winner already sized at 2 shares; keep but defer new add behind SOXX/XLK/NVDA | 9 |
| META | Watch | Healthy trend, but lower priority than semis and diversified tech for the next cash tranche | 0-4 |
| QTUM | Watch | Positive theme exposure, but less urgent than the primary leadership stack | 0-3 |
| RKLB | Avoid new adds | Massive relative strength but too extended/speculative for this hour’s deployment plan | 0-2 |
| GLD | Avoid | No defensive regime requiring fresh gold exposure | 0-2 |
| XLF | Avoid | Financials still lag the tech leadership needed to beat SPY | 0-3 |
| XLE | Avoid | Energy strength today does not offset its weaker benchmark-window relative performance | 0-3 |
| SHLD | Avoid | Weak relative strength and no catalyst strong enough to displace current leaders | 0 |

## Tactical Update
No conditions met — held all positions.
