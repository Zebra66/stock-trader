# Tactical Todo — Updated 2026-05-22 18:35Z (Friday 2:35 PM ET)
*HARD_LOCK LIFTED. Fresh Friday afternoon directives active. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1
- **Account equity / cash / buying power:** $10,050.52 / $2,461.23 / ~$12,511.75
- **Gross long exposure:** ~75.4% | **Net exposure:** ~75.4% | **Cash:** ~24.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Memorial Day:** Markets closed Monday May 26. Next open Tuesday 9:30 AM ET.

## Position Instructions — Valid for :40 and :50 Tactical Runs (2:40 PM, 2:50 PM ET)
- **HOLD SOXX 1 — DO NOT SELL.** Bought today at 9:47 AM ET at $533.95 (limit $534.00 filled). Weight ~5.4%, within 20% non-QQQ ETF cap. Breakout above $525 confirmed. Now at $539.22 (+2.70% intraday). Let momentum run. **Selling today = same-day round trip = VIOLATION.**
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.0%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.4%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.2%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.7%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.6%).
- **HOLD NVDA 1 — DO NOT SELL OR ADD.** Weight ~2.1%. Post-earnings drift persisting; now $215.63 (-1.71% intraday, worse than -1.03% at 1:35 PM). DO NOT ADD unless dip below $210 with hourly authorization. **DO NOT SELL today** — position is small (2.1%) and realizing the loss ahead of a 3-day weekend is not worth the friction/risk reduction.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 15:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals.** SOXX was bought today; DO NOT SELL SOXX today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends + bannedSymbols).
- **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA or SOXX** with market orders. SOXX requires limit orders if any add is ever authorized.
- **Do NOT place any orders after 15:55 ET** today — ensure all orders complete before close and avoid any settlement issues over the long weekend.
- **If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately.** Hold and wait for next hourly authorization (unless the event is an exchange halt or system outage, in which case hold). The exception: if a compliance breach is detected (unauthorized position), exit immediately.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Symbol Ban Guard (Code-Enforced — Defense in Depth)
- `memory/.trading_lock.json` contains `bannedSymbols: ["AVGO", "META"]`.
- BUY orders for banned symbols are REJECTED by both `alpaca_cli.ts` and `alpaca_client_factory.ts` unless explicitly allowed via the `allowed` field.
- Additionally, both tools parse `memory/todo.md` for lines containing "DO NOT BUY" or "DO NOT RE-BUY" and extract symbols, rejecting BUY orders for those symbols automatically.
- Hourly strategist controls both mechanisms; tactical agent cannot override them.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Thin but improved (10 trades, 356 vol last bar at 18:35Z). Limit orders only.
- **EIS:** Very low trade count / volume (2 trades, 200 vol last bar).
- **SHLD:** Very low trade count / volume (1 trade, 100 vol last bar).
- **QTUM:** Very low trade count / volume (5 trades, 206 vol last bar).
- **ARKX:** Low trade count / volume (3 trades, 1314 vol last bar — volume concentrated, low trade count).
- **GLD:** Very low trade count / volume (4 trades, 145 vol last bar).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-22 18:35Z (Friday 2:35 PM ET)
- **Market status:** OPEN until 16:00 ET. CLOSED Monday.
- **Live broker refresh:** Equity $10,050.52 | Cash $2,461.23 | Long $7,589.29 | Gross 75.4% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,317.48 @ 719.58), GOOG 3 ($1,142.82 @ 380.94), VOO 2 ($1,374.20 @ 687.10), NVDA 1 ($215.63 @ 215.63), SOXX 1 ($539.22 @ 539.22).
- **No open orders.**
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Market flat last hour. SOXX breakout holding ($539.22, +2.70% intraday). NVDA drifting lower ($215.63, -1.71% intraday). SPY near highs ($747.12, +0.73% today). News access blocked in workspace; no new headlines since 1:35 PM.
- **Goal check:** Portfolio +0.51% since inception vs SPY +4.05%. Trailing by ~3.54 pp. Goal 1 MET. Goal 2 off track.
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 75.4%).
- **Orders expected this cycle:** NONE.
- **Next expected action:** 15:35 PM ET hourly — final pre-close assessment, confirm no last-minute drift.

## Previous Cycle — 2026-05-22 17:35Z (Friday 1:35 PM ET)
- **HOLD_LOCK lifted.** No unauthorized trades.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No new orders.**
- **Next expected action:** 14:35 PM ET hourly — reassess late-day price action, monitor for sell-off into weekend.
