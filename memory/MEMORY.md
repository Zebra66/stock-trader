# Hourly Macro Memory
*Updated 2026-07-17 17:35Z (Friday 1:35 PM ET). Market **OPEN**. Event detector **NONE**.*

---

## Hourly Cycle Summary — 2026-07-17 13:35 ET
- **Status:** Market OPEN (~4h into session). Event detector **NONE** (broad/held OK; sector rotation NONE). 12:40 CRITICAL (SOXX/SMH spike) has fully cooled; midday bars orderly.
- **Repo integrity:** Clean. Branch 0/0 vs origin/main. No mass-delete. Staged tactical price/ledger noise only.
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **73.2%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **~$9,496** | Cash **$2,543** | Long **~$6,955** | Gross **73.2%** | BP ~$29.6k (do **not** size from BP).
- **Holdings now:** QQQ 6 | VOO 4 | AVGO 0 | HOOD 0.
- **Filled today (unchanged since open):**
  1. **SOLD 1 HOOD @ $100.96** (~9:33 ET) — **not authorized** by prior hourly.
  2. **SOLD 1 AVGO @ $360.33** (~9:41 ET) — tactical CRITICAL event-response; above hourly $349.50 floor; later ~$375 — friction lesson stands.
- **Tactical since 12:35:** CRITICAL override @ 12:40 correctly held core (no sells/buys). Open orders **NONE**.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches.
- **Goal check:** Portfolio **–5.04%** vs SPY **+3.91%** (SPY ~746.1 vs 718.01). **Both goals FAILED.** Gap **~–9.0 pp**.
- **Regime:** **Neutral** (unchanged; no flip). Target gross **75–90%**. Live **73.2%** — residual of morning single-name exits. **Do not de-risk core. Do not force adds** (budget spent).
- **Dominant failure mode:** Historical **excessive turnover / friction** (primary) + residual **cash drag** (secondary, hard-blocked).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$701.6 | ~$4,210 | ~44.3% | ~−$89 | ~−2.1% |
| VOO | 4 | $683.39 | ~$686.3 | ~$2,745 | ~28.9% | ~+$12 | ~+0.4% |
| AVGO | 0 | — | ~$375–376 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$103.5 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.8% | — | — |
| **Equity** | — | — | — | **~$9,496** | **100%** | — | **–5.04%** |

- **Gross long exposure:** 73.2%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Stable ~73.1–73.2% since 10:35. No unauthorized drift.

## Performance Review — Fri Jul 17 13:35 ET
- **1D (vs last_equity $9,558.85):** portfolio **~–0.66%** vs SPY soft day (~−0.7% vs prev close ~751.8). Roughly in-line with beta on a soft Nasdaq day; core held.
- **1W:** SPY ~−0.7%; QQQ ~−3.1%; SOXX ~−9.0% — growth/semis still soft vs broad.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.04%** vs SPY **+3.91%**. Gap **–9.0 pp**.
- **What is working:** Core QQQ/VOO held (no June liquidation). VOO slight green. Audit clean. Detector quiet after 12:40 spike. Tactical discipline after budget spent.
- **What is not working:** Absolute red; gap to SPY wide. Morning single-name sells harvested friction (AVGO +$15 after exit). Cash ~27% idle but blocked.
- **What must change today:** **Nothing trade-wise** — budget spent. Preserve core. Next deploy window **Mon Jul 20** if TO resets + integer room + orderly tape.

## Goal Check
- **Portfolio since inception:** –5.04%
- **S&P 500 since inception:** +3.91% (SPY ~746.1 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers this hour:**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells).
  2. **Weekly turnover Mon–Fri ~$3,045 ≈ 32.1%** of equity > 20% ceiling (week Mon Jul 13–Sun Jul 19).
  3. **VOO 30% room ~$104** < 1 share (~$686).
  4. **QQQ 45% room ~$64** < 1 share (~$702).
  5. **24h cooldown + anti-churn:** HOOD and AVGO sold today.
  6. **No edge** to force NVDA/SOXX/GLD/thin ETFs after friction.
  7. Soft Nasdaq/chip tape into Friday afternoon — not a buy signal into exhausted budget.

## Market Intel — Friday 1:35 PM ET
- **Broad market:** SPY ~746.1. Soft risk-off day; detector **NONE** — orderly after 12:40 semis spike. Midday: ETFs softer after midday, Nasdaq still lagging Dow.
- **Semiconductors:** SOXX ~$529–531 (1w ~−9%). AVGO ~$375–376 (well above $360 tactical fill). NVDA ~$205. **Do not chase.**
- **News:** Yahoo Finance RSS: rocky market / Nasdaq stumbles this week; ETFs falling after midday; META earnings path Jul 29; NVDA/compute themes background only. Google News RSS **503** this cycle — Yahoo RSS used as fallback (documented). Not a reason to sell core ETFs or invent buys.
- **News sources this cycle:** Yahoo Finance headline RSS (primary). GNews 503. FMP disabled — Yahoo chart multi-TF fallback.
- **Earnings:** No held-name binary today. Memory: META/GOOG late July; NVDA Aug. Not blocking hold-only.
- **Alpaca bars:** ~17:34Z fresh for liquid names. EIS prior-day thin — illiquid. QTUM/SHLD/GLD low TradeCount — illiquid for market orders.

## Universe Performance Snapshot (Yahoo Finance fallback, ~17:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $746.1 | −0.7% | −0.6% | +5.1% | +10.1% | +19.5% |
| QQQ | $700.8 | −3.1% | −4.0% | +8.0% | +15.2% | +25.7% |
| VOO | $685.8 | −0.7% | −0.6% | +5.1% | +10.1% | +19.5% |
| AVGO | $375.5 | −6.4% | −0.3% | −7.6% | +12.9% | +33.7% |
| HOOD | $103.4 | −10.1% | +6.9% | +14.0% | −2.2% | +0.2% |
| NVDA | $205.3 | +1.2% | −1.0% | +1.8% | +15.3% | +19.8% |
| GOOG | $344.6 | −3.3% | −7.1% | +1.5% | +7.0% | +87.4% |
| SOXX | $529.5 | −9.0% | −10.4% | +27.4% | +56.9% | +115.6% |
| META | $649.5 | +2.9% | +8.2% | −5.7% | +7.5% | −7.6% |
| GLD | $368.0 | −2.7% | −7.5% | −17.5% | −15.8% | +19.4% |
| RKLB | $70.1 | −15.1% | −33.0% | −17.3% | −21.4% | +47.1% |
| SHLD | $60.4 | −1.8% | −5.4% | −17.7% | −21.6% | −0.7% |
| ARKX | $30.7 | −5.0% | −11.7% | −8.6% | −9.2% | +16.2% |
| EIS | $120.5 | +0.8% | −2.4% | −7.2% | +2.9% | +28.2% |
| QTUM | $143.1 | −8.0% | −11.8% | +11.9% | +23.2% | +53.0% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | **Hold** | Core liquid growth. Near 45% cap. Soft Nasdaq ≠ sell. No stop <8%. | 36–45% |
| VOO | **Hold** | Broad anchor ~29%. Cap room <1 share. Preferred later deploy vehicle. | 21–30% |
| AVGO | **Flat — DO NOT RE-BUY** | Sold $360.33; now ~$375. 24h cooldown + anti-churn + weekly TO. | 0% |
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
8. **Process note:** Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor. 12:40 CRITICAL correctly held core.

## Cap Math (equity $9,496)
- QQQ 45% max $4,273; held ~$4,210; room **~$64** → cannot add 1.
- VOO 30% max $2,849; held ~$2,745; room **~$104** → cannot add 1.
- Stock 15% max $1,424 — no stock adds authorized.
- Weekly TO Mon–Fri ≈ **$3,045 / $9,496 ≈ 32.1%** (over 20%).
- Daily position-changing trades: **2/2** (HOOD, AVGO).

## Ranked Deployment Queue (NOT authorized rest of today; reassess Mon+)
1. **VOO** — only after weekly TO headroom (Mon+) **and** cap room ≥1 share **and** detector not CRITICAL. Limit only, at/below bid.
2. **QQQ** — only if VOO capped and QQQ room ≥1 share (unlikely near 45%).
3. **Never** force NVDA/SOXX/AVGO bounce-chases after a same-day exit.
4. **Never META / never thin ETFs without explicit hourly line.**
5. **Never HOOD/AVGO re-buy within 24h of today's sells.**

## Macro Themes
- **Actionable now:** Hold QQQ/VOO core. Zero new orders rest of Friday. Blockers documented.
- **Worth monitoring:** Chip bounce durability into close; Mon TO reset; VOO/QQQ integer room after marks; weekend gap risk on soft Nasdaq week.
- **Not actionable:** META (banned); SpaceX/ARKX weakness; thin-ETF noise; chasing AVGO/NVDA with spent budget.

## Data / Process Notes
- **Audit:** OK. Gross 73.2%. Daytrades 0.
- **Event detector:** **NONE** @ 17:35Z (prior 12:40 CRITICAL cooled). Recommended: normal todo — **followed as hold-only** (TO blocks all discretionary).
- **FMP:** disabled. Yahoo Finance chart primary multi-TF.
- **News fallback:** Yahoo Finance RSS OK; Google News RSS 503 this hour — documented.
- **No open orders.**
- **Turnover today:** 2 sells (HOOD + AVGO). Daily **2/2**. Weekly **~32.1%**.
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
- **Neutral band 75–90%.** Live 73.2% is residual of morning single-name exits; do **not** force buys with spent budget; do **not** de-risk core further.
- **Turnover budget is real:** daily **and** weekly. Protective + unauthorized exits still add to weekly notional.
- **CRITICAL → NO NEW BUYS** unless hourly writes explicit override. When CRITICAL cools, still respect daily/weekly TO.
- **Tactical must not invent stops** absent from current `todo.md`. Event-response single-name exits should not fire **above** an explicit hourly catastrophic floor.
- **Stale pre-fetch / mass-delete working trees** → restore from HEAD before deciding.
- **Alpha preservation:** VOO/QQQ core untouched is the free baseline; every trade must beat do-nothing after friction.

## Prior Key Events
- **2026-07-17 12:40 ET:** Detector CRITICAL SOXX/SMH spike — autonomous hold; no action (budget spent + core no-sell).
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — tactical CRITICAL event response (above hourly $349.50 floor). Later ~$375.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized** by prior hourly. Flat HOOD.
- **2026-07-16 ~17:00 ET:** Post-close HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Authorized HOOD trail SELL 1 @ $107.51.
- **2026-07-16 9:40 ET:** Authorized AVGO trail SELL 1 @ $380.65.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.
