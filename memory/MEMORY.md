# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities are still in a **selective AI / semiconductor-led risk-on regime**, but the edge remains concentrated rather than broad. The strongest 1m-6m trends in the universe are still **SOXX, AVGO, GOOG, QTUM, QQQ, and RKLB**, while **GLD, HOOD, META, and SHLD** continue to lag on the key intermediate windows. That keeps the right posture unchanged: stay focused on liquid growth leaders, avoid forcing laggard rotations, and keep a large cash reserve until a new high-quality trigger appears.

The live account remains positioned correctly for that backdrop: **small exposure in current leaders plus high cash**. Equity is **$9,981.22**, cash is **$7,618.05**, and gross long exposure is about **23.7%** of equity, so there is still no reason to deploy leverage or chase thin after-hours prints. The market is currently **closed**, and several Alpaca latest bars were clearly **thin / stale** after hours — especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX** — so the next tactical cycle must keep requiring **regular-hours confirmation**, plus a **second-source quote check** for any stale symbol before trading.

## Portfolio State
- **Equity:** $9,981.22
- **Cash:** $7,618.05
- **Buying power:** $17,599.27
- **Gross exposure:** ~23.7%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-04T19:50:26.954735151-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$415.00** | unrealized P&L **-$1.95** (-0.47%) | allocation **4.16%**
  - **QQQ:** 1 share @ 673.26 | market value **$672.07** | unrealized P&L **-$1.19** (-0.18%) | allocation **6.73%**
  - **QTUM:** 2 shares @ 137.00 | market value **$273.06** | unrealized P&L **-$0.94** (-0.34%) | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.54** | unrealized P&L **-$0.34** (-0.42%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$922.50** | unrealized P&L **-$14.36** (-1.53%) | allocation **9.25%**
- **Overall unrealized P&L:** **-$18.78**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Google News RSS** plus **Bing News RSS** because no direct Google Search tool surfaced in this workspace
- **Fallback quality note:** symbol-specific coverage was usable for **GOOG / AVGO / semis**, but investor-move and some macro coverage remained **mixed / noisy / partly stale** and was **not strong enough to drive portfolio changes by itself**
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05Tcurrent.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05Tcurrent.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05Tcurrent.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05Tcurrent.txt`
  - `temp_files/fmp_probe_qqq_2026-05-05Tcurrent.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05Tcurrent.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05Tcurrent.csv`
  - `temp_files/tech_levels_latest.json`
  - `temp_files/news_rss/hourly_news_summary_latest.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- Best **6m** performers: **SOXX +49.83%**, **GOOG +33.62%**, **RKLB +30.93%**, **EIS +28.36%**, **QTUM +19.10%**
- Weak / broken **3m-6m** names: **HOOD -14.86% / -47.95%**, **META -13.59% / -4.28%**, **SHLD -8.54% / -1.03%**, **GLD -2.91% / +12.45%**
- Best **1y** performers: **RKLB +249.33%**, **SOXX +143.15%**, **GOOG +128.96%**, **AVGO +104.53%**, **QTUM +74.16%**

## Fresh External Context
- **Macro / tape:** fallback headline quality was mixed, but the usable read-through still points to a market led by **AI infrastructure and semiconductors**, with intermittent **valuation / inflation / yield** anxiety rather than a clean broad risk-off regime.
- **GOOG:** still the cleanest missing core position in the book. The usable fallback headlines remained constructive around **cloud / enterprise AI demand**, and Yahoo close data (**379.64**) broadly confirmed the thin Alpaca after-hours quote (**379.03**).
- **AVGO / SOXX / NVDA:** semi leadership remains intact on price performance, but near-term headlines show more **sentiment volatility** after a large run; that argues for **holding winners, not chasing adds**.
- **META / HOOD:** fallback coverage stayed weaker and less compelling than GOOG or the semiconductor leaders; both remain lower-priority destinations for fresh capital.
- **GLD:** still less attractive while the dominant alpha opportunity remains concentrated in growth leadership rather than defensive hedging.
- **Top-investor context:** fallback investor coverage was too noisy / generic to justify acting on it.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many after-hours quotes were thin, do **not** use those prints as breakout or breakdown confirmation.
3. **Hold all existing positions** while they remain above refreshed risk levels; do **not** average down and do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash**.
5. The only active new-buy candidate for the next regular session remains **GOOG**, but only on **regular-hours confirmation** and preferably with a **second-source quote check**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI / custom-silicon leader, but the existing starter already fills intended single-name exposure. | 4% |
| EIS | Hold | Momentum is respectable, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Hold | Hedge only; current alpha opportunity remains in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing high-liquidity quality position in the universe if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and lower-quality earnings mix still make it inferior to core tech leaders. | 0% |
| META | Sell | Still lagging GOOG and the semiconductor leaders; fallback news / sentiment remains less constructive. | 0% |
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
- Live Alpaca state shows the book is still **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,981.05 equity**, **$7,618.05 cash**, and about **23.7% gross exposure**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership still favors **SOXX / AVGO / GOOG / QTUM / QQQ**, while **HOOD / META / SHLD / GLD** remain weaker.
- No new tactical trade is authorized while the market is **closed** and several quotes remain **thin after hours**.
- **GOOG** remains the only active next-session buy candidate.
- **Prompt review result:** no prompt edit applied this run; the prompt is still serviceable and no safe, high-signal improvement was identified that justified changing live trading instructions.

## 10-Minute Tactical Cycle Summary
- **Action:** Reviewed the live book, refreshed quotes for AVGO / EIS / GLD / GOOG / HOOD / META / NVDA / QQQ / QTUM / RKLB / SHLD / SOXX / VOO / ARKX, checked symbol-specific Google News RSS for GOOG / AVGO / SOXX / QQQ / NVDA / META, and confirmed no tradeable trigger with acceptable edge after friction.
- **Holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2; equity $9,981.22; cash $7,618.05; gross exposure ~23.7%.
- **Decision:** No orders placed. GOOG stayed below the buy trigger; all existing positions stayed between trim and stop levels; market remains a hold/cash-preservation setup.
- **Next expected action:** Wait for regular-hours confirmation, especially on GOOG; otherwise continue holding the current leaders and preserve cash until a higher-conviction setup appears.
- **Code / prompt changes:** None this cycle.
