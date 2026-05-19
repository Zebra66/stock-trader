# Tactical Todo — Updated 2026-05-19 14:11Z (Tuesday 10:11 AM ET)
*No open orders. Live broker state confirmed. See MEMORY.md for full context.*

## Current State
- **Regime:** offensive catch-up / earnings-caution hybrid
- **Live book:** QQQ 6, GOOG 3, NVDA 1, SOXX 0, AVGO 0, META 0
- **Account equity / cash / buying power:** $9,908.37 / $4,315.09 / $14,223.46
- **Gross long exposure:** 56.4% | **Cash:** 43.5%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today.
- **Pattern day trader:** false
- **Unauthorized positions:** None. XLK short fully covered.

## HARD_LOCK is ACTIVE — no orders permitted
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- The ONLY authorized action is holding current positions.
- No sells, no buys, no cancels, no changes.
- `alpaca_cli.ts` enforces HARD_LOCK at the code level by reading `memory/todo.md`.

## Position Instructions (HOLD ONLY — no triggers active today)
- **HOLD QQQ 6 — target allocation 36-45%.**
  - Current ref: ~**698.15**
  - **Do not sell today.** No active sell trigger.
  - QQQ 45% single-ETF cap is the hard ceiling. Do not add QQQ while at 6 shares / 42.3% weight.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**387.37**
  - **Do not sell today.** No active sell trigger.

- **HOLD NVDA 1 — earnings lottery ticket.**
  - Cost basis $231.59, current ~218.84. Unrealized ~-5.0%.
  - **No protective stop active today.** NVDA earnings Wednesday after close creates binary gap risk regardless.
  - **Do NOT add NVDA today.** No new shares until Thursday re-assessment.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No AVGO, SOXX, META, QTUM, VOO adds today.** All fresh capital deployment deferred to Thursday 2026-05-21 post-NVDA earnings.
- **Do NOT re-buy symbols sold today** within 24 hours unless a future hourly note explicitly authorizes re-entry. (No symbols were sold today.)
- **Do NOT place a HARD_LOCK without hourly strategist authorization.**

## This Cycle — 2026-05-19 14:11Z (Tuesday 10:11 AM ET)
- **Market status:** OPEN. Next close 16:00 ET.
- **Live broker refresh:** Equity $9,908.37 | Cash $4,315.09 | Long $5,593.28 | Gross exposure 56.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 6 ($4,188.90), GOOG 3 ($1,162.11), NVDA 1 ($218.84).
- **Unauthorized positions / orders:** None.
- **Universe compliance audit:** All holdings in approved universe. PASS.
- **Open orders:** None.
- **Strategic change:** VOO buy directive from 10:03 run is CANCELED. VOO is the S&P 500 tracker; buying it cannot help us beat the S&P 500. Cash preserved for Thursday post-earnings deployment into higher-conviction names.
- **NVDA earnings alert:** Wednesday May 20 after close. Hold 1 share as reduced lottery ticket.
- **Next expected action:** Thursday 2026-05-21 09:30 ET — reassess and deploy into META, AVGO, SOXX, QTUM per hourly queue if NVDA earnings and tape confirm strength.

## Tactical Agent Notes
- **Read this file immediately before any order attempt.**
- If you believe a trade is warranted that is not listed above, log the rationale and wait for the next hourly cycle. Do not act on your own judgment.
- If any price movement seems to breach a stop or create an urgent risk, document it and wait for hourly authorization. The 3/3 daytrade limit means any unauthorized sell could trigger PDT restrictions.
