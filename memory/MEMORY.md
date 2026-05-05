# Hourly Macro Memory
*Updated 2026-05-05 13:01 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio is still **positive in absolute dollars**, but it remains **slightly behind SPY since inception**, so the strategy is still **off track for the dual mandate**. The main reason remains **cash drag**: gross exposure is only about **23.26%**, while the strongest trend cluster in the allowed universe is still **AI infrastructure, semiconductors, and large-cap cloud / platform growth**. The latest fallback return snapshot again shows **SOXX, GOOG, QTUM, and AVGO** as the strongest 1-week to 1-month leaders, while **META, HOOD, and RKLB** remain weaker or less reliable for fresh capital.

The macro tape is a bit less forgiving than earlier in the session. Reuters-prioritized fallback news shows the **S&P 500 pulling back from a record high on Middle East worries**, so this is **not** the hour to broaden risk aggressively. At the same time, Reuters coverage remains supportive for **Alphabet / Google Cloud / AI monetization**, and the live book already has enough semiconductor exposure through **AVGO** and **SOXX**. That keeps the preferred plan unchanged: **stay selectively constructive, allow only one fresh GOOG add on confirmed strength, and keep RKLB as the first recycle candidate if it weakens further or offers a cleaner exit on a rebound.**

## Goal Check
- **Portfolio since inception:** **+0.31%** (**$10,031.49** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same window:** **+0.39%** (**723.44 live** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it still trails SPY by about 7 bps because the book remains too cash-heavy.**

## Daily Performance Review
- The first regular-session review from earlier today still holds: **AI / semiconductor leadership is working**, while **cash drag** and the **low-quality RKLB satellite** are the main drags on the 3-month objective.
- No new broker-native **1W / 2W** portfolio history was available after the first hourly run, so progress is still judged using **live equity**, the **$10,000 inception baseline**, and **SPY benchmark price history**.
- **What must change today:** keep turnover low, do not chase broad weakness, and add exposure only to the highest-quality liquid setup if the tape confirms. That still means **GOOG only** for a fresh add this hour.

## Portfolio State
- **Equity:** **$10,031.49**
- **Cash:** **$7,698.25**
- **Buying power:** **$17,729.74**
- **Gross exposure:** **23.26%**
- **Cash weight:** **76.74%**
- **Market status:** **open**
- **Alpaca clock timestamp:** **2026-05-05T13:01:06.104842978-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$429.96** | unrealized P&L **+$13.01** | allocation **4.29%**
  - **GOOG:** 1 share @ 386.64 | market value **$382.69** | unrealized P&L **-$3.95** | allocation **3.81%**
  - **QQQ:** 1 share @ 673.26 | market value **$681.34** | unrealized P&L **+$8.08** | allocation **6.79%**
  - **QTUM:** 2 shares @ 137.00 | market value **$278.26** | unrealized P&L **+$4.26** | allocation **2.77%**
  - **RKLB:** 1 share @ 80.88 | market value **$77.08** | unrealized P&L **-$3.80** | allocation **0.77%**
  - **SOXX:** 1 share @ 481.95 | market value **$484.03** | unrealized P&L **+$2.08** | allocation **4.82%**
- **Overall unrealized P&L:** **+$19.68**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>`
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS**, with **Reuters** prioritized and items older than **7 calendar days** treated as non-actionable background only
- **Coverage quality note:** coverage was sufficient for the **macro tape** and **Alphabet / GOOG**; mixed for fresh **semiconductor-specific news**; and **insufficient** for clean **top-investor moves**, fresh **analyst-action screens**, and any high-conviction new **RKLB** catalyst
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T17-01-04Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T17-01-04Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T17-01-04Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T17-01-04Z.txt`
  - `temp_files/fmp_snapshot_2026-05-05T17-01-04Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T17-01-04Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T17-01-04Z.csv`
  - `temp_files/tech_levels_2026-05-05T17-01-04Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T17-01-04Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **SOXX +10.29%**, **GOOG +10.08%**, **QTUM +7.86%**, **AVGO +7.51%**, **EIS +5.56%**
- **Best 1m performers:** **SOXX +42.48%**, **AVGO +36.65%**, **GOOG +29.91%**, **QTUM +26.52%**, **QQQ +16.45%**
- **Weak 1w / 3m names:** **META -10.39% / -12.96%**, **HOOD -5.65% / -11.07%**, **NVDA -7.33% / +9.54%**, **SHLD +0.70% / -11.43%**, **ARKX -1.50% / -1.98%**

## Priority Actions For The Next Hour
1. Treat the live Alpaca account as the source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
2. Stay **constructively long but selective**; do **not** broaden into weaker names while the market digests geopolitics / oil risk.
3. Allow **only one fresh add** this hour: **GOOG** on a clean regular-hours breakout **above 389.1** with confirmation.
4. Keep **gross exposure capped near 28%** and keep at least **72% cash** after any new trade; **no leverage** is authorized.
5. Keep **SOXX** and **AVGO** as holds, not adds; they already express the semiconductor / AI infrastructure theme.
6. Keep **RKLB** as the only active recycle candidate: sell it on a **rebound exit near resistance** or a **fresh break below nearby support**.
7. If quote quality deteriorates, **SPY** loses short-term structure, or geopolitical headlines sharply worsen, **do nothing** and preserve capital.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | High-quality AI infrastructure winner; current size already expresses the thesis. | 4% |
| EIS | Hold | Good trend, but liquidity and expected alpha still trail the top ideas. | 0% |
| GLD | Hold | Hedge only if macro stress becomes a true broader risk-off regime. | 0% |
| GOOG | Buy | Best next add in the universe if price reclaims resistance; strong cloud / AI momentum and supportive Reuters coverage. | 8% |
| HOOD | Sell | Weak relative trend and lower thesis quality than current leaders. | 0% |
| META | Sell | Legal / spending overhang and poor recent trend make it inferior to GOOG. | 0% |
| NVDA | Hold | Structural winner, but not the best incremental use of capital right now versus GOOG. | 0% |
| QQQ | Hold | Core broad-growth exposure remains valid, but no new add is needed this hour. | 7% |
| QTUM | Hold | Thematic sleeve still fits, but quote quality is thinner and size is already near target. | 3% |
| RKLB | Sell | Weakest held name with insufficient fresh catalyst support; recycle capital when possible. | 0% |
| SHLD | Sell | Lower-priority theme than AI / semiconductor leadership. | 0% |
| SOXX | Hold | Strongest semiconductor-sector vehicle in the universe; keep the recently restored position. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Inferior thematic expression versus SOXX, GOOG, or QQQ. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, SOXX, QTUM**
- **Satellite risk:** **RKLB** only
- **Book assessment:** the account is positive and only modestly behind SPY, but it is still **too underinvested** to meet the 3-month mandate without a selective exposure upgrade
- **Sizing note:** a single-share **GOOG** add remains acceptable because the cash floor stays above **72%** and gross exposure stays below the **28%** cap after a fill

## Near-Term Watchlist
- **GOOG:** preferred and only authorized fresh add if price clears **389.1** in regular hours with confirmation
- **RKLB:** recycle on a rebound near **79.2** or on a support failure below **76.6**
- **SOXX:** hold current position; no fresh add unless a future hourly cycle explicitly upgrades the target
- **GLD:** monitor only if oil / Middle East headlines begin forcing a broader equity de-risking regime

## Macro Themes To Monitor
### Actionable now
- **AI / cloud monetization:** supports **GOOG**, **QQQ**, **AVGO**, and the existing **SOXX** position
- **Selective semiconductor leadership:** keep exposure concentrated in liquid leaders rather than spreading into weaker or thinner names

### Worth monitoring
- **Oil / Middle East stress:** still the clearest macro threat to growth multiples and risk appetite
- **Short-term index tone:** if the broader tape weakens materially, skip breakout buying even in strong single names
- **Quote-quality risk in thinner names:** especially **EIS, GLD, QTUM, SHLD, ARKX**, and any ETF print with obviously light trade count

### Interesting but not actionable yet
- **Cerebras IPO / AI hardware buzz:** confirms AI appetite is still alive, but it does not change current portfolio actions
- **Top-investor portfolio changes:** fallback coverage remained insufficient this cycle
- **Analyst upgrade / downgrade screens:** fallback coverage remained insufficient this cycle
- **Space theme:** acceptable only as a tiny satellite until a cleaner catalyst appears

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power.
- Commission-free does **not** mean friction-free; include spread, slippage, CAT, SEC sell fees, and FINRA TAF in expected edge.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash / Bun and record that source in memory.
- Tactical price levels must be refreshed each hourly cycle; do **not** blindly reuse stale thresholds.
- The **live brokerage account** overrides stale memory; if memory and Alpaca disagree, trust Alpaca and update memory immediately.
- For thinner names or stale quotes, require fresh confirmation from a reliable live or second source before taking action.
- If fallback investor / analyst coverage is stale or noisy, explicitly say coverage was insufficient rather than forcing a thesis.
- **Google News RSS fallback can surface stale articles; apply a recency filter and treat stale or undated results as non-actionable background only.**
- A thin after-hours or pre-market print in a normally liquid name is enough to require **regular-hours confirmation** or a **second-source quote check**.
- If Alpaca portfolio history is unavailable, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.
- When `MEMORY.md` starts accumulating repetitive intraday detail, move the detail to a dated execution log under `memory/` and keep only the distilled state in the main memory file.
- Do not trim tiny winning positions merely because they touch marginal resistance; on a small underinvested book, premature profit-taking can hurt the absolute-return goal more than it helps.
- If a generic Google News RSS symbol query is sparse, retry with **Reuters-focused** or thesis-specific terms before declaring coverage insufficient.
- If the portfolio is positive but slightly trailing SPY because of cash drag, fix the problem with **selective exposure upgrades**, not with impulsive broad buying.
- Low-conviction satellites must earn their slot; if they lag while better liquid leaders remain available, recycle them.
- After **any unexpected live position change or execution anomaly**, refresh **positions and account immediately** and do **not** place a second order in that symbol until broker state is confirmed.
- When whole-share sizing makes a cash floor too restrictive to express the best idea, it is acceptable to modestly relax the cash floor **without using leverage** as long as gross exposure remains capped and the thesis quality is high.
- When the broad index starts slipping on macro headlines, keep the best single-name breakout candidate, but avoid broadening exposure into secondary ideas during the same hour.

## Last Run Summary
- Refreshed live **Alpaca account, positions, market clock, and full-universe latest prices** during regular hours.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-prioritized fallback news now shows a slightly softer tape because the **S&P 500 is pulling back on Middle East worries**, but **Alphabet / Google Cloud / AI monetization** still have the cleanest fundamental news support in the universe.
- Reconciled the live book to **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1** with **$10,031.49** equity and **$7,698.25** cash.
- The strategy remains **off track by a small margin versus SPY**, so the next-hour directive is: **hold current leaders, allow only a GOOG breakout add, and keep RKLB as the recycle candidate.**
- **Prompt review:** no prompt changes were made this run because no new prompt-specific ambiguity or execution failure was identified that would materially improve future decisions.

## Recent Tactical Status
- Tactical execution has remained disciplined and **flat** since the last hourly cycle because no authorized trigger has fired.
- See `memory/intraday_execution_log_2026-05-05.md` for the full intraday audit trail.

## Tactical Execution Summary — 2026-05-05 13:29 ET
- Refreshed live Alpaca state again: **equity $10,034.12**, **cash $7,698.25**, **buying power $17,732.37**, **gross exposure about 23.3%**, and **cash weight about 76.7%**.
- Live positions remain unchanged: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- Latest actionable prices: **AVGO $431.57**, **GOOG $380.94**, **QQQ $681.79**, **QTUM $139.51**, **RKLB $76.99**, **SOXX $485.57**, **SPY $723.85**.
- Decision: **no trades this cycle**; **GOOG** still failed to reach the **389.1** breakout trigger, **RKLB** remained above the downside recycle trigger, and none of the other hold / trim levels were hit.
- Next expected action: stay patient, keep new capital flat unless **GOOG** reclaims **389.1** with regular-hours confirmation, and use **RKLB** as the first recycle candidate if it later breaks the valid exit zone.

## Tactical Execution Summary — 2026-05-05 13:09 ET
- Refreshed live Alpaca state: **equity $10,031.91**, **cash $7,698.25**, **buying power $17,730.16**, and **gross exposure ~23.3%**.
- Live positions remain unchanged: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- Latest actionable prices: **GOOG $381.85** (still below the **389.1** breakout trigger), **SPY $723.24** (still above the **721.5** risk-off cutoff), and **RKLB $77.09** (still between the sell triggers).
- Decision: **no trades this cycle**; the only authorized fresh add did not trigger, and no stop / trim level was hit.
- Next expected action: stay selective, keep new capital flat unless **GOOG** reclaims **389.1** with regular-hours confirmation, and continue using **RKLB** as the recycle candidate if it later reaches a valid exit.

## Tactical Execution Summary — 2026-05-05 13:19 ET
- Refreshed live Alpaca account and positions again: **equity $10,032.53**, **cash $7,698.25**, **buying power $17,730.78**, and **gross exposure about 23.3%**.
- Live positions remain unchanged: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, RKLB 1, SOXX 1**.
- Latest prices: **GOOG $381.15** (still below the **389.1** breakout trigger), **SPY $723.55** (still above the **721.5** risk-off cutoff), **RKLB $77.34** (still between the recycle thresholds), and the other holdings all remained inside their hold zones.
- Decision: **no trades this cycle**; the setup quality did not justify forcing exposure, and the only authorized fresh add remained untriggered.
- Next expected action: keep the book selective, wait for a confirmed **GOOG** breakout or a valid **RKLB** recycle signal, and otherwise stay flat on new capital.

## Tactical Execution Summary — 2026-05-05 13:40 ET
- Refreshed live Alpaca account and positions after the tactical exit: **equity $10,033.60**, **cash $7,774.88**, **buying power $17,808.48**, and **gross exposure about 22.5%**.
- Executed the only active risk-control trade this cycle: **sold 1 share of RKLB at a marketable limit of $76.55** after the name slipped through the **76.6** regular-hours stop.
- Live positions are now **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
- Latest actionable prices still support the remaining book, with **GOOG** below breakout and **SPY** above the risk-off cutoff.
- Next expected action: stay patient, keep new capital flat unless **GOOG** reclaims **389.1** with regular-hours confirmation, and treat RKLB as fully recycled until a new thesis is authorized.

## Tactical Execution Summary — 2026-05-05 13:49 ET
- Refreshed live Alpaca state after the RKLB exit cleared through broker records: **equity $10,033.90**, **cash $7,774.88**, **buying power $17,808.78**, **gross exposure about 22.5%**, and **cash weight about 77.5%**.
- Live positions are now **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**; RKLB is fully exited.
- Latest prices: **AVGO $431.34**, **GOOG $381.99**, **QQQ $681.95**, **QTUM $139.505**, **RKLB $76.82**, **SOXX $485.40**, **SPY $723.91**.
- Decision: **no trades**; **GOOG** remains below the **389.1** breakout trigger, **RKLB** is no longer held, and the other hold / trim thresholds were not reached.
- Next expected action: stay flat on new capital unless **GOOG** reclaims **389.1** with regular-hours confirmation; otherwise keep the selective book unchanged.

## Tactical Execution Summary — 2026-05-05 14:10 ET
- Refreshed live Alpaca state again: **equity $10,036.99**, **cash $7,774.88**, **buying power $17,811.87**, **gross exposure about 22.5%**, and **cash weight about 77.4%**.
- Live positions remain **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**; no new position was opened.
- Latest actionable prices: **AVGO $432.75**, **GOOG $382.29**, **QQQ $682.46**, **QTUM $139.42**, **RKLB $77.06**, **SOXX $485.40**, **SPY $724.33**.
- News check: Reuters-prioritized Google News results stayed constructive for **Alphabet / AI**, while the broader tape still reflected **Middle East / oil** caution; no symbol-specific adverse catalyst changed the setup.
- Decision: **no trades**; **GOOG** stayed below the **389.1** breakout trigger, **SPY** stayed above the **721.5** risk-off cutoff, and the rest of the book remained inside hold zones.
- Next expected action: keep the portfolio selective, remain flat on new capital unless **GOOG** confirms the breakout, and continue monitoring **RKLB** only as a recycled/removed name.
