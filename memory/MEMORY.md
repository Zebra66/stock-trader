# Hourly Macro Memory
*Updated 2026-06-08 18:41Z (Monday 2:41 PM ET). Market OPEN until 20:00Z (16:00 ET).*

## Hourly Cycle Summary — 2026-06-08 18:41Z (Monday 2:41 PM ET)
- **Status:** Market OPEN. Sixth hourly run. ~75 minutes to close. Next tactical: 18:50Z, 19:10Z, 19:20Z, 19:30Z, 19:40Z, 19:50Z. Next hourly: 19:35Z (3:35 PM ET).
- **Repo integrity:** CRITICAL BREACH DETECTED and RESOLVED. Working-tree `MEMORY.md`, `todo.md`, `ledger.md`, `src/tools/*`, and `prompts/*` were all reverted to May 29 state while HEAD contained correct June 8 commits. Restored all files from HEAD via `git checkout HEAD --`. `.gitignore` was also missing; restored. Root cause: concurrent agent or process overwrote working tree after tactical execution.
- **Live broker refresh:** Equity **$9,995.76** | Cash $3,204.42 | Long $6,791.34 | Gross **67.9%** | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, SOXX 2. NVDA 0, AVGO 0, GOOG 0, META 0.
- **Open orders:** NONE.
- **Filled trades since 17:35Z:** SOXX limit buy 1 @ ~$570.00 (Order ID: 9375e32b-fde8-499d-adc7-dc7feb8e9f64). Tactical cycles at 17:40Z, 17:50Z, 18:10Z, 18:20Z, 18:30Z, 18:50Z, 19:10Z — no other fills. No unauthorized orders detected.
- **Goal check:** Portfolio **-0.04%** since inception ($9,995.76 vs $10,000). **Goal 1 NOT MET.** SPY **+2.96%** since baseline ($739.29 vs $718.01). **Goal 2 FAILED by ~3.00 pp.**
- **Regime:** **OFFENSIVE CATCH-UP** (60–90% gross target). Exposure 62.3% — in band but at low end. Cash drag remains the structural gap vs SPY.
- **1D/1W/2W review:** Today +0.69% vs SPY +0.49% → outperf +0.20 pp. 1W –1.76% vs SPY –2.15% → outperf +0.39 pp. 2W +0.32% vs SPY –0.22% → outperf +0.54 pp. Momentum is positive but insufficient to close the 2.98 pp inception gap without higher exposure.
- **Event detector 18:40Z:** Classification **NONE**. All held positions OK. `priorTimestamp: null` persists — snapshot file bug still active.

---

## Tactical Execution — 2026-06-08 19:20Z
- **SOXX limit buy 1 @ $570.00 FILLED** between 18:41Z and 19:20Z. Order ID: 9375e32b-fde8-499d-adc7-dc7feb8e9f64.
- **No open orders remaining.** All resting orders cleared.
- **No sell triggers breached.** QQQ, VOO, SOXX all held.
- **No new orders placed this cycle.**
- **Event detector 19:20Z:** Classification NONE. Normal mode.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $705.4467 | $715.38 | $4,292.28 | 42.9% | +$59.60 | +1.41% |
| VOO | 2 | $678.7025 | $679.70 | $1,359.40 | 13.6% | +$2.00 | +0.15% |
| SOXX | 2 | $571.525 | $569.83 | $1,139.66 | 11.4% | -$3.39 | -0.30% |
| Cash | — | — | — | $3,204.42 | 32.1% | — | — |
| **Equity** | — | — | — | **$9,995.76** | **100%** | — | **-0.04%** |

- **Gross long exposure:** 67.9%
- **Net exposure:** 67.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false

## Goal Check
- **Portfolio since inception:** +0.22% ($10,022.27 vs $10,000 base)
- **S&P 500 since inception:** +3.20% (SPY $740.98 vs baseline $718.01)
- **Status:** **FAILED on Goal 2** (trailing SPY by ~2.98 pp). **Goal 1 MET (+0.22%).**
- **Dominant failure mode:** **Cash drag** (historical under-deployment in early May). Current exposure 62.3% is in band but suboptimal for catch-up. Need sustained 70%+ exposure in outperformers to close gap.
- **Posture classification:** **Offensive catch-up.** Target gross-exposure band: **60–90%**. Current 62.3% is in band. Aim for 68–72% by close if good setups present; do NOT chase bad setups.

## Market Intel — Monday 2:41 PM ET
- **Broad market:** SPY +0.49% ($740.98), QQQ +1.01% ($718.28). Rebound from Friday –2.53% crash continues but momentum slowing.
- **Semiconductor sector:** SOXX +10.57% today ($575.58) — massive gap-up. NVDA –2.86% ($208.91) lagging badly. AVGO –8.11% ($395.40) post-earnings crash deepening. Divergence is extreme: SOXX ETF up 10.5% while its two largest components (NVDA, AVGO) are down. This suggests breadth within semis is narrow — likely driven by smaller-cap names in the ETF.
- **GOOG:** –8.92% today ($361.59). Support $375 decisively broken. No re-entry.
- **HOOD / RKLB / META / GLD / QTUM / SHLD / EIS / ARKX:** All weak or irrelevant. Avoid.
- **Fed / Macro:** No new data. Friday jobs report still digesting. Iran pauses strikes = reduced tail risk, but caution headline "Why history is sounding a siren on the tech stock rout" (Yahoo, 18:37Z) warns of potential reversal.
- **Earnings:** No binary events in next 48 hours for held positions or candidates.
- **Data sources:** Yahoo Finance v8 working. FMP disabled. Alpaca bars current within 1 minute.

## Multi-Timeframe Returns (Yahoo Finance v8)
| Symbol | 1D | 1W | 1M | 3M | 6M |
|---|---|---|---|---|---|
| QQQ | +1.01% | –3.13% | +3.53% | +18.16% | +15.03% |
| VOO | +0.49% | –2.13% | +1.47% | +8.87% | +8.24% |
| SOXX | +10.57% | +0.72% | +17.00% | +70.55% | +86.18% |
| NVDA | –2.86% | –6.99% | –1.33% | +13.82% | +14.40% |
| AVGO | –8.11% | –14.04% | –4.16% | +18.82% | +1.32% |
| GOOG | –8.92% | –3.47% | –9.02% | +19.52% | +11.66% |
| SPY | +0.49% | –2.15% | +1.47% | +8.87% | +8.24% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| QQQ | **Hold 6** | Core liquid growth. 43.0%, at 45% cap. 7th share would breach. | 40–43% |
| VOO | **Hold 2** | Broad-market anchor. 13.6%, at 20% non-QQQ ETF cap. 3rd share would breach. | 12–14% |
| SOXX | **Hold 1, Add 1 on pullback** | Strongest 3M trend (+70.55%). Already up 10.5% today — do NOT chase. Limit $570 resting order active. If fills: 2 shares = 11.4% of equity (within 20% cap). | 8–12% |
| NVDA | **Avoid today** | Down 2.86% while SOXX up 10.5%. Relative weakness = avoid. Re-entry ONLY on $210 reclaim with volume. Currently $208.91. | 0–4% |
| AVGO | **Avoid** | Post-earnings crash –8.1% today, –14% 1W. No support above $400. | 0% |
| GOOG | **Avoid** | Broken support. Down –8.9% today. No re-entry until $375 reclaim. | 0% |
| META | **Avoid** | bannedSymbols active. | 0% |
| All others | **Avoid** | No edge or weak trends. | 0% |

## Priority Actions
1. **HOLD all current positions.** QQQ, VOO, SOXX all stable. No sell triggers breached.
2. **KEEP SOXX limit buy 1 @ $570.00 open.** Do NOT cancel unless instructed by hourly. Do NOT raise limit (chasing prohibited). If not filled by 19:50Z (3:50 PM ET), cancel before close to avoid overnight risk.
3. **NO NVDA order.** Price $208.91 is below $210 reclaim threshold. Do NOT anticipate.
4. **NO AVGO/GOOG/RKLB/HOOD/SHLD/ARKX/EIS/QTUM/GLD buys today.** All lack confirmation or edge.
5. **If SOXX $570 does not fill by 19:50Z:** Accept 62.3% exposure into close. Do NOT deploy cash into inferior setups just to hit an exposure number.
6. **Event detector:** NONE. Normal trading authorized.

## Macro Themes
- **Actionable now:** SOXX is the only confirmed-trend name with capacity. Resting limit at $570 is disciplined; chasing above $575 is not.
- **Worth monitoring:** Extreme semi divergence (SOXX +10.5% vs NVDA –2.9% vs AVGO –8.1%). Narrow breadth within a strong sector is a yellow flag. If SOXX reverses, it could be sharp.
- **Worth monitoring:** Yahoo headline warning "siren on the tech stock rout" suggests caution. We already have high cash (37.6%) which is defensive.
- **Not actionable:** SpaceX $30T valuation headline (irrelevant to our universe).

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance v8 used as fallback.
- **News access:** Yahoo Finance RSS and search working.
- **Day-trade status:** 0/3. Clean slate. No same-day round-trip risk (all prior same-day buys are from earlier today and no sells authorized).
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** QQQ max 6; VOO max 2; SOXX max 3; NVDA max 7.
- **Event detector bug:** `priorTimestamp: null` persists at 18:40Z. Snapshot file `memory/tactical_last_prices.json` not being read correctly between runs. Tactical agent may be skipping detector or file is being overwritten. **Requires investigation before tomorrow's open.**
- **Repo integrity:** CRITICAL BREACH resolved this cycle. Working tree was reverted to May 29 while HEAD had correct June 8 state. Always verify `git diff HEAD` when pre-fetched memory is >6h old.
- **SPY benchmark:** $740.98. Since baseline +3.20%.

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
- **News access in workspace is limited.** Yahoo Finance RSS and search are primary actionable sources.
- **Tactical agent may skip runs silently.** Verify via broker order/position data.
- **Staged changes in git index that remove safety guards are a critical code breach.** Revert to HEAD immediately.
- **Stale-memory emergency:** If working-tree files are >24h stale while HEAD is current, restore from HEAD and classify as process breach.
- **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
- **Do not deploy cash on a Friday afternoon into a falling tape without confirmation.**
- **Buying the first intraday dip in a profit-taking session without confirmed support often results in immediate unrealized loss.**
- **If gross exposure has changed by >15 pp since prior hourly without explicit authorization, classify as unauthorized exposure drift.**
- **Working-tree reversion is a critical process breach.** Always check `git diff HEAD` after noticing stale memory.
