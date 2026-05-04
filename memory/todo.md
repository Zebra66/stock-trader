# Tactical Todo For Next Execution

## Book-Level Instructions
- [ ] Use **account equity ($9,985.48)** as the sizing base. Do **not** size from raw margin buying power.
- [ ] Current live positions: **AVGO 1 share**, **SOXX 2 shares**, **QTUM 2 shares**, **QQQ 1 share**, and **RKLB 1 share**.
- [ ] Current gross exposure is about **23.7%**. Cap gross exposure around **23-24%** for this hour unless the next hourly review explicitly raises it.
- [ ] Keep roughly **76%+ cash** after any new trade unless the tape materially improves.
- [ ] Treat the current book as already having meaningful semiconductor / AI exposure.
- [ ] If multiple setups trigger, prioritize in this order: **GOOG -> AVGO -> NVDA**.
- [ ] **Do not add QQQ first** this hour; a second share would push exposure above the current tactical cap without enough incremental edge.
- [ ] Skip any trade where the expected move to first trim is not clearly at least **3x** estimated total round-trip friction.
- [ ] Estimated friction reminder: liquid mega-cap / ETF names can still cost roughly **5-20 bps** round trip once spread, slippage, CAT, SEC, and FINRA sell-side fees are included; thinner names can cost materially more.
- [ ] Use marketable limit orders when spreads are not very tight.
- [ ] **Do not average down** any existing position.
- [ ] Adds must be smaller than or equal to prior adds and only into winners.
- [ ] If live Alpaca state disagrees with this file or `memory/MEMORY.md`, trust **Alpaca first** and update stale directives before acting.

## Existing Positions
- [ ] **HOLD SOXX** — current size is already near the desired **~10%** target allocation. **Do not add** this hour unless the next hourly cycle explicitly raises the target. **SELL SOXX** if price breaks below **459.5** to cut risk. **TRIM 1 share** above **466.8** if strength extends.
- [ ] **HOLD QTUM** — current size is already near the desired **~3%** target allocation. **Do not add** this hour unless the next hourly cycle explicitly authorizes it. **SELL QTUM** if price breaks below **134.4** to cut risk. **TRIM 1 share** above **137.4** if strength extends.
- [ ] **HOLD QQQ** — current size is already at the intended **~7%** target allocation for this account. **No new QQQ add** this hour unless another position is trimmed first. **SELL / REDUCE QQQ** above **676.8** to trim, or below **669.2** to cut risk.
- [ ] **HOLD RKLB** — keep this as a tiny satellite only. **SELL RKLB** below **79.6** to cut risk. **TRIM 1 share** above **83.6** if strength extends.

## Active Buy / Sell Conditions For New Capital
- [ ] **BUY GOOG** if price reclaims **381.0-381.4** and holds, or if it breaks above **383.0** with confirmation — Reuters-backed cloud/AI earnings quality and 1-week relative strength still make it the best incremental add. Start with **1 share** (~3.8% of equity). **SELL / REDUCE GOOG** above **387.2** to trim, or below **377.4** to cut risk.
- [x] **BUY AVGO** only if price reclaims **415.8-416.4** with semis firm, or if it breaks above **418.2** with confirmation — medium-term trend is strong, but because SOXX is already owned the setup must be cleaner than GOOG. Start with **1 share** (~4.2% of equity). **SELL / REDUCE AVGO** above **421.8** to trim, or below **410.4** to cut risk. **Executed 1 share at 416.95** on 2026-05-04 15:38 ET.
- [ ] **BUY NVDA** only if price reclaims **199.4-199.9** with SOXX strong, or if it breaks above **201.2** cleanly — still a structural AI leader, but near-term momentum is weaker than GOOG and the book already has chip exposure. Start with **1 share** (~2.0% of equity). **SELL / REDUCE NVDA** above **204.0** to trim, or below **195.4** to cut risk.

## Avoid / Low-Priority Names This Hour
- [ ] **AVOID META** unless price reclaims **618** and relative strength materially improves.
- [ ] **AVOID HOOD** unless price reclaims **78.0** and holds despite the weaker post-earnings / analyst-reset backdrop.
- [ ] **AVOID EIS** unless price clears **133.8** on tight spreads **and** a fresh live quote confirms the move.
- [ ] **AVOID SHLD** unless price reclaims **69.0** with better relative strength.
- [ ] **AVOID GLD** this hour unless a clear risk-off shock appears; current account size makes the intended hedge sizing awkward.
- [ ] **AVOID VOO** for new capital while QQQ keeps superior relative strength.
- [ ] **AVOID ARKX** unless space momentum broadens materially beyond RKLB.

## Tactical Behavior Reminders
- [ ] If the tape becomes disorderly, do nothing and preserve cash.
- [ ] If GOOG / AVGO / NVDA do not confirm, accept the current exposure and wait.
- [ ] If SOXX, QTUM, QQQ, or RKLB hit their stop levels, reduce first and reassess before opening replacement positions.
- [ ] If GOOG triggers cleanly, it is acceptable to take it as the **only** fresh add this hour.
- [ ] If GOOG does not trigger but AVGO or NVDA does, take only the cleaner setup rather than forcing multiple trades.
- [ ] AVGO starter position is now live; do not add again this hour unless the next hourly review explicitly authorizes a higher target.

## 2026-05-04 15:01 ET Hourly Refresh Notes
- [x] Live Alpaca account confirms the book is **SOXX 2 shares**, **QTUM 2 shares**, **QQQ 1 share**, and **RKLB 1 share**.
- [x] Account snapshot at 15:01 ET: **$9,984.91 equity / $8,035.00 cash / $17,941.36 buying power**.
- [x] Current unrealized P&L is **-$15.09** overall (**SOXX -$11.94, QTUM -$2.56, QQQ -$0.87, RKLB +$0.28**).
- [x] Re-checked FMP and confirmed historical performance remains unavailable because **`FMP_API_KEY` is missing**.
- [x] Multi-timeframe performance was refreshed using the **Yahoo Finance chart API fallback**.
- [x] Fresh Alpaca prices were refreshed for **AVGO / EIS / GLD / GOOG / HOOD / META / NVDA / QQQ / QTUM / RKLB / SHLD / SOXX / VOO / ARKX**.
- [x] Macro/news refresh still supports **controlled net long with high cash**, not aggressive deployment.
- [x] Best-add watchlist remains **GOOG first**, with **AVGO** secondary and **NVDA** tertiary.
- [x] **AVGO starter position executed** at **416.95** and the book is now closer to the upper end of the tactical exposure band.
- [x] `prompts/hourly.txt` was tightened to require **live Alpaca state** to override stale memory/todo before new decisions are made.

## 2026-05-04 15:40 ET Tactical Refresh Notes
- [x] Refreshed live Alpaca account and latest prices for **AVGO / EIS / GLD / GOOG / HOOD / META / NVDA / QQQ / QTUM / RKLB / SHLD / SOXX / VOO / ARKX**.
- [x] Current live snapshot shows **no new trigger**: **GOOG 379.89** remains below its entry zone, **AVGO 416.81** is still below the breakout trigger, and **NVDA 198.83** is still below its re-entry zone.
- [x] Held the existing book (**AVGO 1, SOXX 2, QTUM 2, QQQ 1, RKLB 1**) and placed **no orders** because the expected edge did not justify friction.
- [x] Continue to respect the one-add discipline and keep the focus on **GOOG -> AVGO -> NVDA** in that order.
