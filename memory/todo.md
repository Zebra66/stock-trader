# Tactical Todo — Updated 2026-05-19 13:35Z (Tuesday 9:35 AM ET)

## Current State
- **Regime:** offensive catch-up
- **Live book:** GOOG 3, NVDA 1, QQQ 4 (plus 2 working buy order), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** ~$9,898 / ~$5,718 / ~$15,190 (post-NVDA sale, pre-QQQ fill)
- **Gross long exposure:** ~42.3% (post-NVDA sale) | **Cash:** ~57.8%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Unauthorized positions:** None. XLK short covered at 09:33 ET. Compliance clean.
- **HARD_LOCK:** **LIFTED** at 9:35 AM ET by hourly strategist. Tactical agent is authorized to trade per instructions below.

## Execution Priority (execute in order, limit orders only)

### Step 1 — Rebuild QQQ core
- **BUY QQQ 2 shares** — rebuild core liquid growth exposure.
  - **Order PLACED at 2026-05-19 13:51Z:** limit buy at **702.00**. Status: **working / new**.
  - Latest bar: 702.51 at 13:50Z (above limit). Will fill if QQQ dips to 702.00 or lower.
  - Target weight back to 36-42% after fill.
  - **24h cooldown explicitly overridden** by hourly strategist (sold Monday 15:35–15:37).
  - **After fill: DO NOT SELL QQQ today.** Hold overnight.

### Step 2 — Add VOO broad-market anchor
- **BUY VOO 2 shares** — add low-correlation broad-market exposure.
  - Use **limit order** at or slightly below current ref ~**675.00**. Latest bar: **676.025** at 13:49Z (above limit).
  - **Deferred this cycle** — price moved above intended entry. Re-evaluate next tactical cycle (:50) or next hourly.
  - Target weight ~14% after fill.
  - **After fill: DO NOT SELL VOO today.** Hold overnight.

## Position Instructions
- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**389.00**
  - **Do not sell today.** No active sell trigger. GOOG is the strongest momentum name in the universe.

- **HOLD NVDA 1 — earnings lottery ticket.**
  - Cost basis $231.59, current ~221.73. Unrealized ~-4.3%.
  - No protective stop active today; earnings tomorrow creates a binary gap risk regardless.

- **HOLD QQQ 4 — plus 2-share working buy order at 702.00 limit.**
  - Current ref: ~**702.51**
  - **Do not sell any QQQ shares today.** No active sell trigger. QQQ 700 level is support; only breach below 695 would warrant re-evaluation tomorrow.

## Hard Rules / No-Trade Conditions
- **NO SAME-DAY REVERSALS.** Daytrade count is 3/3. Do NOT buy and sell the same symbol today. Any position opened today MUST be held overnight.
- **No AVGO, SOXX, or META adds today.** Defer until after NVDA earnings (Wednesday close / Thursday re-assess).
- **No illiquid-symbol market orders.** EIS, QTUM, SHLD, ARKX have <5 trades in latest bar. Avoid entirely.
- **No new positions outside the approved universe.** Code-level gate is active.
- **Do NOT re-buy symbols sold today** within 24 hours unless a future hourly note explicitly authorizes re-entry.

## Cycle Log (condensed)

### This Cycle — 2026-05-19 13:35Z (Hourly 9:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,914.52 | Cash $5,275.65 | Long $4,638.87 | Gross 46.79% | Daytrade 3/3.
- **Holdings confirmed:** GOOG 3 ($1,166.40 @ 388.80), NVDA 3 ($662.19 @ 220.73), QQQ 4 ($2,810.28 @ 702.57).
- **Unauthorized positions / orders:** None. XLK short covered at 09:33 ET. Hard lock lifted.
- **Universe compliance audit:** All holdings in approved universe. PASS.
- **Prices checked (latest bar):** AVGO 412.02 (129 trades), META 609.17 (31 trades), VOO 675.38 (8 trades), SOXX 492.86 (92 trades), RKLB 122.76 (135 trades), HOOD 75.26 (42 trades).
- **Illiquid flags:** EIS 2 trades (stale), QTUM 2 trades, SHLD 1 trade, ARKX 3 trades — avoid market orders.
- **Staged orders:** None currently open.
- **Protective stops check:** No active stop triggers today. Hold all existing positions except NVDA trim.
- **NVDA earnings alert:** Wednesday May 20 after close. Trim 2 shares today.
- **Next expected action:** Tactical :40 and :50 cycles should execute Step 1 (NVDA trim) and begin Steps 2-3 (QQQ/VOO adds) using limit orders.

### Tactical Cycle — 2026-05-19 13:51Z (9:51 AM ET)
- **Event detector:** NONE. Normal mode.
- **Orders placed:**
  1. **NVDA SELL 2** — limit 220.50. **FILLED** immediately (position now 1 share). Realized ~$442. Cash increased.
  2. **QQQ BUY 2** — limit 702.00. Status: **working / new** (market 702.51, above limit).
- **Skipped:** VOO BUY 2 — price 676.025 above 675.00 limit; deferred to next cycle.
- **Current holdings:** GOOG 3 ($384.37), NVDA 1 ($221.73), QQQ 4 ($702.51), Cash ~$5,718.
- **Gross exposure:** ~42.3% after NVDA sale. Will rise to ~56.5% if QQQ order fills.
- **Daytrade count:** 3/3. No same-day reversals. NVDA sale was overnight position.
- **Compliance:** All orders via Alpaca CLI. Universe clean. No HARD_LOCK.
