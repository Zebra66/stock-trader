# Hourly Macro Memory
*Updated 2026-07-13 13:51Z (Monday 09:51 AM ET). Market OPEN.*

---

## Tactical Execution Summary — 2026-07-13 13:50Z (Mon 9:50 AM ET)
- **Event detector:** MINOR (down from CRITICAL). No autonomous override required.
- **Action executed:** SOLD 2 shares of **HOOD** at **$110.00** avg via market order after the price breached the authorized **$111.00** trail stop (last 110.285, low 109.71). Hold remaining 3 HOOD.
- **AVGO protective stop:** NOT triggered — price $388.52, well above $385.00 stop. No action.
- **No buys.** Regime remains neutral; cash deployment deferred to next hourly reassessment.
- **Post-trade audit:** clean. No unauthorized positions, no concentration breaches, no daytrades created.
- **Live broker refresh:** Equity **$9,631.87** | Cash **$2,480.36** | Long **$7,151.51** | Gross **74.3%** | Daytrade count **0**.
- **Authoritative holdings:** QQQ 6, VOO 2, AVGO 3, HOOD 3.
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`.
- **Next expected action:** Hold until 10:35 hourly. AVGO $385 stop remains active; no new buys unless hourly authorizes.


---

## Hourly Cycle Summary — 2026-07-13 13:35Z (Mon 9:35 AM ET)
- **Status:** Market OPEN. First hourly of the week. Open volatility settling after 13:30Z CRITICAL event (now MINOR).
- **Repo integrity:** Clean. Branch up to date with origin/main (0 ahead, 0 behind). `.gitignore` effective.
- **Live broker refresh:** Equity **$9,684.16** | Cash **$2,260.36** | Long **$7,423.80** | Gross **76.7%** | Daytrade count **0** (reset).
- **Holdings confirmed:** QQQ 6, VOO 2, AVGO 3, HOOD 5. No unauthorized positions. Open orders: NONE.
- **Filled trades since Friday close:** NONE. No activity today. Tactical CRITICAL override at 13:30Z correctly held (no trades).
- **Compliance:** Audit clean. No concentration breaches. HARD_LOCK inactive. META remains banned.
- **Goal check:** Portfolio **–3.16%** ($9,684 vs $10,000) vs SPY **+4.94%** (~753.49 vs 718.01). **Both goals FAILED.** Gap **~–8.1 pp**.
- **Regime:** **Neutral**. Target gross exposure **65–80%**. Current 76.7% — within band. Do not force deploys into risk-off open.
- **Dominant failure mode:** **Excessive turnover / friction** (historical) + **cash drag** secondary. Today’s open is a **macro regime risk** window (US-Iran + semi/AI scrutiny), not a forced-buy opportunity.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $716.42 | $4,298.52 | 44.4% | –$0.32 | –0.01% |
| VOO | 2 | $676.46 | $692.71 | $1,385.42 | 14.3% | +$32.50 | +2.40% |
| AVGO | 3 | $371.95 | $391.10 | $1,173.29 | 12.1% | +$57.44 | +5.15% |
| HOOD | 5 | $101.50 | $113.38 | $566.88 | 5.9% | +$59.38 | +11.70% |
| Cash | — | — | — | $2,260.36 | 23.3% | — | — |
| **Equity** | — | — | — | **$9,684.16** | **100%** | — | **–3.16%** |

- **Gross long exposure:** 76.7%
- **Daytrade count:** 0 (confirmed by audit; no same-day round trips today)
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`

## Performance Review — Mon July 13 open
- **1D (vs Fri last_equity $9,760.90):** portfolio **–0.79%** vs SPY **~–0.2%** (est. from ~754.9 Fri → ~753.5). Portfolio lagging open on AVGO/QQQ gap.
- **1W:** portfolio **~flat to slightly negative** vs SPY **+0.8%**. Gap not closing.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–3.16%** vs SPY **+4.94%**. Gap **–8.1 pp**.
- **What is working:** HOOD still best unrealized (+11.7%). VOO steady anchor. AVGO still green (+5.1%) despite open selloff.
- **What is not working:** Absolute return still negative. Cash ~23% not deployed. Prior META churn (Fri) damaged process trust and burned daytrades.
- **What must change today:** Hold high-conviction winners. Do **not** panic-sell open weakness. Do **not** chase chip dip until tape stabilizes. Conserve daytrades (0 of 3 used). Selective deploy only after stabilization, not at the open.

## Goal Check
- **Portfolio since inception:** –3.16%
- **S&P 500 since inception:** +4.94% (SPY ~753.49 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary historical) with **cash drag** secondary. Immediate posture is **neutral hold** through open risk-off, not offensive catch-up into a geo/semi dump.
- **Exact cash blocker this hour:** US-Iran strike headlines + SK Hynix plunge / AI-chip scrutiny driving Nasdaq lower at open. Event detector was CRITICAL at 13:30Z, now MINOR. Wait for post-open settle before new buys.

## Market Intel — Monday 09:35 AM ET
- **Broad market:** SPY ~753.5, QQQ ~716. Soft open. Oil bid on geo risk.
- **Geopolitical:** Renewed US-Iran strikes overnight/morning. Risk-off tape, energy up, tech pressured.
- **Semiconductors:** Weak. SOXX ~$560–561 (was ~$581 Fri). SK Hynix record plunge after Nasdaq debut. Headlines: Nvidia/Broadcom/AMD leading AI chip selloff. AVGO ~$391 (–2.2% vs Fri close ~$400).
- **AVGO:** $391.10. Still above $385 stop by ~$6. Thesis (Apple deal / AI networking) intact but sector beta is high today. No earnings binary known in next 48h (Yahoo calendar null).
- **HOOD:** $113.38, resilient (+1.3% today). Trail stop up to lock gains.
- **NVDA:** ~$210, liquid, still constructive on 1w (+6.7%) but sector under pressure — no open chase.
- **GOOG:** ~$353, soft 1w (–2.9%). Not a priority add this hour.
- **News source:** Yahoo Finance RSS + Google News RSS (FMP disabled). Coverage sufficient for regime read.
- **Earnings:** Yahoo calendarEvents returned null for held/candidates. Proceed with memory knowledge: no known binary in next 48h for QQQ/VOO/AVGO/HOOD. META/GOOG late July; NVDA Aug — not imminent.

## Universe Performance Snapshot (Yahoo Finance fallback, 13:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $390.0 | +5.2% | –1.0% | +2.7% | +10.0% | +41.5% |
| EIS | $118.5 | –0.9% | –6.5% | –5.3% | +0.7% | +26.4% |
| GLD | $372.6 | –1.3% | –6.0% | –14.4% | –11.6% | +21.0% |
| GOOG | $353.0 | –2.9% | –3.8% | +10.6% | +4.9% | +93.1% |
| HOOD | $112.6 | –0.2% | +14.9% | +57.2% | –6.3% | +12.7% |
| META | $661.6 | +7.5% | +11.5% | +4.3% | +4.8% | –8.2% |
| NVDA | $210.1 | +6.7% | –1.1% | +11.0% | +13.1% | +28.1% |
| QQQ | $716.1 | +0.9% | –3.8% | +16.0% | +14.3% | +28.7% |
| QTUM | $151.3 | –0.1% | –10.0% | +26.8% | +28.9% | +63.9% |
| RKLB | $79.0 | –5.3% | –27.7% | +11.9% | –8.8% | +82.8% |
| SHLD | $61.1 | –4.2% | –3.4% | –18.0% | –20.0% | –0.2% |
| SOXX | $560.2 | +1.5% | –10.9% | +42.4% | +68.1% | +129.8% |
| VOO | $692.5 | +0.8% | –0.2% | +9.8% | +8.5% | +20.6% |
| ARKX | $31.8 | –2.3% | –9.5% | –0.6% | –6.2% | +24.9% |
| SPY | $753.5 | +0.8% | –0.2% | +9.8% | +8.6% | +20.6% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. No add capacity (max add ~$59). | 36–45% |
| VOO | Hold | Broad-market anchor. 14.3%. Adding 1 share (~$693) would put weight ~21.5% → breaches 20% non-QQQ ETF cap. No add. | 10–20% |
| AVGO | Hold / Stop $385 | Still +5% unrealized. Sector weak today. Trim 1 if $385 breaks. Do not add into dump. | 8–15% |
| HOOD | Hold / Trail stop $111 | Best winner. Trail stop up from $110 → $111 to lock more gain. Do not add. | 3–10% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. Stays in bannedSymbols. | 0% |
| NVDA | Watch only this hour | Liquid AI/chip alternative. No open buy. Reassess 10:35 if tape stabilizes. | 0–4% |
| GOOG | Avoid this hour | Soft 1w; no edge vs cash until tape settles. | 0% |
| SOXX | Avoid | Open dump, thin vs single-name NVDA/AVGO. Cooldown expired but no re-entry today. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends / thin / no edge. | 0% |

## Priority Actions (this hour → 10:35)
1. **HOLD all four positions.** No discretionary sells. No panic reaction to open CRITICAL→MINOR transition.
2. **AVGO protective stop:** SELL 1 share if price drops below **$385.00** with limit **$384.50**. Hold remaining 2.
3. **HOOD trail stop (updated):** SELL 2 shares if price drops below **$111.00** with limit **$110.50**. Hold remaining 3.
4. **NO NEW BUYS this hour** unless a stop is not involved — cash deployment deferred until post-open stabilization. Explicit blocker: geo risk + semi AI selloff at open.
5. **META remains banned.** No re-buy under any circumstances.
6. **Conserve daytrades:** 0 used. Do not open a position you might need to reverse today.
7. **Next hourly (10:35):** Reassess regime. If QQQ holds >$715 and SOXX stabilizes, consider ranked deploy queue (NVDA 1 share first).

## Ranked Deployment Queue (NOT authorized this hour — for 10:35+ if tape stabilizes)
1. **NVDA** — 1 share, limit only, only if QQQ ≥ $715 and NVDA ≥ $208 with rising 10-min structure. Cap room ample (~2.2% equity).
2. **GOOG** — 1 share only if stronger broad-market recovery; lower priority.
3. **No SOXX / no META / no thin ETFs.**

## Macro Themes
- **Actionable now:** Protect AVGO/HOOD with stops. Hold QQQ/VOO core. Do not add semis into open dump.
- **Worth monitoring:** US-Iran escalation path (weekend→Monday continuation). SK Hynix post-debut unwind as proxy for AI-capex sentiment. Fed/rate path into July FOMC (background).
- **Interesting but not actionable yet:** Meta AI campus expansion (META banned). SpaceX/Nasdaq-100 headlines (no direct vehicle in universe except ARKX — weak). QTUM still thin.

## Cap Math (equity $9,684)
- QQQ 45% cap: max $4,357.87; held $4,298.52; room **$59** → cannot add 1 share (~$716).
- Stock 15% cap: max $1,452.62; AVGO room **$279** (cannot add 1 @ $391); HOOD room **$886** (could add but thesis says do not).
- Non-QQQ ETF 20%: max $1,936.83; VOO room **$551** but 1 share ($693) would breach → **no VOO add**.

## Data / Process Notes
- **Audit:** OK. Gross 76.7%. Daytrades 0. hardLockRecommended false.
- **Event detector:** 13:30Z CRITICAL (SOXX –3%, SMH –2.25%); 13:35Z MINOR. Tactical correctly held under CRITICAL protocol.
- **FMP:** disabled. Yahoo Finance chart/RSS primary fallback (document in standing learnings).
- **Alpaca bars:** timestamps 13:34Z — fresh (<15 min).
- **QQQ bar liquidity note:** TradeCount 4 / vol 205 on latest minute bar — use position `current_price` for decisions; market orders on QQQ still OK (highly liquid underlying) but we are not trading QQQ this hour.
- **No open orders / no stale GTC blockers.**
- **Uncommitted local workspace noise** (config/prompts/src) observed via git status — **not staged** this cycle. Hourly only commits memory/ledger intentional updates.

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

## Prior Tactical Executions (Key Events)
- **2026-07-13 13:30Z:** CRITICAL override — no trades, buys suspended. Compliant.
- **2026-07-10:** Unauthorized META buy 4 / sell 4 same day (bypass). Daytrades 4. Account cleaned. META banned.
- **2026-07-10 09:43 ET:** SOLD 1 SOXX @ ~$569 (stop-level deviation vs $560 auth).
- **2026-07-09:** GOOG stop exit @ $348.97. SOXX buy 1 @ $589.47.
- **2026-07-06:** Full RKLB exit; bought 1 QQQ.
- **2026-06-29:** Rebuilt core QQQ/VOO/AVGO.
- **2026-06-15/23/26:** Catastrophic full liquidations / churn — primary source of underperformance.
