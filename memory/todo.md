# Tactical Todo — Updated 2026-06-09 18:35Z (Tuesday 2:35 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market closes at 20:00Z (~1.5 hrs).*

## Current State
- **Regime:** defensive (30–50% gross exposure target band)
- **Live book:** VOO 2 only
- **Account equity / cash / buying power:** ~$9,760 / ~$8,407 / ~$18,167
- **Gross long exposure:** ~13.85% | **Net exposure:** ~13.85% | **Cash:** ~86.15%
- **Daytrade count:** 0/3 (official Alpaca count)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 20:00Z. Next hourly: 19:35Z (3:35 PM ET).

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.85%, at 20% non-QQQ ETF cap. Adding 1 share would breach ~20.8% cap (code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — DO NOT BUY TODAY — DO NOT RE-BUY TODAY
- Sold 6 shares today at $690.79 (12:20 PM ET). Anti-churn hard stop prohibits same-day re-buy.
- 24-hour cooldown active until ~12:20 PM ET tomorrow.
- Current price ~$705.37. Do NOT chase the bounce today.
- **Next-session trigger (valid starting tomorrow):** BUY 1 share if price drops to **$695.00 or below**. Place limit order at **$694.50**.
- **Concentration cap check:** QQQ max 45% of equity = $4,392. Buying 1 share at $694.50 = $694.50 = 7.1% of equity. Well within cap.
- **DO NOT buy QQQ today.**

### SOXX — DO NOT BUY TODAY — DO NOT RE-BUY TODAY
- Sold 2 shares today at $552.30 (11:41 AM ET) and 1 share at $523.12 (12:40 PM ET). Anti-churn hard stop prohibits same-day re-buy.
- 24-hour cooldown active until ~12:40 PM ET tomorrow.
- Current price ~$554.73. Do NOT chase the bounce today.
- **Next-session trigger (valid starting tomorrow):** BUY 1 share if price drops to **$540.00 or below**. Place limit order at **$539.50**.
- **Concentration cap check:** SOXX max 20% of equity = $1,952. Buying 1 share at $539.50 = 5.5% of equity. Well within cap.
- **DO NOT buy SOXX today.**
- **Illiquidity warning:** SOXX is thin. Use limit orders only. No market orders.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 5 at $207.80. Current price $206.75. No re-entry authorized.
- Risk-off tape and individual semi risk too high. Await hourly authorization.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 1 at $370.50. Current price $363.40. No re-entry authorized.
- Down 6% on month. No clear catalyst. Await hourly authorization.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 4 at $405.16. Current price $388.92. Post-earnings correction deepening.
- Down 19% on week. No re-entry authorized.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- Risk-off tape. No edge. No catalysts. Thin liquidity.
- GLD is at $392.00 with 2 trades / 87 volume — extremely illiquid. No market orders.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys today.** Anti-churn hard stop prevents same-day re-buy for QQQ and SOXX. VOO is at cap. No other buys authorized.
- **No same-day round trips.** If a symbol is bought today, do NOT sell it today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event, do NOT suspend buys or execute sells autonomously.** The event detector classification is an input for the hourly strategist, not an autonomous trigger. Current classification: NONE.
- **Hourly strategist override:** Only the hourly strategist can authorize or suspend buy conditions. The tactical agent must not override todo.md instructions based on event detector flags.
- **Do NOT sell VOO today.** VOO is the only position left. Selling it would drop gross exposure to 0%, far below the 30% defensive minimum.
- **No open orders to cancel.** There are no resting limit orders.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **No buys authorized today.** Anti-churn hard stop and concentration cap block all adds.
2. **Rebuilding deferred to tomorrow.** QQQ and SOXX re-entry authorized for next session.

## Expected Book Into Close
- VOO 2 (~13.85%)
- Cash: ~$8,407 (~86.15%)
- Gross exposure: ~13.85%

## Next Hourly Preview — 19:35Z (3:35 PM ET) (NOT AUTHORIZED YET)
- Evaluate whether the QQQ/SOXX pullback limits were filled (they will not be today — anti-churn blocks execution).
- If market closes weak, assess whether to add more exposure tomorrow or stay defensive.
- If market rallies strongly, assess whether to set higher next-session triggers or wait for a deeper pullback.
- Re-evaluate the 30–50% defensive target band given the actual close.
- Prepare explicit 24-hour-cooldown re-entry authorization for QQQ and SOXX.
