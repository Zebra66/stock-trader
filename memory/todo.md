# Tactical Todo — Updated 2026-06-24 17:35Z (Wednesday 01:35 PM ET)
<!-- Prior autonomous override at 2026-06-24 13:40Z due to MAJOR event (SOXX -1.13% in 5 min) — RESOLVED. -->
*Event detector NONE at 17:35Z. Market accelerating lower into close. QQQ broke $710. SOXX broke $600. NVDA broke $200. Portfolio is 100% cash. NO new buys today. Micron earnings tonight after close.*

## Current State
- **Regime:** defensive (protect capital) — gross exposure 0%
- **HARD_LOCK:** LIFTED — no active lock
- **Live book:** NONE (100% cash)
- **Account equity / cash / buying power:** $9,603.37 / $9,603.37 / $38,413.48
- **Gross long exposure:** 0% | **Net exposure:** 0% | **Cash:** 100%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **24-hour cooldowns:**
  - SOXX: EXPIRED at 2026-06-24 13:33Z
  - VOO: EXPIRED at 2026-06-24 13:34Z
  - AVGO: EXPIRED at 2026-06-24 13:34Z
  - QQQ: EXPIRED at 2026-06-24 13:37Z
  - NVDA: EXPIRED at 2026-06-24 17:42Z
- **Market:** OPEN until 20:00Z. Event detector NONE at 17:35Z.
- **Upcoming catalyst:** Micron earnings Wednesday June 24 after close (sector-wide binary event for semiconductors).
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Wednesday Jun 24 (Tactical Runs)

### NO POSITIONS HELD
- All positions were sold Jun 23. Portfolio is 100% cash.
- **No action required for any held position.**
- **NO discretionary buys this cycle.** Micron earnings tonight after close.

### QQQ — SOLD — DO NOT RE-BUY
- **SOLD:** 5 shares at market avg $715.942 on 2026-06-23 13:37Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:37Z.** BUT hourly strategist does NOT authorize re-entry today.
- **Reason:** CRITICAL market event. Protective exit. Micron earnings tonight = binary catalyst.
- **DO NOT RE-BUY QQQ** today regardless of cooldown expiration.

### VOO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market $676.13 on 2026-06-23 13:34Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:34Z.** BUT hourly strategist does NOT authorize re-entry today.
- **Reason:** CRITICAL market event. Protective exit. Micron earnings tonight = binary catalyst.
- **DO NOT RE-BUY VOO** today regardless of cooldown expiration.

### AVGO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market $381.95 on 2026-06-23 13:34Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:34Z.** BUT hourly strategist does NOT authorize re-entry today.
- **Reason:** CRITICAL market event. Protective exit. Micron earnings tonight = binary catalyst.
- **DO NOT RE-BUY AVGO** today regardless of cooldown expiration.

### SOXX — SOLD — DO NOT RE-BUY
- **SOLD:** 1 share at market $609.77 on 2026-06-23 13:33Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:33Z.** BUT hourly strategist does NOT authorize re-entry today.
- **Reason:** CRITICAL market event. Semiconductor sector volatile. Micron earnings tonight = binary catalyst.
- **DO NOT RE-BUY SOXX** today regardless of cooldown expiration.

### NVDA — SOLD — DO NOT RE-BUY
- **SOLD:** 1 share at market $202.15 on 2026-06-23 17:42Z (accidental test execution).
- **Realized loss:** ~$6.32 from avg entry $208.47.
- **DO NOT RE-BUY NVDA** for 24 hours (until 2026-06-24 17:42Z) AND hourly strategist does NOT authorize re-entry today.
- **Reason:** 24-hour cooldown rule + Micron earnings tonight = binary catalyst.

### GOOG — DO NOT BUY
- **STOP EXECUTED:** Sold 2 shares at $349.26 on 2026-06-22 14:20Z.
- **24-hour cooldown EXPIRED** at 2026-06-23 14:20Z. BUT hourly strategist does NOT authorize re-entry.
- **Reason:** Weak relative trend. AI talent retention risk. No edge.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- **Market accelerating lower into close.** QQQ broke $710. SOXX broke $600. NVDA broke $200. No new positions until hourly authorization after Micron reaction.
- **RKLB is down -7.01% today and -34.85% on the month.** Avoid.
- **GLD is down -2.53% today.** US dollar at 13-month high. Avoid.

## Tomorrow's Re-Entry Triggers (Thursday Jun 25 — Pending Hourly Authorization)
- These are PREPARATORY triggers only. The hourly strategist must explicitly authorize any buy before the tactical agent executes.
- **QQQ:** Consider limit BUY if price drops below $710 or if price stabilizes above $715 with volume > 1.5x average. Max 3 shares (reduced size, ~$2,145 / 22% of equity). Stop: $690. Target: $740. Rationale: Core broad-tech exposure.
- **VOO:** Consider limit BUY if price drops below $675 or if SPY holds above $730. Max 1 share (reduced size, ~$679 / 7% of equity). Stop: $660. Target: $700. Rationale: Core S&P exposure.
- **AVGO:** Consider limit BUY ONLY if semis stabilize and Micron earnings reaction is positive. Max 2 shares (reduced size, ~$764 / 8% of equity). Stop: $365. Target: $410. Rationale: Individual semiconductor exposure.
- **SOXX:** DO NOT BUY until after Micron earnings reaction is known and digested (Thursday Jun 25 or later). Rationale: Pure-play semi exposure; highest volatility.
- **NVDA:** DO NOT RE-BUY. Cooldown EXPIRED at 17:42Z but hourly strategist does NOT authorize re-entry today. Rationale: Binary catalyst.

## Hard Rules / No-Trade Conditions
- **NO discretionary buys today.** Gross exposure is 0%. Micron earnings tonight after close.
- **No same-day round trips.** Code-level anti-churn guard is active in `alpaca_client_factory.ts`.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Do NOT run test scripts or code verification on the live account.** Use `DRY_RUN=1` only.
- **After 3+ consecutive loss events, reduce position size by 50% on next deployment.**
- **Do NOT enter SOXX or NVDA before Micron earnings reaction.**
- **If any buy trigger is hit today, DO NOT execute.** Wait for tomorrow's hourly authorization.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.
- **SOXX:** Latest bar shows TradeCount 7, Volume 459 at 17:34Z. Liquidity improved but still thin. Limit orders only if authorized.

## Current Book
- Cash: $9,603.37 (100%)
- Gross exposure: 0%

## Next Hourly Preview — 18:35Z (02:35 PM ET) Wed Jun 24
- Hourly strategist will evaluate market with ~85 minutes until close.
- ALL 24-hour cooldowns are EXPIRED (including NVDA at 17:42Z).
- DO NOT deploy cash until after Micron earnings reaction is known.
- Micron earnings after close today is the primary catalyst.
