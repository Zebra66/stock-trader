# Hourly Macro Memory
*Updated 2026-07-15 16:36Z (Wednesday 12:35 PM ET). Market OPEN — event detector NONE. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-15 16:36Z (Wed 12:35 PM ET)
- **Status:** Market **OPEN**. Event detector **NONE** (broad + held OK; sector rotation NONE). Soft midday risk-off in Nasdaq/semis; not a regime flip. **HOLD-ONLY** on process grounds (weekly TO + caps).
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.4%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~16:35Z):** Equity **~$9,621** | Cash **$1,594.04** | Long **~$8,027** | Gross **~83.4%** | BP ~$28.9k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. Tactical 12:10/12:20/12:30 all NO_ACTION (compliant). **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.4–83.5% all day.
- **Goal check:** Portfolio **~–3.8%** vs SPY **~+4.5%** (SPY ~750.5 vs 718.01). **Both goals FAILED.** Gap **~–8.3 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.4%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.6% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD still winners; VOO firm).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, weekly gross turnover **~21.8% of equity** → **above 20% weekly budget**. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** blocks new chip beta. **NVDA four-gate 0–1/4** (QQQ FAIL ~$711, NVDA FAIL ~$206, SOXX FAIL ~$540, no CRITICAL PASS). Protect AVGO/HOOD via existing trails only. No trail change (do not tighten).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$711.1 | ~$4,266 | ~44.3% | ~–$32 | ~–0.8% |
| VOO | 4 | $683.39 | ~$689.8 | ~$2,759 | ~28.7% | ~+$26 | ~+0.9% |
| AVGO | 2 | $371.95 | ~$387.2 | ~$774 | ~8.1% | ~+$31 | ~+4.1% |
| HOOD | 2 | $101.50 | ~$113.1 | ~$226 | ~2.4% | ~+$23 | ~+11.4% |
| Cash | — | — | — | $1,594.04 | ~16.6% | — | — |
| **Equity** | — | — | — | **~$9,621** | **100%** | — | **~–3.8%** |

- **Gross long exposure:** ~83.4%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → 11:35 ~83.5% → 12:35 ~83.4%. No unauthorized drift.

## Performance Review — Wed July 15 12:35 ET
- **1D (vs Tue last_equity $9,681.70):** portfolio **~–0.6%**. Nasdaq soft (~QQQ –1.2% day); SPY modestly soft. Mild open strength faded into midday.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.8%** vs SPY **~+4.5%**. Gap **~–8.3 pp**.
- **What is working:** Core intact; AVGO (~+4.1%) and HOOD (~+11.4%) winners with trails intact. Process: no churn, audit clean, weekly budget respected, tactical hold-only compliant all morning.
- **What is not working:** Absolute still red. Cash ~16.6% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed. Soft semi/Nasdaq day widens gap modestly.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess only post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.8%
- **S&P 500 since inception:** ~+4.5% (SPY ~750.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$127** → **cannot buy 1 VOO** (~$690).
  2. QQQ 45% room ~**$63** → **cannot buy 1 QQQ** (~$711).
  3. **Weekly turnover already ~21.8%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **0–1/4** — QQQ ≥ $716 **FAIL** (~$711) | NVDA ≥ $209 **FAIL** (~$206) | SOXX ≥ $562 **FAIL** (~$540) | no CRITICAL **PASS**. **TSMC earnings ~Thu Jul 16** remains sector binary.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 12:35 PM ET
- **Broad market:** SPY ~750.5 soft, QQQ ~711 softer (~–1.2% day). Event severity **NONE**. Orderly pullback after softer-inflation / earnings-lift open narrative. Not a liquidation tape; not a regime flip.
- **Geopolitical:** Middle East / oil premium still in headlines — background only; equities not liquidating core beta.
- **Fed:** Soft PPI / inflation narrative mixed with midday profit-taking — stay **neutral**.
- **Semiconductors:** SOXX ~$540 soft (~–1d weak); NVDA ~$206 (below prior $209 gate); AVGO ~$387 still constructive vs entry. **TSMC full earnings ~Thu Jul 16** still the sector binary. **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+4.1%. Trail **$380** intact (~1.9% buffer; tighter than morning but **do not lower**). No add (weekly budget).
- **HOOD:** 2 shares, ~+11.4%. Trail **$108** intact (~4.5% buffer). Yahoo note on prediction-markets earnings boost — constructive background, **not** an add.
- **News source:** Google News RSS + Yahoo Finance RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD.

## Universe Performance Snapshot (Yahoo Finance fallback, ~16:36Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $387.1 | –3.5% | –1.7% | –2.4% | +12.9% | +37.8% |
| EIS | $121.8 | +1.9% | –3.9% | –4.4% | +2.1% | +30.3% |
| GLD | $369.8 | –2.2% | –6.7% | –16.0% | –12.6% | +20.6% |
| GOOG | $370.8 | +4.1% | +1.0% | +10.9% | +11.3% | +102.5% |
| HOOD | $112.8 | –2.1% | +14.9% | +29.2% | +2.2% | +13.3% |
| META | $681.1 | +7.8% | +14.8% | +1.4% | +9.7% | –4.1% |
| NVDA | $206.4 | n/a | –2.8% | n/a | +10.4% | +20.9% |
| QQQ | $710.8 | –1.7% | –4.5% | +11.5% | +14.3% | +27.7% |
| QTUM | $145.7 | –6.4% | n/a | +18.1% | +23.3% | +57.5% |
| RKLB | $75.1 | –9.0% | –31.3% | +2.0% | –17.3% | +68.4% |
| SHLD | $60.0 | –2.4% | –5.2% | –19.6% | –22.4% | –0.9% |
| SOXX | $539.5 | –7.3% | –14.2% | +34.3% | +60.0% | +119.1% |
| VOO | $689.8 | –0.1% | –0.6% | +7.2% | +8.3% | +20.6% |
| ARKX | $31.2 | –3.5% | –11.3% | –4.9% | –9.8% | +22.0% |
| SPY | $750.4 | –0.2% | –0.6% | +7.2% | +8.4% | +20.6% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.3%, near 45% cap. Cannot add 1 share. Soft day — hold, no stop. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+4.1%). Trail intact (~1.9% buffer). No add (weekly budget). Do not tighten. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+11.4%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Gates FAIL (QQQ/NVDA/SOXX); blocked by TSMC + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; soft print; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour → next)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. Do not re-buy without fresh hourly. Do not lower trail.
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
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA pre-TSMC (gates FAIL).
- **Worth monitoring:** TSMC earnings Thu Jul 16; whether VOO/QQQ prices or equity drift free 1-share room later this week; midday Nasdaq softness depth; Hormuz/oil premium; HOOD prediction-markets narrative.
- **Interesting but not actionable yet:** META strength (banned); SpaceX/IPO chatter; PayPal M&A noise (out of universe).

## Cap Math (equity ~$9,621)
- QQQ 45%: max ~$4,329; held ~$4,266; room **~$63** → cannot add 1 (~$711).
- VOO 30%: max ~$2,886; held ~$2,759; room **~$127** → cannot add 1 (~$690).
- Stock 15%: max ~$1,443; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $206: post weight ~2.1% — structure/TSMC week + gates + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.4%. Daytrades 0.
- **Event detector:** 16:35Z **NONE**. Soft tape but severity OK across SPY/QQQ/SOXX/held.
- **FMP:** disabled. Yahoo Finance chart primary; Google News RSS + Yahoo RSS for headlines.
- **Alpaca bars:** EIS TradeCount 1; QTUM TradeCount 3 — illiquid. Bars otherwise ~16:34Z (fresh).
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.8% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** in sync with origin/main (0/0). Tactical ledger/price-file updates present (compliant bookkeeping).

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
- **Neutral band is 75–90%** (doctrine). Live 83.4% is correct; do not de-risk into cash.
- **Turnover budget is real:** daily **and** weekly. Weekly ceiling binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — verify direction before panic response. Hourly reassesses and clears autonomous CRITICAL buy-suspension when detector returns NONE and tape is orderly.
- **Do not tighten trails intraday** on soft prints when thesis intact — trail review at most once/day.

## Prior Tactical Executions (Key Events)
- **2026-07-15 12:10–12:30 ET:** Tactical NO_ACTION cycles — trails intact, weekly TO respected (compliant).
- **2026-07-15 14:40Z:** Tactical CRITICAL override — no trades (correct); cleared by 11:35 hourly.
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
