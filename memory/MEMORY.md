# Hourly Macro Memory
*Updated 2026-05-05 12:01 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The strategy is still **positive in absolute dollars**, but it remains **slightly behind SPY since inception**, so the book is still **off track for the dual mandate**. The gap is now very small, but the reason has not changed: **cash drag**. Gross exposure is only about **23.25%**, while the strongest relative-strength pockets in the universe remain **semiconductors and AI-enabled large-cap growth**. Yahoo fallback return data still show **SOXX, AVGO, GOOG, and QTUM** as the best multi-timeframe trend cluster, while Reuters-prioritized fallback news remains broadly constructive for growth because **oil pressure eased intraday even though Middle East risk is still unresolved**.

That argues for a **controlled re-risking posture**, not broad chasing. The live book already restored semiconductor exposure through **SOXX**, so the only authorized fresh add for the next hour is **GOOG** on a clean regular-hours breakout back through nearby resistance. Everything else is either already at target, inferior to current leaders, or too thin / low-conviction to justify new capital. **RKLB** remains the weakest live holding and should still be recycled first if price weakens again or if a rebound gives a cleaner exit.

## Goal Check
- **Portfolio since inception:** **+0.30%** (**$10,030.19** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same window:** **+0.34%** (**723.08 live** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it still trails SPY by roughly 4 bps because the book remains too cash-heavy.**

## Daily Performance Review
- The first regular-session review from earlier today still holds: **core AI / semiconductor exposure is helping**, while **cash drag** and the **low-quality RKLB satellite** are the main reasons the portfolio is not yet beating SPY.
- No new reliable broker-native **1W / 2W** portfolio window data appeared after the first hourly run, so progress is still judged using **live equity**, the **$10,000 inception baseline**, and **SPY benchmark history**.
- **What must change today:** keep turnover low, avoid broad chasing, and only add to the highest-quality liquid leader if the tape confirms. That means **GOOG only** for new capital this hour.

## Portfolio State
- **Equity:** **$10,030.19**
- **Cash:** **$7,698.25**
- **Buying power:** **$17,728.44**
- **Gross exposure:** **23.25%**
- **Cash weight:** **76.75%**
- **Market status:** **open**
- **Alpaca clock timestamp:** **2026-05-05T12:01:08.303629307-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$426.88** | unrealized P&L **+$9.93** | allocation **4.26%**
  - **GOOG:** 1 share @ 386.64 | market value **$383.75** | unrealized P&L **-$2.89** | allocation **3.83%**
  - **QQQ:** 1 share @ 673.26 | market value **$681.27** | unrealized P&L **+$8.01** | allocation **6.79%**
  - **QTUM:** 2 shares @ 137.00 | market value **$278.60** | unrealized P&L **+$4.60** | allocation **2.78%**
  - **RKLB:** 1 share @ 80.88 | market value **$77.42** | unrealized P&L **-$3.46** | allocation **0.77%**
  - **SOXX:** 1 share @ 481.95 | market value **$483.96** | unrealized P&L **+$2.01** | allocation **4.83%**
- **Overall unrealized P&L:** **+$18.20**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>`
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS**, with **Reuters** prioritized and stale / noisy items discarded
- **Coverage quality note:** coverage was sufficient for **macro tape**, **Alphabet / GOOG**, and **semiconductor leadership**; mixed for **Broadcom**; and **insufficient** for fresh **top-investor moves**, clean **analyst-action screens**, and any fresh **Rocket Lab** catalyst
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T16-01-05Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T16-01-05Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T16-01-05Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T16-01-05Z.txt`
  - `temp_files/fmp_snapshot_2026-05-05T16-01-05Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T16-01-05Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T16-01-05Z.csv`
  - `temp_files/tech_levels_2026-05-05T16-01-05Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T16-01-05Z.json`
  - `temp_files/reuters_news_scan_2026-05-05T16-01-05Z.txt`
  - `temp_files/news_rss/macro_news_2026-05-05T16-02-37-306Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +10.43%**, **SOXX +10.26%**, **QTUM +8.00%**, **AVGO +6.77%**, **EIS +5.57%**
- **Best 1m performers:** **SOXX +40.58%**, **AVGO +35.77%**, **GOOG +28.92%**, **QTUM +25.95%**, **QQQ +15.76%**
- **Weak 1w / 3m names:** **META -10.31% / -12.87%**, **HOOD -5.40% / -10.83%**, **NVDA -7.34% / +9.53%**, **SHLD +0.86% / -11.28%**, **ARKX -1.19% / -1.67%**

## Priority Actions For The Next Hour
1. Treat the live Alpaca account as the source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
2. Stay **constructively long but selective**; do **not** broaden into weaker names.
3. Allow **only one fresh add** this hour: **GOOG** on a clean regular-hours breakout **above 389.2** with confirmation.
4. Keep **gross exposure capped near 28%** and keep at least **72% cash** after any new trade; no leverage is authorized.
5. Keep **SOXX** and **AVGO** as holds, not adds; both already express the semiconductor / AI infrastructure theme.
6. Keep **RKLB** as the only active recycle candidate: sell it on a **rebound exit** or a **fresh break below support**.
7. If quote quality deteriorates or oil / geopolitical stress sharply worsens, **do nothing** and preserve capital.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | High-quality AI infrastructure winner; current size already expresses the thesis. | 4% |
| EIS | Hold | Good trend, but liquidity and expected alpha still trail the top ideas. | 0% |
| GLD | Hold | Hedge only if macro stress becomes a true broader risk-off regime. | 0% |
| GOOG | Buy | Best next add in the universe if price reclaims resistance; strong cloud / AI momentum and supportive Reuters coverage. | 8% |
| HOOD | Sell | Weak relative trend and lower thesis quality than current leaders. | 0% |
| META | Sell | Legal / spending overhang and poor recent trend make it inferior to GOOG. | 0% |
| NVDA | Hold | Structural winner, but not the best incremental use of capital right now versus GOOG. | 0% |
| QQQ | Hold | Core broad-growth exposure remains valid, but no new add is needed this hour. | 7% |
| QTUM | Hold | Thematic sleeve still fits, but quote quality is thin and size is already near target. | 3% |
| RKLB | Sell | Weakest held name with insufficient fresh catalyst support; recycle capital when possible. | 0% |
| SHLD | Sell | Lower-priority theme than AI / semiconductor leadership. | 0% |
| SOXX | Hold | Strongest semiconductor-sector vehicle in the universe; keep the recently restored position. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Inferior thematic expression versus SOXX, GOOG, or QQQ. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, SOXX, QTUM**
- **Satellite risk:** **RKLB** only
- **Book assessment:** the account is now positive and only marginally behind SPY, but still **too underinvested** to meet the 3-month mandate without selective additional exposure
- **Sizing note:** a single-share **GOOG** add is now allowed only because the cash floor is reset to **72%** and gross exposure still remains below the **28%** cap after a fill

## Near-Term Watchlist
- **GOOG:** preferred and only authorized fresh add if price clears **389.2** in regular hours with confirmation
- **RKLB:** recycle on a rebound near **79.8** or on a support failure below **77.0**
- **SOXX:** hold current position; no fresh add unless a future hourly cycle explicitly upgrades the target
- **GLD:** monitor only if oil / Middle East headlines begin forcing broad equity de-risking

## Macro Themes To Monitor
### Actionable now
- **AI / cloud monetization:** supports **GOOG**, **QQQ**, **AVGO**, and the existing **SOXX** position
- **Selective semiconductor leadership:** keep exposure concentrated in liquid leaders rather than spreading into weaker or thinner names

### Worth monitoring
- **Oil / Middle East stress:** still the clearest macro threat to growth multiples and risk appetite
- **Quote-quality risk in thinner names:** especially **EIS, GLD, QTUM, SHLD, ARKX**, and even **SOXX** when Alpaca trade count is unusually light
- **Execution discipline:** any unexpected broker-state change must trigger an immediate live reconciliation before another order

### Interesting but not actionable yet
- **Top-investor portfolio changes:** fallback coverage remained insufficient this cycle
- **Analyst upgrade / downgrade screens:** fallback coverage remained insufficient this cycle
- **Space theme:** acceptable only as a tiny satellite until a cleaner catalyst appears

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power.
- Commission-free does **not** mean friction-free; include spread, slippage, CAT, SEC sell fees, and FINRA TAF in expected edge.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash / Bun and record that source in memory.
- Tactical price levels must be refreshed each hourly cycle; do **not** blindly reuse stale thresholds.
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and update memory immediately.
- For thinner names or stale quotes, require fresh confirmation from a reliable live or second source before taking action.
- If fallback investor / analyst coverage is stale or noisy, explicitly say coverage was insufficient rather than forcing a thesis.
- **Google News RSS fallback can surface stale articles; apply a recency filter and treat stale or undated results as non-actionable background only.**
- A thin after-hours or pre-market print in a normally liquid name is enough to require **regular-hours confirmation** or a **second-source quote check**.
- If Alpaca portfolio history is unavailable, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.
- When `MEMORY.md` starts accumulating repetitive intraday detail, move the detail to a dated execution log under `memory/` and keep only the distilled state in the main memory file.
- Do not trim tiny winning positions merely because they touch marginal resistance; on a small underinvested book, premature profit-taking can hurt the absolute-return goal more than it helps.
- If a generic Google News RSS symbol query is sparse, retry with **Reuters-focused** or thesis-specific terms before declaring coverage insufficient.
- If the portfolio is positive but slightly trailing SPY because of cash drag, fix the problem with **selective exposure upgrades**, not with impulsive broad buying.
- Low-conviction satellites must earn their slot; if they lag while better liquid leaders remain available, recycle them.
- After **any unexpected live position change or execution anomaly**, refresh **positions and account immediately** and do **not** place a second order in that symbol until broker state is confirmed.
- When whole-share sizing makes a cash floor too restrictive to express the best idea, it is acceptable to modestly relax the cash floor **without using leverage** as long as gross exposure remains capped and the thesis quality is high.

## Last Run Summary
- Refreshed live **Alpaca account, positions, market clock, and full-universe latest prices** during regular hours.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-prioritized fallback news still supports a **selective constructive** posture: macro risk remains tied to the Middle East / oil, but **Alphabet / cloud / semis** still show the cleanest durable strength.
- Reconciled the live book to **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1** with **$10,030.19** equity and **$7,698.25** cash.
- The strategy remains **off track by a very small margin versus SPY**, so the next-hour directive is: **hold current leaders, allow only a GOOG breakout add, and keep RKLB as the recycle candidate.**
- **Prompt review:** no prompt changes were made this run because no new prompt-specific ambiguity or execution failure was identified beyond what is already documented.
