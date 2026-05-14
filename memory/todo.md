# Tactical Todo For Next Execution
*Updated 2026-05-13 18:58 ET from direct Alpaca REST, Yahoo Finance chart fallback, Bing News RSS, and Yahoo Finance RSS.*

## Current State
- **Market:** closed
- **Regime:** **offensive catch-up**
- **Authoritative holdings:** **GOOG 1, QQQ 6, QTUM 2, SOXX 1**
- **Account equity / cash / buying power:** **$10,226.87 / $4,705.34 / $14,932.21**
- **Long market value / gross exposure:** **$5,521.53 / 54.0%**
- **Target gross-exposure band:** **55-70%**
- **Default posture this cycle:** **hold overnight; next regular-session only for any new buy**

## This Cycle
- Market buy orders were submitted for **SOXX 1** and **NVDA 2 total** to deploy excess cash; do not resubmit them this cycle.

## Ranked Execution Priority
1. **GOOG**
2. **QQQ**
3. **NVDA** (use **SOXX** instead only if the ETF setup is cleaner than the single-name breakout)

## Safeguards For The Next Hour / Next Session
- **No after-hours or pre-market equity orders by default.**
- **One opening trade maximum** unless a hard risk-cut trigger fires.
- **No leverage.**
- **Do not average down.**
- If Alpaca account/positions refresh fails and no direct REST fallback is available, **do not open new risk**.
- If broker and Yahoo prices differ by more than about **0.5%**, or quotes are thin / stale, **wait for regular-session confirmation**.
- **Do not place a fresh opening buy in the first 10 minutes after the bell** unless a hard sell-risk trigger requires action; let the open stabilize.
- If live gross exposure is already back inside **55-70%** and no sell trigger fires, prefer **hold** over forcing a second trade.

## Actionable Conditions — Next Regular Session Only
- **HOLD GOOG — target allocation 5-8%.**
  - **BUY GOOG** only if gross exposure is **below 55%** and price **breaks above 400.2** with QQQ firm and the breakout holds for several minutes — clean AI/cloud continuation without overconcentrating QQQ.
  - **BUY GOOG** on pullback only if gross exposure is **below 55%**, price trades around **394-395**, then reclaims **396.5** with orderly tape.
  - **SELL GOOG** if price **breaks below 392.0** on confirmed regular-hours weakness — failed near-term trend.

- **HOLD QQQ — target allocation 40-45%.**
  - **BUY QQQ** only if gross exposure is **below 55%** and price **breaks above 717.0** with **SPY above 744.0** and both hold for several minutes — broad growth leadership remains intact.
  - **BUY QQQ** on a controlled pullback only if gross exposure is **below 55%**, price trades in the **710-712** area, then reclaims **713.5** with orderly breadth.
  - **SELL QQQ** only if price **breaks below 707.0** with **SPY below 736.5** and weakness persists — protect the breakout without routine trimming.

- **WATCH NVDA — target allocation 0-4%.**
  - **BUY NVDA** only if gross exposure is **below 55%**, QQQ stays firm, and price **breaks above 228.0** on liquid regular-hours tape — strongest semi leader.
  - **No buy** if NVDA is the only leader but QQQ/SPY are rolling over.

- **HOLD SOXX — target allocation 5-7%.**
  - **No new add by default.** Use **SOXX instead of NVDA** only if the ETF shows the cleaner, more liquid setup.
  - **BUY SOXX** only if gross exposure is **below 55%** and price **breaks above 534.0** with NVDA firm — semiconductor leadership continuation.
  - **SELL SOXX** if price **breaks below 522.0** on confirmed regular-hours weakness — protect gains.

- **HOLD QTUM — target allocation 2-4%.**
  - **No new add by default.**
  - **SELL QTUM** only if price **breaks below 144.0** on confirmed weakness — small thematic sleeve should not become dead weight.

## Explicit No-Trade Conditions
- No buys while the market is closed, pre-market is thin, or only extended-hours prints are available.
- No fresh buy if evidence quality is weak, headlines conflict with the setup, or opening tape is disorderly.
- No new positions in **META, HOOD, SHLD, ARKX, EIS, GLD, VOO, RKLB, or AVGO** unless a later hourly run explicitly upgrades them.
- If no trigger confirms cleanly, **do nothing** and preserve capital.

## Short Summary For Tactical Agent
- The portfolio is still **off track since inception** because of earlier cash drag, but it is now beating SPY over **1D** and **1W**.
- Keep existing winners; **do not trim mechanically**.
- Because the market is **closed**, all buys are **next regular-session only**.
- Preferred next add is **GOOG**, then **QQQ**, then **NVDA/SOXX** if leadership confirms.
