# Tactical Todo — Updated 2026-07-16 14:35Z (Thu 10:35 AM ET hourly)
*Market **OPEN**. Book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 2. Event detector **NONE**. HOLD-ONLY. No discretionary buys.*

## MARKET OPEN — HOURLY DIRECTIVES (10:35 ET)
- Event detector cooled to **NONE** (all broad/held OK). Prior CRITICAL freeze **lifted by hourly**.
- **Weekly turnover still exceeded** → discretionary buys remain **blocked**.
- TSMC digestion ongoing; do not buy residual chip dip.
- AVGO 9:40 trail already executed; only HOOD trail remains.

## TURNOVER: 0/2 discretionary trades used today, ~25.7% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional + today AVGO protective trail **$380.65** ≈ **$2,476** (~25.7% of equity).
- **Weekly ceiling binds** (calendar week Mon Jul 13 – Sun Jul 19).
- **Only allowed action (regular session):** HOOD trail if breached (protective, exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Current State
- **Regime:** **neutral** (75–90%; live ~79.5%) — **do not flip**.
- **Live book:** QQQ 6 @ ~$711.9 | VOO 4 @ ~$693.2 | AVGO 1 @ ~$383.3 | HOOD 2 @ ~$113.5
- **Equity / cash:** ~$9,629 / ~$1,975
- **Gross:** **~79.5%** | Cash **~20.5%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean

## Exact cash blocker
1. Weekly TO **~25.7% > 20%** → no discretionary buys.
2. VOO room ~**$116** < 1 share (~$693).
3. QQQ room ~**$62** < 1 share (~$712).
4. Chip digestion residual; thin ETFs — do not buy.
5. No single-name add edge that beats do-nothing VOO baseline after friction.

## Ranked Execution Priority (Thu regular session)
1. **HOOD trail** if breached only.
2. **Everything else: no trades.**

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. Soft open is not a sell signal. No action.

### AVGO — HOLD 1 — TRAIL ALREADY EXECUTED 09:40 ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$380.65**. 1 share remains.
- Remaining 1 share avg entry **$371.95**; current ~$383.3; unrealized ~+3.1%.
- **No new AVGO sell trigger.** Do not full-exit remaining 1. Let winner run.
- **DO NOT RE-BUY AVGO today** (24-hour cooldown + anti-churn). Do not add.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$113.5 (~+11.8% unrealized). **Above trail** $108.00 (~4.8% buffer).
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
- Do not lower stops. Cancel unexpected open orders.
- Re-read this file before every order batch.
- CRITICAL event language is **lifted** — do not re-impose CRITICAL freeze unless detector returns CRITICAL.

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.8%), AVGO 1 (~4.0%), HOOD 2 (~2.4%)
- Cash ~$1,975 (~20.5%) | Gross ~79.5%
