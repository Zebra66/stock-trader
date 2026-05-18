# Tactical Todo — Updated 2026-05-18 18:35Z (Monday 2:35 PM ET)

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** GOOG 3, NVDA 3, QQQ 4, XLK -3 (SHORT), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** $9,919.13 / $5,796.51 / $14,681.90
- **Gross long exposure:** 46.77% | **Net exposure:** 41.56% | **Cash:** 58.44%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today
- **Pattern day trader:** false
- **Unauthorized positions:** XLK -3 shares SHORT — cover deferred to Tuesday 2026-05-19 open to avoid daytrade #4

## HARD_LOCK — VALID UNTIL TUESDAY 2026-05-19 09:30 ET
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK.**
- `alpaca_cli.ts` enforces HARD_LOCK at the code level.
- The ONLY exception is the authorized XLK cover on Tuesday open.
- No sells, no buys, no cancels, no changes.

## Tuesday 2026-05-19 Deployment Plan (after XLK cover, hourly lock lifted)
*All re-buys explicitly override 24h cooldowns as noted. Execute using limit orders at or near reference prices to minimize slippage. Stage deployment: cover first, then execute in priority order listed below.*

### Step 1 — Cover XLK (compliance cleanup)
- **BUY TO COVER XLK 3 shares** — compliance cleanup of unauthorized short.
  - Execute at Tuesday market open (09:30 ET) via limit order near prior close (~$173.00).
  - This is explicitly authorized by the hourly strategist. The CLI universe gate allows buy-to-cover for existing shorts.
  - After cover, cash will be ~$5,277.

### Step 2 — Reduce NVDA earnings binary risk (priority: do before Wednesday close)
- **SELL NVDA 2 shares** — reduce exposure ahead of Wednesday May 20 earnings.
  - Current ref: ~**220.14**. Use limit order ~219.50–220.50.
  - Leave 1 share (~2.2% weight) as a reduced "lottery ticket" through earnings.
  - Rationale: No directional edge on earnings; 3-share position (~6.7%) is too large for a binary event while book is already underwater.

### Step 3 — Rebuild core positions (execute after XLK cover, in listed order)
1. **META** — BUY 1 share via limit order ~610.00–613.00. New high-quality large-cap tech exposure. Target weight ~6%.
2. **VOO** — BUY 2 shares via limit order ~675.00–677.00. Broad-market anchor with low semi-correlation. Target ~14%.
3. **QQQ** — BUY 2 shares via limit order ~700.00–703.00. Rebuild core liquid growth. Target back to 36-42%. **24h cooldown explicitly overridden** (sold Monday 15:35–15:37).
4. **AVGO** — BUY 1 share via limit order ~418.00–419.00. Rebuild AI/networking sleeve. Target 4-6%. **24h cooldown explicitly overridden** (sold Monday 14:25). Defer to after NVDA earnings if semi volatility spikes >2% on Tuesday open.

**Conditional / deferred:**
- **SOXX** — DO NOT buy Tuesday. Wait for daily close above 500 to confirm stabilization (currently 489.12, broken below 495).
- **QTUM** — DO NOT buy Tuesday. Liquidity is extremely thin (<2 trades/hour). Avoid market orders entirely.
- **NVDA** — NO ADDS before or through earnings Wednesday May 20.

## Position Instructions (Monday 2:35 PM — today, HARD_LOCK active)
- **HOLD QQQ 4 — target allocation 36-42% after rebuild Tuesday.**
  - Current ref: ~**700.87**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**394.64**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 3 — REDUCE to 1 share Tuesday before earnings.**
  - Current ref: ~**220.14**
  - **Earnings Wednesday May 20** — binary event.
  - **Stop level:** If NVDA drops below **218.00** Tuesday, trim/sell 2 shares immediately after lock lift.
  - **Do not sell today.** HARD_LOCK prevents all orders.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No illiquid-symbol market orders.** EIS, QTUM, SHLD, ARKX have <5 trades/hour. If ever authorized, use limit orders only.

## Cycle Log (condensed)

### This Cycle — 2026-05-18 19:11Z (Tactical 3:11 PM ET)
- **Market status:** OPEN until 16:00 ET. Event detector: NONE (classification NONE, first-run baseline).
- **Live broker refresh:** Equity $9,932.75 | Cash $5,796.51 | Long $4,655.77 | Short -$519.53 | Gross 46.87% | Net 41.63% | Daytrade 3/3.
- **Holdings confirmed:** GOOG 3 ($1,184.55 @ 394.85), NVDA 3 ($661.26 @ 220.42), QQQ 4 ($2,809.96 @ 702.49), XLK -3 (-$519.53 @ 173.18).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $220.42 (>218.00), GOOG $394.85 (>394.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. Trim 2 shares Tuesday after lock lift.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then execute Tuesday deployment plan after hourly lock lift.

### This Cycle — 2026-05-18 18:40Z (Tactical 2:40 PM ET)
- **Market status:** OPEN until 16:00 ET. Event detector: NONE (no events detected; first-run baseline).
- **Live broker refresh:** Equity $9,919.13 | Cash $5,796.51 | Long $4,639.49 | Short -$516.87 | Gross 46.77% | Net 41.56% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,799.80 @ 699.95), GOOG 3 ($1,182.33 @ 394.11), NVDA 3 ($657.48 @ 219.16), XLK -3 (-$516.87 @ 172.29).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $219.16 (>218.00), GOOG $394.11 (>394.00), QQQ $699.95. None breached.
- **NVDA earnings alert:** Wednesday May 20. Plan to trim 2 shares Tuesday after lock lift.
- **Tuesday deployment reference prices:** META 610.64, AVGO 417.77, VOO 675.18, SOXX 487.96.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then execute Tuesday deployment plan after hourly lock lift.

### This Cycle — 2026-05-18 18:35Z (Hourly 2:35 PM ET)
- **Market status:** OPEN until 16:00 ET. Event detector: NOT RUN (hard lock active).
- **Live broker refresh:** Equity $9,926.23 | Cash $5,796.51 | Long $4,647.67 | Short -$517.95 | Gross 46.81% | Net 41.59% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 ($2,803.48), GOOG 3 ($1,184.10), NVDA 3 ($660.21), XLK -3 (-$517.95).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $220.14 (>218.00), QQQ $700.87 (>700.00), GOOG $394.64 (>394.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. Plan to trim 2 shares Tuesday.
- **News:** Yahoo RSS confirms chip stocks worst 2-day decline since October. NextEra/Dominion merger highlights AI power demand. No actionable headlines.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then execute Tuesday deployment plan after hourly lock lift.
