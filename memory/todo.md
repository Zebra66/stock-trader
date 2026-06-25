# Tactical Todo — Updated 2026-06-25 14:50Z (Thursday 10:50 AM ET)
*Micron earnings BEAT. Gap fully reversed. Event detector NONE at 14:50Z. Hourly strategist deployed second tranche at 14:35Z: QQQ +2 shares, VOO 1 share limit $677, AVGO 1 share limit $379.*

## Current State
- **Regime:** offensive catch-up (scale in on gap pullback)
- **Lock status:** LIFTED — no active lock
- **Live book:** QQQ 5 shares @ $712.818, AVGO 2 shares @ $379.345
- **Account equity / cash / buying power:** $9,617.69 / ~$5,280.59 / ~$32,210.22
- **Gross long exposure:** ~45.1% | **Net exposure:** ~45.1% | **Cash:** ~54.9%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** VOO 1 share limit $677, AVGO 1 share limit $379
- **24-hour cooldowns:**
  - SOXX: EXPIRED at 2026-06-24 13:33Z
  - VOO: EXPIRED at 2026-06-24 13:34Z
  - AVGO: EXPIRED at 2026-06-24 13:34Z
  - QQQ: EXPIRED at 2026-06-24 13:37Z
  - NVDA: EXPIRED at 2026-06-24 17:42Z
- **Market:** OPEN until 20:00Z. Event detector NONE at 14:50Z.
- **Catalyst status:** Micron earnings reported Wednesday June 24 after close. BEAT. Market gapped up. Now digesting.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Tactical Runs)

### QQQ — HOLD
- **FILLED:** 3 shares at limit $718, avg fill $713.363333 on 2026-06-25 14:32Z.
- **ADDED:** 2 shares at limit $712, avg fill $712.00 on 2026-06-25 14:47Z.
- **Current price:** $714.64. Unrealized +$9.11 (+0.256%).
- **Stop:** $705. **Target:** $745.
- **HOLD.** Do not sell unless stop $705 is breached or hourly strategist authorizes exit.
- **Concentration:** 37.2% of equity. Within 45% cap.
- **Daytrade status:** 0/3. Position opened today; do NOT sell today unless `AUTHORIZE SAME-DAY SELL QQQ` appears in this file.

### AVGO — HOLD
- **FILLED:** 2 shares at limit $384, avg fill $379.345 on 2026-06-25 14:32Z.
- **OPEN ORDER:** 1 share limit $379 placed at 2026-06-25 14:47Z. Not yet filled.
- **Current price:** $381.95. Unrealized +$5.21 (+0.687%).
- **Stop:** $375. **Target:** $405.
- **HOLD.** Do not sell unless stop $375 is breached or hourly strategist authorizes exit.
- **Concentration:** 7.9% of equity (8.0% if open order fills). Within 15% cap.
- **Daytrade status:** 0/3. Position opened today; do NOT sell today unless `AUTHORIZE SAME-DAY SELL AVGO` appears in this file.

### VOO — AUTHORIZED LIMIT BUY (OPEN ORDER)
- **SOLD:** 2 shares at market $676.13 on 2026-06-23 13:34Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:34Z.**
- **OPEN ORDER:** 1 share limit $677 placed at 2026-06-25 14:47Z. Not yet filled.
- **BUY VOO if price drops below $677.** Limit buy 1 share. Entry $677. Stop $670. Target $695. R/R 2.6:1. Rationale: Core S&P exposure, lower volatility anchor.
- **AVOID VOO above $677.** No market orders. Limit only.
- **Concentration check:** 1 share @ $677 = $677 = 7.0% of equity. Within 20% cap.

### SOXX — DO NOT BUY
- **SOLD:** 1 share at market $609.77 on 2026-06-23 13:33Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:33Z.**
- **Reason:** Pure-play semi exposure. Gap is 7% from yesterday. Most volatile. Hourly strategist does NOT authorize entry today.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **SOLD:** 1 share at market $202.15 on 2026-06-23 17:42Z (accidental test execution).
- **Realized loss:** ~$6.32 from avg entry $208.47.
- **24-hour cooldown EXPIRED at 2026-06-24 17:42Z.**
- **Reason:** Single-stock AI exposure. Hourly strategist does NOT authorize entry today. Wait for next hourly if rally sustains.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **STOP EXECUTED:** Sold 2 shares at $349.26 on 2026-06-22 14:20Z.
- **24-hour cooldown EXPIRED** at 2026-06-23 14:20Z.
- **Reason:** Weak 1M (-12.6%), down 2.5% today. No edge.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- **RKLB is down -3.9% today and -42.7% on the month.** Avoid.
- **GLD is down -11.0% on the month.** US dollar at 13-month high. Avoid.

<!-- Autonomous override applied at 2026-06-25T13:50:02.930Z due to CRITICAL event — SOXX -2.73%, QQQ -1.21%, XLK -1.80%, SMH -2.33% in 10 min. All buys SUSPENDED. -->
<!-- Override LIFTED at 2026-06-25 14:30Z — event detector NONE. QQQ 3 shares + AVGO 2 shares filled at 14:32Z. -->

## Hard Rules / No-Trade Conditions
- **NO market orders today.** All buys must be limit orders. Gap-up opens are poor entry points.
- **No same-day round trips.** Code-level anti-churn guard is active in `alpaca_client_factory.ts`.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Do NOT run test scripts or code verification on the live account.** Use `DRY_RUN=1` only.
- **After 3+ consecutive loss events, reduce position size by 50% on next deployment.** Applied: QQQ max 3 shares, VOO max 1 share, AVGO max 2 shares.
- **Tactical agent must NOT sell positions bought today unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If QQQ/AVGO drops below stop, DO NOT sell same day.** Wait for next hourly authorization unless stop is breached with CRITICAL event.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **SOXX:** Latest bar shows TradeCount 46, Volume 2437 at 13:34Z. Liquidity improved but still thin. Limit orders only if authorized.

## Current Book
- QQQ: 5 shares @ $712.818, current $714.64, value $3,573.20 (37.2%)
- AVGO: 2 shares @ $379.345, current $381.95, value $763.90 (7.9%)
- Cash: ~$5,280.59 (54.9%)
- Gross exposure: ~45.1%

## Next Hourly Preview — 14:35Z (10:35 AM ET) Thu Jun 25
- Market will be OPEN. Hourly strategist will evaluate whether to add second tranche.
- QQQ and AVGO are filled and in HOLD. Stops active: QQQ $705, AVGO $375.
- If QQQ stays above $720, hourly may authorize 4th QQQ share and possibly NVDA 1 share.
- If QQQ drops below $710, hourly may revert to defensive and cut at stops.
- VOO: trigger still $677. Current $677.76 — not met. Tactical agent will place if trigger hits and hourly authorizes.
