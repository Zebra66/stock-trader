# Tactical Todo — Updated 2026-05-29 13:56Z (Friday 9:56 AM ET)
*HARD_LOCK LIFTED. AVGO add filled. No open orders. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 2
- **Account equity / cash / buying power:** ~$10,254 / ~$1,226 / ~$11,480
- **Gross long exposure:** ~88.0% | **Net exposure:** ~88.0% | **Cash:** ~12.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.

## Position Instructions — Fri May 29 (:40 and :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.4%, within 45% cap. Adding 1 share would breach cap.
- Intraday +0.47%. Core liquid growth. Let run.

### GOOG — HOLD 3 — DO NOT ADD
- Weight ~11.1%, within 15% cap. Adding 1 share would be ~14.8% (still within cap), but DO NOT ADD — standing learning: never average down on a position that is underwater. Wait for support reclaim.
- Unrealized –3.45% from avg $392.92. News (Waymo, AI cloud) supportive long-term. Hold for recovery.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $370.00. Rationale: protect capital on breakdown below support.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.4% cap.
- Broad-market anchor. No action required.

### SOXX — HOLD 2 — DO NOT ADD
- Weight ~11.3%, within 20% non-QQQ ETF cap.
- Unrealized +4.93% from avg $550.97. Today +1.52%. AI memory shortage headlines supportive.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00. Rationale: protect capital on deeper pullback after parabolic weekly run. If triggered, hold remaining 1 share as core.
- Do NOT add on rally today. Standing learning: do not chase +28% 1M ETF.

### AVGO — HOLD 2 — DO NOT ADD
- Position opened at $427.37; 2nd share filled at $444.47. Blended avg $435.92. Current price ~$445.00 (unrealized +2.08% blended). Today +4.32% on $36B Anthropic AI chip debt deal.
- Pre-earnings catalyst (earnings June 3, next Wednesday). Strong fundamental momentum.
- **FILLED at 9:56 AM ET:** Bought 1 share @ $444.47 (limit $444.50). Deployed cash into highest-conviction chip name.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all AVGO shares if price drops below $400.00. Rationale: pre-earnings technical breakdown.
- Do NOT sell AVGO today. Anti-churn: no same-day round trips.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. 24-hour cooldown expired, but hourly explicitly does NOT authorize re-entry today.
- Re-entry deferred to future hourly authorization. Focus on AVGO/SOXX chip exposure.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.
- Exception: HOOD has momentum (+19% 1W) on Trump account/app launch news, but no clear edge and high churn risk. Hourly explicitly does NOT authorize a buy.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - AVGO add authorized today — DO NOT SELL AVGO today under any circumstances.
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
1. **AVGO add: FILLED** at 9:56 AM ET @ $444.47.
2. **No other buys** authorized for this cycle.

## Expected Book After Fill
- QQQ 6 (~43.4%), GOOG 3 (~11.1%), VOO 2 (~13.6%), SOXX 2 (~11.3%), AVGO 2 (~8.6%)
- Cash: ~$1,225 (~12.0%)
- Gross exposure: ~88.0%

## Next Hourly Preview — 10:35 AM ET (NOT AUTHORIZED YET)
- Reassess AVGO fill and chip momentum.
- GOOG: If it reclaims $385, consider adding 1 share IF equity and concentration caps permit.
- NVDA re-entry watch: deferred until explicit hourly authorization.
