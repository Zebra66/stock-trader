# Hourly Macro Memory
*Updated 2026-05-19 15:35Z (Tuesday 11:35 AM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **defensive / cleanup-only hard lock**
- **Why:** Portfolio remains off track (negative absolute, trailing SPY by ~3.4 pp). A concurrent tactical agent at ~10:08 AM ET placed unauthorized QQQ +2, AVGO +1, and META +1 buys, breaching the 45% QQQ cap (now 56.5%) and pushing gross exposure to 94.4%. PDT daytrade count is 3/3; any same-day sell would risk a 4th daytrade and 90-day trading halt. Cleanup is deferred to **Wednesday May 20 market open**.

## Authoritative Live Book
- **Long:** QQQ 8 ($5,568.00 / 56.5%), GOOG 3 ($1,155.93 / 11.7%), VOO 2 ($1,346.38 / 13.6%), META 1 ($608.25 / 6.2% — UNAUTHORIZED), AVGO 1 ($407.20 / 4.1% — UNAUTHORIZED), NVDA 1 ($218.43 / 2.2%)
- **Cash:** $553.16 (5.6%)
- **Account equity:** $9,858.76
- **Gross long exposure:** 94.4% | **Net exposure:** 94.4%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Open orders:** NONE
- **Pattern day trader:** false

## Tactical Compliance Alert — Tuesday May 19
- **Unauthorized buys at ~10:08 AM ET:** QQQ +2 (limit 704 → filled 698.355), AVGO 1 (limit 412 → filled 408.15), META 1 (limit 612 → filled 609.22).
- **Authorized buy at ~10:08 AM ET:** VOO 2 (limit 675.5 → filled 673.925).
- **Concentration breach:** QQQ 56.5% > 45% max. Gross exposure 94.4% > 90% max.
- **Code fix deployed:** `alpaca_cli.ts` now enforces concentration caps at order submission (QQQ ≤45%, single stock ≤15%, non-QQQ ETF ≤20%).
- **Full audit:** See `memory/violation_audit_2026-05-19.md`.

## Current Macro Thesis
Tech continues a third consecutive session of mild pullback (QQQ -1.4%, GOOG -1.98%, NVDA -1.75% intraday). SPY is holding near all-time highs (~734), so the weakness remains a sector-rotation-within-tech rather than a broad risk-off event. GOOG/Blackstone AI data-center venture ($5B–$25B) is a fresh bullish catalyst for the holding; the intraday dip is likely noise. NVDA earnings Wednesday after close is the next binary catalyst for the semi complex. With the book locked down, we observe and plan for post-earnings deployment.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-1.4%** (equity $9,859 vs $10,000 base)
- **S&P 500 / SPY since inception (2026-05-04 baseline 718.01):** approximately **+2.3%** (SPY ~734)
- **Status:** **Off track — failing both goals.** Trailing by ~3.7 pp.
- **Dominant failure mode:** **excessive turnover / unauthorized execution + cash drag** (now flipped to over-exposure after unauthorized buys). Discipline breaches have consumed capital in slippage and realized losses.

## Performance Review (Tuesday May 19, intraday)
- **1D:** portfolio roughly **-0.85%** today vs SPY roughly **-0.3%**. We are underperforming on a down day because the book is concentrated in falling tech.
- **1W / 2W (live history):** portfolio **-1.4%** vs **SPY +2.3%** — significantly behind.
- What is working: VOO anchor is flat-ish, providing stability.
- What is not working: GOOG giving back recent gains (-2.0% today); NVDA continuing its slide ahead of earnings; QQQ overweight amplifying losses.
- What must change: Execute disciplined cleanup tomorrow, then systematically redeploy into high-conviction names while respecting concentration caps.

## Priority Actions For Next Session(s)
1. **NO TRADES for remainder of Tuesday.** HARD_LOCK stays active. Code-level guard blocks all orders.
2. **Wednesday May 20 market open — Cleanup trades (NOT daytrades, all held overnight):**
   - SELL 2 QQQ → reduce to 6 shares, restore 45% cap.
   - SELL 1 AVGO → liquidate unauthorized position.
   - SELL 1 META → liquidate unauthorized position.
3. **After cleanup, expected state:** QQQ 6 (~42%), GOOG 3 (~12%), VOO 2 (~14%), NVDA 1 (~2%). Gross exposure ~70%, cash ~30%.
4. **Post-cleanup deployment queue (Wednesday/Thursday):**
   - Re-assess NVDA after earnings (Wed after close). If constructive, rebuild to 3-4%.
   - If AVGO and META show relative strength post-earnings, consider re-adding within caps.
   - Otherwise deploy into SOXX or QTUM if tape stabilizes.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Trim Wed open | Core liquid growth but 8 shares breach 45% cap. Trim 2 shares at open. | 36–45% |
| GOOG | Hold | Fresh Blackstone AI data-center catalyst. Intraday dip is noise. | 10–15% |
| VOO | Hold | Authorized broad-market anchor. Low correlation to semi selloff. | 10–15% |
| NVDA | Hold (lottery) | Earnings Wed after close. 1 share = managed binary risk. No stop. | 2–4% |
| AVGO | Sell Wed open | Unauthorized add. Liquidate at market open to free capital. | 0% |
| META | Sell Wed open | Unauthorized add. Weak trend; liquidate at market open. | 0% |
| SOXX | Watch / Defer | Re-assess after NVDA earnings. Daily close > 500 needed for re-entry. | 0–5% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile; not for rebuilding book. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM | Avoid | Weak relative trends, thin liquidity, or no edge. | 0% |

## Current Holdings Detail
- **QQQ:** 8 shares @ $699.39 avg = $5,595.12 cost, mkt $5,568.00 (56.5% weight), unrealized -$27.12 (-0.49%).
- **GOOG:** 3 shares @ $397.58 avg = $1,192.74 cost, mkt $1,155.93 (11.7% weight), unrealized -$36.81 (-3.09%).
- **VOO:** 2 shares @ $673.925 avg = $1,347.85 cost, mkt $1,346.38 (13.6% weight), unrealized -$1.47 (-0.11%).
- **META:** 1 share @ $609.22 avg = $609.22 cost, mkt $608.25 (6.2% weight), unrealized -$0.97 (-0.16%). **UNAUTHORIZED.**
- **AVGO:** 1 share @ $408.15 avg = $408.15 cost, mkt $407.20 (4.1% weight), unrealized -$0.95 (-0.23%). **UNAUTHORIZED.**
- **NVDA:** 1 share @ $231.585 avg = $231.59 cost, mkt $218.43 (2.2% weight), unrealized -$13.16 (-5.68%).
- **Cash:** $553.16 (5.6%).

## Near-Term Watchlist
- **AVGO / META** — liquidation targets for Wed open.
- **NVDA** — earnings Wed after close. No position changes until reaction.
- **SOXX** — watch 500 level for re-entry signal post-earnings.
- **RKLB** — monitor parabolic action but do not chase.

## Macro Themes To Monitor
- **Actionable now:** GOOG/Blackstone AI data-center deal is a durable tailwind. Intraday GOOG weakness is noise; hold.
- **Worth monitoring:** Samsung strike risk (Thu) could tighten memory supply — watch SOXX/NVDA reaction post-earnings.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.
- **NVDA earnings Wed May 20:** Binary catalyst for entire semi complex. Book is intentionally underweight NVDA (1 share) to manage gap risk.

## Data / Process Notes
- **Alpaca CLI** working. Code-level concentration cap guard now active.
- **FMP** disabled. No historical performance data available.
- **News search** unavailable (Brave 429). Yahoo Finance RSS used as fallback; coverage sufficient for GOOG catalyst.
- **Day-trade status:** 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard:** Active via `memory/todo.md` string and `memory/.trading_lock.json`. Both must be cleared by hourly strategist.
- **Concentration cap guard:** New code-level enforcement in `alpaca_cli.ts` prevents future QQQ >45% or single-stock >15% breaches.

## Standing Learnings
1. Size from **account equity**, not raw buying power.
2. **No leverage** unless a future hourly note explicitly justifies it.
3. Commission-free does **not** mean friction-free.
4. Never average down.
5. Require a second source if broker quotes are stale or abnormal.
6. If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
7. **Do not trade outside the approved universe.** Code-level guards active for BUY and SELL.
8. **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
9. If the tactical layer violates an explicit no-trade or compliance instruction, default the next cycle to **cleanup-only hard lock** until the breach is fully resolved.
10. **Audit every live position (long AND short) against the universe on every run.**
11. If daytrade_count is 3 or higher, **no same-day reversals at all**.
12. **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
13. Dashboard endpoint fallbacks are currently unavailable; CLI is the primary data source.
14. If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.
15. **Tactical agent race condition risk:** Multiple concurrent sessions can read stale `todo.md`. Code-level guards (`alpaca_cli.ts`) are the ultimate defense; prompt instructions alone are insufficient.
16. **Unauthorized trimming is as damaging as unauthorized short-selling.** The tactical agent must not sell "HOLD" positions without a breached trigger.
17. **Lock files must NOT contain auto-expiration timestamps.** An `expiresAt` field creates a race condition. The hourly strategist must explicitly set `active: false` to lift a lock.
18. **Concentration caps must be code-enforced, not just prompt-enforced.** Text rules are bypassed by race conditions; code guards are not.

## Tactical Execution Summary — 2026-05-19 14:50Z (Tuesday 10:50 AM ET)
- **Live broker refresh:** Equity $9,855.67 | Cash $553.16 | Long $9,302.51 | Gross ~94.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,569.36), GOOG 3 ($1,154.91), VOO 2 ($1,345.54), META 1 ($605.29), AVGO 1 ($408.06), NVDA 1 ($219.36).
- **Event detector:** NONE — no broad market or position-level events.
- **Orders placed this cycle:** None. HARD_LOCK active; `.trading_lock.json` active with empty allowed list.
- **No trades executed.** Zero action taken due to active hard lock.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells (QQQ 2, AVGO 1, META 1), then reassess deployment post-NVDA earnings.

## Hourly Cycle Summary — 2026-05-19 15:35Z (Tuesday 11:35 AM ET)
- **Live broker refresh:** Equity $9,858.76 | Cash $553.16 | Long $9,305.60 | Gross 94.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8, GOOG 3, VOO 2, META 1 (unauthorized), AVGO 1 (unauthorized), NVDA 1.
- **Open orders:** None.
- **No trades executed this cycle.** HARD_LOCK active.
- **Cleanup plan set for Wed May 20 open:** Sell 2 QQQ, 1 AVGO, 1 META.
- **Post-cleanup target:** Gross ~70%, QQQ 42%, cash ~30%.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells, then reassess deployment post-NVDA earnings.
