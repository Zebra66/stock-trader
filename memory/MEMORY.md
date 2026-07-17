# Hourly Macro Memory
*Updated 2026-07-17 19:35Z (Friday 3:35 PM ET). Market **OPEN** (~25 min to close). Event detector **NONE**.*

## Hourly Cycle Summary — 2026-07-17 15:35 ET
- **Status:** Final hourly of the week. Detector **NONE** (broad/held/sector all OK). Midday and 14:40 CRITICAL fully cooled. Soft but orderly tape into Friday close.
- **Repo integrity:** Clean. Branch 0/0 vs origin/main. No mass-delete. Staged tactical price/ledger noise only.
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **73.1%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,453** | Cash **$2,543** | Long **~$6,909** | Gross **73.1%** | BP ~$29.5k (do **not** size from BP).
- **Holdings now:** QQQ 6 | VOO 4 | AVGO 0 | HOOD 0.
- **Filled today (unchanged since open):**
  1. **SOLD 1 HOOD @ $100.96** (~9:33 ET) — **not authorized** by prior hourly.
  2. **SOLD 1 AVGO @ $360.33** (~9:41 ET) — tactical CRITICAL event-response; above hourly $349.50 floor; later ~$372 — friction lesson stands.
- **Tactical since 14:35:** 14:40 CRITICAL override held core (correct). 15:30 NO_ACTION. Open orders **NONE**. No new fills.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches.
- **Goal check:** Portfolio **–5.47%** vs SPY **+3.48%** (SPY ~743.0 vs 718.01). **Both goals FAILED.** Gap **~–9.0 pp**.
- **Regime:** **Neutral** (unchanged; no flip). Target gross **75–90%**. Live **73.1%** — residual of morning single-name exits. **Do not de-risk core. Do not force adds** (budget spent).
- **Dominant failure mode:** Historical **excessive turnover / friction** (primary) + residual **cash drag** (secondary, hard-blocked).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$696.1 | ~$4,176 | ~44.2% | ~−$122 | ~−2.8% |
| VOO | 4 | $683.39 | ~$682.9 | ~$2,732 | ~28.9% | ~−$2 | ~−0.1% |
| AVGO | 0 | — | ~$372 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$100.7 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.9% | — | — |
| **Equity** | — | — | — | **~$9,453** | **100%** | — | **–5.47%** |

- **Gross long exposure:** 73.1%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Stable ~73.1% since 10:35. No unauthorized drift.

## Performance Review — Fri Jul 17 15:35 ET
- **1D (vs last_equity $9,558.85):** portfolio **~–1.1%** vs SPY soft (~−1.2% path). Roughly in-line with beta on a soft Nasdaq day; core held.
- **1W:** SPY ~−1.6%; QQQ ~−4.1%; SOXX ~−10.0% — growth/semis still soft vs broad.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.47%** vs SPY **+3.48%**. Gap **–9.0 pp**.
- **What is working:** Core QQQ/VOO held (no June liquidation). VOO flat. Audit clean. Detector quiet into close. Tactical discipline after budget spent + correct 14:40 hold through CRITICAL.
- **What is not working:** Absolute red; gap to SPY wide. Morning single-name sells harvested friction (AVGO bounced after exit). Cash ~27% idle but blocked.
- **What must change today:** **Nothing trade-wise** — budget spent. Preserve core into close/weekend. Next deploy window **Mon Jul 20** if TO resets + integer room + orderly tape.

## Goal Check
- **Portfolio since inception:** –5.47%
- **S&P 500 since inception:** +3.48% (SPY ~743.0 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers this hour:**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells).
  2. **Weekly turnover Mon–Fri ~$3,045 ≈ 32.2%** of equity > 20% ceiling (week Mon Jul 13–Sun Jul 19).
  3. **VOO 30% room ~$104** < 1 share (~$683).
  4. **QQQ 45% room ~$78** < 1 share (~$696).
  5. **24h cooldown + anti-churn:** HOOD and AVGO sold today (cooldown through ~Sat morning ET; anti-churn rest of session).
  6. **No edge** to force NVDA/SOXX/GLD/thin ETFs after friction into Friday soft close.
  7. Soft Nasdaq/chip tape into Friday close — not a buy signal into exhausted budget.

## Market Intel — Friday 3:35 PM ET
- **Broad market:** SPY ~743.0. Soft risk-off day; detector **NONE** — orderly. Nasdaq still lagging; QQQ ~$696.
- **Semiconductors:** SOXX ~$523 (1w ~−10%). AVGO ~$372 (above $360 tactical fill). NVDA ~$203. **Do not chase.**
- **News:** Yahoo Finance RSS (primary): mostly sector-earnings previews / rates / commodities — low signal for our book. Google News RSS **503**; Reuters feed unreachable this cycle. Coverage insufficient for trade signals; not a reason to sell core or invent buys.
- **News sources this cycle:** Yahoo Finance headline RSS (primary). GNews 503. Reuters unreachable. FMP disabled — Yahoo chart multi-TF fallback.
- **Earnings:** Yahoo quoteSummary calendar **401** this cycle — could not refresh dates live. Memory: META/GOOG late July; NVDA Aug. No held-name binary today. Not blocking hold-only.
- **Alpaca bars:** ~19:34Z fresh for liquid names. EIS prior-day thin — illiquid. QTUM/SHLD/GLD/ARKX low TradeCount — illiquid for market orders.

## Universe Performance Snapshot (Yahoo Finance fallback, ~19:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $743.0 | −1.6% | +0.3% | +4.6% | +7.4% | +18.3% |
| QQQ | $696.1 | −4.1% | −3.7% | +7.3% | +12.0% | +23.9% |
| VOO | $682.9 | −1.6% | +0.2% | +4.6% | +7.4% | +18.3% |
| AVGO | $372.0 | −7.0% | −5.3% | −8.5% | +5.8% | +29.9% |
| HOOD | $100.7 | −10.1% | −4.3% | +10.9% | −7.4% | −4.6% |
| NVDA | $202.8 | −3.9% | −0.9% | +0.6% | +8.9% | +17.2% |
| GOOG | $344.3 | −3.0% | −4.9% | +1.5% | +4.2% | +86.4% |
| SOXX | $523.1 | −10.0% | −12.8% | +25.8% | +52.7% | +112.2% |
| META | $643.9 | −3.8% | +13.5% | −6.5% | +3.8% | −8.2% |
| GLD | $367.5 | −2.5% | −5.4% | −17.6% | −12.8% | +19.5% |
| RKLB | $67.5 | −16.7% | −37.5% | −20.4% | −29.9% | +31.5% |
| SHLD | $60.1 | −1.9% | −5.9% | −18.1% | −22.9% | −2.4% |
| ARKX | $30.4 | −5.2% | −12.0% | −9.6% | −13.7% | +10.7% |
| EIS | $119.6 | +0.2% | −0.8% | −7.9% | +0.3% | +26.1% |
| QTUM | $141.7 | −8.3% | −12.8% | +10.8% | +19.6% | +49.1% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | **Hold** | Core liquid growth. Near 45% cap. Soft Nasdaq ≠ sell. No stop <8%. | 36–45% |
| VOO | **Hold** | Broad anchor ~29%. Cap room <1 share. Preferred later deploy vehicle. | 21–30% |
| AVGO | **Flat — DO NOT RE-BUY** | Sold $360.33; now ~$372. 24h cooldown + anti-churn + weekly TO. | 0% |
| HOOD | **Flat — DO NOT RE-BUY** | Unauthorized open exit @ $100.96. 24h cooldown + anti-churn. | 0% |
| META | **BANNED** | Fri Jul 10 unauthorized RT. | 0% |
| NVDA / SOXX / GOOG / thin | **Avoid** | Weekly TO + daily budget + no edge after friction. | 0% |

## Priority Actions (this hour → close / weekend)
1. **HOLD QQQ 6 / VOO 4.** No sells. No full liquidations. No core ETF stops.
2. **NO NEW BUYS** — daily 2/2 spent + weekly TO exceeded + integer caps closed.
3. **AVGO / HOOD:** flat. **Do NOT re-buy** within 24h of today's fills.
4. **META remains banned.**
5. **No active sell triggers.** Tactical must not invent stops.
6. **Accept gross ~73%** into Friday close and weekend. Do not force deploys with spent budget.
7. **Next deploy reassess:** Mon Jul 20 open **if** detector not CRITICAL **and** VOO/QQQ integer room opens **and** weekly TO headroom resets **and** tape orderly. Prefer **VOO** limit add first.
8. **Process note:** 14:40 CRITICAL correctly held core (no invent sells). Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor.

## Cap Math (equity $9,453)
- QQQ 45% max $4,254; held ~$4,176; room **~$78** → cannot add 1.
- VOO 30% max $2,836; held ~$2,732; room **~$104** → cannot add 1.
- Stock 15% max $1,418 — no stock adds authorized.
- Weekly TO Mon–Fri ≈ **$3,045 / $9,453 ≈ 32.2%** (over 20%).
- Daily position-changing trades: **2/2** (HOOD, AVGO).

## Ranked Deployment Queue (NOT authorized rest of today / weekend; reassess Mon+)
1. **VOO** — only after weekly TO headroom (Mon+) **and** cap room ≥1 share **and** detector not CRITICAL. Limit only, at/below bid.
2. **QQQ** — only if VOO capped and QQQ room ≥1 share (unlikely near 45%).
3. **Never** force NVDA/SOXX/AVGO bounce-chases after a same-day exit.
4. **Never META / never thin ETFs without explicit hourly line.**
5. **Never HOOD/AVGO re-buy within 24h of today's sells.**

## Macro Themes
- **Actionable now:** Hold QQQ/VOO core. Zero new orders into close/weekend. Blockers documented.
- **Worth monitoring:** Weekend gap risk; Mon TO reset; VOO/QQQ integer room after marks; chip bounce durability next week.
- **Not actionable:** META (banned); SpaceX/ARKX weakness; thin-ETF noise; chasing AVGO/NVDA with spent budget; generic earnings-preview headlines as trade signal.

## Data / Process Notes
- **Audit:** OK. Gross 73.1%. Daytrades 0.
- **Event detector:** **NONE** @ 19:35Z (was CRITICAL @ 14:40; fully cooled). Recommended: normal todo — **followed as hold-only** (TO still blocks all discretionary).
- **FMP:** disabled. Yahoo Finance chart primary multi-TF.
- **News fallback:** Yahoo Finance RSS OK (stale/low-signal headlines); Google News RSS 503; Reuters unreachable — documented. Coverage insufficient for new theses.
- **Earnings calendar:** Yahoo quoteSummary 401 — could not refresh; use memory dates only.
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
- **2026-07-17 14:40 ET:** Detector CRITICAL SOXX/XLK/SMH — autonomous hold core; no action (budget spent + core no-sell). Correct.
- **2026-07-17 12:40 ET:** Detector CRITICAL SOXX/SMH spike — autonomous hold; no action.
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — tactical CRITICAL event response (above hourly $349.50 floor). Later ~$372.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized** by prior hourly. Flat HOOD.
- **2026-07-16 ~17:00 ET:** Post-close HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Authorized HOOD trail SELL 1 @ $107.51.
- **2026-07-16 9:40 ET:** Authorized AVGO trail SELL 1 @ $380.65.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.
