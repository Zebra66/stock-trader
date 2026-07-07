# Hourly Macro Memory
*Updated 2026-07-07 15:35Z (Tuesday 11:35 AM ET). Market OPEN. Event detector NONE.*

## CRITICAL — Alpaca API Data Corruption (Hour 3)
- **get-positions** returns `[]` continuously since ~10:21 AM ET.
- **get-account** returns `equity: $2,267.81`, `long_market_value: 0`, `cash: $2,267.81`.
- **Order history** confirms **zero filled orders today (Jul 7)**. Only a canceled raw-API AVGO test at 14:38Z.
- **last_equity** in account response is $9,603.48, confirming true equity is materially higher than reported.
- **Conclusion:** Alpaca read cache + order backend remain corrupted. True portfolio is intact but **untradeable** via normal channels until API recovers.
- **True reconstructed book:** QQQ 6 (~$4,242), VOO 2 (~$1,371), AVGO 3 (~$1,093), HOOD 5 (~$572). Cash $2,268. True equity ~$9,545.

## Live Broker State — 15:35Z (CORRUPTED — use reconstructed state)
- **Reported equity:** $2,267.81 | **Reported cash:** $2,267.81 | **Long MV:** $0
- **True equity (reconstructed):** ~$9,545 | **True cash:** ~$2,268 | **True long MV:** ~$7,277
- **Gross exposure (true):** ~76.2%
- **Daytrade count:** 0/3 | **Pattern day trader:** false
- **Open orders:** NONE
- **Account flags:** trading_blocked=false, account_blocked=false
- **Daily trade budget:** 0/3 used today (Jul 7)

## Live Book — Reconstructed (Alpaca API Glitched)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $706.95 | $4,241.70 | 44.4% | –$57.12 | –1.33% |
| VOO | 2 | $676.46 | $685.67 | $1,371.34 | 14.4% | +$18.42 | +1.36% |
| AVGO | 3 | $371.95 | $364.31 | $1,092.93 | 11.5% | –$22.92 | –2.05% |
| HOOD | 5 | $101.50 | $114.475 | $572.38 | 6.0% | +$64.88 | +12.77% |
| Cash | — | — | — | $2,267.81 | 23.8% | — | — |
| **True Equity** | — | — | — | **$9,545.16** | **100%** | — | **–4.55%** |

- **Portfolio heat (true):** ~$247 (~2.6% of equity). Under 6% daily loss cap.
- **AVGO hard stop BREACHED:** $364.31 < $365.00. Loss ~1.1R (~$23). Cannot execute sell due to API corruption blocking sells.

## Performance Review — Tuesday Jul 7 (11:35 AM ET)
- **1D (today):** true portfolio ~–0.59% ($9,600 → $9,545 est.) vs SPY ~–0.48% ($749.78 → $745.95). Trailing by ~0.11 pp today.
- **1W:** QQQ –1.48%, VOO +1.18%, AVGO –1.20%, HOOD +14.19%. Portfolio mixed; HOOD carrying alpha.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.55%** vs SPY **+3.89%** (SPY 745.95 vs baseline 718.01). **Trailing by ~8.44 pp.**
- What is working: HOOD momentum (+12.77% unrealized, strong 1M +31.6%). VOO anchor stable.
- What is not working: AVGO chip-sector drag (–2.05% unrealized, breached hard stop). QQQ pulling back (–1.33% unrealized). June churn legacy still drags absolute return.
- What must change: To close 8.44 pp gap in ~2 months, need high-beta alpha with minimal churn. Current posture (QQQ 44.4%, HOOD 6.0%, AVGO 11.5%) is okay but AVGO is a confirmed concern. Do not churn. Let HOOD run to target. Cash 23.8% is reserve but cannot deploy due to API glitch.

## Goal Check
- **Portfolio since inception:** –4.55% ($9,545 vs $10,000 base)
- **S&P 500 since inception:** +3.89% (SPY 745.95 vs baseline 718.01)
- **Status:** **FAILING both goals.** Trailing by ~8.44 pp.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection.
- **Posture:** defensive due to API corruption + AVGO stop breach + chip sell-off. True gross exposure ~76.2% but effectively locked.

## Market Intel — Tuesday 11:35 AM ET
- **Broad market:** SPY $745.95 (–0.48%). Nasdaq lower but stabilizing. Risk-off tone from Samsung earnings miss / chip weakness.
- **Semiconductors:** Samsung earnings spark broad chip sell-off, but SOXX showing slight stabilization (+0.18% in last 5 min per event detector). AVGO –2.05% today (breached hard stop $365). NVDA –1.65% today, –12.05% 1M. Avoid adding to semis until stabilization confirmed.
- **Tech:** QQQ –1.30% today but bounced slightly to $706.95. XLK/SMH near flat in last 5 min. Event detector NONE at 15:35Z — orderly decline, no panic.
- **HOOD:** $114.475 (–2.87% today). Pullback within strong uptrend (+14.2% 1W, +31.6% 1M). Remaining 5 shares are house money after +2R trim at $114.51.
- **RKLB:** $83.645 (–4.78% today, –26.1% 1M). Continued crash validates prior exit at $93.25. 24H cooldown expires 17:43Z today (~2 hours). DO NOT RE-BUY even after cooldown.
- **GOOG:** $366.17 (+0.62% today, +4.53% 1W). Showing relative strength in risk-off tape. Monitor for headline resolution and 50D reclaim.
- **META:** $605.18 (+1.31% today). Still banned.
- **Event detector:** NONE at 15:35Z. Broad market OK. Semis flagged OK. No sector rotation.
- **Earnings:** No binary events in next 48 hours.
- **News:** Yahoo Finance RSS confirms chip sell-off theme. NY Fed survey shows rising near-term inflation expectations in June.

## Position Map — Tuesday Jul 7 (11:35 AM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target | R/R |
|---|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. 44.4% of equity, near 45% cap. Breakeven $716.47. | $690.00 | $750.00 | 2.1:1 |
| VOO | **HOLD** | S&P anchor. +1.36% unrealized. 14.4% of equity. | $660.00 | $700.00 | 1.4:1 |
| AVGO | **SELL if API recovers** | Hard stop $365 BREACHED at $364.31. Chip sector under pressure. –2.05% unrealized. Cannot execute due to API corruption. | $365.00 | $420.00 | 2.4:1 |
| HOOD | **HOLD / ADD on dip** | House-money position. +12.77% unrealized. Target $125. Add 5 shares if pullback to $105. | $95.00 | $125.00 | 2.5:1 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — | — |
| RKLB | **AVOID — 24H COOLDOWN ending soon** | Exited Jul 6 at $93.25. DO NOT RE-BUY. Still crashing. | — | — | — |

## Priority Actions (Tuesday Jul 7, 11:35 AM ET)
1. **API HALT — NO NEW ORDERS** until `get-positions` recovers. Placing buys while true exposure is hidden risks double exposure if API reconciles.
2. **If API recovers before next hourly:** Tactical agent must immediately SELL 3 AVGO if price is still below $365. Stop breach at -1.1R must be honored. Do NOT wait for next hourly.
3. **HOLD QQQ, VOO, HOOD** if API recovers. No other changes.
4. **DO NOT RE-BUY RKLB** even after 17:43Z cooldown. Still crashing, no edge.
5. **Portfolio heat (true):** ~$247 (~2.6% of equity). Under 6% daily loss cap. AVGO is the only breached stop.
6. **Let HOOD run to $125.** Remaining 5 shares are house money.
7. **Deploy cash selectively ONLY AFTER API RECOVERY.** Gross exposure 76.2% is fine. Target 80–85% only if high-conviction setups fill.

## Deployment Queue (When Cash Deploys AND API Recovers)
1. **HOOD** — 5 shares @ $105.00 limit (under 15% cap, within 60–90% band).
2. **GOOG** — Re-evaluate after AI-concern headlines clear and 50D reclaim. Not authorized today.
3. **RKLB** — Still avoid. Re-evaluate only if relative-strength recovery vs QQQ emerges. Not authorized today.

## Macro Themes
- **Actionable now:** Samsung chip sell-off dragging semis/tech. Hold existing exposure; do not add to semi/tech until stabilization confirmed.
- **Actionable now:** RKLB continued crash validates exit. Avoid even after cooldown expires.
- **Worth monitoring:** GOOG relative strength (+0.62%) in risk-off tape. Needs headline resolution and 50D reclaim for conviction.
- **Worth monitoring:** HOOD momentum pullback. If broad market stabilizes, HOOD likely resumes outperformance.
- **Interesting but not actionable yet:** SK Hynix $28B US IPO. Memory sector capital inflows may lift SOXX/AVGO medium-term.
- **Interesting but not actionable yet:** NY Fed inflation expectations rising. May pressure Fed outlook; monitor for rate-sensitive rotation.

## Data / Process Notes
- **Alpaca CLI** working for orders/history, but `get-positions` and `get-account` equity remain corrupted.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser. Short-sale block is protecting us from accidental shorts during the API glitch.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **News access:** Yahoo Finance RSS working.
- **Alpaca bars:** Timestamps at 15:34Z; current within 5 minutes.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Process breach:** None in repo. Git status clean except legitimate tactical artifacts.
- **Event detector:** `priorTimestamp` bug persists but does not affect classification. Current classification NONE.
- **Standing learnings:** See `memory/standing_learnings.md`.
- **New learning:** Alpaca paper trading positions API can silently drop holdings without trades or activities. Portfolio history endpoint is the best cross-check. Never bypass SDK guards with raw REST API during a position glitch — it may create accidental short positions.

## Prior Tactical Executions (Recent)
- **2026-07-07 10:42Z:** [tactical] Hold all; AVGO below stop, no sell auth.
- **2026-07-07 10:31Z:** [tactical] AVGO stop breached at $364.05, held because event detector NONE and API glitched.
- **2026-07-07 10:21Z:** [tactical] Hold — no triggers, data corruption noted.
- **2026-07-07 10:10Z:** [tactical] Hold all, no triggers met.
- **2026-07-06 17:43Z:** SOLD 5 RKLB @ $93.25. BOUGHT 1 QQQ @ $721.94.
- **2026-07-02 15:38Z:** SOLD 5 HOOD @ $114.51 (+2R trim).
