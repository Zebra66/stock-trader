# Tactical Todo For Next Execution
*Updated 2026-05-08 during the regular session by the hourly strategist.*

## Current State
- Regime: **offensive catch-up**
- Account equity / cash / gross exposure: **$10,164.40 / $5,417.86 / 46.7%**
- Target gross-exposure band: **50-60%**
- Live book: **GOOG 1, QQQ 5, QTUM 2, SOXX 1**
- Dominant issue: **cash drag**
- Goal status: **positive in dollars, but still trailing SPY since inception**

## Ranked Execution Priority
1. **QQQ**
2. **GOOG**
3. **AVGO**

## Safeguards
- **Regular session only. No after-hours or pre-market equity orders.**
- **No leverage.** Size from account equity.
- **Maximum one fill per tactical cycle.**
- After any fill, **refresh positions and account state** before considering anything else.
- If gross exposure reaches **50%+**, stop new buys until the next hourly review.
- If Alpaca latest bar is older than **5 minutes**, or Alpaca and Yahoo prices differ by more than **0.5%**, do not trade that symbol.
- If the tape turns disorderly (SPY loses **735** and QQQ loses **705** together), do not add risk.
- **No buys after 15:50 ET.** If a trigger has not fired by then, carry it as a next-regular-session idea only.
- **QTUM is hold-only** unless a second source confirms a fresh quote; latest broker bar quality was weak.

## Actionable Orders
- **BUY QQQ if price breaks above 710.30 with confirmation** — require **SPY > 737.80**, both Alpaca and Yahoo to confirm the move, and use a limit order near the live market. **Qty: 1 share.** Rationale: most liquid way to reduce cash drag and move gross exposure into band.
- **BUY GOOG if QQQ does not fill and GOOG breaks above 398.50 with confirmation** — require **QQQ > 708** and **SPY > 736.50**. **Qty: 1 share.** Rationale: strong AI / cloud leader, but only on fresh momentum confirmation.
- **BUY GOOG if price dips below 391.50 and then reclaims 392.50 with QQQ still green** — only as the backup to the breakout plan, not in addition to a QQQ fill. **Qty: 1 share.** Rationale: controlled pullback entry in a still-valid trend.
- **BUY AVGO if neither QQQ nor GOOG triggers and AVGO breaks above 438.00 with confirmation** — require **NVDA and SOXX both green on the day** and spread / quote quality to look normal. **Qty: 1 share.** Rationale: strong AI infrastructure momentum, but third in line behind the more liquid leaders.

## Hold / Risk Rules
- **HOLD QQQ — target allocation 40%.**
- **SELL 1 QQQ if price falls below 700.00 with SPY below 734.50** — rationale: protect against a failed breakout / broad-market reversal.
- **HOLD GOOG — target allocation 5%.**
- **SELL GOOG if price falls below 389.00 with QQQ weak at the same time** — rationale: avoid letting the lagging single-name position become a drag.
- **HOLD SOXX — target allocation 7%.**
- **SELL SOXX if price falls below 505.00 on confirmed semiconductor reversal** — rationale: protect the strongest winner if sector leadership breaks.
- **HOLD QTUM — target allocation 3%. No new buys this hour.**
- **SELL QTUM if price falls below 139.50 and Yahoo confirms the move** — rationale: thin quote quality means use confirmation before acting.

## Explicit No-Trade Conditions
- No trades if market data or broker state becomes stale / conflicting.
- No trades if a buy trigger fires but the benchmark confirmation fails.
- No trades in **META, HOOD, RKLB, SHLD, ARKX, EIS, GLD, or VOO** this cycle unless a later hourly review explicitly upgrades them.
- No second buy after the portfolio moves into the target exposure band.

## Execution Note
The strategy for this hour is simple: **reduce cash drag with one clean, liquid add if the tape confirms, otherwise hold the current winners.**

## Current Cycle Result
- **No trade executed.** Alpaca 1m bars for QQQ / GOOG / AVGO were stale and/or conflicted with Yahoo by more than the allowed threshold, so the freshest-safe action was to hold.
