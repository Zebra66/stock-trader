# Tactical Todo — Updated 2026-07-15 20:32Z (Wed ~4:32 PM ET post-close)
*Market **CLOSED**. Book: QQQ 6 / VOO 4 / AVGO 2 / HOOD 2. HOLD overnight. Weekly TO spent. No after-hours / pre-market orders.*

## MARKET CLOSED — NEXT REGULAR SESSION ONLY
- **No after-hours / pre-market equity orders.**
- Convert all triggers to **next regular session** (Thu open).
- Overnight: do nothing. Do not invent deploys.

## TURNOVER: 0/2 trades used today, ~21.6% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Tue ~$2,095 notional already used (HOOD/AVGO trail sells + VOO buys).
- **Weekly ceiling binds.** No discretionary position-changing trades until weekly budget headroom is confirmed by next open hourly.
- **Only allowed actions (regular session):** AVGO trail / HOOD trail if breached (protective, exempt).

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK.

## Event context — NONE into close
- Last detector **NONE**. Soft-to-mixed day, orderly close.
- If next session detector shows **true crash** (broad SPY/QQQ CRITICAL down): hold; only execute authorized trails if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sell of QQQ/VOO.

## Current State
- **Regime:** **neutral** (75–90%; live ~83.6%) — **do not flip**.
- **Live book:** QQQ 6, VOO 4, AVGO 2, HOOD 2
- **Equity / cash:** ~$9,697 / $1,594
- **Gross:** **~83.6%** | Cash **~16.4%** (cap-bound + weekly TO)
- **Daytrade count:** **0** | **Open orders:** NONE
- **Audit:** clean
- **TSMC:** ~Thu Jul 16 (sector binary for chip beta)

## Exact cash blocker
1. Weekly TO **~21.6% > 20%** → no discretionary buys.
2. VOO room ~**$134** < 1 share (~$694).
3. QQQ room ~**$56** < 1 share (~$718).
4. TSMC week on chips; thin ETFs — do not buy.
5. Market closed — no AH deploys.

## Ranked Execution Priority (Thu regular session)
1. **AVGO / HOOD trails** if breached only.
2. **Everything else: no trades** until open hourly reassesses weekly TO + TSMC reaction.

## Position Instructions

### VOO — HOLD 4 — DO NOT ADD
- Cap room < 1 share. No buy. No stop. No full exit. Overnight hold.

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. No action. Overnight hold.

### AVGO — HOLD 2 — TRAIL 1 @ $380 — DO NOT ADD
- Live ~$394.3 (~+6.0%). **Above trail** (~3.6% buffer).
- **Next regular session only:** **SELL 1** if price **below $380.00**, limit **$379.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail. Do not full-exit. No AH orders.

### HOOD — HOLD 2 — TRAIL 1 @ $108 — DO NOT ADD
- Live ~$115.8 (~+14%). **Above trail** (~6.7% buffer).
- **Next regular session only:** **SELL 1** if price **below $108.00**, limit **$107.50**. Hold remaining 1.
- Do not add/re-buy. Do not lower trail. No AH orders.

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
