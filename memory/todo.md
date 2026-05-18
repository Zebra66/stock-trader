# Tactical Todo For Next Execution
*Updated 2026-05-18 10:50 AM ET. Market open. Next tactical runs: 10:40, 10:50, 11:40, 11:50 ET … 3:50 PM ET.*

## Current State
- **Regime:** **defensive / compliance-cleanup hard lock**
- **Live book:** QQQ 6, SOXX 3, GOOG 3, NVDA 3, XLK -1 (short)
- **Account equity / cash / buying power:** $9,960.66 / $2,552.05 / $12,165.15
- **Gross exposure:** 77.7% of equity
- **Net long exposure:** 74.3% of equity
- **Daytrade count:** 3/3 (AT THRESHOLD — ZERO same-day reversals allowed today)
- **Portfolio return since inception:** ~-0.39% (failing absolute return goal)
- **SPY since inception (2026-05-04 baseline 718.01):** +2.83% (trailing by ~3.2 pp)

## Hard Rules / No-Trade Conditions (Monday 2026-05-18 ONLY)
- **CLEANUP-ONLY HARD LOCK:** Do NOT place any new long buy order today unless a breaking news event or market crash creates a once-in-a-cycle opportunity AND the hourly strategist explicitly authorizes it in a fresh note.
- **Do NOT cover the XLK short today.** The short was opened this morning (2026-05-18). Covering it today would be a same-day round trip and would trigger PDT protection (daytrade_count is already 3/3). The cover must happen at the **2026-05-19 market open**.
- **Do NOT open or add any symbol outside the approved universe.** The CLI now blocks both out-of-universe BUY orders and SELL orders that exceed the long position (short selling is prohibited at the code layer).
- **Do NOT sell any position that was opened today** (there are none, but this is a standing rule).
- **One trade maximum per tactical cycle** unless a protective stop is breached and the hourly note authorizes a trim.
- **No same-day reversal trades** in any symbol.
- If a symbol has breaking adverse news, disorderly price action, or an abnormal spread, **do nothing**.
- If regular hours are over, convert all entries into **next regular-session** triggers; do not send after-hours equity orders.

## Immediate Cleanup Orders
- **BUY XLK 1 share at market open Tuesday 2026-05-19 to cover the unauthorized short.**
  - Rationale: **XLK is outside the approved universe and the short is unauthorized.** This buy is purely compliance cleanup, not an investment decision.
  - Place as a DAY order at 09:30 ET Tuesday if possible; if not placed before open, queue it as the first action of the tactical agent on Tuesday.
  - Do NOT place this order on Monday under any circumstances.

## Position Instructions
- **HOLD QQQ — target allocation 36-42%.**
  - Current ref: ~**704.88**
  - **SELL 1 share if QQQ breaks below 700.0 on a 5-minute close** — concentration control and broad-tape risk management.
  - **Do NOT add QQQ this cycle** — weight is already 42.5% and adding 1 share would breach the 45% cap.

- **HOLD GOOG — target allocation 10-15%.**
  - Current ref: ~**399.76**
  - **SELL 1 share if GOOG loses 394.0 on a 5-minute close** — preserve capital if cloud/AI follow-through fails.
  - **Tuesday add trigger (ONLY after lock is lifted): BUY 1 share if GOOG dips to ~395 and holds, or breaks above 405 with confirmation.**
  - Do NOT add GOOG today.

- **HOLD SOXX — target allocation 8-12%.**
  - Current ref: ~**496.31**
  - **SELL 1 share if SOXX loses 490.0 on a 5-minute close** — semis are the weakest sleeve and the pullback may extend.
  - **Do NOT add SOXX today.** Averaging down into a falling knife is prohibited.

- **HOLD NVDA — target allocation 4-6%.**
  - Current ref: ~**221.63**
  - **SELL 1 share if NVDA breaks below 218.0 on a 5-minute close**.
  - Otherwise hold; **no add today**.

- **AVGO (liquidated unauthorized) — Rebuild Tuesday/Wednesday only.**
  - Current ref: ~**418.70**
  - **Do NOT buy AVGO today.** Rebuild only after the XLK short is covered, the lock is lifted, and the tape shows stabilization.
  - **Future trigger: BUY 1 share if AVGO dips to 410–415 with confirmation, or on a clear reclaim of 425.**

## Future Deployment Queue
*Only relevant after XLK short is covered, the hourly lock is explicitly lifted, and the tape stabilizes.*
1. **GOOG** — relative strength leader.
2. **AVGO** — rebuild the AI/networking sleeve.
3. **QQQ** — liquid core re-add only if weight drops below 36%.

## Tactical Intent
- **Zero new risk today.** The tactical agent's unauthorized execution this morning destroyed planned book structure and wasted edge on friction.
- Hold the approved core unless protective stops break.
- Cover the XLK short **only at Tuesday's open** to avoid PDT trigger.
- Do **not** redeploy cash until compliance is fully restored and a later hourly note explicitly allows fresh buying.

## This Cycle (Monday 2026-05-18 10:35 ET Hourly)
- **Orders placed by strategist:** None (code fix and memory update only).
- **Holdings confirmed live:** QQQ 6, SOXX 3, GOOG 3, NVDA 3, XLK -1 (short).
- **Cash / equity / exposure:** $2,552.05 / $9,960.66 / 77.7% gross.
- **Daytrade count:** 3/3.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 1 share (cover short). No other trades authorized until hourly lock is lifted.
