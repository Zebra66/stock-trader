# Hourly Macro Memory
*Updated 2026-07-15 13:42Z (Wednesday ~9:42 AM ET). Market OPEN — second pass same open window after 9:35 hold-only.*

---

## Hourly Cycle Summary — 2026-07-15 13:42Z (Wed ~9:40 AM ET)
- **Status:** Market **OPEN**. Pre-fetch event detector labeled **CRITICAL**, but severity is from a **multi-day UP baseline** (prior print Mon 19:30Z → Wed open: SOXX +2.8%, SMH +2.3%, QQQ +1.5%). **Not a crash.** 9:35Z pass correctly saw **MINOR** (SOXX only). Response: **no new buys** (already bound) + review stops (none near) + hold core.
- **Repo integrity:** **Critical process breach fixed this cycle** — git index had mass staged deletions (entire tree). Restored via `git restore --staged .` + restored `.gitignore`. `git check-ignore node_modules/zod/package.json` OK. Branch = origin/main (0/0).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~13:41Z):** Equity **~$9,716–9,717** | Cash **$1,594.04** | Long **~$8,122** | Gross **83.6%** | BP ~$29.1k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift (stable ~83.5–83.6% since Tue close).
- **Goal check:** Portfolio **~–2.8%** vs SPY **~+5.1%** (SPY ~754.5 vs 718.01). **Both goals FAILED.** Gap **~–7.9 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.4% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD winners; QQQ/VOO constructive).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, but **weekly gross turnover already ~21.5% of equity** (Mon HOOD/AVGO trail sells + Tue VOO buys) → **above 20% weekly budget**. Caps still block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. Protect AVGO/HOOD via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$721.1 | ~$4,327 | ~44.5% | ~+$28 | ~+0.7% |
| VOO | 4 | $683.39 | ~$693.5 | ~$2,774 | ~28.5% | ~+$40 | ~+1.5% |
| AVGO | 2 | $371.95 | ~$396.5 | ~$793 | ~8.2% | ~+$49 | ~+6.6% |
| HOOD | 2 | $101.50 | ~$114.6 | ~$229 | ~2.4% | ~+$26 | ~+12.9% |
| Cash | — | — | — | $1,594.04 | ~16.4% | — | — |
| **Equity** | — | — | — | **~$9,717** | **100%** | — | **~–2.8%** |

- **Gross long exposure:** 83.6%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6%. No unauthorized drift.

## Performance Review — Wed July 15 open
- **1D (vs Tue last_equity $9,681.70):** portfolio **~+0.4%**. SPY firm on open; absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–2.8%** vs SPY **~+5.1%**. Gap **~–7.9 pp**.
- **What is working:** Core intact; AVGO (~+6.6%) and HOOD (~+13%) winners with trails far from price. Process discipline (no overnight churn, audit clean, VOO deploys authorized Tue only).
- **What is not working:** Absolute still red. Cash ~16.4% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed. Gap to SPY ~8 pp.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–2.8%
- **S&P 500 since inception:** ~+5.1% (SPY ~754.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$141** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$46** → **cannot buy 1 QQQ** (~$721).
  3. **Weekly turnover already ~21.5%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA price gates roughly **PASS** (~$212 ≥ $209; QQQ ≥ $716; SOXX ≥ $562), but **TSMC earnings ~Thu Jul 16** remains sector binary + weekly budget binds.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.
  6. Event CRITICAL label this pass is **up-move multi-day artifact** → still **no new buys** (already bound).

## Market Intel — Wednesday ~9:40 AM ET
- **Broad market:** SPY ~754.5, QQQ ~721 firm. ASML/AI trade headlines supporting risk; wholesale inflation / CPI narrative mixed but NY Fed Williams “inflation peaked / rates well positioned” supportive background. Some “warning sign / plunge odds” headline noise — **not** a regime flip.
- **Geopolitical:** Hormuz/oil premium still live (US–Iran blockade headlines) — background risk, **not** a liquidation trigger for QQQ/VOO core.
- **Fed/inflation:** Softish wholesale inflation print + Williams comments; residual hawk talk in older headlines — stay **neutral**.
- **Semiconductors:** SOXX ~$567, NVDA ~$212, AVGO ~$396 strong. **TSMC full earnings ~Thu Jul 16** still the sector binary. **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+6.6%. Trail **$380** intact (~4%+ buffer). No add.
- **HOOD:** 2 shares, ~+13%. Trail **$108** intact (~6%+ buffer). No add.
- **NVDA four-gate (price only):** QQQ ≥ $716 **PASS** | NVDA ≥ $209 **PASS** (~212) | SOXX ≥ $562 **PASS** (~567) | no true crash CRITICAL **PASS**. **Price gates pass**, but **TSMC week + weekly turnover → still NO NVDA today.**
- **News source:** Google News RSS + Yahoo Finance RSS (Google Search tool unavailable). Bing oil/geo RSS. FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Yahoo calendarEvents empty for held names / NVDA/GOOG/META/TSM this cycle. Known from prior: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug.

## Universe Performance Snapshot (Yahoo Finance fallback, ~13:42Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $396.4 | –1.2% | +0.6% | –0.1% | +15.6% | +41.1% |
| EIS | $122.5 | +2.4% | –3.4% | –3.9% | +2.6% | +31.0% |
| GLD | $372.8 | –1.4% | –6.0% | –15.4% | –11.9% | +21.5% |
| GOOG | $361.7 | +1.5% | –1.5% | +8.1% | +8.6% | +97.5% |
| HOOD | $113.6 | –1.4% | +15.7% | +30.0% | +2.9% | +14.1% |
| META | $659.1 | +4.4% | +11.1% | –1.8% | +6.2% | –7.2% |
| NVDA | $212.0 | +4.5% | –0.2% | +6.6% | +13.3% | +24.2% |
| QQQ | $721.4 | –0.3% | –3.0% | +13.2% | +16.0% | +29.6% |
| QTUM | $150.1 | –3.5% | –10.7% | +21.6% | +27.0% | +62.3% |
| RKLB | $78.0 | –5.5% | –28.6% | +6.0% | –14.1% | +74.9% |
| SHLD | $60.7 | –1.3% | –4.2% | –18.7% | –21.6% | +0.2% |
| SOXX | $566.6 | –2.6% | –9.8% | +41.0% | +68.0% | +130.1% |
| VOO | $693.6 | +0.4% | 0.0% | +7.8% | +8.9% | +21.3% |
| ARKX | $32.0 | –1.0% | –9.1% | –2.5% | –7.5% | +25.0% |
| SPY | $754.6 | +0.4% | 0.0% | +7.8% | +9.0% | +21.3% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.5%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+6.6%). Trail intact. No add (weekly budget). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+13%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Price gates pass; blocked by TSMC binary + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; not needed. | 0% |
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

## Cap Math (equity ~$9,717)
- QQQ 45%: max ~$4,373; held ~$4,327; room **~$46** → cannot add 1 (~$721).
- VOO 30%: max ~$2,915; held ~$2,774; room **~$141** → cannot add 1 (~$694).
- Stock 15%: max ~$1,458; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $212: post weight ~2.2% — structure/TSMC week + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **Event detector:** 13:40Z labeled CRITICAL on multi-day UP moves (prior Mon 19:30Z). **Interpret as false crash.** 9:35Z MINOR was correct for session. Still no new buys.
- **FMP:** disabled. Yahoo Finance chart primary; Google/Yahoo/Bing RSS for headlines.
- **Alpaca bars:** EIS/QTUM/ARKX low TradeCount — illiquid. VOO TradeCount often low — limit only if any future add.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.5% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Repo:** fixed staged mass-delete index corruption this cycle before trading decisions.

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

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 17:36Z:** CRITICAL upward semi spike — correctly no trades.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
