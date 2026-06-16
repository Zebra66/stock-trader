# Tactical Todo — Updated 2026-06-16 13:35Z (Tuesday 9:35 AM ET)
*HARD_LOCK LIFTED. Market OPEN. Next tactical: ~09:40 ET.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,389.06), AVGO 1 ($389.43)
- **Account equity / cash / buying power:** $9,785.62 / $8,008.56 / $37,010.01
- **Gross long exposure:** 18.16% | **Net exposure:** 18.16% | **Cash:** 81.84%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** SOXX 1@$619.50 GTC, AVGO 1@$384.50 GTC.
- **24-hour cooldowns:** QQQ, GOOG, NVDA sold at 19:22Z Mon — cooldown expires at 19:22Z Tue (3:22 PM ET). AVGO bought at 16:47Z Mon — may sell Tue if trigger hit.
- **Market:** OPEN. SPY +0.08%, QQQ +0.06%, SOXX +0.56%.

## Position Instructions — Tuesday Jun 16

### VOO — HOLD
- Broad-market anchor. 14.2% weight. Protect it.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — concentration cap (20% max) prevents additional shares.

### AVGO — HOLD / ADD ON PULLBACK (PRIORITY #1)
- Current position: 1 share @ $391.43 avg, current $389.43 (-0.51%).
- **BUY 1 share** if price drops to **$385.00 or below** — limit $384.50 GTC.
- **Stop loss:** If AVGO falls below $365.00 after fill, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached.

### SOXX — BUY ON PULLBACK (PRIORITY #2)
- No cooldown issues.
- Current price ~$625.54. Do NOT chase.
- **BUY 1 share** if price drops to **$620.00 or below** — limit $619.50 GTC.
- **Target:** $650.00.
- **Stop loss:** If SOXX falls below $590.00 after fill, **SELL all SOXX shares at market** on next tactical run.
- **CRITICAL: The SOXX 1@$619.50 GTC limit order is AUTHORIZED. DO NOT CANCEL this order under any circumstances.**

### QQQ — BUY ON PULLBACK (PRIORITY #3 — AFTER 3:22 PM ET)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- Current price ~$741.86. Market near all-time highs. Do NOT chase.
- **BUY 1 share** if price drops to **$735.00 or below** — limit $734.50 GTC.
- **Target:** $760.00.
- **Stop loss:** If QQQ falls below $720.00 after fill, **SELL all QQQ shares at market** on next tactical run.
- **Dollar risk:** ~$21.50 = 0.22% of equity. Well within 0.5% exception for <2:1 R/R.
- **Concentration cap check:** QQQ max 45% of equity = $4,404. Buying 1 share at $735 = $735 = 7.5% of equity. Well within cap.
- **CRITICAL: The QQQ 1@$734.50 GTC limit order is AUTHORIZED only after 3:22 PM ET. DO NOT CANCEL this order under any circumstances.**

### GOOG — BUY ON PULLBACK (PRIORITY #4 — AFTER 3:22 PM ET)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- Current price ~$368.04. Below prior sell price $370.50.
- **BUY 1 share** if price drops to **$362.00 or below** — limit $361.50 GTC.
- **Target:** $385.00.
- **Stop loss:** If GOOG falls below $340.00 after fill, **SELL all GOOG shares at market** on next tactical run.
- **Do NOT buy GOOG above $362.00.**

### NVDA — BUY ON PULLBACK (PRIORITY #5 — AFTER 3:22 PM ET)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- Current price ~$208.90. Weak relative to SOXX.
- **BUY 1 share** if price drops to **$208.00 or below** — limit $207.50 GTC.
- **Target:** $225.00.
- **Stop loss:** If NVDA falls below $195.00 after fill, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT buy NVDA above $208.00.**

### META — AVOID
- Banned by `bannedSymbols`. No position.

### RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX — AVOID
- No edge. No catalyst. Avoid.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys above trigger prices.**
- **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Do NOT sell positions bought by the hourly strategist today unless a stop-loss is explicitly breached and authorized.**
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, `DO NOT ADD`, `NO NEW BUY`, `NO BUY`, `NO ADD`, `PROHIBITED`, `BANNED` are code-enforced.
- **If event detector flags MAJOR or CRITICAL event on broad market symbols, suspend buys and execute protective sells only if stop-loss is breached.**
- **Do NOT sell VOO today.**
- **DO NOT CANCEL authorized limit BUY orders.** The SOXX, AVGO, QQQ, GOOG, NVDA limit orders are explicitly authorized. If you see them open, leave them alone.
- **Standing learning:** If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any non-QQQ ETF ≤ 20% of equity
- Any single stock ≤ 15% of equity

## Today's Deployment Queue
1. **SOXX 1 share @ $619.50 GTC** — place immediately.
2. **AVGO 1 share @ $384.50 GTC** — place immediately.
3. **QQQ 1 share @ $734.50 GTC** — place only after 3:22 PM ET cooldown clears.
4. **GOOG 1 share @ $361.50 GTC** — place only after 3:22 PM ET cooldown clears.
5. **NVDA 1 share @ $207.50 GTC** — place only after 3:22 PM ET cooldown clears.

## No-Trade / No-Action Blockers
- QQQ / GOOG / NVDA: 24-hour cooldown until 3:22 PM ET. No buys before then.
- VOO: concentration cap prevents adds.
- No new orders for META, RKLB, HOOD, GLD, EIS, SHLD, QTUM, ARKX.

## This Cycle — 2026-06-16 13:35Z (Tuesday 9:35 AM ET)
- **Status:** Market OPEN.
- **Event detector:** MINOR (SOXX +0.56%). No autonomous action.
- **Live broker refresh:** Equity $9,785.62 | Cash $8,008.56 | Long $1,777.06 | Gross 18.16% | Daytrade 0/3.
- **Holdings:** VOO 2 ($1,389.06), AVGO 1 ($389.43).
- **Open orders:** NONE.
- **Protective stops:** None breached.
- **HARD_LOCK:** LIFTED at 13:35Z.
- **Orders placed:** SOXX 1@$619.50 GTC (13:38Z), AVGO 1@$384.50 GTC (13:38Z).
- **Next expected action:** Tactical agent to monitor fills and stop-losses. Place QQQ/GOOG/NVDA orders after 3:22 PM ET cooldown.
