# Hourly Macro Memory
*Updated 2026-05-04 10:35 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but leadership is still concentrated in **semiconductors, AI infrastructure, and large-cap growth** rather than broad market beta. The strongest medium-term trend cluster in the current universe is still **SOXX / AVGO / GOOG / QTUM / QQQ**, while **META, HOOD, and SHLD** continue to show weaker intermediate reaction quality. Reuters/Google News RSS fallback still points to a constructive tape, but the main near-term risks remain **oil/geopolitical pressure, earnings follow-through, and Fed/jobs sensitivity**, so controlled deployment is still the better path than forcing full exposure.

The live account is now **partially deployed**, and that live brokerage state should be treated as the source of truth over stale memory. Tactical accumulated **SOXX** and **QTUM** since the prior hourly note, leaving the book about **12% gross long** and still mostly in cash. With the opening tape mixed and current positions slightly below cost, the right posture for the next hour is **hold the existing leadership exposure, do not average down, and only add fresh risk if GOOG / QQQ / AVGO reclaim nearby levels with confirmation**.

## Portfolio State
- **Equity:** $9,993.58
- **Cash:** $8,789.14
- **Buying power:** $18,704.17
- **Gross exposure:** ~12.1%
- **Market status:** open
- **Alpaca clock timestamp:** 2026-05-04T10:31:40-04:00
- **Current positions:**
  - **SOXX:** 2 shares @ 468.43 | market value $930.98 | unrealized P&L **-$5.88** (-0.63%)
  - **QTUM:** 2 shares @ 137.00 | market value $273.44 | unrealized P&L **-$0.56** (-0.20%)
- **Overall unrealized P&L:** **-$6.44**

## Data & Research Sources Used This Run
- **Historical performance (attempted):** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`
- **FMP status:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query2.finance.yahoo.com` with browser-like headers
- **Brokerage / account / prices:** Alpaca CLI (`get-account`, `get-positions`, `get-clock`, `get-latest-price`)
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced
- **Raw artifacts from this cycle:**
  - `temp_files/fmp_probe_2026-05-04_1011ET.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-04_1411.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-04_1411.csv`
  - `temp_files/alpaca_account_2026-05-04_1031ET.json`
  - `temp_files/alpaca_positions_2026-05-04_1031ET.json`
  - `temp_files/alpaca_clock_2026-05-04_1031ET.json`
  - `temp_files/hourly_latest_prices_2026-05-04_1013ET.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-04_1015ET.json`

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +8.74%**, **EIS +4.87%**, **QTUM +3.71%**, **SOXX +3.02%**, **QQQ +1.67%**
- Best **1m** performers: **SOXX +38.15%**, **AVGO +33.64%**, **GOOG +28.71%**, **QTUM +24.39%**, **RKLB +15.64%**
- Best **3m** performers: **SOXX +35.48%**, **AVGO +26.89%**, **QTUM +18.03%**, **GOOG +11.95%**, **EIS +11.94%**
- Weak / broken **3m** names: **HOOD -23.06%**, **META -15.77%**, **SHLD -8.90%**, **GLD -6.01%**, **RKLB -2.19%**
- Best **6m** performers: **SOXX +53.05%**, **GOOG +34.48%**, **EIS +30.01%**, **RKLB +24.36%**, **QTUM +18.84%**
- Best **1y** performers: **RKLB +240.67%**, **SOXX +146.89%**, **GOOG +128.57%**, **AVGO +106.43%**, **QTUM +75.56%**

## Fresh External Context
- **Macro / index backdrop:** Reuters fallback says the rally can still extend, but the next tests are **earnings, jobs data, oil, and geopolitical/Fed sensitivity**.
- **Semiconductors / AI:** Reuters fallback remains supportive for chip leadership and AI capex; **SOXX** remains the cleanest sector expression.
- **GOOG:** Reuters fallback stays positive after **Alphabet revenue topped expectations on a record cloud quarter**.
- **AVGO:** No fresh same-day Reuters catalyst surfaced in the fallback scan, but medium-term AI/custom-silicon demand still supports keeping it on the add list if price confirms.
- **NVDA:** Leadership quality is still high long term, but recent Reuters fallback shows investors remain sensitive to **AI-return skepticism**, making it lower priority than GOOG / QQQ while it sits below cleaner reclaim levels.
- **HOOD:** Reuters fallback remains weak after **profit / transaction-revenue disappointment**.
- **META:** Ackman ownership is only context; price action is still materially weaker than the preferred leaders.
- **Top investor context:** Reuters fallback shows **Pershing Square bought Meta**, but that does not override the current relative-strength gap versus GOOG / SOXX / QQQ.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as the source of truth: current book is **SOXX + QTUM**, not all-cash.
2. **Hold SOXX and QTUM** while they remain above their cut levels; do **not** average down.
3. Keep overall gross exposure capped around **30%** for this hour; preserve at least **70% cash** unless the tape materially improves.
4. Prioritize only **GOOG, QQQ, and AVGO** for fresh adds; **NVDA** is secondary and should only be bought on a cleaner reclaim.
5. Keep **META, HOOD, SHLD, GLD, EIS, VOO, and ARKX** sidelined for fresh capital this hour.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong medium-term AI/custom-silicon trend, but current tape is weaker than GOOG / QQQ and needs price confirmation. | 4% |
| EIS | Hold | Decent trend, but lower liquidity and geopolitical sensitivity keep it outside the core book. | 0% |
| GLD | Hold | Hedge only; weak short/intermediate momentum and awkward sizing on a small account keep it inactive. | 0% |
| GOOG | Buy | Best mix of earnings quality, cloud/AI monetization, and current relative strength outside semis. | 4% |
| HOOD | Sell | Weak reaction quality after earnings and inferior setup versus the core leaders. | 0% |
| META | Sell | Weak multi-timeframe price action and legal/spending overhang still outweigh outside-investor interest. | 0% |
| NVDA | Hold | Long-term AI leader, but current setup is less attractive than SOXX / GOOG until momentum is reclaimed. | 2% |
| QQQ | Buy | Best liquid wrapper for growth leadership if the tape broadens beyond the current semiconductor holdings. | 7% |
| QTUM | Hold | Existing position is fine, but current size is already near the intended risk budget for this account. | 3% |
| RKLB | Hold | Strong long-run trend, but still only deserves tiny satellite risk. | 1% |
| SHLD | Sell | Weak intermediate trend and low setup quality do not justify capital. | 0% |
| SOXX | Hold | Still the strongest sector-level expression of AI/chip leadership; current position is already near target size. | 10% |
| VOO | Hold | Lower-alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality theme expression than SOXX / QTUM / RKLB. | 0% |

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

## Last Run Summary
- The account is **not flat anymore**: tactical now holds **SOXX (2 shares)** and **QTUM (2 shares)**.
- Current live equity is **$9,993.58**, cash is **$8,789.14**, and overall unrealized P&L is **-$6.44**.
- **FMP historical performance** is still unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Fresh Reuters / Google News fallback still supports **SOXX / GOOG / QQQ / AVGO** as the best long list, while **META / HOOD / SHLD** remain weak.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already requires live account checks, fallbacks, friction awareness, and trigger refresh.

## Execution Summary — 2026-05-04 Tactical Cycle
- Re-checked the live account and confirmed the book is now **partially deployed** with **SOXX 2 shares, QTUM 2 shares, and RKLB 1 share**.
- Refreshed account equity, cash, buying power, open positions, and latest prices from **Alpaca**.
- Google News RSS / Reuters-style search on **RKLB** did not surface an immediate adverse catalyst that would invalidate the breakout entry.
- Executed a **1-share RKLB buy** on the above-80.2 breakout, keeping size tiny and consistent with the satellite-risk rule.
- No prompt or code changes were made in this tactical cycle.
- Next expected action: **hold RKLB unless it loses 77.6**, and continue to wait for cleaner confirmation in **GOOG / QQQ / AVGO** before adding new core risk.

## Execution Summary — 2026-05-04 Hourly Cycle
- Re-checked the live account and found the book is now **partially invested**, not all cash: **SOXX 2 shares** and **QTUM 2 shares**.
- Refreshed account equity, cash, buying power, open positions, market clock, and latest prices from **Alpaca**.
- Re-probed FMP and confirmed **historical performance remains unavailable** because **`FMP_API_KEY` is not configured**.
- Refreshed full-universe multi-timeframe performance using the **Yahoo Finance chart API fallback**.
- Refreshed macro/news context via **Google News RSS / Reuters fallback** and kept the preference list centered on **GOOG / QQQ / AVGO** for additional risk.
- No prompt or code changes were made in this hourly cycle.
