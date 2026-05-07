# Tactical Todo For Next Execution
*Authoritative execution sheet refreshed 2026-05-07 11:44 ET.*

## Mandatory First Step
- [ ] Refresh **Alpaca account**, **positions**, **clock**, and **latest prices** before doing anything else.
- [ ] Treat the refreshed Alpaca broker state as authoritative over all older notes.
- [ ] Confirm the market is **open** and the tape is still orderly before placing any order.

## Regime And Exposure Rules
- [ ] Current regime is **offensive catch-up**.
- [ ] Current live gross exposure is about **32.5%**; target **45-55%** by staged adds during regular hours if conditions stay constructive.
- [ ] Size from **account equity**, not margin buying power.
- [ ] **No leverage.**
- [ ] **Do not average down.**
- [ ] Use **marketable limit orders** unless the spread is clearly tight.
- [ ] At most **one trade per tactical cycle**.
- [ ] Refresh **positions after any fill** before considering another order.

## Ranked Execution Priority
1. **GOOG**
2. **AVGO**
3. **SOXX**
4. **Reserve only: QQQ** if the first three names are blocked and exposure is still below target

## Active Buy Conditions
- [ ] **BUY GOOG 1 share** if price **breaks above 394.30** with regular-hours confirmation, while **QQQ is above 699.50 or SPY is above 734.80** — rationale: strongest underweight liquid add in the live book.
- [ ] **BUY AVGO 1 share** if price **reclaims 422.70** with orderly tape and semis stabilizing — rationale: re-enter high-quality AI infrastructure leader without chasing weak prints.
- [ ] **BUY SOXX 1 share** if price **breaks above 501.80** and **QQQ remains above 698.50** — rationale: only add the semiconductor ETF if group strength actually returns.
- [ ] **BUY QQQ 1 share** only if **GOOG / AVGO / SOXX** do not trigger cleanly, price **breaks above 700.20**, **SPY is above 734.80**, and exposure remains below target — rationale: reserve broad-beta catch-up tool, not first choice because QQQ is already the biggest position.

## Existing Position Rules
- [ ] **HOLD QQQ** — target allocation about **20%**. Do not trim on normal strength. **SELL 1 share only if price breaks below 694.50 on a 15-minute support failure and SPY also weakens below 733.50.**
- [ ] **HOLD GOOG** — target allocation about **8%**. **SELL 1 share only if price loses 391.20 on confirmed weakness; no averaging down.**
- [ ] **HOLD SOXX** — target allocation about **7%**. **SELL 1 share only if price loses 492.50 on a clean support break.**
- [ ] **HOLD QTUM** — target allocation about **3%**. **SELL 1 share only if price loses 141.20 and the growth tape is weakening too.**

## No-Trade Conditions
- [ ] If the market is closed, do nothing.
- [ ] If quotes are stale, abnormal, or second-source confirmation disagrees, do nothing.
- [ ] Do **not** use the Yahoo 15-minute snapshot's zero-volume last bar as proof of volume confirmation; rely on live broker data for execution quality.
- [ ] If a same-day symbol-specific news item materially conflicts with the setup, do nothing and log the conflict.
- [ ] If exposure is already inside the target band and no top-ranked setup is confirmed, do nothing.

## Notes
- [ ] FMP historical-performance tooling is unavailable this run; hourly levels were built from **Yahoo Finance chart API**.
- [ ] News/search fallback was **Yahoo Finance RSS** after **Bing News RSS** returned insufficient coverage.
- [ ] Keep this file current; move detailed fill history to the dated intraday log.
