<!-- Autonomous override applied at 2026-07-14 13:40Z due to CRITICAL event (SOXX/GLD/SMH CRITICAL; QQQ/XLK MAJOR). VOO cash deploy SUSPENDED. -->
# Tactical Todo — Updated 2026-07-14 13:40Z (Tue 9:40 AM ET tactical)
*Market OPEN. Book: QQQ 6 / VOO 2 / AVGO 2 / HOOD 2. Event detector CRITICAL. NO NEW BUYS until next hourly reset. VOO buy suspended.*

## TURNOVER: 0/2 trades used today, ~0% of 20% weekly budget used
- Max **2** position-changing trades today. Protective stop exits on overnight holdings are exempt.
- Prefer the VOO deploy as trade #1 (and optional #2). Do not spend budget on speculative names.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META remains in `bannedSymbols`.
- Fresh 13:40Z event detector classification is **CRITICAL**. Hourly-authorized VOO cash deploy is **SUSPENDED** until next hourly reset. Speculative adds stay off.

## NO NEW BUYS — CRITICAL EVENT
- 13:40Z event detector classification is CRITICAL. All new BUY authorizations are suspended until the next hourly reset, except explicitly authorized protective exits.
- VOO cash deploy from this hourly note is suspended.

## Current State
- **Regime:** **neutral** (not defensive panic, not full offensive catch-up)
- **Live book:** QQQ 6, VOO 2, AVGO 2, HOOD 2
- **Account equity / cash / BP:** ~$9,660 / $2,975 / ~$30,600
- **Gross long exposure:** **~69.2%** | Target band **65–80%** | Cash **~30.8%** (VOO deploy suspended due to CRITICAL event).
- **Daytrade count:** **0**. Conserve — do not open a position you may need to reverse today.
- **Open orders:** NONE — cancel any stale order if one appears.
- **Market:** OPEN regular session. Event detector CRITICAL (SOXX/GLD/SMH CRITICAL; QQQ/XLK MAJOR; SPY OK). Hormuz/oil risk background. TSMC earnings ~Thu Jul 16.
- **Audit:** clean. No unauthorized positions. No concentration breaches.

## Ranked Execution Priority
1. **BUY 1 VOO** — **SUSPENDED** due to CRITICAL event detector classification. No VOO buy until next hourly reset.
2. **Optional BUY 1 more VOO** — **SUSPENDED**.
3. **AVGO / HOOD protective trails** if breached (exempt from turnover budget).
4. **Everything else:** no discretionary buys.

## Position Instructions

### VOO — HOLD 2 + **BUY 1 AUTHORIZED** (cash discipline)
- **SUSPENDED — CRITICAL event detected at 2026-07-14 13:40Z; VOO buy is off until next hourly reset.**
- Weight ~14.3%. **Config cap is VOO 30%** (not 20%). Room ~$1,500 — 1–2 shares OK.
- **SUSPENDED — was AUTHORIZED NOW:** BUY **1** share VOO with **limit order only**, limit price **≤ last/print** (use ~$689.50 or the live bid/last at submit time; do not chase more than **$0.50** above the print you see). Prefer limit at or slightly below last.
- **Why this beats do-nothing:** cash ~31% is the active drag vs SPY; VOO is the underweight core beta and preferred deploy vehicle when QQQ is near cap. Friction is one limit fill.
- **Illiquid gate:** VOO TradeCount often low — **market orders prohibited**. Limit only. If bar TradeCount < 5, still OK to use limit (not market).
- **Post-buy check:** VOO weight must stay ≤30%; gross should land ~76% (1 share) or ~83% (if 2nd share — only if still inside 65–80% target or you stop at 1).
- **Optional 2nd share:** only if #1 filled, still same session, event ≤ MAJOR, cash >15%, turnover <2. Same limit discipline. Do **not** buy a 3rd.
- HOLD existing 2. No VOO stop. No VOO full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.6%, within 45% cap. Cap room ~$40 — **cannot add 1 share**.
- Core anchor. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Avg $371.95, live ~$388, unrealized ~+4.5%.
- **Authorized trail:** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after trigger.
- **Do NOT re-buy AVGO** until after **2026-07-13 19:30Z + 24h** (~Tue 19:30Z) and only with fresh hourly authorization. Cooldown still active this morning.
- Do not lower the trail.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Avg $101.50, live ~$109, unrealized ~+7.7%. Event MAJOR probe earlier — **not** a stop breach.
- **Authorized trail:** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after trigger.
- Do NOT add HOOD. Do NOT re-buy HOOD without fresh hourly line.
- Do not lower the trail.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` active. CODE-ENFORCED reject on any BUY.

### NVDA — NO ENTRY (GATE FAIL — 3/4)
- Live ~$205. **Required ≥ $209 firm — FAIL**.
- Other gates: QQQ ≥ $716 PASS; SOXX ≥ $562 PASS; no CRITICAL PASS.
- **No order.** Do not chase. TSMC week risk.

### GOOG — NO ENTRY
- Soft 1w. Prefer VOO for cash deploy.

### SOXX — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- MAJOR event volatility; TSMC risk. Illiquid relative to NVDA — market orders prohibited even if later authorized.

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak trends, thin liquidity, or no edge.

## Hard Rules / No-Trade Conditions
- **NO speculative new positions** (NVDA/GOOG/SOXX/META/thin ETFs). Only authorized: VOO limit add(s) + AVGO/HOOD trails.
- **No after-hours / pre-market equity orders.**
- **Exact cash blocker for non-VOO names:** MAJOR semi volatility + NVDA four-gate fail + TSMC ~Thu + QQQ cap bind. **No blocker for 1 VOO.**
- **No same-day round trips.** If you buy VOO today, you may NOT sell that VOO today. Do not sell QQQ/VOO core.
- **Conserve daytrades** (0 of 3). Protective stop sells on overnight holdings OK.
- **No new short sales.**
- **If event detector returns CRITICAL:** suspend any remaining VOO adds; write note; hold existing; only execute authorized stops if breached. Do not market-panic sell.
- **If event stays MAJOR:** proceed with VOO limit deploy; do not chase semis.
- **Tactical must use EXACT authorized stop prices** ($380.00 / $379.50 AVGO; $108.00 / $107.50 HOOD).
- **Order path:** ONLY `bun run src/tools/alpaca_cli.ts submit-order`. No direct fetch/curl/SDK bypass.
- **Post-order:** If any order fills, update this file with a cycle note and leave a clear execution record.

## Concentration Cap Guard (Code-Enforced)
- QQQ ≤45%, **VOO ≤30%**, other ETFs ≤20%, stocks ≤15%.
- Pre-order: `max_add_value = (cap_pct * equity) - current_mv`. For VOO 1 share ~$690, post weight ~21% — OK.

## Symbol Ban Guard
- `bannedSymbols: ["META"]`

## Safeguards For Next 60 Minutes
- Execute VOO limit buy first if still unfilled.
- Hold QQQ/AVGO/HOOD unless trails breach.
- No revenge trading. No SOXX/NVDA chase on green prints.
- If gross drifts >15 pp without authorization → hold-only and wait for next hourly.
- Re-read this file before every order batch (concurrent hourly/tactical risk).
- **Do not lower stop levels.**
- VOO: limit only; cancel unfilled stale VOO limits older than this cycle before replacing.

## Current Book
- QQQ 6 (~44.6%), VOO 2 (~14.3%), AVGO 2 (~8.0%), HOOD 2 (~2.3%)
- Cash ~$2,975 (~30.8%)
- Gross ~69.2%
