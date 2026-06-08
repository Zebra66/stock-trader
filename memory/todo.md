# Tactical Todo — Updated 2026-06-08 16:10Z (Monday 12:10 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~49.5%)
- **Live book:** QQQ 5, VOO 2
- **Account equity / cash / buying power:** ~$10,032 / ~$5,067 / ~$34,171
- **Gross long exposure:** ~49.5% | **Net exposure:** ~49.5% | **Cash:** ~50.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** QQQ limit buy 1 @ $719.50 (pending_new, ID: d84575d0-889d-462c-99b9-18421eee3c24)
- **Market:** OPEN until 16:00 ET. Next hourly: 16:35Z (12:35 PM ET).
- **Macro context:** Monday rebound after Friday risk-off. SPY +0.63%, QQQ +1.99%, semis rebounding (SOXX +5%+, AVGO +3%+, NVDA +2%+). Mideast tensions easing per Reuters but strikes continue. Event detector classification: NONE.

## Position Instructions — Mon Jun 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 5 — LIMIT BUY 1 PLACED
- Weight ~35.9%, within 45% cap. If filled, 6 shares = ~$4,320 = 43.1% (still within 45% cap).
- Unrealized +2.46% from avg $702.64. Today +1.99%.
- **LIMIT BUY 1 QQQ @ $719.50 PLACED at 16:10Z** (Order ID: d84575d0-889d-462c-99b9-18421eee3c24). Status: pending_new. Awaiting fill.
- **Do NOT place duplicate QQQ order.** Next tactical run should check fill status before any new action.
- Do NOT sell QQQ today.

### VOO — HOLD 2 — NO FURTHER ADDS
- Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 more share would breach 20% cap (3 shares = ~20.4%).
- Unrealized +0.55% from avg $678.70. Today +0.65%.
- Prior VOO add filled today at $683.48. Do NOT sell VOO today (same-day round-trip prohibited).

### SOXX — DO NOT BUY — CONDITIONAL ADD 1 (LOWEST PRIORITY)
- **BUY 1 SOXX ONLY if ALL of the following are true:** (1) QQQ add order is already confirmed filled, AND (2) price drops to $572.50 or below with limit $572.50.
- If SOXX stays above $572.50, do NOT chase. Defer to next hourly.
- Rationale: SOXX is extended after +$14 intraday gap-up ($565 → $579). Do not buy into gap-up exhaustion.
- Do NOT sell SOXX (not held).

### NVDA — DO NOT BUY — DO NOT RE-BUY TODAY
- 24h cooldown from June 5 stop-out EXPIRED. Re-entry requires EXPLICIT hourly authorization.
- Price ~$207.43, below the $210 reclaim threshold. Hourly does NOT authorize re-entry today.
- Re-evaluate at next hourly if it reclaims $210 with volume.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Post-earnings freefall continues. 1W –13.55%. Bounce today is suspect after gap-up open.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$359.80. No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly explicitly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Anti-churn critical:** Adding to a position that was bought the same session is a same-day round trip and is prohibited.
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, you MUST use either (a) the EXACT limit price specified in the hourly note, or (b) a market order. You may NOT place a limit sell ABOVE the current market price on a stopped position.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order. If an unauthorized open order exists for the same symbol, cancel it immediately before proceeding.
- **Exposure check:** After this buy, will gross exposure exceed 90%? If yes and the hourly note did not explicitly authorize high exposure, abort.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** With 0/3 daytrades, we have full flexibility, but conserve daytrades for true emergencies. Do NOT consume a daytrade on a small trim or speculative exit.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **Pre-computed caps this cycle:** QQQ max 6 shares (~43.0%); VOO max 2 shares (~13.6%, already at cap); SOXX max 3 shares (~17.2%).

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **VOO:** 6 trades, 244 vol at 15:31Z — thin. Use limit orders only.
- **SOXX:** 11 trades, 1,021 vol at 15:34Z — acceptable for limit orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **QQQ 1 share — highest priority, core growth. Limit $719.50.**
2. **SOXX 1 share — third priority, semi recovery. Limit $572.50. ONLY if QQQ fill confirmed AND SOXX price drops to $572.50 or below. DO NOT CHASE.**

## Expected Book After All Adds
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 1 (~5.7%)
- Cash: ~$3,780 (~37.7%)
- Gross exposure: ~62.3%

## If Only QQQ Adds (Most Likely)
- QQQ 6 (~43.0%), VOO 2 (~13.6%)
- Cash: ~$4,352 (~43.4%)
- Gross exposure: ~56.6%

## Next Hourly Preview — 16:35Z (12:35 PM ET)
- Monitor chip-sector breadth (SOXX vs NVDA vs AVGO).
- Evaluate NVDA if it reclaims $210.
- Evaluate AVGO if it finds support above $400.
- Reassess SOXX add if it did not fill at 15:40Z/15:50Z.
- Event detector `priorTimestamp` bug — tactical agent should proceed with normal execution using current prices.
