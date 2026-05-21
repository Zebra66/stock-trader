# Hourly Macro Memory
*Updated 2026-05-21 17:35Z (Thursday 1:35 PM ET). Market OPEN until 16:00 ET.*

## Current Regime
- **Regime:** **offensive catch-up**
- **Why:** Portfolio still trailing SPY by ~3.0 pp since inception and negative absolute (-0.16%). Gross exposure at ~70.0%, in the 60–90% band. NVDA earnings delivered a beat-and-raise with a massive $80B buyback, but the stock reaction is muted (classic "priced in"). Added 1 NVDA share to increase beta and AI exposure while respecting small position size. Remaining cash at 30% provides dry powder for follow-through or dips.

## Repo Integrity
- **Status:** CRITICAL BREACH DETECTED AND RESTORED. Working tree showed memory/MEMORY.md, memory/todo.md, prompts/hourly.txt, and src/agent.ts reverted to an earlier (12:35 PM ET) state vs HEAD (3:41 PM ET). Staged changes would have rolled back the 3:41 PM updates and the agent.ts regex fix. Restored all four files from HEAD (`git checkout HEAD -- ...`). Working tree now clean. This is the second consecutive day of git index/workspace corruption. Root cause under investigation.

## Live Book
- **QQQ:** 6 shares @ avg $701.33 → mkt $4,260.06 (42.63% weight), unrealized +$52.08 (+1.24%)
- **GOOG:** 3 shares @ avg $392.92 → mkt $1,146.36 (11.48% weight), unrealized -$32.40 (-2.75%)
- **VOO:** 2 shares @ avg $673.925 → mkt $1,357.38 (13.60% weight), unrealized +$9.53 (+0.71%)
- **NVDA:** 1 share @ avg $223.68 → mkt $224.16 (2.25% weight), unrealized +$0.48 (+0.22%)
- **Cash:** $2,995.15 (30.0%)
- **Equity:** $9,983.96
- **Gross long exposure:** ~70.0%
- **Net exposure:** ~70.0%
- **Daytrade count:** 0 (fresh slate)
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thursday May 21 (First Hourly Run of Day)
- **1D (today):** portfolio **-0.21%** ($10,004.65 → $9,983.96) vs SPY **-0.33%** (~740.86 → 738.45). **Slight outperformance today.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **-0.16%** vs SPY **+2.85%** (baseline 718.01 → 738.45). Trailing by ~3.01 pp.
- **1W:** portfolio roughly -0.3% vs SPY ~-0.5%. Tight range; no decisive outperformance yet.
- What is working: QQQ holding relative strength, NVDA post-earnings fill at good price ($223.68), VOO stable.
- What is not working: GOOG still dragging (-2.75% unrealized, -0.7% intraday) despite $15B Missouri infrastructure headline. Cash at 30% is a mild drag if SPY grinds higher.
- What must change: Continue measured deployment into high-conviction names while avoiding churn. Do not let cash sit above 30% unless macro justifies defense.

## Goal Check
- **Portfolio since inception:** -0.16% ($9,983.96 vs $10,000 base)
- **S&P 500 since inception:** +2.85% (SPY 738.45 vs baseline 718.01)
- **Status:** **Off track — failing both goals** (negative absolute, trailing SPY).
- **Dominant failure mode:** **excessive turnover / unauthorized execution + realized losses from forced liquidation (May 19–20).** Cleanup is complete. Recovery now depends on disciplined adds and letting winners run.

## Market Intel — Thursday 1:35 PM ET
- **NVDA earnings (Wed after close):** FQ1 beat-and-raise. Announced **$80 billion buyback** — largest in company history. Received at least **18 analyst price-target hikes** after the report. Despite blockbuster results, stock is up only ~1.9% from prior close ($222.90 → $227), with intraday high $227.11 and current ~$224.16. Reaction is muted/"priced in," but buyback and guidance create a durable tailwind. Bitcoin miner stocks tied to AI rose on the report.
- **AMD:** Announced $10 billion Taiwan AI chip push — bullish for semi complex capacity expansion.
- **US-Iran talks uncertainty:** Pre-market concern pressuring futures. Headline risk if talks collapse.
- **Jobless claims surprise:** "Dow Falls After Surprise Jobless Claims Data." Stronger-than-expected labor market = hawkish Fed risk. Market absorbed it but remains cautious.
- **GOOG:** "Alphabet Invests $15 Billion in Missouri Infrastructure" — confirms capex/data-center buildout thesis. Stock down intraday (-0.7%) despite news; likely profit-taking within strong 1M/3M/6M uptrend.
- **SPY at 738.45** — off yesterday's highs (~740.86) but still near all-time highs. Small-caps quiet.
- **DRAM/AI memory shortage narrative** still intact post-NVDA earnings.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---:|
| QQQ | Hold | Core liquid growth. 42.6%, near 45% cap. Cannot add 1 share without breaching cap at current equity. | 36–45% |
| GOOG | Hold | Core thesis intact ($15B Missouri capex + Blackstone/UBS AI). 3 shares / 11.5%. Cannot add 1 share without breaching 15% cap (~15.2%). | 10–15% |
| VOO | Hold | Broad-market anchor. 13.6%. Cannot add 1 share without breaching 20% non-QQQ ETF cap (~20.4%). | 10–20% |
| NVDA | Hold / Add if dips | Post-earnings beat, $80B buyback, 18 PT hikes. Currently 1 share / 2.25%. Could add 1 more on meaningful dip to build 4–5% weight. | 2–5% |
| SOXX | Watch / Defer | Flat at $520 post-NVDA earnings. Needs daily close > $525 with follow-through to justify entry. | 0–5% |
| AVGO | Avoid | Liquidated Wed. 24h cooldown expired today. Weak 1W trend (-4.4%). No edge. | 0% |
| META | Avoid | Liquidated Wed. 24h cooldown expired today. Weak 1M/1Y trends. No edge. | 0% |
| RKLB | Avoid | Down 4.7% this week. Parabolic, extremely volatile. No edge. | 0% |
| HOOD / SHLD / ARKX / EIS / QTUM | Avoid | Weak trends or thin liquidity. | 0% |
| GLD | Avoid | Down 3.5% this week. Only if macro turns decisively risk-off. | 0–5% |

## Priority Actions
1. **HOLD current positions** through today's close. NVDA was just added; do not sell same day.
2. **Monitor NVDA** for follow-through or dip. If NVDA closes weak (< $222), reassess size. If it breaks $230 on volume, consider adding 1 more share on next session.
3. **Monitor SOXX** — needs close > $525 for entry signal.
4. **No same-day reversals** — daytrade count is 0; preserve the clean slate.
5. **Watch US-Iran headlines** — if geopolitical risk spikes, consider defensive posture for next session.

## Macro Themes
- **Actionable now:** NVDA post-earnings buyback tailwind. Small position; watch for follow-through.
- **Worth monitoring:** US-Iran talks — sudden escalation could derail risk-on tape.
- **Worth monitoring:** FOMC / jobless claims — stronger labor data increases hawkish Fed risk.
- **Worth monitoring:** GOOG capex / AI monetization — $15B Missouri infrastructure confirms multi-year buildout thesis.
- **Interesting but not actionable yet:** AI-driven power demand. No pure-play in universe.

## Universe Performance Snapshot (Yahoo Finance Fallback)
*Data as of ~1:35Z May 21.*

| Symbol | 1W | 1M | 3M | 6M | 1Y |
|---|---|---|---|---|---|
| AVGO | -4.39% | +4.55% | +25.90% | +23.60% | +83.03% |
| EIS | -1.99% | +3.81% | +7.86% | +30.55% | +60.49% |
| GLD | -3.48% | -4.01% | -10.28% | +10.17% | +34.83% |
| GOOG | -3.97% | +15.42% | +25.65% | +27.29% | +124.29% |
| HOOD | -6.07% | -12.30% | +0.20% | -29.35% | +18.70% |
| META | -2.89% | -10.21% | -6.86% | +1.06% | -5.50% |
| NVDA | -4.14% | +13.06% | +20.27% | +26.34% | +71.46% |
| QQQ | -1.46% | +10.08% | +17.54% | +20.21% | +38.26% |
| QTUM | -0.99% | +14.36% | +25.34% | +44.34% | +72.95% |
| RKLB | -4.66% | +45.86% | +65.02% | +213.57% | +402.07% |
| SHLD | -0.20% | -9.25% | -15.52% | +4.25% | +16.44% |
| SOXX | -2.00% | +23.46% | +45.97% | +91.78% | +150.11% |
| VOO | -1.34% | +4.83% | +7.78% | +11.98% | +26.65% |
| ARKX | -3.16% | +1.89% | +2.65% | +30.72% | +67.65% |

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active. HARD_LOCK + trading lock + universe gate enforced.
- **FMP** disabled. Yahoo Finance chart API v8 used as fallback for performance snapshots.
- **News search** via Yahoo Finance RSS working; Google News RSS blocked.
- **File reversion risk:** Memory files and src/agent.ts were reverted in working tree to an earlier state today. Restored from HEAD. Monitor every run.
- **Day-trade status:** 0/3. Fresh slate.

## Standing Learnings (Selected)
1. Size from **account equity**, not raw buying power.
2. **No leverage** unless explicitly justified.
3. Commission-free does **not** mean friction-free.
4. **Never average down** — unless rebuilding a target allocation after an unauthorized forced liquidation with thesis fully intact.
5. Require a second source if broker quotes are stale.
6. **Do not trade outside the approved universe.** Code-level guards active.
7. **Do not churn the same symbol in and out intraday without a fresh explicit trigger.**
8. If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.
9. **Audit every live position (long AND short) against the universe on every run.**
10. If daytrade_count is 3 or higher, **no same-day reversals at all.**
11. **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
12. **Tactical agent race condition risk:** Code-level guards are the ultimate defense; prompt instructions alone are insufficient.
13. **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
14. **Concentration caps must be code-enforced, not just prompt-enforced.**
15. **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately. Do not trade on a corrupted workspace.
16. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
17. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing (`HARD_LOCK ... LIFTED`) to avoid false positives that silently kill tactical execution.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate (lock + no events) or a code bug.**
20. **Geopolitical semi risk is real:** U.S.-China summit failures + Samsung strike + US-Iran talks all create headline volatility.
21. **With ~$10K equity, concentration caps are extremely tight:** QQQ at ~$710 allows max 6 shares; GOOG at ~$382 allows max 3 shares; VOO at ~$679 allows max 2 shares. Deployment into new names requires either equity growth or selling existing positions.
22. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation. Watch follow-through.
23. **NVDA "priced in" earnings:** Even blockbuster beats with $80B buybacks can produce flat stock reactions if expectations are extreme. Entry timing matters; buying the gap down or flat open can be better than chasing pre-earnings.
24. **File reversion / workspace corruption is a recurring process risk:** Working tree files were reverted to an older state between sessions. Always verify file freshness against broker data before acting.

## Hourly Cycle Summary — 2026-05-21 17:35Z (Thursday 1:35 PM ET)
- **Live broker refresh:** Equity $9,983.96 | Cash $2,995.15 | Long $6,988.81 | Gross ~70.0% | Daytrade 0/3.
- **Repo integrity breach detected:** memory/MEMORY.md, memory/todo.md, prompts/hourly.txt, and src/agent.ts reverted in working tree to earlier (12:35 PM ET) state. Restored from HEAD.
- **Order executed:** BUY NVDA 1 share limit $227.50 → filled at $223.68.
- **Post-trade book:** QQQ 6, GOOG 3, VOO 2, NVDA 1. Cash 30.0%.
- **Market intel:** NVDA beat-and-raise + $80B buyback; stock up only ~1.9% (priced in). AMD $10B Taiwan push. GOOG $15B Missouri capex. US-Iran uncertainty. Jobless claims surprise.
- **Goal check:** Off track (-0.16% vs SPY +2.85%). Today slightly outperformed (-0.21% vs SPY -0.33%).
- **Regime:** Offensive catch-up. Target gross exposure 60–90% (currently 70.0%).
- **Code changes:** None this cycle. Restored reverted files from HEAD.
- **Next expected action:** 2:35 PM ET hourly — reassess NVDA follow-through. No immediate additional buys planned unless compelling dip emerges.
