# Tactical Todo — Updated 2026-06-02 13:35Z (Tuesday 9:35 AM ET)
*HARD_LOCK LIFTED. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** $10,345.73 / $1,777.45 / $12,123.18
- **Gross long exposure:** ~82.8% | **Net exposure:** ~82.8% | **Cash:** ~17.2%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Event detector:** NONE at 13:35Z. No events flagged.
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.

## Position Instructions — Tue June 2 (9:35 AM ET)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~42.95%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~17.03%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~22.7% cap.
- Unrealized +5.92% from avg $554.51.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX today. At cap.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.46%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.2% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position blended avg $435.92. Current price ~$484.98 (unrealized +11.25%).
- Pre-earnings catalyst (earnings June 3, Wed after close — binary event in ~28 hours). GOOG $80B AI raise directly benefits AVGO; stock +6% today on this news.
- **ANTI-CHURN CRITICAL:** AVGO shares were NOT bought today. However, DO NOT SELL AVGO today under any circumstances unless hourly note explicitly authorizes. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: catastrophic pre-earnings/earnings technical breakdown.
- Do NOT add AVGO today. Earnings risk in ~28 hours. Binary event — no adds ahead of print.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold June 1: 1 share @ $372.02 (stop), 2 shares @ $370.50 (limit).
- Realized loss on GOOG position: ~$64.50 total.
- **24-HOUR COOLDOWN:** DO NOT RE-BUY GOOG until after 2026-06-02 13:54Z (Tuesday 9:54 AM ET) unless hourly note explicitly authorizes.
- Even after cooldown expires, DO NOT RE-BUY GOOG unless it reclaims $385 with volume AND hourly explicitly authorizes.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred. NVDA at ~$225.60 after Computex.
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
   - AVGO only post-earnings (after June 3 close) AND if pullback to $425 or below AND hourly authorizes.
   - GOOG re-entry only after reclaims $385 with volume AND hourly authorizes.

## Expected Book (Current)
- QQQ 6 (~42.9%), SOXX 3 (~17.0%), VOO 2 (~13.5%), AVGO 2 (~9.4%)
- Cash: ~$1,777 (~17.2%)
- Gross exposure: ~82.8%

## Next Hourly Preview — Tue June 2 14:35Z (10:35 AM ET) (NOT AUTHORIZED YET)
- Monitor AVGO momentum into earnings (June 3 after close).
- Evaluate NVDA pullback for potential re-entry.
- Reassess cash deployment if gross exposure remains below 85%.
- GOOG 24-hour cooldown expires ~13:54Z today; still blocked by $385 reclaim rule.

## This Cycle — 2026-06-02 13:35Z
- **Event detector:** NONE.
- **Live broker refresh:** Equity $10,345.73 | Cash $1,777.45 | Long $8,568.28 | Short $0 | Gross exposure 82.8% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,443.48), AVGO 2 ($969.96), SOXX 3 ($1,761.96), VOO 2 ($1,392.88).
- **Protective stops:** QQQ $740.58 (>725.0 ✓), AVGO $484.98 (>400.0 ✓), SOXX $587.32 (>540.0 ✓), VOO $696.44 (>685.0 ✓). None breached.
- **Orders placed:** None. No hourly triggers, no protective stop breaches.
- **Next expected action:** Continue holding until next hourly guidance at 14:35Z Tue or protective stop breach.
