# Tactical Todo — Updated 2026-06-23 19:35Z (Tuesday 3:35 PM ET)
*Event detector NONE. Market stabilizing into close. Portfolio is 100% cash. NO new buys today. Anti-churn guard active in code.*

## Current State
- **Regime:** defensive (protect capital) — gross exposure 0%
- **HARD_LOCK:** LIFTED — no active lock
- **Live book:** NONE (100% cash)
- **Account equity / cash / buying power:** $9,603.39 / $9,603.39 / $38,413.56
- **Gross long exposure:** 0% | **Net exposure:** 0% | **Cash:** 100%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **24-hour cooldowns active:**
  - NVDA: until 2026-06-24 17:42Z (accidental sell today)
  - QQQ: until 2026-06-24 13:37Z
  - VOO: until 2026-06-24 13:34Z
  - AVGO: until 2026-06-24 13:34Z
  - SOXX: until 2026-06-24 13:33Z
- **GOOG cooldown:** EXPIRED at 2026-06-23 14:20Z. But hourly strategist does NOT authorize re-entry.
- **Market:** OPEN until 20:00Z. Event detector NONE at 19:35Z. Market stabilizing into close. "AI trade cools" narrative active.
- **Upcoming catalyst:** Micron earnings Wednesday June 24 after close (sector-wide binary event for semiconductors).
- **Code integrity note:** Safety guards active. No staged deletions detected this cycle.

## Position Instructions — Tuesday Jun 23 (Tactical Runs)

### NO POSITIONS HELD
- All positions were sold today. Portfolio is 100% cash.
- **No action required for any held position.**
- **NO discretionary buys this cycle.** Market closes in ~25 minutes. No new positions.

### NVDA — SOLD — DO NOT RE-BUY
- **SOLD:** 1 share at market $202.15 on 2026-06-23 17:42Z (accidental test execution).
- **Realized loss:** ~$6.32 from avg entry $208.47.
- **DO NOT RE-BUY NVDA** for 24 hours (until 2026-06-24 17:42Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** 24-hour cooldown rule. Violation of this rule is a compliance breach.

### QQQ — SOLD — DO NOT RE-BUY
- **SOLD:** 5 shares at market avg $715.942 on 2026-06-23 13:37Z.
- **Realized loss:** ~$81.11 from avg entry $732.16.
- **DO NOT RE-BUY QQQ** for 24 hours (until 2026-06-24 13:37Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. 24-hour cooldown active.

### VOO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market $676.13 on 2026-06-23 13:34Z.
- **Realized loss:** ~$5.43 from avg entry $678.70.
- **DO NOT RE-BUY VOO** for 24 hours (until 2026-06-24 13:34Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. 24-hour cooldown active.

### AVGO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market $381.95 on 2026-06-23 13:34Z.
- **Realized loss:** ~$11.87 from avg entry $387.89.
- **DO NOT RE-BUY AVGO** for 24 hours (until 2026-06-24 13:34Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. 24-hour cooldown active.

### SOXX — SOLD — DO NOT RE-BUY
- **SOLD:** 1 share at market $609.77 on 2026-06-23 13:33Z.
- **Realized loss:** ~$9.48 from avg entry $619.25.
- **DO NOT RE-BUY SOXX** for 24 hours (until 2026-06-24 13:33Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Semiconductor sector volatile. Protective exit. 24-hour cooldown active.

### GOOG — DO NOT BUY
- **STOP EXECUTED:** Sold 2 shares at $349.26 on 2026-06-22 14:20Z.
- **24-hour cooldown EXPIRED** at 2026-06-23 14:20Z. BUT hourly strategist does NOT authorize re-entry.
- **Reason:** Weak relative trend. AI talent exodus, Waymo recall. No edge.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- **Market recovering from gap-down.** No new positions until hourly authorization.

## Tomorrow's Re-Entry Triggers (Wednesday Jun 24 — Pending Hourly Authorization)
- These are PREPARATORY triggers only. The hourly strategist must explicitly authorize any buy before the tactical agent executes.
- **QQQ:** Consider limit BUY if price drops below $710 or if price stabilizes above $715 with volume > 1.5x average. Max 3 shares (reduced size, ~$2,145 / 22% of equity). Stop: $690. Target: $740. Rationale: Core broad-tech exposure.
- **VOO:** Consider limit BUY if price drops below $675 or if SPY holds above $730. Max 1 share (reduced size, ~$678 / 7% of equity). Stop: $660. Target: $700. Rationale: Core S&P exposure.
- **AVGO:** Consider limit BUY ONLY if semis stabilize and Micron earnings reaction is positive. Max 2 shares (reduced size, ~$764 / 8% of equity). Stop: $365. Target: $410. Rationale: Individual semiconductor exposure.
- **SOXX:** DO NOT BUY until after Micron earnings reaction is known (Thursday Jun 25 or later). Rationale: Binary catalyst risk.
- **NVDA:** DO NOT RE-BUY until cooldown expires at 2026-06-24 17:42Z AND hourly strategist explicitly authorizes. Rationale: Prediction markets betting against chip prices; 24-hour cooldown.

## Hard Rules / No-Trade Conditions
- **NO discretionary buys this cycle.** Gross exposure is 0%. Market closes in ~25 minutes.
- **No same-day round trips.** Code-level anti-churn guard is now active in `alpaca_client_factory.ts`.
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
- **SOXX:** Latest bar shows TradeCount 10, Volume 596. Treat as illiquid. Limit orders only if authorized.

## Current Book
- Cash: $9,603.39 (100%)
- Gross exposure: 0%

## Next Hourly Preview — 14:35Z (10:35 AM ET) Wed Jun 24
- Hourly strategist will evaluate market after overnight session and Micron earnings preview.
- QQQ/VOO/AVGO/SOXX cooldowns will have expired by then.
- DO NOT deploy cash until hourly authorization tomorrow.
- Micron earnings after close tomorrow is the primary catalyst.
