# Hourly Macro Memory
*Updated 2026-05-05 05:07 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The book remains **slightly above breakeven** and still ahead of the S&P 500 since inception, but the edge is **thin and not yet durable**, so the right posture is still **selective risk, high cash, and zero forced trades outside regular hours**. The strongest durable theme in this universe is still **AI / semiconductor / cloud infrastructure leadership**. The current portfolio already expresses that through **AVGO, QQQ, SOXX, and QTUM**, while **GOOG** remains the best missing large-cap quality long because recent cloud and AI execution has been stronger than the weaker alternatives in this universe.

This run is still **pre-market / closed** and several Alpaca prints are **thin or stale overnight**, including **GOOG, META, NVDA, QQQ, QTUM, SOXX, EIS, and GLD**. A second-source Yahoo chart check confirmed the regular-session reference prices for likely traded names, so the main takeaway is unchanged: **hold the existing sleeve, preserve cash, and only authorize fresh action on regular-hours confirmation**. Macro fallback headlines show **Middle East / oil-driven risk-off pressure**, but not enough fresh evidence to override the current growth leadership posture.

## Goal Check
- **Portfolio since inception:** **+0.02%** (**$10,002.34** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same comparison window:** **-0.37%** (**720.65** on 2026-05-01 close vs **718.01** on 2026-05-04 close)
- **Status:** **On track — the portfolio is modestly positive in absolute dollars and ahead of SPY, but the lead is too small to be considered durable.**

## Daily Performance Review
- **1D portfolio:** about **+0.02%** using Alpaca `last_equity` (**$10,000.00**) vs current equity (**$10,002.34**).
- **1D SPY:** **-0.37%**.
- **1W / 2W portfolio:** **unavailable** from the current broker workflow because the account is new and there is no reliable portfolio-history snapshot yet.
- **1W / 2W SPY:** **+0.89% / +1.98%**.
- **What is working:** concentrated exposure in AI / semiconductor leaders, restrained turnover, and high cash while signal quality is mixed.
- **What is not working:** the account edge is still tiny; there is not enough realized evidence yet that current execution can sustain both absolute gains and consistent benchmark outperformance.
- **What must change if performance slips during the regular session:** reduce low-conviction turnover further, cut weak satellites faster, and only deploy new cash into the highest-quality leader with confirmed liquidity and a clean technical trigger.

## Portfolio State
- **Equity:** **$10,002.34**
- **Cash:** **$7,618.05**
- **Buying power:** **$17,620.39**
- **Gross exposure:** about **23.8%**
- **Market status:** **closed**
- **Alpaca clock timestamp:** **2026-05-05T05:03:11.683632571-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$418.50** | unrealized P&L **+$1.55** | allocation **4.18%**
  - **QQQ:** 1 share @ 673.26 | market value **$676.34** | unrealized P&L **+$3.08** | allocation **6.76%**
  - **QTUM:** 2 shares @ 137.00 | market value **$272.92** | unrealized P&L **-$1.08** | allocation **2.73%**
  - **RKLB:** 1 share @ 80.88 | market value **$81.16** | unrealized P&L **+$0.28** | allocation **0.81%**
  - **SOXX:** 2 shares @ 468.43 | market value **$935.37** | unrealized P&L **-$1.49** | allocation **9.35%**
- **Overall unrealized P&L:** **+$2.34**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe.
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**.
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com`.
- **Brokerage / account / positions / prices:** **Alpaca CLI**.
- **Second-source quote confirmation for thin Alpaca prints:** **Yahoo Finance chart meta fallback**.
- **News / search fallback:** **Google News RSS** queried from Bun.
- **News quality note:** **GOOG** and **HOOD** had usable recent items; **macro oil / Middle East** coverage was usable background; **top-investor**, **RKLB**, and broad **semiconductor** coverage was sparse or stale enough to treat as non-actionable background only.
- **Audit trail:** see `memory/intraday_execution_log_2026-05-05.md` for the condensed execution log.
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T09-03-34Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T09-03-34Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T09-03-34Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T09-03-34Z.txt`
  - `temp_files/fmp_all_2026-05-05T09-03-34Z.txt`
  - `temp_files/yahoo_snapshot_2026-05-05T09-03-50-610Z.json`
  - `temp_files/yahoo_snapshot_2026-05-05T09-03-50-610Z.csv`
  - `temp_files/support_levels_2026-05-05T09-06-50-444Z.json`
  - `temp_files/yahoo_quote_confirmation_2026-05-05T09-06-27-721Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T09-05-24-599Z.json`
  - `temp_files/news_rss/macro_news_2026-05-05T09-05-58-056Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **GOOG +8.93%**, **EIS +4.60%**, **QTUM +2.88%**, **SOXX +1.46%**, **QQQ +1.30%**
- **Best 1m performers:** **SOXX +36.06%**, **AVGO +32.41%**, **GOOG +28.93%**, **QTUM +23.40%**, **RKLB +18.57%**
- **Best 3m performers:** **SOXX +31.01%**, **AVGO +25.79%**, **QTUM +16.23%**, **GOOG +10.07%**, **EIS +10.05%**
- **Weak 1w / 3m names:** **META -10.05% / -13.59%**, **HOOD -8.81% / -14.86%**, **NVDA -8.37% / +6.93%**, **GLD -3.53% / -2.91%**, **SHLD +0.89% / -8.54%**

## Fresh External Context
### Actionable now
- **GOOG:** still the best approved fresh-long candidate. Reuters-backed earnings / cloud coverage remained constructive, and Yahoo confirmed a regular-session reference price near **379.64** even though Alpaca after-hours showed only **1 trade** at **379.03**.
- **Current holdings:** **AVGO / QQQ / SOXX / QTUM / RKLB** remain inside acceptable hold bands; no forced trim or stop is justified while the market is closed.

### Worth monitoring
- **Macro risk sentiment:** recent headlines still point to oil and Middle East tension as a possible growth-multiple headwind.
- **NVDA relative timing:** still a structural winner, but short-term timing is weaker than the held semiconductor basket and weaker than GOOG as a fresh entry.
- **META relative weakness:** recent price action still lags the preferred AI leaders and does not justify replacing current exposure.

### Interesting but not actionable yet
- **Top-investor move headlines:** fallback coverage was insufficient this cycle.
- **Broad semiconductor basket news:** fresh high-quality coverage was limited; price leadership matters more than noisy headlines here.
- **RKLB:** remains a valid tiny satellite, but news flow was too thin to support any increase in conviction.

## Priority Actions For The Next Hour
1. Treat the **live Alpaca account** as source of truth: **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2**.
2. Because the market is **closed** and several overnight broker bars are **thin**, require **regular-hours confirmation** before any tactical action.
3. **Hold all existing positions** while they remain above refreshed stop levels; do **not** add to existing holdings this hour.
4. Keep gross exposure capped around **30%** and preserve at least **70% cash** until the account shows a more durable absolute gain.
5. The only active fresh-buy candidate remains **GOOG**, and only on **regular-hours confirmation** or **second-source quote confirmation**.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; current sleeve is already filled. | 4% |
| EIS | Hold | Trend is decent, but liquidity / quote quality remain too weak. | 0% |
| GLD | Sell | Growth leadership still ranks above gold; macro stress is not yet strong enough to rotate. | 0% |
| GOOG | Buy | Best missing liquid-quality long if regular-hours confirmation appears. | 4% |
| HOOD | Sell | Recent Reuters-backed earnings coverage stayed weak and trend quality lags. | 0% |
| META | Sell | Relative trend and setup quality still lag GOOG and the better chip expressions. | 0% |
| NVDA | Hold | Structural leader, but current semi exposure is already sufficient and timing is not best-in-universe. | 0% |
| QQQ | Hold | Existing broad-growth exposure remains near intended size. | 7% |
| QTUM | Hold | Valid secondary AI / quantum sleeve near target. | 3% |
| RKLB | Hold | Keep only as a tiny high-volatility satellite. | 1% |
| SHLD | Sell | Defense theme still ranks below AI / growth leadership. | 0% |
| SOXX | Hold | Best sector-level semiconductor expression already near target size. | 9% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Lower-quality thematic exposure than the current held basket. | 0% |

## Current Holdings Notes
- **Core held risk:** **AVGO, QQQ, SOXX, QTUM**
- **Satellite held risk:** **RKLB** only
- **Largest current drag:** **SOXX**, but still inside a valid broader uptrend and above key recent support

## Near-Term Watchlist
- **GOOG:** only approved fresh-long candidate for the next regular session
- **NVDA:** monitor only; no new capital while current semi exposure is already meaningful
- **GLD:** hedge candidate only if oil / geopolitical stress expands into a broader risk-off regime shift

## Macro Themes To Monitor
- **AI capex / cloud monetization:** still actionable via **GOOG / AVGO / SOXX / QQQ / QTUM**
- **Geopolitical oil shock risk:** monitor for broad growth multiple compression
- **Space economy:** interesting but still secondary to AI leadership; express only through the tiny **RKLB** sleeve for now
- **Analyst / investor commentary:** useful only when recent, dated, and aligned with price action

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
- When `MEMORY.md` starts accumulating repetitive closed-market tactical checks, move them to a dated execution log under `memory/` and keep only the distilled state in the main memory file.

## Last Run Summary
- Refreshed live Alpaca account, positions, market clock, and latest prices for the full universe.
- Confirmed the book remains **AVGO 1, QQQ 1, QTUM 2, RKLB 1, SOXX 2** with **$10,002.34 equity**, **$7,618.05 cash**, and about **23.8% gross exposure**.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Refreshed support / resistance bands from recent daily price structure and confirmed **GOOG** as the only fresh-long candidate, subject to regular-hours confirmation.
- Reviewed fallback news: **GOOG** remained constructive, **HOOD** remained weak, **macro oil / Middle East** risk stayed worth monitoring, and **top-investor / RKLB / broad semiconductor** coverage was insufficient for action.
- **No orders were placed** because the market is closed and several broker quotes were too thin for action.
- **Prompt review:** no prompt change made this cycle; the current hourly prompt already captures the main stale-data and fallback-news failure modes.
- **Strategy:** hold the current AI / semiconductor sleeve, keep cash high, and only act on a **confirmed GOOG trigger** or a **confirmed stop / trim event** in an existing holding.

## Tactical Execution Summary
*Updated 2026-05-05 05:40 ET by the Tactical Executor.*

- **What happened this cycle:** refreshed the live broker account, positions, market clock, and full universe prices; checked fresh GOOG / AVGO / macro oil headlines; and **placed no orders**.
- **Why no trade:** the market is **closed**, every actionable symbol is still below its confirmed entry / exit trigger, and the thin GOOG after-hours print was not enough to justify a trade.
- **Current live snapshot:** **$10,004.12 equity**, **$7,618.05 cash**, **$17,622.17 buying power**, about **23.8% gross exposure**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Key live price anchors:** **AVGO 418.80**, **EIS 132.54**, **GLD 414.26**, **GOOG 379.03**, **HOOD 76.56**, **META 609.52**, **NVDA 197.86**, **QQQ 676.80**, **QTUM 136.46**, **RKLB 81.21**, **SHLD 68.05**, **SOXX 468.17**, **VOO 660.10**, **ARKX 32.55**.
- **Next expected action:** wait for the regular session open, then only act if GOOG confirms a valid breakout or pullback reclaim; otherwise keep cash high and maintain the current sleeve.

## Tactical Execution Summary
*Updated 2026-05-05 05:10 ET by the Tactical Executor.*

- **What happened this cycle:** reviewed the live broker account, refreshed all universe quotes, checked GOOG catalyst risk, and **placed no orders**.
- **Why no trade:** the market is **closed**, the actionable names still need regular-hours confirmation, and all current holdings remain inside their stop / trim bands.
- **Current live snapshot:** **$10,001.61 equity**, **$7,618.05 cash**, **$17,619.66 buying power**, about **23.8% gross exposure**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Key live price anchors:** **GOOG 379.03**, **AVGO 416.51**, **QQQ 672.25**, **QTUM 135.63**, **RKLB 80.29**, **SOXX 460.76**.
- **Next expected action:** wait for the regular session, then reassess GOOG for a breakout / pullback trigger and reevaluate the held sleeve only if prices move through the listed trim or stop levels.

## Tactical Execution Summary
*Updated 2026-05-05 05:20 ET by the Tactical Executor.*

- **What happened this cycle:** refreshed the live broker snapshot, pulled latest prices for the full universe, and **placed no orders**.
- **Why no trade:** the market is still **closed**, the actionable symbols remain below their breakout triggers, and every existing holding is still above its stop level.
- **Current live snapshot:** **$10,001.54 equity**, **$7,618.05 cash**, **$17,619.59 buying power**, about **23.8% gross exposure**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Key live price anchors:** **GOOG 379.03**, **AVGO 418.4**, **QQQ 676.35**, **QTUM 136.46**, **RKLB 81.2**, **SOXX 467.31**.
- **Next expected action:** wait for regular-hours confirmation, then only act if GOOG reclaims its breakout / pullback trigger or one of the held names reaches a trim or stop threshold.

## Tactical Execution Summary
*Updated 2026-05-05 05:30 ET by the Tactical Executor.*

- **What happened this cycle:** refreshed the live broker account, positions, clock, and full-symbol quote set; checked recent Google News coverage for GOOG, AVGO, NVDA, and macro oil risk; and **placed no orders**.
- **Why no trade:** the market is **closed**, GOOG remains below the buy trigger on a thin after-hours print, and none of the held positions has reached a trim or stop level.
- **Current live snapshot:** **$10,003.07 equity**, **$7,618.05 cash**, **$17,621.12 buying power**, about **23.8% gross exposure**.
- **Current holdings:** **AVGO 1**, **QQQ 1**, **QTUM 2**, **RKLB 1**, **SOXX 2**.
- **Key live price anchors:** **GOOG 379.03**, **AVGO 419.00**, **QQQ 676.55**, **QTUM 136.46**, **RKLB 81.13**, **SOXX 467.71**.
- **Next expected action:** wait for regular-hours confirmation; if GOOG opens with a valid breakout or pullback reclaim, reassess for a 1-share entry, otherwise keep cash high and continue holding the current sleeve.
