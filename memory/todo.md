# Tactical Todo — Updated 2026-06-08 14:35Z (Monday 10:35 AM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** neutral (50–70% band, currently at ~42.6%)
- **Live book:** QQQ 5, VOO 1
- **Account equity / cash / buying power:** ~$10,025 / ~$5,750 / ~$34,969
- **Gross long exposure:** ~42.6% | **Net exposure:** ~42.6% | **Cash:** ~57.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** VOO buy limit 1 @ $683.50 (placed 14:50Z)
- **Market:** OPEN until 16:00 ET. Next hourly: 15:35Z (11:35 AM ET).
- **Macro context:** Monday rebound after Friday risk-off. SPY +0.73%, QQQ +1.93%, semis rebounding (SOXX +5%+, AVGO +3%+, NVDA +2%+). Mideast tensions easing per Reuters. Event detector classification: NONE.

## Position Instructions — Mon Jun 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 5 — AUTHORIZED ADD 1
- Weight ~35.8%, within 45% cap. Adding 1 share brings QQQ to ~$4,312 = 43.0% (still within 45% cap).
- Unrealized +2.28% from avg $702.64. Today +1.93%.
- **BUY 1 QQQ if price is at or below $720.00 with limit $719.00.** Execute at 14:40Z or 14:50Z tactical run.
- Do NOT sell QQQ today.

### VOO — HOLD 1 — AUTHORIZED ADD 1
- Weight ~6.8%, within 20% non-QQQ ETF cap. Adding 1 share brings VOO to ~$1,366 = 13.6% (within 20% cap).
- Unrealized +1.38% from avg $673.925. Today +0.77%.
- **BUY 1 VOO — ORDER PLACED at limit $683.50.** Order ID: `c1b88336-190c-48c6-86be-5716a8e4c057`. Status: `pending_new`. Awaiting fill.
- Do NOT sell VOO today.

### SOXX — DO NOT BUY — CONDITIONAL ADD 1 (LOWEST PRIORITY)
- **BUY 1 SOXX if ALL of the following are true:** (1) VOO and QQQ add orders are already confirmed filled, AND (2) price is at or below $572.00 with limit $571.50, AND (3) price is above $568.00.
- If SOXX gaps above $572, do NOT chase. Defer to next hourly.
- Do NOT sell SOXX (not held).

### NVDA — DO NOT BUY — DO NOT RE-BUY TODAY
- 24h cooldown from June 5 stop-out EXPIRED. Re-entry requires EXPLICIT hourly authorization.
- Price ~$208.06, below the $210 reclaim threshold. Hourly does NOT authorize re-entry today.
- Re-evaluate at next hourly if it reclaims $210 with volume.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Post-earnings freefall continues. 1W –13.61%. Bounce today is suspect.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$358.86. No re-entry until it reclaims $375 with volume and holds for 30 minutes.
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
- **VOO:** TradeCount 10, Volume 105 at 14:34Z — thin. Use limit orders only.
- **SOXX:** TradeCount 17, Volume 1,090 at 14:34Z — acceptable for limit orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **VOO 1 share — highest priority, lowest risk. Limit $683.50.**
2. **QQQ 1 share — second priority, core growth. Limit $719.00.**
3. **SOXX 1 share — third priority, semi recovery. Limit $571.50. ONLY after VOO+QQQ fills confirmed.**

## Expected Book After All Adds
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 1 (~5.7%)
- Cash: ~$3,749 (~37.4%)
- Gross exposure: ~62.3%

## Next Hourly Preview — 15:35Z (11:35 AM ET)
- Monitor chip-sector breadth (SOXX vs NVDA vs AVGO).
- Evaluate NVDA if it reclaims $210.
- Evaluate AVGO if it finds support above $400.
- Reassess SOXX add if it did not fill at 14:40Z/14:50Z.
- Event detector `priorTimestamp` bug remains — tactical agent should proceed with normal execution using current prices.
