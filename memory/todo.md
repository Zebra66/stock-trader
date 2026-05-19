# Tactical Todo — Updated 2026-05-19 13:58Z (Tuesday 9:58 AM ET)

## Current State
- **Regime:** offensive catch-up
- **Live book:** GOOG 3, NVDA 1, QQQ 6, SOXX 0, AVGO 0, VOO 0
- **Account equity / cash / buying power:** $9,906.21 / $4,315.09 / $14,221.30
- **Gross long exposure:** 56.4% | **Cash:** 43.6%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Unauthorized positions:** None. XLK short covered at 09:33 ET. Compliance clean.
- **HARD_LOCK:** **LIFTED** at 9:35 AM ET by hourly strategist. Tactical agent is authorized to trade per instructions below.

## Execution Priority (limit orders only)

### Step 1 — Add VOO broad-market anchor
- **BUY VOO 2 shares** — add low-correlation broad-market exposure.
  - Use **limit order** at or slightly below ref ~**675.00**. Latest bar: **676.42** at 13:57Z (above limit).
  - **DEFERRED** — price remains above strategist's entry level. Will re-evaluate next tactical cycle or next hourly directive.
  - Target weight ~14% after fill.
  - **After fill: DO NOT SELL VOO today.** Hold overnight.

## Position Instructions
- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**386.81**
  - **Do not sell today.** No active sell trigger. GOOG is the strongest momentum name in the universe.

- **HOLD NVDA 1 — earnings lottery ticket.**
  - Cost basis $231.59, current ~220.97. Unrealized ~-4.6%.
  - No protective stop active today; earnings tomorrow creates a binary gap risk regardless.

- **HOLD QQQ 6 — core liquid growth rebuilt.**
  - Current ref: ~**701.62**
  - **Do not sell any QQQ shares today.** No active sell trigger. QQQ 700 level is support; only breach below 695 would warrant re-evaluation tomorrow.

## Hard Rules / No-Trade Conditions
- **NO SAME-DAY REVERSALS.** Daytrade count is 3/3. Do NOT buy and sell the same symbol today. Any position opened today MUST be held overnight.
- **No AVGO, SOXX, or META adds today.** Defer until after NVDA earnings (Wednesday close / Thursday re-assess).
- **No illiquid-symbol market orders.** EIS, QTUM, SHLD, ARKX have <5 trades in latest bar. Avoid entirely.
- **No new positions outside the approved universe.** Code-level gate is active.
- **Do NOT re-buy symbols sold today** within 24 hours unless a future hourly note explicitly authorizes re-entry.

## Cycle Log (condensed)

### This Cycle — 2026-05-19 13:58Z (Tactical 9:58 AM ET)
- **Event detector:** NONE. Normal execution mode.
- **QQQ working order CONFIRMED FILLED:** Limit buy 2 shares at 702.00 filled between 13:51Z and 13:58Z. Position now **6 shares** @ blended avg ~699.74. Cash reduced accordingly.
- **VOO:** Still deferred. Price 676.42 remains above 675.00 strategist limit. No order placed.
- **Current holdings:** GOOG 3 ($1,160.43 @ 386.81), NVDA 1 ($220.97 @ 220.97), QQQ 6 ($4,209.72 @ 701.62). Cash $4,315.09.
- **Gross exposure:** 56.4% (still below 60-90% offensive band). Cash drag remains until VOO or next deployment fills.
- **Daytrade count remains 3/3.** No same-day reversals. NVDA sale (overnight position) and QQQ buy (new today, held) are clean.
- **Compliance:** All orders via Alpaca CLI. Universe clean. No HARD_LOCK.
- **Next expected action:** Monitor for VOO pullback to 675.00 or await next hourly directive at 10:35 AM ET.
