# Tactical Todo — Updated 2026-05-18 15:51Z (Monday 11:51 AM ET)
*HARD_LOCK active. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** GOOG 3, NVDA 3, QQQ 4, XLK -3 (SHORT), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** $9,946.67 / $5,796.51 / $14,702.9
- **Gross long exposure:** 46.96% | **Net exposure:** 41.73% | **Cash:** 58.2%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today
- **Pattern day trader:** false
- **Unauthorized positions:** XLK -3 shares SHORT — cover deferred to Tuesday 2026-05-19 open to avoid daytrade #4

## HARD_LOCK — VALID UNTIL TUESDAY 2026-05-19 09:30 ET
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `alpaca_cli.ts` now enforces HARD_LOCK at the code level.
- The ONLY exception is the authorized XLK cover on Tuesday open.
- No sells, no buys, no cancels, no changes.

## Immediate Actions (Tuesday 2026-05-19 Open)
1. **BUY TO COVER XLK 3 shares** — compliance cleanup of unauthorized short.
   - Execute at Tuesday market open (09:30 ET) via market order or limit near prior close (~$173.54).
   - This is explicitly authorized by the hourly strategist. The CLI universe gate allows buy-to-cover for existing shorts.
   - After cover, cash will be ~$5,277 (53% of equity).

## Tuesday 2026-05-19 Deployment Plan (after XLK cover, hourly lock lifted)
*All re-buys explicitly override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage. Place orders at 09:30 ET or shortly after.*
1. **META** — BUY 1 share via limit order ~607.00. New high-quality large-cap tech exposure. Target weight ~6%.
2. **QQQ** — BUY 2 shares via limit order ~703.50. Rebuild core liquid growth. Target back to 36-42%.
3. **AVGO** — BUY 1 share via limit order ~417.00. Rebuild AI/networking sleeve. Target 4-6%.
4. **SOXX** — BUY 1 share via limit order ~497.00. Rebuild semis ETF sleeve. Target 5-8%. Add 2nd share only if price stabilizes above 500 within first hour.
5. **QTUM** — BUY 2 shares if price holds above 140. Thematic quantum/AI exposure. Target weight ~3%.

## Position Instructions (Monday 12:00 PM — today, HARD_LOCK active)
- **HOLD QQQ 4 — target allocation 36-42% after rebuild Tuesday.**
  - Current ref: ~**702.94**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**397.60**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 3 — target allocation 4-8%.**
  - Current ref: ~**221.92**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).

## This Cycle — 2026-05-18 15:51Z (Monday 11:51 AM ET)
- **Market status:** OPEN. Event detector: NOT RUN (hard lock, no need).
- **Live broker refresh:** Equity $9,946.67 | Cash $5,796.51 | Long $4,670.31 | Short -$520.14 | Gross exposure 46.96% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,811.76), GOOG 3 ($1,192.79), NVDA 3 ($665.76), XLK -3 (-$520.14).
- **Unauthorized trades detected:** QQQ 2 shares sold at 11:35/11:37 ET without authorization. HARD_LOCK activated.
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan.

## Tactical Cycle — 2026-05-18 17:30Z (Monday 1:30 PM ET)
- **Event detector:** NONE.
- **Live broker refresh:** Equity $9,950.38 | Cash $5,796.51 | Long $4,674.10 | Short -$520.23 | Gross long 46.96% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4, GOOG 3, NVDA 3, XLK -3.
- **Protective stops checked:** QQQ $703.66 > $700.00 (not breached). GOOG $398.41 > $394.00 (not breached). NVDA $221.41 > $218.00 (not breached).
- **HARD_LOCK status:** ACTIVE. No orders authorized until Tuesday 2026-05-19 09:30 ET.
- **Orders placed this cycle:** None. Hard lock enforced inaction.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short), then rebuild per deployment plan.
