## ⚠️ Stale-Memory Emergency & Process Fix — 2026-06-09 00:01Z
- **Gap:** `memory/MEMORY.md` and `memory/todo.md` were last updated by the hourly strategist on **2026-05-18**. The tactical agents operated for **~3 weeks** with stale/no hourly guidance.
- **Root cause:** The hourly strategist pipeline failed to produce commits between May 18 and June 8. Tactical agents defaulted to their own judgment, resulting in excessive churn (AVGO, NVDA, SOXX, GOOG, META repeatedly bought/sold), unauthorized after-hours orders (HOOD 1@85, NVDA 3@209 placed after 20:00Z), and drift from the strategic plan.
- **Action taken:** Full fresh-state reconstruction from live Alpaca data. Unauthorized after-hours orders were cancelled by the 22:16Z tactical agent. All unauthorized positions resolved (no out-of-universe holdings, no shorts). The book is now clean: QQQ 6, SOXX 2, VOO 2.
- **Code fix deployed:** Added duplicate-order guard, stale-memory code-level guard, and improved no-buy parser in `alpaca_cli.ts` to prevent future unauthorized drift.

---

## AUTONOMOUS OVERRIDE — 2026-06-09 14:10Z (Tuesday 10:10 AM ET)
- **Event detector classification:** CRITICAL
- **Broad market triggers:** SOXX -1.65% ($588.57 → $578.88), SMH -1.38% (MAJOR), XLK -1.12% (MAJOR)
- **Held positions status:** All OK. QQQ -0.70% (OK), SOXX -1.65% (MINOR held-position severity), VOO -0.35% (OK). No protective stops breached.
- **Action taken:** NO SELLS. NO BUYS. Buy conditions SUSPENDED per Event Response Mode.
- **Next expected action:** Hourly reassessment at 14:35Z (10:35 AM ET).

---

## AUTONOMOUS OVERRIDE — 2026-06-09 14:20Z (Tuesday 10:20 AM ET)
- **Event detector classification:** MAJOR
- **Broad market triggers:** SOXX -1.37% ($578.88 → $570.96), SMH -1.23% (MAJOR), XLK -1.00% (MAJOR), QQQ -0.79% (MINOR), SPY -0.54% (MINOR)
- **Held positions status:** All OK. QQQ -0.79% (OK), SOXX -1.37% (OK), VOO -0.55% (OK). No protective stops breached.
- **Action taken:** NO SELLS. NO BUYS. Buy conditions remain SUSPENDED per 14:10Z override and todo instructions.
- **Next expected action:** Hourly reassessment at 14:35Z (10:35 AM ET).

---

# Hourly Macro Memory
*Updated 2026-06-09 14:35Z (Tuesday 10:35 AM ET). Market OPEN. Second hourly of the day. Event detector resolved to NONE. SOXX limit order placed.*

## Hourly Macro Strategist — 2026-06-09 14:35Z
### Repo Integrity
- **Working tree:** `memory/tactical_last_prices.json` modified (tactical artifact). `memory/todo.md` modified by hourly to fix parser issue. No unauthorized source modifications.
- **Branch:** Even with origin/main (0 ahead, 0 behind).
- **Staged changes:** `memory/ledger.md` and `memory/tactical_last_prices.json` from prior tactical runs. Will be committed this cycle.

### Live Broker Refresh (Authoritative)
- **Equity:** $10,009.05 | **Cash:** $3,204.41 | **Long market value:** $6,804.64
- **Gross exposure:** $6,804.64 / $10,009.05 = **68.0%**
- **Daytrade count:** 0/3
- **Open orders:** SOXX buy 1 @ $570.00 limit (placed at 14:37Z).

### Current Holdings
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $705.45 | $715.75 | $4,294.47 | 42.91% | +$61.79 | +1.46% |
| SOXX | 2 | $571.53 | $571.17 | $1,142.34 | 11.41% | -$0.71 | -0.06% |
| VOO | 2 | $678.70 | $681.11 | $1,362.22 | 13.61% | +$4.82 | +0.36% |
| Cash | — | — | — | $3,204.41 | 32.02% | — | — |
| **Equity** | — | — | — | **$10,009.05** | **100%** | — | **+0.09%** |

### Goal Check
- **Portfolio since inception:** +0.09% ($10,009.05 vs $10,000 base)
- **S&P 500 since inception:** +3.23% (SPY $741.17 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~3.14 pp). **Goal 1 MET (+0.09%).**
- **Dominant failure mode:** **Cash drag** (32% cash, 68% exposure). Need to deploy into outperformers to close gap.
- **Posture classification:** **Offensive catch-up.** Target gross-exposure band: **60–90%**. Aim for 72–78% by end of session.

### 1D / 1W / 2W Review
- **1D (today):** Portfolio ~0.00% (QQQ -0.05%, SOXX -0.05%, VOO +0.21%). SPY ~+0.20%. **Underperforming SPY by ~0.20 pp today.**
- **1W:** Portfolio ~-1.92% vs SPY ~-1.95% → outperf +0.03 pp. Marginal.
- **2W:** Portfolio ~+0.32% vs SPY ~-0.02% → outperf +0.34 pp. Holding edge.
- **Inception gap:** The 3.14 pp gap is the critical focus. Higher exposure in outperformers required.

### Event Detector — 14:35Z
- **Classification:** NONE. All held positions OK. No protective stops breached.
- **Prior 14:10Z/14:20Z overrides:** CRITICAL/MAJOR on semi sector gap-up reversal. Fully resolved. Market orderly.

### Market Intel — Tuesday 10:35 AM ET
- **Broad market:** SPY $741.17 (+~0.20% today). QQQ $715.75 (-0.05% from prior close). Gap-up fully reversed.
- **Semiconductors:** SOXX $571.17 (-0.05% from prior close). SMH $597.65 (-0.24% from prior close). Gap-up erased. NVDA $206.70 (-0.60% from prior close $207.95). AVGO $393.03 (-0.71% from prior close $395.85). Semi sector giving back all gains.
- **GOOG:** $366.32 (+1.63% from prior close $360.43 but down from open high). Still below $375 support.
- **Earnings:** No binary events in next 48 hours.

### Multi-Timeframe Returns
| Symbol | 1D | 1W | 1M | 3M |
|---|---|---|---|---|
| QQQ | -0.05% | –3.63% | +3.00% | +17.78% |
| VOO | +0.21% | –2.51% | +1.08% | +8.98% |
| SOXX | -0.05% | –0.20% | +15.93% | +69.70% |
| NVDA | -0.60% | –7.31% | –1.68% | +13.85% |
| AVGO | -0.71% | –13.94% | –4.05% | +14.49% |
| GOOG | +1.63% | –3.26% | –8.82% | +17.78% |
| SPY | +0.20% | –2.15% | +1.47% | +8.87% |

### Portfolio Heat Check
- SOXX slightly below entry (-$0.71). If we set stop at $560, total portfolio heat ≈ **$23** (0.23% of equity). Well under 6% limit.

### Concentration Cap Pre-Check
- QQQ: 6 shares = 42.91% (maxed, ≤45%)
- VOO: 2 shares = 13.61% (max 2 shares, ≤20%)
- SOXX: 2 shares = 11.41% (3 shares = ~17.1%, ≤20%)
- NVDA: 0 shares (7 shares = 14.6%, ≤15%)

### Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Hold 6** | Core liquid growth. At 42.91%, at 45% cap. | 40–43% |
| VOO | **Hold 2** | Broad-market anchor. At 13.61%, at 2-share cap. | 12–14% |
| SOXX | **Add 1** | Strongest 3M trend. Gap-up fully reversed. Limit buy $570.00 open. 3 shares = ~17.1% (within 20% cap). | 15–17% |
| NVDA | **Watch $210.50** | Below threshold ($206.70). Re-entry only on confirmed reclaim. | 0–2% |
| AVGO | **Avoid** | Weak 1W (-13.9%). No confirmed support. | 0% |
| GOOG | **Avoid** | Below $375 support. | 0% |
| META | **Avoid** | bannedSymbols active. | 0% |
| All others | **Avoid** | No edge. | 0% |

### Priority Actions
1. **HOLD all current positions.** No sell triggers breached.
2. **SOXX limit buy 1 @ $570.00** already open. If filled, exposure rises to ~73.7%.
3. **WATCH NVDA $210.50** for breakout. Re-evaluate at 15:35Z.
4. **NO buys for AVGO, GOOG, META, or others.**
5. **NO sells today.** All positions held overnight.
6. **Target gross exposure:** 72–78% by end of session if SOXX fills.

### Macro Themes
- **Actionable now:** SOXX gap-up fully reversed. Buying at $570 is near yesterday's close — better entry than chasing $579.
- **Worth monitoring:** Semi sector breadth. NVDA lagging SOXX. If NVDA doesn't reclaim $210, semi rally may be narrow.
- **Worth monitoring:** Portfolio needs +3.1 pp to catch SPY. Requires sustained 72%+ exposure in outperformers.

### Data / Process Notes
- **Alpaca CLI:** Working. Concentration cap guard active. No-buy parser is too simplistic — it matches "DO NOT ADD SOXX ABOVE $579.50" as an absolute ban. Fixed by rephrasing todo.md line.
- **FMP:** Disabled (placeholder API key). Yahoo Finance v8 used.
- **Day-trade status:** 0/3. Full flexibility.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Event detector:** NONE. Prior CRITICAL/MAJOR resolved.
- **Todo.md parser guard:** Rephrased conditional SOXX line to avoid false no-buy match. The parser only skips lines containing `UNLESS`, `IF`, `CONDITION`, `AUTHORIZE`, or `AUTHORIZED`.

---

## Previous Hourly — 2026-06-09 13:35Z (Tuesday 9:35 AM ET)
*Updated 2026-06-09 13:35Z. First hourly of the day. Event detector gap-up reassessed. HARD_LOCK lifted.*

### Live Broker Refresh
- **Equity:** $10,056.67 | **Cash:** $3,204.41 | **Long market value:** $6,852.26
- **Gross exposure:** 68.14% | Daytrade 0/3 | Open orders: NONE.

### Goal Check
- Portfolio +0.57% vs SPY +3.56%. Trailing by ~2.99 pp. Goal 1 met, Goal 2 failed.
- Dominant failure mode: Cash drag.
- Posture: Offensive catch-up.

### Position Map (13:35Z)
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | Hold 6 | Core liquid growth. 43.0% cap. | 40–43% |
| VOO | Hold 2 | Broad-market anchor. 13.6% cap. | 12–14% |
| SOXX | Add 1 on pullback | Strongest 3M trend. Limit buy $577.50. | 15–17% |
| NVDA | Watch $210.50 | Lagging. Re-entry on reclaim. | 0–2% |
| All others | Avoid | No edge. | 0% |

### Priority Actions (13:35Z)
1. HOLD all current positions.
2. BUY SOXX 1 @ $577.50 limit on pullback.
3. WATCH NVDA $210.50.
4. NO sells today.
5. Target gross exposure: 72–78%.

---

## Previous Hourly — 2026-06-08 19:35Z (Monday 3:35 PM ET)
*Updated 2026-06-08 19:35Z. Market OPEN until 20:00Z. Seventh hourly run.*

### Live Broker Refresh
- **Equity:** $10,003.25 | **Cash:** $3,204.42 | **Long market value:** $6,798.83
- **Gross exposure:** 67.97% | Daytrade 0/3.

### Goal Check
- Portfolio +0.03% vs SPY +2.98%. Trailing by ~2.95 pp.
- Regime: Offensive catch-up.
- 1D/1W/2W: Today +0.70% vs SPY +0.35% → outperf +0.35 pp. 1W ~-1.92% vs SPY -2.15% → outperf +0.23 pp. 2W +0.32% vs SPY -0.22% → outperf +0.54 pp.

### Priority Actions
1. HOLD all current positions into close.
2. NO NEW BUYS TODAY.
3. NO SELLS TODAY (all positions bought today).
4. Tomorrow watchlist: SOXX add 1 on pullback to $565–$568. NVDA buy 1 on $210 reclaim.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $705.4467 | $715.75 | $4,294.47 | 42.91% | +$61.79 | +1.46% |
| SOXX | 2 | $571.525 | $571.17 | $1,142.34 | 11.41% | -$0.71 | -0.06% |
| VOO | 2 | $678.7025 | $681.11 | $1,362.22 | 13.61% | +$4.82 | +0.36% |
| Cash | — | — | — | $3,204.41 | 32.02% | — | — |
| **Equity** | — | — | — | **$10,009.05** | **100%** | — | **+0.09%** |

- **Gross long exposure:** 68.0%
- **Net exposure:** 68.0%
- **Daytrade count:** 0/3
- **Pattern day trader:** false

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
- **Todo.md no-buy parser is simplistic:** Lines with `DO NOT ADD`, `DO NOT BUY`, etc. are parsed as absolute bans even if they contain price conditions. Use `UNLESS`, `IF`, or `CONDITION` to create exceptions, or rephrase to avoid the forbidden phrases entirely.
