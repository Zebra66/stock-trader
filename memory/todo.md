# Tactical Todo — Updated 2026-07-15 17:36Z (Wed 1:35 PM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Event detector NONE (prior upward SOXX CRITICAL cleared). Daily turnover 0/2 but WEEKLY budget spent. HOLD-ONLY. Do not invent trades.*

## TURNOVER: 0/2 trades used today, ~21.7% of 20% weekly budget used (WEEKLY EXCEEDED)
- Max **2** position-changing trades per day **and** max **20% equity** gross weekly turnover.
- Mon–Tue already used ~$2,095 notional (~21.7% of equity): HOOD/AVGO trail sells Mon + VOO buys Tue.
- **Weekly ceiling binds.** **No discretionary position-changing trades today.**
- **Only allowed actions:** AVGO trail and HOOD trail if breached (protective exits exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one.

## Event context — NONE
- **17:35Z:** Detector **NONE** — SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK; sector rotation NONE.
- Prior ~1:15Z CRITICAL was **upward** SOXX/SMH bounce — **cleared**. Do **not** keep `NO NEW BUYS — CRITICAL EVENT`.
- Soft morning / bounce afternoon is **not** CRITICAL. Do **not** write `NO NEW BUYS — CRITICAL EVENT` unless detector fires CRITICAL on a true crash (broad SPY/QQQ down).
- **Still hold-only** for process reasons (weekly TO + caps), not event response.
- If detector returns CRITICAL on a **true crash** later: hold existing; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sell of core ETFs. Do not invent HARD_LOCK from multi-day UP gaps.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.5%) — **do not flip regime today**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,673 / $1,594 / ~$29,000
- **Gross long exposure:** **~83.5%** | Target band **75–90%** | Cash **~16.5%** (above 10% but **cap-bound + weekly budget** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. Event detector NONE. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.
- **1D P&L:** ~–0.1% vs Tue last_equity (soft open, partial recovery).

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$133** → **cannot buy 1 VOO** (~$692).
- QQQ 45% cap room ~**$59** → **cannot buy 1 QQQ** (~$716).
- **Weekly turnover already ~21.7% > 20% budget** → no discretionary buys even though daily is 0/2.
- Chip beta blocked: **TSMC ~Thu Jul 16** + **NVDA four-gate 1/4** (QQQ ~$715.5 < $716 FAIL; NVDA ~$209.1 ≥ $209 PASS; SOXX ~$551 < $562 FAIL; no CRITICAL PASS). **No NVDA today.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- **Do not force "cash ≤10%" deploys that invent trades.**

## Ranked Execution Priority
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades.** Weekly budget binds.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Weight ~28.6% (4 shares). Config cap VOO **30%**. Cap room < 1 share (~$133 room vs ~$692/share).
- **No VOO buys today.** No VOO stop. No VOO full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.4%, within 45% cap. Cap room ~$59 — **cannot add 1 share**.
- Soft/mixed day; core anchor. No stop. No action. Do not panic-sell softness or chase bounce.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$392.5, unrealized ~+5.5%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- Buffer ~3.2% — **do NOT lower or tighten the trail** this session.
- Do **NOT** re-buy AVGO without a fresh hourly authorization (none given). Weekly budget also blocks.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$115.9, unrealized ~+14.2%.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Buffer ~6.8%. Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail. Do not tighten. App/blockchain headlines are background only.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (TSMC WEEK + WEEKLY TURNOVER + GATES 1/4)
- Live ~$209.1. Gates: **QQQ FAIL** (~$715.5) | **NVDA PASS** (~$209.1) | **SOXX FAIL** (~$551) | no CRITICAL PASS → **1/4**.
- Additional blockers: (1) **TSMC earnings ~Thu Jul 16** sector binary; (2) weekly turnover **already over 20%**.
- Do not chase semi bounce. Reassess only **post-TSMC** with fresh hourly auth + all four gates + budget headroom.

### GOOG — NO ENTRY
- No edge. Weekly budget / process block.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- TSMC risk; bounce is not a gate pass (~$551 << $562). Market orders prohibited even if later authorized.

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
- No revenge trading. No SOXX/NVDA chase on green prints or bounce.
- No "use the cash" inventiveness — weekly budget + caps bind.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.** Soft prints / bounce are not a stop-tightening signal.
- After weekly budget spent: only protective exits allowed.
- Cancel any unexpected open orders older than this cycle.
- **Do not invent HARD_LOCK from multi-day detector artifacts or upward CRITICAL spikes.**

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.6%), AVGO 2 (~8.1%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.5%)
- Gross ~83.5%
