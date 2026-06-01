# Tactical Todo — Updated 2026-06-01 13:52Z (Monday 9:52 AM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 2, VOO 2, AVGO 2
- **Account equity / cash / buying power:** ~$10,184 / ~$2,339 / ~$12,523
- **Gross long exposure:** ~77.0% | **Net exposure:** ~77.0% | **Cash:** ~23.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.

## Position Instructions — Mon June 1 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.5%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 2 — ADD 1 SHARE AUTHORIZED
- Weight ~11.0%, within 20% non-QQQ ETF cap.
- Unrealized +2.11% from avg $550.97. Today –1.14% on pullback.
- **BUY 1 share limit $565.00.** Rationale: deploy freed cash into highest-alpha chip exposure on minor pullback. Order should fill near current price (~$562.61). Post-add weight ~16.6%.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback after parabolic run. If triggered, hold remaining 2 shares as core.
- Do NOT add beyond 1 share today.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.4% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position opened at $427.37; 2nd share filled at $444.47. Blended avg $435.92. Current price ~$449.31 (unrealized +3.07% blended). Today +0.57%.
- Pre-earnings catalyst (earnings June 3, Wednesday). Strong fundamental momentum.
- **ANTI-CHURN CRITICAL:** AVGO 2nd share was bought May 29 at 9:56 AM ET. DO NOT SELL AVGO today under any circumstances. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: pre-earnings technical breakdown.
- Do NOT add AVGO today. Earnings risk in 2 days.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold today: 1 share @ $372.02 (stop), 2 shares @ $370.50 (limit).
- Realized loss on GOOG position: ~$64.50 total (~$20.90 on 1st share, ~$43.60 on remaining 2 shares).
- **24-HOUR COOLDOWN:** DO NOT RE-BUY GOOG until after 2026-06-02 13:35Z (Tuesday 9:35 AM ET) unless hourly note explicitly authorizes.
- Re-entry only if it reclaims $385 with volume and hourly authorizes.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. 24-hour cooldown expired, but hourly explicitly does NOT authorize re-entry today.
- Re-entry deferred to future hourly authorization. Focus on AVGO/SOXX chip exposure.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - AVGO add filled May 29 — DO NOT SELL AVGO today under any circumstances.
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
1. **BUY 1 SOXX limit @ $565.00** — highest priority. Deploy freed GOOG cash into chip ETF.
2. **HOLD cash** for defensive flexibility or next hourly authorization.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $215 or below.
   - AVGO only if pullback to $425 or below AND hourly explicitly authorizes pre-earnings add.
   - GOOG re-entry only after 24-hour cooldown AND reclaims $385 with volume.

## Expected Book (Post-SOXX Fill)
- QQQ 6 (~43.5%), SOXX 3 (~16.6%), VOO 2 (~13.6%), AVGO 2 (~8.8%)
- Cash: ~$1,774 (~17.4%)
- Gross exposure: ~82.6%

## Next Hourly Preview — 10:35 AM ET (NOT AUTHORIZED YET)
- Monitor SOXX fill and AVGO momentum into earnings (June 3).
- Evaluate NVDA pullback for potential re-entry.
- Reassess cash deployment if gross exposure remains below 80%.
