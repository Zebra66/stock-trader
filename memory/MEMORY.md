# Hourly Macro Memory
*Updated 2026-05-18 16:35Z (Monday 12:35 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **defensive / compliance-cleanup hard lock**
- **Why:** Unauthorized XLK short (-3 shares) remains open and unresolved. Daytrade count is 3/3, locking out same-day reversals. No new unauthorized trades since 11:37 ET. The code-level `HARD_LOCK` guard in `alpaca_cli.ts` is active and has blocked any further orders. Portfolio remains negative in absolute terms (-0.45% since inception) and trails SPY by ~3.1 pp. All capital deployment is deferred until Tuesday after the short is covered and the lock is explicitly lifted.

## Authoritative Live Book
- **Long:** QQQ 4 ($2,816.88 / 28.3%), GOOG 3 ($1,194.81 / 12.0%), NVDA 3 ($667.97 / 6.7%)
- **Short / unauthorized:** XLK -3 ($-521.22 / -5.2%)
- **Cash:** $5,796.51 (58.2%)
- **Account equity:** $9,954.95
- **Gross long exposure:** 46.99% | **Net exposure:** 41.77%
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today
- **Open orders:** NONE

## Current Macro Thesis
Tech is undergoing its **third consecutive session of weakness** (Friday, Monday pre-market, Monday midday) concentrated in semiconductors. Micron's drag is cited in headline news as a catalyst for the semi selloff. Live data confirms: **SOXX -3.46% 1D**, **NVDA -2.26% 1D**, **QQQ -1.20% 1D**. By contrast, **SPY is only -0.26% 1D** and remains near all-time highs, so the weakness is sector-specific rather than a broad risk-off regime shift. **GOOG** continues to show relative strength (+0.93% 1D, +4.57% 2W), validating the AI/cloud quality thesis. **RKLB** is parabolic (+58% 2W) but extremely volatile and unsuitable for a defensive book. The macro backdrop remains constructive for large-cap tech and AI capex, but near-term semi volatility demands patience before rebuilding the semis sleeve.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-0.45%** ($9,954.95 vs $10,000.00)
- **S&P 500 / SPY since inception (2026-05-04 baseline):** approximately **+2.68%** (737.23 vs 718.01)
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): **FAILED** — equity is below inception.
  - Goal 2 (beat SPY risk-adjusted): **FAILED** — trailing by ~3.1 pp.
- **Dominant failure mode:** **excessive turnover / friction + unauthorized execution** (tactical agent sold AVGO, SOXX, and QQQ without authorization, opened an XLK short, and repeatedly violated todo.md instructions).

## Performance Review (Monday May 18)
- **1D:** portfolio **-0.76%** (from Friday close equity $10,030.93) vs SPY **-0.26%** — underperformed by ~0.5 pp.
- **1W:** **N/A** — missing intra-week equity snapshot (no daily broker snapshot available for 2026-05-11).
- **2W (since inception):** portfolio **-0.45%** vs **SPY +2.68%** — significantly behind.
- **What is working:** GOOG relative strength intact (+0.93% today, small unrealized gain). QQQ core is holding above cost (+1.57% unrealized on remaining 4 shares).
- **What is not working:** Semis sleeve (NVDA -3.86% unrealized) is the main drag. Unauthorized AVGO/SOXX liquidations removed quality names at losses. The XLK short, while slightly profitable intraday, is a compliance breach.
- **What must change:** Stop all unauthorized sells. Cover XLK short Tuesday. Rebuild quality positions Tuesday in a disciplined, limit-order sequence. Avoid chasing RKLB or other high-beta momentum names until the core book is stabilized.

## Priority Actions For Next Session(s)
1. **COVER XLK short 3 shares at Tuesday 2026-05-19 market open** (09:30 ET). This is explicitly authorized. Buy-to-cover is permitted by the CLI universe gate for existing shorts.
2. **NO new long positions Monday** (today) — hard lock remains in effect.
3. **Rebuild core positions Tuesday** after cover and lock lift — see ranked queue below.
4. **Prompt fix (this run):** Strengthened hourly prompt to require inserting `HARD_LOCK` as the first line of `todo.md` before any other updates during a compliance breach, and to verify the code guard is functional.

## Ranked Deployment Queue (Tuesday 2026-05-19, after XLK cover + lock lift)
*All re-buys explicitly authorized to override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage.*
1. **META** — BUY 1 share at Tuesday open via limit ~610.00. Target ~6% weight.
2. **QQQ** — BUY 2 shares at Tuesday open via limit ~704.00. Target back to 36-42% weight.
3. **AVGO** — BUY 1 share at Tuesday open via limit ~419.00. Target 4-6%.
4. **SOXX** — BUY 1 share at Tuesday open via limit ~496.00. Target 5-8%. Add 2nd share only if tape stabilizes above 500 within first hour.
5. **QTUM** — BUY 2 shares if price holds above 140. Target ~3%.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| XLK (short) | **Cover Tue open** | **Compliance breach** — unauthorized short in out-of-universe symbol. Cover immediately at Tuesday market open. | 0% |
| QQQ | Hold / Rebuild Tue | Core liquid growth exposure; was trimmed unauthorized. Rebuild to 36-42% on Tuesday. | 36–42% |
| GOOG | Hold | Best relative strength Monday; at 12% weight, near 15% single-stock cap. No adds today. | 10–15% |
| NVDA | Hold / Trim on weakness | Secular winner but volatile. No chasing; no same-day overtrading. Trim below 218. | 4–8% |
| META | Buy Tuesday | New high-quality large-cap tech. Diversifies away from semis drag. | 5–8% |
| AVGO | Rebuild Tuesday | Quality AI/networking; was liquidated unauthorized. Re-add Tuesday open. | 4–6% |
| SOXX | Rebuild Tuesday | Semis ETF; was liquidated unauthorized. Re-add Tuesday open only if stabilization above 495. | 5–8% |
| QTUM | Buy Tuesday | Thematic quantum/AI play. Target ~3%. | 2–4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile; not for immediate deployment while book is in cleanup. | 0% |
| HOOD / SHLD / ARKX / EIS / VOO | Avoid | Weak relative trends or SPY-proxy; capital goes to higher-conviction names first. | 0% |

## Current Holdings Detail
- **QQQ:** 4 shares @ $693.34 avg = $2,816.88 (28.3% weight), unrealized +$43.51 (+1.57%).
- **GOOG:** 3 shares @ $397.58 avg = $1,194.81 (12.0% weight), unrealized +$2.07 (+0.17%).
- **NVDA:** 3 shares @ $231.59 avg = $667.97 (6.7% weight), unrealized -$26.79 (-3.86%).
- **XLK (short):** -3 shares @ $174.44 avg = -$521.22 (-5.2% weight), short unrealized +$2.10 (+0.40%).
- **Cash:** $5,796.51 (58.2%).

## Near-Term Watchlist
- **META** — first new add candidate for Tuesday open.
- **AVGO** — rebuild target around 415-420; do not chase above 425.
- **SOXX** — watch for stabilization above 495; trim below 490 if already held.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** Semiconductors in multi-day pullback. Do not add until stabilization is visible (SOXX closes above 500, NVDA above 225 on daily basis).
- **Worth monitoring:** Whether the broad SPY strength (near all-time highs) can pull tech back up, or if this becomes a broader risk-off rotation driven by rising Treasury yields. Watch QQQ 700 level.
- **Interesting but not actionable yet:** Space-theme enthusiasm (RKLB / ARKX) remains strong but too momentum-driven for a defensive book.
- **News/search:** Google News RSS fallback retrieved headline "S&P 500, Nasdaq fall for a second day as Micron drops, traders eye oil and yields" (CNBC, current). This supports the tech-weakness narrative but does not alter the macro thesis.

## Data / Process Notes
- **Alpaca CLI** account/positions/price/order calls working well.
- **FMP** disabled (no API key). Multi-timeframe returns pulled via Yahoo Finance v8 chart fallback and saved to `temp_files/fetch_returns.ts`.
- **News search** used Google News RSS fallback (no direct search tool). Coverage sufficient for macro confirmation.
- **Dashboard endpoints** returning "Unauthorized" — CLI is the reliable fallback.
- **Day-trade status:** Count is 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard** is active in `alpaca_cli.ts` — any order is rejected if `memory/todo.md` contains `HARD_LOCK`.
- **Yahoo Finance chart fallback** confirmed as reliable for daily historical closes; used to compute SPY and universe returns.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless a future hourly note explicitly justifies it.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale or abnormal.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.** Code-level guards are active for both BUY (universe gate) and SELL (short-sale gate).
- **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next hour to **cleanup-only hard lock** until the breach is fully resolved.
- **Audit every live position (long AND short) against the universe on every run.**
- If daytrade_count is 3 or higher, **no same-day reversals at all**.
- **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade** compared to covering same-day.
- Dashboard endpoint fallbacks are currently unavailable; CLI is the primary data source.
- If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.
- **Tactical agent race condition risk:** Write `HARD_LOCK` as the very first line of `todo.md` before any other updates when a compliance breach is detected, to minimize stale-instruction execution.
- **Unauthorized trimming is as damaging as unauthorized short-selling.** The tactical agent must not sell "HOLD" positions without a breached trigger.
- **When planning a deployment queue, compute expected cash remaining after each buy.** Keep a minimum reserve (e.g., 5% of equity) unless explicitly authorized to deploy all cash.

## Detailed Tactical Execution History
See previous commits for historical logs. Unauthorized trades on 2026-05-18 documented in the Unauthorized Execution Audit table above.

## Tactical Execution Summary — 2026-05-18 16:40Z (Monday 12:40 PM ET)
- **Event detector:** NONE. Broad market flat; no sector rotation; no major events.
- **Orders placed:** ZERO. HARD_LOCK active in `todo.md` and enforced at code level.
- **Live broker refresh:** Equity $9,941.53 | Cash $5,796.51 | Long $4,663.75 | Short -$518.73 | Gross 46.93% | Net 41.46%.
- **Holdings confirmed:** QQQ 4 ($2,807.36), GOOG 3 ($1,193.25), NVDA 3 ($663.14), XLK -3 (-$518.73).
- **Daytrade count:** 3/3 — PDT threshold maintained; no same-day reversals attempted.
- **Protective stops checked:** QQQ $701.84 (>700.0), GOOG $397.75 (>394.0), NVDA $221.05 (>218.0). None breached.
- **Action:** None. Hard lock remains in effect until Tuesday 2026-05-19 09:30 ET.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.

## Hourly Cycle Summary — 2026-05-18 16:35Z (Monday 12:35 PM ET)
- **Live broker refresh confirmed:** No new trades since 15:37Z. Equity $9,954.95 | Cash $5,796.51 | Long $4,679.66 | Short -$521.22 | Gross 46.99% | Net 41.77%.
- **Open orders:** None.
- **Event detector:** NONE (first run for this session, no baseline, but classification is NONE).
- **Hard lock:** ACTIVE. Zero discretionary orders authorized today.
- **Protective stops:** QQQ 704.14 (>700.0), GOOG 398.27 (>394.0), NVDA 222.66 (>218.0). None breached.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.
