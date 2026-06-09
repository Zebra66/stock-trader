# Tactical Todo — Updated 2026-06-09 15:30Z (Tuesday 11:30 AM ET)
*CRITICAL event detected at 15:30Z. Broad market semiconductors crashing. All buys suspended. No protective sells triggered. Holding all positions.*

<!-- Autonomous override applied at 2026-06-09T14:10:00Z due to CRITICAL event -->
<!-- Autonomous override applied at 2026-06-09T14:20:00Z due to MAJOR event -->
<!-- Autonomous override applied at 2026-06-09T14:50:00Z due to CRITICAL event -->
<!-- Autonomous override applied at 2026-06-09T15:10:00Z due to MAJOR event -->
<!-- Autonomous override applied at 2026-06-09T15:30:00Z due to CRITICAL event -->

## Current State
- **Regime:** offensive catch-up (60–90% band, currently at ~73.2%)
- **Live book:** QQQ 6, VOO 2, SOXX 3
- **Open orders:** NONE.
- **Override:** CRITICAL event detected at 15:30Z. All buy conditions SUSPENDED. No protective sells executed.
- **Account equity / cash / buying power:** ~$9,838 / ~$2,634 / ~$30,708
- **Gross long exposure:** ~73.2% | **Net exposure:** ~73.2% | **Cash:** ~26.8%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Market:** OPEN. Next tactical: 15:20Z. Next hourly: 15:35Z (11:35 AM ET).
- **Macro context:** Semiconductors bouncing +1.2% after CRITICAL drop. SOXX $565.35, QQQ $711.82, VOO $678.62. Event detector MAJOR. All held positions OK.

## Position Instructions — Tue Jun 9 (:40, :50 Tactical Runs)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~42.9%, at 45% cap. Cannot add 7th share.
- Unrealized +0.90% from avg $705.45. Current price ~$711.82.
- DO NOT SELL QQQ today.
- DO NOT ADD QQQ TODAY.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~13.6%, at 20% non-QQQ ETF cap. 3rd share would breach cap.
- Unrealized -0.01% from avg $678.70. Current price ~$678.62.
- DO NOT SELL VOO today.
- DO NOT ADD VOO TODAY.

### SOXX — HOLD 3 — DO NOT SELL — DO NOT ADD
- Weight ~16.9% of equity ($1,676 / $9,909). Within 20% ETF cap.
- Unrealized -0.99% from avg $570.997. Current price ~$565.35.
- **LIMIT BUY 1 SOXX @ $570.00 FILLED.** No further SOXX buys authorized.
- Do NOT sell SOXX today (same-day round trip prohibited; bought at 14:37Z).
- SOXX entry ceiling: $579.50 — chasing higher is not permitted.

### NVDA — DO NOT BUY — DO NOT RE-BUY — SUSPENDED
- Price ~$205.04, well below $210 threshold. Re-entry ONLY on $210.50 reclaim with volume.
- **SUSPENDED — CRITICAL event detected at 14:50Z.** No NVDA buys until hourly reset.
- Do NOT place NVDA order in this tactical window.
- DO NOT RE-BUY NVDA TODAY.

### AVGO — DO NOT BUY — DO NOT RE-BUY
- Post-earnings crash continues. ~$393.03. No confirmed support.
- Hourly does NOT authorize re-entry today.
- DO NOT BUY AVGO TODAY.

### GOOG — DO NOT BUY
- Support $375 broken. Price ~$366.32. Still below $375.
- No re-entry until it reclaims $375 with volume and holds for 30 minutes.
- DO NOT BUY GOOG TODAY.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY
- No edge, weak relative trends, parabolic reversal risk, or thin liquidity.
- Hourly does NOT authorize buys for any of these today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** If a symbol was bought today, do NOT sell it today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Rephrase conditional lines to avoid false matches (e.g., use "entry ceiling" instead of "DO NOT ADD ABOVE").
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for hourly authorization.
- **STOP-LOSS EXECUTION RULE:** When a stop is breached, use exact limit price or market order.
- **Open-order conflict check:** Run `get-orders --status open` before placing any order.
- **Exposure check:** After this buy, will gross exposure exceed 90%? If yes, abort.
- **Data quality check:** Is the broker quote confirmed by healthy volume (>10 trades)? If stale/abnormal, abort.
- **PDT conservation:** Conserve daytrades for emergencies.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- **Pre-computed caps this cycle:** QQQ max 6 shares; VOO max 2 shares; SOXX max 3 shares; NVDA max 7 shares.

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`. BUY orders for banned symbols are REJECTED.

## Illiquidity Warnings (Universe Watchlist)
- **VOO:** Thin relative to SPY. Use limit orders only.
- **SOXX:** Acceptable for limit orders; avoid market orders.
- **EIS / SHLD / QTUM / ARKX / GLD:** Very low trade count / volume. Limit orders only.

## Deployment Queue — Tue Jun 9
1. **SOXX 1 share — limit $570.00** — FILLED. 3 shares = ~16.9% weight.
2. **NVDA 1 share — limit $210.50** — SUSPENDED due to CRITICAL event at 14:50Z.
3. **No other authorized buys.**
4. **ALL BUYS SUSPENDED until hourly reset at 15:35Z.**

## Current Book
- QQQ 6 (~42.9%), VOO 2 (~13.6%), SOXX 3 (~17.0%)
- Cash: ~$2,634 (~26.4%)
- Gross exposure: ~73.6%

## Expected Book — Current
- QQQ 6 (~42.9%), VOO 2 (~13.6%), SOXX 3 (~17.0%)
- Cash: ~$2,634 (~26.4%)
- Gross exposure: ~73.6%

## Next Hourly Preview — 15:35Z (11:35 AM ET)
- Reassess NVDA $210.50 reclaim.
- Reassess SOXX if limit not filled.
- Review broad market after first 95 minutes.
