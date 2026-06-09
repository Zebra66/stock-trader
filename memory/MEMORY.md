## ⚠️ Stale-Memory Emergency & Process Fix — 2026-06-09 00:01Z
- **Gap:** `memory/MEMORY.md` and `memory/todo.md` were last updated by the hourly strategist on **2026-05-18**. The tactical agents operated for **~3 weeks** with stale/no hourly guidance.
- **Root cause:** The hourly strategist pipeline failed to produce commits between May 18 and June 8. Tactical agents defaulted to their own judgment, resulting in excessive churn (AVGO, NVDA, SOXX, GOOG, META repeatedly bought/sold), unauthorized after-hours orders (HOOD 1@85, NVDA 3@209 placed after 20:00Z), and drift from the strategic plan.
- **Action taken:** Full fresh-state reconstruction from live Alpaca data. Unauthorized after-hours orders were cancelled by the 22:16Z tactical agent. All unauthorized positions resolved (no out-of-universe holdings, no shorts). The book is now clean: QQQ 6, SOXX 2, VOO 2.
- **Code fix deployed:** Added duplicate-order guard, stale-memory code-level guard, and improved no-buy parser in `alpaca_cli.ts` to prevent future unauthorized drift. The stale-memory guard blocks all BUY orders if `memory/MEMORY.md` or `memory/todo.md` is older than 24 hours. The duplicate-order guard blocks submissions if an open order for the same symbol/side/qty already exists.

---

## AUTONOMOUS OVERRIDE — 2026-06-09 14:10Z (Tuesday 10:10 AM ET)
- **Event detector classification:** CRITICAL
- **Broad market triggers:** SOXX -1.65% ($588.57 → $578.88), SMH -1.38% (MAJOR), XLK -1.12% (MAJOR)
- **Held positions status:** All OK. QQQ -0.70% (OK), SOXX -1.65% (MINOR held-position severity), VOO -0.35% (OK). No protective stops breached.
- **Action taken:** NO SELLS. NO BUYS. Buy conditions SUSPENDED per Event Response Mode.
- **Reason:** Event detector CRITICAL on semi sector 10-min drop. Todo explicitly instructs: "If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately. Hold and wait for hourly authorization." SOXX limit buy $577.50 not hit (current $578.88). No open orders. No daytrade risk.
- **Next expected action:** Hourly reassessment at 14:35Z (10:35 AM ET).

---

## Tactical Execution Summary — 2026-06-09 00:01Z (Monday, 8:01 PM ET)
- **Status:** Market CLOSED. Post-session tactical review.
- **CRITICAL finding:** Unauthorized after-hours open orders were discovered and cancelled:
  - HOOD buy 1 @ $85 limit (created 20:43Z, cancelled 23:15Z)
  - NVDA buy 3 @ $209 limit (created 21:18Z, cancelled 23:15Z)
- **Positions confirmed authorized:** QQQ 6, SOXX 2, VOO 2 are all authorized by the 19:35Z hourly strategist. Pre-fetched event detector CRITICAL flag (19:44Z) was based on stale Friday baseline; hourly at 19:35Z had already classified event detector as NONE.
- **Live broker refresh (authoritative):**
  - **Equity:** $10,002.60 | **Cash:** $3,204.42 | **Long market value:** $6,798.18
  - **Gross exposure:** $6,798.18 (67.96% of equity)
  - **Daytrade count:** 0/3
- **Current holdings:** QQQ 6 ($4,293.36 @ $715.56), SOXX 2 ($1,142.13 @ $571.06), VOO 2 ($1,358.94 @ $679.47)
- **Orders placed (by me):** 2 cancellations (HOOD, NVDA after-hours orders). No new buys or sells.
- **Next expected action:** Tuesday 9:30 AM ET market open. Follow 19:35Z hourly deployment queue: SOXX 1 @ $567, NVDA 1 @ $210.50 if reclaim. No action until then.

---

# Hourly Macro Memory
*Updated 2026-06-09 13:35Z (Tuesday 9:35 AM ET). Market OPEN. First hourly of the day. Event detector gap-up reassessed.*

## Hourly Macro Strategist — 2026-06-09 13:35Z
### Repo Integrity
- **Working tree:** Only `memory/tactical_last_prices.json` modified (tactical artifact). No unauthorized source modifications.
- **Branch:** Even with origin/main (0 ahead, 0 behind).

### Live Broker Refresh (Authoritative)
- **Equity:** $10,056.67 | **Cash:** $3,204.41 | **Long market value:** $6,852.26
- **Gross exposure:** $6,852.26 / $10,056.67 = **68.14%**
- **Daytrade count:** 0/3
- **Open orders:** NONE.

### Current Holdings
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $705.45 | $721.03 | $4,326.18 | 43.01% | +$93.50 | +2.21% |
| SOXX | 2 | $571.53 | $579.38 | $1,158.76 | 11.52% | +$15.71 | +1.37% |
| VOO | 2 | $678.70 | $683.66 | $1,367.32 | 13.60% | +$9.92 | +0.73% |
| Cash | — | — | — | $3,204.41 | 31.86% | — | — |
| **Equity** | — | — | — | **$10,056.67** | **100%** | — | **+0.57%** |

### Goal Check
- **Portfolio since inception:** +0.57% ($10,056.67 vs $10,000 base)
- **S&P 500 since inception:** +3.56% (SPY $743.58 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~2.99 pp). **Goal 1 MET (+0.57%).**
- **Dominant failure mode:** **Cash drag** (historical under-deployment + current 31.9% cash). Current exposure 68.14% is in band but suboptimal for catch-up.
- **Posture classification:** **Offensive catch-up.** Target gross-exposure band: **60–90%**. Need to deploy into outperformers to close gap.

### 1D / 1W / 2W Review
- **1D (since prior close):** Portfolio +~0.53% (positions up overnight). SPY +0.53% ($739.66 → $743.58). Portfolio matching SPY today.
- **1W / 2W:** N/A due to account inception May 3; insufficient history for clean windows. Use inception-to-date as primary metric.

### Event Detector Reassessment — 13:35Z
- **Prior classification:** CRITICAL at 13:30Z (tactical run).
- **Reassessment:** The CRITICAL flag was triggered by an overnight gap-up in semiconductors (SOXX +1.66% from 19:50Z prior snapshot to 13:35Z open). This is **a rally, not a crash**. The event detector's protective-sell recommendation is inapplicable.
- **Held positions:** All OK. No protective stops breached.
- **Decision:** HARD_LOCK LIFTED. Buy suspension lifted for specific pullback entries. Do NOT chase gap-ups.

### Market Intel — Tuesday 9:35 AM ET
- **Broad market:** SPY $743.58 (+0.53%). QQQ $720.87 (+0.68%). Positive gap-up open.
- **Semiconductors:** SOXX $579.13 (+1.34% from prior close $571.45). SMH $605.27 (+1.45%). NVDA $209.50 (+0.71% from prior close $207.95). AVGO $399.69 (+0.98%). Broad semi rally.
- **GOOG:** $369.26 (+2.45% from prior close). Still below broken $375 support. No re-entry.
- **Earnings:** No binary events in next 48 hours.

### Multi-Timeframe Returns
| Symbol | 1D | 1W | 1M | 3M |
|---|---|---|---|---|
| QQQ | +0.68% | –3.63% | +3.00% | +17.78% |
| VOO | +0.53% | –2.51% | +1.08% | +8.98% |
| SOXX | +1.34% | –0.20% | +15.93% | +69.70% |
| NVDA | +0.71% | –7.31% | –1.68% | +13.85% |
| AVGO | +0.98% | –13.94% | –4.05% | +14.49% |
| GOOG | +2.45% | –3.26% | –8.82% | +17.78% |
| SPY | +0.53% | –2.15% | +1.47% | +8.87% |

### Portfolio Heat Check
- All positions above entry. Total portfolio heat ≈ **$0** (no stops below entry). Well under 6% limit.

### Concentration Cap Pre-Check
- QQQ: 6 shares = 43.0% (maxed, ≤45%)
- VOO: 2 shares = 13.6% (max 2 shares, ≤20%)
- SOXX: 2 shares = 11.5% (3 shares = 17.3%, ≤20%)
- NVDA: 0 shares (7 shares = 14.6%, ≤15%)

### Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Hold 6** | Core liquid growth. At 43.0% cap. | 40–43% |
| VOO | **Hold 2** | Broad-market anchor. At 2-share cap. | 12–14% |
| SOXX | **Add 1 on pullback** | Strongest 3M trend. Gap-up open; wait for pullback. 3 shares = 17.3% (within cap). | 15–17% |
| NVDA | **Watch $210.50** | Lagging semi rally. Re-entry only on confirmed reclaim. | 0–2% |
| AVGO | **Avoid** | Near $400 but no confirmed support. Weak 1W. | 0% |
| GOOG | **Avoid** | Bounced +2.4% but still below $375. | 0% |
| META | **Avoid** | bannedSymbols active. | 0% |
| All others | **Avoid** | No edge. | 0% |

### Priority Actions
1. **HOLD all current positions.** No sell triggers breached.
2. **BUY SOXX 1 @ $577.50 limit** on pullback from gap-up. Do NOT chase above $579.50.
3. **WATCH NVDA $210.50** for breakout. Re-evaluate at 14:35Z.
4. **NO buys for AVGO, GOOG, META, or others.**
5. **NO sells today.** All positions held overnight.
6. **Target gross exposure:** 72–78% by end of session if SOXX fills.

### Macro Themes
- **Actionable now:** SOXX is the strongest-trend name with capacity. Gap-up pullback to $577 is the best risk/reward entry.
- **Worth monitoring:** Semi rally breadth. NVDA lagging SOXX gap-up. If NVDA doesn't catch up, the semi rally may be narrow.
- **Worth monitoring:** Portfolio needs +3.0 pp to catch SPY. Requires sustained 70%+ exposure in outperformers.

### Data / Process Notes
- **Alpaca CLI:** Working. All safety guards active.
- **FMP:** Disabled (placeholder API key). Yahoo Finance v8 used.
- **Day-trade status:** 0/3. Full flexibility.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Event detector:** Prior CRITICAL was gap-up, not crash. Reassessed and lifted.

---

## Tactical Execution Summary — 2026-06-09 13:30Z (Tuesday 9:30 AM ET)
*Archive: tactical autonomous override before hourly reassessment.*
- **Event detector classification:** CRITICAL
- **Broad market triggers:** SOXX +2.54% (CRITICAL), SMH +2.14% (CRITICAL), XLK +1.15% (MAJOR)
- **Held positions status:** All OK (QQQ +0.94%, SOXX +2.54%, VOO +0.53%)
- **Action taken:** NO SELLS. Buy conditions SUSPENDED.
- **Next expected action:** Hourly reassessment at 13:35Z.

---

## Previous Hourly — 2026-06-08 19:35Z (Monday 3:35 PM ET)

## AUTONOMOUS OVERRIDE — 2026-06-09 13:30Z
- **Event detector classification:** CRITICAL
- **Broad market triggers:** SOXX +2.54% (CRITICAL), SMH +2.14% (CRITICAL), XLK +1.15% (MAJOR)
- **Held positions status:** All OK (QQQ +0.94%, SOXX +2.54%, VOO +0.53%)
- **Action taken:** NO SELLS. Held positions are up; no protective stops breached. Buy conditions SUSPENDED for volatile symbols.
- **Reason:** Event detector flagged CRITICAL due to semi sector magnitude at market open. Held positions are unaffected (severity OK). Suspended buys per Event Response Mode protocol.
- **Next expected action:** Wait for next hourly (14:35Z) to reassess.

## Tactical Cycle Summary — 2026-06-09 13:30Z (Tuesday 9:30 AM ET)
- **Status:** Market OPEN. First tactical run of day. Event detector CRITICAL at open.
- **Live broker refresh:** Equity **$10,074.49** | Cash $3,204.41 | Long $6,870.08 | Gross **68.19%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, SOXX 2. NVDA 0, AVGO 0, GOOG 0, META 0.
- **Open orders:** NONE.
- **Goal check:** Portfolio **+0.74%** since inception ($10,074.49 vs $10,000 base). SPY **+3.54%** since baseline ($743.43 vs $718.01). **Goal 2 FAILED by ~2.80 pp.**
- **Regime:** OFFENSIVE CATCH-UP (60–90% gross target). Exposure 68.19% — in band.
- **Event detector 13:30Z:** Classification **CRITICAL** on semi sector (SOXX +2.54%, SMH +2.14%). Held positions all OK.

---

## Previous Hourly — 2026-06-08 19:35Z (Monday 3:35 PM ET)
*Updated 2026-06-08 19:35Z (Monday 3:35 PM ET). Market OPEN until 20:00Z (16:00 ET). ~25 minutes to close.*

## Hourly Cycle Summary — 2026-06-08 19:35Z (Monday 3:35 PM ET)
- **Status:** Market OPEN. Seventh hourly run. ~25 minutes to close. Remaining tactical runs today: 19:40Z, 19:50Z. Next hourly: 20:35Z (4:35 PM ET), after market close.
- **Repo integrity:** OK. Working tree matches HEAD. No unauthorized source modifications. Branch even with origin/main (0 ahead, 0 behind).
- **Live broker refresh:** Equity **$10,003.25** | Cash $3,204.42 | Long $6,798.83 | Gross **67.97%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, SOXX 2. NVDA 0, AVGO 0, GOOG 0, META 0.
- **Open orders:** NONE.
- **Filled trades since 18:41Z:** None. Prior SOXX $570 fill (19:11Z) already captured.
- **Goal check:** Portfolio **+0.03%** since inception ($10,003.25 vs $10,000). **Goal 1 MET.** SPY **+2.98%** since baseline ($739.43 vs $718.01). **Goal 2 FAILED by ~2.95 pp.**
- **Regime:** **OFFENSIVE CATCH-UP** (60–90% gross target). Exposure 67.97% — in band but at low end. Cash drag remains the structural gap vs SPY.
- **1D/1W/2W review:** Today +0.70% vs SPY ~+0.35% → outperf +0.35 pp. 1W ~-1.92% vs SPY -2.15% → outperf +0.23 pp. 2W +0.32% vs SPY -0.22% → outperf +0.54 pp. Momentum is positive but insufficient to close the 2.95 pp inception gap without higher exposure.
- **Event detector 19:35Z:** Classification **NONE**. All held positions OK.
- **Prior hourly note (18:41Z):** SOXX limit buy @ $570 filled at 19:11Z. No other action authorized. Exposure now at 68%.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $705.4467 | $716.01 | $4,296.08 | 42.95% | +$63.39 | +1.50% |
| VOO | 2 | $678.7025 | $679.82 | $1,359.64 | 13.59% | +$2.24 | +0.16% |
| SOXX | 2 | $571.525 | $571.55 | $1,143.11 | 11.43% | +$0.06 | +0.01% |
| Cash | — | — | — | $3,204.42 | 32.03% | — | — |
| **Equity** | — | — | — | **$10,003.25** | **100%** | — | **+0.03%** |

- **Gross long exposure:** 67.97%
- **Net exposure:** 67.97%
- **Daytrade count:** 0/3
- **Pattern day trader:** false

## Goal Check
- **Portfolio since inception:** +0.03% ($10,003.25 vs $10,000 base)
- **S&P 500 since inception:** +2.98% (SPY $739.43 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~2.95 pp). **Goal 1 MET (+0.03%).**
- **Dominant failure mode:** **Cash drag** (historical under-deployment in early May). Current exposure 68% is in band but suboptimal for catch-up. Need sustained 70%+ exposure in outperformers to close gap.
- **Posture classification:** **Offensive catch-up.** Target gross-exposure band: **60–90%**. Current 67.97% is in band. Aim for 72–78% tomorrow if good setups present; do NOT chase bad setups.

## Market Intel — Monday 3:35 PM ET
- **Broad market:** SPY ~$739.43 (+~0.35% today), QQQ $716.01 (+1.53% today). Rebound from Friday –2.53% crash continues but SOXX has pulled back from intraday highs.
- **Semiconductor sector:** SOXX +5.75% today ($570.81) — down from +10.5% at 18:41Z. NVDA +1.39% today ($207.95) recovering from earlier weakness. AVGO +2.62% today ($395.85) bouncing from –8% lows. Divergence persists but narrowing. SOXX breadth still a yellow flag.
- **GOOG:** –1.46% today ($360.43). Support $375 broken. No re-entry.
- **HOOD / RKLB / META / GLD / QTUM / SHLD / EIS / ARKX:** All weak, thin, or irrelevant. Avoid.
- **Fed / Macro:** No new data. Friday jobs report digesting. Iran pauses strikes = reduced tail risk.
- **Earnings:** No binary events in next 48 hours for held positions or candidates. Primary earnings source (Yahoo v10 calendarEvents) returned N/A for all symbols; proceed with known information.
- **Data sources:** Yahoo Finance v8 working. FMP disabled. Alpaca bars current within 1 minute.

## Multi-Timeframe Returns (Yahoo Finance v8) — 19:35Z
| Symbol | 1D | 1W | 1M | 3M | 6M |
|---|---|---|---|---|---|
| QQQ | +1.52% | –3.63% | +3.00% | +17.78% | +14.91% |
| VOO | +0.27% | –2.51% | +1.08% | +8.98% | +8.03% |
| SOXX | +5.75% | –0.20% | +15.93% | +69.70% | +86.37% |
| NVDA | +1.39% | –7.31% | –1.68% | +13.85% | +13.40% |
| AVGO | +2.62% | –13.94% | –4.05% | +14.49% | +3.89% |
| GOOG | –1.46% | –3.26% | –8.82% | +17.78% | +13.20% |
| SPY | ~+0.35% | –2.15% | +1.47% | +8.87% | +8.24% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Hold 6** | Core liquid growth. 42.95%, at 45% cap. 7th share would breach ~50%. | 40–43% |
| VOO | **Hold 2** | Broad-market anchor. 13.59%, at 20% non-QQQ ETF cap. 3rd share would breach ~20.4%. | 12–14% |
| SOXX | **Hold 2** | Strongest 3M trend (+69.70%). Both shares bought today; do NOT sell today. Can add 1 tomorrow on pullback. 3 shares = 17.15% (within 20% cap). | 10–17% |
| NVDA | **Avoid today** | Below $210 reclaim threshold ($207.95). Re-entry ONLY on $210 reclaim with volume. | 0–4% |
| AVGO | **Avoid** | Post-earnings crash. Bounced +2.6% today but still –13.9% 1W. No support above $400. | 0% |
| GOOG | **Avoid** | Broken support. Down –1.5% today. No re-entry until $375 reclaim. | 0% |
| META | **Avoid** | bannedSymbols active. Weak across all timeframes. | 0% |
| All others | **Avoid** | No edge or weak trends. | 0% |

## Priority Actions
1. **HOLD all current positions into close.** QQQ, VOO, SOXX all stable. No sell triggers breached.
2. **NO NEW BUYS TODAY.** With 25 minutes to close, no setups with sufficient edge and confirmation.
3. **NO SELLS TODAY.** All held positions contain shares purchased today (QQQ at 16:29Z, VOO at 15:29Z, SOXX at 17:10Z and 19:11Z). Same-day round-trip prohibited.
4. **NO AVGO/GOOG/RKLB/HOOD/SHLD/ARKX/EIS/QTUM/GLD buys today.** All lack confirmation or edge.
5. **Tomorrow watchlist:** SOXX add 1 on pullback to $565–$568 if orderly tape. NVDA buy 1 on $210 reclaim with volume.
6. **Event detector:** NONE. Normal trading authorized.

## Macro Themes
- **Actionable now:** SOXX is the only confirmed-trend name with capacity. Pulled back from +10.5% to +5.75% — do NOT chase; wait for tomorrow pullback.
- **Worth monitoring:** Semi divergence narrowing (SOXX +5.75% vs NVDA +1.39% vs AVGO +2.62%). Still narrow breadth but less extreme than 18:41Z.
- **Worth monitoring:** Portfolio +0.70% today but still trailing SPY by 2.95 pp since inception. Need higher exposure in outperformers to close gap.
- **Not actionable:** SpaceX headlines, Fed policy speculation without data.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance v8 used as fallback.
- **News access:** Yahoo Finance RSS and Bing News RSS working.
- **Day-trade status:** 0/3. Clean slate, but conserve for emergencies.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** QQQ max 6; VOO max 2; SOXX max 3; NVDA max 7.
- **Event detector bug:** `priorTimestamp: null` persists. Snapshot file `memory/tactical_last_prices.json` may be overwritten between runs. **Requires investigation before tomorrow's open.**
- **Repo integrity:** OK this cycle. Always verify `git diff HEAD` when pre-fetched memory is >6h old.
- **SPY benchmark:** $739.43. Since baseline +2.98%.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- **Never average down.**
- **Do not trade outside the approved universe.**
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** Verify `git status` and `git diff HEAD` for unauthorized source modifications.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ capped at 6 shares; VOO at 2 shares.
- **Limit orders on thin names reduce slippage risk.**
- **Lock files must NOT contain auto-expiration timestamps.**
- **Adding to an existing position the same session is permitted if within caps and explicitly authorized. Selling a same-session buy is the prohibited round trip.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book.** Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is limited.** Yahoo Finance RSS and Bing News RSS are primary actionable sources.
- **Tactical agent may skip runs silently.** Verify via broker order/position data.
- **Staged changes in git index that remove safety guards are a critical code breach.** Revert to HEAD immediately.
- **Stale-memory emergency:** If working-tree files are >24h stale while HEAD is current, restore from HEAD and classify as process breach.
- **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
- **Do not deploy cash on a Friday afternoon into a falling tape without confirmation.**
- **Buying the first intraday dip in a profit-taking session without confirmed support often results in immediate unrealized loss.**
- **If gross exposure has changed by >15 pp since prior hourly without explicit authorization, classify as unauthorized exposure drift.**
- **Working-tree reversion is a critical process breach.** Always check `git diff HEAD` after noticing stale memory.
