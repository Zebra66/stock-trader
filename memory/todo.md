# Tactical Todo — Updated 2026-07-15 13:42Z (Wed ~9:40 AM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Detector labeled CRITICAL on multi-day UP gap (NOT a crash). Daily turnover 0/2 but WEEKLY budget spent. HOLD-ONLY.*

## TURNOVER: 0/2 trades used today, ~21.5% of 20% weekly budget used (WEEKLY EXCEEDED)
- Max **2** position-changing trades per day **and** max **20% equity** gross weekly turnover.
- Mon–Tue already used ~$2,095 notional (~21.5% of equity): HOOD/AVGO trail sells Mon + VOO buys Tue.
- **Weekly ceiling binds.** **No discretionary position-changing trades today.**
- **Only allowed actions:** AVGO trail and HOOD trail if breached (protective exits exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one from the false multi-day UP CRITICAL label.

## Event context — labeled CRITICAL but NOT a crash
- 13:40Z detector priorTimestamp = Mon 19:30Z → Wed open: SOXX +2.8%, SMH +2.3%, QQQ +1.5% (all **UP**). Session 9:35Z was MINOR.
- **NO NEW BUYS — CRITICAL EVENT** (also already bound by weekly turnover + caps + TSMC week).
- **Do NOT market-panic sell** QQQ/VOO/AVGO/HOOD. Stops are far from market.
- Only execute if an **explicit authorized stop** below is breached.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.6%) — **do not flip regime today**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,717 / $1,594 / ~$29,119
- **Gross long exposure:** **~83.6%** | Target band **75–90%** | Cash **~16.4%** (above 10% but **cap-bound + weekly budget** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$141** → **cannot buy 1 VOO** (~$694).
- QQQ 45% cap room ~**$46** → **cannot buy 1 QQQ** (~$721).
- **Weekly turnover already ~21.5% > 20% budget** → no discretionary buys even though daily is 0/2.
- Chip beta blocked: **TSMC ~Thu Jul 16** (even though NVDA price ~$212 ≥ $209). **No NVDA today.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- **Do not force "cash ≤10%" deploys that invent trades.**

## Ranked Execution Priority
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades.** Weekly budget binds.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Weight ~28.5% (4 shares). Config cap VOO **30%**. Cap room < 1 share.
- **No VOO buys today.** No VOO stop. No VOO full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.5%, within 45% cap. Cap room ~$46 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$396.5, unrealized ~+6.6%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- Do **NOT** re-buy AVGO without a fresh hourly authorization (none given). Weekly budget also blocks.
- Do not lower the trail. Do not tighten.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$114.6, unrealized ~+12.9%.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail. Do not tighten.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (TSMC WEEK + WEEKLY TURNOVER)
- Live ~$212. Price gates roughly PASS, but **still NO ORDER**.
- Blockers: (1) **TSMC earnings ~Thu Jul 16** sector binary; (2) weekly turnover **already over 20%**.
- Do not chase. Reassess only **post-TSMC** with fresh hourly auth + all four gates + budget headroom.

### GOOG — NO ENTRY
- No edge. Weekly budget / process block.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- TSMC risk. Market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO speculative new positions.** Only authorized residual action: AVGO/HOOD trails.
- **No after-hours / pre-market equity orders.**
- **No same-day round trips.**
- **Conserve daytrades** (0 of 3). Protective stop sells on overnight holdings OK.
- **No new short sales.**
- **If a true crash develops:** hold existing; only execute authorized stops if breached. Do not market-panic sell core ETFs.
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
- Do **not** treat multi-day UP CRITICAL as a reason to liquidate winners.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.**
- After weekly budget spent: only protective exits allowed.
- Cancel any unexpected open orders older than this cycle.

## Current Book
- QQQ 6 (~44.5%), VOO 4 (~28.5%), AVGO 2 (~8.2%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.4%)
- Gross ~83.6%
