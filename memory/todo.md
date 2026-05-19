# Tactical Todo — Updated 2026-05-19 16:35Z (Tuesday 12:35 PM ET)
*HARD_LOCK active. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / cleanup-only hard lock
- **Live book:** QQQ 8, GOOG 3, VOO 2, META 1 (UNAUTHORIZED), AVGO 1 (UNAUTHORIZED), NVDA 1
- **Account equity / cash / buying power:** $9,914.55 / $553.16 / $10,467.71
- **Gross long exposure:** 94.4% | **Net exposure:** 94.4% | **Cash:** 5.58%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Open orders:** NONE

## HARD_LOCK — VALID UNTIL EXPLICITLY LIFTED BY HOURLY STRATEGIST
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `alpaca_cli.ts` enforces HARD_LOCK at the code level by reading `memory/todo.md`.
- Concentration cap guard is also active: QQQ ≤45%, single stock ≤15%, non-QQQ ETF ≤20%.
- No discretionary trading until cleanup is complete and the hourly strategist updates directives.

## Wednesday 2026-05-20 Cleanup Plan (Execute at Market Open)
*All positions being sold were bought on Tuesday 2026-05-19. Selling them on Wednesday avoids daytrade counting.*
1. **SELL QQQ 2 shares** via market order at open. Reduce total from 8 to 6, restoring the 45% concentration cap.
2. **SELL AVGO 1 share** via market order at open. Liquidate unauthorized position.
3. **SELL META 1 share** via market order at open. Liquidate unauthorized position.

## Position Instructions (Remainder of Tuesday 2026-05-19)
- **HOLD QQQ 8 — DO NOT SELL TODAY.** Selling any QQQ today would be a daytrade (2 shares bought today at 10:08 ET). Wait until Wednesday open.
- **HOLD GOOG 3 — DO NOT SELL TODAY.** No trigger active. Trim below 375 if breached on Wednesday.
- **HOLD VOO 2 — DO NOT SELL TODAY.** Authorized anchor. Hold through cleanup.
- **HOLD NVDA 1 — DO NOT SELL TODAY.** Intentional earnings lottery ticket. Earnings Wednesday after close.
- **HOLD AVGO 1 — DO NOT SELL TODAY.** Unauthorized, but selling today would be a daytrade. Liquidate Wednesday open.
- **HOLD META 1 — DO NOT SELL TODAY.** Unauthorized, but selling today would be a daytrade. Liquidate Wednesday open.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND while HARD_LOCK is present.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **Do NOT sell positions opened today** (AVGO, META, QQQ +2, VOO 2) — daytrade #4+ risk.
- **No new short sales** under any circumstances.
- **No re-buy of NVDA today** (anti-churn cooldown from Tue sell).

## Illiquidity Warnings (Universe Watchlist)
The following symbols showed anomalously low trade count/volume in the latest Alpaca bar and are classified as **illiquid**. Do not place market orders for these; use limit orders only, or defer.
- **EIS:** TradeCount 1, Volume 100
- **SHLD:** TradeCount 1, Volume 100
- **QTUM:** TradeCount 1, Volume 150
- **ARKX:** TradeCount 3, Volume 1950
- **GLD:** TradeCount 9, Volume 461
- **VOO:** TradeCount 3, Volume 45 (broad ETF, acceptable for limit orders at known prices)

## This Cycle — 2026-05-19 16:35Z (Tuesday 12:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,914.55 | Cash $553.16 | Long $9,361.39 | Gross ~94.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,616.96 @ 702.12), GOOG 3 ($1,155.06 @ 385.02), VOO 2 ($1,351.28 @ 675.64), META 1 ($602.10 @ 602.10), AVGO 1 ($413.22 @ 413.22), NVDA 1 ($222.69 @ 222.69).
- **Portfolio delta since 11:35 ET:** +$39.85 (+0.40%). QQQ and AVGO bounced modestly.
- **Unauthorized positions:** AVGO 1, META 1, QQQ +2 extra. Cleanup deferred to Wednesday open.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** No material new headlines since 11:35 ET. GOOG/Blackstone AI deal remains fresh catalyst. NVDA earnings Wed after close still dominant. U.S.-China summit lack of semi breakthrough continues to weigh on semis.
- **Orders placed this cycle:** None. HARD_LOCK active. `.trading_lock.json` active with empty allowed list.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells (QQQ 2, AVGO 1, META 1). Then reassess deployment post-NVDA earnings.

## Previous Cycle — 2026-05-19 15:35Z (Tuesday 11:35 AM ET)
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells.
