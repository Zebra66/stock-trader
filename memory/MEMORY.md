# Hourly Macro Memory

## Tactical Override — 2026-06-10 13:30Z (Wednesday 9:30 AM ET)
**[AUTONOMOUS_OVERRIDE]**
- **Event detector classification:** CRITICAL
- **Affected symbols:** GLD (severity CRITICAL, –2.39%), broad market OK (SPY +0.03%, QQQ flat, SOXX +0.30%)
- **Held positions:** VOO 2 only (severity OK, +0.03%)
- **Action taken:** No protective sells executed. GLD is not held; VOO unaffected.
- **Buy suspensions:** None required. No active BUY lines targeting GLD. QQQ and SOXX future triggers are time-locked and not yet active.
- **Reasoning:** The CRITICAL event is isolated to GLD (thin, 1 trade, 40 vol). Our only position VOO is flat and marked OK. No exposure to gold. No new buys were authorized today. Regime remains defensive.
- **Gross exposure:** 13.83% (VOO 2 @ $674.39)
- **Cash:** $8,406.91
- **Equity:** $9,755.69
- **Daytrade count:** 0/3
- **Open orders:** NONE

---

## Hourly Cycle Summary — 2026-06-09 19:35Z (Tuesday 3:35 PM ET)
- **Status:** Market OPEN. ~25 minutes to close. No repo breaches. No unauthorized trades.
- **Live broker refresh:** Equity $9,757.51 | Cash $8,406.93 | Long $1,350.58 | Gross 13.84% | Daytrade 0/3 (official).
- **Holdings confirmed:** VOO 2 only. QQQ 0, SOXX 0, GOOG 0, NVDA 0, AVGO 0.
- **Open orders:** NONE.
- **Filled trades since prior hourly (18:35Z):** NONE. Tactical agent correctly held VOO through the 19:20Z and 19:30Z MAJOR event flags.
- **Goal check:** Portfolio **–2.45%** since inception ($9,757.51 vs $10,000 base) vs SPY **+2.28%** (734.40 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~4.73 pp.
- **Regime:** Defensive. Target gross exposure 30–50%. Current 13.84% — far below band. Anti-churn hard stop prevents same-day re-buy of QQQ/SOXX (sold today). VOO at 20% concentration cap. No other actionable setups.
- **Next expected action:** No new buys today. Rebuild core exposure tomorrow afternoon after 24-hour cooldowns expire. QQQ re-entry authorized after 16:20Z Jun 10; SOXX after 16:40Z Jun 10.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $675.29 | $1,350.58 | 13.84% | –$6.83 | –0.50% |
| Cash | — | — | — | $8,406.93 | 86.16% | — | — |
| **Equity** | — | — | — | **$9,757.51** | **100%** | — | **–2.45%** |

- **Gross long exposure:** 13.84%
- **Net exposure:** 13.84%
- **Daytrade count:** 0/3 (official)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Tue Jun 9 (3:35 PM ET)
- **1D (today):** portfolio **~–2.45%** ($10,003.09 → $9,757.51) vs SPY **~–0.47%** (VOO lastday 679.68 → 675.29). **Underperforming SPY by ~1.98 pp today.** The tactical agent correctly held VOO and did not execute any panic trades since 16:40Z.
- **1W (Jun 2 → Jun 9):** portfolio **~–2.45%** (est. $10,000 → $9,758) vs SPY **~–3.14%** (est. $759.57 → $734.40). **Outperforming SPY over 1W by ~0.69 pp.** The cash-heavy defensive posture protected us from the tech/semiconductor rout.
- **2W (May 26 → Jun 9):** portfolio **~–2.45%** vs SPY **~–0.50%** (monthly). **Underperforming SPY over 2W by ~1.95 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.45%** vs SPY **+2.28%** (baseline 718.01 → 734.40). Trailing by ~4.73 pp.
- What is working: VOO broad-market anchor is the only position left; down –0.50% vs tech carnage. Cash preserved capital during the midday crash.
- What is not working: **Churn at the lows.** The QQQ sell at $690.79 and SOXX sell at $523.12 were bottom-tick panic exits. The market has since recovered. That churn cost us ~$50+ in realized losses and missed the rebound.
- What must change: **Stop panic-selling.** Rebuild exposure systematically on pullbacks, not chase bounces. The tactical agent correctly held through the 19:20Z/19:30Z MAJOR event flags. Tomorrow, set fresh limit orders and stick to them.

## Goal Check
- **Portfolio since inception:** –2.45% ($9,757.51 vs $10,000 base)
- **S&P 500 since inception:** +2.28% (SPY 734.40 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~4.73 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **excessive turnover / friction.** The portfolio has rotated in and out of QQQ, SOXX, AVGO, GOOG, NVDA repeatedly. The June 9 midday panic sells locked in losses at the worst possible prices. The 1W data shows we are actually outperforming SPY when holding cash, but the churn erases that edge.

## Market Intel — Tue Jun 9 (3:35 PM ET)
- **Broad market:** Nasdaq down ~1.5% on the day (QQQ –1.49%). S&P 500 down ~0.47%. Market bounced hard from midday lows (QQQ +~2.0% from low, SOXX +~6.0% from low). The bounce is orderly; event detector now NONE.
- **Semiconductor sector:** SOXX down –2.93% on the day but up +6.0% from the $523 intraday low. The sector is still under pressure. Apple AI reveal underwhelming continues to drag tech. The bounce is a relief rally, not a trend reversal.
- **Yahoo Finance 1M daily data (last update):**
  - QQQ: 704.55 | day –1.49% | week –5.47% | month –1.11%
  - SOXX: 554.79 | day –2.93% | week –8.31% | month +4.12%
  - SPY: 734.40 | day –0.47% | week –3.14% | month –0.50%
  - VOO: 675.29 | day –0.65% | week –3.13% | month –0.50%
  - NVDA: 206.37 | day –0.91% | week –7.21% | month –5.78%
  - GOOG: 361.865 | day +0.03% | week +1.40% | month –6.04%
  - AVGO: 390.84 | day –1.94% | week –19.24% | month –9.22%
  - META: 587.49 | day –0.38% | week –1.32% | month –1.52%
- **AVGO / Broadcom:** $390.84. Down ~19% on the week. Post-earnings correction deepening. No re-entry.
- **GOOG / Alphabet:** $361.865. Slightly up today but down 6% on the month. No clear catalyst. Avoid.
- **NVDA:** $206.37. Down 7.2% on the week. No catalyst. Avoid.
- **QQQ:** $704.55. Down 5.5% on the week. The core liquid growth ETF. Sold 6 shares at $690.79 today. Do not re-buy today (anti-churn). Rebuild tomorrow after 16:20Z.
- **SOXX:** $554.79. Down 8.3% on the week. Sold 2 shares at $552.30 and 1 share at $523.12 today. Do not re-buy today (anti-churn). Rebuild tomorrow after 16:40Z.
- **News access:** Yahoo Finance RSS returned sparse headlines. No actionable news for the universe.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Event detector:** NONE. Market orderly. No autonomous sell triggers.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. Only position left. 13.84%, at 20% non-QQQ ETF cap. Cannot add. | 10–20% |
| QQQ | Buy on pullback (tomorrow PM) | Core liquid growth. Sold at $690.79 today. Anti-churn until 16:20Z Jun 10. Rebuild tomorrow PM. | 15–35% |
| SOXX | Buy on deeper pullback (tomorrow PM) | Chip exposure. Sold at $523.12 today. Anti-churn until 16:40Z Jun 10. Rebuild tomorrow PM. | 5–15% |
| NVDA | Avoid | Individual semi risk. No catalyst. | 0% |
| GOOG | Avoid | Down 6% on month. No catalyst. | 0% |
| AVGO | Avoid | Post-earnings correction. Down 19% on week. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Risk-off tape. No edge. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **NO NEW BUYS TODAY.** Anti-churn hard stop prohibits same-day re-buy of QQQ and SOXX. VOO is at concentration cap. No other universe symbols offer actionable setups.
3. **Tomorrow's deployment plan (Jun 10):**
   - AUTHORIZE RE-ENTRY QQQ — 24-hour cooldown expires 16:20Z Jun 10. Set limit buy at $695.00 or below. Execute via tactical agent at 16:40Z/16:50Z if triggered.
   - AUTHORIZE RE-ENTRY SOXX — 24-hour cooldown expires 16:40Z Jun 10. Set limit buy at $540.00 or below. Execute via tactical agent at 16:40Z/16:50Z/17:40Z if triggered.
   - Target: rebuild gross exposure to 30–50% defensive band.
4. **No market orders.** All future buys must be limit orders only.
5. **Cash reserve:** ~$8,407 (~86.16%). Preserve for tomorrow's deployment.
6. **Gross exposure target:** 30–50% defensive band. Current 13.84%. Rebuilding to 30%+ requires ~$1,577 in new buys. Do not rush.
7. **No same-day round trips.** If a symbol is bought tomorrow, it may NOT be sold tomorrow unless the hourly note explicitly authorizes the exit.
8. **Event detector override:** NONE classification. No autonomous action needed.

## Macro Themes
- **Actionable now:** Risk-off rotation out of tech/semis. Cash is king on days like this. The defensive posture (13.84% exposure) prevented further damage.
- **Worth monitoring:** Apple AI disappointment is dragging the entire tech complex. Watch for any reversal in sentiment.
- **Worth monitoring:** Iran deal hopes faded. Geopolitical risk premium may return to oil and equities.
- **Interesting but not actionable yet:** QTUM quantum computing ETF. Government quantum headlines. Thin and extended.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance public chart API used as fallback for 1M/1W/1D performance.
- **News access:** Yahoo Finance RSS is primary source. Sparse actionable headlines today.
- **Alpaca `get-latest-price` bars** timestamps at 19:34Z, current within 15 minutes.
- **Day-trade status:** 0/3 official. No same-day round trips today.
- **SOXX liquidity:** 21 trades, 1,320 vol at 19:34Z — acceptable for limit orders.
- **QQQ liquidity:** 36 trades, 2,223 vol at 19:34Z — liquid.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.76K equity, QQQ capped at 6 shares; VOO at 2 shares (at cap); SOXX capped at 3 shares.
- **Repo hygiene:** Clean. No tracked files deleted. No unauthorized staged changes. Staged memory files only (ledger.md, tactical_last_prices.json).
- **Event detector:** `priorTimestamp` present (19:30:03.194Z). Working correctly. Classification NONE.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.**
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted, restore from HEAD before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; VOO at 2 shares.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **Lock files must NOT contain auto-expiration timestamps.**
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data.
- **Tactical agent may execute unauthorized trades AND conceal them.** Live broker reconciliation is mandatory.
- **Buying the first intraday spike on a news breakout without a limit can result in poor fill.**
- **Missing .gitignore or stale tracked files cause repo pollution.**
- **Event detector state file (`memory/tactical_last_prices.json`) needs monitoring.**
- **The tactical agent must NOT sell positions based on event detector flags alone.** Event detector flags are inputs, not autonomous sell triggers.
- **Do NOT chase relief bounces in a correction.** If we sold near the lows, wait for a pullback or a clear trend reversal before re-entering.
- **In a risk-off tape, broad-market ETFs (VOO, QQQ) outperform individual growth stocks.** The current portfolio is correctly positioned with VOO only.
- **The anti-churn hard stop is a critical guard.** Same-day round trips destroy edge. If a symbol is sold today, it may NOT be bought back today, regardless of how attractive the price looks.
- **24-hour cooldown is calendar-time, not trading-session-time.** A symbol sold at 12:20 PM ET cannot be re-bought until 12:20 PM ET the next day.
- **Todo.md written at 19:35Z is in effect for tomorrow's 9:40 AM ET and 9:50 AM ET tactical runs.** The next hourly run is 13:35Z (9:35 AM ET). Therefore, the todo.md must explicitly block re-buys with exact time constraints.
