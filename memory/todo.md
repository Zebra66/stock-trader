# Tactical Todo — Updated 2026-06-25 17:35Z (Thursday 1:35 PM ET)
*Held all positions. SOXX limit BUY 1 @ $610 still open. Gross 70.5%. No sell triggers breached.*

## Current State
- **Regime:** offensive catch-up (hold current positions, add SOXX only on pullback)
- **Lock status:** LIFTED — no active lock
- **Live book:** QQQ 6 shares @ $713.015, AVGO 3 shares @ $379.17, VOO 2 shares @ $675.98
- **Account equity / cash / buying power:** $9,626.69 / $2,835.81 / ~$29,747.69
- **Gross long exposure:** ~70.5% | **Net exposure:** ~70.5% | **Cash:** ~29.5%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** SOXX limit BUY 1 @ $610 (day order, expires 20:00Z)
- **24-hour cooldowns:** ALL EXPIRED (last sell was Jun 23).
- **Market:** OPEN until 20:00Z.
- **Catalyst status:** Micron earnings reported Wednesday Jun 24 after close. BEAT. PCE hot today.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Tactical Runs)

### QQQ — HOLD 6 — NO NEW BUYS (45% CAP)
- **FILLED:** 6 shares total. Blended avg $713.015.
- **Current price:** $716.35. Unrealized +$20.01 (+0.47%).
- **Stop:** $705. **Target:** $745.
- **HOLD.** Do not sell unless stop $705 is breached.
- **AUTHORIZED SAME-DAY SELL QQQ** if price drops below $705.00. Rationale: protect capital on breakdown below gap support.
- **Concentration:** 44.6% of equity. Adding any shares would breach 45% cap.
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL QQQ` appears above.

### AVGO — HOLD 3 — NO NEW BUYS (15% CAP)
- **FILLED:** 3 shares at avg $379.17 on 2026-06-25.
- **Current price:** $380.36. Unrealized +$3.57 (+0.31%).
- **Stop:** $375. **Target:** $405.
- **HOLD.** Do not sell unless stop $375 is breached.
- **AUTHORIZED SAME-DAY SELL AVGO** if price drops below $375.00. Rationale: protect capital on pre-earnings breakdown.
- **Concentration:** 11.9% of equity. Adding 1 share = 15.9% (breaches 15% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL AVGO` appears above.

### VOO — HOLD 2 — NO NEW BUYS
- **FILLED:** 2 shares at avg $675.98 on 2026-06-25.
- **Current price:** $675.59. Unrealized -$0.26 (-0.02%).
- **Stop:** $670. **Target:** $695.
- **HOLD.** Do not sell unless stop $670 is breached.
- **AUTHORIZED SAME-DAY SELL VOO** if price drops below $670.00. Rationale: protect capital on broad market breakdown.
- **Concentration:** 2 shares @ $675.59 = 14.0% of equity (within 20% cap). Adding 1 share = 21.0% (breaches 20% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL VOO` appears above.

### SOXX — AUTHORIZED LIMIT BUY 1
- **Limit BUY 1 share if price drops to $610 or below.** Entry $610, stop $590, target $650. R/R 2.0:1.
- **Rationale:** Pure-play semi exposure. Strongest 1M performer. Micron beat validates. Only add on deeper pullback.
- **Stop:** $590. **Target:** $650.
- **Concentration:** 1 share @ $610 = 6.3% of equity (within 20% cap).
- **No position yet; no same-day churn risk.**
- **Important:** This is a day order expiring at 20:00Z. If it expires unfilled, do NOT place a new SOXX order without fresh hourly authorization.

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI exposure. Weak 1M (-9.02%). Down 1.76% today. PCE headwind adds risk.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Weak 1M (-11.82%), down 1.64% today. No edge.
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
- **If SOXX day order expires unfilled, do NOT place a new SOXX order without fresh hourly authorization.**

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
- QQQ: 6 shares @ $713.015, current $716.35, value $4,298.10 (44.6%)
- AVGO: 3 shares @ $379.17, current $380.36, value $1,141.08 (11.9%)
- VOO: 2 shares @ $675.98, current $675.59, value $1,351.70 (14.0%)
- Cash: ~$2,835.81 (29.5%)
- Gross exposure: ~70.5%

## Open Orders (Active)
- SOXX: limit BUY 1 @ $610 (day order, placed 15:43Z, expires 20:00Z)

## Next Hourly Preview — 18:35Z (2:35 PM ET) Thu Jun 25
- Market will be OPEN. Hourly strategist will evaluate PCE impact and whether to add more.
- QQQ 6, AVGO 3, VOO 2 are filled and in HOLD. Stops active: QQQ $705, AVGO $375, VOO $670.
- SOXX limit BUY 1 @ $610 may expire at 20:00Z if not filled.
- If SOXX limit $610 fills, gross ~76.8%. Hourly may evaluate new high-conviction adds.
- If SOXX expires, hourly may reassess limit or wait for tomorrow.
- If market drops below stops, hourly may revert to defensive and cut at stops.
