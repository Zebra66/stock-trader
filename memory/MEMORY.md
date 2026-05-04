# Hourly Macro Memory
*Updated 2026-05-04 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but the tape is still narrow and leadership is concentrated in **AI/cloud/semiconductor winners** rather than the whole market. Fresh Reuters fallback checks still show **mixed US futures with Middle East / oil / Fed sensitivity**, yet the strongest trend cluster inside the universe remains **SOXX / AVGO / GOOG / QQQ / QTUM**. The core read is unchanged: if macro stress does not broaden into a growth de-risking wave, the best path to outperform remains owning liquid leaders in the strongest group, not broad beta or story-stock laggards.

The main execution constraint is still **price freshness and timing discipline**. Alpaca clock shows the market is **still closed / pre-open** at review time, and although a few leaders now show fresh **pre-market prints** (notably **GOOG, NVDA, QQQ, SOXX**), that is still not the same as cash-session confirmation. Tactical execution should therefore remain patient: no first-15-minute chasing, no pre-open forcing, and no deployment unless the setup still clears expected friction by at least **3x** after the open.

## Portfolio State
- Equity: **$10,000**
- Cash: **$10,000**
- Buying power: **$20,000**
- Current positions: **none**
- Gross exposure: **0%**
- P/L: **$0 realized / $0 unrealized**
- Market status at review: **closed / pre-open**
- Alpaca clock timestamp: **2026-05-04T08:12:21-04:00**
- Next open from Alpaca clock: **2026-05-04 09:30 ET**

## Data & Research Sources Used This Run
- **Historical performance:** attempted `bun run src/tools/fmp_cli.ts get-historical-performance --symbol QQQ`, but **`FMP_API_KEY` is not configured**.
- **Historical performance fallback:** Yahoo Finance chart API (`https://query1.finance.yahoo.com/v8/finance/chart/<symbol>?range=3y&interval=1d`).
- **Brokerage/account/prices:** Alpaca CLI (`get-account`, `get-positions`, `get-clock`, `get-latest-price`).
- **News / search fallback:** Google News RSS via bash, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced.
- **Raw artifacts:** `temp_files/fmp_probe_2026-05-04_hourly.txt`, `temp_files/hourly_market_snapshot_yahoo_2026-05-04.json`, `temp_files/hourly_market_snapshot_yahoo_2026-05-04.csv`, `temp_files/hourly_latest_prices_2026-05-04.jsonl`, `temp_files/hourly_latest_prices_2026-05-04_parsed.json`, `temp_files/alpaca_account_2026-05-04_hourly.json`, `temp_files/alpaca_positions_2026-05-04_hourly.json`, `temp_files/alpaca_clock_2026-05-04_hourly.json`, `temp_files/news_rss/hourly_news_summary_2026-05-04.json`.

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +11.95%**, **EIS +3.69%**, **QTUM +1.79%**, **QQQ +1.55%**, **VOO +0.93%**
- Best **1m** performers: **SOXX +37.58%**, **AVGO +34.38%**, **GOOG +29.95%**, **QTUM +23.68%**, **RKLB +20.28%**
- Best **3m** performers: **SOXX +28.97%**, **AVGO +27.38%**, **QTUM +13.50%**, **GOOG +13.16%**, **EIS +9.78%**
- Weak / broken **3m** names: **HOOD -27.24%**, **META -17.55%**, **GLD -14.66%**, **SHLD -11.15%**, **RKLB -8.02%**
- Best **1y** performers: **RKLB +256.28%**, **SOXX +153.69%**, **GOOG +135.41%**, **AVGO +113.49%**, **QTUM +79.15%**

## Fresh External Context
- **Macro:** Reuters fallback says **US stock futures are mixed** while **Middle East / oil risk** remains in focus.
- **Broad market:** Reuters fallback also notes **S&P 500 / Nasdaq just posted strong monthly gains**, so the primary trend is still constructive even with macro tension.
- **Semis / AI:** Reuters fallback remains supportive via **ASML / TSMC / KLA / broader chip-demand strength**, reinforcing **SOXX / AVGO / NVDA** as the best sector cluster.
- **GOOG:** Reuters fallback remains very positive after **Alphabet revenue topped expectations on a record cloud quarter**.
- **AVGO:** Reuters fallback remains constructive on **custom-chip / AI demand**, though supply constraints keep chasing risk elevated.
- **META:** Reuters fallback remains cautious because **AI spending and legal scrutiny** hurt the reaction quality.
- **HOOD:** Reuters fallback remains cautious after **weak transaction-revenue / profit disappointment**.
- **Top investor context:** Berkshire/Alphabet and Ackman/Meta remain context only; price action and current reaction quality still outrank fund-following.

## Priority Actions For The Next Hour
1. Keep the book **flat until after the cash open**; do not act on pre-open prints alone.
2. Prioritize only **SOXX, GOOG, AVGO, and QQQ** for starter longs; **NVDA** and **QTUM** remain secondary adds.
3. Keep at least **56% cash** and size from **account equity**, not buying power.
4. Require a setup to clear estimated round-trip friction by at least **3x** before trading.
5. Keep **META, HOOD, SHLD, VOO, ARKX, EIS** sidelined for fresh capital unless relative strength materially improves.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | High-quality AI/custom-silicon exposure with strong 1m/3m trend; buy only on clean reclaim/breakout, not on failed extension. | 7% |
| EIS | Hold | Relative strength is decent, but liquidity and geopolitical sensitivity keep it outside the core book. | 0% |
| GLD | Hold | Useful hedge only; weak intermediate momentum keeps it small and opportunistic. | 2% |
| GOOG | Buy | Best mix of earnings quality, cloud/AI monetization, liquidity, and recent catalyst follow-through. | 8% |
| HOOD | Sell | Weak reaction quality and softer trading / transaction backdrop keep it out of the book. | 0% |
| META | Sell | Spending intensity and legal-risk headlines outweigh outside-investor interest for now. | 0% |
| NVDA | Hold | Core AI leader, but setup quality is still below SOXX / GOOG / AVGO unless it reclaims momentum. | 4% |
| QQQ | Buy | Best liquid wrapper for growth leadership while tech continues to beat broad-market beta. | 8% |
| QTUM | Buy | Good thematic momentum, but it should remain smaller than the liquid core longs. | 4% |
| RKLB | Hold | Long-run trend is powerful, but current tape still supports only tiny satellite risk. | 1% |
| SHLD | Sell | Weak multi-timeframe profile does not deserve scarce risk budget. | 0% |
| SOXX | Buy | Strongest sector-level expression of the current semiconductor / AI leadership regime. | 10% |
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

## Last Run Summary
- Portfolio remains **100% cash**: **$10,000 equity, $10,000 cash, no positions**.
- **FMP historical performance** is still unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Fresh Reuters / Google News fallback kept leadership centered on **SOXX / GOOG / AVGO / QQQ**, while **META** and **HOOD** remained weak on reaction quality.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already contains the right safeguards around data fallbacks, stale-price awareness, friction, and tactical-trigger refresh.

## Execution Summary — 2026-05-04 Hourly Cycle
- Confirmed the account remains **flat** with **$10,000 equity**, **$10,000 cash**, and **no open positions**.
- Re-probed FMP and confirmed **historical performance is still unavailable** because **`FMP_API_KEY` is not configured**.
- Refreshed full-universe multi-timeframe performance via the documented **Yahoo Finance fallback** and refreshed latest **Alpaca prices** for the full universe.
- Observed that a few leaders now show **fresh pre-market timestamps** (GOOG / NVDA / QQQ / SOXX), but the market is still **pre-open**, so tactical execution should still wait for the cash session and avoid the first 15 minutes.
- Kept the preferred long list concentrated in **SOXX, GOOG, AVGO, and QQQ**, with **NVDA / QTUM** secondary and **GLD / RKLB** small only.
- No hourly portfolio trades were executed, and no prompt/code changes were made.

## Execution Summary — 2026-05-04 Tactical Cycle
- Confirmed the account is still **100% cash** with **$10,000 equity / $10,000 cash / no positions**.
- Refreshed Alpaca clock and latest quotes for the full universe; the market is still **pre-open** and the tactical book remains flat.
- Reviewed current trigger levels against live prices: **SOXX 467.45**, **GOOG 383.56**, **AVGO 419.98**, **QQQ 674.28**, **NVDA 198.44**, **QTUM 135.12**, **GLD 419.66**, **RKLB 79.15** — none of the buy conditions were fully met with cash-session confirmation.
- Quick Reuters/Google News scan did not surface any urgent adverse catalyst that would override the existing patience rule.
- No trades were placed this cycle; next expected action is to wait for the cash open plus the first 15 minutes, then act only if a valid breakout/reclaim still clears friction hurdles.

## Execution Summary — 2026-05-04 Tactical Recheck
- Refreshed live Alpaca quotes for the full universe again and confirmed the account is still **100% cash** with **$10,000 equity / $10,000 cash / no positions**.
- Current leadership watchlist prices remain just below entry triggers: **SOXX 467.64**, **GOOG 383.55**, **AVGO 419.98**, **QQQ 674.28**, **NVDA 198.44**, **QTUM 135.12**, **GLD 419.66**, **RKLB 79.15**.
- Quick Google News / Reuters-style scan did not surface any urgent adverse catalyst that would force an override.
- No orders were executed because none of the watched names satisfied the post-open confirmation rules or the 3x-friction requirement.
- Next expected action: stay patient until a true cash-session breakout or reclaim appears; otherwise keep the book flat and preserve cash.

## Execution Summary — 2026-05-04 Tactical Recheck 2
- Refreshed the account and latest quotes again; the book is still **100% cash** with **$10,000 equity / $10,000 cash / no positions**.
- Updated live watchlist levels: **SOXX 467.64**, **GOOG 383.55**, **AVGO 419.98**, **QQQ 674.28**, **NVDA 198.44**, **QTUM 135.12**, **GLD 419.29**, **RKLB 79.15**; all remain below the active buy triggers.
- Reuters-backed Google News scan continued to show mixed macro headlines, including **oil up / futures mixed / Fed caution**, but nothing that invalidated the patience-first plan.
- No trades were executed because the book still lacks a cash-session breakout/reclaim that clears the 3x-friction rule.
- Next expected action: keep waiting for a confirmed post-open setup; do not force exposure into pre-open strength.

## Execution Summary — 2026-05-04 Tactical Pre-open Recheck
- Confirmed the account is still **100% cash** with **$10,000 equity / $10,000 cash / no positions**.
- Alpaca clock now shows **08:51 ET**, so the market remains **closed** and there is still no cash-session confirmation.
- Refreshed live prices: **SOXX 467.64**, **GOOG 383.01**, **AVGO 419.77**, **QQQ 674.28**, **NVDA 199.11**, **QTUM 135.12**, **GLD 419.29**, **RKLB 79.15**, **EIS 131.53**, **HOOD 75.10**, **META 609.31**, **SHLD 67.91**, **ARKX 32.81**, **VOO 662.15**; every watched name remained below its active entry trigger.
- Google News / Reuters fallback stayed constructive for the preferred AI / semi leaders and did not surface an urgent adverse catalyst.
- No orders were placed. Next expected action is to wait for the cash open and the first 15 minutes, then only trade a confirmed breakout or reclaim that still clears the 3x-friction rule.
