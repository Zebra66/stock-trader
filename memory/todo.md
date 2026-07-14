# Tactical Todo — Updated 2026-07-14 15:10Z (Tue 11:10 AM ET tactical)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Event detector MAJOR. Turnover 2/2. VOO #2 filled. No speculative positions.*

<!-- Autonomous override applied at 2026-07-14 15:10Z due to MAJOR event (SOXX/SMH up sharply). No protective sells triggered; buy conditions already suspended. -->

## TURNOVER: 2/2 trades used today, ~14.2% of 20% weekly budget used
- Max **2** position-changing trades today. Protective stop exits on overnight holdings are exempt.
- VOO #1 used trade #1 (filled 14:12Z @ $689.49). **VOO #2 used trade #2 (filled 14:41Z @ $691.15).** Discretionary turnover exhausted for the day.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- Fresh 14:35Z event detector classification is **MINOR**. Hourly-authorized 2nd VOO cash deploy is **ACTIVE** (limit order only). Speculative adds stay off.

## Event context — NONE (not CRITICAL)
- 14:40Z: SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK.
- Speculative new BUY authorizations remain suspended (NVDA/GOOG/SOXX/thin ETFs).
- VOO #2 cash deploy filled; no further discretionary buys today.

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~83.5%)
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,685 / $1,594 / ~$29,900
- **Gross long exposure:** **~83.5%** | Target band **75–90%** | Cash **~16.5%** (still above 10% target; cap-bound).
- **Daytrade count:** **0**. No same-day round trips.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. Event detector NONE. Hormuz/oil risk background. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Ranked Execution Priority
1. **VOO #2 — FILLED.** No further discretionary buys today.
2. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
3. **Everything else:** no discretionary buys. Turnover **2/2 — stop**.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD (turnover 2/2)
- Weight ~28.5% (4 shares). **Config cap is VOO 30%** (not 20%). Near cap; no more VOO buys today.
- **Filled today:** 2 shares total — 1 @ **$689.49** (limit $689.57; 14:12Z) and 1 @ **$691.15** (limit $691.17; 14:41Z). Book is now 4 shares.
- **No further VOO buys today.** Discretionary turnover exhausted.
- **HOLD existing 4.** No VOO stop. No VOO full exit. **If you buy VOO today, you may NOT sell that VOO today.**

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.6%, within 45% cap. Cap room ~$44 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$394, unrealized ~+5.9%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- **Do NOT re-buy AVGO** until after **2026-07-13 19:30Z + 24h** (~Tue 19:30Z) and only with fresh hourly authorization. Cooldown still active until ~19:30Z.
- Do not lower the trail.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$112, unrealized ~+10%.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (GATE FAIL — 3/4)
- Live ~$207. **Required ≥ $209 firm — FAIL**.
- Other gates: QQQ ≥ $716 PASS; SOXX ≥ $562 PASS; no CRITICAL PASS.
- **No order.** Do not chase. TSMC week risk.

### GOOG — NO ENTRY
- Soft 1w. Prefer VOO for cash deploy.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- TSMC risk; VOO path preferred. Illiquid relative to NVDA — market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO speculative new positions** (NVDA/GOOG/SOXX/META/thin ETFs). Only authorized: VOO limit add #2 + AVGO/HOOD trails.
- **No after-hours / pre-market equity orders.**
- **Exact cash blocker after VOO #2 (or if VOO #2 cannot fill):** VOO room only 1 share under 30% cap; QQQ maxed; chip beta blocked by TSMC + NVDA gate. Do not invent deploys.
- **No same-day round trips.** If you buy VOO today, you may NOT sell that VOO today. Do not sell QQQ/VOO core.
- **Conserve daytrades** (0 of 3). Protective stop sells on overnight holdings OK.
- **No new short sales.**
- **If event detector returns CRITICAL:** suspend remaining VOO add; write note; hold existing; only execute authorized stops if breached. Do not market-panic sell.
- **If event stays ≤ MAJOR (including MINOR/OK):** proceed with VOO #2 limit deploy.
- **Tactical must use EXACT authorized stop prices** ($380.00 / $379.50 AVGO; $108.00 / $107.50 HOOD).
- **Order path:** ONLY `bun run src/tools/alpaca_cli.ts submit-order`. No direct fetch/curl/SDK bypass.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤45%, **VOO ≤30%**, other ETFs ≤20%, stocks ≤15%.
- Pre-order VOO #2: `max_add_value = (0.30 * equity) - VOO_mv ≈ $832`; 1 share ~$691 OK. Post weight ~28.5%.

## Symbol Ban Guard
- `bannedSymbols: ["META"]`

## Safeguards For Next 60 Minutes
- Execute VOO #2 limit buy first if conditions still met (event ≤ MAJOR, cash >15%, turnover <2).
- Hold QQQ/AVGO/HOOD unless trails breach.
- No revenge trading. No SOXX/NVDA chase on green prints.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.**
- VOO: limit only; cancel unfilled stale VOO limits older than this cycle before replacing.
- After turnover 2/2: only protective exits allowed.

## Current Book (post VOO #2)
- QQQ 6 (~44.6%), VOO 4 (~28.5%), AVGO 2 (~8.1%), HOOD 2 (~2.3%)
- Cash ~$1,594 (~16.5%)
- Gross ~83.5%
