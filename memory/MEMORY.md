# Hourly Macro Memory
*Updated 2026-07-16 17:10Z (Thursday 1:10 PM ET). Market **OPEN**. Event detector **NONE**. HOLD-ONLY.*

---

## Tactical Execution — 2026-07-16 1:10 PM ET
- **Status:** Event detector **NONE**. Market **OPEN**. Authorized HOOD trail **breached** at ~$107.5–$107.8.
- **Action:** SOLD **1 HOOD** at **$107.51** via limit order ($107.50). Remaining book: QQQ 6 / VOO 4 / AVGO 1 / HOOD 1.
- **Audit:** OK. Gross exposure **~78.3%**. Daytrades **0**. No unauthorized positions. No concentration breaches.
- **Turnover:** Daily 0/2 discretionary (both sells today were protective/exempt); weekly now **~26.9%** of 20% budget (exceeded). No further discretionary trades today.
- **All other directives unchanged:** QQQ/VOO hold, AVGO 1 hold, remaining HOOD 1 hold; no new buys; no stop changes.

---

## Hourly Cycle Summary — 2026-07-16 12:35 ET
- **Status:** Market **OPEN**. Event detector **NONE** (SPY/QQQ/SOXX/XLK/GLD/SMH OK; held names OK). Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Audit **OK**. No unauthorized positions. Open orders **NONE**.
- **Audit:** Unauthorized=[] Concentration=[] Gross **78.3%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,587** | Cash **~$2,082** | Long **~$7,504** | Gross **~78.3%** | BP ~$29.2k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$708.6 | VOO 4 @ ~$691.8 | AVGO 1 @ ~$377.9 | HOOD 1 @ ~$107.8.
- **Today's fills:** **AVGO SELL 1 @ $380.65** (9:40 ET protective trail — authorized). **HOOD SELL 1 @ $107.51** (1:10 PM ET authorized protective trail; limit $107.50). No further triggers. No concealment.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~79.4% all morning.
- **Goal check:** Portfolio **~–4.1%** vs SPY **~+4.8%** (SPY ~752.3 vs 718.01). **Both goals FAILED.** Gap **~–8.9 pp**.
- **Regime:** **Neutral** (no flip — regime stability). Target gross **75–90%**. Live **79.4%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound integer shares) + **weekly turnover spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD-ONLY.** Weekly TO + caps still block all discretionary buys. HOOD buffer compressed (~1.2% to $108) but **do not tighten trail**. Remaining AVGO 1 — let winner run. Do not chase semis into TSMC digestion.

---

## Tactical Execution — 2026-07-16 midday
- **09:40 ET:** SOLD 1 AVGO at **$380.65** (authorized protective trail).
- **10:40–12:30 ET:** No triggers; HOOD held above $108; zero orders.
- **Remaining book:** QQQ 6 / VOO 4 / AVGO 1 / HOOD 2.
- **Turnover:** Daily **0/2** discretionary (protective exit exempt); weekly **~25.7%** of 20% budget (exceeded).

---

## Live Book (Alpaca) — TRUE STATE (open)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$708.6 | ~$4,251 | ~44.3% | ~−$47 | ~−1.1% |
| VOO | 4 | $683.39 | ~$691.8 | ~$2,767 | ~28.9% | ~+$34 | ~+1.2% |
| AVGO | 1 | $371.95 | ~$377.9 | ~$378 | ~3.9% | ~+$6 | ~+1.6% |
| HOOD | 1 | $101.50 | ~$107.8 | ~$108 | ~1.1% | ~+$6 | ~+6.2% |
| Cash | — | — | — | ~$2,082 | ~21.7% | — | — |
| **Equity** | — | — | — | **~$9,587** | **100%** | — | **~–4.1%** |

- **Gross long exposure:** ~78.3%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **1D vs last_equity $9,695.32:** ~**−1.1%** (chips/Nasdaq soft; broad market soft-to-orderly).

## Performance Review — midday Thu Jul 16
- **1D:** portfolio soft (~−1.1%); Nasdaq/chips weaker; SPY soft (~752).
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–4.1%** vs SPY **~+4.8%**. Gap **~–8.9 pp**.
- **Working:** Core held; process discipline; zero unauthorized churn; AVGO/HOOD still green vs entry; weekly TO respected; HOOD trail not re-tightened as buffer compresses.
- **Not working:** Absolute red; cash 21.7% idle but **cannot deploy** (caps + weekly TO).
- **What must change today:** **Nothing forced.** Patience > friction. Next deploy window likely **Mon+** (weekly TO reset) if VOO/QQQ integer room opens.

## Goal Check
- **Portfolio since inception:** ~–4.1%
- **S&P 500 since inception:** ~+4.8% (SPY ~752.3 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$111** → **cannot buy 1 VOO** (~$691).
  2. QQQ 45% room ~**$65** → **cannot buy 1 QQQ** (~$708).
  3. **Weekly turnover Mon–Thu ~$2,583 ≈ 26.9%** of equity → **over 20% weekly budget** → discretionary buys **blocked** (week = Mon Jul 13–Sun Jul 19).
  4. Chip beta still digesting TSMC (beat + raise + AZ capex; price reaction soft) — no edge to force AVGO/SOXX/NVDA add even if budget allowed.
  5. Thin ETFs — no edge / illiquid.

## Market Intel — Thu Jul 16 12:35 ET
- **Tape:** Event detector NONE. SPY soft (~752). QQQ soft (~708). Semis soft (SOXX ~530–531). HOOD softer: ~$109.3 from ~$111 earlier; buffer to trail **~$1.27 / ~1.2%** — still **above** $108. **Do not lower trail.**
- **TSMC:** Q2 beat + raise + US investment headlines; sector sold / residual digestion continues. Do not buy the dip with weekly TO spent.
- **News (Google News RSS):** Dow firmer vs Nasdaq; chip stocks slide amid AI jitters; TSMC headlines dominate. HOOD: tokenized listing / analyst noise — not thesis-breaking. AVGO soft on session (~−3% day) but still green vs entry.
- **AVGO:** ~$377.9 (+1.6% vs entry). Trail already executed once today. Remaining 1 share — **let winner run**. No new tight trail.
- **HOOD:** ~$107.8 (+6.2% vs entry). Trail $108 was breached at ~1:10 PM ET; 1 share sold at $107.51. Remaining 1 share — **let winner run**. No new tight trail.
- **Data source:** Google News RSS. FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings held names:** No binary for QQQ/VOO/AVGO/HOOD in next 48h. META/GOOG late July; NVDA Aug. META remains banned.

## Universe Performance Snapshot (Yahoo Finance fallback, ~16:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $752.3 | −0.4% | +0.3% | +7.2% | +8.8% | +20.5% |
| QQQ | $708.3 | −2.4% | −3.0% | +10.6% | +14.0% | +27.1% |
| VOO | $691.4 | −0.4% | +0.2% | +7.2% | +8.7% | +20.5% |
| AVGO | $380.7 | −4.8% | +1.1% | −4.5% | +8.3% | +35.6% |
| HOOD | $109.3 | −2.4% | +13.0% | +25.8% | +0.5% | +5.8% |
| NVDA | $207.5 | −1.6% | +0.0% | +4.6% | +11.4% | +21.1% |
| GOOG | $370.8 | +4.4% | −0.1% | +11.4% | +12.2% | +101.8% |
| SOXX | $530.5 | −8.7% | −10.3% | +30.7% | +54.9% | +116.0% |
| META | $670.1 | +0.1% | +11.7% | −1.0% | +8.0% | −4.7% |
| GLD | $366.0 | −2.9% | −8.0% | −16.8% | −13.1% | +18.7% |
| RKLB | $66.8 | −17.5% | −36.1% | −19.4% | −30.6% | +40.1% |
| SHLD | $59.8 | −2.3% | −6.4% | −18.9% | −23.3% | −1.7% |
| ARKX | $30.9 | −3.7% | −11.2% | −7.8% | −12.3% | +16.7% |
| EIS | $121.0 | +1.4% | −2.0% | −4.2% | +1.6% | +28.8% |
| QTUM | $143.6 | −7.0% | −11.5% | +14.7% | +21.3% | +53.6% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Soft tape OK. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room+budget later. | 21–30% |
| AVGO | Hold | Winner vs entry (~+1.6%). Trail already hit once today. No add / no re-buy today. | 3–8% |
| HOOD | Hold 1 | Trail executed. Remaining 1 share ~+6.2% vs entry. No add / no re-buy today. | 1–3% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | Weekly TO + no edge after TSMC digestion. | 0% |

## Priority Actions (this hour → next)
1. **HOLD all four names.** No panic de-risk of QQQ/VOO.
2. **No active sell triggers** — HOOD trail executed at 1:10 PM ET.
3. **No new AVGO/HOOD sell trigger** — remaining shares are winners; let run.
4. **No discretionary buys** — weekly TO exceeded + VOO/QQQ integer room closed.
5. **Do not chase SOXX/NVDA/AVGO** into residual TSMC digestion.
6. Prefer **VOO** only when: cap room ≥1 share **and** weekly TO headroom (likely Mon+) **and** orderly tape.

## Cap Math (equity ~$9,587)
- QQQ 45% max ~$4,314; held ~$4,251; room ~**$63** → cannot add 1.
- VOO 30% max ~$2,876; held ~$2,767; room ~**$109** → cannot add 1.
- Weekly TO Mon–Thu ~$2,583 ≈ **26.9%** of equity (budget 20%).

## Ranked Deployment Queue (NOT authorized this cycle)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom **and** orderly tape. Limit only.
2. **NVDA / SOXX** — **NOT** until weekly budget allows + four gates + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core. HOOD trail executed; no new stops. Respect weekly TO + caps. Do not invent trades.
- **Worth monitoring:** SOXX/TSMC digestion; weekly TO reset (Mon); VOO/QQQ integer room drift.
- **Not actionable:** META strength (banned); SpaceX/Anthropic IPO chatter; thin-ETF noise; tokenized HOOD headlines.

## Data / Process Notes
- **Audit:** OK. Gross 78.3%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source. Google News RSS for headlines.
- **No open orders.**
- **Turnover today:** **0/2** discretionary. **Weekly ~26.9%** already used → discretionary blocked.
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
- **Neutral band 75–90%.** Live 78.3% correct; do not de-risk into cash on sector noise alone.
- **Turnover budget is real:** daily **and** weekly. Weekly binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves** — open CRITICAL was real sector weakness; now cooled.
- **Do not tighten trails intraday** when thesis intact (HOOD soft ≠ trail cut).
- **Soft open / semi selloff is not a signal to invent deploys** when weekly TO + caps bind.
- **Protective exits still count toward weekly turnover** even when daily-budget-exempt.

## Prior Key Events
- **2026-07-16 13:10 ET:** Tactical SOLD 1 HOOD @ $107.51 (authorized trail below $108.00); remaining 1 HOOD held.
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
