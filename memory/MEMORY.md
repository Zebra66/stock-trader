# Hourly Macro Memory
*Updated 2026-06-22 14:35Z (Monday 10:35 AM ET). Market OPEN until 16:00 ET.*

## Tactical Execution — 2026-06-22 14:20Z
- **Action:** SOLD 2 GOOG at $349.26 (market) on stop-loss breach.
- **Trigger:** GOOG stop $350.00 breached. Live quote $349.25 (Alpaca positions) / $349.30 (latest bar). Todo explicitly authorized: "If GOOG falls below $350.00, SELL all GOOG shares at market."
- **Realized P&L:** ~–$40.02 from avg entry $369.28.
- **Post-trade book:** QQQ 5 ($3,694.00), VOO 2 ($1,374.32), AVGO 2 ($793.56), SOXX 1 ($651.00), NVDA 1 ($210.12). Cash $3,095.62.
- **Post-trade exposure:** Gross ~68.5% ($6,723.02 / $9,818.64 equity). Cash ~31.5%.
- **Daytrade count:** 0/3 (GOOG held since Jun 16, not a daytrade).
- **Next:** Monitor AVGO ($396.78, stop $390.00), QQQ ($738.80, stop $730.00), VOO ($687.16, stop $680.00), SOXX ($651.00, stop $620.00), NVDA ($210.12, stop $200.00). No re-buy GOOG for 24h.

---

## Hourly Macro Memory
*Updated 2026-06-22 13:35Z (Monday 9:35 AM ET). Market OPEN until 16:00 ET. Juneteenth holiday Friday June 19 — last trade was June 18.*

## Tactical Execution — 2026-06-22 13:40Z [AUTONOMOUS_OVERRIDE]
- **Event detector classification:** CRITICAL (SOXX +1.80% CRITICAL, GOOG –2.94% MAJOR, XLK +1.20% MAJOR, SMH +1.27% MAJOR).
- **Action:** NO TRADES. All 6 positions held. No stops breached.
- **Rationale:** GOOG at $355.47 is above $350.00 stop. AVGO at $403.09 is above $390.00 stop. SOXX at $653.34 is above $620.00 stop. QQQ at $744.27 is above $730.00 stop. VOO at $691.07 is above $680.00 stop. NVDA at $213.49 is above $200.00 stop. Todo explicitly states: "If event detector flags MAJOR or CRITICAL event on any held position, do NOT sell immediately. Hold and wait for next hourly authorization." Fresh hourly todo (13:35Z) anticipated this exact scenario.
- **Next:** Tactical run at 13:50Z. Monitor GOOG closely — if it breaches $350.00, sell immediately.

## Hourly Cycle Summary — 2026-06-22 13:35Z (Monday 9:35 AM ET)
- **Status:** Market OPEN. First hourly run of the week. Juneteenth holiday Friday June 19 closed the market; last trading day was Thursday June 18.
- **Repo integrity:** CRITICAL BREACH DETECTED AND RESOLVED. `.gitignore` was missing; `node_modules/` files were staged. Restored `.gitignore` from HEAD, removed node_modules from index, restored `.claude/skills/...` deleted file. Working tree now clean. No commit needed (restoration aligned with HEAD).
- **Memory file corruption:** Working-tree `memory/MEMORY.md` and `memory/todo.md` were reverted to May 29 content. Restored from HEAD (June 18). Pre-fetched context was stale; live reconciliation mandatory.
- **Live broker refresh (authoritative):** Equity $9,865.36 | Cash $2,397.10 | Long $7,468.26 | Gross 75.7% | Daytrade 0/3.
- **Holdings confirmed:** QQQ 5 ($3,707.03, +1.26% unrealized), VOO 2 ($1,379.34, +1.62%), AVGO 2 ($808.13, +4.17%), SOXX 1 ($652.31, +5.34%), NVDA 1 ($213.77, +2.54%), GOOG 2 ($707.68, –4.18%).
- **Open orders:** NONE.
- **Filled trades since June 18:** NONE. Portfolio unchanged over Juneteenth weekend.
- **Goal check:** Portfolio –1.35% since inception vs SPY +4.19% (748.075 vs 718.01 baseline). **FAILING both goals.** Trailing SPY by ~5.54 pp.
- **Regime:** Offensive catch-up. Target gross exposure 60–90%. Current 75.7% — inside band. Cash 24.3% — reserve for opportunistic adds.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 5 | $732.164 | $738.80 | $3,694.00 | 37.6% | +$33.18 | +0.91% |
| VOO | 2 | $678.7025 | $687.16 | $1,374.32 | 14.0% | +$16.92 | +1.25% |
| AVGO | 2 | $387.885 | $396.78 | $793.56 | 8.1% | +$17.79 | +2.29% |
| SOXX | 1 | $619.25 | $651.00 | $651.00 | 6.6% | +$31.75 | +5.13% |
| NVDA | 1 | $208.47 | $210.12 | $210.12 | 2.1% | +$1.65 | +0.79% |
| Cash | — | — | — | $3,095.62 | 31.5% | — | — |
| **Equity** | — | — | — | **$9,818.64** | **100%** | — | **–1.81%** |

- **Gross long exposure:** 68.5%
- **Net exposure:** 68.5%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Jun 18 → Jun 22 (first run after holiday)
- **Portfolio change:** $9,877.89 (Jun 18 close) → $9,818.64 (Jun 22 ~10:35 AM) = –0.60%.
- **SPY change:** ~$746.66 (Jun 18 close) → $745.43 (Jun 22 ~10:35 AM) = –0.16%.
- **Relative:** Underperforming SPY by ~0.44 pp over the break.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–1.81%** vs SPY **+3.82%** (baseline 718.01 → 745.43). Trailing by ~5.63 pp.
- What is working: SOXX strongest (+5.13% unrealized, +1.83% today). VOO anchor stable (+1.25%). QQQ core steady (+0.91%).
- What is not working: GOOG sold at loss (–$40.02 realized). AVGO ex-dividend drop (–3.54% today) + Google-MediaTek TPU headline risk. NVDA small and underperforming (+0.79% unrealized, –0.27% today).
- What must change: Close the 5.63 pp gap to SPY. Current book is solid after the GOOG exit. Let winners run (SOXX). Keep cash reserve for post-Micron earnings deployment on Wednesday.

## Goal Check
- **Portfolio since inception:** –1.81% ($9,818.64 vs $10,000 base)
- **S&P 500 since inception:** +3.82% (SPY 745.43 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~5.63 pp.
- **Dominant failure mode:** **excessive turnover / friction.** Early-June churn (SOXX in/out, NVDA in/out, QQQ in/out) generated realized losses and friction drag. Since stabilizing the book on June 16–17, the portfolio has recovered but still trails. The GOOG stop-out today was a correct defensive action but adds to the realized-loss ledger.
- **What must change:** Hold current positions, let winners run, and deploy cash only on high-conviction setups. Do not force trades to "catch up" — that creates more friction. The Micron earnings on Wednesday may provide a sector catalyst for our chip exposures.

## Market Intel — Monday 10:35 AM ET
- **Broad market:** Mixed. SPY –0.16%, QQQ –0.25% intraday. Dow slightly positive. US-Iran talks progressing = oil at six-week low = lower input costs = net positive for equities.
- **Semiconductor sector:** SOXX +1.83% today despite QQQ weakness. Strong relative strength. BofA sees further 22% upside for megacap chip. Micron earnings Wednesday June 24 is the major sector catalyst — HBM sold out, 81% gross margins expected. A beat could rally SOXX/AVGO/NVDA; a miss could trigger a selloff.
- **AVGO / Broadcom:** Down –3.54% to $396.78. Two factors: (1) ex-dividend today ($0.65/share) — natural price adjustment. (2) **Google-MediaTek TPU v9 partnership headline risk** — Ming-Chi Kuo reports MediaTek secured exclusive order for Google's TPU v9 (2028 production). This threatens AVGO's Google custom-chip business. J.P. Morgan defending AVGO against the rumors. The threat is 2028-dated, but headline risk is immediate. Hold 2 shares with stop at $390.00 to protect profits.
- **Alphabet / GOOG:** Down –5.34% today to $347.39 (Yahoo). Sold at $349.26 on stop breach. Negative headlines: AI talent exodus, Google developing next-gen AI chip with MediaTek (potential threat to Broadcom), and legal/regulatory risks mounting. Support $350–$355 broken. Correct exit.
- **NVIDIA / NVDA:** Down –0.27% today. Small position (2.1% weight). Holding steady. Chip rotation still favors SOXX/AVGO over NVDA.
- **QQQ:** Down –0.25% today. Core position. 37.6% weight, near 45% cap. No practical add capacity.
- **HOOD:** Up +0.37% today, +43.28% 1M. Extended. Avoid.
- **META:** Down –1.77% today. Banned. No re-entry.
- **RKLB:** Down –8.75% today. Nasdaq-100 inclusion was Jun 22 catalyst but price tumbled. Avoid.
- **QTUM:** Down –0.05% today, +51.47% 3M. Quantum momentum but extremely thin (TradeCount 1, Volume 200). Avoid.
- **Fed / Macro:** No new Fed headlines today. US-Iran deal optimism continues. Oil easing. Risk-on tape intact but mixed.
- **News access:** Yahoo Finance RSS + Google News RSS working. FMP disabled. Yahoo Finance chart API v8 used as fallback.
- **Earnings dates:** AVGO passed Jun 3. GOOG est. Jul 23; META Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB Aug 6. Micron (MU) Jun 24 (sector catalyst, not our holding). No binary events for our holdings in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % | Action |
|---|---|---|---|---|
| QQQ | **Hold** | Core liquid growth. +0.91% unrealized. Near 45% cap. No add capacity. | 35–40% | **HOLD** 5 shares. Stop $730.00. DO NOT ADD. |
| VOO | Hold | Broad-market anchor. +1.25% unrealized. Stable. | 14% | **HOLD** 2 shares. Stop $680.00. DO NOT ADD (near 20% cap). |
| SOXX | Hold / Watch for pullback add | Strongest performer. +5.13% unrealized. +1.83% today. Chip thesis intact. | 6–12% | **HOLD** 1 share. Stop $620.00. **Conditional add:** BUY 1 share if price pulls back to $640 or below with limit $639.50. |
| AVGO | Hold / Tightened stop | Profitable (+2.29%) but headline risk from Google-MediaTek TPU v9. Ex-dividend today. | 6–10% | **HOLD** 2 shares. **Stop:** SELL all if price drops below $390.00. DO NOT ADD. |
| NVDA | Hold | Small position. +0.79% unrealized. Chip rotation favors SOXX/AVGO. | 2–4% | **HOLD** 1 share. Stop $200.00. DO NOT ADD. |
| GOOG | Avoid / Sold | Exited on stop breach. | 0% | **DO NOT RE-BUY** for 24h. |
| META | Avoid | bannedSymbols active. | 0% | Avoid |
| HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX | Avoid | Extended, weak, or no edge. | 0% | Avoid |

## Priority Actions
1. **HOLD all current positions.** No new orders this cycle. Gross exposure 68.5% is within 60–90% band.
2. **AVGO stop at $390.00:** SELL all 2 shares if price drops below $390.00 with market order. Rationale: protect profits on Google-MediaTek TPU v9 headline risk. Ex-dividend $0.65/share today creates natural price adjustment.
3. **SOXX conditional add:** BUY 1 share if price pulls back to $640.00 or below with limit $639.50. Rationale: strongest performer, chip thesis intact, add on dip not chase. Limit order only due to thin liquidity.
4. **No cash deployment today.** $3,095.62 cash (~31.5%) reserved. Micron earnings Wednesday June 24 creates binary semiconductor risk. Better to wait for post-earnings reaction before deploying fresh capital.
5. **GOOG on 24-hour cooldown.** No re-buy until 2026-06-23 14:20Z.
6. **No same-day round trips.** All positions held overnight from June 16–17. Full daytrade flexibility (0/3).
7. **Tactical agent:** Monitor stops on :40 and :50 runs. Execute only if stop breached or SOXX pullback add triggers.

## Macro Themes
- **Actionable now:** Micron earnings Wednesday is the primary near-term catalyst. HBM sold out, 81% gross margins expected. A beat could send SOXX/AVGO/NVDA higher; a miss could trigger sector selloff. We are positioned via SOXX + AVGO + NVDA.
- **Actionable now:** SOXX chip strength is the standout. +1.83% today vs QQQ –0.25%. BofA +22% upside call validates thesis.
- **Worth monitoring:** AVGO ex-dividend + Google-MediaTek headline risk. JPM defense may stabilize the stock above $390. Watch closely.
- **Worth monitoring:** GOOG support breakdown below $350. If it reclaims, may present a future entry; otherwise, avoid.
- **Worth monitoring:** US-Iran deal = oil at six-week low. Net positive for equities.
- **Interesting but not actionable yet:** QTUM quantum momentum but too thin to trade. HOOD extremely extended. No chase.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS + Google News RSS working. Limited but actionable.
- **Alpaca `get-latest-price` bars** timestamps at 14:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 15 trades, 658 vol at 14:34Z — acceptable for limit orders.
- **AVGO liquidity:** 49 trades, 1,993 vol — healthy.
- **Earnings dates:** No binary events for our holdings in next 48 hours. Micron (MU) Jun 24.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.8K equity, QQQ capped at 6 shares; SOXX at 1-2 shares; VOO at 2 shares.
- **Repo hygiene:** Clean. No divergence. Staged ledger/tactical_last_prices from tactical agent are normal.
- **Event detector note:** `priorTimestamp` now working (14:30:04Z). Bug appears resolved.
- **Critical process learning:** Working-tree memory files can revert to stale content while git HEAD has current state. Always verify memory freshness against `git show HEAD:memory/MEMORY.md` and broker data before acting.
- **Juneteenth holiday:** Market closed Friday June 19. No trades since June 17 until today.

