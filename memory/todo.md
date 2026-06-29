# Tactical Todo — Updated 2026-06-29 17:35Z (Monday 1:35 PM ET)
*Market OPEN until 20:00Z (4:00 PM ET).*

## Current State
- **Regime:** offensive catch-up (60–90% band)
- **Lock status:** HARD_LOCK LIFTED. Tactical agent may execute normal todo.
- **Live book:** QQQ 5, VOO 2, AVGO 3. Cash $3,456.
- **Account equity / cash / buying power:** $9,554.20 / $3,456 / $30,898.95
- **Gross long exposure:** 63.8% | **Net exposure:** 63.8% | **Cash:** 36.2%
- **Daytrade count:** 0/3 (live API verified)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** OPEN until 20:00Z (4:00 PM ET). ~2.5 hours to close.
- **Daily trade budget:** 3 orders filled today (QQQ, VOO, AVGO). Budget exhausted. **NO NEW BUYS TODAY without explicit fresh hourly authorization.**

## HOLD Instructions — Execute in Next Tactical Window

### QQQ — HOLD 5 shares
- **Entry:** Avg $715.38 (filled this morning)
- **Current:** $722.69
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless event detector flags CRITICAL/MAJOR on QQQ specifically.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core growth. Above 50-day MA. Unrealized profit growing.
- **R-multiple:** Risk per share $25.38. 5 shares = $126.90 total risk (1.33% of equity). Reward per share $34.51. R/R = 1.36:1.
- **Concentration:** 37.8% of equity. Under 45% cap. Adding 1 share would breach cap at current price. No adds today.
- **AUTHORIZE SAME-DAY SELL QQQ if price breaches $690.00**

### VOO — HOLD 2 shares
- **Entry:** Avg $676.46 (filled this morning)
- **Current:** $680.47
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless event detector flags CRITICAL/MAJOR on VOO specifically.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Small unrealized profit growing. Low beta complement.
- **R-multiple:** Risk per share $16.46. 2 shares = $32.92 total risk (0.34% of equity). Reward per share $22.51. R/R = 1.37:1.
- **Concentration:** 14.2% of equity. Under 20% cap. Adding 1 share would breach 21.3%. No adds today.
- **AUTHORIZE SAME-DAY SELL VOO if price breaches $660.00**

### AVGO — HOLD 3 shares
- **Entry:** Avg $371.95 (filled this morning)
- **Current:** $374.78
- **Stop:** $350.00 (hard disaster stop). Do NOT sell below $350 unless event detector flags CRITICAL/MAJOR on AVGO specifically.
- **Profit target:** $400.00. Do NOT trim or sell below $400 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Diversifies beyond pure index exposure.
- **R-multiple:** Risk per share $21.95. 3 shares = $65.85 total risk (0.69% of equity). Reward per share $28.05. R/R = 1.28:1.
- **Concentration:** 11.8% of equity. Under 15% cap. Adding 1 share would breach 15.7%. No adds today.
- **Liquidity note:** AVGO is thin (14 trades at 17:34Z). LIMIT ORDER ONLY for any future orders.
- **AUTHORIZE SAME-DAY SELL AVGO if price breaches $350.00**

### Total Portfolio Heat
- QQQ $126.90 + VOO $32.92 + AVGO $65.85 = $225.67 (2.36% of equity). Under 6% daily loss cap.
- Current price-to-stop heat: QQQ $163.45 + VOO $40.94 + AVGO $74.34 = $278.73 (2.92% of equity).

## NO NEW BUYS TODAY

### QQQ — DO NOT ADD
- **Reason:** At 37.8% of equity. Adding 1 share would push QQQ to ~45.7%, breaching 45% cap. Averaging down prohibited.
- **DO NOT BUY QQQ** today.

### VOO — DO NOT ADD
- **Reason:** At 14.2% of equity. Adding 1 share would push VOO to ~21.3%, breaching the 20% non-QQQ ETF cap.
- **DO NOT BUY VOO** today.

### AVGO — DO NOT ADD
- **Reason:** At 11.8% of equity. Adding 1 share would push AVGO to ~15.7%, breaching 15% single-stock cap.
- **DO NOT BUY AVGO** today.

## Deployment Queue — For Tomorrow (Tue Jun 30)
Ranked candidates for fresh capital if market is orderly:
1. **HOOD 10 shares** if price pulls back to $98.00–$99.00 with intraday support. Stop $95.00. Target $115.00. R/R ~5.7:1. Would use ~$980–$990 cash and bring gross exposure to ~74%. Requires 2:1 R/R minimum.
2. **GOOG 4 shares** if it pulls back to $340.00–$345.00 after today's Dow-inclusion gap. Stop $325.00. Target $370.00. R/R ~2:1. Would use ~$1,360–$1,380 cash.
3. **QQQ add 1 share** only if equity grows to ~$10,500+ while QQQ stays under $720, keeping QQQ under 45% cap. Unlikely tomorrow.

## DO NOT BUY — Symbols Blocked This Cycle

### SOXX — DO NOT BUY
- **Reason:** Chip-climax warning. Overlaps QQQ/AVGO. Volatile.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Below 50-day MA. Single-stock chip risk. No edge over AVGO.
- **DO NOT BUY NVDA** today.

### GOOG — DO NOT BUY
- **Reason:** Below 50-day MA. Chasing +5% gap-up on headline news is poor R/R. Wait for pullback to $340–$345 with support or reclaim of $355.
- **DO NOT BUY GOOG** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### HOOD — DO NOT BUY
- **Reason:** No explicit hourly authorization for entry today. Trade budget exhausted. Entry authorized only tomorrow on pullback to $98–$99.
- **DO NOT BUY HOOD** today.

### RKLB — DO NOT BUY
- **Reason:** +15.6% today on acquisition news. Chasing gap-up after large move is poor R/R. Wait for base above $95.
- **DO NOT BUY RKLB** today.

### GLD — DO NOT BUY
- **Reason:** Below 50-day and 200-day. Defensive gold is failing.
- **DO NOT BUY GLD** today.

### EIS / SHLD / QTUM / ARKX — DO NOT BUY
- **Reason:** Thin liquidity or no edge.
- **DO NOT BUY EIS**, **DO NOT BUY SHLD**, **DO NOT BUY QTUM**, **DO NOT BUY ARKX** today.

## Hard Rules / No-Trade Conditions
- **No same-day round trips.** QQQ, VOO, AVGO were all bought today. Same-day sell only authorized if hard stop breached and event detector is CRITICAL/MAJOR.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If event detector flags CRITICAL event, evaluate protective sells on held positions using authorized stop levels.**

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **EIS / ARKX / GLD / QTUM:** Very low trade count / volume. Limit orders only.
- **SHLD:** 7 trades at 17:33Z. Acceptable but limit orders preferred.
- **VOO:** 1 trade at 17:33Z but liquid underlying. Limit orders only.
- **SOXX:** 15 trades at 17:34Z. Acceptable but limit orders preferred.
- **AVGO:** 14 trades at 17:34Z. Acceptable but limit orders preferred.

## Current Book
- **Open orders (pending fill):** NONE
- **Filled positions today:**
  - QQQ: 5 shares avg $715.38 (order 23167401, filled 13:55Z)
  - VOO: 2 shares avg $676.46 (order 749a53c9, filled 14:00Z)
  - AVGO: 3 shares avg $371.95 (order 265eda40, filled 13:46Z)
- Cash: $3,456 (36.2%)
- Gross exposure: 63.8%

## Next Hourly Preview — 18:35Z (2:35 PM ET)
- Hold all core positions. Monitor for +1R/+2R progress.
- If QQQ reaches $740.76 (+$18.07 = +0.71R), consider raising stop to breakeven in next hourly.
- No new buy authorization expected today. Prepare 4th-position deployment queue for tomorrow.
