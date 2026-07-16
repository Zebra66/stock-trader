<!-- Autonomous override applied at 2026-07-16 13:30Z due to CRITICAL event -->
# Tactical Todo — Updated 2026-07-16 13:30Z (Thu 9:30 AM ET tactical)
*Market **OPEN**. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Event detector CRITICAL (SOXX/SMH/GLD). HOLD-ONLY. No new buys. Await hourly reset.*

## MARKET OPEN — EVENT RESPONSE MODE
- **Event detector CRITICAL at 2026-07-16 09:30 ET:** SOXX -2.81%, SMH -2.37%, GLD -1.15%.
- **No new buys** initiated during CRITICAL event. No new positions. No increased gross exposure.
- **Held positions:** AVGO MAJOR -2.78% but still above $380 stop; HOOD/QQQ/VOO OK. No protective stops triggered.
- **No after-hours / pre-market equity orders.** Regular session active.

## TURNOVER: 0/2 trades used today, ~21.6% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional already used (HOOD/AVGO trail sells + VOO buys).
- **Weekly ceiling binds.** No discretionary position-changing trades until weekly budget headroom is confirmed by next open hourly.
- **Only allowed actions (regular session):** AVGO trail / HOOD trail if breached (protective, exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Event context — CRITICAL (autonomous override applied)
- **2026-07-16 09:30 ET:** Detector **CRITICAL** on broad semis (SOXX/SMH) and GLD MAJOR. Broad SPY/QQQ OK/MINOR.
- **Tactical response:** No orders placed. No held stop-losses triggered. No active BUY conditions to suspend (todo already HOLD-ONLY).
- `NO NEW BUYS — CRITICAL EVENT` applies until hourly reset reassesses.
- No market-panic sell of QQQ/VOO/AVGO/HOOD. Only execute authorized trails if breached.

## Current State
- **Regime:** **neutral** (75–90%; live ~83.5%) — **do not flip**.
- **Live book:** QQQ 6 @ $713.00 | VOO 4 @ $692.42 | AVGO 2 @ $383.57 | HOOD 2 @ $113.69
- **Equity / cash:** ~$9,638 / $1,594
- **Gross:** **~83.5%** | Cash **~16.5%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean
- **TSMC:** ~Thu Jul 16 (sector binary for chip beta)

## Exact cash blocker
1. Weekly TO **~21.6% > 20%** → no discretionary buys; wait for hourly to confirm counting window.
2. VOO room ~**$130** < 1 share (~$692).
3. QQQ room ~**$55** < 1 share (~$716).
4. TSMC week on chips; thin ETFs — do not buy.
5. Event detector CRITICAL → no new buy authorizations.

## Ranked Execution Priority (Thu regular session)
1. **AVGO / HOOD trails** if breached only.
2. **Everything else: no trades** until open hourly reassesses weekly TO + TSMC reaction.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit. Overnight hold.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. No action. Overnight hold.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Live ~$383.57 (~+3.1% unrealized). **Above trail** $380.00 (~0.9% buffer below current).
- **SELL 1** if price **below $380.00**, limit **$379.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail. Do not full-exit.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$113.69 (~+12.0% unrealized). **Above trail** $108.00 (~5.0% buffer below current).
- **SELL 1** if price **below $108.00**, limit **$107.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA — NO ENTRY
- TSMC week + weekly TO + incomplete gates. **Do not pre-position into earnings.** Reassess only with fresh open hourly.

### GOOG / SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- **No after-hours / pre-market equity orders.**
- **No panic sells of QQQ/VOO/AVGO/HOOD.**
- No same-day round trips. No new shorts.
- Exact trail prices only. Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- Post-fill: update this file with cycle note.
- Next open hourly (Thu 9:35 ET) reassesses weekly TO window + TSMC.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Safeguards
- Overnight hold-only. Next session: trails only unless hourly lifts weekly TO block.
- No SOXX/NVDA chase into TSMC.
- No "use the cash" inventiveness.
- Do not lower stops. Cancel unexpected open orders.
- Re-read before every order batch.

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.6%), AVGO 2 (~8.1%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.4%) | Gross ~83.6%
