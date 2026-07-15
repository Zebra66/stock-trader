# Hourly Macro Memory
*Updated 2026-07-15 15:36Z (Wednesday 11:35 AM ET). Market OPEN — event detector NONE. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-15 15:36Z (Wed 11:35 AM ET)
- **Status:** Market **OPEN**. Event detector **NONE** (all broad + held OK; sector rotation NONE). Prior 14:40Z tactical CRITICAL (SOXX/SMH multi-day gap artifact / soft semi print) is **cleared by this hourly reassessment**. Not a true crash. Proceed hold-only on **process grounds** (weekly TO + caps), not crash response.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~15:35Z):** Equity **~$9,672** | Cash **$1,594.04** | Long **~$8,078** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.5% since Tue close.
- **Goal check:** Portfolio **~–3.3%** vs SPY **~+4.95%** (SPY ~753.5 vs 718.01). **Both goals FAILED.** Gap **~–8.2 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.5% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD winners; QQQ/VOO firm).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, weekly gross turnover **~21.6% of equity** (Mon HOOD/AVGO trail sells + Tue VOO buys) → **above 20% weekly budget**. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. **NVDA four-gate 2/4** (QQQ FAIL ~$716.0, SOXX FAIL ~$551). Protect AVGO/HOOD via existing trails only. **CRITICAL buy-suspension override lifted** (detector clean).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$716.0 | ~$4,296 | ~44.4% | ~–$3 | ~–0.1% |
| VOO | 4 | $683.39 | ~$692.6 | ~$2,771 | ~28.7% | ~+$37 | ~+1.4% |
| AVGO | 2 | $371.95 | ~$390.2 | ~$780 | ~8.1% | ~+$37 | ~+4.9% |
| HOOD | 2 | $101.50 | ~$115.6 | ~$231 | ~2.4% | ~+$28 | ~+13.9% |
| Cash | — | — | — | $1,594.04 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,672** | **100%** | — | **~–3.3%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → mid-morning ~83.5% → 11:35 ~83.5%. No unauthorized drift.

## Performance Review — Wed July 15 11:35 ET
- **1D (vs Tue last_equity $9,681.70):** portfolio **~flat / –0.1%**. Mild open strength faded; SPY ~flat on day.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.3%** vs SPY **~+5.0%**. Gap **~–8.2 pp**.
- **What is working:** Core intact; AVGO (~+4.9%) and HOOD (~+13.9%) winners with trails far from price. Process: no churn, audit clean, no AH orders, weekly budget respected.
- **What is not working:** Absolute still red. Cash ~16.5% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed. Gap to SPY ~8 pp.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess only post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.3%
- **S&P 500 since inception:** ~+5.0% (SPY ~753.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$131** → **cannot buy 1 VOO** (~$693).
  2. QQQ 45% room ~**$57** → **cannot buy 1 QQQ** (~$716).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **2/4** — QQQ ≥ $716 **FAIL** (~$716.0) | NVDA ≥ $209 **PASS** (~$209.5) | SOXX ≥ $562 **FAIL** (~$551) | no CRITICAL **PASS**. **TSMC earnings ~Thu Jul 16** remains sector binary regardless.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 11:35 AM ET
- **Broad market:** SPY ~753.5, QQQ ~716 soft/flat. Event severity **NONE**. Orderly. Softer inflation / tech narrative still in headlines; earnings season in focus. Not a regime flip.
- **Geopolitical:** Hormuz/Iran / oil ~$87 premium — background only; equity tape not liquidating. Not a liquidation trigger for core beta.
- **Fed:** Soft CPI narrative still supporting risk — stay **neutral**.
- **Semiconductors:** SOXX ~$551 soft; NVDA ~$209.5 (still ≥ $209 but QQQ gate now FAIL); AVGO ~$390 constructive. **TSMC full earnings ~Thu Jul 16** still the sector binary (June revenue strength / Q2 AI demand). **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+4.9%. Trail **$380** intact (~2.6% buffer). Apple $30B Broadcom deal headlines + MS “core AI winner” — constructive, **not** an add (weekly budget). No trail change.
- **HOOD:** 2 shares, ~+13.9%. Trail **$108** intact (~6.5% buffer). No add.
- **News source:** Google News RSS + Yahoo Finance RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD.

## Universe Performance Snapshot (Yahoo Finance fallback, ~15:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $390.0 | +0.3% | –1.0% | –2.1% | +10.9% | +38.8% |
| EIS | $122.7 | +2.7% | –3.2% | –2.9% | +3.0% | +31.2% |
| GLD | $371.5 | –0.8% | –6.3% | –15.6% | –11.8% | +21.1% |
| GOOG | $370.1 | +3.2% | +0.8% | +11.2% | +12.1% | +102.2% |
| HOOD | $115.4 | +1.7% | +17.6% | +32.9% | +6.1% | +16.0% |
| META | $677.8 | +12.4% | +14.2% | +0.1% | +9.3% | –4.6% |
| NVDA | $209.2 | +2.5% | –1.5% | +5.5% | +12.3% | +22.6% |
| QQQ | $715.4 | +0.6% | –3.9% | +11.7% | +15.2% | +28.5% |
| QTUM | $147.8 | –3.1% | –12.1% | +18.1% | +24.8% | +59.8% |
| RKLB | $77.2 | –7.4% | –29.3% | –6.9% | –19.8% | +73.1% |
| SHLD | $60.4 | –3.6% | –4.5% | –18.0% | –22.4% | –0.1% |
| SOXX | $549.0 | –2.3% | –12.7% | +35.2% | +60.3% | +122.9% |
| VOO | $692.4 | +1.0% | –0.2% | +7.4% | +8.9% | +21.1% |
| ARKX | $31.6 | –2.2% | –10.2% | –5.6% | –10.2% | +23.5% |
| SPY | $753.3 | +1.1% | –0.2% | +7.4% | +8.9% | +21.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.4%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+4.9%). Trail intact. No add (weekly budget). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+13.9%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | 2/4 gates (QQQ+SOXX FAIL); blocked by TSMC + weekly turnover. | 0–4% |
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
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA pre-TSMC (gates also FAIL this hour).
- **Worth monitoring:** TSMC earnings Thu Jul 16; ASML/AI strength continuity; whether VOO/QQQ prices or equity drift free 1-share room later this week; Hormuz/oil premium; AVGO Apple deal / AI winner narrative.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m +18% (already hold small); NVDA $5T / MS top-pick headlines (noise until post-TSMC).

## Cap Math (equity ~$9,672)
- QQQ 45%: max ~$4,352; held ~$4,296; room **~$57** → cannot add 1 (~$716).
- VOO 30%: max ~$2,902; held ~$2,771; room **~$131** → cannot add 1 (~$693).
- Stock 15%: max ~$1,451; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $209: post weight ~2.2% — structure/TSMC week + gates + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.5%. Daytrades 0.
- **Event detector:** 15:35Z **NONE**. Prior 14:40Z CRITICAL override **cleared** by this hourly reassessment (not a true crash; semi soft but SPY/QQQ OK).
- **FMP:** disabled. Yahoo Finance chart primary; Google News RSS + Yahoo RSS for headlines.
- **Alpaca bars:** EIS TradeCount 1; QTUM TradeCount 3; GLD TradeCount 2 — illiquid. VOO bar slightly older (15:20Z) but position `current_price` fresh. Bars otherwise ~15:34Z.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.6% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** in sync with origin/main (0/0).

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
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — verify direction before panic response. Hourly reassesses and clears autonomous CRITICAL buy-suspension when detector returns NONE and tape is orderly.

## Prior Tactical Executions (Key Events)
- **2026-07-15 14:40Z:** Tactical CRITICAL override — no trades (correct). Buys suspended until this hourly.
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 17:36Z:** CRITICAL upward semi spike — correctly no trades.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
