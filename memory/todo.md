# Tactical Todo — Updated 2026-05-22 17:35Z (Friday 1:35 PM ET)
*HARD_LOCK LIFTED. Fresh Friday afternoon directives active. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1
- **Account equity / cash / buying power:** $10,066.75 / $2,461.23 / ~$12,527.98
- **Gross long exposure:** ~75.5% | **Net exposure:** ~75.5% | **Cash:** ~24.5%
- **Daytrade count:** 1/3 (META round-trip cleanup from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Memorial Day:** Markets closed Monday May 26. Next open Tuesday 9:30 AM ET.

## Position Instructions — Valid for :40 and :50 Tactical Runs (1:40 PM, 1:50 PM ET)
- **HOLD SOXX 1 — DO NOT SELL.** Bought today at 9:47 AM ET at $533.95 (limit $534.00 filled). Weight ~5.4%, within 20% non-QQQ ETF cap. Breakout above $525 confirmed. Now at $540.48 (+3.00% intraday). Let momentum run. **Selling today = same-day round trip = VIOLATION.**
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.0%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL OR ADD.** Weight ~11.4%, within 15% cap. DO NOT ADD — adding 1 share would breach 15% cap (~15.2%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.7%, within 20% non-QQQ ETF cap. DO NOT ADD — adding 1 share would breach 20% cap (~20.6%).
- **HOLD NVDA 1 — DO NOT SELL OR ADD.** Weight ~2.2%. Post-earnings drift persisting but stabilizing off session lows ($217.25 vs low ~$216). DO NOT ADD unless dip below $210 with hourly authorization. **DO NOT SELL today** — position is small (2.2%) and consuming daytrade #2 is not worth the friction.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 14:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals.** SOXX was bought today; DO NOT SELL SOXX today. NVDA was bought Thursday; selling today would consume a daytrade — avoid.
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
- **SOXX:** Thin but improved (10 trades, 232 vol last bar). Limit orders only.
- **EIS:** Very low trade count / volume (2 trades, 200 vol last bar).
- **SHLD:** Very low trade count / volume (1 trade, 100 vol last bar).
- **QTUM:** Very low trade count / volume (3 trades, 105 vol last bar).
- **ARKX:** Low trade count / volume (1 trade, 100 vol last bar).
- **GLD:** Very low trade count / volume (3 trades, 45 vol last bar).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-22 17:35Z (Friday 1:35 PM ET)
- **Market status:** OPEN until 16:00 ET. CLOSED Monday.
- **Live broker refresh:** Equity $10,066.75 | Cash $2,461.23 | Long $7,605.52 | Gross 75.5% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,326.12 @ 721.02), GOOG 3 ($1,146.03 @ 382.01), VOO 2 ($1,375.64 @ 687.82), NVDA 1 ($217.25 @ 217.25), SOXX 1 ($540.48 @ 540.48).
- **No open orders.**
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** SOXX breakout accelerating ($540.48, +3.00% intraday). NVDA stabilizing off lows ($217.25, -1.03% intraday). SPY at record highs ($747.90). IBD: "Dow Charges Higher As Warsh Era Begins At The Fed." Reuters: oil rising on Iran doubt. Memorial Day weekend ahead.
- **Goal check:** Portfolio +0.67% since inception vs SPY +4.16%. Trailing by ~3.49 pp. Goal 1 MET. Goal 2 off track.
- **Regime:** Offensive catch-up. Target gross exposure 60–80% (currently 75.5%).
- **Orders expected this cycle:** NONE.
- **Next expected action:** 14:35 PM ET hourly — reassess late-day price action, monitor for sell-off into weekend.

## Previous Cycle — 2026-05-22 16:35Z (Friday 12:35 PM ET)
- **HOLD_LOCK lifted.** No unauthorized trades.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No new orders.**
- **Next expected action:** 13:35 PM ET hourly — review SOXX momentum, reassess NVDA/GOOG, monitor macro headlines ahead of weekend.
