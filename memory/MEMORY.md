# Hourly Macro Memory
*Updated 2026-05-18 09:35 ET. Market OPEN. All compliance issues resolved.*

---

## Tactical Execution Summary — 2026-05-18 09:50Z
- **Status:** Market OPEN. Event detector: NONE.
- **Orders placed:** None.
- **Holdings unchanged:** QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1.
- **Cash / equity / exposure:** $1,958.50 / $10,032.25 / 80.5%.
- **Daytrade count:** 3.
- **GOOG breakout blocked by cap:** GOOG broke above $400.0 ($400.72, TradeCount=60, Volume=3297) — add condition triggered. Cap check: 4 shares × $400.72 = $1,602.88 / $10,032 = **15.97%**, exceeding the 15% single-stock cap. One-order rule prevents paired discretionary trim. **Add ABORTED.** Will revisit if GOOG dips (cheaper = lighter weight) or if another position breaks its stop to free up cap.
- **All protective stops:** Intact. QQQ $709.37 (>700), SOXX $506.01 (>500), NVDA $225.39 (>220), AVGO $419.18 (>415), GOOG $400.72 (>389).
- **Next expected action:** Hold core. Next possible triggers: GOOG dip to ~390 (cheaper add = cap-compliant), QTUM dip to ~140, or any protective stop breaking.
- **Code fix:** Corrected syntax error in `src/tools/alpaca_cli.ts` (`cancel-order` case was malformed and leaked into `get-latest-price`).

---

## Authoritative Live Book
- **QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1**
- **Account equity / cash / buying power:** **$10,032.25 / $1,958.50 / $11,990.75**
- **Current gross exposure:** **$8,073.75 = 80.5%** of equity.
- **Daytrade count:** **3** (unchanged; no daytrades today).
- **Target gross-exposure band:** **75–85%** — current exposure sits squarely inside this band.

## Current Regime
- **Regime:** **neutral / light offensive catch-up**
- **Why:** The unauthorized XLK position has been fully liquidated and AVGO laggard trimmed. Gross exposure is now 80.4%, within the 75–85% target. The portfolio is still trailing SPY by ~2.6 percentage points since inception, so we cannot afford to sit fully defensive, but Friday's tech pullback and today's early mixed tape (GOOG +0.95%, NVDA flat, SOXX -0.75%, AVGO -1.85%) warrant selective, not aggressive, deployment.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** **~+0.0%** (equity ~$9,995 vs inferred ~$10,000 start).
- **S&P 500 / SPY since inception (2026-05-04 baseline $718.01):** **+2.90%** (SPY $738.85).
- **Status:** **Off track — trailing SPY by roughly 2.9 percentage points.**
- **Dominant failure mode:** **excessive turnover / friction** (repeated SOXX churn, unauthorized XLK adds, buying into Friday weakness). These issues have been materially resolved this cycle by exiting XLK and trimming AVGO.

## Start-of-Day Performance Review (Monday May 18)
- **1D (today so far):** portfolio roughly **-0.1%** vs **SPY -0.04%** — slight underperformance driven by AVGO weakness (-1.85%) and SOXX softness (-0.75%). GOOG (+0.95%) is the bright spot.
- **1W:** Not explicitly calculable from live history, but price action shows SOXX -3.53% 1W, AVGO -1.84% 1W, while GOOG +2.53% 1W and NVDA +3.62% 1W.
- **2W:** portfolio **~flat** vs **SPY +2.9%** — significantly behind.
- **What is working:** QQQ core remains profitable (+2.05% unrealized) and GOOG is showing best relative strength today and over 1W/1M/3M/6M.
- **What is not working:** AVGO is the weakest 1-week performer in the book (-1.84% 1W, +3.45% 1M vs SOXX +23.6%, NVDA +12.7%). We trimmed 1 share to bring weight to 4.2% (target 4–5%).
- **What must change today:** Hold core, avoid churn, and redeploy the ~$1,959 cash into the highest-quality setup (GOOG) only on a confirmed dip or breakout that respects the 15% single-stock cap.

## Current Macro Thesis
Tech is stabilizing after Friday's broad risk-off session (SOXX -4.06%, NVDA -4.42%, AVGO -3.32%). Monday's early tape shows GOOG and NVDA rebounding while AVGO continues to lag. The multi-week AI/semiconductor/growth trend remains intact (SOXX +23.6% 1M, GOOG +16.8% 1M, NVDA +12.7% 1M, QQQ +9.5% 1M). Headlines via Yahoo Finance RSS highlight oil moving on US-Iran tensions, but no direct tech-specific adverse news. The semis pullback looks like a normal consolidation within an uptrend rather than a regime shift. We will not add into weakness, but we will hold core positions above updated stop levels and deploy cash selectively into strength.

## Priority Actions For Next Hour
1. **XLK cleanup is DONE.** No further action required.
2. **HOLD approved core positions** with updated stop levels below.
3. **GOOG is the #1 redeployment candidate** if it pulls back to ~390 and holds, or breaks above 400 with volume. Adding 1 share would push GOOG to ~15.8% of equity (slightly above the 15% single-stock cap). Therefore, any GOOG add must be accompanied by a trim of another single-stock position (AVGO or NVDA) or executed only if GOOG price is lower such that 4 shares stays under 15%.
4. **Monitor SOXX 500 support** — a confirmed break below 500 on a 5-minute close would trigger a protective trim of 1 share.
5. **Monitor AVGO 415 level** — if it breaks below 415, consider exiting the remaining 1 share entirely.

## Ranked Deployment Queue
1. **GOOG** — best combination of quality, relative strength, and clean multi-week uptrend. Re-entry/add only if cap-compliant (≤15% of equity).
2. **QTUM** — thematic quantum/AI ETF with strong 1M (+12.6%) and 3M (+24.6%) momentum. A 1-share add (~$144 = 1.4%) would not stress concentration caps and would diversify AI exposure away from laggard AVGO.
3. **QQQ** — already at 42.5%, near the 45% cap. Adds are low priority.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | **Hold** | Core liquid growth exposure; largest weight, profitable. Keep unless broad tape cracks. | 36–42% |
| GOOG | **Hold / Add on strength** | Best relative strength today and across 1W/1M/3M/6M. Preferred add once cap math works. | 10–13% |
| SOXX | **Hold / Reduce on weakness** | Strong 1M/3M/6M theme but Friday drop and today softness. Trim if support breaks. | 10–15% |
| NVDA | **Hold** | Secular winner but volatile. No chasing; no same-day overtrading. | 4–6% |
| AVGO | **Hold / Tight stop** | Trimmed to 1 share. Valid AI/networking exposure but weakest 1W/1M trend in book. Exit if breaks 415. | 3–5% |
| QTUM | **Watch / Small add** | Thematic ETF, good momentum, no concentration risk. Small starter possible. | 0–3% |
| GLD | **Watch only** | Defensive diversifier only if macro turns decisively risk-off. | 0–3% |
| RKLB | **Watch only** | Parabolic 1M (+60.6%) but extremely volatile; not for immediate deployment. | 0% |
| META / HOOD / SHLD / ARKX / EIS / VOO | **Avoid** | Weak trends or redundant with QQQ/SPY exposure. | 0% |

## Current Holdings Detail
- **QQQ:** **42.4%** weight, unrealized **+2.31%**, price **$709.40**, cost **$693.34**.
- **SOXX:** **15.1%** weight, unrealized **-3.68%**, price **$506.46**, cost **$525.51**.
- **GOOG:** **12.0%** weight, unrealized **+0.81%**, price **$400.80**, cost **$397.58**.
- **NVDA:** **6.8%** weight, unrealized **-2.88%**, price **$224.92**, cost **$231.59**.
- **AVGO:** **4.2%** weight, unrealized **-3.66%**, price **$417.32**, cost **$433.17**.

## Near-Term Watchlist
- **GOOG** — first valid redeployment target after compliance is restored; cap math must be checked before any add.
- **QTUM** — small thematic starter candidate if cash remains above target band after next tactical cycle.
- **AVGO** — watch for 415 support breach; remaining 1 share is on a short leash.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** AI capex durability (GOOG, NVDA, SOXX trend health), AVGO relative weakness.
- **Worth monitoring:** Whether Friday's tech selloff was a one-day pullback. Watch QQQ 700 level and SOXX 500 level. Oil/Iran headlines via Yahoo Finance RSS may broaden market volatility but are not directly impacting our tech/growth universe yet.
- **Interesting but not actionable yet:** space-theme enthusiasm (**RKLB / ARKX**) remains strong but too momentum-driven for immediate deployment.
- **News coverage:** Google Search returned anti-bot redirects. Yahoo Finance RSS provided macro headlines (oil/Iran, market mixed). Coverage is sufficient for macro context but insufficient for stock-specific catalysts. Do not force a thesis from weak evidence.

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
- **Check for stale open orders before placing new ones.** If `qty_available=0` but the position is still held, there is likely an open order blocking further action. Use `get-orders` and `cancel-order` to clean up.
- If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.
- **FMP API key is not configured.** Continue using Yahoo Finance public chart endpoints as fallback for multi-timeframe performance.

## Last Run Summary
- **XLK compliance breach RESOLVED:** Cancelled stale limit order at $177.35 and sold 8 shares at market. No open XLK orders remain.
- **AVGO laggard trimmed:** Sold 1 share at market to reduce underperforming exposure from 8.4% to 4.2%.
- **Portfolio is now fully compliant:** all holdings inside approved universe and within concentration caps (QQQ 42.5%, SOXX 15.2%, GOOG 11.9%).
- **Gross exposure normalized:** 80.4%, inside the 75–85% target band.
- **Cash increased to $1,959:** ready for selective redeployment into highest-conviction names.
- **Daytrade count unchanged at 3:** XLK and AVGO sells were not daytrades (held overnight).
- **Code improvement:** Added `get-orders` and `cancel-order` commands to `src/tools/alpaca_cli.ts` to prevent future stale-order blockages.
- **Next tactical cycle priority:** HOLD core, monitor GOOG/QTUM add triggers, protect SOXX 500 and AVGO 415 stops.
