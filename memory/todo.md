# Tactical Todo — Updated 2026-06-30 14:35Z (Tuesday 10:35 AM ET)
*Market OPEN. Fresh hourly directives written. Next hourly: 15:35Z (11:35 AM ET).*

## Current State
- **Regime:** offensive catch-up (70–85% target band; 60–90% absolute max)
- **Lock status:** HARD_LOCK LIFTED. Tactical agent may execute normal todo.
- **Live book:** QQQ 5, VOO 2, AVGO 3. Cash $3,455.99.
- **Account equity / cash / buying power:** $9,604.16 / $3,455.99 / $30,043.83
- **Gross long exposure:** 64.0% | **Net exposure:** 64.0% | **Cash:** 36.0%
- **Daytrade count:** 0/3 (clean slate)
- **Pattern day trader:** false
- **Open orders:** HOOD 10 shares limit buy at $99.50, day order, status NEW, submitted 13:40:55Z.
- **Market:** OPEN. Next hourly: 15:35Z (11:35 AM ET).
- **Daily trade budget:** 0/3 filled today (HOOD order is open but not filled). If HOOD fills, budget becomes 1/3.

## HOLD Instructions — Active During Tuesday Regular Session

### QQQ — HOLD 5 shares
- **Entry:** Avg $715.38 (filled Mon morning)
- **Current:** $730.63 (+2.13% unrealized)
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless event detector flags CRITICAL/MAJOR on QQQ specifically.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core growth. Above 50-day MA. Breakeven is $715.38. Selling at breakeven or small profit is PROHIBITED without hourly authorization.
- **Concentration:** 38.0% of equity. Under 45% cap. Adding 1 share would breach cap. No adds.
- **AUTHORIZE SAME-DAY SELL QQQ if price breaches $690.00 AND event detector is CRITICAL/MAJOR**

### VOO — HOLD 2 shares
- **Entry:** Avg $676.46 (filled Mon morning)
- **Current:** $683.21 (+1.00% unrealized)
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless event detector flags CRITICAL/MAJOR on VOO specifically.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Breakeven is $676.46. Selling at breakeven or small profit is PROHIBITED without hourly authorization.
- **Concentration:** 14.2% of equity. Under 20% cap. Adding 1 share would breach 21.3%. No adds.
- **AUTHORIZE SAME-DAY SELL VOO if price breaches $660.00 AND event detector is CRITICAL/MAJOR**

### AVGO — HOLD 3 shares
- **Entry:** Avg $371.95 (filled Mon morning)
- **Current:** $376.15 (+1.13% unrealized)
- **Stop:** $350.00 (hard disaster stop). Do NOT sell below $350 unless event detector flags CRITICAL/MAJOR on AVGO specifically.
- **Profit target:** $400.00. Do NOT trim or sell below $400 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Breakeven is $371.95. Selling at breakeven or small profit is PROHIBITED without hourly authorization.
- **Concentration:** 11.7% of equity. Under 15% cap. Adding 1 share would breach 15.6%. No adds.
- **Liquidity note:** AVGO is thin. LIMIT ORDER ONLY for any future orders.
- **AUTHORIZE SAME-DAY SELL AVGO if price breaches $350.00 AND event detector is CRITICAL/MAJOR**

### Total Portfolio Heat
- QQQ $126.90 + VOO $32.92 + AVGO $65.85 = $225.67 (2.35% of equity). Under 6% daily loss cap.

## OPEN ORDER — KEEP ACTIVE

### HOOD — KEEP OPEN limit buy 10 shares @ $99.50
- **Status:** Already submitted at 13:40:55Z. Day order, expires at 20:00Z (4:00 PM ET).
- **Entry:** $99.50 limit (pullback entry, ~1.9% below current $101.44).
- **Stop:** $95.00 (hard stop if filled). Risk per share = $4.50.
- **Profit target:** $115.00. R/R = 3.4:1. Do NOT sell below $115 without fresh hourly authorization.
- **Rationale:** Strong 1M/3M momentum. Above 50D. 4th position to reduce cash drag.
- **Concentration if filled:** ~$995 / $9,604 = 10.4% of equity. Under 15% single-stock cap.
- **Exposure if filled:** Gross rises from 64.0% to ~74.4%. Cash drops to ~26%. Within offensive band.
- **Action:** Do NOT modify or cancel this order unless one of the following occurs:
  1. It fills — log to `memory/ledger.md` immediately.
  2. 3:00 PM ET arrives and it is still unfilled — CANCEL the order.
  3. A new hourly note explicitly cancels it.
- **If filled today:** Do NOT place any additional BUY orders today unless a new hourly note explicitly authorizes a 5th position.
- **Liquidity:** HOOD is thin (7 trades in latest bar). LIMIT ORDER ONLY. No market orders.

## BUY Triggers — For Tuesday Regular Session Only

### HOOD — ALREADY ORDERED (see above)
- **DO NOT BUY HOOD** with a new order today. The existing $99.50 limit is the only authorized HOOD entry.

### RKLB — DO NOT BUY
- **Reason:** Only 1 session of base-building above $95 post-acquisition. Need 2+ sessions to confirm. Very thin (14 trades).
- **DO NOT BUY RKLB** today.

### GOOG — DO NOT BUY
- **Reason:** Below 50-day MA. No fresh catalyst. Chasing at $349+ is poor R/R.
- **DO NOT BUY GOOG** today.

## DO NOT ADD — Existing Positions

### QQQ — DO NOT ADD
- **Reason:** At 38.0% of equity. Adding 1 share would push QQQ to ~45.8%, breaching 45% cap.
- **DO NOT BUY QQQ** today.

### VOO — DO NOT ADD
- **Reason:** At 14.2% of equity. Adding 1 share would push VOO to ~21.3%, breaching the 20% non-QQQ ETF cap.
- **DO NOT BUY VOO** today.

### AVGO — DO NOT ADD
- **Reason:** At 11.7% of equity. Adding 1 share would breach 15.6% cap.
- **DO NOT BUY AVGO** today.

## DO NOT BUY — Symbols Blocked This Cycle

### SOXX — DO NOT BUY
- **Reason:** Chip-climax warning. Overlaps QQQ/AVGO. Volatile.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Below 50-day MA. Single-stock chip risk. No edge over AVGO.
- **DO NOT BUY NVDA** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### GLD — DO NOT BUY
- **Reason:** Below 50-day and 200-day. Defensive gold is failing.
- **DO NOT BUY GLD** today.

### EIS / SHLD / QTUM / ARKX — DO NOT BUY
- **Reason:** Thin liquidity or no edge.
- **DO NOT BUY EIS**, **DO NOT BUY SHLD**, **DO NOT BUY QTUM**, **DO NOT BUY ARKX** today.

## Hard Rules / No-Trade Conditions
- **No after-hours / pre-market orders.** All triggers converted to next regular-session conditions.
- **No same-day round trips.** QQQ, VOO, AVGO were bought Monday. Tuesday same-day sell only authorized if hard stop breached AND event detector is CRITICAL/MAJOR.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **Tactical agent must NOT sell a winning position at breakeven or small profit without fresh hourly authorization.** The profit target defines when winners may be trimmed.
- **If event detector flags CRITICAL event, evaluate protective sells on held positions using authorized stop levels.**
- **If HOOD fills, log the fill to `memory/ledger.md` immediately.**
- **If HOOD remains unfilled at 3:00 PM ET, cancel the order.** Do not leave day-orders into close.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **HOOD:** 7 trades at 14:09Z. Very thin. LIMIT ORDER ONLY.
- **EIS / ARKX / GLD / QTUM:** Very low trade count / volume. Limit orders only.
- **SHLD:** 2 trades at 14:07Z. Acceptable but limit orders preferred.
- **VOO:** 7 trades at 14:10Z but liquid underlying. Limit orders only.
- **SOXX:** 17 trades at 14:09Z. Acceptable but limit orders preferred.
- **AVGO:** 95 trades at 14:09Z. Acceptable but limit orders preferred.
- **RKLB:** 14 trades at 14:09Z. Thin. Limit orders only.

## Current Book
- **Open orders (pending fill):**
  - HOOD: 10 shares limit $99.50 (order 96f1de6f-2676-41bf-9951-d3ea8a01fc0f, submitted 13:40:55Z)
- **Filled positions today:** NONE
- Cash: $3,455.99 (36.0%)
- Gross exposure: 64.0%

## Next Hourly — Tuesday Jun 30 15:35Z (11:35 AM ET)
- Hold all core positions.
- Keep HOOD limit open unless filled or 3:00 PM ET arrives.
- No new buy orders unless HOOD fills AND a new hourly note authorizes a 5th position.
- Event detector expected at ~15:07Z. If CRITICAL/MAJOR, evaluate protective sells at hard stops.
