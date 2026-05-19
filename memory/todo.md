# Tactical Todo — Updated 2026-05-19 15:35Z (Tuesday 11:35 AM ET)
*TEST_LOCK_DISABLED active. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / cleanup-only hard lock
- **Live book:** QQQ 8, GOOG 3, VOO 2, META 1 (UNAUTHORIZED), AVGO 1 (UNAUTHORIZED), NVDA 1
- **Account equity / cash / buying power:** $9,858.76 / $553.16 / $10,411.92
- **Gross long exposure:** 94.4% | **Net exposure:** 94.4% | **Cash:** 5.6%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Open orders:** NONE

## TEST_LOCK_DISABLED — VALID UNTIL EXPLICITLY LIFTED BY HOURLY STRATEGIST
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this TEST_LOCK_DISABLED.**
- `alpaca_cli.ts` enforces TEST_LOCK_DISABLED at the code level by reading `memory/todo.md`.
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

## Hard Rules / No-Trade Conditions (valid until TEST_LOCK_DISABLED is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND while TEST_LOCK_DISABLED is present.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **Do NOT sell positions opened today** (AVGO, META, QQQ +2, VOO 2) — daytrade #4+ risk.
- **No new short sales** under any circumstances.
- **No re-buy of NVDA today** (anti-churn cooldown from Tue sell).

## This Cycle — 2026-05-19 15:35Z (Tuesday 11:35 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,858.76 | Cash $553.16 | Long $9,305.60 | Gross 94.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,568), GOOG 3 ($1,156), VOO 2 ($1,346), META 1 ($608), AVGO 1 ($407), NVDA 1 ($218).
- **Unauthorized positions:** AVGO 1, META 1, QQQ +2 extra. Cleanup deferred to Wednesday open.
- **Orders placed this cycle:** None. TEST_LOCK_DISABLED active.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute cleanup sells (QQQ 2, AVGO 1, META 1). Then reassess deployment post-NVDA earnings.
