# Tactical Todo — Updated 2026-05-21 12:56 PM ET
*Execute authorized orders only. Daytrade count is 0.*

## Current State
- **Regime:** offensive catch-up
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1
- **Account equity / cash / buying power:** $10,025.60 / $2,995.15 / ~$13,021
- **Gross long exposure:** ~70.1% | **Net exposure:** ~70.1% | **Cash:** ~29.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market closes in:** ~3 hours 4 minutes (4:00 PM ET)

## Position Instructions — Valid until next hourly update at 1:35 PM ET

### Immediate Actions (12:56 PM ET)
- **HOLD ALL CURRENT POSITIONS.** No discretionary sells.
  - QQQ 6 shares — HOLD. Do not sell or add.
  - GOOG 3 shares — HOLD. Do not sell or add.
  - VOO 2 shares — HOLD. Do not sell or add.
  - NVDA 1 share — HOLD. Do not sell (avoid daytrade) and do not add.

### Conditional Buy (only if condition met)
- **SOXX:** If SOXX price is at or above $522.50 with steady tape (no sharp reversal): BUY 1 share limit $523.50. Rationale: Diversified semi exposure; NVDA earnings confirm AI demand; recovering from $515 intraday low. If condition not met, WAIT.

### Holds (no action until next hourly)
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~42.7%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.6%, within 15% cap. Adding 1 share would breach 15% cap (~15.3%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%).
- **HOLD NVDA 1 — DO NOT SELL OR ADD.** Weight ~2.2%. Just bought today at 9:40 AM ET. Selling today = daytrade. Do not add more today.
- **NO AVGO / NO META — DO NOT BUY.** Code-level symbol ban active in `memory/.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / NO HOOD / NO SHLD / NO ARKX / NO EIS / NO QTUM / NO GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update)
- **NO discretionary buys** without explicit hourly authorization, except the SOXX conditional above.
- **No same-day reversals.** NVDA was bought today — DO NOT SELL NVDA today.
- **No new short sales** under any circumstances.
- **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA** — already added 1 share this cycle. Wait for hourly update before any additional NVDA order.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["AVGO", "META"]`.
- BUY orders for banned symbols are REJECTED by both `alpaca_cli.ts` and `alpaca_client_factory.ts` unless explicitly listed in `allowed`.
- Hourly strategist must remove a symbol from `bannedSymbols` to authorize re-entry.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **EIS:** Very low trade count / volume
- **SHLD:** Very low trade count / volume
- **QTUM:** Very low trade count / volume
- **ARKX:** Low trade count / volume
- **GLD:** Low trade count / volume
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-21 12:56 PM ET
- **Market status:** OPEN until 16:00 ET. ~3 hours remaining.
- **Holdings confirmed:** QQQ 6 ($4,282.65 @ ~713.78), GOOG 3 ($1,159.90 @ ~386.63), VOO 2 ($1,364.63 @ ~682.32), NVDA 1 ($221.12 @ ~221.12).
- **Event detector:** NONE — no broad market or position-level events.
- **Order executed this cycle:** NONE (hourly strategist holding).
- **Expected action:** Hold all current positions. Conditional SOXX buy if price ≥ $522.50. No other orders authorized until next hourly update (1:35 PM ET).

HARD_LOCK LIFTED
