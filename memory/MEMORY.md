# Hourly Macro Memory
*Updated 2026-07-16 14:35Z (Thursday 10:35 AM ET). Market **OPEN**. Event detector **NONE** (cooled from open CRITICAL). HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-16 10:35 ET
- **Status:** Market **OPEN**. Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH all OK; held names OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **79.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,629** | Cash **~$1,975** | Long **~$7,655** | Gross **~79.5%** | BP ~$29.3k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$711.9 | VOO 4 @ ~$693.2 | AVGO 1 @ ~$383.3 | HOOD 2 @ ~$113.5.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (9:40 ET protective trail — authorized). No other fills. No concealment.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~79–80% since open trail.
- **Goal check:** Portfolio **~–3.7%** vs SPY **~+5.0%** (SPY ~754.2 vs 718.01). **Both goals FAILED.** Gap **~–8.7 pp**.
- **Regime:** **Neutral** (no flip — regime stability). Target gross **75–90%**. Live **79.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY.** Lift CRITICAL no-new-buys language (detector NONE). **Weekly TO + caps still block all discretionary buys.** Keep HOOD trail $108. No new AVGO trail (remaining 1 is winner; thesis intact). Do not chase semis.

---

## Tactical Execution — 2026-07-16 09:40 ET
- **Action:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **Remaining book:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 2.
- **Turnover:** Daily **0/2** discretionary (protective exit exempt); weekly **~25.7%** of 20% budget (exceeded).

---

## Live Book (Alpaca) — TRUE STATE (open)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$711.9 | ~$4,272 | ~44.4% | ~−$27 | ~−0.6% |
| VOO | 4 | $683.39 | ~$693.2 | ~$2,773 | ~28.8% | ~+$39 | ~+1.4% |
| AVGO | 1 | $371.95 | ~$383.3 | ~$383 | ~4.0% | ~+$11 | ~+3.1% |
| HOOD | 2 | $101.50 | ~$113.5 | ~$227 | ~2.4% | ~+$24 | ~+11.8% |
| Cash | — | — | — | ~$1,975 | ~20.5% | — | — |
| **Equity** | — | — | — | **~$9,629** | **100%** | — | **~–3.7%** |

- **Gross long exposure:** ~79.5%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−0.7%** (soft chip open; broad market orderly).

## Performance Review — mid-morning Thu Jul 16
- **1D:** portfolio soft (~−0.7%); SPY roughly flat-to-soft; semis digested TSMC print.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.7%** vs SPY **~+5.0%**. Gap **~–8.7 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD green vs entry; weekly TO respected; detector cool-down handled without inventing trades.
- **Not working:** Absolute red; cash 20.5% idle but **cannot deploy** (caps + weekly TO).
- **What must change today:** **Nothing forced.** Patience > friction. Next deploy window likely **Mon+** (weekly TO reset) if VOO/QQQ integer room opens.

## Goal Check
- **Portfolio since inception:** ~–3.7%
- **S&P 500 since inception:** ~+5.0% (SPY ~754.2 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$116** → **cannot buy 1 VOO** (~$693).
  2. QQQ 45% room ~**$62** → **cannot buy 1 QQQ** (~$712).
  3. **Weekly turnover Mon–Thu ~$2,476 ≈ 25.7%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19).
  4. Chip beta still digesting TSMC (beat + raise + AZ capex; price reaction mixed/soft) — no edge to force AVGO/SOXX/NVDA add even if budget allowed.
  5. Thin ETFs — no edge / illiquid.

## Market Intel — Thu Jul 16 10:35 ET
- **Tape:** Broad market orderly (event detector NONE). SPY OK ~flat. QQQ soft overnight but stable mid-morning. Semis no longer CRITICAL; SOXX/SMH OK on 5-min detector window.
- **TSMC:** Q2 beat + raise + **+$100B Arizona**. Sector sold at open; reaction digesting. Do not buy the residual dip with weekly TO spent.
- **News (Google News RSS):** Nasdaq soft on chips; Dow relatively firmer; retail sales / jobless claims in the mix. No portfolio-breaking headline on held names.
- **AVGO:** ~$383 (+3.1% vs entry). Trail already executed once today. Remaining 1 share — **let winner run**. No new tight trail.
- **HOOD:** ~$113.5 (+11.8% vs entry). Trail $108 intact (~4.8% buffer).
- **Data source:** Google News RSS. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** No binary for QQQ/VOO/AVGO/HOOD in next 48h. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~14:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $754.3 | +0.9% | −0.7% | +12.2% | +11.4% | +20.8% |
| QQQ | $712.4 | +0.4% | −4.5% | +18.8% | +15.4% | +27.8% |
| VOO | $693.3 | +0.9% | −0.7% | +12.1% | +11.4% | +20.8% |
| AVGO | $383.5 | +3.4% | −20.4% | +16.0% | +8.3% | +36.6% |
| HOOD | $113.8 | +0.8% | +29.1% | +47.7% | −18.6% | +10.3% |
| NVDA | $209.0 | +6.1% | −6.2% | +17.5% | +12.2% | +21.9% |
| GOOG | $373.4 | +2.7% | +4.2% | +25.2% | +43.3% | +103.2% |
| SOXX | $540.0 | −2.1% | −10.7% | +66.9% | +82.5% | +119.9% |
| META | $679.3 | +10.4% | +13.7% | +5.3% | −8.0% | −3.4% |
| GLD | $367.1 | −2.7% | −10.9% | −22.5% | −2.8% | +19.1% |
| RKLB | $69.2 | −17.1% | −43.9% | −1.3% | +7.2% | +45.1% |
| SHLD | $59.7 | −6.4% | −7.9% | −22.7% | −12.5% | −1.8% |
| ARKX | $31.1 | −4.6% | −15.2% | −0.5% | +0.7% | +17.6% |
| EIS | $121.5 | +1.6% | −8.3% | −3.3% | +21.2% | +29.3% |
| QTUM | $144.5 | −4.6% | −14.4% | +31.8% | +29.7% | +54.5% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft open OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold | Winner vs entry (~+3%). Trail already hit once today. No add / no re-buy today. | 3–8% |
| HOOD | Hold / Trail $108 | Winner ~+12%. Buffer ~4.8%. No add. | 2–6% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | Weekly TO + no edge after TSMC digestion. | 0% |

## Priority Actions (this hour → next)
1. **HOLD all four names.** No panic de-risk of QQQ/VOO.
2. **HOOD trail** SELL 1 if < **$108.00** limit **$107.50** (protective, exempt).
3. **No new AVGO sell trigger** — remaining 1 is a winner; let run.
4. **No discretionary buys** — weekly TO exceeded + VOO/QQQ integer room closed.
5. **Do not chase SOXX/NVDA/AVGO** into residual TSMC digestion.
6. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom (likely Mon+) **and** orderly tape.

## Cap Math (equity ~$9,629)
- QQQ 45% max ~$4,333; held ~$4,272; room ~**$62** → cannot add 1.
- VOO 30% max ~$2,889; held ~$2,773; room ~**$116** → cannot add 1.
- Weekly TO Mon–Thu ~$2,476 ≈ **25.7%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized this cycle)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** orderly tape. Limit only.
2. **NVDA / SOXX** — **NOT** until weekly budget allows + four gates + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect HOOD trail. Respect weekly TO + caps. Do not invent trades.
- **Worth monitoring:** SOXX/TSMC digestion; weekly TO reset (Mon); VOO/QQQ integer room drift; PPI/data flow.
- **Not actionable:** META strength (banned); SpaceX/Anthropic IPO chatter; thin-ETF noise.

## Data / Process Notes
- **Audit:** OK. Gross 79.5%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source. Google News RSS for headlines.
- **No open orders.**
- **Turnover today:** **0/2** discretionary. **Weekly ~25.7%** already used → discretionary blocked.
- **CRITICAL language lifted** this cycle (detector NONE). Weekly TO + caps remain the binding blockers.

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
- **Neutral band 75–90%.** Live 79.5% correct; do not de-risk into cash on sector noise alone.
- **Turnover budget is real:** daily **and** weekly. Weekly binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — open CRITICAL was real sector weakness; now cooled.
- **Do not tighten trails intraday** when thesis intact.
- **Soft open / semi selloff is not a signal to invent deploys** when weekly TO + caps bind.
- **Protective exits still count toward weekly turnover** even when daily-budget-exempt.

## Prior Key Events
- **2026-07-16 10:35 ET:** Hourly HOLD-ONLY; lift CRITICAL freeze; weekly TO + caps bind.
- **2026-07-16 9:40 ET:** AVGO trail SELL 1 @ $380.65.
- **2026-07-16 9:30 ET:** Tactical CRITICAL override; no stops hit; no action.
- **2026-07-15 all day:** Zero fills; hold-only; weekly TO + caps bind.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance.
