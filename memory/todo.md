# Tactical Todo — Updated 2026-06-29 21:05Z (Monday post-close)
<!-- Autonomous override applied at 2026-06-30 13:30Z due to MAJOR event (SOXX/SMH gap-up at open). No trades executed. Held positions all OK. -->
*Market CLOSED. Next regular session: Tuesday Jun 30 09:30 AM ET. Do NOT submit after-hours orders.*

## Current State
- **Regime:** offensive catch-up (60–90% band)
- **Lock status:** HARD_LOCK LIFTED. Tactical agent may execute normal todo.
- **Live book:** QQQ 5, VOO 2, AVGO 3. Cash $3,456.
- **Account equity / cash / buying power:** $9,548.47 / $3,456 / $30,883
- **Gross long exposure:** 63.8% | **Net exposure:** 63.8% | **Cash:** 36.2%
- **Daytrade count:** 0/3 (clean slate for Tuesday)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market:** CLOSED. Next open: Tuesday Jun 30 13:30Z (9:30 AM ET).
- **Daily trade budget:** Reset to 0/3 for Tuesday. Budget exhausted on Monday; no new orders Monday after hours.

## HOLD Instructions — Active During Tuesday Regular Session

### QQQ — HOLD 5 shares
- **Entry:** Avg $715.38 (filled Mon morning)
- **Monday close:** $723.00 (+1.07% unrealized)
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless event detector flags CRITICAL/MAJOR on QQQ specifically.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core growth. Above 50-day MA. Stop is 4.6% below Monday close.
- **Concentration:** 37.9% of equity. Under 45% cap. Adding 1 share would breach cap (45.6%). No adds unless equity grows.
- **AUTHORIZE SAME-DAY SELL QQQ if price breaches $690.00 AND event detector is CRITICAL/MAJOR**

### VOO — HOLD 2 shares
- **Entry:** Avg $676.46 (filled Mon morning)
- **Monday close:** $680.90 (+0.66% unrealized)
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless event detector flags CRITICAL/MAJOR on VOO specifically.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Low beta complement. Stop is 3.1% below Monday close.
- **Concentration:** 14.3% of equity. Under 20% cap. Adding 1 share would breach 21.4%. No adds.
- **AUTHORIZE SAME-DAY SELL VOO if price breaches $660.00 AND event detector is CRITICAL/MAJOR**

### AVGO — HOLD 3 shares
- **Entry:** Avg $371.95 (filled Mon morning)
- **Monday close:** $371.89 (–0.02% unrealized)
- **Stop:** $350.00 (hard disaster stop). Do NOT sell below $350 unless event detector flags CRITICAL/MAJOR on AVGO specifically.
- **Profit target:** $400.00. Do NOT trim or sell below $400 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Recovered to flat. Stop is 5.9% below Monday close.
- **Concentration:** 11.7% of equity. Under 15% cap. Adding 1 share would breach 15.6%. No adds.
- **Liquidity note:** AVGO is thin. LIMIT ORDER ONLY for any future orders.
- **AUTHORIZE SAME-DAY SELL AVGO if price breaches $350.00 AND event detector is CRITICAL/MAJOR**

### Total Portfolio Heat
- QQQ $165.00 + VOO $41.80 + AVGO $65.67 = $272.47 (2.85% of equity). Under 6% daily loss cap.

## NO ORDERS AFTER HOURS — Next Session Triggers Only

**All buy conditions below are for Tuesday regular session ONLY. Do NOT submit pre-market or after-hours orders.**

### QQQ — DO NOT ADD
- **Reason:** At 37.9% of equity. Adding 1 share would push QQQ to ~45.6%, breaching 45% cap. No edge from adding at higher prices after a +2.3% day.
- **DO NOT BUY QQQ** at Tuesday open unless hourly strategist explicitly overrides.

### VOO — DO NOT ADD
- **Reason:** At 14.3% of equity. Adding 1 share would push VOO to ~21.4%, breaching the 20% non-QQQ ETF cap.
- **DO NOT BUY VOO** at Tuesday open unless hourly strategist explicitly overrides.

### AVGO — DO NOT ADD
- **Reason:** Flat from entry; adding on gap-up is poor R/R. At 11.7% of equity. Adding 1 share would breach 15.6% cap.
- **DO NOT BUY AVGO** at Tuesday open unless hourly strategist explicitly overrides.

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
- **Reason:** +15.8% today on acquisition news. Chasing gap-up after large move is poor R/R. Wait for base above $95 for 2+ sessions.
- **DO NOT BUY RKLB** today.

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
- **SHLD:** 6 trades at 19:31Z. Acceptable but limit orders preferred.
- **VOO:** 4 trades at 19:34Z but liquid underlying. Limit orders only.
- **SOXX:** 19 trades at 19:34Z. Acceptable but limit orders preferred.
- **AVGO:** 50 trades at 19:34Z. Acceptable but limit orders preferred.

## Current Book
- **Open orders (pending fill):** NONE
- **Filled positions today:**
  - QQQ: 5 shares avg $715.38 (order 23167401, filled 13:55Z)
  - VOO: 2 shares avg $676.46 (order 749a53c9, filled 14:00Z)
  - AVGO: 3 shares avg $371.95 (order 265eda40, filled 13:46Z)
- Cash: $3,456 (36.2%)
- Gross exposure: 63.8%

## Next Hourly — Tuesday Jun 30 13:35Z (9:35 AM ET)
- Market opens at 13:30Z (9:30 AM ET).
- Hold all core positions overnight. No after-hours orders.
- 4th-position deployment queue ready for Tuesday open if market is orderly.
