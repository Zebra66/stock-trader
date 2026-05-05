# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities are still in a **selective AI / semiconductor-led risk-on regime**, but the edge remains concentrated rather than broad. The strongest 1m-6m trends in the universe are still **SOXX, AVGO, GOOG, QTUM, QQQ, and RKLB**, while **HOOD, META, SHLD, and GLD** remain weaker or lower-priority on the key intermediate windows. That keeps the right posture unchanged: hold current liquid leaders, avoid laggard rotations, and keep a large cash reserve until a fresh high-quality setup appears.

The live account remains positioned correctly for that backdrop: **small exposure in current leaders plus high cash**. Equity is now **$9,984.26**, cash is **$7,618.05**, and gross long exposure is about **23.7%** of equity. The market is currently **closed**, and several Alpaca latest bars were clearly **thin / stale after hours** — especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX** — so the next tactical cycle must keep requiring **regular-hours confirmation**, plus a **second-source quote check** for any stale symbol before trading.

## Portfolio State
- **Equity:** $9,984.26
- **Cash:** $7,618.05
- **Buying power:** $17,602.31
- **Gross exposure:** ~23.7%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-04T20:30:52.807145114-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 415.06 | market value **$415.06** | unrealized P&L **-$1.89** (-0.45%) | allocation **4.16%**
  - **QQQ:** 1 share @ 672.21 | market value **$672.21** | unrealized P&L **-$1.05** (-0.16%) | allocation **6.73%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** (0.00%) | allocation **2.75%**
  - **RKLB:** 1 share @ 80.62 | market value **$80.62** | unrealized P&L **-$0.26** (-0.32%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 462.16 | market value **$924.32** | unrealized P&L **-$12.54** (-1.34%) | allocation **9.26%**
- **Overall unrealized P&L:** **-$15.74**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol AVGO`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Google News RSS** plus **Bing News RSS** because no direct Google Search tool surfaced in this workspace
- **Fallback quality note:** symbol-specific coverage was usable for **GOOG / AVGO / semis**, but investor-move and analyst coverage remained **mixed / noisy / incomplete** and was **not strong enough to drive portfolio changes by itself**
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05Tcurrent.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05Tcurrent.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05Tcurrent.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05Tcurrent.txt`
  - `temp_files/fmp_probe_avgo_2026-05-05Tcurrent.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05Tcurrent.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05Tcurrent.csv`
  - `temp_files/tech_levels_latest.json`
  - `temp_files/news_rss/hourly_news_summary_latest.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +34.28%**, **AVGO +32.46%**, **GOOG +27.54%**, **QTUM +22.69%**, **RKLB +18.68%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- Best **6m** performers: **SOXX +49.83%**, **GOOG +33.62%**, **RKLB +30.93%**, **EIS +28.36%**, **QTUM +19.10%**
- Weak / broken **3m-6m** names: **HOOD -14.86% / -47.95%**, **META -13.59% / -4.28%**, **SHLD -8.54% / -1.03%**, **GLD -2.91% / +12.45%**
- Best **1y** performers: **RKLB +257.25%**, **SOXX +145.03%**, **GOOG +128.63%**, **AVGO +107.50%**, **QTUM +74.81%**

## Fresh External Context
- **Macro / tape:** fallback headline quality was mixed, but the usable read-through still points to a market led by **AI infrastructure and semiconductors**, with intermittent **inflation / yield / valuation** anxiety rather than a clean broad risk-off regime.
- **GOOG:** still the cleanest missing core position in the book. Fallback coverage remained constructive around **cloud / enterprise AI / backlog strength**, and Yahoo close data (**379.64**) broadly confirmed the thin Alpaca after-hours quote (**379.03**).
- **AVGO / SOXX / NVDA:** semiconductor leadership remains intact on price performance, but the group is extended enough that the right move is still **hold winners, do not chase adds**.
- **META / HOOD:** coverage was less compelling than **GOOG** or the semiconductor leaders, and their intermediate trend quality remains worse.
- **Top-investor / analyst context:** fallback coverage was too stale, empty, or generic to justify acting on it.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many after-hours quotes were thin, do **not** use those prints as breakout or breakdown confirmation.
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
| NVDA | Hold | Structural AI leader, but redundant with current semiconductor exposure. | 0% |
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
- Live Alpaca state shows the book is still **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$10,006.68 equity**, **$7,618.05 cash**, and about **23.9% gross exposure**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership still favors **SOXX / AVGO / GOOG / QTUM / QQQ**, while **HOOD / META / SHLD / GLD** remain weaker.
- No new tactical trade is authorized while the market is **closed** and several quotes remain **thin after hours**.
- **GOOG** remains the only active next-session buy candidate.
- **Prompt review result:** no prompt edit applied this run; the prompt is still serviceable and no safe, high-signal improvement was identified that justified changing live trading instructions.

## 10-Minute Tactical Cycle Summary — 2026-05-05
- **Action:** Refreshed the live Alpaca account, positions, clock, and latest prices for the full universe; checked Google News RSS for GOOG / AVGO / NVDA / SOXX / QQQ.
- **Long / short posture:** **Long selective AI / semiconductor leaders, short nothing, keep cash high.**
- **Holdings:** AVGO 1 @ 415.06, QQQ 1 @ 672.21, QTUM 2 @ 137.00, RKLB 1 @ 80.62, SOXX 2 @ 462.16.
- **Account:** equity **$9,984.26**, cash **$7,618.05**, buying power **$17,602.31**.
- **Decision:** **No orders placed.** The market is closed, and no buy/sell trigger was hit: AVGO, QQQ, SOXX, QTUM, and RKLB all remain inside hold bands; GOOG stayed below the **383.5** breakout trigger and did not reach the **375-376 pullback / 377 reclaim** setup.
- **Next expected action:** Recheck GOOG and the existing trim / stop levels on the next regular session; otherwise continue holding the current leaders and preserve cash.
- **Portfolio / code / prompt changes:** Portfolio unchanged; code unchanged; prompt unchanged.

## 10-Minute Tactical Cycle Summary
- **Action:** Reviewed the live book, refreshed quotes for **AVGO / EIS / GLD / GOOG / HOOD / META / NVDA / QQQ / QTUM / RKLB / SHLD / SOXX / VOO / ARKX**, refreshed multi-timeframe performance with the Yahoo fallback, and checked fallback news coverage for macro / semis / GOOG / AVGO / NVDA / META.
- **Long / short posture:** **Long selective AI / semiconductor leaders, short nothing, keep cash high.**
- **Holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2; equity $10,006.68; cash $7,618.05; gross exposure ~23.9%.
- **Decision:** No orders placed. GOOG remains on watch, but no regular-hours confirmation is available yet and existing positions remain inside their hold bands.
- **Portfolio / code / prompt changes:** Portfolio unchanged; code unchanged; prompt unchanged.

## 10-Minute Tactical Cycle Summary
- **Action:** Refreshed the live Alpaca account, positions, and latest prices for every universe symbol; confirmed the market is still closed.
- **Long / short posture:** **Long selective AI / semiconductor leaders, short nothing, keep cash high.**
- **Holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2; equity **$9,992.04**; cash **$7,618.05**; gross exposure **~23.8%**.
- **Decision:** **No orders placed.** GOOG was still only a thin after-hours print near **379.03**, below the **383.5** breakout trigger, so we did not force a trade.
- **Next expected action:** Recheck **GOOG** and the existing stop / trim levels on the next regular session; otherwise keep cash high and leave the current leaders alone.

## 10-Minute Tactical Cycle Summary
- **Action:** Refreshed the live Alpaca account, positions, and latest prices for the entire universe; checked Google News RSS for GOOG, AVGO, and semiconductors; confirmed no trade-worthy breakout or breakdown while the market remains closed.
- **Long / short posture:** **Long selective AI / semiconductor leaders, short nothing, keep cash high.**
- **Holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2; equity **$9,984.55**; cash **$7,618.05**; gross exposure **~23.7%**.
- **Decision:** **No orders placed.** GOOG stayed below the **383.5** regular-hours buy trigger at **379.03** with a thin after-hours print, and no existing stop levels were hit. Stale / low-trade quotes in EIS, GLD, META, NVDA, and GOOG were not actionable.
- **Portfolio / code / prompt changes:** Portfolio unchanged; code unchanged; prompt unchanged.
- **Next expected action:** Wait for regular-hours confirmation on GOOG before adding risk; otherwise continue holding AVGO, QQQ, QTUM, RKLB, and SOXX as-is.

## 10-Minute Tactical Cycle Summary — 2026-05-05
- **Action:** Refreshed the live Alpaca account, positions, latest prices for the full universe, and a quick Google News scan for GOOG / AVGO / NVDA / SOXX / semis.
- **Long / short posture:** **Long selective AI / semiconductor leaders, short nothing, keep cash high.**
- **Holdings:** AVGO 1 @ 415.53, QQQ 1 @ 672.97, QTUM 2 @ 137.00, RKLB 1 @ 80.23, SOXX 2 @ 461.40.
- **Account:** equity **$9,983.58**, cash **$7,618.05**, buying power **$17,601.63**.
- **Decision:** **No orders placed.** The market remains closed, GOOG is still below the **383.5** regular-hours breakout trigger, and the active hold / trim / stop levels for AVGO, QQQ, QTUM, RKLB, and SOXX were not hit.
- **Next expected action:** Recheck GOOG during the next regular session; otherwise keep the current leaders and preserve cash.
- **Portfolio / code / prompt changes:** Portfolio unchanged; code unchanged; prompt unchanged.

