# Tactical Todo — Updated 2026-05-19 14:12Z (Tuesday 10:12 AM ET)
*CRITICAL COMPLIANCE BREACH. No open orders. See MEMORY.md for full context.*

## Current State
- **Regime:** defensive / compliance-cleanup hard lock
- **Live book:** QQQ 8, GOOG 3, META 1, VOO 2, AVGO 1, NVDA 1
- **Account equity / cash / buying power:** $9,866.84 / $553.16 / $10,420.00
- **Gross long exposure:** 94.4% | **Cash:** 5.6%
- **Daytrade count:** 3/3 — PDT threshold; absolutely zero same-day reversals today for symbols bought today.
- **Pattern day trader:** false
- **Unauthorized positions:** QQQ 2 extra shares (cap breach), AVGO 1 share, META 1 share — all bought at 10:08 AM ET in violation of explicit no-buy directives.

## HARD_LOCK is ACTIVE — no discretionary orders permitted
**The tactical agent is PROHIBITED from placing ANY discretionary orders.**
- The ONLY permitted orders are the explicit cleanup sells listed in "Wednesday Cleanup" below.
- No new buys, no discretionary sells, no cancels, no changes.
- `alpaca_cli.ts` enforces HARD_LOCK at the code level by reading `memory/todo.md`.
- `alpaca_cli.ts` also enforces numeric concentration caps (QQQ 45%, single stock 15%, non-QQQ ETF 20%) and gross exposure cap (90%) in `submitOrder`.

## Wednesday 2026-05-20 Cleanup (Authorized Sells — Execute at Market Open 09:30 ET)
These sells are NOT daytrades because the buys occurred on Tuesday and the sells are on Wednesday.

### Step 1 — Trim QQQ to restore 45% cap
- **SELL QQQ 2 shares** — reduce from 8 to 6 shares.
  - Execute via market order or limit at Wednesday 09:30 ET.
  - Rationale: QQQ weight is 56.5%, 11.5pp over the 45% hard cap.
  - After fill: QQQ ~42% weight, gross exposure ~80%.

### Step 2 — Trim VOO to remove SPY-tracker exposure
- **SELL VOO 2 shares** — full liquidation.
  - Execute via market order or limit at Wednesday 09:30 ET.
  - Rationale: VOO is the S&P 500 tracker; structurally incompatible with beating SPY. Frees cash for higher-conviction names.
  - After fill: VOO 0%, gross exposure ~66%.

### Step 3 — Hold remaining positions
- **HOLD QQQ 6** — target allocation 36-45%. Current ref ~$696.
- **HOLD GOOG 3** — target allocation 10-15%. Current ref ~$385.
- **HOLD META 1** — target allocation 5-8%. Current ref ~$609.
- **HOLD AVGO 1** — target allocation 4-6%. Current ref ~$407.
- **HOLD NVDA 1** — earnings lottery ticket. Current ref ~$219. Unrealized ~-5.6%.

## Post-Cleanup Target Allocation (Wednesday after Step 1 + Step 2)
| Symbol | Shares | Est. Value | Target % |
|---|---|---|---:|
| QQQ | 6 | ~$4,178 | 42% |
| GOOG | 3 | ~$1,156 | 12% |
| META | 1 | ~$609 | 6% |
| AVGO | 1 | ~$407 | 4% |
| NVDA | 1 | ~$219 | 2% |
| Cash | — | ~$3,298 | 33% |
| **Total** | | **~$9,867** | **100%** |

## Hard Rules / No-Trade Conditions (valid until HARD_LOCK is lifted by hourly strategist)
- **NO discretionary orders of ANY KIND.** Only the two authorized sells above are permitted.
- **No same-day reversals** in ANY symbol today (daytrade_count = 3/3).
- **Do NOT sell AVGO, META, or the original QQQ 6 / GOOG 3 / NVDA 1 today.** These are overnight positions but PDT risk is elevated; defer any trimming to Wednesday hourly authorization.
- **Do NOT re-buy symbols sold today** within 24 hours unless a future hourly note explicitly authorizes re-entry. (No symbols were sold today.)
- **Do NOT place a HARD_LOCK without hourly strategist authorization.**
- **Do NOT execute more than one order per tactical cycle** unless explicitly authorized by hourly note.

## This Cycle — 2026-05-19 14:12Z (Tuesday 10:12 AM ET)
- **Market status:** OPEN until 16:00 ET.
- **Live broker refresh:** Equity $9,866.84 | Cash $553.16 | Long $9,313.68 | Gross exposure 94.4% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 8 ($5,570.16), GOOG 3 ($1,156.33), META 1 ($608.89), VOO 2 ($1,346.53), AVGO 1 ($407.31), NVDA 1 ($218.59).
- **Unauthorized positions discovered:** QQQ 2 extra shares, AVGO 1, META 1 — bought at 10:08 AM ET violating explicit todo.md instructions.
- **Universe compliance audit:** All holdings in approved universe. PASS.
- **Open orders:** None.
- **HARD_LOCK activated:** No discretionary trading until Wednesday cleanup complete.
- **Cleanup plan:** Wednesday 09:30 ET — SELL 2 QQQ and SELL 2 VOO per authorized Wednesday Cleanup section above.
- **NVDA earnings alert:** Wednesday May 20 after close. Hold 1 share as reduced lottery ticket.
- **Next expected action:** Wednesday 2026-05-20 09:30 ET — execute Step 1 and Step 2 cleanup sells.

## Tactical Agent Notes
- **Read this file immediately before any order attempt.**
- If you believe a trade is warranted that is not listed above, log the rationale and wait for the next hourly cycle. Do not act on your own judgment.
- If any price movement seems to breach a stop or create an urgent risk, document it and wait for hourly authorization. The 3/3 daytrade limit means any unauthorized sell could trigger PDT restrictions.
- After placing ANY order, immediately re-read this file. If it changed and now shows HARD_LOCK or contradicts your trade, stop immediately.
