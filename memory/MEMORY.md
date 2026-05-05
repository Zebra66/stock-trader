# Hourly Macro Memory
*Updated 2026-05-05 15:00 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio remains **positive in absolute dollars**, but it is still **behind SPY since inception**, so the strategy remains **off track for the dual mandate**. The main problem is still **cash drag**: live gross exposure is only about **22.5%**, while the strongest trend cluster in the allowed universe remains **AI infrastructure, semiconductors, and large-cap growth**. Fresh fallback return data still shows **SOXX, GOOG, QTUM, AVGO, and QQQ** as the best near- to medium-term trend leaders, while **META, HOOD, SHLD, and ARKX** remain weaker or lower-priority uses of capital.

The tape is constructive but not risk-free. Reuters-focused fallback coverage still points to **oil / Middle East tension** as the main macro threat, yet broader market reporting also shows investors still rewarding **earnings quality, cloud, and AI-linked growth**. With only about an hour left in the regular session, the best risk-adjusted way to reduce cash drag is still a **single liquid QQQ add only on confirmed strength**, not a broader chase and not an average-down in GOOG.

## Goal Check
- **Portfolio since inception:** **+0.34%** (**$10,034.35** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same period:** **+0.51%** (**724.34 live** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it still trails SPY by roughly 17 bps because exposure is too low.**

## Daily Performance Review
- **Today vs prior close:** portfolio about **+0.34%** (**$10,034.35** vs **$10,000.00 last_equity**), while **SPY is about +0.89%** (**724.34 vs 718.01**).
- **1W / 2W portfolio review:** not yet fully available as a true portfolio history window because the funded live account effectively starts on **2026-05-01**. Use since-inception comparison until enough live history accumulates.
- **What is working:** **AVGO, QQQ, QTUM, and SOXX** are all green, and the removal of **RKLB** improved book quality.
- **What is not working:** **GOOG** remains below its average entry, and the book is still too underinvested to keep up with a firm growth tape.
- **What must change:** keep turnover low, avoid forcing late-session trades, but still authorize **one** high-liquidity add if leadership confirms. Do **not** broaden into thin or lower-conviction names.

## Portfolio State
- **Equity:** **$10,034.35**
- **Cash:** **$7,774.88**
- **Buying power:** **$17,809.23**
- **Gross exposure:** **22.52%**
- **Cash weight:** **77.48%**
- **Market status:** **open**
- **Alpaca clock timestamp:** **2026-05-05T15:00:57.252670518-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$430.74** | unrealized P&L **+$13.79** | allocation **4.29%**
  - **GOOG:** 1 share @ 386.64 | market value **$382.38** | unrealized P&L **-$4.26** | allocation **3.81%**
  - **QQQ:** 1 share @ 673.26 | market value **$682.37** | unrealized P&L **+$9.11** | allocation **6.80%**
  - **QTUM:** 2 shares @ 137.00 | market value **$278.90** | unrealized P&L **+$4.90** | allocation **2.78%**
  - **SOXX:** 1 share @ 481.95 | market value **$485.09** | unrealized P&L **+$3.14** | allocation **4.83%**
- **Overall unrealized P&L:** **+$26.68**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **Portfolio history fallback:** direct **Alpaca REST** call to `/v2/account/portfolio/history`
- **News / search fallback:** **Google News RSS** with Reuters-focused queries because no direct Google Search tool was available in the workspace
- **Second-source quote / structure check:** **Yahoo Finance 5d / 15m chart data** for **QQQ, SPY, AVGO, GOOG, SOXX, QTUM**
- **Coverage quality note:** coverage was sufficient for the **broad tape**, **Alphabet / cloud / AI**, and broad **AI / semiconductor demand**; mixed for **Broadcom-specific** incremental catalysts; and **insufficient** for clean **top-investor move** and broad **analyst-action** screens
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T19-00-54Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T19-00-54Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T19-00-54Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T19-00-54Z.txt`
  - `temp_files/alpaca_portfolio_history_hourly_2026-05-05T19-00-54Z.json`
  - `temp_files/fmp_snapshot_2026-05-05T19-00-54Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T19-00-54Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T19-00-54Z.csv`
  - `temp_files/tech_levels_2026-05-05T19-00-54Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T19-00-54Z.json`

## Performance Snapshot Used This Run
- **Best 1D performers:** **SOXX +4.95%**, **AVGO +3.49%**, **QTUM +2.80%**, **EIS +1.75%**, **QQQ +1.41%**
- **Best 1W performers:** **SOXX +10.54%**, **GOOG +10.04%**, **QTUM +8.15%**, **AVGO +7.81%**, **EIS +5.93%**
- **Best 1M performers:** **SOXX +42.79%**, **AVGO +37.04%**, **GOOG +29.86%**, **QTUM +26.86%**, **QQQ +16.65%**
- **Weak 1W / 3M names:** **META -10.43% / -13.06%**, **HOOD -6.18% / -11.57%**, **SHLD +0.48% / -11.63%**, **ARKX -1.19% / -1.67%**, **RKLB -0.06% / -3.36%**

## Priority Actions For The Next Hour
1. Treat the live Alpaca account as the source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
2. Keep the book **constructively long but selective**; do **not** add to laggards or thin names.
3. Authorize **one** fresh add only: **QQQ 1 share above 682.85** during regular hours with confirmation, **SPY above 724.3**, and sane spread / tape quality.
4. Because this is late in the session, do **not** open a new long after **15:50 ET** unless a later hourly cycle explicitly changes that rule.
5. Keep risk controlled: **gross exposure <= 30%**, **cash >= 70%**, and **no leverage**.
6. **Do not average down GOOG.** It remains a hold only until it proves strength above the current average entry area.
7. If **SPY** loses short-term structure, quote quality deteriorates, or macro headlines worsen materially, **do nothing** and preserve capital.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; current size already expresses the thesis. | 4% |
| EIS | Hold | Positive trend, but liquidity and expected alpha still trail the top ideas. | 0% |
| GLD | Hold | Hedge only if macro stress broadens into a true risk-off regime. | 0% |
| GOOG | Hold | Valid AI / cloud holding, but no fresh add is authorized below cost basis. | 4% |
| HOOD | Sell | Weak relative trend and lower thesis quality than current leaders. | 0% |
| META | Sell | Legal / spending overhang and poor relative trend keep it below preferred uses of capital. | 0% |
| NVDA | Hold | Structural winner, but not the best incremental use of capital right now versus a liquid index add. | 0% |
| QQQ | Buy | Best next add for reducing cash drag with lower idiosyncratic risk while growth leadership persists. | 14% |
| QTUM | Hold | Thematic sleeve still fits, but quote quality is thinner and current size is near target. | 3% |
| RKLB | Sell | Recycled out; low-conviction satellite no longer deserves capital today. | 0% |
| SHLD | Sell | Lower-priority theme than AI / growth leadership. | 0% |
| SOXX | Hold | Best semiconductor ETF in the universe; keep the current slot, but no new add this hour. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership remains intact. | 0% |
| ARKX | Hold | Inferior thematic expression versus QQQ, SOXX, or AVGO right now. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, SOXX, QTUM**
- **Satellite risk:** none after the **RKLB** recycle
- **Book assessment:** book quality is better, but the account is still **too underinvested** to beat SPY if leadership holds
- **Sizing note:** one additional **QQQ** share is acceptable because it raises beta efficiently while still keeping cash above **70%** and gross exposure below **30%**

## Near-Term Watchlist
- **QQQ:** preferred and only authorized fresh add this hour if price clears **682.85** during regular hours with confirmation and **SPY > 724.3**
- **GOOG:** hold only; watch for a future reclaim above **386.6-389.0** before considering any add in a later hourly cycle
- **AVGO / SOXX:** keep as winners; monitor for future adds only if semis keep leading and concentration limits are revisited by a later hourly run
- **GLD:** monitor only if oil / Middle East headlines begin forcing a broader equity de-risking regime

## Macro Themes To Monitor
### Actionable now
- **Large-cap growth and AI leadership:** supports the existing **QQQ, AVGO, GOOG, QTUM, and SOXX** positions
- **Cash-drag repair:** the book needs a measured increase in exposure, but only through the highest-quality liquid setup

### Worth monitoring
- **Oil / Middle East stress:** still the clearest macro threat to growth multiples and market tone
- **Short-term index structure:** if **SPY** loses the **724** area and breadth weakens, skip the QQQ breakout plan
- **Quote-quality risk in thinner names:** especially **EIS, GLD, QTUM, SHLD, VOO, ARKX**, and any ETF print with obviously low trade count

### Interesting but not actionable yet
- **Top-investor portfolio changes:** fallback coverage remained insufficient this cycle
- **Analyst upgrade / downgrade screens:** fallback coverage remained insufficient this cycle
- **Space theme:** de-prioritized after the **RKLB** recycle until better catalyst quality appears

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
- If Alpaca portfolio history is unavailable or incomplete, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.
- When `MEMORY.md` starts accumulating repetitive intraday detail, move the detail to a dated execution log under `memory/` and keep only the distilled state in the main memory file.
- Do not trim tiny winning positions merely because they touch marginal resistance; on a small underinvested book, premature profit-taking can hurt the absolute-return goal more than it helps.
- If a generic Google News RSS symbol query is sparse, retry with **Reuters-focused** or thesis-specific terms before declaring coverage insufficient.
- If the portfolio is positive but slightly trailing SPY because of cash drag, fix the problem with **selective exposure upgrades**, not with impulsive broad buying.
- Low-conviction satellites must earn their slot; if they lag while better liquid leaders remain available, recycle them.
- After **any unexpected live position change or execution anomaly**, refresh **positions and account immediately** and do **not** place a second order in that symbol until broker state is confirmed.
- When whole-share sizing makes a cash floor too restrictive to express the best idea, it is acceptable to modestly relax the cash floor **without using leverage** as long as gross exposure remains capped and the thesis quality is high.
- When a symbol is already held, a fresh add must stay **above the current average entry price** unless a later hourly cycle explicitly authorizes a different reset process.
- Late-session breakout buys need extra discipline; if confirmation does not arrive before the close window narrows, preserve capital and wait for the next cleaner setup.

## Last Run Summary
- Refreshed live **Alpaca account, positions, market clock, portfolio history, and full-universe latest prices** during regular hours.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-prioritized Google News RSS fallback still shows **oil / Middle East** as the main macro risk, but the broader market remains constructive enough to keep a measured long posture.
- Reconciled the live book to **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1** with **$10,034.35** equity and **$7,774.88** cash.
- The strategy remains **off track by a small margin versus SPY**, so the next-hour directive is: **hold the current winners, do not average down GOOG, and authorize one QQQ breakout add only if the broad tape confirms.**
- **Prompt review:** no prompt changes were made this run because no new prompt-specific ambiguity or execution failure was identified that required an immediate money-impacting edit.

## Recent Tactical Status
- Tactical execution stayed disciplined after the **RKLB** exit; no unauthorized trades were placed.
- See `memory/intraday_execution_log_2026-05-05.md` for the full intraday audit trail.

## Tactical Execution Summary — 2026-05-05 15:09 ET
- **What happened:** Refreshed Alpaca account, positions, and latest prices for the full actionable universe. No orders were placed.
- **Why no trade:** The only authorized fresh add was **QQQ**, but the live quote stayed at **682.44**, still below the **682.85** trigger. **SPY** remained constructive at **724.73**, but QQQ did not confirm.
- **Current holdings:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
- **Next expected action:** Stay flat unless a later cycle prints a clean regular-hours QQQ break above trigger with orderly tape and no new macro conflict.
- **Risk posture:** Preserve capital, avoid averaging down, and keep gross exposure and cash guardrails intact.

## Tactical Execution Summary — 2026-05-05 15:19 ET
- **What happened:** Refreshed Alpaca account, positions, and latest prices again after the prior no-trade cycle. Still no orders were placed.
- **Why no trade:** **QQQ** improved to **682.49** but remained below the **682.85** breakout trigger, so the only authorized add still lacked confirmation. **SPY** held firm at **724.85**, but the entry condition for QQQ was not met.
- **Current holdings:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
- **Next expected action:** Keep waiting for a clean regular-hours QQQ break above trigger, but do not force a late-session entry if confirmation does not arrive.
- **Risk posture:** Maintain the existing winners, preserve cash, and continue avoiding average-down behavior.
