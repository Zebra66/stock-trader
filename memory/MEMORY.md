# Hourly Macro Memory
*Updated 2026-05-05 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities are still in a **selective AI / semiconductor-led risk-on regime**, but leadership remains narrow and increasingly sensitive to earnings quality, AI-spend skepticism, and geopolitical/oil headlines. The tape still favors **SOXX / AVGO / GOOG / QQQ / QTUM** over weaker or less liquid alternatives, but Reuters / Google News fallback headlines also show enough macro cross-current risk that we should keep a **cash-heavy, high-selectivity posture** until the account turns positive and a fresh regular-hours setup confirms.

The account is still **off track on the absolute-return goal** and remains too early / too flat versus SPY to claim durable outperformance. That means the next hour should stay focused on **protecting capital, avoiding low-quality trades, and only adding to the single best missing liquid leader**. Right now that remains **GOOG**, but only on **regular-hours confirmation** because several Alpaca after-hours quotes were thin or stale.

## Goal Check
- **Portfolio since inception:** **-0.09%** (**$9,991.12** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same tradable window:** **0.00%** (first post-inception close **718.01** on **2026-05-04** vs latest close **718.01** on **2026-05-04**)
- **Status:** **Off track — absolute return is still negative, and the benchmark window is still too short / flat to prove sustained outperformance.**

## Portfolio State
- **Equity:** $9,991.12
- **Cash:** $7,618.05
- **Buying power:** $17,609.17
- **Gross exposure:** ~23.8%
- **Market status:** closed
- **Alpaca clock timestamp:** 2026-05-05T01:00:50.772666131-04:00
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$417.06** | unrealized P&L **+$0.11** (+0.03%) | allocation **4.17%**
  - **QQQ:** 1 share @ 673.26 | market value **$674.00** | unrealized P&L **+$0.74** (+0.11%) | allocation **6.75%**
  - **QTUM:** 2 shares @ 137.00 | market value **$274.00** | unrealized P&L **$0.00** (0.00%) | allocation **2.74%**
  - **RKLB:** 1 share @ 80.88 | market value **$80.57** | unrealized P&L **-$0.31** (-0.38%) | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$927.44** | unrealized P&L **-$9.42** (-1.01%) | allocation **9.28%**
- **Overall unrealized P&L:** **-$8.88**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com` with browser-like headers
- **Brokerage / account / positions / prices:** **Alpaca CLI** (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **Benchmark fallback:** **Yahoo Finance chart API** for **SPY**
- **News / search fallback:** **Google News RSS** because no direct Google Search tool surfaced in this workspace
- **Analyst / investor-move coverage quality:** **insufficient / sparse** this cycle; use only as weak context, not as a primary signal
- **Raw artifacts from this cycle:**
  - `temp_files/fmp_index_2026-05-05T05-00-47Z.tsv`
  - `temp_files/fmp_AVGO_2026-05-05T05-00-47Z.txt` (representative FMP warning artifact)
  - `temp_files/alpaca_account_hourly_2026-05-05T05-00-47Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T05-00-47Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T05-00-47Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T05-00-47Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T05-00-47Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T05-00-47Z.csv`
  - `temp_files/tech_levels_2026-05-05T05-00-47Z.json`
  - `temp_files/news_rss/macro_2026-05-05T05-00-47Z.xml`
  - `temp_files/news_rss/goog_2026-05-05T05-00-47Z.xml`
  - `temp_files/news_rss/semis_2026-05-05T05-00-47Z.xml`
  - `temp_files/news_rss/hood_2026-05-05T05-00-47Z.xml`
  - `temp_files/news_rss/investors_2026-05-05T05-00-47Z.xml`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- Best **1m** performers: **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- Best **3m** performers: **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- Best **6m** performers: **SOXX +51.29%**, **GOOG +34.67%**, **RKLB +31.83%**, **EIS +30.57%**, **QTUM +19.38%**
- Weak / broken **3m-6m** names: **HOOD -14.86% / -44.56%**, **META -13.59% / -8.41%**, **SHLD -8.54% / +0.56%**, **GLD -2.91% / +12.04%**, **ARKX +2.65% / +5.76%**
- Best **1y** performers: **RKLB +263.07%**, **SOXX +151.68%**, **GOOG +133.21%**, **AVGO +111.07%**, **QTUM +79.84%**

## Fresh External Context
- **Macro / tape:** Reuters fallback showed the **S&P 500 slipping from record highs on Middle East / oil worries**, which argues against forcing marginal trades even though the broader AI trend remains intact.
- **GOOG:** Reuters coverage stayed constructive: **Alphabet revenue beat expectations, cloud growth remained strong, and AI monetization / enterprise positioning still looks credible**. GOOG remains the best missing liquid-quality long in the universe.
- **AVGO / semis / SOXX:** fallback remained net constructive on **Broadcom AI demand**, but sector headlines also showed occasional **AI-spend / sentiment wobble** risk. Conclusion: keep the winners, but do not chase thin after-hours strength.
- **HOOD:** Reuters-linked fallback stayed weak: **quarterly profit missed estimates and transaction / crypto-related pressure hurt sentiment**.
- **Top-investor context:** fallback coverage was effectively empty / insufficient this cycle.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and several Alpaca quotes were **thin / stale** — notably **EIS, GLD, GOOG, META, NVDA, QQQ, QTUM, and SOXX** — require **regular-hours confirmation** before any tactical action.
3. **Hold all existing positions** while they remain above refreshed support / stop levels; do **not** add to **AVGO / QQQ / SOXX / QTUM / RKLB** this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until the account moves back into positive territory and a clearer high-conviction setup appears.
5. The only active fresh-buy candidate remains **GOOG**, but only on **regular-hours confirmation** and preferably with a **second-source quote check** because the latest broker bar had only **1 trade**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | High-quality AI infrastructure winner; current starter already fills intended exposure. | 4% |
| EIS | Hold | Momentum is decent, but liquidity / stale-quote risk still disqualifies it. | 0% |
| GLD | Sell | Hedge-only instrument; current alpha opportunity is still in growth leadership, not gold. | 0% |
| GOOG | Buy | Best missing liquid quality name in the universe if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Weak intermediate trend and weaker earnings/revenue reaction than core tech leaders. | 0% |
| META | Sell | Still lagging GOOG and the semiconductor leaders on trend quality and headline tone. | 0% |
| NVDA | Hold | Structural AI leader, but not as timely as GOOG and partly redundant vs current semi exposure. | 0% |
| QQQ | Hold | Existing broad-growth allocation is already near intended size. | 7% |
| QTUM | Hold | Valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense theme remains lower priority than AI / growth leadership. | 0% |
| SOXX | Hold | Best sector-level semiconductor expression; current size is near target. | 9% |
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
- Refreshed the live Alpaca account, positions, and latest prices for the full investment universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$9,991.12 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Live Alpaca quotes this cycle: **AVGO 416.51, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 672.25, QTUM 135.63, RKLB 80.29, SHLD 68.05, SOXX 460.76, VOO 660.10, ARKX 32.55**.
- Yahoo fallback regular-session closes used for confirmation / level-setting: **AVGO 416.50, EIS 132.85, GLD 414.71, GOOG 379.64, HOOD 76.55, META 610.41, NVDA 198.48, QQQ 672.88, QTUM 135.69, RKLB 80.31, SHLD 68.08, SOXX 462.06, VOO 660.12, ARKX 32.51, SPY 718.01**.
- **No orders were placed** because the market is closed and the actionable candidate (**GOOG**) still requires regular-hours confirmation.
- **Prompt review result:** no prompt edit applied this run; no safe, high-signal improvement justified changing live trading instructions.
- **Strategy:** stay long the existing AI / semiconductor sleeve, keep cash high, and wait for a regular-hours GOOG trigger or a confirmed stop/trim event in an existing holding.

## 2026-05-05 10-Min Tactical Cycle Summary
- **Market status:** closed; next regular session opens **2026-05-05 09:30 ET**.
- **Live book:** unchanged — **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
- **Account snapshot:** **$9,990.75 equity / $7,618.05 cash / $17,608.80 buying power**; gross exposure remains about **23.7%**.
- **Fresh Alpaca latest prices:** **AVGO 416.51, EIS 132.54, GLD 414.26, GOOG 379.03, HOOD 76.56, META 609.52, NVDA 197.86, QQQ 672.25, QTUM 135.63, RKLB 80.29, SHLD 68.05, SOXX 460.76, VOO 660.10, ARKX 32.55, SPY 717.80**.
- **Decision:** no orders placed. GOOG did not break above **384.0** and did not retest/reclaim the **372.0-376.0** pullback setup.
- **News check:** no symbol-specific adverse headline surfaced that changed the plan; broad macro tone still included Middle East / oil caution.
- **Next expected action:** keep cash high, hold current positions, and only act on a regular-hours GOOG confirmation or a stop/trim trigger in an existing holding.
- **Code / prompt changes:** none this cycle.
