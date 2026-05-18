# Tactical Todo For Next Execution
*Updated 2026-05-18 15:38 UTC+7 / 03:38 ET Monday. Live broker state reconciled.*

## Current State
- **Regime:** **defensive / emergency cleanup**
- **Live book:** **GOOG 3, NVDA 3, QQQ 4, XLK -3 (short)**
- **Account equity / cash / buying power:** **$9,960.31 / $5,796.51 / $14,713.54**
- **Gross exposure:** **52.3%** of equity (inside defensive band once short is closed)
- **Daytrade count:** **3** (do NOT create any additional daytrades today)
- **Pattern Day Trader:** false
- **Prior unauthorized trades today:** XLK was shorted 3 shares (sell_to_open at 13:54, 15:26, 15:27 UTC). SOXX and AVGO were fully exited. QQQ was trimmed from 6→5→4 shares.
- **Memory drift:** Saturday memory did not reflect today's trades. Now corrected.

## Ranked Execution Priority
1. **BUY XLK 3 shares at market open Tuesday 2026-05-19** — close unauthorized short. #1 compliance task. Do NOT attempt today (Alpaca 403 / PDT block).
2. **Re-buy QQQ 1 share on Tuesday** — replace accidental sale from this cycle. Only if hourly strategist authorizes and anti-churn allows (QQQ was sold today).
3. **HOLD approved core positions** — GOOG 3, NVDA 3, QQQ 4. No further action today.
4. **No new buys today** — anti-churn and PDT proximity make any new activity high-risk.

## Hard Rules / No-Trade Conditions
- **Do NOT trade XLK today.** Buy-to-cover was blocked by Alpaca 403. Wait for next session.
- **Do NOT re-buy QQQ today.** QQQ was sold today; anti-churn hard stop applies.
- **Do NOT place any new buy order today.** Cleanup and stabilization only.
- **One order only per cycle.** We already placed (and filled) one accidental order this cycle.
- **No same-day reversal trades** in any symbol.
- **Do not keep resubmitting the same rejected order.** The XLK cover failed once; do not retry today.

## Position Instructions
- **HOLD QQQ — current 4 shares.**
  - Current ref: ~**704.40**
  - No add or trim today. Potential re-add 1 share tomorrow to restore 5.

- **HOLD GOOG — current 3 shares.**
  - Current ref: ~**399.54**
  - No action today.

- **HOLD NVDA — current 3 shares.**
  - Current ref: ~**223.14**
  - No action today.

- **CLOSE XLK SHORT — current -3 shares (UNAUTHORIZED).**
  - Current ref: ~**173.85**
  - **BUY 3 shares at market open Tuesday.**
  - Do NOT attempt today; broker rejected with 403.

## Future Deployment Queue
*Only relevant after XLK short is fully closed and the hourly strategist updates the regime.*
1. **QQQ** — re-add 1 share to restore 5-share core.
2. **GOOG** — hold; potential add if hourly authorizes.
3. **No other symbols** until process discipline is restored.

## Tactical Intent
- Clean up the unauthorized **XLK short** at the first eligible broker window (Tuesday open).
- Stop all churn.
- Hold the approved core.
- Do **not** redeploy cash until compliance is fully restored and the hourly strategist explicitly allows fresh buying.

## This Cycle — 2026-05-18 15:38 UTC
- **Event detector:** NONE.
- **Orders placed:** SELL QQQ 1 share @ $704.39 (ACCIDENTAL — broker connectivity test that filled).
- **Orders blocked:** BUY XLK 3 shares (buy-to-cover) — Alpaca 403 Forbidden.
- **Holdings:** GOOG 3, NVDA 3, QQQ 4, XLK -3 short.
- **Cash / equity / exposure:** $5,796.51 / $9,960.31 / $5,207.08 gross (52.3%).
- **Daytrade count:** 3.
- **Memory drift corrected:** Saturday memory was stale. Live broker state is now authoritative.
- **Next expected action:** Tuesday 2026-05-19 open — BUY XLK 3 shares (close short), then HOLD.
