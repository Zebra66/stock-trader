# Tactical Todo For Next Execution
*Updated 2026-05-18 10:22 ET. Market OPEN. Unauthorized XLK short discovered; blocked by PDT. Must close tomorrow.*

## Current State
- **Regime:** neutral / light offensive catch-up
- **Live book:** **QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1, XLK -1 (unauthorized short — close tomorrow)**
- **Account equity / cash / buying power:** **$10,029.60 / $2,134.24 / $11,813.23**
- **Gross exposure:** **82.2%** of equity (inside 75–85% band)
- **Daytrade count:** **3** (caution: prohibit same-day closing orders for any position opened today)
- **COMPLIANCE ISSUE:** Unauthorized XLK short -1 share. PDT protection blocked closing it today. Must close at market open tomorrow (2026-05-19).

## Ranked Execution Priority
0. **CLOSE XLK SHORT at market open tomorrow (2026-05-19).** Unauthorized -1 short position. Alpaca PDT protection (40310100) blocked buy-to-cover today because daytrade_count=3. Submit BUY 1 XLK at market open tomorrow before any other orders. This is a compliance emergency.
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

### XLK — CLOSE TOMORROW — unauthorized short
- **BUY 1 share at market open on 2026-05-19** to close the unauthorized -1 short position.
- Do NOT attempt to close today; Alpaca PDT protection (40310100) will reject it and daytrade_count=3.
- This is a compliance emergency and takes priority over all other orders at tomorrow's open.

### QQQ — HOLD — target allocation 36–42%
- Current ref: ~**$709.65**
- **SELL 1 share if QQQ breaks below 700.0 on a 5-minute close** — concentration control if broad tape weakens further.
- **Do not add this hour.** Already near 42.5% weight; 45% cap is close.

### GOOG — HOLD / ADD on strength — target allocation 10–13%
- Current ref: ~**$404.01** (broke above $400.0 with volume)
- **BUY 1 share if GOOG dips to ~390 and holds with orderly tape** — high-conviction add on a controlled pullback.
- **BUY 1 share if GOOG breaks above 400.0 with volume confirmation** — momentum add on breakout. **Currently triggered but BLOCKED by 15% single-stock cap.**
- **CRITICAL CAP CHECK before executing:** Adding 1 share makes GOOG 4 shares × price / equity. If that exceeds **15.0% of equity**, the add is PROHIBITED unless another single-stock position is trimmed in the same cycle (e.g., SELL 1 NVDA or AVGO). Compute cap before placing any buy.
- **SELL 1 share if GOOG loses 389.0 on a 5-minute close** — preserve capital if cloud/AI follow-through fails.

### SOXX — HOLD / Reduce on weakness — target allocation 10–15%
- Current ref: ~**$502.13** (latest bar $500.67 — approaching 500.0 stop)
- **SELL 1 share if SOXX loses 500.0 on a 5-minute close** — semis are the most volatile sleeve and already underwater.
- **Do not add this hour.** Wait for stabilization above 510.

### NVDA — HOLD — target allocation 4–6%
- Current ref: ~**$225.15**
- **SELL 1 share if NVDA breaks below 220.0 on a 5-minute close**.
- Otherwise hold; **no same-day re-entry.**

### AVGO — HOLD / Tight stop — target allocation 3–5%
- Current ref: ~**$418.89**
- **SELL remaining 1 share if AVGO breaks below 415.0 on a 5-minute close** — weakest 1W/1M trend in the book; no tolerance for further deterioration.
- **Do not add this hour.** No fresh AVGO adds until relative strength improves vs NVDA/SOXX.

### QTUM — WATCH / Small starter — target allocation 0–3%
- Current ref: ~**$142.78**
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

## This Cycle — 2026-05-18 10:22Z (Tactical Run)
- **Orders placed:** None.
- **Event detector:** NONE.
- **Holdings:** QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1, **XLK -1 (unauthorized short)**.
- **Cash / equity / exposure:** $2,134.24 / $10,029.60 / 82.2%.
- **Daytrade count:** 3.
- **GOOG alert:** Price broke above $400.0 ($403.40) with TradeCount=34, Volume=906 — breakout condition triggered. **BUT cap check blocked the add:** 4 shares × $403.40 = $1,613.60 / $10,029.60 = **16.1%** > 15% single-stock cap. One-order rule prevents a paired discretionary trim to make room. **Add ABORTED.**
- **SOXX alert:** Latest bar $500.67 (from $501.81), closing in on 500.0 stop — NOT triggered yet.
- **All stops:** QQQ 709.65 (>700), SOXX 500.67 (>500), NVDA 225.15 (>220), AVGO 418.89 (>415), GOOG 403.40 (>389) — none triggered.
- **QTUM:** $142.78, well above ~140 dip trigger — no action.
- **XLK COMPLIANCE CRITICAL:** Unauthorized -1 short position exists. BUY 1 XLK to close was **rejected by Alpaca PDT protection (40310100)** because daytrade_count=3. **Must close first thing tomorrow (2026-05-19) at market open.**
- **Plan:** Hold core. Monitor SOXX 500 level closely. Close XLK short tomorrow at open. Wait for GOOG cap-compliant add or QTUM ~140 dip.

## This Cycle — 2026-05-18 09:50Z (Tactical Run)
- **Orders placed:** None.
- **Event detector:** NONE.
- **Holdings:** QQQ 6, SOXX 3, GOOG 3, NVDA 3, AVGO 1.
- **Cash / equity / exposure:** $1,958.50 / $10,032.25 / 80.5%.
- **Daytrade count:** 3.
- **GOOG alert:** Price broke above $400.0 ($400.72) with TradeCount=60, Volume=3297 — breakout condition triggered. **BUT cap check blocked the add:** 4 shares × $400.72 = $1,602.88 / $10,032.25 = **15.97%** > 15% single-stock cap. One-order rule prevents a paired discretionary trim to make room. **Add ABORTED.**
- **All stops:** QQQ 709.37 (>700), SOXX 506.01 (>500), NVDA 225.39 (>220), AVGO 419.18 (>415), GOOG 400.72 (>389) — none triggered.
- **QTUM:** $143.18, well above ~140 dip trigger — no action.
- **Plan:** Hold core. Wait for next hourly update or a GOOG dip that keeps 4-share weight under 15%, or a protective stop to trigger to free up cap.
