# Tactical Todo — Updated 2026-07-16 18:35Z (Thu 2:35 PM ET hourly)
*Market **OPEN**. Book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 1. Event detector **NONE**. HOLD-ONLY. No discretionary buys.*

## MARKET OPEN — HOURLY DIRECTIVES (2:35 PM ET)
- Event detector **NONE** (all broad/held OK). CRITICAL freeze remains **lifted**.
- **Weekly turnover still exceeded** → discretionary buys remain **blocked**.
- Soft chip / AI-valuation tape; do not buy residual dips.
- HOOD trail **already executed** at 1:10 PM ET at $107.51; 1 share remains.
- AVGO trail **already executed** at 9:40 ET; 1 share remains.
- **No active sell triggers remain.** HOLD-ONLY for rest of session (~1h25m to close).
- **No after-hours / pre-market orders** at/after 4:00 PM ET.

## TURNOVER: 0/2 discretionary trades used today, ~27.0% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional + today AVGO protective trail **$380.65** + HOOD trail **$107.51** ≈ **$2,583** (~27.0% of equity).
- **Weekly ceiling binds** (calendar week Mon Jul 13 – Sun Jul 19).
- **Only allowed action (regular session):** none remaining; all active trails executed.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Current State
- **Regime:** **neutral** (75–90%; live ~78.2%) — **do not flip**.
- **Live book:** QQQ 6 @ ~$706.5 | VOO 4 @ ~$690.0 | AVGO 1 @ ~$376.4 | HOOD 1 @ ~$106.8
- **Equity / cash:** ~$9,564 / ~$2,082
- **Gross:** **~78.2%** | Cash **~21.8%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean

## Exact cash blocker
1. Weekly TO **~27.0% > 20%** → no discretionary buys.
2. VOO room ~**$109** < 1 share (~$690).
3. QQQ room ~**$65** < 1 share (~$706).
4. Soft chip / AI-valuation digestion; thin ETFs — do not buy.
5. No single-name add edge that beats do-nothing VOO baseline after friction.

## Ranked Execution Priority (Thu regular session)
1. **All active triggers executed.** Remaining book: HOLD only.
2. **Everything else: no trades.**

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. Soft Nasdaq is not a sell signal. No action.

### AVGO — HOLD 1 — TRAIL ALREADY EXECUTED 09:40 ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$380.65**. 1 share remains.
- Remaining 1 share avg entry **$371.95**; current ~$376.4; unrealized ~+1.2%.
- **No new AVGO sell trigger.** Do not full-exit remaining 1. Let winner run.
- **DO NOT RE-BUY AVGO today** (24-hour cooldown + anti-churn). Do not add.

### HOOD — HOLD 1 — TRAIL EXECUTED 1:10 PM ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$107.51** (limit $107.50). 1 share remains.
- Remaining 1 share avg entry **$101.50**; current ~$106.8; unrealized ~+5.2%.
- **No new HOOD sell trigger.** Do not full-exit remaining 1. Let winner run.
- **DO NOT RE-BUY HOOD today** (24-hour cooldown + anti-churn). Do not add.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA — NO ENTRY
- Weekly TO exceeded + soft chip / AI-valuation digestion. **Do not buy the dip.** Reassess only with fresh hourly when weekly budget allows.

### GOOG / SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- **No after-hours / pre-market equity orders.**
- **No panic sells of QQQ/VOO.** No full AVGO/HOOD exit.
- No same-day round trips. No new shorts.
- Exact trail prices only. Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- Post-fill: update this file with cycle note.
- Next hourly reassesses weekly TO + cap room + detector (or Fri open if this is last session hourly).

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Safeguards
- HOLD-ONLY. No remaining authorized sells. No discretionary buys.
- No SOXX/NVDA/AVGO add into residual AI-valuation / chip digestion.
- No "use the cash" inventiveness under weekly TO bind or cap bind.
- Do not lower stops / trails. Cancel unexpected open orders.
- Re-read this file before every order batch.
- CRITICAL event language is **lifted** — do not re-impose CRITICAL freeze unless detector returns CRITICAL.

## Current Book
- QQQ 6 (~44.3%), VOO 4 (~28.9%), AVGO 1 (~3.9%), HOOD 1 (~1.1%)
- Cash ~$2,082 (~21.8%) | Gross ~78.2%
