# Tactical Todo — Updated 2026-06-16 19:37Z (Tuesday 3:37 PM ET)
*HARD_LOCK LIFTED. Market OPEN. Fed concluded. QQQ and NVDA filled. GOOG GTC pending.*

## Current State
- **Regime:** offensive catch-up (60–90% gross exposure target band)
- **HARD_LOCK:** LIFTED — normal execution resumes.
- **Live book:** VOO 2 ($1,380.26), AVGO 2 ($757.92), SOXX 1 ($598.23), QQQ 3 ($2,195.22), NVDA 1 ($208.49)
- **Account equity / cash / buying power:** $9,741.58 / $4,600.62 / $32,058.16
- **Gross long exposure:** ~52.77% | **Net exposure:** ~52.77% | **Cash:** ~47.23%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** GOOG 2 @ $369.50 limit GTC (pending).
- **24-hour cooldowns:** None active. QQQ/GOOG/NVDA cooldown CLEARED at 19:22Z.
- **Market:** OPEN. ~22 minutes until close. SPY ~-0.55%, QQQ ~-1.65%, SOXX ~-4.81%. Semis under pressure.
- **Event detector:** NONE. No autonomous action.

## Position Instructions — Tuesday Jun 16 (19:40Z and 19:50Z Tactical Runs)

### VOO — HOLD
- Broad-market anchor. 14.2% weight. Protect it.
- **DO NOT SELL VOO unless stop breached.**
- **DO NOT ADD VOO** — concentration cap (20% max) prevents additional shares.

### AVGO — HOLD
- Current position: 2 shares @ $387.89 avg, current $378.96 (-2.30%).
- **Stop loss:** If AVGO falls below $365.00, **SELL all AVGO shares at market** on next tactical run.
- **Do NOT sell AVGO today** unless stop is breached. Bought today at 13:56 ET.
- **Do NOT add AVGO** — currently underwater; never average down.

### SOXX — HOLD
- Current position: 1 share @ $619.25, current $598.23 (-3.39%).
- **Stop loss:** If SOXX falls below $590.00, **SELL all SOXX shares at market** on next tactical run.
- **Do NOT sell SOXX today** unless stop is breached. Bought today at 14:23 ET.
- **Do NOT add SOXX** — currently underwater; never average down.

### QQQ — HOLD — FILLED TODAY
- **FILLED:** 3 shares @ $731.96 avg at 19:37Z. Current price $731.74.
- **Stop loss:** If QQQ falls below $720.00, **SELL all QQQ shares at market** on next tactical run.
- **Do NOT sell QQQ today** under any circumstances. Bought today at 19:37Z.
- **Do NOT add QQQ** today. Wait for next hourly authorization.
- **Target:** $760.00.

### NVDA — HOLD — FILLED TODAY
- **FILLED:** 1 share @ $208.47 avg at 19:37Z. Current price $208.49.
- **Stop loss:** If NVDA falls below $195.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** under any circumstances. Bought today at 19:37Z.
- **Do NOT add NVDA** today. Wait for next hourly authorization.
- **Target:** $225.00.

### GOOG — AUTHORIZED BUY — ORDER OPEN
- **Open order:** GTC limit BUY 2 shares @ $369.50. Placed at 19:37Z. Current price $369.72.
- **Do NOT cancel the GOOG order.** Let it sit on the book for tomorrow if not filled today.
- **Stop loss:** If GOOG falls below $340.00 after fill, **SELL all GOOG shares at market** on next tactical run.
- **Do NOT sell GOOG today** if it fills. Bought today would trigger daytrade count.
- **Target:** $385.00.
- **Concentration cap check:** GOOG max 15% of equity = $1,461.24. Buying 2 shares at $369.50 = $739.00 = 7.6% of equity. Well within cap.

### META — AVOID
- Banned by `bannedSymbols`. No position.
- **DO NOT BUY META.**

### RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX — AVOID
- No edge. No catalyst. Avoid.
- **DO NOT BUY RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX.**

## Hard Rules / No-Trade Conditions
- **No market orders.** All new orders must be limit orders only.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - AVGO add filled Jun 16 at 13:56 ET ($384.34) — DO NOT SELL AVGO today.
  - SOXX add filled Jun 16 at 14:23 ET ($619.25) — DO NOT SELL SOXX today.
  - QQQ add filled Jun 16 at 19:37Z ($731.96) — DO NOT SELL QQQ today.
  - NVDA add filled Jun 16 at 19:37Z ($208.47) — DO NOT SELL NVDA today.
  - GOOG if filled today — DO NOT SELL GOOG today.
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
1. **FILLED:** QQQ 3 shares @ $731.96 limit GTC.
2. **FILLED:** NVDA 1 share @ $208.47 limit GTC.
3. **PENDING:** GOOG 2 shares @ $369.50 limit GTC.
4. **Gross exposure after all fills:** ~60.4%. If GOOG fills, pause further adds.
5. **If GOOG does not fill today:** Order carries as GTC into tomorrow (Jun 17).

## Expected Book Into Close
- VOO 2 (~14.2%), AVGO 2 (~7.8%), SOXX 1 (~6.1%), QQQ 3 (~22.5%), NVDA 1 (~2.1%)
- GOOG pending: 2 (~7.6%) if fills
- Cash: ~$4,601 (~47.2%) without GOOG; ~$3,861 (~39.6%) with GOOG
- Gross exposure: ~52.8% without GOOG; ~60.4% with GOOG

## Next Hourly Preview — 20:35Z (4:35 PM ET) — MARKET CLOSED
- Market will be closed. Review fills from today.
- QQQ and NVDA filled. GOOG may or may not have filled.
- If GOOG did not fill, reassess trigger for tomorrow's open.
- If GOOG filled, gross exposure ~60.4%. Pause new adds.
- If any stops were breached during the day, review and authorize action.
