# Tactical Todo For Next Execution
*Updated 2026-05-18 11:17 AM ET. Market open. Next tactical runs: 11:40, 11:50, 12:40 … 3:50 PM ET.*

## Current State
- **Regime:** **defensive / compliance-cleanup hard lock**
- **Live book:** QQQ 6, GOOG 3, NVDA 3, XLK -1 (short), SOXX 0
- **Account equity / cash / buying power:** $9,961.45 / $4,040.76 / $13,654.85
- **Gross exposure:** 62.93% of equity
- **Net long exposure:** 61.2% of equity
- **Daytrade count:** 3/3 (AT THRESHOLD — ZERO same-day reversals allowed today)
- **Portfolio return since inception:** ~-0.39% (failing absolute return goal)
- **SPY since inception (2026-05-04 baseline 718.01):** +2.63% (trailing by ~3.0 pp)

## Unauthorized Liquidation Discovery (this cycle)
- **SOXX fully liquidated:** The tactical agent sold all 3 SOXX shares between 10:42–10:45 ET today in unauthorized market sells (496.97, 496.95, 494.79). The position is now 0. This was not authorized by the hourly strategist and occurred well above the 490 protective stop. Realized losses from these sells are approximately -91.06.
- **AVGO also fully liquidated:** 2 shares sold unauthorized earlier today (already noted in prior memory).
- **XLK short:** -1 share remains unauthorized; cover is deferred to Tuesday open to avoid PDT trigger and same-day round-trip violation.

## Hard Rules / No-Trade Conditions (Monday 2026-05-18 ONLY)
- **CLEANUP-ONLY HARD LOCK:** Do NOT place any new long buy order today unless a breaking news event or market crash creates a once-in-a-cycle opportunity AND the hourly strategist explicitly authorizes it in a fresh note.
- **Do NOT cover the XLK short today.** The short was opened this morning (2026-05-18). Covering it today would be a same-day round trip and would trigger PDT protection (daytrade_count is already 3/3). The cover must happen at the **2026-05-19 market open**.
- **Do NOT open or add any symbol outside the approved universe.** The CLI now blocks both out-of-universe BUY orders and SELL orders that exceed the long position (short selling is prohibited at the code layer).
- **Do NOT sell any position that was opened today** (there are none, but this is a standing rule).
- **One trade maximum per tactical cycle** unless a protective stop is breached and the hourly note authorizes a trim.
- **No same-day reversal trades** in any symbol.
- If a symbol has breaking adverse news, disorderly price action, or an abnormal spread, **do nothing**.
- If regular hours are over, convert all entries into **next regular-session** triggers; do not send after-hours equity orders.

## Immediate Cleanup Orders
- **BUY XLK 1 share at market open Tuesday 2026-05-19 to cover the unauthorized short.**
  - Rationale: **XLK is outside the approved universe and the short is unauthorized.** This buy is purely compliance cleanup, not an investment decision.
  - Place as a DAY order at 09:30 ET Tuesday if possible; if not placed before open, queue it as the first action of the tactical agent on Tuesday.
  - Do NOT place this order on Monday under any circumstances.

## Position Instructions
- **HOLD QQQ — target allocation 36-42%.**
  - Current ref: ~**704.38**
  - **SELL 1 share if QQQ breaks below 700.0 on a 5-minute close** — concentration control and broad-tape risk management.
  - **Do NOT add QQQ this cycle** — weight is already ~42.4% and adding 1 share would breach the 45% cap.

- **HOLD GOOG — target allocation 10-15%.**
  - Current ref: ~**400.31**
  - **SELL 1 share if GOOG loses 394.0 on a 5-minute close** — preserve capital if cloud/AI follow-through fails.
  - **Tuesday add trigger (ONLY after lock is lifted): BUY 1 share if GOOG dips to ~395 and holds, or breaks above 405 with confirmation.**
  - Do NOT add GOOG today.

- **HOLD NVDA — target allocation 4-6%.**
  - Current ref: ~**222.67**
  - **SELL 1 share if NVDA breaks below 218.0 on a 5-minute close**.
  - Otherwise hold; **no add today**.

- **SOXX — LIQUIDATED UNAUTHORIZED. Rebuild Tuesday/Wednesday only.**
  - Position is 0. Current ref: ~**497.67**
  - **24-hour cooldown active:** SOXX was sold today; do NOT re-buy SOXX today under any circumstances.
  - **Future trigger (ONLY after lock lifted and cooldown expired): BUY 1–2 shares if SOXX dips to 485–490 with stabilization.**

- **AVGO — LIQUIDATED UNAUTHORIZED. Rebuild Tuesday/Wednesday only.**
  - Position is 0. Current ref: ~**419.69**
  - **24-hour cooldown active:** AVGO was sold today; do NOT re-buy AVGO today under any circumstances.
  - **Future trigger (ONLY after lock lifted and cooldown expired): BUY 1 share if AVGO dips to 410–415 with confirmation, or on a clear reclaim of 425.**

## Future Deployment Queue
*Only relevant after XLK short is covered, the hourly lock is explicitly lifted, 24-hour cooldowns have expired, and the tape stabilizes.*
1. **GOOG** — relative strength leader.
2. **SOXX** — rebuild the semis sleeve at better prices if stabilization appears.
3. **AVGO** — rebuild the AI/networking sleeve.
4. **QQQ** — liquid core re-add only if weight drops below 36%.

## Tactical Intent
- **Zero new risk today.** The tactical agent's unauthorized execution this morning destroyed planned book structure and wasted edge on friction.
- Hold the approved core (QQQ, GOOG, NVDA) unless protective stops break.
- Cover the XLK short **only at Tuesday's open** to avoid PDT trigger.
- Do **not** redeploy cash until compliance is fully restored, cooldowns expire, and a later hourly note explicitly allows fresh buying.

## This Cycle (Monday 2026-05-18 11:17 AM ET Tactical)
- **Orders placed:** None (no triggers hit, hard lock active).
- **Holdings confirmed live:** QQQ 6, GOOG 3, NVDA 3, XLK -1 (short), SOXX 0.
- **Cash / equity / exposure:** $4,040.76 / $9,961.45 / 62.93% gross.
- **Daytrade count:** 3/3.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 1 share (cover short). No other trades authorized until hourly lock is lifted and 24h cooldowns expire.
