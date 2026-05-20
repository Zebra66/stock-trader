# Tactical Todo — Updated 2026-05-20 17:06Z (Wednesday 1:06 PM ET)
*Tactical execution restored. Fixed bug in `src/agent.ts` where `.includes('HARD_LOCK')` matched "HARD_LOCK LIFTED" and incorrectly skipped all tactical runs. Execute authorized orders only.*

## Current State
- **Regime:** offensive catch-up
- **Live book:** QQQ 6, GOOG 2, VOO 2
- **Account equity / cash / buying power:** $9,985.84 / $3,602.44 / ~$13,588
- **Gross long exposure:** ~63.91% | **Net exposure:** ~63.91% | **Cash:** ~36.09%
- **Daytrade count:** 3/3 (all legacy from Tuesday; no Wednesday daytrades yet)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Valid until next hourly update at 1:35 PM ET
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~42.6%, within 45% cap. No add until cap headroom allows ≥1 share without breaching 45%.
- **HOLD GOOG 2 — DO NOT SELL. DO NOT BUY YET.** Weight ~7.65%. 24-hour anti-churn cooldown from unauthorized Tuesday sell expires at ~13:52 ET (1:52 PM ET). Wait for 1:35 PM hourly update before any GOOG add.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%). Hold.
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
- **EIS:** Very low trade count / volume
- **SHLD:** Very low trade count / volume
- **QTUM:** Very low trade count / volume
- **ARKX:** Low trade count / volume
- **GLD:** Low trade count / volume
- **VOO:** Broad ETF, acceptable for limit orders at known prices.

## This Cycle — 2026-05-20 17:06Z (Wednesday 1:06 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Holdings confirmed:** QQQ 6 ($4,260.18 @ ~710.03), GOOG 2 ($764.30 @ ~382.15), VOO 2 ($1,359.50 @ ~679.75).
- **No orders placed this cycle.**
- **Event detector:** NONE — no broad market or position-level events.
- **Next expected action:** 1:35 PM ET hourly — may authorize GOOG +1 share (cooldown expires ~1:52 PM ET) and set Thursday NVDA/SOXX triggers.
