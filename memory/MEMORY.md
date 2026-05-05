# Hourly Macro Memory
*Updated 2026-05-05 14:05 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio is still **positive in absolute dollars**, but it remains **behind SPY since inception**, so the strategy is still **off track for the dual mandate**. The problem is still **cash drag**: live gross exposure is only about **22.5%**, while the strongest trend cluster in the allowed universe remains **semiconductors, AI infrastructure, and large-cap growth**. Fresh fallback return data still shows **SOXX, AVGO, GOOG, QTUM, and QQQ** as the strongest medium-term leaders, while **META, HOOD, SHLD, and ARKX** remain weaker or lower-priority uses of capital.

The macro tape is cautious but not broken. Reuters-prioritized fallback news still flags **Middle East / oil risk** as the main macro threat, but intraday coverage also shows **Wall Street rebounding as oil eases despite the tension**. After the **RKLB recycle**, book quality improved. The next step should be a **modest, high-liquidity exposure increase**, not broad chasing. For the next hour, the preferred upgrade is **QQQ on confirmed strength**, because it reduces cash drag with less single-name risk than a fresh concentrated semiconductor add. **GOOG** remains a valid holding, but it is still **below cost basis**, so it is **not** an authorized add unless it first reclaims strength above the existing entry.

## Goal Check
- **Portfolio since inception:** **+0.35%** (**$10,034.65** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same period:** **+0.49%** (**724.15 live** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it still trails SPY by about 14 bps because cash exposure remains too high.**

## Daily Performance Review
- Earlier first-run review still stands: **AI / semiconductor leadership** is working, while **cash drag** has been the main reason the strategy is not beating SPY.
- Intraday update: the account is roughly **+0.35% vs prior close baseline**, while **SPY is up about +0.86% today** (**724.15 vs 718.01**), which confirms that current exposure is still too low for the 3-month objective.
- **What is working:** **AVGO, QQQ, QTUM, and SOXX** are all green; the **RKLB exit** removed the weakest held name.
- **What is not working:** **GOOG** is still below entry, and the book is still too cash-heavy to keep up with a firm large-cap growth tape.
- **What must change today:** modestly relax the reserve stance, keep turnover low, and authorize **one** liquid add only if the tape confirms. Do **not** broaden into low-liquidity or lower-conviction names.

## Portfolio State
- **Equity:** **$10,034.65**
- **Cash:** **$7,774.88**
- **Buying power:** **$17,809.53**
- **Gross exposure:** **22.52%**
- **Cash weight:** **77.48%**
- **Market status:** **open**
- **Alpaca clock timestamp:** **2026-05-05T14:00:36.358615393-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$431.94** | unrealized P&L **+$14.99** | allocation **4.30%**
  - **GOOG:** 1 share @ 386.64 | market value **$382.15** | unrealized P&L **-$4.49** | allocation **3.81%**
  - **QQQ:** 1 share @ 673.26 | market value **$682.06** | unrealized P&L **+$8.80** | allocation **6.80%**
  - **QTUM:** 2 shares @ 137.00 | market value **$278.73** | unrealized P&L **+$4.73** | allocation **2.78%**
  - **SOXX:** 1 share @ 481.95 | market value **$484.89** | unrealized P&L **+$2.94** | allocation **4.83%**
- **Overall unrealized P&L:** **+$26.97**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>`
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices:** **Alpaca CLI**
- **News / search fallback:** **Google News RSS** with Reuters-focused queries because no direct Google Search tool was available in the workspace
- **Coverage quality note:** coverage was sufficient for the **broad tape** and **Alphabet / AI / cloud**, mixed for **semiconductors**, and **insufficient** for clean **top-investor moves**, live **analyst-action screens**, and any high-conviction new **RKLB** catalyst
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T18-05-47Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T18-05-47Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T18-05-47Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T18-05-47Z.txt`
  - `temp_files/fmp_snapshot_2026-05-05T18-05-47Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T18-05-47Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T18-05-47Z.csv`
  - `temp_files/tech_levels_2026-05-05T18-05-47Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T18-05-47Z.json`

## Performance Snapshot Used This Run
- **Best 1w performers:** **SOXX +10.80%**, **GOOG +10.01%**, **AVGO +8.33%**, **QTUM +8.15%**, **EIS +5.66%**
- **Best 1m performers:** **SOXX +41.26%**, **AVGO +37.75%**, **GOOG +28.43%**, **QTUM +26.13%**, **QQQ +15.96%**
- **Weak 1w / 3m names:** **META -10.06% / -12.71%**, **HOOD -5.91% / -11.31%**, **RKLB -2.05% / -5.28%**, **SHLD +0.42% / -11.67%**, **ARKX -1.44% / -1.92%**

## Priority Actions For The Next Hour
1. Treat the live Alpaca account as the source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
2. Keep the book **constructively long but selective**; do **not** add to laggards or thin names.
3. Authorize **one** fresh add only: **QQQ 1 share above 683.2** during regular hours with confirmation **while SPY stays above 724.0** and tape quality remains orderly.
4. Relax the reserve slightly to address cash drag, but keep risk controlled: **gross exposure <= 30%**, **cash >= 70%**, and **no leverage**.
5. Keep **AVGO** and **SOXX** as core holds, not fresh adds, unless a future hourly cycle explicitly upgrades semiconductor concentration.
6. Keep **GOOG** as a hold only until it is back above its current average entry; **do not average down**.
7. If quote quality deteriorates, **SPY** loses short-term structure, or macro headlines worsen materially, **do nothing** and preserve capital.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; existing size already expresses the thesis and is working. | 4% |
| EIS | Hold | Trend is decent, but liquidity and expected alpha still trail the top ideas. | 0% |
| GLD | Hold | Hedge only if macro stress broadens into a true risk-off regime. | 0% |
| GOOG | Hold | Valid AI / cloud holding, but no fresh add is authorized below cost basis. | 4% |
| HOOD | Sell | Weak relative trend and lower thesis quality than current leaders. | 0% |
| META | Sell | Legal / spending overhang and poor relative trend keep it below preferred uses of capital. | 0% |
| NVDA | Hold | Structural winner, but not the best incremental use of capital right now versus a liquid index add. | 0% |
| QQQ | Buy | Best next add for reducing cash drag with lower idiosyncratic risk while large-cap growth leadership persists. | 14% |
| QTUM | Hold | Thematic sleeve still fits, but quote quality is thinner and current size is near target. | 3% |
| RKLB | Sell | Recycled out; low-conviction satellite no longer deserves capital today. | 0% |
| SHLD | Sell | Lower-priority theme than AI / growth leadership. | 0% |
| SOXX | Hold | Best semiconductor ETF in the universe; keep the current slot, but no new add this hour. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership remains intact. | 0% |
| ARKX | Hold | Inferior thematic expression versus QQQ, SOXX, or AVGO right now. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, SOXX, QTUM**
- **Satellite risk:** none after the **RKLB** recycle
- **Book assessment:** account quality improved after exiting **RKLB**, but the book is still **too underinvested** to beat SPY if leadership holds
- **Sizing note:** one additional **QQQ** share is acceptable because it raises beta efficiently while still keeping cash above **70%** and gross exposure below **30%**

## Near-Term Watchlist
- **QQQ:** preferred and only authorized fresh add this hour if price clears **683.2** in regular hours with confirmation and **SPY > 724.0**
- **GOOG:** hold only; watch for a future reclaim above **387+** before considering any add in a later hourly cycle
- **AVGO / SOXX:** keep as winners; monitor for future adds only if semis keep leading and concentration limits are revisited by a later hourly run
- **GLD:** monitor only if oil / Middle East headlines begin forcing a broader equity de-risking regime

## Macro Themes To Monitor
### Actionable now
- **Large-cap growth and AI leadership:** supports the existing **QQQ, AVGO, GOOG, QTUM, and SOXX** positions
- **Cash-drag repair:** the book needs a measured increase in exposure, but only through the highest-quality liquid setup

### Worth monitoring
- **Oil / Middle East stress:** still the clearest macro threat to growth multiples and market tone
- **Short-term index structure:** if **SPY** loses the 724 area and breadth weakens, skip the QQQ breakout plan
- **Quote-quality risk in thinner names:** especially **EIS, GLD, QTUM, SHLD, VOO, ARKX**, and any ETF print with obviously low trade count

### Interesting but not actionable yet
- **Top-investor portfolio changes:** fallback coverage remained insufficient this cycle
- **Analyst upgrade / downgrade screens:** fallback coverage remained insufficient this cycle
- **Space theme:** de-prioritized after the **RKLB** recycle until better catalyst quality appears

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
- When a symbol is already held, a fresh add must stay **above the current average entry price** unless a later hourly cycle explicitly authorizes a different reset process.

## Last Run Summary
- Refreshed live **Alpaca account, positions, market clock, and full-universe latest prices** during regular hours.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-prioritized Google News RSS fallback still shows a cautious macro tape around **oil / Middle East** headlines, but the broader market remains resilient enough to keep a measured long posture.
- Reconciled the live book to **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1** with **$10,034.65** equity and **$7,774.88** cash.
- The strategy remains **off track by a small margin versus SPY**, so the next-hour directive is: **hold the current winners, do not average down GOOG, and authorize one QQQ breakout add only if the broad tape confirms.**
- **Prompt review:** no prompt changes were made this run because no new prompt-specific ambiguity or execution failure was identified that required an immediate money-impacting edit.

## Recent Tactical Status
- Tactical execution stayed disciplined after the **RKLB** exit; no unauthorized trades were placed.
- See `memory/intraday_execution_log_2026-05-05.md` for the full intraday audit trail.
