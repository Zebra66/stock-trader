# Trading Agent Todo List

## Always-On Tactical Rules
- [ ] Hourly decides bias. Tactical decides price. Risk rules override both.
- [ ] Do not open a trade unless expected edge to first planned trim or exit is at least 3x estimated total round-trip cost.
- [ ] Estimated total round-trip cost must include spread, slippage, CAT, and sell-side SEC / FINRA fees.
- [ ] Never average down.
- [ ] Add only to winners, and only if the add is smaller than or equal to the prior add.
- [ ] Do not chase breakouts that are already extended beyond the planned buy zone.
- [ ] No new full-size positions shortly before major macro releases or earnings.
- [ ] If no condition is clearly met, do nothing.

## Tactical Buy Setups
- [ ] Buy a breakout only if:
  - the hourly regime allows new longs
  - the stock is a leader, not a laggard
  - price clears the pivot or breakout level cleanly
  - price is not immediately rejected back into the base
  - there is no adverse headline that changes the thesis
  - the expected move is large enough to clear transaction friction
- [ ] Buy a pullback reclaim only if:
  - the higher-timeframe uptrend is still intact
  - the pullback is orderly, not broken
  - price reclaims support, VWAP, or the planned trigger level
  - the reclaim is not happening directly into a major event
- [ ] Buy post-earnings continuation only if:
  - initial price discovery is complete
  - the stock holds support after the event
  - the move shows evidence of continuation, not exhaustion

## Tactical Sell / Reduce Setups
- [ ] Sell or cut immediately on a failed breakout:
  - price falls back into the base
  - price loses the breakout pivot
  - the move shows immediate rejection
- [ ] Reduce or exit on:
  - heavy-volume reversal after extension
  - bad news that changes the thesis
  - relative-strength breakdown
  - market-wide regime deterioration
  - abnormal slippage or liquidity deterioration
- [ ] Trim winners when:
  - position becomes too extended versus plan
  - event risk is near
  - concentration becomes too high
- [ ] Hold only when:
  - trend remains intact
  - relative strength remains healthy
  - no sell condition is active

## Active Conditions For The Current Hour
- [ ] HOURLY AGENT MUST REWRITE THIS SECTION EVERY RUN.
- [ ] For each active symbol, use this format:
- [ ] `BUY <TICKER> only if <setup> and <price / trigger> and <risk condition>`
- [ ] `SELL or REDUCE <TICKER> if <invalidates>`
- [ ] `HOLD <TICKER> while <conditions remain true>`
- [ ] `AVOID <TICKER> because <reason>`

## Hourly Job: Revisit Every Execution
- [ ] Re-classify market regime:
  - risk-on
  - mixed / transition
  - risk-off
- [ ] Check breadth and leadership:
  - is the tape broadening or narrowing?
  - are breakouts working?
  - are leaders holding gains?
- [ ] Check sector and factor rotation.
- [ ] Check macro events in the next 24 to 72 hours.
- [ ] Check earnings dates for held names and watchlist names.
- [ ] Check exposure drift:
  - gross exposure
  - single-name size
  - theme concentration
  - beta drift
- [ ] Check hidden correlation and crowding.
- [ ] Check volatility, spread, and slippage conditions.
- [ ] Check whether the tactical loop is overtrading or forcing low-edge entries.
- [ ] Rewrite active buy, hold, reduce, sell, and avoid instructions for the next hour.

## Watch-Fors
- [ ] Narrowing breadth while headline indexes still rise.
- [ ] Leadership concentrated in too few mega-caps.
- [ ] Sudden rotation out of current winning sectors.
- [ ] Repeated failed breakouts in the same session or same week.
- [ ] Spread widening or poor fills in symbols that are normally liquid.
- [ ] Tactical turnover rising while realized edge falls.
- [ ] Multiple positions turning into the same hidden macro trade.
- [ ] Earnings or macro event clustering that makes normal tactical entries unreliable.

## Consider Full Strategy Review When
- [ ] Drawdown exceeds planned tolerance.
- [ ] Breakout and continuation setups stop working across the board.
- [ ] Breadth and leadership structure change materially and stay changed.
- [ ] Correlations rise and diversification stops helping.
- [ ] Slippage, spread, or fee drag makes the current trading frequency uneconomic.
- [ ] The tactical loop repeatedly fights the hourly regime filter.
- [ ] One theme, one sector, or a few names dominate the book.
- [ ] A persistent macro regime shift changes what kinds of setups work.
