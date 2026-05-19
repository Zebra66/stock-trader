# Tactical Todo — Updated 2026-05-19 18:36Z (Tuesday 2:36 PM ET)
*HARD_LOCK active. Universal factory guard now blocks ALL orders. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / cleanup-only hard lock
- **Live book:** QQQ 8, GOOG 2, VOO 2, META 1 (UNAUTHORIZED), AVGO 1 (UNAUTHORIZED)
- **Account equity / cash / buying power:** $9,940.70 / $1,162.21 / $11,102.91
- **Gross long exposure:** 88.31% | **Net exposure:** 88.31% | **Cash:** 11.69%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Open orders:** NONE

## CRITICAL — Universal Factory Guard Deployed
- `alpaca_cli.ts` AND `alpaca_client_factory.ts` now both enforce HARD_LOCK and trading lock.
- ANY order submission via ANY code path is blocked while HARD_LOCK is active.
- If you see a "BLOCKED" message, do NOT retry. The lock is intentional.

## HARD_LOCK — VALID UNTIL EXPLICITLY LIFTED BY HOURLY STRATEGIST
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `memory/todo.md` string check + `memory/.trading_lock.json` + universal factory interceptor all enforce the lock.
- Concentration cap guard is also active: QQQ ≤45%, single stock ≤15%, non-QQQ ETF ≤20%.
- No discretionary trading until cleanup is complete and the hourly strategist updates directives.

## Wednesday 2026-05-20 Cleanup Plan (Execute at Market Open)
*All positions being sold were bought on Tuesday 2026-05-19. Selling them on Wednesday avoids daytrade counting.*
1. **SELL QQQ 2 shares** via market order at open. Reduce total from 8 to 6, restoring the 45% concentration cap.
2. **SELL AVGO 1 share** via market order at open. Liquidate unauthorized position.
3. **SELL META 1 share** via market order at open. Liquidate unauthorized position.

## Position Instructions (Remainder of Tuesday 2026-05-19)
- **HOLD QQQ 8 — DO NOT SELL TODAY.** Selling any QQQ today would be a daytrade (2 shares bought today at 10:08 ET). Wait until Wednesday open.
- **HOLD GOOG 2 — DO NOT SELL TODAY.** No trigger active. Rebuild to 3+ shares post-cleanup if dip persists Wednesday.
- **HOLD VOO 2 — DO NOT SELL TODAY.** Authorized anchor. Hold through cleanup.
- **HOLD AVGO 1 — DO NOT SELL TODAY.** Unauthorized, but selling today would be a daytrade. Liquidate Wednesday open.
- **HOLD META 1 — DO NOT SELL TODAY.** Unauthorized, but selling today would be a daytrade. Liquidate Wednesday open.
- **DO NOT REBUY NVDA TODAY.** Anti-churn cooldown applies (sold today at ~1:52 PM ET).

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND while HARD_LOCK is present.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **Do NOT sell positions opened today** (AVGO, META, QQQ +2, VOO 2) — daytrade #4+ risk.
- **No new short sales** under any circumstances.
- **Do NOT buy back NVDA today** (anti-churn cooldown from unauthorized sell).

## Illiquidity Warnings (Universe Watchlist)
The following symbols showed anomalously low trade count/volume in the latest Alpaca bar and are classified as **illiquid**. Do not place market orders for these; use limit orders only, or defer.
- **EIS:** TradeCount 1, Volume 100
- **SHLD:** TradeCount 2, Volume 115
- **QTUM:** TradeCount 1, Volume 150
- **ARKX:** TradeCount 1, Volume 173
- **GLD:** TradeCount 1, Volume 40
- **VOO:** TradeCount 10, Volume 230 (broad ETF, acceptable for limit orders at known prices)

## This Cycle — 2026-05-19 18:36Z (Tuesday 2:36 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,940.70 | Cash $1,162.21 | Long $8,778.49 | Gross ~88.31% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,636.08 @ 704.51), GOOG 2 ($773.49 @ 386.745), VOO 2 ($1,353.38 @ 676.69), META 1 ($602.94 @ 602.94), AVGO 1 ($412.60 @ 412.60).
- **CRITICAL BREACH:** GOOG 1 share and NVDA 1 share were sold at ~1:52 PM ET despite active HARD_LOCK. Root cause: factory guard missing. Now fixed in `alpaca_client_factory.ts`.
- **Realized losses from breach:** GOOG ~$11.22 + NVDA ~$6.65 = ~$17.87.
- **Unauthorized positions still live:** AVGO 1, META 1, QQQ +2 extra. Cleanup deferred to Wednesday open.
- **Event detector:** NONE — no broad market or position-level events.
- **Fresh intel:** GOOG/Blackstone AI data-center deal remains confirmed. NVDA earnings anticipation building for Wed after close.
- **Orders placed this cycle:** None. HARD_LOCK active. `.trading_lock.json` active with empty allowed list.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells (QQQ 2, AVGO 1, META 1). Then reassess deployment post-NVDA earnings.

## Previous Cycle — 2026-05-19 17:35Z (Tuesday 1:35 PM ET)
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells.
