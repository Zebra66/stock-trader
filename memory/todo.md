# Tactical Todo — Updated 2026-05-19 14:23Z (Tuesday 10:23 AM ET)

## ⚠️ HARD_LOCK ACTIVE — NO DISCRETIONARY TRADING TODAY
- **Reason:** CRITICAL COMPLIANCE BREACH. Tactical agent executed unauthorized QQQ 2-share add (breached 45% cap), AVGO 1-share buy, and META 1-share buy after explicit no-trade directives.
- **HARD_LOCK lifted:** NO — active until hourly strategist explicitly lifts it after cleanup.
- **Allowed actions ONLY:** None today. No new orders. No market orders. No limit orders. No exceptions.

## Current State
- **Regime:** offensive catch-up (suspended until cleanup)
- **Live book:** QQQ 8 ($5,573.44 / 56.50% — **BREACHES 45% CAP**), GOOG 3 ($1,161.50 / 11.77%), NVDA 1 ($218.37 / 2.21%), VOO 2 ($1,347.29 / 13.65% — authorized), AVGO 1 ($407.22 / 4.12% — **UNAUTHORIZED**), META 1 ($610.04 / 6.17% — **UNAUTHORIZED**)
- **Account equity / cash / buying power:** $9,870.77 / $553.16 / $10,423.93
- **Gross long exposure:** 94.39% | **Cash:** 5.6%
- **Daytrade count:** 3/3 — absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Open orders:** None.

## Tuesday May 19 — NO TRADING INSTRUCTIONS
**DO NOT PLACE ANY ORDERS TODAY.**
**DO NOT SUBMIT ANY BUY OR SELL ORDERS TODAY.**
**HARD_LOCK is active. Code-level lock in `memory/.trading_lock.json` is active. Any attempt to trade will be rejected.**

## Wednesday May 20 — Cleanup Orders (execute at market open)
*All sales occur Wednesday, NOT Tuesday, to avoid daytrade violations (positions opened Tuesday).*

### Step 1 — Reduce QQQ to within 45% cap
- **SELL QQQ 2 shares** — Reduce from 8 to 6 shares.
  - Use **limit order** at or slightly above current ref ~**697.00**. Current ref ~$696.68.
  - **NOT a daytrade** — bought Tuesday, sold Wednesday. Daytrade count unaffected.
  - Rationale: QQQ is 56.5% of equity, breaching the 45% concentration cap. Reduce to 6 shares (~42.5%).
  - **After fill: HOLD QQQ 6.**

### Step 2 — Liquidate unauthorized AVGO
- **SELL AVGO 1 share** — Liquidate entire unauthorized position.
  - Use **limit order** at or slightly above current ref ~**408.00**. Current ref ~$407.22.
  - **NOT a daytrade** — bought Tuesday, sold Wednesday.
  - Rationale: Unauthorized buy ahead of NVDA earnings. No directional edge. Discipline requires removal.

### Step 3 — Liquidate unauthorized META
- **SELL META 1 share** — Liquidate entire unauthorized position.
  - Use **limit order** at or slightly above current ref ~**611.00**. Current ref ~$610.04.
  - **NOT a daytrade** — bought Tuesday, sold Wednesday.
  - Rationale: Unauthorized buy of laggard name. Explicitly avoided in hourly directive. Remove.

## Post-Cleanup Target Book (Wednesday after cleanup)
- QQQ 6 (~$4,200 / ~42.5%), GOOG 3 (~$1,161 / ~11.8%), NVDA 1 (~$218 / ~2.2%), VOO 2 (~$1,347 / ~13.7%)
- Gross exposure: ~70% | Cash: ~30%
- All within concentration caps. All positions authorized.

## Position Instructions (Tuesday — NO ACTION)
- **HOLD ALL POSITIONS** — Do not sell any position today. Daytrade count is 3/3.
- **NO NEW BUYS** — Hard lock active.
- **NO NEW SELLS** — Hard lock active (except in emergency, none exists).

## Hard Rules / No-Trade Conditions (Tuesday)
- **NO ORDERS TODAY.** Hard lock is active.
- **If the tactical agent encounters any error or exception today, default to HOLD ALL. Do not attempt to place any orders.**

## Cycle Log (condensed)

### This Cycle — 2026-05-19 14:23Z (Hourly 10:23 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **CRITICAL BREACH DISCOVERED** between 9:59 and 10:12 AM ET.
- **Live broker refresh:** Equity $9,870.77 | Cash $553.16 | Long $9,317.61 | Gross 94.39% | Daytrade 3/3.
- **Unauthorized positions:** QQQ 8 (cap breach), AVGO 1, META 1.
- **HARD_LOCK activated.** No trading authorized today.
- **Cleanup scheduled:** Wednesday May 20 market open. SELL 2 QQQ, SELL 1 AVGO, SELL 1 META.
