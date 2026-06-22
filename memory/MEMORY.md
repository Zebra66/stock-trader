# Hourly Macro Memory
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
| QQQ | 5 | $732.164 | $741.405 | $3,707.03 | 37.6% | +$46.21 | +1.26% |
| VOO | 2 | $678.7025 | $689.67 | $1,379.34 | 14.0% | +$21.94 | +1.62% |
| AVGO | 2 | $387.885 | $404.065 | $808.13 | 8.2% | +$32.36 | +4.17% |
| SOXX | 1 | $619.25 | $652.31 | $652.31 | 6.6% | +$33.06 | +5.34% |
| NVDA | 1 | $208.47 | $213.7664 | $213.77 | 2.2% | +$5.30 | +2.54% |
| GOOG | 2 | $369.28 | $353.84 | $707.68 | 7.2% | –$30.88 | –4.18% |
| Cash | — | — | — | $2,397.10 | 24.3% | — | — |
| **Equity** | — | — | — | **$9,865.36** | **100%** | — | **–1.35%** |

- **Gross long exposure:** 75.7%
- **Net exposure:** 75.7%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Jun 18 → Jun 22 (first run after holiday)
- **Portfolio change:** $9,877.89 (Jun 18 close) → $9,865.36 (Jun 22 ~9:35 AM) = –0.13%.
- **SPY change:** ~$746.66 (Jun 18 close) → $748.075 (Jun 22 ~9:35 AM) = +0.19%.
- **Relative:** Underperforming SPY by ~0.32 pp over the break.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–1.35%** vs SPY **+4.19%** (baseline 718.01 → 748.075). Trailing by ~5.54 pp.
- What is working: SOXX strongest (+5.34% unrealized, +2.01% today). QQQ core steady (+1.26%). VOO anchor stable (+1.62%). NVDA small but green (+2.54%).
- What is not working: GOOG underwater (–4.18% unrealized, –3.71% today). AVGO ex-dividend drop (–1.77% today) + Google-MediaTek TPU headline risk.
- What must change: Close the 5.54 pp gap to SPY. Current book is stable but needs winners to run and GOOG/AVGO to stabilize. Cash reserve available for opportunistic adds on confirmed setups. No forced deployment today.

## Goal Check
- **Portfolio since inception:** –1.35% ($9,865.36 vs $10,000 base)
- **S&P 500 since inception:** +4.19% (SPY 748.075 vs baseline 718.01)
- **Status:** **FAILING both goals.** Goal 1 (positive absolute): NOT MET. Goal 2 (beat SPY): NOT MET. Trailing by ~5.54 pp.
- **Dominant failure mode:** **excessive turnover / friction.** Early-June churn (SOXX in/out, NVDA in/out, QQQ in/out) generated realized losses and friction drag. Since stabilizing the book on June 16–17, the portfolio has recovered but still trails.
- **What must change:** Hold current positions, let winners run, and deploy cash only on high-conviction setups. Do not force trades to "catch up" — that creates more friction.

## Market Intel — Monday 9:35 AM ET
- **Broad market:** Mixed open. Dow futures slip. SPY +0.37% (Yahoo), QQQ +0.46%. US-Iran talks progressing = oil at six-week low = lower input costs = net positive for equities.
- **Semiconductor sector:** SOXX +2.17% today. BofA sees further 22% upside for a megacap chip stock. Chip sector remains strong. AVGO/SOXX/NVDA are the primary chip exposures in our book.
- **AVGO / Broadcom:** Down –1.77% to $404.065. Two factors: (1) ex-dividend today ($0.65/share) — natural price adjustment. (2) **Google-MediaTek TPU v9 partnership headline risk** — Ming-Chi Kuo reports MediaTek secured exclusive order for Google's TPU v9 (2028 production). This threatens AVGO's Google custom-chip business. J.P. Morgan defending AVGO against the rumors. The threat is 2028-dated, but headline risk is immediate. Hold 2 shares but tighten stop to protect profits.
- **Alphabet / GOOG:** Down –3.01% to $353.84 (Yahoo) / $353.84 (Alpaca). Negative headlines: "Google Faces AI Talent Exodus as Key Figures Depart for Competitors" and "Citizens reiterates Alphabet stock rating on executive departure risk." GOOG is the weakest position in our book (–4.18% unrealized). Support $350–$355 being tested. If it breaks $350, cut all shares.
- **NVIDIA / NVDA:** Up +1.35% today. Small position (2.2% weight). Holding steady.
- **QQQ:** Up +0.46% today. Core position. 37.6% weight, near 45% cap. No practical add capacity.
- **HOOD:** Up +1.34% today, +44.67% 1M. Extended. Avoid.
- **META:** Down –0.72% today. Banned. No re-entry.
- **RKLB:** Down –4.23% today. Nasdaq-100 inclusion was Jun 22 catalyst but price is weak. Avoid.
- **Fed / Macro:** No new Fed headlines today. US-Iran deal optimism continues. Oil easing. Risk-on tape intact but mixed open.
- **News access:** Yahoo Finance RSS via Google News working. FMP disabled. Yahoo Finance chart API v8 used as fallback.
- **Earnings dates:** AVGO passed Jun 3. GOOG est. Jul 23; META Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB Aug 6. No binary events in next 48 hours.

## Position Map
| Symbol | Bias | Rationale | Target % | Action |
|---|---|---|---|---|
| QQQ | **Hold** | Core liquid growth. +1.26% unrealized. Near 45% cap. No add capacity. | 35–40% | **HOLD** 5 shares. Stop $730.00. DO NOT ADD. |
| VOO | Hold | Broad-market anchor. +1.62% unrealized. Stable. | 14% | **HOLD** 2 shares. Stop $680.00. DO NOT ADD (near 20% cap). |
| SOXX | Hold / Watch for pullback add | Strongest performer. +5.34% unrealized. +2.01% today. BofA +22% upside. | 6–12% | **HOLD** 1 share. Stop $620.00. **Conditional add:** BUY 1 share if price pulls back to $640 or below with volume. |
| AVGO | Hold / Tightened stop | Profitable (+4.17%) but headline risk from Google-MediaTek TPU v9. Ex-dividend today. | 6–10% | **HOLD** 2 shares. **Tightened stop:** SELL all if price drops below $390.00. DO NOT ADD. |
| GOOG | Hold / Cut if breaks $350 | Underwater (–4.18%). AI talent exodus headlines. Support $350–$355. | 7–10% | **HOLD** 2 shares. Stop $350.00. SELL all if breached. DO NOT ADD. DO NOT AVERAGE DOWN. |
| NVDA | Hold | Small position. +2.54% unrealized. Chip rotation favors SOXX/AVGO. | 2–4% | **HOLD** 1 share. Stop $200.00. DO NOT ADD. |
| META | Avoid | bannedSymbols active. | 0% | Avoid |
| HOOD / RKLB / GLD / EIS / SHLD / QTUM / ARKX | Avoid | Extended, weak, or no edge. | 0% | Avoid |

## Priority Actions
1. **HOLD all current positions.** No new orders this cycle. Gross exposure 75.7% is within 60–90% band. Market is mixed; negative headlines for two holdings.
2. **AVGO defensive stop tightened:** SELL all 2 shares if price drops below $390.00 with limit $389.50. Rationale: protect profits on Google-MediaTek TPU v9 headline risk. Ex-dividend $0.65/share today creates natural price adjustment.
3. **GOOG defensive stop:** SELL all 2 shares if price drops below $350.00 with limit $349.50. Rationale: protect capital on breakdown below support. AI talent exodus adds near-term risk.
4. **SOXX conditional add:** BUY 1 share if price pulls back to $640.00 or below with limit $639.50. Rationale: strongest performer, chip thesis intact, BofA +22% upside. Limit order only due to thin liquidity.
5. **No cash deployment today.** $2,397 cash (~24.3%) reserved for confirmed setups. Chasing adds into mixed tape with headline risk is low-conviction.
6. **No same-day round trips.** All positions held overnight from June 16–17. Full daytrade flexibility (0/3).
7. **Tactical agent:** Monitor stops on :40 and :50 runs. Execute only if stop breached or SOXX pullback add triggers.

## Macro Themes
- **Actionable now:** SOXX chip strength is the standout. BofA +22% upside call validates thesis. We are positioned via SOXX + AVGO + NVDA.
- **Actionable now:** AVGO ex-dividend + Google-MediaTek headline risk demands tighter risk management. The TPU v9 threat is 2028-dated but creates near-term volatility. Watch for JPM defense to stabilize price.
- **Worth monitoring:** GOOG AI talent exodus. If it accelerates, the stock could break $350. Have stop ready.
- **Worth monitoring:** US-Iran deal = oil at six-week low. Net positive for equities. Dow slip is transitory; broad risk-on remains.
- **Interesting but not actionable yet:** QTUM +0.06% today, +51.63% 3M. Quantum momentum but no clear entry.
- **Interesting but not actionable yet:** RKLB Nasdaq-100 inclusion was Jun 22 but price is weak (–4.23%). No edge.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Google News RSS via Yahoo Finance working. Direct web search blocked.
- **Alpaca `get-latest-price` bars** timestamps at 13:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 26 trades, 1,855 vol at 13:34Z — acceptable for limit orders.
- **AVGO liquidity:** 110 trades, 5,242 vol — healthy.
- **Earnings dates:** No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.9K equity, QQQ capped at 6 shares; SOXX at 1-2 shares; VOO at 2 shares.
- **Repo hygiene:** RESTORED. `.gitignore` back, node_modules removed from index, `.claude/skills` restored.
- **Critical process learning:** Working-tree memory files can revert to stale content while git HEAD has current state. Always verify memory freshness against `git show HEAD:memory/MEMORY.md` and broker data before acting.
- **Event detector note:** `priorTimestamp` still null. Bug persists. Tactical agent or event detector may be racing on `memory/tactical_last_prices.json`. Investigation needed.
- **Juneteenth holiday:** Market closed Friday June 19. No trades since June 17.
