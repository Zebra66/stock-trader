# Hourly Macro Memory
*Updated 2026-07-16 13:41Z (Thursday 9:40 AM ET). Market **OPEN**. Event detector **MINOR** (cooled from CRITICAL). AVGO trail executed.*

---

## Tactical Execution — 2026-07-16 09:40 ET
- **Action:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **Trigger:** AVGO quote **$378.88** breached todo.md trail **$380.00**; submitted SELL 1 limit **$379.50**.
- **Fill:** Filled at **$380.65** within seconds as price recovered above limit.
- **Why:** todo.md authorized trail; TSMC chip reaction negative; AVGO buffer thin; no full exit.
- **Remaining book:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 2.
- **Broker:** Equity **~$9,603** | Cash **~$1,975** | Long **~$7,625** | Gross **~79.4%**.
- **Daytrades:** 0 | **PDT:** no concern | **Open orders:** NONE.
- **Turnover:** Daily **0/2** (protective exit exempt from daily budget); weekly **~25.8%** of 20% gross budget (protective exits still add to weekly).
- **Audit:** OK, no unauthorized positions, no concentration breaches, `hardLockRecommended: false`.
- **Next:** Monitor HOOD trail $108. No new buys until hourly reassesses detector + weekly TO.

---

## Hourly Cycle Summary — 2026-07-16 09:35 ET
- **Status:** Market **OPEN** (~5 min after open). Event detector **CRITICAL** (SOXX −2.1%, SMH −1.7%; XLK/GLD MAJOR; SPY OK; QQQ MINOR). Tactical 9:30 override correctly **no-action**.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.4%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,603** | Cash **~$1,975** | Long **~$7,625** | Gross **~79.4%** | BP ~$28.8k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$711.3 | VOO 4 @ ~$691.6 | AVGO 1 @ ~$380.7 | HOOD 2 @ ~$112.2.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (protective trail). Last fills: Tue VOO. No concealment.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~83.4–83.6% overnight → open.
- **Goal check:** Portfolio **~–3.8%** vs SPY **~+4.8%** (SPY ~752.5 vs 718.01). **Both goals FAILED.** Gap **~–8.6 pp**.
- **Regime:** **Neutral** (no flip — regime stability; CRITICAL is sector-local semis, not broad crash). Target gross **75–90%**. Live **83.4%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY.** Keep authorized AVGO/HOOD trails. **NO NEW BUYS — CRITICAL EVENT.** Weekly TO still binds. Caps block VOO/QQQ adds. Do **not** buy chip dip into TSMC digestion.

---

## Live Book (Alpaca) — TRUE STATE (open)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$711.3 | ~$4,268 | ~44.4% | ~−$31 | ~−0.7% |
| VOO | 4 | $683.39 | ~$691.6 | ~$2,766 | ~28.8% | ~+$33 | ~+1.2% |
| AVGO | 1 | $371.95 | ~$380.7 | ~$381 | ~4.0% | ~+$9 | ~+2.4% |
| HOOD | 2 | $101.50 | ~$112.2 | ~$224 | ~2.3% | ~+$21 | ~+10.5% |
| Cash | — | — | — | ~$1,975 | ~20.6% | — | — |
| **Equity** | — | — | — | **~$9,603** | **100%** | — | **~–3.8%** |

- **Gross long exposure:** ~79.4%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−0.8%** (soft open on semis / QQQ).

## Performance Review — first open hourly Thu Jul 16
- **1D:** portfolio soft (~−0.8%) on chip weakness; SPY roughly flat-to-soft.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.8%** vs SPY **~+4.8%**. Gap **~–8.6 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD still green vs entry; weekly TO respected.
- **Not working:** Absolute red; cash 16.6% idle but **cannot deploy** (caps + weekly TO + CRITICAL).
- **What must change today:** **Nothing forced.** Do not invent deploys under CRITICAL. Patience > friction. Reassess chips only after SOXX stabilizes and weekly budget allows (likely next Mon+).

## Goal Check
- **Portfolio since inception:** ~–3.8%
- **S&P 500 since inception:** ~+4.8% (SPY ~752.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$118** → **cannot buy 1 VOO** (~$692).
  2. QQQ 45% room ~**$59** → **cannot buy 1 QQQ** (~$711).
  3. **Weekly turnover Mon–Tue ~$2,095 ≈ 21.8%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19; still binding Thu).
  4. Event detector **CRITICAL** → default **no new BUY authorizations** this cycle.
  5. Chip beta: **TSMC reported** (beat + raise + AZ capex); **price reaction negative** — do not buy SOXX/NVDA dip yet.
  6. Thin ETFs — no edge / illiquid.

## Market Intel — Thu Jul 16 open
- **Tape:** Broad market orderly (SPY OK ~−0.1%). QQQ MINOR soft. **Semiconductors sold hard** post-TSMC print (SOXX/SMH CRITICAL). Gold MAJOR soft.
- **TSMC:** Q2 profit strong (EPS NT$27.25, +~77% YoY), raised 2026 outlook / AI demand, **+$100B Arizona**. Barron's/Yahoo: stock **falls** as market digests / "AI scrutiny." Sector binary **resolved on print but reaction still live**.
- **AVGO:** MAJOR ~−3.1% vs prior close; still **above** trail $380 (~$381.5, buffer thin ~0.4%). Thesis intact as winner vs entry (~+2.6%). **Do not lower trail.** Do not full-exit.
- **HOOD:** MINOR soft; still well above $108 trail (~+10.5% vs entry).
- **News source:** Google News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** No binary for QQQ/VOO/AVGO/HOOD in next 48h. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~13:36Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $752.2 | +0.1% | +0.2% | +5.9% | +8.8% | +20.5% |
| QQQ | $710.9 | −1.7% | −2.6% | +9.6% | +14.4% | +27.6% |
| VOO | $691.2 | +0.1% | +0.2% | +5.9% | +8.7% | +20.5% |
| AVGO | $380.7 | −5.1% | +1.1% | −6.4% | +8.3% | +35.6% |
| HOOD | $113.0 | −1.9% | +16.8% | +24.5% | +3.9% | +9.4% |
| NVDA | $208.9 | +3.0% | +0.7% | +3.6% | +12.2% | +21.9% |
| GOOG | $369.0 | +3.6% | −0.6% | +8.7% | +11.7% | +100.8% |
| SOXX | $539.5 | −7.3% | −8.8% | +29.8% | +57.5% | +119.7% |
| META | $671.6 | +6.4% | +11.9% | −2.5% | +8.3% | −4.5% |
| GLD | $366.0 | −3.2% | −8.0% | −17.9% | −13.1% | +18.7% |
| RKLB | $72.0 | −12.8% | −31.2% | −15.1% | −25.3% | +50.9% |
| SHLD | $60.3 | −1.9% | −5.6% | −17.8% | −22.7% | −0.9% |
| ARKX | $31.3 | −3.3% | −10.1% | −7.0% | −11.2% | +18.2% |
| EIS | $121.6 | +1.7% | −1.5% | −6.3% | +2.1% | +29.4% |
| QTUM | $145.0 | −6.8% | −10.6% | +13.4% | +22.5% | +55.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft open OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold / Trail $380 | Winner vs entry; thin buffer post-TSMC reaction. No add. | 6–12% |
| HOOD | Hold / Trail $108 | Winner ~+10.5%. Buffer ~3.7%. No add. | 2–6% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | CRITICAL semis + weekly TO + no edge. | 0% |

## Priority Actions (this hour → next)
1. **HOLD all four names.** No panic de-risk of QQQ/VOO.
2. **AVGO trail** SELL 1 if < **$380.00** limit **$379.50** (protective, exempt).
3. **HOOD trail** SELL 1 if < **$108.00** limit **$107.50** (protective, exempt).
4. **`NO NEW BUYS — CRITICAL EVENT`** until next hourly reassesses detector + TO.
5. **Do not chase SOXX/NVDA/AVGO** into TSMC digestion.
6. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom **and** detector not CRITICAL.

## Cap Math (equity ~$9,616)
- QQQ 45% max ~$4,327; held ~$4,268; room ~**$59** → cannot add 1.
- VOO 30% max ~$2,885; held ~$2,766; room ~**$118** → cannot add 1.
- Weekly TO Mon–Tue ~$2,095 ≈ **21.8%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized this cycle)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** non-CRITICAL tape. Limit only.
2. **NVDA / SOXX** — **NOT** until post-TSMC reaction settles + four gates + budget + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect trails. Respect CRITICAL + weekly TO + caps. Do not invent trades.
- **Worth monitoring:** SOXX stabilization after TSMC; weekly TO reset (Mon); VOO/QQQ integer room drift; crowded-long-semi narrative.
- **Not actionable:** META strength (banned); SpaceX/Anthropic IPO chatter; thin-ETF noise.

## Data / Process Notes
- **Audit:** OK. Gross 83.4%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source. Google News RSS for headlines.
- **No open orders.**
- **Turnover today:** **0/2** daily. **Weekly ~21.8%** already used → discretionary blocked.
- **Tactical 9:30 override:** Compliant — no orders, stops not breached, correctly awaited hourly.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **With ~$10K equity, caps are tight** (QQQ maxed at 6; VOO 4 near 30%).
- **VOO is preferred cash-deploy vehicle** when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade; post-earnings digestion overrides raw dip-buying.
- **Cash ≤10% target** — if caps bind, write exact blocker (current state).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band 75–90%.** Live 83.4% correct; do not de-risk into cash on sector CRITICAL alone.
- **Turnover budget is real:** daily **and** weekly. Weekly binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — today's CRITICAL is real sector weakness (TSMC reaction).
- **Do not tighten trails intraday** when thesis intact (AVGO buffer thin but thesis intact).
- **Soft open / semi selloff is not a signal to invent deploys** when weekly TO + caps + CRITICAL bind.

## Prior Key Events
- **2026-07-16 9:30 ET:** Tactical CRITICAL override; no stops hit; no action.
- **2026-07-15 all day:** Zero fills; hold-only; weekly TO + caps bind.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance.
