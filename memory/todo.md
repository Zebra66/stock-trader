# Tactical Todo — Updated 2026-06-23 17:35Z (Tuesday 1:35 PM ET)
*Event detector NONE. Market stabilizing but chip/tech weak. Only NVDA remains held. NO new buys today.*

## Current State
- **Regime:** defensive (protect capital) — gross exposure ~2.1%
- **HARD_LOCK:** LIFTED — no active lock
- **Live book:** NVDA 1 ($202.50)
- **Account equity / cash / buying power:** $9,603.74 / $9,401.24 / $38,171.96
- **Gross long exposure:** ~2.1% | **Net exposure:** ~2.1% | **Cash:** ~97.9%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **24-hour cooldowns active:**
  - QQQ: until 2026-06-24 13:37Z
  - VOO: until 2026-06-24 13:34Z
  - AVGO: until 2026-06-24 13:34Z
  - SOXX: until 2026-06-24 13:33Z
- **GOOG cooldown:** EXPIRED at 2026-06-23 14:20Z. But hourly strategist does NOT authorize re-entry.
- **Market:** OPEN. Event detector NONE at 17:35Z. Market recovering from gap-down open but chip/tech remains weak. "AI trade cools" narrative active.
- **Upcoming catalyst:** Micron earnings Wednesday June 24 after close (sector-wide binary event for semiconductors). Micron-Anthropic AI supply deal announced today.

## Position Instructions — Tuesday Jun 23 (Tactical Runs)

### NVDA — HOLD 1 — DO NOT ADD
- Position avg $208.47. Current $202.50 (unrealized -2.86%). Intraday low was $200.04 — extremely close to stop.
- **Stop loss:** If NVDA falls below $200.00, **SELL all NVDA shares at market** on next tactical run.
- **Do NOT sell NVDA today** except if stop is breached.
- **Do NOT add NVDA** — not at +1R yet; adding to underwater position is prohibited.
- **Target:** $225.00.

### QQQ — SOLD — DO NOT RE-BUY
- **SOLD:** 5 shares at market avg $715.942 on 2026-06-23 13:37Z. Stop $730.00 breached.
- **Realized loss:** ~$81.11 from avg entry $732.164.
- **DO NOT RE-BUY QQQ** for 24 hours (until 2026-06-24 13:37Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. 24-hour cooldown active.

### VOO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market $676.13 on 2026-06-23 13:34Z. Stop $680.00 breached.
- **Realized loss:** ~$5.43 from avg entry $678.7025.
- **DO NOT RE-BUY VOO** for 24 hours (until 2026-06-24 13:34Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Protective exit. 24-hour cooldown active.

### AVGO — SOLD — DO NOT RE-BUY
- **SOLD:** 2 shares at market $381.95 on 2026-06-23 13:34Z. Stop $390.00 breached.
- **Realized loss:** ~$11.87 from avg entry $387.885.
- **DO NOT RE-BUY AVGO** for 24 hours (until 2026-06-24 13:34Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event + Google-MediaTek TPU v9 headline risk. Protective exit. 24-hour cooldown active.

### SOXX — SOLD — DO NOT RE-BUY
- **SOLD:** 1 share at market $609.77 on 2026-06-23 13:33Z. Stop $620.00 breached.
- **Realized loss:** ~$9.48 from avg entry $619.25.
- **DO NOT RE-BUY SOXX** for 24 hours (until 2026-06-24 13:33Z) unless hourly strategist explicitly authorizes re-entry.
- **Reason:** CRITICAL market event. Semiconductor sector volatile. Protective exit. 24-hour cooldown active.

### GOOG — DO NOT BUY
- **STOP EXECUTED:** Sold 2 shares at $349.26 on 2026-06-22 14:20Z.
- **24-hour cooldown EXPIRED** at 2026-06-23 14:20Z. BUT hourly strategist does NOT authorize re-entry.
- **Reason:** Weak relative trend (-5.42% 1wk, -9.46% 1mo). AI talent exodus, Waymo recall. Goldman Sachs warning on AI trade extends negative narrative. No edge.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX — DO NOT BUY
- No edge, weak relative trends, extended, or thin liquidity.
- **Market recovering from gap-down.** No new positions until hourly authorization.

## Hard Rules / No-Trade Conditions
- **NO discretionary buys this cycle.** Gross exposure collapsed to ~2.1%. Market recovering from gap-down.
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
- Cash: $9,401.24 (~97.9%)
- Gross exposure: ~2.1%

## Next Hourly Preview — 18:35Z (2:35 PM ET)
- Hourly strategist will review market stabilization or continuation.
- Evaluate NVDA stop at $200.00. Day low $200.04 was very close.
- If 24-hour cooldowns expire and market stabilizes, evaluate re-entry for QQQ, VOO, AVGO, SOXX.
- DO NOT deploy cash until hourly authorization.
