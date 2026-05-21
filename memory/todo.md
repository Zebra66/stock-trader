# Tactical Todo — Updated 2026-05-21 18:35Z (Thursday 2:35 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1
- **Account equity / cash / buying power:** $10,029.65 / $2,995.15 / ~$13,025
- **Gross long exposure:** ~70.1% | **Net exposure:** ~70.1% | **Cash:** ~29.9%
- **Daytrade count:** 0/3 (fresh slate)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market closes in:** ~1 hour 25 minutes (4:00 PM ET)

## Position Instructions — Valid for :40 and :50 Tactical Runs (2:40 PM, 2:50 PM ET) and until 3:35 PM ET hourly
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~42.7%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.6%, within 15% cap. Adding 1 share would breach 15% cap (~15.4%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%).
- **HOLD NVDA 1 — DO NOT SELL.** Weight ~2.2%. Bought today at 9:40 AM ET. Selling today = daytrade.
- **NO NVDA ADD — DO NOT BUY NVDA.** Wait for hourly update before any additional NVDA order. Current price $219.84. Support not yet formed; trigger is below $212.
- **NO SOXX YET — DO NOT BUY SOXX at this tactical run unless both conditions below are met.**
  - **SOXX add condition (ONLY if ALL true):**
    1. Alpaca `get-latest-price` for SOXX shows `ClosePrice` ≥ $525.00.
    2. The same bar shows `TradeCount` ≥ 15 AND `Volume` ≥ 500.
    3. If conditions 1+2 are met, place a LIMIT order to BUY 1 share of SOXX with `limit-price` no higher than $525.50 and `time_in_force` = `day`.
    4. If the order does not fill by 3:30 PM ET, cancel it.
  - **Rationale:** SOXX is at $523.31 now. Breakout above $525 requires confirmation because Alpaca liquidity is thin (19 trades, 641 vol last bar). A limit order prevents chasing a low-volume wick.
- **NO AVGO / NO META — DO NOT BUY.** Liquidated Wed. 24h cooldown expired. Weak near-term trends; no fresh hourly authorization for re-entry.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 3:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals.** NVDA was bought today at 9:40 AM ET — DO NOT SELL NVDA today.
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends).
- **Do NOT add QQQ / GOOG / VOO** — concentration caps would be breached.
- **Do NOT chase NVDA or SOXX** with market orders. Both require limit orders or hourly authorization.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **SOXX:** Low trade count / volume on Alpaca (19 trades, 641 vol last bar). Limit orders only.
- **EIS:** Very low trade count / volume (1 trade, 100 vol last bar).
- **SHLD:** Very low trade count / volume (2 trades, 200 vol last bar).
- **QTUM:** Very low trade count / volume (3 trades, 127 vol last bar).
- **ARKX:** Low trade count / volume (15 trades, 7500 vol last bar — volume OK but trade count low).
- **GLD:** Very low trade count / volume (4 trades, 80 vol last bar).
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-21 18:35Z (Thursday 2:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,029.65 | Cash $2,995.15 | Long $7,034.50 | Gross ~70.1% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,288.32 @ 714.72), GOOG 3 ($1,159.53 @ 386.51), VOO 2 ($1,366.73 @ 683.365), NVDA 1 ($219.92 @ 219.919).
- **No trades executed this cycle.**
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** SOXX at $523.31, still below $525 breakout. NVDA drifted to $219.84 (-1.62% today). RKLB crashed -6.55% on $3B distribution agreement. META up +0.49% despite layoff news. SPY +0.27%, QQQ +0.21%. Fed inflation forecast at 19-year high; tape resilient.
- **Next expected action:** 3:35 PM ET hourly — reassess SOXX breakout status and NVDA support. Potential SOXX add if breakout confirms with acceptable liquidity and sustained follow-through.

## Previous Cycle — 2026-05-21 17:35Z (Thursday 1:35 PM ET)
- **No trades executed.**
- **Hold QQQ 6, GOOG 3, VOO 2, NVDA 1.**
- **Preliminary triggers set** for NVDA and SOXX based on post-earnings reaction.
