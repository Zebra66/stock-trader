# Tactical Todo — Updated 2026-06-05 13:35Z (Friday 9:35 AM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only.*

## Current State
- **Regime:** neutral (60–70% band)
- **Live book:** QQQ 6, VOO 2, NVDA 2. SOXX 0, AVGO 0, GOOG 0.
- **Account equity / cash / buying power:** ~$10,129 / ~$3,936 / ~$28,130
- **Gross long exposure:** ~61.2% | **Net exposure:** ~61.2% | **Cash:** ~38.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next hourly: 14:35Z (10:35 AM ET).

## Position Instructions — Fri Jun 5 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~43.3%, within 45% cap. Adding 1 share would breach cap.
- Intraday –1.61% (Yahoo). Core liquid growth. Let run.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $720.00 with limit $719.50. Rationale: trim core on broad risk-off breakdown.
- Do NOT add QQQ today. At cap.

### VOO — HOLD 2 — DO NOT ADD
- Weight ~13.7%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Intraday –0.74%. Stable relative to tech.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $680.00 with limit $679.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. 3 shares would breach ~20.5% cap.

### NVDA — HOLD 2 — DO NOT ADD TODAY
- Weight ~4.2%, within 15% single-stock cap.
- Unrealized –1.74% from avg $218.11. Intraday –2.39% in sympathy with semi selloff.
- Best 1-week momentum among chip names (+1.09% 1W).
- **ANTI-CHURN / NEVER AVERAGE DOWN:** DO NOT add to NVDA today. Current price $214.32 is below our avg entry $218.11. Adding would average down and violate standing learning.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all NVDA shares if price drops below $210.00 with limit $209.50. Rationale: protect capital on deeper semi-sector breakdown.
- Do NOT add NVDA today.

### AVGO — DO NOT BUY — DO NOT RE-BUY TODAY
- Fully exited June 4 at $405.16. 24-hour cooldown expires at ~13:45Z today (June 5).
- Even after cooldown expiry, hourly explicitly does NOT authorize re-entry today.
- Post-earnings freefall to $401.31. Too early to catch knife.
- Defer re-entry evaluation to Monday June 8 hourly.

### SOXX — DO NOT BUY — DO NOT RE-BUY TODAY
- Fully exited June 4 (last fill ~15:19Z). 24-hour cooldown expires at ~15:19Z today (June 5).
- Even after cooldown expiry, hourly explicitly does NOT authorize re-entry today.
- Sector down –5.16% today. Wait for stabilization.
- Defer re-entry evaluation to Monday June 8 hourly.

### GOOG — DO NOT BUY
- Support $375–$380 broken. Price $365.20. Weak 1M/1W.
- No re-entry until it reclaims $375 with volume and holds for at least 30 minutes.
- Do NOT buy GOOG today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Exception: None. Hourly explicitly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 61.2%; adding any share pushes toward the 70% upper bound of neutral band, but no add candidate meets quality threshold today.
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
1. **No new buys authorized** for this cycle. Neutral regime (60–70%) and no high-probability add candidate.
2. **Conditional add queue for Monday (requires explicit hourly authorization):**
   - SOXX if it stabilizes above $560 with sector breadth improvement.
   - AVGO if it finds support above $390 and stops falling.
   - NVDA only if it pulls back to $208–$210 with strong volume support (NOT a blind dip buy).
   - GOOG only if it reclaims $375 with volume.

## Expected Book Into Close (No Trades)
- QQQ 6 (~43.3%), VOO 2 (~13.7%), NVDA 2 (~4.2%)
- Cash: ~$3,936 (~38.9%)
- Gross exposure: ~61.2%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Monitor NVDA $210 stop proximity.
- Reassess QQQ/VOO stop levels if market accelerates lower.
- Verify no tactical agent attempts unauthorized AVGO/SOXX re-buys after 24h cooldown expiry.
- Evaluate whether semi-sector weakness is broadening to QQQ components.
