## AUTONOMOUS OVERRIDE — Tactical — 2026-07-14 13:30Z
- **Event detector classification:** CRITICAL (SOXX, GLD, SMH CRITICAL; QQQ, XLK MAJOR; SPY OK).
- **Held positions:** AVGO ~$392.40 (stop $380 — not breached), HOOD ~$112.12 (stop $108 — not breached), QQQ ~$719.87, VOO ~$689.93. No protective sells triggered.
- **Action taken:** Suspended all buy authorizations and deployment queue items. No orders placed. No new positions. Gross exposure ~69.3%.
- **Reason:** CRITICAL broad-market event detector classification on semis/precious metals/tech; default to no new buys and hold existing positions unless authorized stops breach.
- **Next expected action:** Await next hourly reset; re-assess only after event detector clears or hourly authorizes explicit protective action.

## Tactical Execution Summary — 2026-07-13 22:26Z (Monday, 6:26 PM ET)
- **Status:** Market CLOSED. Event detector: NONE.
- **Orders placed:** NONE. No after-hours trading permitted.
- **Live broker refresh (authoritative):**
  - **Equity:** $9,605.20 | **Cash:** $2,974.71 | **Long market value:** $6,631.44
  - **Gross exposure:** 69.0%
  - **Daytrade count:** 0/3
- **Current holdings confirmed live:** QQQ 6 ($4,266.54), VOO 2 ($1,375.76), AVGO 2 ($768.86), HOOD 2 ($218.92)
- **Stop check:** AVGO $384.43 (> $380.00 ✓). HOOD $109.46 (> $108.00 ✓). No stops breached.
- **Book reconciliation:** Matches 19:35Z hourly directive exactly. All regular-session trades (AVGO 1-share stop, HOOD 3-share trim) were already executed and recorded.
- **Next expected action:** Tuesday 2026-07-14 09:30 ET market open. Default to HOLD with AVGO $380 trail and HOOD $108 trail until fresh hourly guidance arrives.

---

# Hourly Macro Memory
*Updated 2026-07-13 19:35Z (Monday 3:35 PM ET). Final hourly of session. Market OPEN → close ~20:00Z.*

---

## Hourly Cycle Summary — 2026-07-13 19:35Z (Mon 3:35 PM ET)
- **Status:** Market OPEN (soft close). Seventh/final hourly of the week. Event detector **NONE**.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective. Only dirty file: `memory/tactical_last_prices.json` (tactical artifact — not staged).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **69.0%**. Daytrades **0**. hardLockRecommended false. `pdtLimitReached` false.
- **Live broker:** Equity **$9,605.20** | Cash **$2,974.71** | Long **$6,631.44** | Gross **69.0%** | BP ~$30.5k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 2, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Filled since prior hourly (18:35Z):** SOLD **1 AVGO** @ **$385.02** (19:30Z, limit $384.50) — authorized $385 stop. Documented in todo. **No concealment.**
- **Other today fills (authorized):** HOOD 2 @ $110.00 (13:50Z); HOOD 1 @ $109.33 (17:40Z).
- **Compliance:** META remains banned. HARD_LOCK inactive. No universe breaches. No race-condition drift.
- **Goal check:** Portfolio **–3.95%** vs SPY **+4.25%** (SPY ~748.4 vs 718.01). **Both goals FAILED.** Gap **~–8.2 pp**.
- **Regime:** **Neutral.** Target gross **65–80%**. Live 69.0% — **inside band**.
- **Dominant failure mode:** **Excessive turnover / friction** (historical) + **cash drag** secondary. Immediate issue = **macro/sector risk** (Hormuz blockade + oil spike + soft tech/semis + TSMC week) — do **not** force deploys into close.
- **NVDA four-gate (final session check):** QQQ ≥ $716 **FAIL** (~711) | NVDA ≥ $209 firm **FAIL** (~$204.0) | SOXX ≥ $562 **FAIL** (~$552–553) | no CRITICAL **PASS**. **1/4 → NO NVDA authorization.** No path to offensive add into close.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $710.97 | $4,265.79 | 44.4% | –$33.05 | –0.77% |
| VOO | 2 | $676.46 | $688.03 | $1,376.05 | 14.3% | +$23.13 | +1.71% |
| AVGO | 2 | $371.95 | $385.54 | $771.08 | 8.0% | +$27.18 | +3.65% |
| HOOD | 2 | $101.50 | $109.26 | $218.52 | 2.3% | +$15.52 | +7.65% |
| Cash | — | — | — | $2,974.71 | 31.0% | — | — |
| **Equity** | — | — | — | **$9,605.20** | **100%** | — | **–3.95%** |

- **Gross long exposure:** 69.0%
- **Daytrade count:** 0 (audit + order history)
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift since 18:35Z:** 73.1% → 69.0% (authorized AVGO 1-share stop) — **no unauthorized drift**

## Performance Review — Mon July 13 close approach
- **1D (vs Fri last_equity $9,760.90):** portfolio **~–1.6%** vs SPY soft (~–0.4% day context). Tech/semis underperform on geo + chip tape.
- **1W:** SPY ~flat (+0.1%); portfolio still lagging absolute and relative since inception.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **–3.95%** vs SPY **+4.25%**. Gap **–8.2 pp**.
- **What is working:** Process discipline (authorized HOOD/AVGO stops only; no chase; no unauthorized fills). Remaining HOOD ~+7.7% unrealized. Remaining AVGO ~+3.7% after protective trim. VOO steady anchor. Gross kept inside 65–80% band all afternoon.
- **What is not working:** Absolute still red and worsened on the day. Cash ~31% idle. Chip beta broken (SOXX 1m ~–12.1%). Gap to SPY not closing. Cannot add QQQ (cap) or VOO (1-share would breach 20%).
- **What must change into close / tomorrow open:** Stay disciplined. Protect remaining winners with stops. **Do not force NVDA/GOOG** while structure gates fail and Hormuz/TSMC risk is live. Rebuild edge only when structure + risk premium reappear — not by lowering gates.

## Goal Check
- **Portfolio since inception:** –3.95%
- **S&P 500 since inception:** +4.25% (SPY ~748.4 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Excessive turnover / friction** (primary historical) with **cash drag** secondary. Immediate posture is **neutral hold** — not offensive catch-up into geo/semi pressure into the close.
- **Exact cash blocker this hour:** Live headline tape still shows Trump reimposing Hormuz blockade / shipper fees; oil bid; US-Iran tension; tech/semis soft into close; **TSMC full earnings ~this week (Thu Jul 16)** elevates sector event risk. NVDA four-gate **1/4 fail**. **No edge after friction for a forced 1-share add into the final 25 minutes.**

## Market Intel — Monday 3:35 PM ET
- **Broad market:** SPY ~748.4, QQQ ~711. Soft close; oil bid / tech soft regime intact. Event severity NONE (orderly, not a crash).
- **Geopolitical:** Dominant headline still live — US reinstating Strait of Hormuz blockade; oil jumps; ceasefire language disintegrated. Multiple news feeds confirm (Bing News RSS).
- **Semiconductors:** Soft. NVDA ~$204, SOXX ~$552–553. TSMC June revenue positive but **full earnings ~Thu Jul 16** = binary sector event — do not pre-position chip beta with thin edge into close.
- **AVGO:** Remaining 2 after authorized stop trim @ $385.02. Live ~$385.5. Unrealized ~+3.7%. New overnight protective trail authorized at **$380.00** for 1 of 2.
- **HOOD:** Remaining 2 after three authorized sells today (2 @ $110 + 1 @ $109.33). Live ~$109.3. Unrealized ~+7.7%. Protective trail **$108.00** remains for 1 of 2.
- **NVDA:** ~$204, liquid. Well below $209 gate. **Not authorized.**
- **GOOG:** ~$351, soft 1w (~–3.5%). No edge.
- **News source:** Bing News RSS primary this cycle (Google News RSS returned empty). FMP disabled — Yahoo chart fallback for multi-timeframe returns (documented).
- **Earnings:** No known binary in next 48h for QQQ/VOO/AVGO/HOOD. META/GOOG late July; NVDA Aug; **TSMC ~Thu Jul 16** is the sector event for AVGO/NVDA/SOXX beta.

## Universe Performance Snapshot (Yahoo Finance fallback, 19:35Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $385.3 | +3.9% | –2.2% | +1.5% | +8.7% | +39.8% |
| EIS | $118.1 | –1.3% | –6.8% | –5.6% | +0.3% | +25.9% |
| GLD | $366.7 | –2.9% | –7.5% | –15.8% | –13.0% | +19.0% |
| GOOG | $350.9 | –3.5% | –4.4% | +9.9% | +4.3% | +92.0% |
| HOOD | $109.2 | –3.3% | +11.3% | +52.4% | –9.2% | +9.2% |
| META | $658.2 | +6.9% | +10.9% | +3.7% | +4.3% | –8.7% |
| NVDA | $204.0 | +3.6% | –4.0% | +7.8% | +9.8% | +24.4% |
| QQQ | $710.6 | +0.2% | –4.5% | +15.1% | +13.5% | +27.8% |
| QTUM | $148.5 | –1.9% | –11.6% | +24.5% | +26.6% | +60.9% |
| RKLB | $76.1 | –8.8% | –30.3% | +7.8% | –12.1% | +76.1% |
| SHLD | $60.3 | –5.5% | –4.7% | –19.1% | –21.0% | –1.5% |
| SOXX | $552.4 | +0.1% | –12.1% | +40.4% | +65.7% | +126.6% |
| VOO | $687.8 | +0.1% | –0.9% | +9.0% | +7.8% | +19.8% |
| ARKX | $31.2 | –4.3% | –11.3% | –2.7% | –8.1% | +22.4% |
| SPY | $748.4 | +0.1% | –0.9% | +9.1% | +7.9% | +19.8% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. Room ~$57 — cannot add 1 share. | 36–45% |
| VOO | Hold | Broad-market anchor. 14.3%. 1 share (~$688) would breach 20% non-QQQ ETF cap. | 10–20% |
| AVGO | Hold / Trail $380 | +3.7% unrealized after 1-share stop. New trail protects overnight geo/semi risk. No add. 24h re-buy cooldown active. | 6–12% |
| HOOD | Hold / Trail $108.00 | Remaining 2 after authorized trims. ~+7.7% unrealized. Trail protects soft-close risk. No re-buy today. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. Stays in bannedSymbols. | 0% |
| NVDA | Watch only — gate FAIL | ~$204 << $209; SOXX broken; QQQ soft; TSMC week. Reassess Tue open. | 0–4% |
| GOOG | Avoid into close / Tue open | Soft 1w; no edge vs cash. | 0% |
| SOXX | Avoid | Soft 1m (~–12.1%); thin vs NVDA; TSMC risk. No re-entry. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends / thin / no edge. | 0% |

## Priority Actions (this hour → close + overnight)
1. **HOLD all four positions** unless an authorized stop is breached. No panic. No discretionary sells.
2. **AVGO overnight trail (new for remaining 2):** SELL **1** share if price drops **below $380.00** with **limit $379.50**. Hold remaining 1 after any trigger. **Do NOT re-buy AVGO within 24h** of today's sell.
3. **HOOD trail (unchanged for remaining 2):** SELL **1** share if price drops **below $108.00** with **limit $107.50**. Hold remaining 1 after any trigger. No re-buy today.
4. **NO NEW BUYS into close or after-hours.** Cash deployment deferred. Explicit blocker: Hormuz blockade + oil spike + NVDA four-gate 1/4 + TSMC week sector risk + final 25 min of session.
5. **META remains banned.** No re-buy under any circumstances.
6. **Conserve daytrades:** 0 used. HOOD and AVGO sold today → **cannot re-buy either today** (anti-churn). Do not open a position you might need to reverse today.
7. **Next session (Tue open / first hourly ~9:35 ET):** Reassess NVDA only if (a) QQQ ≥ $716, (b) NVDA ≥ $209 with firm 10-min structure, (c) SOXX holding ≥ $562, and (d) no new CRITICAL geo escalation. Same four gates — currently **none** of a–c are close. Do **not** lower gates overnight.

## Ranked Deployment Queue (NOT authorized into close — for later only if conditions met)
1. **NVDA** — 1 share, **limit only** ≤ $209.50, only if all four gates pass at a live regular-session hourly. Cap room ample (~2.1% equity). Post-buy gross ~71% still inside 65–80%.
2. **GOOG** — 1 share only on stronger broad recovery; lower priority.
3. **No SOXX / no META / no thin ETFs / no HOOD or AVGO re-buy while cooldowns/anti-churn apply.**

## Macro Themes
- **Actionable now:** Protect remaining AVGO with $380 trail. Protect remaining HOOD with $108 trail. Hold QQQ/VOO core. Do not add semis while NVDA << $209, SOXX broken, and TSMC week risk is live.
- **Worth monitoring:** Hormuz blockade path / oil spike durability overnight. TSMC full earnings (~Thu Jul 16). SK Hynix post-debut unwind. Fed/rate path into July FOMC (background).
- **Interesting but not actionable yet:** Meta AI campus (META banned). SpaceX IPO momentum fading (ARKX weak). QTUM thin. Nvidia AI spend narrative without price confirmation.

## Cap Math (equity $9,605.20)
- QQQ 45% cap: max $4,322.34; held $4,265.79; room **~$57** → cannot add 1 share (~$711).
- Stock 15% cap: max $1,440.78; AVGO room **~$670** (could add 1 but **cooldown + thesis block**); HOOD room **~$1,222** (anti-churn + thesis block).
- Non-QQQ ETF 20%: max $1,921.04; VOO room **~$545** but 1 share ($688) would breach → **no VOO add**.
- NVDA 1 @ $204: post weight ~2.1%, well under 15% — but **not authorized**.

## Data / Process Notes
- **Audit:** OK. Gross 69.0%. Daytrades 0.
- **Event detector:** 19:35Z classification **NONE**. Held positions all OK. Sector rotation NONE. Orderly soft tape, not a crash.
- **FMP:** disabled. Yahoo Finance chart primary for multi-TF returns; Bing News RSS for headlines this cycle (Google News RSS empty).
- **Alpaca bars:** timestamps ~19:34Z — fresh. NVDA liquid (TradeCount 129). SOXX TradeCount 13 — OK for limits if ever authorized. EIS/SHLD/ARKX/QTUM illiquid.
- **No open orders / no stale GTC blockers.**
- **Tactical compliance since 18:35:** Executed authorized AVGO 1-share stop only; documented in todo. No concealment risk.
- **tactical_last_prices.json** dirty in working tree — leave unstaged (ephemeral tactical state).

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
- **End-of-day rule:** into the final 30 minutes, prefer hold + protective trails over new risk; do not open positions that may need same-day reverse.

## Prior Tactical Executions (Key Events)
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized $385 stop). Compliant.
- **2026-07-13 17:40Z:** SOLD 1 HOOD @ $109.33 (authorized trail stop). Compliant.
- **2026-07-13 13:50Z:** SOLD 2 HOOD @ $110.00 (authorized trail stop). Compliant.
- **2026-07-13 13:30Z:** CRITICAL override — no trades, buys suspended. Compliant.
- **2026-07-10:** Unauthorized META buy 4 / sell 4 same day (bypass). Daytrades 4. Account cleaned. META banned.
- **2026-07-10 09:43 ET:** SOLD 1 SOXX @ ~$569 (stop-level deviation vs $560 auth).
- **2026-07-09:** GOOG stop exit @ $348.97. SOXX buy 1 @ $589.47.
- **2026-07-06:** Full RKLB exit; bought 1 QQQ.
- **2026-06-29:** Rebuilt core QQQ/VOO/AVGO.
- **2026-06-15/23/26:** Catastrophic full liquidations / churn — primary source of underperformance.
