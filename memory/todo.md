# Tactical Todo — Updated 2026-06-02 16:35Z (Tuesday 12:35 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** $10,400.43 / $1,777.45 / $12,177.88
- **Gross long exposure:** ~82.91% | **Net exposure:** ~82.91% | **Cash:** ~17.09%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Event detector:** NONE at 16:35Z. No events flagged.
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.
- **New macro risk:** Fed's Hammack said rates may need to rise if inflation does not abate (10:56 AM ET). Watch for afternoon risk-off rotation.

## Position Instructions — Tue June 2 (12:35 PM ET)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~42.98%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~17.23%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~22.8% cap.
- Unrealized +7.74% from avg $554.51.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX today. At cap.
- **Illiquidity warning:** SOXX trade count is very low. Use limit orders only.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.42%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.2% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position blended avg $435.92. Current price ~$482.44 (unrealized +10.67%).
- Pre-earnings catalyst (earnings June 3, Wed after close — binary event in ~20 hours). GOOG $80B AI raise directly benefits AVGO; stock +4.83% today on this news. Marvell +29% on Jensen Huang endorsement validates custom silicon trend.
- **ANTI-CHURN CRITICAL:** AVGO shares were NOT bought today. However, DO NOT SELL AVGO today under any circumstances unless hourly note explicitly authorizes. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: catastrophic pre-earnings/earnings technical breakdown.
- Do NOT add AVGO today. Earnings risk in ~20 hours. Binary event — no adds ahead of print.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold June 1: 1 share @ $372.02 (stop), 2 shares @ $370.50 (limit).
- Realized loss on GOOG position: ~$64.50 total.
- **24-HOUR COOLDOWN EXPIRED** at 2026-06-02 13:54Z (9:54 AM ET).
- Even after cooldown expiry, DO NOT RE-BUY GOOG unless it reclaims $385 with volume AND hourly explicitly authorizes.
- Current price ~$363.60. Well below $385 reclaim threshold.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred. NVDA at ~$225.31 after pullback from earlier highs.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $218 or below AND hourly explicitly authorizes.
- Focus on AVGO/SOXX chip exposure.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
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

## Today's Deployment Queue
1. **HOLD all positions.** No new orders authorized this cycle.
2. **HOLD cash** for defensive flexibility or next hourly authorization.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $218 or below.
   - AVGO only post-earnings (after June 3 close) AND if pullback to $425 or below AND hourly authorizes.
   - GOOG re-entry only after reclaims $385 with volume AND hourly authorizes.

## Expected Book (Current)
- QQQ 6 (~43.0%), SOXX 3 (~17.2%), VOO 2 (~13.4%), AVGO 2 (~9.3%)
- Cash: ~$1,777 (~17.1%)
- Gross exposure: ~82.9%

## Next Hourly Preview — Tue June 2 17:35Z (1:35 PM ET) (NOT AUTHORIZED YET)
- Monitor AVGO momentum into earnings (June 3 after close).
- Evaluate NVDA pullback for potential re-entry.
- Reassess cash deployment if gross exposure remains below 85% and compelling setup emerges.
- Watch for afternoon risk-off rotation following Fed Hammack hawkishness.

## This Cycle — 2026-06-02 16:35Z
- **Event detector:** NONE.
- **Live broker refresh:** Equity $10,400.43 | Cash $1,777.45 | Long $8,622.98 | Short $0 | Gross exposure 82.91% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,469.64), AVGO 2 ($964.88), SOXX 3 ($1,792.22), VOO 2 ($1,396.24).
- **Protective stops:** QQQ $744.94 (>725.0 ✓), AVGO $482.44 (>400.0 ✓), SOXX $597.405 (>540.0 ✓), VOO $698.12 (>685.0 ✓). None breached.
- **Orders placed:** None. No hourly triggers, no protective stop breaches.
- **Next expected action:** Continue holding until next hourly guidance at 17:35Z Tue or protective stop breach.
