# Tactical Todo — Updated 2026-07-07 15:35Z (Tuesday 11:35 AM ET)
*Updated by hourly strategist. Fresh directives for Tuesday Jul 7 regular session.*

## CRITICAL — Alpaca API Data Corruption (Hour 3)
- `get-positions` returns `[]` continuously since ~10:21 AM ET.
- `get-account` shows `equity: $2,267.81`, `long_market_value: 0` — this is CORRUPTED.
- **Order history confirms zero filled orders today (Jul 7).**
- **last_equity $9,603.48 confirms true holdings intact.**
- **Raw REST API bypass is PROHIBITED.** A test sell for AVGO was accepted as `sell_to_open` (short) at 14:38Z. It was canceled immediately. Do NOT attempt raw API bypasses.
- **True reconstructed book:** QQQ 6, VOO 2, AVGO 3, HOOD 5. Cash ~$2,268. True equity ~$9,545.

## HARD_LOCK
- **HARD_LOCK active.** No buy orders permitted until `get-positions` recovers and shows the true holdings.
- **Reason:** Alpaca positions API corruption. Buying while true exposure is hidden risks double exposure when API reconciles.
- **Do NOT place any BUY orders via CLI, SDK, or raw API until `get-positions` returns non-empty array matching the reconstructed book.**

## Current State (Reconstructed)
- **Regime:** defensive due to API corruption + AVGO stop breach + chip sell-off
- **Live book (reconstructed):** QQQ 6, VOO 2, AVGO 3, HOOD 5. RKLB fully exited.
- **True account equity / cash:** ~$9,545 / ~$2,268
- **True gross long exposure:** ~76.2% | **Net exposure:** ~76.2% | **Cash:** ~23.8%
- **Daytrade count:** 0/3 (clean slate)
- **Pattern day trader:** false
- **Open orders:** NONE.
- **Market:** OPEN. Event detector NONE at 15:35Z.
- **Daily trade budget:** 0/3 used today (Jul 7).
- **Event detector:** NONE at 15:35Z. Broad market OK. Semis OK. No sector rotation.

## HOLD Instructions — Active During Tuesday Jul 7 Regular Session

### QQQ — HOLD 6 shares
- **Entry:** Avg $716.47 (5 filled Jun 29 morning; 1 filled Jul 6 at $721.94)
- **Current (live bar):** $706.95 (–1.33% unrealized est.)
- **Stop:** $690.00 (hard disaster stop). Do NOT sell below $690 unless event detector flags CRITICAL/MAJOR on QQQ specifically AND hourly note explicitly authorizes the exit.
- **Profit target:** $750.00. Do NOT trim or sell below $750 without fresh hourly authorization.
- **Rationale:** Core growth. Above 50D/200D. 44.4% of reconstructed equity, near 45% cap.
- **AUTHORIZE SAME-DAY SELL QQQ if price breaches $690.00 AND event detector is CRITICAL/MAJOR**

### VOO — HOLD 2 shares
- **Entry:** Avg $676.46 (filled Jun 29 morning)
- **Current (live bar):** $685.67 (+1.36% unrealized est.)
- **Stop:** $660.00 (hard disaster stop). Do NOT sell below $660 unless event detector flags CRITICAL/MAJOR on VOO specifically AND hourly note explicitly authorizes the exit.
- **Profit target:** $700.00. Do NOT trim or sell below $700 without fresh hourly authorization.
- **Rationale:** S&P anchor. Breakeven is $676.46. Selling at breakeven or small profit is PROHIBITED without hourly authorization.
- **Concentration:** 14.4% of reconstructed equity. Under 20% cap.
- **AUTHORIZE SAME-DAY SELL VOO if price breaches $660.00 AND event detector is CRITICAL/MAJOR**

### AVGO — SELL IF API RECOVERS; HOLD IF API STAYS GLITCHED
- **Entry:** Avg $371.95 (filled Jun 29 morning)
- **Current (live bar):** $364.31 (–2.05% unrealized est.)
- **Stop:** $365.00 (hard disaster stop) — **BREACHED at -1.1R.**
- **Profit target:** $420.00. Do NOT trim or sell below $420 without fresh hourly authorization.
- **Rationale:** AI chip alpha. Hard stop breached at $364.31. Chip sector under pressure from Samsung earnings sell-off. The only reason we still hold is API corruption blocking sells.
- **Concentration:** 11.5% of reconstructed equity. Under 15% cap.
- **CRITICAL INSTRUCTION:** If `get-positions` recovers and shows AVGO 3 shares BEFORE the next hourly run, IMMEDIATELY submit limit SELL 3 AVGO at best bid or limit $364.25. Do NOT wait for next hourly. Stop breach at -1.1R must be honored per trading best practices (cut at -1R). SDK short-sale guard should permit this once positions API recovers.
- **If API does not recover:** Hold and do NOT attempt raw API bypass.

### HOOD — HOLD 5 shares (remaining after trim)
- **Entry:** Avg $101.50 (filled Jun 30 14:46Z)
- **Current (live bar):** $114.475 (+12.77% unrealized est., +2.6R)
- **Stop:** $95.00 (hard disaster stop). Do NOT sell below $95 unless event detector flags CRITICAL/MAJOR on HOOD specifically AND hourly note explicitly authorizes the exit.
- **Profit target:** $125.00. Do NOT trim or sell below $125 without fresh hourly authorization.
- **Rationale:** Momentum leader. Trim complete at +2R ($114.51). Remaining 5 shares are house money. Let winner run to $125 target.
- **Concentration:** 6.0% of reconstructed equity. Under 15% cap.
- **AUTHORIZE SAME-DAY SELL HOOD if price breaches $95.00 AND event detector is CRITICAL/MAJOR**

### Total Portfolio Heat (Reconstructed)
- QQQ $158.82 + VOO $32.92 + AVGO $22.92 + HOOD $32.50 = $247.16 (2.59% of reconstructed equity). Under 6% daily loss cap.

## BUY Triggers — SUSPENDED Due to HARD_LOCK

### HOOD — BUY 5 shares if price drops below $105.00
- **Trigger:** Limit BUY 5 shares @ $105.00 (day order, regular session only).
- **Rationale:** Momentum leader with multiple positive catalysts. Pullback to $105 would be a –8.3% dip from current $114.475 and a test of prior resistance-turned-support. R/R = 2.0 ($20 gain to $125 target vs $10 risk to $95 stop). Concentration post-fill = ~11.6% of reconstructed equity (under 15% cap).
- **Entry:** $105.00 | **Stop:** $95.00 | **Target:** $125.00 | **R-multiple:** 2.0R
- **Condition:** Only if event detector is NONE or MINOR at time of trigger AND `get-positions` has recovered showing true holdings. Do NOT buy if event detector is CRITICAL/MAJOR.
- **Rank:** Priority #1 for fresh capital deployment when HARD_LOCK lifted.
- **Note:** If HOOD trigger fills, true gross exposure rises to ~81.9% (within 60–90% band). Cash remains ~$1,742. Acceptable.
- **Daily trade budget check:** 0/3 used today. If trigger fills, budget becomes 1/3.
- **STATUS: SUSPENDED due to HARD_LOCK. Will reactivate when API recovers.**

## DO NOT ADD — Existing Positions

### QQQ — DO NOT ADD
- **Reason:** At 44.4% of reconstructed equity. Adding 1 share would push QQQ to ~52%, breaching 45% cap.
- **DO NOT BUY QQQ** without fresh hourly authorization.

### VOO — DO NOT ADD
- **Reason:** At 14.4% of reconstructed equity. Adding 1 share would push VOO to ~21.6%, breaching the 20% non-QQQ ETF cap.
- **DO NOT BUY VOO** without fresh hourly authorization.

### AVGO — DO NOT ADD
- **Reason:** At 11.5% of reconstructed equity. Hard stop breached. Chip sector under pressure. Do NOT add to a falling knife.
- **DO NOT BUY AVGO** without fresh hourly authorization.

### RKLB — DO NOT RE-BUY
- **Reason:** Exited Jul 6 at $93.25. 24-hour cooldown expires at 17:43Z today, but DO NOT RE-BUY regardless. Still crashing ($83.645, –26.1% 1M). No edge.
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
- **Reason:** Showing relative strength (+0.62%) but yesterday's AI-exit headlines still unresolved. Needs 50D reclaim and headline clarity for conviction. Not authorized until fresh hourly note AND API recovers.
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
- **Do NOT chase breakouts during elevated volatility.**
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

## Current Book (Reconstructed)
- **Open orders (pending fill):** NONE.
- **Filled positions today (Jul 7):** NONE.
- Cash: ~$2,268 (23.8%)
- Gross exposure: ~76.2%

## Next Hourly — Tuesday Jul 7 16:35Z (12:35 PM ET)
- HOLD QQQ, VOO, HOOD.
- **If API recovers:** SELL AVGO immediately if price < $365. Otherwise hold AVGO until next hourly evaluation.
- **HOOD buy trigger remains SUSPENDED** until HARD_LOCK lifted (i.e., `get-positions` recovers).
- **RKLB buy trigger remains DEACTIVATED** even after 17:43Z cooldown. DO NOT RE-BUY.
- No other buy orders authorized without fresh hourly note.
- Event detector expected at next tactical windows. If CRITICAL/MAJOR downward, evaluate protective sells at hard stops ONLY IF positions API has recovered.
- **Watch AVGO $365.** Stop level breached at -1.1R. Priority is API recovery so we can execute the stop.
- **Watch HOOD $125.** Let remaining winner run to profit target.
- **Deploy cash selectively ONLY AFTER API RECOVERY.**
