# Hourly Macro Memory
*Updated 2026-05-04 16:02 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities still show a **selective risk-on** profile led by **semiconductors, AI infrastructure, and large-cap growth**. The freshest multi-timeframe data continues to favor **SOXX, AVGO, GOOG, QTUM, and QQQ**, while **HOOD, META, SHLD, and GLD** remain weaker on the 3-month trend. News flow also fits that split: AI / semiconductor coverage stayed constructive, while **gold weakened as yields and the dollar firmed**, and **Robinhood headlines remained tied to softer crypto-revenue quality**.

The live account is already positioned correctly for that regime: a **small leadership basket with high cash**. Gross exposure is only about **23.7%**, so there is no need to force overnight risk. Because the market is now **closed** and several after-hours Alpaca bars show **thin trade counts**, the correct posture for the next tactical window is to **hold the existing book, keep at least 70% cash, and only add a single new starter in GOOG if regular-hours confirmation appears next session**. Do not add to existing AVGO / QQQ / SOXX / QTUM positions this hour.

## Portfolio State
- **Equity:** $9,982.84
- **Cash:** $7,618.05
- **Buying power:** $17,522.34
- **Gross exposure:** ~23.7%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-04T16:00:41-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value $416.37 | unrealized P&L **-$0.58** (-0.14%) | allocation **4.17%**
  - **QQQ:** 1 share @ 673.26 | market value $672.57 | unrealized P&L **-$0.69** (-0.10%) | allocation **6.74%**
  - **QTUM:** 2 shares @ 137.00 | market value $271.38 | unrealized P&L **-$2.62** (-0.96%) | allocation **2.72%**
  - **RKLB:** 1 share @ 80.88 | market value $80.31 | unrealized P&L **-$0.57** (-0.71%) | allocation **0.80%**
  - **SOXX:** 2 shares @ 468.43 | market value $924.16 | unrealized P&L **-$12.70** (-1.36%) | allocation **9.26%**
- **Overall unrealized P&L:** **-$17.16**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Yahoo Finance RSS** for symbol news and **Bing News RSS** for investor / macro headline checks because no direct Google Search tool surfaced in this workspace
- **Investor-headline quality:** usable for context, but **too noisy / stale to drive trades directly** this run
- **Raw artifacts from this cycle:**
  - `temp_files/fmp_probe_latest.txt`
  - `temp_files/alpaca_account_latest.json`
  - `temp_files/alpaca_positions_latest.json`
  - `temp_files/alpaca_clock_latest.json`
  - `temp_files/hourly_latest_prices_latest.json`
  - `temp_files/hourly_market_snapshot_yahoo_latest.json`
  - `temp_files/hourly_market_snapshot_yahoo_latest.csv`
  - `temp_files/news_rss/hourly_news_summary_latest.json`
  - `temp_files/investor_news_latest.json`
  - `temp_files/hourly_research.ts`
  - `temp_files/hourly_research_output_latest.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.61%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +34.28%**, **AVGO +32.47%**, **GOOG +27.54%**, **QTUM +22.69%**, **RKLB +18.68%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.80%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.06%**
- Weak / broken **3m** names: **HOOD -14.86%**, **META -13.58%**, **SHLD -8.55%**, **GLD -2.90%**
- Best **6m** performers: **SOXX +49.83%**, **GOOG +33.62%**, **RKLB +30.93%**, **EIS +28.38%**, **QTUM +19.10%**
- Best **1y** performers: **RKLB +257.25%**, **SOXX +145.03%**, **GOOG +128.63%**, **AVGO +107.52%**, **QTUM +74.81%**

## Fresh External Context
- **Macro / tape:** higher yields and a firmer dollar pressured **gold**, while growth / AI leadership stayed relatively intact.
- **GOOG:** still the cleanest missing core position in the book; fallback headlines remained constructive on AI / cloud / large-cap quality.
- **AVGO / SOXX:** trend leadership remains strong, but the account is already adequately exposed to semis.
- **QQQ:** broad growth remains healthier than broad-market beta, but the current 1-share position is already near target.
- **NVDA:** still a quality leader long term, but this hour its setup quality remains inferior to GOOG because the account already owns heavy semi exposure.
- **HOOD:** fresh headlines still emphasize crypto dependence and weaker revenue-quality optics.
- **META:** fresh sentiment was mixed, including a price-target reduction; price trend still lags GOOG and the semiconductor leaders.
- **EIS:** broker quote remains stale / illiquid and still requires second-source confirmation before any actionable trigger.
- **Top-investor context:** Bing RSS produced mostly stale or low-signal portfolio headlines; no fresh high-conviction investor move changed the plan.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed**, do **not** treat thin after-hours bars as breakout confirmation.
3. **Hold all existing positions** while they remain above refreshed risk levels; do **not** average down and do **not** add to AVGO / QQQ / SOXX / QTUM this hour.
4. Keep overall gross exposure capped around **30%** and preserve at least **70% cash**.
5. The only active new-buy candidate for the next session is **GOOG** on regular-hours confirmation.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI / custom-silicon leadership, but current 1-share position already fills the intended starter size. | 4% |
| EIS | Hold | Good momentum on paper, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Hold | Hedge only; current macro tape favors growth over gold while yields stay firm. | 0% |
| GOOG | Buy | Best missing high-liquidity quality position in the universe; strongest add candidate if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and crypto-linked earnings quality make it inferior to other opportunities. | 0% |
| META | Sell | Still lagging GOOG and the chip leaders, with mixed fresh analyst tone. | 0% |
| NVDA | Hold | Structural leader, but redundant with existing semiconductor exposure this hour. | 0% |
| QQQ | Hold | Existing 1-share position is already near the intended allocation. | 7% |
| QTUM | Hold | Existing position is near target and remains a valid secondary AI / quantum sleeve. | 3% |
| RKLB | Hold | Keep only as a tiny satellite; higher-volatility, lower-quality than the core leaders. | 1% |
| SHLD | Sell | Defense theme is less attractive than the current AI / growth leadership set-up. | 0% |
| SOXX | Hold | Still the strongest sector-level AI / semiconductor expression; existing size is close to target. | 10% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership remains dominant. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power. Margin use requires an explicit hourly decision.
- Commission-free does **not** mean friction-free; tactical entries need expected edge of at least **3x** estimated round-trip cost.
- Round-trip cost assumptions must include **spread, slippage, CAT, SEC sell fees, and FINRA TAF on sells**.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash and record that source in memory.
- Tactical price levels must be refreshed from the latest market snapshot each hourly cycle; do **not** blindly reuse stale thresholds.
- Distinguish **quality of earnings reaction** from raw fundamentals.
- When using fallback news sources, prefer **symbol-specific / high-relevance feeds** and explicitly ignore noisy or off-topic articles.
- Absence of a fresh high-conviction catalyst is a valid reason to keep cash rather than forcing exposure.
- Top-investor filings/headlines are context, not instructions; follow them only when they align with current price action and liquidity.
- Pre-market prints can improve watchlist quality, but they do **not** replace cash-session confirmation or opening-range discipline.
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header requests can hit HTTP 429 rate limits.**
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and immediately update memory / todo.
- On a **~$10k account**, one-share increments in names like **QQQ, GOOG, AVGO, and SOXX** are meaningful; target allocations must respect practical order granularity.
- For thinner names or stale quotes (for example **EIS**), require fresh confirmation from a reliable live source before taking tactical action.
- If **Google Search / Google News RSS** is unavailable from the workspace, acceptable fallbacks include **Yahoo Finance RSS** and selective **Bing News RSS**, but their results must be relevance-checked before they influence trades.
- **After-hours Alpaca latest bars can show very low trade counts even for liquid ETFs; use regular-hours confirmation before treating those prints as actionable breakouts or breakdowns.**
- **Rewrite top-level tactical state each hourly cycle instead of leaving conflicting append-only notes that disagree with live holdings.**

## Last Run Summary
- Live Alpaca state at 16:00 ET shows the book is now **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,982.84 equity**, **$7,618.05 cash**, and about **23.7% gross exposure**.
- **FMP historical performance** is still unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership remains centered on **SOXX / AVGO / GOOG / QTUM / QQQ**, while **HOOD / META / SHLD / GLD** remain weaker.
- The account is already close to its intended gross exposure for this regime; the only active new-buy candidate is **GOOG**, and only on **regular-hours confirmation** next session.
- **Prompt review result:** no prompt edit applied this run; the prompt is serviceable, but the operational issue identified was stale append-only state in `memory/todo.md`, which was corrected directly in the memory files.
## 2026-05-04 Tactical Execution Summary
- **Action taken:** no orders submitted this cycle.
- **Why:** market remained closed and the fresh after-hours prints were thin; GOOG never reclaimed the 381-382 regular-hours trigger and no held position hit its trim/stop level.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current read:** leadership still favors semis / AI infrastructure; keep the book small and cash-heavy.
- **Next expected action:** wait for the next regular session; only consider GOOG if it reclaims the buy zone with confirmation, otherwise hold existing positions and preserve cash.
## 2026-05-04 20:41 ET Tactical Execution Summary
- **Action taken:** no orders submitted.
- **Why:** the market is still closed / thin after-hours, GOOG is at 379.50 and remains below the 381.0-382.0 reclaim zone, and no held position has hit its stop or trim level.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current account snapshot:** $9,979.81 equity / $7,618.05 cash / $17,597.86 buying power; gross exposure is about 23.6%.
- **News check:** a quick Google News scan for GOOG showed constructive / neutral headlines and no adverse catalyst.
- **Next expected action:** keep cash high and wait for regular-hours confirmation before considering GOOG; otherwise continue holding the current book.
## 2026-05-04 16:20 ET Tactical Execution Summary
- **Action taken:** no orders submitted this cycle.
- **Why:** GOOG stayed below the 381.0-382.0 reclaim zone, the market remained effectively thin / after-hours, and no held position hit its stop or trim threshold.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current read:** book remains small, cash-heavy, and aligned with semis / AI infrastructure leadership.
- **Next expected action:** wait for regular-hours confirmation before considering GOOG; otherwise continue holding and preserve cash.
## 2026-05-04 16:31 ET Tactical Execution Summary
- **Action taken:** no orders submitted this cycle.
- **Why:** GOOG stayed below the 381.0-382.0 reclaim zone at 379.50, the broader book remained above all stop levels, and a quick Google News check did not surface any adverse GOOG-specific catalyst.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current read:** leadership still favors semis / AI infrastructure, but the account remains appropriately small and cash-heavy for a closed market.
- **Next expected action:** wait for regular-hours confirmation before considering GOOG; otherwise continue holding existing positions and preserve cash.

## 2026-05-04 16:50 ET Tactical Execution Summary
- **Action taken:** no orders submitted this cycle.
- **Why:** the market remained closed / thin after-hours, GOOG was still below the 381.0-382.0 reclaim zone at 379.50, and Google News remained constructive with no adverse GOOG-specific catalyst.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current account snapshot:** $9,979.50 equity / $7,618.05 cash / $17,597.55 buying power; gross exposure remains about 23.7%.
- **Current read:** keep the book small, cash-heavy, and aligned with semis / AI infrastructure leadership.
- **Next expected action:** wait for the next regular session and only consider GOOG if it reclaims the buy zone with confirmation; otherwise hold all existing positions.
## 2026-05-04 16:55 ET Tactical Execution Summary
- **Action taken:** no orders submitted this cycle.
- **Why:** GOOG was still below the 381.0-382.0 reclaim zone at 379.03 and the market remained in thin after-hours trading; existing holdings all stayed above their stop levels.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current account snapshot:** $9,980 equity / $7,618.05 cash / $17,598.05 buying power; gross exposure remains about 23.7%.
- **News check:** Google Search / Google News results for GOOG remained constructive / neutral and did not surface an adverse catalyst.
- **Next expected action:** keep cash high, hold the current book, and wait for regular-hours confirmation before considering GOOG again.
