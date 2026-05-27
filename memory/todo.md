# Tactical Todo — Updated 2026-05-27 18:04Z (Wed 2:04 PM ET)
**HARD_LOCK ACTIVE — NO DISCRETIONARY BUYS**

## Current State
- **Regime:** offensive catch-up (80–90% band) with HARD_LOCK
- **Live book:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1, NVDA 0
- **Account equity / cash:** $10,102.54 / $1,670.51
- **Gross long exposure:** ~83.5% | **Net exposure:** ~83.5% | **Cash:** ~16.5%
- **Daytrade count:** 1/3 (META round-trip from May 21)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Hard lock reason:** Unauthorized SOXX chase-buy + unauthorized NVDA panic-sell + failure to update todo.md. See memory/.trading_lock.json.

## Position Instructions
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.2%, within 45% cap. Let momentum run.
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.5%, within 15% cap.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% cap.
- **HOLD SOXX 2 — DO NOT SELL TODAY.** One share was an unauthorized add at $567.99 (above $565 trigger). Now at $557.54, underwater on the 2nd share. DO NOT SELL TODAY — same-day reversal prohibited. Reassess tomorrow.
- **HOLD AVGO 1 — DO NOT SELL OR ADD.** Bought today at $427.37, now $420.65 (-1.6%). Weight ~4.2%, within 15% single-stock cap. Earnings catalyst June 3 thesis intact.
- **NO NVDA — DO NOT BUY.** Position fully stopped out today (2 shares sold). 24-hour cooldown active until after 9:50 AM ET tomorrow. No re-entry authorized.
- **NO META — DO NOT BUY.** bannedSymbols active.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge, weak trends, or parabolic chase risk.

## Hard Rules / No-Trade Conditions (HARD_LOCK)
- **NO discretionary BUY orders** under any circumstances until HARD_LOCK LIFTED by hourly strategist.
- **NO same-day round trips.** SOXX was bought today; do NOT sell it today.
- **No new short sales** under any circumstances.
- **Do NOT chase** any symbol with market orders.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## This Cycle — 2026-05-27 18:04Z (Wed 2:04 PM ET)
- **Market status:** OPEN until 16:00 ET (~2 hours).
- **HARD_LOCK imposed** due to tactical agent discipline breach (unauthorized SOXX buy + unauthorized NVDA sell + failure to update todo.md).
- **Live broker refresh:** Equity $10,102.54 | Cash $1,670.51 | Long $8,432.03 | Gross 83.5% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1, NVDA 0.
- **Open orders:** NONE.
- **Event detector:** NONE (pre-fetched from 14:07Z showed no events).
- **Fresh intel:** Tech momentum fading (Yahoo Finance). SOXX -2.2% today after +6.2% yesterday. SPY $749.63 flat. AVGO -0.3%. QQQ -0.35%. GOOG +0.59%.
- **Goal check:** Portfolio +1.03% since inception vs SPY +4.40%. Trailing by ~3.4 pp. Goal 1 MET (thin). Goal 2 off track.
- **Regime:** Offensive catch-up with HARD_LOCK. Target gross exposure 80–90% (currently 83.5%).
- **Orders placed this cycle:** None (strategist audit only).
- **Code changes:** None this cycle.
- **Lock file changes:** Set active: true with breach reason.
- **Next expected action:** Next hourly run (~3:35 PM ET) — assess whether to lift HARD_LOCK for late-session tactical runs.
