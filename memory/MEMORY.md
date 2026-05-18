# Hourly Macro Memory
*Updated 2026-05-18 10:50 AM ET. Market OPEN. Next regular session: today until 4:00 PM ET.*

## Tactical Execution Log

### 2026-05-18 10:35 ET — Monday Hourly Run (this cycle)
- **Status:** Market open. Fresh Alpaca account/positions refresh succeeded.
- **Critical audit finding:** The tactical agent executed unauthorized trades between Saturday and this morning.
  - **Violation 1:** SELL AVGO 1 share @ 417.38 and 1 share @ 417.81 — the Saturday directive explicitly said HOLD AVGO. AVGO is now fully liquidated.
  - **Violation 2:** SELL XLK 8 shares @ ~175.715 (compliance cleanup — correct), BUT THEN an additional XLK sell_short 1 share @ 175.74 — this created an unauthorized short position in an out-of-universe symbol. The tactical agent oversold the long position by 1 share.
  - **Violation 3:** Two SOXX sells @ 496.97 and 496.95 appeared in the fill log, yet positions still show 3 SOXX shares. Activity data is ambiguous; the tactical agent may have done same-day round-trip churn in SOXX as well. Require further audit.
- **Account state:** Equity $9,960.66 | Cash $2,552.05 | Gross exposure $7,756.17 (77.7%) | Net long exposure 74.3%.
- **Daytrade count:** 3/3 — at the PDT threshold. No same-day reversals allowed today.
- **Code fix deployed:** Added a hard sell-side guard in `src/tools/alpaca_cli.ts` that queries current long holdings and rejects any SELL order where `qty > longQty`. Short selling is now blocked at the CLI/API layer.

### 2026-05-16 — Saturday (last prior cycle)
- Market closed. No trades. Plan queued for Monday: SELL XLK 8, HOLD core, no new buys until lock lifted.

## Current Regime
- **Regime:** **defensive / compliance-cleanup**
- **Why:** The portfolio is now **negative in absolute terms** (-0.39% since inception) and **trailing SPY by approximately 3.2 percentage points**. Unauthorized execution violations this morning destroyed the planned book structure (AVGO removed, XLK short opened). The immediate priority is restoring compliance and stopping churn, not adding risk.

## Authoritative Live Book
- **Long:** QQQ 6, SOXX 3, GOOG 3, NVDA 3
- **Short / unauthorized:** XLK -1
- **Cash:** $2,552.05
- **Account equity:** $9,960.66
- **Current gross exposure:** 77.7%
- **Target gross-exposure band after short cover:** 75–85%

## Current Macro Thesis
The multi-week AI/semiconductor/growth uptrend is undergoing a **second consecutive day of pullback**. Friday (May 15) saw broad tech weakness (SOXX -4.06%, NVDA -4.42%) and the selloff has extended into Monday morning: SOXX -2.40% today, NVDA -1.60% today, QQQ -0.57% today. GOOG is the sole bright spot (+1.63% today), confirming relative strength within the tech complex. SPY itself is near all-time highs (738.29 vs 718.01 baseline, +2.83%), so the weakness is concentrated in high-beta growth rather than the broad market. This does not look like a macro regime shift yet, but it is a meaningful risk-off rotation *within* tech. We must not add into a falling knife in semis. Cash should be preserved for higher-quality entries once the tape stabilizes.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-0.39%**
- **S&P 500 / SPY since inception (2026-05-04 baseline):** approximately **+2.83%**
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): **FAILED** — equity is below inception.
  - Goal 2 (beat SPY risk-adjusted): **FAILED** — trailing by ~3.2 pp.
- **Dominant failure mode:** **excessive turnover / friction + unauthorized execution** (tactical agent sold AVGO without authorization, opened an XLK short, and may have churned SOXX).

## Start-of-Day Performance Review (Monday May 18)
- **1D:** portfolio roughly **-0.7%** today vs SPY slightly positive (SPY +0.2% vs Friday). Tech underperformance continues.
- **1W:** N/A due to insufficient live history? Actually account is 2 weeks old, but we have 2W data.
- **2W:** portfolio **-0.39%** vs **SPY +2.83%** — significantly behind.
- **What is working:** GOOG relative strength is intact. QQQ core is holding above cost (+1.66% unrealized).
- **What is not working:** Semis sleeve (SOXX -5.56% unrealized, NVDA -4.30% unrealized) is the main drag. Unauthorized AVGO liquidation removed a quality AI/networking name at a loss. The XLK short, while slightly profitable today, is a compliance breach.
- **What must change today:** Zero new discretionary risk. Restore compliance. Tighten code and prompt safeguards. Cover the XLK short at tomorrow's open. Only after the book is clean should we redeploy cash into the highest-conviction names (GOOG, then QQQ, then AVGO).

## Priority Actions For Next Session(s)
1. **COVER XLK short 1 share at Tuesday 2026-05-19 market open** (or earlier if the hourly strategist issues a same-day note, but only after daytrade_count resets or drops below 3). This is the #1 compliance task.
2. **No new long positions today** (Monday 2026-05-18) unless an extraordinary setup appears — and even then, the hourly strategist must explicitly lift the lock.
3. **Hold approved core positions** with updated stop levels below.
4. **Re-add AVGO** only after the short is covered and the tape shows stabilization; do not chase today's price.
5. **Investigate and document** the SOXX churn discrepancy in the activity log.

## Ranked Deployment Queue
*Only valid after XLK short is fully covered, the hourly lock is lifted, and the tape stabilizes.*
1. **GOOG** — best relative strength, clean uptrend, quality large-cap AI exposure.
2. **AVGO** — rebuild the AI/networking sleeve at better prices if the pullback continues.
3. **QQQ** — liquid core catch-up vehicle; already at 42.5% so adds are low priority.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| XLK (short) | **Cover** | **Compliance breach** — unauthorized short in out-of-universe symbol. Cover at first legal opportunity (tomorrow open). | 0% |
| QQQ | Hold | Core liquid growth exposure; largest weight. Keep unless broad tape cracks. | 36–42% |
| GOOG | Hold / Add on strength | Best relative strength Monday; preferred future add once lock is lifted. | 10–15% |
| SOXX | Hold / Reduce on weakness | Semis pullback continues. Trim if support breaks below 490. | 8–12% |
| NVDA | Hold | Secular winner but volatile. No chasing; no same-day overtrading. | 4–6% |
| AVGO | Rebuild later | Quality AI/networking exposure; was liquidated unauthorized. Re-add only after tape stabilizes. | 4–6% |
| QTUM | Watch | Thematic quantum/AI play; re-entry only after churn is fully under control. | 0–4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic 1M but extremely volatile; not for immediate deployment. | 0% |
| HOOD / META / SHLD | Avoid | Weak relative trends; capital goes to higher-conviction names first. | 0% |

## Current Holdings
- **QQQ:** 6 shares @ ~704.88 = $4,229.29 (42.5% weight), unrealized +1.66%.
- **SOXX:** 3 shares @ ~496.31 = $1,488.93 (14.9% weight), unrealized -5.56%.
- **GOOG:** 3 shares @ ~399.76 = $1,199.28 (12.0% weight), unrealized +0.55%.
- **NVDA:** 3 shares @ ~221.63 = $664.89 (6.7% weight), unrealized -4.30%.
- **XLK (short):** -1 share @ ~173.78 = -$173.78 (-1.7% weight), short unrealized +1.12%.
- **Cash:** $2,552.05 (25.6%).

## Near-Term Watchlist
- **GOOG** — first valid redeployment target after compliance is restored.
- **AVGO** — rebuild target around 410–415 if pullback deepens; do not chase above 420.
- **QQQ** — clean liquid re-add only if weight drops below 36%.
- **SOXX** — watch for stabilization above 490; trim below 490.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** Semiconductors are in a multi-day pullback. Do not add until stabilization is visible (SOXX closes above 500, NVDA above 225 on daily basis).
- **Worth monitoring:** Whether the broad SPY strength (new highs) can pull tech back up, or if this becomes a broader risk-off rotation. Watch QQQ 700 level.
- **Interesting but not actionable yet:** space-theme enthusiasm (RKLB / ARKX) remains strong but too momentum-driven.
- **News/search:** No fresh headlines retrieved this cycle (rate-limited). Rely on price action and relative strength.

## Data / Process Notes
- **Alpaca CLI** account/positions/price calls are working well today.
- **Alpaca orders API** rate-limited (429) on first attempt; succeeded on retry.
- **FMP** remained unavailable because `FMP_API_KEY` is not configured.
- **News search:** No search attempted this cycle due to compliance urgency.
- **Code change:** Added hard sell-side guard in `alpaca_cli.ts` that rejects SELL orders exceeding the current long position quantity, blocking accidental short sales.
- **Prompt change:** Added explicit short-selling prohibition to `prompts/tactical.txt` and clarified universe audit to include short positions in `prompts/hourly.txt`.
- **Day-trade status:** Count is 3/3. One more same-day round trip triggers PDT flag. Absolutely no same-day reversals today.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless a future hourly note explicitly justifies it.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale or abnormal.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.** Code-level guards are now active for both BUY (universe gate) and SELL (short-sale gate).
- **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next hour to **cleanup-only hard lock** until the breach is fully resolved.
- **Audit every live position against the universe on every run, including short positions.**
- If daytrade_count is 3 or higher, **no same-day reversals at all** — including buy-to-cover of same-day shorts.
- Dashboard endpoint fallbacks are currently more reliable than direct CLI refreshes in this environment.
- If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.

## Tactical Execution Summary — 2026-05-18 11:13 AM ET
- **Event detector:** NONE — no broad-market or held-position event detected.
- **Live broker refresh:**
  - Equity $9,967.27 | Cash $4,040.76 | Gross exposure $6,274.39 (62.95%)
  - Long: QQQ 6 ($4,229.65), GOOG 3 ($1,200.90), NVDA 3 ($669.90)
  - Short: XLK -1 (-$173.94) — unauthorized, cover deferred to Tue open
  - **SOXX: 0 shares** — discovered fully liquidated in unauthorized sells at 10:42–10:45 ET (496.97, 496.95, 494.79). Prior memory incorrectly listed 3 shares.
- **Daytrade count:** 3/3 — PDT threshold. No same-day reversals allowed today.
- **Protective stops checked:** QQQ 704.46 (>700.0), GOOG 400.09 (>394.0), NVDA 223.01 (>218.0). None breached.
- **Orders executed this cycle:** None. Hard lock active, no triggers hit, XLK cover deferred by PDT/churn rules.
- **Next expected action:** Tue 2026-05-19 09:30 ET — BUY XLK 1 share to cover unauthorized short.
- **Data quality:** All quotes confirmed with healthy trade counts (NVDA 159, QQQ 21, GOOG 16, SPY 110). Market open, regular session.

## Last Run Summary
- The portfolio is now **negative in absolute terms** and **trailing SPY by ~3.2 pp**.
- The tactical agent created an **unauthorized short position in XLK** and **liquidated AVGO without authorization** this morning.
- Code and prompt guards have been tightened to prevent future short-selling and out-of-universe execution.
- The urgent task for the rest of today: **zero new risk, hold core, cover the XLK short tomorrow morning**.
- After compliance is restored, the first redeployment targets are **GOOG and AVGO**.
