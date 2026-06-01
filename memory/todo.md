# Tactical Todo — Updated 2026-06-01 17:35Z (Monday 1:35 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market OPEN until 20:00Z/16:00 ET.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** ~$10,273 / ~$1,777 / ~$12,051
- **Gross long exposure:** ~82.7% | **Net exposure:** ~82.7% | **Cash:** ~17.3%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.

## Position Instructions — Mon June 1 (:50 / :10 / :20 / :30 / :40 / :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.4%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~16.8%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~22.4% cap.
- Unrealized +3.58% from avg $554.51. Today +0.93% after prior run.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback after parabolic run. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX today. At cap.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.4% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position blended avg $435.92. Current price ~$460.97 (unrealized +5.75%). Today +3.18%.
- Pre-earnings catalyst (earnings June 3, Tuesday/Wednesday — binary event in ~24 hours). Strong fundamental momentum.
- **ANTI-CHURN CRITICAL:** AVGO shares were NOT bought today. However, DO NOT SELL AVGO today under any circumstances unless hourly note explicitly authorizes. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: catastrophic pre-earnings technical breakdown.
- Do NOT add AVGO today. Earnings risk in ~24 hours. Binary event — no adds ahead of print.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold today: 1 share @ $372.02 (stop), 2 shares @ $370.50 (limit).
- Realized loss on GOOG position: ~$64.50 total.
- **24-HOUR COOLDOWN:** DO NOT RE-BUY GOOG until after 2026-06-02 13:52Z (Tuesday 9:52 AM ET) unless hourly note explicitly authorizes.
- Re-entry only if it reclaims $385 with volume and hourly authorizes.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred. NVDA rallied +5.01% today on Computex news to ~$221.72.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $218 or below AND hourly explicitly authorizes.
- Focus on AVGO/SOXX chip exposure.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
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
1. **HOLD all positions.** No new orders authorized this cycle.
2. **HOLD cash** for defensive flexibility or next hourly authorization.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $218 or below.
   - AVGO only post-earnings (after June 3) AND if pullback to $425 or below AND hourly authorizes.
   - GOOG re-entry only after 24-hour cooldown AND reclaims $385 with volume.

## Expected Book (Current)
- QQQ 6 (~43.4%), SOXX 3 (~16.8%), VOO 2 (~13.6%), AVGO 2 (~9.0%)
- Cash: ~$1,777 (~17.3%)
- Gross exposure: ~82.7%

## Next Hourly Preview — 14:35 PM ET (NOT AUTHORIZED YET)
- Monitor AVGO momentum into earnings (June 3).
- Evaluate NVDA pullback for potential re-entry.
- Reassess cash deployment if gross exposure remains below 80%.
