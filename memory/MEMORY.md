# Global Strategy & Context
*Updated hourly by the Gemini Pro Macro Strategist.*

## Objective
Beat the S&P 500 over a 3-month window with controlled outperformance, not maximum turnover. Preserve capital first, then compound in the strongest names and sectors when the market regime supports risk.

## Operating Posture
- Hourly decides bias. Tactical decides price. Risk rules override both.
- Prefer leaders in leading sectors and themes.
- Buy strength from valid setups. Do not buy weakness just because it is cheaper.
- Never average down.
- Add only to winners, and each add must be smaller than or equal to the prior add.
- Cash is a valid position when breadth, leadership, or macro conditions are poor.
- The 10-minute agent is an executor, not an independent day-trading strategy.

## Trading Cost Reality
- Alpaca may be commission-free for self-directed individual cash brokerage accounts trading U.S.-listed securities through the API, but a round trip is never free.
- On live trading, always assume total friction includes:
  - bid/ask spread
  - slippage
  - SEC fees on sells
  - FINRA TAF on sells
  - CAT fees on buys and sells
  - possible non-retail or special routing charges if account status changes
- Tactical agent may only open or add to a position when expected edge to the first planned trim or exit is at least 3x estimated total round-trip cost.
- Skip low-edge trades where the likely move is too small to overcome friction.

## Portfolio Construction Guardrails
- Target gross long exposure by regime:
  - Risk-on: up to 80%
  - Mixed / transition: up to 50%
  - Risk-off: up to 20%
- Max single-name target:
  - large liquid leaders: 6%
  - higher-volatility single names: 3%
  - core ETFs: 10%
- Max theme concentration: 25%
- Initial entry should usually be 33% to 50% of the intended full position.
- Maximum adds after the first entry: 2
- Never add if the original entry is below cost basis.
- If two breakout attempts fail in the same symbol within 5 trading days, pause fresh entries until the next hourly review.
- Reduce exposure before earnings unless the setup is explicitly a post-earnings continuation trade.

## Approved Buy Cases
- Breakout from a valid multi-day or multi-week base near recent highs, with sector support and no immediate rejection.
- Tight pullback reclaim in an existing uptrend, especially if price reclaims VWAP or key support after orderly profit taking.
- Post-earnings drift continuation after initial price discovery confirms the move and the stock holds support.
- Re-entry after a successful breakout retest, only if the stock proves support and the market regime still favors longs.

## Do Not Buy If
- The market regime is risk-off or breadth is deteriorating sharply.
- The stock is below broken major support and has not reclaimed it.
- The move is already extended far above the intended buy zone.
- Earnings or a major macro event is too close to justify fresh risk.
- The expected move is too small to clear spread, slippage, CAT, and sell-side regulatory fees.
- The setup requires averaging down to work.
- The symbol is lagging its sector, index, or peer group.

## Approved Sell Or Reduce Cases
- Failed breakout: price breaks out and then falls back into the base or loses the breakout pivot.
- Thesis invalidation: price loses the planned support or invalidation level.
- Heavy-volume reversal after extension.
- Relative-strength breakdown versus peers, sector, or index.
- Position becomes too extended relative to plan and should be trimmed, not chased.
- Earnings or major macro event is near and the edge does not justify holding full size.
- Breadth or regime deteriorates enough that book-level exposure should come down.
- Tactical agent sees abnormal slippage, adverse news, or market-wide reversal during entry or hold.

## Tactical Execution Rules
- Buy only when hourly bias allows new longs.
- Prefer limitable entries or constructive pullbacks over market-chasing.
- On breakouts, require confirmation and avoid immediate rejection.
- On gap-ups, require the stock to hold structure rather than fill the gap immediately.
- Freeze adds after a poor close, abnormal reversal bar, or bad news headline.
- Sell fast on failed breakouts. Do not debate them.
- Do not churn for noise. If no condition is met, do nothing.

## Hourly Revisit Each Run
- Re-classify the market regime: risk-on, mixed, or risk-off.
- Refresh breadth and leadership:
  - advance / decline behavior
  - narrow vs broad participation
  - equal-weight vs cap-weight
  - sector winners and losers
- Refresh sector and factor rotation:
  - growth vs value
  - momentum vs quality
  - cyclicals vs defensives
- Refresh the macro calendar for the next 24 to 72 hours:
  - FOMC
  - CPI / PPI
  - payrolls
  - Treasury events
  - major geopolitical catalysts
- Refresh the earnings calendar for held names, watchlist names, and sector bellwethers.
- Recompute exposure drift:
  - gross exposure
  - single-name concentration
  - theme concentration
  - beta drift
- Recompute hidden correlation:
  - are multiple positions really the same trade now?
- Check realized volatility, liquidity, spread behavior, and slippage conditions.
- Review recent tactical hit rate:
  - are breakouts working?
  - are pullbacks reclaiming?
  - is turnover rising while expectancy falls?
- Update tactical instructions with clear active buy, sell, reduce, hold, and avoid conditions.

## Escalate To Full Strategy Review When
- Drawdown exceeds the expected budget.
- Breakout and continuation setups fail repeatedly across the watchlist.
- Breadth and leadership structure materially change and stay changed.
- Correlations stay elevated and diversification stops working.
- Tactical turnover rises while hit rate or expectancy declines.
- Slippage or spread conditions worsen enough that the current execution style is no longer valid.
- Earnings reactions repeatedly contradict the current playbook.
- The book becomes dependent on one theme, one sector, or a few names.
- Macro regime shifts from temporary shock to persistent change.
- The hourly and tactical loops keep fighting each other instead of reinforcing each other.

## Bias Table
| Symbol | Role | Default Bias | Max Target % | Buy Only If | Sell / Reduce If |
|---|---|---:|---:|---|---|
| QQQ | Core growth ETF | Opportunistic long | 10% | risk-on or mixed-improving regime | regime weakens, breadth narrows badly |
| XLK | Core tech ETF | Opportunistic long | 8% | sector leadership confirms | tech leadership breaks |
| MSFT | Large-cap leader | Selective long | 6% | leadership plus constructive entry | relative-strength breakdown |
| GOOGL | Large-cap leader | Selective long | 5% | trend and setup confirm | support fails or thesis weakens |
| NVDA | High-beta leader | Selective long | 4% | only on valid setup, not chase | failed breakout or abnormal reversal |
| META | Large-cap leader | Selective long | 5% | leadership and breadth support | weak relative strength |
| URA | Theme ETF | Tactical long | 4% | theme leadership and clean setup | theme breaks down |
| NLR | Theme ETF | Tactical long | 3% | theme leadership and clean setup | theme breaks down |
| CCJ | Theme stock | Tactical long | 3% | valid setup with risk-on tape | failed setup |
| CEG | Theme stock | Tactical long | 3% | valid setup with risk-on tape | failed setup |
| ARKX | Theme ETF | Tactical long | 3% | risk-on and momentum confirms | theme fades |
| UFO | Theme ETF | Tactical long | 2% | only if liquidity and setup are clean | liquidity poor or theme fades |
| RKLB | High-vol theme stock | Small tactical long | 2% | only on strong confirmation | immediate rejection or thesis break |
| QTUM | Theme ETF | Tactical long | 3% | risk-on and clean setup | momentum fails |
| IONQ | High-vol theme stock | Small tactical long | 2% | only on strong confirmation | failed breakout |
| RGTI | High-vol theme stock | Small tactical long | 1% | only on exceptional setup | any fast failure |
