# Hourly Macro Memory
*Updated 2026-07-14 19:35Z (Tuesday 3:35 PM ET). Market OPEN — final hourly of session (~25 min to close).*

---

## Hourly Cycle Summary — 2026-07-14 19:35Z (Tue 3:35 PM ET)
- **Status:** Market OPEN (last hourly). Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. No missing tracked sources. Audit **OK**. Unauthorized=[] Concentration=[] Gross **83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~19:35Z):** Equity **~$9,687** | Cash **$1,594.05** | Long **~$8,093** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills (authorized):** BUY 1 VOO @ **$689.49** (14:12Z); BUY 1 VOO @ **$691.15** (14:41Z). Documented. **No concealment.** No further fills since 14:41Z. Tactical correctly hold-only.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift.
- **Goal check:** Portfolio **~–3.1%** vs SPY **~+4.7%** (SPY ~752.0 vs 718.01). **Both goals FAILED.** Gap **~–7.8 pp**.
- **Regime:** **Neutral** (unchanged; no flip — regime stability doctrine). Target gross **75–90%**. Live **83.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.5% still >10%) is **cap-bound** + historical **turnover/friction**. Not symbol selection (QQQ/AVGO constructive).
- **This-hour decision:** **HOLD-ONLY through close.** Turnover **2/2 exhausted**. VOO room ~$141 (cannot add 1 share @ ~$691). QQQ room ~$39 (cannot add 1). NVDA four-gate **4/4 PASS** on price (~$211.7), but **TSMC ~Thu Jul 16** + **turnover 2/2** still block any chip add. AVGO cooldown expires ~**Tue 19:30Z** (now past) — still **no add** (turnover + no fresh edge). Protect winners via existing trails only. Do not invent end-of-day deploys.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$720.0 | ~$4,320 | ~44.6% | ~+$21 | ~+0.5% |
| VOO | 4 | $683.39 | ~$691.2 | ~$2,765 | ~28.5% | ~+$31 | ~+1.1% |
| AVGO | 2 | $371.95 | ~$391.3 | ~$783 | ~8.1% | ~+$39 | ~+5.2% |
| HOOD | 2 | $101.50 | ~$112.7 | ~$225 | ~2.3% | ~+$22 | ~+11.1% |
| Cash | — | — | — | $1,594.05 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,687** | **100%** | — | **~–3.1%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path today:** ~69% → 76% (VOO #1) → ~84% (VOO #2) — both authorized. Stable since ~14:41Z.

## Performance Review — Tue July 14 late afternoon
- **1D (vs Mon last_equity $9,609.95):** portfolio **~+0.8%**. SPY firm (~752). Absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.1%** vs SPY **~+4.7%**. Gap **~–7.8 pp**.
- **What is working:** Two authorized VOO deploys filled cleanly; gross inside neutral band. AVGO (~+5.2%) and HOOD (~+11%) winners with intact trails. QQQ core held near cap. Process discipline: no churn, turnover budget respected, trails not re-tightened. Tactical correctly hold-only all afternoon.
- **What is not working:** Absolute still red. Cash ~16.5% idle but **cannot deploy without breaching caps or inventing thin-ETF/chip trades into TSMC binary**. Gap to SPY ~8 pp.
- **What must change next (not this hour / not tonight):** After turnover resets tomorrow, reassess integer-share room if prices drift, or wait post-TSMC (Thu) for NVDA — never invent thin-ETF filler.

## Goal Check
- **Portfolio since inception:** ~–3.1%
- **S&P 500 since inception:** ~+4.7% (SPY ~752.0 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (now cap-bound) + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):** VOO under 30% cap has only ~$141 room → **cannot buy 1 more VOO** (~$691). QQQ under 45% has only ~$39 room → **cannot buy 1 QQQ**. Chip beta: NVDA four-gate **PASS** on price (~$211.7), but **TSMC earnings ~Thu Jul 16** remains a sector binary — no new chip beta until post-event reassessment. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) have no edge and/or illiquid prints. Turnover **2/2** also blocks discretionary adds today.

## Market Intel — Tuesday 3:35 PM ET
- **Broad market:** SPY ~752.0 OK, QQQ ~720 OK. Event severity **NONE**. Orderly tape into the close; cooler June CPI / softer inflation supporting risk assets; bank earnings in focus; IBM profit warning weighed on Dow but not broad crash signal. Hormuz/Iran oil premium (~$87 oil) — background risk only, not a liquidation trigger.
- **Geopolitical:** Hormuz / US–Iran oil escalation still a background risk premium — not a reason to liquidate core beta already held.
- **Fed:** Inflation cools; chair Warsh still "job not done" / no tolerance for elevated inflation — background; not enough to flip regime or force de-risk.
- **Semiconductors:** SOXX ~$568.7 OK, NVDA ~$211.7 (firm ≥ $209), AVGO ~$391 still strong (slightly off highs). **TSMC full earnings ~Thu Jul 16** still the sector binary — no new chip beta until post-event reassessment even though NVDA price gate clears. News: TSMC record June revenue / AI boom expected into Thursday; NVDA Rubin slight-delay headlines + MS still top pick — noise, not a buy signal today.
- **AVGO:** 2 shares, ~+5.2%. Trail **$380** intact (~2.9% buffer). Cooldown from Mon sell (~19:30Z Mon) has **expired** (~Tue 19:30Z) — still **no add** (turnover 2/2 + no fresh hourly edge vs holding cash/caps).
- **HOOD:** 2 shares, ~+11%. Trail **$108** intact (~4.2% buffer). No add.
- **NVDA four-gate (price only):** QQQ ≥ $716 **PASS** (~720) | NVDA ≥ $209 firm **PASS** (~$211.7) | SOXX ≥ $562 **PASS** (~569) | no CRITICAL **PASS**. **4/4 price gates PASS**, but **TSMC week + turnover 2/2 → still NO NVDA today.**
- **News source:** Bing News RSS (Google Search tool unavailable). Coverage: cooler CPI; IBM idiosyncratic warning; Fed/Warsh inflation chatter; NVDA Rubin delay + MS top pick; TSMC record revenue into Thu earnings; oil/Hormuz. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings:** Yahoo calendarEvents returned empty for held names this hour. Known from prior memory + news: **TSMC ~Thu Jul 16** sector event. META/GOOG late July; NVDA Aug.

## Universe Performance Snapshot (Yahoo Finance fallback, 19:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $391.3 | +5.5% | –0.7% | +2.8% | +10.3% | +42.0% |
| EIS | $120.1 | +0.5% | –5.2% | –5.7% | +2.1% | +28.1% |
| GLD | $371.6 | –1.6% | –6.3% | –16.5% | –11.9% | +20.6% |
| GOOG | $357.2 | –1.8% | –2.7% | +8.0% | +6.2% | +95.4% |
| HOOD | $112.8 | –0.1% | +15.0% | +42.7% | –6.2% | +12.9% |
| META | $659.1 | +7.1% | +11.1% | –0.5% | +4.4% | –8.6% |
| NVDA | $211.7 | +7.5% | –0.4% | +7.7% | +13.9% | +29.0% |
| QQQ | $719.9 | +1.5% | –3.2% | +14.5% | +15.0% | +29.4% |
| QTUM | $149.9 | –1.0% | –10.8% | +22.8% | +27.8% | +62.4% |
| RKLB | $79.1 | –5.2% | –27.6% | +9.5% | –8.7% | +83.0% |
| SHLD | $60.4 | –5.3% | –4.5% | –18.7% | –20.9% | –1.3% |
| SOXX | $568.7 | +3.1% | –9.5% | +41.7% | +70.6% | +133.2% |
| VOO | $691.2 | +0.6% | –0.4% | +8.3% | +8.3% | +20.3% |
| ARKX | $31.7 | –2.7% | –9.8% | –2.1% | –6.5% | +24.4% |
| SPY | $752.0 | +0.6% | –0.4% | +8.3% | +8.4% | +20.4% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | Cash deploy done for today (4 sh). Cap room <1 share. | 21–30% |
| AVGO | Hold / Trail $380 | Winner intact (~+5.2%). Cooldown expired; still no add (turnover). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+11%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Price gates 4/4 PASS; still blocked by TSMC binary + turnover. | 0–4% |
| GOOG | Avoid | Soft 1w (–1.8%); no edge vs holding cash/caps. | 0% |
| SOXX | Avoid | TSMC risk; turnover exhausted; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (rest of session / overnight)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes. Turnover 2/2.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. No re-buy without fresh hourly auth tomorrow.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today despite NVDA price-gate pass.
5. **Cash blocker stands:** cannot add integer share of VOO or QQQ under caps; chip path blocked by TSMC week. Do not force deploys into the close.
6. **If detector returns CRITICAL:** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs.
7. **Tomorrow (if orderly):** reassess cash ≤10% path only if price drift creates integer share room under caps, or post-TSMC NVDA four-gate — never invent thin-ETF filler. Turnover resets at next session.

## Ranked Deployment Queue (for next available turnover day — NOT today)
1. **VOO** — only if cap room ≥ 1 full share after price drift. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment** even if price gates clear; then require all four gates again + fresh hourly line.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core through close. Protect AVGO/HOOD trails. Respect turnover exhaustion. Do not chase NVDA pre-TSMC.
- **Worth monitoring:** Hormuz/oil premium; TSMC earnings Thu Jul 16; cool CPI vs Fed hawk talk; semi volatility; whether VOO/QQQ prices drift enough to free 1-share room tomorrow.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m strength (already hold small); QTUM thin; NVDA 1w +7.5% (gates pass but binary risk).

## Cap Math (equity ~$9,687)
- QQQ 45%: max ~$4,359; held ~$4,320; room **~$39** → cannot add 1 (~$720).
- VOO 30%: max ~$2,906; held ~$2,765; room **~$141** → cannot add 1 (~$691).
- Stock 15%: max ~$1,453; AVGO/HOOD room ample but thesis/turnover/TSMC block adds.
- NVDA 1 @ $212: post weight ~2.2% — structure/TSMC week blocks today.

## Data / Process Notes
- **Audit:** OK. Gross 83.5%. Daytrades 0.
- **Event detector:** 19:35Z **NONE**. Proceed hold-only (budget spent).
- **FMP:** disabled. Yahoo Finance chart primary; Bing News RSS for headlines.
- **Alpaca bars:** VOO TradeCount often low — limit orders only if any future VOO add. EIS/GLD/QTUM/SHLD illiquid prints.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **2/2** used (~$1,380 notional ≈ **14.2%** of weekly 20% budget). Only protective exits remain.
- **Tactical cycles since 14:41Z:** all correctly hold-only; trails not breached; no concealment risk.
- **Session note:** Final hourly of Tue session; next regular deploy opportunity is Wed open (turnover resets).

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are tight** (QQQ maxed at 6 shares; VOO now 4 near 30%).
- **VOO symbolCap is 30%** — preferred cash-deployment vehicle when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade; **even full price pass does not override TSMC binary week policy.**
- **Cash ≤10% target in neutral/offensive** — excess for 2+ hours → limit-add underweight core ETF; **if caps bind, write exact blocker** (current state).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band is 75–90%** (doctrine). Live 83.5% is correct; do not de-risk into cash.
- **Turnover budget is real:** after 2/2, hold and protect only.

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 13:30Z:** CRITICAL override — no trades (correct then). Detector later MAJOR → MINOR → NONE.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant. Cooldown until ~Tue 19:30Z (now expired).
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
