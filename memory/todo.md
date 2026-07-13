# Tactical Todo — Updated 2026-07-13 14:35Z (Monday 10:35 AM ET)
*Hourly reset: open CRITICAL fully decayed to NONE. Neutral hold. No new buys this hour.*
* Prior tactical: HOOD $111 trail stop filled at 13:50Z (sold 2 @ $110). Subsequent :10/:20/:30 cycles correctly held.

## Current State
- **Regime:** **neutral** (not defensive panic, not offensive catch-up)
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 3
- **Account equity / cash / BP:** ~$9,690 / $2,480 / ~$30,107
- **Gross long exposure:** **74.4%** | Target band **65–80%** | Cash **~25.6%**
- **Daytrade count:** **0** (confirmed). Conserve — do not open positions you may need to reverse today.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN. Soft but stabilized vs open. US-Iran headlines still active; semis softer than broad market. TSMC earnings Jul 16 elevates semi risk this week.
- **HARD_LOCK:** inactive (`active: false`). META remains in `bannedSymbols`.
- **Audit:** clean (14:35Z). No unauthorized positions. No concentration breaches.

## Position Instructions — Mon Jul 13 (tactical :40 / :50)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$55 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.3%. Adding 1 share (~$692) would breach 20% non-QQQ ETF cap.
- Broad-market anchor. No action.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Avg $371.95. Live ~$394.7. Still +~6% unrealized after open recovery.
- **Authorized stop only:** SELL **1** share if price drops **below $385.00** with **limit $384.50**. If triggered, hold remaining 2.
- Do NOT add AVGO today (sector pressure + 1 share would breach 15% stock cap near current price).
- **ANTI-CHURN:** AVGO was not bought today. Protective sell is allowed if stop hits.

### HOOD — HOLD 3 — DO NOT ADD — DO NOT RE-BUY TODAY
- **Already sold 2 today** at $110.00 (13:50Z trail). Remaining 3 avg $101.50, live ~$112.2, unrealized ~+10.5%.
- **New trail stop:** SELL **1** share if price drops **below $109.50** with **limit $109.00**. If triggered, hold remaining 2.
- Do NOT add HOOD today. Do NOT re-buy HOOD today (same-day anti-churn; code-enforced after today's sell).
- No other HOOD action.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`.
- CODE-ENFORCED reject on any BUY. No re-entry.

### NVDA — NO ENTRY THIS HOUR
- Watch only. Liquid AI/chip name (~$208.3).
- **Gates for possible 11:35+ hourly authorization (NOT live yet):** QQQ ≥ $716 AND NVDA ≥ $209 with firm structure AND SOXX ≥ $562 AND no new CRITICAL geo event.
- Until hourly explicitly authorizes: **no order**.

### GOOG — NO ENTRY THIS HOUR
- Soft 1w (~–3%). No authorization.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Soft 1m, thin relative to NVDA, TSMC risk Jul 16. No re-entry today.
- Illiquid gate: latest TradeCount often < 5 — market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO DISCRETIONARY BUYS this hour.** Only authorized actions are protective stops on AVGO and HOOD.
- **Exact cash/deploy blocker:** Geo risk (US-Iran) + incomplete semi stabilization + TSMC Jul 16 sector event. Gross 74.4% inside 65–80% — no urgency to deploy.
- **No same-day round trips.** HOOD was sold today → may NOT buy HOOD back today. If you buy any symbol today, you may NOT sell it today.
- **Conserve daytrades** (0 of 3 used). Protective stop sells on overnight holdings are OK and do not create a daytrade.
- **No new short sales** under any circumstances.
- **If event detector flags MAJOR or CRITICAL** on a held name: do NOT market-panic sell. Only execute if an **explicit authorized stop** in this file is breached. Otherwise hold for next hourly.
- **Tactical must use EXACT authorized stop prices** ($385 / $384.50 for AVGO; $109.50 / $109.00 for HOOD). No discretionary rounding.
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
2. **If 11:35+ hourly authorizes:** NVDA 1 share limit (priority 1), then GOOG 1 share (priority 2). Never META. Never thin ETFs without explicit hourly line. Never HOOD re-buy today.
3. Rebuild only after audit remains clean.

## Current Book
- QQQ 6 (~44.4%), VOO 2 (~14.3%), AVGO 3 (~12.2%), HOOD 3 (~3.5%)
- Cash ~$2,480 (~25.6%)
- Gross ~74.4%

## Safeguards For Next 60 Minutes
- Hold-only unless AVGO < $385 or HOOD < $109.50.
- No revenge trading after Fri META breach.
- No SOXX re-entry on bounce.
- No NVDA chase on a single green print — wait for explicit hourly authorization.
- If gross exposure drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
