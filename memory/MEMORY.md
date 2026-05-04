# Hourly Macro Memory
*Updated 2026-05-04 12:50 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but this is still a **leadership market**, not a broad, low-friction beta chase. The strongest intermediate trends in the current universe remain concentrated in **semiconductors, AI infrastructure, and liquid large-cap growth**: **SOXX, AVGO, GOOG, QTUM, and QQQ** still lead on 1m-1y windows, while **META, HOOD, SHLD, and GLD** remain weaker or less attractive on current trend quality. Midday tape action is softer than earlier, so the right posture is still **controlled net long exposure with large cash reserves**, not aggressive deployment.

The live account is still **lightly invested** at roughly **12.7% gross long**, and the current drawdown is small enough that there is no need to force a rebalance. The best next adds remain **GOOG first, QQQ second**, with **AVGO** only on cleaner semiconductor confirmation and **NVDA** still secondary until its short-term tape improves. The tactical job should keep cash high, avoid averaging down, and demand enough edge to overcome real-world spread/slippage/fees.

## Portfolio State
- **Equity:** $9,980.82
- **Cash:** $8,708.26
- **Buying power:** $18,610.53
- **Gross exposure:** ~12.7%
- **Market status:** open
- **Alpaca clock timestamp:** 2026-05-04T12:49:41-04:00
- **Current positions:**
  - **SOXX:** 2 shares @ 468.43 | market value $921.76 | unrealized P&L **-$15.10** (-1.61%) | allocation **9.24%**
  - **QTUM:** 2 shares @ 137.00 | market value $270.83 | unrealized P&L **-$3.17** (-1.16%) | allocation **2.71%**
  - **RKLB:** 1 share @ 80.88 | market value $79.97 | unrealized P&L **-$0.91** (-1.13%) | allocation **0.80%**
- **Overall unrealized P&L:** **-$19.18**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** Alpaca CLI (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +9.02%**, **EIS +4.30%**, **QTUM +2.67%**, **SOXX +1.22%**, **QQQ +1.08%**
- Best **1m** performers: **SOXX +35.74%**, **AVGO +30.89%**, **GOOG +29.03%**, **QTUM +23.15%**, **RKLB +18.18%**
- Best **3m** performers: **SOXX +33.37%**, **AVGO +28.52%**, **QTUM +17.82%**, **GOOG +11.52%**, **EIS +9.03%**
- Weak / broken **3m** names: **META -11.75%**, **HOOD -11.69%**, **SHLD -10.62%**, **GLD -8.84%**, **ARKX -0.97%**
- Best **6m** performers: **SOXX +49.49%**, **GOOG +33.73%**, **RKLB +30.49%**, **EIS +28.00%**, **QTUM +18.86%**
- Best **1y** performers: **RKLB +256.05%**, **SOXX +144.46%**, **GOOG +128.82%**, **AVGO +105.11%**, **QTUM +74.46%**
- Best **3y** performers: **RKLB +1978.96%**, **HOOD +768.81%**, **NVDA +586.07%**, **AVGO +553.37%**, **GOOG +257.72%**

## Fresh External Context
- **Macro / index backdrop:** Reuters-style fallback still frames the market as constructive, with upcoming **earnings and jobs data** able to extend the rally, but **oil/geopolitical pressure** remains a valid reason to keep cash rather than forcing size.
- **Semiconductors / AI:** Reuters-style semiconductor coverage remains supportive of the AI capex cycle, and the **SOXX / AVGO** trend still looks stronger than most of the universe on an intermediate basis.
- **GOOG:** Reuters reported **Alphabet revenue topping expectations on a record cloud quarter**, and a second Reuters item highlighted Google Cloud momentum as part of still-expanding hyperscaler AI spend. That keeps **GOOG** the cleanest single-stock add in the universe.
- **META:** Reuters-style commentary remains less supportive because the market still wants a clearer AI payoff; price action remains materially weaker than GOOG.
- **HOOD:** Google News fallback surfaced fresh analyst-reset coverage pointing to **Barclays cutting/rebasing price targets after weak Q1 results**, reinforcing that HOOD is lower quality than the preferred leaders.
- **Investor-flow context:** No fresh, high-conviction top-investor portfolio change surfaced that is strong enough to override current price action in this universe.
- **Liquidity note:** **EIS** still shows a stale Alpaca print from **2026-05-01**, so it should remain sidelined unless a fresh live quote confirms the move.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is still **SOXX + QTUM + RKLB**.
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
| HOOD | Sell | Weak earnings follow-through plus analyst-reset pressure leave it inferior to the core leaders. | 0% |
| META | Sell | Weak multi-timeframe price action still outweighs headline investor interest. | 0% |
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

## Last Run Summary
- Live account at 12:49 ET remains **lightly invested**: **SOXX 2 shares, QTUM 2 shares, RKLB 1 share**.
- Current equity is **$9,980.82**, cash is **$8,708.26**, gross exposure is about **12.7%**, and overall unrealized P&L is **-$19.18**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership remains centered on **SOXX / GOOG / QQQ / AVGO / QTUM**, while **META / HOOD / SHLD / GLD** remain weaker.
- Tactical posture for the next hour: **stay net long the current leaders, keep cash high, and only add on clean reclaim/breakout confirmation**.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already requires live account checks, market-data fallbacks, friction awareness, and trigger refresh.
