# Hourly Macro Memory
*Updated 2026-05-14 15:36 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
The tape is still pro-growth and semiconductor-led, not defensive. Using the fixed **2026-05-04 close** anchor, leadership remains concentrated in the assets that can actually help us close the benchmark gap: **SPY +4.20%**, **QQQ +7.06%**, **SOXX +15.04%**, **SMH +14.39%**, **XLK +10.88%**, **QTUM +9.15%**, and **NVDA +18.52%**. The weak buckets are still the same laggards we should underweight: **XLE -2.27%**, **XLF -0.50%**, and **SHLD -5.76%**. With SPY, QQQ, SOXX, XLK, and SMH all green intraday again, the market is not in a free-fall regime and the catch-up posture should stay offensive.

Live broker data shows the account at **$10,247.49 equity**, **$2,761.52 cash**, and **73.1% gross exposure**. The book is profitable in dollars, but still behind the benchmark because too much of the evaluation window was spent underinvested. QQQ is already near its **45% cap** at about **42.2%** of equity, and GOOG is too close to the **15% single-stock cap** to add another share. The best cap-compliant deployment path is therefore **SOXX first** and **XLK second**. A new operational blocker also matters: the account is at **3 day trades**, and Alpaca already rejected a same-day closing order today, so intraday sell directives on today's newly opened shares should be avoided until the next session.

## Goal Check
- **Status:** **Off track — cash drag**
- **Since fixed 2026-05-04 close baseline:** portfolio **+2.47%** vs **SPY +4.20%**
- **Dominant failure mode:** **cash drag**
- **Reason:** the portfolio is long the right leadership groups, but it stayed too light too long and still has capital left to deploy.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,247.49 / $2,761.52 / $7,485.97**
- **Current gross exposure:** **73.1%**
- **Target gross-exposure band:** **80-90%**
- **Blocker:** **QQQ and GOOG have limited cap headroom, and PDT protection is constraining same-day exits on today's buys.**
- **Research snapshots:**
  - `memory/research/alpaca_hourly_20260514T193609Z.json`
  - `memory/research/anchor_bars_20260514T193609Z.json`
  - `memory/research/price_cli_20260514T193609Z.jsonl`

## Ranked Deployment Queue
1. **SOXX** — buy **1 share** on continued strength; post-fill allocation stays near **15.6%** and lifts gross exposure toward **78%**.
2. **XLK** — buy **5 shares** on breakout continuation; if both SOXX and XLK fill, gross exposure rises to about **87%** while staying inside all cap limits.
3. **QQQ** — hold only; strong leader, but no fresh add until cap headroom reopens.
4. **GOOG** — hold only; trend is constructive, but another share would breach the stock cap.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth leader, but already close to the concentration ceiling | 40 |
| SOXX | Buy-on-breakout | Best remaining semiconductor add within the ETF cap | 16 |
| XLK | Buy-on-breakout | Diversified tech beta add that improves exposure without crowding QQQ | 9 |
| GOOG | Hold | AI/cloud exposure remains constructive, but sizing is already near the stock cap | 12 |
| AVGO | Hold | AI infrastructure winner; keep as a smaller satellite | 4 |
| NVDA | Hold | Momentum leader; keep below the 15% single-name cap | 5 |
| SMH | Watch | Strong semi alternative, but second choice behind SOXX | 0-5 |
| META | Watch | Healthy trend, but lower priority than ETF adds | 0-4 |
| HOOD | Watch | Strong momentum, but less core than broad tech and semis | 0-3 |
| QTUM | Watch | Positive AI/quantum thematic ETF, but below SOXX/XLK in priority | 0-4 |
| RKLB | Avoid new adds | Very strong but too extended/speculative for catch-up capital | 0-2 |
| GLD | Avoid | No active risk-off regime | 0-3 |
| XLF | Avoid | Relative strength still trails tech leadership | 0-3 |
| XLE | Avoid | Energy remains a laggard versus the leaders | 0-3 |
| SHLD | Avoid | Negative relative strength since the fixed anchor date | 0 |
