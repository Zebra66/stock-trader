# Tactical Todo — Updated 2026-07-16 21:00Z (Thu 5:00 PM ET post-close hourly)
*Market **CLOSED**. Book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 1. Event detector **NONE**. HOLD-ONLY. No after-hours / pre-market orders.*

## MARKET CLOSED — OVERNIGHT DIRECTIVES
- Regular session ended 4:00 PM ET. **No equity orders until Fri regular open (9:30 AM ET).**
- Event detector last **NONE**. CRITICAL freeze remains **lifted**.
- **Weekly turnover still exceeded** → discretionary buys remain **blocked** through Sun Jul 19.
- Both authorized protective trails already executed today (AVGO 9:40, HOOD 13:10).
- **No active sell triggers.** Remaining AVGO 1 / HOOD 1 — let winners run overnight.
- Next full reassess: **Fri open / first Fri hourly (9:35 AM ET)**.

## TURNOVER: 0/2 discretionary trades used today, ~27.0% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional + today AVGO protective trail **$380.65** + HOOD trail **$107.51** ≈ **$2,583** (~27.0% of equity ~$9,552).
- **Weekly ceiling binds** (calendar week Mon Jul 13 – Sun Jul 19).
- **Only allowed action until weekly reset:** none (no discretionary buys; no new sell triggers).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Current State (post-close broker)
- **Regime:** **neutral** (75–90%; live ~78.2%) — **do not flip**.
- **Live book:** QQQ 6 @ ~$705.0 | VOO 4 @ ~$689.3 | AVGO 1 @ ~$377.7 | HOOD 1 @ ~$105.8
- **Equity / cash:** ~$9,552 / ~$2,082
- **Gross:** **~78.2%** | Cash **~21.8%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean (unauthorized=[], concentration=[])

## Exact cash blocker
1. Weekly TO **~27.0% > 20%** → no discretionary buys (binds through Sun Jul 19).
2. VOO room ~**$109** < 1 share (~$689).
3. QQQ room ~**$68** < 1 share (~$705).
4. Soft chip / AI-valuation digestion; thin ETFs — do not buy.
5. No single-name add edge that beats do-nothing VOO baseline after friction.
6. **Market closed** — no AH/pre-market equity orders by default.

## Ranked Execution Priority
1. **Overnight / pre-market:** **NO ORDERS.**
2. **Fri regular session:** Hold core until fresh hourly rewrites conditions. Weekly TO still binds Fri–Sun.
3. **Mon+ deploy queue (not authorized yet):** VOO only if cap room ≥1 share **and** weekly TO headroom **and** orderly tape.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. Soft Nasdaq is not a sell signal. No action.

### AVGO — HOLD 1 — TRAIL ALREADY EXECUTED 09:40 ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$380.65**. 1 share remains.
- Remaining 1 share avg entry **$371.95**; current ~$377.7; unrealized ~+1.6%.
- **No new AVGO sell trigger.** Do not full-exit remaining 1. Let winner run.
- **DO NOT RE-BUY AVGO** until 24h cooldown clears **and** fresh hourly authorizes (anti-churn).

### HOOD — HOLD 1 — TRAIL EXECUTED 1:10 PM ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$107.51** (limit $107.50). 1 share remains.
- Remaining 1 share avg entry **$101.50**; current ~$105.8; unrealized ~+4.3%.
- **No new HOOD sell trigger.** Do not full-exit remaining 1. Let winner run.
- **DO NOT RE-BUY HOOD** until 24h cooldown clears **and** fresh hourly authorizes (anti-churn).

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA — NO ENTRY
- Weekly TO exceeded + soft chip / AI-valuation digestion. **Do not buy the dip.** Reassess only with fresh hourly when weekly budget allows (Mon+).

### GOOG / SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- **No after-hours / pre-market equity orders.**
- **No panic sells of QQQ/VOO.** No full AVGO/HOOD exit.
- No same-day round trips. No new shorts.
- Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- Post-fill: update this file with cycle note.
- Next hourly: Fri 9:35 AM ET reassesses weekly TO + cap room + detector + overnight gap.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Safeguards
- HOLD-ONLY overnight. No remaining authorized sells. No discretionary buys.
- No SOXX/NVDA/AVGO add into residual AI-valuation / chip digestion.
- No "use the cash" inventiveness under weekly TO bind or cap bind.
- Do not lower stops / trails. Cancel unexpected open orders.
- Re-read this file before every order batch.
- CRITICAL event language is **lifted** — do not re-impose CRITICAL freeze unless detector returns CRITICAL.

## Current Book
- QQQ 6 (~44.3%), VOO 4 (~28.9%), AVGO 1 (~4.0%), HOOD 1 (~1.1%)
- Cash ~$2,082 (~21.8%) | Gross ~78.2%
