# Hourly Macro Memory
*Updated 2026-07-16 19:35Z (Thursday 3:35 PM ET). Market **OPEN** (~25m to close). Event detector **NONE**. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-16 3:35 PM ET
- **Status:** Market **OPEN** (final hourly of regular session). Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH OK; held names OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **78.2%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,541** | Cash **~$2,082** | Long **~$7,459** | Gross **~78.2%** | BP ~$29.2k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$704.1 | VOO 4 @ ~$688.2 | AVGO 1 @ ~$375.8 | HOOD 1 @ ~$106.1.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (9:40 ET protective trail — authorized). **HOOD SELL 1 @ $107.51** (1:10 PM ET authorized protective trail). No further fills since 1:35 hourly. No concealment. Tactical 15:10–15:30 correctly held.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~78% all afternoon.
- **Goal check:** Portfolio **~–4.6%** vs SPY **~+4.3%** (SPY ~748.6 vs 718.01). **Both goals FAILED.** Gap **~–8.9 pp**.
- **Regime:** **Neutral** (no flip — regime stability). Target gross **75–90%**. Live **78.2%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY** through close. Weekly TO + caps still block all discretionary buys. Both authorized trails already executed. Remaining AVGO 1 / HOOD 1 — let winners run (still green vs entry). Soft chip / AI-valuation tape into the close — do not invent deploys. **No after-hours / pre-market orders.** Next reassessment: Fri open / first hourly Fri.

---

## Tactical Execution — 2026-07-16 afternoon
- **09:40 ET:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **13:10 ET:** SOLD 1 HOOD at **$107.51** (authorized protective trail).
- **13:35–15:35 ET:** No fills; zero unauthorized orders; open orders none. Tactical correctly HOLD-ONLY each cycle.
- **Remaining book:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 1.
- **Turnover:** Daily **0/2** discretionary (both sells protective/exempt); weekly **~27.1%** of 20% budget (exceeded).

---

## Live Book (Alpaca) — TRUE STATE (open, final hourly)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$704.1 | ~$4,225 | ~44.3% | ~−$74 | ~−1.7% |
| VOO | 4 | $683.39 | ~$688.2 | ~$2,753 | ~28.8% | ~+$19 | ~+0.7% |
| AVGO | 1 | $371.95 | ~$375.8 | ~$376 | ~3.9% | ~+$4 | ~+1.0% |
| HOOD | 1 | $101.50 | ~$106.1 | ~$106 | ~1.1% | ~+$5 | ~+4.5% |
| Cash | — | — | — | ~$2,082 | ~21.8% | — | — |
| **Equity** | — | — | — | **~$9,541** | **100%** | — | **~–4.6%** |

- **Gross long exposure:** ~78.2%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−1.6%** (chips/Nasdaq soft; AI valuation jitters into close).

## Performance Review — 3:35 PM Thu Jul 16
- **1D:** portfolio soft (~−1.6%); Nasdaq/chips weaker into close; SPY ~748.6 soft.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–4.6%** vs SPY **~+4.3%**. Gap **~–8.9 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD still green vs entry; weekly TO respected; no trail re-tightening after fills; tactical obeyed HOLD-ONLY all afternoon.
- **Not working:** Absolute red; cash 21.8% idle but **cannot deploy** (caps + weekly TO).
- **What must change today:** **Nothing forced.** Patience > friction. Next deploy window likely **Mon+** (weekly TO reset) if VOO/QQQ integer room opens; Fri open reassess if cap room drifts with prices.

## Goal Check
- **Portfolio since inception:** ~–4.6%
- **S&P 500 since inception:** ~+4.3% (SPY ~748.6 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$110** → **cannot buy 1 VOO** (~$688).
  2. QQQ 45% room ~**$69** → **cannot buy 1 QQQ** (~$704).
  3. **Weekly turnover Mon–Thu ~$2,583 ≈ 27.1%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19).
  4. Soft chip tape / AI valuation jitters into close (Google/Bing/Yahoo: Nasdaq slips as chip stocks slide amid AI jitters; TSMC sell-rule headlines coexist with soft price action). No edge to force AVGO/SOXX/NVDA add even if budget allowed.
  5. Thin ETFs — no edge / illiquid (EIS TradeCount 1; ARKX TradeCount 2; QTUM TradeCount 1; SHLD TradeCount 2).

## Market Intel — Thu Jul 16 3:35 PM ET
- **Tape:** Event detector NONE. SPY soft (~748.6). QQQ soft (~704.1). Semis soft (SOXX ~527). HOOD ~$106.1 (+4.5% vs entry). AVGO ~$375.8 (+1.0% vs entry). GOOG softer (~$354).
- **News (Google News RSS + Bing News RSS + Yahoo Finance RSS fallback):** Nasdaq/S&P soft as chip stocks slide amid AI valuation jitters; TSMC sell-rule / AI-future headlines mixed with sector pressure. AVGO: still framed as core AI winner / Apple chip-deal chatter — no thesis break on remaining 1 share. HOOD: convert notes / bond-sale headlines mixed with prior analyst PT raises — no thesis break on remaining 1 share. SpaceX IPO chatter — not actionable.
- **AVGO:** ~$375.8. Trail already executed once today. Remaining 1 share — **let winner run**. No new tight trail.
- **HOOD:** ~$106.1. Trail executed at 1:10 PM; remaining 1 share — **let winner run**. No new tight trail.
- **Data source:** Google News RSS + Bing News RSS + Yahoo Finance RSS. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** Yahoo calendarEvents returned empty this cycle. From prior memory: no binary for QQQ/VOO/AVGO/HOOD in next 48h. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~19:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $748.6 | −0.4% | −0.2% | +5.4% | +8.2% | +19.9% |
| QQQ | $704.0 | −2.7% | −3.5% | +8.5% | +13.3% | +26.3% |
| VOO | $688.1 | −0.4% | −0.2% | +5.4% | +8.2% | +19.9% |
| AVGO | $375.7 | −6.3% | −0.3% | −7.6% | +6.8% | +33.8% |
| HOOD | $106.1 | −7.9% | +9.7% | +16.9% | −2.5% | +2.7% |
| NVDA | $206.4 | +1.8% | −0.5% | +2.4% | +10.8% | +20.5% |
| GOOG | $353.9 | −0.7% | −4.6% | +4.3% | +7.1% | +92.6% |
| SOXX | $526.8 | −9.4% | −10.9% | +26.7% | +53.8% | +114.5% |
| META | $663.4 | +5.1% | +10.5% | −3.7% | +7.0% | −5.6% |
| GLD | $364.4 | −3.6% | −8.3% | −18.3% | −13.5% | +18.2% |
| RKLB | $67.1 | −18.8% | −35.9% | −20.9% | −30.4% | +40.6% |
| SHLD | $59.7 | −2.8% | −6.5% | −18.6% | −23.4% | −1.8% |
| ARKX | $30.7 | −5.0% | −11.7% | −8.6% | −12.8% | +16.1% |
| EIS | $120.4 | +0.7% | −2.5% | −7.3% | +1.0% | +28.1% |
| QTUM | $142.5 | −8.4% | −12.2% | +11.4% | +20.3% | +52.4% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft tape OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold | Winner vs entry (~+1.0%). Trail already hit once today. No add / no re-buy today. | 3–8% |
| HOOD | Hold 1 | Trail executed. Remaining 1 share ~+4.5% vs entry. No add / no re-buy today. | 1–3% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | Weekly TO + no edge after AI/chip digestion. | 0% |

## Priority Actions (this hour → close → Fri)
1. **HOLD all four names through close.** No panic de-risk of QQQ/VOO.
2. **No active sell triggers** — both authorized trails already executed.
3. **No new AVGO/HOOD sell trigger** — remaining shares are winners; let run.
4. **No discretionary buys** — weekly TO exceeded + VOO/QQQ integer room closed.
5. **Do not chase SOXX/NVDA/AVGO** into residual AI-valuation / chip digestion into the close.
6. **No after-hours / pre-market equity orders** at/after 4:00 PM ET.
7. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom (likely Mon+) **and** orderly tape. Fri open: reassess cap room if prices drift; weekly TO still binds through Sun Jul 19.

## Cap Math (equity ~$9,541)
- QQQ 45% max ~$4,294; held ~$4,225; room ~**$69** → cannot add 1.
- VOO 30% max ~$2,862; held ~$2,753; room ~**$110** → cannot add 1.
- Weekly TO Mon–Thu ~$2,583 ≈ **27.1%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized this cycle / rest of week)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** orderly tape. Limit only. Earliest realistic: **Mon Jul 20** (weekly reset) unless Fri price drift opens room *and* weekly budget is re-interpreted (it will not — week ends Sun).
2. **NVDA / SOXX** — **NOT** until weekly budget allows + four gates + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core through close. Both trails done; no new stops. Respect weekly TO + caps. Do not invent trades into soft chip close.
- **Worth monitoring:** SOXX/AI valuation digestion into Fri; weekly TO reset (Mon); VOO/QQQ integer room drift overnight; Fri open first hourly.
- **Not actionable:** META strength (banned); SpaceX IPO chatter; thin-ETF noise; convert-notes HOOD noise without thesis break.

## Data / Process Notes
- **Audit:** OK. Gross 78.2%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source.
- **News fallback:** Google News RSS + Bing News RSS + Yahoo Finance headline RSS used; documented here.
- **No open orders.**
- **Turnover today:** **0/2** discretionary. **Weekly ~27.1%** already used → discretionary blocked through Sun Jul 19.
- **CRITICAL language remains lifted** (detector NONE). Weekly TO + caps remain the binding blockers.
- **Yahoo earnings calendarEvents** empty this cycle — treated as insufficient for new binary-risk decisions; use prior memory calendar.
- **Session close ~4:00 PM ET** — this is final regular-session hourly. Next tactical cycles before close must remain HOLD-ONLY; no after-hours.

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
- **Final hourly of session: default hold-through-close** when no active triggers remain — do not invent last-minute trades into soft closes.

## Prior Key Events
- **2026-07-16 15:35 ET:** Hourly HOLD-ONLY final session reaffirm; weekly TO + caps bind; soft AI/chip close; no AH orders.
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
