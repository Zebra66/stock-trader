# Tactical Todo — Updated 2026-06-05 15:40Z (Friday 11:40 AM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only.*

## Current State
- **Regime:** neutral (60–70% band)
- **Live book:** QQQ 6, VOO 2. NVDA 0 (sold, stop filled). SOXX 0, AVGO 0, GOOG 0.
- **Account equity / cash / buying power:** ~$10,048 / ~$4,352 / ~$28,016
- **Gross long exposure:** ~56.6% | **Net exposure:** ~56.6% | **Cash:** ~43.3%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. ~2h 40m to close. Next hourly: 15:35Z (11:35 AM ET).
- **Macro context:** May jobs report (+172K, unemployment 4.3%) came in strong at 8:30 AM ET. Headlines confirm hawkish Fed fears. Tech/growth selling off. Rotation session, not dip-buying opportunity.

## Position Instructions — Fri Jun 5 (:40, :50, and :10/:20/:30 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~43.2%, within 45% cap. Adding 1 share would breach cap.
- Intraday –1.77% (Yahoo). Core liquid growth. Let run.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $720.00 with limit $719.50. Rationale: trim core on broad risk-off breakdown.
- Do NOT add QQQ today. At cap.

### VOO — HOLD 2 — DO NOT ADD
- Weight ~13.7%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Intraday –0.74%. Stable relative to tech.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $680.00 with limit $679.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. 3 shares would breach ~20.5% cap.

### NVDA — SOLD — DO NOT RE-BUY TODAY
- **STATUS: STOP FILLED.** 2 shares sold at ~$207.80. Position closed. Realized loss ~$20.60 from avg entry $218.11.
- **Do NOT re-buy NVDA today.** 24-hour cooldown applies from ~15:20Z sell time.
- Defer re-entry evaluation to Monday June 8 hourly.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Fully exited June 4 at $405.16. 24-hour cooldown EXPIRED at ~13:45Z today (June 5).
- Even after cooldown expiry, hourly explicitly does NOT authorize re-entry today.
- Post-earnings freefall to $401.65. Hawkish jobs report adds macro headwind. Too early to catch knife.
- Defer re-entry evaluation to Monday June 8 hourly.

### SOXX — DO NOT BUY — DO NOT RE-BUY TODAY
- Fully exited June 4 (last fill ~15:19Z). 24-hour cooldown expires at ~15:19Z today (June 5).
- Even after cooldown expiry, hourly explicitly does NOT authorize re-entry today.
- Sector down ~4.90% today. Wait for stabilization.
- Defer re-entry evaluation to Monday June 8 hourly.

### GOOG — DO NOT BUY
- Support $375–$380 broken. Price $367.12. Weak 1M/1W.
- No re-entry until it reclaims $375 with volume and holds for at least 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Exception: None. Hourly explicitly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 56.6%; below neutral band but no add candidate meets quality threshold today in a hawkish-jobs-report tape.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Anti-churn critical:** Adding to a position that was bought the same session is a same-day round trip and is prohibited.

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
1. **No new buys authorized** for this cycle. Neutral regime (60–70%) and no high-probability add candidate on a jobs-report hawkish tape.
2. **Conditional add queue for Monday (requires explicit hourly authorization):**
   - SOXX if it stabilizes above $560 with sector breadth improvement.
   - AVGO if it finds support above $390 and stops falling.
   - NVDA only if it pulls back to $208–$210 with strong volume support (NOT a blind dip buy).
   - GOOG only if it reclaims $375 with volume.

## Expected Book Into Close
- QQQ 6 (~43.0%), VOO 2 (~13.7%). NVDA 0.
- Cash: ~$4,352 (~43.3%)
- Gross exposure: ~56.6%

## Next Hourly Preview — 15:35Z (11:35 AM ET)
- NVDA stop filled. Book now QQQ + VOO only. Exposure 56.6% is below neutral band; hourly must decide whether to redeploy Monday or stay defensive.
- Reassess QQQ/VOO stop levels if market accelerates lower on jobs-report follow-through.
- Verify no tactical agent attempts unauthorized AVGO/SOXX re-buys after cooldown expiry.
- Evaluate whether semi-sector weakness is broadening to QQQ components.
