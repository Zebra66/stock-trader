# Hourly Macro Memory
*Updated 2026-07-17 15:35Z (Friday 11:35 AM ET). Market **OPEN**. Event detector **NONE**.*

---

## Hourly Cycle Summary — 2026-07-17 11:35 ET
- **Status:** Market OPEN (~2h into session). Event detector **NONE** (all broad/held OK; sector rotation NONE). Quiet after morning CRITICAL→MINOR recovery.
- **Repo integrity:** Clean. Branch 0/0 vs origin/main. Staged tactical ledger/price updates present (not a mass-delete).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **73.1%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **$9,453** | Cash **$2,543** | Long **$6,909** | Gross **73.1%** | BP ~$29.5k (do **not** size from BP).
- **Holdings now:** QQQ 6 | VOO 4 | AVGO 0 | HOOD 0.
- **Filled today (unchanged since 10:35):**
  1. **SOLD 1 HOOD @ $100.96** (~9:33 ET) — **not authorized** by prior hourly.
  2. **SOLD 1 AVGO @ $360.33** (~9:41 ET) — tactical CRITICAL event-response; above hourly $349.50 floor; later ~$369 — friction lesson stands.
- **Tactical since 10:35:** Multiple NO_ACTION cycles (10:40–11:30). Correct — no invent trades.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Open orders **NONE**.
- **Goal check:** Portfolio **–5.47%** vs SPY **+3.71%** (SPY ~744.7 vs 718.01). **Both goals FAILED.** Gap **~–9.2 pp**.
- **Regime:** **Neutral** (unchanged; no flip). Target gross **75–90%**. Live **73.1%** — residual of morning single-name exits. **Do not de-risk core. Do not force adds** (budget spent).
- **Dominant failure mode:** Historical **excessive turnover / friction** (primary) + residual **cash drag** (secondary, hard-blocked).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$695.0 | ~$4,170 | ~44.1% | ~−$129 | ~−3.0% |
| VOO | 4 | $683.39 | ~$684.8 | ~$2,739 | ~29.0% | ~+$6 | ~+0.2% |
| AVGO | 0 | — | ~$369 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$100 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.9% | — | — |
| **Equity** | — | — | — | **~$9,453** | **100%** | — | **–5.47%** |

- **Gross long exposure:** 73.1%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Stable at ~73.1% since 10:35. No unauthorized drift.

## Performance Review — Fri Jul 17 11:35 ET
- **1D (vs last_equity $9,558.85):** portfolio **~–1.1%** vs SPY **~–0.8%** (SPY ~744.7 vs prior close ~750.7). Still lagging slightly on Nasdaq beta.
- **1W:** SPY ~−0.6%; QQQ ~−2.4%; SOXX ~−6.6% — growth/semis soft on the week; midday tape calmer than open.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.47%** vs SPY **+3.71%**. Gap **–9.2 pp**.
- **What is working:** Core QQQ/VOO held (no June liquidation). VOO flat/slight green. Audit clean. Detector quiet. Tactical NO_ACTION after budget spent.
- **What is not working:** Absolute red; gap to SPY wide. Morning single-name sells harvested friction. Cash ~27% idle but blocked.
- **What must change today:** **Nothing trade-wise** — budget spent. Preserve core. Next deploy window **Mon Jul 20** if TO resets + integer room + orderly tape.

## Goal Check
- **Portfolio since inception:** –5.47%
- **S&P 500 since inception:** +3.71% (SPY ~744.7 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers this hour:**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells).
  2. **Weekly turnover Mon–Fri ~$3,045 ≈ 32.2%** of equity > 20% ceiling (week Mon Jul 13–Sun Jul 19).
  3. **VOO 30% room ~$97** < 1 share (~$685).
  4. **QQQ 45% room ~$84** < 1 share (~$695).
  5. **24h cooldown + anti-churn:** HOOD and AVGO sold today.
  6. **No edge** to force NVDA/SOXX/GLD/thin ETFs after friction.
  7. Geo risk premium still elevated (Hormuz/Iran/oil) — not a buy signal into exhausted budget.

## Market Intel — Friday 11:35 AM ET
- **Broad market:** SPY ~744.7 (−0.8% day). Soft risk-off, **stable midday** after open chip washout. Detector **NONE** — orderly.
- **Semiconductors:** SOXX ~$517 (1w ~−6.6% / 1m ~−14%). AVGO ~$369 (still above $360 tactical fill). NVDA ~$204. **Do not chase.**
- **News (GNews + Bing geo RSS):** Nasdaq soft on chips / AI jitters / China model headlines; Netflix whiff in morning tape. Hormuz–Iran hostilities continue (oil risk premium). Not a reason to sell core ETFs or invent buys.
- **News sources this cycle:** Google News RSS + Bing geo RSS. FMP disabled — Yahoo chart multi-TF fallback (documented).
- **Earnings:** No held-name binary today. Memory: META/GOOG late July; NVDA Aug. Coverage incomplete via Yahoo — not blocking hold-only.
- **Alpaca bars:** ~15:34Z fresh for liquid names. EIS prior-day thin — illiquid. QTUM TradeCount 2 — illiquid.

## Universe Performance Snapshot (Yahoo Finance fallback, ~15:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $744.7 | −0.6% | +0.5% | +4.9% | +9.9% | +18.6% |
| QQQ | $694.8 | −2.4% | −3.8% | +7.1% | +14.3% | +23.7% |
| VOO | $684.4 | −0.6% | +0.4% | +4.8% | +9.8% | +18.6% |
| AVGO | $369.1 | −3.9% | −6.1% | −9.2% | +11.0% | +28.9% |
| HOOD | $100.1 | −8.9% | −4.9% | +10.3% | −5.4% | −5.1% |
| NVDA | $204.1 | +0.3% | −0.3% | +1.2% | +14.6% | +18.0% |
| GOOG | $346.3 | −1.2% | −4.4% | +2.0% | +7.5% | +87.5% |
| SOXX | $517.0 | −6.6% | −13.8% | +24.4% | +53.2% | +109.7% |
| META | $628.3 | −4.3% | +10.7% | −8.8% | +4.0% | −10.4% |
| GLD | $368.0 | +0.2% | −5.3% | −17.5% | −15.8% | +19.6% |
| RKLB | $68.1 | −11.2% | −36.9% | −19.6% | −23.6% | +32.7% |
| SHLD | $60.5 | −0.0% | −5.3% | −17.6% | −21.5% | −1.8% |
| ARKX | $30.3 | −3.1% | −12.1% | −9.7% | −10.3% | +10.5% |
| EIS | $119.7 | +1.4% | −0.7% | −7.8% | +2.3% | +26.2% |
| QTUM | $140.6 | −5.7% | −13.5% | +9.9% | +21.0% | +47.9% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | **Hold** | Core liquid growth. Near 45% cap. Soft Nasdaq ≠ sell. No stop <8%. | 36–45% |
| VOO | **Hold** | Broad anchor ~29%. Cap room <1 share. Preferred later deploy vehicle. | 21–30% |
| AVGO | **Flat — DO NOT RE-BUY** | Sold $360.33; still below post-bounce high. 24h cooldown + anti-churn + weekly TO. | 0% |
| HOOD | **Flat — DO NOT RE-BUY** | Unauthorized open exit @ $100.96. 24h cooldown + anti-churn. | 0% |
| META | **BANNED** | Fri Jul 10 unauthorized RT. | 0% |
| NVDA / SOXX / GOOG / thin | **Avoid** | Weekly TO + daily budget + no edge after friction. | 0% |

## Priority Actions (this hour → rest of day)
1. **HOLD QQQ 6 / VOO 4.** No sells. No full liquidations. No core ETF stops.
2. **NO NEW BUYS** — daily 2/2 spent + weekly TO exceeded + integer caps closed.
3. **AVGO / HOOD:** flat. **Do NOT re-buy** within 24h.
4. **META remains banned.**
5. **No active sell triggers.** Tactical must not invent stops.
6. **Accept gross ~73%** for remainder of Friday.
7. **Next deploy reassess:** Mon Jul 20 open **if** detector not CRITICAL **and** VOO/QQQ integer room opens **and** tape orderly. Prefer **VOO** limit add first.
8. **Process note:** Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor.

## Cap Math (equity $9,453)
- QQQ 45% max $4,254; held ~$4,170; room **~$84** → cannot add 1.
- VOO 30% max $2,836; held ~$2,739; room **~$97** → cannot add 1.
- Stock 15% max $1,418 — no stock adds authorized.
- Weekly TO Mon–Fri ≈ **$3,045 / $9,453 ≈ 32.2%** (over 20%).
- Daily position-changing trades: **2/2** (HOOD, AVGO).

## Ranked Deployment Queue (NOT authorized rest of today; reassess Mon+)
1. **VOO** — only after weekly TO headroom (Mon+) **and** cap room ≥1 share **and** detector not CRITICAL. Limit only, at/below bid.
2. **QQQ** — only if VOO capped and QQQ room ≥1 share (unlikely near 45%).
3. **Never** force NVDA/SOXX/AVGO bounce-chases after a same-day exit.
4. **Never META / never thin ETFs without explicit hourly line.**
5. **Never HOOD/AVGO re-buy within 24h of today's sells.**

## Macro Themes
- **Actionable now:** Hold QQQ/VOO core. Zero new orders rest of Friday. Blockers documented.
- **Worth monitoring:** Chip bounce durability into close; Hormuz oil path; Mon TO reset; VOO/QQQ integer room after marks.
- **Not actionable:** META (banned); SpaceX/ARKX weakness; thin-ETF noise; chasing AVGO/NVDA with spent budget.

## Data / Process Notes
- **Audit:** OK. Gross 73.1%. Daytrades 0.
- **Event detector:** **NONE** @ 15:35Z. Recommended: normal todo — **followed as hold-only** (TO blocks all discretionary).
- **FMP:** disabled. Yahoo Finance chart primary multi-TF.
- **News fallback:** Google News RSS + Bing geo RSS; documented.
- **No open orders.**
- **Turnover today:** 2 sells (HOOD + AVGO). Daily **2/2**. Weekly **~32.2%**.
- **Alpha preservation:** Core ETFs untouched is correct. Every forced trade today would fail the do-nothing test after friction.

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
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — tactical CRITICAL event response (above hourly $349.50 floor). Later ~$369.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized** by prior hourly. Flat HOOD.
- **2026-07-16 ~17:00 ET:** Post-close HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Authorized HOOD trail SELL 1 @ $107.51.
- **2026-07-16 9:40 ET:** Authorized AVGO trail SELL 1 @ $380.65.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.
