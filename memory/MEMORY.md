# Hourly Macro Memory
*Updated 2026-07-15 13:35Z (Wednesday 9:35 AM ET). Market OPEN — first hourly of session.*

---

## Hourly Cycle Summary — 2026-07-15 13:35Z (Wed 9:35 AM ET)
- **Status:** Market **OPEN**. Event detector **MINOR** (SOXX −0.56% only; SPY/QQQ/XLK/GLD/SMH OK; held AVGO/HOOD/QQQ/VOO all OK). Sector rotation **NONE**. Not CRITICAL.
- **Repo integrity:** Pulled origin (+2 commits). Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~13:35Z):** Equity **~$9,734** | Cash **$1,594.04** | Long **~$8,140** | Gross **~83.6%** | BP ~$29.2k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE** (overnight hold clean). Last session fills remain Tue VOO #1/#2 only. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift.
- **Goal check:** Portfolio **~–2.7%** vs SPY **~+5.1%** (SPY ~755.1 vs 718.01). **Both goals FAILED.** Gap **~–7.8 pp**.
- **Regime:** **Neutral** (unchanged; no flip — regime stability doctrine). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.4% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (QQQ/AVGO/HOOD constructive on open).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover resets to **0/2**, but **weekly gross turnover already ~21.5% of equity** (Mon–Tue authorized VOO buys + Mon HOOD/AVGO trail sells) → **above 20% weekly budget**. Do **not** authorize discretionary adds. Caps still block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. Protect AVGO/HOOD via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$723.8 | ~$4,343 | ~44.6% | ~+$44 | ~+1.0% |
| VOO | 4 | $683.39 | ~$694.1 | ~$2,776 | ~28.5% | ~+$43 | ~+1.6% |
| AVGO | 2 | $371.95 | ~$394.3 | ~$789 | ~8.1% | ~+$45 | ~+6.0% |
| HOOD | 2 | $101.50 | ~$116.1 | ~$232 | ~2.4% | ~+$29 | ~+14.4% |
| Cash | — | — | — | $1,594.04 | ~16.4% | — | — |
| **Equity** | — | — | — | **~$9,734** | **100%** | — | **~–2.7%** |

- **Gross long exposure:** ~83.6%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Overnight path:** stable ~83.5% close → ~83.6% open. No unauthorized drift.

## Performance Review — Wed July 15 open (first hourly of day)
- **1D (vs Tue last_equity $9,681.70):** portfolio **~+0.5%**. SPY ~+0.8% on open strength. Slight lag to SPY on the day so far; absolute still red inception.
- **1W:** portfolio still trailing SPY; HOOD/AVGO strength helping but cash + June liquidations dominate gap.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–2.7%** vs SPY **~+5.1%**. Gap **~–7.8 pp**.
- **What is working:** Core book intact; AVGO (~+6%) and HOOD (~+14%) winners with trails. QQQ/VOO constructive open. Process: no churn overnight, audit clean, no AH orders.
- **What is not working:** Absolute still red. Cash ~16.4% idle. Cap math still prevents 1-share core adds. Weekly turnover budget already consumed by Mon–Tue authorized activity. Gap to SPY ~8 pp.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess only if (a) equity/price drift creates true integer VOO room **and** weekly budget is re-interpreted as still available after protective-only stance, or (b) post-TSMC (Thu+) for any chip path. Prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–2.7%
- **S&P 500 since inception:** ~+5.1% (SPY ~755.1 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$144** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$38** → **cannot buy 1 QQQ** (~$724).
  3. **Weekly turnover already ~21.5%** of equity (Mon AVGO/HOOD sells + Tue VOO buys) → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **4/4 PASS** on price (~$213), but **TSMC earnings ~Thu Jul 16** remains sector binary.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 9:35 AM ET
- **Broad market:** SPY ~755 firm, QQQ ~724 firm. Event severity **MINOR** (SOXX only). Orderly open; futures extended overnight gains; ASML buoyed AI trade headlines; wholesale inflation data in focus later.
- **Geopolitical:** Hormuz/oil premium — background only; not a liquidation trigger for core beta.
- **Fed:** Soft CPI narrative still supporting risk; residual hawk talk (Waller-style) in older headlines — **no regime flip**.
- **Semiconductors:** SOXX ~$570 MINOR pullback, NVDA ~$213 (firm ≥ $209), AVGO ~$394 strong. **TSMC full earnings ~Thu Jul 16** still the sector binary (record June revenue / Q2 AI demand previews; Motley Fool “NVDA investors watch Jul 16”). **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+6%. Trail **$380** intact (~3.6% buffer). No add (weekly budget + no edge vs hold).
- **HOOD:** 2 shares, ~+14%. Trail **$108** intact (~7% buffer). No add.
- **NVDA four-gate (price only):** QQQ ≥ $716 **PASS** (~724) | NVDA ≥ $209 firm **PASS** (~213) | SOXX ≥ $562 **PASS** (~570) | no CRITICAL **PASS**. **4/4 price gates PASS**, but **TSMC week + weekly turnover → still NO NVDA today.**
- **News source:** Google News RSS + Yahoo Finance RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Yahoo calendarEvents empty for held names. Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. ASML print supportive for AI complex (background).

## Universe Performance Snapshot (Yahoo Finance fallback, ~13:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $394.5 | +1.5% | +0.1% | –1.0% | +15.0% | +40.4% |
| EIS | $118.0 | –4.0% | –9.2% | –7.3% | +0.3% | +26.2% |
| GLD | $372.4 | –0.6% | –6.1% | –15.4% | –12.0% | +21.4% |
| GOOG | $360.3 | +0.4% | –1.9% | +8.3% | +8.1% | +96.8% |
| HOOD | $115.9 | +2.1% | +18.1% | +33.4% | +5.0% | +16.4% |
| META | $661.7 | +9.7% | +11.5% | –2.2% | +6.6% | –6.9% |
| NVDA | $212.6 | +4.1% | +0.1% | +7.2% | +13.6% | +24.5% |
| QQQ | $723.1 | +1.6% | –2.8% | +12.9% | +16.3% | +29.9% |
| QTUM | $150.5 | –1.3% | –10.4% | +20.3% | +27.4% | +62.8% |
| RKLB | $80.4 | –3.6% | –26.5% | –3.1% | –11.5% | +80.2% |
| SHLD | $60.8 | –3.0% | –4.0% | –17.6% | –21.4% | +0.4% |
| SOXX | $569.4 | +1.3% | –9.4% | +40.3% | +68.8% | +131.2% |
| VOO | $693.9 | +1.3% | 0.0% | +7.6% | +9.0% | +21.3% |
| ARKX | $32.2 | –0.3% | –8.5% | –3.8% | –6.9% | +25.9% |
| SPY | $755.1 | +1.3% | 0.0% | +7.6% | +9.1% | +21.3% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+6%). Trail intact. No add (weekly budget). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+14%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Price gates 4/4 PASS; blocked by TSMC binary + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; MINOR print; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour → next)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. Do not re-buy without fresh hourly.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today.
5. **Cash blocker stands:** caps + weekly turnover. Do not force deploys.
6. **If detector returns CRITICAL:** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs.
7. **Post-TSMC (Thu+):** reassess NVDA four-gate + weekly budget remaining; never invent thin-ETF filler.

## Ranked Deployment Queue (NOT authorized this hour)
1. **VOO** — only if cap room ≥ 1 full share **and** weekly turnover headroom exists. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment**; then require all four gates + fresh hourly line + budget.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA pre-TSMC.
- **Worth monitoring:** TSMC earnings Thu Jul 16; ASML/AI strength continuity; whether VOO/QQQ prices or equity drift free 1-share room later this week; Hormuz/oil premium.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m +18% (already hold small); NVDA China-export headlines (noise until post-TSMC).

## Cap Math (equity ~$9,734)
- QQQ 45%: max ~$4,380; held ~$4,343; room **~$38** → cannot add 1 (~$724).
- VOO 30%: max ~$2,920; held ~$2,776; room **~$144** → cannot add 1 (~$694).
- Stock 15%: max ~$1,460; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $213: post weight ~2.2% — structure/TSMC week + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **Event detector:** 13:35Z **MINOR** (SOXX only). Proceed hold-only.
- **FMP:** disabled. Yahoo Finance chart primary; Google News RSS + Yahoo RSS for headlines.
- **Alpaca bars:** EIS bar stale (2026-07-13); QTUM/SHLD/ARKX low TradeCount — illiquid. VOO TradeCount often low — limit only if any future add.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.5% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** was behind origin by 2 (post-close hourly + tactical prices); fast-forwarded before decisions.

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

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 17:36Z:** CRITICAL upward semi spike — correctly no trades.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
