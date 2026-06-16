# Tactical Todo — Updated 2026-06-16 16:10Z (Tuesday 12:10 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Fed meeting today. MAJOR event detected. Next tactical: ~12:20 ET.*
<!-- Autonomous override applied at 2026-06-16 16:10Z due to MAJOR event -->

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band) with Fed pause
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,385.49), AVGO 2 ($758.16), SOXX 1 ($610.03)
- **Account equity / cash / buying power:** $9,758.75 / $7,004.97 / $35,730.46
- **Gross long exposure:** ~28.2% | **Net exposure:** ~28.2% | **Cash:** ~71.8%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE.
- **24-hour cooldowns:** QQQ, GOOG, NVDA sold at 19:22Z Mon — cooldown expires at 19:22Z Tue (3:22 PM ET). SOXX bought at 14:23Z Tue — may sell Wed if stop hit.
- **Market:** OPEN. SPY +0.17%, QQQ +0.36%, SOXX +1.49%.
- **Fed meeting:** Kevin Warsh's first FOMC today. Statement ~2:00 PM ET, presser ~2:30 PM ET. NO new buy orders before presser concludes.
- **Event detector:** MAJOR (SOXX +1.49%, SMH +1.24%). QQQ/GOOG/NVDA buys suspended.

## Position Instructions — Tuesday Jun 16

### VOO — HOLD
- Broad-market anchor. 14.2% weight. Protect it.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — concentration cap (20% max) prevents additional shares.

### AVGO — HOLD
- Current position: 2 shares @ $387.89 avg, current $382.02 (-1.51%).
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached.
- **Do NOT add AVGO** — currently underwater; never average down.

### SOXX — HOLD
- Current position: 1 share @ $619.25, current $607.90 (-1.83%).
- **Stop loss:** If SOXX falls below $590.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached.
- **Do NOT add SOXX** — currently underwater; never average down.

### QQQ — BUY ON PULLBACK (AFTER 3:22 PM ET + POST-FED)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- **Fed meeting blocker:** Do NOT place QQQ order before ~2:30 PM ET (18:30Z). Wait for market reaction.
- Current price ~$736.16. Market near all-time highs. Do NOT chase.
- **BUY 3 shares** if price drops to **$735.00 or below** — limit $734.50 GTC. SUSPENDED — major event detected at 2026-06-16 16:10Z
- **Target:** $760.00.
- **Stop loss:** If QQQ falls below $720.00 after fill, **SELL all QQQ shares at market** on next tactical run.
- **Dollar risk:** ~$14.50 per share = $43.50 = 0.45% of equity. Under 0.5% exception for R/R < 2:1.
- **Concentration cap check:** QQQ max 45% of equity = $4,392.50. Buying 3 shares at $734.50 = $2,203.50 = 22.6% of equity. Well within cap.
- **CRITICAL: The QQQ 3@$734.50 GTC limit order is AUTHORIZED only after 3:22 PM ET and after the Fed press conference concludes. DO NOT place this order before then.**

### GOOG — BUY ON PULLBACK (AFTER 3:22 PM ET + POST-FED)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- **Fed meeting blocker:** Do NOT place GOOG order before ~2:30 PM ET (18:30Z).
- Current price ~$372.69. Below prior sell price $370.50.
- **BUY 2 shares** if price drops to **$362.00 or below** — limit $361.50 GTC. SUSPENDED — major event detected at 2026-06-16 16:10Z
- **Target:** $385.00.
- **Stop loss:** If GOOG falls below $340.00 after fill, **SELL all GOOG shares at market** on next tactical run.
- **Do NOT buy GOOG above $362.00.**
- **Dollar risk:** ~$21.50 per share = $43.00 = 0.44% of equity. Under 0.5% exception.

### NVDA — BUY ON PULLBACK (AFTER 3:22 PM ET + POST-FED — LOW PRIORITY)
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **After 3:22 PM ET, cooldown is clear.**
- **Fed meeting blocker:** Do NOT place NVDA order before ~2:30 PM ET (18:30Z).
- Current price ~$209.40. Weak relative to SOXX.
- **BUY 1 share** if price drops to **$208.00 or below** — limit $207.50 GTC. SUSPENDED — major event detected at 2026-06-16 16:10Z
- **Target:** $225.00.
- **Stop loss:** If NVDA falls below $195.00 after fill, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT buy NVDA above $208.00.**
- **Dollar risk:** ~$12.50 = 0.13% of equity. Well within limits.

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
- **Do NOT cancel authorized limit BUY orders.** (None currently open.)
- **Standing learning:** If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.
- **Fed meeting blocker:** NO new buy orders of any kind before ~2:30 PM ET (18:30Z) today.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any non-QQQ ETF ≤ 20% of equity
- Any single stock ≤ 15% of equity

## Today's Deployment Queue (Post-Fed / Post-3:22 PM ET)
1. **QQQ 3 shares @ $734.50 GTC** — place after 3:22 PM ET AND after Fed presser concludes. SUSPENDED — major event detected at 2026-06-16 16:10Z
2. **GOOG 2 shares @ $361.50 GTC** — place after 3:22 PM ET AND after Fed presser concludes. SUSPENDED — major event detected at 2026-06-16 16:10Z
3. **NVDA 1 share @ $207.50 GTC** — place after 3:22 PM ET AND after Fed presser concludes (low priority). SUSPENDED — major event detected at 2026-06-16 16:10Z

## No-Trade / No-Action Blockers
- QQQ / GOOG / NVDA: 24-hour cooldown until 3:22 PM ET. No buys before then.
- Fed meeting: No new buy orders before ~2:30 PM ET (18:30Z).
- VOO: concentration cap prevents adds.
- AVGO / SOXX: currently underwater; no average down.
- No new orders for META, RKLB, HOOD, GLD, EIS, SHLD, QTUM, ARKX.

## This Cycle — 2026-06-16 15:35Z (Tuesday 11:35 AM ET)
- **Status:** Market OPEN.
- **Event detector:** NONE. No autonomous action.
- **Live broker refresh:** Equity $9,761.10 | Cash $7,004.97 | Long $2,756.98 | Gross 28.25% | Daytrade 0/3.
- **Holdings:** VOO 2 ($1,385.04, +2.04% unrealized), AVGO 2 ($764.04, -1.51% unrealized), SOXX 1 ($607.90, -1.83% unrealized).
- **Open orders:** NONE.
- **Protective stops:** None breached. AVGO $382.02 > stop $365.00. SOXX $607.90 > stop $590.00. VOO $692.52 > stop $650.00.
- **HARD_LOCK:** LIFTED at 13:35Z.
- **Orders filled:** SOXX 1@$619.25 GTC (14:23Z), AVGO 1@$384.34 GTC (13:38Z).
- **Next expected action:** Monitor stops. No new buy orders before Fed meeting concludes (~2:30 PM ET). Place QQQ/GOOG/NVDA orders after 3:22 PM ET if market is orderly.

## This Cycle — 2026-06-16 16:10Z (Tuesday 12:10 PM ET)
- **Status:** Market OPEN.
- **Event detector:** MAJOR. SOXX +1.49%, SMH +1.24%. Autonomous override applied.
- **Live broker refresh:** Equity $9,758.75 | Cash $7,004.97 | Long $2,753.78 | Gross ~28.2% | Daytrade 0/3.
- **Holdings:** VOO 2 ($1,385.49, +2.07% unrealized), AVGO 2 ($758.16, -2.27% unrealized), SOXX 1 ($610.03, -1.49% unrealized).
- **Open orders:** NONE.
- **Protective stops:** None breached. AVGO $379.08 > stop $365.00. SOXX $610.03 > stop $590.00. VOO $692.745 > stop $650.00.
- **Autonomous override:** Suspended QQQ/GOOG/NVDA buy conditions. No new positions.
- **Next expected action:** Monitor stops. Reassess after Fed presser (~2:30 PM ET). Hourly strategist to review MAJOR event.
