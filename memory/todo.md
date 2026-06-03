# Tactical Todo — Updated 2026-06-03 13:35Z (Wednesday 9:35 AM ET)
*HARD_LOCK LIFTED. Execute authorized orders only. Market closes at 16:00 ET (~6.5 hr).*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, SOXX 3, VOO 2, AVGO 2
- **Account equity / cash / buying power:** $10,455.65 / $1,777.45 / $12,233.10
- **Gross long exposure:** ~83.0% | **Net exposure:** ~83.0% | **Cash:** ~17.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.
- **New macro risk:** Inflation warning (higher inflation, lower growth). ADP jobs strong. Fed hawkishness persists. Iran peace talks unclear, oil climbing.

## Position Instructions — Wed June 3

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~42.8%, within 45% cap. Adding 1 share would breach cap.
- Core liquid growth. No action required.

### SOXX — HOLD 3 — DO NOT ADD
- Weight ~17.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach ~23.6% cap.
- Unrealized +10.63% from avg $554.51.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00 with limit $539.50. Rationale: protect capital on deeper pullback. If triggered, hold remaining 2 shares as core.
- Do NOT add SOXX today. At cap.
- **Illiquidity warning:** SOXX trade count is very low. Use limit orders only.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.3%, within 20% non-QQQ ETF cap. Adding 1 share would reach ~20.0% cap.
- Broad-market anchor. Hourly explicitly BLOCKS add today.
- No action required.

### AVGO — HOLD 2 — DO NOT ADD — DO NOT SELL TODAY UNLESS STOP BREACH
- Position blended avg $435.92. Current price ~$483.00 (unrealized +10.80%).
- Pre-earnings catalyst (earnings June 3, Wed after close — binary event). Custom silicon thesis validated by broader chip rally (Marvell +32% on Jensen trillion-dollar comment).
- **ANTI-CHURN:** AVGO shares were NOT bought today. Selling allowed if stop breached.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL all AVGO shares if price drops below $400.00 with limit $399.50. Rationale: catastrophic pre-earnings/earnings technical breakdown.
- Do NOT add AVGO today. Earnings risk. Binary event — no adds ahead of print.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All 3 shares sold June 1: 1 share @ $372.02 (stop), 2 shares @ $370.50 (limit).
- Realized loss on GOOG position: ~$64.50 total.
- **Major negative catalyst:** Alphabet announced $80 billion equity offering to fund AI data centers. Dilutive overhang. Stock at ~$360.05.
- DO NOT RE-BUY GOOG under any circumstances near-term. Even if price bounces, $80B offering is structural negative.

### NVDA — DO NOT BUY TODAY — DO NOT RE-BUY
- Fully exited May 27. Re-entry deferred to AFTER AVGO earnings (post-market today).
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $218 or below AND hourly explicitly authorizes.
- Focus on AVGO/SOXX chip exposure for now.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **No discretionary buys today unless a stop-loss is breached and hourly explicitly authorizes re-deployment.** Gross exposure is 83.0%; adding any share pushes toward 90% upper bound and is blocked by concentration caps, earnings risk, or explicit hourly block.
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
1. **HOLD all positions into the close.** No new orders authorized today except stop-loss execution.
2. **HOLD cash** for post-AVGO-earnings opportunity or defensive flexibility.
3. **Conditional add queue (requires explicit hourly authorization AFTER AVGO earnings):**
   - NVDA if pullback to $218 or below.
   - AVGO only post-earnings AND if pullback to $425 or below AND hourly authorizes.
   - GOOG re-entry BLOCKED. Do not add.

## Expected Book Into Next Session
- QQQ 6 (~42.8%), SOXX 3 (~17.6%), VOO 2 (~13.3%), AVGO 2 (~9.2%)
- Cash: ~$1,777 (~17.0%)
- Gross exposure: ~83.0%

## Next Hourly Preview — Wed June 3 14:35Z (10:35 AM ET)
- Monitor AVGO momentum into earnings (June 3 after close).
- Evaluate chip-sector health (SOXX, SMH, NVDA).
- Reassess cash deployment if gross exposure remains below 85% and compelling setup emerges.
- Watch for risk-off rotation following macro warnings / Iran uncertainty.

## This Cycle — 2026-06-03 13:35Z (Hourly)
- **Event detector:** MINOR (SOXX -0.72%, SMH -0.52% in 5 min). No action required. Prior CRITICAL at open resolved by hourly review.
- **Live broker refresh:** Equity $10,455.65 | Cash $1,777.45 | Long $8,678.20 | Short $0 | Gross exposure ~83.0% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,477.26), AVGO 2 ($966.00), SOXX 3 ($1,840.29), VOO 2 ($1,394.08).
- **Protective stops:** QQQ $746.21 (>725.0 ✓), AVGO $483.00 (>400.0 ✓), SOXX $613.43 (>540.0 ✓), VOO $697.04 (>685.0 ✓). None breached.
- **Orders placed:** None. Hold-only into AVGO earnings.
- **Next expected action:** Monitor stops only. Next tactical runs at :40Z and :50Z. No buys authorized.
