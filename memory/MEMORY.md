# Hourly Macro Memory
*Updated 2026-07-16 21:00Z (Thursday 5:00 PM ET). Market **CLOSED**. Event detector last **NONE**. HOLD-ONLY overnight.*

---

## Hourly Cycle Summary — 2026-07-16 post-close (~5:00 PM ET)
- **Status:** Market **CLOSED** (regular session ended 4:00 PM ET). This cycle is a late/post-close reaffirm after the 3:35 final-session hourly already on origin. Event detector last **NONE**. Sector rotation NONE.
- **Repo integrity:** Fast-forwarded to origin/main. `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **78.2%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (post-close):** Equity **~$9,552** | Cash **~$2,082** | Long **~$7,470** | Gross **~78.2%** | BP ~$29.2k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$705.0 | VOO 4 @ ~$689.3 | AVGO 1 @ ~$377.7 | HOOD 1 @ ~$105.8.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (9:40 ET protective trail — authorized). **HOOD SELL 1 @ $107.51** (1:10 PM ET authorized protective trail). No further fills after 1:10 PM. No concealment. Tactical held correctly all afternoon.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~78% all day.
- **Goal check:** Portfolio **~–4.5%** vs SPY **~+4.6%** (SPY ~750.7 vs 718.01). **Both goals FAILED.** Gap **~–9.1 pp**.
- **Regime:** **Neutral** (no flip — regime stability). Target gross **75–90%**. Live **78.2%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY overnight.** No AH/pre-market orders. Weekly TO + caps still block all discretionary buys through Sun Jul 19. Remaining AVGO 1 / HOOD 1 still green vs entry — let winners run. Next reassess: **Fri 9:35 AM ET**.

---

## Tactical Execution — 2026-07-16 full day
- **09:40 ET:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **13:10 ET:** SOLD 1 HOOD at **$107.51** (authorized protective trail).
- **13:35–16:00 ET:** No fills; zero unauthorized orders; open orders none. Tactical correctly HOLD-ONLY each cycle.
- **Remaining book into close:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 1.
- **Turnover:** Daily **0/2** discretionary (both sells protective/exempt); weekly **~27.0%** of 20% budget (exceeded).

---

## Live Book (Alpaca) — TRUE STATE (post-close)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$705.0 | ~$4,230 | ~44.3% | ~−$69 | ~−1.6% |
| VOO | 4 | $683.39 | ~$689.3 | ~$2,757 | ~28.9% | ~+$24 | ~+0.9% |
| AVGO | 1 | $371.95 | ~$377.7 | ~$378 | ~4.0% | ~+$6 | ~+1.6% |
| HOOD | 1 | $101.50 | ~$105.8 | ~$106 | ~1.1% | ~+$4 | ~+4.3% |
| Cash | — | — | — | ~$2,082 | ~21.8% | — | — |
| **Equity** | — | — | — | **~$9,552** | **100%** | — | **~–4.5%** |

- **Gross long exposure:** ~78.2%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−1.5%** (chips/Nasdaq soft; AI valuation jitters).

## Performance Review — close Thu Jul 16
- **1D:** portfolio soft (~−1.5%); Nasdaq/chips weaker; SPY ~750.7 soft-to-flat on day.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–4.5%** vs SPY **~+4.6%**. Gap **~–9.1 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD still green vs entry; weekly TO respected; no trail re-tightening after fills; tactical obeyed HOLD-ONLY all afternoon.
- **Not working:** Absolute red; cash 21.8% idle but **cannot deploy** (caps + weekly TO).
- **What must change:** Nothing forced overnight. Patience > friction. Next deploy window likely **Mon+** (weekly TO reset) if VOO/QQQ integer room opens; Fri open only reassesses gap/caps/detector.

## Goal Check
- **Portfolio since inception:** ~–4.5%
- **S&P 500 since inception:** ~+4.6% (SPY ~750.7 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$109** → **cannot buy 1 VOO** (~$689).
  2. QQQ 45% room ~**$68** → **cannot buy 1 QQQ** (~$705).
  3. **Weekly turnover Mon–Thu ~$2,583 ≈ 27.0%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19).
  4. Soft chip tape / AI valuation jitters (Google News: WSJ Nasdaq declines as chips under pressure; Yahoo: Dow up / S&P+Nasdaq soft on AI jitters). No edge to force AVGO/SOXX/NVDA add even if budget allowed.
  5. Thin ETFs — no edge / illiquid (EIS TradeCount 1; ARKX/QTUM/SHLD low).
  6. **Market closed** — no AH deploy path.

## Market Intel — Thu Jul 16 close
- **Tape:** Event detector NONE into close. SPY ~750.7. QQQ ~705. Semis soft (SOXX ~530). HOOD ~$105.8 (+4.3% vs entry). AVGO ~$377.7 (+1.6% vs entry).
- **News (Google News RSS + Yahoo Finance RSS; Bing market RSS empty this cycle):** Nasdaq declines as chip stocks under pressure (WSJ); S&P/Nasdaq soft amid AI jitters while Dow firmer; smartphone shipments / AI memory shortage themes in background. HOOD/AVGO single-name RSS stale or non-thesis-breaking. SpaceX IPO chatter — not actionable.
- **AVGO:** Trail already executed once today. Remaining 1 share — **let winner run**. No new tight trail.
- **HOOD:** Trail executed at 1:10 PM; remaining 1 share — **let winner run**. No new tight trail.
- **Data source:** Google News RSS + Yahoo Finance RSS. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** No binary for QQQ/VOO/AVGO/HOOD in next 48h from prior memory. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~20:45Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $750.7 | −0.6% | +1.3% | +5.7% | +10.8% | +19.5% |
| QQQ | $705.9 | −2.7% | −2.3% | +8.8% | +16.1% | +25.7% |
| VOO | $690.1 | −0.5% | +1.3% | +5.7% | +10.8% | +19.6% |
| AVGO | $374.5 | −6.4% | −4.7% | −7.9% | +12.6% | +30.7% |
| HOOD | $106.0 | −5.3% | +0.8% | +16.8% | +0.2% | +0.5% |
| NVDA | $207.4 | −1.7% | +1.3% | +2.8% | +16.5% | +19.9% |
| GOOG | $353.8 | −0.3% | −2.3% | +4.3% | +9.8% | +91.6% |
| SOXX | $530.5 | −8.8% | −11.5% | +27.6% | +57.3% | +115.2% |
| META | $664.5 | −0.7% | +17.1% | −3.5% | +10.0% | −5.3% |
| GLD | $365.0 | −3.2% | −6.1% | −18.2% | −16.5% | +18.7% |
| RKLB | $67.4 | −16.9% | −37.6% | −20.6% | −24.5% | +31.2% |
| SHLD | $59.9 | −2.1% | −6.2% | −18.4% | −22.2% | −2.7% |
| ARKX | $30.8 | −4.0% | −10.8% | −8.4% | −9.0% | +12.1% |
| EIS | $120.5 | +0.9% | +0.0% | −7.2% | +3.0% | +27.1% |
| QTUM | $142.9 | −7.5% | −12.0% | +11.7% | +23.0% | +50.4% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft tape OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold | Winner vs entry (~+1.6%). Trail already hit once today. No add / no re-buy. | 3–8% |
| HOOD | Hold 1 | Trail executed. Remaining 1 share ~+4.3% vs entry. No add / no re-buy. | 1–3% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | Weekly TO + no edge after AI/chip digestion. | 0% |

## Priority Actions (overnight → Fri open)
1. **HOLD all four names overnight.** No panic de-risk of QQQ/VOO.
2. **No after-hours / pre-market equity orders.**
3. **No active sell triggers** — both authorized trails already executed.
4. **No new AVGO/HOOD sell trigger** — remaining shares are winners; let run.
5. **No discretionary buys** — weekly TO exceeded + VOO/QQQ integer room closed (and market closed).
6. **Fri 9:35 hourly:** reassess weekly TO, cap room after open prints, detector, overnight gaps.
7. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom (likely Mon+) **and** orderly tape.

## Cap Math (equity ~$9,552)
- QQQ 45% max ~$4,298; held ~$4,230; room ~**$68** → cannot add 1.
- VOO 30% max ~$2,866; held ~$2,757; room ~**$109** → cannot add 1.
- Weekly TO Mon–Thu ~$2,583 ≈ **27.0%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized overnight / Fri while weekly TO binds)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** orderly tape. Limit only.
2. **NVDA / SOXX** — **NOT** until weekly budget allows + four gates + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core overnight. Both trails done; no new stops. Respect weekly TO + caps. No AH orders.
- **Worth monitoring:** SOXX/AI valuation digestion; Fri open gap; weekly TO reset (Mon); VOO/QQQ integer room drift.
- **Not actionable:** META strength (banned); SpaceX IPO chatter; thin-ETF noise; Mag-7 valuation listicles.

## Data / Process Notes
- **Audit:** OK. Gross 78.2%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source.
- **News fallback:** Google News RSS + Yahoo Finance RSS; Bing market RSS empty this cycle; documented here.
- **No open orders.**
- **Turnover today:** **0/2** discretionary. **Weekly ~27.0%** already used → discretionary blocked through Sun Jul 19.
- **CRITICAL language remains lifted** (detector NONE). Weekly TO + caps remain the binding blockers.
- **Branch:** was 1 commit behind origin (3:35 hourly); fast-forwarded before writing this post-close note.

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
- **Neutral band 75–90%.** Live 78.2% correct; do not de-risk into cash on sector noise alone.
- **Turnover budget is real:** daily **and** weekly. Weekly binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — open CRITICAL was real sector weakness; now cooled.
- **Do not tighten trails intraday** when thesis intact.
- **Soft open / semi selloff is not a signal to invent deploys** when weekly TO + caps bind.
- **Protective exits still count toward weekly turnover** even when daily-budget-exempt.

## Prior Key Events
- **2026-07-16 ~17:00 ET:** Post-close hourly reaffirm HOLD-ONLY overnight; weekly TO + caps bind; no AH orders.
- **2026-07-16 15:35 ET:** Final session hourly HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 14:35 ET:** Hourly HOLD-ONLY reaffirm; weekly TO + caps bind; soft AI/chip tape.
- **2026-07-16 13:35 ET:** Hourly HOLD-ONLY reaffirm; both trails done; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Tactical SOLD 1 HOOD @ $107.51 (authorized trail); remaining 1 HOOD held.
- **2026-07-16 12:35 ET:** Hourly HOLD-ONLY reaffirm; HOOD buffer ~1.2%; weekly TO + caps bind.
- **2026-07-16 11:35 ET:** Hourly HOLD-ONLY reaffirm; HOOD soft but above trail; weekly TO + caps bind.
- **2026-07-16 10:35 ET:** Hourly HOLD-ONLY; lift CRITICAL freeze; weekly TO + caps bind.
- **2026-07-16 9:40 ET:** AVGO trail SELL 1 @ $380.65.
- **2026-07-16 9:30 ET:** Tactical CRITICAL override; no stops hit; no action.
- **2026-07-15 all day:** Zero fills; hold-only; weekly TO + caps bind.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance.
