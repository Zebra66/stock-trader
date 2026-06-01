# Tactical Todo — Updated 2026-06-01 13:33Z (Monday 9:33 AM ET)
*HARD_LOCK LIFTED. GOOG stop executed. No open orders. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 2, VOO 2, SOXX 2, AVGO 2
- **Account equity / cash / buying power:** ~$10,177 / ~$1,598 / ~$11,775
- **Gross long exposure:** ~84.3% (est. post-GOOG fill) | **Net exposure:** ~84.3% | **Cash:** ~15.7%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** 1 GOOG sell limit $371.00 (pending)
- **Market:** OPEN. Next hourly ~9:35 AM ET.

## Position Instructions — Fri May 29 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.4%, within 45% cap. Adding 1 share would breach cap.
- Intraday +0.39% (Alpaca). Core liquid growth. Let run into close.

### GOOG — HOLD 2 — DO NOT ADD
- Weight ~7.3% (est. post-fill), within 15% cap.
- Unrealized –5.41% from avg $392.92. Current price ~$371.68. Support $375 broken.
- **STOP EXECUTED 13:33Z:** SELL 1 share limit $371.00 placed. Defensive stop triggered below $375.
- Do NOT sell remaining 2 shares unless hourly explicitly authorizes.
- Do NOT add GOOG. Re-entry only if reclaims $385 with volume (requires hourly auth).

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.7%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.4% cap.
- Broad-market anchor. No action required.

### SOXX — HOLD 2 — DO NOT ADD
- Weight ~11.1%, within 20% non-QQQ ETF cap.
- Unrealized +3.11% from avg $550.97. Today –0.24%.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback after parabolic run. If triggered, hold remaining 1 share as core.
- Do NOT add SOXX today. Hourly does NOT authorize new SOXX buys this cycle.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position opened at $427.37; 2nd share filled at $444.47. Blended avg $435.92. Current price ~$439.22 (unrealized +0.76% blended). Today +2.96% on $36B Anthropic AI chip debt deal and $1T club headlines.
- Pre-earnings catalyst (earnings June 3, next Wednesday). Strong fundamental momentum.
- **ANTI-CHURN CRITICAL:** AVGO 2nd share was bought TODAY at 9:56 AM ET. DO NOT SELL AVGO TODAY under any circumstances. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: pre-earnings technical breakdown.
- Do NOT add AVGO today.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. 24-hour cooldown expired, but hourly explicitly does NOT authorize re-entry today or over the weekend.
- Re-entry deferred to future hourly authorization. Focus on AVGO/SOXX chip exposure.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.
- Exception: HOOD has momentum (+22.04% 1W) but no clear edge and high churn risk. Hourly explicitly does NOT authorize a buy.

## Hard Rules / No-Trade Conditions
- **No discretionary buys this cycle or into the close.** Gross exposure is 87.98%; adding any share pushes above 90% upper bound.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - AVGO add filled today at 9:56 AM ET — DO NOT SELL AVGO today under any circumstances.
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
1. **No new buys authorized** for this cycle or into the close. Exposure band is 80–90%; current 87.98%.
2. **Conditional add queue for Monday (requires explicit hourly authorization):**
   - SOXX if pullback to $560 or below.
   - AVGO if pullback to $425 or below.
   - GOOG only if it reclaims $385 with volume — but DO NOT average down.
   - NVDA if it reclaims $220 with volume and chip rotation broadens.

## Expected Book (Post-GOOG Fill)
- QQQ 6 (~43.5%), GOOG 2 (~7.3%), VOO 2 (~13.7%), SOXX 2 (~11.1%), AVGO 2 (~8.8%)
- Cash: ~$1,598 (~15.7%)
- Gross exposure: ~84.3%

## Next Hourly Preview — Monday June 1, 9:35 AM ET (NOT AUTHORIZED YET)
- Reassess GOOG support ($375–$380) after weekend Iran-deal headlines.
- Monitor AVGO momentum into earnings (June 3).
- Evaluate chip-sector breadth (SOXX vs NVDA vs AVGO).
- Investigate event detector `priorTimestamp: null` bug and anti-churn code enforcement gap.
- If GOOG breaks $375 and stop triggers, evaluate rotation of freed cash into SOXX/AVGO on pullback.

