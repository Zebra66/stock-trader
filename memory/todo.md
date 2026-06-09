# Tactical Todo — Updated 2026-06-09 17:35Z (Tuesday 1:35 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market closes at 16:00 ET (~2.5 hrs).*

## Current State
- **Regime:** defensive (30–50% gross exposure target band)
- **Live book:** VOO 2 only
- **Account equity / cash / buying power:** ~$9,752 / ~$8,407 / ~$18,159
- **Gross long exposure:** ~13.8% | **Net exposure:** ~13.8% | **Cash:** ~86.2%
- **Daytrade count:** 0/3 (official Alpaca count)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next hourly: 15:35Z (11:35 AM ET next run? No — current 17:35Z = 1:35 PM ET). Next hourly: 18:35Z (2:35 PM ET).

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.8%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.7% cap (code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — BUY 1 ON PULLBACK — DO NOT CHASE
- Current price ~$700.35. We sold 6 shares at $690.79 earlier today. Do NOT chase the bounce.
- **Authorized buy:** BUY 1 share if price drops to **$695.00 or below**. Place limit order at **$694.50**.
- Rationale: Rebuild core liquid growth exposure at a better level than the panic sell.
- **Concentration cap check:** QQQ max 45% of equity = $4,388. Buying 1 share at $694.50 = $694.50 = 7.1% of equity. Well within cap.
- **If price does not hit $695.00 by 15:30 ET (3:30 PM ET),** cancel the resting order and await next hourly reassessment.
- **DO NOT buy QQQ at market price or above $695.00.**

### SOXX — BUY 1 ON DEEPER PULLBACK — DO NOT CHASE
- Current price ~$546.59. We sold 2 shares at $552.30 and 1 share at $523.12 today. Do NOT chase the bounce.
- **Authorized buy:** BUY 1 share if price drops to **$535.00 or below**. Place limit order at **$534.50**.
- Rationale: Rebuild chip exposure on a deeper pullback, not a relief rally.
- **Concentration cap check:** SOXX max 20% of equity = $1,950. Buying 1 share at $534.50 = 5.5% of equity. Well within cap.
- **If price does not hit $535.00 by 15:30 ET (3:30 PM ET),** cancel the resting order and await next hourly reassessment.
- **DO NOT buy SOXX at market price or above $535.00.**
- **Illiquidity warning:** SOXX is thin. Use limit orders only. No market orders.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 5 at $207.80. Current price $204.40. No re-entry authorized.
- Risk-off tape and individual semi risk too high. Await hourly authorization.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 1 at $370.50. Current price $360.55. No re-entry authorized.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 4 at $405.16. Current price $383.19. Post-earnings correction. No re-entry authorized.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- Risk-off tape. No edge. No catalysts. Thin liquidity.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys above authorized limit prices.** If a symbol is not at or below the limit price in this todo, do NOT buy it.
- **No same-day round trips.** If a symbol is bought today, do NOT sell it today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event, do NOT suspend buys or execute sells autonomously.** The event detector classification is an input for the hourly strategist, not an autonomous trigger. The 17:36Z event detector flagged CRITICAL due to bounce magnitude. This is NOT a crash. Do NOT sell VOO or suspend buys based on this flag.
- **Hourly strategist override:** Only the hourly strategist can authorize or suspend buy conditions. The tactical agent must not override todo.md instructions based on event detector flags.
- **Do NOT sell VOO today.** VOO is the only position left. Selling it would drop gross exposure to 0%, far below the 30% defensive minimum.
- **Cancel stale resting orders by 15:30 ET (3:30 PM ET).** If any limit buy orders are still open and unfilled by 15:30 ET, cancel them to avoid overnight exposure or stale fills.

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
1. **QQQ add** (priority 1): 1 share @ limit $694.50 if price ≤ $695.00.
2. **SOXX add** (priority 2): 1 share @ limit $534.50 if price ≤ $535.00.
3. **No other buys authorized.**

## Expected Book Into Close (if no fills)
- VOO 2 (~13.8%)
- Cash: ~$8,407 (~86.2%)
- Gross exposure: ~13.8%

## Next Hourly Preview — 18:35Z (2:35 PM ET) (NOT AUTHORIZED YET)
- Evaluate whether the QQQ/SOXX pullback limits were filled.
- If market closes weak, assess whether to add more exposure tomorrow or stay defensive.
- If market rallies strongly, assess whether to chase a small QQQ add at close.
- Re-evaluate the 30–50% defensive target band given the actual close.
- No prompt changes expected unless the tactical agent violated these directives.
