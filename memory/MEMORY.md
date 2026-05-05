# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities still show a **selective AI / semiconductor-led risk-on backdrop**, with the strongest medium-term trends in **SOXX, AVGO, GOOG, QTUM, QQQ, EIS, and RKLB**. The best relative-strength profiles remain concentrated in high-liquidity growth leaders, while **GLD, HOOD, META, SHLD, and ARKX** continue to lag on the more decision-useful 3m-6m windows. That still argues for a concentrated, quality-first posture rather than broad deployment.

The current book remains consistent with that view: **small existing exposure in leaders plus large cash reserves**. Live equity is **$9,991.60**, cash is **$7,618.05**, and gross long exposure is about **23.8%** of equity. The market is currently **closed**, and several Alpaca latest bars remain clearly **thin / stale after hours** — especially **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX** — so the next tactical cycle must continue to require **regular-hours confirmation**, plus a **second-source quote check** for any stale symbol before acting.

## Goal Check
- **Portfolio since inception:** **-0.11%** (**$9,989.00** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same tradable window:** **0.00%** (first post-inception close **718.01** on **2026-05-04** vs latest close **718.01** on **2026-05-04**)
- **Status:** **Off track — absolute return is still slightly negative, and the benchmark window is effectively flat / very short, so there is not yet evidence of durable outperformance.**

## Portfolio State
- **Equity:** $9,991.60
- **Cash:** $7,618.05
- **Buying power:** $17,609.65
- **Gross exposure:** ~23.8%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-05T03:30:37Z
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$416.50** | unrealized P&L **-$0.45** (-0.11%) | allocation **4.17%**
  - **QQQ:** 1 share @ 673.26 | market value **$674.38** | unrealized P&L **+$1.12** (+0.17%) | allocation **6.75%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** (0.00%) | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.67** | unrealized P&L **-$0.21** (-0.26%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$928.00** | unrealized P&L **-$8.86** (-0.95%) | allocation **9.29%**
- **Overall unrealized P&L:** **-$8.40**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol AVGO`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` / `query2.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **Benchmark fallback:** **Yahoo Finance chart API** for **SPY**
- **News / search fallback:** **Google News RSS** plus **Bing News RSS** because no direct Google Search tool surfaced in this workspace
- **Analyst / investor coverage quality:** usable for **GOOG** and the broader **semiconductor / AI** theme, but **investor-move coverage was sparse** and **symbol-level analyst coverage for several laggards was too noisy / incomplete** to drive trades by itself
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-04T23-01-31.json`
  - `temp_files/alpaca_positions_hourly_2026-05-04T23-01-31.json`
  - `temp_files/alpaca_clock_hourly_2026-05-04T23-01-31.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-04T23-01-31.txt`
  - `temp_files/fmp_probe_avgo_2026-05-04T23-01-31.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05Tcurrent.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05Tcurrent.csv`
  - `temp_files/tech_levels_latest.json`
  - `temp_files/spy_since_inception_2026-05-04T23-01-31.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-04T23-01-31.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +9.25%**, **SOXX +5.32%**, **QTUM +5.20%**, **AVGO +4.17%**, **EIS +4.11%**
- Best **1m** performers: **SOXX +34.28%**, **AVGO +32.46%**, **GOOG +27.54%**, **QTUM +22.69%**, **RKLB +18.68%**
- Best **3m** performers: **SOXX +33.68%**, **AVGO +30.02%**, **QTUM +18.05%**, **GOOG +11.43%**, **NVDA +10.06%**
- Best **6m** performers: **SOXX +55.96%**, **RKLB +41.97%**, **GOOG +36.53%**, **EIS +30.69%**, **QTUM +23.66%**
- Weak / broken **3m-6m** names: **HOOD -12.08% / -44.04%**, **META -11.75% / -2.70%**, **SHLD -10.77% / +1.14%**, **GLD -8.71% / +14.46%**, **ARKX -1.04% / +8.17%**
- Best **1y** performers: **RKLB +257.25%**, **SOXX +145.03%**, **GOOG +128.63%**, **AVGO +107.50%**, **QTUM +74.81%**

## Fresh External Context
- **Macro / tape:** fallback news remains broadly consistent with an **AI-capex and semiconductor-led tape**, but several headlines also warn that the group is extended and increasingly dependent on strong execution from the megacap / hyperscaler complex.
- **GOOG:** still the strongest missing core position in the universe. Reuters coverage highlighted **Alphabet revenue beating expectations, record cloud-unit performance, and AI-driven cloud momentum**. Yahoo regular close (**379.64**) broadly confirmed the thin Alpaca after-hours print (**379.03**), but tactical action should still wait for **regular-hours confirmation**.
- **AVGO / SOXX / semis:** external coverage stayed constructive on **AI infrastructure demand**, and AVGO remains one of the strongest single-name trends in the universe. However, the group is extended enough that the right posture is still **hold winners, avoid chasing**.
- **HOOD:** some fallback analyst headlines suggest targets were trimmed despite still-optimistic upside framing; that matches the weaker intermediate trend and reinforces **avoidance** for now.
- **META:** news / analyst coverage was not fresh enough to override price weakness. Relative trend quality still lags **GOOG** and the semiconductor leaders.
- **Top-investor context:** search fallback coverage was too sparse / noisy to justify acting on investor-move headlines this cycle.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many broker latest bars were thin, do **not** use those prints as breakout or breakdown confirmation.
3. **Hold all existing positions** while they remain above refreshed risk levels; do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until either performance turns positive and/or a clearer high-conviction setup appears.
5. The only active new-buy candidate for the next regular session remains **GOOG**, but only on **regular-hours confirmation** and preferably with a **second-source quote check**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI/custom-silicon leader; existing starter already fills intended single-name exposure. | 4% |
| EIS | Hold | Trend is respectable, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Sell | Hedge only; current alpha opportunity remains in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing high-liquidity quality position in the universe if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and lower-quality setup than core tech leaders. | 0% |
| META | Sell | Still lagging GOOG and the semiconductor leaders on trend quality. | 0% |
| NVDA | Hold | Structural AI leader, but less timely than GOOG and somewhat redundant versus current semi exposure. | 0% |
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
- **The FMP CLI currently exits successfully even when `FMP_API_KEY` is missing; inspect its output content, not just the shell exit code, before assuming the data is usable.**

## Last Run Summary
- Refreshed the live Alpaca account, positions, market clock, and latest prices for the full universe.
- Confirmed the book is still **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,989.00 equity**, **$7,618.05 cash**, and about **23.7% gross exposure**.
- Confirmed **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback** plus **Google News RSS / Bing News RSS** for external context.
- Leadership still favors **SOXX / AVGO / GOOG / QTUM / QQQ**, while **GLD / HOOD / META / SHLD** remain weaker on the medium-term trend windows.
- No new tactical trade is authorized while the market is **closed** and several quotes remain **thin after hours**.
- **GOOG** remains the only active next-session buy candidate.
- **Prompt review result:** no prompt edit applied this run; no safe, high-signal improvement justified changing live trading instructions.

## 2026-05-05 Tactical Cycle Summary
- Refreshed the live Alpaca snapshot: **$9,989.60 equity**, **$7,618.05 cash**, **$17,607.65 buying power**, and roughly **23.7% gross exposure**.
- Live holdings remain **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**; refreshed prices were **AVGO 416.22**, **QQQ 674.13**, **QTUM 137.00**, **RKLB 80.62**, and **SOXX 463.29**.
- The market stayed **closed** and several watchlist prints remained thin / stale after hours, including **GOOG 379.03** and other low-trade-count names.
- No buy, sell, trim, or stop condition cleared the required friction-adjusted edge threshold, so **no orders were submitted**.
- Next expected action: keep cash high and wait for **regular-hours confirmation**; **GOOG** remains the first candidate on a breakout above **385.0** or a same-session reclaim of **376.0** from **372.0-375.0**.
- Code / prompt changes this cycle: **none**.

## Most Recent Tactical Status
- Tactical execution remained **no-trade** because the market is still **closed** and live breakout / breakdown confirmation is unavailable.
- Current holdings remain **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with cash still the dominant position.
- Latest live snapshot: **$9,991.67 equity**, **$7,618.05 cash**, **$17,609.72 buying power**.
- Next expected action: wait for the next regular session and only act if **GOOG** confirms above the refreshed breakout / reclaim levels, or if an existing holding hits a refreshed trim / stop threshold with quote-quality confirmation.
- Code / prompt changes this cycle: **none**.

## 2026-05-05 Tactical Cycle Summary (current run)
- Refreshed the live Alpaca account, positions, and latest prices for the full actionable universe.
- Account snapshot: **$9,991.67 equity**, **$7,618.05 cash**, **$17,609.72 buying power**; holdings remain **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
- Latest prices: **AVGO 416.50, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 674.37, QTUM 137.00, RKLB 80.75, SHLD 68.05, SOXX 464.00, VOO 660.10, ARKX 32.55**.
- The market stayed **closed** and no buy, sell, trim, or stop condition cleared the friction-adjusted threshold, so **no orders were submitted**.
- Next expected action: keep cash high and wait for **regular-hours confirmation**; **GOOG** remains the first candidate for entry and the existing holdings remain on hold.
- Code / prompt changes this cycle: **none**.

## 2026-05-05 Tactical Cycle Summary
- Refreshed live account, positions, latest prices, and Google News RSS context for the actionable universe.
- Confirmed the market remains **closed**, with thin after-hours prints on several names; **GOOG 379.03** stayed below the **385.0** breakout trigger.
- No trade met the friction-adjusted threshold, so the book remained unchanged.
- Next expected action: stay in cash-heavy posture and wait for **regular-hours confirmation** before any GOOG entry or existing-position trim.
- Code / prompt changes this cycle: **none**.

## 2026-05-05 Tactical Cycle Summary (current run)
- Refreshed the live Alpaca snapshot: **$9,991.60 equity**, **$7,618.05 cash**, **$17,609.65 buying power**, and roughly **23.8% gross exposure**.
- Live holdings remain **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**; refreshed prices were **AVGO 416.50**, **QQQ 674.38**, **QTUM 137.00**, **RKLB 80.67**, and **SOXX 464.00**.
- The market stayed **closed** and **GOOG** remained thin at **379.03**; no buy, sell, trim, or stop condition cleared the friction-adjusted threshold.
- No orders were submitted this cycle.
- Next expected action: wait for regular-hours confirmation, with **GOOG** still the first candidate for entry and the existing holdings still on hold.
- Code / prompt changes this cycle: **none**.

## 2026-05-05 Tactical Cycle Summary (current run)
- Refreshed the live Alpaca account, positions, latest prices, and GOOG news context for the full actionable universe.
- Account snapshot: **$9,991.53 equity**, **$7,618.05 cash**, **$17,609.58 buying power**; holdings remain **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
- Latest prices: **AVGO 416.51, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 672.25, QTUM 135.63, RKLB 80.29, SHLD 68.05, SOXX 460.76, VOO 660.10, ARKX 32.55**.
- Market stayed closed; **GOOG** remained below the **385.0** breakout trigger and the held positions stayed inside their trim / stop bands, so **no orders were submitted**.
- Next expected action: keep cash high and wait for **regular-hours confirmation**; **GOOG** remains the first candidate and the existing holdings remain on hold.
- Code / prompt changes this cycle: **none**.
