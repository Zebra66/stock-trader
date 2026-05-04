# Hourly Macro Memory
*Updated 2026-05-04 by the Hourly Macro Strategist.*

## Current Macro Thesis
The market remains **selectively risk-on**, but leadership is narrower than a simple index read suggests. The strongest 3-month trends in the universe are still **SOXX (+28.97%)**, **AVGO (+27.38%)**, **QTUM (+13.50%)**, and **GOOG (+13.16%)**, while **QQQ (+7.10%)** continues to outpace **VOO (+3.80%)**. Reuters and other current coverage also point to the same core driver: AI/cloud demand is still supporting hyperscalers and semiconductor infrastructure, with Alphabet just posting a strong cloud-led quarter and Broadcom still benefiting from AI revenue optimism.

The caution is that price leadership is no longer broad or consequence-free. Reuters coverage around the latest earnings cycle shows **Meta being punished for heavier AI spend with less immediate payoff clarity**, **Robinhood missing on profit / transaction revenue**, and **Nvidia still facing “good results but not good enough” expectations risk**. Oil-shock headlines and Fed/event risk also argue against using full buying power. The right stance is to **stay long the best liquid AI / semiconductor winners, keep meaningful cash, and avoid forcing broken names**.

## Portfolio State
- Equity: **$10,000**
- Buying power: **$20,000**
- Cash: **$10,000**
- Current positions: **none**
- Gross exposure: **0%**
- Current P/L: **$0 realized / $0 unrealized** because the book is flat.

## Data & Research Sources Used This Run
- **Historical performance fallback:** Yahoo Finance chart API via `https://query1.finance.yahoo.com/v8/finance/chart/<symbol>?range=3y&interval=1d`
- **Live price check:** Alpaca CLI latest-price endpoint
- **News / search fallback:** Google News RSS queries via bash because no dedicated Google Search tool surfaced in this workspace session
- **Why fallback was needed:** `FMP_API_KEY` is not configured, so FMP historical-performance calls are unavailable

## Priority Actions For The Next Hour
1. **Deploy only starter longs on confirmation** in **SOXX, GOOG, AVGO, and QQQ**.
2. Keep **NVDA** as a lower-priority add only if it reclaims momentum; keep **QTUM** as a small thematic add and **RKLB** as a very small satellite trade only.
3. Keep at least **54% cash** until breadth broadens or macro/event risk eases; **do not use margin by default**.
4. Keep **META, HOOD, SHLD** sidelined; keep **GLD** as a hedge candidate only on better entry or renewed risk-off confirmation.
5. Watch for **Fed / oil / geopolitics** to hit crowded AI leadership and avoid chasing extended gap-ups.

## Standing Learnings
- Default sizing must use **account equity**, not headline buying power. Margin use requires an explicit hourly decision.
- Commission-free does **not** mean friction-free; tactical entries need expected edge of at least **3x** estimated round-trip cost.
- Round-trip cost assumptions must include **spread, slippage, CAT, SEC sell fees, and FINRA TAF on sells**.
- Never average down. Add only to winners, and each add must be smaller than or equal to the prior add.
- Prefer liquid leaders in leading groups over laggards, story stocks, or low-liquidity names.
- Cash is a valid position when macro, geopolitical, or correlation risk rises.
- If external data tooling is unavailable, use a public fallback source reachable from bash and record that source in memory.
- Tactical price levels must be refreshed from the latest market snapshot each hourly cycle; do **not** blindly reuse stale thresholds.
- Distinguish **quality of earnings reaction** from raw fundamentals: GOOG improved on both, while META and HOOD weakened despite still-relevant long-term stories.

## Performance Snapshot Used This Run
- Best 3m performers: **SOXX +28.97%**, **AVGO +27.38%**, **QTUM +13.50%**, **GOOG +13.16%**, **EIS +9.78%**, **QQQ +7.10%**
- Weak / broken on 3m basis: **HOOD -27.24%**, **META -17.55%**, **GLD -14.66%**, **SHLD -11.15%**, **RKLB -8.02%**, **ARKX -1.15%**
- Best 1m momentum: **SOXX +37.58%**, **AVGO +34.38%**, **GOOG +29.95%**, **QTUM +23.68%**, **RKLB +20.28%**
- Relative laggard inside AI leadership: **NVDA +3.09% over 3m**, despite still-strong **+77.81% over 1y**

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| AVGO | Buy | Strong multi-timeframe momentum and supportive AI revenue sentiment; favor orderly confirmation over chasing. | 7% |
| EIS | Hold | Trend is still positive, but liquidity and geopolitical/event risk keep it out of the core book. | 0% |
| GLD | Hold | Good hedge candidate, but recent 1m / 3m performance is cooling; buy only on support or renewed risk-off demand. | 4% |
| GOOG | Buy | Best mix of earnings confirmation, cloud/AI strength, and recent relative strength in the universe. | 7% |
| HOOD | Sell | Profit miss and weak transaction revenue keep this in the penalty box until price repairs. | 0% |
| META | Sell | Market is discounting higher AI spend and legal / execution risk more than upside right now. | 0% |
| NVDA | Hold | Long-term leader, but near-term relative strength is weaker than SOXX / AVGO / GOOG. Only buy on renewed momentum. | 4% |
| QQQ | Buy | Cleaner broad-growth vehicle than VOO while tech/AI leadership remains intact. | 8% |
| QTUM | Buy | Solid thematic AI/quantum basket with positive momentum, but keep size below core liquid leaders. | 4% |
| RKLB | Hold | Strong long-run trend but weak recent 3m tape; acceptable only as a very small satellite breakout trade. | 2% |
| SHLD | Sell | Multi-timeframe trend has deteriorated and it does not deserve scarce risk budget. | 0% |
| SOXX | Buy | Still the best broad expression of semiconductor/AI leadership, despite crowding risk. | 10% |
| VOO | Hold | Healthy market beta, but inferior alpha posture versus QQQ while growth leadership persists. | 0% |
| ARKX | Hold | Not strong enough versus SOXX / QQQ / RKLB to earn capital yet. | 0% |

## Last Run Summary
- The portfolio is still flat; there were **no underperformers to cut and no winners to trim** this cycle.
- FMP historical data remained unavailable because **`FMP_API_KEY` is missing**, so this run used the **Yahoo Finance chart API fallback**.
- Market leadership remains concentrated in **semis, AI infrastructure, and cloud**, with **GOOG, SOXX, and AVGO** showing the cleanest current setup quality.
- **META** and **HOOD** remain avoid names after weak earnings/reaction quality, while **GLD** stays a hedge candidate instead of a chase.
- Prompt improvement this run: strengthen explicit fallback-search guidance and require refreshing tactical levels from the latest price snapshot.

## Execution Summary — 2026-05-04 Tactical Cycle
- Reviewed live account and confirmed the book is still flat: **$10,000 equity, $10,000 cash, $20,000 buying power, no positions**.
- Refreshed live prices for the full universe; no symbol reached its active buy trigger with sufficient confirmation this cycle.
- News scan showed no immediate portfolio-specific shock that would override patience, but several leaders are still below the required entry levels.
- No trades were placed; the portfolio remains in cash while waiting for **SOXX / GOOG / AVGO / QQQ** confirmation or a cleaner pullback reclaim.
- Next expected action: stay patient, recheck the same trigger levels on the next tactical run, and only act if price moves into the defined setup zones with acceptable friction.

## Execution Summary — 2026-05-04 Tactical Cycle (Market Close Check)
- Account stayed flat with **$10,000 equity / $10,000 cash** and no positions.
- The market was closed during the review; **AVGO** was the closest setup at **$423.29**, but I did not pre-empt the open without a fresh confirmation.
- **SOXX ($464.76)**, **GOOG ($382.31)**, and **QQQ ($673.05)** remained below their breakout thresholds; the other tracked symbols were also outside their preferred trigger zones.
- Google News RSS checks for the core leaders did not surface an adverse symbol-specific headline that would force a defensive change.
- No orders were sent. Next action is to wait for the session open and only act if AVGO or another priority long confirms with acceptable friction.
