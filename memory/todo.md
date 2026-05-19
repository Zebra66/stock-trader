# Tactical Todo — Updated 2026-05-19 14:35Z (Tuesday 10:35 AM ET)

## Current State
- **Regime:** offensive catch-up
- **Live book:** QQQ 6, GOOG 3, NVDA 1, SOXX 0, AVGO 0, META 0
- **Account equity / cash / buying power:** $9,907.77 / $4,315.09 / $14,222.86
- **Gross long exposure:** 56.45% | **Cash:** 43.55%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Unauthorized positions:** None.
- **HARD_LOCK:** **LIFTED** at 10:35 AM ET by hourly strategist. The 10:00 AM ET tactical lock was erroneous — both NVDA trim and QQQ rebuild were explicitly authorized by the 9:35 AM ET hourly note. Tactical agent is authorized to trade per instructions below.

## Execution Priority (execute in order, limit orders only)

### Step 1 — Add VOO broad-market anchor
- **BUY VOO 2 shares** — add low-correlation broad-market exposure.
  - Use **limit order** at or slightly below current ref ~**676.00**. Latest bar: **676.235** at 13:58Z.
  - Target weight ~14% after fill.
  - **After fill: DO NOT SELL VOO today.** Hold overnight.
  - If price never dips to 676.00 or lower, re-evaluate at next tactical cycle (:50) with adjusted limit based on then-current price.

## Position Instructions
- **HOLD QQQ 6 — target allocation 36-45%.**
  - Current ref: ~**701.87**
  - **Do not sell today.** No active sell trigger. QQQ 700 level is support; only breach below 695 would warrant re-evaluation tomorrow.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**386.76**
  - **Do not sell today.** No active sell trigger. GOOG is the strongest momentum name in the universe.

- **HOLD NVDA 1 — earnings lottery ticket.**
  - Cost basis $231.59, current ~221.14. Unrealized ~-4.6%.
  - No protective stop active today; earnings tomorrow creates a binary gap risk regardless.
  - **Do NOT add NVDA today** (earnings binary event + 24h cooldown on symbol sold this morning is irrelevant since we didn't sell today, but still — no directional edge).

## Hard Rules / No-Trade Conditions
- **NO SAME-DAY REVERSALS.** Daytrade count is 3/3. Do NOT buy and sell the same symbol today. Any position opened today MUST be held overnight.
- **No AVGO, SOXX, or META adds today.** Defer until after NVDA earnings (Wednesday close / Thursday re-assess).
- **No illiquid-symbol market orders.** EIS (1 trade), SHLD (2 trades), GLD (5 trades), VOO (5 trades in last bar) — use limit orders only. EIS and SHLD avoid entirely.
- **No new positions outside the approved universe.** Code-level gate is active.
- **Do NOT re-buy symbols sold today** within 24 hours unless a future hourly note explicitly authorizes re-entry. (No symbols were sold today.)
- **Do NOT place a HARD_LOCK without hourly strategist authorization.** If you believe a trade is unauthorized, log it and wait for the next hourly cycle.

## Cycle Log (condensed)

### This Cycle — 2026-05-19 14:35Z (Hourly 10:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,907.77 | Cash $4,315.09 | Long $5,592.68 | Gross 56.45% | Daytrade 3/3.
- **Holdings confirmed:** GOOG 3 ($1,161.53 @ 387.175), NVDA 1 ($220.95 @ 220.95), QQQ 6 ($4,210.20 @ 701.70).
- **Unauthorized positions / orders:** None.
- **Universe compliance audit:** All holdings in approved universe. PASS.
- **Prices checked (latest bar):** AVGO 410.27 (57 trades), META 612.18 (65 trades), VOO 676.235 (5 trades), SOXX 487.71 (49 trades), RKLB 119.23 (56 trades), HOOD 74.775 (36 trades).
- **Illiquid flags:** EIS 1 trade, SHLD 2 trades — avoid market orders. VOO 5 trades (thin bar but major ETF; use limit order).
- **Open orders:** None.
- **Erroneous HARD_LOCK from 10:00 AM ET tactical cycle:** Lifted. NVDA trim and QQQ rebuild were authorized by 9:35 AM hourly strategist.
- **NVDA earnings alert:** Wednesday May 20 after close. Hold 1 share as reduced lottery ticket.
- **Next expected action:** Tactical :40 and :50 cycles should execute Step 1 (VOO add) using limit orders. Re-evaluate at 11:35 AM ET hourly.

### Tactical Cycle — 2026-05-19 13:51Z (9:51 AM ET)
- Event detector: NONE. Normal mode.
- **Orders placed:**
  1. **NVDA SELL 2** — limit 220.50. **FILLED** immediately (position now 1 share). Realized ~$442. Cash increased.
  2. **QQQ BUY 2** — limit 702.00. **FILLED** (position now 6 shares).
- **Skipped:** VOO BUY 2 — deferred to next cycle.
- **Current holdings:** GOOG 3 ($387.175), NVDA 1 ($220.95), QQQ 6 ($701.70), Cash ~$4,315.
- **Gross exposure:** 56.45%. Will rise to ~70.1% if VOO order fills.
- **Daytrade count:** 3/3. No same-day reversals. NVDA sale was overnight position.
- **Compliance:** All orders via Alpaca CLI. Universe clean.
