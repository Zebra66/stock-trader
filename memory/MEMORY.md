# Hourly Macro Memory
*Updated 2026-05-13 12:30 ET by human review. Reset after paralysis diagnosis.*

## Current Regime
- **Regime:** **offensive catch-up**
- **Goal check:** **Off track — portfolio +1.93% vs SPY +3.15% since inception. Cash drag is the dominant failure mode.**
- **Dominant failure mode:** **cash drag**
- **Current account:** **$10,192.87 equity / $4,705.34 cash / 53.8% gross exposure**
- **Target gross-exposure band:** **60-70%**
- **Why offensive catch-up:** the portfolio is profitable but trailing SPY because $4,700+ in cash is earning nothing while the market rallies. Semiconductors and Nasdaq have reclaimed yesterday's pullback. The tape is orderly and liquid.

## Current Macro Thesis
The medium-term leadership remains **semiconductors, AI infrastructure, and Nasdaq growth**. SOXX, NVDA, QQQ, and SMH all show strong multi-week trends. Yesterday's semiconductor selloff was a one-day shakeout — today's tape shows SOXX +2.0% and NVDA +2.9% reclaiming the damage. Broad market (SPY +0.3%) is stable. There is no evidence of a regime shift.

The most productive path to SPY outperformance is to **deploy idle cash into the leading sleeve** rather than rotate into defensive names.

## Goal Check And Performance Review
- **Since inception (2026-05-04 close baseline):** portfolio **+1.93%** vs **SPY +3.15%**.
- **1D:** portfolio **+0.55%** ($10,136.55 → $10,192.87).
- **1W:** portfolio **+1.93%** ($10,000 → $10,192.87).
- **What is working:** QQQ, SOXX, QTUM are all net profitable. Semiconductor leadership thesis is intact.
- **What is not working:** deployment has been too slow. Cash drag is costing ~0.5–1% per week vs SPY.
- **What must change today:** deploy at least $1,500–2,500 into SOXX and NVDA immediately. The old breakout triggers ($511.50 for SOXX, $221.20 for NVDA) were blown through yesterday afternoon and this morning. Waiting for "reclaim confirmation" was a mistake — the reclaim already happened.

## Exposure Plan
- **Authoritative current holdings:** **QQQ 6, GOOG 1, QTUM 2, SOXX 1**
- **Current gross exposure:** **53.8%**
- **Target band:** **60-70%**
- **Deployment needed:** at least **$1,500–2,500** to reach the lower bound of target.

## Priority Actions For The Next Hour
1. **Add 1 share of SOXX** — best ETF expression of semi leadership; moves exposure to ~58%.
2. **Add 1–2 shares of NVDA** — strongest liquid single-name confirmation; moves exposure to ~60–62%.
3. **Keep QQQ hold-only** — already ~41.9% of equity, near the 45% cap.
4. **Hold GOOG and QTUM** — neither is broken, but neither justifies fresh capital ahead of semis.

## Ranked Deployment Queue
1. **SOXX 1 share** — ~$527, adds ~5.2% exposure. Breakout already confirmed.
2. **NVDA 1–2 shares** — ~$227 each, adds ~2.2% per share. Cleanest single-name leadership.
3. **AVGO** — only if it reclaims $420; currently $415.53, not yet there.

## Bias Table
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold only | Core exposure valid, weight ~41.9% near cap | 42 |
| SOXX | **Buy 1 share now** | Best semi ETF; breakout confirmed; underweight | 10 |
| NVDA | **Buy 1–2 shares now** | Cleanest liquid single-name leadership signal | 6 |
| AVGO | Watch / conditional | Strong AI infra trend; wait for reclaim above $420 | 4 |
| GOOG | Hold | Long-term trend fine, but not best use of fresh capital | 4 |
| QTUM | Hold | Constructive but too small to add more now | 3 |
| SMH | Watch only | Breadth confirmation, secondary to SOXX for execution | 0 |
| XLK | Watch only | Broad tech confirmation tool | 0 |
| SPY | Benchmark only | Do not add; we need alpha, not beta | 0 |
| VOO | Avoid | Less attractive than leadership beta | 0 |
| XLE | Avoid | Inferior medium-term upside | 0 |
| XLF | Avoid | Not a catch-up vehicle | 0 |
| GLD | Avoid | Dilutes catch-up requirement | 0 |
| META | Avoid | Weaker relative trend than semis | 0 |
| HOOD | Avoid | Too noisy | 0 |
| RKLB | Avoid | Extended and gap-risky | 0 |

## Current Holdings
- **QQQ 6** — ~41.9% weight, unrealized gain ~+$113.56, hold-only near cap.
- **SOXX 1** — ~5.2% weight, unrealized gain ~+$45.85, first add candidate.
- **QTUM 2** — ~2.9% weight, unrealized gain ~+$18.16, hold.
- **GOOG 1** — ~3.9% weight, unrealized gain ~+$8.56, hold.

## Near-Term Watchlist
- **SOXX** — execute add immediately.
- **NVDA** — execute add immediately.
- **AVGO** — monitor for reclaim above $420.

## Macro Themes To Monitor
- Semiconductors / AI infrastructure leadership — remains intact.
- Whether yesterday's selloff was a one-day shakeout (appears to be) or start of broader unwind.

## Tactical Focus Universe
**QQQ, SOXX, NVDA, AVGO, GOOG, QTUM, SMH, XLK, SPY**

## Research Files
- `memory/research/alpaca_hourly_20260513T1617Z.json` — live account, positions, and price snapshots.

## Dated Long-Term Learnings
- **2026-05-13:** When breakout triggers are blown through, **do not wait for a second confirmation** — the breakout IS the confirmation. Deploy immediately.
- **2026-05-13:** Cash drag is the silent killer. A portfolio trailing SPY while sitting on 46% cash is losing by choice, not by market.
- **2026-05-13:** System was frozen by hung agent processes (no timeout in harness) + overly cautious prompts creating a "never trade" doom loop. Fixed harness.ts with spawn timeout and rewrote prompts to remove paralysis layers.
- **2026-05-12:** If Alpaca CLI hangs, use direct authenticated Alpaca REST fallback.
- **2026-05-12:** Keep the since-inception benchmark anchor fixed across runs.
- **2026-05-12:** QQQ concentration cap is 45% of equity, not 40%.

## Last Run Summary
- System was frozen by a combination of hung agent processes (no timeout in harness) and overly cautious prompts that created a "never trade" doom loop.
- Fixed harness.ts to kill hung agents after timeout (10 min hourly / 5 min tactical).
- Rewrote prompts to remove paralysis layers: hourly no longer writes vague "confirmation" triggers, tactical no longer does research/friction analysis.
- Reset stale blackout/no-trade state.
- Live tape shows semis have fully reclaimed yesterday's pullback. Time to deploy.
- No conditions met — held all positions because the market was outside regular session hours.
