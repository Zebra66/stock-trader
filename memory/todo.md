# Tactical Todo — Updated 2026-06-26 13:38Z (Friday 9:38 AM ET)
*HARD_LOCK ACTIVE. No discretionary buys. Execute authorized stop-loss only. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** defensive (30–50% band)
- **Lock status:** HARD_LOCK — no discretionary buys until next hourly run
- **Live book:** QQQ 6 shares @ avg $713.015, current $705.87
- **Account equity / cash / buying power:** $9,512.73 / $5,277.51 / ~$29,968
- **Gross long exposure:** ~44.5% | **Net exposure:** ~44.5% | **Cash:** ~55.5%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.
- **Process note:** CRITICAL BREACH detected and resolved this cycle. All safety guards restored. Verify no unauthorized orders at 9:40 and 9:50 tactical runs.

## Position Instructions — Friday Jun 26 (Remaining Session)

### QQQ — HOLD 6 — AUTHORIZED STOP-LOSS BELOW $705
- **FILLED:** 6 shares total. Blended avg $713.015.
- **Current price:** $705.87. Unrealized –$42.87 (–1.00%).
- **Stop:** $705.00. **Target:** $720.
- **HOLD.** Do not sell unless price drops below $705.00.
- **AUTHORIZED SAME-DAY SELL QQQ:** If price drops below $705.00, SELL all 6 shares with limit $704.50. Rationale: protect capital on breakdown below gap support.
- **Concentration:** 44.5% of equity. Adding any shares would breach 45% cap.
- **Daytrade status:** 0/3. Position bought Jun 25 (overnight). No same-day churn risk.
- **Do NOT add QQQ today.**

### VOO — DO NOT BUY — DO NOT RE-BUY
- **Reason:** Sold this morning at $668.74 on stop-loss. 24-hour cooldown expired, but hourly explicitly does NOT authorize re-entry today.
- **DO NOT BUY VOO** today.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- **Reason:** Sold this morning at $368.08 on stop-loss. 24-hour cooldown expired, but hourly explicitly does NOT authorize re-entry today.
- **DO NOT BUY AVGO** today.

### SOXX — DO NOT BUY
- **Reason:** Down 4.94% today. Semis volatile. No edge. Hourly explicitly does NOT authorize entry today.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI. Weak 1M (–10.81%). Down 1.81% today.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Weak 1M (–13.44%). Down 1.32% today.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **HARD_LOCK ACTIVE.** No discretionary buys until next hourly run (10:35 AM ET). Code-level rejection for any BUY order.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZED SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If QQQ drops below $705.00, DO NOT delay.** Execute the authorized stop-loss immediately.
- **If event detector flags CRITICAL event on QQQ, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt). The stop-loss is already authorized.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **SOXX:** Thin relative to large-cap ETFs. Limit orders only if authorized.

## Current Book
- QQQ: 6 shares @ $713.015, current $705.87, value $4,235.22 (44.5%)
- Cash: ~$5,277.51 (55.5%)
- Gross exposure: ~44.5%

## Next Hourly Preview — 10:35 AM ET
- Reassess QQQ support after next hour of trading.
- Evaluate SPY direction and breadth.
- If market stabilizes, prepare re-entry queue for VOO/AVGO/SOXX on deeper pullback.
- If QQQ stop triggers, evaluate defensive posture (100% cash) until Monday.
