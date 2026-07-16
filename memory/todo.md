# Tactical Todo — Updated 2026-07-16 16:35Z (Thu 12:35 PM ET hourly)
*Market **OPEN**. Book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 2. Event detector **NONE**. HOLD-ONLY. No discretionary buys.*

## MARKET OPEN — HOURLY DIRECTIVES (12:35 ET)
- Event detector **NONE** (all broad/held OK). CRITICAL freeze remains **lifted**.
- **Weekly turnover still exceeded** → discretionary buys remain **blocked**.
- TSMC digestion ongoing; do not buy residual chip dip.
- HOOD softer (~$109.3; buffer ~1.2% to trail) — **still above $108** — **do not lower trail**.
- AVGO 9:40 trail already executed; only HOOD trail remains.

## TURNOVER: 0/2 discretionary trades used today, ~25.8% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional + today AVGO protective trail **$380.65** ≈ **$2,476** (~25.8% of equity).
- **Weekly ceiling binds** (calendar week Mon Jul 13 – Sun Jul 19).
- **Only allowed action (regular session):** HOOD trail if breached (protective, exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Current State
- **Regime:** **neutral** (75–90%; live ~79.4%) — **do not flip**.
- **Live book:** QQQ 6 @ ~$708.3 | VOO 4 @ ~$691.4 | AVGO 1 @ ~$380.8 | HOOD 2 @ ~$109.3
- **Equity / cash:** ~$9,589 / ~$1,975
- **Gross:** **~79.4%** | Cash **~20.6%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean

## Exact cash blocker
1. Weekly TO **~25.8% > 20%** → no discretionary buys.
2. VOO room ~**$111** < 1 share (~$691).
3. QQQ room ~**$65** < 1 share (~$708).
4. Chip digestion residual; thin ETFs — do not buy.
5. No single-name add edge that beats do-nothing VOO baseline after friction.

## Ranked Execution Priority (Thu regular session)
1. **HOOD trail** if breached only.
2. **Everything else: no trades.**

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. Soft Nasdaq is not a sell signal. No action.

### AVGO — HOLD 1 — TRAIL ALREADY EXECUTED 09:40 ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$380.65**. 1 share remains.
- Remaining 1 share avg entry **$371.95**; current ~$380.8; unrealized ~+2.4%.
- **No new AVGO sell trigger.** Do not full-exit remaining 1. Let winner run.
- **DO NOT RE-BUY AVGO today** (24-hour cooldown + anti-churn). Do not add.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$109.3 (~+7.7% unrealized). **Above trail** $108.00 (~1.2% buffer). Soft session — **do not lower trail**.
- **SELL 1** if price **below $108.00**, limit **$107.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA — NO ENTRY
- Weekly TO exceeded + post-TSMC digestion. **Do not buy the dip.** Reassess only with fresh hourly when weekly budget allows.

### GOOG / SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- **No after-hours / pre-market equity orders.**
- **No panic sells of QQQ/VOO.** No full AVGO/HOOD exit.
- No same-day round trips. No new shorts.
- Exact trail prices only. Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- Post-fill: update this file with cycle note.
- Next hourly reassesses weekly TO + cap room + detector.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Safeguards
- HOLD-ONLY except authorized HOOD protective trail.
- No SOXX/NVDA/AVGO add into residual TSMC digestion.
- No "use the cash" inventiveness under weekly TO bind or cap bind.
- Do not lower stops / trails. Cancel unexpected open orders.
- Re-read this file before every order batch.
- CRITICAL event language is **lifted** — do not re-impose CRITICAL freeze unless detector returns CRITICAL.

## Current Book
- QQQ 6 (~44.3%), VOO 4 (~28.8%), AVGO 1 (~4.0%), HOOD 2 (~2.3%)
- Cash ~$1,975 (~20.6%) | Gross ~79.4%
