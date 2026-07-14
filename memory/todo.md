# Tactical Todo — Updated 2026-07-14 20:12Z (Tue 4:12 PM ET — post-close)
*Market CLOSED. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Last detector NONE. Turnover 2/2 for the day. OVERNIGHT HOLD — no AH/pre-market orders.*

## MARKET CLOSED — NO EQUITY ORDERS
- Regular session ended 4:00 PM ET. **Do not place after-hours or pre-market equity orders.**
- Convert all instructions below into **next regular-session** triggers only (Wed open onward).
- Next discretionary reassessment: **Wed 9:35 AM ET hourly** (turnover resets; recompute caps).

## TURNOVER: 2/2 trades used today, ~14.2% of 20% weekly budget used
- Max **2** position-changing trades today. Protective stop exits on overnight holdings are exempt.
- VOO #1 used trade #1 (filled 14:12Z @ $689.49). **VOO #2 used trade #2 (filled 14:41Z @ $691.15).** Discretionary turnover **exhausted** for the day.
- **Only allowed actions next session (if market open):** AVGO trail and HOOD trail if breached. Nothing else until hourly resets budget.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one.

## Event context — NONE (not CRITICAL) at last print
- 19:12Z: SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held HOOD/QQQ/VOO OK. Sector rotation NONE.
- **No new BUY authorizations** (market closed + turnover 2/2 + cap-bound cash + TSMC week on chips).
- If detector returns **CRITICAL** at next open: write `NO NEW BUYS — CRITICAL EVENT`; hold existing; only execute authorized stops if breached. Do not market-panic sell core ETFs.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.5%) — **do not flip regime**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,687 / $1,594 / ~$29,036
- **Gross long exposure:** **~83.5%** | Target band **75–90%** | Cash **~16.5%** (above 10% but **cap-bound** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** **CLOSED**. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$141** → **cannot buy 1 VOO** (~$691).
- QQQ 45% cap room ~**$33–39** → **cannot buy 1 QQQ** (~$720).
- Chip beta blocked: **TSMC ~Thu Jul 16** (even though NVDA price gates 4/4 PASS ~$211.5). **No NVDA.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- **No after-hours "use the cash" deploys.**

## Ranked Execution Priority (next regular session only)
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades** until next hourly rewrites budget/room.
3. **Wed open:** wait for hourly before any discretionary buy even if turnover resets.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Weight ~28.5% (4 shares). Config cap VOO **30%**. Cap room < 1 share.
- **Filled today:** 1 @ **$689.49** and 1 @ **$691.15**. Book is 4 shares.
- **No VOO buys tonight or pre-market.** No VOO stop. No VOO full exit.
- **If you bought VOO today, you may NOT sell that VOO today** (session already closed; still no same-day round trip narrative).

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.6%, within 45% cap. Cap room insufficient for 1 share.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$391.4, unrealized ~+5.2%.
- **Authorized trail (regular session only):** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- 24h cooldown from Mon 19:30Z sell has **expired**, but **still do NOT re-buy AVGO** without a fresh hourly authorization (none given).
- Do not lower the trail. Do not tighten.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$112.7, unrealized ~+11%.
- **Authorized trail (regular session only):** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail. Do not tighten.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (TSMC WEEK)
- Live ~$211.5. Price gates **4/4 PASS**, but **still NO ORDER**.
- Blocker: **TSMC earnings ~Thu Jul 16** sector binary.
- Do not chase. Reassess only **post-TSMC** with fresh hourly auth + all four gates.

### GOOG — NO ENTRY
- No edge. Caps block core path anyway.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- TSMC risk. Market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO speculative new positions.** Only authorized residual action next session: AVGO/HOOD trails.
- **No after-hours / pre-market equity orders.**
- **No same-day round trips** on any future session for same-day opens.
- **Conserve daytrades** (0 of 3). Protective stop sells on overnight holdings OK next session.
- **No new short sales.**
- **If event detector returns CRITICAL:** hold existing; only execute authorized stops if breached. Write note. Do not market-panic sell.
- **Tactical must use EXACT authorized stop prices** ($380.00 / $379.50 AVGO; $108.00 / $107.50 HOOD).
- **Order path:** ONLY `bun run src/tools/alpaca_cli.ts submit-order`. No direct fetch/curl/SDK bypass.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤45%, **VOO ≤30%**, other ETFs ≤20%, stocks ≤15%.
- Pre-order any future VOO: `max_add_value = (0.30 * equity) - VOO_mv` must cover full share; currently **does not**.

## Symbol Ban Guard
- `bannedSymbols: ["META"]`

## Safeguards Overnight / Next Open
- **Hold-only** except AVGO/HOOD trails if breached in regular session.
- No revenge trading. No SOXX/NVDA chase on green prints (even if NVDA > $209).
- No end-of-day or AH "use the cash" inventiveness.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.**
- Cancel any unexpected open orders older than this cycle.

## Current Book
- QQQ 6 (~44.6%), VOO 4 (~28.5%), AVGO 2 (~8.1%), HOOD 2 (~2.3%)
- Cash ~$1,594 (~16.5%)
- Gross ~83.5%
