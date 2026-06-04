# Tactical Todo — Updated 2026-06-04 14:35Z (Thursday 10:35 AM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market OPEN.*

## Current State
- **Regime:** neutral with defensive tilt (65–80% band)
- **Live book:** QQQ 6, SOXX 2, VOO 2. AVGO **FULLY EXITED**. SOXX trim filled at $584.09.
- **Account equity / cash / buying power:** $10,161.65 / $3,171.86 / $26,667.02
- **Gross long exposure:** ~68.8% | **Net exposure:** ~68.8% | **Cash:** ~31.2%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN. Next hourly at 15:35Z (11:35 AM ET).
- **Code integrity:** VERIFIED on this run. Tactical agent must NOT modify source code.

## Position Instructions — Thu June 4 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.5%, within 45% cap. Adding 1 share would breach cap.
- Intraday −1.03% ($744.21 → $737.02). Core liquid growth. Let run.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $725.00 with limit $724.50. Rationale: protect core on broad-market risk-off.
- Do NOT add QQQ today. At cap.

### SOXX — HOLD 2 — DO NOT ADD
- Weight ~11.6%, within 20% non-QQQ ETF cap.
- Unrealized +6.61% from avg $554.51 (2 shares). Intraday −4.0% on AVGO/CRWD/CIEN tech earnings contagion.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $580.00 with limit $579.50. Rationale: lock in remaining profit if chip-sector breakdown continues.
- **Contingency (HOUR EXPLICITLY AUTHORIZES):** If event detector flags CRITICAL on SOXX OR price drops below $570.00, SELL remaining 1 share with limit $569.50.
- Do NOT sell remaining 1 share for any other reason without hourly authorization.
- Do NOT add SOXX today. Sector sentiment fragile.
- **Illiquidity warning:** SOXX trade count is low. Use limit orders only.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Stable −0.20% today. No action required.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $685.00 with limit $684.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. Hourly blocks adds to preserve cash and avoid breaching cap (3 shares would exceed 20%).

### AVGO — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- 2 shares sold at $405.16 (13:45Z). Realized loss ~$61.52.
- Earnings disappointment + AI chip forecast miss = structural sentiment damage. No re-entry today.
- **ANTI-CHURN:** AVGO was sold TODAY. DO NOT BUY AVGO back today under any circumstances. Same-day round trip is prohibited.
- Re-entry deferred to future hourly authorization only after stabilization above $420.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All shares sold June 1. No re-entry.
- DO NOT RE-BUY GOOG.

### NVDA — DO NOT BUY TODAY — DO NOT RE-BUY
- Re-entry deferred. Flat today despite chip rout = relative strength, but chasing into a sector washout is poor risk/reward.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $210.00 or below AND hourly explicitly authorizes AND chip sentiment stabilizes (SOXX above $580).

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle.** Gross exposure is 68.8%; within 65–80% band. No symbol offers a 2:1 reward:risk setup right now.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - If a symbol was sold today, do NOT buy it back today unless hourly note explicitly authorizes.
  - AVGO was sold TODAY at 13:45Z. DO NOT BUY AVGO today.
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
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`, `active: false`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **HOLD all positions.** Monitor SOXX and QQQ price action.
2. **HOLD cash** (~$3,172, ~31.2%) for defensive flexibility or high-conviction dip buy only after chip/tech sentiment stabilizes.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $210 or below AND chip sentiment stabilizes (SOXX > $580).
   - QQQ only if it dips to $725 area AND holds — but do NOT add if stop is triggered.
   - GOOG re-entry BLOCKED.
   - AVGO re-entry BLOCKED until stabilization above $420 AND hourly authorizes.

## Expected Book Into Next Session
- QQQ 6 (~43.5%), SOXX 2 (~11.6%), VOO 2 (~13.6%)
- Cash: ~$3,172 (~31.2%)
- Gross exposure: ~68.8%

## Next Hourly Preview — Thu June 4 15:35Z (11:35 AM ET)
- Evaluate chip-sector stabilization or further deterioration after AVGO/CRWD/CIEN earnings washout.
- Reassess SOXX after protective trim. Watch remaining 2-share core and $580 stop proximity.
- Monitor broad-market health (SPY, VOO, Dow) for rotation confirmation.
- Determine if NVDA relative strength on further dip warrants a small add.
- Re-verify code integrity (`git diff --stat`) before any new directives.

## This Cycle — 2026-06-04 14:35Z (Hourly Update)
- **Repo integrity:** VERIFIED. No unauthorized source modifications. Branch up to date.
- **Live broker refresh:** Equity $10,161.65 | Cash $3,171.86 | Long $6,989.79 | Gross exposure ~68.8% | Daytrade 0/3.
- **SOXX trim filled:** SOLD 1 share @ $584.09 (better than $579.50 limit). Holding 2 shares as core chip exposure.
- **Holdings confirmed:** QQQ 6 ($4,421.01), SOXX 2 ($1,182.38), VOO 2 ($1,386.40).
- **Portfolio today:** ~−2.6% vs SPY ~+0.3%. AVGO wipeout is primary drag; tech rotation amplifying.
- **Gap to SPY:** ~3.39 pp (narrowed slightly from ~3.49 pp due to better SOXX trim fill).
- **Stops active:** QQQ $725, SOXX $580, VOO $685.
- **No orders authorized now.** Next tactical runs at 14:40Z and 14:50Z.
