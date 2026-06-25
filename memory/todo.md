# Tactical Todo — Updated 2026-06-25 14:52Z (Thursday 10:52 AM ET)
*Micron earnings BEAT. Gap fully reversed. Market bouncing. Second tranche partially deployed: QQQ 2 shares filled at $712. Open orders pending.*

## Current State
- **Regime:** offensive catch-up (scale in on gap pullback)
- **Lock status:** LIFTED — no active lock
- **Live book:** QQQ 6 shares @ $713.015, AVGO 2 shares @ $379.345
- **Account equity / cash / buying power:** $9,612.65 / $4,566.59 / ~$31,339
- **Gross long exposure:** ~52.5% | **Net exposure:** ~52.5% | **Cash:** ~47.5%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** AVGO 1 @ $379, VOO 1 @ $677
- **24-hour cooldowns:** ALL EXPIRED (last sell was Jun 23).
- **Market:** OPEN until 20:00Z.
- **Catalyst status:** Micron earnings reported Wednesday Jun 24 after close. BEAT.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Tactical Runs)

### QQQ — HOLD 6 — NO NEW BUYS (45% CAP)
- **FILLED:** 6 shares total. 3 shares at avg $713.363333 on 2026-06-25 14:32Z. 2 shares at $712 on 2026-06-25 14:47Z. 1 share at $714.00 on 2026-06-25 14:47Z.
- **Blended avg:** $713.015. **Current price:** $713.79. Unrealized +$4.65 (+0.11%).
- **Stop:** $705. **Target:** $745.
- **HOLD.** Do not sell unless stop $705 is breached.
- **AUTHORIZED SAME-DAY SELL QQQ** if price drops below $705.00. Rationale: protect capital on breakdown below gap support.
- **Concentration:** 44.6% of equity. Adding any shares would breach 45% cap.
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL QQQ` appears above.

### AVGO — HOLD 2 — AUTHORIZED LIMIT BUY 1
- **FILLED:** 2 shares at avg $379.345 on 2026-06-25 14:32Z.
- **Current price:** $381.66. Unrealized +$4.63 (+0.61%).
- **Stop:** $375. **Target:** $405.
- **HOLD.** Do not sell unless stop $375 is breached.
- **AUTHORIZED SAME-DAY SELL AVGO** if price drops below $375.00. Rationale: protect capital on pre-earnings breakdown.
- **Limit BUY 1 share if price drops below $379.** Limit order already active.
- **Concentration:** 8.0% of equity. Adding 1 share = 12.0% (within 15% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL AVGO` appears above.

### VOO — AUTHORIZED LIMIT BUY 1
- **Limit BUY 1 share if price drops below $677.** Limit order already active.
- **Stop:** $670. **Target:** $695.
- **Concentration:** 1 share @ $677 = 7.0% of equity (within 20% cap).
- **No position yet; no same-day churn risk.**

### SOXX — DO NOT BUY
- **Reason:** Pure-play semi exposure. Most volatile. Gap is 7% from yesterday. Hourly strategist does NOT authorize entry today.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI exposure. Weak 1M (-9.33%). Hourly strategist does NOT authorize entry today.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Weak 1M (-11.12%), down 0.86% today. No edge.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.

## Hard Rules / No-Trade Conditions
- **NO market orders today.** All buys must be limit orders.
- **No same-day round trips.** Code-level anti-churn guard is active in `alpaca_client_factory.ts`.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions bought today unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If QQQ/AVGO drops below stop, DO NOT sell same day.** Wait for next hourly authorization unless CRITICAL event.

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
- QQQ: 6 shares @ $713.015, current $713.79, value $4,282.74 (44.6%)
- AVGO: 2 shares @ $379.345, current $381.66, value $763.32 (7.9%)
- Cash: ~$4,566.59 (47.5%)
- Gross exposure: ~52.5%

## Open Orders (Active)
- AVGO: limit BUY 1 @ $379 (day order)
- VOO: limit BUY 1 @ $677 (day order)

## Next Hourly Preview — 15:35Z (11:35 AM ET) Thu Jun 25
- Market will be OPEN. Hourly strategist will evaluate whether to add third tranche.
- QQQ 6 and AVGO 2 are filled and in HOLD. Stops active: QQQ $705, AVGO $375.
- If QQQ stays above $715, hourly may authorize 6th share and raise AVGO/VOO limits.
- If QQQ drops below $710, hourly may revert to defensive and cut at stops.
- If open orders are unfilled, hourly may raise limits or cancel and redirect to SOXX/NVDA.
