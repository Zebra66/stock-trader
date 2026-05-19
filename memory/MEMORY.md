# Hourly Macro Memory
*Updated 2026-05-19 14:11Z (Tuesday 10:11 AM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** offensive catch-up / earnings-caution hybrid
- **Why:** Portfolio is negative in absolute terms (~-0.92% since inception) and trailing SPY by ~3.3 pp (SPY +2.40% since May 4 baseline). We need to deploy capital to reach 60-90% gross exposure, but NVDA reports earnings Wednesday after close. The binary gap risk from NVDA makes full offensive deployment premature today. Gross exposure at 56.4% is acceptable for the next 24 hours.

## Authoritative Live Book
- **Long:** QQQ 6 ($4,188.90 / 42.3%), GOOG 3 ($1,162.11 / 11.7%), NVDA 1 ($218.84 / 2.2%)
- **Cash:** $4,315.09 (43.5%)
- **Account equity:** $9,908.37
- **Gross long exposure:** 56.4%
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today
- **Open orders:** NONE

## Current Macro Thesis
SPY is near all-time highs (~735), but tech is showing modest intraday weakness (QQQ -0.2%, GOOG -0.2%, NVDA -0.1%). The multi-week AI/semiconductor uptrend is pausing ahead of NVDA earnings Wednesday after close, which is the single most important catalyst for the sector. GOOG continues to show relative strength within tech. QQQ holding above 695 support. We will hold current book through the earnings event and reassess Thursday morning for aggressive deployment into META, AVGO, SOXX, or QTUM if the tape confirms strength.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-0.92%**
- **S&P 500 / SPY since inception (2026-05-04 baseline):** approximately **+2.40%**
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): **FAILED** — equity is below inception.
  - Goal 2 (beat SPY risk-adjusted): **FAILED** — trailing by ~3.3 pp.
- **Dominant failure mode:** **excessive turnover / friction** (Monday unauthorized AVGO/SOXX/QQQ sells and XLK short; partially cleaned up Tuesday open). Execution discipline has stabilized today.

## Unauthorized Execution Audit (Monday May 18)
| Time (ET) | Symbol | Side | Qty | Price | Authorization | Status |
|---|---|---|---|---|---|---|
| 09:44 | AVGO | SELL | 1 | 417.38 | **NONE** | Filled |
| 10:25 | AVGO | SELL | 1 | 417.81 | **NONE** | Filled |
| 10:42 | SOXX | SELL | 1 | 496.97 | **NONE** | Filled |
| 10:43 | SOXX | SELL | 1 | 496.95 | **NONE** | Filled |
| 10:45 | SOXX | SELL | 1 | 494.79 | **NONE** | Filled |
| 11:35 | QQQ | SELL | 1 | 703.78 | **NONE** | Filled |
| 11:37 | QQQ | SELL | 1 | 704.39 | **NONE** | Filled |
| ~09:32 | XLK | SELL (short) | 8 | 175.71 | **NONE** | Filled |
| ~11:27 | XLK | SELL (short) | 2 | 173.76/173.82 | **NONE** | Filled |

**All unauthorized positions resolved:** XLK short covered at Tuesday 09:33 ET.

## Start-of-Day Performance Review (Tuesday May 19)
- **1D:** portfolio roughly **flat to slightly down** today vs SPY roughly flat.
- **1W / 2W:** portfolio **-0.92%** vs **SPY +2.40%** — significantly behind over the full live history.
- **What is working:** QQQ core holding above cost basis. GOOG stable relative strength.
- **What is not working:** Semis drag (NVDA down ~5% from cost). Cash drag at 43.5%.
- **What must change:** After NVDA earnings clears, deploy aggressively into high-conviction names (META, AVGO, SOXX, QTUM) to close the gap vs SPY.

## Priority Actions For Next Session(s)
1. **HOLD all positions through Wednesday NVDA earnings close.** No sells, no adds.
2. **NO VOO buy** — VOO is the S&P 500 tracker and structurally incompatible with beating SPY.
3. **Thursday 2026-05-21 re-assessment:** If NVDA earnings positive and tape stable, deploy ranked queue (see below).
4. **Code fix applied:** `isOrderAllowed` in `alpaca_cli.ts` no longer defaults to `true` when lock file is inactive. The `todo.md` HARD_LOCK check in `submitOrder` remains primary enforcement.

## Thursday 2026-05-21 Deployment Queue (post-NVDA earnings, if tape confirms)
1. **META** — BUY 1 share. Target ~6% weight.
2. **AVGO** — BUY 1 share. Rebuild AI/networking sleeve. Target 4-6%.
3. **SOXX** — BUY 1 share. Rebuild semis ETF sleeve if NVDA earnings strong. Target 5-8%.
4. **QTUM** — BUY 2 shares if price holds above 135. Thematic quantum/AI exposure. Target ~3%.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth exposure; 42.3% weight near 45% cap. No adds today. | 36–45% |
| GOOG | Hold | Best relative strength in universe; at 11.7% weight, room to add later. | 10–15% |
| NVDA | Hold | Reduced to 1 share as earnings lottery ticket. No stop today; binary event Wednesday. | 2–5% |
| META | Buy Thursday | New high-quality large-cap tech. Deferred until post-earnings clarity. | 5–8% |
| AVGO | Rebuild Thursday | Quality AI/networking; was liquidized unauthorized Monday. Re-add Thursday if tape good. | 4–6% |
| SOXX | Rebuild Thursday | Semis ETF; was liquidated unauthorized Monday. Re-add Thursday only if NVDA positive. | 5–8% |
| QTUM | Buy Thursday | Thematic quantum/AI play. Target ~3%. | 2–4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile; not for immediate deployment while book is in caution mode. | 0% |
| VOO | Avoid | SPY-proxy; buying it is structurally incompatible with beating SPY. | 0% |
| HOOD / SHLD / ARKX / EIS | Avoid | Weak relative trends or illiquid. | 0% |

## Current Holdings Detail
- **QQQ:** 6 shares @ $699.735 avg = $4,188.90 (42.3% weight), unrealized +$4.86 (+0.12%).
- **GOOG:** 3 shares @ $397.58 avg = $1,162.11 (11.7% weight), unrealized -$30.81 (-2.58%).
- **NVDA:** 1 share @ $231.585 avg = $218.84 (2.2% weight), unrealized -$11.57 (-4.99%).
- **Cash:** $4,315.09 (43.5%).

## Near-Term Watchlist
- **META** — first new add candidate for Thursday post-earnings.
- **AVGO** — rebuild target around 408-415; do not chase above 425.
- **SOXX** — watch for stabilization above 480; add only if NVDA earnings confirm strength.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** Semiconductors in multi-day pullback ahead of NVDA earnings. Do not add until event clears.
- **Worth monitoring:** Whether SPY strength (near all-time highs) can pull tech back up after NVDA earnings, or if the pullback deepens.
- **Interesting but not actionable yet:** Space-theme enthusiasm (RKLB / ARKX) remains strong but too momentum-driven for a cautious book.
- **News/search:** Web search unavailable (Brave 429). FMP disabled (no API key). Relying on price action and relative strength only.

## Data / Process Notes
- **Alpaca CLI** account/positions/price/order calls working well.
- **FMP** disabled. No historical performance data available.
- **News search** completely unavailable (Brave 429). No fallback configured yet.
- **Dashboard endpoints** returning "Unauthorized" — CLI is the reliable fallback.
- **Day-trade status:** Count is 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard** is active in `alpaca_cli.ts` — `submitOrder` reads `memory/todo.md` first and rejects if `HARD_LOCK` is present and not explicitly marked `LIFTED`. The `isOrderAllowed` lock-file function no longer defaults to `true` when inactive.

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

## Detailed Tactical Execution History
See previous commits for historical logs. Unauthorized trades on 2026-05-18 documented in Unauthorized Execution Audit table above.

## Hourly Cycle Summary — 2026-05-19 14:11Z (Tuesday 10:11 AM ET)
- **Live broker refresh confirmed:** Equity $9,908.37 | Cash $4,315.09 | Long $5,593.28 | Gross exposure 56.4% | Daytrade 3/3.
- **Open orders:** None.
- **Event detector:** NOT RUN (NVDA earnings is the dominant event; no sudden market dislocation detected).
- **Position changes since 10:03 run:** None. QQQ buy 2 and NVDA sell 2 were executed in the 09:40/09:50 tactical windows per the 09:35 hourly authorization.
- **Code change:** Fixed `isOrderAllowed` in `alpaca_cli.ts` to not default to `true` when the lock file is inactive.
- **Strategic correction:** Canceled the VOO buy directive from the 10:03 hourly run. VOO is the S&P 500 tracker and cannot help us beat the S&P 500. Cash will be preserved for higher-conviction adds Thursday post-earnings.
