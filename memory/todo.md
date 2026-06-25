# Tactical Todo — Updated 2026-06-25 13:35Z (Thursday 09:35 AM ET)
*Micron earnings BEAT. Market gapped up. Gap slightly fading. Event detector NONE. Portfolio 100% cash. Hourly strategist authorizes limit buy orders on pullback.*

## Current State
- **Regime:** offensive catch-up (scale in on gap pullback)
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
- **Market:** OPEN until 20:00Z. Event detector NONE at 13:35Z.
- **Catalyst status:** Micron earnings reported Wednesday June 24 after close. BEAT. Market gapped up. Now digesting.
- **Code integrity note:** Safety guards active. No staged deletions detected.

## Position Instructions — Thursday Jun 25 (Tactical Runs)

### NO POSITIONS HELD
- All positions were sold Jun 23. Portfolio is 100% cash.
- **No action required for any held position.**
- **Daytrade status:** 0/3. Clean slate.

### QQQ — AUTHORIZED LIMIT BUY
- **SOLD:** 5 shares at market avg $715.942 on 2026-06-23 13:37Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:37Z.**
- **BUY QQQ if price drops below $718.** Limit buy 3 shares. Entry $718. Stop $705. Target $745. R/R 2.1:1. Rationale: Core broad-tech exposure, post-Micron gap pullback.
- **DO NOT BUY QQQ above $718.** No market orders. Limit only.
- **Concentration check:** 3 shares @ $718 = $2,154 = 22.4% of equity. Within 45% cap.

### VOO — AUTHORIZED LIMIT BUY
- **SOLD:** 2 shares at market $676.13 on 2026-06-23 13:34Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:34Z.**
- **BUY VOO if price drops below $677.** Limit buy 1 share. Entry $677. Stop $670. Target $695. R/R 2.6:1. Rationale: Core S&P exposure, lower volatility anchor.
- **DO NOT BUY VOO above $677.** No market orders. Limit only.
- **Concentration check:** 1 share @ $677 = $677 = 7.0% of equity. Within 20% cap.

### AVGO — AUTHORIZED LIMIT BUY
- **SOLD:** 2 shares at market $381.95 on 2026-06-24 13:34Z.
- **24-hour cooldown EXPIRED at 2026-06-24 13:34Z.**
- **BUY AVGO if price drops below $384.** Limit buy 2 shares. Entry $384. Stop $375. Target $405. R/R 2.3:1. Rationale: AI infrastructure / networking, not pure memory play.
- **DO NOT BUY AVGO above $384.** No market orders. Limit only.
- **Concentration check:** 2 shares @ $384 = $768 = 8.0% of equity. Within 15% cap.

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

## Hard Rules / No-Trade Conditions
- **NO market orders today.** All buys must be limit orders. Gap-up opens are poor entry points.
- **No same-day round trips.** Code-level anti-churn guard is active in `alpaca_client_factory.ts`.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Do NOT run test scripts or code verification on the live account.** Use `DRY_RUN=1` only.
- **After 3+ consecutive loss events, reduce position size by 50% on next deployment.** Applied: QQQ max 3 shares, VOO max 1 share, AVGO max 2 shares.
- **Tactical agent must NOT sell positions bought today unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If QQQ/VOO/AVGO fills and then drops below stop, DO NOT sell same day.** Wait for next hourly authorization unless stop is breached with CRITICAL event.

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
- Cash: $9,603.37 (100%)
- Gross exposure: 0%

## Next Hourly Preview — 14:35Z (10:35 AM ET) Thu Jun 25
- Market will be OPEN. Evaluate whether gap-up holds.
- If QQQ/VOO/AVGO limit orders filled, HOLD with stops active.
- If gap holds and QQQ stays above $720, authorize additional QQQ share (4th) and possibly NVDA 1 share.
- If gap fills and QQQ drops below $710, revert to defensive and cut any filled positions at stop.
