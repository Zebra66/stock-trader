# Tactical Todo — Updated 2026-07-15 15:36Z (Wed 11:35 AM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Event detector NONE. Daily turnover 0/2 but WEEKLY budget spent. HOLD-ONLY. Prior 14:40Z CRITICAL buy-suspension CLEARED by hourly reassessment.*

## TURNOVER: 0/2 trades used today, ~21.6% of 20% weekly budget used (WEEKLY EXCEEDED)
- Max **2** position-changing trades per day **and** max **20% equity** gross weekly turnover.
- Mon–Tue already used ~$2,095 notional (~21.6% of equity): HOOD/AVGO trail sells Mon + VOO buys Tue.
- **Weekly ceiling binds.** **No discretionary position-changing trades today.**
- **Only allowed actions:** AVGO trail and HOOD trail if breached (protective exits exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one.

## Event context — NONE (hourly reassessment)
- **15:35Z:** Detector **NONE** — SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK; sector rotation NONE.
- Prior 14:40Z tactical CRITICAL (SOXX/SMH soft multi-day print) is **cleared**. Not a true crash. Do **not** keep `NO NEW BUYS — CRITICAL EVENT` active.
- **Still hold-only** for process reasons (weekly TO + caps), not event response.
- If detector returns CRITICAL on a **true crash** later: hold existing; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sell of core ETFs. Do not invent HARD_LOCK from multi-day UP gaps.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.5%) — **do not flip regime today**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,672 / $1,594 / ~$28,995
- **Gross long exposure:** **~83.5%** | Target band **75–90%** | Cash **~16.5%** (above 10% but **cap-bound + weekly budget** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. Event detector NONE. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$131** → **cannot buy 1 VOO** (~$693).
- QQQ 45% cap room ~**$57** → **cannot buy 1 QQQ** (~$716).
- **Weekly turnover already ~21.6% > 20% budget** → no discretionary buys even though daily is 0/2.
- Chip beta blocked: **TSMC ~Thu Jul 16** + **NVDA four-gate 2/4** (QQQ ~$716 FAIL gate ≥$716; SOXX ~$551 < $562 FAIL; NVDA ~$209.5 PASS; no CRITICAL PASS). **No NVDA today.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- **Do not force "cash ≤10%" deploys that invent trades.**

## Ranked Execution Priority
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades.** Weekly budget binds.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Weight ~28.7% (4 shares). Config cap VOO **30%**. Cap room < 1 share (~$131 room vs ~$693/share).
- **No VOO buys today.** No VOO stop. No VOO full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$57 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$390.2, unrealized ~+4.9%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- Do **NOT** re-buy AVGO without a fresh hourly authorization (none given). Weekly budget also blocks.
- Do not lower the trail. Do not tighten. Apple/AI headlines are background only — not an add signal under weekly TO ceiling.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$115.6, unrealized ~+13.9%.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail. Do not tighten.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (TSMC WEEK + WEEKLY TURNOVER + GATES 2/4)
- Live ~$209.5. Gates: **QQQ FAIL** (~$716) | NVDA PASS | **SOXX FAIL** (~$551 < $562) | no CRITICAL PASS → **2/4 only**.
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
- **Do not invent HARD_LOCK from multi-day detector artifacts.**
- Prior CRITICAL buy-suspension was **cleared** by this hourly — do not re-apply unless detector fires CRITICAL again on a true crash.

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.7%), AVGO 2 (~8.1%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.5%)
- Gross ~83.5%
