# Hourly Macro Memory
*Updated 2026-05-15 09:36 ET from live Alpaca snapshots.*

## Current Regime
- **Regime:** **offensive catch-up**

## Macro Thesis
The higher-timeframe regime is still pro-growth even though this morning opened with a broad tech pullback. Using the fixed **2026-05-04 close** anchor, the leadership basket is still the right hunting ground: **NVDA +14.47%**, **SOXX +10.60%**, **SMH +10.20%**, **XLK +8.55%**, and **QQQ +5.39%** versus **SPY +3.04%**. The laggards remain the wrong place to hide for a catch-up mandate: **XLE -1.08%**, **XLF -0.62%**, and **SHLD -7.04%**. Today looks like an opening reset inside an ongoing tech-led tape, not a free-fall regime break.

Live broker data shows the account at **$10,044.41 equity**, **$1,329.79 cash**, and **$8,714.62 long market value**, or **86.8% gross exposure**. We are profitable in dollars, but still materially behind the benchmark because too much of the evaluation window was spent underinvested. QQQ already sits near its **45% cap** at about **42.3%** of equity, SOXX is already about **15.2%**, and GOOG is already about **11.6%**, so the next adds should go to the best remaining cap-efficient leaders: **XLK first for diversified tech beta, then NVDA and AVGO on recovery**. With **daytrade_count = 3**, new same-day buys should not be paired with intraday sell directives.

## Goal Check
- **Status:** **Off track — cash drag**
- **Since fixed 2026-05-04 close baseline:** portfolio **+0.44%** vs **SPY +3.04%**
- **Dominant failure mode:** **cash drag**
- **Reason:** the portfolio is concentrated in the right growth groups, but the book is still recovering from earlier underdeployment and gave back some gains in today's opening pullback.

## Current Exposure / Blocker
- **Equity / cash / long market value:** **$10,044.41 / $1,329.79 / $8,714.62**
- **Current gross exposure:** **86.8%**
- **Target gross-exposure band:** **95-100%**
- **Blocker:** **QQQ, SOXX, and GOOG have limited cap headroom, while PDT pressure (`daytrade_count = 3`) argues against same-day exit instructions on fresh buys.**
- **Research snapshots:**
  - `memory/research/alpaca_account_20260515T133517Z.json`
  - `memory/research/alpaca_positions_20260515T133517Z.json`
  - `memory/research/price_cli_20260515T133517Z.jsonl`
  - `memory/research/anchor_bars_20260515T133644Z.json`
  - `memory/research/market_summary_20260515T133644Z.json`

## Ranked Deployment Queue
1. **XLK** — buy **2 shares** on recovery through **$176.40**; post-fill allocation stays near **12.3%** and improves diversified tech exposure without breaching any cap.
2. **NVDA** — buy **2 shares** on recovery through **$229.60**; post-fill allocation rises to about **9.0%** and adds the strongest single-name semiconductor leader still well below the 15% cap.
3. **AVGO** — buy **1 share** on recovery through **$430.00**; post-fill allocation rises to about **8.5%** and completes the move toward roughly **99% gross exposure** if all queued buys fill.

## Symbol Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core growth exposure remains strong, but sizing is already close to the concentration ceiling | 42 |
| SOXX | Hold | Semiconductor ETF leadership remains intact, but there is not enough cap headroom for another share | 15 |
| GOOG | Hold | AI/cloud trend is still constructive, but fresh adds would crowd the stock cap | 12 |
| XLK | Buy-on-recovery | Best remaining cap-efficient tech ETF add after QQQ/SOXX headroom tightened | 12 |
| NVDA | Buy-on-recovery | Highest-quality semiconductor momentum name still comfortably below the single-stock cap | 9 |
| AVGO | Buy-on-recovery | AI infrastructure winner that improves upside capture without concentration stress | 8 |
| META | Watch | Healthy megacap trend, but lower priority than XLK/NVDA/AVGO for this cash tranche | 0-6 |
| SMH | Watch | Strong semiconductor alternative, but redundant versus existing SOXX exposure today | 0-5 |
| QTUM | Watch | Positive thematic trend, but not higher priority than core tech leaders | 0-4 |
| HOOD | Watch | Momentum remains positive, but it is not core enough for current catch-up deployment | 0-3 |
| RKLB | Avoid new adds | Very strong tape, but too extended/speculative for this hourly capital deployment | 0-2 |
| GLD | Avoid | No active risk-off regime to justify adding gold here | 0-3 |
| XLF | Avoid | Financials still trail tech leadership on the fixed anchor window | 0-3 |
| XLE | Avoid | Energy remains a laggard versus the growth leaders we need to beat SPY | 0-3 |
| SHLD | Avoid | Weak relative strength versus the benchmark and sector leaders | 0 |

## Tactical Reconciliation
- Broker-confirmed holdings are **AVGO 1, GOOG 3, NVDA 2, QQQ 6, SOXX 3, XLK 5**.
- Removed the stale `SELL QQQ 2 shares at market if price <= $710.00` directive and refreshed target allocations so `memory/todo.md` no longer conflicts with live broker data or double-counts filled exposure.
- No conditions met this cycle — held all positions while waiting for XLK, NVDA, or AVGO to reach their breakout triggers.
