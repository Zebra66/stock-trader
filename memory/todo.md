# Tactical Todo — Updated 2026-05-18 18:10Z (Monday 2:10 PM ET)
*HARD_LOCK active. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** GOOG 3, NVDA 3, QQQ 4, XLK -3 (SHORT), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** $9,940.48 / $5,796.51 / $14,698.09
- **Gross long exposure:** 46.89% | **Net exposure:** 41.67% | **Cash:** 58.29%
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
   - Execute at Tuesday market open (09:30 ET) via limit order near prior close (~$173.15).
   - This is explicitly authorized by the hourly strategist. The CLI universe gate allows buy-to-cover for existing shorts.
   - After cover, cash will be ~$5,277 (53% of equity).

## Tuesday 2026-05-19 Deployment Plan (after XLK cover, hourly lock lifted)
*All re-buys explicitly override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage. Place orders at 09:30 ET or shortly after.*
1. **META** — BUY 1 share via limit order ~612.00–614.00. New high-quality large-cap tech exposure. Target weight ~6%.
2. **QQQ** — BUY 2 shares via limit order ~701.00–703.00. Rebuild core liquid growth. Target back to 36-42%.
3. **AVGO** — BUY 1 share via limit order ~418.00–419.00. Rebuild AI/networking sleeve. Target 4-6%.
4. **VOO** — BUY 2 shares via limit order ~676.00–677.00 (conditional). Broad-market anchor if QQQ rebuild alone doesn't reach target exposure band. Target ~14%.

**Conditional / deferred:**
- **SOXX** — DO NOT buy Tuesday. Wait for daily close above 500 to confirm stabilization (currently 491.45, broken below 495).
- **QTUM** — DO NOT buy Tuesday. Liquidity is extremely thin (<2 trades/hour). Avoid market orders entirely.
- **NVDA** — NO ADDS before earnings Wednesday May 20. If price drops below 218 on Tuesday, trim/sell to cut risk.

## Position Instructions (Monday 2:05 PM — today, HARD_LOCK active)
- **HOLD QQQ 4 — target allocation 36-42% after rebuild Tuesday.**
  - Current ref: ~**702.44**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**397.15**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 3 — target allocation 4-8%.**
  - Current ref: ~**220.74**
  - **Earnings Wednesday May 20** — binary event. No adds before then.
  - **Stop level:** If NVDA drops below **218.00**, flag for trim/sell on Tuesday after lock lift.
  - **Do not sell today.** HARD_LOCK prevents all orders.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No illiquid-symbol market orders.** EIS, QTUM, SHLD, ARKX have <5 trades/hour. If ever authorized, use limit orders only.

## This Cycle — 2026-05-18 18:10Z (Monday 2:10 PM ET)
- **Market status:** OPEN. Event detector: NONE (no events).
- **Live broker refresh:** Equity $9,935.09 | Cash $5,796.51 | Long $4,657.28 | Short -$518.70 | Gross exposure 46.88% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,806.94), GOOG 3 ($1,189.71), NVDA 3 ($660.63), XLK -3 (-$518.70).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $220.21 (>218.00), QQQ $701.74 (>700.00), GOOG $396.57 (>394.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. No adds before event. Stop below 218.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO per Tuesday deployment plan after hourly lock lift.

## This Cycle — 2026-05-18 18:30Z (Monday 2:30 PM ET)
- **Market status:** OPEN. Event detector: NONE (no events).
- **Live broker refresh:** Equity $9,925.87 | Cash $5,796.51 | Long $4,646.80 | Short -$517.44 | Gross exposure 46.81% | Net 41.67% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,802.28), GOOG 3 ($1,185.06), NVDA 3 ($659.46), XLK -3 (-$517.44).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $219.94 (>218.00), QQQ $700.74 (>700.00), GOOG $395.01 (>394.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. No adds before event. Stop below 218.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO per Tuesday deployment plan after hourly lock lift.

## This Cycle — 2026-05-18 18:20Z (Monday 2:20 PM ET)
- **Market status:** OPEN. Event detector: NONE (no events).
- **Live broker refresh:** Equity $9,924.67 | Cash $5,796.51 | Long $4,645.21 | Short -$517.05 | Gross exposure 46.81% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,800.36), GOOG 3 ($1,185.60), NVDA 3 ($659.25), XLK -3 (-$517.05).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $219.78 (>218.00), QQQ $700.22 (>700.00), GOOG $395.28 (>394.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. No adds before event. Stop below 218.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO per Tuesday deployment plan after hourly lock lift.
