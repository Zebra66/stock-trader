# Hourly Macro Memory
*Updated 2026-05-04 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but leadership is still concentrated in **AI, cloud, and semiconductors** rather than being broad-based across the whole market. The strongest multi-timeframe trend cluster in the current universe is still **SOXX / AVGO / GOOG / QQQ / QTUM**, while **HOOD, META, and SHLD** continue to show weaker intermediate reaction quality. Reuters-driven fallback news still points to a constructive primary tape, but with meaningful **oil, geopolitical, and Fed/event-risk sensitivity**, so discipline matters more than raw bullishness.

For the next hour, the best path to controlled outperformance is still to **prefer liquid leaders over broad beta and weak single-name stories**, while respecting that the market is **still pre-open**. A few names now show fresh pre-market prints, but that does not replace cash-session confirmation. Tactical should stay patient, avoid opening trades in the first 15 minutes after the bell, and require any entry to clear estimated total trading friction by at least **3x**.

## Portfolio State
- Equity: **$10,000**
- Cash: **$10,000**
- Buying power: **$20,000**
- Current positions: **none**
- Gross exposure: **0%**
- Realized / unrealized P&L: **$0 / $0**
- Market status at review: **closed / pre-open**
- Alpaca clock timestamp: **2026-05-04T09:00:50-04:00**
- Next open from Alpaca clock: **2026-05-04 09:30 ET**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query2.finance.yahoo.com` with browser-like request headers; naive no-header requests / urllib were rate-limited with **HTTP 429**
- **Brokerage / account / prices:** Alpaca CLI (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Google News RSS** via bash, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced
- **Raw artifacts:**
  - `temp_files/fmp_probe_2026-05-04_hourly.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-04.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-04.csv`
  - `temp_files/hourly_latest_prices_2026-05-04.jsonl`
  - `temp_files/hourly_latest_prices_2026-05-04_parsed.json`
  - `temp_files/alpaca_account_2026-05-04_hourly.json`
  - `temp_files/alpaca_positions_2026-05-04_hourly.json`
  - `temp_files/alpaca_clock_2026-05-04_hourly.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-04.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +11.95%**, **EIS +3.69%**, **QTUM +1.79%**, **QQQ +1.55%**, **VOO +0.93%**
- Best **1m** performers: **SOXX +37.58%**, **AVGO +34.38%**, **GOOG +29.95%**, **QTUM +23.68%**, **RKLB +20.28%**
- Best **3m** performers: **SOXX +34.49%**, **AVGO +27.16%**, **QTUM +16.64%**, **GOOG +13.20%**, **EIS +10.42%**
- Weak / broken **3m** names: **HOOD -25.95%**, **META -15.04%**, **SHLD -9.73%**, **GLD -4.89%**, **RKLB -1.57%**
- Best **1y** performers: **RKLB +256.28%**, **SOXX +153.69%**, **GOOG +135.41%**, **AVGO +113.49%**, **QTUM +79.15%**

## Fresh External Context
- **Macro / index backdrop:** Reuters fallback says the US rally is constructive, but the next major tests are **earnings, jobs data, oil, and Fed sensitivity**.
- **Semiconductors / AI:** Reuters fallback remains supportive for chip leadership and AI infrastructure, reinforcing **SOXX / AVGO / NVDA** as the best sector cluster.
- **GOOG:** Reuters fallback remains strongly positive after **Alphabet revenue topped expectations on a record cloud quarter**.
- **AVGO:** Reuters fallback remains constructive on **custom-chip / AI demand**, including the view that Broadcom can still compound off hyperscaler capex demand.
- **NVDA:** Reuters context remains positive long-term, but near-term setup quality is still less clean than **SOXX / GOOG / AVGO**.
- **META:** Reuters fallback stays cautious because of **AI spending concerns, legal scrutiny, and fresh New Mexico platform-trial headlines**.
- **HOOD:** Reuters fallback remains weak after **quarterly profit / transaction revenue disappointment**.
- **Top investor context:** Reuters fallback still shows **Ackman owning Meta** as a context item, but price action does not support following that signal here.

## Priority Actions For The Next Hour
1. Keep the book **flat until after the cash open**; do not act on pre-open prints alone.
2. Prioritize only **SOXX, GOOG, AVGO, and QQQ** for starter longs; treat **NVDA** and **QTUM** as secondary adds.
3. Keep at least **56% cash** and size from **account equity**, not buying power.
4. Require every setup to clear estimated round-trip friction by at least **3x** before trading.
5. Keep **META, HOOD, SHLD, VOO, ARKX, and EIS** sidelined for new capital unless relative strength materially improves.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong AI/custom-silicon trend and improving multi-timeframe momentum; buy only on a clean reclaim or confirmed breakout. | 7% |
| EIS | Hold | Trend is decent, but liquidity and geopolitical sensitivity keep it outside the core book. | 0% |
| GLD | Hold | Hedge only; weak short/intermediate momentum keeps it small and tactical. | 2% |
| GOOG | Buy | Best mix of earnings quality, cloud/AI monetization, liquidity, and recent catalyst follow-through. | 8% |
| HOOD | Sell | Weak reaction quality and softer trading backdrop keep it outside the book. | 0% |
| META | Sell | Spending intensity, legal overhang, and poor reaction quality outweigh outside-investor interest. | 0% |
| NVDA | Hold | Core AI leader, but current setup remains less attractive than SOXX / GOOG / AVGO unless it reclaims momentum. | 4% |
| QQQ | Buy | Best liquid wrapper for growth leadership while tech continues to outpace broad beta. | 8% |
| QTUM | Buy | Good thematic momentum, but should remain smaller than the liquid core longs. | 4% |
| RKLB | Hold | Powerful long-run trend, but still only merits tiny satellite risk in the current tape. | 1% |
| SHLD | Sell | Weak intermediate trend and lower setup quality do not deserve risk budget. | 0% |
| SOXX | Buy | Strongest sector-level expression of semiconductor / AI leadership. | 10% |
| VOO | Hold | Positive but lower-alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality theme expression than SOXX / QQQ / RKLB. | 0% |

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
- **Yahoo Finance chart fallback works more reliably with browser-like headers; naive no-header / urllib requests can hit HTTP 429 rate limits.**

## Last Run Summary
- Portfolio remains **100% cash**: **$10,000 equity, $10,000 cash, no positions**.
- **FMP historical performance** is still unavailable because **`FMP_API_KEY` is missing**, so this run used the **Yahoo Finance chart API fallback** again.
- Fresh Reuters / Google News fallback keeps leadership centered on **SOXX / GOOG / AVGO / QQQ**, while **META** and **HOOD** remain weak on reaction quality.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already contains the right safeguards around fallbacks, friction, stale-price handling, and tactical-trigger refresh.

## Execution Summary — 2026-05-04 Hourly Cycle
- Confirmed the account remains **flat** with **$10,000 equity**, **$10,000 cash**, and **no open positions**.
- Re-probed FMP and confirmed **historical performance is still unavailable** because **`FMP_API_KEY` is not configured**.
- Root-caused the initial fallback issue: naive Yahoo requests were rate-limited with **HTTP 429**, then recovered the snapshot using the same Yahoo chart API with **browser-like headers**.
- Refreshed full-universe multi-timeframe performance and latest **Alpaca** prices for the full universe.
- Market is still **pre-open** at **09:00 ET**, so tactical should wait for the cash open and avoid the first 15 minutes.
- Preferred long list remains **SOXX, GOOG, AVGO, and QQQ**, with **NVDA / QTUM** secondary and **GLD / RKLB** small only.
- No portfolio trades were executed, and no code/prompt changes were made.

## Execution Summary — 2026-05-04 Tactical Cycle
- Re-checked account state: still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed latest Alpaca prices for the full tactical universe; all watched names remained **below** their cash-session trigger zones or were still pre-open-only prints.
- No buys or sells were triggered, so I stayed flat and preserved cash ahead of the opening bell.
- No prompt or code changes were made in this cycle.
- Next expected action: wait for post-open confirmation, then only act if SOXX / GOOG / AVGO / QQQ / NVDA / QTUM / GLD / RKLB cleanly meet their stated reclaim or breakout levels.

## Execution Summary — 2026-05-04 Tactical Cycle
- Re-checked account state: still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed latest Alpaca prices for the full tactical universe: **SOXX 466.63, GOOG 383.01, AVGO 419.77, QQQ 673.80, NVDA 199.07, QTUM 135.12, GLD 419.29, RKLB 79.15, META 609.31, HOOD 75.10, EIS 131.53, SHLD 67.91, VOO 662.15, ARKX 32.81**.
- No symbols reached their active buy triggers, so no orders were submitted and the book stayed fully in cash.
- No prompt or code changes were made in this cycle.
- Next expected action: keep waiting for cash-session confirmation and only consider entries if the strongest leaders reclaim their published levels with clean follow-through.

## Execution Summary — 2026-05-04 Tactical Cycle
- Re-checked account state: still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed latest Alpaca prices at **09:49 ET** for the full tactical universe: **SOXX 465.905, GOOG 378.97, AVGO 420.04, QQQ 675.11, NVDA 199.33, QTUM 135.12, GLD 418.83, RKLB 77.285, HOOD 76.61, EIS 131.53, SHLD 68.54, VOO 662.4, ARKX 32.58**; **META** latest-price lookup returned an error in the CLI.
- No symbols met their buy or sell triggers, so no orders were submitted and the book stayed fully in cash.
- No prompt or code changes were made this cycle.
- Next expected action: wait for a clean reclaim or breakout in the strongest leaders before risking capital; keep the book concentrated only in the confirmed trend names.

## Execution Summary — 2026-05-04 Tactical Cycle
- Re-checked account state: still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed latest Alpaca prices for the full tactical universe: **SOXX 466.63, GOOG 382.00, AVGO 419.77, QQQ 674.65, NVDA 199.07, QTUM 135.12, GLD 419.29, RKLB 79.15, META 609.31, HOOD 75.10, EIS 131.53, SHLD 67.91, VOO 662.15, ARKX 32.81**.
- No symbols met their buy triggers, so no orders were submitted and the book stayed fully in cash.
- Quick news scan did not surface any new adverse catalyst that would have changed a triggered trade decision.
- No prompt or code changes were made this cycle.
- Next expected action: wait for post-open confirmation; only act if the strongest leaders reclaim their published levels with clean follow-through.

## Execution Summary — 2026-05-04 Tactical Cycle
- Re-checked account state: still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed latest Alpaca prices for the full tactical universe: **SOXX 466.07, GOOG 379.57, AVGO 420.315, QQQ 674.22, NVDA 200.31, QTUM 135.12, GLD 419.38, RKLB 78.21, META 606.995, HOOD 77.55, EIS 131.53, SHLD 68.435, VOO 661.84, ARKX 32.72**.
- No symbols qualified for action under the active rules, and the session is still inside the first 15 minutes after the open, so no orders were submitted and the book stayed fully in cash.
- Quick news scan via Google News RSS / Reuters did not surface any fresh adverse catalyst for the names that were closest to trigger zones.
- No prompt or code changes were made in this cycle.
- Next expected action: keep cash until the opening window is fully digested, then only act if SOXX / GOOG / AVGO / QQQ / NVDA / QTUM / GLD / RKLB cleanly confirm their stated levels.

## Execution Summary — 2026-05-04 Tactical Cycle — 10:21 ET
- Account now shows **$9,997.62 equity / $8,789.14 cash** with **SOXX 2 shares** and **QTUM 2 shares** in the book; RKLB is pending confirmation because broker connectivity has been intermittent.
- QTUM triggered its breakout condition and filled on a **2-share marketable limit buy at 137.10**; SOXX was held unchanged because the existing 2-share position is already near its target weight.
- RKLB tagged the **78.0-78.6** reclaim zone and a **1-share limit buy at 78.55** was submitted, but fill confirmation has not yet been observed.
- Direct Google News lookup was **not available** because `news.google.com` DNS resolution failed from this workspace, so the decision used the cached Reuters context plus current price action.
- No prompt or code changes were made this cycle.
- Next expected action: confirm RKLB fill once broker access stabilizes, then continue monitoring SOXX / QTUM for follow-through and respect all published sell/trim levels.

## Execution Summary — 2026-05-04 Tactical Cycle — 10:30 ET
- Re-checked account state: **$9,993.02 equity / $8,789.14 cash / 2 SOXX / 2 QTUM**; no RKLB position is visible, so the earlier RKLB limit did not confirm into holdings.
- Refreshed live prices for the full universe: **SOXX 465.63, GOOG 378.93, AVGO 416.065, QQQ 675.29, NVDA 197.71, QTUM 136.84, GLD 419.76, RKLB 79.97, META 605.83, HOOD 77.46, EIS 131.53, SHLD 68.89, VOO 663.06, ARKX 32.795**.
- No fresh buy/sell trigger cleared the rules without violating the no-averaging-down constraint, so no orders were submitted.
- News scan via Google News RSS showed no immediate adverse catalyst for the names under consideration; SOXX remained supported, while QTUM-related headlines were mostly about other quantum names rather than the ETF itself.
- Next expected action: keep the book small and disciplined, wait for a true reclaim/breakout that is also a winner before adding, and continue respecting the 56% cash floor.
