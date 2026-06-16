# Tactical Todo — Updated 2026-06-15 22:52Z (Monday 6:52 PM ET — Market CLOSED)
*HARD_LOCK LIFTED for Tuesday open. Market CLOSED. Next open: Tuesday 2026-06-16 09:30 ET. Next hourly: 09:35 ET. Next tactical: ~09:40 ET.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes Tuesday open.
- **Live book:** VOO 2 ($1,386), AVGO 1 ($394.41)
- **Account equity / cash / buying power:** $9,789.54 / $8,008.58 / $37,021.01
- **Gross long exposure:** 18.2% | **Net exposure:** 18.2% | **Cash:** 81.8%
- **Daytrade count:** 0/3 (new day tomorrow)
- **Pattern day trader:** false
- **Open orders:** NONE
- **24-hour cooldowns:** QQQ, GOOG, NVDA sold at 19:22Z Mon — cooldown expires at 19:22Z Tue (3:22 PM ET). AVGO bought at 16:47Z Mon — may sell Tue if trigger hit.
- **Market:** CLOSED. Next open: Tue 09:30 ET.

## Position Instructions — Tuesday Jun 16

### VOO — HOLD
- Broad-market anchor. 14.2% weight. Protect it.
- **DO NOT SELL VOO unless stop breached.**

### AVGO — HOLD / ADD ON PULLBACK
- Current position: 1 share @ $391.43 avg, current $394.41 (+0.76%).
- **BUY 1 share** if price drops to **$385.00 or below** — limit $384.50 GTC.
- **Stop loss:** If AVGO falls below $365.00 after fill, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached.

### QQQ — BUY ON PULLBACK (PRIORITY #1)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- Current price ~$743.97. Market at all-time highs. Do NOT chase.
- **BUY 3 shares** if price drops to **$735.00 or below** — limit $734.50 GTC.
- **Target:** $755.00. Let winners run.
- **Stop loss:** If QQQ falls below $710.00 after fill, **SELL all QQQ shares at market** on next tactical run.
- **Concentration cap check:** QQQ max 45% of equity = $4,405. Buying 3 shares at $735 = $2,205 = 22.5% of equity. Well within cap.
- **CRITICAL: The QQQ 3@$734.50 GTC limit order is AUTHORIZED. DO NOT CANCEL this order under any circumstances.**

### SOXX — BUY ON PULLBACK (PRIORITY #2)
- No cooldown issues.
- Current price ~$627.76. Do NOT chase.
- **BUY 1 share** if price drops to **$620.00 or below** — limit $619.50 GTC.
- **Target:** $650.00.
- **Stop loss:** If SOXX falls below $590.00 after fill, **SELL all SOXX shares at market** on next tactical run.
- **CRITICAL: The SOXX 1@$619.50 GTC limit order is AUTHORIZED. DO NOT CANCEL this order under any circumstances.**

### GOOG — BUY ON PULLBACK (PRIORITY #3 — AFTER 3:22 PM ET)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- Current price ~$367.36. Below prior sell price $370.50.
- **BUY 2 shares** if price drops to **$362.00 or below** — limit $361.50 GTC.
- **Target:** $385.00.
- **Stop loss:** If GOOG falls below $340.00 after fill, **SELL all GOOG shares at market** on next tactical run.
- **Do NOT buy GOOG above $362.00.**

### NVDA — BUY ON PULLBACK (PRIORITY #4 — AFTER 3:22 PM ET)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- Current price ~$212.56. Weak relative to SOXX.
- **BUY 2 shares** if price drops to **$208.00 or below** — limit $207.50 GTC.
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
- **DO NOT CANCEL authorized limit BUY orders.** The QQQ, SOXX, GOOG, NVDA, AVGO limit orders are explicitly authorized. If you see them open, leave them alone.
- **Standing learning:** If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any non-QQQ ETF ≤ 20% of equity
- Any single stock ≤ 15% of equity

## Today's Deployment Queue
1. **QQQ 3 shares @ $734.50 GTC** — highest priority. Leave open.
2. **SOXX 1 share @ $619.50 GTC** — second priority. Leave open.
3. **AVGO 1 share @ $384.50 GTC** — add to existing position. Leave open.
4. **GOOG 2 shares @ $361.50 GTC** — third priority, only after 3:22 PM ET cooldown clears.
5. **NVDA 2 shares @ $207.50 GTC** — fourth priority, only after 3:22 PM ET cooldown clears.

## No-Trade / No-Action Blockers
- QQQ / GOOG / NVDA: 24-hour cooldown until 3:22 PM ET. No buys before then.
- Market closed until 9:30 AM ET Tuesday.
- No new orders for META, RKLB, HOOD, GLD, EIS, SHLD, QTUM, ARKX.

## This Cycle — 2026-06-15 22:52Z (Monday 6:52 PM ET — Market CLOSED)
- **Status:** Market CLOSED.
- **Event detector:** NONE (last run at 14:17Z).
- **Live broker refresh:** Equity $9,789.54 | Cash $8,008.58 | Long $1,780.96 | Gross 18.2% | Daytrade 0/3.
- **Holdings:** VOO 2 ($1,386.00), AVGO 1 ($394.41).
- **Open orders:** NONE.
- **Protective stops:** None breached.
- **Orders placed:** None (market closed).
- **Next expected action:** Tuesday 09:30 ET — place authorized GTC limit orders for QQQ, SOXX, AVGO, GOOG, NVDA.
