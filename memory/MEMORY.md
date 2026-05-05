# Hourly Macro Memory
*Updated 2026-05-05 10:35 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The book is still **positive in absolute dollars**, but it is now **slightly behind the S&P 500 since inception**, which means the strategy is **off track for the dual mandate** even though P&L is green. The main reason is not a broken thesis; it is **cash drag plus too little exposure to the strongest liquid winners**. The market backdrop is still supportive of **AI infrastructure, semiconductors, and cloud / platform leaders**, while the main risk remains **oil / Middle East headline volatility**. Reuters fallback coverage this morning also showed a constructive open as oil eased, which supports staying net long rather than rotating defensively.

That means the right adjustment is **measured, not dramatic**: keep the high-quality AI / semiconductor sleeve, avoid weak-relative-strength names, and only deploy new capital into the **best liquid winner on confirmation**. Right now that remains **GOOG**. At the same time, the weakest current holding is **RKLB**, which is acceptable only as a tiny satellite and should be recycled if it breaks support or offers a rebound exit.

## Goal Check
- **Portfolio since inception:** **+0.19%** (**$10,019.16** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same window:** **+0.22%** (**722.24 live** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it is slightly trailing SPY because cash remains too high and exposure has been too cautious.**

## Daily Performance Review
- **1D portfolio:** **+0.19%** using Alpaca **last_equity = $10,000.00** vs current equity **$10,019.16**
- **1D SPY:** **+0.59%** using **718.01** prior close vs **722.24** live
- **1W / 2W portfolio:** **unavailable** because the live account is still too new for reliable broker-side window comparisons
- **1W / 2W SPY:** **+1.48% / +2.58%**
- **What is working:** core AI / semiconductor exposure in **AVGO, QQQ, SOXX, QTUM**, plus the new **GOOG** starter
- **What is not working:** excessive cash drag and the low-conviction **RKLB** satellite
- **What must change today:** no more unnecessary profit-taking, no new capital into lower-quality names, and only add to a clear liquid leader if price confirms

## Portfolio State
- **Equity:** **$10,019.16**
- **Cash:** **$7,706.96**
- **Buying power:** **$17,726.12**
- **Gross exposure:** **23.08%**
- **Cash weight:** **76.92%**
- **Market status:** **open**
- **Alpaca clock timestamp:** **2026-05-05T10:08:56.641656001-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$420.34** | unrealized P&L **+$3.39** | allocation **4.20%**
  - **GOOG:** 1 share @ 386.64 | market value **$383.00** | unrealized P&L **-$3.64** | allocation **3.82%**
  - **QQQ:** 1 share @ 673.26 | market value **$679.40** | unrealized P&L **+$6.14** | allocation **6.78%**
  - **QTUM:** 2 shares @ 137.00 | market value **$275.90** | unrealized P&L **+$1.90** | allocation **2.75%**
  - **RKLB:** 1 share @ 80.88 | market value **$77.51** | unrealized P&L **-$3.37** | allocation **0.77%**
  - **SOXX:** 1 share @ 468.43 | market value **$476.05** | unrealized P&L **+$7.62** | allocation **4.75%**
- **Overall unrealized P&L:** **+$12.04**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>`
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** coverage and discarding stale / noisy items
- **Coverage quality note:** macro and symbol coverage was sufficient for **GOOG, META, HOOD, macro/oil**, mixed but usable for **AVGO / semis**, and **insufficient for fresh top-investor moves or analyst-action screens**
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T14-08-53Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T14-08-53Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T14-08-53Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T14-08-53Z.txt`
  - `temp_files/fmp_snapshot_2026-05-05T14-08-53Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T14-08-53Z.json`
  - `temp_files/yahoo_snapshot_2026-05-05T14-08-53Z.csv`
  - `temp_files/support_levels_2026-05-05T14-08-53Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T14-08-53Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +10.70%**, **SOXX +8.71%**, **QTUM +7.06%**, **AVGO +5.77%**, **EIS +5.48%**
- **Best 1m performers:** **SOXX +38.59%**, **AVGO +34.49%**, **GOOG +29.23%**, **QTUM +24.85%**, **RKLB +15.64%**
- **Weak 1w / 3m names:** **META -9.61% / -12.27%**, **HOOD -6.62% / -11.99%**, **NVDA -6.87% / +10.09%**, **GLD -0.27% / -7.38%**, **SHLD +1.34% / -10.87%**

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
2. Stay **constructively long but selective**; do **not** force a catch-up trade just because the book is slightly trailing SPY.
3. The **only approved fresh add** this hour is **GOOG**, and only on a clean regular-hours break **above 389.2** with confirmation.
4. Keep gross exposure capped near **30%** and keep at least **70% cash** after any new trade.
5. Treat **RKLB** as the only current name that should be actively recycled if it either **breaks below support** or gives a **rebound exit**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure leader; position size is already appropriate. | 4% |
| EIS | Hold | Relative strength is okay, but quote quality and liquidity remain too weak for action. | 0% |
| GLD | Hold | Only a contingency hedge if oil / geopolitical stress turns into broader risk-off. | 0% |
| GOOG | Buy | Best liquid add candidate: strongest combination of trend, cloud / AI news, and diversification vs semis. | 8% |
| HOOD | Sell | Weak trend quality and negative Reuters-dated earnings / crypto-volume backdrop. | 0% |
| META | Sell | Legal and spending overhangs remain worse than GOOG despite AI relevance. | 0% |
| NVDA | Hold | Structural winner, but current semiconductor exposure already captures the theme. | 0% |
| QQQ | Hold | Core broad-growth exposure remains valid, but no fresh add is needed this hour. | 7% |
| QTUM | Hold | Thematic sleeve still fits, but low trade count argues for no fresh capital. | 3% |
| RKLB | Sell | Weakest held name; keep only as a tiny satellite and recycle opportunistically. | 0% |
| SHLD | Sell | Defense remains lower priority than AI / growth leadership inside this universe. | 0% |
| SOXX | Hold | Best sector ETF for semis; keep remaining share and do not re-add this hour. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Inferior thematic expression versus GOOG, QQQ, or SOXX. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, SOXX, QTUM**
- **Satellite risk:** **RKLB** only
- **Current book assessment:** the core sleeve is still behaving acceptably; **RKLB** is the only name that clearly ranks below the rest of the book

## Near-Term Watchlist
- **GOOG:** only approved fresh add; current live price is around **383-384**, while the key breakout level is the recent **5-day / 20-day high near 388.96**
- **RKLB:** watch for a rebound exit near **80.5** or a support failure below **76.8**
- **GLD:** watch only if oil / Strait of Hormuz headlines begin driving a broader equity de-risking move
- **NVDA:** monitor only; no buy while existing semiconductor exposure is already sufficient

## Macro Themes To Monitor
### Actionable now
- **AI capex / cloud monetization:** supports **GOOG, AVGO, QQQ, SOXX, QTUM**
- **Selective semiconductor leadership:** supports holding current chip exposure, but not broadening into every AI name

### Worth monitoring
- **Oil / Middle East stress:** still the main macro threat to growth multiples and risk appetite
- **Thin quote quality in ETFs and smaller names:** especially relevant for **EIS, QTUM, GLD, SHLD, ARKX** and any low-trade-count setup

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

## Last Run Summary
- Refreshed the live Alpaca account, positions, market clock, benchmark, and full-universe market snapshot during regular hours.
- Confirmed the live book is **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1** with **$10,019.16 equity**, **$7,706.96 cash**, and about **23.1% gross exposure**.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-prioritized fallback news kept the macro read constructive for **GOOG / cloud / AI** and still negative for **HOOD** and **META**, while **oil / Middle East risk** remains the main macro watch item.
- The strategy is now **slightly off track versus SPY**, so the next-hour adjustment is to permit **one more GOOG add only on real confirmation** and to tighten discipline around the weak **RKLB** satellite.
- **Prompt review:** no prompt edit was made this cycle; the prompt is directionally sound, and the previously noted commit-prefix conflict remains a runtime / context issue rather than a prompt-content defect.
- **Strategy:** stay long a small AI / semiconductor sleeve, keep cash high, allow only a high-quality GOOG add on breakout, and recycle weak satellite risk rather than chasing new low-quality names.

## Tactical Execution Summary — 2026-05-05 10:30 ET
- **Action this cycle:** no orders placed; GOOG did not reach the approved breakout trigger, so staying flat was the correct choice.
- **Live account:** equity **$10,024.06**, cash **$8,180.18**, buying power **$18,204.24**, market open.
- **Live positions:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- **Current live prices:** AVGO **422.295**, GOOG **384.59**, QQQ **681.25**, QTUM **138.49**, RKLB **78.555**, SOXX **479.8**, SPY **723.31**.
- **Next expected action:** wait for a confirmed **GOOG** breakout above **389.2** before adding; otherwise hold and only act if a defined stop or trim level is hit in a later cycle.
- **News check:** a quick Reuters-focused scan surfaced constructive cloud / AI headlines for Alphabet and no blocking same-day catalyst that would invalidate the standing thesis.

## Tactical Execution Summary — 2026-05-05 10:20 ET
- **Action this cycle:** no orders placed; none of the active buy/sell triggers were hit.
- **Live account:** equity **$10,021.06**, cash **$8,183.07**, buying power **$18,204.13**, market open.
- **Live positions:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- **Current live prices:** AVGO **420.83**, GOOG **383.13**, QQQ **679.52**, QTUM **138.145**, RKLB **77.79**, SOXX **476.17**, SPY **722.145**.
- **Next expected action:** wait for a confirmed **GOOG** breakout above **389.2** before adding, or act only if one of the defined stop / trim levels is hit in a later cycle.

## Tactical Execution Summary — 2026-05-05 10:45 ET
- **Action this cycle:** no orders placed; GOOG remained below the approved breakout trigger and RKLB remained below the rebound-exit level, so holding was still the correct decision.
- **Live account:** equity **$10,022.28**, cash **$8,180.18**, buying power **$18,202.46**, market open.
- **Live positions:** **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- **Current live prices:** AVGO **422.27**, GOOG **384.73**, QQQ **680.86**, QTUM **138.27**, RKLB **78.20**, SOXX **479.03**, SPY **723.02**.
- **Next expected action:** continue waiting for a confirmed **GOOG** breakout above **389.2** before adding; otherwise stay patient and only act if GOOG loses support or RKLB hits a defined exit level.
