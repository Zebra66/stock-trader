# Hourly Macro Memory
*Updated 2026-07-15 17:36Z (Wednesday 1:35 PM ET). Market OPEN — event detector NONE. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-15 17:36Z (Wed 1:35 PM ET)
- **Status:** Market **OPEN**. Event detector **NONE** (broad + held OK; sector rotation NONE). Prior ~1:15Z detector CRITICAL was an **upward** SOXX/SMH bounce — now cleared. Soft-to-mixed tape, not a regime flip. **HOLD-ONLY** on process grounds (weekly TO + caps).
- **Repo integrity:** Pulled origin/main (was 1 behind; concurrent ~1:15 hourly). Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~17:35Z):** Equity **~$9,673** | Cash **$1,594.04** | Long **~$8,079** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. Tactical cycles NO_ACTION (compliant). **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.4–83.5% all day.
- **Goal check:** Portfolio **~–3.3%** vs SPY **~+4.9%** (SPY ~753.2 vs 718.01). **Both goals FAILED.** Gap **~–8.2 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.5% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD still winners; VOO firm).
- **This-hour decision:** **HOLD-ONLY.** Clear upward-CRITICAL buy suspension (detector now NONE). Daily turnover **0/2**, weekly gross turnover **~21.7% of equity** → **above 20% weekly budget**. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** blocks new chip beta. **NVDA four-gate 1/4** (QQQ FAIL ~$715.5, NVDA PASS ~$209.1, SOXX FAIL ~$551, no CRITICAL PASS). Protect AVGO/HOOD via existing trails only. No trail change (do not tighten).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$715.6 | ~$4,294 | ~44.4% | ~–$5 | ~–0.1% |
| VOO | 4 | $683.39 | ~$692.2 | ~$2,769 | ~28.6% | ~+$35 | ~+1.3% |
| AVGO | 2 | $371.95 | ~$392.5 | ~$785 | ~8.1% | ~+$41 | ~+5.5% |
| HOOD | 2 | $101.50 | ~$115.9 | ~$232 | ~2.4% | ~+$29 | ~+14.2% |
| Cash | — | — | — | $1,594.04 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,673** | **100%** | — | **~–3.3%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open ~83.6% → 11:35–13:35 ~83.5%. No unauthorized drift.

## Performance Review — Wed July 15 1:35 ET
- **1D (vs Tue last_equity $9,681.70):** portfolio **~–0.1%**. Morning Nasdaq soft; partial recovery into early afternoon (QQQ ~–0.6% day; SPY roughly flat/soft).
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.3%** vs SPY **~+4.9%**. Gap **~–8.2 pp**.
- **What is working:** Core intact; AVGO (~+5.5%) and HOOD (~+14.2%) winners with trails intact. Process: no churn, audit clean, weekly budget respected, tactical hold-only compliant.
- **What is not working:** Absolute still red. Cash ~16.5% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess only post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.3%
- **S&P 500 since inception:** ~+4.9% (SPY ~753.2 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$133** → **cannot buy 1 VOO** (~$692).
  2. QQQ 45% room ~**$59** → **cannot buy 1 QQQ** (~$716).
  3. **Weekly turnover already ~21.7%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA four-gate **1/4** — QQQ ≥ $716 **FAIL** (~$715.5) | NVDA ≥ $209 **PASS** (~$209.1) | SOXX ≥ $562 **FAIL** (~$551) | no CRITICAL **PASS**. **TSMC earnings ~Thu Jul 16** remains sector binary.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.

## Market Intel — Wednesday 1:35 PM ET
- **Broad market:** SPY ~753 soft/flat, QQQ ~716 slightly soft. Event severity **NONE** (prior upward SOXX CRITICAL cleared). Orderly session after morning semi weakness and bounce. Not a liquidation tape; not a regime flip.
- **Geopolitical:** Middle East / oil premium still in headlines — background only; equities not liquidating core beta.
- **Fed:** Soft inflation narrative mixed with profit-taking / bounce — stay **neutral**.
- **Semiconductors:** SOXX ~$551 recovering from morning soft print but still well below $562 gate; NVDA ~$209 (barely passes gate alone). AVGO ~$392.5 constructive vs entry. **TSMC full earnings ~Thu Jul 16** still the sector binary. **No new chip beta until post-event reassessment.** Do not chase bounce.
- **AVGO:** 2 shares, ~+5.5%. Trail **$380** intact (~3.2% buffer). No add (weekly budget). Do not tighten.
- **HOOD:** 2 shares, ~+14.2%. Trail **$108** intact (~6.8% buffer). Constructive headlines (app/blockchain narrative) — background only, **not** an add.
- **News source:** Google News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Known: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD.

## Universe Performance Snapshot (Yahoo Finance fallback, ~17:36Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $392.1 | +4.9% | –14.8% | +17.8% | +13.9% | +39.6% |
| EIS | $122.1 | –0.7% | –8.8% | –2.9% | +22.6% | +30.6% |
| GLD | $372.3 | –2.6% | –9.5% | –20.1% | –1.7% | +21.4% |
| GOOG | $368.9 | +1.1% | –1.0% | +22.6% | +45.4% | +101.5% |
| HOOD | $115.9 | –1.4% | +27.7% | +43.8% | –13.7% | +16.4% |
| META | $673.9 | +12.3% | +12.2% | +2.0% | –8.2% | –5.1% |
| NVDA | $209.1 | +7.0% | –6.8% | +14.1% | +14.8% | +22.5% |
| QQQ | $715.5 | –1.0% | –3.7% | +17.5% | +17.2% | +28.5% |
| QTUM | $147.5 | –6.0% | –9.4% | +31.9% | +33.8% | +59.5% |
| RKLB | $76.5 | –17.8% | –37.5% | +9.3% | +20.4% | +71.6% |
| SHLD | $60.3 | –7.0% | –8.1% | –19.6% | –11.5% | –0.3% |
| SOXX | $550.8 | –5.3% | –3.7% | +63.1% | +89.2% | +123.7% |
| VOO | $692.3 | +0.2% | –0.7% | +10.4% | +12.1% | +21.1% |
| ARKX | $31.6 | –7.4% | –13.3% | +0.4% | +4.0% | +23.4% |
| SPY | $753.2 | +0.3% | –0.7% | +10.5% | +12.1% | +21.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.4%, near 45% cap. Cannot add 1 share. Soft day — hold, no stop. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+5.5%). Trail intact (~3.2% buffer). No add (weekly budget). Do not tighten. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+14.2%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Gates 1/4 (only NVDA price); blocked by TSMC + weekly turnover + QQQ/SOXX. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; bounce is not a gate pass. | 0% |
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
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect weekly turnover ceiling and cap math. Do not chase NVDA/SOXX bounce pre-TSMC (gates 1/4).
- **Worth monitoring:** TSMC earnings Thu Jul 16; whether VOO/QQQ prices or equity drift free 1-share room later this week; semi bounce durability; Hormuz/oil premium; HOOD narrative headlines.
- **Interesting but not actionable yet:** META strength (banned); SpaceX/IPO chatter; PayPal M&A noise (out of universe).

## Cap Math (equity ~$9,673)
- QQQ 45%: max ~$4,353; held ~$4,294; room **~$59** → cannot add 1 (~$716).
- VOO 30%: max ~$2,902; held ~$2,769; room **~$133** → cannot add 1 (~$692).
- Stock 15%: max ~$1,451; AVGO/HOOD room ample but thesis/weekly-budget/TSMC block adds.
- NVDA 1 @ $209: post weight ~2.2% — structure/TSMC week + gates + weekly budget block today.

## Data / Process Notes
- **Audit:** OK. Gross 83.5%. Daytrades 0.
- **Event detector:** 17:35Z **NONE**. Prior 1:15Z upward SOXX CRITICAL cleared — correctly treated as noise.
- **FMP:** disabled. Yahoo Finance chart primary; Google News RSS for headlines.
- **Alpaca bars:** EIS TradeCount 1; QTUM TradeCount 3 (stale ~17:08Z); SHLD TradeCount 2 — illiquid. Core bars ~17:34Z (fresh).
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **0/2** daily. **Weekly ~21.7% of 20% budget already used** (Mon–Tue) → discretionary adds **blocked**. Only protective exits allowed.
- **Git:** pulled concurrent 1:15 hourly commit; now in sync with origin/main.

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
- **Do not tighten trails intraday** on soft prints when thesis intact — trail review at most once/day.

## Prior Tactical Executions (Key Events)
- **2026-07-15 12:10–13:30 ET:** Tactical NO_ACTION cycles — trails intact, weekly TO respected (compliant).
- **2026-07-15 ~1:15Z hourly:** Noted upward SOXX CRITICAL bounce; hold-only, no chase. Cleared by 1:35 detector NONE.
- **2026-07-15 14:40Z:** Tactical CRITICAL override — no trades (correct); cleared by 11:35 hourly.
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
