# Tactical Todo — Updated 2026-07-07 16:35Z (Tuesday 12:35 PM ET)
*Updated by hourly strategist. Fresh directives for Tuesday Jul 7 regular session.*

## API Recovery — Positions Data Restored
- `get-positions` recovered at ~16:35Z and returns the true book: QQQ 6, VOO 2, AVGO 3, HOOD 5.
- `get-account` shows `equity: $9,607.16`, `long_market_value: $7,339.35`, `cash: $2,267.81` — all consistent.
- **HARD_LOCK LIFTED.** Normal trading resumes. No raw API bypasses.
- **Order history confirms zero filled orders today (Jul 7).**

## Current State (Live / Authoritative)
- **Regime:** neutral. Summer low-volume tape + chip downgrade risk + QQQ at 50D edge.
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 5. RKLB fully exited.
- **Account equity / cash:** $9,607.16 / $2,267.81
- **Gross long exposure:** 76.4% | **Net exposure:** 76.4% | **Cash:** 23.6%
- **Daytrade count:** 0/3 (clean slate)
- **Pattern day trader:** false
- **Open orders:** NONE.
- **Market:** OPEN. Event detector NONE at 16:35Z.
- **Daily trade budget:** 0/3 used today (Jul 7).
- **Event detector:** NONE at 16:35Z. Broad market OK. Semis OK. No sector rotation.

## HOLD Instructions — Active During Tuesday Jul 7 Regular Session

### QQQ — HOLD 6 shares
- **Entry:** Avg $716.47 (5 filled Jun 29 morning; 1 filled Jul 6 at $721.94)
- **Current (positions API):** $712.77 (–0.52% unrealized)
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless event detector flags CRITICAL/MAJOR on QQQ specifically AND hourly note explicitly authorizes the exit.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core growth. Barely above 50D ($711.72). 44.5% of equity, near 45% cap.
- **AUTHORIZE SAME-DAY SELL QQQ if price breaches $690.00 AND event detector is CRITICAL/MAJOR**

### VOO — HOLD 2 shares
- **Entry:** Avg $676.46 (filled Jun 29 morning)
- **Current (positions API):** $688.27 (+1.75% unrealized)
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless event detector flags CRITICAL/MAJOR on VOO specifically AND hourly note explicitly authorizes the exit.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Breakeven is $676.46. Selling at breakeven or small profit is PROHIBITED without hourly authorization.
- **Concentration:** 14.3% of equity. Under 20% cap.
- **AUTHORIZE SAME-DAY SELL VOO if price breaches $660.00 AND event detector is CRITICAL/MAJOR**

### AVGO — HOLD 3 shares
- **Entry:** Avg $371.95 (filled Jun 29 morning)
- **Current (positions API):** $370.88 (–0.29% unrealized)
- **Stop:** $365.00 (hard disaster stop). Price temporarily breached at ~$364.31 intraday but recovered to $370.88. Stop remains active.
- **Profit target:** $420.00. Do NOT trim or sell below $420 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Downgrade at 15:43Z despite 89% revenue growth outlook. Chip sector under pressure. Price recovered above 200D SMA (~$365.90). Hold with stop in place.
- **Concentration:** 11.6% of equity. Under 15% cap.
- **CRITICAL INSTRUCTION:** If price drops below $365.00 again, IMMEDIATELY submit limit SELL 3 AVGO at best bid or limit $364.75. Do NOT wait for next hourly. Stop breach must be honored per trading best practices (cut at -1R).
- **AUTHORIZE SAME-DAY SELL AVGO if price breaches $365.00 AND event detector is CRITICAL/MAJOR**

### HOOD — HOLD 5 shares (remaining after trim)
- **Entry:** Avg $101.50 (filled Jun 30 14:46Z)
- **Current (positions API):** $115.64 (+13.93% unrealized est., +2.8R)
- **Stop:** $95.00 (hard disaster stop). Do NOT sell below $95 unless event detector flags CRITICAL/MAJOR on HOOD specifically AND hourly note explicitly authorizes the exit.
- **Profit target:** $125.00. Do NOT trim or sell below $125 without fresh hourly authorization.
- **Rationale:** Momentum leader. Trim complete at +2R ($114.51). Remaining 5 shares are house money. Let winner run to $125 target.
- **Concentration:** 6.0% of equity. Under 15% cap.
- **AUTHORIZE SAME-DAY SELL HOOD if price breaches $95.00 AND event detector is CRITICAL/MAJOR**

### Total Portfolio Heat (Live)
- QQQ $158.82 + VOO $32.92 + AVGO $20.85 + HOOD $32.50 = $245.09 (2.55% of equity). Under 6% daily loss cap.

## BUY Triggers — Reactivated

### HOOD — BUY 5 shares if price drops below $105.00
- **Trigger:** Limit BUY 5 shares @ $105.00 (day order, regular session only).
- **Rationale:** Momentum leader with multiple positive catalysts. Pullback to $105 would be a –9.0% dip from current $115.64 and a test of prior resistance-turned-support. R/R = 2.0 ($20 gain to $125 target vs $10 risk to $95 stop). Concentration post-fill = ~11.5% of equity (under 15% cap).
- **Entry:** $105.00 | **Stop:** $95.00 | **Target:** $125.00 | **R-multiple:** 2.0R
- **Condition:** Only if event detector is NONE or MINOR at time of trigger. Do NOT buy if event detector is CRITICAL/MAJOR.
- **Rank:** Priority #1 for fresh capital deployment.
- **Note:** If HOOD trigger fills, gross exposure rises to ~81.8% (within 70–85% band). Cash remains ~$1,739. Acceptable.
- **Daily trade budget check:** 0/3 used today. If trigger fills, budget becomes 1/3.
- **STATUS: ACTIVE.** API recovered. Place limit order if trigger conditions met.

## DO NOT ADD — Existing Positions

### QQQ — DO NOT ADD
- **Reason:** At 44.5% of equity. Adding 1 share would push QQQ to ~52%, breaching 45% cap.
- **DO NOT BUY QQQ** without fresh hourly authorization.

### VOO — DO NOT ADD
- **Reason:** At 14.3% of equity. Adding 1 share would push VOO to ~21.7%, breaching the 20% non-QQQ ETF cap.
- **DO NOT BUY VOO** without fresh hourly authorization.

### AVGO — DO NOT ADD
- **Reason:** At 11.6% of equity. Downgrade today. Chip sector under pressure. Do NOT add to a falling knife.
- **DO NOT BUY AVGO** without fresh hourly authorization.

### RKLB — DO NOT RE-BUY
- **Reason:** Exited Jul 6 at $93.25. 24-hour cooldown expired at 17:43Z, but DO NOT RE-BUY regardless. Still crashing ($84.96, –26.1% 1M). No edge.
- **DO NOT RE-BUY RKLB** today or until fresh hourly note explicitly authorizes entry.

## DO NOT BUY — Symbols Blocked Tuesday Jul 7

### SOXX — DO NOT BUY
- **Reason:** Overlaps QQQ/AVGO chip exposure. Samsung earnings sparking broad chip sell-off. Sector under pressure.
- **DO NOT BUY SOXX** today.

### NVDA — DO NOT BUY
- **Reason:** Below 50-day MA. Underperforming in chip sell-off. No edge over AVGO. Falling knife risk.
- **DO NOT BUY NVDA** today.

### META — DO NOT BUY
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`. Code-level rejection if attempted.

### GLD — DO NOT BUY
- **Reason:** Below 50-day and 200-day. Not a defensive regime.
- **DO NOT BUY GLD** today.

### EIS / SHLD / QTUM / ARKX — DO NOT BUY
- **Reason:** Thin liquidity or no edge.
- **DO NOT BUY EIS`, **DO NOT BUY SHLD**, **DO NOT BUY QTUM**, **DO NOT BUY ARKX** today.

### GOOG — DO NOT BUY
- **Reason:** Showing relative strength (+0.62%) but still below 50D ($369.36). Volume very light (~7.7M vs 17M avg). Needs 50D reclaim on volume > 150% of average AND headline clarity for conviction. Not authorized today.
- **DO NOT BUY GOOG** today.

## Hard Rules / No-Trade Conditions
- **No after-hours / pre-market orders.** All triggers for regular session only.
- **No same-day round trips.** Positions bought today may NOT be sold today unless `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears below.
- **No new short sales** under any circumstances.
- **Todo.md parser guard:** `DO NOT BUY`, `DO NOT RE-BUY`, `DO NOT ADD` are code-enforced. Use these exact phrases.
- **Never average down.**
- **Tactical agent must NOT sell positions unless the exact phrase `AUTHORIZE SAME-DAY SELL <SYMBOL>` appears in this file.**
- **Tactical agent must NOT sell a winning position at breakeven or small profit without fresh hourly authorization.** The profit target defines when winners may be trimmed.
- **If event detector flags CRITICAL event, evaluate protective sells on held positions using authorized stop levels.**
- **Tactical agent must NOT buy any symbol not explicitly authorized in this file or memory/MEMORY.md.**
- **If HOOD buy trigger fills, do NOT place any additional buy orders that day without fresh hourly authorization.** Daily trade budget would be 1/3 used.
- **Do NOT chase breakouts during elevated volatility or thin volume.**
- **CRITICAL — Ledger CLI price formatting:** When writing `--detail` arguments to `ledger_cli.ts`, use SINGLE QUOTES for any string containing a dollar amount. Bash expands `$105`, `$116`, `$690`, etc. inside double quotes as positional parameters, stripping the leading digit. Example: `--detail 'HOOD $117.20 above $95.00 stop'`. Failure to use single quotes causes price hallucinations and ledger entry rejection.
- **CRITICAL — API corruption protocol:** If `get-positions` returns empty but `get-orders --status closed` shows no sells today, do NOT attempt raw REST API bypass trades. The Alpaca backend may accept sells as `sell_to_open` (short positions). Wait for `get-positions` to recover before executing any sells.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity

## Symbol Ban Guard (Code-Enforced)
- `memory/.trading_lock.json` contains `bannedSymbols: ["META"]}`.
- BUY orders for banned symbols are REJECTED regardless of lock active state.

## Illiquidity Warnings (Universe Watchlist)
- **HOOD:** Acceptable but limit orders preferred.
- **EIS / ARKX / GLD / QTUM:** Very low trade count / volume. Limit orders only.
- **SHLD:** Limit orders preferred.
- **VOO:** Thin bar (TradeCount 5) but liquid underlying. Limit orders preferred.
- **AVGO:** Acceptable but limit orders preferred.
- **QQQ:** Acceptable but limit orders preferred.

## Current Book (Live)
- **Open orders (pending fill):** NONE.
- **Filled positions today (Jul 7):** NONE.
- Cash: $2,267.81 (23.6%)
- Gross exposure: 76.4%

## Next Hourly — Tuesday Jul 7 17:35Z (1:35 PM ET)
- HOLD QQQ, VOO, AVGO, HOOD.
- **If AVGO drops below $365.00:** SELL 3 AVGO immediately via limit order. Do NOT wait for next hourly.
- **HOOD buy trigger at $105.00 remains ACTIVE.**
- **RKLB buy trigger remains DEACTIVATED.** DO NOT RE-BUY.
- No other buy orders authorized without fresh hourly note.
- Event detector expected at next tactical windows. If CRITICAL/MAJOR downward, evaluate protective sells at hard stops.
- **Watch AVGO $365.** Stop active. Downgrade + Samsung miss = elevated risk of another breach.
- **Watch HOOD $125.** Let remaining winner run to profit target.
- **Watch QQQ $710–$712.** 50D support zone. If it breaks decisively below $710 on volume, reassess core allocation.
- **Deploy cash selectively.** No forced deployment. Wait for volume-confirmed setups.
