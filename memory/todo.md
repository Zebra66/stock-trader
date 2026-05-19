# Tactical Todo — Updated 2026-05-19 13:35Z (Tuesday 9:35 AM ET)
*HARD_LOCK active. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** GOOG 3, NVDA 1, QQQ 6, SOXX 0, AVGO 0, META 0, QTUM 0
- **Account equity / cash / buying power:** $9,900.31 / $4,315.09 / $14,215.40
- **Gross long exposure:** 56.41% | **Net exposure:** 56.41% | **Cash:** 43.6%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today
- **Pattern day trader:** false

## HARD_LOCK — VALID UNTIL EXPLICITLY LIFTED BY HOURLY STRATEGIST
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `alpaca_cli.ts` enforces HARD_LOCK at the code level when `todo.md` contains the string `HARD_LOCK`.
- The hourly strategist will review and lift the lock at the next hourly cycle (10:35 ET).
- Until then: no sells, no buys, no cancels, no changes.

## Post-Lock Deployment Plan (after 10:35 hourly lift, if tape is orderly)
*All re-buys explicitly override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage.*
1. **META** — BUY 1 share via limit order ~610.00. New high-quality large-cap tech exposure. Target weight ~6%.
2. **AVGO** — BUY 1 share via limit order ~410.00. Rebuild AI/networking sleeve. Target weight ~4-6%.
3. **SOXX** — BUY 1 share via limit order ~489.00. Rebuild semis ETF sleeve. Target weight ~5-8%. Add 2nd share only if price stabilizes above 495 within first hour.
4. **QTUM** — BUY 2 shares if price holds above 139.00. Thematic quantum/AI exposure. Target weight ~3%.

## Wednesday 2026-05-20 Deployment
1. **NVDA** — BUY 2 shares via limit order ~220.00. Rebuild secular AI position. Target weight back to ~6%.

## Position Instructions (valid now and after lock lift)
- **HOLD QQQ 6 — target allocation 36-45%.**
  - Current ref: ~**700.85**
  - **Do not sell today.** We bought 2 shares today at ~702; selling them would be a same-day round trip (daytrade #4). No trigger active.

- **HOLD GOOG 3 — target allocation 8-12%.**
  - Current ref: ~**387.51**
  - **Do not sell today.** No trigger active. Trim below 382.

- **HOLD NVDA 1 — target allocation 4-8%.**
  - Current ref: ~**220.24**
  - **Do not sell today.** No trigger active. Trim below 215. Re-buy 2 shares on Wednesday.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND while HARD_LOCK is present.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No re-buy of NVDA today** (anti-churn: sold 2 shares this morning; cannot re-buy same session).
- **No new short sales** under any circumstances.
- **No sells of existing long positions** without explicit hourly authorization and a breached trigger.

## This Cycle — 2026-05-19 13:35Z (Tuesday 9:35 AM ET)
- **Market status:** OPEN. Event detector: NOT RUN (hard lock, no need).
- **Live broker refresh:** Equity $9,900.31 | Cash $4,315.09 | Long $5,585.22 | Gross 56.41% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 6 ($4,205.10), GOOG 3 ($1,162.52), NVDA 1 ($220.24).
- **Unauthorized trades detected:** NVDA SELL 2 shares at 09:51 ET without authorization. HARD_LOCK re-engaged.
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** 10:35 ET — hourly strategist review. Then META/AVGO/SOXX/QTUM limit buys if tape is orderly.
