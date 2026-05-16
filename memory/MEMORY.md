# Hourly Macro Memory
*Updated 2026-05-16 (Saturday, market closed). Next regular session: Monday 2026-05-18 09:30 ET.*

## Current Regime
- **Regime:** **defensive** — cleanup mode until the unauthorized XLK position is fully exited.
- **Why:** The portfolio remains positive in absolute terms (+0.31% since inception) but is trailing SPY by ~2.6 percentage points. The tactical layer repeatedly violated the approved universe by adding XLK (5 shares on May 14, 3 more on May 15). Gross exposure is 98.6% because of this unauthorized position, leaving almost no cash buffer. No fresh risk can be added until XLK is gone and discipline is restored.

## Authoritative Live Book
- **QQQ 6, SOXX 3, GOOG 3, XLK 8, NVDA 3, AVGO 2**
- **Account equity / cash / buying power:** **$10,030.93 / $135.41 / $10,166.34**
- **Current gross exposure:** **$9,895.50 = 98.6%** of equity.
- **Target gross-exposure band:** **75–85% after XLK cleanup**.

## Current Macro Thesis
The multi-week AI/semiconductor/growth trend remains intact (SOXX +26.5% 1M, GOOG +17.6% 1M, QQQ +11.2% 1M, NVDA +13.3% 1M). However, **Friday May 15 was a broad risk-off day for high-beta tech**: semis led the decline (SOXX -4.06%, NVDA -4.42%, AVGO -3.32%) while GOOG held up best (-0.97%) and QQQ was moderate (-1.51%). VOO was -1.21%, so the decline was not isolated to our universe. This looks like a normal pullback within an uptrend rather than a regime shift, but we must not add into weakness while the book is already overextended. Monday’s tape will be critical: if tech stabilizes and reclaims Friday’s losses, the uptrend continues. If the selloff extends, we will need to trim the most volatile sleeve (SOXX first) rather than average down.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** **+0.31%**
- **S&P 500 / SPY since inception (2026-05-04 baseline):** **+2.94%**
- **Status:** **Off track — positive absolute returns are intact but the portfolio is trailing SPY by roughly 2.6 percentage points.**
- **Dominant failure mode:** **excessive turnover / friction** (repeated SOXX churn, unauthorized XLK adds, buying into Friday weakness, and paying friction on every round trip).

## Start-of-Day Performance Review (Friday May 15)
- **1D:** portfolio roughly **-1.6%** vs **SPY -1.1%** (prior cycle estimate; Friday close confirmed the drag).
- **1W:** portfolio roughly **+0.3%** vs **SPY +0.3%** — in line, but not enough to close the 2W gap.
- **2W:** portfolio **+0.31%** vs **SPY +2.94%** — significantly behind.
- **What is working:** QQQ core position is still above cost (+2.25% unrealized) and GOOG is holding relative strength.
- **What is not working:** Semis sleeve (SOXX, NVDA, AVGO) was bought into strength and then gave back gains on Friday. Unauthorized XLK adds wasted capital and compliance budget.
- **What must change Monday:** exit XLK first thing, stop all churn, hold core names above their stops, and only redeploy cash into the highest-quality setup (GOOG) after the tape stabilizes.

## Priority Actions For Next Session (Monday)
1. **SELL XLK 8 shares at market open.** This is the #1 compliance and risk-management task.
2. **Do not place any new buy order on Monday morning** until XLK is confirmed gone and the tape shows stabilization.
3. **Hold approved core positions** with updated stop levels below.
4. **Trim SOXX** if it breaks 500 support — it is the weakest 1M performer that is also the most volatile.
5. **Prepare GOOG as the first redeployment target** if Monday shows stabilization (hold above 390, break above 398).

## Ranked Deployment Queue
*Only valid after XLK is fully exited and the hourly lock is explicitly lifted.*
1. **GOOG** — best combination of quality, relative strength on Friday, and clean multi-week uptrend.
2. **QQQ** — liquid core catch-up vehicle if broad tech reasserts; already at 42% so adds are low priority.
3. **QTUM** — thematic quantum/AI play; re-entry only after churn is fully under control.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| XLK | **Sell** | **Compliance breach**; outside approved universe. Must be zero by Monday open. | 0% |
| QQQ | Hold | Core liquid growth exposure; largest weight. Keep unless broad tape cracks. | 36–40% |
| GOOG | Hold / Add on strength | Best relative strength Friday; preferred future add once lock is lifted. | 10–13% |
| SOXX | Hold / Reduce on weakness | Strong 1M/3M theme but sharp Friday drop. Trim if support breaks. | 10–12% |
| NVDA | Hold | Secular winner but volatile. No chasing; no same-day overtrading. | 4–5% |
| AVGO | Hold | Valid AI/networking exposure; keep small and disciplined. | 4–5% |
| QTUM | Watch | Good thematic ETF, but no re-entry while cleanup is pending. | 0–4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic 1M (+69%) but extremely volatile; not for Monday. | 0% |
| HOOD / META / SHLD | Avoid | Weak 1M trends; not where capital goes in a catch-up regime. | 0% |

## Current Holdings
- **QQQ:** **42.4%** weight, about **+2.25%** on cost, price **708.93**.
- **SOXX:** **15.2%** weight, about **-3.23%** on cost, price **508.52**.
- **XLK:** **14.1%** weight, unauthorized holding, about **-1.49%** on cost, price **176.26**.
- **GOOG:** **11.8%** weight, about **-1.07%** on cost, price **393.32**.
- **AVGO:** **8.5%** weight, about **-1.84%** on cost, price **425.19**.
- **NVDA:** **6.7%** weight, about **-2.71%** on cost, price **225.32**.

## Near-Term Watchlist
- **GOOG** — first valid redeployment target after compliance is restored.
- **QQQ** — clean liquid re-add only if broad tech stabilizes and weight drops below 36%.
- **AVGO** — watch for renewed AI/networking strength after Friday’s pullback.
- **QTUM** — thematic re-entry only after churn is under control.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** AI capex durability, semiconductor pullback discipline, QQQ trend health.
- **Worth monitoring:** whether Friday’s tech selloff is a one-day pullback or the start of a broader correction. Watch QQQ 700 level and SOXX 500 level.
- **Interesting but not actionable yet:** space-theme enthusiasm (**RKLB / ARKX**) remains strong but too momentum-driven for immediate deployment while the book is in cleanup mode.
- **Investor-move coverage:** news search failed (provider rate-limited 429). No actionable headlines were retrieved this cycle. Rely on price action and relative strength until search recovers.

## Data / Process Notes
- **Alpaca CLI** account/positions/clock calls still timed out in this local environment.
- **Broker fallback used successfully:** deployed dashboard endpoints **`/api/portfolio`**, **`/api/chart-data`**, **`/api/sp500-comparison`**, and **`/api/market-clock`** via `bun -e`.
- **FMP** remained unavailable because `FMP_API_KEY` is not configured. Multi-timeframe market snapshots were refreshed from **Yahoo Finance public chart endpoints** and saved under `temp_files/yahoo_snapshot.json`.
- **News search:** Brave/Google Search returned 429 / rate-limited. No fresh headlines retrieved. Coverage was **insufficient**; do not force a thesis from stale or missing headlines.
- **Code change:** Added hard universe validation to `alpacaTools.submitOrder` in `src/tools/alpaca_cli.ts`. **BUY orders for symbols not in the approved universe are now rejected at the CLI/API layer.** SELL orders are still allowed so out-of-universe positions can be cleaned up. This prevents future XLK-style breaches.
- **Day-trade status:** No same-day round-trip fills were identified on May 14 or May 15. XLK liquidation on Monday should not trigger PDT protection because the last XLK buys were on Friday and the sale will be on a new session.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless a future hourly note explicitly justifies it.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale or abnormal.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.** Code-level guard now active.
- **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next hour to **cleanup-only** until the breach is fully resolved.
- Dashboard endpoint fallbacks are currently more reliable than direct CLI refreshes in this environment.
- If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.

## Last Run Summary
- The portfolio is still positive in absolute dollars, but it remains **off track** versus SPY by a wide margin.
- Multi-week market leadership still favors AI / semis / high-quality growth.
- The urgent next-session task is **compliance cleanup (XLK) and execution discipline**, not adding new exposure.
- A broad tech selloff on Friday hurt the semi sleeve but did not break multi-week trends.
- Monday’s plan: sell XLK, hold core, tighten stops, and wait for stabilization before any redeployment.
