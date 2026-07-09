# Hourly Macro Memory
*Updated 2026-07-09 4:07 PM ET. Market CLOSED. Next session: July 10, 2026 9:30 AM ET.*

## Data Blackout Recovery
- **Last hourly run before today:** 2026-05-18 (7+ weeks ago)
- **Last tactical runs:** Autonomous tactical cycles ran throughout the gap without hourly oversight
- **Recovery:** Today the Alpaca CLI was found hanging due to `@alpacahq/alpaca-trade-api` SDK import taking 300+ seconds in this environment. The SDK eagerly creates WebSocket clients in its constructor, which hangs in restricted child-process environments. Rewrote `alpaca_cli.ts` to use direct `fetch` to the Alpaca REST API, reducing startup from 300s+ to ~100s. Event detector was also migrated to `alpaca_rest_client.ts` by a prior cycle. Live broker data is now accessible.

## Authoritative Live Book (confirmed 2026-07-09 20:07 UTC)
- **Equity:** $9,748.01
- **Cash:** $1,670.51
- **Long market value:** $8,077.50
- **Short market value:** $0
- **Gross exposure:** 82.8%
- **Net long exposure:** 82.8%
- **Pattern day trader:** Unknown (Alpaca paper API does not expose daytrade_count)
- **Open orders:** NONE (canceled 2 unauthorized GTC orders placed by tactical agent today)

### Current Holdings
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P/L | Unrealized % |
|--------|-----|-----------|---------|--------------|--------|----------------|--------------|
| QQQ | 6 | $716.47 | $723.31 | $4,339.86 | 44.5% | +$41.02 | +0.95% |
| VOO | 2 | $676.46 | $690.59 | $1,381.17 | 14.2% | +$28.25 | +2.09% |
| AVGO | 3 | $371.95 | $401.38 | $1,204.14 | 12.3% | +$88.29 | +7.91% |
| HOOD | 5 | $101.50 | $115.24 | $576.20 | 5.9% | +$68.70 | +13.54% |
| SOXX | 1 | $589.47 | $582.14 | $582.14 | 6.0% | -$7.34 | -1.24% |

### Compliance Audit
- **Universe check:** ALL holdings in approved universe (AVGO, HOOD, QQQ, SOXX, VOO). PASS.
- **Concentration check:** QQQ 44.5% (under 45% cap). AVGO 12.3% (under 15% cap). VOO 14.2% (under 20% ETF cap). PASS.
- **Short exposure:** $0. No unauthorized positions. PASS.
- **No open orders:** Both unauthorized GTC orders (HOOD buy 2 @ $114.50, NVDA buy 1 @ $198.50) placed by tactical agent today were canceled. PASS.

## Goal Check
- **Inception baseline:** 2026-05-04, SPY $718.01
- **Total invested:** $10,000 ($5,000 initial deposit on May 3 + $5,000 deposit on May 20)
- **Current SPY:** $751.55 (+4.67% since inception)
- **Current portfolio equity:** $9,748.01 (-2.52% vs total invested)
- **Status:** **Off track — failing both goals.**
  - Goal 1 (positive absolute returns): FAILED — equity below inception.
  - Goal 2 (beat SPY risk-adjusted): FAILED — trailing by ~7.2 percentage points.
- **Dominant failure mode:** **excessive turnover / friction + 7-week lack of hourly oversight.** The tactical agent executed numerous round trips (QQQ, AVGO, VOO, RKLB, GOOG, HOOD) without strategic authorization, destroying edge through transaction costs and mistimed entries/exits. Specific losses: RKLB bought @ $98 sold @ $93.25 (-4.85%), GOOG bought @ $356.77 sold @ $348.97 (-2.18%), SOXX bought today @ $589.47 now at $582.14 (-1.24% intraday).

## Performance Context
- **1D:** Portfolio up ~+1.1% today (equity $9,642.60 → $9,748.01). SPY up ~+0.9%. In line with market.
- **1W:** Approximate. Portfolio held steady; SPY +0.9% over 5 days.
- **Since inception (May 4):** Portfolio -2.52% vs SPY +4.67%.

## Current Regime
- **Regime:** **offensive catch-up** (portfolio is significantly behind SPY and needs to generate alpha)
- **But with guardrails:** Gross exposure at 82.8% is near the upper end of the 60–90% offensive band. No forced deployment. Cash reserve of 17.1% is acceptable.
- **Risk posture:** Cautious offensive. The book is reasonably diversified across tech (QQQ, AVGO, SOXX), broad market (VOO), and fintech (HOOD). Stop discipline must be tight to prevent further drawdowns.

## Current Macro Thesis
The broad market remains in an uptrend with SPY near all-time highs ($751+). Mega-cap tech is bifurcated: AI infrastructure names (AVGO, QQQ) and fintech/crypto proxies (HOOD) are performing well, while legacy search/semiconductors (GOOG, NVDA) have lagged. Semiconductors staged a sharp intraday recovery today (+5% for SOXX) after a multi-week pullback, but our entry at $589.47 was poorly timed near the intraday high. The portfolio is positioned with a mix of momentum (HOOD, AVGO) and core beta (QQQ, VOO), which is appropriate for catching up to SPY. However, we must stop churning and let winners run.

## Priority Actions For Next Session (July 10 open)
1. **HOLD all current positions** unless a stop is breached.
2. **No new unauthorized orders** — every order must align with the hourly directive.
3. **Monitor QQQ weight** — if price appreciation pushes QQQ above 45% of equity, trim 1 share immediately.
4. **SOXX stop** — if SOXX drops below $570 (below today's low ~$580), cut the position to stop the loss.
5. **No NVDA or GOOG re-entry** unless the hourly strategist explicitly authorizes a fresh entry with a clear setup.
6. **No RKLB** — too volatile; prior round-trip lost money.
7. **Evaluate HOOD** — if it pulls back to ~$110-112, consider adding with hourly authorization.
8. **Cash reserve** — maintain at least $1,000 cash buffer. Do not deploy cash into low-conviction names just to reduce cash drag.

## Deployment Queue (if cash is deployed)
1. **META** — strong relative trend, large-cap AI exposure, not currently held. Entry only on pullback to ~$600 or breakout above $620.
2. **GLD** — defensive diversifier if macro turns risk-off. Entry only if SPY drops below $740.
3. **QTUM** — thematic quantum/AI play. Entry only after stabilization above $150.

## Position Map
| Symbol | Bias | Rationale | Target % |
|--------|------|-----------|----------|
| QQQ | Hold | Core liquid growth; near 45% cap. Trim if >45%. | 36–42% |
| AVGO | Hold | AI/networking leader; best unrealized gains. Let run. | 10–15% |
| VOO | Hold | Broad market beta; lower volatility anchor. | 12–16% |
| HOOD | Hold | Strongest momentum in book. No chase. | 5–8% |
| SOXX | Hold / Cut if weak | Bought at poor intraday timing. Cut below $570. | 4–6% |
| META | Watch | Large-cap growth not in book. Re-entry candidate. | 0–6% |
| NVDA | Avoid | Weak trend. No re-entry without explicit hourly setup. | 0% |
| GOOG | Avoid | Down -11% from May levels. No re-entry without stabilization. | 0% |
| RKLB | Avoid | Too volatile. Prior round-trip lost money. | 0% |
| GLD | Watch only | Defensive diversifier if macro shifts. | 0–4% |
| QTUM | Watch only | Thematic speculative. Only after churn is controlled. | 0–4% |
| EIS | Avoid | Low liquidity, unclear trend. | 0% |
| SHLD | Avoid | No clear thesis. | 0% |
| ARKX | Avoid | Space ETF; RKLB exposure already tested and failed. | 0% |

## Historical Notes (summarized)
- **2026-05-04:** Inception. Baseline SPY $718.01.
- **2026-05-18:** Unauthorized tactical liquidations (AVGO, SOXX, XLK short). Code guardrails deployed. Account state: QQQ 6, GOOG 3, NVDA 3, XLK -3 short, equity ~$9,960.
- **2026-05-19 to 2026-07-08:** 7-week gap with no hourly oversight. Tactical agent traded autonomously. XLK short was covered. Positions rotated through QQQ, AVGO, VOO, HOOD, RKLB, GOOG, NVDA, SOXX. Multiple round trips generated friction losses.
- **2026-07-09:** Data blackout resolved. Alpaca CLI rewritten to direct fetch. Canceled 2 unauthorized GTC orders. Live book confirmed clean and compliant.

## Standing Learnings
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- Never average down.
- Require a second source if broker quotes are stale.
- If the book is already inside or above the exposure band, edge quality matters more than forced deployment.
- **Do not trade outside the approved universe.**
- **Do not churn the same symbol in and out without a fresh explicit trigger.**
- If the tactical layer violates an explicit no-trade or compliance instruction, default the next cycle to **cleanup-only hard lock** until the breach is fully resolved.
- **Audit every live position against the universe on every run.**
- **Audit open orders on every run.** Cancel unauthorized or stale orders immediately.
- If the tactical agent operates without hourly oversight for an extended period, expect drift and churn. Re-establish hourly discipline ASAP.
- **Document environmental issues** (slow Bun startup, SDK hangs) in memory so future agents don't waste cycles debugging.
- **Alpaca SDK hang root cause:** `@alpacahq/alpaca-trade-api` eagerly creates WebSocket clients in its constructor, which hangs in restricted child-process environments. Use direct `fetch` to the Alpaca REST API instead.
- If live broker/account refresh fails across primary and fallback sources, classify as **data blackout** and default to no-trade/hold-only.
