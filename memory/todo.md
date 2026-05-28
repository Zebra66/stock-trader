# Tactical Todo — Updated 2026-05-28 19:35Z (Thursday 3:35 PM ET)
*HARD_LOCK LIFTED. Portfolio clean. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (80–90% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, SOXX 2, AVGO 1
- **Account equity / cash / buying power:** $10,201.37 / $1,670.50 / $11,871.87
- **Gross long exposure:** 83.62% | **Net exposure:** 83.62% | **Cash:** 16.37%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday May 21)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market open until 20:00Z (16:00 ET).** NO late-session aggressive adds after 19:30Z (15:30 ET) unless explicitly authorized.

## Position Instructions — Thu May 28 (:40, :50, and subsequent Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~43.28%, within 45% cap. Adding 1 share would breach cap.
- Intraday action positive (+0.87% today). Let core position run.
- **Remainder of session (Thu):** No action.

### GOOG — HOLD 3 — DO NOT SELL OR ADD UNLESS HOURLY EXPLICITLY AUTHORIZES
- Weight ~11.39%, within 15% cap. Adding 1 share would breach cap (~15.16%).
- Price $387.16, below avg entry $392.92. Reclaimed $385 but still weak.
- **Trim watch (HOUR AUTHORIZATION REQUIRED):** SELL 1 share if price drops below $380.00. Limit sell $379.90. Rationale: cut underperformer if support fails. This is an overnight position; sale does NOT consume a daytrade.
- Do NOT add on dip. Standing learning: never average down.
- **Remainder of session (Thu):** No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.61%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.36%).
- Broad-market anchor. No action required.
- **Remainder of session (Thu):** No action.

### SOXX — HOLD 2 — DO NOT ADD
- Weight ~11.20%, within 20% non-QQQ ETF cap.
- 2nd share bought May 27 at $567.99; price now $570.28 (+0.40% from entry on that lot). Overall position unrealized +3.51%.
- **Defensive trim (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $540.00. Limit sell $539.90. Rationale: protect capital on deeper pullback after parabolic weekly run. If triggered, hold remaining 1 share as core.
- Do NOT add on pullback today. Standing learning: never average down.
- **Remainder of session (Thu):** No action.

### AVGO — HOLD 1 — DO NOT ADD
- Position opened May 27 at ~$427.37. Price now $426.03 (–0.31% from entry).
- Quality catch-up play within chip rally. Earnings catalyst June 3 (2 trading days). AI revenue projected at $10.7B. Positive edge-AI headline today (BCM68850).
- **Defensive stop (HOUR EXPLICITLY AUTHORIZES):** SELL 1 share if price drops below $400.00. Limit sell $399.90. Rationale: pre-earnings technical breakdown.
- Do NOT add on pullback today. Standing learning: never average down.
- **Remainder of session (Thu):** No action.

### NVDA — DO NOT BUY — DO NOT RE-BUY
- Fully exited May 27 at 10:30 AM ET. 24-hour cooldown expired at 10:30 AM ET today.
- **Re-entry is NOT authorized in this todo.** The 3:35 PM ET hourly explicitly DEFERRED NVDA re-entry.
- Price $214.09 remains below $215 reclaim threshold. Weak 1W (–4.07%) vs SOXX (+9.85%). $150B capex plan + Anthropic $65B raise announced but stock has not reacted positively.
- Tactical agent must NOT place a NVDA buy order at any tactical run. Any attempt is unauthorized.
- If the Friday 9:35 AM ET hourly authorizes re-entry, it will provide explicit price and confirmation conditions.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic chase risk, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
  - Today (May 28) there are NO same-day buys yet. All positions were opened on prior days.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt or system outage). Exception: compliance breach — exit immediately if instructed.
- **NVDA re-entry hard stop:** Do NOT submit any NVDA buy order unless the current hourly note explicitly authorizes re-entry with a price and condition.

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

## Today's Deployment Queue (Thu May 28, final hour)
1. **NO ORDERS AUTHORIZED** for the remainder of the trading session.
2. **Next potential action (Friday 9:35 AM ET hourly):** Re-evaluate NVDA re-entry ONLY if price reclaims $215 with volume AND confirmation OR pulls back to ~$208 with a bounce. Otherwise continue hold-all posture.
3. **GOOG trim:** Only if hourly explicitly authorizes a sell below $380.
4. **SOXX trim:** Only if hourly explicitly authorizes a sell below $540.
5. **AVGO stop:** Only if hourly explicitly authorizes a sell below $400.

## Tomorrow Preview — Friday May 29 (NOT AUTHORIZED YET)
*The following are WATCHLIST items only. They require explicit hourly authorization before execution.*
- **AVGO earnings watch:** June 3 (2 trading days after Friday). Hold 1 share unless technicals deteriorate below $400.
- **GOOG:** If it pulls back toward $380 on macro weakness, consider trimming 1 share IF hourly explicitly authorizes.
- **NVDA:** Re-entry watchlist. Reclaim $215 with volume = potential buy signal. Otherwise avoid.
- **Cash deployment:** If equity rises above ~$10,360, add capacity opens for 1 GOOG share or 1 VOO share under concentration caps.

## Expected Book Now
- QQQ 6 (~43.3%), GOOG 3 (~11.4%), VOO 2 (~13.6%), SOXX 2 (~11.2%), AVGO 1 (~4.2%)
- Cash: ~$1,671 (~16.4%)
- Gross exposure: ~83.6%
