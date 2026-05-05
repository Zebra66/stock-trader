# Hourly Macro Memory
*Updated 2026-05-05 09:00 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio is still **positive in absolute dollars and ahead of the S&P 500 since inception**, but the lead is small enough that discipline still matters more than activity. The tape remains biased toward **AI infrastructure, semiconductors, and high-quality platform/cloud winners**, while the main cross-current is **Middle East / oil-driven macro stress**. That argues for staying **constructively long but underinvested**, keeping the existing AI / semiconductor sleeve, and only deploying fresh cash into the **highest-quality liquid setup**.

That best incremental setup remains **GOOG**, not because it is the hottest chart in the universe, but because it combines **strong recent relative performance**, **constructive Reuters-dated cloud / AI coverage**, and a cleaner incremental diversification benefit versus simply adding more chip beta. **AVGO / SOXX / QQQ / QTUM** remain valid holds, but current semiconductor exposure is already enough for this account size. **HOOD** and **META** remain lower-quality timing setups, while **GLD** is only a contingency hedge if geopolitical stress broadens into a true risk-off regime.

## Goal Check
- **Portfolio since inception:** **+0.11%** (**$10,011.19** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same window:** **-0.37%** (**720.65** on 2026-05-01 close vs **718.01** on 2026-05-04 close)
- **Status:** **On track — positive in dollar terms and ahead of SPY, but the cushion is still thin.**

## Daily Performance Review
- **1D portfolio:** **+0.11%** using Alpaca **last_equity = $10,000.00** vs current equity **$10,011.19**
- **1D SPY:** **-0.37%**
- **1W / 2W portfolio:** **unavailable** because the live account is still too new for a reliable broker-side comparison window
- **1W / 2W SPY:** **+0.40% / +1.31%**
- **What is working:** concentrated exposure in AI / semis, small position sizes, and patience while the edge is still being proven
- **What is not working:** the account is not compounding fast enough yet to feel safe versus the 3-month objective; overtrading or trimming winners too quickly would likely make that worse
- **What must change if progress stalls:** add only to the highest-quality winner with confirmation, stop recycling capital out of strong trends too early, and keep avoiding weak-relative-strength substitutes

## Portfolio State
- **Equity:** **$10,011.19**
- **Cash:** **$7,618.05**
- **Buying power:** **$17,629.24**
- **Gross exposure:** **23.91%**
- **Cash weight:** **76.09%**
- **Market status:** **closed / pre-market**
- **Alpaca clock timestamp:** **2026-05-05T09:00:34.27153152-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$419.56** | unrealized P&L **+$2.61** | allocation **4.19%**
  - **QQQ:** 1 share @ 673.26 | market value **$677.69** | unrealized P&L **+$4.43** | allocation **6.77%**
  - **QTUM:** 2 shares @ 137.00 | market value **$275.76** | unrealized P&L **+$1.76** | allocation **2.75%**
  - **RKLB:** 1 share @ 80.88 | market value **$81.52** | unrealized P&L **+$0.64** | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$938.60** | unrealized P&L **+$1.74** | allocation **9.38%**
- **Overall unrealized P&L:** **+$11.18**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>`
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS**, prioritizing **Reuters** results when available
- **Second-source quote confirmation:** **Yahoo Finance intraday chart API** for thin actionable names such as **GOOG** and **EIS**
- **Coverage quality note:** market / macro coverage was sufficient; **GOOG** coverage stayed constructive; **META** and **HOOD** had recent but lower-quality / less actionable coverage; **top-investor move** coverage remained insufficient
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T13-00-31Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T13-00-31Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T13-00-31Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T13-00-31Z.txt`
  - `temp_files/fmp_test_2026-05-05T13-00-31Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T13-00-31Z.json`
  - `temp_files/yahoo_snapshot_2026-05-05T13-00-31Z.csv`
  - `temp_files/support_levels_2026-05-05T13-00-31Z.json`
  - `temp_files/yahoo_intraday_confirmation_2026-05-05T13-00-31Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T13-00-31Z.json`
  - `temp_files/hourly_summary_2026-05-05T13-00-31Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- **Best 1m performers:** **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- **Weak 1w / 3m names:** **META -10.05% / -14.81%**, **HOOD -8.81% / -23.05%**, **NVDA -8.37% / +3.85%**, **GLD -3.53% / -6.80%**, **SHLD +0.89% / -9.52%**

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. The market is **still pre-open**. **No trade is authorized while closed.**
3. **Hold current winners** and avoid trimming merely because they tag marginal new highs; the book is too small and underinvested to monetize tiny extensions aggressively.
4. Keep gross exposure capped near **30%** and preserve at least **70% cash** until the account builds a wider absolute-return cushion.
5. The only approved fresh buy candidate remains **GOOG**, but only on **regular-hours confirmation**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure leader; existing size is enough. | 4% |
| EIS | Hold | Relative strength is decent, but liquidity / quote quality still limit conviction. | 0% |
| GLD | Sell | Not needed unless geopolitical stress broadens into persistent risk-off. | 0% |
| GOOG | Buy | Best missing liquid-quality long; strong relative trend plus constructive cloud / AI news. | 4% |
| HOOD | Sell | Weaker trend quality and weaker recent fundamental/news backdrop than preferred alternatives. | 0% |
| META | Sell | Too much execution and legal-noise risk relative to GOOG and current chip holdings. | 0% |
| NVDA | Hold | Structural winner, but current semiconductor exposure already captures the theme. | 0% |
| QQQ | Hold | Core broad-growth exposure remains appropriate. | 7% |
| QTUM | Hold | Secondary thematic sleeve still fits, but do not add. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense still ranks below AI / growth leadership in this universe. | 0% |
| SOXX | Hold | Best sector-level semiconductor expression; already near target size. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, QQQ, SOXX, QTUM**
- **Satellite risk:** **RKLB** only
- **Current book assessment:** winners are still working, size is controlled, and no held position currently demands an urgent exit while the market is closed

## Near-Term Watchlist
- **GOOG:** only approved fresh-long candidate for the next regular session; Yahoo confirmed a thin pre-market print near **380.6** against a regular-session **5-day high of 384.18**
- **NVDA:** monitor only; no incremental buy while AVGO / SOXX already express the same macro theme
- **GLD:** watch only as a hedge candidate if oil / geopolitical stress starts forcing broader growth-multiple compression

## Macro Themes To Monitor
### Actionable now
- **AI capex / cloud monetization:** supports **GOOG, AVGO, QQQ, SOXX, QTUM**
- **Semiconductor leadership with increasing selectivity:** favorable for holding current chip exposure, but not for indiscriminate adding

### Worth monitoring
- **Middle East / oil shock risk:** if it spreads into a true equity risk-off move, tighten stops and revisit **GLD / cash** posture
- **Thin pre-market / after-hours quote quality:** low trade counts are themselves a risk-control input; weak confirmation means no order

### Interesting but not actionable yet
- **Top-investor portfolio commentary:** fallback coverage remained insufficient this cycle
- **RKLB / space theme:** acceptable as a tiny satellite, but not strong enough to drive book-level allocation changes

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

## Last Run Summary
- Refreshed the live Alpaca account, positions, market clock, and full-universe reference prices; the market remains **closed / pre-market**.
- Confirmed the book is still **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$10,011.19 equity**, **$7,618.05 cash**, and about **23.9% gross exposure**.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Fallback Reuters / Google News RSS kept the macro read constructive for **AI / cloud**, but highlighted **oil / Middle East stress** as the main near-term macro risk to monitor.
- Kept **GOOG** as the only fresh-long candidate, but only above **384.5** with regular-hours confirmation or on a same-session reclaim above **379.0** after testing the **376.8-377.8** pullback zone.
- **Prompt review:** found a real conflict between prompt commit instructions and repo policy in `AGENTS.md`; no prompt edit was made this cycle, and `AGENTS.md` remains authoritative.
- **Strategy:** stay long a small AI / semiconductor sleeve, keep cash high, and avoid shorts or forced trades this hour.
