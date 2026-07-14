# Tactical Todo — Updated 2026-07-14 19:35Z (Tue 3:35 PM ET hourly)
*Market OPEN (final ~25 min). Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Event detector NONE. Turnover 2/2. HOLD-ONLY through close.*

## TURNOVER: 2/2 trades used today, ~14.2% of 20% weekly budget used
- Max **2** position-changing trades today. Protective stop exits on overnight holdings are exempt.
- VOO #1 used trade #1 (filled 14:12Z @ $689.49). **VOO #2 used trade #2 (filled 14:41Z @ $691.15).** Discretionary turnover **exhausted** for the day.
- **Only allowed actions now:** AVGO trail and HOOD trail if breached. Nothing else.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one.

## Event context — NONE (not CRITICAL)
- 19:35Z: SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK. Sector rotation NONE.
- **No new BUY authorizations** (turnover 2/2 + cap-bound cash + TSMC week on chips).
- If detector later returns **CRITICAL:** write `NO NEW BUYS — CRITICAL EVENT`; hold existing; only execute authorized stops if breached. Do not market-panic sell core ETFs.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.5%) — **do not flip regime today**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,687 / $1,594 / ~$29,036
- **Gross long exposure:** **~83.5%** | Target band **75–90%** | Cash **~16.5%** (above 10% but **cap-bound** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session (final minutes). Event detector NONE. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$141** → **cannot buy 1 VOO** (~$691).
- QQQ 45% cap room ~**$39** → **cannot buy 1 QQQ** (~$720).
- Chip beta blocked: **TSMC ~Thu Jul 16** (even though NVDA price gates 4/4 PASS ~$211.7). **No NVDA today.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- Turnover 2/2 also blocks discretionary adds.
- **Do not force end-of-day deploys.**

## Ranked Execution Priority
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades.** Turnover **2/2 — stop.**

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Weight ~28.5% (4 shares). Config cap VOO **30%**. Cap room < 1 share.
- **Filled today:** 1 @ **$689.49** and 1 @ **$691.15**. Book is 4 shares.
- **No further VOO buys today.** No VOO stop. No VOO full exit.
- **If you bought VOO today, you may NOT sell that VOO today.**

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.6%, within 45% cap. Cap room ~$39 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$391.3, unrealized ~+5.2%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- 24h cooldown from Mon 19:30Z sell has **expired**, but **still do NOT re-buy AVGO** without a fresh hourly authorization (none given). Turnover 2/2 also blocks.
- Do not lower the trail. Do not tighten.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$112.7, unrealized ~+11%.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail. Do not tighten.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (TSMC WEEK + TURNOVER)
- Live ~$211.7. Price gates **4/4 PASS**, but **still NO ORDER**.
- Blockers: (1) **TSMC earnings ~Thu Jul 16** sector binary; (2) turnover **2/2 exhausted**.
- Do not chase. Reassess only **post-TSMC** with fresh hourly auth + all four gates.

### GOOG — NO ENTRY
- Soft 1w (–1.8%). No edge. Caps/turnover block anyway.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- TSMC risk; turnover exhausted. Market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO speculative new positions.** Only authorized residual action: AVGO/HOOD trails.
- **No after-hours / pre-market equity orders.** Convert any overnight idea into next regular-session triggers only after next hourly.
- **No same-day round trips.** Do not sell today's VOO adds. Do not sell QQQ/VOO core.
- **Conserve daytrades** (0 of 3). Protective stop sells on overnight holdings OK.
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

## Safeguards For Next 60 Minutes / Through Close
- **Hold-only** except AVGO/HOOD trails if breached.
- No revenge trading. No SOXX/NVDA chase on green prints (even if NVDA > $209).
- No end-of-day "use the cash" inventiveness.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.**
- After turnover 2/2: only protective exits allowed.
- Cancel any unexpected open orders older than this cycle.

## Current Book
- QQQ 6 (~44.6%), VOO 4 (~28.5%), AVGO 2 (~8.1%), HOOD 2 (~2.3%)
- Cash ~$1,594 (~16.5%)
- Gross ~83.5%
