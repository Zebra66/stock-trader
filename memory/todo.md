# Tactical Todo — Updated 2026-07-17 09:40 ET (CRITICAL event response)
*Event detector CRITICAL at 09:40 ET. Market OPEN. Book: QQQ 6 / VOO 4. AVGO and HOOD sold this morning. Autonomous override applied.*

<!-- Autonomous override applied at 2026-07-17T13:40:02Z due to CRITICAL event -->

## CRITICAL EVENT RESPONSE
- Event detector classification: **CRITICAL** at 2026-07-17T13:40:02Z.
- Broad semi crash: SOXX -4.95%, SMH -4.62%, QQQ -2.29%, XLK -2.83%; SPY -0.97% (MINOR).
- No new BUY authorizations until hourly reset.
- All existing buy lines remain **SUSPENDED** / banned.
- No new positions. No exposure increases.

## Current State
- **Market:** OPEN (regular session).
- **Regime:** neutral (75–90% target). Live gross **~72.9%** after protective sells.
- **Live book:** QQQ 6 @ ~$688.39 | VOO 4 @ ~$681.605
- **Equity / cash:** ~$9,399 / ~$2,543
- **Gross:** **~72.9%** | Cash **~27.1%**
- **Daytrade count:** 0 | **Open orders:** NONE
- **Audit:** clean (unauthorized=[], concentration=[], hardLockRecommended=false)
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`

## TURNOVER: 2/2 position-changing trades used today (both event-response protective sells)
- HOOD SELL 1 @ $100.96 (filled 09:33 ET).
- AVGO SELL 1 @ $360.33 (filled 09:40 ET).
- Daily discretionary budget **spent**. No further discretionary orders today.
- Weekly turnover now ~$3,045 / ~32.4% of equity — exceeds 20% ceiling. Discretionary buys blocked through Sun Jul 19.

## HARD_LOCK inactive
- Do not invent HARD_LOCK.

## Position Instructions

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Core. No stop. Soft Nasdaq is not a sell signal. No action.

### VOO — HOLD 4 — DO NOT ADD
- Core. No stop. No full exit.

### AVGO — **SOLD** — NO POSITION
- Autonomous protective exit executed at 09:40 ET. No re-buy until 24h cooldown clears and fresh hourly authorizes.

### HOOD — **SOLD** — NO POSITION
- Autonomous protective exit executed at 09:33 ET. No re-buy until 24h cooldown clears and fresh hourly authorizes.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA / SOXX / GOOG / RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

## Hard Rules
- No new BUY authorizations during CRITICAL event.
- No panic sells of QQQ/VOO. No full core ETF exit.
- No same-day round trips. No new shorts.
- Order path: `bun run src/tools/alpaca_cli.ts submit-order` only.
- No after-hours / pre-market equity orders.
- Re-read this file before every order batch.
- Next hourly: 09:40+ hourly reassess; next tactical: 09:50 ET.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Current Book
- QQQ 6 (~44.0%), VOO 4 (~29.0%)
- Cash ~$2,543 (~27.1%) | Gross ~72.9%
