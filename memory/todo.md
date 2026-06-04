# Tactical Todo — Updated 2026-06-04 19:35Z (Thursday 3:35 PM ET)
**HARD_LOCK LIFTED** — Hourly strategist explicitly lifted at 16:38Z. Process discipline restored. Market OPEN — final hour.

## Current State
- **Regime:** neutral (exposure target 60–70%)
- **Live book:** QQQ 6, VOO 2, NVDA 2. SOXX FULLY EXITED (0 shares). AVGO FULLY EXITED.
- **Account equity / cash / buying power:** $10,229.11 / $3,936.19 / $28,330.60
- **Gross long exposure:** ~61.5% | **Net exposure:** ~61.5% | **Cash:** ~38.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN. Final ~25 minutes to 4:00 PM ET close. Next hourly Fri Jun 5 13:35Z (9:35 AM ET).
- **Code integrity:** VERIFIED. No unauthorized source modifications. Branch up to date.

## Position Instructions — Thu June 4 (:40, :50 Tactical Runs & Final Hour)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~43.6%, within 45% cap. Adding 1 share would breach cap.
- Intraday −0.15% ($744.21 → $743.09). Core liquid growth. Let run into close.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $725.00 with limit $724.50. Rationale: protect core on broad-market risk-off.
- Do NOT add QQQ today. At cap.

### VOO — HOLD 2 — DO NOT ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Up +0.53% today. Stable.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $685.00 with limit $684.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. 3 shares would exceed 20% cap.

### NVDA — HOLD 2 — DO NOT ADD TODAY
- Filled 2 shares @ $218.11. Current ~$220.16. Unrealized +0.94% (+$4.10).
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 2 shares if price drops below $210.00 with limit $209.50. Rationale: cut risk if chip weakness spreads to NVDA.
- **Do NOT sell NVDA today unless stop $210 is breached.**
- **Do NOT add NVDA today at any price.** Current $220+ is a chase; reward:risk with $210 stop is <1.2:1, violating the ≥2:1 minimum. Wait for pullback below $216 or tomorrow's hourly authorization.
- Max position under 15% cap is 7 shares total. Keep risk small.

### SOXX — FULLY EXITED — DO NOT RE-BUY TODAY — DO NOT ADD
- 0 shares. Unauthorized sells at ~$600.17 (15:14Z) and ~$600.38 (15:19Z).
- **ANTI-CHURN:** SOXX was sold TODAY. DO NOT BUY SOXX back today under any circumstances. Same-day round trip is prohibited.
- Re-entry deferred to future hourly authorization only after stabilization.

### AVGO — FULLY EXITED — DO NOT RE-BUY TODAY — DO NOT ADD
- 2 shares sold at $405.16 (13:45Z). Realized loss ~$61.52.
- Earnings disappointment + AI chip forecast miss = structural sentiment damage. No re-entry today.
- **ANTI-CHURN:** AVGO was sold TODAY. DO NOT BUY AVGO back today under any circumstances. Same-day round trip is prohibited.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All shares sold June 1. No re-entry.
- DO NOT RE-BUY GOOG.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - If a symbol was sold today, do NOT buy it back today unless hourly note explicitly authorizes.
  - AVGO was sold TODAY at 13:45Z. DO NOT BUY AVGO today.
  - SOXX was sold TODAY at 15:14Z and 15:19Z. DO NOT BUY SOXX today.
  - NVDA was bought TODAY at 16:41Z. DO NOT SELL NVDA today unless stop $210 is breached.
- **No unauthorized sells.** If a symbol was not explicitly authorized to sell in this todo.md, do NOT place a sell order. The only permitted sells are:
  1. QQQ stop breach below $725
  2. VOO stop breach below $685
  3. NVDA stop breach below $210
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately unless the stop condition in this todo.md is met OR the event is CRITICAL.** Hold and wait for next hourly authorization for discretionary sells.
- **Code modification prohibition:** Tactical agent must NOT modify any file under `src/`, `prompts/`, or `config/`. If you detect such modifications, default to hold-only and alert hourly.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`, `active: false` (lock lifted).
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **HOLD QQQ 6, VOO 2, NVDA 2.** Monitor stops. No action required.
2. **No new adds in final hour.**
3. **Conditional none.**

## Expected Book (Current)
- QQQ 6 (~43.6%), VOO 2 (~13.6%), NVDA 2 (~4.3%)
- Cash: ~$3,936 (~38.5%)
- Gross exposure: ~61.5%

## Next Hourly Preview — Fri Jun 5 13:35Z (9:35 AM ET)
- Evaluate NVDA price action pre-market / at open. If pullback below $216 with $210 stop intact, may authorize 2–3 share add with ≥2:1 R:R.
- If SOXX holds above $590 through today's close, prepare re-entry authorization for tomorrow (buy 1–2 shares on stabilization >$605).
- Monitor chip-sector sentiment after AVGO/CRWD/CIEN earnings washout.
- Re-verify code integrity (`git diff --stat`) before any new directives.
- Review all filled orders since 19:35Z for unauthorized activity.

## This Cycle — 2026-06-04 ~19:20Z (Tactical Executor)
- **Event detector:** Could not run — Alpaca SDK/data API unresponsive (times out on snapshots/bars/positions). Manual price scan via direct fetch used.
- **Live broker refresh:** Equity $10,195.21 | Cash $3,936.19 | Long $6,259.02 | Gross exposure ~61.4% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, NVDA 2 (Alpaca positions endpoint also hanging; inferred from account math and prior state).
- **Price check:**
  - QQQ: latest fetch timed out; prior quote $742.21 (well above $725 stop ✓)
  - VOO: latest fetch timed out; prior quote $696.67 (well above $685 stop ✓)
  - NVDA: latest trade $217.83 (above $210 stop ✓; above $216.00 conditional-buy threshold — NO buy triggered)
  - SPY: $756.16
- **No new unauthorized trades detected.** Account equity declined ~$22 since 17:35Z due to NVDA pullback from ~$219 to ~$218.
- **Orders placed:** NONE.
- **Decision rationale:**
  1. All held positions are above their protective stops. No stop breaches.
  2. NVDA pulled back to ~$217.83 but did NOT drop below the $216.00 conditional-buy threshold set by hourly at 17:35Z. No buy executed.
  3. QQQ and VOO are at concentration caps; adding would breach code-enforced limits.
  4. SOXX, AVGO, GOOG, META, and all other universe symbols are explicitly blocked by todo.md `DO NOT BUY` / `DO NOT RE-BUY` / `bannedSymbols` guards.
  5. Gross exposure at ~61.4% is inside the hourly target band (60–70%). No urgency to deploy.
- **Next expected action:** Monitor NVDA for potential pullback below $216.00 on next tactical cycle; if threshold breached, execute BUY 2 shares limit $216.50 per hourly authorization. Otherwise HOLD all.

## This Cycle — 2026-06-04 19:35Z (Hourly Update)
- **Repo integrity:** VERIFIED. No unauthorized source modifications. Branch up to date with origin/main.
- **Live broker refresh:** Equity $10,229.11 | Cash $3,936.19 | Long $6,292.92 | Gross exposure ~61.5% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,458.54), VOO 2 ($1,394.06), NVDA 2 ($440.32).
- **No new unauthorized trades since 18:35Z.** All fills match prior known state.
- **Portfolio today:** ~−1.97% vs SPY ~+0.52%. AVGO wipeout remains the drag.
- **Gap to SPY:** ~3.3 pp since inception.
- **No hard lock.** Process discipline restored.
- **Stops active:** QQQ $725, VOO $685, NVDA $210.
- **Decision:** HOLD all positions. No new buys at current levels. NVDA add deferred to pullback with ≥2:1 R:R. SOXX re-entry deferred to tomorrow if >$590.
