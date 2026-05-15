# Hourly Macro Memory
*Updated 2026-05-15 14:35 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
Benchmark-window leadership is still the same: semiconductors and core growth tech remain the only groups clearly outrunning SPY since the fixed **2026-05-04 close** anchor. Live relative returns are **NVDA +15.36%**, **SOXX +11.45%**, **XLK +9.57%**, **QTUM +6.47%**, and **QQQ +5.79%** versus **SPY +3.18%**. By contrast, the lagging catch-up buckets remain poor capital deployment vehicles for this benchmark window: **XLE -0.30%**, **XLF -0.93%**, and **SHLD -8.51%**. Today is a normal pullback inside the winning regime, not a market free-fall: **SPY -0.96% intraday**, **QQQ -1.13%**, **XLK -1.10%**, **SOXX -2.86%**, and **NVDA -2.83%**.

Broker data confirms the book is now substantially deployed after the latest semiconductor add: **AVGO 2, GOOG 3, NVDA 3, QQQ 6, SOXX 3, XLK 8**. The earlier memory snapshot understated **SOXX** by one share; live broker data wins and memory has been reconciled so tactical does not double-count already-filled exposure. With only **$135.42 cash** left, the correct posture is still offensive catch-up, but now through a single small top-off in a proven leader rather than broadening into lagging sectors.

## Goal Check
- **Status:** **Off track — cash drag**
- **Portfolio return since fixed 2026-05-04 baseline:** **+0.86%** (**$10,086.32 vs $10,000.00**)
- **SPY return since fixed 2026-05-04 close baseline:** **+3.18%** (**740.91 vs 718.09**)
- **Dominant failure mode:** **cash drag**
- **Assessment:** profitable in absolute dollars, but still behind SPY because too much of the evaluation window was spent underinvested before the leadership stack was built.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,086.32 / $135.42 / $9,950.90**
- **Current gross exposure:** **98.66%**
- **Target gross-exposure band:** **100.0-101.5%**
- **Blocker:** **PDT pressure (`daytrade_count = 3`) means any fresh buy must be treated as overnight swing exposure; do not pair a same-day exit with a new add opened this afternoon.**
- **Share-count reconciliation:** broker-confirmed holdings are **AVGO 2, GOOG 3, NVDA 3, QQQ 6, SOXX 3, XLK 8**.
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T183509Z.json`
  - `memory/research/alpaca_positions_20260515T183509Z.json`
  - `memory/research/alpaca_clock_20260515T183509Z.json`
  - `memory/research/price_cli_20260515T183509Z.jsonl`
  - `memory/research/market_summary_20260515T183509Z.json`

## Ranked Deployment Queue
1. **NVDA** — active top-off buy: **1 share on strength through $229.60**. Post-fill gross exposure would rise to about **100.93%** and NVDA would still be only about **9.1%** of equity, well inside the single-stock cap.
2. **XLK** — first alternate only if NVDA never reclaims but broad tech firms up. A **1-share** add around **$177.85** would lift gross exposure to about **100.42%** and keep XLK near **15.8%**.
3. **QTUM** — secondary alternate only if broad AI/quantum beta strengthens late day. A **1-share** add around **$144.60** would take gross exposure to about **100.09%** with minimal cap risk.

**Queued-buy check:** only the **NVDA** order is live this cycle. Alternates are documented for the next hourly review, not queued in `todo.md`, so combined open buys cannot overrun cash or target exposure.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth beta remains the anchor and stays under the 45% cap | 42 |
| SOXX | Hold | Semiconductor leadership remains valid, but 3 shares already place it near the practical ETF target | 15 |
| XLK | Hold / alternate add | Diversified tech exposure still outperforms SPY and remains a valid secondary add | 15 |
| NVDA | Buy-on-strength | Best small-dollar top-off among true benchmark-window leaders; high relative strength and cap room remain | 9 |
| GOOG | Hold | Quality AI/cloud exposure, but another share would breach the 15% single-stock cap | 12 |
| AVGO | Hold | Strong AI infrastructure exposure, but not the best marginal add with only one small tranche left | 8 |
| QTUM | Watch / alternate add | Positive AI/quantum beta and affordable for a small top-off if breadth improves | 0-2 |
| META | Watch | Healthy megacap trend, but not a higher-priority add than NVDA or XLK this hour | 0-3 |
| RKLB | Avoid new adds | Powerful relative strength but still too extended/speculative for this deployment slot | 0-2 |
| ARKX | Low-priority watch | Positive relative trend, but weaker benchmark utility than core tech leaders | 0-1 |
| XLE | Avoid | Energy is improving intraday, but still lags the benchmark window leadership basket | 0-2 |
| XLF | Avoid | Financials remain a relative laggard versus the tech needed to beat SPY | 0-2 |
| GLD | Avoid | No defensive regime signal requiring new gold exposure | 0-2 |
| SHLD | Avoid | Weak relative strength and no catalyst strong enough to justify capital | 0 |

## Tactical Update
- 2026-05-15 14:40 ET: No conditions met — held all positions; NVDA stayed below the $229.60 buy trigger at $229.40.
