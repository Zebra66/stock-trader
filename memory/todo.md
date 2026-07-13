# Tactical Todo — Updated 2026-07-13 13:35Z (Monday 09:35 AM ET)
*Hourly reset after open CRITICAL→MINOR transition. Hold-first posture.*

## Current State
- **Regime:** **neutral** (not defensive panic, not offensive catch-up)
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 5
- **Account equity / cash / BP:** ~$9,684 / $2,260 / ~$29,828
- **Gross long exposure:** **76.7%** | Target band **65–80%** | Cash **~23.3%**
- **Daytrade count:** **0** (confirmed). Conserve — do not open positions you may need to reverse today.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN. Soft open on US-Iran headlines + semi/AI selloff. SK Hynix plunge pressuring chips.
- **HARD_LOCK:** inactive (`active: false`). META remains in `bannedSymbols`.
- **Audit:** clean (13:35Z). No unauthorized positions. No concentration breaches.

## Position Instructions — Mon Jul 13 (tactical :40 / :50)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$59 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.3%. Adding 1 share (~$693) would breach 20% non-QQQ ETF cap.
- Broad-market anchor. No action.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Avg $371.95. Live ~$391. Still +~5% unrealized despite open dump.
- **Authorized stop only:** SELL **1** share if price drops **below $385.00** with **limit $384.50**. If triggered, hold remaining 2.
- Do NOT add AVGO today (sector under pressure; also 1 share would breach 15% stock cap at ~$391).
- **ANTI-CHURN:** AVGO was not bought today. Protective sell is allowed if stop hits.

### HOOD — HOLD 5 — DO NOT ADD — Trail stop $111
- Avg $101.50. Live ~$113. Best unrealized (~+12%).
- **Authorized trail stop (UPDATED):** SELL **2** shares if price drops **below $111.00** with **limit $110.50**. If triggered, hold remaining 3.
- Do NOT add HOOD today.
- **ANTI-CHURN:** HOOD was not bought today. Protective sell is allowed if stop hits.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`.
- CODE-ENFORCED reject on any BUY. No re-entry.

### NVDA — NO ENTRY THIS HOUR
- Watch only. Liquid AI/chip name. Do **not** buy on open weakness.
- 10:35 hourly may authorize 1-share limit buy if tape stabilizes (QQQ ≥ $715 and NVDA ≥ $208 with structure). Until then: **no order**.

### GOOG — NO ENTRY THIS HOUR
- Soft 1w. No authorization.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Open dump / thin relative to single-name alternatives. No re-entry today.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO DISCRETIONARY BUYS this hour.** Only authorized action is the AVGO/HOOD protective stops above.
- **Exact cash/deploy blocker:** Risk-off open (US-Iran + SK Hynix/AI-chip scrutiny). Gross already 76.7% inside 65–80% band — no urgency to deploy.
- **No same-day round trips.** If you buy a symbol today, you may NOT sell it today. If you sell a symbol today, you may NOT buy it back today. Code-enforced.
- **Conserve daytrades** (0 of 3 used). Protective stop sells on overnight holdings are OK and do not create a daytrade.
- **No new short sales** under any circumstances.
- **If event detector flags MAJOR or CRITICAL** on a held name: do NOT market-panic sell. Only execute if an **explicit authorized stop** in this file is breached. Otherwise hold for next hourly.
- **Tactical must use EXACT authorized stop prices** ($385 / $384.50 for AVGO; $111 / $110.50 for HOOD). No discretionary rounding.
- **Order Submission Method — ABSOLUTE REQUIREMENT:** Use ONLY `bun run src/tools/alpaca_cli.ts submit-order`. Direct `fetch`/`curl`/SDK bypass of guards is prohibited.
- **Limit orders only for thin names:** SOXX, EIS, SHLD, QTUM, ARKX, GLD (none authorized today).
- **Illiquid gate:** If TradeCount < 5 or volume anomalously low on a candidate, do not market-buy; defer.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% | single stock ≤ 15% | non-QQQ ETF ≤ 20%
- Current: all within caps. QQQ near max. VOO cannot add 1 share. AVGO cannot add 1 share at current price.

## Symbol Ban Guard (Code-Enforced)
- `bannedSymbols: ["META"]` — BUY rejected regardless of lock active state.

## Today's Deployment Queue
1. **This hour:** NONE. Hold + protective stops only.
2. **If 10:35+ hourly authorizes:** NVDA 1 share limit (priority 1), then GOOG 1 share (priority 2). Never META. Never thin ETFs without explicit hourly line.
3. Rebuild only after audit remains clean.

## Expected Book If No Stops Trigger
- QQQ 6 (~44.4%), VOO 2 (~14.3%), AVGO 3 (~12.1%), HOOD 5 (~5.9%)
- Cash ~$2,260 (~23.3%)
- Gross ~76.7%

## Safeguards For Next 60 Minutes
- Hold-only unless AVGO < $385 or HOOD < $111.
- No revenge trading after Fri META breach.
- No SOXX re-entry on bounce.
- If gross exposure drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
