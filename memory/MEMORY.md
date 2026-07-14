## AUTONOMOUS OVERRIDE — Tactical — 2026-07-14 13:40Z
- **Event detector classification:** CRITICAL (SOXX, GLD, SMH CRITICAL; QQQ, XLK MAJOR; SPY OK).
- **Held positions:** AVGO ~$386.54 (stop $380 — not breached), HOOD ~$109.73 (stop $108 — not breached), QQQ ~$719.08, VOO ~$690.26. No protective sells triggered.
- **Action taken:** Suspended the hourly-authorized VOO cash-deploy BUY due to CRITICAL event classification. No orders placed. No new positions. Gross exposure ~69.2%.
- **Reason:** Event detector CRITICAL overrides MAJOR assumption in hourly note; no new buys during CRITICAL. Holding existing positions until hourly reset reassesses.
- **Next expected action:** Await next hourly reset; re-assess only after event detector clears or hourly authorizes explicit protective action with CRITICAL justification.

# Hourly Macro Memory
*Updated 2026-07-14 13:40Z (Tuesday 9:35–9:40 AM ET). First hourly of session. Market OPEN.*

---

## Hourly Cycle Summary — 2026-07-14 13:40Z (Tue 9:35 AM ET)
- **Status:** Market OPEN (regular session). First hourly of Tuesday. Event detector **MAJOR** (SOXX/SMH MAJOR; SPY/QQQ/XLK/GLD OK). Held: HOOD MAJOR (~–3% from prior probe); AVGO/QQQ/VOO OK. Sector rotation NONE.
- **Repo integrity:** `.gitignore` was **missing** at cycle start (critical process risk; `node_modules` briefly un-ignored). Restored from HEAD; `git check-ignore node_modules/zod/package.json` now effective. Branch = origin/main (0/0). Only dirty non-memory artifact: `memory/tactical_last_prices.json` (leave unstaged).
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **69.2%**. Daytrades **0**. hardLockRecommended false. `pdtLimitReached` false.
- **Live broker (~13:39Z):** Equity **~$9,660** | Cash **$2,974.69** | Long **~$6,686** | Gross **~69.2%** | BP ~$30.6k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 2, AVGO 2, HOOD 2. Open orders: **NONE**. No fills today yet.
- **Prior session fills (Mon, already documented):** AVGO 1 @ $385.02 stop; HOOD 2 @ $110 + 1 @ $109.33. **No concealment.**
- **Compliance:** META remains banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. Tactical 13:30Z CRITICAL override was correct then; detector now **MAJOR** (not CRITICAL) — hourly reassessment lifts buy suspension for **authorized VOO cash deploy only**.
- **Goal check:** Portfolio **~–3.5%** vs SPY **~+4.6%** (SPY ~751.2 vs 718.01). **Both goals FAILED.** Gap **~–8.1 pp**.
- **Regime:** **Neutral.** Target gross **65–80%** (cash-deploy sub-target: push toward **75–80%** via VOO). Live 69.2% — inside band but **cash 30.8% >> 10% target**.
- **Dominant failure mode:** **Cash drag** (immediate) + **excessive turnover/friction** (historical). Cap math corrected this hour: **VOO has a 30% symbol override**, not the 20% ETF default — prior “cannot add VOO” blocker was **wrong**.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$717.4 | ~$4,304 | ~44.6% | ~+$6 | ~+0.1% |
| VOO | 2 | $676.46 | ~$689.5 | ~$1,379 | ~14.3% | ~+$26 | ~+1.9% |
| AVGO | 2 | $371.95 | ~$388.5 | ~$777 | ~8.0% | ~+$33 | ~+4.5% |
| HOOD | 2 | $101.50 | ~$109.3 | ~$219 | ~2.3% | ~+$16 | ~+7.7% |
| Cash | — | — | — | $2,974.69 | ~30.8% | — | — |
| **Equity** | — | — | — | **~$9,660** | **100%** | — | **~–3.5%** |

- **Gross long exposure:** ~69.2%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift since Mon close (~69.0%):** none material — price drift only; no unauthorized orders.

## Performance Review — Tue July 14 open (first hourly of day)
- **1D (vs Mon last_equity $9,609.95):** portfolio **~+0.5%** early; SPY soft open after Mon soft close then bounce (SPY ~751 vs Mon ~748). Absolute still red inception.
- **1W:** SPY ~+0.5%; portfolio still lagging absolute and relative since inception.
- **2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.5%** vs SPY **~+4.6%**. Gap **~–8.1 pp**.
- **What is working:** Process discipline Mon (authorized stops only). Remaining AVGO/HOOD winners intact. QQQ/VOO core held. Gross kept inside 65–80%. Repo integrity restored this hour.
- **What is not working:** Absolute still red. Cash ~31% idle for multiple cycles. Prior hourly incorrectly treated VOO as 20%-capped (blocked free beta). Chip beta still fragile into TSMC Thu.
- **What must change today:** Deploy cash into **VOO** (underweight core, 30% room) via limit order — not “stay selective.” Do **not** force NVDA/SOXX while NVDA < $209 and TSMC binary is live. Protect AVGO/HOOD with existing trails. Turnover budget 2 trades — use for VOO deploy, not churn.

## Goal Check
- **Portfolio since inception:** ~–3.5%
- **S&P 500 since inception:** ~+4.6% (SPY ~751.2 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Cash drag** (immediate; two+ consecutive hours cash >> 10% with orderly SPY/QQQ) + historical **turnover/friction**.
- **Exact cash blocker this hour:** **None for 1-share VOO.** Cap room ample under VOO 30%. Integer-share OK. Market orderly at index level (SPY/QQQ OK). MAJOR is semi/precious-metals local, not broad crash. **Authorize VOO limit add.**

## Market Intel — Tuesday 9:35 AM ET
- **Broad market:** SPY ~751.2 (+ vs Mon), QQQ ~717–720. Soft inflation / CPI softer-than-expected futures tone; IBM warning weighing Dow names — not our universe. Event severity **MAJOR** (semis), not CRITICAL.
- **Geopolitical:** Hormuz naval blockade / shipper fee narrative still live; oil bid (>$80 / Brent ~$87 headlines). Background risk premium — not a reason to stay 31% cash when index beta is available via VOO.
- **Semiconductors:** SOXX ~$571–575 (MAJOR probe earlier), NVDA ~$205, AVGO ~$388. **TSMC full earnings ~Thu Jul 16** = binary sector event — no new chip beta.
- **AVGO:** 2 shares, ~+4.5% unrealized. Trail **$380** intact (not breached). No add (24h cooldown from Mon sell until ~19:30Z).
- **HOOD:** 2 shares, ~+7.7% unrealized. Trail **$108** intact. MAJOR probe on open — hold trail, no re-buy.
- **NVDA four-gate:** QQQ ≥ $716 **PASS** (~717+) | NVDA ≥ $209 firm **FAIL** (~$205) | SOXX ≥ $562 **PASS** (~571) | no CRITICAL **PASS**. **3/4 → NO NVDA.**
- **News source:** Bing News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings:** Yahoo calendarEvents returned none for held names this query. Known: **TSMC ~Thu Jul 16** sector event. META/GOOG late July; NVDA Aug per prior memory.

## Universe Performance Snapshot (Yahoo Finance fallback, 13:36Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $387.9 | +4.6% | +1.5% | –2.2% | +14.1% | +40.8% |
| EIS | $120.1 | +0.5% | –7.6% | –5.7% | +1.2% | +28.1% |
| GLD | $374.9 | –0.7% | –3.0% | –14.9% | –12.0% | +21.7% |
| GOOG | $350.6 | –3.6% | –2.1% | +4.8% | +4.2% | +91.8% |
| HOOD | $109.4 | –3.1% | +17.4% | +25.3% | –8.6% | +9.5% |
| META | $656.2 | +6.6% | +15.7% | –2.3% | +6.6% | –9.0% |
| NVDA | $204.7 | +4.0% | –0.2% | +2.9% | +11.8% | +24.8% |
| QQQ | $719.7 | +1.5% | –0.2% | +12.9% | +16.2% | +29.4% |
| QTUM | $150.9 | –0.4% | –6.5% | +22.3% | +28.6% | +63.5% |
| RKLB | $81.2 | –2.7% | –20.7% | +10.3% | –11.6% | +87.8% |
| SHLD | $60.3 | –5.5% | –5.5% | –19.2% | –21.5% | –1.5% |
| SOXX | $574.5 | +4.1% | –3.6% | +43.0% | +73.1% | +135.6% |
| VOO | $690.3 | +0.5% | +1.2% | +7.3% | +8.7% | +20.2% |
| ARKX | $31.8 | –2.4% | –5.8% | –3.0% | –7.9% | +24.8% |
| SPY | $751.1 | +0.5% | +1.3% | +7.3% | +8.8% | +20.2% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Room ~$40 — cannot add 1 share. | 36–45% |
| VOO | **Buy 1 (limit)** then Hold | Underweight core beta. 30% cap room ~$1.5k. Cash-drag fix. Prefer VOO over QQQ (cap bind). | 14–28% |
| AVGO | Hold / Trail $380 | Winner intact. Cooldown from Mon sell. No add. | 6–12% |
| HOOD | Hold / Trail $108 | Winner; MAJOR open probe. Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — gate FAIL | ~$205 << $209; TSMC week. | 0–4% |
| GOOG | Avoid | Soft 1w; no edge vs VOO deploy. | 0% |
| SOXX | Avoid | MAJOR volatility; TSMC risk; thin vs NVDA. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour)
1. **BUY 1 VOO** limit ≤ current (~$689.50) — cash discipline default. Why beats do-nothing: idle cash is the active drag vs SPY; 1 share VOO ties benchmark beta with minimal friction and respects caps. Post-buy gross ~76%, VOO weight ~21% (under 30%).
2. **Optional 2nd VOO share** only if first fills, event stays ≤ MAJOR (not CRITICAL), and cash still >15% — same limit discipline. Max 2 position-changing trades today.
3. **HOLD QQQ / AVGO / HOOD** unless authorized trails breach.
4. **AVGO trail:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. No re-buy within 24h of Mon sell (~until 19:30Z).
5. **HOOD trail:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
6. **META banned.** No NVDA/GOOG/SOXX/thin ETFs.
7. **No CRITICAL response needed** for broad book — MAJOR semis only. Do not re-impose full buy freeze; only speculative adds remain suspended.

## Ranked Deployment Queue
1. **VOO** — 1 share now (authorized), optional 2nd if conditions above. Limit only ≤ live offer/last.
2. **NVDA** — NOT authorized (gate 3/4; price << $209). Reassess only if all four gates pass post-TSMC.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit line.**

## Macro Themes
- **Actionable now:** Deploy cash into VOO. Protect AVGO/HOOD trails. Hold QQQ core.
- **Worth monitoring:** Hormuz/oil premium durability; TSMC earnings Thu Jul 16; softer CPI → rates path; semi MAJOR volatility.
- **Interesting but not actionable yet:** META strength (banned); RKLB bounce from deep drawdown (trend still weak 1m); QTUM thin.

## Cap Math (equity ~$9,660)
- QQQ 45%: max ~$4,347; held ~$4,304; room **~$43** → cannot add 1 (~$717).
- VOO 30%: max ~$2,898; held ~$1,379; room **~$1,519** → **can add 1–2 shares** (~$689 each). Prior cycle’s “20% ETF cap blocks VOO” was incorrect — config override is 30%.
- Stock 15%: max ~$1,449; AVGO/HOOD room ample but thesis/cooldown block adds.
- NVDA 1 @ $205: post weight ~2.1% — structure gate blocks.

## Data / Process Notes
- **Audit:** OK. Gross 69.2%. Daytrades 0.
- **Event detector:** 13:35Z **MAJOR** (SOXX/SMH). Held HOOD MAJOR. Not CRITICAL — lift full buy freeze; allow VOO only.
- **FMP:** disabled. Yahoo Finance chart primary; Bing News RSS for headlines.
- **Alpaca bars:** VOO TradeCount low (1–5) — **limit orders only**, not market.
- **No open orders / no stale GTC blockers.**
- **Repo:** Restored missing `.gitignore` from HEAD; node_modules ignore verified.
- **Learning this hour:** Always re-read `config/trading.json` symbolCapsPct before writing cash blockers — VOO 30% override is easy to misremember as 20% ETF default.

## Standing Learnings
See `memory/standing_learnings.md`. Key reminders:
- Size from **account equity**, not BP. **No leverage.**
- **Never average down. No universe breaches. Audit every run.**
- **Direct REST order paths prohibited** for tactical.
- **Lock files must NOT auto-expire.**
- **Pre-order concentration cap check** before any buy.
- **With ~$10K equity, caps are tight** (QQQ maxed at 6 shares).
- **VOO symbolCap is 30%** — preferred cash-deployment vehicle when QQQ near 45%.
- **Four-gate NVDA rule** — partial gates = no trade.
- **Cash ≤10% target in neutral/offensive** — excess for 2+ hours → limit-add underweight core ETF.
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**

## Prior Tactical Executions (Key Events)
- **2026-07-14 13:30Z:** CRITICAL override — no trades (correct then). Detector later MAJOR.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
