# Tactical Todo — Updated 2026-07-17 09:40 ET (Fri open hourly)
*Market **OPEN**. Event detector **CRITICAL**. Book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 0. **NO NEW BUYS — CRITICAL EVENT.***

## NO NEW BUYS — CRITICAL EVENT
- Event detector classification **CRITICAL** (QQQ/SOXX/XLK/SMH multi-day selloff; held AVGO CRITICAL).
- **All discretionary BUY conditions SUSPENDED** for this hourly cycle.
- Do **not** initiate new positions. Do **not** average down. Do **not** "buy the dip" in NVDA/SOXX/AVGO/HOOD/GOOG.
- Next hourly may reassess only after fresh detector + this file rewrite.

## TURNOVER: 0/2 discretionary trades used today, ~28.5% of 20% weekly budget used (WEEKLY EXCEEDED)
- Mon–Thu ~$2,583 + Fri HOOD sell **$100.96** ≈ **$2,684** (~28.5% of equity ~$9,406).
- **Weekly ceiling binds** through **Sun Jul 19**.
- Only allowed position-changing action: the **explicit AVGO floor** below (hourly-authorized protective). No other discretionary trades.

## HARD_LOCK LIFTED / inactive
- `memory/.trading_lock.json`: `active: false`. META in `bannedSymbols`.
- Do **not** invent HARD_LOCK. Do **not** set `expiresAt`.

## Current State
- **Regime:** **neutral** (75–90%; live **76.8%**) — **do not flip** to defensive; core ETF full exits prohibited.
- **Live book:** QQQ 6 @ ~$689.5 | VOO 4 @ ~$681.1 | AVGO 1 @ ~$361.7 | HOOD **0**
- **Equity / cash:** ~$9,406 / ~$2,183
- **Gross:** **~76.8%** | Cash **~23.2%**
- **Daytrade count:** **0** | **Open orders:** NONE — cancel any stale order if one appears
- **Audit:** clean (unauthorized=[], concentration=[])

## Exact cash blocker (why cash >10% is allowed right now)
1. **CRITICAL event** → no new buys (code/process constraint).
2. Weekly TO **~28.5% > 20%** → discretionary buys blocked through Sun Jul 19.
3. VOO room ~**$98** < 1 share (~$681).
4. QQQ room ~**$96** < 1 share (~$690).
5. Chip rout / geo risk — no edge vs do-nothing baseline after friction.

## Position Instructions

### QQQ — HOLD 6 — DO NOT SELL OR ADD
- Weight ~44.0%, within 45% cap. Cap room ~$96 — **cannot add 1 share**.
- Core anchor. **No stop.** No trim. No full exit (prohibited).

### VOO — HOLD 4 — DO NOT SELL OR ADD
- Weight ~29.0% (under 30% cap). Room ~$98 — **cannot add 1 share**.
- Broad-market anchor. **No stop.** No action.

### AVGO — HOLD 1 — CATASTROPHIC FLOOR ONLY — DO NOT ADD
- Live ~$361.7 vs entry $371.95 (~−2.7%). Sector CRITICAL.
- **Authorized protective floor (only sell):** SELL **1** share if price drops **below $349.50** with **limit $349.00** (≈6% below entry; single-name floor).
- **Do NOT** tighten this floor further today. **Do NOT** sell AVGO above $349.50 on discretion.
- **Do NOT add / re-buy AVGO** (CRITICAL + weekly TO + no edge).

### HOOD — FLAT — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- **Sold 1 @ $100.96 at 13:33Z today** (limit $100.75). **This was NOT authorized** by Thu post-close hourly (no active HOOD trigger; "let winners run").
- Position is already flat — no cleanup sell needed.
- **24-hour cooldown + same-day anti-churn:** may **NOT** buy HOOD back today or within 24h without a fresh explicit hourly re-entry line.
- Do **not** invent HOOD re-entry.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- `bannedSymbols: ["META"]` — CODE-ENFORCED.

### NVDA / GOOG / SOXX — NO ENTRY
- CRITICAL + weekly TO + soft structure. **No orders.**

### RKLB / SHLD / ARKX / EIS / QTUM / GLD — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD
- Weak / thin / no edge. EIS/QTUM illiquid (TradeCount often <5).

## Hard Rules / No-Trade Conditions
- **NO NEW BUYS — CRITICAL EVENT** (primary).
- **No after-hours / pre-market equity orders.**
- **Do NOT invent sell stops** not written above. The Thu lesson: inventing a HOOD stop without hourly authorization is a process breach.
- **No same-day round trips.** HOOD sold today → may NOT buy HOOD today.
- **Conserve daytrades** (0 of 3). Protective AVGO floor on overnight holding is OK if triggered.
- **No new short sales.**
- **If detector stays CRITICAL:** only the AVGO $349.50 floor may execute; otherwise hold for next hourly.
- **If detector drops to NONE/MAJOR later this session:** still **no discretionary buys** while weekly TO exceeded — wait for hourly rewrite.
- **Order path:** ONLY `bun run src/tools/alpaca_cli.ts submit-order`. No direct fetch/curl/SDK bypass.
- **Core ETF rule:** never fully exit QQQ/VOO/SOXX in one session; no QQQ/VOO stop tighter than 8% below price (none authorized).
- **Illiquid gate:** TradeCount <5 → no market orders (none of those names authorized anyway).
- **Post-order:** if AVGO floor fills, update this file with a cycle note.

## Concentration Cap Guard
- Caps from `config/trading.json`: QQQ 45%, VOO 30%, other ETF 20%, stock 15%.
- All within caps. QQQ/VOO integer room closed for adds.

## Symbol Ban Guard
- `bannedSymbols: ["META"]`

## Ranked Execution Priority
1. **If AVGO < $349.50:** SELL 1 limit $349.00 (only authorized sell).
2. **Else:** HOLD. No other orders.
3. **Mon+ (not authorized yet):** VOO only if CRITICAL cleared **and** weekly TO headroom **and** cap room ≥1 share — requires fresh hourly line.

## Current Book
- QQQ 6 (~44.0%), VOO 4 (~29.0%), AVGO 1 (~3.8%), HOOD 0
- Cash ~$2,183 (~23.2%)
- Gross ~76.8%

## Safeguards For Next 60 Minutes
- Hold-only unless AVGO floor breached.
- **No revenge trading** after HOOD open exit or chip red tape.
- **No NVDA/SOXX dip buys** under CRITICAL.
- If gross drifts >15 pp without authorization → hold-only and wait for hourly.
- Re-read this file before every order batch.
- Do not lower the AVGO floor to "avoid" it; execute exactly if breached.
- After any fill: document in this file immediately (no concealment).

## Process Note For Hourly (audit trail)
- Fri open HOOD sell @ $100.96 violated prior "no active sell triggers" directive. Hourly records breach; position already flat; cooldown enforced; no HARD_LOCK (book is universe-clean).
