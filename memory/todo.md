# Tactical Todo — Updated 2026-06-08 16:35Z (Monday 12:35 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~56.6%)
- **Live book:** QQQ 6, VOO 2
- **Account equity / cash / buying power:** ~$10,027 / ~$4,347 / ~$33,292
- **Gross long exposure:** ~56.6% | **Net exposure:** ~56.6% | **Cash:** ~43.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** SOXX limit buy 1 @ $573.50 (Order ID: 8165d6b7-1c01-4dc0-8cc8-526051e6afb6). Status: pending_new.
- **Market:** OPEN until 16:00 ET. Next tactical: 16:40Z, 16:50Z. Next hourly: 17:35Z (1:35 PM ET).
- **Macro context:** Monday rebound after Friday risk-off. SPY +0.61%, QQQ +2.0%, semis rebounding (SOXX +5.9%, AVGO +3.1%, NVDA +2.2%). Mideast tensions easing per Reuters but strikes continue. Event detector 16:35Z classification: NONE.

## Position Instructions — Mon Jun 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — FILLED AT $719.47
- Weight ~43.0%, at 45% cap. 6 shares = ~$4,315 = 43.0%. **Cannot add 7th share (would be 50.2% > 45%).**
- Unrealized +1.94% from avg $705.45. Today +2.0%.
- **LIMIT BUY 1 QQQ @ $719.50 FILLED at 16:29Z** (Order ID: d84575d0-889d-462c-99b9-18421eee3c24). Filled avg price $719.47.
- **Do NOT sell QQQ today** (same-day round-trip prohibited; share bought today).

### VOO — HOLD 2 — NO FURTHER ADDS
- Weight ~13.6%, at 20% non-QQQ ETF cap. Adding 1 more share would breach 20% cap (3 shares = ~20.4%).
- Unrealized +0.52% from avg $678.70. Today +0.63%.
- Prior VOO add filled today at $683.48. Do NOT sell VOO today (same-day round-trip prohibited on the share bought today).

### SOXX — BUY 1 — LIMIT $573.50
- **BUY 1 SOXX with limit order at $573.50.** Rationale: strongest 3M trend in universe (+70.55%); modest pullback entry after +5.9% gap-up avoids chasing.
- **LIMIT ORDER PLACED 1 SOXX @ $573.50** at 17:10Z (Order ID: 8165d6b7-1c01-4dc0-8cc8-526051e6afb6). Status: pending_new. Day order, expires at 20:00Z.
- Current price ~$573.60 — **above limit.** Wait for pullback to fill. Do NOT use market order.
- After fill: 1 share ~$573.50 = 5.7% of equity (within 20% ETF cap). Gross exposure rises to ~62.4%.
- Stop: $565.00 (today's support area). Risk ~$8.50 = 0.08% of equity.
- **If not filled by 19:55Z (3:55 PM ET):** Cancel order before close to avoid overnight risk.
- Do NOT sell SOXX (not held).

### NVDA — CONDITIONAL BUY 1 — LIMIT $210.50
- **BUY 1 NVDA with limit order at $210.50 ONLY if price reclaims $210 with volume.** This is breakout confirmation, NOT anticipation.
- Current price ~$208.68 — **below $210 reclaim threshold.** Do NOT buy below $210.50.
- Rationale: sector bellwether, CEO commentary bullish, but price must confirm. No anticipation entries.
- After fill (with SOXX filled): 1 share ~$210.50 = 2.1% of equity (within 15% single-stock cap). Gross exposure rises to ~64.5%.
- Stop: $204.00 (recent support). Risk ~$6.50 = 0.06% of equity.
- **If not filled by 15:55Z (3:55 PM ET):** Cancel order before close.
- 24h cooldown from June 5 stop-out EXPIRED. This is a fresh authorized entry.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Post-earnings freefall continues. 1W –14.04%. Bounce today is suspect after gap-up open.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$359.66. No re-entry until it reclaims $375 with volume and holds for 30 minutes.
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
- **Pre-computed caps this cycle:** QQQ max 6 shares (~43.0%, already at cap); VOO max 2 shares (~13.6%, already at cap); SOXX max 3 shares (~17.2%); NVDA max 7 shares (~14.6%).

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **VOO:** 4 trades, 246 vol at 16:34Z — thin. Use limit orders only.
- **SOXX:** 31 trades, 1,804 vol at 16:34Z — acceptable for limit orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **SOXX 1 share — highest priority, strongest trend. Limit $573.50.**
2. **NVDA 1 share — second priority, breakout confirmation. Limit $210.50.**

## Expected Book After All Adds
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 1 (~5.7%), NVDA 1 (~2.1%)
- Cash: ~$3,126 (~31.2%)
- Gross exposure: ~64.5%

## If Only SOXX Adds (Most Likely)
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 1 (~5.7%)
- Cash: ~$3,774 (~37.6%)
- Gross exposure: ~62.4%

## If Neither Adds
- QQQ 6 (~43.0%), VOO 2 (~13.6%)
- Cash: ~$4,347 (~43.4%)
- Gross exposure: ~56.6%

## Next Hourly Preview — 17:35Z (1:35 PM ET)
- Monitor SOXX fill status and price action.
- Monitor NVDA for $210 reclaim.
- Evaluate AVGO if it finds support above $400.
- Reassess chip-sector breadth if any reversal signals appear.
- If gross exposure is still <60% at 17:35Z, consider relaxing SOXX limit or adding another confirmed-trend name.
