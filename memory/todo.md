# Tactical Todo — Updated 2026-07-10 16:35Z (Friday 12:35 PM ET)
*HARD_LOCK LIFTED. No open orders. Execute authorized orders only. Market closes at 16:00 ET (~3.5 hrs).*

## Current State
- **Regime:** neutral (70–85% band) — **CURRENTLY 90.6% DUE TO UNAUTHORIZED META ADD**
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 5, **META 2 (UNAUTHORIZED)**
- **Account equity / cash / buying power:** $9,751.15 / $912.11 / $11,988.11
- **Gross long exposure:** 90.6% | **Net exposure:** 90.6% | **Cash:** 9.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET. Next open Monday July 13, 09:30 ET.

## Position Instructions — Fri Jul 10 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.6%, within 45% cap. Adding 1 share would breach cap (~51%).
- Intraday ~flat (+0.26%). Core liquid growth. Let run into close.
- No stop set; core anchor.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.2%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~21.3% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Position blended avg $371.95. Current price ~$401.73 (unrealized +8.01%). Today +0.15% on Apple $30B deal support.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $385.00 with limit $384.50. Rationale: protect chip gain if sector rotation accelerates post-SK Hynix debut. If triggered, hold remaining 2 shares as core.
- Do NOT add AVGO today.
- **ANTI-CHURN:** If AVGO was bought today, DO NOT SELL it today. Code-enforced via factory + CLI.
- **TACTICAL DISCIPLINE:** Use EXACT authorized stop price ($385.00). Do not round or use discretionary levels.

### HOOD — HOLD 5 — DO NOT ADD — Trim if breaks $110
- Position avg $101.50. Current price ~$113.56 (unrealized +11.88%). Down –1.35% intraday ($115.11 → $113.56), bounced off ~$110.31 low.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 2 shares if price drops below $110.00 with limit $109.50. Rationale: lock in bulk of gain on volatile name into weekend. Hold remaining 3 shares as core.
- Do NOT add HOOD today.
- **ANTI-CHURN:** If HOOD was bought today, DO NOT SELL it today.
- **TACTICAL DISCIPLINE:** Use EXACT authorized stop price ($110.00). Do not round or use discretionary levels.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- Fully exited July 9 at $348.97. 24-hour cooldown expired at 10:23 AM ET today.
- Hourly explicitly does NOT authorize re-entry today or over the weekend. Re-entry deferred to future hourly authorization only if tape stabilizes above $360 with volume.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited June 23. Re-entry deferred. Focus on AVGO for chip exposure.

### META — SELL ALL 2 SHARES Monday open — UNAUTHORIZED POSITION
- **COMPLIANCE BREACH:** 2 shares bought at 17:26Z today @ $663.71 without authorization. Banned symbol (`bannedSymbols: ["META"]`) and `DO NOT BUY` directive were both bypassed.
- Current price ~$663.33 (–$0.76 unrealized). Position market value $1,326.66 (~13.6% of equity).
- **HOUR EXPLICITLY AUTHORIZES:** SELL 2 shares at market open Monday July 13. Use limit order at $660.00 or better. If gap-down below $650, use market order to exit immediately. Rationale: restore compliance, eliminate banned-symbol exposure.
- **ANTI-CHURN:** Cannot sell today because position was bought today. Code-enforced. Next possible exit: Monday 09:30 ET.
- **TACTICAL DISCIPLINE:** This position must NOT be held past Monday open. Unauthorized exposure drift of +13.6 pp is unacceptable.

### SOXX — DO NOT BUY — DO NOT RE-BUY
- Sold July 10 09:43 ET @ ~$569.04. 24-hour cooldown expires Saturday 13:41Z (after market close). Re-entry requires explicit hourly authorization.
- **TACTICAL DISCIPLINE:** The July 10 sale used a $570 claimed stop vs hourly-authorized $560. Repeat unauthorized drift triggers hard lock.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle or into the close.** Gross exposure is 90.6% due to unauthorized META add. No new risk today.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today. If a symbol was sold today, do NOT buy it today. Now **code-enforced** in `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **Limit orders only for thin names:** SOXX, EIS, SHLD, QTUM, ARKX, GLD. Do not place market orders.
- **Tactical agent must use EXACT authorized stop prices.** Rounding or discretionary adjustments cause unauthorized drift. Repeat deviation triggers `HARD_LOCK`.

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
1. **No new buys authorized** for this cycle or into the close. Exposure band is 70–85%; current 77.0%.
2. **Conditional add queue for Monday (requires explicit hourly authorization):**
   - AVGO if pullback to $390 or below with volume confirmation.
   - HOOD if pullback to $105 or below (not chasing at $113+ after a volatile day).
   - QQQ only if it reclaims $730 with volume and we can trim something else to stay under 45% cap.
   - NVDA if it reclaims $210 with volume and chip rotation broadens.
   - GOOG only if it reclaims $360 with volume and shows weekly strength.

## Expected Book Into Close (if no stops triggered)
- QQQ 6 (~44.6%), VOO 2 (~14.2%), AVGO 3 (~12.4%), HOOD 5 (~5.8%)
- Cash: ~$2,240 (~23.0%)
- Gross exposure: ~77.0%

## Next Hourly Preview — 16:35Z / 13:35 PM ET (NOT AUTHORIZED YET)
- Monitor HOOD intraday support at $110 and resistance at $115.
- Monitor AVGO support at $395 and $385 stop level.
- If no stops triggered, continue hold posture into close.
