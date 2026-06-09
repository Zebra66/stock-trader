# Tactical Todo — Updated 2026-06-09 16:35Z (Tuesday 12:35 PM ET)
*Event detector NONE. SOXX stop breached — same-day sell authorized. QQQ already sold. No new buys.*

## Current State
- **Regime:** defensive (30–50% gross exposure band, currently at ~19.2%)
- **Live book:** VOO 2, SOXX 1 (to be sold)
- **Open orders:** NONE.
- **Account equity / cash / buying power:** ~$9,751 / ~$7,884 / ~$36,764
- **Gross long exposure:** $1,868.45 / $9,751.34 = **19.2%** | **Net exposure:** ~19.2% | **Cash:** ~80.8%
- **Daytrade count:** 0/3 (will become 1/3 after SOXX sell)
- **Pattern day trader:** false
- **Market:** OPEN. Next tactical: 16:40Z. Next hourly: 17:35Z (1:35 PM ET).
- **Macro context:** Tech rotation continues. SPY -1.57%, QQQ -3.19%, SOXX -6.89% today. All universe red. No confirmed support.

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### SOXX — SELL 1 — AUTHORIZE SAME-DAY SELL SOXX
- **Weight ~5.4% of equity.** 1 share remaining (bought today at $569.94 at 14:42Z).
- **Stop-loss $535.00 was BREACHED** at $528.83 during 16:20Z MAJOR event. Price now $531.02 — still below $535.00.
- **Hourly explicitly authorizes same-day sell** of this 1 share despite anti-churn rule. The stop is breached and the sector is in a confirmed crash (-12% week). Risk management overrides the round-trip guard.
- **SELL 1 SOXX share** via market order or limit order at $530.00. Rationale: stop-loss discipline; sector crashing; price has not recovered above stop.
- **After sell:** SOXX weight = 0%. Realized loss ~$40.
- **Daytrade impact:** This will count as 1 daytrade (bought and sold same day). daytrade_count will become 1/3.
- **DO NOT RE-BUY SOXX** for 24 hours after this sell fills.
- **DO NOT ADD SOXX** today.

### VOO — HOLD 2 — DO NOT ADD
- Weight ~13.7%, at 20% non-QQQ ETF cap. 3rd share would breach cap.
- Unrealized -1.47% from avg $678.70. Current price ~$668.72.
- **Stop-loss:** If VOO drops below $665.00, SELL 2 shares via limit order at $664.50. Rationale: defensive trim in risk-off tape.
- DO NOT ADD VOO TODAY.
- DO NOT SELL VOO today unless stop at $665 is breached.
- **Illiquidity warning:** VOO quote is very thin (4 trades, 66 volume). Use limit orders only. If stop breached, limit sell at $664.50 or slightly below stop.

### QQQ — SOLD 6 — DO NOT RE-BUY
- **SOLD 6 shares at $690.79** via market order (2026-06-09 16:20Z). Stop at $695.00 breached.
- **Realized loss:** ~$87.94 on QQQ lot.
- DO NOT RE-BUY QQQ for 24 hours unless hourly explicitly authorizes.
- DO NOT ADD QQQ TODAY.

### NVDA — DO NOT BUY — DO NOT RE-BUY — SUSPENDED
- Price ~$201.28, well below $210 threshold. Re-entry ONLY on $210.50 reclaim with volume.
- Hourly does NOT authorize re-entry today.
- Do NOT place NVDA order in this tactical window.
- DO NOT RE-BUY NVDA TODAY.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Post-earnings crash continues. ~$374.85. No confirmed support.
- Hourly does NOT authorize re-entry today.
- DO NOT BUY AVGO TODAY.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$358.49. Still below $375.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- DO NOT BUY GOOG TODAY.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips** unless explicitly authorized with exact string `AUTHORIZE SAME-DAY SELL <SYMBOL>`.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Rephrase conditional lines to avoid false matches (e.g., use "entry ceiling" instead of "DO NOT ADD ABOVE").
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for hourly authorization. (Event detector is currently NONE.)
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, use exact limit price or market order.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order.
- **Exposure check:** After this sell, gross exposure will be ~13.7% (VOO only). This is below the 30% defensive lower bound. That is acceptable because the market is in a confirmed correction and no quality setups exist. Do NOT force-buy to hit the band.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** After SOXX sell, daytrade_count will be 1/3. Conserve remaining 2 daytrades for emergencies.
- **Illiquidity:** VOO quote is very thin (4 trades, 66 volume). Use limit orders only for VOO. If VOO stop is breached, use limit sell at or slightly below the stop price.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- **Pre-computed caps this cycle:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares; NVDA max 7 shares.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`. BUY orders for banned symbols are REJECTED.

## Illiquidity Warnings (Universe Watchlist)
- **VOO:** Thin relative to SPY. Use limit orders only. Current bar: 4 trades, 66 volume.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Deployment Queue — Tue Jun 9
1. **SELL 1 SOXX share — limit $530.00 or market** — stop breached, sector crashing. Highest priority.
2. **No other authorized trades.**
3. **ALL BUYS SUSPENDED until hourly reassessment at 17:35Z or tape shows stabilization.**

## Current Book (Pre-Sell)
- VOO 2 (~13.7%), SOXX 1 (~5.4%)
- Cash: ~$7,884 (~80.8%)
- Gross exposure: ~19.2%

## Expected Book (Post-Sell)
- VOO 2 (~13.7%)
- Cash: ~$8,415 (~86.3%)
- Gross exposure: ~13.7%

## Next Hourly Preview — 17:35Z (1:35 PM ET)
- Reassess VOO $665 stop.
- Monitor if any universe symbol shows stabilization (reclaim of key level with volume).
- Gross exposure will be ~13.7% after SOXX exit. Decide if any tactical add is warranted.
- No re-buy of QQQ or SOXX until 24-hour cooldown expires.
