# Tactical Todo — Updated 2026-05-19 04:53Z (Tuesday pre-market, 12:53 AM ET)

## Current State
- **Regime:** defensive / compliance-cleanup hard lock (partially lifted for staged XLK cover)
- **Live book:** GOOG 3, NVDA 3, QQQ 4, XLK -3 (SHORT), SOXX 0, AVGO 0
- **Account equity / cash / buying power:** $9,929.77 / $5,796.51 / $14,688.01
- **Gross long exposure:** 46.85% | **Net exposure:** 41.63% | **Cash:** 58.37%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today (Monday). Tuesday is a new day, but rolling 5-day count still = 3.
- **Pattern day trader:** false
- **Unauthorized positions:** XLK -3 shares SHORT — cover staged for market open.

## STAGED ORDER — DO NOT DUPLICATE
- **BUY TO COVER XLK 3 shares** limit order already placed (order ID `385783a6-3549-4aa3-a471-e382bb615c7b`), limit $175.00, day TIF, expires at 20:00Z.
- **DO NOT place another XLK buy.** The tactical agent must verify no duplicate orders exist before placing any trade.

## HARD_LOCK — VALID UNTIL TUESDAY 2026-05-19 09:30 ET
**The tactical agent is PROHIBITED from placing ANY orders until the hourly strategist explicitly removes this HARD_LOCK or updates `memory/.trading_lock.json`.**
- `alpaca_cli.ts` enforces the lock via `memory/.trading_lock.json` at the code level.
- The ONLY exception is the staged XLK cover above.
- No sells, no buys, no cancels, no changes except as allowed by the lock file.

## Tuesday 2026-05-19 Deployment Plan (after XLK cover, hourly lock lifted)
*All re-buys explicitly override 24h cooldowns as noted. Execute using limit orders at or near reference prices to minimize slippage. Stage deployment: cover first, then execute in priority order listed below.*

### Step 1 — Cover XLK (compliance cleanup)
- **BUY TO COVER XLK 3 shares** — compliance cleanup of unauthorized short.
  - Execute at Tuesday market open (09:30 ET) via limit order near prior close (~$173.00).
  - This is explicitly authorized by the hourly strategist. The CLI universe gate allows buy-to-cover for existing shorts.
  - After cover, cash will be ~$5,277.

### Step 2 — Reduce NVDA earnings binary risk (priority: do before Wednesday close)
- **SELL NVDA 2 shares** — reduce exposure ahead of Wednesday May 20 earnings.
  - Current ref: ~**220.78**. Use limit order ~219.50–221.00.
  - Leave 1 share (~2.2% weight) as a reduced "lottery ticket" through earnings.
  - Rationale: No directional edge on earnings; 3-share position (~6.7%) is too large for a binary event while book is already underwater.

### Step 3 — Rebuild core positions (execute after XLK cover, in listed order)
1. **META** — BUY 1 share via limit order ~610.00–613.00. New high-quality large-cap tech exposure. Target weight ~6%.
2. **VOO** — BUY 2 shares via limit order ~675.00–677.00. Broad-market anchor with low semi-correlation. Target ~14%.
3. **QQQ** — BUY 2 shares via limit order ~700.00–703.00. Rebuild core liquid growth. Target back to 36-42%. **24h cooldown explicitly overridden** (sold Monday 15:35–15:37).
4. **AVGO** — BUY 1 share via limit order ~417.00–419.00. Rebuild AI/networking sleeve. Target 4-6%. **24h cooldown explicitly overridden** (sold Monday 14:25). Defer to after NVDA earnings if semi volatility spikes >2% on Tuesday open.

**Conditional / deferred:**
- **SOXX** — DO NOT buy Tuesday. Wait for daily close above 500 to confirm stabilization (currently 490.17, broken below 495).
- **QTUM** — DO NOT buy Tuesday. Liquidity is extremely thin (<5 trades/hour). Avoid market orders entirely.
- **NVDA** — NO ADDS before or through earnings Wednesday May 20.

## Position Instructions (Monday 3:35 PM — today, HARD_LOCK active)
- **HOLD QQQ 4 — target allocation 36-42% after rebuild Tuesday.**
  - Current ref: ~**702.19**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD GOOG 3 — target allocation 10-15%.**
  - Current ref: ~**393.72**
  - **Do not sell today.** No trigger active. HARD_LOCK prevents all orders.

- **HOLD NVDA 3 — REDUCE to 1 share Tuesday before earnings.**
  - Current ref: ~**220.78**
  - **Earnings Wednesday May 20** — binary event.
  - **Stop level:** If NVDA drops below **218.00** Tuesday, trim/sell 2 shares immediately after lock lift.
  - **Do not sell today.** HARD_LOCK prevents all orders.

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO ORDERS OF ANY KIND.**
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **No illiquid-symbol market orders.** EIS, QTUM, SHLD, ARKX, VOO (thin prints late day) have <5 trades in latest bar. If ever authorized, use limit orders only.

## Cycle Log (condensed)

### This Cycle — 2026-05-18 19:50Z (Tactical 3:50 PM ET)
- **Market status:** OPEN until 16:00 ET. Event detector: NONE (classification NONE).
- **Live broker refresh:** Equity $9,939.48 | Cash $5,796.51 | Long $4,665.15 | Short -$522.18 | Gross 46.93% | Net 41.70% | Daytrade 3/3.
- **Holdings confirmed:** GOOG 3 ($1,180.80 @ 393.60), NVDA 3 ($665.31 @ 221.77), QQQ 4 ($2,819.04 @ 704.76), XLK -3 (-$522.18 @ 174.06).
- **Prices checked:** META 611.38 (30 trades), VOO 678.27 (4 trades, thin), AVGO 421.23 (61 trades), SOXX 495.63 (36 trades).
- **Unauthorized trades detected:** None. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $221.77 (>218.00), GOOG $393.60 (>390.00), QQQ $704.76 (>700.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. Trim 2 shares Tuesday after lock lift.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then execute Tuesday deployment plan after hourly lock lift.

### This Cycle — 2026-05-18 19:40Z (Tactical 3:40 PM ET)
- **Market status:** OPEN until 16:00 ET. Event detector: NONE (classification NONE).
- **Live broker refresh:** Equity $9,937.63 | Cash $5,796.51 | Long $4,662.34 | Short -$521.22 | Gross 46.91% | Net 41.76% | Daytrade 3/3.
- **Holdings confirmed:** GOOG 3 ($1,181.97 @ 393.99), NVDA 3 ($664.68 @ 221.56), QQQ 4 ($2,815.69 @ 703.92), XLK -3 (-$521.22 @ 173.74).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $221.56 (>218.00), GOOG $393.99 (below 394.00 ref but no active sell trigger), QQQ $703.92. None breached.
- **NVDA earnings alert:** Wednesday May 20. Trim 2 shares Tuesday after lock lift.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then execute Tuesday deployment plan after hourly lock lift.

### This Cycle — 2026-05-18 19:35Z (Hourly 3:35 PM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,929.77 | Cash $5,796.51 | Long $4,652.40 | Short -$519.14 | Gross 46.85% | Net 41.63% | Daytrade 3/3.
- **Holdings confirmed:** GOOG 3 ($1,181.37 @ 393.79), NVDA 3 ($662.27 @ 220.76), QQQ 4 ($2,808.76 @ 702.19), XLK -3 (-$519.14 @ 173.05).
- **Unauthorized trades detected:** None since 11:37 AM ET run. HARD_LOCK remains effective.
- **Orders placed this cycle:** None. HARD_LOCK active; code guard enforced.
- **Protective stops check:** NVDA $220.76 (>218.00), GOOG $393.79 (>390.00), QQQ $702.19 (>700.00). None breached.
- **NVDA earnings alert:** Wednesday May 20. Trim 2 shares Tuesday after lock lift.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then execute Tuesday deployment plan after hourly lock lift.

### This Cycle — 2026-05-18 19:30Z (Tactical 3:30 PM ET)
- Market status: OPEN until 16:00 ET. Event detector: NONE.
- Broker refresh: Equity $9,925.86 | Cash $5,796.51 | Long $4,647.78 | Short -$518.43 | Gross 46.83% | Net 41.60% | Daytrade 3/3.
- Holdings confirmed: GOOG 3 ($1,180.65 @ 393.55), NVDA 3 ($660.81 @ 220.27), QQQ 4 ($2,806.32 @ 701.58), XLK -3 (-$518.43 @ 172.81).
- Zero orders placed. HARD_LOCK active; code guard enforced.
- Protective stops: NVDA $220.27 (>218.00), GOOG $393.55 (>390.00), QQQ $701.58 (>700.00). None breached.
- Next expected action: Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then execute Tuesday deployment plan after hourly lock lift.
