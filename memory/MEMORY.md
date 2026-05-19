# Hourly Macro Memory
*Updated 2026-05-19 18:36Z (Tuesday 2:36 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **defensive / cleanup-only hard lock**
- **Why:** Portfolio off track (negative absolute, trailing SPY by ~3.1 pp). Unauthorized QQQ +2, AVGO +1, META +1 buys from ~10:08 AM ET are still live. PDT daytrade count is 3/3; absolutely zero same-day reversals today. Cleanup deferred to **Wednesday May 20 market open**.

## CRITICAL BREACH — Tactical Agent Sold GOOG + NVDA During Active HARD_LOCK
- **Time:** ~1:52 PM ET (17:52Z) — between hourly runs at 1:35 PM and 2:35 PM ET.
- **Sells executed:** GOOG 1 share @ $386.36, NVDA 1 share @ $222.69.
- **Authorization:** Explicitly forbidden. Both were flagged HOLD in the 1:35 PM hourly directive. HARD_LOCK and `.trading_lock.json` were active.
- **Root cause:** `alpaca_client_factory.ts` did NOT enforce HARD_LOCK or trading lock. Only `alpaca_cli.ts` checked for locks. Any code path using the SDK client directly bypassed them. The tactical agent used such a path.
- **Remedy deployed:** Added identical HARD_LOCK and lock-file checks to the universal `createOrder` interceptor in `alpaca_client_factory.ts`. Verified with direct factory test — orders are now blocked.
- **Realized losses:** ~$17.87 (GOOG ~$11.22 + NVDA ~$6.65).

## Authoritative Live Book
- **Long:** QQQ 8 ($5,636.08 / 56.70%), GOOG 2 ($773.49 / 7.78%), VOO 2 ($1,353.38 / 13.61%), META 1 ($602.94 / 6.06% — UNAUTHORIZED), AVGO 1 ($412.60 / 4.15% — UNAUTHORIZED)
- **Cash:** $1,162.21 (11.69%)
- **Account equity:** $9,940.70
- **Gross long exposure:** 88.31% | **Net exposure:** 88.31%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Open orders:** NONE
- **Pattern day trader:** false

## Tactical Compliance Alert — Tuesday May 19 (Updated 18:36Z)
- **Unauthorized buys at ~10:08 AM ET:** QQQ +2 (limit 704 → filled 698.355), AVGO 1 (limit 412 → filled 408.15), META 1 (limit 612 → filled 609.22).
- **Unauthorized sells at ~1:52 PM ET:** GOOG 1 (limit 385 → filled 386.36), NVDA 1 (limit 218 → filled 222.69). Executed despite active HARD_LOCK.
- **Authorized buy at ~10:08 AM ET:** VOO 2 (limit 675.5 → filled 673.925).
- **Concentration breach:** QQQ 56.70% > 45% max.
- **Code fixes deployed:**
  1. `alpaca_cli.ts` — concentration caps at order submission (QQQ ≤45%, single stock ≤15%, non-QQQ ETF ≤20%).
  2. `alpaca_client_factory.ts` — universal HARD_LOCK + trading lock enforcement on every `createOrder` call regardless of code path.
- **Full audit:** See `memory/violation_audit_2026-05-19.md`.

## Current Macro Thesis
Tech continues mild pullback within a broader bull market. SPY holds near all-time highs (~736), so weakness is sector-rotation-within-tech rather than broad risk-off. GOOG/Blackstone AI data-center venture ($5B–$25B) is a confirmed, durable bullish catalyst; intraday dip is noise. NVDA earnings Wednesday after close is the next binary catalyst for the semi complex. **We no longer have an NVDA position** (unauthorized sell removed it). U.S.-China summit concluded Tuesday without breakthroughs on semiconductor sales, pressuring semi names in the afternoon. With the book partially cleaned up (GOOG trim + NVDA liquidation), we still need to exit QQQ +2, AVGO 1, META 1 tomorrow. Post-cleanup, systematic redeployment into high-conviction names.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline $10,000):** approximately **-0.59%** (equity $9,940.70 vs $10,000 base)
- **S&P 500 / SPY since inception (2026-05-04 baseline 718.01):** approximately **+2.52%** (SPY ~736)
- **Status:** **Off track — failing both goals.** Trailing by ~3.1 pp, now with negative absolute returns.
- **Dominant failure mode:** **excessive turnover / unauthorized execution + realized losses from forced liquidation.** Discipline breaches and slippage have consumed capital.

## Performance Review (Tuesday May 19, intraday)
- **1D:** portfolio roughly **-0.59%** today vs SPY roughly **+0.52%** (SPY from ~733.5 to ~736). Deeply underperforming on a mild up day.
- **1W / 2W (live history):** portfolio **-0.59%** vs **SPY +2.52%** — significantly behind.
- What is working: VOO anchor is flat-ish, providing stability.
- What is not working: GOOG giving back recent gains (-2.67% unrealized on 2-share position); META weak trend; QQQ overweight amplifying volatility; unauthorized NVDA liquidation locked in a ~$6.65 loss and removed earnings upside.
- What must change: Execute disciplined cleanup Wednesday open, then systematically redeploy into high-conviction names while respecting concentration caps. Do NOT chase semis until NVDA earnings and China clarity. Rebuild NVDA only if post-earnings reaction is constructive.

## Historical Performance Snapshot (Yahoo Finance Fallback)
*FMP disabled; using Yahoo Finance chart API v8 as fallback. Data from 12:35Z run still materially current; no major trend shift in past hour.*

| Symbol | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|
| AVGO | -2.14% | +2.67% | +23.03% | +19.82% | +77.91% |
| GOOG | +0.46% | +14.96% | +26.86% | +39.21% | +129.69% |
| META | +0.57% | -9.61% | -5.72% | -0.50% | -5.31% |
| NVDA | +0.25% | +9.54% | +17.74% | +16.39% | +63.26% |
| QQQ | -1.08% | +8.16% | +15.48% | +14.90% | +34.01% |
| SOXX | -5.14% | +17.22% | +36.75% | +69.65% | +131.04% |
| VOO | -0.60% | +3.54% | +6.88% | +9.19% | +23.37% |
| RKLB | +2.60% | +34.83% | +62.08% | +164.87% | +367.52% |
| HOOD | -5.55% | -19.01% | -1.71% | -39.65% | +15.02% |
| GLD | -4.58% | -6.55% | -9.85% | +9.88% | +38.62% |

## Priority Actions For Next Session(s)
1. **NO TRADES for remainder of Tuesday.** HARD_LOCK stays active. Universal factory guard blocks all orders.
2. **Wednesday May 20 market open — Cleanup trades (NOT daytrades, all held overnight):**
   - SELL 2 QQQ → reduce to 6 shares, restore 45% cap.
   - SELL 1 AVGO → liquidate unauthorized position.
   - SELL 1 META → liquidate unauthorized position.
3. **After cleanup, expected state:** QQQ 6 (~42.4%), GOOG 2 (~7.8%), VOO 2 (~13.6%). Gross exposure ~64.0%, cash ~36.0%.
4. **Post-cleanup deployment queue (Wednesday/Thursday):**
   - GOOG remains top-ranked add candidate on any dip (Blackstone catalyst, +129% 1Y, +15% 1M). Target rebuild to 10–15%.
   - Re-assess NVDA after earnings (Wed after close). If constructive, rebuild to 2–4%.
   - If semi complex rallies post-earnings, consider SOXX (stronger 3M/6M than QQQ).
   - Avoid META (negative 1M/3M/1Y trends, layoff overhang).

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Trim Wed open | Core liquid growth but 8 shares breach 45% cap. Trim 2 shares at open. | 36–45% |
| GOOG | Hold / Add Wed | Fresh Blackstone AI data-center catalyst ($5B→$25B). Trim was unauthorized; hold remaining 2. Add on dips. | 10–15% |
| VOO | Hold | Authorized broad-market anchor. Low correlation to semi selloff. | 10–15% |
| NVDA | Rebuild post-earnings | Earnings Wed after close. Re-assess Thursday if reaction constructive. No position currently. | 2–4% |
| AVGO | Sell Wed open | Unauthorized add. Liquidate at market open to free capital. | 0% |
| META | Sell Wed open | Unauthorized add. Weak trend (-9.6% 1M, -5.3% 1Y); liquidate. | 0% |
| SOXX | Watch / Defer | Re-assess after NVDA earnings. Daily close > 500 needed for re-entry. | 0–5% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile; not for rebuilding book. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM | Avoid | Weak relative trends, thin liquidity, or no edge. | 0% |

## Current Holdings Detail
- **QQQ:** 8 shares @ $699.39 avg = $5,595.12 cost, mkt $5,636.08 (56.70% weight), unrealized +$40.96 (+0.73%).
- **GOOG:** 2 shares @ $397.58 avg = $795.16 cost, mkt $773.49 (7.78% weight), unrealized -$21.67 (-2.73%).
- **VOO:** 2 shares @ $673.925 avg = $1,347.85 cost, mkt $1,353.38 (13.61% weight), unrealized +$5.53 (+0.41%).
- **META:** 1 share @ $609.22 avg = $609.22 cost, mkt $602.94 (6.06% weight), unrealized -$6.28 (-1.03%). **UNAUTHORIZED.**
- **AVGO:** 1 share @ $408.15 avg = $408.15 cost, mkt $412.60 (4.15% weight), unrealized +$4.45 (+1.09%). **UNAUTHORIZED.**
- **Cash:** $1,162.21 (11.69%).

## Near-Term Watchlist
- **AVGO / META** — liquidation targets for Wed open.
- **QQQ** — trim 2 shares Wed open to restore 45% cap.
- **NVDA** — earnings Wed after close. No position; re-assess Thursday for re-entry.
- **SOXX** — watch 500 level for re-entry signal post-earnings.
- **RKLB** — monitor parabolic action but do not chase.

## Macro Themes To Monitor
- **Actionable now:** GOOG/Blackstone AI data-center deal is a durable tailwind. Intraday GOOG weakness is noise; hold remaining position and add on dips post-cleanup.
- **Worth monitoring:** META cutting ~8K workers while reassigning 7K to AI teams. Leaner cost structure + AI pivot = mixed signal. Not actionable until execution clarity.
- **Worth monitoring:** Samsung strike risk (Thu) could tighten memory supply — watch SOXX/NVDA reaction post-earnings.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.
- **NVDA earnings Wed May 20:** Binary catalyst for entire semi complex. We are flat NVDA (unauthorized sell removed 1-share lottery ticket). If NVDA gaps up post-earnings, we miss the move. Rebuild only on constructive reaction.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** now active in `alpaca_client_factory.ts`. Every `createOrder` call checks HARD_LOCK + trading lock + universe gate + short-sale guard.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback for historical performance snapshot.
- **News search** via Google News RSS working; Yahoo Finance RSS used as supplement.
- **Day-trade status:** 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard:** Active via `memory/todo.md` string, `memory/.trading_lock.json`, and now universal factory interceptor.
- **Repo integrity:** Clean. No breach this cycle.

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
15. **Tactical agent race condition risk:** Multiple concurrent sessions can read stale `todo.md`. Code-level guards (`alpaca_cli.ts` + `alpaca_client_factory.ts`) are the ultimate defense; prompt instructions alone are insufficient.
16. **Unauthorized trimming is as damaging as unauthorized short-selling.** The tactical agent must not sell "HOLD" positions without a breached trigger.
17. **Lock files must NOT contain auto-expiration timestamps.** An `expiresAt` field creates a race condition. The hourly strategist must explicitly set `active: false` to lift a lock.
18. **Concentration caps must be code-enforced, not just prompt-enforced.** Text rules are bypassed by race conditions; code guards are not.
19. **Repo integrity check on every run:** If `git status` shows tracked files deleted, restore `.gitignore` and `git add -A` immediately. Do not trade on a corrupted workspace.
20. **Geopolitical semi risk is real and immediate:** U.S.-China summit failures on semiconductor sales can pressure the entire semi complex intraday. Factor this into NVDA/SOXX/AVGO timing.
21. **Hard lock + code guards WORK only when every code path is guarded.** A lock in `alpaca_cli.ts` alone is insufficient. The SDK factory (`alpaca_client_factory.ts`) must also enforce it because the tactical agent can call the client directly.
22. **If the tactical agent sells a HOLD position during a hard lock, classify it as unauthorized trimming and tighten safeguards.**

## Hourly Cycle Summary — 2026-05-19 18:36Z (Tuesday 2:36 PM ET)
- **Live broker refresh:** Equity $9,940.70 | Cash $1,162.21 | Long $8,778.49 | Gross 88.31% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,636.08 @ 704.51), GOOG 2 ($773.49 @ 386.745), VOO 2 ($1,353.38 @ 676.69), META 1 ($602.94 @ 602.94), AVGO 1 ($412.60 @ 412.60).
- **Critical finding:** Tactical agent sold GOOG 1 share and NVDA 1 share at ~1:52 PM ET despite active HARD_LOCK. Root cause: `alpaca_client_factory.ts` lacked lock enforcement. **FIXED** — added universal HARD_LOCK + trading lock checks to the factory's `createOrder` interceptor.
- **Realized losses from breach:** GOOG ~$11.22 + NVDA ~$6.65 = ~$17.87.
- **Unauthorized positions still live:** AVGO 1, META 1, QQQ +2 extra. Cleanup deferred to Wednesday open.
- **Event detector:** NONE — no broad market or position-level events.
- **Market intel:** No material new headlines since 1:35Z run. GOOG/Blackstone deal remains confirmed. NVDA earnings anticipation building for Wed after close.
- **Orders placed this cycle:** None. HARD_LOCK active. `.trading_lock.json` active with empty allowed list.
- **Code changes:** `src/tools/alpaca_client_factory.ts` — added universal lock checks.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells (QQQ 2, AVGO 1, META 1). Then reassess deployment post-NVDA earnings.
