# Hourly Macro Memory
*Updated 2026-06-16 18:35Z (Tuesday 2:35 PM ET). Market OPEN. Fed concluded. Posture: offensive catch-up.*

## Current Cycle Summary — 2026-06-16 18:35Z
- **Status:** Market OPEN. Repo integrity RESTORED. Clean working tree.
- **Event detector:** NONE (priorTimestamp null bug persists; current prices valid).
- **Live broker refresh (authoritative):** Equity $9,753.14 | Cash $7,004.97 | Long $2,748.17 | Gross 28.18% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 ($1,382.90, +1.88% unrealized), AVGO 2 ($762.12, -1.76% unrealized), SOXX 1 ($603.15, -2.60% unrealized).
- **Open orders:** NONE.
- **Stop-losses:** None breached. AVGO $381.06 > $365.00. SOXX $603.15 > $590.00. VOO $691.45 > $650.00.
- **24-hour cooldowns:** QQQ, GOOG, NVDA sold at 19:22Z Mon — cooldown expires at 19:22Z Tue (3:22 PM ET). ~47 minutes remaining.
- **Gross exposure:** 28.18% — far below 60–90% target. Deployment deferred until after cooldown.
- **Fed meeting:** Kevin Warsh's first FOMC concluded at ~18:30Z. Market reaction neutral/flat. SPY $752.04, QQQ $733.15, SOXX $602.92.
- **No action this cycle:** Stops intact, no new orders before 19:22Z cooldown expiry.

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L |
|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $691.45 | $1,382.90 | 14.18% | +$25.50 |
| AVGO | 2 | $387.885 | $381.06 | $762.12 | 7.81% | –$13.65 |
| SOXX | 1 | $619.25 | $603.15 | $603.15 | 6.18% | –$16.10 |
| Cash | — | — | — | $7,004.97 | 71.82% | — |
| **Equity** | — | — | — | **$9,753.14** | **100%** | **–2.47%** |

- **Gross long exposure:** 28.18%
- **Net exposure:** 28.18%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review
- **1D (today):** SPY ~–0.38% (754.83 → 752.04). Portfolio ~–0.38% (last equity $9,790.16 → $9,753.14). Tracking SPY closely.
- **1W (Jun 9 → Jun 16):** SPY ~+2.02%. Portfolio ~–2.47%. Underperforming by ~4.49 pp.
- **2W (Jun 2 → Jun 16):** SPY ~+1.76%. Portfolio ~–2.47%. Underperforming by ~4.23 pp.
- **Since inception (2026-05-04 baseline):** portfolio –2.47% vs SPY +4.74%. Trailing by ~7.21 pp.

## Goal Check
- **Portfolio since inception:** –2.47% ($9,753.14 vs $10,000 base)
- **S&P 500 since inception:** +4.74% (SPY 752.04 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~7.21 pp.
- **Dominant failure mode:** **cash drag / underdeployment.** Gross exposure at 28% while target is 60–90%. The portfolio has been stuck in defensive paralysis for weeks, missing the market rally.
- **What must change:** Deploy capital into core growth positions immediately after the 19:22Z cooldown expires. The 19:35Z hourly run will authorize the deployment.

## Position Map
| Symbol | Bias | Rationale | Target % | Action |
|---|---|---|---|---|
| QQQ | Buy on pullback | Core liquid growth. 24h cooldown until 19:22Z. | 15–25% | **BUY 3 @ $732.50 GTC** (post-19:22Z) |
| SOXX | Hold | Chip exposure. 1 share filled Jun 16 @ $619.25. | 6–10% | **HOLD** — stop $590.00 |
| AVGO | Hold | 2 shares @ $387.89 avg. Underwater. No add. | 5–8% | **HOLD** — stop $365.00 |
| GOOG | Buy on pullback | 24h cooldown until 19:22Z. | 4–8% | **BUY 2 @ $369.50 GTC** (post-19:22Z) |
| NVDA | Buy on pullback | 24h cooldown until 19:22Z. Weak vs SOXX. | 2–4% | **BUY 1 @ $208.50 GTC** (post-19:22Z) |
| VOO | Hold | Anchor. Stable. At 14.2% weight. | 14% | Hold |
| META | Avoid | Banned. | 0% | Avoid |
| RKLB / HOOD / GLD / EIS / SHLD / QTUM / ARKX | Avoid | No edge. | 0% | Avoid |

## Priority Actions for Tuesday
1. **HOLD VOO 2, AVGO 2, SOXX 1.** DO NOT SELL.
2. **NO NEW BUY ORDERS before 19:22Z (3:22 PM ET).** QQQ/GOOG/NVDA 24-hour cooldown active.
3. **After 19:22Z (post-cooldown):** Place QQQ 3@$732.50 GTC, GOOG 2@$369.50 GTC, NVDA 1@$208.50 GTC if market is orderly.
4. **If gross exposure reaches 60%+ after fills, pause new adds and reassess.**
5. **Do NOT cancel authorized limit BUY orders.**
6. **Do NOT sell positions bought by the hourly strategist today.**

## Macro Themes
- **Actionable now:** Fed meeting concluded (Warsh's first). Neutral reaction. Market stable. No hawkish panic. Good for deployment.
- **Actionable now:** TSM +25% capex budget hike + Micron HBM demand surge = strong chip-sector validation. SOXX/AVGO thesis intact.
- **Worth monitoring:** US-Iran durability. If talks collapse, sharp reversal possible. Oil/gas prices still relevant.
- **Worth monitoring:** Trump's trade war threats could force Fed action. Dovish if Fed reacts; risky if trade war escalates.
- **Interesting but not actionable yet:** Cathie Wood bought $529.7M of a popular new stock. Could signal speculative appetite.

## Data / Process Notes
- **Alpaca CLI:** Working. HARD_LOCK regex bug fixed.
- **FMP:** Disabled. Yahoo Finance chart API used for historical snapshot.
- **News access:** Yahoo Finance RSS primary. MarketWatch RSS secondary.
- **Day-trade status:** 0/3. Full flexibility.
- **SOXX liquidity:** Thin (13 trades, 775 vol at 18:36Z). Limit orders only.
- **AVGO liquidity:** Acceptable (32 trades, 1,066 vol at 18:36Z).
- **Earnings:** AVGO passed Jun 3. GOOG est Jul 23; META Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB Aug 6. No earnings within 48 hours.
- **Lock file:** `active: false` (HARD_LOCK lifted). META remains banned.
- **Repo hygiene:** RESTORED. Clean working tree. All tracked files aligned with HEAD.
- **Code integrity:** All guards intact.
- **Event detector note:** `priorTimestamp` null bug persists. Tactical agent or process may be overwriting `memory/tactical_last_prices.json` incorrectly.
- **Historical returns (Yahoo Finance fallback, from 17:35Z run):**
  - QQQ: 1w +3.58%, 1m +3.42%, 3m +23.49%, 6m +20.09%, 1y +37.23%
  - SOXX: 1w +7.59%, 1m +18.94%, 3m +82.55%, 6m +102.95%, 1y +165.92%
  - AVGO: 1w -3.36%, 1m -10.87%, 3m +17.64%, 6m +11.53%, 1y +50.33%
  - GOOG: 1w +1.86%, 1m -6.17%, 3m +22.42%, 6m +19.31%, 1y +107.40%
  - NVDA: 1w +0.51%, 1m -7.13%, 3m +16.09%, 6m +18.70%, 1y +44.62%
  - SPY: 1w +2.02%, 1m +1.76%, since inception +4.75%

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
- **With ~$9.8K equity, concentration caps are extremely tight.** QQQ maxed at ~6 shares; GOOG at ~4 shares; VOO at ~2 shares.
- **Chip-sector rotation away from NVDA toward non-NVDA semis is a real regime signal.** SOXX outperforming NVDA validates broad-ETF approach.
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
- **Event detector state file (`memory/tactical_last_prices.json`) needs investigation.** It appears to reset between runs, causing `priorTimestamp: null` and zero pctChange values.
- **Cash drag is the dominant failure mode when the portfolio is under 60% gross exposure.** The 3-month goal requires deployment, not patience.
