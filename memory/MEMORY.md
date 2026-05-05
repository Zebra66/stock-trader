# Hourly Macro Memory
*Updated 2026-05-05 04:13 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The account is back **slightly above breakeven**, but the edge is still **fragile**, so the correct posture remains **selective risk, high cash, and no forced trades outside regular hours**. The strongest durable theme in this universe is still **AI / semiconductor / cloud infrastructure leadership**. Within that theme, **SOXX, AVGO, QQQ, and QTUM** already provide meaningful exposure, while **GOOG** remains the best missing large-cap quality long because recent cloud + AI execution has been stronger than the weaker alternatives in this universe.

This specific run is still **pre-market** and many broker quotes are **thin or stale** overnight, including **GOOG, META, NVDA, QQQ, QTUM, and SOXX**. Reuters fallback headlines show some **macro risk-off pressure tied to Middle East / oil sentiment**, but not enough fresh evidence to justify abandoning the existing growth posture. The next hour should therefore emphasize **confirmation discipline and capital protection** rather than additional deployment.

## Goal Check
- **Portfolio since inception:** **+0.02%** (**$10,001.78** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same tradable window:** **-0.37%** (**720.65** on 2026-05-01 close vs **718.01** on 2026-05-04 close)
- **Status:** **On track — the account is modestly positive in absolute dollars and still ahead of SPY, but the margin is thin and not yet durable.**

## Recent Performance Review
- **1D portfolio:** about **+0.02%** using Alpaca `last_equity` (**10000.00**) vs current equity (**10001.78**).
- **1D / 1W / 2W benchmark review:** only partially reliable on this pre-market cycle because the account is very new and the workflow still lacks broker portfolio-history support.
- **What is working:** concentrated exposure in stronger AI / semiconductor expressions, restrained turnover, and high cash while signal quality is mixed.
- **What is not working:** edge is still too small; overnight quote quality is poor in several normally liquid names, making aggressive tactical action a bad tradeoff.
- **What must change at the next regular session if relative / absolute performance slips:** reduce low-conviction turnover further, keep concentration only in true leaders, and avoid replacing strong held exposure with weaker narrative names.

## Portfolio State
- **Equity:** **$10,001.78**
- **Cash:** **$7,618.05**
- **Buying power:** **$17,619.83**
- **Gross exposure:** about **23.8%**
- **Market status:** **closed**
- **Alpaca clock timestamp:** **2026-05-05T04:13:31.614851999-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$419.19** | unrealized P&L **+$2.24** | allocation **4.19%**
  - **QQQ:** 1 share @ 673.26 | market value **$676.59** | unrealized P&L **+$3.33** | allocation **6.76%**
  - **QTUM:** 2 shares @ 137.00 | market value **$273.06** | unrealized P&L **-$0.94** | allocation **2.73%**
  - **RKLB:** 1 share @ 80.88 | market value **$81.24** | unrealized P&L **+$0.36** | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$933.68** | unrealized P&L **-$3.18** | allocation **9.34%**
- **Overall unrealized P&L:** **+$1.81**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe.
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**.
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com`.
- **Brokerage / account / positions / prices:** **Alpaca CLI**.
- **Benchmark fallback:** **Yahoo Finance chart API** for **SPY**.
- **News / search fallback:** **Google News RSS** queried from Bun.
- **News quality note:** **GOOG** and **HOOD** had usable recent Reuters-backed items; broad **macro**, **semiconductor basket**, **RKLB**, and **top-investor move** coverage was sparse or stale enough that it should be treated as **background only**.
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T08-13-04Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T08-13-04Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T08-13-04Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T08-13-04Z.txt`
  - `temp_files/fmp_all_2026-05-05T08-13-04Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T08-14-07-210Z.json`
  - `temp_files/yahoo_snapshot_2026-05-05T08-14-07-210Z.csv`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T08-14-47-808Z.json`
  - `temp_files/reuters_news_scan_2026-05-05T08-15Z.txt`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- **Best 1m performers:** **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- **Best 3m performers:** **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- **Weak 1w / 3m names:** **META -10.05% / -13.59%**, **HOOD -8.81% / -14.86%**, **NVDA -8.37% / +6.93%**, **GLD -3.53% / -2.91%**, **SHLD +0.89% / -8.54%**

## Fresh External Context
### Actionable now
- **GOOG:** still the best approved fresh-long candidate. Recent Reuters-backed coverage remains constructive on cloud / AI monetization, but the latest Alpaca overnight bar had only **1 trade**, so no tactical order should rely on that print alone.
- **Current holdings:** **AVGO / QQQ / SOXX / QTUM / RKLB** all remain inside acceptable hold bands; no forced trim or stop is justified while the market is closed.

### Worth monitoring
- **Macro risk sentiment:** Reuters fallback headlines point to equity pressure tied to Middle East worries and oil sensitivity. This is a watch item for multiple compression, not yet a reason to rotate into GLD.
- **NVDA relative timing:** still a structural winner, but current short-term timing remains weaker than the held semiconductor basket plus GOOG.
- **RKLB:** acceptable only as a tiny satellite; recent fallback news was too thin to justify upgrading it to a core position.

### Interesting but not actionable yet
- **Top-investor move headlines:** fallback coverage was insufficient this cycle.
- **Broad semiconductor / AVGO Reuters headlines:** available items were older than 7 calendar days, so they are background only.
- **Analyst-estimate tooling:** still blocked by missing **`FMP_API_KEY`**, so no fresh analyst-estimate data was available from the intended source.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and several overnight broker bars are **thin / stale**, require **regular-hours confirmation** before any tactical action.
3. **Hold all existing positions** while they remain above refreshed stop levels; do **not** add to existing holdings this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until the account shows a more durable absolute gain.
5. The only active fresh-buy candidate remains **GOOG**, and only on **regular-hours confirmation** or **second-source quote confirmation**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; current sleeve is already filled. | 4% |
| EIS | Hold | Trend is decent, but liquidity / quote quality remain too weak. | 0% |
| GLD | Sell | Growth leadership still ranks above gold; macro stress is not yet strong enough to rotate. | 0% |
| GOOG | Buy | Best missing liquid-quality long if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Recent Reuters-backed earnings coverage stayed weak and trend quality lags. | 0% |
| META | Sell | AI spend concerns plus weaker relative trend make it inferior to GOOG / semis here. | 0% |
| NVDA | Hold | Structural leader, but current semi exposure is already sufficient and timing is not best-in-universe. | 0% |
| QQQ | Hold | Existing broad-growth exposure remains near intended size. | 7% |
| QTUM | Hold | Valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense theme still ranks below AI / growth leadership. | 0% |
| SOXX | Hold | Best sector-level semi expression already near target size. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Current Holdings Notes
- **Core held risk:** **AVGO, QQQ, SOXX, QTUM**
- **Satellite held risk:** **RKLB** only
- **Largest current drag:** **SOXX**, but still inside a valid broader uptrend and above key recent support

## Near-Term Watchlist
- **GOOG:** only approved fresh-long candidate for the next regular session
- **NVDA:** monitor only; no new capital while current semi exposure is already meaningful
- **RKLB:** keep under observation, but do not increase conviction without better news and liquidity context

## Macro Themes To Monitor
- **AI capex / cloud monetization:** still actionable via **GOOG / AVGO / SOXX / QQQ / QTUM**
- **Geopolitical oil shock risk:** monitor for broad growth multiple compression
- **Space economy / defense:** interesting, but still secondary to the AI leadership theme
- **Analyst / investor commentary:** useful only when recent, dated, and aligned with price action

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
- A thin after-hours print in a normally liquid name is enough to require **regular-hours confirmation** or a **second-source quote check**.
- If Alpaca portfolio history is unavailable, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.

## Last Run Summary
- Refreshed live Alpaca account, positions, clock, and latest prices for the full universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$10,001.78 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Fallback news stayed **constructive for GOOG**, **negative for HOOD**, and **mixed but non-actionable for macro / semis / investor-move searches**.
- **No orders were placed** because the market is closed and many broker quotes were too thin for action.
- **Prompt review:** no prompt change made this cycle; current prompt already captures the main stale-data and fallback-news failure modes.
- **Strategy:** hold the current AI / semiconductor sleeve, keep cash high, and only act on a **regular-hours GOOG trigger** or a **confirmed stop / trim event** in an existing holding.

## Tactical Execution Summary — 2026-05-05
- **Market state:** still closed, so no orders were eligible.
- **Live account:** equity **$10,002.42**, cash **$7,618.05**, buying power **$17,620.47**.
- **Current holdings:** unchanged at **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
- **Live prices:** AVGO **416.51**, QQQ **672.25**, QTUM **135.63**, RKLB **80.29**, SOXX **460.76**, GOOG **379.03**.
- **Decision:** held all positions; no trim or stop condition was hit, and GOOG remained between its breakout and pullback entry bands.
- **Next expected action:** wait for regular-hours confirmation, then reassess the existing trim / stop bands first and GOOG second.

## Tactical Execution Summary — 2026-05-05
- **Market state:** closed, so no tactical orders were eligible.
- **Live account:** equity **$10,001.86**, cash **$7,618.05**, buying power **$17,619.91**.
- **Current holdings:** unchanged at **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
- **Live prices:** AVGO **418.98**, QQQ **676.47**, QTUM **136.53**, RKLB **81.30**, SOXX **467.00**, GOOG **379.03**, with other universe names refreshed as well.
- **Decision:** held all positions; **GOOG** did not trigger its breakout or pullback confirmation, and overnight prints remained too thin for a new entry.
- **Next expected action:** wait for regular-hours confirmation; first watch the existing trim / stop bands, then reassess **GOOG** if it reclaims **376** on a pullback or clears **384.5** with confirmation.
