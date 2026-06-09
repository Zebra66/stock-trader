<!-- Autonomous override applied at 2026-06-09 16:10Z due to CRITICAL event -->

# Tactical Todo — Updated 2026-06-09 16:10Z (Tuesday 12:10 PM ET)
*Event detector CRITICAL at 16:10Z. SOXX -3.03% in 10min, QQQ -1.07% in 10min. All buys suspended. No sells executed (stops not breached).*


## Current State
- **Regime:** neutral (50–70% gross exposure band, currently at ~61.8%)
- **Live book:** QQQ 6, VOO 2, SOXX 1
- **Open orders:** NONE.
- **Account equity / cash / buying power:** $9,790.03 / $3,739.07 / $31,898.98
- **Gross long exposure:** $6,050.96 / $9,790.03 = **61.8%** | **Net exposure:** ~61.8% | **Cash:** ~38.2%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Market:** OPEN. Next tactical: 16:20Z. Next hourly: 16:35Z (12:35 PM ET).
- **Macro context:** Event detector CRITICAL at 16:10Z. SOXX -3.03% in 10 min, QQQ -1.07% in 10 min. Tech crash accelerating. SOXX intraday -6.06%, QQQ intraday -2.83%, VOO intraday -1.47%. SPY $728.30 (-1.06% today).

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT ADD
- Weight ~42.8%, at 45% cap. Cannot add 7th share.
- Unrealized -0.57% from avg $705.45. Current price ~$701.46.
- **Stop-loss:** If QQQ drops below $695.00, SELL 6 shares via market or limit order. Rationale: broad market correction deepening.
- DO NOT ADD QQQ TODAY.
- DO NOT SELL QQQ today unless stop at $695 is breached.

### VOO — HOLD 2 — DO NOT ADD
- Weight ~13.7%, at 20% non-QQQ ETF cap. 3rd share would breach cap.
- Unrealized -0.95% from avg $678.70. Current price ~$672.27.
- **Stop-loss:** If VOO drops below $665.00, SELL 2 shares via market or limit order. Rationale: defensive trim in risk-off tape.
- DO NOT ADD VOO TODAY.
- DO NOT SELL VOO today unless stop at $665 is breached.

### SOXX — SELL 2 (HOLD 1) — DO NOT ADD
- Weight ~16.8% of equity. Trimming to ~5.5% to reduce semi-sector risk.
- ~~SELL 2 SOXX shares at limit $549.00.~~ ✅ **FILLED at $552.30** (2026-06-09 15:41Z). Trim complete.
- **AUTHORIZE SAME-DAY SELL SOXX** — hourly strategist explicitly authorizes selling the 2 June 8 shares today while the 1 share bought today is protected.
- **HOLD 1 SOXX share** (bought today at $569.94). DO NOT SELL this 1 share today — same-day round trip prohibited.
- **Stop-loss for remaining 1 share:** If SOXX drops below $535.00, SELL 1 share via limit order. Rationale: cut further semi-sector risk.
- SOXX entry ceiling: $579.50 — chasing higher is not permitted.
- Do NOT ADD SOXX TODAY.
- Do NOT RE-BUY SOXX for 24 hours after the 2-share sell fills.

### NVDA — DO NOT BUY — DO NOT RE-BUY — SUSPENDED
- Price ~$203.51, well below $210 threshold. Re-entry ONLY on $210.50 reclaim with volume.
- Hourly does NOT authorize re-entry today.
- Do NOT place NVDA order in this tactical window.
- DO NOT RE-BUY NVDA TODAY.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Post-earnings crash continues. ~$380.96. No confirmed support.
- Hourly does NOT authorize re-entry today.
- DO NOT BUY AVGO TODAY.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$358.00. Still below $375.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- DO NOT BUY GOOG TODAY.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today. (The 1 SOXX share bought today at 14:42Z is protected.)
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Rephrase conditional lines to avoid false matches (e.g., use "entry ceiling" instead of "DO NOT ADD ABOVE").
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for hourly authorization. (Event detector is currently NONE.)
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, use exact limit price or market order.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order.
- **Exposure check:** After this sell, will gross exposure fall below 50%? If yes, that is acceptable (neutral band lower bound). If above 70%, abort further buys.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** Conserve daytrades for emergencies.
- **Illiquidity:** VOO quote is very thin (1 trade, 100 volume). Use limit orders only for VOO. If VOO stop is breached, use limit sell at or slightly below the stop price.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- **Pre-computed caps this cycle:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares; NVDA max 7 shares.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`. BUY orders for banned symbols are REJECTED.

## Illiquidity Warnings (Universe Watchlist)
- **VOO:** Thin relative to SPY. Use limit orders only. Current bar: 1 trade, 100 volume.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Deployment Queue — Tue Jun 9
1. **SELL 2 SOXX shares — limit $549.00** — trim semi exposure after sector drop. Highest priority.
2. **No other authorized trades.**
3. **ALL BUYS SUSPENDED until hourly reassessment at 16:35Z.**

## Current Book
- QQQ 6 (~42.6%), VOO 2 (~13.7%), SOXX 1 (~5.5%)
- Cash: $3,739.07 (~38.2%)
- Gross exposure: ~61.8%

## Expected Book — Achieved
- QQQ 6 (~42.6%), VOO 2 (~13.7%), SOXX 1 (~5.5%)
- Cash: $3,739.07 (~38.2%)
- Gross exposure: ~61.8%

## Next Hourly Preview — 16:35Z (12:35 PM ET)
- Reassess QQQ $695 stop and VOO $665 stop.
- Reassess SOXX $535 stop for remaining 1 share.
- Review if SOXX trim filled and if market stabilized.
- No new buy candidates unless tape confirms stabilization.
