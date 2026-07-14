# Hourly Macro Memory
*Updated 2026-07-14 15:35Z (Tuesday 11:35 AM ET). Market OPEN.*

---

## Hourly Cycle Summary — 2026-07-14 15:35Z (Tue 11:35 AM ET)
- **Status:** Market OPEN. Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held AVGO/HOOD/QQQ/VOO all OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. No missing tracked sources. Audit **OK**. Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~15:35Z):** Equity **~$9,696** | Cash **$1,594.05** | Long **~$8,102** | Gross **~83.6%** | BP ~$29.1k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills (authorized):** BUY 1 VOO @ **$689.49** (14:12Z); BUY 1 VOO @ **$691.15** (14:41Z). Documented. **No concealment.** No further fills this hour.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift (authorized VOO-only path 69% → 84%).
- **Goal check:** Portfolio **~–3.0%** vs SPY **~+4.7%** (SPY ~752 vs 718.01). **Both goals FAILED.** Gap **~–7.8 pp**.
- **Regime:** **Neutral** (unchanged; no flip — regime stability doctrine). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.4% still >10%) is now **cap-bound** + historical **turnover/friction**. Not symbol selection (QQQ/AVGO constructive).
- **This-hour decision:** **HOLD-ONLY.** Turnover **2/2 exhausted**. VOO room ~$144 (cannot add 1 share @ ~$691). QQQ room ~$37 (cannot add 1). Speculative chip beta blocked by TSMC week + NVDA gate fail. No discretionary trades. Protect winners via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$721.1 | ~$4,327 | ~44.6% | ~+$28 | ~+0.6% |
| VOO | 4 | $683.39 | ~$691.2 | ~$2,765 | ~28.5% | ~+$31 | ~+1.1% |
| AVGO | 2 | $371.95 | ~$395.1 | ~$790 | ~8.1% | ~+$46 | ~+6.2% |
| HOOD | 2 | $101.50 | ~$110.2 | ~$220 | ~2.3% | ~+$17 | ~+8.5% |
| Cash | — | — | — | $1,594.05 | ~16.4% | — | — |
| **Equity** | — | — | — | **~$9,696** | **100%** | — | **~–3.0%** |

- **Gross long exposure:** ~83.6%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path today:** ~69% → 76% (VOO #1) → ~84% (VOO #2) — both authorized.

## Performance Review — Tue July 14 late morning
- **1D (vs Mon last_equity $9,609.95):** portfolio **~+0.9%**. SPY firm (~752). Absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.0%** vs SPY **~+4.7%**. Gap **~–7.8 pp**.
- **What is working:** Two authorized VOO deploys filled cleanly; gross now inside neutral band. AVGO winner (~+6%). QQQ core held near cap. Process discipline: CRITICAL/MAJOR handling, no churn, turnover budget respected.
- **What is not working:** Absolute still red. Cash still ~16% idle but **cannot deploy without breaching caps or inventing thin-ETF/chip trades**. Gap to SPY ~8 pp. Chip single-name beta gated by TSMC week.
- **What must change next (not this hour):** After turnover resets tomorrow, reassess whether any integer-share room opens if prices drift, or wait for post-TSMC (Thu) NVDA four-gate. Do **not** force deploys into SOXX/NVDA/thin names today.

## Goal Check
- **Portfolio since inception:** ~–3.0%
- **S&P 500 since inception:** ~+4.7% (SPY ~752 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (now cap-bound) + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):** VOO under 30% cap has only ~$144 room → **cannot buy 1 more VOO** (~$691). QQQ under 45% has only ~$37 room → **cannot buy 1 QQQ**. Chip beta blocked by **TSMC earnings ~Thu Jul 16** + **NVDA four-gate FAIL** (price ~$208.9 < $209 firm). Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) have no edge and/or illiquid prints — do not invent deploys. Turnover **2/2** also blocks discretionary adds today.

## Market Intel — Tuesday 11:35 AM ET
- **Broad market:** SPY ~752 OK, QQQ ~721 OK. Event severity **NONE**. Orderly risk-on/neutral tape; no crash signal.
- **Geopolitical:** Hormuz / US–Iran oil escalation still a background risk premium — not a reason to liquidate core beta already held.
- **Semiconductors:** SOXX ~$573 OK, NVDA ~$209 (still shy of firm ≥$209 gate on latest print ~$208.85–$208.91), AVGO ~$395 strength. **TSMC full earnings ~Thu Jul 16** = binary sector event — no new chip beta until post-event reassessment.
- **AVGO:** 2 shares, ~+6.2%. Trail **$380** intact. Cooldown from Mon sell until ~**Tue 19:30Z** — no add even if turnover allowed.
- **HOOD:** 2 shares, ~+8.5%. Trail **$108** intact. No add.
- **NVDA four-gate:** QQQ ≥ $716 **PASS** (~721) | NVDA ≥ $209 firm **FAIL** (~$208.9) | SOXX ≥ $562 **PASS** (~573) | no CRITICAL **PASS**. **3/4 → NO NVDA.**
- **News source:** Bing News RSS (Google Search tool unavailable). **Coverage insufficient this hour** — all query feeds returned empty. Do not force thesis from missing headlines. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings:** Yahoo calendarEvents returned none/unknown for held names this hour. Known from prior memory: **TSMC ~Thu Jul 16** sector event. META/GOOG late July; NVDA Aug.

## Universe Performance Snapshot (Yahoo Finance fallback, 15:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $395.3 | +1.7% | +0.3% | +3.8% | +16.3% | +43.4% |
| EIS | $120.4 | +0.8% | –5.0% | –5.4% | +1.4% | +28.4% |
| GLD | $374.2 | –0.1% | –5.6% | –15.9% | –12.2% | +21.5% |
| GOOG | $355.2 | –1.0% | –3.3% | +7.4% | +5.6% | +94.3% |
| HOOD | $110.1 | –3.1% | +12.2% | +39.1% | –8.0% | +10.1% |
| META | $657.4 | +8.9% | +10.7% | –0.8% | +6.8% | –8.9% |
| NVDA | $208.9 | +2.3% | –1.7% | +6.3% | +14.0% | +27.3% |
| QQQ | $721.1 | +1.4% | –3.1% | +14.7% | +16.4% | +29.6% |
| QTUM | $150.6 | –1.2% | –10.4% | +23.4% | +28.4% | +63.1% |
| RKLB | $80.8 | –3.0% | –26.0% | +11.9% | –11.9% | +87.1% |
| SHLD | $60.7 | –3.2% | –4.1% | –18.4% | –21.0% | –0.9% |
| SOXX | $572.8 | +1.9% | –8.9% | +42.8% | +72.5% | +134.9% |
| VOO | $690.9 | +0.8% | –0.4% | +8.2% | +8.8% | +20.3% |
| ARKX | $31.9 | –1.2% | –9.3% | –1.6% | –7.6% | +25.1% |
| SPY | $751.6 | +0.8% | –0.4% | +8.2% | +8.9% | +20.3% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | Cash deploy done for today (4 sh). Cap room <1 share. | 21–30% |
| AVGO | Hold / Trail $380 | Winner intact (~+6%). Cooldown until ~19:30Z. No add. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+8.5%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — gate FAIL | ~$208.9 << $209 firm; TSMC week. | 0–4% |
| GOOG | Avoid | Soft 1w; no edge vs holding cash/caps. | 0% |
| SOXX | Avoid | TSMC risk; turnover exhausted; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour / rest of session)
1. **HOLD QQQ / VOO / AVGO / HOOD** — no discretionary position changes. Turnover 2/2.
2. **AVGO trail only:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. No re-buy until after ~Tue 19:30Z + fresh hourly auth.
3. **HOOD trail only:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
4. **META banned.** No NVDA/GOOG/SOXX/thin ETFs.
5. **Cash blocker stands:** cannot add integer share of VOO or QQQ under caps; chip path blocked. Do not force deploys.
6. **If detector returns CRITICAL:** hold; only execute authorized stops if breached; write `NO NEW BUYS — CRITICAL EVENT`. No market-panic sells of core ETFs.
7. **Tomorrow (if orderly):** reassess cash ≤10% path only if price drift creates integer share room under caps, or post-TSMC NVDA four-gate — never invent thin-ETF filler.

## Ranked Deployment Queue (for next available turnover day — NOT today)
1. **VOO** — only if cap room ≥ 1 full share after price drift. Limit only.
2. **NVDA** — NOT authorized until all four gates pass **post-TSMC**.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD trails. Respect turnover exhaustion.
- **Worth monitoring:** Hormuz/oil premium; TSMC earnings Thu Jul 16; cool CPI vs Fed hawk talk; semi volatility; whether VOO/QQQ prices drift enough to free 1-share room.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m strength (already hold small); QTUM thin.

## Cap Math (equity ~$9,696)
- QQQ 45%: max ~$4,363; held ~$4,327; room **~$37** → cannot add 1 (~$721).
- VOO 30%: max ~$2,909; held ~$2,765; room **~$144** → cannot add 1 (~$691).
- Stock 15%: max ~$1,454; AVGO/HOOD room ample but thesis/cooldown/turnover block adds.
- NVDA 1 @ $209: post weight ~2.1% — structure gate blocks.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **Event detector:** 15:35Z **NONE**. Proceed hold-only (budget spent).
- **FMP:** disabled. Yahoo Finance chart primary; Bing News RSS empty this hour → coverage insufficient.
- **Alpaca bars:** VOO TradeCount often low — limit orders only if any future VOO add.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** **2/2** used (~$1,380 notional ≈ **14.2%** of weekly 20% budget). Only protective exits remain.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are tight** (QQQ maxed at 6 shares; VOO now 4 near 30%).
- **VOO symbolCap is 30%** — preferred cash-deployment vehicle when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade.
- **Cash ≤10% target in neutral/offensive** — excess for 2+ hours → limit-add underweight core ETF; **if caps bind, write exact blocker** (current state).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band is 75–90%** (doctrine). Live 83.6% is correct; do not de-risk into cash.
- **Turnover budget is real:** after 2/2, hold and protect only.

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:41Z:** BUY 1 VOO @ $691.15 (authorized #2). Compliant.
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized #1). Compliant.
- **2026-07-14 13:30Z:** CRITICAL override — no trades (correct then). Detector later MAJOR → MINOR → NONE.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant. Cooldown until ~Tue 19:30Z.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
