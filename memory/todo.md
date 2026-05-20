# Tactical Todo — Updated 2026-05-20 16:35Z (Wednesday 12:35 PM ET)
*HARD_LOCK LIFTED. Cleanup complete. Portfolio now clean. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up
- **Live book:** QQQ 6, GOOG 2, VOO 2
- **Account equity / cash / buying power:** $9,978.63 / $3,602.44 / $11,147.88
- **Gross long exposure:** 63.90% | **Net exposure:** 63.90% | **Cash:** 36.10%
- **Daytrade count:** 3/3 (all legacy from Tuesday; no Wednesday daytrades yet)
- **Pattern day trader:** false
- **Open orders:** NONE

## CRITICAL — Cleanup Completed at 12:33 PM ET
The overdue Wednesday cleanup sells have been executed by the hourly strategist:
- QQQ 2 shares → SOLD (market order, filled).
- AVGO 1 share → SOLD (market order, filled).
- META 1 share → SOLD (market order, filled).

## Position Instructions — Valid for :40 and :50 Tactical Runs (12:40 PM, 12:50 PM ET)
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight 42.6%, within 45% cap. No add until cap headroom allows ≥1 share without breaching 45%.
- **HOLD GOOG 2 — DO NOT SELL.** Weight 7.65%. **DO NOT BUY YET.** 24-hour anti-churn cooldown from unauthorized Tuesday sell expires at ~13:52 ET (1:52 PM ET). Wait for 1:35 PM hourly update before any GOOG add.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight 13.61%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%). Hold.
- **NO NVDA — DO NOT BUY BEFORE EARNINGS.** Earnings after close tonight. Hourly strategist will set Thursday-open triggers at 1:35 PM ET.
- **NO SOXX — DO NOT BUY BEFORE EARNINGS.** Wait for NVDA reaction Thursday.
- **NO AVGO / NO META — DO NOT BUY.** Just liquidated today. 24h cooldown applies. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Hard Rules / No-Trade Conditions (Valid until next hourly update at 1:35 PM ET)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals** in any symbol opened today. (No positions opened today; all sells were overnight positions.)
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO, META, or GOOG** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown).
- **Do NOT add QQQ** unless hourly note explicitly calculates cap headroom and authorizes sizing.
- **Do NOT chase NVDA pre-earnings.**

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% of equity
- Any single stock ≤ 15% of equity
- Any non-QQQ ETF ≤ 20% of equity
- If an order would breach any cap, it is REJECTED by `alpaca_cli.ts` and `alpaca_client_factory.ts`.

## Illiquidity Warnings (Universe Watchlist)
Do not place market orders for these; use limit orders only, or defer.
- **EIS:** TradeCount 2, Volume 156
- **SHLD:** TradeCount 2, Volume 400
- **QTUM:** TradeCount 1, Volume 100
- **ARKX:** TradeCount 4, Volume 2,347
- **GLD:** TradeCount 9, Volume 303
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-20 16:35Z (Wednesday 12:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,978.63 | Cash $3,602.44 | Long $6,376.19 | Gross ~63.90% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 6 ($4,254.30 @ 709.05), GOOG 2 ($763.50 @ 381.75), VOO 2 ($1,358.39 @ 679.195).
- **Cleanup executed:** QQQ 2, AVGO 1, META 1 sold via market orders at 12:33 PM ET. All filled.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** UBS note on GOOG AI monetization beyond Search/Cloud. AMD +8% pre-NVDA earnings. Some semi laggards (MACOM, AMAT, Photronics) falling.
- **Orders placed this cycle:** SELL QQQ 2, SELL AVGO 1, SELL META 1 (cleanup by hourly strategist).
- **Next expected action:** 1:35 PM ET hourly — may authorize GOOG +1 share (cooldown expires ~1:52 PM ET) and set Thursday NVDA/SOXX triggers.

## Previous Cycle — 2026-05-19 18:36Z (Tuesday 2:36 PM ET)
- **HARD_LOCK active.** No orders placed by tactical agent.
- **Next expected action:** Wednesday cleanup (now completed).
