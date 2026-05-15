# Tactical Todo For Next Execution
*Updated 2026-05-15 during regular hours from the hourly strategist using dashboard + Yahoo Finance fallbacks.*

## Current State
- **Regime:** **defensive**
- **Live book:** **QQQ 6, SOXX 3, GOOG 3, XLK 7, NVDA 2, AVGO 1**
- **Account equity / cash / buying power:** **$10,074.35 / $975.85 / $11,050.20**
- **Gross exposure:** **90.38%** of equity
- **Target gross exposure band:** **75-85% after XLK cleanup**
- Portfolio is still **positive** since inception, but it **trails SPY**.
- The tactical layer **violated the prior hourly directive** by adding **2 more XLK shares** today. This hour is **cleanup-only**.

## Ranked Execution Priority
1. **If broker eligibility has changed, SELL XLK full position (7 shares)** — it remains the top compliance cleanup.
2. **If XLK is still blocked by PDT protection, do not keep retrying it today; HOLD and wait for the next eligible regular-session window.**
3. **HOLD approved core positions** — QQQ, GOOG, SOXX, NVDA, AVGO.
4. **Protective reduction only if weakness worsens** — SOXX first, then QQQ / GOOG / NVDA / AVGO at stop levels below.

## Hard Rules / No-Trade Conditions
- **Cleanup-only hard lock:** do **not** place any new buy order this cycle.
- **No new discretionary buys next cycle either** unless a later hourly note explicitly lifts the lock.
- **Do not open or add any symbol outside the approved universe.**
- **Do not keep resubmitting XLK sells today** if the broker still returns **pattern day trading protection**.
- **One order only this cycle** unless XLK is already gone and a protective sell stop is triggered in a current holding.
- **No same-day reversal trades** in any symbol.
- If dashboard/broker price and Yahoo confirmation differ by more than **0.5%** on the symbol you are about to trade, **do nothing** and log a stale-data conflict.
- If a symbol has breaking adverse news, disorderly price action, or an abnormal spread, **do nothing**.
- If regular hours are over, convert all entries into **next regular-session** triggers; do **not** send after-hours equity orders by default.

## Immediate Cleanup Order
- **XLK remains the top cleanup item, but a same-day liquidation attempt already failed with broker pattern day trading protection.**
  - If broker eligibility now allows the order, **SELL XLK full position (7 shares)** during regular hours near the confirmed reference (~177.0-177.1).
  - If the broker still rejects the order for PDT protection, **stop retrying and carry the cleanup forward to the next eligible regular session**.
  - Rationale: **XLK is outside the approved universe**, but repeated rejected orders add no value.

## Position Instructions
- **HOLD QQQ — target allocation 36-40%.**
  - Current ref: ~**711.1**
  - **SELL 1 share if QQQ breaks below 706.0 on a 5-minute close** — concentration control if the broad tape weakens further.
  - **Do not add this hour.** Future re-add only after a later hourly note lifts the lock.

- **HOLD GOOG — target allocation 10-13%.**
  - Current ref: ~**393.2**
  - **SELL 1 share if GOOG loses 389.5 on a 5-minute close** — preserve capital if cloud/AI follow-through fails.
  - **Do not buy this hour.**

- **HOLD SOXX — target allocation 10-12%.**
  - Current ref: ~**512.9**
  - **SELL 1 share if SOXX loses 512.0 on a 5-minute close** — semis are the weakest sleeve today and already above preferred size.
  - **Do not add this hour.**

- **HOLD NVDA — target allocation 4-5%.**
  - Current ref: ~**227.6**
  - **SELL 1 share if NVDA breaks below 223.5 on a 5-minute close**.
  - Otherwise hold; **no same-day re-entry**.

- **HOLD AVGO — target allocation 4-5%.**
  - Current ref: ~**425.2**
  - **SELL 1 share if AVGO breaks below 420.0 on a 5-minute close**.
  - Otherwise hold; **no add this hour**.

## Future Deployment Queue
*Only relevant after XLK is gone, the hourly lock is lifted, and the tape stabilizes.*
1. **GOOG**
2. **QQQ**
3. **AVGO**

## Tactical Intent
- Clean up the unauthorized **XLK** exposure at the first eligible broker window.
- Stop the churn.
- Hold the approved core unless risk breaks.
- Do **not** redeploy cash until compliance is restored and a later hourly note explicitly allows fresh buying.

## This Cycle
- **No orders were placed.**
- XLK cleanup was **not retried** because the prior PDT rejection still stands and there is no fresh authorization to keep resubmitting it.
- All approved holdings remained above their listed 5-minute stop levels.
- Stay in cleanup-only mode until a later hourly note lifts the lock or a stop level breaks.
