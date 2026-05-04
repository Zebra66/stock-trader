# Hourly Macro Memory
*Updated 2026-05-04 by the Hourly Macro Strategist.*

## Current Macro Thesis
The tape is still **selectively risk-on**, but leadership remains narrow and quality-sensitive. The strongest 1m/3m trends in the universe are still **SOXX (+37.58% / +34.49%)**, **AVGO (+34.38% / +27.16%)**, **GOOG (+29.95% / +13.20%)**, **QTUM (+23.68% / +16.64%)**, and **QQQ (+15.38% / +8.41%)**. Reuters-heavy news fallback also stays broadly supportive of the AI stack: Alphabet delivered another cloud-led beat, semiconductor supply-chain coverage still points to robust AI demand, and Broadcom’s custom-silicon narrative remains intact.

The caution is that the market is still discriminating aggressively between **AI beneficiaries with visible monetization** and **AI spend stories without near-term payoff clarity**. Reuters-linked coverage remains negative on **META** and **HOOD**, while **NVDA** is still strategically important but has weaker recent price action than **SOXX / AVGO / GOOG**. Top-investor fallback checks add nuance rather than a wholesale view change: Berkshire/Ackman headlines are directionally supportive for **GOOG** and, to a lesser extent, **META**, but hedge-fund trimming of parts of big-tech/AI positioning reinforces the need to stay selective. With the account still flat and Alpaca prices still showing **stale 2026-05-01 after-hours reference bars**, the correct posture remains **patient deployment into confirmed leaders, with meaningful cash kept in reserve**.

## Portfolio State
- Equity: **$10,000**
- Cash: **$10,000**
- Buying power: **$20,000**
- Current positions: **none**
- Gross exposure: **0%**
- P/L: **$0 realized / $0 unrealized**
- Market status at review: **closed**; next open from Alpaca clock was **2026-05-04 09:30 ET**

## Fresh External Context
- **Macro / tape:** Reuters headlines point to a still-firm US equity tape, but with sensitivity to Middle East risk, oil, and the upcoming tech/Fed event flow.
- **AI / semis:** Reuters supply-chain coverage remains constructive on AI demand; TSMC / ASML-linked reporting still supports the semiconductor complex.
- **GOOG:** Reuters says Alphabet revenue topped expectations on a record cloud quarter; this keeps GOOG among the best quality setups in the universe.
- **AVGO:** Reuters coverage remains supportive of Broadcom’s long-duration custom-AI-silicon demand narrative.
- **META / HOOD:** Reuters coverage remains cautious: META is being penalized for AI-spend / legal-scrutiny concerns, and HOOD for weak transaction revenue / profit miss.
- **Top investor moves fallback:** Reuters / Google News fallback surfaced Berkshire’s Alphabet stake and Ackman’s Meta position; useful context, but price action still matters more than copying famous investors.
- **Crowding caution:** Reuters also surfaced hedge-fund trimming in parts of megacap / AI exposure, supporting a disciplined, non-chasing stance.

## Data & Research Sources Used This Run
- **Historical performance fallback:** Yahoo Finance chart API (`query1.finance.yahoo.com/v8/finance/chart/...`) because **`FMP_API_KEY` is not configured**.
- **Live/reference prices:** Alpaca CLI latest-price endpoint.
- **News / search fallback:** Google News RSS queries via bash, prioritizing Reuters and other major outlets because no direct Google Search workspace tool surfaced.
- **Raw artifacts:** `temp_files/hourly_market_snapshot_yahoo_2026-05-04.json`, `temp_files/hourly_latest_prices_2026-05-04.jsonl`, `temp_files/alpaca_account_2026-05-04_hourly.json`, `temp_files/alpaca_positions_2026-05-04_hourly.json`, `temp_files/alpaca_clock_2026-05-04_hourly.json`, `temp_files/news_rss/`.

## Performance Snapshot Used This Run
- Best **1m** performers: **SOXX +37.58%**, **AVGO +34.38%**, **GOOG +29.95%**, **QTUM +23.68%**, **RKLB +20.28%**
- Worst **1m** performers: **SHLD -7.57%**, **GLD -3.34%**, **HOOD +5.06%**, **META +5.10%**, **ARKX +9.60%**
- Best **3m** performers: **SOXX +34.49%**, **AVGO +27.16%**, **QTUM +16.64%**, **GOOG +13.20%**, **EIS +10.42%**
- Weak / broken **3m** names: **RKLB -1.57%**, **GLD -4.89%**, **SHLD -9.73%**, **META -15.04%**, **HOOD -25.95%**
- Best **1y** performers: **RKLB +256.28%**, **SOXX +153.69%**, **GOOG +135.41%**, **AVGO +113.49%**, **QTUM +79.15%**

## Priority Actions For The Next Hour
1. Keep the book **flat until live cash-session confirmation** appears; the current Alpaca bars are stale after-hours/reference prints.
2. Prioritize starter longs only in **SOXX, GOOG, AVGO, and QQQ**; these remain the cleanest liquid expressions of the current macro trend.
3. Treat **NVDA** and **QTUM** as secondary adds only after reclaim/breakout confirmation; keep **RKLB** as a very small satellite trade only.
4. Keep at least **54% cash** and size from **account equity**, not raw margin buying power.
5. Keep **META, HOOD, SHLD** sidelined; keep **GLD** small and purely diversifying unless macro stress clearly accelerates.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Elite 1m/3m momentum plus durable custom-AI-silicon demand story; only buy on confirmation, not on failed extension. | 7% |
| EIS | Hold | Strong returns, but liquidity and geopolitical/event risk keep it outside the core book. | 0% |
| GLD | Hold | Valid hedge/diversifier, but weak 1m/3m momentum argues for only a small role. | 2% |
| GOOG | Buy | Best blend of earnings quality, cloud/AI monetization, liquidity, and external validation. | 8% |
| HOOD | Sell | Weak earnings reaction and softer transaction-revenue profile keep it in the penalty box. | 0% |
| META | Sell | Ackman interest is notable, but current market verdict still punishes spending and legal-risk uncertainty. | 0% |
| NVDA | Hold | Long-term leader, but current tactical setup still trails SOXX / AVGO / GOOG in quality. | 4% |
| QQQ | Buy | Best liquid growth-beta vehicle while tech leadership remains stronger than broad-market beta. | 8% |
| QTUM | Buy | Strong thematic momentum, but keep size below the liquid core because execution quality is weaker than mega-cap leaders. | 4% |
| RKLB | Hold | Strong long-run trend, but still belongs only in a small, high-volatility satellite slot. | 2% |
| SHLD | Sell | Weak multi-timeframe profile does not deserve scarce risk budget. | 0% |
| SOXX | Buy | Strongest sector-level trend in the universe and best broad semiconductor/AI expression. | 11% |
| VOO | Hold | Good beta, but inferior alpha posture versus QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Improved, but still a lower-quality way to express the same theme than SOXX / QQQ / RKLB. | 0% |

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

## Last Run Summary
- The portfolio remains **100% cash**: **$10,000 equity, $10,000 cash, no positions**.
- **FMP historical performance** is still unavailable because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Fresh fallback news kept the leadership view centered on **SOXX / GOOG / AVGO / QQQ**, while **META** and **HOOD** remained weak on reaction quality.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already contains the critical safeguards around fallback data, tactical trigger refresh, and friction awareness.

## Execution Summary — 2026-05-04 Hourly Cycle
- Confirmed the account remains **flat** with **$10,000 equity**, **$10,000 cash**, and **no open positions**.
- Refreshed full-universe multi-timeframe performance via the documented **Yahoo fallback** and refreshed latest **Alpaca reference prices** for all universe symbols.
- Confirmed that Alpaca price bars still look like **2026-05-01 after-hours/reference prints**, so the tactical agent must require live cash-session confirmation before acting.
- Updated the preferred long list to stay concentrated in **SOXX, GOOG, AVGO, and QQQ**, with **NVDA / QTUM** secondary and **RKLB / GLD** small only.
- No hourly portfolio trades were executed.

## Execution Summary — 2026-05-04 Tactical Cycle
- Confirmed the account remains **100% cash** with **$10,000 equity**, **$10,000 cash**, and **no open positions**.
- Refreshed latest Alpaca reference prices for the full universe: **SOXX 464.76, GOOG 382.31, AVGO 419.98, QQQ 673.05, NVDA 198.23, QTUM 135.12, GLD 423.29, RKLB 79.15, EIS 131.53, META 609.31, HOOD 73.67, SHLD 67.91, VOO 662.63, ARKX 32.81**.
- No tactical buy/sell trigger fully fired once stale 2026-05-01 reference bars were considered; per directive, I did **not** force pre-open fills.
- Google News / Reuters checks did not surface a fresh adverse catalyst strong enough to override the no-trade posture for this cycle.
- Next expected action: keep cash until a symbol cleanly clears an entry trigger in live cash-session data, then prioritize **SOXX / GOOG / AVGO / QQQ** in that order.

## Execution Summary — 2026-05-04 Tactical Cycle (10-Minute Refresh)
- Rechecked the full universe after the hourly pass; account is still **100% cash** with **$10,000 equity** and **no open positions**.
- Latest Alpaca prints remained the same stale **2026-05-01 reference bars** for all tracked symbols, so no live cash-session entry or exit was actionable.
- No orders were submitted; the correct next action remains to wait for fresh live prices and only then act on the listed trigger bands.
- Current tactical stance: stay concentrated on **SOXX, GOOG, AVGO, QQQ** if live confirmation appears, otherwise preserve cash.

## Execution Summary — 2026-05-04 Tactical Cycle (Post-Search Refresh)
- Confirmed no positions and no allocation drift; the book remains **100% cash**.
- Checked recent Google News / Reuters coverage for **AVGO, GOOG, SOXX, QQQ, and NVDA**; nothing surfaced that justified overriding the no-trade posture in the absence of live cash-session confirmation.
- No portfolio, code, or prompt changes were made this cycle.
- Next expected action: wait for live market prints and only then consider entries in the priority order **SOXX -> GOOG -> AVGO -> QQQ -> NVDA -> QTUM -> GLD -> RKLB**.

## Execution Summary — 2026-05-04 Tactical Cycle (10-Minute Executor Refresh #3)
- Reconfirmed the account is still **100% cash** with **$10,000 equity** and **no open positions**.
- Refreshed latest Alpaca prints for **AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, and ARKX**; all remained the same stale **2026-05-01 reference bars**.
- Rechecked news for the priority names and found no fresh adverse catalyst, but stale pricing still blocked any actionable entry or exit.
- No orders were submitted; next expected action remains to wait for live cash-session confirmation and then prioritize **SOXX / GOOG / AVGO / QQQ** if triggers fire.

## Execution Summary — 2026-05-04 Tactical Cycle (10-Minute Executor Refresh #2)
- Rechecked the account, positions, and full tracked universe after the latest directive refresh; the book is still **100% cash** with **$10,000 equity** and **no open positions**.
- Latest Alpaca prices for **AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, and ARKX** were still the stale **2026-05-01** reference prints, so no entry/exit met the live-session requirement.
- Quick Reuters/Google News checks on the priority names did not reveal any fresh adverse catalyst that would change the posture, but stale pricing still blocked execution.
- No orders were submitted; next expected action remains to wait for live cash-session confirmation and then prioritize **SOXX / GOOG / AVGO / QQQ** if triggers fire.
