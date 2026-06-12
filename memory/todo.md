# Tactical Todo — Updated 2026-06-12 13:35Z (Friday 9:35 AM ET)

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band, intent to deploy on confirmed pullbacks)
- **Live book:** VOO 2 only
- **Account equity / cash / buying power:** ~$9,765 / ~$8,407 / ~$37,430
- **Gross long exposure:** ~13.91% | **Net exposure:** ~13.91% | **Cash:** ~86.09%
- **Daytrade count:** 0/3 (official Alpaca count)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 20:00Z. Next tactical: 13:40Z. Next hourly: 14:35Z (10:35 AM ET).
- **Loss streak:** 3+ consecutive realized losses. Per trading-best-practices skill, reduce new-entry size by 50% and tighten confirmation.
- **Fresh macro risk:** Iran de-escalation continues + cooler core PPI = bullish macro shift. Market consolidated after yesterday's sharp rally. Do not chase.
- **Event detector:** CRITICAL at 14:10Z. SOXX and SMH flagged CRITICAL. Buy suspension ACTIVE for SOXX. QQQ MINOR; no suspension.
- **Autonomous override:** <!-- Autonomous override applied at 2026-06-12T14:10:02.873Z due to CRITICAL event -->
- **Blocker preventing deployment:** All actionable setups in the universe are trading well above their positive-EV entry triggers. QQQ at $713.71 (needs ≤$690 for 2:1 R/R). SOXX at $583.41 (needs ≤$523 for 2:1 R/R). No other symbol in the universe has a confirmed setup with R/R ≥ 2:1. Cash will remain elevated until the market provides a discount or a new positive-EV setup emerges.

## Position Instructions — Fri Jun 12

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.91%, below 20% non-QQQ ETF cap. Adding 1 share at current price ($678.995) would breach cap (20.9% of equity = code-rejected).
- Broad-market anchor. Only position remaining. Protect it.
- **DO NOT SELL VOO today under any circumstances.**

### QQQ — 24-HOUR COOLDOWN EXPIRED — BUY ON DIP (REDUCED SIZE)
- Sold 6 shares on Jun 9 at $690.79 (16:20Z / 12:20 PM ET). **24-hour cooldown EXPIRED.**
- Current price ~$713.71. Market flat today after +2.8% yesterday. Do NOT chase.
- **Trigger:** BUY **2 shares** if price drops to **$690.00 or below**. Place limit order at **$689.50**. MAINTAINED — no change from 18:35Z.
  - **Target:** $735.00 (1.8R from entry). Let winners run; do not sell at breakeven.
  - **Stop loss:** If QQQ falls below $665.00 after fill, **SELL all QQQ shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 3–4 shares to 2 shares due to loss-streak sizing rule. Risk = $49 (0.50% of equity). Well below 2% max per trade.
- **Concentration cap check:** QQQ max 45% of equity = $4,394. Buying 2 shares at $689.50 = $1,379 = 14.1% of equity. Well within cap.
- **DO NOT buy QQQ above $690.00.** Buying back above our prior sell price ($690.79) is poor execution.

### SOXX — 24-HOUR COOLDOWN EXPIRED — BUY ON DEEP DIP (REDUCED SIZE)
- Sold 2 shares on Jun 9 at $552.30 (15:41Z / 11:41 AM ET) and 1 share at $523.12 (16:40Z / 12:40 PM ET). Anti-churn hard stop prohibited same-day re-buy.
- **24-hour cooldown EXPIRED.**
- Current price ~$583.41. Market flat today after +5.9% yesterday. Do NOT chase. SOXX is the most volatile in our universe and is in a sharp decline (–5.14% on week, but bouncing yesterday). Barrons: "AI Rally Keeps Unwinding." Oracle AI spending fears (-12%) add spillover risk.
- **Trigger:** BUY **1 share** if price drops to **$523.00 or below**. Place limit order at **$522.50**. MAINTAINED — no change from 18:35Z. SUSPENDED — CRITICAL event detected at 2026-06-12T14:10:02.873Z.
  - **Target:** $560.00 (2.1R from entry). Let winners run; do not sell at breakeven.
  - **Stop loss:** If SOXX falls below $505.00 after fill, **SELL all SOXX shares at market** on next tactical run. Protect capital.
  - **Rationale:** Reduced from 2 shares to 1 share due to loss-streak sizing rule. Risk = $17.50 (0.18% of equity). Well below 2% max per trade.
- **Concentration cap check:** SOXX max 20% of equity = $1,953. Buying 1 share at $522.50 = 5.4% of equity. Well within cap.
- **DO NOT buy SOXX above $523.00.** Buying back above our lowest sell price ($523.12) is poor execution.
- **Illiquidity warning:** SOXX is thin (21 trades, 1,090 vol at 13:34Z). Use limit orders only. No market orders.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 5 at $207.80. Current price $204.07. No re-entry authorized.
- Risk-off tape and Oracle AI spending fears (-12%) create spillover risk for AI/semis. Await hourly authorization.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 1 at $370.50. Current price $358.56. No re-entry authorized.
- No clear catalyst. Await hourly authorization.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 4 at $405.16. Current price $379.51. Post-earnings correction deepening.
- No re-entry authorized.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- Risk-on tape. No edge. No catalysts. Thin liquidity.
- GLD trade count 10, volume 834 at 13:34Z — thin. Limit orders only, or defer.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No discretionary buys above trigger prices.** Anti-churn hard stop and poor-execution rule block all adds above $690 for QQQ and $523 for SOXX.
- **No same-day round trips.** If a symbol is bought today, do NOT sell it today unless the hourly note explicitly authorizes the exit.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on broad market symbols (SPY, QQQ, SOXX, XLK, SMH), suspend buys and execute protective sells only if stop-loss is breached.** Current classification: CRITICAL (SOXX, SMH). SOXX buy suspended. VOO OK. No protective sells.
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
- **SOXX:** Thin (21 trades, 1,090 vol at 13:34Z). Limit orders only.
- **GLD:** Thin (10 trades, 834 vol at 13:34Z). Limit orders only, or defer.
- **EIS / SHLD / QTUM / ARKX:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **QQQ limit buy 2 shares at $689.50** (RE-AUTHORIZED). Target: 14.1% of equity. Priority: HIGHEST.
2. **SOXX limit buy 1 share at $522.50** (RE-AUTHORIZED). Target: 5.4% of equity. Priority: MEDIUM.
3. **Rebuild target:** Gross exposure 30–35% by end of day IF market stabilizes and triggers hit. Requires ~$1,500 in new buys.
4. **If both limit orders fill:** VOO 2 + QQQ 2 + SOXX 1 = ~33.3% gross. Cash ~$5,406.
5. **If no triggers hit:** Hold VOO 2. Maintain cash. Reassess on next hourly run (14:35Z / 10:35 AM ET).

## Expected Book
- VOO 2 (~13.91%)
- Cash: ~$8,407 (~86.09%)
- Gross exposure: ~13.91%
- If QQQ limit buy fills: VOO 2 + QQQ 2 = ~27.9% gross. Cash ~$7,028.
- If both limit buys fill: VOO 2 + QQQ 2 + SOXX 1 = ~33.3% gross. Cash ~$5,406.
