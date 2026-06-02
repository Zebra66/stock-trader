# Tactical Todo — Updated 2026-06-02 20:18Z (Tuesday 4:18 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market CLOSED. Next open: Wed June 3 13:30Z/9:30 AM ET.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** $10,436.93 / $1,777.45 / $12,214.38
- **Gross long exposure:** ~82.97% | **Net exposure:** ~82.97% | **Cash:** ~17.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** CLOSED until 13:30Z Wed June 3.
- **New macro risk:** GOOG announced $80B equity offering (dilutive). Fed hawkishness persists. Iran peace talks unclear.

## Position Instructions — Wed June 3 (Next Session)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~42.9%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~17.4%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~23.2% cap.
- Unrealized +9.11% from avg $554.51.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX today. At cap.
- **Illiquidity warning:** SOXX trade count is very low. Use limit orders only.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.4%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~20.1% cap.
- Broad-market anchor. No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY
- Position blended avg $435.92. Current price ~$483.06 (unrealized +10.81%).
- Pre-earnings catalyst (earnings June 3, Wed after close — binary event). Custom silicon thesis validated by broader chip rally (Marvell +30% today on Jensen trillion-dollar comment).
- **ANTI-CHURN CRITICAL:** AVGO shares were NOT bought today. However, DO NOT SELL AVGO today under any circumstances unless hourly note explicitly authorizes. Same-day round trip is prohibited.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES for future sessions):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: catastrophic pre-earnings/earnings technical breakdown.
- Do NOT add AVGO today. Earnings risk. Binary event — no adds ahead of print.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold June 1: 1 share @ $372.02 (stop), 2 shares @ $370.50 (limit).
- Realized loss on GOOG position: ~$64.50 total.
- **Major negative catalyst:** Alphabet announced $80 billion equity offering to fund AI data centers. Dilutive overhang. Stock closed at $358.39.
- DO NOT RE-BUY GOOG under any circumstances near-term. Even if price bounces, $80B offering is structural negative.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred. NVDA at ~$222.82 after pullback. Down today.
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $218 or below AND hourly explicitly authorizes.
- Focus on AVGO/SOXX chip exposure.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No discretionary buys at open or into the morning unless hourly explicitly authorizes.** Gross exposure is 82.97%; adding any share pushes toward 90% upper bound and is blocked by concentration caps or earnings risk.
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

## Today's Deployment Queue (Wed June 3)
1. **HOLD all positions.** No new orders authorized at open or into the morning.
2. **HOLD cash** for post-AVGO-earnings opportunity or defensive flexibility.
3. **Conditional add queue (requires explicit hourly authorization):**
   - NVDA if pullback to $218 or below.
   - AVGO only post-earnings (after June 3 close) AND if pullback to $425 or below AND hourly authorizes.
   - GOOG re-entry BLOCKED. Do not add.

## Expected Book Into Next Session
- QQQ 6 (~42.9%), SOXX 3 (~17.4%), VOO 2 (~13.4%), AVGO 2 (~9.3%)
- Cash: ~$1,777 (~17.0%)
- Gross exposure: ~83.0%

## Next Hourly Preview — Wed June 3 13:35Z (9:35 AM ET) (NOT AUTHORIZED YET)
- Monitor AVGO momentum into earnings (June 3 after close).
- Evaluate NVDA pullback for potential re-entry.
- Reassess cash deployment if gross exposure remains below 85% and compelling setup emerges.
- Watch for risk-off rotation following Fed hawkishness / Iran uncertainty.
- First hourly after market open — 5 minutes after open.

## This Cycle — 2026-06-02 20:18Z (Close)
- **Event detector:** MINOR (SOXX up 0.6% in 30 min). No action required.
- **Live broker refresh:** Equity $10,436.93 | Cash $1,777.45 | Long $8,659.48 | Short $0 | Gross exposure 82.97% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,481.18), AVGO 2 ($966.12), SOXX 3 ($1,815.00), VOO 2 ($1,397.18).
- **Protective stops:** QQQ $746.86 (>725.0 ✓), AVGO $483.06 (>400.0 ✓), SOXX $605.00 (>540.0 ✓), VOO $698.59 (>685.0 ✓). None breached.
- **Orders placed:** None. Market closed. No hourly triggers, no protective stop breaches.
- **Next expected action:** Continue holding until next hourly guidance at 13:35Z Wed or protective stop breach.
