# Tactical Todo — Updated 2026-05-27 13:35Z (Wednesday 9:35 AM ET)
*HARD_LOCK LIFTED. Portfolio clean. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 2, SOXX 1
- **Account equity / cash / buying power:** $10,157.57 / $2,244.52 / $12,402.09
- **Gross long exposure:** 77.9% | **Net exposure:** 77.9% | **Cash:** 22.1%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Wed May 27 (:40 and :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight 43.2%, within 45% cap. Adding 1 share would breach cap (~50.5%).
- Let momentum run. No action required.

### GOOG — HOLD 3 — DO NOT SELL OR ADD
- Weight 11.4%, within 15% cap. Adding 1 share would breach cap (~15.1%).
- Thesis intact (orbital data-center headline). No action required.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight 13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.3%).
- Broad-market anchor. No action required.

### SOXX — HOLD 1 — DO NOT SELL
- Weight 5.6%, within 20% non-QQQ ETF cap. Breakout validated; let momentum run.
- **Add trigger (second priority):** BUY 1 share SOXX if price drops to $568.00 or below with orderly tape (SPY not down >1%). Use limit order at $568.00. DO NOT chase above $570 with a market order.
- Rationale: add to winner on healthy pullback after +14% weekly run.

### NVDA — TRIM TO 1 SHARE
- Current weight 4.2% (2 shares). Unauthorized 2nd share added May 26 at $216.71.
- **SELL 1 share NVDA** at limit $212.50 or market. Rationale: trim back to intended 1-share allocation; relative weakness within surging chip sector; unauthorized add damaged cost basis.
- **Stop on remaining 1 share:** SELL remaining 1 share NVDA if price breaks below $210.00. Rationale: stop-loss on post-earnings / relative underperformance.
- **DO NOT ADD NVDA.** No new buys under any circumstances.

### AVGO — BUY 1 SHARE
- No position currently. Quality catch-up play within chip rally. Earnings catalyst June 3. Wi-Fi 8 / 5G product headlines.
- **BUY 1 share AVGO** at limit $429.50 or market if price is within $0.50 of that level. Highest execution priority.
- Weight after add: ~4.2% (well within 15% single-stock cap).
- Rationale: redeploy NVDA trim proceeds + cash into relative laggard with defined catalyst.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.
- Supreme Court rejection + weak 1M trend. No re-entry.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, or parabolic chase risk. RKLB 1M +72.81% is too extended.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - Exception: NVDA was bought May 26 (yesterday). Selling 1 share today is NOT a same-day round trip. Authorized.
- **No new short sales** under any circumstances.
- **Do NOT chase SOXX** with a market order above $570. Only add on pullback to $568 or below via limit order.
- **Do NOT chase NVDA** with a market order. No adds authorized.
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

## Today's Deployment Queue (Execution Priority)
1. **AVGO add:** BUY 1 share at limit $429.50 or market if near. Highest priority.
2. **NVDA trim:** SELL 1 share at limit $212.50 or market. Execute in parallel with AVGO add.
3. **SOXX add:** BUY 1 share if price drops to $568.00 or below. Limit $568.00. Second priority — only on pullback.
4. **NVDA stop:** SELL remaining 1 share if price breaks below $210.00. Defensive priority.

## Expected Post-Execution Book (if AVGO fills)
- QQQ 6 (~43.2%), GOOG 3 (~11.4%), VOO 2 (~13.6%), SOXX 1 (~5.6%), NVDA 1 (~2.1%), AVGO 1 (~4.2%)
- Cash: ~$2,028 (~20.0%)
- Gross exposure: ~80.0%

## This Cycle — 2026-05-27 13:35Z (Wednesday 9:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,157.57 | Cash $2,244.52 | Long $7,913.05 | Gross 77.9% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,383.15 @ 730.525), GOOG 3 ($1,154.37 @ 384.79), VOO 2 ($1,380.30 @ 690.15), SOXX 1 ($570.36 @ 570.36), NVDA 2 ($424.72 @ 212.36).
- **Open orders:** NONE.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Tech rally continues; oil falls on US-Iran talks. AVGO Wi-Fi 8 / 5G product news. GOOG orbital data-center headline. IREN/Dell $1.6B Blackwell deal for NVDA not moving stock.
- **Goal check:** Portfolio +1.58% vs SPY +4.53%. Trailing by ~2.95 pp. 1W outperformance (+1.79% vs +1.62%).
- **Repo integrity:** Restored from critical breach (442 commits behind origin/main). `git reset --hard origin/main` executed. Lock file `bannedSymbols` restored.
- **Orders placed this cycle:** None yet (authorization pending for tactical agent).
- **Next expected action:** 10:35 AM ET hourly — monitor AVGO/NVDA fills, SOXX pullback, NVDA stop distance.
