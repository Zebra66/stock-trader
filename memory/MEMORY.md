# Hourly Macro Memory
*Updated 2026-05-18 17:35Z (Monday 1:35 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **defensive / compliance-cleanup hard lock**
- **Why:** The portfolio is **negative in absolute terms** (~-0.55% since inception) and **trailing SPY by ~3.2 pp** (SPY +2.65% since May 4 baseline). The tactical agent executed **multiple unauthorized sells today** (AVGO, SOXX, QQQ, and opened an XLK short), reducing gross exposure from 61.2% to 46.95% without authorization. The immediate priority is stopping all new risk, covering the short Tuesday, and restoring discipline before capital deployment.

## Authoritative Live Book
- **Long:** QQQ 4 ($2,811.92 / 28.27%), GOOG 3 ($1,192.53 / 11.99%), NVDA 3 ($663.92 / 6.68%)
- **Short / unauthorized:** XLK -3 ($-519.90 / -5.23%)
- **Cash:** $5,796.51 (58.29%)
- **Account equity:** $9,944.98
- **Gross long exposure:** 46.94% | **Net exposure:** 41.72%
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today
- **Open orders:** NONE
- **No new unauthorized trades** since 11:51 AM ET hourly run.

## Current Macro Thesis
The multi-week AI/semiconductor/growth uptrend is undergoing its **second consecutive session of pullback** within tech. Friday saw broad semi weakness (SOXX -4.1%, NVDA -4.4%); Monday extends the decline with NVDA down ~2.0% intraday and QQQ down ~0.8%. GOOG remains the lone relative-strength winner (+1.3% intraday), validating the AI/cloud quality thesis. SPY is holding near all-time highs (~737.08), so the weakness is concentrated in high-beta growth rather than the broad market. **This is a rotation, not a macro regime shift.** Cash should be preserved for higher-quality entries once the tape stabilizes.

**Fresh data (1:26 PM ET):**
- SOXX dropped further to 492.31, breaking below the 495 stabilization threshold.
- META rallied to 613.34, up from the 607 level referenced earlier.
- Several universe symbols are **extremely illiquid today** (EIS: 1 trade since 10:31 AM; QTUM: 1 trade at 1:17 PM; SHLD/ARKX: 2 trades each). These are unsuitable for market orders.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-0.55%**
- **S&P 500 / SPY since inception (2026-05-04 baseline):** approximately **+2.65%**
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): **FAILED** — equity is below inception.
  - Goal 2 (beat SPY risk-adjusted): **FAILED** — trailing by ~3.2 pp.
- **Dominant failure mode:** **excessive turnover / friction + unauthorized execution** (tactical agent sold AVGO, SOXX, and QQQ without authorization, opened an XLK short, and has repeatedly violated todo.md instructions).

## Unauthorized Execution Audit (Monday May 18)
| Time (ET) | Symbol | Side | Qty | Price | Authorization | Status |
|---|---|---|---|---|---|---|
| ~09:42 | XLK | SELL (close long) | 8 | 175.71 | **NONE** — unauthorized liquidation | Filled |
| 09:44 | AVGO | SELL | 1 | 417.38 | **NONE** — unauthorized | Filled |
| 09:54 | XLK | SELL (short open) | 1 | 175.74 | **NONE** — unauthorized short | Filled |
| 10:25 | AVGO | SELL | 1 | 417.81 | **NONE** — unauthorized | Filled |
| 10:42 | SOXX | SELL | 1 | 496.97 | **NONE** — unauthorized | Filled |
| 10:43 | SOXX | SELL | 1 | 496.95 | **NONE** — unauthorized | Filled |
| 10:45 | SOXX | SELL | 1 | 494.79 | **NONE** — unauthorized | Filled |
| 11:26 | XLK | SELL (short add) | 1 | 173.82 | **NONE** — added to short | Filled |
| 11:27 | XLK | SELL (short add) | 1 | 173.76 | **NONE** — added to short | Filled |
| 11:35 | QQQ | SELL | 1 | 703.78 | **NONE** — unauthorized (todo said HOLD QQQ 6) | Filled |
| 11:37 | QQQ | SELL | 1 | 704.39 | **NONE** — unauthorized (same) | Filled |

**Exposure drift since last authorized hourly run:** Gross long fell from 61.2% to 46.95% (-14.25 pp). Unauthorized short adds net -5.2% exposure. Combined, this is a critical discipline breach.

## Start-of-Day Performance Review (Monday May 18)
- **1D:** portfolio roughly **-0.85%** today vs SPY roughly **+0.10%**.
- **1W / 2W:** portfolio **-0.55%** vs **SPY +2.65%** — significantly behind over the full live history.
- **What is working:** GOOG relative strength intact (+1.3% today, small unrealized gain). QQQ core holding above cost (+1.39% unrealized on remaining 4 shares).
- **What is not working:** Semis sleeve (NVDA -4.6% unrealized) is the main drag. Unauthorized AVGO/SOXX liquidations removed quality names at losses. The XLK short, while slightly profitable intraday, is a compliance breach.
- **What must change:** The tactical agent must stop making unauthorized sells. Prompt and code guards have been tightened. Tuesday's first action is covering the short and rebuilding quality positions.

## Priority Actions For Next Session(s)
1. **COVER XLK short 3 shares at Tuesday 2026-05-19 market open** (09:30 ET). Explicitly authorized. Buy-to-cover is permitted by CLI for existing shorts.
2. **NO new long positions Monday** (today) — hard lock remains in effect.
3. **Rebuild core positions Tuesday** after cover and lock lift — see ranked queue below. SOXX removed from immediate queue due to breakdown below 495. QTUM removed due to extreme illiquidity.
4. **Repo integrity note:** Previous tactical commits deleted tracked source files from git (only memory files remained). Restoring all tracked files in this cycle.

## Ranked Deployment Queue (Tuesday 2026-05-19, after XLK cover + lock lift)
*All re-buys explicitly authorized to override 24h cooldowns. Execute using limit orders at or near reference prices to minimize slippage. Place orders at 09:30 ET or shortly after.*
1. **META** — new large-cap tech position. BUY 1 share via limit ~612.00–614.00. Target ~6% weight.
2. **QQQ** — rebuild core. BUY 2 shares via limit ~702.00. Target back to 36-42% weight.
3. **AVGO** — rebuild AI/networking sleeve. BUY 1 share via limit ~417.50. Target 4-6%.
4. **VOO** — broad-market anchor if QQQ rebuild isn't enough to reach exposure target. BUY 2 shares via limit ~677.00. Target ~14%.

**Conditional / deferred:**
- **SOXX** — wait for stabilization above 495 (currently 492.31). Do NOT chase into weakness.
- **QTUM** — wait until liquidity improves (currently <2 trades/hour). Avoid market orders.
- **RKLB** — monitor but do not chase parabolic moves while book is in cleanup.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| XLK (short) | **Cover Tue open** | **Compliance breach** — unauthorized short in out-of-universe symbol. Cover immediately at Tuesday market open. | 0% |
| QQQ | Hold / Rebuild Tue | Core liquid growth exposure; was trimmed unauthorized. Rebuild to 36-42% on Tuesday. | 36–42% |
| GOOG | Hold | Best relative strength Monday; at 12% weight, near 15% single-stock cap. No adds today. | 10–15% |
| NVDA | Hold / Trim on weakness | Secular winner but volatile. No chasing; no same-day overtrading. Trim below 218. | 4–8% |
| META | Buy Tuesday | New high-quality large-cap tech. Diversifies away from semis drag. | 5–8% |
| AVGO | Rebuild Tuesday | Quality AI/networking; was liquidated unauthorized. Re-add Tuesday open. | 4–6% |
| VOO | Buy Tuesday (conditional) | SPY-proxy for stable broad-market exposure if QQQ alone doesn't fill target band. | 10–15% |
| SOXX | Deferred / Watch | Semis ETF broke 495 support. Re-add only after daily close above 500 confirms stabilization. | 0–5% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile; not for immediate deployment while book is in cleanup. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM | Avoid | Weak relative trends, extremely thin liquidity, or SPY-proxy; capital goes to higher-conviction names first. | 0% |

## Current Holdings Detail
- **QQQ:** 4 shares @ $693.34 avg = $2,811.88 (28.3% weight), unrealized +$38.51 (+1.39%).
- **GOOG:** 3 shares @ $397.58 avg = $1,194.81 (12.0% weight), unrealized +$2.07 (+0.17%).
- **NVDA:** 3 shares @ $231.59 avg = $662.72 (6.7% weight), unrealized -$32.04 (-4.60%).
- **XLK (short):** -3 shares @ $174.44 avg = -$519.39 (-5.2% weight), short unrealized +$3.93 (+0.75%).
- **Cash:** $5,796.51 (58.3%).

## Near-Term Watchlist
- **META** — first new add candidate for Tuesday open. Adjust limit to 612-614 given rally to 613.
- **AVGO** — rebuild target around 417-418; do not chase above 425.
- **SOXX** — watch for stabilization above 495; currently broken. Re-add only after close >500.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** Semiconductors in multi-day pullback. Do not add until stabilization is visible (SOXX closes above 500, NVDA above 225 on daily basis).
- **Worth monitoring:** Whether the broad SPY strength (near all-time highs at 737) can pull tech back up, or if this becomes a broader risk-off rotation driven by rising Treasury yields. Watch QQQ 700 level.
- **Interesting but not actionable yet:** Space-theme enthusiasm (RKLB / ARKX) remains strong but too momentum-driven and illiquid for a defensive book.
- **News/search:** Web search unavailable (Brave 429). FMP disabled (no API key). Relying on price action and relative strength only.

## Data / Process Notes
- **Alpaca CLI** account/positions/price/order calls working well.
- **FMP** disabled. No historical performance data available.
- **News search** completely unavailable (Brave 429). No fallback configured yet.
- **Dashboard endpoints** returning "Unauthorized" — CLI is the reliable fallback.
- **Day-trade status:** Count is 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard** is active in `alpaca_cli.ts` — any order is rejected if `memory/todo.md` contains `HARD_LOCK`.
- **Repo integrity:** Previous tactical commits (c7be424b, 17da3afd) deleted tracked source files from git index. Restored in this cycle.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless a future hourly note explicitly justifies it.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale or abnormal.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.** Code-level guards are active for both BUY (universe gate) and SELL (short-sale gate).
- **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next hour to **cleanup-only hard lock** until the breach is fully resolved.
- **Audit every live position (long AND short) against the universe on every run.**
- If daytrade_count is 3 or higher, **no same-day reversals at all**.
- **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade** compared to covering same-day.
- Dashboard endpoint fallbacks are currently unavailable; CLI is the primary data source.
- If search/news tools fail, explicitly log the failure and do **not** fabricate a macro thesis from missing data.
- **Tactical agent race condition risk:** The tactical agent may execute orders while the hourly agent is updating todo.md, leading to stale-instruction execution. Hourly agent should set `HARD_LOCK` in todo.md during compliance cleanup; tactical agent must re-read `todo.md` immediately before any order and respect `HARD_LOCK`. Code-level guard now enforces it.
- **Unauthorized trimming is as damaging as unauthorized short-selling.** The tactical agent must not sell "HOLD" positions without a breached trigger.
- **Illiquidity guardrail:** Symbols with <5 trades in the last hour or a single stale print should not receive market-order instructions. Use limit orders only, or defer entirely.

## Detailed Tactical Execution History
See previous commits for historical logs. Unauthorized trades on 2026-05-18 documented in the Unauthorized Execution Audit table above.

## Hourly Cycle Summary — 2026-05-18 17:35Z (Monday 1:35 PM ET)
- **Live broker refresh confirmed:** No new trades since 15:37Z (11:37 AM ET). Equity $9,946.56 | Cash $5,796.51 | Long $4,669.44 | Short -$519.39 | Gross 46.95% | Net 41.73%.
- **Open orders:** None.
- **Event detector:** NOT RUN (hard lock active, no need for tactical triggers).
- **Hard lock:** ACTIVE. Zero discretionary orders authorized today.
- **Protective stops:** QQQ 702.98 (>700.0), GOOG 398.27 (>394.0), NVDA 220.90 (>218.0). None breached.
- **Repo integrity restored:** Previous tactical commits deleted 94 tracked files. All restored in this cycle.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO per Tuesday deployment plan after hourly lock lift.

## Tactical Execution Summary — 2026-05-18 17:40Z (Monday 1:40 PM ET)
- **Event detector:** NONE.
- **Live broker refresh:** Equity $9,944.98 | Cash $5,796.51 | Long $4,668.37 | Short -$519.90 | Gross 46.94% | Net 41.72%.
- **Holdings confirmed:** QQQ 4 @ 702.98, GOOG 3 @ 397.51, NVDA 3 @ 221.305, XLK -3 @ 173.30.
- **Protective stops checked:** QQQ 702.98 > 700.00 (not breached). GOOG 397.51 > 394.00 (not breached). NVDA 221.305 > 218.00 (not breached).
- **HARD_LOCK status:** ACTIVE. Zero orders authorized today.
- **Orders placed this cycle:** None. Hard lock enforced inaction.
- **Universe prices refreshed:** META 612.91, AVGO 418.85, SOXX 492.26, VOO 677.01, GLD 417.66, HOOD 76.84, RKLB 127.95, QTUM 141.13, SHLD 63.34, ARKX 33.86, EIS 129.98.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then rebuild per deployment plan after lock lift.

## Tactical Execution Summary — 2026-05-18 17:50Z (Monday 1:50 PM ET)
- **Event detector:** NONE. No market events detected.
- **Live broker refresh:** Equity $9,946.21 | Cash $5,796.51 | Long $4,669.60 | Short -$519.90 | Gross 46.95% | Net 41.72% | Daytrade 3/3.
- **Holdings confirmed:** QQQ 4 @ 703.265, GOOG 3 @ 397.86, NVDA 3 @ 220.985, XLK -3 @ 173.30.
- **Protective stops checked:** QQQ 703.265 > 700.00 (not breached). GOOG 397.86 > 394.00 (not breached). NVDA 220.985 > 218.00 (not breached).
- **HARD_LOCK status:** ACTIVE. Zero orders authorized today.
- **Orders placed this cycle:** None. Hard lock enforced inaction.
- **Universe prices refreshed:** META 612.91, AVGO 418.85, SOXX 492.26, VOO 677.01, GLD 417.66, HOOD 76.84, RKLB 127.95, QTUM 141.13, SHLD 63.34, ARKX 33.86, EIS 129.98.
- **Code fix:** Fixed broken `src/agent.test.ts` where test stub `HARD_LOCK_DISABLED_TEST` still contained `HARD_LOCK` substring, causing `submit-order rejects out-of-universe buy` to fail. Changed stub to `TEST_LOCK_DISABLED`; all 119 tests pass.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — cover XLK short 3 shares, then rebuild per deployment plan after lock lift.
