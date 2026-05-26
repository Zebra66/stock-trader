# Tactical Todo — Updated 2026-05-26 13:37Z (Tuesday 9:37 AM ET)
*HARD_LOCK LIFTED. Market OPEN. Execute authorized orders only. No chasing gap-ups.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1
- **Account equity / cash / buying power:** $10,097.52 / $2,461.23 / ~$12,558.75
- **Gross long exposure:** 75.63% | **Net exposure:** 75.63% | **Cash:** 24.37%
- **Daytrade count:** 1/3 (META round-trip from Thursday)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Valid for :40 and :50 Tactical Runs (9:40 AM, 9:50 AM ET)
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~43.05%, near 45% cap. Adding 1 share would breach cap (~50.2%).
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.28%, within 15% cap. **DO NOT BUY at market.** If GOOG pulls back to ≤$375, BUY 1 share limit $375. Rebuild to 4 shares (~14.8% weight, under 15% cap). If GOOG stays above $375, hold.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.66%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.5%).
- **HOLD NVDA 1 — DO NOT SELL.** Weight ~2.14%. Post-earnings drift stabilizing. **DO NOT BUY above $220.** If NVDA drops to ≤$212, BUY 1 share limit $212 (2 shares total, ~4.2% weight). If NVDA stays above $212, hold.
- **HOLD SOXX 1 — DO NOT SELL.** Weight ~5.51%. Breakout running hard (+3.60% intraday). **Do not sell today.** **DO NOT BUY at market.** If SOXX pulls back to ≤$545, BUY 1 share limit $545 (2 shares total, ~10.7% weight, under 20% ETF cap). If SOXX stays above $545, hold.
- **NO AVGO / NO META — DO NOT BUY.** bannedSymbols active in `.trading_lock.json`. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 10:35 AM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **NO market orders for new positions today.** Only limit orders at the specified pullback levels.
- **No same-day reversals.** All current positions were opened prior to today (SOXX Friday, others earlier). Selling any position today and re-buying it today is prohibited.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (bannedSymbols + weak trends).
- **Do NOT add QQQ / GOOG at market / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA, SOXX, or GOOG** with market orders after gap-up.

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
- **SOXX:** Thin (21 trades, 721 vol last bar at 13:34Z). Limit orders only.
- **EIS:** Very low trade count / volume (2 trades, 200 vol last bar at 14:49Z May 22 — STALE).
- **SHLD:** Very low trade count / volume (1 trade, 100 vol last bar at 13:34Z).
- **QTUM:** Low trade count / volume (45 trades, 1,285 vol last bar at 13:30Z).
- **ARKX:** Low trade count / volume (6 trades, 600 vol last bar at 13:32Z).
- **GLD:** Very low trade count / volume (4 trades, 220 vol last bar at 13:34Z).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-26 13:37Z (Tuesday 9:37 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,097.52 | Cash $2,461.23 | Long $7,636.29 | Gross 75.63% | Daytrade 1/3.
- **Holdings confirmed:** QQQ 6 ($4,346.70 @ 724.45), GOOG 3 ($1,139.16 @ 379.72), VOO 2 ($1,377.66 @ 688.83), NVDA 1 ($216.11 @ 216.11), SOXX 1 ($556.66 @ 556.66).
- **No open orders.**
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** Iran peace prospects driving market gap-up. Dow +250, oil tumbling. SOXX +3.60% intraday. Jensen Huang bullish NVDA headline.
- **Goal check:** Portfolio +0.98% since inception vs SPY +4.36%. Trailing by ~3.38 pp.
- **Regime:** Offensive catch-up. Target gross exposure 60–80%.
- **Orders placed this cycle:** NONE.
- **Next expected action:** 10:35 AM ET hourly — reassess if gap-up holds or market sells off.

## Previous Cycle — 2026-05-22 20:09Z (Friday 4:09 PM ET — POST-CLOSE)
- **HOLD_LOCK lifted.** No unauthorized trades.
- **Holdings:** QQQ 6, GOOG 3, VOO 2, NVDA 1, SOXX 1.
- **No new orders.**
- **Next expected action:** Tuesday 9:35 AM ET hourly (now completed).
