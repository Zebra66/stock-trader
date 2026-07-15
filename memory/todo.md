# Tactical Todo — Updated 2026-07-15 14:36Z (Wed 10:35 AM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Event detector NONE. Daily turnover 0/2 but WEEKLY budget spent. HOLD-ONLY.*

## TURNOVER: 0/2 trades used today, ~21.6% of 20% weekly budget used (WEEKLY EXCEEDED)
- Max **2** position-changing trades per day **and** max **20% equity** gross weekly turnover.
- Mon–Tue already used ~$2,095 notional (~21.6% of equity): HOOD/AVGO trail sells Mon + VOO buys Tue.
- **Weekly ceiling binds.** **No discretionary position-changing trades today.**
- **Only allowed actions:** AVGO trail and HOOD trail if breached (protective exits exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one.

## Event context — NONE (not CRITICAL)
- 14:35Z: SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK. Sector rotation NONE.
- Prior 10:20 CRITICAL was multi-day UP-gap artifact — **do not re-apply panic response**.
- **No new BUY authorizations** (weekly turnover spent + cap-bound cash + TSMC week on chips + NVDA SOXX gate FAIL).
- If detector later returns **CRITICAL** on a true crash: write `NO NEW BUYS — CRITICAL EVENT`; hold existing; only execute authorized stops if breached. Do not market-panic sell core ETFs.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.5%) — **do not flip regime today**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,685 / $1,594 / ~$29,032
- **Gross long exposure:** **~83.5%** | Target band **75–90%** | Cash **~16.5%** (above 10% but **cap-bound + weekly budget** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. Event detector NONE. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$131** → **cannot buy 1 VOO** (~$694).
- QQQ 45% cap room ~**$54** → **cannot buy 1 QQQ** (~$717).
- **Weekly turnover already ~21.6% > 20% budget** → no discretionary buys even though daily is 0/2.
- Chip beta blocked: **TSMC ~Thu Jul 16** + **SOXX ~$553 < $562 gate FAIL** (NVDA ~$210.6 ≥ $209 alone is not enough). **No NVDA today.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- **Do not force "cash ≤10%" deploys that invent trades.**

## Ranked Execution Priority
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades.** Weekly budget binds.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Weight ~28.7% (4 shares). Config cap VOO **30%**. Cap room < 1 share (~$131 room vs ~$694/share).
- **No VOO buys today.** No VOO stop. No VOO full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$54 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$391.6, unrealized ~+5.3%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- Do **NOT** re-buy AVGO without a fresh hourly authorization (none given). Weekly budget also blocks.
- Do not lower the trail. Do not tighten. EU regulatory headlines are background only.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$114.5, unrealized ~+12.8%.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail. Do not tighten.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (TSMC WEEK + WEEKLY TURNOVER + SOXX GATE FAIL)
- Live ~$210.6. Gates: QQQ PASS | NVDA PASS | **SOXX FAIL** (~$553 < $562) | no CRITICAL PASS → **3/4 only**.
- Additional blockers: (1) **TSMC earnings ~Thu Jul 16** sector binary; (2) weekly turnover **already over 20%**.
- Do not chase. Reassess only **post-TSMC** with fresh hourly auth + all four gates + budget headroom.

### GOOG — NO ENTRY
- No edge. Weekly budget / process block.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- TSMC risk; soft print. Market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO speculative new positions.** Only authorized residual action: AVGO/HOOD trails.
- **No after-hours / pre-market equity orders.**
- **No same-day round trips.**
- **Conserve daytrades** (0 of 3). Protective stop sells on overnight holdings OK.
- **No new short sales.**
- **If event detector returns CRITICAL on a true crash:** hold existing; only execute authorized stops if breached. Write note. Do not market-panic sell.
- **Tactical must use EXACT authorized stop prices** ($380.00 / $379.50 AVGO; $108.00 / $107.50 HOOD).
- **Order path:** ONLY `bun run src/tools/alpaca_cli.ts submit-order`. No direct fetch/curl/SDK bypass.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤45%, **VOO ≤30%**, other ETFs ≤20%, stocks ≤15%.
- Pre-order any future VOO: `max_add_value = (0.30 * equity) - VOO_mv` must cover full share; currently **does not**.

## Symbol Ban Guard
- `bannedSymbols: ["META"]`

## Safeguards For Next 60 Minutes
- **Hold-only** except AVGO/HOOD trails if breached.
- No revenge trading. No SOXX/NVDA chase on green prints (even if NVDA > $209).
- No "use the cash" inventiveness — weekly budget + caps bind.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.**
- After weekly budget spent: only protective exits allowed.
- Cancel any unexpected open orders older than this cycle.
- Do **not** invent HARD_LOCK from multi-day UP detector artifacts.

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.7%), AVGO 2 (~8.1%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.5%)
- Gross ~83.5%
