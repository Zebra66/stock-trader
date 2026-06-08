# Tactical Todo — Updated 2026-06-08 18:41Z (Monday 2:41 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market OPEN until 16:00 ET (~78 mins).*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~67.9%)
- **Live book:** QQQ 6, VOO 2, SOXX 2
- **Account equity / cash / buying power:** ~$9,996 / ~$3,204 / ~$31,836
- **Gross long exposure:** ~67.9% | **Net exposure:** ~67.9% | **Cash:** ~32.1%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE.
- **Market:** OPEN until 16:00 ET. Next tactical: 18:50Z, 19:10Z, 19:20Z, 19:30Z, 19:40Z, 19:50Z. Next hourly: 19:35Z (3:35 PM ET).
- **Macro context:** Monday rebound after Friday risk-off. SPY +0.49%, QQQ +1.0%. Semis diverging sharply: SOXX +10.5%, NVDA –2.9%, AVGO –8.1%. Iran pauses strikes. Event detector 18:40Z classification: NONE.

## Position Instructions — Mon Jun 8 (:50, :10, :20, :30, :40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.0%, at 45% cap. Cannot add 7th share (would be ~50.2%).
- Unrealized +1.82% from avg $705.45. Today +1.0%.
- Limit buy 1 @ $719.50 filled at 16:29Z. **Do NOT sell QQQ today** (same-day round-trip prohibited on share bought today).

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, at 20% non-QQQ ETF cap. 3rd share would breach ~20.4%.
- Unrealized +0.37% from avg $678.70. Today +0.49%.
- Prior VOO add filled today at $683.48. **Do NOT sell VOO today** (same-day round-trip prohibited on the share bought today).

### SOXX — HOLD 2 — DO NOT SELL OR ADD
- **LIMIT BUY 1 SOXX @ $570.00 — FILLED.** Order ID: 9375e32b-fde8-499d-adc7-dc7feb8e9f64.
- Weight ~11.4% of equity. Within 20% ETF cap.
- Current price ~$569.83. Second share entered at ~$570.00, now slightly underwater.
- **Do NOT sell SOXX today** (same-day round-trip prohibited on both shares bought today at 17:10Z and ~19:10Z–19:20Z).
- Stop on new share: $565.00. Risk ~$5 = 0.05% equity.
- **Do NOT add to SOXX.** Already at 2 shares (~11.4%). 3rd share would approach ~17.1% (still within cap, but no hourly authorization).

### NVDA — DO NOT BUY — DO NOT RE-BUY TODAY
- Price ~$208.91, below $210 reclaim threshold. Re-entry ONLY on $210 reclaim with volume.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it reclaims $210.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Post-earnings crash continues. ~$395.40. Down –8.1% today, –14% 1W.
- Hourly explicitly does NOT authorize re-entry today.
- Re-evaluate at next hourly only if it finds support above $400.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$361.59. Down –8.9% today.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly explicitly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - QQQ share bought at 16:29Z — DO NOT SELL QQQ today.
  - VOO share bought at 15:29Z — DO NOT SELL VOO today.
  - SOXX share bought at 17:10Z — DO NOT SELL SOXX today.
  - SOXX second share bought at ~19:10Z–19:20Z — DO NOT SELL SOXX today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
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
- **Pre-computed caps this cycle:** QQQ max 6 shares (~42.9%, already at cap); VOO max 2 shares (~13.6%, already at cap); SOXX max 3 shares (~17.1%); NVDA max 7 shares (~14.5%).

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **VOO:** Thin relative to SPY. Use limit orders only.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. ~~SOXX 1 share — limit $570.00 (FILLED at ~19:10Z–19:20Z).~~
2. **NVDA 1 share — limit $210.50 (NOT placed).** Third priority, breakout confirmation. Do NOT place unless price reclaims $210.

## Current Book
- QQQ 6 (~42.9%), VOO 2 (~13.6%), SOXX 2 (~11.4%)
- Cash: ~$3,204 (~32.1%)
- Gross exposure: ~67.9%

## Expected Book — Current
- QQQ 6 (~42.9%), VOO 2 (~13.6%), SOXX 2 (~11.4%)
- Cash: ~$3,204 (~32.1%)
- Gross exposure: ~67.9%

## Next Hourly Preview — 19:35Z (3:35 PM ET)
- SOXX filled at $570. Book now at 67.9% gross. No further action needed on SOXX.
- Monitor NVDA for $210 reclaim (currently $207.77).
- Evaluate if any last-hour opportunities emerge.
- Exposure target met; hourly should assess whether to hold cash or deploy elsewhere.
