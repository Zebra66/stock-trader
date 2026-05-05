# Hourly Macro Memory
*Updated 2026-05-05 03:01 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The tape still favors **selective AI / semiconductor leadership**, but the account is not yet above breakeven, so the correct posture remains **measured risk, high cash, and only high-quality adds**. Within this universe, **GOOG** remains the best missing liquid-quality long because its recent earnings / cloud / AI follow-through is stronger than the laggard cohort, while **SOXX / AVGO / QQQ / QTUM** already provide meaningful semiconductor and growth exposure.

This run was still **overnight / pre-market** and the broker's latest bars for several liquid symbols were **thin or stale**, so the next hour should emphasize **capital protection and confirmation discipline**, not forced deployment. Weak or noisy names such as **HOOD, META, GLD, SHLD, and illiquid EIS** still do not beat the current held basket on trend quality plus execution quality.

## Goal Check
- **Portfolio since inception:** **-0.03%** (**$9,997.22** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same tradable window:** **-0.37%** (**720.65** on 2026-05-01 close vs **718.01** on 2026-05-04 close)
- **Status:** **Off track — absolute return is still negative even though relative performance vs SPY is better.**

## Recent Performance Review
- **1D portfolio:** about **-0.03%** using Alpaca `last_equity` (**10000**) vs current equity (**9997.22**).
- **1D SPY:** about **-0.37%** from **720.65** to **718.01**.
- **1W / 2W portfolio review:** still **not reliable yet** because the account is younger than a full trading week and Alpaca portfolio-history support has not been part of this workflow.
- **What is working:** moderate exposure, concentration in stronger AI / semiconductor expressions, and avoiding weaker setups like HOOD / META / GLD.
- **What is not working:** the account is still slightly red in dollar terms; a few after-hours quotes are too thin to support confident tactical action.
- **What must change at the next regular session:** only deploy new cash into a **confirmed** high-quality leader; keep exposure capped until the account is sustainably back above breakeven.

## Portfolio State
- **Equity:** **$9,997.22**
- **Cash:** **$7,618.05**
- **Buying power:** **$17,615.27**
- **Gross exposure:** about **23.8%**
- **Market status:** **closed**
- **Alpaca clock timestamp:** **2026-05-05T03:01:52.705599816-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$419.18** | unrealized P&L **+$2.23** | allocation **4.19%**
  - **QQQ:** 1 share @ 673.26 | market value **$675.48** | unrealized P&L **+$2.22** | allocation **6.76%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.65** | unrealized P&L **-$0.23** | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$929.86** | unrealized P&L **-$7.00** | allocation **9.30%**
- **Overall unrealized P&L:** **-$2.78**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query2.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **Benchmark fallback:** **Yahoo Finance chart API** for **SPY**
- **News / search fallback:** **Google News RSS** because no direct Google Search tool surfaced in this workspace
- **News quality note:** symbol-specific feeds for **GOOG / HOOD / RKLB** were usable; the **macro** and **top-investor** fallback feeds were noisy / stale enough that they should be treated as **background only**, not trade drivers
- **Raw artifacts from this cycle:**
  - `temp_files/hourly_run_context_2026-05-05T07-01-44Z.txt`
  - `temp_files/fmp_all_2026-05-05T07-01-44Z.txt`
  - `temp_files/alpaca_account_hourly_2026-05-05T07-01-44Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T07-01-44Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T07-01-44Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T07-01-44Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_latest.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T07-01-44Z_latest_copy.csv`
  - `temp_files/tech_levels_2026-05-05T07-01-44Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T07-01-44Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- **Best 1m performers:** **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- **Best 3m performers:** **SOXX +33.76%**, **AVGO +30.29%**, **QTUM +18.29%**, **GOOG +11.51%**, **EIS +9.34%**
- **Best 6m performers:** **SOXX +50.15%**, **GOOG +33.80%**, **RKLB +30.93%**, **EIS +29.65%**, **QTUM +19.82%**
- **Weak 1w / 3m names:** **META -10.05% / -11.68%**, **HOOD -8.81% / -12.08%**, **NVDA -8.37% / +10.06%**, **GLD -3.53% / -8.71%**, **SHLD +0.89% / -10.77%**

## Fresh External Context
### Actionable now
- **GOOG:** the only fresh long candidate still worth authorizing; recent news and price action remain constructive, but the latest Alpaca overnight bar had only **1 trade**, so no tactical order should rely on that print alone.
- **Current holdings:** **AVGO / QQQ / SOXX / QTUM / RKLB** all remain inside acceptable hold bands; no forced trim or stop is justified while the market is closed.

### Worth monitoring
- **RKLB earnings setup:** constructive coverage exists, but this remains a volatile satellite position rather than a core allocation.
- **NVDA relative weakness vs broader semi leadership:** not broken long-term, but weaker short-term than GOOG / SOXX / AVGO on timing.
- **Oil / geopolitics / rates:** still worth monitoring because leadership is narrow and can be derailed by macro shocks.

### Interesting but not actionable yet
- **Top-investor move headlines:** fallback coverage was too stale / noisy this cycle to influence portfolio decisions.
- **Macro RSS headlines:** too many stale or low-signal results; useful only as regime background.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and several overnight broker bars were **thin / stale** — especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, SOXX, and SPY** — require **regular-hours confirmation** before any tactical action.
3. **Hold all existing positions** while they remain above refreshed stop levels; do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until the account is back above breakeven and a clearer edge appears.
5. The only active fresh-buy candidate remains **GOOG**, and only on **regular-hours confirmation** or **second-source quote confirmation**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; current starter already fills intended sleeve. | 4% |
| EIS | Hold | Good trend, but quote quality / liquidity risk still disqualifies it. | 0% |
| GLD | Sell | Current edge remains in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing liquid-quality long if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak post-earnings quality and lower-quality trend. | 0% |
| META | Sell | Lags GOOG and the better semiconductor expressions on trend quality. | 0% |
| NVDA | Hold | Structural leader, but current semi exposure is already sufficient and timing is inferior to GOOG. | 0% |
| QQQ | Hold | Existing broad-growth exposure is already near intended size. | 7% |
| QTUM | Hold | Valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense theme still ranks below AI / growth leadership. | 0% |
| SOXX | Hold | Best sector-level semi expression; size is already near target. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Current Holdings Notes
- **Core held risk:** **AVGO, QQQ, SOXX, QTUM**
- **Satellite held risk:** **RKLB** only
- **Largest drag:** **SOXX**, but still within a valid broader uptrend and above key recent support

## Near-Term Watchlist
- **GOOG:** only approved new long candidate for the next regular session
- **NVDA:** monitor only; not reopened for new capital while current semi exposure is already meaningful
- **RKLB:** constructive context, but keep it a satellite, not a core add

## Macro Themes To Monitor
- **AI capex / cloud monetization:** still actionable via **GOOG / AVGO / SOXX / QQQ / QTUM**
- **Oil / geopolitical stress:** monitor for multiple-compression risk and broader volatility
- **Space economy / defense:** interesting, but still secondary to core AI leadership
- **Analyst and top-investor commentary:** useful only when recent and aligned with price action

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power.
- Commission-free does **not** mean friction-free; include spread, slippage, CAT, SEC sell fees, and FINRA TAF in expected edge.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash and record that source in memory.
- Tactical price levels must be refreshed each hourly cycle; do **not** blindly reuse stale thresholds.
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and update memory immediately.
- For thinner names or stale quotes, require fresh confirmation from a reliable live or second source before taking action.
- If fallback investor / analyst coverage is stale or noisy, explicitly say coverage was insufficient rather than forcing a thesis.
- **Google News RSS fallback can surface stale articles; apply a recency filter and treat stale undated results as non-actionable background only.**
- A thin after-hours print in a normally liquid name is enough to require **regular-hours confirmation** or a **second-source quote check**.
- If Alpaca portfolio history is unavailable, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.

## Last Run Summary
- Refreshed the live Alpaca account, positions, clock, and latest prices for the full universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,997.22 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Re-confirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed using the **Yahoo Finance chart API fallback**.
- News fallback remained **useful for GOOG / HOOD / RKLB**, but **macro** and **investor-move** feeds were too stale / noisy to drive new decisions.
- **No orders were placed** because the market is closed and several latest broker quotes were too thin for action.
- **Prompt review:** added a next-run safeguard so stale fallback news results are explicitly treated as non-actionable.
- **Strategy:** hold the current AI / semiconductor sleeve, keep cash high, and only act on a **regular-hours GOOG trigger** or a **confirmed stop / trim event** in an existing holding.

## Tactical Execution Summary — 2026-05-05 03:00 ET
- **Action taken:** no trades placed; the market remains closed and no trigger was met with enough confirmation to justify action.
- **Live account snapshot:** equity **$9,997.45**, cash **$7,618.05**, buying power **$17,615.50**, gross exposure about **23.8%**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Trigger check:** AVGO, QQQ, SOXX, QTUM, and RKLB remain inside hold bands; **GOOG** stayed below the breakout trigger and did not reclaim the buy zone.
- **Next expected action:** wait for regular-hours confirmation; if GOOG reclaims the breakout zone in-session, reassess a 1-share starter with news / friction checks first.

## Tactical Execution Summary — 2026-05-05
- **Action taken:** no orders placed this cycle because the market is closed and GOOG still lacks regular-hours confirmation.
- **Live account snapshot:** equity **$9,997.76**, cash **$7,618.05**, buying power **$17,615.81**, gross exposure about **23.8%**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Latest prices:** AVGO **419.05**, QQQ **675.63**, QTUM **137.00**, RKLB **80.69**, SOXX **465.17**, GOOG **379.03**.
- **Decision check:** no holding drifted materially from target allocation; GOOG remains below the buy trigger and its quote was thin enough to avoid forcing action.
- **Next expected action:** keep cash high, wait for a regular-session GOOG confirmation or a fresh stop/trim trigger in an existing position.

## Tactical Execution Summary — 2026-05-05
- **Action taken:** no orders placed this cycle; the market is still closed and GOOG did not reclaim the buy zone.
- **Live account snapshot:** equity **$9,997.60**, cash **$7,618.05**, buying power **$17,615.65**, gross exposure about **23.8%**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Price / trigger check:** AVGO **418.9**, QQQ **675.54**, QTUM **137.0**, RKLB **80.69**, SOXX **465.21**, GOOG **379.03**; none of the existing holdings hit a trim / stop level and GOOG stayed below the 384.5 breakout trigger.
- **News check:** quick GOOG news scan showed post-earnings coverage and routine ownership / analyst items, but no fresh adverse catalyst that would force action.
- **Next expected action:** continue to wait for regular-hours confirmation; if GOOG reclaims the breakout zone in-session, reassess a 1-share starter with a fresh friction check first.
- **Portfolio / code / prompt changes:** none this cycle.

## Tactical Execution Summary — 2026-05-05 04:xx ET
- **Action taken:** no orders placed this cycle; the market is closed and no condition cleared the confirmation / friction filters.
- **Live account snapshot:** equity **$9,999.42**, cash **$7,618.05**, buying power **$17,617.47**, gross exposure about **23.8%**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Latest prices:** AVGO **419.19**, QQQ **676.28**, QTUM **137.00**, RKLB **80.80**, SOXX **465.55**, GOOG **379.03**, SPY **717.80**.
- **Decision check:** no holding drifted enough to justify a trim or resize; GOOG remained below the buy trigger and its overnight print was still too thin to trust blindly.
- **Next expected action:** keep cash high and wait for regular-hours GOOG confirmation or a fresh stop / trim trigger in an existing position.
- **Portfolio / code / prompt changes:** none this cycle.
