# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities still show a **selective risk-on** regime led by **semiconductors, AI infrastructure, and large-cap growth**, but the tape now carries a higher macro-volatility overlay from **rising yields / firm dollar pressure** and **Middle East tension headlines**. Multi-timeframe relative strength across the full universe still favors **SOXX, AVGO, GOOG, QTUM, QQQ, and RKLB**, while **HOOD, META, SHLD, and GLD** remain weaker on the 3-month trend. That keeps the core thesis intact: stay with liquid AI / growth leadership, avoid forcing rotation into laggards, and keep enough cash to absorb macro shocks.

The live account remains correctly positioned for that regime: a **small leadership basket with high cash**. Equity is **$9,980.01**, cash is **$7,618.05**, and gross exposure is only about **23.7%**, so there is still no reason to force risk. The market is currently **closed**, and multiple Alpaca after-hours quotes were **thin / low-trade-count**—especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX**—so the next tactical cycle must require **regular-hours confirmation**, with a **second source check** for any symbol whose broker quote looks stale or illiquid.

## Portfolio State
- **Equity:** $9,980.01
- **Cash:** $7,618.05
- **Buying power:** $17,598.06
- **Gross exposure:** ~23.7%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-04T17:13:04-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value $416.05 | unrealized P&L **-$0.90** (-0.22%) | allocation **4.17%**
  - **QQQ:** 1 share @ 673.26 | market value $672.11 | unrealized P&L **-$1.15** (-0.17%) | allocation **6.73%**
  - **QTUM:** 2 shares @ 137.00 | market value $271.42 | unrealized P&L **-$2.58** (-0.94%) | allocation **2.72%**
  - **RKLB:** 1 share @ 80.88 | market value $80.34 | unrealized P&L **-$0.54** (-0.67%) | allocation **0.80%**
  - **SOXX:** 2 shares @ 468.43 | market value $922.04 | unrealized P&L **-$14.82** (-1.58%) | allocation **9.24%**
- **Overall unrealized P&L:** **-$19.99**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Yahoo Finance RSS** for symbol news and **Bing News RSS** for investor / macro / analyst context because no direct Google Search tool surfaced in this workspace
- **Fallback quality note:** symbol headlines were usable, but investor / analyst fallback coverage stayed **noisy / mixed** and was **not strong enough to change positioning by itself**
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05.txt`
  - `temp_files/fmp_probe_qqq_2026-05-05.txt`
  - `temp_files/hourly_research_output_2026-05-05.json`
  - `temp_files/hourly_market_snapshot_yahoo_latest.json`
  - `temp_files/hourly_market_snapshot_yahoo_latest.csv`
  - `temp_files/tech_levels_2026-05-05.json`
  - `temp_files/tech_levels_latest.json`
  - `temp_files/news_rss/hourly_news_summary_latest.json`
  - `temp_files/investor_news_latest.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +34.28%**, **AVGO +32.46%**, **GOOG +27.54%**, **QTUM +22.69%**, **RKLB +18.68%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- Weak / broken **3m** names: **HOOD -14.86%**, **META -13.59%**, **SHLD -8.54%**, **GLD -2.91%**
- Best **6m** performers: **SOXX +49.83%**, **GOOG +33.62%**, **RKLB +30.93%**, **EIS +28.36%**, **QTUM +19.10%**
- Best **1y** performers: **RKLB +257.25%**, **SOXX +145.03%**, **GOOG +128.63%**, **AVGO +107.50%**, **QTUM +74.81%**

## Fresh External Context
- **Macro / tape:** yields and the dollar stayed firm enough to pressure **gold**, while **AI / semiconductor leadership** remained the strongest relative trend in the universe.
- **GOOG:** remains the cleanest missing core position in the book; fresh fallback headlines stayed constructive / neutral overall, but the Alpaca after-hours quote was too thin to authorize a blind trigger.
- **SOXX / AVGO:** still the best broad and single-name semiconductor expressions in the allowed universe, but the account is already sufficiently exposed.
- **QQQ:** still preferable to **VOO** for alpha generation while growth leadership holds.
- **QTUM / RKLB:** valid satellites, but secondary to core semis / mega-cap growth.
- **HOOD / META:** still lagging on the intermediate trend; neither earned a tactical upgrade.
- **GLD:** weaker short term as yields / dollar strength offset geopolitical hedge demand.
- **EIS:** momentum is good on paper, but liquidity / stale-quote risk remains too high for action.
- **Top-investor context:** Bing fallback remained stale / noisy; no fresh high-conviction investor move justified a portfolio change.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many after-hours quotes were thin, do **not** treat those prints as breakout or breakdown confirmation.
3. **Hold all existing positions** while they remain above refreshed risk levels; do **not** average down and do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep overall gross exposure capped around **30%** and preserve at least **70% cash**.
5. The only active new-buy candidate for the next regular session remains **GOOG**, but only on **regular-hours confirmation** and preferably with a **second-source quote check** because the latest broker after-hours print was thin.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI / custom-silicon leader, but current starter already fills intended exposure. | 4% |
| EIS | Hold | Momentum is respectable, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Hold | Hedge only; current yield / dollar backdrop favors growth over gold. | 0% |
| GOOG | Buy | Best missing high-liquidity quality position in the universe if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and crypto-linked earnings quality remain inferior. | 0% |
| META | Sell | Still lagging GOOG and the chip leaders; mixed headline tone did not improve the setup. | 0% |
| NVDA | Hold | Structural leader, but redundant with current semiconductor exposure. | 0% |
| QQQ | Hold | Existing 1-share position is already near the intended broad-growth allocation. | 7% |
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
- If **Google Search / Google News RSS** is unavailable from the workspace, acceptable fallbacks include **Yahoo Finance RSS** and selective **Bing News RSS**, but their results must be relevance-checked before they influence trades.
- **After-hours Alpaca latest bars can show very low trade counts even for liquid ETFs; use regular-hours confirmation before treating those prints as actionable breakouts or breakdowns.**
- **Rewrite top-level tactical state each hourly cycle instead of leaving conflicting append-only notes that disagree with live holdings.**
- If fallback investor / analyst coverage is stale or noisy, explicitly say the coverage was insufficient rather than forcing a thesis from weak evidence.
- A thin after-hours broker print in a normally liquid name (for example **GOOG** this run) is enough to require either **regular-hours confirmation** or a **second-source quote check** before enabling tactical action.

## Last Run Summary
- Live Alpaca state shows the book is still **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,980.01 equity**, **$7,618.05 cash**, and about **23.7% gross exposure**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership still favors **SOXX / AVGO / GOOG / QTUM / QQQ**, while **HOOD / META / SHLD / GLD** remain weaker.
- Because the market is **closed** and several quotes are **thin after hours**, no new tactical trade is authorized right now; **GOOG** remains the only active next-session buy candidate.
- **Prompt review result:** no prompt edit applied this run; the prompt is serviceable and no safe, high-signal improvement was identified that justified changing live trading instructions.
