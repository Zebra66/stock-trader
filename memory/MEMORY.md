# Hourly Macro Memory
*Updated 2026-05-04 13:32 ET by the Tactical Executor.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but the intraday tape has softened as **Middle East / oil headlines** add friction. This still looks like a **leadership market**, not a broad beta market: the strongest multi-timeframe trends in the current universe remain concentrated in **semiconductors, AI infrastructure, and liquid large-cap growth** — especially **SOXX, AVGO, GOOG, QTUM, and QQQ**. The right posture remains **controlled net long with large cash reserves**, because leadership is still intact but the macro tape is not clean enough to justify aggressive deployment.

The live account is now **more deployed** after a fresh **1-share QQQ starter**; gross long exposure is roughly **19.6%** and still within the tactical cap. Current unrealized losses remain small. The next fresh-add candidate is still **GOOG first** if it reclaims its trigger, while **AVGO** remains conditional on stronger semiconductor confirmation and **NVDA** remains secondary until its short-term tape improves. Tactical execution should stay patient, avoid averaging down, and require enough expected edge to overcome spread, slippage, CAT, SEC, and FINRA sell-side fees.

## Portfolio State
- **Equity:** $9,988.03
- **Cash:** $8,035.00
- **Buying power:** $17,944.48
- **Gross exposure:** ~19.6%
- **Market status:** open
- **Alpaca clock timestamp:** 2026-05-04T13:32:00-04:00
- **Current positions:**
  - **SOXX:** 2 shares @ 468.43 | market value $927.17 | unrealized P&L **-$9.69** (-1.03%) | allocation **9.28%**
  - **QTUM:** 2 shares @ 137.00 | market value $272.10 | unrealized P&L **-$1.90** (-0.69%) | allocation **2.72%**
  - **QQQ:** 1 share @ 673.26 | market value $673.20 | unrealized P&L **-$0.06** (-0.01%) | allocation **6.74%**
  - **RKLB:** 1 share @ 80.88 | market value $80.56 | unrealized P&L **-$0.32** (-0.40%) | allocation **0.81%**
- **Overall unrealized P&L:** **-$11.97**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** Alpaca CLI (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +9.26%**, **EIS +4.22%**, **QTUM +2.73%**, **SOXX +1.39%**, **QQQ +1.15%**
- Weak **1w** names: **META -9.89%**, **NVDA -9.03%**, **HOOD -8.53%**, **GLD -3.45%**, **RKLB -1.93%**
- Best **1m** performers: **SOXX +34.19%**, **AVGO +31.05%**, **GOOG +27.93%**, **QTUM +22.51%**, **RKLB +19.26%**
- Best **3m** performers: **SOXX +33.59%**, **AVGO +28.64%**, **QTUM +17.88%**, **GOOG +11.77%**, **NVDA +9.26%**
- Weak / broken **3m** names: **HOOD -11.81%**, **META -11.60%**, **SHLD -10.56%**, **GLD -8.64%**, **ARKX -0.70%**
- Best **6m** performers: **SOXX +51.16%**, **RKLB +43.04%**, **GOOG +33.73%**, **EIS +27.41%**, **QTUM +21.19%**
- Best **1y** performers: **RKLB +259.01%**, **SOXX +144.87%**, **GOOG +129.33%**, **AVGO +105.29%**, **QTUM +74.56%**
- Best **3y** performers: **RKLB +1996.24%**, **HOOD +767.68%**, **NVDA +587.06%**, **AVGO +553.94%**, **GOOG +258.53%**

## Fresh External Context
- **Macro / index backdrop:** Reuters-heavy Google News fallback shows **Wall Street softer on Middle East tensions and oil concerns**, while US equity-fund inflows have eased. That argues for keeping cash high rather than forcing new exposure.
- **Semiconductors / AI:** The broader AI capex narrative remains supportive, but the near-term tape is less clean than earlier in the session. **SOXX / AVGO** still lead on the medium-term trend, but new semiconductor adds should require confirmation.
- **GOOG:** Reuters reported **Alphabet revenue topping expectations on a record cloud quarter**, and separately highlighted that **Google Cloud is pulling ahead as Big Tech AI spending continues to swell**. That keeps **GOOG** the cleanest single-stock add in the universe.
- **HOOD:** Fresh Google News fallback surfaced **Mizuho and Barclays target resets / cuts after Q1 results**, reinforcing that **HOOD** remains lower quality than the core leaders.
- **META:** Analyst/news flow is mixed, but price action remains materially weaker than GOOG, and capex concerns are still part of the debate. Until relative strength improves, it stays sidelined.
- **Investor-flow context:** Google News fallback shows **Cathie Wood buying Meta / Alphabet / Robinhood**, but this is context only and is not strong enough to override current trend quality.
- **Liquidity note:** **EIS** still shows a stale Alpaca print from **2026-05-01**, so it should remain sidelined unless a fresh live quote confirms the move.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is now **SOXX + QTUM + QQQ + RKLB**.
2. **Hold existing positions** while they stay above refreshed risk levels; do **not** average down.
3. Keep gross exposure capped around **25%** for this hour and preserve at least **75% cash** unless the market materially strengthens.
4. Prioritize fresh risk only in **GOOG**, then **QQQ**. **AVGO** is allowed only on stronger semiconductor confirmation; **NVDA** stays secondary.
5. Keep **META, HOOD, SHLD, GLD, VOO, ARKX, and EIS** sidelined for new capital this hour.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong AI/custom-silicon trend, but only worth adding if semis re-accelerate; keep it smaller than sector ETF exposure. | 4% |
| EIS | Hold | Good longer-term returns, but liquidity and stale-quote risk make it unsuitable right now. | 0% |
| GLD | Hold | Hedge only; short/intermediate momentum is weak and the account is too small to make it a clean core position. | 0% |
| GOOG | Buy | Best mix of earnings quality, cloud/AI monetization, liquidity, and current relative strength outside semis. | 4% |
| HOOD | Sell | Weak earnings follow-through plus analyst target resets leave it inferior to the core leaders. | 0% |
| META | Sell | Weak multi-timeframe price action still outweighs mixed analyst sentiment. | 0% |
| NVDA | Hold | Long-term leader, but near-term setup is still less attractive than GOOG / QQQ until momentum improves. | 2% |
| QQQ | Buy | Best liquid wrapper for growth leadership if the market firms beyond current semiconductor exposure. | 7% |
| QTUM | Hold | Existing position is acceptable and already near intended size for this account. | 3% |
| RKLB | Hold | Keep only as a tiny satellite position; trend is volatile and should stay small. | 1% |
| SHLD | Sell | Weak intermediate trend and low setup quality do not justify capital. | 0% |
| SOXX | Hold | Still the strongest sector-level AI/chip expression; existing size is already near target. | 10% |
| VOO | Hold | Lower-alpha than QQQ while growth leadership remains intact. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than SOXX / QTUM / RKLB. | 0% |

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
- When using Google News RSS fallback, prioritize **recent Reuters / major-source headlines** and avoid stale or low-quality aggregator noise.
- Absence of a fresh high-conviction catalyst is a valid reason to keep cash rather than forcing exposure.
- Top-investor filings/headlines are context, not instructions; follow them only when they align with current price action and liquidity.
- Pre-market prints can improve watchlist quality, but they do **not** replace cash-session confirmation or opening-range discipline.
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header requests can hit HTTP 429 rate limits.**
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and immediately update memory/todo.
- On a **~$10k account**, one-share increments in names like **QQQ, GOOG, AVGO, and SOXX** are meaningful; target allocations must respect practical order granularity.
- For thinner names or stale quotes (for example **EIS**), require fresh confirmation from a reliable live source before taking tactical action.
- When macro headlines are risk-negative but leadership trends remain intact, prefer **waiting for confirmation** over buying shallow weakness.

## Last Run Summary
- Live account at 13:32 ET is now **SOXX 2 shares, QTUM 2 shares, QQQ 1 share, and RKLB 1 share**.
- Current equity is **$9,988.03**, cash is **$8,035.00**, gross exposure is about **19.6%**, and overall unrealized P&L is **-$11.97**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership remains centered on **SOXX / GOOG / QQQ / AVGO / QTUM**, while **META / HOOD / SHLD / GLD** remain weaker.
- Tactical posture for the next hour: **hold the starter QQQ long, keep cash high, and only add on clean reclaim/breakout confirmation**.
- **Prompt review completed:** no prompt or code changes were made this cycle because the current hourly prompt already requires live account checks, market-data fallbacks, friction awareness, and trigger refresh.

## Tactical Execution Summary 2026-05-04 13:32 ET
- Bought **1 share of QQQ** at a limit of **673.40**; fill came in at **673.26** when the market held the 672.6-673.2 reclaim zone.
- No other trades were taken because **GOOG**, **AVGO**, and **NVDA** did not confirm their respective entry triggers.
- Current posture: **net long leaders, but still cash-heavy**; next likely action is to watch **GOOG** for its reclaim trigger and **QQQ** for the 679.5 trim area.

## Tactical Execution Summary 2026-05-04 13:39 ET
- Rechecked the live account: **equity $9,985.56**, **cash $8,035.00**, **buying power $17,942.01**, with gross exposure still about **19.5%**.
- Refreshed live quotes: **GOOG 380.66**, **QQQ 672.65**, **AVGO 412.56**, **NVDA 197.43**, **SOXX 462.69**, **QTUM 135.88**, **RKLB 80.84**.
- **No trades were placed** this cycle. **GOOG / AVGO / NVDA** did not reach their buy triggers, and **QQQ** was held instead of adding because the book is already close to the tactical gross-exposure cap.
- Current holdings remain **SOXX 2**, **QTUM 2**, **QQQ 1**, and **RKLB 1**.
- Next expected action: **watch GOOG first**, then **QQQ / SOXX / QTUM / RKLB** for their trim or stop levels; keep cash high unless a fresh high-conviction reclaim appears.
