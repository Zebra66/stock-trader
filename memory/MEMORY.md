# Hourly Macro Memory
*Updated 2026-07-17 18:40Z (Friday 2:40 PM ET). Market **OPEN**. Event detector **CRITICAL**.*

## Tactical Override — 2026-07-17 14:40 ET
- **Detector:** CRITICAL (SOXX -1.55%, XLK -1.01%, SMH -1.45%; held QQQ/VOO OK severity).
- **Autonomous action:** No protective sells. No new buys. Held QQQ 6 / VOO 4 unchanged.
- **Reason:** todo.md has no active sell triggers; core ETF instructions forbid event-response sells unless hourly writes executable condition after two-cycle confirmation. Daily turnover 2/2 + weekly 32.2% already block buys.
- **State:** Gross ~73.1%, cash ~26.9%. HARD_LOCK inactive. Await 15:35 ET hourly reset.
- **[AUTONOMOUS_OVERRIDE]**

---

## Hourly Cycle Summary — 2026-07-17 14:35 ET
- **Status:** Market OPEN (~5h into session; ~1.5h to close). Event detector **NONE** (broad/held OK; sector rotation NONE). Midday 12:40 CRITICAL fully cooled; afternoon bars orderly but soft.
- **Repo integrity:** Clean. Branch 0/0 vs origin/main. No mass-delete. Staged tactical price/ledger noise only.
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **73.1%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,461** | Cash **$2,543** | Long **~$6,918** | Gross **73.1%** | BP ~$29.5k (do **not** size from BP).
- **Holdings now:** QQQ 6 | VOO 4 | AVGO 0 | HOOD 0.
- **Filled today (unchanged since open):**
  1. **SOLD 1 HOOD @ $100.96** (~9:33 ET) — **not authorized** by prior hourly.
  2. **SOLD 1 AVGO @ $360.33** (~9:41 ET) — tactical CRITICAL event-response; above hourly $349.50 floor; later ~$373 — friction lesson stands.
- **Tactical since 13:35:** No new fills. Open orders **NONE**. HOLD-ONLY respected.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches.
- **Goal check:** Portfolio **–5.39%** vs SPY **+3.57%** (SPY ~743.7 vs 718.01). **Both goals FAILED.** Gap **~–9.0 pp**.
- **Regime:** **Neutral** (unchanged; no flip). Target gross **75–90%**. Live **73.1%** — residual of morning single-name exits. **Do not de-risk core. Do not force adds** (budget spent).
- **Dominant failure mode:** Historical **excessive turnover / friction** (primary) + residual **cash drag** (secondary, hard-blocked).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$697.3 | ~$4,184 | ~44.2% | ~−$115 | ~−2.7% |
| VOO | 4 | $683.39 | ~$683.6 | ~$2,734 | ~28.9% | ~+$1 | ~+0.0% |
| AVGO | 0 | — | ~$373 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$101 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.9% | — | — |
| **Equity** | — | — | — | **~$9,461** | **100%** | — | **–5.39%** |

- **Gross long exposure:** 73.1%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Stable ~73.1% since 10:35. No unauthorized drift.

## Performance Review — Fri Jul 17 14:35 ET
- **1D (vs last_equity $9,558.85):** portfolio **~–1.0%** vs SPY soft (~−1.1% vs prev close ~751.8 path). Roughly in-line with beta on a soft Nasdaq day; core held.
- **1W:** SPY ~−1.5%; QQQ ~−3.9%; SOXX ~−9.9% — growth/semis still soft vs broad.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.39%** vs SPY **+3.57%**. Gap **–9.0 pp**.
- **What is working:** Core QQQ/VOO held (no June liquidation). VOO flat. Audit clean. Detector quiet. Tactical discipline after budget spent.
- **What is not working:** Absolute red; gap to SPY wide. Morning single-name sells harvested friction (AVGO bounced after exit). Cash ~27% idle but blocked.
- **What must change today:** **Nothing trade-wise** — budget spent. Preserve core into close. Next deploy window **Mon Jul 20** if TO resets + integer room + orderly tape.

## Goal Check
- **Portfolio since inception:** –5.39%
- **S&P 500 since inception:** +3.57% (SPY ~743.7 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers this hour:**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells).
  2. **Weekly turnover Mon–Fri ~$3,045 ≈ 32.2%** of equity > 20% ceiling (week Mon Jul 13–Sun Jul 19).
  3. **VOO 30% room ~$104** < 1 share (~$684).
  4. **QQQ 45% room ~$74** < 1 share (~$697).
  5. **24h cooldown + anti-churn:** HOOD and AVGO sold today.
  6. **No edge** to force NVDA/SOXX/GLD/thin ETFs after friction into Friday soft close.
  7. Soft Nasdaq/chip tape into Friday afternoon — not a buy signal into exhausted budget.

## Market Intel — Friday 2:35 PM ET
- **Broad market:** SPY ~743.7. Soft risk-off day; detector **NONE** — orderly. Nasdaq still lagging; QQQ ~$697.
- **Semiconductors:** SOXX ~$523 (1w ~−10%). AVGO ~$373 (above $360 tactical fill). NVDA ~$203. **Do not chase.**
- **News:** Yahoo Finance RSS: AI-debt wariness; leveraged-ETF/AI-rally mechanics; SpaceX IPO funding background; Disney/cruise noise unrelated. Google News RSS **503** this cycle — Yahoo RSS used as fallback (documented). Not a reason to sell core ETFs or invent buys.
- **News sources this cycle:** Yahoo Finance headline RSS (primary). GNews 503. FMP disabled — Yahoo chart multi-TF fallback.
- **Earnings:** No held-name binary today. Memory: META/GOOG late July; NVDA Aug. Not blocking hold-only.
- **Alpaca bars:** ~18:34Z fresh for liquid names. EIS prior-day thin — illiquid. QTUM/SHLD/GLD/ARKX low TradeCount — illiquid for market orders.

## Universe Performance Snapshot (Yahoo Finance fallback, ~18:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $743.6 | −1.5% | +0.4% | +4.7% | +7.5% | +18.4% |
| QQQ | $697.2 | −3.9% | −3.5% | +7.4% | +12.2% | +24.1% |
| VOO | $683.4 | −1.5% | +0.3% | +4.7% | +7.4% | +18.4% |
| AVGO | $372.9 | −6.8% | −5.1% | −8.3% | +6.0% | +30.2% |
| HOOD | $101.1 | −9.7% | −3.9% | +11.4% | −7.0% | −4.1% |
| NVDA | $203.4 | −3.6% | −0.6% | +0.8% | +9.2% | +17.6% |
| GOOG | $344.4 | −3.0% | −4.9% | +1.5% | +4.3% | +86.5% |
| SOXX | $523.5 | −9.9% | −12.7% | +25.9% | +52.9% | +112.4% |
| META | $647.8 | −3.2% | +14.1% | −5.9% | +4.4% | −7.6% |
| GLD | $368.1 | −2.4% | −5.3% | −17.5% | −12.6% | +19.7% |
| RKLB | $68.5 | −15.5% | −36.6% | −19.2% | −28.9% | +33.4% |
| SHLD | $60.2 | −1.6% | −5.6% | −17.9% | −22.7% | −2.1% |
| ARKX | $30.5 | −4.9% | −11.7% | −9.3% | −13.3% | +11.1% |
| EIS | $119.9 | +0.5% | −0.4% | −7.6% | +0.7% | +26.5% |
| QTUM | $142.1 | −8.0% | −12.5% | +11.1% | +20.0% | +49.5% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | **Hold** | Core liquid growth. Near 45% cap. Soft Nasdaq ≠ sell. No stop <8%. | 36–45% |
| VOO | **Hold** | Broad anchor ~29%. Cap room <1 share. Preferred later deploy vehicle. | 21–30% |
| AVGO | **Flat — DO NOT RE-BUY** | Sold $360.33; now ~$373. 24h cooldown + anti-churn + weekly TO. | 0% |
| HOOD | **Flat — DO NOT RE-BUY** | Unauthorized open exit @ $100.96. 24h cooldown + anti-churn. | 0% |
| META | **BANNED** | Fri Jul 10 unauthorized RT. | 0% |
| NVDA / SOXX / GOOG / thin | **Avoid** | Weekly TO + daily budget + no edge after friction. | 0% |

## Priority Actions (this hour → rest of day)
1. **HOLD QQQ 6 / VOO 4.** No sells. No full liquidations. No core ETF stops.
2. **NO NEW BUYS** — daily 2/2 spent + weekly TO exceeded + integer caps closed.
3. **AVGO / HOOD:** flat. **Do NOT re-buy** within 24h.
4. **META remains banned.**
5. **No active sell triggers.** Tactical must not invent stops.
6. **Accept gross ~73%** for remainder of Friday into close.
7. **Next deploy reassess:** Mon Jul 20 open **if** detector not CRITICAL **and** VOO/QQQ integer room opens **and** tape orderly. Prefer **VOO** limit add first.
8. **Process note:** Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor. 12:40 CRITICAL correctly held core.

## Cap Math (equity $9,461)
- QQQ 45% max $4,257; held ~$4,184; room **~$74** → cannot add 1.
- VOO 30% max $2,838; held ~$2,734; room **~$104** → cannot add 1.
- Stock 15% max $1,419 — no stock adds authorized.
- Weekly TO Mon–Fri ≈ **$3,045 / $9,461 ≈ 32.2%** (over 20%).
- Daily position-changing trades: **2/2** (HOOD, AVGO).

## Ranked Deployment Queue (NOT authorized rest of today; reassess Mon+)
1. **VOO** — only after weekly TO headroom (Mon+) **and** cap room ≥1 share **and** detector not CRITICAL. Limit only, at/below bid.
2. **QQQ** — only if VOO capped and QQQ room ≥1 share (unlikely near 45%).
3. **Never** force NVDA/SOXX/AVGO bounce-chases after a same-day exit.
4. **Never META / never thin ETFs without explicit hourly line.**
5. **Never HOOD/AVGO re-buy within 24h of today's sells.**

## Macro Themes
- **Actionable now:** Hold QQQ/VOO core. Zero new orders rest of Friday. Blockers documented.
- **Worth monitoring:** Soft close / weekend gap risk; Mon TO reset; VOO/QQQ integer room after marks; chip bounce durability next week.
- **Not actionable:** META (banned); SpaceX/ARKX weakness; thin-ETF noise; chasing AVGO/NVDA with spent budget; AI-debt headlines as trade signal.

## Data / Process Notes
- **Audit:** OK. Gross 73.1%. Daytrades 0.
- **Event detector:** **NONE** @ 18:35Z. Recommended: normal todo — **followed as hold-only** (TO blocks all discretionary).
- **FMP:** disabled. Yahoo Finance chart primary multi-TF.
- **News fallback:** Yahoo Finance RSS OK; Google News RSS 503 this hour — documented.
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
- **2026-07-17 12:40 ET:** Detector CRITICAL SOXX/SMH spike — autonomous hold; no action (budget spent + core no-sell).
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — tactical CRITICAL event response (above hourly $349.50 floor). Later ~$373.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized** by prior hourly. Flat HOOD.
- **2026-07-16 ~17:00 ET:** Post-close HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Authorized HOOD trail SELL 1 @ $107.51.
- **2026-07-16 9:40 ET:** Authorized AVGO trail SELL 1 @ $380.65.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.

---

## AUTONOMOUS OVERRIDE — Tactical Event Response — 2026-07-17 14:40 ET
- **Detector classification:** CRITICAL (SOXX -1.55%, XLK -1.01% MAJOR, SMH -1.45% MAJOR; broad SPY OK; held QQQ/VOO OK).
- **Action taken:** No protective sells. No new buys. Book unchanged (QQQ 6 / VOO 4).
- **Override rationale:** todo.md has no active sell triggers and explicitly requires a future hourly, two-cycle-confirmed executable condition to sell QQQ/VOO. No full core ETF liquidations permitted. Held positions are at OK severity, not through stops.
- **Buy suspension:** `NO NEW BUYS — CRITICAL EVENT` added to `memory/todo.md`. All buy conditions suspended until next hourly reset.
- **Next expected action:** Hourly cycle at 15:35 ET reassesses; tactical until then remains HOLD-ONLY.
- **[AUTONOMOUS_OVERRIDE]**
