# Hourly Macro Memory
*Updated 2026-07-17 16:35Z (Friday 12:35 PM ET). Market **OPEN**. Event detector **NONE**.*

---

## Hourly Cycle Summary — 2026-07-17 12:35 ET
- **Status:** Market OPEN (~3h into session). Event detector **NONE** (broad/held OK; sector rotation NONE). Quiet midday after morning CRITICAL→recovery.
- **Repo integrity:** Clean. Branch 0/0 vs origin/main. Staged tactical ledger/price updates only (not mass-delete).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **73.2%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker:** Equity **$9,479** | Cash **$2,543** | Long **$6,935** | Gross **73.2%** | BP ~$29.6k (do **not** size from BP).
- **Holdings now:** QQQ 6 | VOO 4 | AVGO 0 | HOOD 0.
- **Filled today (unchanged since open):**
  1. **SOLD 1 HOOD @ $100.96** (~9:33 ET) — **not authorized** by prior hourly.
  2. **SOLD 1 AVGO @ $360.33** (~9:41 ET) — tactical CRITICAL event-response; above hourly $349.50 floor; later ~$373 — friction lesson stands.
- **Tactical since 11:35:** Expect continued NO_ACTION (budget spent). Open orders **NONE**.
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches.
- **Goal check:** Portfolio **–5.21%** vs SPY **+3.84%** (SPY ~745.7 vs 718.01). **Both goals FAILED.** Gap **~–9.1 pp**.
- **Regime:** **Neutral** (unchanged; no flip). Target gross **75–90%**. Live **73.2%** — residual of morning single-name exits. **Do not de-risk core. Do not force adds** (budget spent).
- **Dominant failure mode:** Historical **excessive turnover / friction** (primary) + residual **cash drag** (secondary, hard-blocked).

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$698.9 | ~$4,194 | ~44.2% | ~−$105 | ~−2.4% |
| VOO | 4 | $683.39 | ~$685.3 | ~$2,741 | ~28.9% | ~+$8 | ~+0.3% |
| AVGO | 0 | — | ~$373.5 | $0 | 0% | realized exit @ $360.33 | — |
| HOOD | 0 | — | ~$102.7 | $0 | 0% | realized exit @ $100.96 | — |
| Cash | — | — | — | ~$2,543 | ~26.8% | — | — |
| **Equity** | — | — | — | **~$9,479** | **100%** | — | **–5.21%** |

- **Gross long exposure:** 73.2%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift:** Stable ~73.1–73.2% since 10:35. No unauthorized drift.

## Performance Review — Fri Jul 17 12:35 ET
- **1D (vs last_equity $9,558.85):** portfolio **~–0.84%** vs SPY soft (~−0.5 to −0.8% day). Slight lag on Nasdaq beta; core held.
- **1W:** SPY ~−1.2%; QQQ ~−3.6%; SOXX ~−9.3% — growth/semis soft; midday tape calmer than open headlines.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–5.21%** vs SPY **+3.84%**. Gap **–9.1 pp**.
- **What is working:** Core QQQ/VOO held (no June liquidation). VOO slight green. Audit clean. Detector quiet. Tactical discipline after budget spent.
- **What is not working:** Absolute red; gap to SPY wide. Morning single-name sells harvested friction (AVGO +$13 after exit). Cash ~27% idle but blocked.
- **What must change today:** **Nothing trade-wise** — budget spent. Preserve core. Next deploy window **Mon Jul 20** if TO resets + integer room + orderly tape.

## Goal Check
- **Portfolio since inception:** –5.21%
- **S&P 500 since inception:** +3.84% (SPY ~745.7 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary) + **cash drag** (secondary, currently hard-blocked).
- **Exact cash / under-deployment blockers this hour:**
  1. **Daily turnover 2/2 spent** (HOOD + AVGO sells).
  2. **Weekly turnover Mon–Fri ~$3,045 ≈ 32.1%** of equity > 20% ceiling (week Mon Jul 13–Sun Jul 19).
  3. **VOO 30% room ~$102** < 1 share (~$685).
  4. **QQQ 45% room ~$72** < 1 share (~$699).
  5. **24h cooldown + anti-churn:** HOOD and AVGO sold today.
  6. **No edge** to force NVDA/SOXX/GLD/thin ETFs after friction.
  7. Soft AI/chip tape + Hormuz risk premium — not a buy signal into exhausted budget.

## Market Intel — Friday 12:35 PM ET
- **Broad market:** SPY ~745.7. Soft risk-off day; detector **NONE** — orderly. Headlines: Nasdaq/chip sell-off, Netflix whiff; midday bars stable vs open washout.
- **Semiconductors:** SOXX ~$527 (1w ~−9%). AVGO ~$373.5 (well above $360 tactical fill). NVDA ~$205. **Do not chase.**
- **News (GNews RSS):** Chip/AI risk-off; China model headlines; Netflix drag. Bing geo RSS thin this hour — treat as insufficient for new geo thesis. Not a reason to sell core ETFs or invent buys.
- **News sources this cycle:** Google News RSS. FMP disabled — Yahoo chart multi-TF fallback (documented).
- **Earnings:** No held-name binary today. Memory: META/GOOG late July; NVDA Aug. Coverage incomplete via Yahoo — not blocking hold-only.
- **Alpaca bars:** ~16:34Z fresh for liquid names. EIS prior-day thin — illiquid. QTUM TradeCount 1 — illiquid.

## Universe Performance Snapshot (Yahoo Finance fallback, ~16:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $745.7 | −1.2% | +0.6% | +5.0% | +7.8% | +18.7% |
| QQQ | $699.1 | −3.6% | −3.2% | +7.7% | +12.5% | +24.4% |
| VOO | $685.4 | −1.2% | +0.6% | +5.0% | +7.8% | +18.8% |
| AVGO | $373.5 | −6.6% | −4.9% | −8.1% | +6.2% | +30.4% |
| HOOD | $102.7 | −8.3% | −2.4% | +13.2% | −5.6% | −2.6% |
| NVDA | $205.1 | −2.8% | +0.2% | +1.7% | +10.1% | +18.6% |
| GOOG | $345.5 | −2.7% | −4.6% | +1.8% | +4.6% | +87.0% |
| SOXX | $527.3 | −9.3% | −12.1% | +26.8% | +54.0% | +113.9% |
| META | $641.6 | −4.1% | +13.0% | −6.8% | +3.4% | −8.5% |
| GLD | $368.5 | −2.3% | −5.2% | −17.4% | −12.5% | +19.8% |
| RKLB | $69.4 | −14.4% | −35.7% | −18.1% | −27.9% | +35.2% |
| SHLD | $60.4 | −1.2% | −5.3% | −17.6% | −22.4% | −1.8% |
| ARKX | $30.6 | −4.6% | −11.4% | −9.0% | −13.1% | +11.4% |
| EIS | $119.9 | +0.4% | −0.5% | −7.6% | +0.6% | +26.5% |
| QTUM | $142.3 | −7.9% | −12.4% | +11.2% | +20.1% | +49.7% |

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
6. **Accept gross ~73%** for remainder of Friday.
7. **Next deploy reassess:** Mon Jul 20 open **if** detector not CRITICAL **and** VOO/QQQ integer room opens **and** tape orderly. Prefer **VOO** limit add first.
8. **Process note:** Event-response single-name exits must not undercut an explicit hourly catastrophic floor unless price is through that floor.

## Cap Math (equity $9,479)
- QQQ 45% max $4,266; held ~$4,194; room **~$72** → cannot add 1.
- VOO 30% max $2,844; held ~$2,741; room **~$102** → cannot add 1.
- Stock 15% max $1,422 — no stock adds authorized.
- Weekly TO Mon–Fri ≈ **$3,045 / $9,479 ≈ 32.1%** (over 20%).
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
- **Audit:** OK. Gross 73.2%. Daytrades 0.
- **Event detector:** **NONE** @ 16:35Z. Recommended: normal todo — **followed as hold-only** (TO blocks all discretionary).
- **FMP:** disabled. Yahoo Finance chart primary multi-TF.
- **News fallback:** Google News RSS; Bing geo thin this hour — documented as insufficient for geo.
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
- **2026-07-17 ~9:41 ET:** SOLD 1 AVGO @ $360.33 — tactical CRITICAL event response (above hourly $349.50 floor). Later ~$373.
- **2026-07-17 ~9:33 ET:** SOLD 1 HOOD @ $100.96 — **not authorized** by prior hourly. Flat HOOD.
- **2026-07-16 ~17:00 ET:** Post-close HOLD-ONLY; weekly TO + caps bind.
- **2026-07-16 13:10 ET:** Authorized HOOD trail SELL 1 @ $107.51.
- **2026-07-16 9:40 ET:** Authorized AVGO trail SELL 1 @ $380.65.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance source.
