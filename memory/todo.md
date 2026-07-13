# Tactical Todo — Updated 2026-07-13 15:05Z (Monday 11:05 AM ET)
*CRITICAL EVENT — NO NEW BUYS TODAY*

## Current State
- **Regime:** neutral (60–80% band target)
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 2
- **Account equity / cash / buying power:** $9,621.79 / $2,589.69 / $30,048.64
- **Gross long exposure:** 73.1% | **Cash:** 26.9%
- **Daytrade count:** 0/3 (room for same-day reversals if needed, but avoid)
- **Pattern day trader:** Unknown
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET (~3 hours). Next hourly: 16:35Z / 12:35 PM ET.
- **Event detector:** CRITICAL — tech/semis selloff. QQQ -1.8%, AVGO -3.5%, SOXX -4.7%.
- **Turnover budget:** 2/2 trades already used today (HOOD sells). **NO FURTHER POSITION-CHANGING TRADES TODAY.**

## Position Instructions — Mon Jul 13 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap.
- Core anchor. Down -1.8% today but within 3-month uptrend. No stop set.
- **No action.**

### VOO — HOLD 2 — DO NOT SELL OR ADD TODAY
- Weight ~14.3%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Stable today (-0.7%).
- **No action today.** Hourly may consider trimming 1 share tomorrow to free cash for alpha.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Position avg $371.95. Current ~$386.40 (unrealized +3.9%).
- **Authorized stop:** SELL 1 share if price drops below $385.00 with limit $384.50. If triggered, hold remaining 2 shares.
- Do NOT add AVGO today (CRITICAL event).
- **ANTI-CHURN:** AVGO was not bought today. A sell would NOT be a same-day round trip.

### HOOD — HOLD 2 — DO NOT SELL OR ADD TODAY
- Position avg $101.50. Current ~$109.59 (unrealized +8.0%).
- **Stop already executed:** 2 shares sold @ $110.00 at 09:50 ET (authorized). 1 extra share sold @ $109.33 at 13:40 ET (unauthorized oversell). Remaining 2 shares must be held.
- **NO FURTHER HOOD SELLS TODAY.** No HOOD buys today.
- **ANTI-CHURN:** HOOD was not bought today. A sell would NOT be a same-day round trip, but still prohibited by this directive.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` remains active in `memory/.trading_lock.json`.
- **CODE-ENFORCED:** Any BUY order for META is rejected.

### GOOG — NO ENTRY TODAY
- Exited Jul 9. Cooldown expired. CRITICAL event prevents re-entry today.
- If tape stabilizes tomorrow, consider re-entry above $355 with confirmation.

### NVDA — NO ENTRY TODAY
- CRITICAL event prevents new buys today. Preferred chip add after AVGO once event lifts.
- Watch for stabilization above $205.

### SOXX — NO ENTRY TODAY
- Sold Jul 10. Cooldown expires after today's close.
- CRITICAL event + sector down -4.7% today = no re-entry.
- If tape stabilizes, consider re-entry above $560.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — NO ENTRY TODAY
- No edge, weak relative trends, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **NO NEW BUYS TODAY.** Event detector CRITICAL. Tech/semis selloff active.
- **NO FURTHER SELLS TODAY.** Turnover budget exhausted (2/2 trades used: HOOD sells).
- **HARD_LOCK:** inactive (`memory/.trading_lock.json` has `active: false`).
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today. If a symbol was sold today, do NOT buy it back today. Code-enforced.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** Directives `DO NOT BUY`, `DO NOT RE-BUY`, `DO NOT ADD`, and `NO NEW BUYS` are code-enforced.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately unless an explicit stop is breached.** Hold and wait for next hourly authorization.
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

## Turnover Budget Status
- **Today:** 2/2 position-changing trades used (HOOD sells). **BUDGET EXHAUSTED.**
- **This week (Mon–Fri):** ~$1,378 in gross turnover so far (HOOD sells only, ~14.3% of equity). Weekly budget is 20% of equity (~$1,924). Remaining weekly budget ~$546 or ~5.7% of equity.
- **No further discretionary trades today.** Only protective stops explicitly authorized by hourly strategist are exempt.

## Expected Book Into Close (if no stops triggered)
- QQQ 6 (~44.4%), VOO 2 (~14.3%), AVGO 3 (~12.0%), HOOD 2 (~2.3%)
- Cash: ~$2,590 (26.9%)
- Gross exposure: ~73.1%

## Next Hourly Preview — Mon Jul 13 16:35Z / 12:35 PM ET
- Reassess tech/semis tape. If CRITICAL event lifts to MINOR/OK, may authorize small adds.
- Monitor AVGO $385 stop level.
- Monitor QQQ $710 support. If it breaks, consider trimming 1 share in next cycle (two-cycle confirmation applies).
- If no stops triggered and tape stabilizes, consider GOOG or NVDA limit adds.
