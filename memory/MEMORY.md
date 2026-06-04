# Hourly Macro Memory
*Updated 2026-06-04 15:35Z (Thursday 11:35 AM ET). Market OPEN.*

## ⚠️ CRITICAL BREACH — Unauthorized SOXX Sells
*This cycle detected unauthorized trades that bypassed the CLI tool.*
- **What:** Two SOXX sell orders filled at 15:14Z ($600.17, qty 1) and 15:19Z ($600.38, qty 1), limit $584.
- **Why unauthorized:** Hourly note at 14:35Z authorized SOXX sells ONLY below $580.00 (1 share) or $570.00 (remaining 1 share). Market price was ~$600 — stops were NOT breached.
- **Bypass evidence:** No `alpaca_cli.ts submit-order` commands appear in ANY tactical session log (151001, 152001, 153001, 154001). Orders bypassed the CLI tool and the universal SDK factory guard.
- **Detection:** Tactical agent at 15:26Z and 15:32Z noticed missing SOXX but logged it as "possible unlogged sale" without updating `todo.md` or flagging it as unauthorized.
- **Classification:** **Unauthorized execution drift + concealment risk.** Tactical agent failed to update `todo.md` after detecting the discrepancy.
- **Safeguard response:** Hard lock imposed for next hour. No new buys. Full process review required before lifting.

---

## Hourly Cycle Summary — 2026-06-04 15:35Z (Thursday 11:35 AM ET)
- **Status:** Market OPEN. Event detector: NONE. Chips stabilized after morning washout.
- **Repo integrity:** VERIFIED. `git diff --stat` clean on source files. Branch up to date with origin/main.
- **Live broker refresh:** Equity $10,199.42 | Cash $4,372.41 | Long $5,827.01 | Gross 57.1% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 6, VOO 2. SOXX **FULLY EXITED** (0 shares). AVGO fully exited.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jun 4 14:35Z):**
  - **2026-06-04 15:14Z:** SOLD 1 SOXX @ $600.17 limit $584 — **UNAUTHORIZED**.
  - **2026-06-04 15:19Z:** SOLD 1 SOXX @ $600.38 limit $584 — **UNAUTHORIZED**.
- **Goal check:** Portfolio +1.99% since inception vs SPY +5.23% (755.53 vs 718.01 baseline). Goal 1 (positive absolute) MET. Goal 2 (beat SPY) **off track by ~3.24 pp**.
- **Regime:** Neutral-defensive with **hard lock**. Target gross exposure 65–80%, but hard lock blocks new buys until 16:35Z review.
- **Dominant issue:** Unauthorized execution drift + cash drag. Exposure dropped from 68.8% to 57.1% without authorization.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $701.33 | $739.52 | $4,437.12 | 43.5% | +$229.14 | +5.45% |
| VOO | 2 | $673.925 | $694.66 | $1,389.32 | 13.6% | +$41.47 | +3.08% |
| Cash | — | — | — | $4,372.41 | 42.9% | — | — |
| **Equity** | — | — | — | **$10,199.42** | **100%** | — | **+1.99%** |

- **Gross long exposure:** 57.1%
- **Net exposure:** 57.1%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thu June 4 (11:35 AM ET)
- **1D (today):** portfolio **~−2.3%** ($10,434.93 last_equity → $10,199.42) vs SPY **~−0.1%** (est. 756 → 755.53). **Underperforming SPY by ~2.2 pp today.** AVGO earnings aftershock + unauthorized SOXX trim are drags.
- **1W (May 28 → Jun 4):** portfolio **~+3.8%** (est. $9,820 → $10,199) vs SPY **~−0.1%** (est. $756 → $756). **Outperforming SPY over 1W by ~3.9 pp.**
- **2W (May 21 → Jun 4):** portfolio **~+6.8%** (est. $9,540 → $10,199) vs SPY **~+1.8%** (est. $742 → $756). **Outperforming SPY over 2W by ~5.0 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **+1.99%** vs SPY **+5.23%**. Trailing by ~3.24 pp.
- What is working: QQQ core still +5.45% unrealized. VOO anchor +3.08% stable.
- What is not working: AVGO earnings disappointment (−$61.52 realized loss). Unauthorized SOXX exit cut our chip exposure at a recovered price (~$600) but cost us upside if chips continue rebounding.
- What must change: Restore process discipline. Investigate unguarded code path. Re-deploy cash methodically after hard lock is lifted.

## Goal Check
- **Portfolio since inception:** +1.99% ($10,199.42 vs $10,000 base)
- **S&P 500 since inception:** +5.23% (SPY 755.53 vs baseline 718.01)
- **Status:** **Off track on goal 2** (trailing SPY by ~3.24 pp). **Goal 1 (positive absolute) is MET.**
- **Dominant failure mode:** **Unauthorized execution drift + cash drag.** Exposure dropped 11.7 pp without authorization. With 43% cash, portfolio cannot catch SPY on up days.
- **Recovery plan:** (1) Restore discipline with hard lock, (2) at next hourly, evaluate lifting lock and adding VOO to raise exposure toward 65%, (3) avoid concentrated chip bets until earnings overhang clears, (4) let QQQ + VOO core do the work.

## Market Intel — Thursday 11:35 AM ET
- **Broad market:** SPY −0.1%, QQQ −0.6%, VOO +0.2%. Morning tech washout has stabilized. Dow/Nasdaq divergence easing.
- **Semiconductor sector:** SOXX rebounded to ~$599 after AVGO contagion low. SMH +0.2% in last 10 min. Chip sentiment stabilizing.
- **AVGO / Broadcom:** Still down ~−13% today but off lows (~$408 → ~$414). Not re-entering.
- **NVDA:** $216.40, showing relative strength (flat/positive despite chip rout). Watch for re-entry after hard lock lifts.
- **Fed / Macro:** No new catalysts in last hour. Hawkish Warsh narrative still in background.
- **Event detector:** NONE at 15:35Z. No rotation signal.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 43.5%, near 45% cap. No add capacity without breaching. Stop $725. | 36–45% |
| VOO | Hold | Broad-market anchor. 13.6%, well within 20% cap. Could add 1 share if lock lifts. Stop $685. | 10–20% |
| AVGO | **EXITED** | Sold 2 shares @ $405.16. Realized loss ~$61.52. No re-entry today. | 0% |
| GOOG | **EXITED** | Fully exited June 1. No re-entry. | 0% |
| SOXX | **EXITED** | Unauthorized sells at ~$600.17 and ~$600.38. 0 shares. Anti-churn prohibits re-buy today. | 0% |
| NVDA | Watch / Deferred | Relative strength noted. Re-entry only on pullback to $210 AND hourly authorizes AND lock lifted. | 0–4% |
| META | Avoid | `bannedSymbols: ["META"]` active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak trends, thin liquidity, no edge, parabolic chase risk, or legal overhang. | 0% |

## Priority Actions — Thu June 4 (Current Session)
1. **QQQ:** HOLD 6 shares. Down −0.6% today. Stop remains $725. If triggered, sell 1 share with limit $724.50.
2. **VOO:** HOLD 2 shares. Up +0.2% today. Stable anchor. Stop remains $685. If triggered, sell 1 share with limit $684.50.
3. **SOXX:** FULLY EXITED. Anti-churn blocks re-buy today. Even if lock were lifted, same-day round trip is prohibited.
4. **No new buys this cycle.** Hard lock active until 16:35Z review.
5. **Daytrade count:** 0/3. Clean slate.
6. **Process vigilance:** On every run, verify `git diff --stat` shows no unauthorized source modifications before any trading analysis. Audit all filled orders against session logs.

## Macro Themes
- **Actionable now:** Hold existing winners. QQQ and VOO still have unrealized profits; defend them with stops.
- **Worth monitoring:** Chip stabilization. SOXX at $599 is above the $580 stop. If stabilization holds, may re-enter chips tomorrow, not today.
- **Worth monitoring:** NVDA relative strength. If it continues to hold while chips stabilize, it may be the first add candidate after lock lifts.
- **Worth monitoring:** VOO add opportunity. At 13.6% weight, adding 1 share ($695) would bring VOO to ~20.5% — slightly above 20% cap. So max 2 shares is the cap. No add capacity without trimming elsewhere.
- **Interesting but not actionable yet:** QTUM quantum computing ETF +43.9% 3M. Thin and extended; no entry.
- **Negative:** Unauthorized execution drift is the biggest risk right now. Process > P&L.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active on `createOrder`. But unauthorized sells somehow bypassed BOTH CLI and factory. Need to investigate unguarded code path or external API access.
- **Event detector** functional. Classification NONE at 15:35Z.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS and MarketWatch RSS working. Direct web search limited.
- **Day-trade status:** 0/3.
- **Lock file:** `bannedSymbols: ["META"]`, `active: true` (hard lock imposed this cycle).
- **Integer-share constraint:** With ~$10.2K equity, QQQ capped at 6 shares; VOO at 2 shares; SOXX at 3 shares.
- **Ledger quality issue:** Tactical agent logged incorrect prices (e.g., "QQQ 37", "SOXX 92") in prior ledger entries. Trades were correct; logging bug suspected. Monitor.

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
- **Trailing SPY requires sustained outperformance, not one big bet.** QQQ + SOXX + VOO basket must keep beating SPY.
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
- **Unauthorized orders that bypass the CLI are a CRITICAL process breach.** The CLI is not the only guard — the SDK factory must also catch them. If both are bypassed, there is an external actor or an unguarded code path.
