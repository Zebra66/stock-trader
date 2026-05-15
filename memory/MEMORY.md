# Hourly Macro Memory
*Updated 2026-05-15 10:40 ET from live Alpaca snapshots.*

No conditions met — held all positions. XLK ($176.895), NVDA ($227.33), and AVGO ($424.695) all remained below their buy triggers, so the book stayed unchanged.

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
The market is taking a morning breath, not breaking trend. Using the fixed **2026-05-04 close** anchor, tech leadership still dominates the benchmark window: **NVDA +14.60%**, **SOXX +11.21%**, **SMH +10.68%**, **XLK +9.17%**, and **QQQ +5.77%** versus **SPY +3.34%**. The laggards are still the wrong place to concentrate new capital for a catch-up mandate: **XLE -0.82%**, **XLF -0.37%**, and **SHLD -7.67%**. Today’s tape is a broad semiconductor-led pullback, but not a free-fall regime; **SPY is only about -0.8% intraday** and **QQQ about -1.1%**, while the bigger drawdown is concentrated in semis after a strong multi-session run.

Broker data shows the account already owns the right growth complex: **QQQ 6, SOXX 3, XLK 7, GOOG 3, NVDA 2, AVGO 1**. The problem remains benchmark lag from earlier underdeployment, not bad symbol selection. Live equity is **$10,093.31** with **$975.85 cash** and **$9,117.46 long market value**, so the book is **90.3% gross exposed**. Because **daytrade_count = 3**, do not pair any same-day buys with intraday sell directives; fresh exposure should be added through simple recovery triggers and then carried.

## Goal Check
- **Status:** **Off track — cash drag**
- **Portfolio return since fixed 2026-05-04 baseline:** **+0.93%** (**$10,093.31 vs $10,000.00**)
- **SPY return since fixed 2026-05-04 close baseline:** **+3.34%** (**742.095 vs 718.09**)
- **Dominant failure mode:** **cash drag**
- **Assessment:** profitable in dollars, but still behind SPY because too much of the evaluation window was spent below full exposure.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,093.31 / $975.85 / $9,117.46**
- **Current gross exposure:** **90.3%**
- **Target gross-exposure band:** **97-100%**
- **Blocker:** **PDT pressure (`daytrade_count = 3`) prevents same-day exit instructions on today’s XLK add or any fresh buys; QQQ is also already near its 45% cap.**
- **Share-count reconciliation:** broker-confirmed holdings are **AVGO 1, GOOG 3, NVDA 2, QQQ 6, SOXX 3, XLK 7**. `memory/todo.md` has been reconciled so no already-filled XLK order remains.
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T143512Z.json`
  - `memory/research/alpaca_positions_20260515T143512Z.json`
  - `memory/research/alpaca_clock_20260515T143631Z.json`
  - `memory/research/price_cli_20260515T143512Z.tsv`
  - `memory/research/anchor_bars_20260515T143650Z.json`
  - `memory/research/market_summary_20260515T143650Z.json`

## Ranked Deployment Queue
1. **XLK** — buy **1 share** on recovery through **$177.30**. This adds diversified large-cap tech beta, keeps XLK near **14%** of equity, and avoids crowding QQQ further.
2. **NVDA** — buy **1 share** on recovery through **$229.60**. This lifts NVDA toward roughly **6.8%** of equity and adds the highest-quality single-name semiconductor leader without approaching the 15% stock cap.
3. **AVGO** — buy **1 share** on recovery through **$430.00**. This completes the cash deployment plan and lifts AVGO toward roughly **8.5%** of equity.

**Queued-buy check:** if all three orders fill, combined notional is about **$836.90**, gross exposure rises to about **98.6%**, and cash remains about **$138.95**. No margin is required.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth beta remains the anchor, but sizing is already close to the 45% cap | 42 |
| SOXX | Hold | Semiconductor ETF leadership is intact and current size is already healthy | 15 |
| GOOG | Hold | AI/cloud trend is constructive and current weight is efficient without crowding the book | 12 |
| XLK | Buy-on-recovery | Best remaining cap-efficient diversified tech add after QQQ headroom tightened | 14 |
| NVDA | Buy-on-recovery | Strongest pure AI leader; current pullback is acceptable if price reclaims recovery momentum | 7 |
| AVGO | Buy-on-recovery | High-quality AI infrastructure exposure with room under the 15% single-stock cap | 8 |
| META | Watch | Healthy megacap trend, but lower priority than XLK/NVDA/AVGO for this cash tranche | 0-5 |
| SMH | Watch | Strong semiconductor alternative, but redundant versus existing SOXX plus planned NVDA add | 0-4 |
| QTUM | Watch | Positive theme, but lower urgency than core tech leadership | 0-4 |
| HOOD | Watch | Still momentum-positive, but not as core as the current deployment queue | 0-3 |
| RKLB | Avoid new adds | Very strong relative strength, but still too extended/speculative for this hourly cash deployment | 0-2 |
| GLD | Avoid | No active defensive regime requiring new gold exposure | 0-3 |
| XLF | Avoid | Financials continue to lag the tech leaders we need to beat SPY | 0-3 |
| XLE | Avoid | Energy remains an underperformer versus growth leadership on the fixed benchmark window | 0-3 |
| SHLD | Avoid | Weak relative strength and no reason to fund it over tech leaders | 0 |
