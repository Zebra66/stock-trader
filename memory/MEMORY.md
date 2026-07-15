# Hourly Macro Memory
*Updated 2026-07-15 19:36Z (Wednesday 3:35 PM ET). Market OPEN — event detector NONE. HOLD-ONLY. Last regular-session hourly of the day.*

---

## Hourly Cycle Summary — 2026-07-15 19:36Z (Wed 3:35 PM ET)
- **Status:** Market **OPEN** (final hourly of the day; close ~4:00 PM ET). Event detector **NONE** (broad + held OK; sector rotation NONE). Orderly late-session tape; QQQ soft vs Tue (~$715.6–716) after morning recovery faded. **HOLD-ONLY** on process grounds (weekly TO + caps).
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~19:35Z):** Equity **~$9,675** | Cash **$1,594.04** | Long **~$8,080** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. Tactical cycles all afternoon NO_ACTION (compliant). **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.5–83.6% all day.
- **Goal check:** Portfolio **~–3.3%** vs SPY **~+4.9%** (SPY ~753.5 vs 718.01). **Both goals FAILED.** Gap **~–8.2 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine; no CRITICAL). Target gross **75–90%**. Live **83.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.5% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD still winners; VOO firm; QQQ mild red on day).
- **This-hour decision:** **HOLD-ONLY through close.** Daily turnover **0/2**, weekly gross turnover **~21.6% of equity** → **above 20% weekly budget**. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** blocks new chip beta. **NVDA four-gate 2/4** (QQQ FAIL now ~$716 soft vs ≥$716 borderline/fail on soft print, NVDA PASS ~$211, SOXX FAIL ~$553, no CRITICAL PASS). Protect AVGO/HOOD via existing trails only. No trail change. Do not invent deploys into close.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$715.6 | ~$4,294 | ~44.4% | ~–$5 | ~–0.1% |
| VOO | 4 | $683.39 | ~$692.3 | ~$2,769 | ~28.6% | ~+$36 | ~+1.3% |
| AVGO | 2 | $371.95 | ~$393.7 | ~$787 | ~8.1% | ~+$43 | ~+5.8% |
| HOOD | 2 | $101.50 | ~$115.0 | ~$230 | ~2.4% | ~+$27 | ~+13.3% |
| Cash | — | — | — | $1,594.04 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,675** | **100%** | — | **~–3.3%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → 11:35–15:35 ~83.5–83.6%. No unauthorized drift.

## Performance Review — Wed July 15 3:35 ET
- **1D (vs Tue last_equity $9,681.70):** portfolio **~–0.1%**. Soft open → mid-day recovery → late soft print on QQQ. SPY ~flat-green to flat. AVGO/HOOD still green on day.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.3%** vs SPY **~+4.9%**. Gap **~–8.2 pp**.
- **What is working:** Core intact; AVGO (~+5.8%) and HOOD (~+13.3%) winners with trails intact. Process: no churn, audit clean, weekly budget respected, tactical hold-only compliant all day.
- **What is not working:** Absolute still red. Cash ~16.5% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed Mon–Tue.
- **What must change today:** **Do not invent trades into close.** Respect weekly turnover ceiling. Keep trails. Reassess only post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.3%
- **S&P 500 since inception:** ~+4.9% (SPY ~753.5 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$133** → **cannot buy 1 VOO** (~$692).
  2. QQQ 45% room ~**$60** → **cannot buy 1 QQQ** (~$716).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **≤2/4** — QQQ ≥ $716 **FAIL/borderline** (~$715.6–716) | NVDA ≥ $209 **PASS** (~$211) | SOXX ≥ $562 **FAIL** (~$553) | no CRITICAL **PASS**. **TSMC earnings ~Thu Jul 16** remains sector binary.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 3:35 PM ET
- **Broad market:** SPY ~753.5 flat; QQQ ~715.6–716 soft late-day after mid-session bounce. Event severity **NONE**. Orderly session into close. Not a liquidation tape; not a regime flip.
- **Geopolitical:** Middle East / oil premium still in headlines — background only; equities not liquidating core beta.
- **Fed / macro:** Soft inflation narrative + bank earnings / Warsh testimony in headlines — stay **neutral**. Massive AI capex still a macro theme but optics/cooling headlines (Applied Opto/Coherent/Lumentum soft) are sector-adjacent noise for our AVGO thesis.
- **Semiconductors:** SOXX ~$553 soft (1w ~–5%); still well below $562 gate. NVDA ~$211 firm vs entry gates alone. AVGO ~$394 constructive vs entry (~+5.8%). **TSMC full earnings ~Thu Jul 16** still the sector binary (Barron's / Seeking Alpha: "crucial test for AI"). Bank of America: long semis "most crowded trade ever" — caution, not chase. **No new chip beta until post-event reassessment.** Do not chase late-day strength or weakness into close.
- **AVGO:** 2 shares, ~+5.8%. Trail **$380** intact (~3.5% buffer). No add (weekly budget). Do not tighten.
- **HOOD:** 2 shares, ~+13.3%. Trail **$108** intact (~6.1% buffer). Constructive — background only, **not** an add.
- **News source:** Yahoo Finance headline RSS + Google News RSS (sufficient this cycle). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD (TSMC is sector-level for chip beta only).

## Universe Performance Snapshot (Yahoo Finance fallback, ~19:36Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $394.0 | n/a | 0.0% | –0.7% | +14.8% | +40.2% |
| EIS | $122.5 | +2.5% | –3.3% | –3.9% | +2.7% | +31.0% |
| GLD | $371.6 | –1.7% | –6.3% | –15.6% | –12.2% | +21.2% |
| GOOG | $369.5 | +3.7% | +0.6% | +10.5% | +10.9% | +101.8% |
| HOOD | $115.2 | 0.0% | +17.4% | +31.9% | +4.4% | +15.7% |
| META | $678.2 | +7.4% | +14.3% | +1.0% | +9.3% | –4.5% |
| NVDA | $211.2 | +4.1% | –0.6% | +6.2% | +12.9% | +23.7% |
| QQQ | $716.1 | –1.0% | –3.7% | +12.3% | +15.2% | +28.6% |
| QTUM | $147.5 | –5.2% | –12.2% | +19.6% | +24.8% | +59.5% |
| RKLB | $76.3 | –7.5% | –30.1% | +3.7% | –15.9% | +71.1% |
| SHLD | $60.2 | –2.1% | –4.9% | –19.3% | –22.2% | –0.5% |
| SOXX | $552.8 | –5.0% | –12.0% | +37.5% | +63.9% | +124.5% |
| VOO | $692.5 | +0.3% | –0.2% | +7.6% | +8.8% | +21.1% |
| ARKX | $31.5 | –2.5% | –10.4% | –3.9% | –8.9% | +23.2% |
| SPY | $753.6 | +0.2% | –0.2% | +7.7% | +8.9% | +21.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.4%, near 45% cap. Cannot add 1 share. Late soft — hold, no stop. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+5.8%). Trail intact (~3.5% buffer). No add (weekly budget). Do not tighten. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+13.3%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Gates ≤2/4; blocked by SOXX + TSMC + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; still below $562 gate. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour → next / overnight)
1. **HOLD QQQ / VOO / AVGO / HOOD** through close — no discretionary position changes.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. Do not re-buy without fresh hourly. Do not lower trail.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today or into close.
5. **Cash blocker stands:** caps + weekly turnover. Do not force deploys.
6. **Detector is NONE** — no `NO NEW BUYS — CRITICAL EVENT` this hour. If detector later returns CRITICAL on a **true crash** (broad SPY/QQQ down): hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs. Do **not** invent HARD_LOCK from multi-day UP gaps.
7. **Post-TSMC (Thu open+):** reassess NVDA four-gate + weekly budget remaining (new week may reset weekly count — confirm in next hourly); never invent thin-ETF filler. Prefer VOO if cap room opens.
8. **No after-hours / pre-market equity orders** after 4:00 PM ET close.

## Ranked Deployment Queue (NOT authorized this hour)
1. **VOO** — only if cap room ≥ 1 full share **and** weekly turnover headroom exists. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment**; then require all four gates + fresh hourly line + budget.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core through close. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA/SOXX (gates fail; TSMC tomorrow).
- **Worth monitoring:** TSMC earnings Thu Jul 16; whether VOO/QQQ prices or equity drift free 1-share room later this week / next week; semi bounce durability post-TSMC; crowded-long-semi narrative; Hormuz/oil premium; AI optics cooling (sector-adjacent, not thesis break for AVGO).
- **Interesting but not actionable yet:** META strength (banned); SpaceX/Anthropic IPO chatter; tokenized asset plumbing; bank-earnings week macro tone.

## Cap Math (equity ~$9,675)
- QQQ 45%: max ~$4,354; held ~$4,294; room **~$60** → cannot add 1 (~$716).
- VOO 30%: max ~$2,902; held ~$2,769; room **~$133** → cannot add 1 (~$692).
- Stock 15%: max ~$1,451; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $211: post weight ~2.2% — structure/TSMC week + gates + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.5%. Daytrades 0.
- **Event detector:** 19:35Z **NONE**. Orderly into close.
- **FMP:** disabled. Yahoo Finance chart primary; Yahoo + Google News RSS for news (sufficient this cycle).
- **Alpaca bars:** EIS TradeCount 1 (stale ~17:28Z); QTUM TradeCount 2; ARKX/SHLD thin; core bars ~19:33–19:34Z (fresh). Illiquid symbols: no market orders.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.6% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** in sync with origin/main (0/0). Concurrent tactical ledger entries may be staged — fold into this hourly commit.

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
- **Do not tighten trails intraday** on soft prints when thesis intact — trail review at most once/day.
- **Afternoon recovery after soft open is not a signal to invent deploys** when weekly TO + caps bind.
- **Late-session softness into close is not a reason to invent sells or stop-tightens** when gross is inside band and trails intact.

## Prior Tactical Executions (Key Events)
- **2026-07-15 13:40–15:30 ET:** Tactical NO_ACTION cycles — trails intact, weekly TO respected (compliant).
- **2026-07-15 ~1:15Z hourly:** Noted upward SOXX CRITICAL bounce; hold-only, no chase. Cleared by 1:35 detector NONE.
- **2026-07-15 14:40Z:** Tactical CRITICAL override — no trades (correct); cleared by 11:35 hourly.
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
