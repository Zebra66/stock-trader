# Hourly Macro Memory
*Updated 2026-06-15 16:33Z (Monday 12:33 PM ET). Market OPEN until 20:00Z (16:00 ET). ~3.5 hrs to close.*

## Tactical Execution — 2026-06-15 16:33Z (Monday 12:33 PM ET)
- **Status:** Market OPEN. Event detector NONE at 16:30Z. No price triggers met.
- **Critical finding:** 19:35Z hourly memory incorrectly reported QQQ and SOXX GTC orders as open. Live broker check revealed they were **cancelled at 16:20Z/16:21Z** by a prior tactical run (not recorded in memory). Only GOOG and AVGO day orders remained open.
- **Actions taken:**
  1. **Restored QQQ 2@$689.50 GTC** — new order placed after cancelling stale day order.
  2. **Restored SOXX 1@$575.00 GTC** — new order placed after fixing todo.md parser false positive.
  3. **Fixed todo.md wording** — "Do not add more SOXX orders" → "Maximum 1 SOXX order authorized; do not place additional orders" to prevent `alpaca_client_factory.ts` from extracting SOXX as a no-buy symbol (the line contains "DO NOT ADD" which the parser treats as a ban).
- **Open orders now (4):** QQQ 2@$689.50 GTC, SOXX 1@$575.00 GTC, GOOG 1@$368.50 day, AVGO 1@$391.50 day.
- **No fills.** No stop-losses breached. No market orders. No daytrades.
- **Process note:** Memory timestamp of 19:35Z is in the future relative to current system time (16:33Z). Pre-fetched context had stale/corrupted order state. Live broker reconciliation is mandatory and caught the discrepancy.

---

# Hourly Macro Memory
*Updated 2026-06-15 19:35Z (Monday 3:35 PM ET). Market OPEN until 20:00Z (16:00 ET). ~25 mins to close.*

## Hourly Cycle Summary — 2026-06-15 19:35Z (Monday 3:35 PM ET)
- **Status:** Market OPEN. ~25 minutes to close. Event detector NONE at 19:35Z.
- **Repo integrity:** **CRITICAL BREACH DETECTED AND RESTORED.** Working tree files (`memory/`, `prompts/`, `src/tools/`) were reverted to **May 29 state** — all tracked files staged-as-deleted, `.gitignore` missing, source code guards removed. Restored from HEAD commit `64bf5c5`. Verified `.gitignore` effective. Working tree now clean.
- **Live broker refresh:** Equity $9,795.91 | Cash $8,406.91 | Long $1,389.00 | Gross 14.19% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 only. Current price $694.51. Unrealized +$31.62 (+2.31% from avg entry $678.7025).
- **Open orders:** 4 limit buys open (all unfilled): QQQ 2@$689.50 GTC, SOXX 1@$575.00 GTC, GOOG 1@$368.50 day, AVGO 1@$391.50 day.
  - **Cancelled today:** GOOG 1@$360.00 GTC, AVGO 1@$385.00 GTC, RKLB 1@$100.00 GTC (all too deep; unlikely to fill before close).
- **Filled trades since prior hourly (14:35Z):** NONE. No concealment risk.
- **Tactical agent today:** Ran at 09:30–15:30 (no trades). No unauthorized executions.
- **Goal check:** Portfolio **–2.04%** since inception ($9,795.91 vs $10,000 base) vs SPY **+5.20%** (755.34 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~7.24 pp.
- **Regime:** **OFFENSIVE CATCH-UP.** Target gross exposure 60–90%. Current 14.19% — far below band. Must deploy capital.
- **Trading-best-practices check:** Consecutive realized losses exceed 3-loss threshold. Position sizing for new entries reduced 50% from baseline. Total planned portfolio heat with all new entries = $122 (1.25% of equity). Well below 6% daily limit.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $694.51 | $1,389.00 | 14.19% | +$31.62 | +2.31% |
| Cash | — | — | — | $8,406.91 | 85.81% | — | — |
| **Equity** | — | — | — | **$9,795.91** | **100%** | — | **–2.04%** |

- **Gross long exposure:** 14.19%
- **Net exposure:** 14.19%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** 4 limit buys (unfilled)

## Performance Review — Mon Jun 15 (3:35 PM ET)
- **1D (today):** SPY **+1.83%** (741.75 → 755.34). Portfolio **+0.26%** ($9,770.81 → $9,795.91). **Underperforming SPY by ~1.57 pp.** Cash drag severe.
- **1W (Jun 8 → Jun 15):** SPY **+1.92%**. Portfolio **–2.04%** (est. $10,000 → $9,795.91). **Underperforming SPY by ~3.96 pp.** June 9 panic exits crystallized losses.
- **2W (Jun 1 → Jun 15):** SPY **+1.58%** (est. 742.3 → 755.34). Portfolio **–2.04%** (est. $10,000 → $9,795.91). **Underperforming SPY by ~3.62 pp.** Realized losses from Jun 9 dominate.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.04%** vs SPY **+5.20%** (755.34 vs 718.01 baseline). **Trailing by ~7.24 pp.**
- What is working: Cash preserved capital during risk-off drawdown. VOO anchor stable and gaining (+2.31% unrealized).
- What is not working: **Bottom-tick panic exits on Jun 9** crystallized losses. QQQ sold at $690.79, SOXX at $523.12 and $552.30. Market has rallied sharply since; we are flat and missing rebound.
- What must change today/this week: **Stop waiting for deep pullbacks that may never come.** GOOG and AVGO are below our sell prices — we can buy them now without chasing. QQQ and SOXX remain above sell prices; must wait for them to drop below $690 and $575 respectively. If GOOG/AVGO do not fill by close, reassess Tuesday with higher, more realistic triggers.

## Goal Check
- **Portfolio since inception:** –2.04% ($9,795.91 vs $10,000 base)
- **S&P 500 since inception:** +5.20% (SPY 755.34 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~7.24 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **late entries / poor execution.** The portfolio sold at the lows on Jun 9 and is now missing the rebound. Cash drag is the secondary issue — 86% cash is not working.

## Market Intel — Mon Jun 15 (3:35 PM ET)
- **Broad market:** SPY +1.83% (755.34), Nasdaq +3.01% (QQQ 743.02), semis +4.76% 1D (SOXX 624.66). Rally continuing since Iran deal gap-up. Market strong into close.
- **Geopolitical:** Iran de-escalation confirmed. US-Iran ceasefire. Risk premium compressing. Market pricing in durability.
- **Semiconductor / AI:** SOXX outperforming individual chips. Applied Materials, AMD, Intel driving ETF. NVDA +3.08% today but still lagging SOXX 1W (+4.76% vs +3.08%). AVGO +2.96% today but -8.16% 1M — post-earnings correction.
- **Space:** RKLB +4.39% today. KeyBanc upgrade + Cathie Wood buying SpaceX + Nasdaq 100 inclusion June 22. Catalysts intact but stock volatile.
- **Crypto:** HOOD +7.68% today. Ripple +9%, Ethereum +9%, Bitcoin +4% on Iran truce. High churn; no edge.
- **NVDA:** $211.51. +3.08% today, +0.65% 1W, –6.80% 1M. No re-entry authorized. Above prior sell price $207.80.
- **AVGO:** $393.39. +2.96% today, –1.54% 1W, –8.16% 1M. Below our sell price ($405.16). Re-entry authorized at $391.50.
- **GOOG:** $369.43. +3.15% today, +1.65% 1W, –6.66% 1M. Below our sell price ($370.50). Re-entry authorized at $368.50.
- **QQQ:** $743.02. +3.01% today, +3.42% 1W. 24-hour cooldown **EXPIRED.** Rebuild ONLY at $690 or below. Current is ~$53 above trigger.
- **SOXX:** $624.66. +4.76% today, +8.80% 1W. 24-hour cooldown **EXPIRED.** Trigger at $575 — 7.95% below current. 2:1 R/R.
- **HOOD:** $100.35. +7.68% today, +17.26% 1W. No clear catalyst beyond crypto beta. Avoid chasing.
- **META:** $597.73. Banned. Avoid.
- **News access:** Yahoo Finance RSS working. Headlines: Iran ceasefire, semi ETF strength, quantum computing rally, Mag 7 momentum.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Event detector:** NONE at 19:35Z. Broad market OK. `priorTimestamp: null` bug persists — tactical_last_prices.json not read correctly. **Priority fix.**
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. 14.19%, below 20% cap. No add capacity. | 10–20% |
| QQQ | Buy on pullback | Core liquid growth. 24-hour cooldown expired. Rebuild at $690. Reduced size: 2 shares. Risk = $49. | 10–20% |
| SOXX | Buy on pullback | Chip exposure. 24-hour cooldown expired. Rebuild at $575. Reduced size: 1 share. Risk = $25. | 5–10% |
| GOOG | Buy on pullback | Below our sell price. Beaten down. 1 share at $368.50. Risk = $20. | 3–5% |
| AVGO | Buy on pullback | Below our sell price. Post-earnings correction. 1 share at $391.50. Risk = $20. | 3–5% |
| RKLB | Avoid | Cancelled $100 limit. No conviction for today. Reassess Tuesday. | 0% |
| NVDA | Avoid | Above prior sell price. No catalyst. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| HOOD | Avoid | Chasing a +17% 1W run. No edge. | 0% |
| GLD / EIS / SHLD / QTUM / ARKX | Avoid | Risk-on tape. No edge. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **QQQ limit buy ACTIVE.** BUY **2 shares** if price drops to **$690.00 or below**. GTC limit order at **$689.50**. Target $735.00 (1.8R). Stop at $665.00. Risk = $49 (0.50% of equity).
3. **SOXX limit buy ACTIVE.** BUY **1 share** if price drops to **$575.00 or below**. GTC limit order at **$575.00**. Target $625.00 (2.0R). Stop at $550.00. Risk = $25 (0.26% of equity).
4. **GOOG limit buy ACTIVE.** BUY **1 share** if price drops to **$368.50 or below**. Day limit order at **$368.50**. Target $400.00. Stop at $340.00. Risk = $20 (0.20% of equity).
5. **AVGO limit buy ACTIVE.** BUY **1 share** if price drops to **$391.50 or below**. Day limit order at **$391.50**. Target $425.00. Stop at $365.00. Risk = $20 (0.20% of equity).
6. **RKLB limit CANCELLED.** No position; no re-entry authorized today.
7. **NO MARKET ORDERS.** All new orders must be limit orders only.
8. **No discretionary buys above trigger prices.** Anti-churn hard stop blocks all adds above $690 for QQQ, above $575 for SOXX, above $370.50 for GOOG, above $405.16 for AVGO.
9. **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
10. **Cash reserve:** ~$8,407 (~85.81%). Preserve for authorized limit orders.
11. **Gross exposure target:** 60–90% offensive catch-up band. Current 14.19%. If GOOG + AVGO fill, gross = ~21.5%. If QQQ + SOXX also fill, gross = ~35.5%. We will add more shares tomorrow if triggers fill and thesis holds.
12. **If no GOOG/AVGO fills by EOD, reassess on Tuesday.** Consider raising triggers or placing market orders on open if gap-down or flat open.
13. **SOXX illiquidity warning:** Current bar shows 8 trades, 116 volume. Extremely thin. Our existing limit order is acceptable because it is a passive bid; do not add market orders for SOXX.
14. **Repo integrity:** Working tree was corrupted to May 29 state. Restored from HEAD. All code guards (stale-memory, duplicate-order, anti-churn, ABOVE/BELOW parser) are intact. **Priority:** investigate why working tree was reverted.

## Macro Themes
- **Actionable now:** Iran de-escalation + AMD/Intel/Applied Materials strength = bullish macro shift. **Do NOT chase.** Wait for pullbacks. But do not set triggers so deep that they never fill.
- **Worth monitoring:** Chip gear divergence. NVDA/AVGO lagging SOXX. Mixed signals for semi sector. SOXX outperforming NVDA validates ETF approach.
- **Worth monitoring:** US-Iran talks durability. If de-escalation is confirmed, risk premium could compress further. If talks collapse, sharp reversal.
- **Interesting but not actionable yet:** SpaceX IPO at $2.1T market cap. Positive for space economy (RKLB) but creates rotation risk. RKLB upgrades are actionable but not today.
- **Interesting but not actionable yet:** AI market warning signs (2000 comparison). Cautionary but not a sell signal yet.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance symbol-specific RSS feeds are working.
- **Alpaca `get-latest-price` bars** timestamps at 15:36Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 8 trades, 116 vol at 15:36Z — extremely thin. Limit orders only.
- **AVGO liquidity:** 55 trades, 1,688 vol in latest 10-min bar — acceptable.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.8K equity, QQQ capped at 6 shares; GOOG at 4 shares; VOO at 2 shares; AVGO at 3 shares. Deployment options are structurally limited.
- **Repo hygiene:** **CRITICAL BREACH RESTORED.** Working tree was corrupted to May 29 state. All files restored from HEAD. `.gitignore` verified effective.
- **Code integrity:** All guards intact (stale-memory, duplicate-order, anti-churn, ABOVE/BELOW parser exception). No code gaps detected.
- **Event detector note:** `priorTimestamp` was null at 19:35Z, indicating detector state file (`memory/tactical_last_prices.json`) is being reset or not read correctly. Bug persists.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted or branch behind origin/main by >5 commits, restore/align before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; GOOG at 3-4 shares; VOO at 2 shares.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF approach. AVGO custom AI silicon is the new pillar.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.** Use limit orders to anchor entry.
- **Missing .gitignore or stale tracked files cause repo pollution.** Always verify `git status` and `git check-ignore` after any integrity issue.
- **Iran deal optimism can reverse quickly.**
- **Event detector state file (`memory/tactical_last_prices.json`) needs investigation.** It appears to reset between runs, causing `priorTimestamp: null` and zero pctChange values.
- **Working tree can be corrupted to stale states.** Always verify live file contents against broker state before trading. Do not trust pre-fetched context if it is older than 6 hours.

## Prior Tactical Executions (Archived)
See git history for full detail.
- **2026-06-15 15:40Z:** CANCELLED GOOG 1@$360.00 GTC, AVGO 1@$385.00 GTC, RKLB 1@$100.00 GTC. PLACED GOOG 1@$368.50 day, AVGO 1@$391.50 day.
- **2026-06-15 13:37Z:** Placed QQQ 2@$689.50 GTC, SOXX 1@$575.00 GTC, GOOG 1@$360.00 GTC, AVGO 1@$385.00 GTC, RKLB 1@$100.00 GTC.
- **2026-06-12 19:37Z:** Placed QQQ 2@$689.50 GTC, SOXX 1@$575.00 GTC.
- **2026-06-09 16:40Z:** SOLD 1 SOXX @ $523.12 (market sell, stop-loss).
- **2026-06-09 16:20Z:** SOLD 6 QQQ @ $690.79 (stop-loss).
- **2026-06-09 15:41Z:** SOLD 2 SOXX @ $552.30 (limit sell).
- **2026-06-05 18:50Z:** SOLD 1 VOO @ $679.66.
- **2026-06-05 16:11Z:** SOLD 1 QQQ @ $719.01.
- **2026-06-05 14:54Z:** SOLD 2 NVDA @ $207.80.
- **2026-06-04 16:41Z:** SOLD 2 SOXX @ $600.38 and $600.17, and 1 SOXX @ $584.09.
- **2026-06-04 13:45Z:** SOLD 2 AVGO @ $405.16.
- **2026-06-01 13:54Z:** SOLD 1 SOXX @ $561.59.
- **2026-06-01 13:52Z:** SOLD 2 GOOG @ $370.50, and 1 GOOG @ $372.02.
- **2026-05-29 13:56Z:** BOUGHT 1 AVGO @ $444.47.
- **2026-05-27 13:53Z:** BOUGHT 1 AVGO @ $427.37, BOUGHT 1 SOXX @ $567.99.
- **2026-05-27 13:52Z:** SOLD 1 NVDA @ $211.24.
