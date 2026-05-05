# Hourly Macro Memory
*Updated 2026-05-05 11:11 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio remains **positive in absolute dollars**, but it is still **trailing SPY since inception**, so the strategy is **off track for the dual mandate**. The main problem remains **cash drag**: the book is now only about **18.4% gross invested**, which is too light when the highest-quality growth leadership is still working. Reuters-prioritized fallback news stayed constructive for equities intraday because **oil pulled back despite Middle East tension**, while the strongest multi-timeframe relative strength inside the universe remains concentrated in **SOXX, AVGO, GOOG, QTUM, and QQQ**.

That argues for a **measured re-risking posture**, not broad chasing. The next-hour plan is to allow **only one fresh add** and only on **clean regular-hours confirmation**: **SOXX** is now the preferred re-entry candidate because it remains the strongest sector ETF in the universe and the live book is currently flat it, while **GOOG** remains the secondary add candidate for diversified AI / cloud exposure. **RKLB** remains the weakest current holding and should still be recycled on either a rebound exit or a fresh support failure.

## Goal Check
- **Portfolio since inception:** **+0.28%** (**$10,028.13** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same window:** **+0.37%** (**723.34 live** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it is still trailing SPY because cash remains too high and exposure to the top leaders is still too small.**

## Daily Performance Review
- The first regular-session review earlier today remains directionally valid: **core AI / semiconductor / growth exposure is working**, while **cash drag** and the **low-conviction RKLB satellite** are still the main drags on meeting the 3-month goal.
- No new reliable broker-side **1W / 2W** portfolio window data appeared since the first hourly run; continue using live equity, deposit baseline, and SPY price history instead.
- **What must change today:** stay selective, but stop being so underinvested. Add only to the strongest setups, avoid low-quality substitutes, and keep post-order reconciliation discipline tight.

## Portfolio State
- **Equity:** **$10,028.13**
- **Cash:** **$8,180.20**
- **Buying power:** **$18,208.33**
- **Gross exposure:** **18.43%**
- **Cash weight:** **81.57%**
- **Market status:** **open**
- **Alpaca clock timestamp:** **2026-05-05T11:11:15.561782624-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$425.26** | unrealized P&L **+$8.31** | allocation **4.24%**
  - **GOOG:** 1 share @ 386.64 | market value **$384.59** | unrealized P&L **-$2.05** | allocation **3.84%**
  - **QQQ:** 1 share @ 673.26 | market value **$681.37** | unrealized P&L **+$8.11** | allocation **6.79%**
  - **QTUM:** 2 shares @ 137.00 | market value **$277.70** | unrealized P&L **+$3.70** | allocation **2.77%**
  - **RKLB:** 1 share @ 80.88 | market value **$79.01** | unrealized P&L **-$1.87** | allocation **0.79%**
- **No live SOXX position** — the broker is now the source of truth.
- **Overall unrealized P&L:** **+$16.20**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>`
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** coverage and discarding stale / noisy items
- **Coverage quality note:** coverage was sufficient for **macro / oil**, **GOOG**, and **SOXX**; mixed but usable for **AVGO / semis**; and **insufficient** for fresh **top-investor moves** and **analyst-action screens**
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T15-11-12Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T15-11-12Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T15-11-12Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T15-11-12Z.txt`
  - `temp_files/fmp_snapshot_2026-05-05T15-11-12Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T15-11-12Z.json`
  - `temp_files/yahoo_snapshot_2026-05-05T15-11-12Z.csv`
  - `temp_files/support_levels_2026-05-05T15-11-12Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T15-11-12Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +10.65%**, **SOXX +9.64%**, **QTUM +7.64%**, **AVGO +6.38%**, **EIS +5.42%**
- **Best 1m performers:** **SOXX +39.78%**, **AVGO +35.28%**, **GOOG +29.18%**, **QTUM +25.53%**, **RKLB +16.74%**
- **Weak 1w / 3m names:** **META -10.20% / -9.89%**, **HOOD -4.96% / -3.25%**, **NVDA -7.47% / +13.23%**, **GLD -0.33% / -7.37%**, **SHLD +1.02% / -6.73%**

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1**, and **no SOXX position**.
2. Stay **constructively long but selective**; the book is too underinvested, but only **one** high-quality add is authorized this hour.
3. **Preferred fresh add:** **SOXX** only on a clean regular-hours break **above 481.2** with confirmation.
4. **Secondary add:** **GOOG** only on a clean regular-hours break **above 389.4**, and only if **SOXX** has not already triggered in the same tactical cycle.
5. Keep gross exposure capped near **28%** and keep at least **75% cash** after any new trade.
6. Keep **RKLB** as the only active recycle candidate: sell it on a **rebound exit** or a **fresh support break**.
7. After **any** order, refresh live positions before considering a second order in the same cycle.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Core AI infrastructure winner; current single-share size is appropriate. | 4% |
| EIS | Hold | Relative strength is decent, but liquidity / priority still lag the best ideas. | 0% |
| GLD | Hold | Hedge only if oil / geopolitical stress turns into a true broader risk-off tape. | 0% |
| GOOG | Buy | Best diversified AI / cloud add after SOXX; strong 1w and 1m momentum plus supportive Reuters cloud coverage. | 8% |
| HOOD | Sell | Weak thesis quality versus the rest of the universe; Reuters coverage remains negative. | 0% |
| META | Sell | Legal / spending overhangs and weaker trend quality make it inferior to GOOG right now. | 0% |
| NVDA | Hold | Structural winner, but existing growth / semiconductor exposure is already sufficient. | 0% |
| QQQ | Hold | Core broad-growth exposure remains valid, but no fresh add is needed this hour. | 7% |
| QTUM | Hold | Thematic sleeve still fits, but quote quality is thin and size is already near target. | 3% |
| RKLB | Sell | Weakest held name; keep only as a tiny satellite until recycled. | 0% |
| SHLD | Sell | Defense remains lower-priority than AI / growth leadership in this regime. | 0% |
| SOXX | Buy | Strongest sector ETF in the universe; breakout re-entry is justified if confirmation appears. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Inferior thematic expression versus SOXX, GOOG, or QQQ. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, QTUM**
- **Satellite risk:** **RKLB** only
- **SOXX status:** currently **flat** in the live broker; treat any stale memory that still shows a SOXX holding as invalid
- **Current book assessment:** still positive, but **too underinvested** for the absolute-return and outperformance goals

## Near-Term Watchlist
- **SOXX:** preferred re-entry only if price clears **481.2** in regular hours with clean confirmation
- **GOOG:** secondary fresh add only if price clears **389.4** in regular hours with confirmation
- **RKLB:** recycle on a rebound exit near **80.5** or a support failure below **77.4**
- **GLD:** watch only if oil / Strait of Hormuz headlines start forcing a broader equity de-risking move

## Macro Themes To Monitor
### Actionable now
- **AI capex / cloud monetization:** supports **GOOG, AVGO, QQQ, QTUM**, and supports a **SOXX** breakout re-entry if confirmed
- **Selective semiconductor leadership:** supports owning the strongest liquid sector expression rather than broadening into every AI-adjacent name

### Worth monitoring
- **Oil / Middle East stress:** still the main macro threat to growth multiples and risk appetite
- **Execution-discipline risk:** any unexpected live position change must trigger an immediate broker-state reconciliation before new orders
- **Thin quote quality in smaller / less liquid names:** especially relevant for **QTUM, EIS, GLD, SHLD, ARKX**

### Interesting but not actionable yet
- **Top-investor portfolio changes:** fallback coverage remained insufficient this cycle
- **Analyst upgrade / downgrade screens:** fallback coverage remained insufficient this cycle
- **Space theme:** still acceptable only as a tiny satellite via **RKLB**

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

## Last Run Summary
- Refreshed the live Alpaca account, positions, market clock, benchmark, and full-universe market snapshot during regular hours.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-prioritized fallback news still supports a **constructive risk-on read** because oil pulled back, while **AI / cloud / semis** remain the strongest themes in the universe.
- The live broker now shows **no SOXX position**; stale memory was reconciled to the live account and the book is now **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1**.
- The strategy remains **off track versus SPY**, so the next-hour change is to allow **one selective exposure upgrade only**: **SOXX** on breakout is preferred, **GOOG** on breakout is secondary, and **RKLB** remains the only active recycle candidate.
- **Prompt review:** a concrete prompt conflict was identified in the commit-instruction wording, so `prompts/hourly.txt` should be updated to respect higher-priority repo rules in interactive sessions.

## Tactical Execution Summary — 2026-05-05
- **What happened:** confirmed the live broker state, verified SOXX breakout strength with a second-source Yahoo check, and executed a **1-share SOXX add** above the 481.2 trigger.
- **Current holdings:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- **Current posture:** still constructive / selective long, with the new SOXX add restoring a bit of high-conviction semiconductor exposure while keeping cash elevated.
- **Next expected action:** hold unless **GOOG** clears its higher add trigger later or **RKLB** breaks support / rebounds into a recycle opportunity.

## Tactical Execution Summary — 2026-05-05 15:29 ET
- **What happened:** refreshed the live broker state and symbol quotes; no new orders were placed this cycle because none of the remaining trim / breakout conditions were met, and the SOXX add had already been completed earlier.
- **Current holdings:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- **Current account snapshot:** **$10,030.54 equity / $7,698.25 cash / $17,728.79 buying power** with gross exposure around **23.25%**.
- **Current notable prices:** **AVGO 427.58**, **GOOG 384.82**, **QQQ 681.47**, **QTUM 139.06**, **RKLB 78.62**, **SOXX 481.69**.
- **Next expected action:** stay flat unless **GOOG** clears **389.4** with regular-hours confirmation, **RKLB** hits a recycle level, or a stop level is breached.
