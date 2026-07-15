# Hourly Macro Memory
*Updated 2026-07-15 18:36Z (Wednesday 2:35 PM ET). Market OPEN — event detector NONE. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-15 18:36Z (Wed 2:35 PM ET)
- **Status:** Market **OPEN**. Event detector **NONE** (broad + held OK; sector rotation NONE). Orderly afternoon tape; QQQ recovered to ~$718 after morning softness. **HOLD-ONLY** on process grounds (weekly TO + caps).
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~18:35Z):** Equity **~$9,698** | Cash **$1,594.04** | Long **~$8,104** | Gross **~83.6%** | BP ~$29.1k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. Tactical cycles 13:40–14:30 all NO_ACTION (compliant). **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.5–83.6% all day.
- **Goal check:** Portfolio **~–3.0%** vs SPY **~+5.1%** (SPY ~754.8 vs 718.01). **Both goals FAILED.** Gap **~–8.1 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.4% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD still winners; VOO firm; QQQ recovered).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, weekly gross turnover **~21.6% of equity** → **above 20% weekly budget**. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** blocks new chip beta. **NVDA four-gate 2/4** (QQQ PASS ~$718, NVDA PASS ~$210.6, SOXX FAIL ~$554, no CRITICAL PASS). Protect AVGO/HOOD via existing trails only. No trail change (do not tighten). Afternoon recovery is **not** a reason to invent deploys.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$718.1 | ~$4,309 | ~44.4% | ~+$10 | ~+0.2% |
| VOO | 4 | $683.39 | ~$693.8 | ~$2,775 | ~28.6% | ~+$42 | ~+1.5% |
| AVGO | 2 | $371.95 | ~$394.1 | ~$788 | ~8.1% | ~+$44 | ~+6.0% |
| HOOD | 2 | $101.50 | ~$116.0 | ~$232 | ~2.4% | ~+$29 | ~+14.3% |
| Cash | — | — | — | $1,594.04 | ~16.4% | — | — |
| **Equity** | — | — | — | **~$9,698** | **100%** | — | **~–3.0%** |

- **Gross long exposure:** ~83.6%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → 11:35–14:35 ~83.5–83.6%. No unauthorized drift.

## Performance Review — Wed July 15 2:35 ET
- **1D (vs Tue last_equity $9,681.70):** portfolio **~+0.2%**. Morning soft → afternoon recovery (QQQ ~–0.2% day; SPY firm; AVGO/HOOD green).
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.0%** vs SPY **~+5.1%**. Gap **~–8.1 pp**.
- **What is working:** Core intact; AVGO (~+6.0%) and HOOD (~+14.3%) winners with trails intact. Process: no churn, audit clean, weekly budget respected, tactical hold-only compliant all afternoon.
- **What is not working:** Absolute still red. Cash ~16.4% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed Mon–Tue.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess only post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.0%
- **S&P 500 since inception:** ~+5.1% (SPY ~754.8 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$134** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$56** → **cannot buy 1 QQQ** (~$718).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **2/4** — QQQ ≥ $716 **PASS** (~$718) | NVDA ≥ $209 **PASS** (~$210.6) | SOXX ≥ $562 **FAIL** (~$554) | no CRITICAL **PASS**. **TSMC earnings ~Thu Jul 16** remains sector binary.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 2:35 PM ET
- **Broad market:** SPY ~754.8 firm/flat-green, QQQ ~718 recovered from morning soft print. Event severity **NONE**. Orderly session. Not a liquidation tape; not a regime flip.
- **Geopolitical:** Middle East / oil premium still in headlines — background only; equities not liquidating core beta.
- **Fed / macro:** Soft inflation narrative mixed with profit-taking earlier and bounce later — stay **neutral**.
- **Semiconductors:** SOXX ~$554 recovering but still well below $562 gate; NVDA ~$210.6 (passes price gate alone + QQQ now passes). AVGO ~$394 constructive vs entry (~+6%). **TSMC full earnings ~Thu Jul 16** still the sector binary. **No new chip beta until post-event reassessment.** Do not chase afternoon strength.
- **AVGO:** 2 shares, ~+6.0%. Trail **$380** intact (~3.6% buffer). No add (weekly budget). Do not tighten.
- **HOOD:** 2 shares, ~+14.3%. Trail **$108** intact (~6.9% buffer). Constructive tape — background only, **not** an add.
- **News source:** Google News RSS returned **empty** this cycle (insufficient coverage via that path). Yahoo Finance headline RSS used as fallback: AI optics cooling (Applied Opto/Coherent/Lumentum soft); SpaceX/Anthropic IPO chatter — **interesting but not actionable**. FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD.

## Universe Performance Snapshot (Yahoo Finance fallback, ~18:36Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $394.0 | +1.4% | 0.0% | –0.7% | +15.9% | +40.3% |
| EIS | $123.0 | +2.9% | –2.9% | –3.5% | +3.6% | +31.6% |
| GLD | $373.6 | –0.2% | –5.8% | –15.2% | –12.3% | +21.8% |
| GOOG | $371.3 | +3.5% | +1.1% | +11.0% | +10.4% | +102.8% |
| HOOD | $115.9 | +2.1% | +18.2% | +32.8% | –3.1% | +16.5% |
| META | $675.9 | +12.1% | +13.9% | +0.6% | +9.8% | –4.9% |
| NVDA | $210.6 | +3.2% | –0.9% | +5.9% | +15.0% | +23.3% |
| QQQ | $717.9 | +0.9% | –3.5% | +12.6% | +15.9% | +28.9% |
| QTUM | $148.4 | –2.7% | –11.7% | +20.3% | +26.5% | +60.4% |
| RKLB | $77.2 | –7.4% | –29.3% | +4.9% | –15.9% | +73.1% |
| SHLD | $60.4 | –3.7% | –4.6% | –19.1% | –21.5% | –0.3% |
| SOXX | $553.8 | –1.5% | –11.9% | +37.8% | +66.9% | +124.9% |
| VOO | $693.7 | +1.2% | 0.0% | +7.8% | +9.2% | +21.3% |
| ARKX | $31.6 | –2.1% | –10.1% | –3.6% | –8.4% | +23.6% |
| SPY | $754.6 | +1.2% | 0.0% | +7.8% | +9.3% | +21.3% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.4%, near 45% cap. Cannot add 1 share. Afternoon recovery — hold, no stop. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+6.0%). Trail intact (~3.6% buffer). No add (weekly budget). Do not tighten. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+14.3%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Gates 2/4 (QQQ+NVDA); blocked by SOXX + TSMC + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; still below $562 gate. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour → next)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. Do not re-buy without fresh hourly. Do not lower trail.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today.
5. **Cash blocker stands:** caps + weekly turnover. Do not force deploys.
6. **Detector is NONE** — no `NO NEW BUYS — CRITICAL EVENT` this hour. If detector later returns CRITICAL on a **true crash** (broad SPY/QQQ down): hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs. Do **not** invent HARD_LOCK from multi-day UP gaps.
7. **Post-TSMC (Thu+):** reassess NVDA four-gate + weekly budget remaining; never invent thin-ETF filler.

## Ranked Deployment Queue (NOT authorized this hour)
1. **VOO** — only if cap room ≥ 1 full share **and** weekly turnover headroom exists. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment**; then require all four gates + fresh hourly line + budget.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA/SOXX on afternoon strength (gates 2/4; SOXX still fails; TSMC tomorrow).
- **Worth monitoring:** TSMC earnings Thu Jul 16; whether VOO/QQQ prices or equity drift free 1-share room later this week; semi bounce durability; Hormuz/oil premium; AI optics cooling headlines (sector-adjacent, not thesis break for AVGO).
- **Interesting but not actionable yet:** META strength (banned); SpaceX/Anthropic IPO chatter; tokenized asset plumbing.

## Cap Math (equity ~$9,698)
- QQQ 45%: max ~$4,364; held ~$4,309; room **~$56** → cannot add 1 (~$718).
- VOO 30%: max ~$2,909; held ~$2,775; room **~$134** → cannot add 1 (~$694).
- Stock 15%: max ~$1,455; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $211: post weight ~2.2% — structure/TSMC week + gates + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **Event detector:** 18:35Z **NONE**. Orderly.
- **FMP:** disabled. Yahoo Finance chart primary; Yahoo headline RSS for news (Google News RSS empty this cycle — insufficient via that path).
- **Alpaca bars:** EIS TradeCount 1 (stale ~17:28Z); QTUM TradeCount 1 (~18:03Z); core bars ~18:34Z (fresh). Illiquid symbols: no market orders.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.6% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** in sync with origin/main (0/0). Concurrent tactical ledger entries staged from 13:40–14:30 NO_ACTION cycles — will fold into this hourly commit.

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
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — verify direction before panic response.
- **Do not tighten trails intraday** on soft prints when thesis intact — trail review at most once/day.
- **Afternoon recovery after soft open is not a signal to invent deploys** when weekly TO + caps bind.

## Prior Tactical Executions (Key Events)
- **2026-07-15 13:40–14:30 ET:** Tactical NO_ACTION cycles — trails intact, weekly TO respected (compliant).
- **2026-07-15 ~1:15Z hourly:** Noted upward SOXX CRITICAL bounce; hold-only, no chase. Cleared by 1:35 detector NONE.
- **2026-07-15 14:40Z:** Tactical CRITICAL override — no trades (correct); cleared by 11:35 hourly.
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
