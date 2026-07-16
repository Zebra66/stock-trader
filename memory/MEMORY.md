# Hourly Macro Memory
*Updated 2026-07-16 15:35Z (Thursday 11:35 AM ET). Market **OPEN**. Event detector **NONE**. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-16 11:35 ET
- **Status:** Market **OPEN**. Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH OK; held names OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **79.5%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,619** | Cash **~$1,975** | Long **~$7,644** | Gross **~79.5%** | BP ~$29.3k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$711.2 | VOO 4 @ ~$693.1 | AVGO 1 @ ~$381.9 | HOOD 2 @ ~$111.1.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (9:40 ET protective trail — authorized). No fills since. Tactical 10:40–11:20: no action (HOOD above trail). No concealment.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~79.5% all morning.
- **Goal check:** Portfolio **~–3.8%** vs SPY **~+5.0%** (SPY ~754.1 vs 718.01). **Both goals FAILED.** Gap **~–8.8 pp**.
- **Regime:** **Neutral** (no flip — regime stability). Target gross **75–90%**. Live **79.5%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY.** Weekly TO + caps still block all discretionary buys. Keep HOOD trail $108 (buffer ~2.8%; do **not** tighten). Remaining AVGO 1 — let winner run. Do not chase semis into TSMC digestion.

---

## Tactical Execution — 2026-07-16 morning
- **09:40 ET:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **10:40–11:20 ET:** No triggers; HOOD held above $108; zero orders.
- **Remaining book:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 2.
- **Turnover:** Daily **0/2** discretionary (protective exit exempt); weekly **~25.7%** of 20% budget (exceeded).

---

## Live Book (Alpaca) — TRUE STATE (open)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$711.2 | ~$4,267 | ~44.4% | ~−$32 | ~−0.7% |
| VOO | 4 | $683.39 | ~$693.1 | ~$2,773 | ~28.8% | ~+$39 | ~+1.4% |
| AVGO | 1 | $371.95 | ~$381.9 | ~$382 | ~4.0% | ~+$10 | ~+2.7% |
| HOOD | 2 | $101.50 | ~$111.1 | ~$222 | ~2.3% | ~+$19 | ~+9.5% |
| Cash | — | — | — | ~$1,975 | ~20.5% | — | — |
| **Equity** | — | — | — | **~$9,619** | **100%** | — | **~–3.8%** |

- **Gross long exposure:** ~79.5%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−0.8%** (chips soft; broad market orderly-to-soft).

## Performance Review — late morning Thu Jul 16
- **1D:** portfolio soft (~−0.8%); Nasdaq/chips weaker; SPY roughly flat-to-soft.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.8%** vs SPY **~+5.0%**. Gap **~–8.8 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD green vs entry; weekly TO respected; HOOD trail not re-tightened on soft tape.
- **Not working:** Absolute red; cash 20.5% idle but **cannot deploy** (caps + weekly TO).
- **What must change today:** **Nothing forced.** Patience > friction. Next deploy window likely **Mon+** (weekly TO reset) if VOO/QQQ integer room opens.

## Goal Check
- **Portfolio since inception:** ~–3.8%
- **S&P 500 since inception:** ~+5.0% (SPY ~754.1 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$113** → **cannot buy 1 VOO** (~$693).
  2. QQQ 45% room ~**$61** → **cannot buy 1 QQQ** (~$711).
  3. **Weekly turnover Mon–Thu ~$2,476 ≈ 25.7%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19).
  4. Chip beta still digesting TSMC (beat + raise + AZ capex; price reaction soft) — no edge to force AVGO/SOXX/NVDA add even if budget allowed.
  5. Thin ETFs — no edge / illiquid.

## Market Intel — Thu Jul 16 11:35 ET
- **Tape:** Event detector NONE. SPY ~flat (~754). QQQ soft (~711). Semis still soft but no 5-min CRITICAL (SOXX ~536, +0.3% last window). HOOD soft from ~113.5 → ~111.1; still **above** trail $108.
- **TSMC:** Q2 beat + raise + **+$100B Arizona**. Sector sold; residual digestion. Do not buy the dip with weekly TO spent.
- **News (Google News RSS):** Dow firmer vs Nasdaq; chip stocks slide amid AI jitters; TSMC US capex headlines dominate. HOOD: tokenized listing / analyst noise — not thesis-breaking.
- **AVGO:** ~$381.9 (+2.7% vs entry). Trail already executed once today. Remaining 1 share — **let winner run**. No new tight trail.
- **HOOD:** ~$111.1 (+9.5% vs entry). Trail $108 intact (~2.8% buffer). Soft session — **do not lower trail**.
- **Data source:** Google News RSS. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** No binary for QQQ/VOO/AVGO/HOOD in next 48h. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~15:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $754.1 | −0.1% | +0.5% | +7.5% | +9.0% | +20.8% |
| QQQ | $711.2 | −2.0% | −2.6% | +11.0% | +14.5% | +27.6% |
| VOO | $693.1 | −0.1% | +0.5% | +7.5% | +9.0% | +20.8% |
| AVGO | $381.6 | −4.6% | +1.3% | −4.2% | +8.5% | +35.9% |
| HOOD | $110.9 | −0.9% | +14.7% | +27.7% | +2.0% | +7.5% |
| NVDA | $207.2 | −1.8% | −0.1% | +4.5% | +11.3% | +20.9% |
| GOOG | $371.2 | +4.6% | +0.0% | +11.6% | +12.4% | +102.0% |
| SOXX | $536.1 | −7.8% | −9.3% | +32.1% | +56.5% | +118.3% |
| META | $676.5 | +1.1% | +12.7% | −0.1% | +9.1% | −3.8% |
| GLD | $368.2 | −2.3% | −7.4% | −16.3% | −12.6% | +19.4% |
| RKLB | $68.2 | −15.8% | −34.8% | −17.8% | −29.2% | +43.0% |
| SHLD | $60.1 | −1.8% | −6.0% | −18.6% | −22.9% | −1.3% |
| ARKX | $31.1 | −2.9% | −10.4% | −7.0% | −11.5% | +17.7% |
| EIS | $121.5 | +1.8% | −1.6% | −3.8% | +2.0% | +29.3% |
| QTUM | $144.6 | −6.4% | −10.9% | +15.5% | +22.1% | +54.6% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft tape OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold | Winner vs entry (~+2.7%). Trail already hit once today. No add / no re-buy today. | 3–8% |
| HOOD | Hold / Trail $108 | Winner ~+9.5%. Buffer ~2.8%. Soft — do not lower trail. No add. | 2–6% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | Weekly TO + no edge after TSMC digestion. | 0% |

## Priority Actions (this hour → next)
1. **HOLD all four names.** No panic de-risk of QQQ/VOO.
2. **HOOD trail** SELL 1 if < **$108.00** limit **$107.50** (protective, exempt). Do **not** re-tighten.
3. **No new AVGO sell trigger** — remaining 1 is a winner; let run.
4. **No discretionary buys** — weekly TO exceeded + VOO/QQQ integer room closed.
5. **Do not chase SOXX/NVDA/AVGO** into residual TSMC digestion.
6. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom (likely Mon+) **and** orderly tape.

## Cap Math (equity ~$9,619)
- QQQ 45% max ~$4,328; held ~$4,267; room ~**$61** → cannot add 1.
- VOO 30% max ~$2,886; held ~$2,773; room ~**$113** → cannot add 1.
- Weekly TO Mon–Thu ~$2,476 ≈ **25.7%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized this cycle)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** orderly tape. Limit only.
2. **NVDA / SOXX** — **NOT** until weekly budget allows + four gates + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Protect HOOD trail at $108. Respect weekly TO + caps. Do not invent trades.
- **Worth monitoring:** SOXX/TSMC digestion; HOOD soft session vs trail; weekly TO reset (Mon); VOO/QQQ integer room drift.
- **Not actionable:** META strength (banned); SpaceX/Anthropic IPO chatter; thin-ETF noise; tokenized HOOD headlines.

## Data / Process Notes
- **Audit:** OK. Gross 79.5%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source. Google News RSS for headlines.
- **No open orders.**
- **Turnover today:** **0/2** discretionary. **Weekly ~25.7%** already used → discretionary blocked.
- **CRITICAL language remains lifted** (detector NONE). Weekly TO + caps remain the binding blockers.

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
- **Do not tighten trails intraday** when thesis intact (HOOD soft ≠ trail cut).
- **Soft open / semi selloff is not a signal to invent deploys** when weekly TO + caps bind.
- **Protective exits still count toward weekly turnover** even when daily-budget-exempt.

## Prior Key Events
- **2026-07-16 11:35 ET:** Hourly HOLD-ONLY reaffirm; HOOD soft but above trail; weekly TO + caps bind.
- **2026-07-16 10:35 ET:** Hourly HOLD-ONLY; lift CRITICAL freeze; weekly TO + caps bind.
- **2026-07-16 9:40 ET:** AVGO trail SELL 1 @ $380.65.
- **2026-07-16 9:30 ET:** Tactical CRITICAL override; no stops hit; no action.
- **2026-07-15 all day:** Zero fills; hold-only; weekly TO + caps bind.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance.
