# Hourly Macro Memory
*Updated 2026-05-15 during regular hours using dashboard + Yahoo Finance fallbacks because direct Alpaca/FMP CLI refresh remained degraded.*

## Current Regime
- **Regime:** **defensive**
- **Why:** the secular AI/large-cap tech trend is still intact on multi-week windows, but today the live book is overextended for the current intraday tape and the tactical layer committed a fresh compliance breach by **adding 2 more XLK shares** despite a prior cleanup directive.
- **Authoritative live book:** **QQQ 6, SOXX 3, GOOG 3, XLK 7, NVDA 2, AVGO 1**.
- **Account equity / cash / buying power:** **$10,074.35 / $975.85 / $11,050.20**.
- **Current gross exposure:** **$9,105.03 = 90.38%** of equity.
- **Target gross-exposure band:** **75-85% after XLK cleanup**. That keeps the portfolio invested in core growth while forcing discipline and removing unauthorized exposure before any new risk is added.

## Current Macro Thesis
The bigger picture has not changed: **AI infrastructure, semiconductors, and high-quality platform tech** still dominate the strongest 1M/3M trends in the universe. Even after today’s pullback, relative leaders over the last month remain **RKLB, SOXX, QTUM, GOOG, NVDA, AVGO, and QQQ**, while laggards such as **GLD, META, SHLD, and EIS** are not where fresh capital should go in a growth-led regime. Recent public fallback coverage still supports the durable theme of **AI capex durability** in cloud and semiconductor infrastructure, with constructive recent commentary around **GOOG, NVDA, AVGO, and SOXX**.

What changed is the **execution context**. Today’s tape is weaker: semis are under pressure, QQQ is off its highs, and the portfolio is no longer suffering from underdeployment. The urgent problem is **process failure**. The tactical layer violated the prior hourly plan by adding more **XLK**, which is outside the approved universe. For the next hour, the correct posture is to **protect capital, restore compliance, and stop churn**.

## Goal Check
- **Portfolio since inception (2026-05-01 deposit):** **+0.74%**
- **S&P 500 / SPY since inception:** **+2.89%**
- **Status:** **Off track — positive absolute returns remain intact, but the portfolio is trailing SPY and today’s unauthorized churn worsened the gap.**
- **Dominant failure mode:** **excessive turnover / friction**

## Start-of-Day Performance Review
- **1D:** portfolio **-1.61%** vs **SPY -1.08%**
- **1W:** portfolio **+0.36%** vs **SPY +0.33%**
- **2W:** portfolio **+0.74%** vs **SPY +2.89%**
- **What is working:** core large-cap growth exposure still keeps the book positive since inception, and the 1W relative result is roughly in line with the index.
- **What is not working:** unauthorized adds, same-day churn, and too much concentration in a weakening semiconductor sleeve.
- **What must change today:** no new discretionary buys, immediate XLK cleanup, and tighter tactical guardrails until compliance is restored.

## Priority Actions For The Next Hour
1. **Queue XLK for the next eligible regular-session exit.** It remains the top cleanup item, but a same-day sell was already rejected by broker **pattern day trading protection** after today’s tactical add.
2. **Enforce cleanup-only mode** after the XLK breach: no fresh discretionary buys this hour.
3. **Hold core approved names** unless stop levels break; **SOXX** is the first approved position to reduce if weakness continues.
4. Reassess new adds only after XLK is gone and the tape stabilizes.

## Ranked Deployment Queue
*Only valid after XLK is fully exited and the hourly lock is explicitly lifted.*
1. **GOOG** — best combination of quality, relative strength, and less-stretched setup versus semis.
2. **QQQ** — liquid core catch-up vehicle if broad tech leadership reasserts.
3. **AVGO** — smaller single-name add only on renewed strength, not into weakness.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| XLK | Sell | **Compliance breach**; outside approved universe and incorrectly added again today. | 0% |
| QQQ | Hold | Core liquid growth exposure, but still the largest weight and above preferred size after a weak day. | 36-40% |
| GOOG | Hold | High-quality AI/cloud exposure; preferred future add once lock is lifted. | 10-13% |
| SOXX | Hold / Reduce on weakness | Strong longer-term theme, but elevated weight and weak today. | 10-12% |
| NVDA | Hold | Secular winner, but no chasing and no same-day overtrading. | 4-5% |
| AVGO | Hold | Valid AI/networking exposure; keep small and disciplined. | 4-5% |
| QTUM | Watch | Good thematic ETF, but no re-entry while cleanup is pending. | 0-4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0-5% |

## Current Holdings
- **QQQ:** **42.35%** weight, about **+2.56%** on cost, **-1.21%** today.
- **SOXX:** **15.27%** weight, about **-3.18%** on cost, **-3.23%** today.
- **GOOG:** **11.71%** weight, about **-1.10%** on cost, **-1.00%** today.
- **XLK:** **12.30%** weight, unauthorized holding, about **-1.10%** on cost, **-1.35%** today.
- **NVDA:** **4.52%** weight, about **-2.20%** on cost, **-3.46%** today.
- **AVGO:** **4.22%** weight, about **-2.74%** on cost, **-3.33%** today.

## Near-Term Watchlist
- **GOOG** — first valid redeployment target after compliance is restored.
- **QQQ** — clean liquid re-add only if broad tech stabilizes.
- **AVGO** — watch for renewed AI/networking strength after today’s pullback.
- **QTUM** — thematic re-entry only after churn is under control.

## Macro Themes To Monitor
- **Actionable now:** AI capex durability, semiconductor pullback discipline, QQQ trend health.
- **Worth monitoring:** rates / inflation pressure and whether today’s weakness broadens beyond semis.
- **Interesting but not actionable yet:** space-theme enthusiasm (**RKLB / ARKX**) remains strong, but too momentum-driven for immediate deployment while the book is in cleanup mode.
- **Investor-move coverage:** direct portfolio-move signal from public fallback search was insufficient today; do not force a thesis from weak headlines.

## Data / Process Notes
- **Alpaca CLI** account/positions/clock calls still timed out in this environment.
- **Broker fallback used successfully:** deployed dashboard endpoints **`/api/portfolio`**, **`/api/chart-data`**, **`/api/sp500-comparison`**, and **`/api/market-clock`** via `bun -e`.
- **Execution blocker:** the tactical layer attempted an **XLK** liquidation on **2026-05-15 11:38 ET** and received **403 / trade denied due to pattern day trading protection**. Do not keep resubmitting the same cleanup order today unless broker eligibility changes.
- **FMP** remained unavailable because `FMP_API_KEY` is not configured, so multi-timeframe market snapshots were refreshed from **Yahoo Finance public chart endpoints** and saved under `temp_files/`.
- **News fallback:** Google News RSS remained noisy / partially malformed on 2026-05-15; today’s direct coverage was insufficient, so only recent dated fallback headlines were used as background, not as standalone trade signals.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless a future hourly note explicitly justifies it.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale or abnormal.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.**
- **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next hour to **cleanup-only** until the breach is fully resolved.
- Dashboard endpoint fallbacks are currently more reliable than direct CLI refreshes in this environment.

## Tactical Execution Update — 2026-05-15
- **Action this cycle:** no orders placed.
- **Why:** all held names stayed above their tactical stop levels, and the XLK cleanup remains blocked by the earlier broker PDT rejection, so retrying it would add friction without improving edge.
- **Authoritative live book:** **QQQ 6, SOXX 3, GOOG 3, XLK 7, NVDA 2, AVGO 1**.
- **Current exposure:** still about **90% gross**, above the preferred post-cleanup band.
- **Next expected action:** keep cleanup-only posture, wait for either broker eligibility to change for XLK or a later hourly unlock that explicitly permits fresh buys.

## Last Run Summary
- The portfolio is still positive in absolute dollars, but it remains **off track** versus SPY.
- Multi-week market leadership still favors AI / semis / high-quality growth.
- The urgent next-hour task is **compliance cleanup and execution discipline**, not adding new exposure.
