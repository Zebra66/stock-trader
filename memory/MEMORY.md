# Hourly Macro Memory
*Updated 2026-07-14 16:35Z (Tuesday 12:35 PM ET). Market OPEN.*

---

## Hourly Cycle Summary — 2026-07-14 16:35Z (Tue 12:35 PM ET)
- **Status:** Market OPEN. Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. No missing tracked sources. Audit **OK**. Unauthorized=[] Concentration=[] Gross **83.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~16:35Z):** Equity **~$9,681** | Cash **$1,594.05** | Long **~$8,087** | Gross **~83.5%** | BP ~$29.0k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills (authorized):** BUY 1 VOO @ **$689.49** (14:12Z); BUY 1 VOO @ **$691.15** (14:41Z). Documented. **No concealment.** No further fills since 11:35Z hourly.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift.
- **Goal check:** Portfolio **~–3.2%** vs SPY **~+4.6%** (SPY ~751 vs 718.01). **Both goals FAILED.** Gap **~–7.8 pp**.
- **Regime:** **Neutral** (unchanged; no flip — regime stability doctrine). Target gross **75–90%**. Live **83.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.5% still >10%) is **cap-bound** + historical **turnover/friction**. Not symbol selection (QQQ/AVGO constructive).
- **This-hour decision:** **HOLD-ONLY.** Turnover **2/2 exhausted**. VOO room ~$143 (cannot add 1 share @ ~$690). QQQ room ~$39 (cannot add 1). NVDA four-gate now **4/4 PASS** on price, but **TSMC ~Thu Jul 16** + **turnover 2/2** still block any chip add. No discretionary trades. Protect winners via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$719.6 | ~$4,318 | ~44.6% | ~+$19 | ~+0.4% |
| VOO | 4 | $683.39 | ~$690.3 | ~$2,761 | ~28.5% | ~+$28 | ~+1.0% |
| AVGO | 2 | $371.95 | ~$393.1 | ~$786 | ~8.1% | ~+$42 | ~+5.7% |
| HOOD | 2 | $101.50 | ~$111.1 | ~$222 | ~2.3% | ~+$19 | ~+9.4% |
| Cash | — | — | — | $1,594.05 | ~16.5% | — | — |
| **Equity** | — | — | — | **~$9,681** | **100%** | — | **~–3.2%** |

- **Gross long exposure:** ~83.5%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path today:** ~69% → 76% (VOO #1) → ~84% (VOO #2) — both authorized. Stable since.

## Performance Review — Tue July 14 midday
- **1D (vs Mon last_equity $9,609.95):** portfolio **~+0.7%**. SPY firm (~751). Absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.2%** vs SPY **~+4.6%**. Gap **~–7.8 pp**.
- **What is working:** Two authorized VOO deploys filled cleanly; gross inside neutral band. AVGO (~+5.7%) and HOOD (~+9.4%) winners with intact trails. QQQ core held near cap. Process discipline: no churn, turnover budget respected, trails not re-tightened.
- **What is not working:** Absolute still red. Cash ~16.5% idle but **cannot deploy without breaching caps or inventing thin-ETF/chip trades into TSMC binary**. Gap to SPY ~8 pp.
- **What must change next (not this hour):** After turnover resets tomorrow, reassess integer-share room if prices drift, or wait post-TSMC (Thu) for NVDA — never invent thin-ETF filler today.

## Goal Check
- **Portfolio since inception:** ~–3.2%
- **S&P 500 since inception:** ~+4.6% (SPY ~751 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (now cap-bound) + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):** VOO under 30% cap has only ~$143 room → **cannot buy 1 more VOO** (~$690). QQQ under 45% has only ~$39 room → **cannot buy 1 QQQ**. Chip beta: NVDA four-gate now **PASS** on price, but **TSMC earnings ~Thu Jul 16** remains a sector binary — no new chip beta until post-event reassessment. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) have no edge and/or illiquid prints. Turnover **2/2** also blocks discretionary adds today.

## Market Intel — Tuesday 12:35 PM ET
- **Broad market:** SPY ~751 OK, QQQ ~719 OK. Event severity **NONE**. Orderly tape; cooler inflation data supporting risk assets earlier session; no crash signal.
- **Geopolitical:** Hormuz / US–Iran oil escalation still a background risk premium (oil off highs after Trump dropped 20% protection fee talk) — not a reason to liquidate core beta already held.
- **Fed:** Waller hawkish rhetoric / hike-talk if inflation re-heats — background; not enough to flip regime or force de-risk.
- **Semiconductors:** SOXX ~$568 OK (soft vs prior hour), NVDA ~$209.7–$209.9 (now **≥ $209 firm**), AVGO ~$393 still strong. **TSMC full earnings ~Thu Jul 16** = binary sector event — no new chip beta until post-event reassessment even though NVDA price gate now clears.
- **AVGO:** 2 shares, ~+5.7%. Trail **$380** intact. Cooldown from Mon sell until ~**Tue 19:30Z** — no add even if turnover allowed.
- **HOOD:** 2 shares, ~+9.4%. Trail **$108** intact. No add.
- **NVDA four-gate (price only):** QQQ ≥ $716 **PASS** (~719) | NVDA ≥ $209 firm **PASS** (~$209.7) | SOXX ≥ $562 **PASS** (~568) | no CRITICAL **PASS**. **4/4 price gates PASS**, but **TSMC week + turnover 2/2 → still NO NVDA today.**
- **News source:** Bing News RSS (Google Search tool unavailable). Partial coverage: inflation-supportive open; Hormuz oil noise; Fed Waller hawkish. TSMC/NVDA-specific queries empty this hour → do not force micro-thesis from missing headlines. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings:** Yahoo calendarEvents returned none/unknown for held names this hour. Known from prior memory: **TSMC ~Thu Jul 16** sector event. META/GOOG late July; NVDA Aug.

## Universe Performance Snapshot (Yahoo Finance fallback, 16:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $393.1 | +6.0% | –0.2% | +3.2% | +10.9% | +42.6% |
| EIS | $120.1 | +0.5% | –5.2% | –5.7% | +2.1% | +28.1% |
| GLD | $372.5 | –1.3% | –6.1% | –16.3% | –11.7% | +20.9% |
| GOOG | $352.8 | –3.0% | –3.9% | +6.7% | +4.9% | +93.0% |
| HOOD | $111.2 | –1.5% | +13.3% | +40.6% | –7.5% | +11.3% |
| META | $663.7 | +7.8% | +11.8% | +0.2% | +5.2% | –7.9% |
| NVDA | $209.7 | +6.5% | –1.3% | +6.7% | +12.8% | +27.8% |
| QQQ | $719.6 | +1.4% | –3.3% | +14.5% | +14.9% | +29.4% |
| QTUM | $150.1 | –0.9% | –10.7% | +22.9% | +27.9% | +62.6% |
| RKLB | $80.6 | –3.4% | –26.2% | +11.6% | –6.9% | +86.6% |
| SHLD | $60.8 | –4.7% | –4.0% | –18.2% | –20.4% | –0.7% |
| SOXX | $568.9 | +3.1% | –9.5% | +41.8% | +70.7% | +133.3% |
| VOO | $690.4 | +0.5% | –0.5% | +8.1% | +8.2% | +20.2% |
| ARKX | $31.9 | –2.2% | –9.4% | –1.6% | –6.1% | +25.1% |
| SPY | $751.1 | +0.5% | –0.5% | +8.2% | +8.3% | +20.2% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | Cash deploy done for today (4 sh). Cap room <1 share. | 21–30% |
| AVGO | Hold / Trail $380 | Winner intact (~+5.7%). Cooldown until ~19:30Z. No add. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+9.4%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Price gates 4/4 PASS; still blocked by TSMC binary + turnover. | 0–4% |
| GOOG | Avoid | Soft 1w (–3%); no edge vs holding cash/caps. | 0% |
| SOXX | Avoid | TSMC risk; turnover exhausted; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour / rest of session)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes. Turnover 2/2.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. No re-buy until after ~Tue 19:30Z + fresh hourly auth.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs today despite NVDA price-gate pass.
5. **Cash blocker stands:** cannot add integer share of VOO or QQQ under caps; chip path blocked by TSMC week. Do not force deploys.
6. **If detector returns CRITICAL:** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs.
7. **Tomorrow (if orderly):** reassess cash ≤10% path only if price drift creates integer share room under caps, or post-TSMC NVDA four-gate — never invent thin-ETF filler.

## Ranked Deployment Queue (for next available turnover day — NOT today)
1. **VOO** — only if cap room ≥ 1 full share after price drift. Limit only.
2. **NVDA** — **NOT authorized until post-TSMC reassessment** even if price gates clear; then require all four gates again + fresh hourly line.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect turnover exhaustion. Do not chase NVDA pre-TSMC.
- **Worth monitoring:** Hormuz/oil premium; TSMC earnings Thu Jul 16; cool CPI vs Fed hawk talk; semi volatility; whether VOO/QQQ prices drift enough to free 1-share room tomorrow.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m strength (already hold small); QTUM thin; NVDA 1w +6.5% (gates pass but binary risk).

## Cap Math (equity ~$9,681)
- QQQ 45%: max ~$4,357; held ~$4,318; room **~$39** → cannot add 1 (~$720).
- VOO 30%: max ~$2,904; held ~$2,761; room **~$143** → cannot add 1 (~$690).
- Stock 15%: max ~$1,452; AVGO/HOOD room ample but thesis/cooldown/turnover/TSMC block adds.
- NVDA 1 @ $210: post weight ~2.2% — structure/TSMC week blocks today.

## Data / Process Notes
- **Audit:** OK. Gross 83.5%. Daytrades 0.
- **Event detector:** 16:35Z **NONE**. Proceed hold-only (budget spent).
- **FMP:** disabled. Yahoo Finance chart primary; Bing News RSS partial this hour.
- **Alpaca bars:** VOO TradeCount often low — limit orders only if any future VOO add. EIS/GLD/QTUM/SHLD illiquid prints.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **2/2** used (~$1,380 notional ≈ **14.2%** of weekly 20% budget). Only protective exits remain.
- **Tactical cycles 11:40–12:30:** all correctly hold-only; trails not breached; no concealment risk.

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
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant. Cooldown until ~Tue 19:30Z.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
