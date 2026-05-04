# Hourly Macro Memory
*Updated 2026-05-04 11:45 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but leadership is still narrow and concentrated in **semiconductors, AI infrastructure, and liquid large-cap growth** rather than broad beta. Fresh multi-timeframe data still favors **SOXX, AVGO, QTUM, GOOG, and QQQ**, while **META, HOOD, SHLD, and GLD** remain weaker on the intermediate trend. The main near-term macro risk is not a broken trend; it is **event risk**: oil / Middle East headlines, Fed sensitivity, and the possibility that strong post-earnings momentum stalls intraday.

The live account is still correctly positioned as a **small, leadership-focused book with large cash reserves**. Gross exposure is only about **12.8%**, so there is no need to force trades. For the next hour, the right posture is to **hold current winners-in-structure, keep at least 70% cash, avoid averaging down, and only add on clean reclaim / breakout confirmation in GOOG or QQQ first**. AVGO remains the secondary add; NVDA remains watchlist-only unless it retakes better short-term levels.

## Portfolio State
- **Equity:** $9,982.03
- **Cash:** $8,708.26
- **Buying power:** $18,611.74
- **Gross exposure:** ~12.8%
- **Market status:** open
- **Alpaca clock timestamp:** 2026-05-04T11:35:47-04:00
- **Current positions:**
  - **SOXX:** 2 shares @ 468.43 | market value $922.57 | unrealized P&L **-$14.29** (-1.53%) | allocation **9.24%**
  - **QTUM:** 2 shares @ 137.00 | market value $271.14 | unrealized P&L **-$2.86** (-1.04%) | allocation **2.72%**
  - **RKLB:** 1 share @ 80.88 | market value $80.06 | unrealized P&L **-$0.82** (-1.01%) | allocation **0.80%**
- **Overall unrealized P&L:** **-$17.97**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query2.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** Alpaca CLI plus direct Alpaca client access for batch latest-bar reads
- **News / search fallback:** **Yahoo Finance RSS** for symbol-specific news and **Bing News RSS** for limited investor-headline lookup because no direct Google Search tool surfaced and **Google News RSS returned HTTP 503** from bash in this workspace
- **Raw artifacts from this cycle:**
  - `temp_files/fmp_probe_latest.txt`
  - `temp_files/alpaca_account_latest.json`
  - `temp_files/alpaca_positions_latest.json`
  - `temp_files/alpaca_clock_latest.json`
  - `temp_files/hourly_market_snapshot_yahoo_latest.json`
  - `temp_files/hourly_market_snapshot_yahoo_latest.csv`
  - `temp_files/hourly_latest_prices_latest.json`
  - `temp_files/tech_levels_latest.json`
  - `temp_files/news_rss/hourly_news_summary_latest.json`
  - `temp_files/investor_news_latest.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.53%**, **EIS +4.52%**, **QTUM +2.87%**, **SOXX +1.46%**, **SHLD +1.37%**
- Best **1m** performers: **SOXX +36.05%**, **AVGO +31.08%**, **GOOG +28.45%**, **QTUM +23.39%**, **RKLB +18.29%**
- Best **3m** performers: **SOXX +33.42%**, **AVGO +24.46%**, **QTUM +17.08%**, **GOOG +11.73%**, **EIS +11.56%**
- Weak / broken **3m** names: **HOOD -23.15%**, **META -15.24%**, **SHLD -9.08%**, **GLD -6.39%**, **RKLB +0.06%**
- Best **6m** performers: **SOXX +50.73%**, **GOOG +34.21%**, **EIS +29.58%**, **RKLB +27.21%**, **QTUM +17.88%**
- Best **1y** performers: **RKLB +248.50%**, **SOXX +143.15%**, **GOOG +128.12%**, **AVGO +102.47%**, **QTUM +74.15%**

## Fresh External Context
- **Macro / tape:** leadership is intact, but fresh headline flow still warns that **Middle East / oil escalation** could interrupt the rally and reduce intraday follow-through.
- **GOOG:** still the cleanest non-semi add in the universe; recent coverage continues to lean constructive on **AI / cloud capex demand**, and fallback analyst commentary remains positive after earnings.
- **AVGO:** analyst tone remains constructive and the medium-term trend is strong, but price is still below the recent **423-429** resistance band, so it should only be added on confirmation.
- **NVDA:** long-term leadership is intact, but the fresh setup is still inferior to GOOG / QQQ while it trades below the recent **200-205** reclaim zone.
- **HOOD:** fallback news remains mixed-to-negative, with repeated emphasis on **crypto dependence** and a less compelling earnings-quality setup than the preferred leaders.
- **META:** valuation commentary is bullish, but actual price action is still notably weaker than GOOG and the semiconductor leaders.
- **Top-investor context:** limited fallback investor search found **Ackman/Alphabet** context but **no fresh, high-conviction same-day investor move** strong enough to change the portfolio plan.
- **Liquidity note:** **EIS** still carries stale / low-activity broker prints and should not receive tactical orders without second-source confirmation.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book is still **SOXX + QTUM + RKLB**.
2. **Hold SOXX, QTUM, and RKLB** while they remain above refreshed cut levels; do **not** average down.
3. Keep overall gross exposure capped around **30%** and preserve at least **70% cash** unless the tape materially improves.
4. Prioritize fresh capital only into **GOOG**, then **QQQ**, then **AVGO**. **NVDA** remains secondary.
5. Keep **META, HOOD, SHLD, GLD, VOO, ARKX, and EIS** sidelined for fresh capital this hour.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong AI/custom-silicon trend, but still needs a reclaim above nearby resistance and should stay smaller than core sector exposure. | 4% |
| EIS | Hold | Good momentum on paper, but liquidity / stale-quote risk makes it unattractive for this account size. | 0% |
| GLD | Hold | Hedge only; current trend is weaker and the account is too small to size it elegantly right now. | 0% |
| GOOG | Buy | Best mix of liquidity, earnings quality, cloud/AI monetization, and relative strength outside semis. | 4% |
| HOOD | Sell | Inferior setup quality, weaker intermediate trend, and headline dependence on crypto activity. | 0% |
| META | Sell | Still materially weaker than GOOG and the chip leaders despite upside commentary. | 0% |
| NVDA | Hold | Structural leader, but current setup remains less attractive than GOOG / QQQ / SOXX until short-term momentum improves. | 2% |
| QQQ | Buy | Best liquid index wrapper for growth leadership if the market broadens beyond existing chip exposure. | 7% |
| QTUM | Hold | Existing position is acceptable and already near the intended size for this account. | 3% |
| RKLB | Hold | Keep only as a very small satellite; still volatile and lower quality than the core leaders. | 1% |
| SHLD | Sell | Weak intermediate trend and low setup quality do not justify capital. | 0% |
| SOXX | Hold | Still the strongest sector-level AI/chip expression; existing size is already close to target. | 10% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership remains dominant. | 0% |
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
- When using fallback news sources, prefer **symbol-specific / high-relevance feeds** and explicitly ignore noisy or off-topic articles.
- Absence of a fresh high-conviction catalyst is a valid reason to keep cash rather than forcing exposure.
- Top-investor filings/headlines are context, not instructions; follow them only when they align with current price action and liquidity.
- Pre-market prints can improve watchlist quality, but they do **not** replace cash-session confirmation or opening-range discipline.
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header requests can hit HTTP 429 rate limits.**
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and immediately update memory/todo.
- On a **~$10k account**, one-share increments in names like **QQQ, GOOG, AVGO, and SOXX** are meaningful; target allocations must respect practical order granularity.
- For thinner names or stale quotes (for example **EIS**), require fresh confirmation from a reliable live source before taking tactical action.
- If **Google News RSS** fails from bash, acceptable fallbacks include **Yahoo Finance RSS** and selective **Bing News RSS**, but their results must be relevance-checked before they influence trades.

## Last Run Summary
- Live account at 11:35-11:43 ET is still **lightly invested**: **SOXX 2 shares, QTUM 2 shares, RKLB 1 share**.
- Current equity is **$9,982.03**, cash is **$8,708.26**, gross exposure is about **12.8%**, and overall unrealized P&L is **-$17.97**.
- **FMP historical performance** remains unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Leadership is still centered on **SOXX / AVGO / QTUM / GOOG / QQQ**, while **HOOD / META / SHLD / GLD** remain weaker.
- **Prompt review completed:** updated `prompts/hourly.txt` to require stricter handling of **stale quotes** and **noisy fallback news/search results** before setting actionable trading directives.

## Tactical Executor Summary — 2026-05-04 11:50 ET
- **Action taken:** no orders placed this cycle.
- **Why:** GOOG, QQQ, AVGO, and NVDA all remained below their documented reclaim / breakout triggers; SOXX, QTUM, and RKLB stayed above stop levels and below trim levels.
- **Current holdings:** unchanged at **SOXX 2**, **QTUM 2**, **RKLB 1**.
- **Next expected action:** keep cash high and wait for a clean leadership reclaim in **GOOG** or **QQQ** first; only then consider **AVGO** or **NVDA** as secondary adds.
