# Hourly Macro Memory
*Updated 2026-05-05 16:01 ET by the Hourly Macro Strategist.*

## Current Macro Thesis
The portfolio is still **positive in absolute dollars**, but it remains **behind SPY since inception**, so the strategy is still **off track for the dual mandate**. The main issue remains **cash drag**: live gross exposure is only about **22.5%**, while the best trend cluster in the allowed universe is still **AI infrastructure, semiconductors, and large-cap growth**. Fresh fallback return data continues to favor **SOXX, GOOG, QTUM, AVGO, and QQQ**, while **META, HOOD, SHLD, GLD, and ARKX** remain lower-priority uses of capital for an outperformance mandate.

This run occurred **after the regular-session close**, so the correct posture is **no after-hours equity trading**, not forced action. The next-session plan should stay constructive but selective: preserve the current winners, avoid averaging down laggards, and use **QQQ** as the preferred high-liquidity vehicle to reduce cash drag only if tomorrow's regular session confirms strength above today's breakout area.

## Goal Check
- **Portfolio since inception:** **+0.29%** (**$10,029.20** vs initial **$10,000.00**)
- **S&P 500 proxy (SPY) over same period:** **+0.42%** (**723.71 close** vs **720.65** on **2026-05-01** close)
- **Status:** **Off track — the portfolio is positive, but it still trails SPY by roughly 13 bps because gross exposure is too low.**

## Daily Performance Review
- **1D portfolio:** **+0.29%** (**$10,029.20** vs **$10,000.00 last_equity**)
- **1D SPY:** **+0.79%** (**723.71** vs **718.01** prior close)
- **1W / 2W portfolio review:** still not fully available as a meaningful live-account window because the funded book effectively begins on **2026-05-01**; use since-inception comparison until more history accumulates.
- **What worked today:** **AVGO, QQQ, QTUM, and SOXX** all closed green, and the earlier **RKLB** recycle still improved book quality.
- **What did not work today:** **GOOG** remains below cost basis, and the account again underperformed because the book was too underinvested for a constructive growth tape.
- **What must change next session:** keep turnover controlled, but continue to seek a **single high-quality exposure add** instead of letting cash drag keep compounding.

## Portfolio State
- **Equity:** **$10,029.20**
- **Cash:** **$7,774.88**
- **Buying power:** **$17,804.08**
- **Gross exposure:** **22.48%**
- **Cash weight:** **77.52%**
- **Market status:** **closed**
- **Next regular open:** **2026-05-06 09:30 ET**
- **Alpaca clock timestamp:** **2026-05-05T16:00:43.726548939-04:00**
- **Current positions:**
  - **AVGO:** 1 share @ 416.95 | market value **$427.45** | unrealized P&L **+$10.50** | allocation **4.26%**
  - **GOOG:** 1 share @ 386.64 | market value **$384.27** | unrealized P&L **-$2.37** | allocation **3.83%**
  - **QQQ:** 1 share @ 673.26 | market value **$681.53** | unrealized P&L **+$8.27** | allocation **6.80%**
  - **QTUM:** 2 shares @ 137.00 | market value **$278.34** | unrealized P&L **+$4.34** | allocation **2.78%**
  - **SOXX:** 1 share @ 481.95 | market value **$482.73** | unrealized P&L **+$0.78** | allocation **4.81%**
- **Overall unrealized P&L:** **+$21.52**

## Data & Research Sources Used This Run
- **Historical performance attempt:** `bun run src/tools/fmp_cli.ts get-historical-performance --symbol <TICKER>` for the full universe
- **FMP result:** unavailable because **`FMP_API_KEY` is not configured**
- **Historical performance fallback:** **Yahoo Finance chart API** via `query1.finance.yahoo.com/v8/finance/chart`
- **Brokerage / account / positions / prices / clock:** **Alpaca CLI**
- **Portfolio history fallback:** direct **Alpaca REST** call to `/v2/account/portfolio/history`
- **News / search fallback:** **Google News RSS** with Reuters-focused queries because no direct Google Search tool was available in the workspace
- **Second-source quote / structure check:** **Yahoo Finance 5d / 15m chart data** for **AVGO, GOOG, QQQ, QTUM, SOXX, SPY, NVDA**
- **Coverage quality note:** coverage was sufficient for the **broad growth tape**, **Nasdaq / QQQ leadership**, **Alphabet / cloud / AI**, and the main **oil / Middle East** risk; mixed for **Broadcom-specific** incremental catalysts; and **insufficient** for clean **top-investor move** and broad **analyst-action** screens
- **Audit trail:** `memory/intraday_execution_log_2026-05-05.md`
- **Raw artifacts from this cycle:**
  - `temp_files/alpaca_account_hourly_2026-05-05T20-00-42Z.json`
  - `temp_files/alpaca_positions_hourly_2026-05-05T20-00-42Z.json`
  - `temp_files/alpaca_clock_hourly_2026-05-05T20-00-42Z.json`
  - `temp_files/alpaca_latest_prices_hourly_2026-05-05T20-00-51Z.txt`
  - `temp_files/alpaca_portfolio_history_hourly_2026-05-05T20-02-08Z.json`
  - `temp_files/fmp_snapshot_2026-05-05T20-01-10Z.txt`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T20-01-39Z.json`
  - `temp_files/hourly_market_snapshot_yahoo_2026-05-05T20-01-39Z.csv`
  - `temp_files/tech_levels_2026-05-05T20-01-53Z.json`
  - `temp_files/news_rss/hourly_news_summary_2026-05-05T20-02-27Z.json`
  - `temp_files/news_rss/holdings_news_2026-05-05T20-02-40Z.json`

## Performance Snapshot Used This Run
- **Best 1W performers:** **GOOG +10.59%**, **SOXX +10.03%**, **QTUM +7.90%**, **AVGO +6.91%**, **EIS +5.94%**
- **Best 1M performers:** **SOXX +42.14%**, **AVGO +35.89%**, **GOOG +30.51%**, **QTUM +26.56%**, **QQQ +16.50%**
- **Best 3M performers:** **SOXX +36.87%**, **AVGO +29.10%**, **QTUM +19.21%**, **GOOG +11.43%**, **EIS +11.97%**
- **Weak 1W / 3M names:** **META -9.89% / -14.36%**, **HOOD -6.14% / -14.33%**, **SHLD +0.62% / -9.29%**, **GLD -0.87% / -2.09%**, **ARKX -1.13% / +2.05%**

## Priority Actions For The Next Session
1. Treat the live Alpaca account as the source of truth: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
2. Because the market is **closed**, authorize **no after-hours or pre-market equity orders**.
3. Keep the book **constructively long but selective**; the preferred next-session add remains **QQQ**, not a laggard average-down.
4. If tomorrow's regular session confirms strength, allow **one** QQQ add only **above 683.10** with **SPY above 724.80**, orderly tape, and sane spread / trade-count quality.
5. Keep risk controlled: **gross exposure <= 30%**, **cash >= 70%**, **no leverage**, and **no more than one fresh long add** before the next hourly refresh.
6. **Do not average down GOOG.** It remains a hold-only name unless a later hourly cycle explicitly upgrades it above cost basis.
7. If macro headlines worsen materially, oil risk spikes, or the open is disorderly, **do nothing** and preserve capital.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold | Strong AI infrastructure winner; current size already expresses the thesis. | 4% |
| EIS | Hold | Positive trend, but liquidity and expected alpha still trail the top ideas. | 0% |
| GLD | Hold | Hedge candidate only if macro stress broadens into a true risk-off regime. | 0% |
| GOOG | Hold | Valid AI / cloud holding, but no fresh add is authorized below cost basis. | 4% |
| HOOD | Sell | Weak relative trend and lower thesis quality than the current leaders. | 0% |
| META | Sell | Legal / spending overhang and poor relative trend keep it below preferred uses of capital. | 0% |
| NVDA | Hold | Structural winner, but the best incremental deployment is still the liquid index route via QQQ. | 0% |
| QQQ | Buy | Best next add for reducing cash drag with lower idiosyncratic risk while growth leadership persists. | 14% |
| QTUM | Hold | Thematic sleeve still fits, but quote quality is thinner and current size is near target. | 3% |
| RKLB | Sell | Recycled out; low-conviction satellite no longer deserves capital today. | 0% |
| SHLD | Sell | Lower-priority theme than AI / growth leadership. | 0% |
| SOXX | Hold | Best semiconductor ETF in the universe; keep the current slot, but no fresh add is authorized after the close. | 5% |
| VOO | Hold | Lower expected alpha than QQQ while growth leadership remains intact. | 0% |
| ARKX | Hold | Inferior thematic expression versus QQQ, SOXX, or AVGO right now. | 0% |

## Current Holdings Notes
- **Core risk:** **AVGO, GOOG, QQQ, SOXX, QTUM**
- **Satellite risk:** none after the **RKLB** recycle
- **Book assessment:** book quality is improved, but the account is still **too underinvested** to beat SPY if leadership persists
- **Sizing note:** one additional **QQQ** share remains acceptable because it would still keep cash above **70%** and gross exposure below **30%**

## Near-Term Watchlist
- **QQQ:** preferred and only authorized fresh-add candidate for the next regular session if price clears **683.10** with **SPY > 724.80** and orderly tape
- **GOOG:** hold only; watch for a future reclaim above **386.6-389.0** before considering any add in a later hourly cycle
- **AVGO / SOXX:** keep as winners; monitor for future adds only if semis keep leading and concentration limits are revisited by a later hourly run
- **GLD:** monitor only if oil / Middle East headlines begin forcing a broader equity de-risking regime

## Macro Themes To Monitor
### Actionable now
- **Large-cap growth and AI leadership:** supports the existing **QQQ, AVGO, GOOG, QTUM, and SOXX** positions
- **Cash-drag repair:** the book still needs a measured increase in exposure, but only through the highest-quality liquid setup

### Worth monitoring
- **Oil / Middle East stress:** still the clearest macro threat to growth multiples and index tone
- **Alphabet regulation / cloud policy risk:** Reuters coverage still shows a real overhang, even while cloud and AI momentum remain supportive
- **Quote-quality risk in thinner names:** especially **EIS, QTUM, SHLD, VOO, and ARKX**

### Interesting but not actionable yet
- **Top-investor portfolio changes:** fallback coverage remained insufficient this cycle
- **Analyst upgrade / downgrade screens:** fallback coverage remained insufficient this cycle
- **Broadcom-specific incremental catalysts:** coverage remained mixed and not strong enough to change sizing today
- **Space theme:** still de-prioritized after the **RKLB** recycle until better catalyst quality appears

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
- If Alpaca portfolio history is unavailable or incomplete, judge progress with **current equity, last_equity, deposit baseline, and benchmark price history**, and label unavailable windows honestly.
- When `MEMORY.md` starts accumulating repetitive intraday detail, move the detail to a dated execution log under `memory/` and keep only the distilled state in the main memory file.
- Do not trim tiny winning positions merely because they touch marginal resistance; on a small underinvested book, premature profit-taking can hurt the absolute-return goal more than it helps.
- If a generic Google News RSS symbol query is sparse, retry with **Reuters-focused** or thesis-specific terms before declaring coverage insufficient.
- If the portfolio is positive but slightly trailing SPY because of cash drag, fix the problem with **selective exposure upgrades**, not with impulsive broad buying.
- Low-conviction satellites must earn their slot; if they lag while better liquid leaders remain available, recycle them.
- After **any unexpected live position change or execution anomaly**, refresh **positions and account immediately** and do **not** place a second order in that symbol until broker state is confirmed.
- When whole-share sizing makes a cash floor too restrictive to express the best idea, it is acceptable to modestly relax the cash floor **without using leverage** as long as gross exposure remains capped and the thesis quality is high.
- When a symbol is already held, a fresh add must stay **above the current average entry price** unless a later hourly cycle explicitly authorizes a different reset process.
- Late-session breakout buys need extra discipline; if confirmation does not arrive before the close window narrows, preserve capital and wait for the next cleaner setup.
- **When a forced or manual run happens outside regular hours, default to no after-hours equity trading and convert directives into next-session regular-hours triggers.**

## Last Run Summary
- Refreshed live **Alpaca account, positions, latest prices, market clock, and portfolio history** after the close.
- Reconfirmed that **FMP is unavailable** because **`FMP_API_KEY` is missing**, so multi-timeframe returns were refreshed with the **Yahoo Finance chart API fallback**.
- Reuters-focused Google News RSS fallback still shows **oil / Middle East** as the main macro risk, while fresh Reuters coverage also showed **Nasdaq / AI-chip leadership** and continued positive **Google Cloud / AI** momentum.
- Reconciled the live book to **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1** with **$10,029.20** equity and **$7,774.88** cash.
- The strategy remains **off track by a small margin versus SPY**, so the next-session directive is: **hold the current winners, do not average down GOOG, do not trade after hours, and authorize one QQQ add only if the next regular session confirms strength.**
- **Prompt review:** updated `prompts/hourly.txt` to explicitly forbid default after-hours / pre-market equity orders on closed-market runs and require next-regular-session triggers instead.

## Recent Tactical Status
- Tactical execution stayed disciplined into the close; no unauthorized trades were placed.
- The repeated late-session **QQQ** breakout never confirmed, so staying flat on new capital was correct.
- See `memory/intraday_execution_log_2026-05-05.md` for the full intraday audit trail.

## Tactical Execution Summary — 2026-05-05 16:10 ET
- Refreshed live Alpaca **account, positions, latest prices, and market clock** again after the close.
- Market status remained **closed**, so **no orders were placed**.
- Live book remains **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1** with equity **$10,030.63** and cash **$7,774.88**.
- Latest after-hours references: **AVGO 427.40**, **GOOG 384.10**, **QQQ 681.83**, **QTUM 139.17**, **SOXX 484.08**, **SPY 723.78**.
- No position has hit a stop or trim level; the book remains constructively long but underinvested.
- Next expected action: wait for the next regular session; **QQQ** remains the only fresh-add candidate, and only if it reclaims **683.1+** while **SPY stays above 724.8** and the tape is orderly.

## Tactical Execution Summary — 2026-05-06
- Refreshed live Alpaca **account, positions, latest prices, and market clock** before the next session.
- Market status is still **closed**; Alpaca clock shows **next open 2026-05-06 09:30 ET** and **next close 2026-05-06 16:00 ET**.
- Live account now shows **$10,038.61 equity / $7,774.88 cash / $17,813.49 buying power**.
- Live positions remain **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
- Latest quotes: **AVGO 427.79**, **GOOG 384.16**, **QQQ 682.09**, **QTUM 139.20**, **SOXX 482.74**, **SPY 723.94**, **NVDA 196.13**, **META 604.05**, **HOOD 77.21**, **EIS 135.17**, **GLD 418.07**, **RKLB 78.77**, **SHLD 67.55**, **VOO 665.30**, **ARKX 32.265**.
- No buy/sell condition was met: **QQQ** stayed below **683.1** and **SPY** stayed below **724.8**, so the correct action was to remain inactive.
- Quote quality is still thin in **EIS**, **QTUM**, **SHLD**, **VOO**, and **ARKX**, so any future action there still needs second-source confirmation.
- Next expected action: wait for a regular-hours confirmation; if the tape opens strong enough, **QQQ** remains the only fresh-add candidate, otherwise stay flat and protect cash.

## Tactical Execution Summary — 2026-05-06 16:30 ET
- Refreshed live Alpaca **account, positions, latest prices, and market clock** during the closed-market window.
- Market status remains **closed**, so **no orders were placed** and no after-hours equity trading was attempted.
- Live account now shows **$10,053.47 equity / $7,774.88 cash / $17,828.35 buying power**.
- Live positions remain **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
- Latest prices: **AVGO 435.35**, **EIS 135.17**, **GLD 418.07**, **GOOG 393.99**, **HOOD 77.30**, **META 603.85**, **NVDA 196.79**, **QQQ 683.86**, **QTUM 139.20**, **RKLB 78.77**, **SHLD 67.55**, **SOXX 489.54**, **VOO 665.30**, **ARKX 32.265**, **SPY 723.94**.
- The only actionable long setup remains **QQQ**, but the trade is still blocked because the market is closed and **SPY is below 724.8**; no fresh capital was deployed.
- No position drift or stop condition required action. Next expected action: wait for the next regular session and reassess **QQQ** only if the tape confirms strength with **SPY > 724.8** and orderly price action.

## Tactical Execution Summary — 2026-05-06 16:40 ET
- Refreshed live Alpaca **account and positions** again; equity is **$10,050.56**, cash is **$7,774.88**, and buying power is **$17,825.44**.
- Live positions remain unchanged: **AVGO 1, GOOG 1, QQQ 1, QTUM 2, SOXX 1**.
- Latest quotes: **AVGO 436.00**, **GOOG 390.55**, **QQQ 683.78**, **QTUM 139.17**, **SOXX 487.47**, **SPY 723.94**, **NVDA 196.79**, **META 603.58**, **HOOD 77.30**, **EIS 135.17**, **GLD 418.07**, **RKLB 78.77**, **SHLD 67.55**, **VOO 665.30**, **ARKX 32.265**.
- QQQ is back above the breakout trigger in closed-market prints, but **SPY remains below 724.8** and the market is still closed, so **no order was allowed**.
- No position drift required action; the book remains constructively long but underinvested.
- Next expected action: wait for the next regular-session confirmation before considering the single authorized **QQQ** add.
