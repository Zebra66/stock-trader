# Tactical Todo — Updated 2026-06-09 13:35Z (Tuesday 9:35 AM ET)
*HARD_LOCK LIFTED. Event detector gap-up reassessed as benign rally. Authorized limit buys on pullback only.*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~68.1%)
- **Live book:** QQQ 6, VOO 2, SOXX 2
- **Account equity / cash / buying power:** ~$10,057 / ~$3,204 / ~$32,004
- **Gross long exposure:** ~68.1% | **Net exposure:** ~68.1% | **Cash:** ~31.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE.
- **Market:** OPEN. Next tactical: 13:40Z, 13:50Z. Next hourly: 14:35Z (10:35 AM ET).
- **Macro context:** Gap-up open. SOXX +1.34%, SMH +1.45%, QQQ +0.68%. All held positions OK. No protective stops breached. Event detector CRITICAL was gap-up, not crash; hourly lifted suspension.

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.0%, at 45% cap. Cannot add 7th share.
- Unrealized +2.21% from avg $705.45. Current price ~$721.03.
- DO NOT SELL QQQ today.
- DO NOT ADD QQQ TODAY.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, at 20% non-QQQ ETF cap. 3rd share would breach cap.
- Unrealized +0.73% from avg $678.70. Current price ~$683.66.
- DO NOT SELL VOO today.
- DO NOT ADD VOO TODAY.

### SOXX — HOLD 2 — DO NOT SELL — AUTHORIZED ADD 1 ON PULLBACK
- Weight ~11.5% of equity. Within 20% ETF cap.
- Unrealized +1.37% from avg $571.53. Current price ~$579.38.
- **LIMIT BUY 1 SOXX @ $577.50** — gap-up pullback entry. If filled, 3 shares = ~17.3% weight (within 20% cap).
- Do NOT sell SOXX today.
- Do NOT chase above $579.50.
- DO NOT ADD SOXX ABOVE $579.50.

### NVDA — DO NOT BUY — DO NOT RE-BUY — WATCH $210.50
- Price ~$209.50, just below $210 threshold. Re-entry ONLY on $210.50 reclaim with volume.
- If it reclaims $210.50 and holds for 10 minutes, hourly will reassess at 14:35Z.
- Do NOT place NVDA order in this tactical window.
- DO NOT RE-BUY NVDA TODAY.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Post-earnings crash continues. ~$399.69. Near $400 but no confirmed support.
- Hourly does NOT authorize re-entry today.
- DO NOT BUY AVGO TODAY.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$369.26. Still below $375.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- DO NOT BUY GOOG TODAY.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for hourly authorization.
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, use exact limit price or market order.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order.
- **Exposure check:** After this buy, will gross exposure exceed 90%? If yes, abort.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** Conserve daytrades for emergencies.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- **Pre-computed caps this cycle:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares; NVDA max 7 shares.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`. BUY orders for banned symbols are REJECTED.

## Illiquidity Warnings (Universe Watchlist)
- **VOO:** Thin relative to SPY. Use limit orders only.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Deployment Queue — Tue Jun 9
1. **SOXX 1 share — limit $577.50** — First priority. Gap-up pullback entry. 3 shares = ~17.3% weight.
2. **NVDA 1 share — limit $210.50** — Second priority. Only if it reclaims $210.50 with volume. Hourly will reassess at 14:35Z.
3. **No other authorized buys.**

## Current Book
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 2 (~11.5%)
- Cash: ~$3,204 (~31.9%)
- Gross exposure: ~68.1%

## Expected Book — If SOXX fills
- QQQ 6 (~43.0%), VOO 2 (~13.6%), SOXX 3 (~17.3%)
- Cash: ~$2,627 (~26.1%)
- Gross exposure: ~73.9%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Reassess NVDA $210.50 reclaim.
- Reassess SOXX if limit not filled.
- Review broad market after first 65 minutes.

---

# Tactical Todo — Updated 2026-06-09 00:01Z (Monday, 8:01 PM ET)
*Post-session. After-hours unauthorized orders cancelled. Positions authorized. Await Tuesday open.*

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~68.0%)
- **Live book:** QQQ 6, SOXX 2, VOO 2. All positions authorized by 19:35Z hourly.
- **Account equity / cash / buying power:** $10,002.60 / $3,204.42 / $31,852.58
- **Gross long exposure:** ~68.0% | **Net exposure:** ~68.0% | **Cash:** ~32.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE (2 unauthorized after-hours orders cancelled: HOOD 1@85, NVDA 3@209).
- **Market:** CLOSED. Next session: Tue Jun 9 09:30 ET.

## Post-Session Review
### Cancelled Unauthorized After-Hours Orders
- **HOOD buy 1 @ $85** limit, cancelled 23:15Z.
- **NVDA buy 3 @ $209** limit, cancelled 23:15Z.

### Authorized Positions (Confirmed)
- **QQQ 6** — authorized by 19:35Z hourly.
- **SOXX 2** — authorized by 19:35Z hourly.
- **VOO 2** — authorized by 19:35Z hourly.

## Tuesday June 9 Deployment Queue (Pending 09:30 ET Open + Hourly)
1. **SOXX 1 share — limit $567.00** (per 19:35Z hourly).
2. **NVDA 1–2 shares — limit $210.50** (per 19:35Z hourly).
3. **SELL VOO 1 share** at market open or limit 680 — DEPRECATED. Keep both VOO.

## Next Hourly Preview
- Tuesday hourly scheduled 13:35Z (9:35 AM ET).
- Tactical runs at :10, :20, :30, :40, :50 past each hour.
