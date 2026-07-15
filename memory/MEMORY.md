# Hourly Macro Memory
*Updated 2026-07-15 14:20Z (Wednesday ~10:20 AM ET). Market OPEN — ~10:35 hourly cycle.*

---

## Hourly Cycle Summary — 2026-07-15 14:20Z (Wed ~10:20 AM ET)
- **Status:** Market **OPEN**. Pre-fetch event detector again labeled **CRITICAL**, but priorTimestamp still Mon 19:30Z → Wed session: SOXX +1.5%, SMH +1.8%, QQQ +1.4% (all **UP** multi-day gap). **Not a crash.** Same false-CRITICAL artifact as 9:40Z pass. Response: hold + review stops (none near) + **no new buys** (already bound).
- **Repo integrity:** **Critical process breach again this cycle** — git index had mass staged deletions of entire tree; working-tree `memory/MEMORY.md` + `todo.md` clobbered back to Mon 7/13 closed-market state. Fixed: `git restore --staged .`, restored authoritative memory from `HEAD`, `.gitignore` effective (`git check-ignore node_modules/zod/package.json` OK). Branch = origin/main (0/0).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **$9,711.42** | Cash **$1,594.04** | Long **$8,117.38** | Gross **83.6%** | BP ~$29.1k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Exposure stable ~83.5–83.6% since Tue close.
- **Goal check:** Portfolio **–2.89%** vs SPY **+5.22%** (SPY ~755.5 vs 718.01). **Both goals FAILED.** Gap **~–8.1 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.4% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD winners; QQQ/VOO constructive).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, weekly gross turnover still **~21.6% of equity** (Mon HOOD/AVGO trail sells + Tue VOO buys) → **above 20% weekly budget**. Caps still block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. SOXX live ~$560 — **NVDA SOXX gate FAIL** this print (<$562). Protect AVGO/HOOD via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $720.64 | $4,323.84 | 44.5% | +$25.00 | +0.58% |
| VOO | 4 | $683.39 | $694.40 | $2,777.60 | 28.6% | +$44.04 | +1.61% |
| AVGO | 2 | $371.95 | $393.70 | $787.40 | 8.1% | +$43.50 | +5.85% |
| HOOD | 2 | $101.50 | $114.27 | $228.54 | 2.4% | +$25.54 | +12.58% |
| Cash | — | — | — | $1,594.04 | 16.4% | — | — |
| **Equity** | — | — | — | **$9,711.42** | **100%** | — | **–2.89%** |

- **Gross long exposure:** 83.6%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → this hour 83.6%. No unauthorized drift.

## Performance Review — Wed July 15 mid-morning
- **1D (vs Tue last_equity $9,681.70):** portfolio **~+0.3%**. Firm open; absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–2.89%** vs SPY **+5.22%**. Gap **~–8.1 pp**.
- **What is working:** Core intact; AVGO (~+5.9%) and HOOD (~+12.6%) winners with trails far from price. Process discipline (no overnight churn, audit clean, VOO deploys authorized Tue only).
- **What is not working:** Absolute still red. Cash ~16.4% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed. Gap to SPY ~8 pp.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** –2.89%
- **S&P 500 since inception:** +5.22% (SPY ~755.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$136** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$46** → **cannot buy 1 QQQ** (~$721).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: QQQ ≥ $716 **PASS**; NVDA ≥ $209 **PASS** (~$211.5); SOXX ≥ $562 **FAIL** (~$560); no true crash **PASS**. **Price gates 3/4 + TSMC tomorrow + weekly budget → still NO NVDA today.**
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.
  6. Event CRITICAL label is **up-move multi-day artifact** → still **no new buys** (already bound).

## Market Intel — Wednesday ~10:20 AM ET
- **Broad market:** SPY ~755.5, QQQ ~720 firm. ASML outlook / AI trade headlines supporting risk; earnings roll (BlackRock/MS). Softish inflation narrative from Tue still background-positive. Residual “plunge odds” noise — **not** a regime flip.
- **Geopolitical:** Hormuz/US–Iran blockade still live; Trump walked back some Hormuz tolls (MarketWatch). Oil premium background risk, **not** a liquidation trigger for QQQ/VOO core.
- **Fed/inflation:** Soft CPI/wholesale prints supporting risk tone; stay **neutral**.
- **Semiconductors:** SOXX ~$560 (softer than open ~$567), NVDA ~$211.5, AVGO ~$394 constructive. **TSMC full earnings ~Thu Jul 16** still the sector binary. ASML raised outlook — positive for AI equipment chain. **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+5.9%. Trail **$380** intact (~3.5% buffer to trail). No add.
- **HOOD:** 2 shares, ~+12.6%. Trail **$108** intact (~5.5% buffer). No add.
- **News source:** Google News RSS + Yahoo Finance RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** **TSMC ~Thu Jul 16** (tomorrow); META/GOOG late July; NVDA Aug. No held-name binary in next 48h.

## Universe Performance Snapshot (Yahoo Finance fallback, ~14:20Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $393.3 | –2.0% | –0.2% | –0.9% | +14.7% | +40.0% |
| EIS | $122.1 | +2.1% | –3.6% | –4.2% | +2.4% | +30.6% |
| GLD | $372.6 | –1.5% | –6.0% | –15.4% | –12.0% | +21.5% |
| GOOG | $363.9 | +2.1% | –0.9% | +8.8% | +9.2% | +98.8% |
| HOOD | $114.0 | –1.0% | +16.1% | +30.5% | +3.3% | +14.5% |
| META | $668.2 | +5.8% | +12.6% | –0.5% | +7.6% | –5.9% |
| NVDA | $211.9 | +4.5% | –0.2% | +6.6% | +13.3% | +24.2% |
| QQQ | $720.2 | –0.4% | –3.2% | +13.0% | +15.8% | +29.4% |
| QTUM | $149.8 | –3.7% | –10.9% | +21.4% | +26.8% | +62.0% |
| RKLB | $78.2 | –5.4% | –28.5% | +6.1% | –13.9% | +75.2% |
| SHLD | $60.5 | –1.6% | –4.5% | –19.0% | –21.9% | –0.1% |
| SOXX | $559.9 | –3.7% | –10.9% | +39.3% | +66.1% | +127.4% |
| VOO | $694.3 | +0.5% | +0.1% | +7.9% | +9.1% | +21.4% |
| ARKX | $31.8 | –1.6% | –9.6% | –3.1% | –8.1% | +24.3% |
| SPY | $755.3 | +0.5% | +0.1% | +7.9% | +9.1% | +21.4% |
| TSM | $422.0 | –3.4% | –4.4% | +12.5% | +23.5% | +78.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. 44.5%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+5.9%). Trail intact. No add (weekly budget). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+12.6%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | QQQ/NVDA pass; SOXX ~$560 FAIL; + TSMC binary + weekly TO. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; soft 1w/1m. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour → next)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. Do not re-buy without fresh hourly.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today.
5. **Cash blocker stands:** caps + weekly turnover. Do not force deploys. Detector CRITICAL is **not** a crash — do not liquidate core.
6. **If a true crash CRITICAL develops (intraday multi-name DOWN ≥ thresholds):** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs.
7. **Post-TSMC (Thu+):** reassess NVDA four-gate + weekly budget remaining; never invent thin-ETF filler.

## Ranked Deployment Queue (NOT authorized this hour)
1. **VOO** — only if cap room ≥ 1 full share **and** weekly turnover headroom exists. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment**; then require all four gates + fresh hourly line + budget.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA pre-TSMC. Ignore multi-day UP “CRITICAL” false crash framing.
- **Worth monitoring:** TSMC earnings Thu Jul 16; ASML/AI strength continuity; whether VOO/QQQ prices or equity drift free 1-share room later this week; Hormuz/oil premium.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m still strong (already hold small); PayPal/Stripe rumor noise; plunge-odds headlines.

## Cap Math (equity $9,711.42)
- QQQ 45%: max $4,370.14; held $4,323.84; room **~$46** → cannot add 1 (~$721).
- VOO 30%: max $2,913.43; held $2,777.60; room **~$136** → cannot add 1 (~$694).
- Stock 15%: max $1,456.71; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $211.5: post weight ~2.2% — SOXX gate FAIL + TSMC week + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **Event detector:** 14:18Z labeled CRITICAL on multi-day UP moves (prior Mon 19:30Z). **Interpret as false crash.** Still no new buys.
- **FMP:** disabled. Yahoo Finance chart primary; Google/Yahoo RSS for headlines.
- **Alpaca bars:** EIS/QTUM/ARKX/SHLD low TradeCount — illiquid. VOO TradeCount often low — limit only if any future add. NVDA liquid (TradeCount 124).
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.6% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Repo:** fixed staged mass-delete + stale Mon memory overwrite this cycle before trading decisions. Concurrent agents may rewrite working-tree memory — prefer `git show HEAD:memory/*` when timestamps lag.

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
- **Neutral band is 75–90%** (doctrine). Live 83.6% is correct; do not de-risk into cash.
- **Turnover budget is real:** daily **and** weekly. Weekly ceiling binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day gap can false-CRITICAL on UP moves** — distinguish crash vs gap artifact before liquidating.
- **Working-tree memory can be clobbered by concurrent agents** — verify freshness vs `git log` / `git show HEAD` every cycle.

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 17:36Z:** CRITICAL upward semi spike — correctly no trades.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
