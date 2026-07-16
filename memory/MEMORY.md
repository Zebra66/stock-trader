# Hourly Macro Memory
*Updated 2026-07-16 17:35Z (Thursday 1:35 PM ET). Market **OPEN**. Event detector **NONE**. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-16 1:35 PM ET
- **Status:** Market **OPEN**. Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH OK; held names OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **78.3%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,579** | Cash **~$2,082** | Long **~$7,497** | Gross **~78.3%** | BP ~$29.3k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$707.7 | VOO 4 @ ~$691.3 | AVGO 1 @ ~$377.9 | HOOD 1 @ ~$107.4.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (9:40 ET protective trail — authorized). **HOOD SELL 1 @ $107.51** (1:10 PM ET authorized protective trail; limit $107.50). No further fills. No concealment — both logged in todo.md.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~78–79% all day.
- **Goal check:** Portfolio **~–4.2%** vs SPY **~+4.7%** (SPY ~752.0 vs 718.01). **Both goals FAILED.** Gap **~–8.9 pp**.
- **Regime:** **Neutral** (no flip — regime stability). Target gross **75–90%**. Live **78.3%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY.** Weekly TO + caps still block all discretionary buys. Both authorized trails already executed. Remaining AVGO 1 / HOOD 1 — let winners run. Do not chase semis into TSMC digestion. Do not invent deploys.

---

## Tactical Execution — 2026-07-16 afternoon
- **09:40 ET:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **13:10 ET:** SOLD 1 HOOD at **$107.51** (authorized protective trail).
- **10:40–13:30 ET:** No other triggers; zero unauthorized orders.
- **Remaining book:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 1.
- **Turnover:** Daily **0/2** discretionary (both sells protective/exempt); weekly **~27.0%** of 20% budget (exceeded).

---

## Live Book (Alpaca) — TRUE STATE (open)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$707.7 | ~$4,246 | ~44.3% | ~−$52 | ~−1.2% |
| VOO | 4 | $683.39 | ~$691.3 | ~$2,765 | ~28.9% | ~+$32 | ~+1.2% |
| AVGO | 1 | $371.95 | ~$377.9 | ~$378 | ~3.9% | ~+$6 | ~+1.6% |
| HOOD | 1 | $101.50 | ~$107.4 | ~$107 | ~1.1% | ~+$6 | ~+5.8% |
| Cash | — | — | — | ~$2,082 | ~21.7% | — | — |
| **Equity** | — | — | — | **~$9,579** | **100%** | — | **~–4.2%** |

- **Gross long exposure:** ~78.3%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−1.2%** (chips/Nasdaq soft; broad market soft-to-orderly).

## Performance Review — 1:35 PM Thu Jul 16
- **1D:** portfolio soft (~−1.2%); Nasdaq/chips weaker; SPY soft (~752).
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–4.2%** vs SPY **~+4.7%**. Gap **~–8.9 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD still green vs entry; weekly TO respected; no trail re-tightening after fills.
- **Not working:** Absolute red; cash 21.7% idle but **cannot deploy** (caps + weekly TO).
- **What must change today:** **Nothing forced.** Patience > friction. Next deploy window likely **Mon+** (weekly TO reset) if VOO/QQQ integer room opens.

## Goal Check
- **Portfolio since inception:** ~–4.2%
- **S&P 500 since inception:** ~+4.7% (SPY ~752.0 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$109** → **cannot buy 1 VOO** (~$691).
  2. QQQ 45% room ~**$64** → **cannot buy 1 QQQ** (~$708).
  3. **Weekly turnover Mon–Thu ~$2,583 ≈ 27.0%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19).
  4. Chip beta still digesting TSMC (beat + raise + AI demand; price reaction soft / AI valuation jitters) — no edge to force AVGO/SOXX/NVDA add even if budget allowed.
  5. Thin ETFs — no edge / illiquid (EIS/ARKX TradeCount ≤2).

## Market Intel — Thu Jul 16 1:35 PM ET
- **Tape:** Event detector NONE. SPY soft (~752). QQQ soft (~708). Semis soft (SOXX ~528). HOOD ~$107.4 (+5.8% vs entry). AVGO ~$377.9 (+1.6% vs entry).
- **TSMC:** Q2 beat + raise + US investment headlines; sector sold on AI valuation jitters / residual digestion. Do not buy the dip with weekly TO spent.
- **News (Google News RSS):** Dow firmer vs Nasdaq; chip stocks slide amid AI jitters; TSMC headlines dominate. HOOD: tokenized listing / analyst noise — not thesis-breaking. AVGO soft on session (~−4% day) but still green vs entry; AI moat narrative intact.
- **AVGO:** ~$377.9. Trail already executed once today. Remaining 1 share — **let winner run**. No new tight trail.
- **HOOD:** ~$107.4. Trail executed at 1:10 PM; remaining 1 share — **let winner run**. No new tight trail.
- **Data source:** Google News RSS. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** Yahoo calendarEvents returned none/unknown this cycle. From prior memory: no binary for QQQ/VOO/AVGO/HOOD in next 48h. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~17:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $752.0 | −0.4% | +0.2% | +7.2% | +8.7% | +20.5% |
| QQQ | $707.6 | −2.5% | −3.0% | +10.5% | +13.9% | +27.0% |
| VOO | $691.3 | −0.4% | +0.2% | +7.2% | +8.7% | +20.5% |
| AVGO | $377.5 | −5.6% | +0.2% | −5.3% | +7.3% | +34.4% |
| HOOD | $107.3 | −4.2% | +10.9% | +23.5% | −1.4% | +3.9% |
| NVDA | $206.9 | −1.9% | −0.3% | +4.3% | +11.1% | +20.7% |
| GOOG | $371.1 | +4.5% | −0.0% | +11.5% | +12.3% | +101.9% |
| SOXX | $527.7 | −9.2% | −10.7% | +30.0% | +54.1% | +114.9% |
| META | $669.7 | +0.1% | +11.6% | −1.1% | +8.0% | −4.7% |
| GLD | $365.3 | −3.1% | −8.1% | −17.0% | −13.3% | +18.5% |
| RKLB | $66.8 | −17.6% | −36.2% | −19.5% | −30.6% | +40.1% |
| SHLD | $59.8 | −2.2% | −6.3% | −18.9% | −23.2% | −1.6% |
| ARKX | $30.8 | −3.9% | −11.4% | −8.0% | −12.5% | +16.5% |
| EIS | $121.0 | +1.3% | −2.0% | −4.3% | +1.5% | +28.7% |
| QTUM | $143.2 | −7.3% | −11.7% | +14.4% | +20.9% | +53.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft tape OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold | Winner vs entry (~+1.6%). Trail already hit once today. No add / no re-buy today. | 3–8% |
| HOOD | Hold 1 | Trail executed. Remaining 1 share ~+5.8% vs entry. No add / no re-buy today. | 1–3% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | Weekly TO + no edge after TSMC digestion. | 0% |

## Priority Actions (this hour → next)
1. **HOLD all four names.** No panic de-risk of QQQ/VOO.
2. **No active sell triggers** — both authorized trails already executed.
3. **No new AVGO/HOOD sell trigger** — remaining shares are winners; let run.
4. **No discretionary buys** — weekly TO exceeded + VOO/QQQ integer room closed.
5. **Do not chase SOXX/NVDA/AVGO** into residual TSMC digestion.
6. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom (likely Mon+) **and** orderly tape.

## Cap Math (equity ~$9,579)
- QQQ 45% max ~$4,311; held ~$4,246; room ~**$64** → cannot add 1.
- VOO 30% max ~$2,874; held ~$2,765; room ~**$109** → cannot add 1.
- Weekly TO Mon–Thu ~$2,583 ≈ **27.0%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized this cycle)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** orderly tape. Limit only.
2. **NVDA / SOXX** — **NOT** until weekly budget allows + four gates + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. Both trails done; no new stops. Respect weekly TO + caps. Do not invent trades.
- **Worth monitoring:** SOXX/TSMC digestion; weekly TO reset (Mon); VOO/QQQ integer room drift.
- **Not actionable:** META strength (banned); SpaceX/Anthropic IPO chatter; thin-ETF noise; tokenized HOOD headlines.

## Data / Process Notes
- **Audit:** OK. Gross 78.3%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source. Google News RSS for headlines.
- **No open orders.**
- **Turnover today:** **0/2** discretionary. **Weekly ~27.0%** already used → discretionary blocked.
- **CRITICAL language remains lifted** (detector NONE). Weekly TO + caps remain the binding blockers.
- **Yahoo earnings calendarEvents** returned none this cycle — treated as insufficient for new binary-risk decisions; use prior memory calendar.

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
- **Neutral band 75–90%.** Live 78.3% correct; do not de-risk into cash on sector noise alone.
- **Turnover budget is real:** daily **and** weekly. Weekly binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — open CRITICAL was real sector weakness; now cooled.
- **Do not tighten trails intraday** when thesis intact.
- **Soft open / semi selloff is not a signal to invent deploys** when weekly TO + caps bind.
- **Protective exits still count toward weekly turnover** even when daily-budget-exempt.

## Prior Key Events
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
