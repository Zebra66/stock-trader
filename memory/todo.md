# Tactical Todo For Next Execution
*Updated 2026-05-18 09:35 ET. Market OPEN. Cleanup-only lock LIFTED. Normal operations resumed.*

## Current State
- **Regime:** neutral / light offensive catch-up
- **Live book:** **QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1**
- **Account equity / cash / buying power:** **$9,995.47 / $1,958.50 / $11,953.97**
- **Gross exposure:** **80.4%** of equity (inside 75–85% band)
- **Daytrade count:** **3** (caution: prohibit same-day closing orders for any position opened today)
- **All holdings universe-compliant.** No unauthorized positions.

## Ranked Execution Priority
1. **HOLD approved core positions** — QQQ, GOOG, SOXX, NVDA, AVGO.
2. **Protective reduction only if weakness worsens** — AVGO first (415 stop), then SOXX (500 stop).
3. **Selective adds on quality setups only** — GOOG or QTUM, after confirming cap compliance and tape stabilization.

## Hard Rules / No-Trade Conditions
- **Do not open or add any symbol outside the approved universe.** The CLI blocks out-of-universe BUY orders at the API layer.
- **Do not execute same-day round trips.** If a symbol was bought today, you may NOT sell it today. If a symbol was sold today, you may NOT buy it back today.
- **Do not keep resubmitting rejected orders.** Log the error and wait for the next hourly directive.
- **One order per tactical cycle unless an explicit stop is triggered in a current holding.**
- **If a symbol has breaking adverse news, disorderly price action, or an abnormal spread, do nothing.**
- **If regular hours are over, convert all entries into next regular-session triggers; do not send after-hours equity orders.**

## Position Instructions

### QQQ — HOLD — target allocation 36–42%
- Current ref: ~**$707.58**
- **SELL 1 share if QQQ breaks below 700.0 on a 5-minute close** — concentration control if broad tape weakens further.
- **Do not add this hour.** Already near 42.5% weight; 45% cap is close.

### GOOG — HOLD / ADD on strength — target allocation 10–13%
- Current ref: ~**$397.07**
- **BUY 1 share if GOOG dips to ~390 and holds with orderly tape** — high-conviction add on a controlled pullback.
- **BUY 1 share if GOOG breaks above 400.0 with volume confirmation** — momentum add on breakout.
- **CRITICAL CAP CHECK before executing:** Adding 1 share makes GOOG 4 shares × price / equity. If that exceeds **15.0% of equity**, the add is PROHIBITED unless another single-stock position is trimmed in the same cycle (e.g., SELL 1 NVDA or AVGO). Compute cap before placing any buy.
- **SELL 1 share if GOOG loses 389.0 on a 5-minute close** — preserve capital if cloud/AI follow-through fails.

### SOXX — HOLD / Reduce on weakness — target allocation 10–15%
- Current ref: ~**$504.70**
- **SELL 1 share if SOXX loses 500.0 on a 5-minute close** — semis are the most volatile sleeve and already underwater.
- **Do not add this hour.** Wait for stabilization above 510.

### NVDA — HOLD — target allocation 4–6%
- Current ref: ~**$224.92**
- **SELL 1 share if NVDA breaks below 220.0 on a 5-minute close**.
- Otherwise hold; **no same-day re-entry.**

### AVGO — HOLD / Tight stop — target allocation 3–5%
- Current ref: ~**$417.32**
- **SELL remaining 1 share if AVGO breaks below 415.0 on a 5-minute close** — weakest 1W/1M trend in the book; no tolerance for further deterioration.
- **Do not add this hour.** No fresh AVGO adds until relative strength improves vs NVDA/SOXX.

### QTUM — WATCH / Small starter — target allocation 0–3%
- Current ref: ~**$144.01**
- **BUY 1 share if QTUM dips to ~140 and holds** — thematic quantum/AI starter. A 1-share add is only ~1.4% of equity and does not stress any concentration cap.
- Only execute if no other orders were placed this cycle and cash remains above $1,500 after execution.

## Future Deployment Queue
*Only relevant after tactical conditions trigger and cap math is verified.*
1. **GOOG** (cap-dependent)
2. **QTUM** (unconstrained by single-stock cap)
3. **QQQ** (only if weight drops below 36%)

## Tactical Intent
- Hold core positions and let winners run (QQQ, GOOG).
- Protect against further weakness in AVGO (415 stop) and SOXX (500 stop).
- Deploy cash selectively into the highest-conviction setups (GOOG on dip/breakout, QTUM small starter) only after verifying concentration caps.
- Avoid all churn and same-day reversals.

## Explicit No-Trade Conditions This Hour
- **No AVGO buys** — laggard, on a short leash.
- **No META / HOOD / SHLD / ARKX / EIS / VOO / RKLB buys** — weak trends or too volatile.
- **No QQQ adds** — near 45% cap.
- **No same-day reversals** in any symbol.

## This Cycle — 2026-05-18 09:35Z (Hourly Run)
- **Orders placed by hourly strategist:**
  1. Cancelled stale XLK limit order (id 84226833-d580-4d0c-9575-bf861118ebbb).
  2. SELL XLK 8 shares at market — compliance cleanup, filled.
  3. SELL AVGO 1 share at market — trim laggard, filled.
- **Holdings after fills:** QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1.
- **Cash / equity / exposure:** $1,958.50 / $9,995.47 / 80.4%.
- **Daytrade count:** 3 (unchanged).
- **Plan:** HOLD core, monitor stops, consider GOOG/QTUM adds on confirmed setups only.
