# Tactical Todo — Updated 2026-06-10 19:35Z (Wednesday 3:35 PM ET)
*Market OPEN. ~25 minutes to close. Event detector: NONE. No open orders. Execute authorized orders only. CRITICAL: Verify git status on every run — working tree corruption risk.*

## Current State
- **Regime:** defensive (30–50% gross exposure target band, intent to hold cash until stabilization)
- **Live book:** VOO 2 only
- **Account equity / cash / buying power:** ~$9,743 / ~$8,407 / ~$18,155
- **Gross long exposure:** ~13.73% | **Net exposure:** ~13.73% | **Cash:** ~86.27%
- **Daytrade count:** 0/3 (official Alpaca count)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 20:00Z. Next hourly: Thu Jun 11 13:35Z (9:35 AM ET). ~18 hours to next hourly.
- **Loss streak:** 3+ consecutive realized losses. Per trading-best-practices skill, reduce new-entry size by 50% and tighten confirmation.

## Position Instructions — Wed Jun 10 (:40, :50 Tactical Runs) and Thu Jun 11

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.73%, at 20% non-QQQ ETF cap. Adding 1 share at current price ($668) would breach cap (20.5% of equity = code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — 24-HOUR COOLDOWN EXPIRED — BUY ON DIP (REDUCED SIZE)
- Sold 6 shares yesterday at $690.79 (16:20Z / 12:20 PM ET). **24-hour cooldown EXPIRED.**
- Current price ~$695.54. Do NOT chase the dip. The market is in a risk-off sell-off on Iran escalation and CPI >4%.
- **Trigger:** BUY **2 shares** if price drops to **$690.00 or below**. Place limit order at **$689.50**.
  - **Stop loss:** If QQQ falls below $665.00 after fill, **SELL all QQQ shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 3–4 shares to 2 shares due to loss-streak sizing rule. Risk = $50 (0.51% of equity). Well below 2% max per trade.
- **Concentration cap check:** QQQ max 45% of equity = $4,385. Buying 2 shares at $689.50 = $1,379 = 14.1% of equity. Well within cap.
- **DO NOT buy QQQ above $690.00.** Buying back above our prior sell price ($690.79) is poor execution.

### SOXX — 24-HOUR COOLDOWN EXPIRED — BUY ON DEEP DIP (REDUCED SIZE)
- Sold 2 shares yesterday at $552.30 (15:41Z / 11:41 AM ET) and 1 share at $523.12 (16:40Z / 12:40 PM ET). Anti-churn hard stop prohibited same-day re-buy.
- **24-hour cooldown EXPIRED.**
- Current price ~$544.55. Do NOT chase the dip. SOXX is the most volatile in our universe and is in a sharp decline (-11.55% on week).
- **Trigger:** BUY **1 share** if price drops to **$523.00 or below**. Place limit order at **$522.50**.
  - **Stop loss:** If SOXX falls below $505.00 after fill, **SELL all SOXX shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 2 shares to 1 share due to loss-streak sizing rule. Risk = $18 (0.18% of equity). Well below 2% max per trade.
- **Concentration cap check:** SOXX max 20% of equity = $1,949. Buying 1 share at $522.50 = 5.4% of equity. Well within cap.
- **DO NOT buy SOXX above $523.00.** Buying back above our lowest sell price ($523.12) is poor execution.
- **Illiquidity warning:** SOXX is thin (15 trades, 829 vol at 19:34Z). Use limit orders only. No market orders.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 5 at $207.80. Current price $200.74. No re-entry authorized.
- Risk-off tape and individual semi risk too high. Await hourly authorization.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 1 at $370.50. Current price $354.32. No re-entry authorized.
- Down 8.39% on month. No clear catalyst. Await hourly authorization.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 4 at $405.16. Current price $373.72. Post-earnings correction deepening.
- Down 22% on week. No re-entry authorized.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- Risk-off tape. No edge. No catalysts. Thin liquidity.
- GLD trade count 6, volume 506 at 19:34Z — thin. Limit orders only if ever authorized.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys above trigger prices.** Anti-churn hard stop and poor-execution rule block all adds above $690 for QQQ and $523 for SOXX.
- **No same-day round trips.** If a symbol is bought today, do NOT sell it today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event, do NOT suspend buys or execute sells autonomously.** The event detector classification is an input for the hourly strategist, not an autonomous trigger. Current classification: NONE.
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
- **SOXX:** Thin (15 trades, 829 vol at 19:34Z). Limit orders only.
- **GLD:** Thin (6 trades, 506 vol at 19:34Z). Limit orders only, or defer.
- **EIS / SHLD / QTUM / ARKX:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue (Final 25 Minutes + Tomorrow)
1. **QQQ limit buy 2 shares at $689.50** (cooldown expired, trigger valid now). Target: 14.1% of equity. Priority: HIGHEST.
2. **SOXX limit buy 1 share at $522.50** (cooldown expired, trigger valid now). Target: 5.4% of equity. Priority: MEDIUM.
3. **Rebuild target:** Gross exposure 30–35% by end of day IF market stabilizes and triggers hit. Requires ~$1,500 in new buys.
4. **If both limit orders fill:** VOO 2 + QQQ 2 + SOXX 1 = ~33.3% gross. Cash ~$5,405.
5. **If no triggers hit:** Hold VOO 2. Maintain cash. Reassess on next hourly run (Thu 9:35 AM ET).

## Expected Book
- VOO 2 (~13.73%)
- Cash: ~$8,407 (~86.27%)
- Gross exposure: ~13.73%
- If QQQ limit buy fills: VOO 2 + QQQ 2 = ~27.9% gross. Cash ~$7,028.
- If both limit buys fill: VOO 2 + QQQ 2 + SOXX 1 = ~33.3% gross. Cash ~$5,405.
