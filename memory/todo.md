# Tactical Todo — Updated 2026-05-22 20:09Z (Friday 4:09 PM ET — POST-CLOSE)
*HARD_LOCK LIFTED. Memorial Day weekend — market closed. No trading until Tuesday 9:30 AM ET.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1
- **Account equity / cash / buying power:** $10,032.48 / $2,461.23 / ~$12,493.71
- **Gross long exposure:** ~75.5% | **Net exposure:** ~75.5% | **Cash:** ~24.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Memorial Day:** Markets closed Monday May 26. Next open Tuesday 9:30 AM ET. Next hourly update Tuesday 9:35 AM ET.

## Position Instructions — MARKET CLOSED. Valid for Tuesday 9:35 AM ET hourly.
- **HOLD SOXX 1 — DO NOT SELL.** Bought Friday at 9:47 AM ET at $533.95 (limit $534.00 filled). Weight ~5.4%, within 20% non-QQQ ETF cap. Breakout above $525 confirmed. Now at $537.31 (+2.40% intraday). Let momentum run. **Do not sell SOXX on Tuesday unless hourly note explicitly authorizes.**
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.0%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.3%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.1%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.7%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.6%).
- **HOLD NVDA 1 — DO NOT SELL OR ADD.** Weight ~2.1%. Post-earnings drift persisting; now $215.63 (-1.77% intraday). DO NOT ADD unless dip below $210 with hourly authorization. **DO NOT SELL Tuesday** unless hourly note explicitly authorizes.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until Tuesday 9:35 AM ET hourly)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals.** SOXX was bought Friday; do not sell SOXX on Tuesday unless hourly note explicitly authorizes.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends + bannedSymbols).
- **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA or SOXX** with market orders. SOXX requires limit orders if any add is ever authorized.
- **Code fix committed:** `HARD_LOCK` regex now matches bullet-formatted lines in `todo.md` (e.g., `- **HARD_LOCK** — ...`). This closes the bypass that allowed the unauthorized SOXX buy at 9:47 AM ET Friday.
- **After market close today, NO ORDERS until next hourly update Tuesday 9:35 AM ET.** Tactical runs at 9:40 AM and 9:50 AM ET Tuesday must wait for fresh hourly directives before executing any orders.
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
- **SOXX:** Thin (8 trades, 217 vol last bar at 19:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (2 trades, 200 vol last bar at 14:49Z — STALE).
- **SHLD:** Very low trade count / volume (2 trades, 200 vol last bar at 19:34Z).
- **QTUM:** Very low trade count / volume (3 trades, 200 vol last bar at 19:33Z).
- **ARKX:** Low trade count / volume (3 trades, 123 vol last bar at 19:33Z).
- **GLD:** Very low trade count / volume (2 trades, 120 vol last bar at 19:34Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-22 20:09Z (Friday 4:09 PM ET — POST-CLOSE)
- **Market status:** CLOSED. Next session open Tuesday 9:30 AM ET.
- **Live broker refresh:** Equity $10,032.48 | Cash $2,461.23 | Long $7,571.25 | Gross 75.5% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No open orders.**
- **Event detector:** NONE.
- **Fresh intel:** Market closed. SOXX breakout holding ($537.31, +2.40% intraday). NVDA drifting lower ($215.63, -1.77% intraday). GOOG weak ($379.35, -1.07% intraday). SPY near highs ($745.93, +0.43% today). S&P 500 on track for 8th straight winning week. Chip stocks hitting fresh records but NVDA isn't the driver.
- **Goal check:** Portfolio +0.32% since inception vs SPY +3.89%. Trailing by ~3.56 pp. Goal 1 MET. Goal 2 off track.
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 75.5%).
- **Orders placed this cycle:** NONE.
- **Next expected action:** Tuesday 9:35 AM ET hourly — reassess post-weekend macro, NVDA support, SOXX breakout follow-through.

## Previous Cycle — 2026-05-22 19:37Z (Friday 3:37 PM ET)
- **HOLD_LOCK lifted.** No unauthorized trades.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No new orders.**
- **Next expected action:** Market close. Next hourly Tuesday 9:35 AM ET.
