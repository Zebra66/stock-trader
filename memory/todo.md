# Tactical Todo — Updated 2026-05-18 16:47Z (Monday 12:47 PM ET)
*HARD_LOCK active. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** GOOG 3, NVDA 3, QQQ 4, XLK -3 (SHORT), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** $9,949.31 / $5,796.51 / $14,705.60
- **Gross long exposure:** 47.0% | **Net exposure:** 41.7% | **Cash:** 58.3%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today
- **Pattern day trader:** false
- **Unauthorized positions:** XLK -3 shares SHORT — cover deferred to Tuesday 2026-05-19 open to avoid daytrade #4

## HARD_LOCK — VALID UNTIL TUESDAY 2026-05-19 09:30 ET
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `alpaca_cli.ts` enforces HARD_LOCK at the code level.
- The ONLY exception is the authorized XLK cover on Tuesday open (see below).
- No sells, no buys, no cancels, no changes today (Monday).

## Monday Position Instructions (HARD_LOCK active — no orders)
- **HOLD QQQ 4 — target allocation 36-42% after rebuild Tuesday.**
  - Current ref: ~**703.34**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**398.72**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 3 — target allocation 4-8%.**
  - Current ref: ~**221.13**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

## Tuesday 2026-05-19 Deployment Plan (after XLK cover, hourly lock lifted)
*All re-buys explicitly override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage. Place orders at 09:30 ET or shortly after. Do NOT execute any of these on Monday.*

1. **BUY TO COVER XLK 3 shares** — compliance cleanup of unauthorized short.
   - Execute at Tuesday market open (09:30 ET) via limit near prior close (~$172.86).
   - This is explicitly authorized by the hourly strategist. The CLI universe gate allows buy-to-cover for existing shorts.
   - After cover, cash will be ~$5,276 (53% of equity).

2. **META** — BUY 1 share via limit order ~608.00. New high-quality large-cap tech exposure. Target weight ~6%.
3. **QQQ** — BUY 2 shares via limit order ~701.00. Rebuild core liquid growth. Target back to 36-42%.
4. **AVGO** — BUY 1 share via limit order ~418.00. Rebuild AI/networking sleeve. Target 4-6%.
5. **SOXX** — BUY 1 share via limit order ~493.00. Rebuild semis ETF sleeve. Target 5-8%. **ONLY execute if SOXX opens above 488. If it gaps down below 485, skip and reassess at next hourly.**
6. **QTUM** — BUY 2 shares if price holds above 140. Thematic quantum/AI exposure. Target weight ~3%.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND on Monday 2026-05-18.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- Do not execute any Tuesday deployment step before Tuesday 2026-05-19 09:30 ET.
- **Gap-down guard:** If a planned buy candidate opens more than 1.5% below its limit price, skip the add and reassess at the next hourly run.

## This Cycle — 2026-05-18 16:47Z (Monday 12:47 PM ET)
- **Market status:** OPEN. Event detector: NONE.
- **Live broker refresh:** Equity $9,938.54 | Cash $5,796.51 | Long $4,660.61 | Short -$518.55 | Gross exposure 46.9% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,805.84), GOOG 3 ($1,191.90), NVDA 3 ($662.82), XLK -3 (-$518.55).
- **Protective stops checked:** QQQ $701.46 (>700.0), GOOG $397.30 (>394.0), NVDA $220.94 (>218.0). None breached.
- **Orders placed this cycle:** ZERO. HARD_LOCK active in `todo.md` and enforced at code level.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.

## This Cycle — 2026-05-18 17:10Z (Monday 1:10 PM ET)
- **Market status:** OPEN. Event detector: NONE.
- **Live broker refresh:** Equity $9,954.57 | Cash $5,796.51 | Long $4,678.76 | Short -$520.70 | Gross exposure 47.0% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,816.16), GOOG 3 ($1,196.60), NVDA 3 ($666.00), XLK -3 (-$520.70).
- **Protective stops checked:** QQQ $704.04 (>700.0), GOOG $398.87 (>394.0), NVDA $222.00 (>218.0). None breached.
- **Orders placed this cycle:** ZERO. HARD_LOCK active in `todo.md` and enforced at code level.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.

## This Cycle — 2026-05-18 17:20Z (Monday 1:20 PM ET)
- **Market status:** OPEN. Event detector: NONE.
- **Live broker refresh:** Equity $9,949.31 | Cash $5,796.51 | Long $4,672.91 | Short -$520.11 | Gross exposure 47.0% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,813.36), GOOG 3 ($1,196.16), NVDA 3 ($663.39), XLK -3 (-$520.11).
- **Protective stops checked:** QQQ $703.34 (>700.0), GOOG $398.72 (>394.0), NVDA $221.13 (>218.0). None breached.
- **Quote quality note:** SOXX Alpaca quote abnormally thin (2 trades, 87 vol). Cross-checked Yahoo Finance: SOXX ~$493.05, down ~3.0% from prior close, day low $489.87. Price remains above Tuesday gap-down guard (488).
- **Orders placed this cycle:** ZERO. HARD_LOCK active in `todo.md` and enforced at code level.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.

## This Cycle — 2026-05-18 16:54Z (Monday 12:54 PM ET)
- **Market status:** OPEN. Event detector: NONE.
- **Live broker refresh:** Equity $9,949.29 | Cash $5,796.51 | Long $4,673.31 | Short -$520.53 | Gross exposure 47.0% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,813.64), GOOG 3 ($1,193.97), NVDA 3 ($665.70), XLK -3 (-$520.53).
- **Protective stops checked:** QQQ $703.41 (>700.0), GOOG $397.99 (>394.0), NVDA $221.90 (>218.0). None breached.
- **Orders placed this cycle:** ZERO. HARD_LOCK active in `todo.md` and enforced at code level.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.
