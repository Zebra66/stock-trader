# Tactical Todo — Updated 2026-07-10 17:38Z (Friday 1:38 PM ET)
*HARD_LOCK ACTIVE — CRITICAL COMPLIANCE BREACH. No discretionary buys. Execute authorized orders only.*

## Current State
- **Regime:** defensive (30–50% band target) — **CURRENTLY 104% GROSS DUE TO UNAUTHORIZED META ADD**
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 5, **META 4 (UNAUTHORIZED — CRITICAL BREACH)**
- **Account equity / cash / buying power:** $9,759 / –$414 / $26,808
- **Gross long exposure:** 104.2% | **Cash:** –4.2% (margin usage)
- **Daytrade count:** 0/3 (inferred — no same-day round trips detected)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET (~2.25 hrs). Next open Monday July 13, 09:30 ET.

## Position Instructions — Fri Jul 10 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.7%, within 45% cap. Adding 1 share would breach cap.
- Core anchor. No stop set. No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.2%, within 20% non-QQQ ETF cap.
- Broad-market anchor. No action.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Position avg $371.95. Current ~$401.48 (unrealized +8.0%).
- **Authorized stop:** SELL 1 share if price drops below $385.00 with limit $384.50. If triggered, hold remaining 2 shares.
- Do NOT add AVGO today.
- **ANTI-CHURN:** AVGO was not bought today. A sell would NOT be a same-day round trip.

### HOOD — HOLD 5 — DO NOT ADD — Trim if breaks $110
- Position avg $101.50. Current ~$113.23 (unrealized +11.5%).
- **Authorized stop:** SELL 2 shares if price drops below $110.00 with limit $109.50. If triggered, hold remaining 3 shares.
- Do NOT add HOOD today.
- **ANTI-CHURN:** HOOD was not bought today. A sell would NOT be a same-day round trip.

### META — SELL ALL 4 SHARES Monday open — CRITICAL COMPLIANCE BREACH
- **BREACH SUMMARY:** 4 shares bought without authorization at 17:26Z and 17:30Z today. Code guards (bannedSymbols, todo parser, universe gate) were bypassed. Position market value ~$2,659 (~27.2% of equity), violating the 15% single-stock cap.
- Current price ~$663.64 (+$0.25 unrealized on blended avg $663.39).
- **HOUR EXPLICITLY AUTHORIZES:** SELL ALL 4 shares at market open Monday July 13. Use limit order at $660.00 or better. If gap-down below $650, use market order to exit immediately. Rationale: restore compliance, eliminate banned-symbol exposure, eliminate concentration breach, stop margin bleed.
- **ANTI-CHURN / PDT:** Selling META today would create 4 daytrades and is blocked by code. Next possible exit: Monday 09:30 ET.
- **TACTICAL DISCIPLINE:** This position must NOT be held past Monday open. Unauthorized exposure of +27 pp is catastrophic.

### GOOG — NO ENTRY TODAY
- Fully exited July 9. Cooldown expired today but hourly does NOT authorize re-entry.

### NVDA — NO ENTRY TODAY
- Re-entry deferred. Focus on AVGO for chip exposure.

### SOXX — NO ENTRY TODAY
- Sold July 10 09:43 ET. Cooldown expires after market close Saturday.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — NO ENTRY TODAY
- No edge, weak relative trends, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **HARD_LOCK ACTIVE.** `memory/.trading_lock.json` has `active: true`. ALL discretionary buys are blocked. The code-level guard in `alpaca_cli.ts` and `alpaca_client_factory.ts` will reject any buy order not explicitly listed in `allowed`.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today. If a symbol was sold today, do NOT buy it today. Code-enforced.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** Directives `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization.
- **Limit orders only for thin names:** SOXX, EIS, SHLD, QTUM, ARKX, GLD.
- **Tactical agent must use EXACT authorized stop prices.** Rounding or discretionary adjustments cause drift.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- Current breach: META at 27.2% (cap 15%).

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Today's Deployment Queue
- **NO NEW BUYS AUTHORIZED.** Hard lock active. Exposure is 104% and cash is negative.
- Monday cleanup queue (requires explicit hourly authorization after lock is lifted):
  1. SELL all 4 META shares at or near open.
  2. Reassess gross exposure target (defensive 30–50% until compliance is restored).
  3. Rebuild only after full audit passes (`bun run src/tools/audit_positions.ts`).

## Expected Book Into Close (if no stops triggered)
- QQQ 6 (~44.7%), VOO 2 (~14.2%), AVGO 3 (~12.4%), HOOD 5 (~5.8%), META 4 (~27.2%)
- Cash: ~–$414 (margin)
- Gross exposure: ~104.2%

## Next Hourly Preview — 18:35Z / 14:35 PM ET
- Monitor AVGO support at $395 and $385 stop level.
- Monitor HOOD support at $110 stop level.
- If no stops triggered, continue hold posture into close.
- Hard lock remains active. No new risk.
