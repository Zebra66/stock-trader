# Hourly Macro Memory
*Updated 2026-05-04 by the Hourly Macro Strategist.*

## Current Macro Thesis
US equities remain **selectively risk-on**, but leadership is still concentrated in liquid, profitable AI/cloud/semiconductor winners rather than the entire growth complex. Fresh Reuters fallback checks show **US stock futures mixed** with **Middle East / oil / Fed / jobs** risk still in focus, yet the underlying leadership tape remains constructive: **GOOG** just delivered a strong cloud-led quarter, while Reuters coverage on **TSMC / ASML / semis** still argues that AI infrastructure demand remains firm. In the universe, the strongest 1m/3m trends are still **SOXX (+37.58% / +34.49%)**, **AVGO (+34.38% / +27.16%)**, **GOOG (+29.95% / +13.20%)**, **QTUM (+23.68% / +16.64%)**, and **QQQ (+15.38% / +8.41%)**.

The caution remains execution quality and timing. **Alpaca latest-price data is still showing 2026-05-01 after-hours/reference bars**, so there is still no valid live cash-session confirmation for entries. That means the correct hourly posture is still **patience first**: keep the account flat, avoid pre-open forcing, and only deploy capital into confirmed leaders once live prices validate the trigger. **META** and **HOOD** remain penalty-box names on weak reaction quality, while **GLD** stays only a small hedge and **RKLB/QTUM** remain secondary/satellite risk rather than core exposure.

## Portfolio State
- Equity: **$10,000**
- Cash: **$10,000**
- Buying power: **$20,000**
- Current positions: **none**
- Gross exposure: **0%**
- P/L: **$0 realized / $0 unrealized**
- Market status at review: **closed / pre-open**
- Alpaca clock timestamp: **2026-05-04T07:00:44-04:00**
- Next open from Alpaca clock: **2026-05-04 09:30 ET**

## Fresh External Context
- **Macro:** Reuters fallback: US stock futures were mixed on 2026-05-04 with geopolitical and oil risk still in focus; big-tech earnings and macro data remain the near-term tape drivers.
- **Semis / AI:** Reuters fallback: strong **ASML / TSMC** demand signals still support the semiconductor and AI capex complex.
- **GOOG:** Reuters fallback: Alphabet revenue topped expectations on a record cloud quarter, reinforcing GOOG as one of the highest-quality setups in the universe.
- **AVGO:** Reuters fallback: Broadcom’s AI/custom-silicon demand outlook remains supportive.
- **META:** Reuters fallback remains cautious because AI spending and legal scrutiny are pressuring the stock.
- **HOOD:** Reuters fallback remains cautious after weak transaction revenue / profit miss and price-target cuts from at least one sell-side source surfaced in the news fallback.
- **Top investor moves:** Reuters fallback still shows Berkshire tied to Alphabet and Ackman tied to Meta, but those are context only; price action and reaction quality remain the primary filter.

## Data & Research Sources Used This Run
- **Historical performance fallback:** Yahoo Finance chart API (`query1.finance.yahoo.com/v8/finance/chart/...`) because **`FMP_API_KEY` is not configured**.
- **Latest brokerage/reference prices:** Alpaca CLI latest-price endpoint.
- **News / search fallback:** Google News RSS queries via bash, prioritizing **Reuters** and other major outlets because no direct Google Search workspace tool surfaced.
- **Raw artifacts:** `temp_files/hourly_market_snapshot_yahoo_2026-05-04.json`, `temp_files/hourly_latest_prices_2026-05-04.jsonl`, `temp_files/alpaca_account_2026-05-04_hourly.json`, `temp_files/alpaca_positions_2026-05-04_hourly.json`, `temp_files/alpaca_clock_2026-05-04_hourly.json`, `temp_files/news_rss/`.

## Performance Snapshot Used This Run
- Best **1w** performers: **GOOG +11.95%**, **EIS +3.69%**, **QTUM +1.79%**, **QQQ +1.55%**, **VOO +0.93%**
- Best **1m** performers: **SOXX +37.58%**, **AVGO +34.38%**, **GOOG +29.95%**, **QTUM +23.68%**, **RKLB +20.28%**
- Best **3m** performers: **SOXX +34.49%**, **AVGO +27.16%**, **QTUM +16.64%**, **GOOG +13.20%**, **EIS +10.42%**
- Weak / broken **3m** names: **HOOD -25.95%**, **META -15.04%**, **SHLD -9.73%**, **GLD -4.89%**, **RKLB -1.57%**
- Best **1y** performers: **RKLB +256.28%**, **SOXX +153.69%**, **GOOG +135.41%**, **AVGO +113.49%**, **QTUM +79.15%**

## Priority Actions For The Next Hour
1. Keep the book **flat until fresh live cash-session confirmation** appears; do not trade off the stale 2026-05-01 reference bars.
2. Prioritize starter longs only in **SOXX, GOOG, AVGO, and QQQ**.
3. Treat **NVDA** and **QTUM** as secondary adds only after reclaim/breakout confirmation; keep **GLD** small and **RKLB** tiny.
4. Keep at least **56% cash** and size from **account equity**, not raw margin buying power.
5. Keep **META, HOOD, SHLD, VOO, ARKX, EIS** sidelined for new capital unless price action materially improves.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Elite 1m/3m momentum and strong AI-custom-silicon narrative; buy only on confirmation, not extension failure. | 7% |
| EIS | Hold | Strong relative returns, but liquidity / geopolitical sensitivity keep it out of the core book. | 0% |
| GLD | Hold | Useful hedge, but weak 1m/3m momentum keeps it small. | 2% |
| GOOG | Buy | Best mix of earnings quality, AI monetization, liquidity, and recent fundamental validation. | 8% |
| HOOD | Sell | Weak reaction quality and softer transaction-revenue profile keep it out of the book. | 0% |
| META | Sell | Spending and legal-risk concerns still dominate despite notable outside investor interest. | 0% |
| NVDA | Hold | Important leader, but the current setup is still lower quality than SOXX / GOOG / AVGO. | 4% |
| QQQ | Buy | Best liquid growth-beta wrapper while tech leadership remains stronger than broad-market beta. | 8% |
| QTUM | Buy | Strong thematic trend, but keep sizing below the liquid core. | 4% |
| RKLB | Hold | Powerful long-run trend, but still only deserves a tiny, high-volatility satellite slot. | 1% |
| SHLD | Sell | Weak multi-timeframe profile does not deserve scarce risk budget. | 0% |
| SOXX | Buy | Strongest sector-level trend in the universe and best broad semiconductor expression. | 10% |
| VOO | Hold | Decent beta, but inferior alpha posture versus QQQ while growth leadership persists. | 0% |
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
- When Alpaca latest-price timestamps cluster on the prior session after-hours, treat them as **reference bars**, not proof of live execution quality.

## Last Run Summary
- Portfolio remains **100% cash**: **$10,000 equity, $10,000 cash, no positions**.
- **FMP historical performance** is still unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Fresh Reuters / Google News fallback kept leadership centered on **SOXX / GOOG / AVGO / QQQ**, while **META** and **HOOD** remained weak on reaction quality.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already captures the key safeguards around data fallbacks, stale-price awareness, friction, and tactical trigger refresh.

## Execution Summary — 2026-05-04 Hourly Cycle
- Confirmed the account remains **flat** with **$10,000 equity**, **$10,000 cash**, and **no open positions**.
- Refreshed full-universe multi-timeframe performance via the documented **Yahoo fallback** and refreshed latest **Alpaca reference prices** for all universe symbols.
- Confirmed that Alpaca latest prices still look like **2026-05-01 after-hours/reference bars**, so the tactical agent must require live cash-session confirmation before acting.
- Kept the preferred long list concentrated in **SOXX, GOOG, AVGO, and QQQ**, with **NVDA / QTUM** secondary and **GLD / RKLB** small only.
- No hourly portfolio trades were executed, and no prompt/code changes were made.

## Execution Summary — 2026-05-04 Tactical Cycle
- Confirmed the market was still **pre-open** at **07:10 ET**, with Alpaca clock showing next open at **09:30 ET**.
- Refreshed latest Alpaca bars for the full tactical universe; all prices were still stale **2026-05-01 reference bars**.
- No tactical triggers were met, so the book stayed **100% cash** with **$10,000 equity / $10,000 cash / no positions**.
- Next expected action: wait for live cash-session confirmation and only act on a clean breakout/reclaim that clears friction by at least **3x**.

## Execution Summary — 2026-05-04 Tactical Cycle (Current Run)
- Refreshed account, positions, and latest prices for the full universe: still **$10,000 equity / $10,000 cash / no positions**.
- Cross-checked Reuters/Google News fallback for the actionable leaders; no adverse catalyst forced action, and all Alpaca latest prices remained **2026-05-01 reference bars**.
- No orders were placed because none of the triggers cleared with live cash-session confirmation or sufficient edge over friction.
- Next expected action: continue waiting for live open, then only act on confirmed breakouts/reclaims in **SOXX, GOOG, AVGO, QQQ** first.

## Execution Summary — 2026-05-04 Tactical Cycle (Current Run)
- Confirmed account remains **$10,000 equity / $10,000 cash / no positions** with **0% gross exposure**.
- Market is still **closed / pre-open** with next open at **09:30 ET**, and Alpaca latest prices remain **2026-05-01 reference bars**.
- Checked Reuters-heavy Google News fallback for the actionable leaders; no fresh adverse catalyst forced action.
- No orders were placed because live cash-session confirmation was absent and the expected edge did not justify crossing friction.
- Next expected action: wait for live open, then prioritize only confirmed breakouts/reclaims in **SOXX, GOOG, AVGO, QQQ** before considering secondary names.
