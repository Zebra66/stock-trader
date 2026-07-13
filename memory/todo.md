# Tactical Todo — Updated 2026-07-13 17:40Z (Monday 1:40 PM ET)
*Hourly reset: event detector still NONE. Neutral hold. NVDA four-gate review FAILED (QQQ ~713 FAIL, NVDA ~$204 FAIL, SOXX ~$554 FAIL). No new buys this hour.*
* Tactical update: HOOD 1-share trail stop executed at 17:40Z after breaching $109.50 (1-min low $109.32; last trade ~$109.44). Remaining 2 HOOD hold with no active stop. AVGO $385 stop remains the only active protective sell.*

## Current State
- **Regime:** **neutral** (not defensive panic, not offensive catch-up)
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 2
- **Account equity / cash / BP:** ~$9,626 / $2,480 / ~$29,930
- **Gross long exposure:** **73.1%** | Target band **65–80%** | Cash **~26.9%**
- **Daytrade count:** **0** (confirmed). Conserve — do not open positions you may need to reverse today.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN. Soft afternoon after risk-off open. Hormuz blockade reimposed (Trump/shipper fees) still dominant; semis weaker (NVDA ~$204, SOXX ~$554). TSMC earnings ~Thu Jul 16 elevates semi risk.
- **HARD_LOCK:** inactive (`active: false`). META remains in `bannedSymbols`.
- **Audit:** clean (17:35Z). No unauthorized positions. No concentration breaches.

## Position Instructions — Mon Jul 13 (tactical :40 / :50)

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$54 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.3%. Adding 1 share (~$689) would breach 20% non-QQQ ETF cap.
- Broad-market anchor. No action.

### AVGO — HOLD 3 — DO NOT ADD — Trim if breaks $385
- Avg $371.95. Live ~$386.9. Still +~4.0% unrealized after soft chip tape. Cushion ~$1.9 to stop.
- **Authorized stop only:** SELL **1** share if price drops **below $385.00** with **limit $384.50**. If triggered, hold remaining 2.
- Do NOT add AVGO today (sector pressure + 1 share would approach/breach 15% stock cap near current price).
- **ANTI-CHURN:** AVGO was not bought today. Protective sell is allowed if stop hits.

### HOOD — HOLD 2 — DO NOT ADD — DO NOT RE-BUY TODAY
- **Already sold 2 today** at $110.00 (13:50Z trail) and **1 more at 17:40Z** after the price dropped below the authorized $109.50 trail (1-min low $109.32; last trade ~$109.44). Remaining 2 avg $101.50, unrealized ~+7.8%.
- **No active HOOD stop now.** Hold remaining 2 until next hourly authorizes an action.
- Do NOT add HOOD today. Do NOT re-buy HOOD today (same-day anti-churn; code-enforced after today's sell).
- No other HOOD action.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`.
- CODE-ENFORCED reject on any BUY. No re-entry.

### NVDA — NO ENTRY THIS HOUR (GATE FAIL — 1/4)
- Live ~$204.2. **Required ≥ $209 with firm structure — FAIL** (worse than 12:35).
- Other gates: QQQ ≥ $716 **FAIL** (~713); SOXX ≥ $562 **FAIL** (~$554); no CRITICAL PASS.
- Until hourly explicitly authorizes: **no order**. Do not chase a bounce. Do not average into weakness.

### GOOG — NO ENTRY THIS HOUR
- Soft 1w (~–3.0%). No authorization.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Soft 1m (~–11.9%), thin relative to NVDA, TSMC risk this week. No re-entry today.
- Illiquid gate: TradeCount often low — market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO DISCRETIONARY BUYS this hour.** Only authorized action remaining is the AVGO protective stop if $385 is breached.
- **Exact cash/deploy blocker:** Geo risk (Hormuz blockade reimposed) + NVDA four-gate 1/4 + TSMC ~Thu sector event. Gross 74.2% inside 65–80% — no urgency to deploy.
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
1. **This hour:** HOOD stop executed; remaining action = AVGO protective stop only if $385 breached. No new buys.
2. **If later hourly authorizes:** NVDA 1 share limit (priority 1), then GOOG 1 share (priority 2). Never META. Never thin ETFs without explicit hourly line. Never HOOD re-buy today.
3. Rebuild only after audit remains clean.

## Current Book
- QQQ 6 (~44.4%), VOO 2 (~14.3%), AVGO 3 (~12.1%), HOOD 2 (~2.3%)
- Cash ~$2,590 (~26.9%)
- Gross ~73.1%

## Safeguards For Next 60 Minutes
- Hold-only unless AVGO < $385. No active HOOD stop now.
- **HOOD stop already executed this cycle.**
- No revenge trading after Fri META breach.
- No SOXX re-entry on bounce.
- No NVDA chase on a single green print — wait for explicit hourly authorization AND all four gates.
- If gross exposure drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels** to "avoid" a stop; execute exactly if breached.
