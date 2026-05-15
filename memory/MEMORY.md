# Hourly Macro Memory
*Updated 2026-05-15 15:36 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
Benchmark-window leadership is still concentrated in semiconductors and core growth tech. Using the fixed **2026-05-04 close** anchor, the best relative performers in our working universe remain **NVDA +14.49%**, **SOXX +11.18%**, **XLK +9.30%**, **QTUM +6.10%**, and **QQQ +5.69%** versus **SPY +3.11%**. The lagging alternatives remain poor catch-up vehicles for this evaluation window: **XLE -0.29%**, **XLF -0.90%**, **EIS -1.67%**, and **SHLD -8.43%**. We still need leadership exposure, not diversification into weaker groups.

Today’s tape is a pullback, not a free-fall. Intraday moves are roughly **SPY -1.03%**, **QQQ -1.21%**, **XLK -1.34%**, **SOXX -3.06%**, and **NVDA -3.58%**. That is enough to avoid chasing broad new size, but not enough to abandon the offensive stance. With the book already near full exposure, the right move is a single cap-compliant top-off in the strongest affordable leader rather than rotating into lagging sectors.

## Goal Check
- **Status:** **Off track — cash drag**
- **Portfolio return since fixed 2026-05-04 baseline:** **+0.76%** (**$10,075.50 vs $10,000.00**)
- **SPY return since fixed 2026-05-04 close baseline:** **+3.11%** (**740.41 vs 718.09**)
- **Dominant failure mode:** **cash drag**
- **Assessment:** the account is still profitable in absolute dollars, but it remains behind SPY because the portfolio spent too much of the benchmark window underinvested before the current tech-heavy stack was built.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,075.50 / $135.42 / $9,940.08**
- **Current gross exposure:** **98.66%**
- **Target gross-exposure band:** **100.0-101.0%**
- **Blocker:** **PDT pressure (`daytrade_count = 3`) means any fresh add must be treated as overnight swing exposure; do not pair a same-day exit with a new afternoon buy.**
- **Share-count reconciliation:** broker-confirmed holdings are **AVGO 2, GOOG 3, NVDA 3, QQQ 6, SOXX 3, XLK 8**. Memory has been reconciled to live broker data so tactical cannot double-count already-filled buys.
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T193604Z.json`
  - `memory/research/alpaca_positions_20260515T193604Z.json`
  - `memory/research/alpaca_clock_20260515T193604Z.json`
  - `memory/research/price_cli_20260515T193604Z.jsonl`
  - `memory/research/market_summary_20260515T193604Z.json`

## Ranked Deployment Queue
1. **NVDA** — active residual-cash top-off. A **1-share** add is the best use of remaining buying capacity because it targets the highest-relative-strength affordable leader. Post-fill gross exposure would be about **100.91%** and NVDA would still be only about **9.03%** of equity, well inside the **15%** single-stock cap. The breakout trigger in `todo.md` is intentionally already in-the-money at the current tape so the next tactical cycle can buy immediately if NVDA is still holding this zone.
2. **XLK** — first alternate only if NVDA loses the level before tactical acts. A **1-share** add would lift gross exposure to about **100.41%** and keep XLK near **15.83%**, safely under the ETF cap.
3. **QTUM** — second alternate for the next hourly review only. A **1-share** add would take gross exposure to about **100.08%** with minimal cap risk, but its benchmark value remains lower than NVDA or XLK.

**Cap / queue check:** only the single **NVDA** order is live this cycle. **QQQ** cannot be increased because one more share would lift it to about **49.40%** of equity, above the **45%** cap. **SOXX** cannot be increased because a fourth share would push it to about **20.40%**, above the **20%** ETF cap. **GOOG** cannot be increased because a fourth share would breach the **15%** single-stock cap.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth beta remains the anchor and is still within the 45% cap | 42 |
| SOXX | Hold | Semiconductor leadership remains valid, but current size is already near the ETF cap | 15 |
| XLK | Hold / alternate add | Diversified tech remains a strong benchmark-beating sleeve with room for one more share | 15 |
| NVDA | Buy now / top-off | Highest-relative-strength affordable leader; best residual-cash deployment | 9 |
| GOOG | Hold | Good AI/cloud exposure, but another share would breach the stock cap | 12 |
| AVGO | Hold | Strong AI infrastructure exposure, but the next marginal dollar belongs in NVDA | 8 |
| QTUM | Watch / alternate add | Positive AI-beta and affordable, but still below NVDA and XLK in priority | 0-2 |
| META | Watch | Healthy megacap trend, but not a better marginal add than NVDA | 0-3 |
| RKLB | Watch only | Very strong return profile, but too extended/speculative for this final cash tranche | 0-2 |
| ARKX | Low-priority watch | Constructive trend, but lower benchmark utility than core tech leaders | 0-1 |
| XLE | Avoid | Energy still lags the benchmark-window winners | 0-2 |
| XLF | Avoid | Financials remain a relative laggard vs the tech leadership basket | 0-2 |
| GLD | Avoid | No defensive regime signal requiring new gold exposure | 0-2 |
| SHLD | Avoid | Weak relative strength and no catalyst strong enough to justify capital | 0 |

## Tactical Execution Note
- At 15:40 ET, NVDA printed **227.48**, which met the tactical buy trigger, but Alpaca order submission returned **504 Gateway Timeout** twice; no fill was confirmed.
