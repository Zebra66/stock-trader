# Tactical Todo — Updated 2026-06-04 16:38Z (Thursday 12:38 PM ET)
**HARD_LOCK LIFTED** — Hourly strategist explicitly lifted at 16:38Z. Process discipline restored. Market OPEN.

## Current State
- **Regime:** neutral-offensive (exposure target 60–75%)
- **Live book:** QQQ 6, VOO 2. SOXX FULLY EXITED (0 shares). AVGO FULLY EXITED.
- **Account equity / cash / buying power:** $10,201.84 / $4,372.41 / $29,148.49
- **Gross long exposure:** ~57.1% | **Net exposure:** ~57.1% | **Cash:** ~42.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN. Next hourly at 17:35Z (1:35 PM ET).
- **Code integrity:** VERIFIED. No unauthorized source modifications. Branch up to date.

## Position Instructions — Thu June 4 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~43.5%, within 45% cap. Adding 1 share would breach cap.
- Intraday −0.55% ($744.21 → $739.79). Core liquid growth. Let run.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $725.00 with limit $724.50. Rationale: protect core on broad-market risk-off.
- Do NOT add QQQ today. At cap.

### VOO — HOLD 2 — DO NOT ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Up +0.32% today. Stable.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $685.00 with limit $684.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. 3 shares would exceed 20% cap.

### NVDA — AUTHORIZED BUY 2 SHARES — LIMIT $218.50
- **HOUR EXPLICITLY AUTHORIZES:** BUY 2 shares of NVDA with limit order $218.50. Rationale: relative strength +1.53% today while SOXX −2.45% and AVGO −14.5%. Decoupling from Broadcom-specific headwind. Small position, tight stop.
- Current price ~$218.10. Use limit $218.50 to ensure fill without excessive slippage.
- **Defensive stop:** SELL 2 shares if price drops below $210.00 with limit $209.50. Rationale: cut risk if chip weakness spreads to NVDA.
- **Do NOT add beyond 2 shares today.** Max 7 shares under 15% cap, but keep risk small.
- **Do NOT sell NVDA today unless stop $210 is breached.**

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
1. **BUY NVDA 2 shares @ limit $218.50** — priority 1. Execute immediately if not already filled.
2. **HOLD QQQ 6, VOO 2.** Monitor stops.
3. **No other adds today.**

## Expected Book After NVDA Fill
- QQQ 6 (~43.5%), VOO 2 (~13.6%), NVDA 2 (~4.3%)
- Cash: ~$3,935 (~38.6%)
- Gross exposure: ~61.4%

## Next Hourly Preview — Thu June 4 17:35Z (1:35 PM ET)
- Evaluate NVDA fill and price action.
- If NVDA filled and holding above $215, maintain stop $210.
- If NVDA did not fill and price remains near $218, re-authorize limit buy.
- Monitor chip-sector stabilization after AVGO/CRWD/CIEN earnings washout.
- Re-verify code integrity (`git diff --stat`) before any new directives.
- Review all filled orders since 16:35Z for unauthorized activity.

## This Cycle — 2026-06-04 16:38Z (Hourly Update)
- **Repo integrity:** VERIFIED. No unauthorized source modifications. Branch up to date with origin/main.
- **Live broker refresh:** Equity $10,201.84 | Cash $4,372.41 | Long $5,829.43 | Gross exposure ~57.1% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,438.74), VOO 2 ($1,390.69), SOXX 0.
- **No new unauthorized trades since 15:35Z.** All fills match prior known state.
- **Portfolio today:** ~−2.2% vs SPY +0.31%. AVGO wipeout remains the drag.
- **Gap to SPY:** ~3.24 pp since inception.
- **HARD_LOCK LIFTED at 16:38Z.** Process discipline restored. NVDA buy authorized.
- **Stops active:** QQQ $725, VOO $685, NVDA $210 (after fill).
