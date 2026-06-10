# Hourly Macro Memory

## Hourly Cycle Summary — 2026-06-10 18:51Z (Wednesday 2:51 PM ET)
- **Status:** Market OPEN. Critical repo integrity breach detected and resolved. Working tree memory files and source code were silently reverted to May 29 state. Restored from HEAD (commit 0780316). All trading guards verified intact.
- **Live broker refresh:** Equity $9,744.80 | Cash $8,406.91 | Long $1,337.92 | Gross 13.73% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 only. QQQ 0, SOXX 0, GOOG 0, NVDA 0, AVGO 0, META 0.
- **Open orders:** NONE.
- **Filled trades since prior hourly (18:35Z Jun 10):** NONE. Tactical agent held VOO at 18:50Z.
- **Goal check:** Portfolio **–2.55%** since inception ($9,744.80 vs $10,000 base) vs SPY **+1.32%** (727.64 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~3.87 pp.
- **Regime:** **DEFENSIVE.** Target gross exposure 30–50%. Current 13.73% — below band due to unresolved risk-off tape. Iran-US escalation, CPI >4%, and rising oil remain dominant macro drivers.
- **Repo note:** Working tree memory files (MEMORY.md, todo.md) and source code (alpaca_cli.ts, alpaca_client_factory.ts, event_detector.ts) were reverted to stale May 29 versions. This was a critical process breach. All files restored from HEAD. Trading guards (stale-memory, anti-churn, duplicate-order, concentration caps, universe gate, bannedSymbols) are verified active.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $668.96 | $1,337.92 | 13.73% | –$19.48 | –1.43% |
| Cash | — | — | — | $8,406.91 | 86.27% | — | — |
| **Equity** | — | — | — | **$9,744.80** | **100%** | — | **–2.55%** |

- **Gross long exposure:** 13.73%
- **Net exposure:** 13.73%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Wed Jun 10 (2:51 PM ET)
- **1D (today):** portfolio **~–0.17%** (VOO –1.27% * 13.73% weight) vs SPY **–1.28%**. **Outperforming SPY today by ~1.11 pp.** Cash drag is preserving capital on a risk-off day.
- **1W (Jun 3 → Jun 10):** portfolio **~–3.51%** ($10,099.88 → $9,744.80) vs SPY **~–3.38%** (751.41 → 727.64). **Underperforming SPY by ~0.13 pp over 1W.** The June 9 churn erased prior outperformance.
- **2W (May 27 → Jun 10):** SPY **–2.91%** (Yahoo 2W). Portfolio estimated **~–2.55%** (from ~$10,000 range two weeks ago). **Estimated outperformance ~0.36 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.55%** vs SPY **+1.32%**. Trailing by ~3.87 pp.
- What is working: Cash is preserving capital during the Iran-driven risk-off drift. VOO anchor is stable. Portfolio outperforming SPY today.
- What is not working: **Bottom-tick panic exits on Jun 9.** QQQ sold at $690.79, SOXX at $523.12 and $552.30. Market partially rebounded before reversing again. We are flat and missing the rebound.
- What must change today: **Do not chase the rebound.** If we buy back above our sell prices, we lock in poor execution. Wait for confirmed dips below prior exits. The 24-hour cooldowns are expired. Rebuild only if the tape gives us a discount.

## Goal Check
- **Portfolio since inception:** –2.55% ($9,744.80 vs $10,000 base)
- **S&P 500 since inception:** +1.32% (SPY 727.64 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~3.87 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **late entries / poor execution.** The portfolio sold at the lows on Jun 9 and is now missing the rebound. The 1W data shows we were outperforming until the Jun 9 churn erased the edge.

## Market Intel — Wed Jun 10 (2:51 PM ET)
- **Broad market:** S&P 500 down ~1.28% (SPY 727.64), Nasdaq down ~1.68% (QQQ 695.92), semis down ~3.26% (SOXX 543.82). Market opened lower, rallied on CPI/Fed hopes, reversed sharply around 11:00 AM ET on Iran headlines, then drifted lower through the afternoon.
- **CPI report:** May headline CPI hit 4.2%. Core CPI eased. Inflation + geopolitical risk = risk-off. Gold at 6-month low on inflation despite geopolitical risk.
- **Geopolitical:** US-Iran strikes ongoing. Oil rising (WTI up). Risk premium persists. No de-escalation headlines in the last hour.
- **Semiconductor sector:** QCOM down 6%, ARM down 5% in midday trading. Mobile-chip stocks sliding. SOXX down 3.26%. Chip equipment makers (LRCX, AMAT) diverging positively vs chip designers. This suggests AI capex is shifting toward infrastructure, not pure chip plays. SOXX may lag until this divergence resolves.
- **NVDA:** $201.22. Down 3.35% today. No new catalysts. Not enough to counter the risk-off tape. No re-entry.
- **AVGO:** $373.89. Down 4.66% today. Post-earnings correction deepening. Down 21.98% on week. No re-entry.
- **GOOG:** $354.20. Down 2.23% today. Down 7.72% on month. No clear catalyst. Avoid.
- **QQQ:** $695.92. Down 1.68% today. Sold 6 shares yesterday at $690.79. 24-hour cooldown **EXPIRED.** Rebuild ONLY if price drops to $690 or below. **Do not buy above $690.** Current price is $5.92 above trigger.
- **SOXX:** $543.82. Down 3.26% today. Sold 2 shares yesterday at $552.30 and 1 share at $523.12. 24-hour cooldown **EXPIRED.** Rebuild ONLY if price drops to $523 or below. **Do not buy above $523.** Current price is $20.82 above trigger.
- **HOOD:** $88.04. Up 5.10% today. No clear catalyst. Individual stock risk. Avoid.
- **RKLB:** $106.22. Down 1.86% today. No edge. Avoid.
- **News access:** Yahoo Finance RSS active. Iran/CPI headlines confirm risk-off. Qualcomm/ARM semi weakness confirmed. No actionable buy catalysts.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Event detector:** NONE (priorTimestamp present). Market orderly in 5-minute window.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. Only position left. 13.73%, at 20% non-QQQ ETF cap. Cannot add a full share (would breach cap). | 10–20% |
| QQQ | Buy on deep pullback | Core liquid growth. 24-hour cooldown expired. Rebuild exposure ONLY if price drops to $690 or below. | 10–25% |
| SOXX | Buy on deep pullback | Chip exposure. 24-hour cooldown expired. Rebuild exposure ONLY if price drops to $523 or below. | 5–10% |
| NVDA | Avoid | Individual semi risk. News not enough to counter risk-off. | 0% |
| GOOG | Avoid | Down 7.7% on month. No catalyst. | 0% |
| AVGO | Avoid | Post-earnings correction. Down 22% on week. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | No edge. Risk-off tape. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **QQQ limit buy authorized.** BUY **2 shares** if price drops to **$690.00 or below**. Place limit order at **$689.50**. Stop at $665.00 (–3.6%).
3. **SOXX limit buy authorized.** BUY **1 share** if price drops to **$523.00 or below**. Place limit order at **$522.50**. Stop at $505.00 (–3.4%).
4. **No market orders.** All new orders must be limit orders only.
5. **No discretionary buys above trigger prices.** Buying back above prior sell prices ($690.79 for QQQ, $523.12 for SOXX) is poor execution.
6. **Cash reserve:** ~$8,407 (~86.27%). Preserve for authorized limit orders.
7. **Gross exposure target:** 30–50% defensive band. Current 13.73%. Rebuilding requires ~$1,500+ in new buys. Only execute if triggers hit.
8. **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
9. **Repo vigilance:** The tactical agent and harness must verify git status on every run. The working tree can be silently corrupted. Always check `git diff` against HEAD for memory and code files.

## Macro Themes
- **Actionable now:** Iran-US escalation + CPI >4% causing risk-off. Oil rising. Equities selling off. DO NOT chase. Wait for triggers.
- **Worth monitoring:** Chip gear divergence. Equipment makers (LRCX, AMAT) at record highs while SOXX/NVDA/AVGO down. This could signal a sector rotation within semis. If equipment makers are where the AI capex is flowing, SOXX may lag until the rotation completes.
- **Worth monitoring:** US-Iran truce. If talks collapse, risk premium could spike further. If de-escalation occurs, the market could bounce sharply.
- **Interesting but not actionable yet:** OpenAI IPO expected within a year. SpaceX IPO headlines. No actionable symbol-specific news.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance public data used as fallback.
- **News access:** Yahoo Finance RSS is primary source. Sparse but actionable.
- **Alpaca `get-latest-price` bars** timestamps at 18:49Z, current within 15 minutes.
- **Day-trade status:** 0/3. No same-day round trips today.
- **SOXX liquidity:** 1 trade, 40 vol at 18:49Z — extremely thin. Limit orders only.
- **QQQ liquidity:** 43 trades, 1,265 vol at 18:49Z — liquid.
- **VOO liquidity:** 2 trades, 41 vol at 18:49Z — thin but acceptable for small 2-share position.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.74K equity, QQQ capped at 6 shares; VOO at 2 shares (at cap); SOXX capped at 3 shares.
- **Repo hygiene:** Critical breach resolved. Working tree restored from HEAD. All guards verified. `.gitignore` has a typo for `.sisyphus` (spelled `.sysyphus`). Should be fixed.
- **Event detector:** `priorTimestamp` present (18:30:02.434Z). Working correctly. Classification NONE.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
