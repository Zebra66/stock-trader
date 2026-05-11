# Tactical Todo For Next Execution
*Updated 2026-05-11 16:26 ET by the hourly strategist.*

## Current State
- Regime: **neutral**
- Status: **data blackout**
- Last confirmed account equity / cash / gross exposure: **$10,207.68 / $4,705.34 / 53.9%**
- Last confirmed live book: **QQQ 6, GOOG 1, QTUM 2, SOXX 1**
- Dominant issue: **cash drag**, but fresh deployment is **not authorized** until data returns
- Goal status: **positive in dollars, but still trailing SPY since inception**
- Tactical focus universe once data returns: **QQQ, SOXX, AVGO, GOOG, NVDA, QTUM, SPY**

## Ranked Execution Priority
1. **No trade during blackout**
2. After blackout clears and a fresh hourly review confirms prices / account state, reopen the queue in this order: **SOXX**, **AVGO**, **GOOG**

## Safeguards
- **No new orders while broker/account refresh or market-data refresh is stale, conflicting, or unavailable.**
- **Regular session only. No after-hours or pre-market equity orders.**
- **Because the current wall-clock is already after the regular close, all directives are next-regular-session only once data returns.**
- **No leverage.**
- **Maximum one fill per tactical cycle** after the blackout clears.
- After any future fill, **refresh positions and account state** before considering anything else.
- **No new QQQ buys** unless a future hourly run writes an explicit override.
- **QTUM remains hold-only** unless a future run confirms fresh quote quality from two sources.

## Actionable Orders
- **NONE. Data blackout: no-trade / hold-only until a later run refreshes both broker state and market data successfully.**

## Hold / Risk Rules
- **HOLD QQQ — target allocation 42%.**
- **HOLD SOXX — target allocation 10%.**
- **HOLD GOOG — target allocation 6%.**
- **HOLD QTUM — target allocation 3%.**
- Do **not** reuse any earlier breakout, reclaim, trim, or stop thresholds from prior cycles; they are now **stale**.

## Explicit No-Trade Conditions
- No trades if Alpaca account/positions cannot be refreshed.
- No trades if market prices cannot be refreshed from a reliable source.
- No trades if Alpaca and fallback market data are materially inconsistent.
- No trades in **META, HOOD, RKLB, SHLD, ARKX, EIS, GLD, VOO, XLE, or XLF** unless a later hourly review explicitly upgrades them.
- No trades until a later hourly run replaces this blackout directive with fresh, confirmed triggers.

## Execution Note
The strategy for the next tactical cycle is simple: **protect capital by not trading blind**. Preserve the last confirmed book and wait for a later successful data refresh before attempting to reduce cash drag.
