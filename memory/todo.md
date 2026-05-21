# Tactical Todo — Updated 2026-05-21 17:35Z (Thursday 1:35 PM ET)
*HARD_LOCK LIFTED. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up (60–80% band)
- **Live book:** QQQ 6, GOOG 3, VOO 2, NVDA 1
- **Account equity / cash / buying power:** $10,026.66 / $2,995.15 / ~$13,022
- **Gross long exposure:** ~70.1% | **Net exposure:** ~70.1% | **Cash:** ~29.9%
- **Daytrade count:** 0/3 (fresh slate)
- **Pattern day trader:** false
- **Open orders:** NONE
- **Market closes in:** ~2 hours 25 minutes (4:00 PM ET)

## Position Instructions — Valid for :40 and :50 Tactical Runs (1:40 PM, 1:50 PM ET)
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~42.7%, within 45% cap. Adding 1 share would breach 45% cap.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.6%, within 15% cap. Adding 1 share would breach 15% cap (~15.4%).
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%).
- **HOLD NVDA 1 — DO NOT SELL.** Weight ~2.2%. Bought today at 9:40 AM ET. Selling today = daytrade.
- **NO NVDA ADD — DO NOT BUY NVDA.** Wait for hourly update before any additional NVDA order. Post-earnings drift; support not yet formed.
- **NO SOXX YET — DO NOT BUY SOXX at this tactical run.** Wait for hourly authorization. SOXX is close to $525 breakout but Alpaca volume is extremely thin (4 trades, 212 vol last bar). Hourly will reassess at 2:35 PM ET.
- **NO AVGO / NO META — DO NOT BUY.** Liquidated Wed. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 2:35 PM ET)
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
- **SOXX:** Very low trade count / volume on Alpaca (4 trades, 212 vol last bar)
- **EIS:** Very low trade count / volume
- **SHLD:** Very low trade count / volume
- **QTUM:** Very low trade count / volume
- **ARKX:** Low trade count / volume
- **GLD:** Low trade count / volume
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-21 17:35Z (Thursday 1:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $10,026.66 | Cash $2,995.15 | Long $7,031.51 | Gross ~70.1% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6 ($4,285.74 @ 714.29), GOOG 3 ($1,159.41 @ 386.47), VOO 2 ($1,364.88 @ 682.44), NVDA 1 ($221.49 @ 221.49).
- **No trades executed this cycle.**
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** SOXX approaching $525 breakout (+0.81% today, +54% 63d). NVDA drifting -0.78% today. GOOG +0.43% today. SPY +0.18%, QQQ +0.22%. Macro headwinds present but tape resilient.
- **Next expected action:** 2:35 PM ET hourly — reassess SOXX breakout status and NVDA support. Potential SOXX add if breakout confirms with acceptable liquidity.

## Previous Cycle — 2026-05-21 16:35Z (Thursday 12:35 PM ET)
- **No trades executed.**
- **Hold QQQ 6, GOOG 3, VOO 2, NVDA 1.**
- **Preliminary triggers set** for NVDA and SOXX based on post-earnings reaction.
