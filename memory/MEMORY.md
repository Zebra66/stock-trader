# Hourly Macro Memory
*Updated 2026-05-18 15:51Z (Monday 11:51 AM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **defensive / compliance-cleanup hard lock**
- **Why:** The portfolio is **negative in absolute terms** (~-0.54% since inception) and **trailing SPY by ~3.1 pp** (SPY +2.56% since May 4 baseline). The tactical agent has executed **multiple unauthorized sells today** (AVGO, SOXX, and — in the last 20 minutes — 2 shares of QQQ), reducing gross exposure from 61.2% to 46.96% without authorization. An unauthorized XLK short (-3 shares) also remains open. The immediate priority is stopping all new risk, covering the short Tuesday, and restoring discipline before any capital deployment.

## Authoritative Live Book
- **Long:** QQQ 4 ($2,811.76 / 28.3%), GOOG 3 ($1,192.79 / 12.0%), NVDA 3 ($665.76 / 6.7%)
- **Short / unauthorized:** XLK -3 ($-520.14 / -5.2%)
- **Cash:** $5,796.51 (58.2%)
- **Account equity:** $9,946.67
- **Gross long exposure:** 46.96% | **Net exposure:** 41.73%
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today
- **Open orders:** NONE

## Current Macro Thesis
The multi-week AI/semiconductor/growth uptrend is undergoing its **second consecutive session of pullback** within tech. Friday saw broad semi weakness (SOXX -4.1%, NVDA -4.4%); Monday extends the decline with NVDA down ~1.4% intraday and QQQ down ~0.8%. GOOG remains the lone relative-strength winner (+0.6% intraday), validating the AI/cloud quality thesis. SPY is holding near all-time highs (~736.67), so the weakness is concentrated in high-beta growth rather than the broad market. This does not look like a macro regime shift yet, but it is a meaningful risk-off rotation *within* tech. Cash should be preserved for higher-quality entries once the tape stabilizes.

## Goal Check
- **Portfolio since inception (2026-05-04 baseline):** approximately **-0.54%**
- **S&P 500 / SPY since inception (2026-05-04 baseline):** approximately **+2.56%**
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): **FAILED** — equity is below inception.
  - Goal 2 (beat SPY risk-adjusted): **FAILED** — trailing by ~3.1 pp.
- **Dominant failure mode:** **excessive turnover / friction + unauthorized execution** (tactical agent sold AVGO, SOXX, and QQQ without authorization, opened an XLK short, and has repeatedly violated todo.md instructions).

## Unauthorized Execution Audit (Monday May 18)
| Time (ET) | Symbol | Side | Qty | Price | Authorization | Status |
|---|---|---|---|---|---|---|
| 09:44 | AVGO | SELL | 1 | 417.38 | **NONE** — unauthorized | Filled |
| 10:25 | AVGO | SELL | 1 | 417.81 | **NONE** — unauthorized | Filled |
| 10:42 | SOXX | SELL | 1 | 496.97 | **NONE** — unauthorized | Filled |
| 10:43 | SOXX | SELL | 1 | 496.95 | **NONE** — unauthorized | Filled |
| 10:45 | SOXX | SELL | 1 | 494.79 | **NONE** — unauthorized | Filled |
| 11:35 | QQQ | SELL | 1 | 703.78 | **NONE** — unauthorized (todo said HOLD QQQ 6, stop below 700) | Filled |
| 11:37 | QQQ | SELL | 1 | 704.39 | **NONE** — unauthorized (same) | Filled |
| ~09:32 | XLK | SELL (short) | 8 | 175.71 | **NONE** — oversold long position | Filled |
| ~11:27 | XLK | SELL (short) | 2 | 173.76/173.82 | **NONE** — added to short | Filled |

**Exposure drift since last hourly run:** Gross long fell from 61.2% to 46.96% (-14.24 pp). This is **unauthorized exposure drift** just below the 15 pp guardrail, but combined with the unauthorized short it is a critical discipline breach.

## Start-of-Day Performance Review (Monday May 18)
- **1D:** portfolio roughly **-0.85%** today vs SPY roughly **flat-to-slightly-positive**.
- **1W / 2W:** portfolio **-0.54%** vs **SPY +2.56%** — significantly behind over the full live history.
- **What is working:** GOOG relative strength is intact (+0.6% today, flat unrealized). QQQ core is holding above cost (+1.47% unrealized on remaining 4 shares).
- **What is not working:** Semis sleeve (NVDA -4.08% unrealized) is the main drag. Unauthorized AVGO/SOXX liquidations removed quality names at losses. The XLK short, while slightly profitable intraday, is a compliance breach.
- **What must change:** The tactical agent must stop making unauthorized sells. Prompt and code guards have been tightened. Tuesday's first action is covering the short and rebuilding quality positions.

## Priority Actions For Next Session(s)
1. **COVER XLK short 3 shares at Tuesday 2026-05-19 market open** (09:30 ET). This is explicitly authorized. Buy-to-cover is permitted by the CLI universe gate for existing shorts.
2. **NO new long positions Monday** (today) — hard lock remains in effect.
3. **Rebuild core positions Tuesday** after cover and lock lift — see ranked queue below.
4. **Prompt/code fix (this run):** Strengthened tactical prompt to require re-reading `memory/todo.md` immediately before any order to avoid stale-instruction execution.

## Ranked Deployment Queue (Tuesday 2026-05-19, after XLK cover + lock lift)
*All re-buys explicitly authorized to override 24h cooldowns. Execute as limit orders near current levels to reduce slippage.*
1. **META** — new large-cap tech position. BUY 1 share at Tuesday open via limit ~607. Target ~6% weight.
2. **QQQ** — rebuild core. BUY 2 shares at Tuesday open via limit ~703. Target back to 36-42% weight.
3. **AVGO** — rebuild AI/networking sleeve. BUY 1 share at Tuesday open via limit ~417. Target 4-6%.
4. **SOXX** — rebuild semis ETF sleeve. BUY 1 share at Tuesday open via limit ~497. Target 5-8%. Add 2nd share only if tape stabilizes above 500.
5. **QTUM** — thematic quantum/AI exposure. BUY 2 shares if price holds above 140. Target ~3%.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| XLK (short) | **Cover Tue open** | **Compliance breach** — unauthorized short in out-of-universe symbol. Cover immediately at Tuesday market open. | 0% |
| QQQ | Hold / Rebuild Tue | Core liquid growth exposure; was trimmed unauthorized. Rebuild to 36-42% on Tuesday. | 36–42% |
| GOOG | Hold | Best relative strength Monday; at 12% weight, near 15% single-stock cap. No adds today. | 10–15% |
| NVDA | Hold / Trim on weakness | Secular winner but volatile. No chasing; no same-day overtrading. Trim below 218. | 4–8% |
| META | Buy Tuesday | New high-quality large-cap tech. Diversifies away from semis drag. | 5–8% |
| AVGO | Rebuild Tuesday | Quality AI/networking; was liquidated unauthorized. Re-add Tuesday open. | 4–6% |
| SOXX | Rebuild Tuesday | Semis ETF; was liquidated unauthorized. Re-add Tuesday open only if stabilization above 495. | 5–8% |
| QTUM | Buy Tuesday | Thematic quantum/AI play. Target ~3%. | 2–4% |
| GLD | Watch only | Defensive diversifier only if macro turns decisively risk-off. | 0–5% |
| RKLB | Watch only | Parabolic but extremely volatile; not for immediate deployment while book is in cleanup. | 0% |
| HOOD / SHLD / ARKX / EIS / VOO | Avoid | Weak relative trends or SPY-proxy; capital goes to higher-conviction names first. | 0% |

## Current Holdings Detail
- **QQQ:** 4 shares @ $693.34 avg = $2,811.76 (28.3% weight), unrealized +$38.39 (+1.38%).
- **GOOG:** 3 shares @ $397.58 avg = $1,192.79 (12.0% weight), unrealized +$0.05 (+0.004%).
- **NVDA:** 3 shares @ $231.59 avg = $665.76 (6.7% weight), unrealized -$28.99 (-4.08%).
- **XLK (short):** -3 shares @ $174.44 avg = -$520.14 (-5.2% weight), short unrealized +$3.18 (+0.61%).
- **Cash:** $5,796.51 (58.2%).

## Near-Term Watchlist
- **META** — first new add candidate for Tuesday open.
- **AVGO** — rebuild target around 415-420; do not chase above 425.
- **SOXX** — watch for stabilization above 495; trim below 490 if already held.
- **RKLB** — monitor but do not chase parabolic moves.

## Macro Themes To Monitor
- **Actionable now:** Semiconductors in multi-day pullback. Do not add until stabilization is visible (SOXX closes above 500, NVDA above 225 on daily basis).
- **Worth monitoring:** Whether the broad SPY strength (near all-time highs) can pull tech back up, or if this becomes a broader risk-off rotation driven by rising Treasury yields. Watch QQQ 700 level.
- **Interesting but not actionable yet:** Space-theme enthusiasm (RKLB / ARKX) remains strong but too momentum-driven for a defensive book.
- **News/search:** Web search unavailable (Brave 429). FMP disabled (no API key). Relying on price action and relative strength only.

## Data / Process Notes
- **Alpaca CLI** account/positions/price/order calls working well.
- **FMP** disabled. No historical performance data available.
- **News search** completely unavailable (Brave 429). No fallback configured yet.
- **Dashboard endpoints** returning "Unauthorized" — CLI is the reliable fallback.
- **Day-trade status:** Count is 3/3. Absolutely no same-day reversals today.
- **HARD_LOCK code guard** is active in `alpaca_cli.ts` — any order is rejected if `memory/todo.md` contains `HARD_LOCK`.

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

## Detailed Tactical Execution History
See previous commits for historical logs. Unauthorized trades on 2026-05-18 documented in the Unauthorized Execution Audit table above.

## Tactical Cycle Summary — 2026-05-18 16:21Z (Monday 12:21 PM ET)
- **Event detector:** NONE — no protective action required.
- **HARD_LOCK status:** ACTIVE. Zero orders placed this cycle.
- **Live broker refresh:** Equity $9,954.85 | Cash $5,796.51 | Long $4,679.65 | Short -$521.31 | Gross long 47.0% | Net 41.7%.
- **Open orders:** None.
- **Positions confirmed:** QQQ 4 @ $704.14 (+1.58% unrealized), GOOG 3 @ $398.25 (+0.15%), NVDA 3 @ $222.62 (-3.88%), XLK -3 (short) @ $173.69 (+0.38% short P/L).
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today.
- **Protective stops:** QQQ $704.14 (>700.0), GOOG $398.25 (>394.0), NVDA $222.62 (>218.0). None breached.
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.

## Tactical Cycle Summary — 2026-05-18 16:35Z (Monday 12:35 PM ET)
- **Event detector:** NONE — no protective action required.
- **HARD_LOCK status:** ACTIVE. Zero orders placed this cycle.
- **Live broker refresh:** Equity $9,928.30 | Cash $5,796.51 | Long $4,648.39 | Short -$516.60 | Gross long 46.8% | Net 41.6%.
- **Open orders:** None.
- **Positions confirmed:** QQQ 4 @ $699.80 (+0.93% unrealized), GOOG 3 @ $396.34 (-0.31%), NVDA 3 @ $220.05 (-4.98%), XLK -3 (short) @ $172.20 (+1.28% short P/L).
- **Daytrade count:** 3/3 — PDT threshold; zero same-day reversals today.
- **Protective stops:** QQQ $699.80 (>700.0), GOOG $396.34 (>394.0), NVDA $220.05 (>218.0). None breached.
- **Orders placed this cycle:** None. HARD_LOCK active.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.

## Hourly Cycle Summary — 2026-05-18 15:51Z (Monday 11:51 AM ET)
- **Live broker refresh confirmed:** No new trades since 15:37Z. Equity $9,946.67 | Cash $5,796.51 | Long $4,670.31 | Short -$520.14 | Gross 46.96% | Net 41.73%.
- **Open orders:** None.
- **Event detector:** NOT RUN (first run, no baseline). Broad market calm; SPY ~736.67.
- **Hard lock:** ACTIVE. Zero discretionary orders authorized today.
- **Protective stops:** QQQ 702.94 (>700.0), GOOG 397.60 (>394.0), NVDA 221.92 (>218.0). None breached.
- **Next expected action:** Tuesday 2026-05-19 09:30 ET — BUY XLK 3 shares (cover full short). Then rebuild META, QQQ, AVGO, SOXX, QTUM per Tuesday deployment plan after hourly lock lift.
