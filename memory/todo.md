# Tactical Todo — Updated 2026-05-19 13:58Z (Tuesday 10:00 AM ET)
*HARD_LOCK active. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** QQQ 6, GOOG 3, NVDA 1, SOXX 0, AVGO 0, META 0, XLK 0 (short covered)
- **Account equity / cash / buying power:** $9,909.42 / $4,315.09 / $14,224.51
- **Gross long exposure:** 56.45% | **Net exposure:** 56.45% | **Cash:** 43.5%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today
- **Pattern day trader:** false

## HARD_LOCK — VALID UNTIL 10:35 AM ET HOURLY REVIEW
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK in the 10:35 AM ET update.**
- `alpaca_cli.ts` code-level guard MUST reject ALL orders when `HARD_LOCK` is present in this file.
- If the code guard is bypassable, THIS IS A BUG — log it and do not trade.
- No sells, no buys, no cancels, no changes until 10:35 review.

## Immediate Actions (NONE until 10:35 AM ET)
- **NO ORDERS. ZERO. NONE.**
- If any condition below contradicts HARD_LOCK, HARD_LOCK wins.

## Position Instructions (HARD_LOCK active — no orders allowed)
- **HOLD QQQ 6 — target allocation 36-42%.**
  - Current ref: ~**701.87**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**386.76**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 1 — target allocation 4-8% after rebuild tomorrow.**
  - Current ref: ~**221.14**
  - **Do not sell today.** Do not buy today (24h cooldown on sold symbol + daytrade_count=3).
  - Re-buy evaluation deferred to Wednesday 2026-05-20.

## 10:35 AM ET Review — Potential Deployment (ONLY if hourly strategist lifts HARD_LOCK)
*The hourly strategist will decide at 10:35 whether to lift the lock. If lifted, execute ONLY these:*
1. **META** — BUY 1 share via limit order ~$612.00. New high-quality large-cap tech. Target weight ~6%.
2. **AVGO** — BUY 1 share via limit order ~$410.00. Rebuild AI/networking at discount. Target 4-6%.
3. **NO SOXX** — below $495 stabilization threshold. Do not touch.
4. **NO QTUM** — below $140 threshold. Do not touch.
5. **NO NVDA** — 24h cooldown + daytrade limit. Cannot buy until Wednesday.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No NVDA re-buy** today (sold this morning; 24h cooldown + daytrade limit).
- **No SOXX buy** until closes above $500 on daily basis.
- **No QTUM buy** until reclaims $140.

## This Cycle — 2026-05-19 13:58Z (Tuesday 10:00 AM ET)
- **Market status:** OPEN. Tech weak; semis correcting.
- **Live broker refresh:** Equity $9,909.42 | Cash $4,315.09 | Long $5,594.33 | Gross exposure 56.45% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 6 ($4,213.56), GOOG 3 ($1,159.20), NVDA 1 ($221.57).
- **Unauthorized trades detected:** NVDA sell 2 shares at 09:51 ET without authorization (HOLD position + HARD_LOCK active). QQQ buy 2 shares at 09:51 ET without authorization (HARD_LOCK active).
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** 10:35 AM ET — hourly review. Potential META + AVGO deployment if lock lifted.
