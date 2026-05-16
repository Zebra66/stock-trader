# Tactical Todo For Next Execution
*Updated 2026-05-16 (Saturday) from fresh broker snapshot. Next eligible session: Monday 2026-05-18 open.*

## Current State
- **Regime:** **defensive / cleanup-only**
- **Live book (broker-fresh):** **QQQ 6, SOXX 3, GOOG 3, XLK 8, NVDA 3, AVGO 2**
- **Account equity / cash / buying power:** **$10,030.93 / $135.41 / $10,166.34**
- **Gross exposure:** **98.65%** of equity — well above 75-85% target band
- **Daytrade count:** 3 (threshold, not yet classified as PDT)
- Portfolio is still **positive** since inception, but it **trails SPY**.

## Monday Priority Actions
1. **SELL XLK full position (8 shares)** — top compliance cleanup.
   - XLK is outside the approved universe.
   - Last XLK purchase was Friday; Monday sale is **not a same-day trade** and should not trigger PDT protection.
   - Expected proceeds: ~$1,410. Post-sale gross exposure drops to ~84%.
2. **If XLK order succeeds, evaluate SOXX protective sell** — SOXX closed Friday at $508.52, below the $512.0 tactical stop.
3. **If XLK order is rejected for any reason, HOLD and carry forward** — do not keep retrying blindly.

## Position Instructions (Monday Regular Session Only)
- **HOLD QQQ — target allocation 36-40%.**
  - Current ref: ~**$708.93**
  - **SELL 1 share if QQQ breaks below $706.0 on a 5-minute close** during live trading.
  - **Do not add.** Future re-add only after hourly note lifts the lock.

- **HOLD GOOG — target allocation 10-13%.**
  - Current ref: ~**$393.32**
  - **SELL 1 share if GOOG loses $389.5 on a 5-minute close** during live trading.
  - **Do not buy.**

- **HOLD SOXX — target allocation 10-12%.**
  - Current ref: ~**$508.52** (closed Friday below $512.0 stop)
  - **SELL 1 share if SOXX trades below $508.0 on a 5-minute close** Monday — tighten stop to Friday-close level.
  - **Do not add.**

- **HOLD NVDA — target allocation 4-5%.**
  - Current ref: ~**$225.32**
  - **SELL 1 share if NVDA breaks below $223.5 on a 5-minute close** during live trading.
  - **No same-day re-entry.**

- **HOLD AVGO — target allocation 4-5%.**
  - Current ref: ~**$425.19**
  - **SELL 1 share if AVGO breaks below $420.0 on a 5-minute close** during live trading.
  - **No add this cycle.**

## Hard Rules / No-Trade Conditions
- **Cleanup-only hard lock:** do **not** place any new buy order this cycle.
- **Do not open or add any symbol outside the approved universe.**
- **One order only this cycle** unless XLK is already gone and a protective sell stop is triggered in a current holding.
- **No same-day reversal trades** in any symbol.
- If dashboard/broker price and Yahoo confirmation differ by more than **0.5%** on the symbol you are about to trade, **do nothing** and log a stale-data conflict.
- If a symbol has breaking adverse news, disorderly price action, or an abnormal spread, **do nothing**.
- If regular hours are over, convert all entries into **next regular-session** triggers; do **not** send after-hours equity orders by default.

## Future Deployment Queue
*Only relevant after XLK is gone, the hourly lock is lifted, and the tape stabilizes.*
1. **GOOG**
2. **QQQ**
3. **AVGO**

## Tactical Intent
- Clean up the unauthorized **XLK** exposure at Monday's first eligible broker window.
- Stop the churn.
- Hold the approved core unless risk breaks.
- Do **not** redeploy cash until compliance is restored and a later hourly note explicitly allows fresh buying.
