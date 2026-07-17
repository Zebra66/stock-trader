# Tactical Todo — Updated 2026-07-17 15:35 ET (Hourly, post-close)
*Market CLOSED (regular session ended 4:00 PM ET). Event detector MINOR (CRITICAL cooled). Book: QQQ 6 / VOO 4. HOLD-ONLY. NO ORDERS until Mon regular open + fresh hourly.*

## Session Posture
- **Regime:** neutral (target 75–90%). Live gross **~73.1%** — slightly below floor due to morning HOOD+AVGO exits; **do not force adds**.
- **Market:** **CLOSED.** No after-hours / pre-market equity orders. Next regular session: **Mon Jul 20**.
- **Equity / cash:** ~$9,442 / ~$2,543 (~26.9% cash).
- **Daytrade count:** 0 | **Open orders:** NONE
- **Audit:** clean (QQQ/VOO only) | **hardLockRecommended:** false
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`

## TURNOVER: 2/2 trades used today, ~32.2% of 20% weekly budget used
- Today: HOOD SELL 1 @ $100.96; AVGO SELL 1 @ $360.33.
- Daily discretionary budget **SPENT**. No further position-changing trades today.
- Weekly TO Mon Jul 13–Sun Jul 19 exceeds 20% ceiling. **No discretionary buys** through Sun Jul 19.
- Compliance-cleanup only if a true unauthorized position appears (none now).

## HARD_LOCK inactive
- Do not invent HARD_LOCK.
- When lifting locks use exact heading `HARD_LOCK LIFTED` (N/A this cycle).

## Event status — CRITICAL cleared by hourly
- Prior 14:40 CRITICAL has cooled to **MINOR** (SOXX/SMH soft; broad/held OK).
- **Do not carry "NO NEW BUYS — CRITICAL EVENT"** as the buy block. Buys remain blocked by **turnover + caps + closed session**, not by CRITICAL.
- If detector returns CRITICAL before Mon open: still **no QQQ/VOO sells** (no two-cycle executable condition). Default = hold core + no new buys.

## Cash / under-deployment blockers (explicit)
1. Daily turnover **2/2 spent**.
2. Weekly turnover **~32.2% > 20%**.
3. VOO room ~$103 < 1 share (~$682).
4. QQQ room ~$80 < 1 share (~$695).
5. 24h cooldown on HOOD and AVGO (sold today).
6. Anti-churn: no same-day re-buy of sold symbols.
7. **Regular session closed** — no equity orders until Mon open.

## Position Instructions

### QQQ — HOLD 6 — DO NOT SELL — DO NOT ADD
- Core. **No stop.** Soft Nasdaq is not a sell signal.
- No full exit. No trim. Target 36–45%.

### VOO — HOLD 4 — DO NOT SELL — DO NOT ADD
- Core. **No stop.** Preferred later deploy vehicle when budget+room reopen (Mon+ hourly).
- No full exit. Target 21–30%.

### AVGO — FLAT — NO POSITION
- Sold today @ $360.33. Now ~$371 — **do not chase**.
- **Do NOT re-buy** without a fresh Mon+ hourly authorization after cooldown. No limit bids. No market orders.

### HOOD — FLAT — NO POSITION
- Sold today @ $100.96 (was not on prior hourly trigger list).
- **Do NOT re-buy** without a fresh Mon+ hourly authorization after cooldown.

### META — BANNED — DO NOT BUY — DO NOT RE-BUY — DO NOT ADD

### NVDA / SOXX / GOOG / RKLB / SHLD / ARKX / EIS / QTUM / GLD — no buy authorization this cycle
- Not on active buy list. Weekly TO + daily budget + closed session block all discretionary adds.
- Avoid phrasing that trips the ban parser unless a true permanent ban is intended; **no buys authorized** for these symbols this weekend.

## Active Sell Triggers
- **NONE.** Do not invent stops, trails, or event-response sells for QQQ/VOO.
- Core ETF risk is managed at hourly cadence only.
- If detector returns CRITICAL overnight/Mon open: **still no QQQ/VOO sells** unless a future hourly writes an executable condition after two-cycle confirmation. Default = hold core + no new buys.

## Ranked Execution Priority
1. **Hold book.** No orders expected until Mon regular open.
2. Mon+ only (not this weekend): VOO limit add if weekly TO headroom + ≥1 share cap room + non-CRITICAL + **fresh hourly authorize**.
3. Never re-buy AVGO/HOOD without new hourly line. Never META.

## Hard Rules
- Order path only: `bun run src/tools/alpaca_cli.ts submit-order`.
- No direct REST / `bun -e` / curl order submission. No lock-file edits by tactical.
- No same-day round trips. No new shorts. **No after-hours equity orders.**
- Re-read this file before every order batch.
- **Event-response guard:** Do not sell a single-name below an hourly catastrophic floor **unless price is through that floor**. Do not invent floors not written here.
- Next hourly: Mon Jul 20 ~9:35 ET (or next scheduled). Weekend tactical cycles → expect **NO_ACTION**.

## Concentration / Ban
- Caps: QQQ ≤45%, VOO ≤30%, other ETFs ≤20%, stocks ≤15%.
- `bannedSymbols: ["META"]`

## Current Book
- QQQ 6 (~44.2%) | VOO 4 (~28.9%)
- Cash ~$2,543 (~26.9%) | Gross ~73.1%

## Cycle Notes
- **2026-07-17 ~14:35 ET:** Tactical cycle — Event Response Mode MAJOR (SOXX spike). No authorized sells; no active buy conditions. NO_ACTION.
- <!-- Autonomous override applied at 2026-07-17 ~14:35 ET due to MAJOR event -->
