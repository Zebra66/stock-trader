# Hourly Macro Memory
*Updated 2026-07-17 14:40Z (Friday 10:35 AM ET). Market **OPEN**. Event detector **MINOR** (recovered from morning CRITICAL).*

---

## Hourly Cycle Summary — 2026-07-17 10:35 ET
- **Status:** Market OPEN (~1h into session). Event detector **MINOR** (SOXX −0.56% vs prior bar; SPY/QQQ/SMH/XLK OK). Sector rotation NONE.
- **Repo integrity:** Clean. Branch 0/0 vs origin/main. `.gitignore` effective. Staged tactical ledger entries present (not a mass-delete).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **73.1%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **$9,463** | Cash **$2,543** | Long **$6,920** | Gross **73.1%** | BP ~$29.5k (do **not** size from BP).
- **Holdings now:** QQQ 6 | VOO 4 | AVGO 0 | HOOD 0.
- **Filled today:**
  1. **SOLD 1 HOOD @ $100.96** (13:33Z / ~9:33 ET) — **not authorized** by Thu post-close hourly (no active trigger). Counts as unauthorized tactical invent.
  2. **SOLD 1 AVGO @ $360.33** (13:41Z / ~9:41 ET) — tactical CRITICAL event-response protective exit. Hourly floor was **$349.50**; exit was **above** that floor. AVGO later bounced to ~$372 (~+3.4% from fill) — classic friction harvest. **Do not re-buy.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Open orders **NONE**.
- **Goal check:** Portfolio **–5.37%** vs SPY **+4.00%** (SPY ~746.7 vs 718.01). **Both goals FAILED.** Gap **~–9.4 pp**.
- **Regime:** **Neutral** (unchanged; detector no longer CRITICAL — do **not** flip). Target gross **75–90%**. Live **73.1%** — **~1.9 pp below floor** solely from today's two single-name exits + MTM. **Do not de-risk core further. Do not force adds** (budget spent).
- **Dominant failure mode:** Historical **excessive turnover / friction** (primary) + residual **cash drag** (secondary, currently **blocked**). Immediate issue = preserve remaining QQQ/VOO core; accept temporary under-deployment until Mon TO reset + integer room.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$696.2 | ~$4,177 | ~44.1% | ~−$122 | ~−2.8% |
| VOO | 4 | $683.39 | ~$685.7 | ~$2,743 | ~29.0% | ~+$9 | ~+0.3% |
| AVGO | 0 | — | ~$372 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$102 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.9% | — | — |
| **Equity** | — | — | — | **~$9,463** | **100%** | — | **–5.37%** |

- **Gross long exposure:** 73.1%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Prior hourly ~76.8% → 73.1% (−3.7 pp) fully explained by authorized/logged HOOD+AVGO exits + marks. **Not** multi-position unauthorized drift. Hold-only going forward today.

## Performance Review — Fri Jul 17 10:35 ET
- **1D (vs last_equity $9,558.85):** portfolio **~–1.0%** vs SPY **~–0.5%** (SPY ~746.7 vs prior close ~750.7). Still lagging on Nasdaq beta.
- **1W:** SPY ~−0.3%; QQQ ~−2.0%; SOXX ~−5.8% — growth/semis still soft on the week, bounce off open lows.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.37%** vs SPY **+4.00%**. Gap **–9.4 pp**.
- **What is working:** Core QQQ/VOO still held (no June liquidation). VOO small green. Audit clean. Detector cooled CRITICAL→MINOR without further core sales. Tactical after 09:43 correctly NO_ACTION (budget spent).
- **What is not working:** Absolute red; gap to SPY wide. Morning single-name sells harvested friction (esp. AVGO bounce after $360 exit). Cash ~27% idle.
- **What must change today:** **Nothing trade-wise** — budget spent. Preserve core. Document blockers. Next deploy window earliest **Mon Jul 20** if TO resets and caps allow 1 share.

## Goal Check
- **Portfolio since inception:** –5.37%
- **S&P 500 since inception:** +4.00% (SPY ~746.7 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers this hour:**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells) — no further position-changing trades today except true catastrophic protective if hourly writes one (none active).
  2. **Weekly turnover Mon–Fri ~$3,045 ≈ 32.2%** of equity > 20% ceiling (week Mon Jul 13–Sun Jul 19). Discretionary buys blocked through Sun.
  3. **VOO 30% room ~$96** < 1 share (~$686).
  4. **QQQ 45% room ~$82** < 1 share (~$696).
  5. **24h cooldown + anti-churn:** HOOD and AVGO sold today — no re-buy today or within 24h without fresh hourly authorize.
  6. **No edge** to force NVDA/SOXX/GLD/thin ETFs after friction; semi bounce is noise not a new thesis.
  7. Geo risk premium still elevated (Hormuz/Iran/oil headlines) — not a buy signal into exhausted budget.

## Market Intel — Friday 10:35 AM ET
- **Broad market:** SPY ~746.7 (−0.5% day). Soft risk-off with **partial bounce** off open chip lows. Not a crash — detector **MINOR**.
- **Semiconductors:** Recovering from open washout. SOXX ~$517–521 (still weak on 1w ~−5.8% / 1m ~−13%). AVGO ~$372 (recovered from ~$360 tactical fill). NVDA ~$204. **Do not chase** the bounce with spent budget.
- **Geopolitical:** Oil bid / Hormuz–Iran hostilities continue (GNews: Kuwait desal plant attack reports; oil +2% class headlines). Elevates risk premium; not a reason to sell core ETFs.
- **News sources this cycle:** Google News RSS (market/semis + geo) + Bing market RSS. FMP disabled — Yahoo chart multi-TF fallback (documented).
- **Earnings:** Yahoo quoteSummary calendar empty again — **insufficient earnings coverage**. Memory: META/GOOG late July; NVDA Aug. No held-name binary today.
- **Alpaca bars:** ~14:34Z fresh for liquid names. EIS bar stale (prior day) / thin — illiquid. QTUM TradeCount 1 — illiquid.

## Universe Performance Snapshot (Yahoo Finance fallback, ~14:40Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $746.7 | −0.3% | +0.8% | +5.2% | +10.2% | +18.9% |
| QQQ | $697.8 | −2.0% | −3.4% | +7.5% | +14.8% | +24.2% |
| VOO | $686.3 | −0.3% | +0.7% | +5.1% | +10.1% | +18.9% |
| AVGO | $372.4 | −3.0% | −5.2% | −8.4% | +12.0% | +30.0% |
| HOOD | $101.9 | −7.2% | −3.1% | +12.3% | −3.7% | −3.4% |
| NVDA | $204.4 | +0.4% | −0.1% | +1.4% | +14.8% | +18.2% |
| GOOG | $345.0 | −1.6% | −4.7% | +1.7% | +7.1% | +86.8% |
| SOXX | $521.4 | −5.8% | −13.1% | +25.4% | +54.6% | +111.5% |
| META | $634.6 | −3.4% | +11.8% | −7.8% | +5.0% | −9.5% |
| GLD | $366.9 | −0.1% | −5.6% | −17.7% | −16.1% | +19.3% |
| RKLB | $68.9 | −10.2% | −36.2% | −18.7% | −22.7% | +34.3% |
| SHLD | $60.6 | +0.2% | −5.0% | −17.4% | −21.3% | −1.5% |
| ARKX | $30.5 | −2.7% | −11.8% | −9.4% | −10.0% | +11.0% |
| EIS | $120.0 | +1.7% | −0.4% | −7.6% | +2.5% | +26.6% |
| QTUM | $141.6 | −5.0% | −12.9% | +10.7% | +21.9% | +48.9% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | **Hold** | Core liquid growth. Near 45% cap. Soft Nasdaq ≠ sell. No stop <8%. | 36–45% |
| VOO | **Hold** | Broad anchor ~29%. Cap room <1 share. Preferred later deploy vehicle. | 21–30% |
| AVGO | **Flat — DO NOT RE-BUY** | Sold $360.33 on event path; bounced. 24h cooldown + anti-churn + weekly TO. | 0% |
| HOOD | **Flat — DO NOT RE-BUY** | Unauthorized open exit @ $100.96. 24h cooldown + anti-churn. | 0% |
| META | **BANNED** | Fri Jul 10 unauthorized RT. | 0% |
| NVDA / SOXX / GOOG / thin | **Avoid** | Weekly TO + daily budget + no edge after friction. | 0% |

## Priority Actions (this hour → rest of day)
1. **HOLD QQQ 6 / VOO 4.** No sells. No full liquidations. No core ETF stops.
2. **NO NEW BUYS** — daily 2/2 spent + weekly TO exceeded + integer caps closed.
3. **AVGO / HOOD:** flat. **Do NOT re-buy** within 24h. Do not invent re-entry on bounce.
4. **META remains banned.**
5. **No active sell triggers** for any symbol. Tactical must not invent stops.
6. **Accept gross ~73%** for remainder of Friday — below 75% floor is a **known residual of morning exits**, not a mandate to buy with spent budget.
7. **Next deploy reassess:** Mon Jul 20 open (weekly TO window reset) **if** detector not CRITICAL **and** VOO/QQQ integer room opens **and** tape orderly. Prefer **VOO** limit add first.
8. **Process note for tactical:** Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor. Today's AVGO $360 sell was above hourly $349.50 floor and was followed by a bounce — document as friction lesson.

## Cap Math (equity $9,463)
- QQQ 45% max $4,258; held ~$4,177; room **~$82** → cannot add 1.
- VOO 30% max $2,839; held ~$2,743; room **~$96** → cannot add 1.
- Stock 15% max $1,419 — no stock adds authorized.
- Weekly TO Mon–Fri ≈ **$3,045 / $9,463 ≈ 32.2%** (over 20%).
- Daily position-changing trades: **2/2** (HOOD, AVGO).

## Ranked Deployment Queue (NOT authorized rest of today; reassess Mon+)
1. **VOO** — only after weekly TO headroom (Mon+) **and** cap room ≥1 share **and** detector not CRITICAL. Limit only, at/below bid.
2. **QQQ** — only if VOO capped and QQQ room ≥1 share (unlikely near 45%).
3. **Never** force NVDA/SOXX/AVGO bounce-chases after a same-day exit.
4. **Never META / never thin ETFs without explicit hourly line.**
5. **Never HOOD/AVGO re-buy within 24h of today's sells.**

## Macro Themes
- **Actionable now:** Hold QQQ/VOO core. Zero new orders rest of Friday. Write blockers (done).
- **Worth monitoring:** Whether chip bounce holds into close; Hormuz oil path; Mon TO reset; VOO/QQQ integer room after marks.
- **Not actionable:** META (banned); SpaceX/ARKX weakness; thin-ETF noise; chasing AVGO/NVDA dip-bounce with spent budget.

## Data / Process Notes
- **Audit:** OK. Gross 73.1%. Daytrades 0.
- **Event detector:** **MINOR** @ 14:35Z. Recommended: monitor only — **followed**. Morning CRITICAL sequence documented; no further event sells needed.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF.
- **News fallback:** Google News RSS + Bing market RSS; documented.
- **Earnings API:** Yahoo quoteSummary empty — coverage insufficient this cycle.
- **No open orders.**
- **Turnover today:** 2 sells (HOOD + AVGO). Daily **2/2**. Weekly **~32.2%**.
- **Alpha preservation lesson (today):** AVGO sold $360.33 → ~$372 within hour. Inventing/accelerating exits above the hourly floor converts volatility into realized loss vs do-nothing. Core ETFs untouched was correct.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **With ~$10K equity, caps are tight** (QQQ 6 / VOO 4 near max).
- **VOO preferred cash-deploy** when QQQ near 45% — only with room + budget + orderly tape.
- **Four-gate NVDA rule** — partial gates = no trade; post-earnings digestion ≠ dip buy.
- **Cash ≤10% target** — if weekly TO / caps / daily budget bind, write exact blocker (current).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX (<8%).**
- **Neutral band 75–90%.** Live 73.1% is residual of morning single-name exits; do **not** force buys with spent budget; do **not** de-risk core further.
- **Turnover budget is real:** daily **and** weekly. Protective + unauthorized exits still add to weekly notional.
- **CRITICAL → NO NEW BUYS** unless hourly writes explicit override. When CRITICAL cools, still respect daily/weekly TO.
- **Tactical must not invent stops** absent from current `todo.md`. Event-response single-name exits should not fire **above** an explicit hourly catastrophic floor.
- **Stale pre-fetch / mass-delete working trees** → restore from HEAD before deciding.
- **Alpha preservation:** VOO/QQQ core untouched is the free baseline; every trade must beat do-nothing after friction.

## Prior Key Events
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — tactical CRITICAL event response (above hourly $349.50 floor). Later bounced ~$372.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized** by prior hourly (no active trigger). Flat HOOD.
- **2026-07-16 ~17:00 ET:** Post-close HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Authorized HOOD trail SELL 1 @ $107.51.
- **2026-07-16 9:40 ET:** Authorized AVGO trail SELL 1 @ $380.65.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.
