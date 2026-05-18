## Tactical Execution Summary — 2026-05-18 15:26Z (Monday, 11:26 ET)
- **Status:** Market OPEN. Event detector: NONE.
- **Orders placed:** NONE this cycle.
- **Critical discovery:** Live broker state does NOT match Saturday memory.
  - **XLK is now SHORT -3 shares** (was +8 long on Saturday). This is an unauthorized position and a compliance breach.
  - **SOXX and AVGO are GONE** from the book (was 3 SOXX, 2 AVGO on Saturday). No record of when/why they were sold.
  - **Cash jumped to $4,388.34** from $135.41, confirming liquidations happened.
- **Current holdings:** GOOG 3, NVDA 3, QQQ 6, XLK -3 (short)
- **Equity:** $9,958.14 | **Cash:** $4,388.34 | **Gross exposure:** $6,612.24 (66.4%)
- **Daytrade count:** 3 (at threshold; one more = PDT flag)
- **Market context:** Broad market sinking to start week. 10Y Treasury yield at highest in a year. Tech lagging. NVDA earnings upcoming.
- **Decision rationale:**
  1. **Did NOT buy-to-cover XLK short today** — covering today would close a same-day short, creating daytrade #4 and triggering PDT restriction with only ~$10k equity. That would freeze new-position opening for 90 days. Waiting until tomorrow avoids the daytrade flag.
  2. **Did NOT sell any current longs** — guidance is stale (Saturday), portfolio state changed dramatically, and acting on stale stops without fresh hourly direction risks compounding churn.
  3. **Did NOT re-buy SOXX/AVGO** — possible earlier-cycle liquidations; re-buying without hourly authorization and within 24h of apparent sales risks churn and violates defensive regime.
  4. **Did NOT add to any position** — cleanup/defensive lock still in effect until hourly strategist explicitly lifts it.
- **Urgent next-session tasks (Tuesday open):**
  1. **BUY TO COVER XLK 3 shares** — close unauthorized short immediately at market open.
  2. **Hourly strategist must review SOXX/AVGO liquidations** — determine if accidental or intentional and whether to re-enter.
  3. **Update all stop levels** based on Monday's price action.
- **Root-cause suspicion:** The XLK short likely resulted from an oversell (e.g., sell order for >8 shares when only 8 long were held, or a sell submitted after the long position was already zero). **A code-level guardrail against selling more shares than held is urgently needed.**

---

# Hourly Macro Memory
*Updated 2026-05-18 10:50 AM ET. Market OPEN. Next regular session: today until 4:00 PM ET.*

## Tactical Execution Log

### 2026-05-18 11:27 AM ET — Tactical Run
- **Event detector:** NONE.
- **Live broker refresh:** Equity $9,958.14 | Cash $4,388.34 | Long market value $6,091.02 | Short market value -$521.22 | Gross exposure 66.4% | Daytrade count 3/3.
- **Holdings confirmed live:** QQQ 6 ($4,224.18), GOOG 3 ($1,198.65), NVDA 3 ($668.19), XLK -3 (-$521.22 short), SOXX 0, AVGO 0.
- **Critical discrepancy:** Live broker shows **XLK short -3 shares**, not -1 as previously recorded. This implies a larger unauthorized short than believed. Must cover all 3 shares at Tuesday 2026-05-19 open.
- **Protective stops checked:** QQQ 704.11 (>700.0), GOOG 399.69 (>394.0), NVDA 222.87 (>218.0). None breached.
- **Orders placed:** None. Hard lock active, no triggers hit, XLK cover deferred to Tue open.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). No other trades authorized until hourly lock is lifted and 24h cooldowns expire.

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
- **Long:** QQQ 6, GOOG 3, NVDA 3
- **Short / unauthorized:** XLK -3
- **Cash:** $4,388.34
- **Account equity:** $9,960.57
- **Current gross exposure:** 66.4%
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
1. **COVER XLK short 3 shares at Tuesday 2026-05-19 market open** (or earlier if the hourly strategist issues a same-day note, but only after daytrade_count resets or drops below 3). This is the #1 compliance task.
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
- **QQQ:** 6 shares @ ~704.25 = $4,225.47 (42.4% weight), unrealized +1.57%.
- **GOOG:** 3 shares @ ~399.81 = $1,199.43 (12.0% weight), unrealized +0.56%.
- **NVDA:** 3 shares @ ~222.89 = $668.67 (6.7% weight), unrealized -3.76%.
- **XLK (short):** -3 shares @ ~173.78 = -$521.34 (-5.2% weight), short unrealized +0.38%.
- **Cash:** $4,388.34 (44.1%).

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
  - Equity $9,960.47 | Cash $4,388.34 | Gross exposure $6,615.05 (66.4%)
  - Long: QQQ 6 ($4,225.50), GOOG 3 ($1,199.37), NVDA 3 ($668.72)
  - Short: XLK -3 (-$521.46) — unauthorized, cover deferred to Tue open
  - **SOXX: 0 shares** — fully liquidated in unauthorized sells earlier today.
- **Daytrade count:** 3/3 — PDT threshold. No same-day reversals allowed today.
- **Protective stops checked:** QQQ 704.46 (>700.0), GOOG 400.09 (>394.0), NVDA 223.01 (>218.0). None breached.
- **Orders executed this cycle:** None. Hard lock active, no triggers hit, XLK cover deferred by PDT/churn rules.
- **Next expected action:** Tue 2026-05-19 09:30 ET — BUY XLK 3 shares to cover unauthorized short.
- **Data quality:** All quotes confirmed with healthy trade counts (NVDA 159, QQQ 21, GOOG 16, SPY 110). Market open, regular session.

### 2026-05-18 11:17 AM ET — Tactical Run
- **Event detector:** NONE.
- **Live broker refresh:** Equity $9,961.45 | Cash $4,040.76 | Gross exposure 62.93% | Daytrade count 3/3.
- **Holdings confirmed:** QQQ 6 ($4,225.38), GOOG 3 ($1,200.77), NVDA 3 ($668.22), XLK -1 (-$173.68 short).
- **Protective stops checked:** QQQ 704.38 (>700.0), GOOG 400.31 (>394.0), NVDA 222.67 (>218.0). None breached.
- **Orders placed:** None. Hard lock active, no triggers hit, XLK cover deferred to Tue open.
- **Next expected action:** Tue 2026-05-19 09:30 ET — BUY XLK 1 share (cover short). No other trades authorized until lock lifted and 24h cooldowns expire.

## Last Run Summary
- The portfolio is now **negative in absolute terms** and **trailing SPY by ~3.2 pp**.
- The tactical agent created an **unauthorized short position in XLK** and **liquidated AVGO without authorization** this morning.
- Code and prompt guards have been tightened to prevent future short-selling and out-of-universe execution.
- The urgent task for the rest of today: **zero new risk, hold core, cover the XLK short tomorrow morning**.
- After compliance is restored, the first redeployment targets are **GOOG and AVGO**.
