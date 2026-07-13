# Hourly Macro Memory
*Updated 2026-07-13 17:35Z (Monday 1:35 PM ET). Market OPEN.*

---

## Hourly Cycle Summary — 2026-07-13 17:35Z (Mon 1:35 PM ET)
- **Status:** Market OPEN. Fifth hourly of the week. Event detector **NONE** (stable all afternoon; no CRITICAL since morning).
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Unrelated local dirty workspace (config/prompts/src staged by other work) **not staged** this cycle.
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **74.2%**. Daytrades **0**. hardLockRecommended false.
- **Live broker:** Equity **$9,626.15** | Cash **$2,480.36** | Long **$7,145.79** | Gross **74.2%** | BP ~$29.9k (do not size from BP).
- **Holdings:** QQQ 6, VOO 2, AVGO 3, HOOD 3. Open orders: NONE.
- **Filled since prior hourly (16:35Z):** NONE. Only fill today remains HOOD 2 @ $110 (13:50Z). No concealment.
- **Compliance:** META remains banned. HARD_LOCK inactive. No universe breaches.
- **Goal check:** Portfolio **–3.74%** vs SPY **+4.42%** (SPY ~749.77 vs 718.01). **Both goals FAILED.** Gap **~–8.2 pp**.
- **Regime:** **Neutral.** Target gross **65–80%**. Live 74.2% — **inside band**.
- **Dominant failure mode:** **Excessive turnover / friction** (historical) + **cash drag** secondary. Immediate issue is **macro/sector risk** (Hormuz blockade reimposed + semi selloff + TSMC earnings ~Thu) — do **not** force deploys.
- **NVDA 13:35 four-gate review:** QQQ ≥ $716 **FAIL** (~713) | NVDA ≥ $209 firm **FAIL** (~$204.2) | SOXX ≥ $562 **FAIL** (~$554) | no CRITICAL **PASS**. **1/4 → NO NVDA authorization.** Structure still broken; slightly weaker NVDA vs 12:35.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $713.00 | $4,278.00 | 44.4% | –$20.84 | –0.49% |
| VOO | 2 | $676.46 | $689.22 | $1,378.44 | 14.3% | +$25.52 | +1.89% |
| AVGO | 3 | $371.95 | $386.85 | $1,160.55 | 12.1% | +$44.70 | +4.01% |
| HOOD | 3 | $101.50 | $109.60 | $328.80 | 3.4% | +$24.30 | +7.98% |
| Cash | — | — | — | $2,480.36 | 25.8% | — | — |
| **Equity** | — | — | — | **$9,626.15** | **100%** | — | **–3.74%** |

- **Gross long exposure:** 74.2%
- **Daytrade count:** 0 (audit + order history)
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift since 16:35Z:** 74.2% → 74.2% (mark-to-market only) — **no unauthorized drift**

## Performance Review — Mon July 13 13:35
- **1D (vs Fri last_equity $9,760.90):** portfolio **–1.38%** vs SPY soft (~flat to slightly red). Nasdaq/tech underperforms on geo + chip tape.
- **1W:** Yahoo soft snapshot shows SPY ~+0.3% 1w; portfolio still lagging absolute and relative since inception.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–3.74%** vs SPY **+4.42%**. Gap **–8.2 pp**.
- **What is working:** Process discipline (no chase, no unauthorized fills, authorized HOOD stop only). Remaining HOOD still ~+8.0% unrealized. AVGO still ~+4.0% despite chip selloff. VOO steady anchor.
- **What is not working:** Absolute still red and worsening on the day. Cash ~26% idle. Chip beta broken (SOXX 1m ~–11.9%). Gap to SPY not closing. HOOD sitting **$0.10 above trail** — risk of stop trigger this hour.
- **What must change today:** Stay disciplined. Protect winners with stops. **Do not force NVDA/GOOG** while all three structure gates fail and Hormuz/TSMC risk is live. Reassess 14:35 only if structure improves materially (unlikely into soft afternoon).

## Goal Check
- **Portfolio since inception:** –3.74%
- **S&P 500 since inception:** +4.42% (SPY ~749.77 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary historical) with **cash drag** secondary. Immediate posture is **neutral hold** — not offensive catch-up into geo/semi pressure.
- **Exact cash blocker this hour:** Trump reimposing Strait of Hormuz blockade / fee on shippers (CNN/Reuters/Guardian live); tech soft (CNBC); semis still selling (NVDA ~$204, SOXX ~$554); **TSMC full earnings ~Thu Jul 16** elevates sector event risk. NVDA four-gate **1/4 fail**. **No edge after friction for a forced 1-share add.**

## Market Intel — Monday 1:35 PM ET
- **Broad market:** SPY ~749.8, QQQ ~713.0. Soft midday after risk-off open; afternoon drift flat-to-soft. Event severity NONE (orderly, not a crash).
- **Geopolitical:** Dominant headline — US reimposing naval blockade / charging ships through Strait of Hormuz (CNN, Reuters, Al Jazeera, Guardian, CBS, NYT). Ceasefire language has disintegrated. Oil bid / tech soft is the regime.
- **Semiconductors:** Selloff continues. SK Hynix mega listing / post-debut pressure cited in CNBC live. NVDA/AVGO soft. TSMC June revenue +68% / record quarter positive fundamentals but **full earnings ~Thu Jul 16** = binary sector event — do not pre-position chip beta with thin edge.
- **AVGO:** ~$386.9, still above $385 stop (cushion ~$1.9). Thesis intact for remaining 3. No add (cap + sector risk).
- **HOOD:** ~$109.6 after stop; **$0.10 above trail $109.50**. Remaining 3 hold with trail. Robinhood Chain headlines = background only.
- **NVDA:** ~$204.2, liquid (TradeCount 45). Well below $209 gate. **Not authorized.**
- **GOOG:** ~$352.9, soft 1w (~–3.0%). Lower priority; no edge.
- **News source:** Google News RSS primary (BBC business secondary). FMP disabled — Yahoo chart fallback for multi-timeframe returns (documented).
- **Earnings:** No known binary in next 48h for QQQ/VOO/AVGO/HOOD. META/GOOG late July; NVDA Aug; **TSMC ~Thu Jul 16** is the sector event for AVGO/NVDA/SOXX beta.

## Universe Performance Snapshot (Yahoo Finance fallback, 17:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $387.0 | +4.4% | –1.8% | +1.9% | +9.1% | +40.4% |
| EIS | $118.3 | –1.0% | –6.6% | –5.4% | +0.6% | +26.2% |
| GLD | $366.9 | –2.8% | –7.5% | –15.7% | –13.0% | +19.1% |
| GOOG | $352.7 | –3.0% | –3.9% | +10.5% | +4.8% | +92.9% |
| HOOD | $109.6 | –2.9% | +11.7% | +52.9% | –8.8% | +9.7% |
| META | $661.0 | +7.4% | +11.4% | +4.2% | +4.7% | –8.3% |
| NVDA | $204.1 | +3.7% | –3.9% | +7.8% | +9.9% | +24.4% |
| QQQ | $712.9 | +0.5% | –4.2% | +15.5% | +13.8% | +28.2% |
| QTUM | $149.6 | –1.2% | –11.0% | +25.3% | +27.5% | +62.1% |
| RKLB | $76.1 | –8.8% | –30.4% | +7.7% | –12.1% | +76.1% |
| SHLD | $60.3 | –5.5% | –4.7% | –19.1% | –21.1% | –1.6% |
| SOXX | $553.7 | +0.4% | –11.9% | +40.8% | +66.1% | +127.1% |
| VOO | $689.2 | +0.3% | –0.7% | +9.3% | +8.0% | +20.0% |
| ARKX | $31.3 | –3.9% | –10.9% | –2.2% | –7.7% | +22.9% |
| SPY | $749.8 | +0.3% | –0.7% | +9.3% | +8.1% | +20.0% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. Room ~$54 — cannot add 1 share. | 36–45% |
| VOO | Hold | Broad-market anchor. 14.3%. 1 share (~$689) would breach 20% non-QQQ ETF cap. | 10–20% |
| AVGO | Hold / Stop $385 | +4.0% unrealized. Softening; cushion ~$1.9 to stop. Trim 1 if $385 breaks. No add. | 8–15% |
| HOOD | Hold / Trail $109.50 | Remaining 3 after stop. Live ~$109.6 — **on trail**. No add / no re-buy today. | 3–8% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. Stays in bannedSymbols. | 0% |
| NVDA | Watch only — gate FAIL | ~$204 << $209; SOXX broken; QQQ soft; TSMC week. Reassess 14:35. | 0–4% |
| GOOG | Avoid this hour | Soft 1w; no edge vs cash. | 0% |
| SOXX | Avoid | Soft 1m (~–11.9%); thin vs NVDA; TSMC risk. No re-entry today. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends / thin / no edge. | 0% |

## Priority Actions (this hour → 14:35)
1. **HOLD all four positions.** No discretionary sells. No panic.
2. **AVGO protective stop:** SELL 1 share if price drops below **$385.00** with limit **$384.50**. Hold remaining 2.
3. **HOOD trail stop:** SELL 1 share if price drops below **$109.50** with limit **$109.00**. Hold remaining 2 after any trigger. **Note: live ~$109.6 — stop is live-active; execute exactly if breached.**
4. **NO NEW BUYS this hour.** Cash deployment deferred. Explicit blocker: Hormuz blockade headlines + NVDA four-gate 1/4 + TSMC ~Thu sector risk.
5. **META remains banned.** No re-buy under any circumstances.
6. **Conserve daytrades:** 0 used. Do not open a position you might need to reverse today. HOOD sold today → **cannot re-buy HOOD today** (anti-churn).
7. **Next hourly (14:35):** Reassess NVDA only if (a) QQQ ≥ $716, (b) NVDA ≥ $209 with firm 10-min structure, (c) SOXX holding ≥ $562, and (d) no new CRITICAL geo escalation. Same four gates — currently **none** of a–c are close.

## Ranked Deployment Queue (NOT authorized this hour — for later only if conditions met)
1. **NVDA** — 1 share, **limit only** ≤ $209.50, only if all four gates pass. Cap room ample (~2.1% equity). Post-buy gross ~76% still inside 65–80%.
2. **GOOG** — 1 share only on stronger broad recovery; lower priority.
3. **No SOXX / no META / no thin ETFs / no HOOD re-buy today.**

## Macro Themes
- **Actionable now:** Protect AVGO/HOOD with stops (HOOD trail is live). Hold QQQ/VOO core. Do not add semis while NVDA << $209, SOXX broken, and TSMC week risk is live.
- **Worth monitoring:** Hormuz blockade path / shipper fees. TSMC full earnings (~Thu Jul 16). SK Hynix post-debut unwind. Fed/rate path into July FOMC (background).
- **Interesting but not actionable yet:** Meta AI campus (META banned). SpaceX IPO momentum fading (BBC; ARKX weak). QTUM thin. Burry SOX puts (headline noise).

## Cap Math (equity $9,626.15)
- QQQ 45% cap: max $4,331.77; held $4,278.00; room **~$54** → cannot add 1 share (~$713).
- Stock 15% cap: max $1,443.92; AVGO room **~$283** (cannot add 1 @ $387); HOOD room **~$1,115** (could add but banned by thesis/anti-churn).
- Non-QQQ ETF 20%: max $1,925.23; VOO room **~$547** but 1 share ($689) would breach → **no VOO add**.
- NVDA 1 @ $204: post weight ~2.1%, well under 15% — but **not authorized**.

## Data / Process Notes
- **Audit:** OK. Gross 74.2%. Daytrades 0.
- **Event detector:** 17:35Z classification **NONE**. Held positions all OK. Sector rotation NONE. Orderly soft tape, not a crash.
- **FMP:** disabled. Yahoo Finance chart primary for multi-TF returns; Google News RSS for headlines (BBC business secondary).
- **Alpaca bars:** timestamps ~17:34Z — fresh. NVDA liquid (TradeCount 45). SOXX TradeCount 7 — acceptable but market orders still discouraged (not authorized anyway). EIS/SHLD/ARKX TradeCount 1 — illiquid.
- **No open orders / no stale GTC blockers.**
- **Tactical compliance since 16:35:** Hold-only cycles; no fills; no concealment risk.
- **Uncommitted local workspace noise** (config/prompts/src staged by other work) observed — **not staged** this cycle. Hourly only commits memory/ledger intentional updates.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power. **No leverage** unless explicitly justified.
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST API calls bypass ALL code guards** — prohibited for tactical.
- **Lock files must NOT auto-expire.** Hourly alone lifts HARD_LOCK.
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are extremely tight** (QQQ maxed at 6; VOO maxed at 2).
- **Conserve daytrades** when count is 0/3.
- **Open CRITICAL events:** hold existing if stops not hit; suspend buys until hourly reassessment — process worked today.
- **Stabilization ≠ green light:** multi-hour NONE after CRITICAL is still not enough for offensive catch-up when absolute returns are negative, NVDA under gate, and geo/TSMC risk is active.
- **Four-gate rule for NVDA adds:** QQQ structure + NVDA ≥ trigger + SOXX hold + no CRITICAL. Partial gates = no trade. **When structure deteriorates, raise bar further — do not lower gates to force a trade.**
- **On-trail stops are live:** if price is within cents of an authorized trail, tactical must execute exactly on breach — do not wait for a bigger move.

## Prior Tactical Executions (Key Events)
- **2026-07-13 13:50Z:** SOLD 2 HOOD @ $110.00 (authorized trail stop). Compliant.
- **2026-07-13 13:30Z:** CRITICAL override — no trades, buys suspended. Compliant.
- **2026-07-10:** Unauthorized META buy 4 / sell 4 same day (bypass). Daytrades 4. Account cleaned. META banned.
- **2026-07-10 09:43 ET:** SOLD 1 SOXX @ ~$569 (stop-level deviation vs $560 auth).
- **2026-07-09:** GOOG stop exit @ $348.97. SOXX buy 1 @ $589.47.
- **2026-07-06:** Full RKLB exit; bought 1 QQQ.
- **2026-06-29:** Rebuilt core QQQ/VOO/AVGO.
- **2026-06-15/23/26:** Catastrophic full liquidations / churn — primary source of underperformance.
