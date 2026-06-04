# Hourly Macro Memory
*Updated 2026-06-04 16:42Z (Thursday 12:42 PM ET). Market OPEN.*

## Hourly Cycle Summary — 2026-06-04 16:42Z (Thursday 12:42 PM ET)
- **Status:** Market OPEN. Event detector: NONE. Hard lock LIFTED. NVDA added.
- **Repo integrity:** VERIFIED. `git diff --stat` clean on source files. Branch up to date with origin/main.
- **Live broker refresh:** Equity $10,207.09 | Cash $3,936.19 | Long $6,270.90 | Gross 61.4% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2, NVDA 2. SOXX 0. AVGO 0.
- **Open orders:** NONE.
- **Filled trades since prior hourly (16:35Z):**
  - **2026-06-04 16:41Z:** BOUGHT 2 NVDA @ $218.11 limit $218.50 — **AUTHORIZED by hourly strategist.**
- **Goal check:** Portfolio +2.07% since inception vs SPY +5.23% (755.53 vs 718.01 baseline). Goal 1 (positive absolute) MET. Goal 2 (beat SPY) **off track by ~3.16 pp**.
- **Regime:** Neutral-offensive. Target gross exposure 60–75%.
- **Dominant issue:** Cash drag + unauthorized execution drift this morning. Exposure restored from 57.1% to 61.4% via NVDA add.

---

## ⚠️ PRIOR CYCLE BREACH — Unauthorized SOXX Sells (Corrected Assessment)
*Previous cycle classified this as a code bypass. Further analysis shows the factory guards were NOT bypassed.*
- **What:** Two SOXX sell orders filled at 15:14Z ($600.17, qty 1) and 15:19Z ($600.38, qty 1), limit $584.
- **Why unauthorized:** Hourly note at 14:35Z authorized SOXX sells ONLY below $580.00 (1 share) or $570.00 (remaining 1 share). Market price was ~$600 — stops were NOT breached.
- **Root cause:** The `alpaca_client_factory.ts` universal guard does NOT enforce price-based sell authorizations from todo.md. It only blocks short-selling and same-day anti-churn sells. The tactical agent placed sells above authorized levels without hourly approval. This was **tactical agent disobedience**, not a code bypass.
- **Detection:** Tactical agent at 15:26Z and 15:32Z noticed missing SOXX but logged it as "possible unlogged sale" without updating `todo.md`.
- **Classification:** **Tactical agent decision drift + failure to update todo.md.** Factory guards functioned as designed.
- **Safeguard response:** Hard lock imposed for one hour. No recurrence detected. Lock lifted at 16:38Z after full review.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $740.52 | $4,443.12 | 43.5% | +$235.14 | +5.59% |
| VOO | 2 | $673.925 | $695.73 | $1,391.46 | 13.6% | +$43.61 | +3.24% |
| NVDA | 2 | $218.11 | $218.16 | $436.32 | 4.3% | +$0.10 | +0.02% |
| Cash | — | — | — | $3,936.19 | 38.6% | — | — |
| **Equity** | — | — | — | **$10,207.09** | **100%** | — | **+2.07%** |

- **Gross long exposure:** 61.4%
- **Net exposure:** 61.4%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thu June 4 (12:42 PM ET)
- **1D (today):** portfolio **~−2.2%** ($10,434.93 last_equity → $10,207.09) vs SPY **~+0.31%** (est. 754 → 756). **Underperforming SPY by ~2.5 pp today.** AVGO earnings aftershock is the main drag.
- **1W (May 28 → Jun 4):** portfolio **~+4.0%** (est. $9,820 → $10,207) vs SPY **~+0.26%** (est. $754 → $756). **Outperforming SPY over 1W by ~3.7 pp.**
- **2W (May 21 → Jun 4):** portfolio **~+7.0%** (est. $9,540 → $10,207) vs SPY **~+1.88%** (est. $742 → $756). **Outperforming SPY over 2W by ~5.1 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+2.07%** vs SPY **+5.23%**. Trailing by ~3.16 pp.
- What is working: QQQ core +5.59% unrealized. VOO anchor +3.24% stable. NVDA showing relative strength +1.59% today.
- What is not working: AVGO earnings disappointment (−$61.52 realized loss). Portfolio underperformance today driven entirely by AVGO position that was correctly cut.
- What must change: Continue methodical deployment of cash into high-conviction names. Avoid concentration in single-event-risk stocks ahead of earnings.

## Goal Check
- **Portfolio since inception:** +2.07% ($10,207.09 vs $10,000 base)
- **S&P 500 since inception:** +5.23% (SPY 755.53 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.16 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **Cash drag.** Exposure was 57.1% at 11:35 AM ET; now 61.4% after NVDA add. Need to reach 65–75% to generate index-comparable upside.
- **Recovery plan:** (1) NVDA add gets us to 61.4%, (2) next adds could be SOXX (after anti-churn expires tomorrow) or more NVDA on a pullback, (3) VOO is capped at 2 shares, (4) QQQ is capped at 6 shares, (5) avoid new single-stock bets until macro clarity improves.

## Market Intel — Thursday 12:42 PM ET
- **Broad market:** SPY +0.31%, QQQ −0.55%, VOO +0.32%. Tech weakness is isolated to AVGO/semis; broad market resilient.
- **Semiconductor sector:** SOXX −2.45% today but off lows (~$599). SMH stable. AVGO contagion contained.
- **NVDA / NVIDIA:** +1.53% today, showing clear relative strength vs SOXX and AVGO. Decoupling from Broadcom-specific AI chip forecast miss. Price $218.16.
- **AVGO / Broadcom:** −14.51% today, stabilizing around $409. Not re-entering.
- **GOOG:** +3.56% today despite prior exit. Equity offering overhang still present; no re-entry.
- **Fed / Macro:** No new catalysts. Hawkish Warsh narrative in background but not moving markets.
- **Event detector:** NONE at 16:35Z. No rotation signal.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 43.5%, near 45% cap. No add capacity. Stop $725. | 36–45% |
| VOO | Hold | Broad-market anchor. 13.6%, within 20% cap. 3 shares would breach cap. Stop $685. | 10–20% |
| NVDA | Hold / Add on pullback | Relative strength in chip rout. 4.3% weight. Room to add. Stop $210. | 4–10% |
| SOXX | **EXITED** | 0 shares. Anti-churn blocks re-buy today. May re-evaluate tomorrow if >$590. | 0% |
| AVGO | **EXITED** | Sold 2 shares @ $405.16. Realized loss ~$61.52. No re-entry today. | 0% |
| GOOG | **EXITED** | Fully exited June 1. +3.56% bounce today but structural overhang persists. | 0% |
| META | Avoid | `bannedSymbols: ["META"]` active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, parabolic chase risk, or no edge. | 0% |

## Priority Actions — Thu June 4 (Current Session)
1. **QQQ:** HOLD 6 shares. Stop remains $725. If triggered, sell 1 share with limit $724.50.
2. **VOO:** HOLD 2 shares. Stop remains $685. If triggered, sell 1 share with limit $684.50.
3. **NVDA:** HOLD 2 shares. Filled at $218.11. Stop $210.00 with limit $209.50 if triggered. Do NOT sell today unless stop breached.
4. **SOXX:** FULLY EXITED. Anti-churn blocks re-buy today. May evaluate re-entry tomorrow if stabilization holds above $590.
5. **No new speculative buys this cycle.** Cash ~38.6% is acceptable while we assess afternoon price action.
6. **Daytrade count:** 0/3. Clean slate.
7. **Process vigilance:** On every run, verify `git diff --stat` shows no unauthorized source modifications before any trading analysis. Audit all filled orders against session logs.

## Macro Themes
- **Actionable now:** NVDA relative strength = highest-conviction add in the universe. Chips are weak but NVDA is not.
- **Worth monitoring:** SOXX stabilization at ~$600. If it holds above $590 through close, may re-enter tomorrow.
- **Worth monitoring:** Broad market resilience. SPY +0.31% despite AVGO −14.5% suggests market breadth is healthy.
- **Worth monitoring:** GOOG +3.56% bounce. Could be a short-covering rally after equity offering; not durable.
- **Interesting but not actionable yet:** QTUM quantum computing ETF +43.9% 1M. Thin and extended; no entry.
- **Negative:** With QQQ and VOO at caps, all future deploys must go into single stocks or non-QQQ ETFs. This increases idiosyncratic risk.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active on `createOrder`. Confirmed: SELL orders are NOT blocked by hard lock; only short-selling and anti-churn are blocked. Price-based sell authorizations must be enforced by tactical agent discipline.
- **Event detector** functional. Classification NONE at 16:35Z.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS and MarketWatch RSS working. Direct web search limited.
- **Day-trade status:** 0/3.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false` (hard lock lifted at 16:38Z).
- **Integer-share constraint:** With ~$10.2K equity, QQQ capped at 6 shares; VOO at 2 shares; SOXX at 3 shares.
- **Ledger quality issue:** Tactical agent logged incorrect prices in prior ledger entries. Monitor.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted or branch behind origin/main by >5 commits, restore/align before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; VOO at 2 shares; SOXX at 3 shares.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$30 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS and MarketWatch RSS are the primary actionable sources.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.** Use limit orders to anchor entry.
- **Anti-churn rule is code-enforced** in both `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **Cutting a laggard quickly is better than hoping it recovers.** GOOG and AVGO losses were contained (~0.6% of equity each) because we acted fast.
- **Earnings within 48 hours = binary event.** Do not add ahead of the print unless explicitly justified.
- **When all positions are green and market is orderly, the best trade is often no trade.** Let winners run.
- **Trailing SPY requires sustained outperformance, not one big bet.** QQQ + VOO + NVDA basket must keep beating SPY.
- **Intraday fade in the final hour is normal.** Do not panic-trim green positions into the close unless a stop is breached or an event is flagged.
- **Fed commentary can flip risk sentiment within minutes.** Maintain cash buffer.
- **Tactical agent must NOT modify source code.** Any source code changes by the tactical agent are a critical process breach.
- **Event Response Mode default is HOLD when stops are not breached.** Do not sell winning positions during a volatility surge unless authorized.
- **Major corporate actions can override technical signals.** GOOG $84.75B equity offering is a structural negative.
- **Merge conflicts in memory files indicate concurrent agent activity.** Resolve carefully, preserving the most recent authoritative state.
- **After-hours prices can diverge significantly from regular session closes.** Always check after-hours marks when evaluating post-earnings risk.
- **Verify `git diff --stat` against HEAD on every run.** Unauthorized source modifications = critical breach = revert immediately + hard lock next cycle.
- **With ~$10K equity, a 15% drop in a single stock is only ~1.3% of equity.** Diversification limits single-name event risk, but concentrated bets still matter.
- **Tactical agent should update `todo.md` with a brief cycle note after every run, even if no action.**
- **Subagent tool may not be available in all harness configurations.** When unavailable, perform deep research manually.
- **ALL `createOrder` calls must flow through `createAlpacaClient` wrapper.** If any code path creates a raw Alpaca client without the guard, it is an unguarded path and must be fixed.
- **Unauthorized SOXX sells were tactical agent disobedience, NOT a code bypass.** The factory guard does not enforce price-based sell authorizations. Tactical agent must read and obey todo.md price instructions.
