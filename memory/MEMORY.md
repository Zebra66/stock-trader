# Hourly Macro Memory
*Updated 2026-05-04 by the Hourly Macro Strategist.*

## Current Macro Thesis
The tape remains **selectively risk-on**, with leadership still concentrated in **semiconductors, AI infrastructure, and cloud** rather than the whole market moving together. The best evidence this cycle is the multi-timeframe return stack: **SOXX (+34.49% 3m, +37.58% 1m)**, **AVGO (+27.16% 3m, +34.38% 1m)**, **GOOG (+13.20% 3m, +29.95% 1m)**, and **QTUM (+16.64% 3m, +23.68% 1m)** are still the cleanest trend leaders in the universe, while **QQQ (+8.41% 3m)** continues to offer a higher-quality growth beta expression than **VOO (+4.13% 3m)**. Reuters-based fallback news also stays directionally supportive: Alphabet posted another cloud-led beat, Broadcom demand expectations remain tied to custom AI silicon strength, and semiconductor supply-chain commentary still points to robust AI-linked spending.

The caution is unchanged: the market is rewarding **clear AI monetization** and punishing **heavy spending without near-term payoff clarity**. Reuters headlines around the latest earnings reactions show **META** being hit on AI spend / legal scrutiny and **HOOD** falling after weak transaction revenue and a profit miss. **NVDA** remains strategically important, but its nearer-term price response is still less convincing than SOXX / AVGO / GOOG. With the book still flat and the latest reference prices sitting near prior close levels rather than fresh intraday confirmation, the right stance is to **keep meaningful cash, wait for confirmation, and only deploy into the highest-quality setups**.

## Portfolio State
- Equity: **$10,000**
- Buying power: **$20,000**
- Cash: **$10,000**
- Current positions: **none**
- Gross exposure: **0%**
- Current P/L: **$0 realized / $0 unrealized**

## Data & Research Sources Used This Run
- **Historical performance fallback:** Yahoo Finance chart API (`query1.finance.yahoo.com/v8/finance/chart/...`) because **`FMP_API_KEY` is not configured**
- **Live/reference price check:** Alpaca CLI latest-price endpoint
- **News / search fallback:** Google News RSS queries via bash because no direct Google Search workspace tool surfaced in this session
- **Research artifacts saved under:** `temp_files/hourly_market_snapshot_yahoo_2026-05-04.json`, `temp_files/hourly_latest_prices_2026-05-04.jsonl`, `temp_files/news_rss/`

## Priority Actions For The Next Hour
1. **Stay patient unless price confirms** in **SOXX, GOOG, AVGO, or QQQ**; these remain the preferred starter longs.
2. Keep **NVDA** and **QTUM** as secondary adds only after clear reclaim / breakout confirmation; keep **RKLB** as a very small satellite trade only.
3. Keep at least **54% cash** and use **account equity, not buying power**, as the sizing base unless a future hourly cycle explicitly authorizes leverage.
4. Keep **META, HOOD, SHLD** sidelined; treat **GLD** as a hedge/diversifier only on better entry or renewed macro stress.
5. If the tactical cycle is still working with prior-close / after-hours prints, **do not force entries before the cash session confirms the move**.

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power. Margin use requires an explicit hourly decision.
- Commission-free does **not** mean friction-free; tactical entries need expected edge of at least **3x** estimated round-trip cost.
- Round-trip cost assumptions must include **spread, slippage, CAT, SEC sell fees, and FINRA TAF on sells**.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash and record that source in memory.
- Tactical price levels must be refreshed from the latest market snapshot each hourly cycle; do **not** blindly reuse stale thresholds.
- Distinguish **quality of earnings reaction** from raw fundamentals: **GOOG** improved on both, while **META** and **HOOD** weakened despite still-relevant long-term stories.
- When using Google News RSS fallback, prioritize **recent Reuters / major-source headlines** and avoid making trades from stale or low-quality aggregator noise.
- Absence of a fresh high-conviction external catalyst is a valid reason to keep cash rather than forcing exposure.

## Performance Snapshot Used This Run
- Best 3m performers: **SOXX +34.49%**, **AVGO +27.16%**, **QTUM +16.64%**, **GOOG +13.20%**, **EIS +10.42%**, **QQQ +8.41%**
- Weak / broken on 3m basis: **HOOD -25.95%**, **META -15.04%**, **SHLD -9.73%**, **GLD -4.89%**, **RKLB -1.57%**
- Best 1m momentum: **SOXX +37.58%**, **AVGO +34.38%**, **GOOG +29.95%**, **QTUM +23.68%**, **RKLB +20.28%**, **QQQ +15.38%**
- Relative laggard inside AI leadership: **NVDA +3.83% over 3m**, despite still-strong **+77.81% over 1y**

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong AI/custom-silicon demand narrative and elite 1m / 3m momentum; buy only on confirmation because it is extended. | 7% |
| EIS | Hold | Return profile is strong, but liquidity and geopolitical/event risk keep it out of the core book. | 0% |
| GLD | Hold | Useful hedge / diversification candidate, but current momentum is mixed and not strong enough to chase. | 4% |
| GOOG | Buy | Best combination of earnings quality, cloud/AI confirmation, liquidity, and recent relative strength. | 7% |
| HOOD | Sell | Weak post-earnings reaction and soft transaction-revenue profile keep it in the penalty box. | 0% |
| META | Sell | Market is discounting higher AI spend and legal/expectation risk more than upside right now. | 0% |
| NVDA | Hold | Strategic long-term leader, but current tactical setup is still lower quality than SOXX / AVGO / GOOG. | 4% |
| QQQ | Buy | Cleaner way to express growth leadership while tech remains the market’s best liquid factor. | 8% |
| QTUM | Buy | Strong thematic momentum and better relative trend than many secondary names, but keep size below the liquid core. | 4% |
| RKLB | Hold | Strong long-run trend and improving 1m action, but still only earns a very small, high-volatility satellite slot. | 2% |
| SHLD | Sell | Multi-timeframe action remains too weak to deserve scarce risk budget. | 0% |
| SOXX | Buy | Strongest sector-level trend in the universe and the best broad semiconductor/AI expression. | 10% |
| VOO | Hold | Fine market beta, but inferior alpha posture versus QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Improved, but still not compelling enough versus SOXX / QQQ / RKLB to earn capital. | 0% |

## Last Run Summary
- The portfolio stayed **flat** this cycle: **$10,000 equity, $10,000 cash, no positions**.
- **FMP historical-performance remained unavailable** because **`FMP_API_KEY` is missing**, so this run again used the **Yahoo Finance chart API fallback**.
- Latest reference prices kept the preferred leaders **close to, but not decisively through, fresh confirmation levels**, so no change was made to the strategic posture.
- Market leadership remains concentrated in **SOXX / AVGO / GOOG / QQQ / QTUM**, while **META** and **HOOD** still show weaker post-earnings reaction quality.
- **Prompt review completed:** no prompt change was made this cycle because the current hourly prompt already contains the needed fallback-data and tactical-refresh safeguards.

## Execution Summary — 2026-05-04 Hourly Cycle
- Confirmed the account remains **100% cash** with **$10,000 equity** and **no open positions**.
- Refreshed the full-universe multi-timeframe performance snapshot using the documented **Yahoo fallback** and refreshed the latest **Alpaca reference prices** for the likely trade candidates.
- News fallback work continued to support **GOOG / AVGO / semiconductors** and remained cautious on **META / HOOD**, with no fresh high-conviction outside-investor signal strong enough to change the book.
- No portfolio trades were executed from the hourly cycle; the next tactical cycle should stay patient and only act on the refreshed trigger levels below.

## Execution Summary — 2026-05-04 Tactical Cycle
- Reviewed the live account and confirmed the book is still **$10,000 equity / $10,000 cash / no positions**.
- Fetched fresh reference prices for the full tracked universe; all prints were still **prior-close / after-hours style** and none of the defined buy or sell triggers were met.
- No orders were placed because the setups were not in-range and the required post-friction edge was not present.
- Current holdings remain **none**; next expected action is to wait for a live cash-session confirmation and only act if SOXX, GOOG, AVGO, QQQ, NVDA, QTUM, GLD, or RKLB reach their specified reclaim / breakout levels.

## Execution Summary — 2026-05-04 Tactical Cycle
- Confirmed the account is still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed live reference prices for the full tracked universe; all watched names remained **below their entry triggers** and the latest prints still looked like prior-close / after-hours reference values rather than clean cash-session confirmation.
- Checked recent Reuters-linked Google News results for the actionable leaders; news stayed supportive for **GOOG / AVGO / SOXX / QQQ** and did not reveal any fresh adverse catalyst that would justify forcing a trade.
- No orders were placed because no setup met the trigger plus edge requirement after estimated friction.
- Next expected action: remain patient, preserve cash, and only buy when a leader reclaims its level with live confirmation.

## Execution Summary — 2026-05-04 Tactical Cycle
- Confirmed the account remains **$10,000 equity / $10,000 cash / no positions**.
- Refreshed live reference prices for the full tracked universe; every actionable symbol remained outside its defined buy/reclaim band, so no setup cleared the trigger layer.
- Checked recent Google News / Reuters headlines for the main candidates (**SOXX, GOOG, AVGO, QQQ, NVDA, QTUM**) and found no fresh adverse catalyst that would override the existing patience bias.
- Estimated that no trade had enough confirmed edge to justify friction, so the book stayed flat and all cash was preserved.
- Next expected action: wait for a live cash-session confirmation in the prioritized leaders before deploying risk.

## Execution Summary — 2026-05-04 Tactical Cycle
- Rechecked the live account: still **$10,000 equity / $10,000 cash / no positions**.
- Refreshed prices for the full tracked universe; no symbol met its buy or sell trigger, and the prints still looked like stale prior-close / after-hours reference levels rather than clean cash-session confirmation.
- No orders were placed because no setup cleared the trigger plus friction hurdle.
- Current holdings remain **none**; next expected action is to wait for a confirmed cash-session break/reclaim in SOXX, GOOG, AVGO, QQQ, NVDA, QTUM, GLD, or RKLB before deploying risk.
