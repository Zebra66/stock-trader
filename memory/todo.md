# Tactical Todo — Updated 2026-06-25 15:35Z (Thursday 11:35 AM ET)
*PCE hot. Nasdaq slips. AVGO and VOO fills confirmed. Gross 63.5%. Setting limit buys on pullback.*

## Current State
- **Regime:** offensive catch-up (scale in on gap pullback, but cautious due to PCE headwind)
- **Lock status:** LIFTED — no active lock
- **Live book:** QQQ 6 shares @ $713.015, AVGO 3 shares @ $379.17, VOO 1 share @ $676.99
- **Account equity / cash / buying power:** $9,609.17 / $3,510.78 / ~$31,118.60
- **Gross long exposure:** ~63.5% | **Net exposure:** ~63.5% | **Cash:** ~36.5%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** None
- **24-hour cooldowns:** ALL EXPIRED (last sell was Jun 23).
- **Market:** OPEN until 20:00Z.
- **Catalyst status:** Micron earnings reported Wednesday Jun 24 after close. BEAT. PCE hot today.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Tactical Runs)

### QQQ — HOLD 6 — NO NEW BUYS (45% CAP)
- **FILLED:** 6 shares total. Blended avg $713.015.
- **Current price:** $713.32. Unrealized +$1.83 (+0.04%).
- **Stop:** $705. **Target:** $745.
- **HOLD.** Do not sell unless stop $705 is breached.
- **AUTHORIZED SAME-DAY SELL QQQ** if price drops below $705.00. Rationale: protect capital on breakdown below gap support.
- **Concentration:** 44.5% of equity. Adding any shares would breach 45% cap.
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL QQQ` appears above.

### AVGO — HOLD 3 — NO NEW BUYS (15% CAP)
- **FILLED:** 3 shares at avg $379.17 on 2026-06-25.
- **Current price:** $380.535. Unrealized +$4.10 (+0.36%).
- **Stop:** $375. **Target:** $405.
- **HOLD.** Do not sell unless stop $375 is breached.
- **AUTHORIZED SAME-DAY SELL AVGO** if price drops below $375.00. Rationale: protect capital on pre-earnings breakdown.
- **Concentration:** 11.9% of equity. Adding 1 share = 15.8% (breaches 15% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL AVGO` appears above.

### VOO — HOLD 1 — AUTHORIZED LIMIT BUY 1
- **FILLED:** 1 share at avg $676.99 on 2026-06-25.
- **Current price:** $676.86. Unrealized -$0.13 (-0.02%).
- **Stop:** $670. **Target:** $695.
- **HOLD.** Do not sell unless stop $670 is breached.
- **AUTHORIZED SAME-DAY SELL VOO** if price drops below $670.00. Rationale: protect capital on broad market breakdown.
- **Limit BUY 1 share if price drops below $675.** New order.
- **Concentration:** 1 share @ $676.86 = 7.0% of equity. Adding 1 share = 14.1% (within 20% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL VOO` appears above.

### SOXX — AUTHORIZED LIMIT BUY 1
- **Limit BUY 1 share if price drops below $610.** Entry $610, stop $590, target $650. R/R 2.0:1.
- **Rationale:** Pure-play semi exposure. Strongest 1M performer. Micron beat validates. Only add on deeper pullback.
- **Stop:** $590. **Target:** $650.
- **Concentration:** 1 share @ $610 = 6.3% of equity (within 20% cap).
- **No position yet; no same-day churn risk.**

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI exposure. Weak 1M (-9.33%). Down 2.11% today. PCE headwind adds risk.
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
- **If QQQ/AVGO/VOO drops below stop, DO NOT sell same day.** Wait for next hourly authorization unless CRITICAL event.

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
- QQQ: 6 shares @ $713.015, current $713.32, value $4,279.92 (44.5%)
- AVGO: 3 shares @ $379.17, current $380.535, value $1,141.61 (11.9%)
- VOO: 1 share @ $676.99, current $676.86, value $676.86 (7.0%)
- Cash: ~$3,510.78 (36.5%)
- Gross exposure: ~63.5%

## Open Orders (Active)
- VOO: limit BUY 1 @ $675 (day order, placed 15:43Z)
- SOXX: limit BUY 1 @ $610 (day order, placed 15:43Z)

## Next Hourly Preview — 16:35Z (12:35 PM ET) Thu Jun 25
- Market will be OPEN. Hourly strategist will evaluate PCE impact and whether to add more.
- QQQ 6, AVGO 3, VOO 1 are filled and in HOLD. Stops active: QQQ $705, AVGO $375, VOO $670.
- If VOO limit $675 fills, hourly may add SOXX limit $610 or raise it.
- If market drops below stops, hourly may revert to defensive and cut at stops.
- If PCE rotation intensifies, hourly may pivot to more VOO and less SOXX.
