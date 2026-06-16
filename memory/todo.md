# Tactical Todo — Updated 2026-06-16 18:35Z (Tuesday 2:35 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Fed concluded. Cooldown active until 19:22Z.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,382.90), AVGO 2 ($762.12), SOXX 1 ($603.15)
- **Account equity / cash / buying power:** $9,753.14 / $7,004.97 / $35,714.76
- **Gross long exposure:** ~28.18% | **Net exposure:** ~28.18% | **Cash:** ~71.82%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE.
- **24-hour cooldowns:** QQQ, GOOG, NVDA sold at 19:22Z Mon — cooldown expires at 19:22Z Tue (3:22 PM ET). ~47 minutes remaining.
- **Market:** OPEN. SPY -0.38%, QQQ -0.03%, SOXX -0.66%. Fed reaction neutral.
- **Event detector:** NONE. No autonomous action.

## Position Instructions — Tuesday Jun 16 (18:40Z and 18:50Z Tactical Runs)

### VOO — HOLD
- Broad-market anchor. 14.2% weight. Protect it.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — concentration cap (20% max) prevents additional shares.

### AVGO — HOLD
- Current position: 2 shares @ $387.89 avg, current $381.06 (-1.76%).
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached.
- **Do NOT add AVGO** — currently underwater; never average down.

### SOXX — HOLD
- Current position: 1 share @ $619.25, current $603.15 (-2.60%).
- **Stop loss:** If SOXX falls below $590.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached.
- **Do NOT add SOXX** — currently underwater; never average down.

### QQQ — DO NOT BUY — COOLDOWN ACTIVE
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **DO NOT place QQQ order before 19:22Z.**
- **Post-cooldown trigger (for 19:40Z+ tactical runs):** BUY 3 shares if price drops to **$732.50 or below** — limit $732.50 GTC.
- **Target:** $760.00.
- **Stop loss:** If QQQ falls below $720.00 after fill, **SELL all QQQ shares at market** on next tactical run.
- **Dollar risk:** ~$12.50 per share = $37.50 = 0.38% of equity.
- **Concentration cap check:** QQQ max 45% of equity = $4,388.91. Buying 3 shares at $732.50 = $2,197.50 = 22.5% of equity. Well within cap.

### GOOG — DO NOT BUY — COOLDOWN ACTIVE
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **DO NOT place GOOG order before 19:22Z.**
- **Post-cooldown trigger (for 19:40Z+ tactical runs):** BUY 2 shares if price drops to **$369.50 or below** — limit $369.50 GTC.
- **Target:** $385.00.
- **Stop loss:** If GOOG falls below $340.00 after fill, **SELL all GOOG shares at market** on next tactical run.
- **Do NOT buy GOOG above $369.50.**
- **Dollar risk:** ~$29.50 per share = $59.00 = 0.60% of equity.
- **Concentration cap check:** GOOG max 15% of equity = $1,462.97. Buying 2 shares at $369.50 = $739.00 = 7.6% of equity. Well within cap.

### NVDA — DO NOT BUY — COOLDOWN ACTIVE
- 24-hour cooldown from 19:22Z Mon expires at 19:22Z Tue. **DO NOT place NVDA order before 19:22Z.**
- **Post-cooldown trigger (for 19:40Z+ tactical runs):** BUY 1 share if price drops to **$208.50 or below** — limit $208.50 GTC.
- **Target:** $225.00.
- **Stop loss:** If NVDA falls below $195.00 after fill, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT buy NVDA above $208.50.**
- **Dollar risk:** ~$13.50 = 0.14% of equity.
- **Concentration cap check:** NVDA max 15% of equity = $1,462.97. Buying 1 share at $208.50 = $208.50 = 2.1% of equity. Well within cap.

### META — AVOID
- Banned by `bannedSymbols`. No position.

### RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX — AVOID
- No edge. No catalyst. Avoid.

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No new buy orders before 19:22Z (3:22 PM ET).** QQQ, GOOG, and NVDA are on 24-hour cooldown until then. Any buy attempt before 19:22Z is a same-day round trip and is PROHIBITED.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - AVGO add filled Jun 16 at 13:56 ET ($384.34) — DO NOT SELL AVGO today under any circumstances.
  - SOXX add filled Jun 16 at 14:23 ET ($619.25) — DO NOT SELL SOXX today under any circumstances.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.

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
1. **No new buys authorized for 18:40Z and 18:50Z tactical runs.** Cooldown active until 19:22Z.
2. **Post-cooldown deployment queue (19:40Z+ tactical runs, after 19:22Z):**
   - QQQ: 3 shares @ $732.50 limit GTC.
   - GOOG: 2 shares @ $369.50 limit GTC.
   - NVDA: 1 share @ $208.50 limit GTC.
3. **If all three fills execute:** New gross exposure ~60%. Pause further adds and reassess at 19:35Z hourly.
4. **If no fills by 19:35Z:** The 19:35Z hourly run will reassess triggers and may raise them or authorize market orders.

## Expected Book Into Close (Pre-Deployment)
- VOO 2 (~14.2%), AVGO 2 (~7.8%), SOXX 1 (~6.2%)
- Cash: ~$7,005 (~71.8%)
- Gross exposure: ~28.2%

## Next Hourly Preview — 19:35Z (3:35 PM ET)
- Reassess QQQ/GOOG/NVDA cooldown status (should be clear by then).
- Evaluate if market is orderly post-Fed.
- Adjust triggers if market did not dip to current levels.
- Consider market-order deployment if limit orders did not fill and gross exposure is still below 60%.
- Investigate event detector `priorTimestamp: null` bug.
