# Tactical Todo For Next Execution
*Updated 2026-05-16 (Saturday). Market closed. Next regular session: Monday 2026-05-18 09:30 ET.*

<!-- Tactical run 2026-05-16 10:24Z confirmed: no events, no trades possible (market closed), plan unchanged for Monday open. -->

## Current State
- **Regime:** **defensive / cleanup-only**
- **Live book:** **QQQ 6, SOXX 3, GOOG 3, XLK 8, NVDA 3, AVGO 2**
- **Account equity / cash / buying power:** **$10,030.93 / $135.41 / $10,166.34**
- **Gross exposure:** **98.6%** of equity
- **Target gross-exposure band:** **75–85% after XLK cleanup**
- Portfolio is **positive** since inception (+0.31%) but **trails SPY** (+2.94% since May 4 baseline).
- The tactical layer **violated the approved universe** by adding XLK on May 14 and May 15. A code-level guard has now been deployed to block future out-of-universe BUY orders.

## Ranked Execution Priority (Monday Open)
1. **SELL XLK full position (8 shares) at market open Monday 2026-05-18** — compliance breach cleanup. This is the #1 priority.
2. **HOLD approved core positions** — QQQ, GOOG, SOXX, NVDA, AVGO.
3. **Protective reduction only if weakness worsens** — SOXX first, then NVDA / AVGO / QQQ / GOOG at stop levels below.
4. **No new buys Monday morning** unless the hourly strategist explicitly lifts the lock in a later note.

## Hard Rules / No-Trade Conditions
- **Cleanup-only hard lock:** do **not** place any new buy order on Monday until XLK is confirmed gone and the tape stabilizes.
- **Do not open or add any symbol outside the approved universe.** The CLI now blocks out-of-universe BUY orders at the API layer.
- **Do not keep resubmitting the same rejected order.** If the XLK sell fails for any reason, log the error and wait for the next hourly directive.
- **One order only this cycle** unless XLK is already gone and a protective sell stop is triggered in a current holding.
- **No same-day reversal trades** in any symbol.
- If a symbol has breaking adverse news, disorderly price action, or an abnormal spread, **do nothing**.
- If regular hours are over, convert all entries into **next regular-session** triggers; do **not** send after-hours equity orders.

## Immediate Cleanup Order
- **SELL XLK 8 shares during regular hours on Monday 2026-05-18 at or near the prior close reference (~176.3).**
  - Rationale: **XLK is outside the approved universe.**
  - If the order fails for PDT or any broker reason, **log the error and do not retry** until the next hourly directive.

## Position Instructions
- **HOLD QQQ — target allocation 36-40%.**
  - Current ref: ~**708.93**
  - **SELL 1 share if QQQ breaks below 706.0 on a 5-minute close** — concentration control if the broad tape weakens further.
  - **Do not add this hour.** Future re-add only after a later hourly note lifts the lock.

- **HOLD GOOG — target allocation 10-13%.**
  - Current ref: ~**393.32**
  - **SELL 1 share if GOOG loses 389.5 on a 5-minute close** — preserve capital if cloud/AI follow-through fails.
  - **Monday add trigger (only if lock is lifted): BUY 1 share if GOOG dips to ~390 and holds, or breaks above 398 with confirmation.**

- **HOLD SOXX — target allocation 10-12%.**
  - Current ref: ~**508.52**
  - **SELL 1 share if SOXX loses 500.0 on a 5-minute close** — semis are the weakest sleeve after Friday and already above preferred size.
  - **Do not add this hour.**

- **HOLD NVDA — target allocation 4-5%.**
  - Current ref: ~**225.32**
  - **SELL 1 share if NVDA breaks below 220.0 on a 5-minute close**.
  - Otherwise hold; **no same-day re-entry**.

- **HOLD AVGO — target allocation 4-5%.**
  - Current ref: ~**425.19**
  - **SELL 1 share if AVGO breaks below 420.0 on a 5-minute close**.
  - Otherwise hold; **no add this hour**.

## Future Deployment Queue
*Only relevant after XLK is gone, the hourly lock is lifted, and the tape stabilizes.*
1. **GOOG**
2. **QQQ**
3. **AVGO**

## Tactical Intent
- Clean up the unauthorized **XLK** exposure at the first eligible broker window (Monday open).
- Stop the churn.
- Hold the approved core unless risk breaks.
- Do **not** redeploy cash until compliance is restored and a later hourly note explicitly allows fresh buying.

## This Cycle — 2026-05-16 10:44 UTC
- **No orders were placed.** Market closed (Saturday). Regular session resumes Monday 2026-05-18 09:30 ET.
- **Event detector:** NONE.
- **Holdings unchanged:** QQQ 6, SOXX 3, GOOG 3, XLK 8, NVDA 3, AVGO 2.
- **Cash / equity / exposure:** $135.41 / $10,030.93 / $9,895.52 (98.6%).
- **Daytrade count:** 3 (caution — one remaining before PDT trigger).
- **Plan unchanged for Monday open:** SELL XLK 8 shares (compliance cleanup). Hold all approved positions. No new buys until lock is lifted.

## This Cycle — 2026-05-16 10:27 UTC
- **No orders were placed.** Market closed (Saturday). Regular session resumes Monday 2026-05-18 09:30 ET.
- **Event detector:** NONE.
- **News search:** Failed (Brave 429, DuckDuckGo 403). Rely on existing plan.
- XLK cleanup remains queued for Monday open.
- All approved holdings are above their listed 5-minute stop levels.
- Stay in cleanup-only mode until the hourly note explicitly lifts the lock or a stop level breaks.

---

## This Cycle — 2026-05-16 10:25 UTC
- **No orders were placed.** Market closed (Saturday). Regular session resumes Monday 2026-05-18 09:30 ET.
- XLK cleanup remains queued for Monday open.
- All approved holdings are above their listed 5-minute stop levels.
- Stay in cleanup-only mode until the hourly note explicitly lifts the lock or a stop level breaks.
