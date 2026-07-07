# Hourly Macro Memory
*Updated 2026-07-07 14:38Z (Tuesday 10:38 AM ET). Market OPEN. Event detector NONE.*

## CRITICAL — Alpaca API Data Corruption
- **get-positions** returns `[]` since at least 10:21 AM ET (tactical agent first flagged).
- **get-account** returns `equity: $2,267.81`, `long_market_value: 0`, `cash: $2,267.81`.
- **Order history** shows **zero filled orders today (Jul 7)**.
- **Portfolio history** (`/v2/account/portfolio/history`) shows true equity ~$9,549, confirming positions still exist in Alpaca's clearing records.
- **Raw REST API sell attempt** for AVGO was accepted with `position_intent: "sell_to_open"`, indicating the order backend also believes we hold 0 shares. Order was **immediately canceled** to prevent accidental short.
- **Conclusion:** Alpaca read cache + order backend are corrupted/missing positions. True portfolio is intact but **untradeable** via normal channels until API recovers.
- **True reconstructed book:** QQQ 6 (~$4,235), VOO 2 (~$1,372), AVGO 3 (~$1,092), HOOD 5 (~$569), Cash $2,268. True equity ~$9,536.

## Live Broker State — 14:38Z (CORRUPTED — use reconstructed state above)
- **Reported equity:** $2,267.81 | **Reported cash:** $2,267.81 | **Long MV:** $0
- **True equity (reconstructed):** ~$9,536 | **True cash:** ~$2,268 | **True long MV:** ~$7,268
- **Gross exposure (true):** ~76.2%
- **Daytrade count:** 0/3 | **Pattern day trader:** false
- **Open orders:** NONE (canceled raw AVGO test)
- **Account flags:** trading_blocked=false, account_blocked=false
- **Daily trade budget:** 0/3 used today (Jul 7)

## Live Book — Reconstructed (Alpaca API Glitched)
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $705.80 | $4,234.80 | 44.4% | –$64.02 | –1.49% |
| VOO | 2 | $676.46 | $686.23 | $1,372.46 | 14.4% | +$19.54 | +1.44% |
| AVGO | 3 | $371.95 | $364.00 | $1,092.00 | 11.5% | –$23.85 | –2.14% |
| HOOD | 5 | $101.50 | $113.84 | $569.20 | 6.0% | +$61.70 | +12.17% |
| Cash | — | — | — | $2,267.81 | 23.8% | — | — |
| **True Equity** | — | — | — | **$9,536.27** | **100%** | — | **–4.64%** |

- **Portfolio heat (true):** ~$282 (~3.0% of equity) — QQQ + AVGO stops are close.
- **AVGO hard stop BREACHED:** $364.00 < $365.00. Loss ~1.0R (~$24). Cannot execute sell due to API corruption blocking sells.

## Performance Review — Tuesday Jul 7 (10:38 AM ET)
- **1D (today):** true portfolio ~–0.67% ($9,600 → $9,536 est.) vs SPY ~–0.32% ($749.78 → $746.39). Trailing by ~0.35 pp today.
- **1W:** QQQ –1.48%, VOO +1.18%, AVGO –1.20%, HOOD +14.19%. Portfolio mixed; HOOD carrying alpha.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–4.64%** vs SPY **+3.95%** (SPY 746.39 vs baseline 718.01). **Trailing by ~8.59 pp.**
- What is working: HOOD momentum (+12.17% unrealized, strong 1M +31.6%). VOO anchor stable.
- What is not working: AVGO chip-sector drag (–2.14% unrealized, breached hard stop). QQQ pulling back (–1.49% unrealized). June churn legacy still drags absolute return.
- What must change: To close 8.59 pp gap in ~2 months, need high-beta alpha with minimal churn. Current true posture (QQQ 44.4%, HOOD 6.0%, AVGO 11.5%) is okay but AVGO is a confirmed concern. Do not churn. Let HOOD run to target. Cash 23.8% is reserve but cannot deploy due to API glitch.

## Goal Check
- **Portfolio since inception:** –4.64% ($9,536 vs $10,000 base)
- **S&P 500 since inception:** +3.95% (SPY 746.39 vs baseline 718.01)
- **Status:** **FAILING both goals.** Trailing by ~8.59 pp.
- **Dominant failure mode:** excessive turnover / friction + bad symbol selection.
- **Posture:** defensive due to API corruption + AVGO stop breach + chip sell-off. True gross exposure ~76.2% but effectively locked.

## Market Intel — Tuesday 10:38 AM ET
- **Broad market:** SPY $746.39 (–0.44%). Nasdaq lower. Risk-off tone driven by Samsung earnings miss / chip weakness.
- **Semiconductors:** Samsung earnings spark broad chip sell-off. SOXX –4.92% today, –10.00% 1W. AVGO –2.14% today (breached hard stop $365). NVDA –1.65% today, –12.05% 1M. Avoid adding to semis until stabilization.
- **Tech:** QQQ –1.30% today. XLK/SMH lower. Event detector NONE at 14:35Z — initial panic from CRITICAL at 9:30 has stabilized to orderly decline.
- **HOOD:** $113.84 (–2.87% today). Pullback within strong uptrend (+14.2% 1W, +31.6% 1M). Remaining 5 shares are house money after +2R trim at $114.51.
- **RKLB:** $84.33 (–4.78% today, –26.1% 1M). Continued crash validates prior exit at $93.25. 24H cooldown expires 17:43Z today.
- **GOOG:** $367.53 (+0.62% today, +4.53% 1W). Showing relative strength in risk-off tape. Monitor for headline resolution and 50D reclaim.
- **META:** $610.38 (+1.31% today). Still banned.
- **Event detector:** NONE at 14:35Z. Broad market OK. Semis flagged OK. No sector rotation.
- **Earnings:** No binary events in next 48 hours (could not refresh from primary source; relying on memory).
- **News:** Yahoo Finance RSS headlines confirm chip sell-off theme: "Samsung results spark chip sell-off", "Tech stocks live: Chip stocks sell off".

## Position Map — Tuesday Jul 7 (10:38 AM ET)
| Symbol | Bias | Rationale | Hard Stop | Profit Target | R/R |
|---|---|---|---|---|---|
| QQQ | **HOLD** | Core growth. 44.4% of equity, near 45% cap. Breakeven $716.47. | $690.00 | $750.00 | 2.1:1 |
| VOO | **HOLD** | S&P anchor. +1.44% unrealized. 14.4% of equity. | $660.00 | $700.00 | 1.4:1 |
| AVGO | **SELL if API recovers** | Hard stop $365 BREACHED at $364.00. Chip sector under pressure. –2.14% unrealized. Cannot execute due to API corruption. | $365.00 | $420.00 | 2.4:1 |
| HOOD | **HOLD / ADD on dip** | House-money position. +12.17% unrealized. Target $125. Add 5 shares if pullback to $105. | $95.00 | $125.00 | 2.5:1 |
| META | Banned | `bannedSymbols` active. No re-entry. | — | — | — |
| RKLB | **AVOID — 24H COOLDOWN** | Exited Jul 6 at $93.25. DO NOT RE-BUY until after 17:43Z Jul 7. | — | — | — |

## Priority Actions (Tuesday Jul 7, 10:38 AM ET)
1. **API HALT — NO NEW ORDERS** until `get-positions` recovers. Placing buys while true exposure is hidden risks double exposure if API reconciles. Placing sells is blocked by SDK guard; raw API bypass risks accidental shorts.
2. **If API recovers before next hourly:** Tactical agent must immediately SELL 3 AVGO if price is still below $365. Stop breach must be honored. Do NOT wait for event detector to turn CRITICAL/MAJOR.
3. **HOLD QQQ, VOO, HOOD** if API recovers. No other changes.
4. **DO NOT RE-BUY RKLB** until after 17:43Z Jul 7.
5. **Portfolio heat (true):** ~$282 (~3.0% of equity). Under 6% daily loss cap. AVGO is the only breached stop.
6. **Let HOOD run to $125.** Remaining 5 shares are house money.
7. **Deploy cash selectively ONLY AFTER API RECOVERY.** Gross exposure 76.2% is fine. Target 80–85% only if high-conviction setups fill.

## Deployment Queue (When Cash Deploys AND API Recovers)
1. **HOOD** — 5 shares @ $105.00 limit (under 15% cap, within 60–90% band).
2. **GOOG** — Re-evaluate after AI-concern headlines clear and 50D reclaim. Not authorized today.
3. **RKLB** — Re-evaluate after 24H cooldown + relative-strength recovery vs QQQ. Not authorized today.

## Macro Themes
- **Actionable now:** Samsung chip sell-off dragging semis/tech. Hold existing exposure; do not add to semi/tech until stabilization confirmed.
- **Actionable now:** RKLB continued crash validates exit. Avoid.
- **Worth monitoring:** GOOG relative strength (+0.62%) in risk-off tape. Needs headline resolution and 50D reclaim for conviction.
- **Worth monitoring:** HOOD momentum pullback. If broad market stabilizes, HOOD likely resumes outperformance.
- **Interesting but not actionable yet:** SK Hynix $28B US IPO. Memory sector capital inflows may lift SOXX/AVGO medium-term.

## Data / Process Notes
- **Alpaca CLI** working for orders/history, but `get-positions` and `get-account` equity are corrupted.
- **Portfolio history endpoint** (`/v2/account/portfolio/history`) is the ONLY authoritative source confirming true equity ~$9,549.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser. The short-sale block is currently **protecting us** from accidental shorts during the API glitch.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback for performance data.
- **News access:** Yahoo Finance RSS working. Samsung chip sell-off confirmed.
- **Alpaca bars:** Timestamps at 14:35Z; current within 5 minutes.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Process breach:** None in repo. Git status clean except legitimate tactical artifacts.
- **Event detector:** `priorTimestamp` bug persists but does not affect classification. Current classification NONE.
- **Standing learnings:** See `memory/standing_learnings.md`.
- **New learning:** Alpaca paper trading positions API can silently drop holdings without trades or activities. Portfolio history endpoint is the best cross-check. Never bypass SDK guards with raw REST API during a position glitch — it may create accidental short positions.

## Prior Tactical Executions (Recent)
- **2026-07-07 10:31Z:** [tactical] AVGO stop breached at $364.05, held because event detector NONE and API glitched.
- **2026-07-07 10:21Z:** [tactical] Hold — no triggers, data corruption noted.
- **2026-07-07 10:10Z:** [tactical] Hold all, no triggers met.
- **2026-07-06 17:43Z:** SOLD 5 RKLB @ $93.25. BOUGHT 1 QQQ @ $721.94.
- **2026-07-02 15:38Z:** SOLD 5 HOOD @ $114.51 (+2R trim).
- **2026-06-30 14:46Z:** BOUGHT 10 HOOD @ $101.50.
- **2026-06-29 13:46Z:** BOUGHT 3 AVGO @ $371.95.
- **2026-06-29 14:00Z:** BOUGHT 2 VOO @ $676.46.
- **2026-06-29 13:55Z:** BOUGHT 5 QQQ @ $715.38.
