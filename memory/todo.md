# Tactical Todo — Updated 2026-07-13 19:35Z (Monday 3:35 PM ET)
*Final hourly of session. AVGO $385 stop already filled (1 share @ $385.02 at 19:30Z). Remaining book: QQQ 6 / VOO 2 / AVGO 2 / HOOD 2. Soft close — protective trails only; NO new buys.*

## Current State
- **Regime:** **neutral** (not defensive panic, not offensive catch-up)
- **Live book:** QQQ 6, VOO 2, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,605 / $2,975 / ~$30,500
- **Gross long exposure:** **~69.0%** | Target band **65–80%** | Cash **~31.0%**
- **Daytrade count:** **0** (confirmed). Conserve — do not open positions you may need to reverse today.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN → close ~16:00 ET. Soft afternoon. Hormuz blockade reimposed (oil bid); semis weaker (NVDA ~$204, SOXX ~$552). TSMC earnings ~Thu Jul 16 elevates semi risk.
- **HARD_LOCK:** inactive (`active: false`). META remains in `bannedSymbols`.
- **Audit:** clean (19:35Z). No unauthorized positions. No concentration breaches.

## Position Instructions — Mon Jul 13 close + overnight hold

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$57 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### VOO — HOLD 2 — DO NOT SELL OR ADD
- Weight ~14.3%. Adding 1 share (~$688) would breach 20% non-QQQ ETF cap.
- Broad-market anchor. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD — DO NOT RE-BUY WITHIN 24H
- **Sold 1 share today at 19:30Z via limit $384.50 (filled @ $385.02).** Remaining 2 avg $371.95, live ~$385.5, unrealized ~+3.7%.
- **Authorized overnight trail for remaining risk:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. If triggered, hold remaining 1.
- **Do NOT add or re-buy AVGO within 24 hours** (hard cooldown) unless hourly explicitly authorizes re-entry.
- No other AVGO action. Do not lower the trail.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD — DO NOT RE-BUY TODAY
- **Already sold 3 today:** 2 @ $110.00 (13:50Z) + 1 @ $109.33 (17:40Z). Remaining 2 avg $101.50, unrealized ~+7.7%.
- **Authorized trail for remaining risk:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. If triggered, hold remaining 1.
- Do NOT add HOOD today. Do NOT re-buy HOOD today (same-day anti-churn; code-enforced after today's sells).
- No other HOOD action.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`.
- CODE-ENFORCED reject on any BUY. No re-entry.

### NVDA — NO ENTRY INTO CLOSE / OVERNIGHT (GATE FAIL — 1/4)
- Live ~$204. **Required ≥ $209 with firm structure — FAIL**.
- Other gates: QQQ ≥ $716 **FAIL** (~711); SOXX ≥ $562 **FAIL** (~$552); no CRITICAL PASS.
- Until hourly explicitly authorizes in a **regular session**: **no order**. Do not chase a bounce. Do not average into weakness. Do **not** place after-hours orders.

### GOOG — NO ENTRY INTO CLOSE / OVERNIGHT
- Soft 1w (~–3.5%). No authorization.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Soft 1m (~–12.1%), thin relative to NVDA, TSMC risk this week. No re-entry.
- Illiquid gate: TradeCount often low — market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO DISCRETIONARY BUYS into close or after-hours.** Only authorized actions are the AVGO $380 trail and HOOD $108 trail if triggered.
- **No after-hours / pre-market equity orders.** Convert any idea into next regular-session review.
- **Exact cash/deploy blocker:** Geo risk (Hormuz blockade + oil spike) + NVDA four-gate 1/4 + TSMC ~Thu sector event + final minutes of session. Gross ~69% inside 65–80% — no urgency to deploy.
- **No same-day round trips.** HOOD was sold today → may NOT buy HOOD back today. AVGO was sold today → may NOT buy AVGO back today. If you buy any symbol today, you may NOT sell it today.
- **Conserve daytrades** (0 of 3 used). Protective stop sells on overnight holdings are OK and do not create a daytrade.
- **No new short sales** under any circumstances.
- **If event detector flags MAJOR or CRITICAL** on a held name: do NOT market-panic sell. Only execute if an **explicit authorized stop** in this file is breached. Otherwise hold for next hourly.
- **Tactical must use EXACT authorized stop prices** ($380.00 / $379.50 for AVGO; $108.00 / $107.50 for HOOD). No discretionary rounding. Do not lower stops to avoid them.
- **Order Submission Method — ABSOLUTE REQUIREMENT:** Use ONLY `bun run src/tools/alpaca_cli.ts submit-order`. Direct `fetch`/`curl`/SDK bypass of guards is prohibited.
- **Limit orders only for thin names:** SOXX, EIS, SHLD, QTUM, ARKX, GLD (none authorized today).
- **Illiquid gate:** If TradeCount < 5 or volume anomalously low on a candidate, do not market-buy; defer.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤ 45% | single stock ≤ 15% | non-QQQ ETF ≤ 20%
- Current: all within caps. QQQ near max. VOO cannot add 1 share.

## Symbol Ban Guard (Code-Enforced)
- `bannedSymbols: ["META"]` — BUY rejected regardless of lock active state.

## Today's Deployment Queue
1. **Into close / overnight:** AVGO trail if $380 breached; HOOD trail if $108 breached. No new buys. No AVGO/HOOD re-entry today.
2. **If later hourly authorizes (Tue+ regular session only):** NVDA 1 share limit (priority 1), then GOOG 1 share (priority 2). Never META. Never thin ETFs without explicit hourly line. Never HOOD re-buy today. AVGO re-entry only after 24h cooldown and explicit hourly line.
3. Rebuild only after audit remains clean.

## Current Book
- QQQ 6 (~44.4%), VOO 2 (~14.3%), AVGO 2 (~8.0%), HOOD 2 (~2.3%)
- Cash ~$2,975 (~31.0%)
- Gross ~69.0%

## Safeguards For Next 60 Minutes / Into Close
- Hold-only unless AVGO < $380 or HOOD < $108.
- No revenge trading after Fri META breach.
- No SOXX re-entry on bounce.
- No NVDA chase on a single green print — wait for explicit hourly authorization AND all four gates in regular session.
- If gross exposure drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels** to "avoid" a stop; execute exactly if breached.
- **After regular-session close:** no equity orders. Wait for next open / next hourly.

## Next Open Notes (for Tue tactical until first hourly)
- Default: **HOLD** QQQ/VOO/AVGO/HOOD. Keep same trails if still open.
- No fresh buys until first hourly of the day reassesses gates and geo tape.
- META still banned.
