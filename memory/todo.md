# Tactical Todo — Updated 2026-06-10 14:35Z (Wednesday 10:35 AM ET)
*Market OPEN. Event detector: MINOR. No open orders. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (30–50% gross exposure target band, intent to rebuild systematically)
- **Live book:** VOO 2 only
- **Account equity / cash / buying power:** ~$9,764 / ~$8,407 / ~$18,170
- **Gross long exposure:** ~13.89% | **Net exposure:** ~13.89% | **Cash:** ~86.11%
- **Daytrade count:** 0/3 (official Alpaca count)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 20:00Z. Next hourly: 15:35Z Jun 10 (11:35 AM ET).

## Position Instructions — Wed Jun 10 (:40, :50 Tactical Runs)

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.89%, at 20% non-QQQ ETF cap. Adding 1 share at current price ($678.31) would breach cap (20.7% of equity = code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — DO NOT BUY UNTIL 16:20Z — DO NOT RE-BUY TODAY BEFORE 16:20Z
- Sold 6 shares yesterday at $690.79 (16:20Z / 12:20 PM ET). Anti-churn hard stop prohibits same-day re-buy.
- **24-hour cooldown active until 16:20Z Jun 10 (12:20 PM ET).**
- Current price ~$711.08. Do NOT chase the rally today.
- **Next-session trigger:** BUY **2 shares** if price drops to **$705.00 or below**. Place limit order at **$704.50**.
  - **VALID ONLY AFTER 16:20Z Jun 10 (12:20 PM ET).**
  - **DO NOT execute this trigger before 16:20Z Jun 10.**
  - **Stop loss:** If QQQ falls below $680.00 after fill, **SELL all QQQ shares at market** on next tactical run. Protect capital.
- **Concentration cap check:** QQQ max 45% of equity = $4,394. Buying 2 shares at $704.50 = $1,409 = 14.4% of equity. Well within cap.
- **DO NOT buy QQQ before 16:20Z today.**

### SOXX — DO NOT BUY UNTIL 16:40Z — DO NOT RE-BUY TODAY BEFORE 16:40Z
- Sold 2 shares yesterday at $552.30 (15:41Z / 11:41 AM ET) and 1 share at $523.12 (16:40Z / 12:40 PM ET). Anti-churn hard stop prohibits same-day re-buy.
- **24-hour cooldown active until 16:40Z Jun 10 (12:40 PM ET).**
- Current price ~$571.80. Do NOT chase the rally today.
- **Next-session trigger:** BUY **1 share** if price drops to **$565.00 or below**. Place limit order at **$564.50**.
  - **VALID ONLY AFTER 16:40Z Jun 10 (12:40 PM ET).**
  - **DO NOT execute this trigger before 16:40Z Jun 10.**
  - **Stop loss:** If SOXX falls below $545.00 after fill, **SELL all SOXX shares at market** on next tactical run. Protect capital.
- **Concentration cap check:** SOXX max 20% of equity = $1,953. Buying 1 share at $564.50 = 5.8% of equity. Well within cap.
- **DO NOT buy SOXX before 16:40Z today.**
- **Illiquidity warning:** SOXX is thin. Use limit orders only. No market orders.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 5 at $207.80. Current price $206.74. No re-entry authorized.
- Risk-off tape and individual semi risk too high. Await hourly authorization.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 1 at $370.50. Current price $364.34. No re-entry authorized.
- Down 5.9% on month. No clear catalyst. Await hourly authorization.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 4 at $405.16. Current price $378.73. Post-earnings correction deepening.
- Down 21% on week. No re-entry authorized.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- Risk-off tape. No edge. No catalysts. Thin liquidity.
- GLD trade count 17, volume 1251 — improved but still thin. Limit orders only if ever authorized.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys before 16:20Z.** Anti-churn hard stop prevents QQQ/SOXX re-buy until their cooldowns expire. VOO is at cap. No other buys authorized.
- **No same-day round trips.** If a symbol is bought today, do NOT sell it today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event, do NOT suspend buys or execute sells autonomously.** The event detector classification is an input for the hourly strategist, not an autonomous trigger. Current classification: MINOR.
- **Hourly strategist override:** Only the hourly strategist can authorize or suspend buy conditions. The tactical agent must not override todo.md instructions based on event detector flags.
- **Do NOT sell VOO today.** VOO is the only position left. Selling it would drop gross exposure to 0%, far below the 30% minimum.
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
1. **No buys authorized until 16:20Z.** Anti-churn hard stop and concentration cap block all adds until then.
2. **QQQ limit buy 2 shares at $704.50** (valid after 16:20Z Jun 10). Target: 14.4% of equity.
3. **SOXX limit buy 1 share at $564.50** (valid after 16:40Z Jun 10). Target: 5.8% of equity.
4. **Rebuild target:** Gross exposure 30–35% by end of day. Requires ~$1,553 in new buys.
5. **If both limit orders fill:** VOO 2 + QQQ 2 + SOXX 1 = ~33.9% gross. Within 30–50% target.

## Expected Book
- VOO 2 (~13.89%)
- Cash: ~$8,407 (~86.11%)
- Gross exposure: ~13.89%
- If both limit buys fill: VOO 2 + QQQ 2 + SOXX 1 = ~33.9% gross. Cash ~$5,434.
