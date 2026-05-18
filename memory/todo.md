# Tactical Todo — Updated 2026-05-18 17:35Z (Monday 1:35 PM ET)
*HARD_LOCK active. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** GOOG 3, NVDA 3, QQQ 4, XLK -3 (SHORT), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** $9,944.98 / $5,796.51 / $14,701.69
- **Gross long exposure:** 46.94% | **Net exposure:** 41.72% | **Cash:** 58.29%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today
- **Pattern day trader:** false
- **Unauthorized positions:** XLK -3 shares SHORT — cover deferred to Tuesday 2026-05-19 open to avoid daytrade #4

## HARD_LOCK — VALID UNTIL TUESDAY 2026-05-19 09:30 ET
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `alpaca_cli.ts` enforces HARD_LOCK at the code level.
- The ONLY exception is the authorized XLK cover on Tuesday open.
- No sells, no buys, no cancels, no changes.

## Immediate Actions (Tuesday 2026-05-19 Open)
1. **BUY TO COVER XLK 3 shares** — compliance cleanup of unauthorized short.
   - Execute at Tuesday market open (09:30 ET) via limit order near prior close (~$173.10).
   - This is explicitly authorized by the hourly strategist. The CLI universe gate allows buy-to-cover for existing shorts.
   - After cover, cash will be ~$5,277 (53% of equity).

## Tuesday 2026-05-19 Deployment Plan (after XLK cover, hourly lock lifted)
*All re-buys explicitly override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage. Place orders at 09:30 ET or shortly after.*
1. **META** — BUY 1 share via limit order ~612.00–614.00. New high-quality large-cap tech exposure. Target weight ~6%.
2. **QQQ** — BUY 2 shares via limit order ~702.00. Rebuild core liquid growth. Target back to 36-42%.
3. **AVGO** — BUY 1 share via limit order ~417.50. Rebuild AI/networking sleeve. Target 4-6%.
4. **VOO** — BUY 2 shares via limit order ~677.00 (conditional). Broad-market anchor if QQQ rebuild alone doesn't reach target exposure band. Target ~14%.

**Deferred / conditional only:**
- **SOXX** — DO NOT buy Tuesday. Wait for daily close above 500 to confirm stabilization (currently 492.31, broken below 495).
- **QTUM** — DO NOT buy Tuesday. Liquidity is extremely thin (<2 trades/hour). Avoid market orders entirely.

## Position Instructions (Monday 1:35 PM — today, HARD_LOCK active)
- **HOLD QQQ 4 — target allocation 36-42% after rebuild Tuesday.**
  - Current ref: ~**702.98**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**398.27**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 3 — target allocation 4-8%.**
  - Current ref: ~**220.90**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No illiquid-symbol market orders.** EIS, QTUM, SHLD, ARKX have <5 trades/hour. If ever authorized, use limit orders only.

## This Cycle — 2026-05-18 17:35Z (Monday 1:35 PM ET)
- **Market status:** OPEN. Event detector: NOT RUN (hard lock, no need).
- **Live broker refresh:** Equity $9,946.56 | Cash $5,796.51 | Long $4,669.44 | Short -$519.39 | Gross exposure 46.95% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,811.88), GOOG 3 ($1,194.81), NVDA 3 ($662.72), XLK -3 (-$519.39).
- **Unauthorized trades detected:** None since 11:51 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO per Tuesday deployment plan after hourly lock lift.

## Tactical Cycle — 2026-05-18 17:40Z (Monday 1:40 PM ET)
- **Event detector:** NONE.
- **Live broker refresh:** Equity $9,944.98 | Cash $5,796.51 | Long $4,668.37 | Short -$519.90 | Gross long 46.94% | Net 41.72% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 @ 702.98, GOOG 3 @ 397.51, NVDA 3 @ 221.305, XLK -3 @ 173.30.
- **Protective stops:** QQQ $702.98 > $700.00 (not breached). GOOG $397.51 > $394.00 (not breached). NVDA $221.305 > $218.00 (not breached).
- **HARD_LOCK status:** ACTIVE. No orders authorized until Tue 09:30 ET.
- **Orders placed this cycle:** None. Hard lock enforced inaction.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short), then rebuild per deployment plan.

## Tactical Cycle — 2026-05-18 18:04Z (Monday 2:04 PM ET)
- **Event detector:** NONE. No market events detected.
- **Live broker refresh:** Equity $9,938.78 | Cash $5,796.51 | Long $4,661.28 | Short -$519.02 | Gross long 46.90% | Net 41.68% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 @ 702.27, GOOG 3 @ 396.925, NVDA 3 @ 220.475, XLK -3 @ 173.005.
- **Protective stops:** QQQ $702.43 > $700.00 (not breached). GOOG $396.76 > $394.00 (not breached). NVDA $220.55 > $218.00 (not breached).
- **HARD_LOCK status:** ACTIVE. No orders authorized until Tue 09:30 ET.
- **Orders placed this cycle:** None. Hard lock enforced inaction.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then rebuild per deployment plan after lock lift.

## Tactical Cycle — 2026-05-18 17:50Z (Monday 1:50 PM ET)
- **Event detector:** NONE. No market events detected.
- **Live broker refresh:** Equity $9,946.21 | Cash $5,796.51 | Long $4,669.60 | Short -$519.90 | Gross long 46.95% | Net 41.72% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 @ 703.265, GOOG 3 @ 397.86, NVDA 3 @ 220.985, XLK -3 @ 173.30.
- **Protective stops:** QQQ $703.265 > $700.00 (not breached). GOOG $397.86 > $394.00 (not breached). NVDA $220.985 > $218.00 (not breached).
- **HARD_LOCK status:** ACTIVE. No orders authorized until Tue 09:30 ET.
- **Orders placed this cycle:** None. Hard lock enforced inaction.
- **Code fix:** Fixed broken `src/agent.test.ts` where test stub `HARD_LOCK_DISABLED_TEST` still contained `HARD_LOCK` substring, causing `submit-order rejects out-of-universe buy` to fail. Changed stub to `TEST_LOCK_DISABLED`; all 119 tests pass.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then rebuild per deployment plan after lock lift.
