# Tactical Todo — Updated 2026-07-13 17:35Z (Monday 1:35 PM ET)
*Hourly reset: event detector still NONE. Neutral hold. NVDA four-gate review FAILED (QQQ ~713 FAIL, NVDA ~$204 FAIL, SOXX ~$554 FAIL). No new buys this hour.*
* Prior: HOOD $111 trail filled 13:50Z (sold 2 @ $110). No fills since 16:35Z. HOOD live ~$109.6 — trail $109.50 is LIVE-ACTIVE.*

## Current State
- **Regime:** **neutral** (not defensive panic, not offensive catch-up)
- **Live book:** QQQ 6, VOO 2, AVGO 3, HOOD 3
- **Account equity / cash / BP:** ~$9,626 / $2,480 / ~$29,930
- **Gross long exposure:** **74.2%** | Target band **65–80%** | Cash **~25.8%**
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

### HOOD — HOLD 3 — DO NOT ADD — DO NOT RE-BUY TODAY
- **Already sold 2 today** at $110.00 (13:50Z trail). Remaining 3 avg $101.50, live ~$109.6, unrealized ~+8.0%.
- **Trail stop (LIVE-ACTIVE — only ~$0.10 above):** SELL **1** share if price drops **below $109.50** with **limit $109.00**. If triggered, hold remaining 2.
- Do NOT add HOOD today. Do NOT re-buy HOOD today (same-day anti-churn; code-enforced after today's sell).
- **Execute exactly if breached** — do not wait for a larger drop or "confirmation."
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
- **NO DISCRETIONARY BUYS this hour.** Only authorized actions are protective stops on AVGO and HOOD.
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
1. **This hour:** NONE. Hold + protective stops only.
2. **If later hourly authorizes:** NVDA 1 share limit (priority 1), then GOOG 1 share (priority 2). Never META. Never thin ETFs without explicit hourly line. Never HOOD re-buy today.
3. Rebuild only after audit remains clean.

## Current Book
- QQQ 6 (~44.4%), VOO 2 (~14.3%), AVGO 3 (~12.1%), HOOD 3 (~3.4%)
- Cash ~$2,480 (~25.8%)
- Gross ~74.2%

## Safeguards For Next 60 Minutes
- Hold-only unless AVGO < $385 or HOOD < $109.50.
- **HOOD trail is live-active** (~$0.10 cushion) — execute exactly if breached.
- No revenge trading after Fri META breach.
- No SOXX re-entry on bounce.
- No NVDA chase on a single green print — wait for explicit hourly authorization AND all four gates.
- If gross exposure drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels** to "avoid" a stop; execute exactly if breached.
