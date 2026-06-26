# Tactical Todo — Updated 2026-06-26 17:35Z (Friday 1:35 PM ET)
*HARD_LOCK LIFTED. No discretionary buys today. Market OPEN until 16:00 ET.*

## Current State
- **Regime:** defensive (30–50% band)
- **Lock status:** HARD_LOCK LIFTED. Tactical agent may execute normal todo.
- **Live book:** NO POSITIONS. 100% cash.
- **Account equity / cash / buying power:** ~$9,501 / ~$9,501 / ~$38,006
- **Gross long exposure:** ~0% | **Net exposure:** ~0% | **Cash:** ~100%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 16:00 ET.
- **Tactical windows 12:40–13:30:** No action. No orders. No events.

## Position Instructions — Friday Jun 26 (Remaining Session)

### QQQ — DO NOT BUY — DO NOT RE-BUY
- **SOLD:** 6 shares @ $704.03 via market order at 9:41 AM ET today.
- **Anti-churn rule:** QQQ was sold today. You may NOT buy QQQ back today.
- **24-hour cooldown:** Also active. Do NOT RE-BUY QQQ until Monday Jun 30 hourly authorization.
- **Monday trigger (preview):** Re-entry authorized IF QQQ holds $710+ OR breaks above $718 with volume confirmation. Stop would be $700. Limit orders only.
- **DO NOT BUY QQQ** today.

### VOO — DO NOT BUY — DO NOT RE-BUY
- **SOLD:** 2 shares @ $668.74 via market order at 9:32 AM ET today.
- **Anti-churn rule:** VOO was sold today. You may NOT buy VOO back today.
- **24-hour cooldown:** Also active. Do NOT RE-BUY VOO until Monday Jun 30 hourly authorization.
- **Monday trigger (preview):** Re-entry authorized IF VOO holds above $670 OR dips to $665 with confirmation. Stop would be $660. Limit orders only.
- **DO NOT BUY VOO** today.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- **SOLD:** 3 shares @ $368.08 via market order at 9:32 AM ET today.
- **Anti-churn rule:** AVGO was sold today. You may NOT buy AVGO back today.
- **24-hour cooldown:** Also active. Do NOT RE-BUY AVGO until Monday Jun 30 hourly authorization.
- **Monday trigger (preview):** Re-entry authorized IF AVGO holds $365 OR dips to $360 with confirmation. Stop would be $355. Limit orders only.
- **DO NOT BUY AVGO** today.

### SOXX — DO NOT BUY
- **Reason:** Down 4.94% today. Semis volatile. Memory-cost headwinds. No edge.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Single-stock AI. Weak 1M (–10.81%). Down 1.81% today.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Weak 1M (–13.44%). Down 1.32% today.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD — DO NOT BUY
- **Reason:** No edge. Weak 1W (–8.48%).
- **DO NOT BUY HOOD** today.

### RKLB — DO NOT BUY
- **Reason:** No edge. Weak 1M (–39.25%). Up 4.23% today is likely a dead-cat bounce.
- **DO NOT BUY RKLB** today.

### GLD — DO NOT BUY
- **Reason:** Defensive gold. Weak 3M (–7.95%). No edge in a risk-off tape when gold is already failing.
- **DO NOT BUY GLD** today.

### EIS / SHLD / QTUM / ARKX — DO NOT BUY
- **Reason:** No edge, weak relative trends, or thin liquidity. EIS and SHLD have 1–2 trades in last bar.
- **DO NOT BUY EIS**, **DO NOT BUY SHLD**, **DO NOT BUY QTUM**, **DO NOT BUY ARKX** today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was sold today, you may NOT buy it back today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZED SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If event detector flags CRITICAL event, do NOT sell immediately.** Hold and wait for next hourly authorization (unless exchange halt).

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
- **AVGO:** Thin today (22 trades, 672 vol at 17:35Z). Limit orders only if authorized.

## Current Book
- NO POSITIONS
- Cash: ~$9,501 (100%)
- Gross exposure: ~0%

## Next Hourly Preview — 14:35 PM ET
- Continue holding cash. No new positions.
- Monitor QQQ/SPY for any breakdown below morning lows.
- No action needed unless market structure changes materially.

## Next Hourly Preview — Monday Jun 30 9:35 AM ET
- Reassess QQQ support after weekend.
- Evaluate SPY direction relative to 50-day moving average.
- If market stabilizes, execute Monday re-entry queue for QQQ/VOO/AVGO per triggers above.
- If market weakens further, extend defensive posture.
