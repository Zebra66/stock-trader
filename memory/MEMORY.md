# Hourly Macro Memory
*Updated 2026-05-05 06:05 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio is still **slightly positive in absolute dollars and modestly ahead of the S&P 500 since inception**, but the lead is too small to call durable. The correct posture remains **controlled long exposure with high cash**, centered on the strongest trend in the approved universe: **AI / semiconductor / cloud infrastructure leadership**. The current book already expresses that through **AVGO, QQQ, SOXX, and QTUM**, with **RKLB** kept only as a tiny satellite.

This run is still **pre-market / closed**, and Alpaca’s overnight bars remain **thin or stale** for several names, especially **GOOG, EIS, GLD, META, NVDA, QQQ, QTUM, and SOXX**. Yahoo Finance chart data again confirmed the regular-session reference prices and multi-timeframe structure. The main conclusion is unchanged: **hold the current sleeve, preserve cash, and authorize fresh action only on regular-hours confirmation**. **GOOG** remains the best missing liquid-quality long; **HOOD** remains weak and non-actionable for longs.

## Goal Check
- **Portfolio since inception:** **+0.03%** (**$10,003.30** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same comparison window:** **-0.37%** (**720.65** on 2026-05-01 close vs **718.01** on 2026-05-04 close)
- **Status:** **On track — positive in dollar terms and ahead of SPY, but only by a thin margin that still requires disciplined risk control.**

## Daily Performance Review
- **1D portfolio:** about **+0.03%** using Alpaca `last_equity` (**$10,000.00**) vs current equity (**$10,003.30**)
- **1D SPY:** about **-0.37%**
- **1W / 2W portfolio:** **unavailable** because the account is too new for a reliable broker-side comparison window
- **1W / 2W SPY:** about **+0.40% / +1.31%** from the Yahoo Finance fallback snapshot
- **What is working:** concentrated exposure in AI / semiconductor leaders, restrained turnover, and high cash while conviction is still forming
- **What is not working:** the edge is still tiny; recent execution has not yet proven it can compound enough to meet the 3-month objective without sharper entry selectivity
- **What must change if performance slips:** reduce low-conviction turnover even further, cut weak satellites faster, and deploy new cash only into the highest-quality liquid leader with confirmed momentum or reclaim

## Portfolio State
- **Equity:** **$10,003.30**
- **Cash:** **$7,618.05**
- **Buying power:** **$17,621.35**
- **Gross exposure:** about **23.8%**
- **Market status:** **closed**
- **Alpaca clock timestamp:** **2026-05-05T06:05:17.744239554-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$418.80** | unrealized P&L **+$1.85** | allocation **4.19%**
  - **QQQ:** 1 share @ 673.26 | market value **$676.60** | unrealized P&L **+$3.34** | allocation **6.76%**
  - **QTUM:** 2 shares @ 137.00 | market value **$273.20** | unrealized P&L **-$0.80** | allocation **2.73%**
  - **RKLB:** 1 share @ 80.88 | market value **$81.25** | unrealized P&L **+$0.37** | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$935.40** | unrealized P&L **-$1.46** | allocation **9.35%**
- **Overall unrealized P&L:** **+$3.30**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **Quote confirmation for thin overnight bars:** **Yahoo Finance chart meta / daily chart fallback**
- **News / search fallback:** **Google News RSS** queried from Bun because a direct Google Search workspace tool was unavailable
- **News quality note:** **GOOG** remained constructive, **HOOD** remained weak, **AVGO / NVDA** coverage was mixed and mostly lower quality, and **top-investor** coverage was insufficient this cycle
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T10-05-15Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T10-05-15Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T10-05-15Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T10-05-15Z.txt`
  - `temp_files/fmp_all_2026-05-05T10-05-15Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T10-06-03-849Z.json`
  - `temp_files/yahoo_snapshot_2026-05-05T10-06-03-849Z.csv`
  - `temp_files/support_levels_2026-05-05T10-06-03-849Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T10-06-42-760Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- **Best 1m performers:** **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- **Best 3m performers:** **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- **Weak 1w / 3m names:** **META -10.05% / -13.59%**, **HOOD -8.81% / -14.86%**, **NVDA -8.37% / +6.93%**, **GLD -3.53% / -2.91%**, **SHLD +0.89% / -8.54%**

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and several overnight prints are **thin**, require **regular-hours confirmation** before any tactical action.
3. **Hold all existing positions** while they remain above refreshed stop levels; do **not** add to current holdings this hour.
4. Keep gross exposure capped near **30%** and preserve at least **70% cash** until the account shows more durable absolute gains.
5. The only approved fresh-buy candidate remains **GOOG**, and only on a **regular-hours breakout / reclaim** with confirmation.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; current sleeve is already filled. | 4% |
| EIS | Hold | Trend is acceptable, but liquidity and quote quality remain weak. | 0% |
| GLD | Sell | Growth leadership still outranks gold while stress has not broadened enough to justify rotation. | 0% |
| GOOG | Buy | Best missing liquid-quality long if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Earnings/news tone and trend quality remain weak versus better alternatives. | 0% |
| META | Sell | Relative trend and setup quality still lag GOOG and the preferred semiconductor expressions. | 0% |
| NVDA | Hold | Structural winner, but current semiconductor exposure is already sufficient and timing is not the best in-universe. | 0% |
| QQQ | Hold | Existing broad-growth exposure remains near intended size. | 7% |
| QTUM | Hold | Valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense still ranks below AI / growth leadership in this universe. | 0% |
| SOXX | Hold | Best sector-level semiconductor expression already near target size. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, QQQ, SOXX, QTUM**
- **Satellite risk:** **RKLB** only
- **Largest current drag:** **SOXX**, but still inside a valid broader uptrend and above key short-term support

## Near-Term Watchlist
- **GOOG:** only approved fresh-long candidate for the next regular session
- **NVDA:** monitor only; no new capital while existing semiconductor exposure is already meaningful
- **GLD:** hedge candidate only if geopolitical / oil stress broadens into a true risk-off regime shift

## Macro Themes To Monitor
- **AI capex / cloud monetization:** still actionable via **GOOG / AVGO / SOXX / QQQ / QTUM**
- **Geopolitical oil shock risk:** monitor for growth-multiple compression
- **Space economy:** interesting but still secondary; express only through the tiny **RKLB** sleeve for now
- **Analyst / investor commentary:** use only when recent, dated, and aligned with price action

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
- A thin after-hours print in a normally liquid name is enough to require **regular-hours confirmation** or a **second-source quote check**.
- If Alpaca portfolio history is unavailable, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.
- When `MEMORY.md` starts accumulating repetitive intraday detail, move the detail to a dated execution log under `memory/` and keep only the distilled state in the main memory file.

## Last Run Summary
- Refreshed live Alpaca account, positions, market clock, and latest prices for the full universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$10,003.30 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Refreshed support / resistance structure and kept **GOOG** as the only fresh-long candidate, subject to regular-hours confirmation.
- Reviewed fallback news: **GOOG** stayed constructive, **HOOD** stayed weak, **macro oil / geopolitical** risk stayed worth monitoring, and **top-investor coverage** was insufficient for action.
- **No orders were placed** because the market is closed and several broker quotes were too thin for action.
- **Prompt review:** no prompt change made this cycle; the current hourly prompt already captures the main stale-data, fallback-search, and memory-maintenance failure modes.
- **Strategy:** stay long a small AI / semiconductor sleeve, keep cash high, and do not short anything this hour.

## Tactical Execution Summary — 2026-05-05 10:10 ET
- Refreshed live Alpaca account, positions, and latest prices for the full approved universe.
- Account remains about **$10,003.09 equity / $7,618.05 cash / $17,621.14 buying power** with **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
- No orders were placed because the market is closed and the actionable GOOG setup is still below trigger; the after-hours print remains too thin to treat as confirmation.
- News scan stayed constructive for **GOOG** and did not surface any same-day catalyst severe enough to override the hold posture.
- Next expected action: keep the current sleeve intact, wait for regular-hours confirmation, and only consider GOOG if it breaks and holds the stated trigger zone.
