# Tactical Todo — Updated 2026-06-29 13:35Z (Monday 9:35 AM ET)
*HARD_LOCK LIFTED. Deploy core positions. Market OPEN until 20:00Z (4:00 PM ET).*

## Current State
- **Regime:** offensive catch-up (60–90% band)
- **Lock status:** HARD_LOCK LIFTED. Tactical agent may execute normal todo.
- **Live book:** NO POSITIONS. 100% cash.
- **Account equity / cash / buying power:** ~$9,501.67 / ~$9,501.67 / ~$38,006.68
- **Gross long exposure:** ~0% | **Net exposure:** ~0% | **Cash:** ~100%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 20:00Z (4:00 PM ET). ~6.5 hours to close.
- **Daily trade budget:** 3 orders authorized for this tactical cycle. Use them for QQQ, VOO, AVGO.

## BUY Instructions — Execute in Next Tactical Window

### QQQ — BUY 5 shares via LIMIT ORDER
- **Entry:** Limit buy at $715.50 or lower. Do NOT pay above $716.00.
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless hourly note explicitly authorizes the exit with `AUTHORIZE SAME-DAY SELL QQQ`.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core liquid growth. Reclaimed 50-day MA today. Cash drag is killing our 3-month goal. Must deploy.
- **R-multiple:** Risk per share $25.50. 5 shares = $127.50 total risk (1.34% of equity). Reward per share $34.50. R/R = 1.35:1.
- **Concentration check:** 5 shares × $715.50 = $3,577.50 = 37.65% of equity. Under 45% cap.

### VOO — BUY 2 shares via LIMIT ORDER
- **Entry:** Limit buy at $676.50 or lower. Do NOT pay above $677.50.
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless hourly note explicitly authorizes the exit with `AUTHORIZE SAME-DAY SELL VOO`.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Reclaimed 50-day MA. Lower beta complement to QQQ.
- **R-multiple:** Risk per share $16.50. 2 shares = $33.00 total risk (0.35% of equity). Reward per share $23.50. R/R = 1.42:1.
- **Concentration check:** 2 shares × $676.50 = $1,353.00 = 14.24% of equity. Under 20% cap.

### AVGO — BUY 3 shares via LIMIT ORDER
- **Entry:** Limit buy at $372.00 or lower. Do NOT pay above $373.00.
- **Stop:** $350.00 (hard disaster stop). Do NOT sell below $350 unless hourly note explicitly authorizes the exit with `AUTHORIZE SAME-DAY SELL AVGO`.
- **Profit target:** $400.00. Do NOT trim or sell below $400 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Below 50-day but not in climax territory. Diversifies beyond pure index exposure.
- **R-multiple:** Risk per share $22.00. 3 shares = $66.00 total risk (0.69% of equity). Reward per share $28.00. R/R = 1.27:1.
- **Concentration check:** 3 shares × $372.00 = $1,116.00 = 11.75% of equity. Under 15% cap.
- **Liquidity note:** AVGO is thin today (21 trades at 13:34Z). LIMIT ORDER ONLY. No market orders.

### Total Planned Exposure After Fills
- QQQ $3,577.50 (37.65%) + VOO $1,353.00 (14.24%) + AVGO $1,116.00 (11.75%) = $6,046.50 (63.64%)
- Total portfolio heat: $226.50 (2.38% of equity). Under 6% daily loss cap.

## DO NOT BUY — Symbols Blocked This Cycle

### SOXX — DO NOT BUY
- **Reason:** Chip-climax warning from Morgan Stanley Wilson today. SOXX is +73% 3M — pure momentum. Overlaps QQQ tech exposure. No add.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Below 50-day MA. Single-stock chip risk. Wilson warning on momentum. No edge over AVGO.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Below 50-day MA. Weak 1M (–10.75%). No catalyst until Jul 23 earnings.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD — DO NOT BUY
- **Reason:** Above 50-day but below 200-day. Brokerage/crypto volatility. No edge.
- **DO NOT BUY HOOD** today.

### RKLB — DO NOT BUY
- **Reason:** +12% today is dead-cat bounce in –36% 1M decline. No edge.
- **DO NOT BUY RKLB** today.

### GLD — DO NOT BUY
- **Reason:** Below 50-day and 200-day. Defensive gold is failing. No edge.
- **DO NOT BUY GLD** today.

### EIS / SHLD / QTUM / ARKX — DO NOT BUY
- **Reason:** Thin liquidity or no edge. EIS is stale (last trade Jun 26). SHLD/QTUM/ARKX have very low trade counts.
- **DO NOT BUY EIS**, **DO NOT BUY SHLD**, **DO NOT BUY QTUM**, **DO NOT BUY ARKX** today.

## Secondary Triggers (Only if Primary Fills and Market Holds)

### QQQ — ADD 1 share if pullback to $708.00 with limit order
- **Condition:** Only if the initial 5-share QQQ position is already filled AND QQQ is holding above $718 by next hourly.
- **Concentration check:** 6 shares total at ~$714 avg = $4,284 = 45.08% of equity. At or near 45% cap. Do NOT add more than 6 shares total today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** None of our symbols were sold today. Anti-churn does NOT block QQQ/VOO/AVGO today.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, and `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
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
- **VOO:** Only 7 Alpaca trades at 13:30Z — thin bar but liquid underlying. Limit orders only.
- **SOXX:** 19 trades at 13:34Z. Thin relative to large-cap ETFs. Limit orders only if authorized.
- **AVGO:** 21 trades at 13:34Z. Limit orders only.

## Current Book
- NO POSITIONS
- Cash: ~$9,501.67 (100%)
- Gross exposure: ~0%

## Next Hourly Preview — 14:35Z (10:35 AM ET)
- Verify QQQ/VOO/AVGO fills from 13:40/13:50/14:10/14:20/14:30 tactical windows.
- If fills occurred, verify gross exposure is ~63% and no unauthorized orders exist.
- If no fills, consider raising limit prices or switching to market orders for core QQQ/VOO if tape remains strong.
- Monitor SOXX direction for chip-climax validity.
