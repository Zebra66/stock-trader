# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain in a selective **AI / semiconductor-led risk-on regime**, but leadership is still narrow and extended. Across the investment universe, the strongest intermediate trends remain **SOXX, AVGO, GOOG, QTUM, QQQ, RKLB, and EIS**, while **HOOD, META, SHLD, and GLD** still lag on the key 3m-6m windows. That still argues for concentrating only in liquid leaders, keeping a large cash buffer, and refusing to chase thin after-hours prints or lower-quality laggards.

The live book is still aligned with that thesis: **small exposure in current leaders plus high cash**. Current equity is **$9,990.64**, cash is **$7,618.05**, and gross long exposure is about **23.7%** of equity. The market is currently **closed** per Alpaca, and several broker latest bars remain clearly **thin / stale after hours** — especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX** — so the next tactical cycle must continue to require **regular-hours confirmation**, plus a **second-source quote check** for any stale symbol before trading.

## Portfolio State
- **Equity:** $9,990.64
- **Cash:** $7,618.05
- **Buying power:** $17,608.69
- **Gross exposure:** ~23.7%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-04T22:37:56.489247172-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$416.36** | unrealized P&L **-$0.59** (-0.14%) | allocation **4.17%**
  - **QQQ:** 1 share @ 673.26 | market value **$674.10** | unrealized P&L **+$0.84** (+0.12%) | allocation **6.75%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** (0.00%) | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.63** | unrealized P&L **-$0.25** (-0.31%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$927.50** | unrealized P&L **-$9.36** (-1.00%) | allocation **9.28%**
- **Overall unrealized P&L:** **-$9.36**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol AVGO`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **Analyst estimates:** not available this run because **`FMP_API_KEY` is missing**
- **News / search fallback:** **Google News RSS** plus **Bing News RSS** because no direct Google Search tool surfaced in this workspace
- **Fallback quality note:** symbol-specific coverage was usable for **GOOG / AVGO / semis**, but investor-move and analyst coverage remained **mixed / noisy / incomplete** and was **not strong enough to drive portfolio changes by itself**
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T09-37-53.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T09-37-53.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T09-37-53.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T09-37-53.txt`
  - `temp_files/fmp_probe_avgo_2026-05-05T09-37-53.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T09-37-53.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T09-37-53.csv`
  - `temp_files/tech_levels_2026-05-05T09-37-53.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T09-37-53.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- Best **3m** performers: **SOXX +31.09%**, **AVGO +26.05%**, **QTUM +16.47%**, **GOOG +10.15%**, **EIS +10.05%**
- Best **6m** performers: **SOXX +51.61%**, **GOOG +34.85%**, **EIS +31.88%**, **RKLB +31.83%**, **QTUM +20.10%**
- Weak / broken **3m-6m** names: **HOOD -14.86% / -44.56%**, **META -13.52% / -8.26%**, **SHLD -8.54% / +0.93%**, **GLD -2.91% / +12.04%**
- Best **1y** performers: **RKLB +263.07%**, **SOXX +153.29%**, **GOOG +134.01%**, **AVGO +112.78%**, **QTUM +81.87%**

## Fresh External Context
- **Macro / tape:** fallback headlines still point to a market led by **AI infrastructure and semiconductors**, with more concern about extension after the rally than about an outright broad risk-off break.
- **GOOG:** still the strongest missing core position in the book. News flow stayed constructive around **Q1 earnings strength, rising capex, and AI platform momentum**. Yahoo regular close (**379.64**) broadly confirmed the thin Alpaca after-hours quote (**379.03**), but tactical action should still wait for regular-hours confirmation.
- **AVGO / SOXX:** analyst and news tone stayed constructive around **AI demand / hyperscaler capex**, but the group remains extended enough that the right move is still **hold winners, do not chase adds**.
- **NVDA / META / HOOD:** either redundant versus current exposure or weaker on the intermediate-trend windows; none improved enough to outrank **GOOG**.
- **Top-investor / analyst context:** fallback coverage was too stale, generic, or noisy to justify acting on it.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many broker latest bars were thin, do **not** use those prints as breakout or breakdown confirmation.
3. **Hold all existing positions** while they remain above refreshed risk levels; do **not** average down and do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash**.
5. The only active new-buy candidate for the next regular session remains **GOOG**, but only on **regular-hours confirmation** and preferably with a **second-source quote check**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI / custom-silicon leader, and the existing starter already fills intended single-name exposure. | 4% |
| EIS | Hold | Momentum is respectable, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Hold | Hedge only; current alpha opportunity remains in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing high-liquidity quality position in the universe if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and lower-quality setup than core tech leaders. | 0% |
| META | Sell | Still lagging GOOG and the semiconductor leaders on trend quality. | 0% |
| NVDA | Hold | Structural AI leader, but redundant with current semiconductor exposure and less timely than GOOG. | 0% |
| QQQ | Hold | Existing 1-share position is already near intended broad-growth allocation. | 7% |
| QTUM | Hold | Existing position remains a valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite position. | 1% |
| SHLD | Sell | Defense theme remains lower priority than AI / growth leadership. | 0% |
| SOXX | Hold | Still the strongest sector-level AI / semiconductor expression; current size is close to target. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
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
- Top-investor filings / headlines are context, not instructions; follow them only when they align with current price action and liquidity.
- Pre-market prints can improve watchlist quality, but they do **not** replace cash-session confirmation or opening-range discipline.
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header requests can hit HTTP 429 rate limits.**
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and immediately update memory / todo.
- On a **~$10k account**, one-share increments in names like **QQQ, GOOG, AVGO, and SOXX** are meaningful; target allocations must respect practical order granularity.
- For thinner names or stale quotes (for example **EIS**), require fresh confirmation from a reliable live source before taking tactical action.
- If **Google Search** is unavailable from the workspace, acceptable fallbacks include **Google News RSS**, **Yahoo Finance chart data**, and **Bing News RSS**, but their results must be relevance-checked before they influence trades.
- **After-hours Alpaca latest bars can show very low trade counts even for liquid ETFs; use regular-hours confirmation before treating those prints as actionable breakouts or breakdowns.**
- **Rewrite top-level tactical state each hourly cycle instead of leaving conflicting append-only notes that disagree with live holdings.**
- If fallback investor / analyst coverage is stale or noisy, explicitly say the coverage was insufficient rather than forcing a thesis from weak evidence.
- A thin after-hours broker print in a normally liquid name (for example **GOOG** this run) is enough to require either **regular-hours confirmation** or a **second-source quote check** before enabling tactical action.
- If the fallback market-snapshot artifact uses the exchange-session date instead of the local run date, keep the file and document the date mismatch rather than discarding usable data.

## Last Run Summary
- Live Alpaca state shows the book is still **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,990.64 equity**, **$7,618.05 cash**, and about **23.7% gross exposure**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback** plus **Google News RSS / Bing News RSS** for external context.
- Leadership still favors **SOXX / AVGO / GOOG / QTUM / QQQ**, while **HOOD / META / SHLD / GLD** remain weaker.
- No new tactical trade is authorized while the market is **closed** and several quotes remain **thin after hours**.
- **GOOG** remains the only active next-session buy candidate.
- **Prompt review result:** no prompt edit applied this run; the prompt is still serviceable and no safe, high-signal improvement was identified that justified changing live trading instructions.

## 2026-05-05 Tactical Execution Summary
- **What was done:** refreshed Alpaca account, positions, and latest prices for every symbol in the tactical universe.
- **Execution result:** **no orders were placed**. The market is still closed and the latest broker prints remain thin / stale for several names, so no regular-hours confirmation existed for a GOOG entry or for any trim / stop action.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2; cash remains the dominant position.
- **Risk / drift check:** allocations are still broadly aligned with the book plan, so there was no need to rebalance.
- **Next expected action:** wait for the next regular session and only act if GOOG triggers above **384.5** or on a reclaim from **372-374** back through **375.0**, or if one of the existing holdings hits its planned trim / stop levels with fresh confirmation.
- **Code / prompt changes:** none this cycle.

## 2026-05-05 10-Minute Tactical Execution Update
- **What was done:** refreshed live Alpaca account, positions, latest prices for the full tactical universe, and checked recent GOOG / AVGO news via Google News RSS.
- **Execution result:** **no orders were placed**. The market is still closed, and GOOG stayed below the 384.5 breakout trigger at **379.03** with no same-session reclaim setup.
- **Current holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2; equity is **$9,990.87**, cash is **$7,618.05**, and gross exposure is about **23.7%**.
- **Risk / drift check:** none of the held positions were far enough from target to justify paying friction for a rebalance.
- **Next expected action:** continue to wait for regular-hours confirmation; only act if GOOG triggers above 384.5 / reclaims 375 after a pullback into 372-374, or if a held position hits its planned trim / stop with fresh confirmation.
- **Code / prompt changes:** none this cycle.
