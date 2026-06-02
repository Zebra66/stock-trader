# Tactical Todo — Updated 2026-06-02 14:10Z (Tuesday 10:10 AM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market OPEN until 20:00Z/16:00 ET.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** ~$10,376 / ~$1,777 / ~$12,153
- **Gross long exposure:** ~82.9% | **Net exposure:** ~82.9% | **Cash:** ~17.1%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.

## Position Instructions — Tue June 2 (:40 / :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.0%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~17.1%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~22.7% cap.
- Unrealized +7.16% from avg $554.51. Up sharply today (+3.9%).
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX today. At cap.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.4%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.1% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position blended avg $435.92. Current price ~$480.28 (unrealized +10.18%). Up sharply today (+4.4%).
- Pre-earnings catalyst (earnings June 3 after close — binary event in ~30 hours). Strong fundamental momentum.
- **ANTI-CHURN CRITICAL:** AVGO shares were NOT bought today. However, DO NOT SELL AVGO today under any circumstances unless hourly note explicitly authorizes. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: catastrophic breakdown.
- Do NOT add AVGO today. Earnings risk in ~30 hours. Binary event — no adds ahead of print.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold June 1. Realized loss on GOOG position: ~$64.50 total.
- **24-HOUR COOLDOWN EXPIRED** at 2026-06-02 13:52Z. However, GOOG remains weak ($362.56, -4.41% 1W). DO NOT RE-BUY.
- Re-entry only if it reclaims $385 with volume AND hourly explicitly authorizes.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred. NVDA at $230.00, above $218 trigger.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $218 or below AND hourly explicitly authorizes.
- Focus on AVGO/SOXX chip exposure. Already 69% tech/semiconductor concentration.

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
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`, `active: false`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **HOLD all positions.** No new orders authorized this cycle. Gross exposure 82.9% is within 80–90% band.
2. **HOLD cash** for post-AVGO-earnings opportunity, NVDA pullback, or defensive flexibility. Cash deployment requires hourly authorization.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $218 or below.
   - AVGO only post-earnings (after June 3) AND if pullback to $425 or below AND hourly authorizes.
   - GOOG re-entry only if reclaims $385 with volume AND hourly authorizes.

## Expected Book (Current)
- QQQ 6 (~43.0%), SOXX 3 (~17.1%), VOO 2 (~13.4%), AVGO 2 (~9.3%)
- Cash: ~$1,777 (~17.1%)
- Gross exposure: ~82.9%

## Next Hourly Preview — Tue June 2 15:35Z (11:35 AM ET) (NOT AUTHORIZED YET)
- Monitor AVGO momentum into earnings (June 3 after close).
- Evaluate NVDA pullback for potential re-entry.
- Reassess cash deployment if gross exposure remains below 85%.
- SOXX at cap; do not add unless price drops significantly and hourly authorizes.

## This Cycle — 2026-06-02 14:10Z
- **Event detector:** NONE.
- **Live broker refresh:** Equity $10,375.98 | Cash $1,777.45 | Long $8,598.53 | Short $0 | Gross exposure 82.9% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,460.94), AVGO 2 ($960.56), SOXX 3 ($1,782.60), VOO 2 ($1,393.31).
- **Protective stops:** QQQ $743.49 (>725.0 ✓), AVGO $480.28 (>400.0 ✓), SOXX $594.20 (>540.0 ✓), VOO $696.655 (>685.0 ✓). None breached.
- **Orders placed:** None. No hourly triggers, no protective stop breaches, NVDA above $218 trigger.
- **Next expected action:** Continue holding until next hourly guidance at 15:35Z or protective stop breach.
