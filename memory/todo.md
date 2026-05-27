# Tactical Todo — Updated 2026-05-27 13:53Z (Wednesday 9:53 AM ET)
*HARD_LOCK LIFTED. Portfolio clean. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1
- **Account equity / cash / buying power:** $10,103.58 / $1,670.51 / $11,774.09
- **Gross long exposure:** 83.4% | **Net exposure:** 83.4% | **Cash:** 16.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Wed May 27 (:40 and :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.2%, within 45% cap. Adding 1 share would breach cap.
- Let momentum run. No action required.

### GOOG — HOLD 3 — DO NOT SELL OR ADD
- Weight ~11.4%, within 15% cap. Adding 1 share would breach cap (~15.1%).
- Thesis intact (orbital data-center headline). No action required.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.3%).
- Broad-market anchor. No action required.

### SOXX — HOLD 2 — DO NOT SELL
- Weight ~11.2%, within 20% non-QQQ ETF cap. Breakout validated; let momentum run.
- Add filled: bought 1 share at ~$567.54 on pullback to $568 limit.
- Rationale: added to winner on healthy pullback after +14% weekly run.

### NVDA — SOLD OUT
- ~~Stop on remaining 1 share: SELL if price breaks below $210.00~~ — EXECUTED at ~$210.00 (limit $209.90, filled).
- **DO NOT ADD NVDA.** No new buys under any circumstances. 24-hour cooldown applies if hourly ever authorizes re-entry.

### AVGO — HOLD 1 — DO NOT SELL
- Position opened at ~$427.37. Quality catch-up play within chip rally. Earnings catalyst June 3.
- Weight ~4.2% (well within 15% single-stock cap).
- Rationale: redeployed NVDA trim proceeds + cash into relative laggard with defined catalyst.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.
- Supreme Court rejection + weak 1M trend. No re-entry.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, or parabolic chase risk. RKLB 1M +72.81% is too extended.

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

## Today's Deployment Queue (Execution Completed)
1. ~~AVGO add: BUY 1 share at limit $429.50~~ — FILLED at ~$427.37.
2. ~~NVDA trim: SELL 1 share at limit $212.50 or market~~ — FILLED at ~$211.79.
3. ~~SOXX add: BUY 1 share if price drops to $568.00 or below~~ — FILLED at ~$567.54.
4. ~~**NVDA stop:** SELL remaining 1 share if price breaks below $210.00~~ — EXECUTED at ~$210.00.

## Expected Post-Execution Book (Actual)
- QQQ 6 (~43.2%), GOOG 3 (~11.5%), VOO 2 (~13.7%), SOXX 2 (~11.0%), AVGO 1 (~4.1%)
- Cash: ~$1,671 (~16.5%)
- Gross exposure: ~83.4%

## This Cycle — 2026-05-27 14:31Z (Wednesday 10:31 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,103.58 | Cash $1,670.51 | Long $8,433.07 | Gross 83.4% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,361.76 @ 726.96), GOOG 3 ($1,164.75 @ 388.25), VOO 2 ($1,379.92 @ 689.96), SOXX 2 ($1,109.56 @ 554.78), AVGO 1 ($417.64 @ 417.64).
- **Open orders:** NONE.
- **Event detector:** NONE — no broad market or position-level events.
- **Orders placed this cycle:**
  - SOLD 1 NVDA limit $209.90, filled ~$210.00 — stop-loss on remaining share after breach of $210.00 trigger.
- **Next expected action:** 11:35 AM ET hourly — monitor AVGO/SOXX momentum, deploy cash if hourly authorizes new setup.
