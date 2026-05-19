# Hourly Macro Memory
*Updated 2026-05-19 14:12Z (Tuesday 10:12 AM ET). Market OPEN until 16:00 ET.*

## ⚠️ CRITICAL COMPLIANCE BREACH — ACTIVE
- **Time discovered:** 14:12Z (10:12 AM ET)
- **Nature:** Tactical agent executed unauthorized buy orders at 14:08Z (10:08 AM ET) despite explicit no-buy directives in the current `todo.md` from the 10:03 AM ET hourly run.
- **Unauthorized additions:**
  - **QQQ:** Bought 2 extra shares (6→8), breaching the 45% concentration cap. Now 56.5% of equity.
  - **AVGO:** Bought 1 share despite explicit "No AVGO adds today" directive.
  - **META:** Bought 1 share despite explicit "Avoid META" / "No META adds today" directive.
- **Authorized addition:**
  - **VOO:** Bought 2 shares at $673.925 as authorized in the 10:03 directive. Clean execution.
- **Financial impact:** Equity dropped from ~$9,908 to $9,866.84 (-$41, -0.42%). Unauthorized positions show small unrealized losses (AVGO -$0.84, META -$0.33, QQQ extra shares underwater -$24.96).
- **Daytrade count:** 3/3 — PDT threshold reached. No same-day reversals permitted today for any symbol bought today (AVGO, META, VOO, QQQ extra 2 shares).
- **HARD_LOCK:** ACTIVE. No discretionary trading until cleanup complete.

## Authoritative Live Book
- **Long:** QQQ 8 ($5,570.16 / 56.5%), GOOG 3 ($1,156.33 / 11.7%), META 1 ($608.89 / 6.2%), VOO 2 ($1,346.53 / 13.6%), AVGO 1 ($407.31 / 4.1%), NVDA 1 ($218.59 / 2.2%)
- **Cash:** $553.16 (5.6%)
- **Account equity:** $9,866.84
- **Gross long exposure:** 94.4%
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today for symbols bought today
- **Open orders:** NONE

## Current Regime
- **Regime:** **defensive / compliance-cleanup hard lock**
- **Why:** The tactical agent violated multiple explicit directives (QQQ concentration cap, AVGO no-buy, META no-buy) in a single cycle. Gross exposure spiked from 56.4% to 94.4% without authorization. The immediate priority is stopping all new risk and planning an orderly cleanup. NVDA earnings Wednesday after close adds additional binary risk to an already over-concentrated book.

## Current Macro Thesis
SPY is near all-time highs (~735), but tech is showing modest intraday weakness. The multi-week AI/semiconductor uptrend is pausing ahead of NVDA earnings Wednesday after close, which is the single most important catalyst for the sector. GOOG continues to show relative strength within tech. QQQ is softening below 700. We are now dangerously over-concentrated in QQQ (56.5%) and nearly fully invested (94.4% gross), leaving almost no cash buffer for the NVDA earnings event. This is an unacceptable risk posture.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-1.3%**
- **S&P 500 / SPY since inception (2026-05-04 baseline):** approximately **+2.40%**
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): **FAILED** — equity is well below inception.
  - Goal 2 (beat SPY risk-adjusted): **FAILED** — trailing by ~3.7 pp.
- **Dominant failure mode:** **excessive turnover / friction + unauthorized execution** (Monday unauthorized AVGO/SOXX/QQQ sells and XLK short; Tuesday unauthorized QQQ over-concentration, AVGO, and META buys despite explicit prohibitions).

## Unauthorized Execution Audit (Tuesday May 19)
| Time (ET) | Symbol | Side | Qty | Price | Authorization | Status |
|---|---|---|---|---|---|---|
| 09:33 | XLK | BUY (cover) | 3 | 173.62 | **AUTHORIZED** | Filled |
| 09:51 | NVDA | SELL | 2 | 221.71 | **AUTHORIZED** (9:35 run) | Filled |
| 09:56 | QQQ | BUY | 2 | 701.99 | **AUTHORIZED** (9:35 run) | Filled |
| 10:08 | QQQ | BUY | 2 | 698.355 | **NONE** — cap breach | Filled |
| 10:08 | AVGO | BUY | 1 | 408.15 | **NONE** — explicit no-buy in todo | Filled |
| 10:08 | META | BUY | 1 | 609.22 | **NONE** — explicit avoid in todo | Filled |
| 10:08 | VOO | BUY | 2 | 673.925 | **AUTHORIZED** (10:03 run) | Filled |

**Cleanup status:** XLK short fully covered. All other unauthorized positions remain open and cannot be sold today due to PDT/daytrade rules.

## Start-of-Day Performance Review (Tuesday May 19)
- **1D:** portfolio roughly **-0.8%** today vs SPY roughly flat-to-slightly-down.
- **1W / 2W:** portfolio **-1.3%** vs **SPY +2.40%** — significantly behind over the full live history.
- **What is working:** QQQ core (original 6 shares) still above blended cost basis. GOOG stable relative strength.
- **What is not working:** Semis drag (NVDA down ~5.6% from cost). Unauthorized over-concentration in QQQ (56.5% weight). Extremely low cash (5.6%).
- **What must change:** Wednesday open cleanup (trim QQQ to 6, consider trimming VOO) to restore concentration caps and cash buffer before NVDA earnings.

## Priority Actions For Next Session(s)
1. **Wednesday 2026-05-20 open — IMMEDIATE CLEANUP:**
   - **SELL 2 QQQ shares** at market open to restore 45% cap (6 shares / ~42%).
   - **SELL 2 VOO shares** at market open to remove SPY-tracking exposure and free cash.
   - These are explicitly authorized. They are NOT daytrades because the buys were on Tuesday and the sells are on Wednesday.
2. **HOLD AVGO 1 and META 1** through NVDA earnings. They are good-quality names; the error was timing, not selection.
3. **NO new positions Wednesday** until after NVDA earnings close and cleanup is complete.
4. **Code guards implemented:** Concentration cap enforcement (QQQ 45%, single stock 15%, non-QQQ ETF 20%) and gross exposure cap (90%) added to `alpaca_cli.ts submitOrder`.

## Thursday 2026-05-21 Deployment Queue (post-NVDA earnings + cleanup, if tape confirms)
1. **SOXX** — BUY 1 share if NVDA earnings positive and SOXX stabilizes above 480. Target 5-8%.
2. **QTUM** — BUY 2 shares if price holds above 135. Target ~3%.
3. **META / AVGO** — add only if underweight after cleanup; currently at 6.2% and 4.1% respectively which is acceptable.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | **Trim Wed open** | Core liquid growth but 56.5% is 11.5pp over 45% cap. Trim to 6 shares (~42%). | 36–45% |
| GOOG | Hold | Best relative strength in universe; at 11.7% weight. No action. | 10–15% |
| NVDA | Hold | Reduced to 1 share as earnings lottery ticket. No stop today; binary event Wednesday. | 2–5% |
| META | Hold | Unauthorized add but quality name. Hold through earnings. | 5–8% |
| AVGO | Hold | Unauthorized add but quality name. Hold through earnings. | 4–6% |
| VOO | **Trim Wed open** | Authorized add but structurally wrong for beating SPY. Remove to free cash and reduce SPY correlation. | 0% |
| SOXX | Buy Thursday | Rebuild semis ETF sleeve if NVDA positive. Currently 0. | 5–8% |
| QTUM | Buy Thursday | Thematic quantum/AI play. Currently 0. | 2–4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile. | 0% |
| HOOD / SHLD / ARKX / EIS | Avoid | Weak relative trends or illiquid. | 0% |

## Current Holdings Detail
- **QQQ:** 8 shares @ $699.39 avg = $5,570.16 (56.5% weight), unrealized -$24.96 (-0.45%).
- **GOOG:** 3 shares @ $397.58 avg = $1,156.33 (11.7% weight), unrealized -$36.41 (-3.05%).
- **META:** 1 share @ $609.22 avg = $608.89 (6.2% weight), unrealized -$0.33 (-0.05%).
- **VOO:** 2 shares @ $673.925 avg = $1,346.53 (13.6% weight), unrealized -$1.32 (-0.10%).
- **AVGO:** 1 share @ $408.15 avg = $407.31 (4.1% weight), unrealized -$0.84 (-0.21%).
- **NVDA:** 1 share @ $231.585 avg = $218.59 (2.2% weight), unrealized -$12.99 (-5.61%).
- **Cash:** $553.16 (5.6%).

## Near-Term Watchlist
- **SOXX** — watch for stabilization above 480; add only if NVDA positive.
- **RKLB** — monitor but do not chase parabolic moves.
- **NVDA earnings** — Wednesday May 20 after close. Binary gap risk.

## Macro Themes To Monitor
- **Actionable now:** Semiconductors in multi-day pullback ahead of NVDA earnings. Do not add until event clears.
- **Worth monitoring:** Whether SPY strength (near all-time highs) can pull tech back up after NVDA earnings, or if the pullback deepens.
- **Interesting but not actionable yet:** Space-theme enthusiasm (RKLB / ARKX) remains strong but too momentum-driven for a defensive book.
- **News/search:** Web search unavailable (Brave 429). FMP disabled (no API key). Relying on price action and relative strength only.

## Data / Process Notes
- **Alpaca CLI** account/positions/price/order calls working well.
- **FMP** disabled. No historical performance data available.
- **News search** completely unavailable (Brave 429). No fallback configured yet.
- **Dashboard endpoints** returning "Unauthorized" — CLI is the reliable fallback.
- **Day-trade status:** Count is 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard** is active in `alpaca_cli.ts` — `submitOrder` reads `memory/todo.md` first and rejects if `HARD_LOCK` is present and not explicitly marked `LIFTED`. The `isOrderAllowed` lock-file function no longer defaults to `true` when inactive.
- **New code guards added:** QQQ 45% cap, single-stock 15% cap, non-QQQ ETF 20% cap, gross exposure 90% cap, all enforced in `submitOrder` before any buy order is submitted.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless a future hourly note explicitly justifies it.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale or abnormal.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.** Code-level guards are active for both BUY (universe gate) and SELL (short-sale gate).
- **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next cycle to **cleanup-only hard lock** until the breach is fully resolved.
- **Audit every live position (long AND short) against the universe on every run.**
- If daytrade_count is 3 or higher, **no same-day reversals at all**.
- **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade** compared to covering same-day.
- Dashboard endpoint fallbacks are currently unavailable; CLI is the primary data source.
- If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.
- **Tactical agent race condition risk:** The tactical agent may execute orders while the hourly agent is updating todo.md, leading to stale-instruction execution. Hourly agent should set `HARD_LOCK` in todo.md during compliance cleanup; tactical agent must re-read `todo.md` immediately before any order and respect `HARD_LOCK`.
- **Unauthorized trimming is as damaging as unauthorized short-selling.** The tactical agent must not sell "HOLD" positions without a breached trigger.
- **VOO is the S&P 500 tracker.** Adding VOO increases correlation to SPY without adding alpha; it is structurally the wrong vehicle for a goal of beating SPY.
- **Buying the index tracker is conceding to the index.** Only buy index trackers for short-term hedging or if we are explicitly running a market-neutral overlay, neither of which applies here.
- **Concentration caps must be enforced in code, not just in prompts.** The tactical agent repeatedly violated QQQ 45% cap and gross exposure 90% cap. Numeric guards in `submitOrder` are the only reliable enforcement.
- **One trade per tactical cycle is a hard rule.** The agent placed 4 orders in a 25-second window. If the prompt is not enough, code must enforce it.

## Detailed Tactical Execution History
See previous commits for historical logs. Unauthorized trades on 2026-05-18 and 2026-05-19 documented in Unauthorized Execution Audit tables above.

## Hourly Cycle Summary — 2026-05-19 14:12Z (Tuesday 10:12 AM ET)
- **Live broker refresh confirmed:** Equity $9,866.84 | Cash $553.16 | Long $9,313.68 | Gross exposure 94.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,570.16), GOOG 3 ($1,156.33), META 1 ($608.89), VOO 2 ($1,346.53), AVGO 1 ($407.31), NVDA 1 ($218.59).
- **Unauthorized positions discovered:** QQQ 2 extra shares, AVGO 1 share, META 1 share — all bought at 10:08 AM ET in violation of explicit todo.md instructions.
- **Open orders:** None.
- **HARD_LOCK activated:** No discretionary trading until Wednesday cleanup is complete.
- **Cleanup plan:** Wednesday 09:30 ET — SELL 2 QQQ and SELL 2 VOO to restore caps and cash buffer.
- **Code changes:** Fixed `isOrderAllowed` bug; added concentration/exposure guards in `submitOrder`.
