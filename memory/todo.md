# Tactical Todo — Updated 2026-07-16 13:41Z (Thu 9:40 AM ET tactical)
*Market **OPEN**. Book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 2. Event detector **MINOR** (cooled). HOLD-ONLY. No new buys.*

## MARKET OPEN — EVENT RESPONSE + HOURLY CONFIRM
- **Event detector cooled to MINOR** (SOXX −0.6%, SMH −0.6%; prior CRITICAL). Broad SPY OK; QQQ OK; XLK/GLD OK.
- **`NO NEW BUYS — CRITICAL EVENT`** hourly directive remains in force until next hourly reassesses (tactical does not lift it).
- **TSMC printed** (beat + raise + AZ capex) but **chip price reaction negative** — do not buy the dip.
- Hourly confirms tactical 9:30 no-action was correct; AVGO 9:40 trail executed.

## TURNOVER: 0/2 discretionary trades used today, ~25.8% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional already used (HOOD/AVGO trail sells + VOO buys). **+ $380.65 AVGO protective trail today**.
- **Weekly ceiling binds** (calendar week Mon Jul 13 – Sun Jul 19).
- **Only allowed actions (regular session):** HOOD trail if breached (protective, exempt). AVGO trail completed.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Current State
- **Regime:** **neutral** (75–90%; live ~83.4%) — **do not flip**.
- **Live book:** QQQ 6 @ ~$711.3 | VOO 4 @ ~$691.6 | AVGO 1 @ ~$380.7 | HOOD 2 @ ~$112.2
- **Equity / cash:** ~$9,603 / ~$1,975
- **Gross:** **~79.4%** | Cash **~20.6%** (protective exit + cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean

## Exact cash blocker
1. Weekly TO **~21.8% > 20%** → no discretionary buys.
2. VOO room ~**$118** < 1 share (~$692).
3. QQQ room ~**$59** < 1 share (~$711).
4. Event detector CRITICAL → no new buy authorizations.
5. Chip digestion post-TSMC; thin ETFs — do not buy.

## Ranked Execution Priority (Thu regular session)
1. **AVGO / HOOD trails** if breached only.
2. **Everything else: no trades.**

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. Soft open is not a sell signal. No action.

### AVGO — HOLD 1 — TRAIL EXECUTED 09:40 ET — DO NOT ADD / DO NOT RE-BUY
- **Trail executed:** SOLD 1 at **$380.65** after price breached **$380.00**. 1 share remains.
- Remaining 1 share avg entry **$371.95**; current ~$380.7; unrealized ~+2.4%.
- **No new AVGO sell trigger** until hourly writes one. Do not full-exit remaining 1.
- **DO NOT RE-BUY AVGO today** (24-hour cooldown + anti-churn). Do not add. Do not lower stops retroactively.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$112.2 (~+10.5% unrealized). **Above trail** $108.00 (~3.7% buffer).
- **SELL 1** if price **below $108.00**, limit **$107.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA — NO ENTRY
- CRITICAL semis + weekly TO + post-TSMC digestion. **Do not buy the dip.** Reassess only with fresh hourly when detector cools.

### GOOG / SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- **No after-hours / pre-market equity orders.**
- **No panic sells of QQQ/VOO.** No full AVGO/HOOD exit.
- No same-day round trips. No new shorts.
- Exact trail prices only. Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- Post-fill: update this file with cycle note.
- Next hourly reassesses detector severity + weekly TO + cap room.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Safeguards
- HOLD-ONLY except authorized protective trails.
- No SOXX/NVDA/AVGO add into TSMC digestion.
- No "use the cash" inventiveness under CRITICAL or weekly TO bind.
- Do not lower stops. Cancel unexpected open orders.
- Re-read this file before every order batch.
- If AVGO trades through $380, execute SELL 1 limit $379.50 only — not both shares.

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.8%), AVGO 1 (~4.0%), HOOD 2 (~2.3%)
- Cash ~$1,975 (~20.6%) | Gross ~79.4%
