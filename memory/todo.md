# Tactical Todo — Updated 2026-06-23 13:30Z (Tuesday 9:30 AM ET)
*AUTONOMOUS OVERRIDE applied at 13:30Z. CRITICAL event detected. All buy conditions suspended. Only NVDA remains held.*

<!-- Autonomous override applied at 2026-06-23 13:30Z due to CRITICAL event -->

## Current State
- **Regime:** defensive (protect capital) — gross exposure collapsed to ~2.1%
- **HARD_LOCK:** LIFTED — but tactical agent is in defensive posture only
- **Live book:** NVDA 1 ($201.89)
- **Account equity / cash / buying power:** ~$9,588.93 / ~$9,387 / ~$30,583
- **Gross long exposure:** ~2.1% | **Net exposure:** ~2.1% | **Cash:** ~97.9%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** 4 market sell orders pending fill (QQQ 5, VOO 2, AVGO 2, SOXX 1)
- **24-hour cooldowns:** GOOG cooldown expired at 2026-06-23 14:20Z — but hourly strategist must explicitly authorize re-entry.
- **Market:** OPEN. CRITICAL broad market selloff. SPY -1.41%, QQQ -2.92%, SOXX -6.74%, XLK -3.69%.
- **Event detector:** CRITICAL at 13:30Z. Broad market and semiconductor sector in free-fall.
- **Upcoming catalyst:** Micron earnings Wednesday June 24 (sector-wide binary event for semiconductors).

## Position Instructions — Tuesday Jun 23 (Tactical Runs)

### NVDA — HOLD 1 — DO NOT ADD
- Position avg $208.47. Current $201.89 (unrealized -3.16%). Intraday -3.24%.
- **Stop loss:** If NVDA falls below $200.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** except if stop is breached.
- **Do NOT add NVDA** — not at +1R yet; adding to underwater position is prohibited.
- **Target:** $225.00.

### QQQ — SOLD — DO NOT RE-BUY
- **SOLD:** 5 shares at market on 2026-06-23 13:30Z. Stop $730.00 breached at $714.92.
- **Realized loss:** ~$85.47 from avg entry $732.164.
- **DO NOT RE-BUY QQQ** for 24 hours unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. Wait for hourly reset.

### VOO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market on 2026-06-23 13:30Z. Stop $680.00 breached at $675.99.
- **Realized loss:** ~$5.43 from avg entry $678.7025.
- **DO NOT RE-BUY VOO** for 24 hours unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. Wait for hourly reset.

### AVGO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market on 2026-06-23 13:30Z. Stop $390.00 breached at $379.17.
- **Realized loss:** ~$16.77 from avg entry $387.885.
- **DO NOT RE-BUY AVGO** for 24 hours unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event + Google-MediaTek TPU v9 headline risk. Protective exit. Wait for hourly reset.

### SOXX — SOLD — DO NOT RE-BUY
- **SOLD:** 1 share at market on 2026-06-23 13:30Z. Stop $620.00 breached at $606.42.
- **Realized loss:** ~$12.69 from avg entry $619.25.
- **DO NOT RE-BUY SOXX** for 24 hours unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Semiconductor sector down -6.74%. Protective exit. Wait for hourly reset.

### GOOG — DO NOT RE-BUY
- **STOP EXECUTED:** Sold 2 shares at $349.26 on 2026-06-22 14:20Z.
- **24-hour cooldown expired** at 2026-06-23 14:20Z. Hourly strategist must explicitly authorize re-entry.
- **Reason:** AI talent exodus headlines, Waymo recall, support breakdown. Capital preserved.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- **Market in CRITICAL selloff.** No new positions until hourly reset.

## Suspended Buy Conditions
The following buy conditions were SUSPENDED due to CRITICAL event at 2026-06-23 13:30Z. Hourly strategist must review and re-authorize.
- ~~SOXX conditional add: BUY 1 share if pullback to $640.00 or below with limit $639.50~~ — SUSPENDED — CRITICAL event detected at 2026-06-23 13:30Z
- ~~NVDA conditional add: BUY 1 share if pullback to $208.00 or below with limit $207.50~~ — SUSPENDED — CRITICAL event detected at 2026-06-23 13:30Z

## Hard Rules / No-Trade Conditions
- **NO discretionary buys this cycle.** Gross exposure collapsed to ~2.1%. Market in CRITICAL selloff.
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.** Do not add to any position that is underwater from your average entry.
- **Limit orders only for SOXX.** No market orders for thin symbols.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Current Book
- NVDA 1 (~2.1%)
- Cash: ~$9,387 (~97.9%)
- Gross exposure: ~2.1%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Hourly strategist must reset strategy after CRITICAL event.
- Review whether NVDA stop at $200.00 is breached.
- Evaluate market recovery or continuation. DO NOT deploy cash until hourly authorization.
