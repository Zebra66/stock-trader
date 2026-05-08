# Hourly Macro Memory
*Updated 2026-05-08 10:40 ET after live broker refresh, Yahoo Finance fallback market snapshot, and Google News RSS fallback news scan.*

## Current Regime
- **Regime:** **Offensive catch-up**
- **Goal check:** **Off track — positive absolute return but still trailing the S&P 500 since inception.**
  - Portfolio since inception: **+1.47%** on **$10,137.70** equity vs **$10,000** invested.
  - SPY since inception baseline (**2026-05-01**): **+2.61%**.
- **Dominant failure mode:** **cash drag**.
- **Why now:** the current AI / growth sleeve is working, but the book is still only **46.6% gross exposed**, which has left too much performance on the table during a constructive tape.

## Start-of-Day Performance Review
- **1D:** portfolio **+0.84%** vs **SPY +0.80%** → recent execution is helping.
- **1W:** **N/A due to insufficient live history**.
- **2W:** **N/A due to insufficient live history**.
- **Reflection:** what is working is the current concentration in **QQQ / GOOG / SOXX / QTUM**. What is not working is the leftover cash balance. To get back on track for the 3-month objective, the system should **add modestly into confirmed leaders**, not rotate into laggards and not churn small winners.

## Current Broker State
- **Market clock:** open; next close **2026-05-08 16:00 ET**.
- **Account equity / cash / buying power:** **$10,137.70 / $5,417.86 / $15,555.56**.
- **Long market value:** **$4,719.84**.
- **Current gross exposure:** **46.6%**.
- **Target gross-exposure band for today:** **50-60%**.
- **Why this band fits:** enough risk-on exposure to reduce cash drag in a constructive AI / Nasdaq tape, but still leaves a healthy reserve if the breakout fails.
- **Exact blocker if cash stays above target:** no fresh add should fire unless the tactical agent gets a **current regular-hours price refresh** and sees **breakout or pullback-reclaim confirmation**. Alpaca latest-bar CLI timed out this run, so held-symbol broker prices came from the live positions snapshot and non-broker confirmation came from Yahoo.

## Current Macro Thesis
The tape remains led by **AI infrastructure, semiconductors, and large-cap growth**. FMP is unavailable because `FMP_API_KEY` is missing, so the return snapshot was rebuilt from the **Yahoo Finance chart API**. That snapshot still favors **SOXX, GOOG, QTUM, QQQ, AVGO, and NVDA** over lower-alpha alternatives such as **GLD**, **VOO**, or medium-term laggards like **META** and **HOOD**. **RKLB** is very strong on fresh contract headlines, but its volatility is still too high to make it the best risk-adjusted deployment choice for this account right now.

Because direct Google Search is not available in this workspace, the news scan used **Google News RSS fallback**. Fresh coverage stays broadly constructive on **Alphabet / AI monetization / cloud**, constructive on **semiconductor AI-capex demand**, and supportive of **Nasdaq leadership near highs**. **Top-investor / 13F** coverage was insufficient and too noisy for action this cycle, so it should not drive trades.

## Priority Actions For The Next Hour
1. **Reduce cash drag with one incremental add only** if regular-hours confirmation appears.
2. **Prefer GOOG first** because it adds exposure without pushing current QQQ concentration too high.
3. **Use SOXX second** if semiconductor leadership extends and GOOG does not trigger.
4. **Treat QQQ as third-choice fresh capital** only if the tape is exceptionally strong, because a sixth share would push QQQ above a 40% ETF weight.
5. **Do not trim current winners** unless the tape breaks support and the broad market confirms the failure.

## Ranked Deployment Queue
1. **GOOG** — strongest blend of momentum, news support, and acceptable post-trade concentration.
2. **SOXX** — strongest sector momentum, but adds more cyclic semiconductor beta.
3. **QQQ** — liquid catch-up vehicle, but only with explicit concentration discipline.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold / selective add only | Broad Nasdaq leadership remains intact, but already a large position; sixth share needs exceptional confirmation | 32-38% |
| GOOG | Buy | Strong 1M/3M relative strength, near highs, constructive AI/cloud backdrop, adds exposure without breaching stock concentration | 8-10% |
| SOXX | Buy on strength | Best sector momentum in the approved universe; valid add only if leadership continues | 5-10% |
| QTUM | Hold | Small, profitable thematic AI/quantum sleeve; no need to force size right now | 2-4% |
| AVGO | Watch / secondary buy | Strong medium-term trend but weaker near-term than GOOG/SOXX and not near fresh highs | 0-4% |
| NVDA | Watch | Strong tape but not currently in the book; monitor as semiconductor leadership confirmation | 0-4% |
| RKLB | Watch only | Powerful momentum and fresh contract news, but too volatile for current risk-adjusted objective | 0-3% |
| META / HOOD / GLD / VOO / EIS / SHLD / ARKX | Avoid for fresh capital now | Either weaker relative strength, lower expected alpha, or insufficient current edge | 0% |

## Current Holdings
- **GOOG 1** @ **386.64** → **$396.70**, unrealized **+$10.06 / +2.60%**.
- **QQQ 5** @ **689.508** → **$705.5628**, unrealized **+$80.27 / +2.33%**.
- **QTUM 2** @ **137.00** → **$143.10**, unrealized **+$12.20 / +4.45%**.
- **SOXX 1** @ **480.6967** → **$509.12**, unrealized **+$28.42 / +5.91%**.
- No current underperformer requires forced liquidation; the problem is **underdeployment**, not bad existing holdings.

## Near-Term Watchlist
- **GOOG:** Yahoo fallback current about **396.3**; nearby resistance **398.0**; support zone **393.5-395.5**.
- **SOXX:** Yahoo fallback current about **510.7**; nearby resistance **511.7-512.0**; support zone **503-505**.
- **QQQ:** broker current about **705.6** / Yahoo about **706.1**; nearby resistance **706.7-707.2**; support zone **700-702**.
- **AVGO:** current about **423.7** but still below the recent **437.7** high; watch, do not prioritize.
- **RKLB:** very strong headline-driven momentum; monitor only, no chase.

## Macro Themes To Monitor
- **Actionable now:** AI capex / cloud monetization / semiconductor leadership → supports **GOOG, SOXX, QQQ**.
- **Worth monitoring:** RKLB space-economy contract momentum, but only for future higher-risk windows.
- **Interesting but not actionable yet:** top-investor 13F moves, fresh analyst-action scans beyond GOOG/AVGO/NVDA, and gold hedging unless the tape turns risk-off.

## Standing Learnings
- Size from **account equity**, not margin buying power.
- **Commission-free is not friction-free**; demand enough edge to overcome spread, slippage, and fees.
- **Never average down.**
- Require **second-source confirmation** when broker quotes are stale, thin, or unavailable.
- If **FMP** is unavailable, use **Yahoo Finance chart API** fallback for return snapshots and record it here.
- If direct Google Search is unavailable, use **Google News RSS** fallback and treat noisy or stale coverage as **non-actionable**.
- When already close to the target exposure band, prefer **one clean add** over multiple small churn trades.
- Check **post-trade concentration**, not just gross exposure; cash drag should not be fixed by blindly overconcentrating a single line item.

## Last Run Summary
- Previous memory correctly identified the live book as **GOOG 1, QQQ 5, QTUM 2, SOXX 1** and exposure near the target band.
- This run refreshed the thesis with new live data, confirmed the book is **still positive in dollars but behind SPY**, and tightened the add priority to **GOOG first, SOXX second, QQQ third**.
