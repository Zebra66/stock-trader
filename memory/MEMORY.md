# Hourly Macro Memory
*Updated 2026-07-14 14:40Z (Tuesday 10:35–10:40 AM ET). Market OPEN.*

---

## Hourly Cycle Summary — 2026-07-14 14:40Z (Tue 10:35 AM ET)
- **Status:** Market OPEN. Event detector **MINOR** (SMH only; SPY/QQQ/SOXX/XLK/GLD OK). Held positions all OK. Sector rotation NONE.
- **Repo integrity:** Branch = origin/main (0/0). `.gitignore` effective (`node_modules` ignored). No missing tracked sources.
- **Audit:** OK. Unauthorized=[] Concentration=[] Gross **76.4%**. Daytrades **0**. hardLockRecommended false. `pdtLimitReached` false.
- **Live broker (~14:35Z):** Equity **~$9,686** | Cash **$2,285.20** | Long **~$7,400** | Gross **~76.4%** | BP ~$29.9k (do **not** size from BP).
- **Holdings:** QQQ 6, VOO 3, AVGO 2, HOOD 2. Open orders: **NONE**.
- **Today's fill (authorized):** BUY 1 VOO @ **$689.49** (limit $689.57) at 14:12Z after MAJOR reassessment. Documented in todo. **No concealment.**
- **Compliance:** META banned. HARD_LOCK inactive. No universe breaches. No race-condition drift. No unauthorized exposure drift (69% → 76% from authorized VOO only).
- **Goal check:** Portfolio **~–3.1%** vs SPY **~+4.7%** (SPY ~752 vs 718.01). **Both goals FAILED.** Gap **~–7.9 pp**.
- **Regime:** **Neutral** (unchanged; no flip). Target gross **75–90%** per doctrine. Live 76.4% — inside band. Cash **23.6% >> 10%** target.
- **Dominant failure mode:** **Cash drag** (immediate; still >10% after first VOO) + historical **turnover/friction**.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | ~$719.2 | ~$4,315 | ~44.6% | ~+$16 | ~+0.4% |
| VOO | 3 | $680.80 | ~$691.2 | ~$2,074 | ~21.4% | ~+$31 | ~+1.5% |
| AVGO | 2 | $371.95 | ~$394.0 | ~$788 | ~8.1% | ~+$44 | ~+5.9% |
| HOOD | 2 | $101.50 | ~$111.8 | ~$224 | ~2.3% | ~+$21 | ~+10.1% |
| Cash | — | — | — | $2,285.20 | ~23.6% | — | — |
| **Equity** | — | — | — | **~$9,686** | **100%** | — | **~–3.1%** |

- **Gross long exposure:** ~76.4%
- **Daytrade count:** 0
- **Open orders:** NONE
- **Lock file:** `active: false`, `bannedSymbols: ["META"]`
- **Exposure drift since 9:35Z (~69.2%):** +7.2 pp from **authorized** 1-share VOO buy only — not unauthorized.

## Performance Review — Tue July 14 mid-morning
- **1D (vs Mon last_equity $9,609.95):** portfolio **~+0.8%** (equity ~$9,686). SPY firm (~752). Absolute still red inception.
- **1W / 2W:** still trailing SPY; absolute still negative since inception.
- **Since inception (2026-05-04 $10,000):** portfolio **~–3.1%** vs SPY **~+4.7%**. Gap **~–7.9 pp**.
- **What is working:** Authorized VOO cash deploy filled cleanly. AVGO/HOOD winners extending (AVGO ~+5.9%, HOOD ~+10%). QQQ core held near cap. Process: CRITICAL then MAJOR handling was correct; no churn.
- **What is not working:** Absolute still red. Cash still ~24% idle. Gap to SPY remains ~8 pp. Chip single-name beta still gated by TSMC week.
- **What must change this hour:** Use trade #2 for **optional 2nd VOO** (cash discipline). Do **not** spend budget on NVDA/SOXX. Hold winners. After 2nd VOO, remaining cash ~16% is **cap-bound** (VOO near 30%, QQQ maxed).

## Goal Check
- **Portfolio since inception:** ~–3.1%
- **S&P 500 since inception:** ~+4.7% (SPY ~752 vs 718.01)
- **Status:** **Off track on both goals.**
- **Dominant failure mode:** **Cash drag** (immediate) + historical **turnover/friction**.
- **Exact cash blocker after optional 2nd VOO:** VOO room only ~1 share under 30% cap; QQQ room ~$43 (cannot add 1); speculative chip adds blocked by TSMC binary + NVDA gate fail. Write that blocker explicitly — do not invent thin-ETF deploys.

## Market Intel — Tuesday 10:35 AM ET
- **Broad market:** SPY ~752 OK, QQQ ~719 OK. Event severity **MINOR** (SMH only). Benign/cool CPI headlines; Fed chair “no tolerance for high inflation” but July hike risk off table per headlines — risk-on tone for indices.
- **Geopolitical:** Hormuz / US–Iran oil escalation headlines still live (oil bid). Background risk premium — not a reason to stay 24% cash when index beta available via VOO.
- **Semiconductors:** SOXX ~$569 OK, NVDA ~$207, AVGO ~$394 strength. **TSMC full earnings ~Thu Jul 16** = binary sector event — no new chip beta.
- **AVGO:** 2 shares, ~+5.9%. Trail **$380** intact. Cooldown from Mon sell until ~19:30Z — no add.
- **HOOD:** 2 shares, ~+10%. Trail **$108** intact. No add.
- **NVDA four-gate:** QQQ ≥ $716 **PASS** (~719) | NVDA ≥ $209 firm **FAIL** (~$207) | SOXX ≥ $562 **PASS** (~569) | no CRITICAL **PASS**. **3/4 → NO NVDA.**
- **News source:** Bing News RSS (Google Search tool unavailable). FMP disabled — Yahoo chart fallback for multi-TF returns.
- **Earnings:** Yahoo calendarEvents returned none for held names. Known: **TSMC ~Thu Jul 16** sector event. META/GOOG late July; NVDA Aug per prior memory.

## Universe Performance Snapshot (Yahoo Finance fallback, 14:38Z)
| Symbol | Latest | 1w | 1m | 3m | 6m | 1y |
|---|---|---|---|---|---|---|
| AVGO | $394.3 | +6.3% | +3.2% | –0.6% | +16.0% | +43.1% |
| EIS | $119.7 | +0.1% | –7.9% | –6.1% | +0.8% | +27.6% |
| GLD | $374.3 | –0.8% | –3.2% | –15.0% | –12.1% | +21.5% |
| GOOG | $354.4 | –2.6% | –1.1% | +5.9% | +5.4% | +93.8% |
| HOOD | $111.9 | –0.9% | +20.1% | +28.2% | –6.5% | +12.0% |
| META | $662.7 | +7.7% | +16.9% | –1.3% | +7.7% | –8.1% |
| NVDA | $207.0 | +5.1% | +0.9% | +4.1% | +13.0% | +26.2% |
| QQQ | $719.4 | +1.4% | –0.3% | +12.9% | +16.1% | +29.3% |
| QTUM | $150.5 | –0.7% | –6.7% | +21.9% | +28.3% | +63.0% |
| RKLB | $80.4 | –3.6% | –21.5% | +9.3% | –12.4% | +86.1% |
| SHLD | $60.8 | –4.7% | –4.7% | –18.5% | –20.9% | –0.7% |
| SOXX | $569.1 | +3.2% | –4.6% | +41.6% | +71.5% | +133.4% |
| VOO | $691.1 | +0.6% | +1.3% | +7.4% | +8.8% | +20.3% |
| ARKX | $31.8 | –2.4% | –5.8% | –3.0% | –7.8% | +24.9% |
| SPY | $751.9 | +0.6% | +1.4% | +7.4% | +8.9% | +20.3% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core growth. ~44.6%, near 45% cap. Cannot add 1 share. | 36–45% |
| VOO | **Buy 1 more (limit)** then Hold | Underweight core beta vs 30% cap. Cash-drag fix #2. | 21–30% |
| AVGO | Hold / Trail $380 | Winner intact (~+5.9%). Cooldown until ~19:30Z. No add. | 6–12% |
| HOOD | Hold / Trail $108 | Winner (~+10%). Trail protects. No re-buy. | 2–6% |
| META | **BANNED — NO ENTRY** | Fri unauthorized round-trip. | 0% |
| NVDA | Watch only — gate FAIL | ~$207 << $209; TSMC week. | 0–4% |
| GOOG | Avoid | Soft 1w; no edge vs VOO deploy. | 0% |
| SOXX | Avoid | TSMC risk; no need with VOO path open. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak / thin / no edge. | 0% |

## Priority Actions (this hour)
1. **BUY 1 VOO** limit ≤ live (~$690.50–$691.20) — cash discipline default for trade #2. Why beats do-nothing: 24% cash is still the active drag vs SPY; 1 more VOO ties more benchmark beta with minimal friction. Post-buy gross ~83–84%, VOO weight ~28.5% (under 30%).
2. **HOLD QQQ / AVGO / HOOD** unless authorized trails breach.
3. **AVGO trail:** SELL 1 if price < **$380.00**, limit **$379.50**. Hold remaining 1. No re-buy until after ~Tue 19:30Z + fresh hourly auth.
4. **HOOD trail:** SELL 1 if price < **$108.00**, limit **$107.50**. Hold remaining 1.
5. **META banned.** No NVDA/GOOG/SOXX/thin ETFs.
6. **After 2nd VOO fills:** stop discretionary buys for the day (turnover 2/2). Remaining cash ~16% is **cap-bound** — write blocker, do not force SOXX/NVDA.
7. **Event MINOR:** no freeze. If detector returns CRITICAL, suspend remaining VOO add; hold; only execute authorized stops if breached.

## Ranked Deployment Queue
1. **VOO** — 1 more share now (authorized). Limit only ≤ live last/offer. Max 1 additional (do not buy a 3rd beyond the post-morning 3+1=4 total).
2. **NVDA** — NOT authorized (gate 3/4; price << $209). Reassess only if all four gates pass post-TSMC.
3. **GOOG** — not authorized.
4. **Never META / never thin ETFs without explicit line.**

## Macro Themes
- **Actionable now:** Deploy remaining VOO share. Protect AVGO/HOOD trails. Hold QQQ core.
- **Worth monitoring:** Hormuz/oil premium; TSMC earnings Thu Jul 16; cool CPI vs Fed hawk talk; semi volatility.
- **Interesting but not actionable yet:** META strength (banned); HOOD 1m +20% (already hold small); QTUM thin.

## Cap Math (equity ~$9,686)
- QQQ 45%: max ~$4,359; held ~$4,315; room **~$44** → cannot add 1 (~$719).
- VOO 30%: max ~$2,906; held ~$2,074; room **~$832** → **can add 1 share** (~$691). Post weight ~28.5%.
- Stock 15%: max ~$1,453; AVGO/HOOD room ample but thesis/cooldown block adds.
- NVDA 1 @ $207: post weight ~2.1% — structure gate blocks.

## Data / Process Notes
- **Audit:** OK. Gross 76.4%. Daytrades 0.
- **Event detector:** 14:35Z **MINOR** (SMH). Not CRITICAL/MAJOR — proceed with VOO.
- **FMP:** disabled. Yahoo Finance chart primary; Bing News RSS for headlines (many stock-specific feeds empty this hour).
- **Alpaca bars:** VOO TradeCount often low (1–5) — **limit orders only**, not market.
- **No open orders / no stale GTC blockers.**
- **Turnover today:** 1/2 used (~7% of weekly 20% budget via ~$689 VOO). Trade #2 reserved for optional VOO.

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
- **Cash ≤10% target in neutral/offensive** — excess for 2+ hours → limit-add underweight core ETF; if caps bind, write exact blocker.
- **No full liquidations. No tight stops on QQQ/VOO/SOXX.**
- **Neutral band is 75–90%** (doctrine) — do not treat 65% as a steady neutral target when cash is high.

## Prior Tactical Executions (Key Events)
- **2026-07-14 14:12Z:** BUY 1 VOO @ $689.49 (authorized). Compliant.
- **2026-07-14 13:30Z:** CRITICAL override — no trades (correct then). Detector later MAJOR → MINOR.
- **2026-07-13 19:30Z:** SOLD 1 AVGO @ $385.02 (authorized). Compliant.
- **2026-07-13 17:40Z / 13:50Z:** HOOD authorized trail sells. Compliant.
- **2026-07-10:** Unauthorized META round-trip. META banned.
- **2026-06-15/23/26:** Catastrophic full liquidations — primary underperformance source.
