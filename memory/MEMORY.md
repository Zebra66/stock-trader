# Hourly Macro Memory
*Updated 2026-05-11 13:05 ET from fallback-confirmed broker state and live market-data fallback snapshots saved under `temp_files/`.*

## Current Regime
- **Regime:** **Offensive catch-up**
- **Goal check:** **Off track — portfolio is positive in absolute terms, but not yet beating the S&P 500.** Since the 2026-05-01 deposit, account return is **+2.01%** vs **SPY +2.64%**.
- **Dominant failure mode:** **cash drag**
- **Current gross exposure:** **53.9%**
- **Target gross-exposure band:** **65-75%**
- **Why this band now:** the tape is still risk-on and AI / semiconductor leadership remains intact, but the account is young and already concentrated in QQQ, so catch-up should come through selective adds rather than max deployment or leverage.

## Current Macro Thesis
US large-cap growth remains the leadership regime. Nasdaq / AI / semiconductor strength is still the cleanest actionable theme: **QQQ, SOXX, NVDA, AVGO, GOOG, and QTUM** all show strong 1M and 3M momentum, while **SPY/VOO** are lagging and defensive alternatives like **GLD** are not the best use of fresh capital right now. News fallback coverage also points the same way: Reuters noted fresh S&P/Nasdaq highs on AI and earnings optimism, while recent Alphabet / Broadcom / chip-demand coverage continues to reinforce hyperscaler AI capex and inference infrastructure demand.

The portfolio is making money, but not fast enough to satisfy both objectives because too much capital is still idle while the strongest part of the universe is rallying. Recent execution is mixed: **1D portfolio +0.31% vs SPY +0.25%** is acceptable, but **1W portfolio +2.12% vs SPY +2.98%** shows the book is still underdeployed. **2W = N/A due to insufficient live history.** What must change today is not the sector posture; it is the **deployment level**. Increase exposure toward the lower edge of the target band through the best AI / semi setups, while avoiding over-adding to already-dominant QQQ unless it clearly remains the cleanest vehicle.

## Account State
- **Equity / cash / buying power:** **$10,200.91 / $4,705.34 / $14,906.25**
- **Current holdings:** **GOOG 1, QQQ 6, QTUM 2, SOXX 1**
- **Per-position unrealized P&L:**
  - **SOXX:** +10.44%
  - **QTUM:** +7.59%
  - **QQQ:** +2.87%
  - **GOOG:** +0.98%
- **Recent fill to preserve in memory:** tactical added **QQQ 1 @ 712.52** on **2026-05-11 11:12 ET**, lifting exposure from the prior sub-50% zone to roughly **54%**.

## Priority Actions For The Next Hour
1. **Deploy toward 65-75% gross exposure** if confirmation rules are met; do not sit on excess cash in a still-orderly AI-led tape.
2. **Primary add queue:** **SOXX**, then **GOOG**, then **NVDA**.
3. **Do not cut current winners** just because they are green; the current problem is underdeployment, not bad open positions.
4. **Do not add to QQQ above a ~45% account weight** unless SOXX / GOOG / NVDA triggers fail and QQQ is the only confirmed leader.
5. **No leverage. No averaging down. No stale-quote orders.**

## Ranked Deployment Queue
1. **SOXX** — strongest broad semiconductor expression; 1W **+14.8%**, 1M **+37.2%**; adds leadership without single-name event risk.
2. **GOOG** — still strong on 1M / 6M / 1Y, but currently pulling back intraday; preferable as a controlled add on weakness / reclaim rather than chasing only high-beta semis.
3. **NVDA** — top-quality AI leader with strong relative strength, but only initiate on confirmed breakout or orderly pullback because it is near short-term highs.

## Universe Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Hold/Watch | Strong trend, but weaker near-term setup than SOXX/NVDA today | 0-6 |
| EIS | Avoid | Not a top relative-strength theme vs AI / semis | 0 |
| GLD | Avoid for now | Useful hedge only if tape turns risk-off; not current edge | 0-5 |
| GOOG | **Buy** | AI stack exposure, strong medium-term momentum, current pullback may offer entry | 6-10 |
| HOOD | Watch | Good momentum, but outside current highest-conviction macro sleeve | 0-3 |
| META | Avoid | Weak 1W / 1M relative trend vs the rest of the universe | 0 |
| NVDA | **Buy** | AI leader; actionable only with price confirmation | 0-8 |
| QQQ | Hold | Core broad growth exposure already large; do not let it dominate further without reason | 38-45 |
| QTUM | Hold | Valid AI/quantum thematic sleeve; smaller supporting position only | 3-5 |
| RKLB | Watch only | Outstanding momentum and news, but too extended after a near-parabolic 1W / 1M move | 0-3 |
| SHLD | Avoid | Weak relative trend | 0 |
| SOXX | **Buy** | Best sector ETF expression of current leadership | 8-12 |
| VOO | Hold/Avoid adds | Fine benchmark exposure, but weaker upside than QQQ/SOXX in current regime | 0-5 |
| ARKX | Watch | Positive trend, but secondary to RKLB / semis / QQQ | 0-3 |

## Notes
### Current holdings
- **QQQ** is the anchor position and already close to the max intended weight.
- **SOXX** and **QTUM** are the best current winners; let them run.
- **GOOG** is still constructive and should be treated as an add-on-pullback candidate, not a laggard to cut.

### Near-term watchlist
- **NVDA** — cleanest single-name breakout candidate.
- **AVGO** — still valid, but setup is slightly less urgent than SOXX / GOOG / NVDA.
- **RKLB** — interesting and supported by recent contract/news flow, but current move is too extended for disciplined same-day deployment.

### Macro themes to monitor
- **Actionable now:** AI capex, semiconductor leadership, Nasdaq breadth.
- **Worth monitoring:** export-control / geopolitical headline risk; whether GOOG’s pullback is only normal digestion or the start of relative weakness.
- **Interesting but not actionable yet:** top-investor portfolio-change coverage was insufficient / noisy this run, so no investor-copycat thesis is authorized.

## Data / Research Notes
- **Broker fallback used:** Alpaca CLI timed out repeatedly this run. Account state was therefore taken from the deployed dashboard endpoints: `/api/chart-data`, `/api/portfolio`, `/api/market-clock`, `/api/sp500-comparison`.
- **Market-data fallback used:** **Yahoo Finance chart endpoint** for universe returns, live reference prices, and support/resistance ranges because `FMP_API_KEY` is unavailable.
- **Search fallback used:** **Google News RSS** because a direct Google Search tool was unavailable in the workspace.
- **Quote confirmation:** fallback broker prices and Yahoo prices matched closely enough for **GOOG / QQQ / SOXX** to treat the snapshot as tradable, but tactical execution must still confirm a fresh live quote before any order.

## Standing Learnings
- Size from **account equity**, not buying power.
- **Commission-free ≠ friction-free**; expected edge must clear spread, slippage, CAT, SEC, and FINRA costs.
- **Never average down.**
- If broker quotes are stale or unavailable, require a second source confirmation before authorizing orders.
- If direct broker tooling hangs, use the deployed dashboard endpoints and label the state **fallback-confirmed**.
- If direct Google Search is unavailable, use dated public-news fallback sources and ignore stale/noisy headlines.
