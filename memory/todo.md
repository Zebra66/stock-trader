# Tactical Todo — Updated 2026-07-14 14:40Z (Tue 10:35 AM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 3 / AVGO 2 / HOOD 2. Event detector MINOR. Hourly-authorized 2nd VOO limit buy ACTIVE. No speculative positions.*

## TURNOVER: 1/2 trades used today, ~7.1% of 20% weekly budget used
- Max **2** position-changing trades today. Protective stop exits on overnight holdings are exempt.
- VOO #1 used trade #1 (filled 14:12Z). **Authorized VOO #2 may use trade #2.** After that, turnover exhausted for discretionary trades.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- Fresh 14:35Z event detector classification is **MINOR**. Hourly-authorized 2nd VOO cash deploy is **ACTIVE** (limit order only). Speculative adds stay off.

## Event context — MINOR (not CRITICAL)
- 14:35Z: SPY/QQQ/SOXX/XLK/GLD OK; SMH MINOR; held AVGO/HOOD/QQQ/VOO all OK.
- Speculative new BUY authorizations remain suspended (NVDA/GOOG/SOXX/thin ETFs).
- Hourly-authorized VOO cash deploy #2 is ACTIVE (limit only).

## Current State
- **Regime:** **neutral** (doctrine band 75–90%; live ~76.4%)
- **Live book:** QQQ 6, VOO 3, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,686 / $2,285 / ~$29,900
- **Gross long exposure:** **~76.4%** | Target band **75–90%** | Cash **~23.6%** (still above 10% target).
- **Daytrade count:** **0**. Conserve — do not open a position you may need to reverse today.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. Event detector MINOR. Hormuz/oil risk background. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Ranked Execution Priority
1. **BUY 1 more VOO** — **ACTIVE NOW** if event ≤ MAJOR (current MINOR OK), cash >15%, turnover <2. Limit only ≤ live last (~$690.50–$691.20). Do **not** chase above live offer.
2. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
3. **Everything else:** no discretionary buys. After VOO #2 fills, **turnover 2/2 — stop**.

## Position Instructions

### VOO — HOLD 3 + **BUY 1 more authorized** (cash discipline)
- Weight ~21.4%. **Config cap is VOO 30%** (not 20%). Room ~$832 → **exactly 1 more share** OK.
- **Already filled today:** 1 share @ **$689.49** (limit $689.57; 14:12Z). Book is now 3 shares.
- **Authorized now:** BUY **1** additional VOO, limit ≤ live last/offer (refresh price before submit; ~$690.50–$691.20 at 14:35Z). Prefer limit at or slightly below last. **Market orders prohibited** (TradeCount often <5).
- **Why this beats do-nothing:** cash ~24% is still the active drag vs SPY; VOO is the only core beta with room; friction is one limit fill. Post-buy: gross ~83–84%, VOO ~28.5% ≤30%, cash ~16%.
- **Do NOT buy a 3rd additional share** (would push toward/over 30% or exhaust cash without edge).
- **Post-buy check:** VOO weight ≤30%; cancel any unfilled stale VOO limit before replacing.
- **If event goes CRITICAL before fill:** cancel/suspend this VOO add; hold; note in this file.
- HOLD existing 3. No VOO stop. No VOO full exit. **If you buy VOO today, you may NOT sell that VOO today.**

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

## Current Book (pre VOO #2)
- QQQ 6 (~44.6%), VOO 3 (~21.4%), AVGO 2 (~8.1%), HOOD 2 (~2.3%)
- Cash ~$2,285 (~23.6%)
- Gross ~76.4%
