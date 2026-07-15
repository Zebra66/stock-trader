# Tactical Todo — Updated 2026-07-15 17:15Z (Wed ~1:15 PM ET hourly)
*Market OPEN. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. Detector CRITICAL on **UPWARD** SOXX/SMH bounce (not a crash). HOLD-ONLY. Weekly TO spent.*

## NO NEW BUYS — CRITICAL EVENT (upward bounce — buy suspension only)
- Detector **CRITICAL** on SOXX/SMH **up** (~+1.7% / +1.6%), not a liquidation event.
- **All BUY conditions SUSPENDED** until next hourly with clear process room.
- **Do NOT sell core ETFs or winners into the bounce.** Only authorized trails if breached.
- This is the same class of upward semi spike as Tue 17:36Z — correctly no action.

## TURNOVER: 0/2 trades used today, ~21.7% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional already used (HOOD/AVGO trail sells + VOO buys).
- **Weekly ceiling binds.** No discretionary position-changing trades today.
- **Only allowed actions:** AVGO trail / HOOD trail if breached (protective, exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK from upward SOXX CRITICAL.

## Event context — CRITICAL UP (not crash)
- SPY/QQQ OK; SOXX/SMH CRITICAL **up**; held AVGO/HOOD/QQQ/VOO OK.
- Soft morning recovered partially. **Not a true crash.**
- If a later detector shows **true crash** (broad SPY/QQQ CRITICAL down): hold; only execute authorized trails if breached; keep `NO NEW BUYS — CRITICAL EVENT`. No market-panic sell of QQQ/VOO.

## Current State
- **Regime:** **neutral** (75–90%; live ~83.5%) — **do not flip**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Equity / cash:** ~$9,655 / $1,594
- **Gross:** **~83.5%** | Cash **~16.5%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean
- **TSMC:** ~Thu Jul 16

## Exact cash blocker
1. Weekly TO **~21.7% > 20%** → no discretionary buys.
2. VOO room ~**$132** < 1 share (~$691).
3. QQQ room ~**$58** < 1 share (~$715).
4. CRITICAL buy suspension + TSMC week on chips.
5. Thin ETFs — do not buy.

## Ranked Execution Priority
1. **AVGO / HOOD trails** if breached only.
2. **Everything else: no trades.**

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. Soft-day noise. No stop. No action.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Live ~$392.4 (~+5.5%). **Above trail.**
- **SELL 1** if price **below $380.00**, limit **$379.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail. Do not full-exit on bounce.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$115.3 (~+13.6%). **Above trail.**
- **SELL 1** if price **below $108.00**, limit **$107.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA — NO ENTRY
- TSMC week + weekly TO + CRITICAL buy suspension. **Do not chase bounce.**

### GOOG / SOXX / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- **NO NEW BUYS — CRITICAL EVENT** (buy side only).
- **No panic sells of QQQ/VOO/AVGO/HOOD** on upward semi CRITICAL.
- No same-day round trips. No new shorts.
- Exact trail prices only. Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- Post-fill: update this file with cycle note.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Safeguards
- Hold-only except authorized trails.
- No SOXX/NVDA chase on green CRITICAL bounce.
- No "use the cash" inventiveness.
- Do not lower stops. Cancel unexpected open orders.
- Re-read before every order batch.

## Current Book
- QQQ 6 (~44.4%), VOO 4 (~28.6%), AVGO 2 (~8.1%), HOOD 2 (~2.4%)
- Cash ~$1,594 (~16.5%) | Gross ~83.5%
