# Tactical Todo — Updated 2026-07-17 11:35 ET (Hourly)
*Market OPEN. Event detector NONE. Book: QQQ 6 / VOO 4. HOLD-ONLY rest of session.*

## Session Posture
- **Regime:** neutral (target 75–90%). Live gross **~73.1%** — slightly below floor due to morning HOOD+AVGO exits; **do not force adds**.
- **Market:** OPEN regular session only. No AH/pre-market equity orders.
- **Equity / cash:** ~$9,453 / ~$2,543 (~26.9% cash).
- **Daytrade count:** 0 | **Open orders:** NONE
- **Audit:** clean | **hardLockRecommended:** false
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`

## TURNOVER: 2/2 trades used today, ~32.2% of 20% weekly budget used
- Today: HOOD SELL 1 @ $100.96; AVGO SELL 1 @ $360.33.
- Daily discretionary budget **SPENT**. No further position-changing trades today.
- Weekly TO Mon Jul 13–Sun Jul 19 exceeds 20% ceiling. **No discretionary buys** through Sun Jul 19.
- Compliance-cleanup only if a true unauthorized position appears (none now).

## HARD_LOCK inactive
- Do not invent HARD_LOCK.
- When lifting locks use exact heading `HARD_LOCK LIFTED` (N/A this cycle).

## CRITICAL EVENT RESPONSE — CLEAR (detector NONE)
- Morning CRITICAL is **over**. Midday tape orderly. No autonomous event sells required.
- Still **NO NEW BUYS** (daily+weekly TO + caps — not because of CRITICAL).

## Cash / under-deployment blockers (explicit)
1. Daily turnover **2/2 spent**.
2. Weekly turnover **~32.2% > 20%**.
3. VOO room ~$97 < 1 share (~$685).
4. QQQ room ~$84 < 1 share (~$695).
5. 24h cooldown on HOOD and AVGO (sold today).
6. Anti-churn: no same-day re-buy of sold symbols.

## Position Instructions

### QQQ — HOLD 6 — DO NOT SELL — DO NOT ADD
- Core. **No stop.** Soft Nasdaq is not a sell signal.
- No full exit. No trim. Target 36–45%.

### VOO — HOLD 4 — DO NOT SELL — DO NOT ADD
- Core. **No stop.** Preferred later deploy vehicle when budget+room reopen (Mon+).
- No full exit. Target 21–30%.

### AVGO — FLAT — NO POSITION
- Sold today @ $360.33. Still ~$369 — **do not chase**.
- **Do NOT re-buy** within 24h. No limit bids. No market orders.
- Anti-churn applies for remainder of session.

### HOOD — FLAT — NO POSITION
- Sold today @ $100.96 (was not on prior hourly trigger list).
- **Do NOT re-buy** within 24h. No invent re-entry.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA / SOXX / GOOG / RKLB / SHLD / ARKX / EIS / QTUM / GLD — no buy authorization this cycle
- Not on active buy list. Weekly TO + daily budget block all discretionary adds.
- Avoid phrasing that trips the ban parser unless a true permanent ban is intended; **no buys authorized** for these symbols today.

## Active Sell Triggers
- **NONE.** Do not invent stops, trails, or event-response sells for QQQ/VOO.
- Core ETF risk is managed at hourly cadence only.
- If detector returns CRITICAL: **still no QQQ/VOO sells** unless a future hourly writes an executable condition after two-cycle confirmation. Default = hold core + no new buys.

## Ranked Execution Priority
1. **Hold book.** No orders expected rest of Friday.
2. Mon+ only (not today): VOO limit add if weekly TO headroom + ≥1 share cap room + non-CRITICAL + fresh hourly authorize.
3. Never re-buy AVGO/HOOD inside 24h. Never META.

## Hard Rules
- Order path only: `bun run src/tools/alpaca_cli.ts submit-order`.
- No direct REST / `bun -e` / curl order submission. No lock-file edits by tactical.
- No same-day round trips. No new shorts. No after-hours equity orders.
- Re-read this file before every order batch.
- **Event-response guard:** Do not sell a single-name below an hourly catastrophic floor **unless price is through that floor**. Do not invent floors not written here.
- Next hourly: 12:35 ET. Next tactical: 11:40 / 11:50 ET → expect **NO_ACTION**.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Current Book
- QQQ 6 (~44.1%) | VOO 4 (~29.0%)
- Cash ~$2,543 (~26.9%) | Gross ~73.1%
