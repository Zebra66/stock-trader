# Tactical Todo — Updated 2026-05-20 18:35Z (Wednesday 2:35 PM ET)
*Execute authorized orders only. Daytrade count is 3 — no same-day reversals. GOOG was bought today; DO NOT SELL GOOG today.*

## Current State
- **Regime:** offensive catch-up
- **Live book:** QQQ 6, GOOG 3, VOO 2
- **Account equity / cash / buying power:** $9,998.94 / $3,218.84 / ~$13,218
- **Gross long exposure:** ~67.81% | **Net exposure:** ~67.81% | **Cash:** ~32.19%
- **Daytrade count:** 3/3 (all legacy from Tuesday; no Wednesday daytrades yet)
- **Pattern day trader:** false
- **Open orders:** NONE

## Position Instructions — Valid until next hourly update at 3:35 PM ET
### Immediate Actions (2:35 PM ET — already executed)
- **GOOG +1 share FILLED** at ~$383.57 via limit $384.00. New position: 3 shares / 11.5% weight.
  - **CRITICAL: DO NOT SELL GOOG TODAY.** This is a position opened today. Selling it today would create a 4th daytrade.

### Holds (no action until next hourly)
- **HOLD QQQ 6 — DO NOT SELL OR ADD.** Weight ~42.7%, within 45% cap. No add until cap headroom allows ≥1 share without breaching 45%.
- **HOLD GOOG 3 — DO NOT SELL.** Weight ~11.5%, within 15% cap. Add 4th share only if hourly authorizes dip-buy below $380 with target ≤15%.
- **HOLD VOO 2 — DO NOT SELL OR ADD.** Weight ~13.6%, within 20% non-QQQ ETF cap. Adding 1 share would breach 20% cap (~20.4%). Hold.
- **NO NVDA — DO NOT BUY BEFORE EARNINGS.** Earnings after close tonight. Hourly strategist will set Thursday-open triggers at next run.
- **NO SOXX — DO NOT BUY BEFORE EARNINGS.** Wait for NVDA reaction Thursday.
- **NO AVGO / NO META — DO NOT BUY.** Liquidated Wed 12:33 PM ET. 24h anti-churn cooldown applies until Thu ~12:33 PM ET. Weak trends; no re-entry planned.
- **NO RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY.** No edge or weak relative trends.

## Thursday Triggers (Pending NVDA Earnings Reaction — wait for 9:35 AM ET hourly)
These are PRELIMINARY. Hourly strategist will refine at 9:35 AM ET Thursday.
- **NVDA:**
  - If NVDA opens > $231 (up >3% from $224.16 on strong guidance): BUY 1 share limit $233. Rationale: Constructive earnings, AI momentum intact.
  - If NVDA opens < $215 (down >4% on weak guidance): WAIT. Do not catch falling knife. Reassess at 10:00 AM ET.
  - If NVDA opens flat ($220–$228): WAIT first 30 minutes for direction.
- **SOXX:**
  - If SOXX > $525 and NVDA > $230: BUY 1 share limit $528. Rationale: Semi complex confirmation post-earnings.
  - If SOXX drops below $500: WAIT.

## Hard Rules / No-Trade Conditions (Valid until next hourly update)
- **NO discretionary buys** without explicit hourly authorization.
- **No same-day reversals** in any symbol opened today. **GOOG was opened today — DO NOT SELL GOOG today.**
- **No new short sales** under any circumstances.
- **Do NOT re-buy AVGO or META** without fresh hourly note explicitly authorizing re-entry (anti-churn cooldown + weak trends).
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

## This Cycle — 2026-05-20 18:35Z (Wednesday 2:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Holdings confirmed:** QQQ 6 ($4,267.98 @ ~711.33), GOOG 3 ($1,150.71 @ ~383.57), VOO 2 ($1,361.26 @ ~680.63).
- **Event detector:** NONE — no broad market or position-level events.
- **Order executed:** BUY GOOG +1 share limit $384.00 filled.
- **Expected action next cycle:** Hold all current positions. No new orders authorized until next hourly update (3:35 PM ET) unless NVDA-related emergency.
