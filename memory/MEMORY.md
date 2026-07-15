# Hourly Macro Memory
*Updated 2026-07-15 14:36Z (Wednesday 10:35 AM ET). Market OPEN — second full hourly of session.*

---

## Hourly Cycle Summary — 2026-07-15 14:36Z (Wed 10:35 AM ET)
- **Status:** Market **OPEN**. Event detector **NONE** (all broad + held OK; sector rotation NONE). Prior mid-morning CRITICAL was multi-day UP-gap artifact; **this print is clean**. Not CRITICAL. Proceed hold-only on process grounds (not crash response).
- **Repo integrity:** Was behind origin by 3; stashed local ledger/prices noise, fast-forwarded to `b276e001`. Branch = origin/main (0/0). `.gitignore` effective (`git check-ignore node_modules/zod/package.json` OK). Audit **OK**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~14:35Z):** Equity **~$9,685** | Cash **$1,594.04** | Long **~$8,091** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.5–83.6% since Tue close.
- **Goal check:** Portfolio **~–3.1%** vs SPY **~+5.1%** (SPY ~754.5 vs 718.01). **Both goals FAILED.** Gap **~–8.2 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.5% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD winners; QQQ/VOO firm).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, weekly gross turnover **~21.6% of equity** (Mon HOOD/AVGO trail sells + Tue VOO buys) → **above 20% weekly budget**. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. **NVDA four-gate 3/4** (SOXX FAIL at ~$553.5). Protect AVGO/HOOD via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$717.4 | ~$4,305 | ~44.4% | ~+$6 | ~+0.1% |
| VOO | 4 | $683.39 | ~$693.6 | ~$2,775 | ~28.7% | ~+$41 | ~+1.5% |
| AVGO | 2 | $371.95 | ~$391.6 | ~$783 | ~8.1% | ~+$39 | ~+5.3% |
| HOOD | 2 | $101.50 | ~$114.5 | ~$229 | ~2.4% | ~+$26 | ~+12.8% |
| Cash | — | — | — | $1,594.04 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,685** | **100%** | — | **~–3.1%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → mid-morning ~83.5%. No unauthorized drift.

## Performance Review — Wed July 15 10:35 ET
- **1D (vs Tue last_equity $9,681.70):** portfolio **~flat / +0.0–0.1%**. Mild open strength faded; SPY ~flat on day.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.1%** vs SPY **~+5.1%**. Gap **~–8.2 pp**.
- **What is working:** Core intact; AVGO (~+5.3%) and HOOD (~+12.8%) winners with trails far from price. Process: no churn, audit clean, no AH orders, weekly budget respected.
- **What is not working:** Absolute still red. Cash ~16.5% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed. Gap to SPY ~8 pp.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess only post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.1%
- **S&P 500 since inception:** ~+5.1% (SPY ~754.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$131** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$54** → **cannot buy 1 QQQ** (~$717).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **3/4** — QQQ ≥ $716 **PASS** | NVDA ≥ $209 **PASS** (~$210.6) | SOXX ≥ $562 **FAIL** (~$553.5) | no CRITICAL **PASS**. **TSMC earnings ~Thu Jul 16** remains sector binary regardless.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 10:35 AM ET
- **Broad market:** SPY ~754.5, QQQ ~717 slightly softer than open (~724). Event severity **NONE**. Orderly; ASML/AI + bank earnings still supporting risk narrative; wholesale inflation in focus. Headline “warning sign” / vol-bet noise — **not** a regime flip.
- **Geopolitical:** Hormuz/Iran premium — background only; equity tape not liquidating. Not a liquidation trigger for core beta.
- **Fed:** Soft CPI narrative still supporting risk — stay **neutral**.
- **Semiconductors:** SOXX ~$553–554 soft vs open (~$570 memory); NVDA ~$210.6 (still ≥ $209); AVGO ~$392 constructive. **TSMC full earnings ~Thu Jul 16** still the sector binary (June revenue / Q2 AI demand; ASML hand-show supportive but NVDA risk headlines exist). **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+5.3%. Trail **$380** intact (~3% buffer). EU cloud groups urge interim measures vs Broadcom (background regulatory noise — **not** a trail change). No add.
- **HOOD:** 2 shares, ~+12.8%. Trail **$108** intact (~6% buffer). No add.
- **News source:** Google News RSS + Yahoo Finance RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD.

## Universe Performance Snapshot (Yahoo Finance fallback, ~14:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $391.1 | +0.6% | –0.7% | –1.8% | +11.2% | +39.2% |
| EIS | $123.0 | +2.9% | –2.9% | –2.6% | +3.3% | +31.6% |
| GLD | $372.8 | –0.4% | –6.0% | –15.3% | –11.5% | +21.5% |
| GOOG | $366.1 | +2.1% | –0.3% | +10.0% | +10.8% | +99.9% |
| HOOD | $114.4 | +0.8% | +16.6% | +31.8% | +5.2% | +15.0% |
| META | $674.1 | +11.8% | +13.6% | –0.4% | +8.7% | –5.1% |
| NVDA | $210.5 | +3.1% | –0.9% | +6.1% | +13.0% | +23.3% |
| QQQ | $717.0 | +0.8% | –3.6% | +11.9% | +15.4% | +28.8% |
| QTUM | $149.1 | –2.2% | –11.3% | +19.1% | +25.9% | +61.2% |
| RKLB | $79.0 | –5.2% | –27.7% | –4.7% | –17.9% | +77.2% |
| SHLD | $60.7 | –3.2% | –4.1% | –17.7% | –22.1% | +0.2% |
| SOXX | $552.3 | –1.7% | –12.1% | +36.0% | +61.3% | +124.3% |
| VOO | $693.5 | +1.2% | –0.1% | +7.5% | +9.0% | +21.3% |
| ARKX | $31.8 | –1.4% | –9.5% | –4.9% | –9.5% | +24.5% |
| SPY | $754.5 | +1.2% | 0.0% | +7.5% | +9.1% | +21.3% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.4%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+5.3%). Trail intact. No add (weekly budget). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+12.8%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | 3/4 gates (SOXX FAIL); blocked by TSMC + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; soft print; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour → next)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. Do not re-buy without fresh hourly.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today.
5. **Cash blocker stands:** caps + weekly turnover. Do not force deploys.
6. **If detector returns CRITICAL (true crash):** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs. Do **not** invent HARD_LOCK from multi-day UP gaps.
7. **Post-TSMC (Thu+):** reassess NVDA four-gate + weekly budget remaining; never invent thin-ETF filler.

## Ranked Deployment Queue (NOT authorized this hour)
1. **VOO** — only if cap room ≥ 1 full share **and** weekly turnover headroom exists. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment**; then require all four gates + fresh hourly line + budget.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA pre-TSMC (SOXX gate also FAIL this hour).
- **Worth monitoring:** TSMC earnings Thu Jul 16; ASML/AI strength continuity; whether VOO/QQQ prices or equity drift free 1-share room later this week; Hormuz/oil premium; AVGO EU regulatory noise.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m +17% (already hold small); NVDA China-export / buy-point headlines (noise until post-TSMC).

## Cap Math (equity ~$9,685)
- QQQ 45%: max ~$4,358; held ~$4,305; room **~$54** → cannot add 1 (~$717).
- VOO 30%: max ~$2,906; held ~$2,775; room **~$131** → cannot add 1 (~$694).
- Stock 15%: max ~$1,453; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $211: post weight ~2.2% — structure/TSMC week + SOXX gate + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.5%. Daytrades 0.
- **Event detector:** 14:35Z **NONE** (prior 10:20 CRITICAL was multi-day UP artifact). Proceed hold-only on turnover/caps.
- **FMP:** disabled. Yahoo Finance chart primary; Google News RSS + Yahoo RSS for headlines.
- **Alpaca bars:** EIS bar thin (TradeCount 1); QTUM TradeCount 2 — illiquid. VOO TradeCount often low — limit only if any future add. Bars timestamps ~14:34Z — fresh.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.6% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** was behind origin by 3 (prior hourlies); fast-forwarded before decisions.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are tight** (QQQ maxed at 6 shares; VOO 4 near 30%).
- **VOO symbolCap is 30%** — preferred cash-deployment vehicle when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade; **even full price pass does not override TSMC binary week policy.**
- **Cash ≤10% target in neutral/offensive** — excess for 2+ hours → limit-add underweight core ETF; **if caps bind, write exact blocker** (current state).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band is 75–90%** (doctrine). Live 83.5% is correct; do not de-risk into cash.
- **Turnover budget is real:** daily **and** weekly. Weekly ceiling binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — verify direction before panic response.

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 17:36Z:** CRITICAL upward semi spike — correctly no trades.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
