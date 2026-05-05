# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain in a **selective AI / semiconductor-led risk-on regime**, but leadership is narrow and the strongest returns are still concentrated in **SOXX, AVGO, GOOG, QTUM, QQQ, EIS, and RKLB**. The cleanest medium-term trends remain in liquid quality growth, while **HOOD, META, GLD, SHLD, and ARKX** continue to show weaker or less timely relative-strength profiles. That still argues for **concentrated deployment only into the best setups**, not broad exposure.

The live account is still **cash-heavy by design**: equity is **$9,992.71**, cash is **$7,618.05**, and gross long exposure is only about **23.8%** of equity. The market is currently **closed**, and several Alpaca latest bars are clearly **thin / stale after-hours** — especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX** — so any tactical action next session must require **regular-hours confirmation**, plus a **second-source quote check** for stale names before trading.

## Goal Check
- **Portfolio since inception:** **-0.08%** (**$9,991.64** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same tradable window:** **0.00%** (first post-inception close **718.01** on **2026-05-04** vs latest close **718.01** on **2026-05-04**)
- **Status:** **Off track — absolute return is still slightly negative, and the benchmark window is still too short / flat to show durable outperformance.**

## Portfolio State
- **Equity:** $9,992.71
- **Cash:** $7,618.05
- **Buying power:** $17,610.76
- **Gross exposure:** ~23.8%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-05T00:01:20.560800809-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$416.83** | unrealized P&L **-$0.12** (-0.03%) | allocation **4.17%**
  - **QQQ:** 1 share @ 673.26 | market value **$674.69** | unrealized P&L **+$1.43** (+0.21%) | allocation **6.75%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** (0.00%) | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.68** | unrealized P&L **-$0.20** (-0.25%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$928.46** | unrealized P&L **-$8.40** (-0.90%) | allocation **9.29%**
- **Overall unrealized P&L:** **-$7.29**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol AVGO`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **Benchmark fallback:** **Yahoo Finance chart API** for **SPY**
- **News / search fallback:** **Google News RSS** because no direct Google Search tool surfaced in this workspace
- **Investor-move coverage quality:** **insufficient / sparse** this cycle; do not force a thesis from it
- **Raw artifacts from this cycle:**
  - `temp_files/fmp_probe_avgo_2026-05-05T04-01-17Z.txt`
  - `temp_files/alpaca_account_hourly_2026-05-05T04-01-17Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T04-01-17Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T04-01-17Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T04-01-17Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T04-01-34-423Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T04-01-34-423Z.csv`
  - `temp_files/tech_levels_2026-05-05T04-01-34-423Z.json`
  - `temp_files/news_rss/macro_2026-05-05T04-01-17Z.xml`
  - `temp_files/news_rss/goog_2026-05-05T04-01-17Z.xml`
  - `temp_files/news_rss/semis_2026-05-05T04-01-17Z.xml`
  - `temp_files/news_rss/hood_2026-05-05T04-01-17Z.xml`
  - `temp_files/news_rss/investors_2026-05-05T04-01-17Z.xml`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- Best **6m** performers: **SOXX +50.73%**, **GOOG +34.71%**, **EIS +29.67%**, **RKLB +27.52%**, **QTUM +17.89%**
- Weak / broken **3m-6m** names: **HOOD -14.86% / -47.85%**, **META -13.59% / -5.85%**, **SHLD -8.54% / -0.34%**, **GLD -2.91% / +12.66%**, **ARKX +2.65% / +3.67%**
- Best **1y** performers: **RKLB +249.33%**, **SOXX +143.15%**, **GOOG +128.96%**, **AVGO +104.53%**, **QTUM +74.16%**

## Fresh External Context
- **Macro / tape:** Google News RSS fallback remains broadly consistent with a **narrow AI-led market**, with Reuters headlines alternating between strong AI-spending optimism and concern that leadership is overextended.
- **GOOG:** Reuters coverage remained constructive: **Alphabet revenue beat expectations, cloud momentum stayed strong, and Google is pushing AI agents into enterprise monetization**. GOOG is still the best missing high-liquidity quality position in the universe.
- **AVGO / semis / SOXX:** Reuters fallback stayed constructive on **Broadcom custom-chip demand and continued AI infrastructure spending**, which supports the existing semi sleeve, but the group is extended enough that **holding winners beats chasing strength**.
- **HOOD:** fallback coverage was weaker and mixed; Reuters-linked results suggested the stock sold off on a **revenue shortfall narrative**, reinforcing avoidance.
- **Top-investor context:** fallback coverage for Buffett / Ackman / Burry / Dalio / Cathie Wood was too sparse to be decision-useful this cycle.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many broker bars are thin, **do not** use after-hours prints as breakout / breakdown confirmation.
3. **Hold all existing positions** while they remain above refreshed risk levels; do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until the account turns positive and a clearer high-conviction setup appears.
5. The only active fresh-buy candidate for the next regular session remains **GOOG**, but only on **regular-hours confirmation** and preferably with a **second-source quote check**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI/custom-silicon leader; existing starter already fills intended exposure. | 4% |
| EIS | Hold | Trend is decent, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Sell | Hedge-only vehicle; current alpha opportunity remains in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing high-liquidity quality position in the universe if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and lower-quality setup than core tech leaders. | 0% |
| META | Sell | Still lagging GOOG and the semiconductor leaders on trend quality. | 0% |
| NVDA | Hold | Structural AI leader, but less timely than GOOG and somewhat redundant versus current semi exposure. | 0% |
| QQQ | Hold | Existing 1-share position is already near intended broad-growth allocation. | 7% |
| QTUM | Hold | Existing position remains a valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite position. | 1% |
| SHLD | Sell | Defense theme remains lower priority than AI / growth leadership. | 0% |
| SOXX | Hold | Strongest sector-level AI / semiconductor expression; current size is near target. | 9% |
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
- If **Google Search** is unavailable from the workspace, acceptable fallbacks include **Google News RSS**, **Yahoo Finance chart data**, and other public feeds, but their results must be relevance-checked before they influence trades.
- **After-hours Alpaca latest bars can show very low trade counts even for liquid ETFs; use regular-hours confirmation before treating those prints as actionable breakouts or breakdowns.**
- **Rewrite top-level tactical state each hourly cycle instead of leaving conflicting append-only notes that disagree with live holdings.**
- If fallback investor / analyst coverage is stale or noisy, explicitly say the coverage was insufficient rather than forcing a thesis from weak evidence.
- A thin after-hours broker print in a normally liquid name (for example **GOOG** this run) is enough to require either **regular-hours confirmation** or a **second-source quote check** before enabling tactical action.
- If the fallback market-snapshot artifact uses the exchange-session date instead of the local run date, keep the file and document the date mismatch rather than discarding usable data.
- **The FMP CLI currently exits successfully even when `FMP_API_KEY` is missing; inspect its output content, not just the shell exit code, before assuming the data is usable.**
- If fallback news returns only broad narrative headlines, use it as regime context only; do **not** let it override price action or quote quality.

## Last Run Summary
- Refreshed the live Alpaca account, positions, and latest prices for the full tactical universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,992.71 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Live prices this cycle: **AVGO 416.83, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 674.69, QTUM 137.00, RKLB 80.68, SHLD 68.05, SOXX 464.23, VOO 660.10, ARKX 32.55**.
- **No orders were placed**: the market is still closed, GOOG did not trigger a regular-hours buy setup, and the held names are still inside their action bands.
- **GOOG** remains the only active next-session buy candidate; existing longs remain on hold pending regular-session confirmation.
- Confirmed **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the fallback quote / context sources only.
- **Prompt review result:** no prompt edit applied this run; no safe, high-signal improvement justified changing live trading instructions.

## 2026-05-05 Tactical Execution Summary
- **What changed:** no orders were placed; portfolio holdings were unchanged.
- **Live holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Current prices used:** AVGO 416.58, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 672.25, QTUM 135.63, RKLB 80.29, SHLD 68.05, SOXX 460.76, VOO 660.10, ARKX 32.55.
- **Strategy:** stay long the existing AI / semiconductor leaders, keep cash high, and wait for regular-hours confirmation before considering a new GOOG entry or any trims.
- **Next expected action:** act only if GOOG reclaims the documented entry zones during regular hours or if an existing holding breaks its stop / trim threshold with confirmation.
- **Code / prompt changes:** none this cycle.

## 2026-05-05 Tactical Execution Summary — 00:30 ET Refresh
- **What changed:** refreshed live brokerage state and news checks; no orders were placed.
- **Live holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Account snapshot:** equity **$9,992.27**, cash **$7,618.05**, buying power **$17,610.32**.
- **Live prices used:** AVGO 416.51, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 672.25, QTUM 135.63, RKLB 80.29, SHLD 68.05, SOXX 460.76, VOO 660.10, ARKX 32.55.
- **Strategy:** continue holding the existing AI / semiconductor sleeve, preserve cash, and wait for regular-hours confirmation.
- **Next expected action:** buy GOOG only if it triggers the documented regular-session conditions; otherwise do nothing.
- **Code / prompt changes:** none.

## 2026-05-05 Tactical Execution Summary — 01:05 ET Refresh
- **What changed:** refreshed the live Alpaca account, positions, and quotes; no orders were placed.
- **Live holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Account snapshot:** equity **$9,992.00**, cash **$7,618.05**, buying power **$17,610.05**.
- **Latest prices used:** AVGO **416.51**, EIS **132.54**, GLD **414.26**, GOOG **379.03**, HOOD **76.56**, META **609.52**, NVDA **197.86**, QQQ **674.24**, QTUM **137.00**, RKLB **80.61**, SHLD **68.05**, SOXX **464.23**, VOO **660.10**, ARKX **32.55**.
- **Strategy:** remain concentrated in the current AI / semiconductor leaders, keep cash high, and ignore thin after-hours prints until regular-hours confirmation returns.
- **Next expected action:** only act if GOOG re-enters its regular-session breakout / pullback-reclaim setup or if a held name hits a confirmed stop/trim level.
- **Code / prompt changes:** none.

## 2026-05-05 Tactical Execution Summary — 00:50 ET Refresh
- **What changed:** refreshed the live Alpaca account, positions, quotes, and news check; no orders were placed.
- **Live holdings:** AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2.
- **Account snapshot:** equity **$9,992.69**, cash **$7,618.05**, buying power **$17,610.74**.
- **Latest prices used:** AVGO **417.06**, EIS **132.54**, GLD **414.26**, GOOG **379.03**, HOOD **76.56**, META **609.52**, NVDA **197.86**, QQQ **674.50**, QTUM **137.00**, RKLB **80.62**, SHLD **68.05**, SOXX **464.23**, VOO **660.10**, ARKX **32.55**.
- **News check:** Google News / Reuters coverage for GOOG stayed constructive; no adverse catalyst surfaced.
- **Strategy:** keep the existing AI / semiconductor sleeve, preserve cash, and wait for regular-hours confirmation instead of acting on thin after-hours prints.
- **Next expected action:** buy GOOG only if regular-hours price action clears the documented trigger zones; otherwise hold the current book.
- **Code / prompt changes:** none.
