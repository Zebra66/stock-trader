<!-- Autonomous override applied at 2026-07-13T13:30:03Z due to CRITICAL event (SOXX -2.99%, SMH -2.25%) -->

# Tactical Todo — Updated 2026-07-13 13:30Z (Monday 09:30 AM ET)
*CRITICAL event override. All BUY conditions suspended until next hourly reset.*

## AUTONOMOUS OVERRIDE — Mon Jul 13 13:30Z
- **Event detector classification:** CRITICAL (SOXX -2.99%, SMH -2.25%; QQQ MAJOR -1.16%, XLK MAJOR -1.40%, GLD MAJOR -1.12%).
- **Held positions:** All within authorized stop levels. No protective sells triggered.
  - AVGO $394.63 > $385 stop.
  - HOOD $111.01 > $110 stop.
  - QQQ/VOO have no active stops.
- **Action:** No trades executed. Suspend all buy conditions; hold existing positions.
- **Next step:** Wait for 13:35Z hourly reassessment.

## Current State
- **Regime:** neutral → defensive until hourly reassessment
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 5
- **Account equity / cash / buying power:** $9,689 / $2,260 / $29,840
- **Gross long exposure:** ~76.6% | **Cash:** ~23.3%
- **Daytrade count:** TBC at 13:35Z hourly. Assume 0 at new session unless broker shows otherwise.
- **Pattern day trader:** Unknown
- **Open orders:** NONE
- **Market:** OPEN. 09:30 ET open just occurred.

## Position Instructions — Mon Jul 13 (Tactical runs until 13:35Z hourly)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.6%, within 45% cap. Adding 1 share would breach cap.
- Core anchor. No stop set. No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.2%, within 20% non-QQQ ETF cap.
- Broad-market anchor. No action.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Position avg $371.95. Current ~$399.73 (unrealized +7.5%).
- **Authorized stop:** SELL 1 share if price drops below $385.00 with limit $384.50. If triggered, hold remaining 2 shares.
- Do NOT add AVGO today.
- **ANTI-CHURN:** AVGO was not bought today. A sell would NOT be a same-day round trip.

### HOOD — HOLD 5 — DO NOT ADD — Trim if breaks $110
- Position avg $101.50. Current ~$112.47 (unrealized +10.8%).
- **Authorized stop:** SELL 2 shares if price drops below $110.00 with limit $109.50. If triggered, hold remaining 3 shares.
- Do NOT add HOOD today.
- **ANTI-CHURN:** HOOD was not bought today. A sell would NOT be a same-day round trip.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- **BREACH RESOLVED:** All 4 unauthorized shares were liquidated at ~$668.38 avg (18:24Z and 18:28Z).
- `bannedSymbols: ["META"]` remains active in `memory/.trading_lock.json`.
- **CODE-ENFORCED:** Any BUY order for META is rejected regardless of lock state.
- No re-entry authorized. No re-entry expected.

### GOOG — NO ENTRY TODAY
- Fully exited July 9. Cooldown expired today but hourly does NOT authorize re-entry.

### NVDA — NO ENTRY TODAY
- Re-entry deferred. Focus on AVGO for chip exposure.

### SOXX — NO ENTRY TODAY
- Sold July 10 09:43 ET. Cooldown expires after market close Saturday.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — NO ENTRY TODAY
- No edge, weak relative trends, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **NO NEW BUYS TODAY.** PDT limit reached (4 daytrades). Do NOT open any new positions. If you buy a symbol today and it drops, you cannot sell it today without creating a daytrade.
- **HARD_LOCK LIFTED** at 18:35Z. `memory/.trading_lock.json` has `active: false`. Code-level guards remain active for bannedSymbols and all other checks.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today. If a symbol was sold today, do NOT buy it today. Code-enforced.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** Directives `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization.
- **Limit orders only for thin names:** SOXX, EIS, SHLD, QTUM, ARKX, GLD.
- **Tactical agent must use EXACT authorized stop prices.** Rounding or discretionary adjustments cause drift.
- **Order Submission Method — ABSOLUTE REQUIREMENT:** Use ONLY `bun run src/tools/alpaca_cli.ts submit-order`. Direct API calls bypass ALL guards and are prohibited.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- Current: All within caps.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Today's Deployment Queue
- **NO NEW BUYS AUTHORIZED.** CRITICAL event override in effect.
- Monday reassessment queue (requires explicit hourly authorization):
  1. Reassess gross exposure target.
  2. If offensive posture selected, consider GOOG adds only after cooldown expires. **NVDA and SOXX adds are SUSPENDED — major event detected at 2026-07-13 13:30Z.**
  3. Rebuild only after full audit passes (`bun run src/tools/audit_positions.ts`).

## Expected Book Into Close (if no stops triggered)
- QQQ 6 (~44.6%), VOO 2 (~14.2%), AVGO 3 (~12.3%), HOOD 5 (~5.8%)
- Cash: ~$2,260 (23.2%)
- Gross exposure: ~76.85%

## Next Hourly Preview — Monday Jul 13 13:35Z / 09:35 AM ET
- **CRITICAL event override active.** Hourly must reassess before any new buys.
- Monitor AVGO support at $395 and $385 stop level.
- Monitor HOOD support at $110 stop level.
- Check daytrade count at open; if reset to 0, tactical flexibility restored.
- If AVGO or HOOD stop breaches, execute authorized protective sell (1 AVGO, 2 HOOD) with limit order.
