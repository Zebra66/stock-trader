# Tactical Todo — Updated 2026-06-30 14:46Z (Tuesday 10:46 AM ET)
*HARD_LOCK LIFTED. Market OPEN. Event detector NONE. Tactical agent may execute normal todo. No hard lock active.*

## Current State
- **Regime:** offensive catch-up (60–90% band)
- **Lock status:** HARD_LOCK LIFTED. Tactical agent may execute normal todo.
- **Live book:** QQQ 5, VOO 2, AVGO 3. Cash $3,455.99. Open: HOOD limit 10 @ $101.50 (order b423815a).
- **Account equity / cash / buying power:** $9,621.82 / $3,455.99 / $30,093.27
- **Gross long exposure:** 64.1% | **Net exposure:** 64.1% | **Cash:** 35.9%
- **Daytrade count:** 0/3 (clean slate)
- **Pattern day trader:** false
- **Open orders:** HOOD 10 shares limit buy at $101.50 (pending, day order)
- **Market:** OPEN. Regular session until 20:00Z (4:00 PM ET).
- **Daily trade budget:** 0/3 used today. Up to 3 new orders authorized without fresh hourly.

## HOLD Instructions — Active During Tuesday Regular Session

### QQQ — HOLD 5 shares
- **Entry:** Avg $715.38 (filled Mon morning)
- **Current:** $732.80 (+2.44% unrealized)
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless event detector flags CRITICAL/MAJOR on QQQ specifically.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core growth. Above 50-day MA. Stop is 5.8% below current price.
- **Concentration:** 38.1% of equity. Under 45% cap. Adding 1 share would breach cap (45.9%). No adds.
- **AUTHORIZE SAME-DAY SELL QQQ if price breaches $690.00 AND event detector is CRITICAL/MAJOR**

### VOO — HOLD 2 shares
- **Entry:** Avg $676.46 (filled Mon morning)
- **Current:** $684.74 (+1.22% unrealized)
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless event detector flags CRITICAL/MAJOR on VOO specifically.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Low beta complement. Stop is 3.6% below current price.
- **Concentration:** 14.2% of equity. Under 20% cap. Adding 1 share would breach 21.4%. No adds.
- **AUTHORIZE SAME-DAY SELL VOO if price breaches $660.00 AND event detector is CRITICAL/MAJOR**

### AVGO — HOLD 3 shares
- **Entry:** Avg $371.95 (filled Mon morning)
- **Current:** $377.56 (+1.51% unrealized)
- **Stop:** $350.00 (hard disaster stop). Do NOT sell below $350 unless event detector flags CRITICAL/MAJOR on AVGO specifically.
- **Profit target:** $400.00. Do NOT trim or sell below $400 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Now profitable but co-founder selling $720M quarterly — monitor for reversal. Stop is 7.3% below current price.
- **Concentration:** 11.8% of equity. Under 15% cap. Adding 1 share would breach 15.7%. No adds.
- **Liquidity note:** AVGO is thin. LIMIT ORDER ONLY for any future orders.
- **AUTHORIZE SAME-DAY SELL AVGO if price breaches $350.00 AND event detector is CRITICAL/MAJOR**

### Total Portfolio Heat
- QQQ $126.90 + VOO $32.92 + AVGO $65.85 = $225.67 (2.34% of equity). Under 6% daily loss cap.

## BUY Triggers — Active During Tuesday Regular Session

### HOOD — BUY 10 shares limit at $101.50 (PRIMARY)
- **Current price:** $102.04. Trigger is 0.5% below market — realistic intraday pullback.
- **Entry:** $101.50 limit. Do NOT pay above $101.75.
- **Stop:** $95.00. Do NOT hold below $95 without fresh hourly authorization.
- **Profit target:** $115.00. Do NOT trim or sell below $115 without fresh hourly authorization.
- **R/R:** ($115.00 − $101.50) / ($101.50 − $95.00) = $13.50 / $6.50 = **2.08:1**.
- **Position size:** 10 shares = ~$1,015.00. Risk = $65.00 = 0.68% equity. Under 2% per-trade cap.
- **Concentration if filled:** ~$1,015 / $9,622 = 10.5% of equity. Under 15% single-stock cap.
- **Gross exposure if filled:** (~$6,166 + ~$1,015) / ~$9,622 = **74.7%**. Within 60–90% band.
- **Rationale:** Strong 1M (+8.2%) and 3M (+56.7%) momentum. Above 50-day MA. Outside Mag 7 rotation. Best 4th-position candidate.
- **Execution:** LIMIT ORDER ALREADY PLACED at $101.50 (order b423815a, day order). If price pulls back to $101.50 with intraday support, fill. If price gaps down through $101.50 without support, do NOT chase; cancel and wait for next hourly authorization.
- **24-hour cooldown:** HOOD was never sold in last 24 hours. No cooldown blocker.
- **IMPORTANT:** Do NOT modify or cancel this order without fresh hourly authorization.

## DO NOT BUY — Symbols Blocked This Cycle

### QQQ — DO NOT ADD
- **Reason:** At 38.1% of equity. Adding 1 share would push QQQ to ~45.9%, breaching 45% cap.
- **DO NOT BUY QQQ** today unless hourly strategist explicitly overrides.

### VOO — DO NOT ADD
- **Reason:** At 14.2% of equity. Adding 1 share would push VOO to ~21.4%, breaching the 20% non-QQQ ETF cap.
- **DO NOT BUY VOO** today unless hourly strategist explicitly overrides.

### AVGO — DO NOT ADD
- **Reason:** At 11.8% of equity. Adding 1 share would breach 15.7% cap. Also thin liquidity.
- **DO NOT BUY AVGO** today unless hourly strategist explicitly overrides.

### GOOG — DO NOT BUY — DO NOT RE-BUY
- **Reason:** Mag 7 rotation headwind. "Magnificent Seven shed $2.3 trillion in June as AI spending comes under closer scrutiny." Below 50D. No edge.
- **DO NOT BUY GOOG** today. **DO NOT RE-BUY GOOG** until hourly explicitly authorizes.

### SOXX — DO NOT BUY
- **Reason:** Chip-climax warning. Overlaps QQQ/AVGO. Very extended (+3.48% today, +105% 3M).
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Below 50-day MA. Single-stock chip risk. No edge over AVGO.
- **DO NOT BUY NVDA** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### RKLB — DO NOT BUY
- **Reason:** Below 50D. Space sector damaged. Chasing gap-up after large move is poor R/R.
- **DO NOT BUY RKLB** today.

### GLD — DO NOT BUY
- **Reason:** Below 50-day and 200-day. Defensive gold is failing.
- **DO NOT BUY GLD** today.

### EIS / SHLD / QTUM / ARKX — DO NOT BUY
- **Reason:** Thin liquidity or no edge.
- **DO NOT BUY EIS**, **DO NOT BUY SHLD**, **DO NOT BUY QTUM**, **DO NOT BUY ARKX** today.

## Hard Rules / No-Trade Conditions
- **No after-hours / pre-market orders.** All triggers are for regular session only.
- **No same-day round trips.** QQQ, VOO, AVGO were bought Monday. Tuesday same-day sell only authorized if hard stop breached AND event detector is CRITICAL/MAJOR.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **If event detector flags CRITICAL event, evaluate protective sells on held positions using authorized stop levels.**
- **Stop-level authority:** The hourly strategist's hard stop levels in this file are the ONLY authorized stop levels. Do NOT use stops from stale tactical memory or internal calculations.
- **If event detector flags MAJOR event, hold all positions and wait for next hourly authorization before any sells.**

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **EIS / ARKX / GLD / QTUM / SHLD:** Very low trade count / volume. Limit orders only.
- **VOO:** 4 trades at 14:33Z but liquid underlying. Limit orders only.
- **SOXX:** 6 trades at 14:34Z. Acceptable but limit orders preferred.
- **AVGO:** 17 trades at 14:34Z. Acceptable but limit orders preferred.
- **HOOD:** 33 trades at 14:34Z. Acceptable but limit orders preferred.
- **GOOG:** 18 trades at 14:34Z. Acceptable but limit orders preferred.
- **RKLB:** 10 trades at 14:34Z. Limit orders only.

## Current Book
- **Open orders (pending fill):** HOOD 10 shares limit buy at $101.50 (order b423815a, day order)
- **Filled positions today (Tue Jun 30):** NONE
- **Filled positions yesterday (Mon Jun 29):**
  - QQQ: 5 shares avg $715.38 (order 23167401, filled 13:55Z)
  - VOO: 2 shares avg $676.46 (order 749a53c9, filled 14:00Z)
  - AVGO: 3 shares avg $371.95 (order 265eda40, filled 13:46Z)
- Cash: $3,455.99 (35.9%)
- Gross exposure: 64.1%

## Next Hourly — Tuesday Jun 30 15:35Z (11:35 AM ET)
- Hold all core positions.
- Monitor HOOD limit order. If filled, update ledger and this file.
- If no fill by 15:35Z, re-evaluate whether limit needs adjustment or whether to switch to alternate candidate.
- Monitor AVGO for continuation above $375 and watch for any reversal on insider-selling news.
- Watch for any CRITICAL/MAJOR event flags.
