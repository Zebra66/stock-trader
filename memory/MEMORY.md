# Hourly Macro Memory
*Updated 2026-07-16 13:30Z (Thursday 9:30 AM ET). Market **OPEN**. Event detector CRITICAL. Tactical override applied. HOLD-ONLY.*

---

## Hourly Cycle Summary — 2026-07-15 20:32Z (Wed ~4:32 PM ET, post-close)
- **Status:** Market **CLOSED** (~4:31 PM ET). Final confirmation after concurrent 3:35 hourly. Event detector earlier **NONE** (broad + held OK). **HOLD overnight.** No after-hours orders.
- **Repo integrity:** Fast-forwarded origin/main (was 2 behind concurrent hourlies). Branch = origin/main (0/0). Audit **OK**.
- **Audit (~20:18Z):** Unauthorized=[] Concentration=[] Gross **83.6%**. Daytrades **0**. `pdtLimitReached` false. hardLockRecommended false.
- **Live broker (~20:32Z):** Equity **~$9,697** | Cash **$1,594.04** | Long **~$8,103** | Gross **~83.6%** | BP ~$29.1k (do **not** size from BP).
- **Holdings:** QQQ 6 @ ~$718.0 | VOO 4 @ ~$693.7 | AVGO 2 @ ~$394.3 | HOOD 2 @ ~$115.8. Open orders: **NONE**.
- **Today's fills:** **NONE**. Last fills: Tue VOO. All tactical cycles NO_ACTION (compliant). **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. Gross stable ~83.5–83.6% all day.
- **Goal check:** Portfolio **~–3.0%** vs SPY **~+5.0%** (SPY ~753.8 vs 718.01). **Both goals FAILED.** Gap **~–8.0 pp**.
- **Regime:** **Neutral** (no flip). Target gross **75–90%**. Live **83.6%** — inside band.
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover already spent** + historical friction. Not symbol selection.
- **This-cycle decision:** **HOLD overnight.** Confirm concurrent 3:35 plan. Weekly TO ~21.6% blocks discretionary buys. Caps block integer VOO/QQQ. **TSMC ~Thu Jul 16** still blocks new chip beta. Trails intact. **No AH/pre-market orders.**

---

## Live Book (Alpaca) — TRUE STATE (post-close)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$718.0 | ~$4,308 | ~44.4% | ~+$9 | ~+0.2% |
| VOO | 4 | $683.39 | ~$693.7 | ~$2,775 | ~28.6% | ~+$41 | ~+1.5% |
| AVGO | 2 | $371.95 | ~$394.3 | ~$789 | ~8.1% | ~+$45 | ~+6.0% |
| HOOD | 2 | $101.50 | ~$115.8 | ~$232 | ~2.4% | ~+$29 | ~+14.0% |
| Cash | — | — | — | $1,594.04 | ~16.4% | — | — |
| **Equity** | — | — | — | **~$9,697** | **100%** | — | **~–3.0%** |

- **Gross long exposure:** ~83.6%
- **Daytrade count:** 0 | **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure path:** Stable ~83.5–83.6% all day. No unauthorized drift.

## Performance Review — Wed July 15 close
- **1D (vs Tue last_equity $9,681.70):** portfolio **~+0.2%** (closed green vs open soft).
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.0%** vs SPY **~+5.0%**. Gap **~–8.0 pp**.
- **Working:** Core held; AVGO (~+6.0%) / HOOD (~+14%) winners; process discipline; weekly TO respected; zero fills = zero friction today.
- **Not working:** Absolute red; cash 16.4% idle but **cannot deploy** (caps + weekly TO).
- **What must change tomorrow:** Reassess weekly TO (new calendar week? Mon–Tue used this week — **weekly budget may still bind Thu** until Mon reset depending on counting window). Confirm weekly window in next open hourly. Prefer patience into TSMC. Prefer VOO if room opens.

## Goal Check
- **Portfolio since inception:** ~–3.0%
- **S&P 500 since inception:** ~+5.0% (SPY ~753.8 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** Residual **cash drag** (cap-bound) + **weekly turnover ceiling** + historical **turnover/friction**.
- **Exact cash blocker:**
  1. VOO 30% room ~**$134** → **cannot buy 1 VOO** (~$694).
  2. QQQ 45% room ~**$56** → **cannot buy 1 QQQ** (~$718).
  3. **Weekly turnover already ~21.6%** of equity → **over 20% weekly budget** → discretionary buys **blocked**.
  4. Chip beta: **TSMC earnings ~Thu Jul 16** sector binary. NVDA four-gate incomplete (SOXX fail).
  5. Thin ETFs — no edge / illiquid.

## Market Intel — Post-close Wed Jul 15
- **Tape:** Orderly close. SPY ~flat-green on week; QQQ soft then recovered into close (~$718). SOXX soft on week. Detector NONE into close.
- **Semiconductors:** **TSMC earnings ~Thu Jul 16** is the binary (Barron's/Reuters: AI demand test). Do **not** pre-position chip beta overnight. AVGO constructive vs entry; trail $380 intact (~3.6% buffer).
- **HOOD:** Strong (~+14%); trail $108 intact (~6.7% buffer). Headlines (app/chain) background only.
- **News source:** Google News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns. Documented in this file.
- **Earnings:** **TSMC ~Thu Jul 16**; META/GOOG late July; NVDA Aug. No binary for held names in next 48h (TSMC is sector-level for chip beta only).

## Universe Performance Snapshot (Yahoo Finance fallback, ~19:30Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| SPY | $753.8 | +1.1% | –0.1% | +7.4% | +8.9% | +21.2% |
| QQQ | $716.9 | +0.8% | –3.7% | +11.9% | +15.3% | +28.8% |
| VOO | $692.8 | +1.1% | –0.1% | +7.4% | +8.8% | +21.2% |
| AVGO | $394.6 | +1.5% | +0.2% | –1.0% | +15.0% | +40.5% |
| HOOD | $115.2 | +1.5% | +17.4% | +32.7% | +4.4% | +15.7% |
| NVDA | $211.7 | +3.7% | –0.4% | +6.7% | +13.2% | +24.0% |
| GOOG | $369.1 | +2.9% | +0.5% | +10.9% | +10.8% | +101.6% |
| SOXX | $554.7 | –1.3% | –11.7% | +36.7% | +64.5% | +125.3% |
| META | $679.0 | +12.6% | +14.4% | +0.3% | +9.4% | –4.4% |
| GLD | $371.9 | –0.7% | –6.2% | –15.5% | –12.1% | +21.3% |
| RKLB | $76.5 | –8.3% | –30.0% | –7.8% | –15.8% | +71.4% |
| SHLD | $60.2 | –3.9% | –4.8% | –18.3% | –22.2% | –0.5% |
| ARKX | $31.5 | –2.3% | –10.3% | –5.7% | –8.8% | +23.3% |
| EIS | $122.5 | +2.5% | –3.3% | –3.0% | +2.7% | +31.0% |
| QTUM | $147.7 | –3.1% | –12.1% | +18.0% | +25.0% | +59.7% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core. Near 45% cap. No stop. Overnight hold. | 36–45% |
| VOO | Hold | Core. Cap room <1. Preferred deploy if room opens. | 21–30% |
| AVGO | Hold / Trail $380 | Winner ~+6%. Buffer ~3.6%. No add. | 6–12% |
| HOOD | Hold / Trail $108 | Winner ~+14%. Buffer ~6.7%. No add. | 2–6% |
| META | **BANNED** | Unauthorized Fri RT. | 0% |
| NVDA / SOXX / GOOG / thin | Avoid | TSMC / weekly TO / no edge. | 0% |

## Priority Actions (overnight → Thu open)
1. **HOLD all four names overnight.** No AH/pre-market equity orders.
2. **AVGO trail** SELL 1 if < **$380.00** limit **$379.50** (regular session only).
3. **HOOD trail** SELL 1 if < **$108.00** limit **$107.50** (regular session only).
4. **No new buys** until next open hourly reassesses weekly TO window + TSMC reaction.
5. **Do not chase chips into TSMC.** Reassess Thu 9:35 ET after open.
6. Prefer **VOO** if cap room ever frees 1 share **and** weekly budget allows.

## Cap Math (equity ~$9,697)
- QQQ 45% max ~$4,364; held ~$4,308; room ~**$56** → cannot add 1.
- VOO 30% max ~$2,909; held ~$2,775; room ~**$134** → cannot add 1.
- Weekly TO Mon–Tue ~$2,095 ≈ 21.6% of equity.

## Ranked Deployment Queue (NOT authorized overnight)
1. **VOO** — only if cap room ≥ 1 share **and** weekly TO headroom. Limit only. Regular session.
2. **NVDA** — **NOT** until post-TSMC reassessment + four gates + budget + fresh hourly line.
3. **Never META / never thin ETFs without explicit hourly line.**

## Macro Themes
- **Actionable now:** Hold core overnight. Protect trails next regular session. Respect weekly TO + caps.
- **Worth monitoring:** TSMC Thu; weekly TO reset rules; VOO/QQQ room drift; semi post-earnings reaction; crowded-long-semi narrative.
- **Not actionable:** META strength (banned); SpaceX/Anthropic IPO chatter; AH noise.

## Data / Process Notes
- **Audit:** OK. Gross 83.6%. Daytrades 0.
- **FMP:** disabled. Yahoo Finance chart primary multi-TF source. Google News RSS for headlines.
- **No open orders.** Market closed — convert any directives to next regular session only.
- **Turnover today:** **0/2** daily. **Weekly ~21.6%** already used → discretionary blocked.
- **Git:** pulled concurrent 1:35/2:35/3:35 hourlies; this is post-close confirmation.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **With ~$10K equity, caps are tight** (QQQ maxed at 6; VOO 4 near 30%).
- **VOO is preferred cash-deploy vehicle** when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade; TSMC binary week overrides even full price pass.
- **Cash ≤10% target** — if caps bind, write exact blocker (current state).
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band 75–90%.** Live 83.6% correct; do not de-risk into cash.
- **Turnover budget is real:** daily **and** weekly. Weekly binds even when daily is 0/2.
- **No after-hours / pre-market equity orders** by default.
- **Event detector multi-day baseline gaps can false-CRITICAL on UP moves.**
- **Do not tighten trails intraday** when thesis intact.
- **Soft open / late recovery is not a signal to invent deploys** when weekly TO + caps bind.

## Prior Key Events
- **2026-07-15 all day:** Zero fills; hold-only; weekly TO + caps bind; upward SOXX CRITICAL correctly ignored as bounce.
- **2026-07-14:** Two authorized VOO adds.
- **2026-07-13:** AVGO/HOOD trail sells.
- **2026-07-10:** META unauthorized — banned.
- **2026-06:** Full liquidations — primary underperformance.

---

## AUTONOMOUS OVERRIDE — Tactical Event Response — 2026-07-16 13:30Z
- **[AUTONOMOUS_OVERRIDE]** Event detector **CRITICAL** at 2026-07-16 13:30Z (Thu 9:30 AM ET).
- **Classification:** CRITICAL (broad semiconductor weakness: SOXX -2.81%, SMH -2.37%; GLD MAJOR -1.15%). Broad SPY/QQQ OK/MINOR.
- **Held positions reviewed:**
  - AVGO: MAJOR -2.78% from prior close, current $383.57 > authorized stop $380.00. **No protective sell executed.**
  - HOOD: OK -1.35%, current $113.69 > authorized stop $108.00. No action.
  - QQQ: MINOR -0.61%, current $713.00; no stop, no action.
  - VOO: OK -0.09%, current $692.42; no stop, no action.
- **Action taken:** No orders placed. No active buy conditions to suspend (todo already HOLD-ONLY). No new positions. No increased exposure.
- **Why:** Event detector severity is driven by broad semi/GLD weakness, not by held-position stop breaches. Only authorized protective stops (AVGO $380, HOOD $108) are permitted sells; neither triggered. No buys authorized by current todo.md.
- **Next expected action:** Await 9:35 AM ET hourly strategist reset. Reassess after hourly update and fresh event detector pass. Continue to monitor AVGO $380.00 / HOOD $108.00 stops.
- **Exposure:** Gross ~83.5% (inside 75–90% neutral band). Cash ~$1,594. No new buys initiated during CRITICAL event.
