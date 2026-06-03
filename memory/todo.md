# Tactical Todo — Updated 2026-06-03 21:28Z (Wednesday 5:28 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market CLOSED. Next regular session: Thu June 4, 09:30 ET.*

## Current State
- **Regime:** offensive catch-up with defensive tilt (80–85% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** $10,213.15 / $1,777.45 / $11,990.60
- **Gross long exposure:** ~82.60% | **Net exposure:** ~82.60% | **Cash:** ~17.40%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** CLOSED. Next session opens Thu Jun 4 at 09:30 ET.
- **AVGO earnings reaction:** Beat-and-raise quarter but outlook disappointed. Stock dropped -5.1% after hours ($479.23 close → $454.60 AH).
- **New macro risk:** Iran/Oil + Fed hawkishness + inflation warning. PDT rule reportedly ending Jun 4.

## Position Instructions — Thu June 4 (Next Session)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.5%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $725.00 with limit $724.50. Rationale: protect core on broad-market risk-off.
- After-hours price ~$740.97 (>725.0 ✓).

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~17.8%, within 20% non-QQQ ETF cap. Adding 1 share would breach cap.
- Unrealized +9.43% from avg $554.51. After-hours dropped to $606.77.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $580.00 with limit $579.50. Rationale: protect profits if AVGO guidance disappointment drags chips lower. Prior stop $540 raised to $580 given new risk. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX tomorrow. At cap and sentiment fragile.
- **Illiquidity warning:** SOXX trade count is low. Use limit orders only.
- After-hours price ~$606.77 (>580.0 ✓).

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.5%, within 20% non-QQQ ETF cap. Adding 1 share would reach ~19.8% cap (theoretically allowed but hourly blocks it).
- Broad-market anchor. Hourly explicitly BLOCKS add tomorrow.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $685.00 with limit $684.50. Rationale: trim anchor on severe broad-market breakdown.
- After-hours price ~$691.28 (>685.0 ✓).

### AVGO — HOLD 2 — DO NOT ADD
- Position blended avg $435.92. After-hours price ~$454.60 (unrealized +4.29%, down from +11.6% intraday).
- Post-earnings reaction negative despite beat-and-raise. Outlook disappointed. Stock dropped -5.1% AH.
- **ANTI-CHURN:** AVGO shares were NOT bought today. Selling allowed if stop breached.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all AVGO shares if price drops below $420.00 with limit $419.50. Rationale: protect capital if earnings disappointment triggers a deeper breakdown below psychological $420 support. If AVGO opens above $440, hold both shares.
- Do NOT add AVGO tomorrow. Earnings overhang. Let it stabilize.
- After-hours price ~$454.60 (>420.0 ✓).

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold June 1. Realized loss ~$64.50.
- $84.75B equity offering is structural negative. Stock at ~$355.68.
- DO NOT RE-BUY GOOG.

### NVDA — DO NOT BUY TOMORROW — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $210–215 AND hourly explicitly authorizes AND chip sentiment stabilizes.
- Focus on protecting existing book for now.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No discretionary buys tomorrow unless a stop-loss is breached and hourly explicitly authorizes re-deployment.** Gross exposure is 82.60%; adding any share pushes toward 90% upper bound and is blocked by concentration caps, earnings overhang, or explicit hourly block.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
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

## Tomorrow's Deployment Queue
1. **HOLD all positions at the open.** Monitor AVGO and SOXX price action.
2. **HOLD cash** for defensive flexibility or high-conviction dip buy only after AVGO stabilizes.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $210–215 AND chip sentiment stabilizes.
   - AVGO only after it stabilizes above $460 AND hourly authorizes.
   - GOOG re-entry BLOCKED.

## Expected Book Into Next Session
- QQQ 6 (~43.5%), SOXX 3 (~17.8%), VOO 2 (~13.5%), AVGO 2 (~8.9%)
- Cash: ~$1,777 (~17.4%)
- Gross exposure: ~82.60%

## Next Hourly Preview — Thu June 4 13:35Z (9:35 AM ET)
- Evaluate AVGO pre-market / opening action. Did it bounce or continue lower?
- Assess chip-sector health (SOXX, SMH, NVDA) after AVGO guidance disappointment.
- Reassess cash deployment if compelling setup emerges.
- Watch for risk-off rotation following macro warnings / Iran uncertainty.
- Monitor PDT rule mechanics if rule change takes effect Jun 4.

## This Cycle — 2026-06-03 21:28Z (Hourly Post-Close Update)
- **Event detector:** MINOR at 17:58Z (SOXX +0.55%). No action required.
- **Live broker refresh:** Equity $10,213.15 | Cash $1,777.45 | Long $8,435.70 | Short $0 | Gross exposure ~82.60% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,445.82), AVGO 2 ($909.20), SOXX 3 ($1,820.31), VOO 2 ($1,382.56).
- **AVGO earnings reaction:** Beat-and-raise but outlook disappointed. AH drop -5.1% to $454.60.
- **Portfolio today:** -0.50% vs SPY -0.70%. Outperformed by ~0.2 pp but erased +1.9% intraday lead.
- **Gap to SPY widened:** ~2.92 pp (from ~0.6 pp pre-close).
- **Stops updated:** AVGO $420, SOXX $580, QQQ $725, VOO $685.
- **No orders authorized tonight.** Next tactical runs at 13:40Z and 13:50Z tomorrow.
