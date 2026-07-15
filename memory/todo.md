# Tactical Todo — Updated 2026-07-15 14:20Z (Wed ~10:20 AM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Detector labeled CRITICAL on multi-day UP gap (NOT a crash). Daily turnover 0/2 but WEEKLY budget spent. HOLD-ONLY.*

## TURNOVER: 0/2 trades used today, ~21.6% of 20% weekly budget used (WEEKLY EXCEEDED)
- Max **2** position-changing trades per day **and** max **20% equity** gross weekly turnover.
- Mon–Tue already used ~$2,095 notional (~21.6% of equity): HOOD/AVGO trail sells Mon + VOO buys Tue.
- **Weekly ceiling binds.** **No discretionary position-changing trades today.**
- **Only allowed actions:** AVGO trail and HOOD trail if breached (protective exits exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- No HARD_LOCK. Do not invent one from the false multi-day UP CRITICAL label.

## Event context — labeled CRITICAL but NOT a crash
- 14:18Z detector priorTimestamp = Mon 19:30Z → Wed session: SOXX +1.5%, SMH +1.8%, QQQ +1.4% (all **UP**).
- **NO NEW BUYS — CRITICAL EVENT** (also already bound by weekly turnover + caps + TSMC week).
- **Do NOT market-panic sell** QQQ/VOO/AVGO/HOOD. Stops are far from market.
- Only execute if an **explicit authorized stop** below is breached.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.6%) — **do not flip regime today**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,711 / $1,594 / ~$29,105
- **Gross long exposure:** **~83.6%** | Target band **75–90%** | Cash **~16.4%** (above 10% but **cap-bound + weekly budget** — see blocker).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. TSMC earnings ~Thu Jul 16 (tomorrow).
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Exact cash blocker (mandatory — do not invent deploys)
- VOO 30% cap room ~**$136** → **cannot buy 1 VOO** (~$694).
- QQQ 45% cap room ~**$46** → **cannot buy 1 QQQ** (~$721).
- **Weekly turnover already ~21.6% > 20% budget** → no discretionary buys even though daily is 0/2.
- Chip beta blocked: **TSMC ~Thu Jul 16** + SOXX ~$560 **below $562 gate** (even though NVDA price ~$211.5 ≥ $209). **No NVDA today.**
- Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — no edge / illiquid. **Do not buy.**
- **Do not force "cash ≤10%" deploys that invent trades.**

## Ranked Execution Priority
1. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
2. **Everything else:** **no trades.** Weekly budget binds.

## Position Instructions

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.5%, within 45% cap. Cap room ~$46 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### VOO — HOLD 4 — DO NOT SELL OR ADD
- Weight ~28.6%, near 30% symbol cap. Cap room ~$136 — **cannot add 1 share** (~$694).
- Broad-market anchor. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Live ~$393.7, unrealized ~+5.9%. Avg entry $371.95.
- **Authorized protective trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. If triggered, hold remaining 1.
- Do NOT add AVGO. Do NOT re-buy without fresh hourly authorization.
- Do not lower the trail. Trail is far from market (~3.5% buffer).

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$114.3, unrealized ~+12.6%. Avg entry $101.50.
- **Authorized protective trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. If triggered, hold remaining 1.
- Do NOT add HOOD. Do NOT re-buy without fresh hourly authorization.
- Do not lower the trail. Trail far from market (~5.5% buffer).

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active in `memory/.trading_lock.json`.
- CODE-ENFORCED reject on any BUY. No re-entry.

### NVDA — NO ENTRY (TSMC WEEK + SOXX GATE FAIL + WEEKLY TO)
- Live ~$211.5. Price ≥ $209 **PASS**, QQQ ≥ $716 **PASS**, SOXX ≥ $562 **FAIL** (~$560), no true crash **PASS**.
- **TSMC earnings ~Thu Jul 16** + weekly turnover exceeded → **no order**.
- Do not chase. Do not average. Wait for post-TSMC hourly authorization.

### GOOG — NO ENTRY
- Soft relative edge; weekly budget binds. No authorization.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Soft 1m (~–11%), TSMC risk tomorrow. No re-entry.
- Illiquid gate: TradeCount often low — market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO DISCRETIONARY BUYS today.** Only authorized actions are the AVGO $380 trail and HOOD $108 trail if triggered.
- **No after-hours / pre-market equity orders.**
- **Weekly turnover exceeded** — refuse position-changing trades beyond protective exits.
- **No same-day round trips.** If you buy any symbol today, you may NOT sell it today (and you should not buy at all).
- **Conserve daytrades** (0 of 3 used). Protective stop sells on overnight holdings are OK.
- **No new short sales** under any circumstances.
- **If event detector flags MAJOR or CRITICAL** on a held name: do NOT market-panic sell. Only execute if an **explicit authorized stop** in this file is breached. Otherwise hold for next hourly. Note: multi-day UP gap CRITICAL is **not** a crash.
- **Tactical must use EXACT authorized stop prices** ($380.00 / $379.50 for AVGO; $108.00 / $107.50 for HOOD). No discretionary rounding. Do not lower stops to avoid them.
- **Order Submission Method — ABSOLUTE REQUIREMENT:** Use ONLY `bun run src/tools/alpaca_cli.ts submit-order`. Direct `fetch`/`curl`/SDK bypass of guards is prohibited.
- **Limit orders only for thin names:** SOXX, EIS, SHLD, QTUM, ARKX, GLD (none authorized today).
- **Illiquid gate:** If TradeCount < 5 or volume anomalously low on a candidate, do not market-buy; defer.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced via config/trading.json)
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, single stock ≤15%.
- Current: all within caps. QQQ near max. VOO near 30% — **no room for 1-share add**.

## Symbol Ban Guard (Code-Enforced)
- `bannedSymbols: ["META"]` — BUY rejected regardless of lock active state.

## Today's Deployment Queue
1. **Now:** AVGO trail if $380 breached; HOOD trail if $108 breached. **No new buys.**
2. **Not authorized:** NVDA, GOOG, SOXX, thin ETFs, META, AVGO/HOOD adds.
3. Rebuild only after audit remains clean **and** weekly budget resets / post-TSMC hourly reassesses.

## Current Book
- QQQ 6 (~44.5%), VOO 4 (~28.6%), AVGO 2 (~8.1%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.4%)
- Gross ~83.6%

## Safeguards For Next 60 Minutes
- Hold-only unless AVGO < $380 or HOOD < $108.
- No revenge trading after Fri META breach.
- No SOXX re-entry on bounce.
- No NVDA chase — wait for post-TSMC hourly authorization AND all four gates + budget.
- If gross exposure drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels** to "avoid" a stop; execute exactly if breached.
- **Ignore false multi-day UP CRITICAL** as a sell signal for core ETFs.

## Next Cycle Notes
- Default remains **HOLD** until post-TSMC (Thu+) or weekly budget headroom + cap room reappear.
- META still banned.
