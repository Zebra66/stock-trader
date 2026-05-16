# Tactical Todo For Next Execution
*Updated 2026-05-16 Saturday from tactical cycle. Market closed; next regular session Monday 2026-05-18.*

## Current State
- **Regime:** **defensive** (cleanup-only until XLK removed and exposure reduced)
- **Live book:** **AVGO 2, GOOG 3, NVDA 3, QQQ 6, SOXX 3, XLK 8**
- **Account equity / cash / buying power:** **$10,030.93 / $135.41 / $10,166.34**
- **Gross exposure:** **98.65%** — above every target band. Immediate reduction required Monday.
- **Daytrade count:** **3** — one daytrade away from PDT flag. No same-day reversals Monday.
- **Pattern day trader:** false.
- **Next market open:** Monday 2026-05-18 09:30 ET.

## Monday Execution Priority
1. **SELL XLK full position (8 shares)** at first eligible broker window after 09:30 ET. This is NOT a same-day reversal (last add was Friday), so PDT should not block it. If broker rejects for any other reason, log error and stop retrying.
2. **After XLK exit, reduce gross exposure toward 75-85% band.** Evaluate trimming 1 share from the weakest sleeve:
   - **SOXX** if it opens weak (below ~$508)
   - **NVDA** if it breaks below ~$223.5
   - **AVGO** if it breaks below ~$420
3. **HOLD approved core positions** that are not at stop levels: QQQ, GOOG.

## Hard Rules / No-Trade Conditions
- **No new discretionary buys Monday** unless an hourly note explicitly lifts the lock.
- **Do not trade outside the approved universe.**
- **No same-day reversals** — daytrade count is at 3. Any buy on Monday must not be sold same day.
- **One order only this cycle** unless XLK is gone and a protective sell stop is hit.
- **Do not average down.**
- If a symbol has breaking adverse news, abnormal spread, or stale quote vs confirmation, **do nothing**.

## Position Instructions
- **XLK — SELL 8 shares Monday open.** Compliance breach; outside approved universe. This is the #1 priority.
- **QQQ — HOLD.** Target allocation 36-40%. Current ref ~$708.93.
  - **SELL 1 share if QQQ breaks below $706** on a 5-minute close.
  - **Do not add until hourly lock is lifted.**
- **GOOG — HOLD.** Target allocation 10-13%. Current ref ~$393.32.
  - **SELL 1 share if GOOG loses $389.5** on a 5-minute close.
  - **Do not buy until lock is lifted.**
- **SOXX — HOLD / Reduce on weakness.** Target allocation 10-12%. Current ref ~$508.52.
  - **SELL 1 share if SOXX loses $506** on a 5-minute close.
  - **Do not add.**
- **NVDA — HOLD.** Target allocation 4-5%. Current ref ~$225.32.
  - **SELL 1 share if NVDA breaks below $223.5** on a 5-minute close.
  - **No same-day re-entry.**
- **AVGO — HOLD.** Target allocation 4-5%. Current ref ~$425.19.
  - **SELL 1 share if AVGO breaks below $420** on a 5-minute close.
  - **No add until lock is lifted.**

## Future Deployment Queue
*Only valid after XLK is gone, exposure is under 90%, and the hourly lock is explicitly lifted.*
1. **GOOG** — best quality/relative-strength balance.
2. **QQQ** — liquid core catch-up vehicle.
3. **AVGO** — smaller add only on renewed strength.

## Tactical Intent
- Monday = cleanup day. Remove XLK, trim overexposure, hold core.
- Do not redeploy cash until compliance is restored and a later hourly note allows fresh buying.
