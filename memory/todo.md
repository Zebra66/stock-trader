# Tactical Todo — Updated 2026-06-08 13:35Z (Monday 9:35 AM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** neutral (50–70% band, currently at ~42.6%)
- **Live book:** QQQ 5, VOO 1
- **Account equity / cash / buying power:** ~$10,017 / ~$5,750 / ~$34,949
- **Gross long exposure:** ~42.6% | **Net exposure:** ~42.6% | **Cash:** ~57.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next hourly: 14:35Z (10:35 AM ET).
- **Macro context:** Monday bounce after Friday risk-off. SPY +0.65%, QQQ +1.64%, semis rebounding (SOXX +5.04%, AVGO +3.18%, NVDA +2.05%). Iran deal optimism continues. No major new catalysts.

## Position Instructions — Mon Jun 8 (:40, :50 Tactical Runs)

### QQQ — HOLD 5 — ADD 1 if condition met
- Weight ~35.8%, within 45% cap. Adding 1 share brings QQQ to ~$4,301 = 42.9% (still within 45% cap).
- Unrealized +2.02% from avg $702.64. Today +1.67%.
- **BUY 1 QQQ if price is below $718.00 with limit $716.50.** Rationale: core growth add on stabilization. If price gaps above $718, do NOT chase; defer to next hourly.
- Do NOT sell QQQ today.

### VOO — HOLD 1 — ADD 1 if condition met
- Weight ~6.8%, within 20% non-QQQ ETF cap. Adding 1 share brings VOO to ~$1,365 = 13.6% (within 20% cap).
- Unrealized +1.29% from avg $673.925. Today +0.68%.
- **BUY 1 VOO if price is below $683.00 with limit $682.50.** Rationale: add broad-market anchor on stability. Lowest-risk deployment today.
- Do NOT sell VOO today.

### SOXX — DO NOT BUY unless condition met
- **BUY 1 SOXX if price is below $566.00 with limit $564.50.** Rationale: semi ETF recovery exposure. Today +5.04%. Limit order only; SOXX is thin.
- If SOXX gaps above $566, do NOT chase. Defer to next hourly.
- Do NOT sell SOXX (not held).

### NVDA — DO NOT BUY — DO NOT RE-BUY TODAY
- 24h cooldown from June 5 stop-out EXPIRED. Re-entry requires EXPLICIT hourly authorization.
- Price ~$209.30, below the $210 reclaim threshold. Hourly does NOT authorize re-entry today.
- Re-evaluate at next hourly if it reclaims $210 with volume.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Post-earnings freefall continues. 1W –13.47%. +3.18% bounce today is suspect.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$361.43. –0.89% today.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
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
- **VOO:** TradeCount 13, Volume 186 at 13:34Z — thin. Use limit orders only.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **VOO 1 share** — highest priority, lowest risk. Limit $682.50.
2. **QQQ 1 share** — second priority, core growth. Limit $716.50.
3. **SOXX 1 share** — third priority, semi recovery. Limit $564.50.

## Expected Book After All Adds
- QQQ 6 (~42.9%), VOO 2 (~13.6%), SOXX 1 (~5.7%)
- Cash: ~$3,784 (~37.8%)
- Gross exposure: ~62.2%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Reassess QQQ, VOO, SOXX adds if not yet filled.
- Evaluate NVDA if it reclaims $210.
- Evaluate AVGO if it finds support above $400.
- Monitor chip-sector breadth (SOXX vs NVDA vs AVGO).
- Event detector `priorTimestamp: null` bug remains — tactical agent should proceed with normal execution using current prices.
