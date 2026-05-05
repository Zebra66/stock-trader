# Hourly Macro Memory
*Updated 2026-05-05 07:00 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The account remains **slightly positive in absolute dollars and ahead of the S&P 500 since inception**, but the edge is still too small to call durable. The right posture is still **controlled long exposure with high cash**, concentrated in the approved universe’s best trend complex: **AI infrastructure, semiconductors, and large-cap cloud / platform winners**. The held sleeve already expresses that through **AVGO, QQQ, SOXX, QTUM**, with **RKLB** only as a tiny satellite.

Fresh fallback news was mixed in quality, but the best recent and dated signal stayed constructive for **Alphabet / Google**. Recent Reuters coverage highlighted **record cloud results, a stronger Google Cloud AI position, and hyperscaler earnings as the next key test for the AI-led tape**. That keeps **GOOG** as the best missing liquid-quality long in the universe. By contrast, **HOOD** and **META** still have weaker relative trend quality, **GLD** is losing momentum while the tape still favors growth, and current semiconductor exposure is already meaningful enough that **NVDA** does not need to displace GOOG right now.

## Goal Check
- **Portfolio since inception:** **+0.02%** (**$10,001.50** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same window:** **-0.37%** (**720.65** on 2026-05-01 close vs **718.01** on 2026-05-04 close)
- **Status:** **On track — positive in dollar terms and ahead of SPY, but only by a thin margin that still demands disciplined risk control and selective deployment.**

## Daily Performance Review
- **1D portfolio:** **+0.02%** using Alpaca **last_equity = $10,000.00** vs current equity **$10,001.50**
- **1D SPY:** **-0.37%**
- **1W / 2W portfolio:** **unavailable** because the account is too new for a reliable broker-side window comparison
- **1W / 2W SPY:** **+0.40% / +1.31%**
- **What is working:** concentrated exposure in AI / semis, low turnover, and high cash while the edge remains unproven
- **What is not working:** the book is not compounding fast enough yet to satisfy the 3-month objective with confidence; the current lead over SPY is very small
- **What must change if performance slips:** deploy only into the highest-quality liquid leader with confirmation, keep cutting low-conviction ideas before they become drags, and avoid substituting lower-quality trades just to stay busy

## Portfolio State
- **Equity:** **$10,001.50**
- **Cash:** **$7,618.05**
- **Buying power:** **$17,619.55**
- **Gross exposure:** **23.83%**
- **Cash weight:** **76.17%**
- **Market status:** **closed / pre-market**
- **Alpaca clock timestamp:** **2026-05-05T07:00:40.466620437-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$418.28** | unrealized P&L **+$1.33** | allocation **4.18%**
  - **QQQ:** 1 share @ 673.26 | market value **$676.05** | unrealized P&L **+$2.79** | allocation **6.76%**
  - **QTUM:** 2 shares @ 137.00 | market value **$273.20** | unrealized P&L **-$0.80** | allocation **2.73%**
  - **RKLB:** 1 share @ 80.88 | market value **$81.10** | unrealized P&L **+$0.22** | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$934.82** | unrealized P&L **-$2.04** | allocation **9.35%**
- **Overall unrealized P&L:** **+$1.50**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS**, with Reuters-focused retry queries when generic symbol searches were sparse
- **Actionable dated headlines used:** Reuters items from **2026-04-29 to 2026-04-30** on hyperscaler / AI-capex earnings risk and Google Cloud / Alphabet strength
- **Coverage quality note:** **GOOG** remained constructive; **semiconductor / AI macro** stayed constructive but increasingly selective; **HOOD** coverage stayed stale / weak; **top-investor move** coverage was insufficient this cycle
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T11-00-39Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T11-00-39Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T11-00-39Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T11-00-49Z.txt`
  - `temp_files/fmp_all_2026-05-05T11-01-04Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T11-01-35-3NZ.json`
  - `temp_files/yahoo_snapshot_2026-05-05T11-01-35-3NZ.csv`
  - `temp_files/support_levels_2026-05-05T11-01-35-3NZ.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T11-01-35-3NZ.json`
  - `temp_files/news_rss/hourly_news_extra_2026-05-05T11-01-53-3NZ.json`
  - `temp_files/hourly_summary_2026-05-05T11-02-43Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- **Best 1m performers:** **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- **Weak 1w / 3m names:** **META -10.05% / -13.52%**, **HOOD -8.81% / -14.86%**, **NVDA -8.37% / +6.94%**, **GLD -3.53% / -2.91%**, **SHLD +0.89% / -8.54%**

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and many overnight broker bars are **thin**, authorize **no trade while closed** and require **regular-hours confirmation** before any actionable order.
3. **Hold all current positions** while they remain above refreshed stop levels.
4. Keep gross exposure capped near **30%** and preserve at least **70% cash** until the book builds a more meaningful absolute-return cushion.
5. The only approved fresh-buy candidate remains **GOOG**, and only on a **regular-hours breakout / reclaim** with confirmation.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure leader; current sleeve is already filled. | 4% |
| EIS | Hold | Trend is acceptable, but liquidity and broker quote quality remain weak. | 0% |
| GLD | Sell | Growth leadership still outranks gold while broad risk-off demand is not dominating. | 0% |
| GOOG | Buy | Best missing liquid-quality long; recent dated newsflow and relative strength support a monitored entry. | 4% |
| HOOD | Sell | Trend quality and recent dated coverage remain weaker than better alternatives. | 0% |
| META | Sell | Relative trend and setup quality still lag GOOG and the preferred semiconductor expressions. | 0% |
| NVDA | Hold | Structural winner, but current semiconductor exposure is already sufficient and timing ranks behind GOOG. | 0% |
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
- **Largest current drag:** **SOXX**, but the broader trend remains constructive and the position is still within plan size

## Near-Term Watchlist
- **GOOG:** only approved fresh-long candidate for the next regular session
- **NVDA:** monitor only; no new capital while existing semiconductor exposure is already meaningful
- **GLD:** hedge candidate only if geopolitical / oil stress broadens into a true risk-off regime shift

## Macro Themes To Monitor
### Actionable now
- **Hyperscaler AI capex / cloud monetization:** supports **GOOG, AVGO, QQQ, SOXX, QTUM**
- **Semiconductor leadership with growing selectivity:** favorable for holding **AVGO / SOXX**, but do not widen chip exposure indiscriminately

### Worth monitoring
- **Geopolitical oil shock / macro stress:** watch for growth-multiple compression that could justify a partial rotation toward defense or gold
- **Quote quality in pre-market / after-hours:** thin bars are themselves a risk-control input; weak confirmation means no trade

### Interesting but not actionable yet
- **Space economy / RKLB newsflow:** okay for a tiny satellite, not large enough or liquid enough to drive book-level capital allocation
- **Top-investor portfolio commentary:** coverage was insufficient this cycle, so do not trade on it

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
- If a generic Google News RSS symbol query is sparse, retry with **Reuters-focused** or thesis-specific query terms before declaring coverage insufficient.

## Last Run Summary
- Refreshed live Alpaca account, positions, market clock, and latest prices for the full approved universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$10,001.50 equity**, **$7,618.05 cash**, and **23.83% gross exposure**.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Refreshed support / resistance structure and kept **GOOG** as the only fresh-long candidate, subject to **regular-hours confirmation**.
- Used **Google News RSS** with **Reuters-focused retry queries**; recent actionable items supported **GOOG / AI-capex leadership**, while **top-investor** and **HOOD** coverage were not strong enough to change positioning.
- **No orders were placed** because the market is closed and several broker quotes were too thin for action.
- **Prompt review:** no prompt change made this cycle; no new failure mode justified altering `prompts/hourly.txt`.
- **Strategy:** stay long a small AI / semiconductor sleeve, keep cash high, and do not short anything this hour.
