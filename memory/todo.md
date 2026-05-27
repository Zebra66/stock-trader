# Tactical Todo — Updated 2026-05-27 15:35Z (Wednesday 11:35 AM ET)
*HARD_LOCK LIFTED. Portfolio clean. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1
- **Account equity / cash / buying power:** $10,103.54 / $1,670.51 / $11,774.05
- **Gross long exposure:** 83.5% | **Net exposure:** 83.5% | **Cash:** 16.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Wed May 27 (:40 and :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.2%, within 45% cap. Adding 1 share would breach cap.
- Intraday dip –0.50% within normal range. Let core position run.

### GOOG — HOLD 3 — DO NOT SELL OR ADD
- Weight ~11.5%, within 15% cap. Adding 1 share would breach cap (~15.2%).
- Up +0.72% today. Thesis intact (orbital data center + AI infrastructure). Gemini 3.5 product cycle positive.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%).
- Broad-market anchor. No action required.

### SOXX — HOLD 2 — DO NOT ADD
- Weight ~11.0%, within 20% non-QQQ ETF cap.
- Added 2nd share this morning at $567.99; price now $556.00 (–2.11% from entry).
- **Defensive trim:** SELL 1 share if price drops below $540.00. Rationale: protect capital on deeper pullback after parabolic weekly run. If triggered, hold remaining 1 share as core.
- Do NOT add on pullback today. Standing learning: never average down.

### AVGO — HOLD 1 — DO NOT ADD
- Position opened at ~$427.37. Price now $419.20 (–1.91% from entry).
- Quality catch-up play within chip rally. Earnings catalyst June 3. New product news (BCM68850 Wi-Fi 8 gateway) did not move stock.
- **Defensive stop:** SELL 1 share if price drops below $400.00. Rationale: earnings catalyst failed, technical breakdown.
- Do NOT add on pullback today. Standing learning: never average down.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited today at 10:30 AM ET. 24-hour cooldown applies until after 10:30 AM ET tomorrow unless hourly explicitly authorizes re-entry.
- Underperforming within chip sector. No edge.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - AVGO bought today at ~$427.37 — DO NOT SELL today unless hourly explicitly authorizes.
  - SOXX 2nd share bought today at ~$567.99 — DO NOT SELL today unless hourly explicitly authorizes.
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
1. ~~AVGO add: BUY 1 share at limit $429.50~~ — FILLED at ~$427.37 (9:53 AM ET).
2. ~~NVDA trim: SELL 1 share at market~~ — FILLED at ~$211.79 (9:53 AM ET).
3. ~~SOXX add: BUY 1 share if price drops to $568.00 or below~~ — FILLED at ~$567.54 (9:54 AM ET).
4. ~~NVDA stop: SELL remaining 1 share if price breaks below $210.00~~ — FILLED at ~$210.11 (10:30 AM ET).
5. **NO NEW ORDERS** authorized for remainder of 11:35 AM ET hourly cycle.

## Expected Book
- QQQ 6 (~43.2%), GOOG 3 (~11.5%), VOO 2 (~13.6%), SOXX 2 (~11.0%), AVGO 1 (~4.1%)
- Cash: ~$1,671 (~16.5%)
- Gross exposure: ~83.5%

## This Cycle — 2026-05-27 15:35Z (Wednesday 11:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,103.54 | Cash $1,670.51 | Long $8,433.03 | Gross 83.5% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,360.59 @ 726.77), GOOG 3 ($1,163.18 @ 387.73), VOO 2 ($1,378.06 @ 689.03), SOXX 2 ($1,112.00 @ 556.00), AVGO 1 ($419.20 @ 419.20).
- **Open orders:** NONE.
- **Event detector:** NONE — no broad market or position-level events.
- **Orders placed this cycle:** NONE. Hold-only directive.
- **Next expected action:** 12:35 PM ET hourly — monitor SOXX/AVGO pullback, reassess deployment.
