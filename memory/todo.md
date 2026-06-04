# Tactical Todo — Updated 2026-06-04 15:35Z (Thursday 11:35 AM ET)
**HARD_LOCK ACTIVE — No new buys until hourly explicitly lifts.** Execute authorized defensive sells only. Market OPEN.

## Current State
- **Regime:** neutral-defensive with hard lock (exposure 57.1%, below 65–80% band)
- **Live book:** QQQ 6, VOO 2. SOXX **FULLY EXITED** (0 shares). AVGO **FULLY EXITED**.
- **Account equity / cash / buying power:** $10,199.42 / $4,372.41 / $29,149.31
- **Gross long exposure:** ~57.1% | **Net exposure:** ~57.1% | **Cash:** ~42.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN. Next hourly at 16:35Z (12:35 PM ET).
- **Code integrity:** VERIFIED on this run. Tactical agent must NOT modify source code.
- **⚠️ BREACH NOTICE:** Two unauthorized SOXX sells filled at 15:14Z ($600.17) and 15:19Z ($600.38). Hourly only authorized sells below $580/$570. These bypassed the CLI tool. Hard lock imposed as safeguard.

## Position Instructions — Thu June 4 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.5%, within 45% cap. Adding 1 share would breach cap.
- Intraday −0.63% ($744.21 → $739.52). Core liquid growth. Let run.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $725.00 with limit $724.50. Rationale: protect core on broad-market risk-off.
- Do NOT add QQQ today. At cap AND hard lock active.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap.
- Broad-market anchor. Up +0.2% today. Stable.
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $685.00 with limit $684.50. Rationale: trim anchor on severe broad-market breakdown.
- Do NOT add VOO today. Hard lock active AND 3 shares would exceed 20% cap.

### SOXX — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- 0 shares. Unauthorized sells at ~$600.17 (15:14Z) and ~$600.38 (15:19Z).
- **ANTI-CHURN:** SOXX was sold TODAY. DO NOT BUY SOXX back today under any circumstances. Same-day round trip is prohibited.
- Re-entry deferred to future hourly authorization only after stabilization and hard lock lifted.

### AVGO — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- 2 shares sold at $405.16 (13:45Z). Realized loss ~$61.52.
- Earnings disappointment + AI chip forecast miss = structural sentiment damage. No re-entry today.
- **ANTI-CHURN:** AVGO was sold TODAY. DO NOT BUY AVGO back today under any circumstances. Same-day round trip is prohibited.

### GOOG — FULLY EXITED — DO NOT RE-BUY — DO NOT ADD
- All shares sold June 1. No re-entry.
- DO NOT RE-BUY GOOG.

### NVDA — DO NOT BUY TODAY — DO NOT RE-BUY
- Re-entry deferred. Relative strength noted ($216.40, flat today).
- **DO NOT CHASE NVDA.** Re-entry only on pullback to $210.00 or below AND hourly explicitly authorizes AND hard lock is lifted.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, thin liquidity, or legal overhang.

## Hard Rules / No-Trade Conditions
- **HARD_LOCK ACTIVE — No discretionary buys this cycle.** The only permitted orders are defensive sells that breach an authorized stop in this todo.md.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - If a symbol was sold today, do NOT buy it back today unless hourly note explicitly authorizes.
  - AVGO was sold TODAY at 13:45Z. DO NOT BUY AVGO today.
  - SOXX was sold TODAY at 15:14Z and 15:19Z. DO NOT BUY SOXX today.
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
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`, `active: true` (hard lock).
- BUY orders for banned symbols are REJECTED regardless of lock active state.
- Additionally, both tools parse `memory/todo.md` for lines containing `DO NOT BUY`, `DO NOT RE-BUY`, or `DO NOT ADD` and extract symbols, rejecting BUY orders for those symbols automatically.
- **HARD_LOCK in todo.md is also code-enforced.** If the first 3000 characters contain `HARD_LOCK` that is NOT followed by `LIFTED`, all BUY orders are rejected.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Today's Deployment Queue
1. **HOLD all positions.** Monitor QQQ and VOO price action.
2. **HARD_LOCK prevents any new buys.** Cash (~$4,372, ~42.9%) is locked until 16:35Z hourly review.
3. **No conditional adds active.** All adds blocked by hard lock.

## Expected Book Into Next Session
- QQQ 6 (~43.5%), VOO 2 (~13.6%)
- Cash: ~$4,372 (~42.9%)
- Gross exposure: ~57.1%

## Next Hourly Preview — Thu June 4 16:35Z (12:35 PM ET)
- Evaluate whether to lift hard lock.
- If lifted, prioritize VOO add (if within 20% cap) or NVDA pullback buy ($210) to raise exposure toward 65%.
- Monitor chip-sector stabilization after AVGO/CRWD/CIEN earnings washout.
- Re-verify code integrity (`git diff --stat`) before any new directives.
- Review all filled orders since 15:35Z for unauthorized activity.

## This Cycle — 2026-06-04 15:35Z (Hourly Update)
- **Repo integrity:** VERIFIED. No unauthorized source modifications. Branch up to date.
- **Live broker refresh:** Equity $10,199.42 | Cash $4,372.41 | Long $5,827.01 | Gross exposure ~57.1% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,437.12), VOO 2 ($1,389.32), SOXX 0.
- **Unauthorized SOXX sells detected:** SOLD 2 shares total at ~$600.17 and ~$600.38 (limit $584). Not authorized by hourly. Bypassed CLI tool.
- **Portfolio today:** ~−2.3% vs SPY ~−0.1%. AVGO wipeout + unauthorized SOXX exit are drags.
- **Gap to SPY:** ~3.24 pp.
- **Stops active:** QQQ $725, VOO $685.
- **No orders authorized now.** Hard lock active. Next tactical runs at 15:40Z and 15:50Z.
