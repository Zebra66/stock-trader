# Tactical Todo — Updated 2026-06-25 16:50Z (Thursday 12:50 PM ET)
*VOO limit BUY 1 @ $675 FILLED. Now holding 2 VOO shares. SOXX limit BUY 1 @ $610 still open. Gross 70.5%. No sell triggers breached.*

## Current State
- **Regime:** offensive catch-up (scale in on gap pullback, but cautious due to PCE headwind)
- **Lock status:** LIFTED — no active lock
- **Live book:** QQQ 6 shares @ $713.015, AVGO 3 shares @ $379.17, VOO 2 shares @ $675.98
- **Account equity / cash / buying power:** $9,615.71 / $2,835.81 / ~$29,716.95
- **Gross long exposure:** ~70.5% | **Net exposure:** ~70.5% | **Cash:** ~29.5%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** SOXX limit BUY 1 @ $610 (day order)
- **24-hour cooldowns:** ALL EXPIRED (last sell was Jun 23).
- **Market:** OPEN until 20:00Z.
- **Catalyst status:** Micron earnings reported Wednesday Jun 24 after close. BEAT. PCE hot today.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Tactical Runs)

### QQQ — HOLD 6 — NO NEW BUYS (45% CAP)
- **FILLED:** 6 shares total. Blended avg $713.015.
- **Current price:** $714.96. Unrealized +$11.67 (+0.27%).
- **Stop:** $705. **Target:** $745.
- **HOLD.** Do not sell unless stop $705 is breached.
- **AUTHORIZED SAME-DAY SELL QQQ** if price drops below $705.00. Rationale: protect capital on breakdown below gap support.
- **Concentration:** 44.6% of equity. Adding any shares would breach 45% cap.
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL QQQ` appears above.

### AVGO — HOLD 3 — NO NEW BUYS (15% CAP)
- **FILLED:** 3 shares at avg $379.17 on 2026-06-25.
- **Current price:** $382.175. Unrealized +$9.02 (+0.79%).
- **Stop:** $375. **Target:** $405.
- **HOLD.** Do not sell unless stop $375 is breached.
- **AUTHORIZED SAME-DAY SELL AVGO** if price drops below $375.00. Rationale: protect capital on pre-earnings breakdown.
- **Concentration:** 11.9% of equity. Adding 1 share = 15.9% (breaches 15% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL AVGO` appears above.

### VOO — HOLD 2 — NO NEW BUYS
- **FILLED:** 2 shares at avg $675.98 on 2026-06-25.
- **Current price:** $675.25. Unrealized -$1.46 (-0.11%).
- **Stop:** $670. **Target:** $695.
- **HOLD.** Do not sell unless stop $670 is breached.
- **AUTHORIZED SAME-DAY SELL VOO** if price drops below $670.00. Rationale: protect capital on broad market breakdown.
- **Concentration:** 2 shares @ $675.25 = 14.0% of equity (within 20% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL VOO` appears above.

### SOXX — AUTHORIZED LIMIT BUY 1
- **Limit BUY 1 share if price drops below $610.** Entry $610, stop $590, target $650. R/R 2.0:1.
- **Rationale:** Pure-play semi exposure. Strongest 1M performer. Micron beat validates. Only add on deeper pullback.
- **Stop:** $590. **Target:** $650.
- **Concentration:** 1 share @ $610 = 6.3% of equity (within 20% cap).
- **No position yet; no same-day churn risk.**

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI exposure. Weak 1M (-9.33%). Down 1.78% today. PCE headwind adds risk.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Weak 1M (-11.12%), down 1.42% today. No edge.
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
- QQQ: 6 shares @ $713.015, current $714.65, value $4,287.90 (44.6%)
- AVGO: 3 shares @ $379.17, current $380.44, value $1,141.32 (11.9%)
- VOO: 2 shares @ $675.98, current $675.25, value $1,350.50 (14.0%)
- Cash: ~$2,835.81 (29.5%)
- Gross exposure: ~70.5%

## Open Orders (Active)
- SOXX: limit BUY 1 @ $610 (day order, placed 15:43Z)

## Next Hourly Preview — 17:35Z (1:35 PM ET) Thu Jun 25
- Market will be OPEN. Hourly strategist will evaluate PCE impact and whether to add more.
- QQQ 6, AVGO 3, VOO 2 are filled and in HOLD. Stops active: QQQ $705, AVGO $375, VOO $670.
- SOXX limit BUY 1 @ $610 remains open. SOXX at $623.10, well above limit.
- If SOXX limit $610 fills, gross ~76.8%. Hourly may evaluate new high-conviction adds.
- If SOXX does not fill, gross ~70.5%. Hourly may keep limit or reassess.
- If market drops below stops, hourly may revert to defensive and cut at stops.
