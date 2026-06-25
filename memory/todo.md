# Tactical Todo — Updated 2026-06-25 19:35Z (Thursday 3:35 PM ET)
*Held all positions. SOXX limit BUY 1 @ $610 still open (expires 20:00Z). Gross 70.47%. No sell triggers breached. Event detector NONE. Market closes in ~25 minutes.*

## Current State
- **Regime:** offensive catch-up (hold current positions, add SOXX only on pullback)
- **Lock status:** LIFTED — no active lock
- **Live book:** QQQ 6 shares @ $713.015, AVGO 3 shares @ $379.17, VOO 2 shares @ $675.98
- **Account equity / cash / buying power:** $9,603.64 / $2,835.81 / ~$29,683.15
- **Gross long exposure:** ~70.47% | **Net exposure:** ~70.47% | **Cash:** ~29.5%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** SOXX limit BUY 1 @ $610 (day order, expires 20:00Z)
- **24-hour cooldowns:** ALL EXPIRED (last sell was Jun 23).
- **Market:** OPEN until 20:00Z.
- **Catalyst status:** Micron earnings reported Wednesday Jun 24 after close. BEAT. PCE hot today. Iran/Hormuz headline earlier.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Remaining Session)

### QQQ — HOLD 6 — NO NEW BUYS (45% CAP)
- **FILLED:** 6 shares total. Blended avg $713.015.
- **Current price:** $713.96. Unrealized +$5.67 (+0.13%).
- **Stop:** $705. **Target:** $745.
- **HOLD.** Do not sell unless stop $705 is breached.
- **AUTHORIZED SAME-DAY SELL QQQ** if price drops below $705.00. Rationale: protect capital on breakdown below gap support.
- **Concentration:** 44.6% of equity. Adding any shares would breach 45% cap.
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL QQQ` appears above.

### AVGO — HOLD 3 — NO NEW BUYS (15% CAP)
- **FILLED:** 3 shares at avg $379.17 on 2026-06-25.
- **Current price:** $378.13. Unrealized -$3.12 (-0.27%).
- **Stop:** $375. **Target:** $405.
- **HOLD.** Do not sell unless stop $375 is breached.
- **AUTHORIZED SAME-DAY SELL AVGO** if price drops below $375.00. Rationale: protect capital on pre-earnings breakdown.
- **Concentration:** 11.8% of equity. Adding 1 share = 15.8% (breaches 15% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL AVGO` appears above.

### VOO — HOLD 2 — NO NEW BUYS
- **FILLED:** 2 shares at avg $675.98 on 2026-06-25.
- **Current price:** $674.84. Unrealized -$2.28 (-0.17%).
- **Stop:** $670. **Target:** $695.
- **HOLD.** Do not sell unless stop $670 is breached.
- **AUTHORIZED SAME-DAY SELL VOO** if price drops below $670.00. Rationale: protect capital on broad market breakdown.
- **Concentration:** 2 shares @ $674.84 = 14.0% of equity (within 20% cap). Adding 1 share = 21.1% (breaches 20% cap).
- **Daytrade status:** 0/3. Position opened today; DO NOT SELL today unless `AUTHORIZE SAME-DAY SELL VOO` appears above.

### SOXX — AUTHORIZED LIMIT BUY 1 (GTC TOMORROW)
- **Current open order:** Day limit BUY 1 @ $610 (expires 20:00Z today). Will NOT fill today (price $619.90).
- **DO NOT replace this order today.** Let it expire.
- **Tomorrow (Fri Jun 26):** Place GTC limit BUY 1 @ $610. Entry $610, stop $590, target $650. R/R 2.0:1.
- **Rationale:** Pure-play semi exposure. Strongest 1M performer. Micron beat validates. Only add on deeper pullback.
- **Stop:** $590. **Target:** $650.
- **Concentration:** 1 share @ $610 = 6.3% of equity (within 20% cap).
- **No position yet; no same-day churn risk.**
- **Important:** Place the GTC order at 9:35 AM ET or early in the session to catch morning dips.

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI exposure. Weak 1M (-9.02%). Down 1.76% today. PCE headwind adds risk.
- **DO NOT BUY NVDA** today or tomorrow.

### GOOG — DO NOT BUY
- **Reason:** Weak 1M (-11.82%), down 1.64% today. No edge.
- **DO NOT BUY GOOG** today or tomorrow.

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
- **If SOXX day order expires unfilled, do NOT place a new SOXX order today.** Wait for tomorrow's hourly authorization.

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
- QQQ: 6 shares @ $713.015, current $713.96, value $4,283.76 (44.6%)
- AVGO: 3 shares @ $379.17, current $378.13, value $1,134.39 (11.8%)
- VOO: 2 shares @ $675.98, current $674.84, value $1,349.68 (14.0%)
- Cash: ~$2,835.81 (29.5%)
- Gross exposure: ~70.47%

## Open Orders (Active)
- SOXX: limit BUY 1 @ $610 (day order, placed 15:43Z, expires 20:00Z)

## Next Hourly Preview — 20:35Z (4:35 PM ET) Thu Jun 25
- **Market CLOSED.** This hourly will run after market close.
- Review today's performance vs SPY. Update any GTC orders if needed.
- Prepare directives for Friday Jun 26.

## Friday Jun 26 Preview
- **Place SOXX GTC limit BUY 1 @ $610** at 9:35 AM ET or early in session.
- QQQ 6, AVGO 3, VOO 2 are filled and in HOLD. Stops active: QQQ $705, AVGO $375, VOO $670.
- If SOXX GTC $610 fills, gross ~76.9%. Hourly may evaluate new high-conviction adds.
- If market drops below stops, hourly may revert to defensive and cut at stops.
- Daytrade count: 0/3. Clean slate for Friday.
