# Hourly Macro Memory
*Updated 2026-07-15 14:20Z (Wednesday ~10:20 AM ET). Market OPEN — first full mid-morning hourly after open hold-only passes.*

---

## Hourly Cycle Summary — 2026-07-15 14:20Z (Wed ~10:20 AM ET)
- **Status:** Market **OPEN**. Event detector still labels **CRITICAL**, but severity is a **multi-day UP baseline artifact** (prior print Mon 19:30Z → now: SOXX +1.5%, SMH +1.8%, QQQ +1.4%). **Not a crash.** Session remains orderly risk-on (ASML/AI + bank earnings support). Response: **no new buys** (already bound) + review stops (none near) + hold core.
- **Repo integrity:** **Critical process breach fixed this cycle** — git index again had mass staged deletions of the entire tree (same class as 09:40Z). Restored via `git reset --hard HEAD`. `.gitignore` present; `git check-ignore node_modules/zod/package.json` OK. Branch = origin/main (0/0).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~14:18Z):** Equity **$9,710.40** | Cash **$1,594.04** | Long **$8,116.36** | Gross **83.6%** | BP ~$29.1k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 4, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO #1 @ $689.49 / #2 @ $691.15. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Gross stable ~83.5–83.6% since Tue close.
- **Goal check:** Portfolio **–2.90%** vs SPY **+5.21%** (SPY 755.46 vs 718.01). **Both goals FAILED.** Gap **~–8.1 pp**.
- **Regime:** **Neutral** (no flip — stability doctrine). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (16.4% >10%) is **cap-bound** + **weekly turnover already spent** + historical friction. Not symbol selection (AVGO/HOOD winners; QQQ/VOO constructive).
- **This-hour decision:** **HOLD-ONLY.** Daily turnover **0/2**, but **weekly gross turnover already ~21.6% of equity** (Mon HOOD/AVGO trail sells + Tue VOO buys) → **above 20% weekly budget**. Caps still block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. Protect AVGO/HOOD via existing trails only.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $720.31 | $4,321.86 | 44.5% | +$23.02 | +0.54% |
| VOO | 4 | $683.39 | $694.33 | $2,777.34 | 28.6% | +$43.78 | +1.60% |
| AVGO | 2 | $371.95 | $393.35 | $786.69 | 8.1% | +$42.79 | +5.75% |
| HOOD | 2 | $101.50 | $114.06 | $228.12 | 2.3% | +$25.12 | +12.37% |
| Cash | — | — | — | $1,594.04 | 16.4% | — | — |
| **Equity** | — | — | — | **$9,710.40** | **100%** | — | **–2.90%** |

- **Gross long exposure:** 83.6%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Tue close ~83.5% → open/mid-morning ~83.6%. No unauthorized drift.

## Performance Review — Wed July 15 mid-morning
- **1D (vs Tue last_equity $9,681.70):** portfolio **~+0.3%**. SPY firm; absolute still red inception.
- **1W:** SPY ~+1.3%; portfolio still lagging absolute and relative since inception.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–2.90%** vs SPY **+5.21%**. Gap **~–8.1 pp**.
- **What is working:** Core intact; AVGO (~+5.8%) and HOOD (~+12.4%) winners with trails far from price. Process discipline (no overnight churn, audit clean, VOO deploys authorized Tue only).
- **What is not working:** Absolute still red. Cash ~16.4% idle. Cap math blocks 1-share core adds. Weekly turnover already consumed. Gap to SPY ~8 pp.
- **What must change today:** **Do not invent trades.** Respect weekly turnover ceiling. Keep trails. Reassess post-TSMC (Thu+) for any chip path; prefer patience over thin-ETF filler.

## Goal Check
- **Portfolio since inception:** –2.90%
- **S&P 500 since inception:** +5.21% (SPY 755.46 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker (write explicitly):**
  1. VOO 30% room ~**$136** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$48** → **cannot buy 1 QQQ** (~$720).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked** even though daily is 0/2.
  4. Chip beta: NVDA price gates roughly **PASS** (~$211.7 ≥ $209; QQQ ≥ $716; SOXX ~$560 just under $562 this print but earlier open was ≥$562), but **TSMC earnings ~Thu Jul 16** remains sector binary + weekly budget binds.
  5. Thin ETFs (QTUM/ARKX/EIS/SHLD/GLD/RKLB) — weak/illiquid/no edge.
  6. Event CRITICAL label this pass is **up-move multi-day artifact** → still **no new buys** (already bound); do **not** panic-sell winners.

## Market Intel — Wednesday ~10:20 AM ET
- **Broad market:** SPY ~755.5, QQQ ~720 firm. ASML/AI trade + bank earnings (BlackRock/MS) supporting risk; wholesale inflation softer. Headline “warning sign” noise — **not** a regime flip.
- **Geopolitical:** US–Iran escalation live — new strikes, port blockade, Hormuz control language (Reuters/CBS/AP). Oil premium risk **background**, **not** a liquidation trigger for QQQ/VOO core while tape is firm.
- **Fed/inflation:** Softish wholesale inflation; residual hawk talk in older headlines — stay **neutral**.
- **Semiconductors:** SOXX ~$560, NVDA ~$211.7, AVGO ~$393 constructive on AI narrative (Nvidia Japan stack, India semi package). **TSMC full earnings ~Thu Jul 16** still the sector binary. **No new chip beta until post-event reassessment.**
- **AVGO:** 2 shares, ~+5.8%. Trail **$380** intact (~3.4%+ buffer). No add.
- **HOOD:** 2 shares, ~+12.4%. Trail **$108** intact (~5.3%+ buffer). No add.
- **NVDA four-gate:** QQQ ≥ $716 **PASS** | NVDA ≥ $209 **PASS** (~211.7) | SOXX ≥ $562 **soft/mixed** (~560 this bar; was ≥ earlier) | no true crash CRITICAL **PASS**. Regardless, **TSMC week + weekly turnover → still NO NVDA today.**
- **News source:** Google News RSS + Yahoo Finance RSS + Bing News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented.
- **Earnings:** Yahoo calendarEvents empty for held names / NVDA/GOOG/META/TSM this cycle. Known from prior: **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No known binary in next 48h for QQQ/VOO/AVGO/HOOD.

## Universe Performance Snapshot (Yahoo Finance fallback, ~14:20Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $393.9 | +1.3% | 0.0% | –0.7% | +11.1% | +40.2% |
| EIS | $122.1 | +2.2% | –3.6% | –4.2% | +3.8% | +30.6% |
| GLD | $372.8 | –0.4% | –6.0% | –15.4% | –11.6% | +21.5% |
| GOOG | $364.5 | +1.6% | –0.7% | +9.0% | +8.3% | +99.1% |
| HOOD | $114.2 | +0.6% | +16.4% | +30.8% | –5.0% | +14.7% |
| META | $669.0 | +10.9% | +12.7% | –0.4% | +6.0% | –5.8% |
| NVDA | $211.7 | +3.7% | –0.3% | +6.5% | +14.0% | +24.0% |
| QQQ | $720.3 | +1.2% | –3.2% | +13.0% | +15.0% | +29.4% |
| QTUM | $149.8 | –1.7% | –10.9% | +21.4% | +27.7% | +62.0% |
| RKLB | $78.4 | –6.0% | –28.3% | +6.5% | –9.5% | +75.7% |
| SHLD | $60.4 | –3.6% | –4.5% | –19.0% | –20.9% | –0.1% |
| SOXX | $560.1 | –0.4% | –10.9% | +39.4% | +68.0% | +127.4% |
| VOO | $694.4 | +1.3% | +0.1% | +7.9% | +8.8% | +21.4% |
| ARKX | $31.8 | –1.6% | –9.6% | –3.1% | –6.3% | +24.3% |
| SPY | $755.5 | +1.4% | +0.1% | +7.9% | +8.9% | +21.4% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. 44.5%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | Hold | 4 sh near 30% cap. Cap room <1 share. Preferred deploy if room ever opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner (~+5.8%). Trail intact. No add (weekly budget). | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+12.4%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — TSMC week | Price gates mostly pass; blocked by TSMC binary + weekly turnover. | 0–4% |
| GOOG | Avoid | No edge vs hold; weekly budget binds. | 0% |
| SOXX | Avoid | TSMC risk; not needed. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour)
1. **HOLD all four positions** unless an authorized trail is breached.
2. **AVGO trail:** SELL 1 if below **$380.00** limit **$379.50**. Hold remaining 1.
3. **HOOD trail:** SELL 1 if below **$108.00** limit **$107.50**. Hold remaining 1.
4. **NO NEW BUYS** — weekly turnover exceeded + caps + TSMC week + false CRITICAL still maps to no-new-buys.
5. **META remains banned.**
6. **Conserve daytrades** (0/3). Do not open a position you might reverse today.
7. **Post-TSMC (Thu+):** only then reassess NVDA four-gate + weekly budget headroom. Do not lower gates overnight.

## Ranked Deployment Queue (NOT authorized this hour)
1. **VOO** — preferred cash vehicle if/when cap room ≥ 1 share AND weekly budget has headroom.
2. **QQQ** — only if room ≥ 1 share (currently cannot).
3. **NVDA** — 1 share limit-only post-TSMC if four gates + budget pass.
4. **Never META / never thin ETFs without explicit hourly line.**

## Cap Math (equity $9,710.40)
- QQQ 45% cap: max $4,369.68; held $4,321.86; room **~$48** → cannot add 1 share (~$720).
- VOO 30% cap: max $2,913.12; held $2,777.34; room **~$136** → cannot add 1 share (~$694).
- Stock 15% cap: max $1,456.56; AVGO/HOOD well under.
- Non-QQQ ETF 20% default does not apply to VOO (VOO has own 30% override).

## Macro Themes
- **Actionable now:** Hold core. Protect AVGO/HOOD with existing trails only. Respect weekly turnover ceiling. Do not invent deploys.
- **Worth monitoring:** TSMC full earnings (~Thu Jul 16). Hormuz/Iran escalation path vs firm equity tape. Fed/rate path into July FOMC (background). Bank earnings follow-through.
- **Interesting but not actionable yet:** META strength (banned). India semi package. SpaceX/ARKX still weak. QTUM thin.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **Event detector:** labeled CRITICAL on multi-day UP gap — treat as **false crash signal**; still no new buys (budget/caps/TSMC).
- **FMP:** disabled. Yahoo Finance chart primary for multi-TF returns; Google/Yahoo/Bing RSS for headlines.
- **No open orders / no stale GTC blockers.**
- **tactical_last_prices.json** may dirty — leave unstaged.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power. **No leverage** unless explicitly justified.
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST API calls bypass ALL code guards** — prohibited for tactical.
- **Lock files must NOT auto-expire.** Hourly alone lifts HARD_LOCK.
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are extremely tight** (QQQ maxed at 6; VOO maxed at 4 under 30%).
- **Conserve daytrades** when count is 0/3.
- **Event-detector CRITICAL on multi-day UP baselines is a false crash** — do not liquidate; still suspend discretionary buys if already bound.
- **Four-gate rule for NVDA adds:** QQQ structure + NVDA ≥ trigger + SOXX hold + no true crash CRITICAL. Partial gates = no trade. TSMC binary overrides green gates.
- **Weekly turnover is hard:** once >20% equity notional used Mon–Fri, only protective exits.
- **Alpha Preservation:** no full liquidations; no tight core-ETF stops; let winners run; do not flip regime more than once/day without true CRITICAL crash.

## Prior Tactical Executions (Key Events)
- **2026-07-14:** BUY 1 VOO @ $689.49 + BUY 1 VOO @ $691.15 (authorized cash deploy). Compliant. Turnover 2/2 that day.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized stop). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** SOLD HOOD 1 @ $109.33 + 2 @ $110.00 (authorized trails). Compliant.
- **2026-07-10:** Unauthorized META round-trip (bypass). META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations / churn — primary source of underperformance.
