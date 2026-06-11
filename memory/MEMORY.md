# Hourly Macro Memory

## Tactical Cycle Summary — 2026-06-11 14:35Z (Thursday 10:35 AM ET)
- **Event detector:** NONE (resolved from MAJOR at 14:10Z/14:20Z). Market drifting slightly lower after gap-up open.
- **Action:** No trades executed. VOO 2 held. QQQ and SOXX buy triggers remain active and well below market.
- **Guardrails respected:** No gross exposure increase. No new positions. No concentration cap breach. No PDT risk.
- **Holdings confirmed:** VOO 2 only. Current price $669.775 (Alpaca). Unrealized –$17.86 (–1.32%).
- **Live broker refresh:** Equity $9,746.13 | Cash $8,406.91 | Long $1,339.22 | Gross 13.73% | Daytrade 0/3.
- **No open orders.**

---

## Tactical Cycle Summary — 2026-06-11 14:20Z (Thursday 10:20 AM ET)
- **[AUTONOMOUS_OVERRIDE] Event detector MAJOR.** SOXX –1.32% in 10 min ($568.99 → $561.46). QQQ –0.72% ($704.50 → $699.43). Broad semi/tech sector reversal accelerating.
- **Action:** No trades executed. QQQ and SOXX buy conditions already suspended from prior 14:10Z MAJOR override. No new suspensions needed.
- **Guardrails respected:** No gross exposure increase. No new positions. No concentration cap breach. No PDT risk.

---

## Tactical Cycle Summary — 2026-06-11 14:10Z (Thursday 10:10 AM ET)
- **[AUTONOMOUS_OVERRIDE] Event detector MAJOR.** SOXX +1.04% in 20 min ($563.11 → $568.99). QQQ +0.46% ($701.24 → $704.50). Broad market gap-up continuation.
- **Action:** Suspended QQQ and SOXX buy conditions in todo.md. No trades executed.

---

## Hourly Cycle Summary — 2026-06-11 13:35Z (Thursday 9:35 AM ET)
- **Status:** Market OPEN. Event detector: NONE (CRITICAL at 13:30Z open gap-up now resolved). Fresh PPI data hot.
- **Live broker refresh:** Equity $9,743.87 | Cash $8,406.91 | Long $1,336.96 | Gross 13.72% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 only. Current price $668.48.
- **Open orders:** NONE.
- **Filled trades since prior hourly (19:35Z Jun 10):** NONE. Tactical agent held VOO at 13:30Z and noted CRITICAL override.
- **Goal check:** Portfolio **–2.56%** since inception ($9,743.87 vs $10,000 base) vs SPY **+1.27%** (727.10 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~3.83 pp.
- **Regime:** **DEFENSIVE.** Target gross exposure 30–50%. Current 13.72% — below band due to unresolved risk-off tape (CPI 4.2%, PPI surging, Iran-US strikes, AI concentration unwind).
- **Tactical override review:** CRITICAL event at 13:30Z (semi melt-up at open) correctly caused buy-trigger suspension. Hourly strategist now lifts suspension; triggers re-authorized at same levels. No trades executed during override.
- **Trading-best-practices check:** Consecutive realized losses exceed 3-loss threshold. Position sizing for new entries reduced 50% from baseline. QQQ 2-share risk = $50 (0.51% of equity); SOXX 1-share risk = $18 (0.18% of equity). Portfolio heat = $20.45 (0.21% of equity), well below 6% daily limit.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $669.775 | $1,339.55 | 13.73% | –$17.86 | –1.32% |
| Cash | — | — | — | $8,406.91 | 86.27% | — | — |
| **Equity** | — | — | — | **$9,746.13** | **100%** | — | **–2.54%** |

- **Gross long exposure:** 13.73%
- **Net exposure:** 13.73%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Thu Jun 11 (10:35 AM ET)
- **1D (today):** portfolio **~+0.06%** (VOO +0.41% * 13.73% weight) vs SPY **+0.54%** (725.43 → 729.36). **Underperforming SPY today by ~0.48 pp.** Cash drag limiting upside on gap-up day.
- **1W (Jun 4 → Jun 11):** portfolio **~–3.50%** ($10,099.88 → $9,746.13) vs SPY **~–3.66%** (757.09 → 729.36). **Outperforming SPY by ~0.16 pp over 1W.** Cash drag + no Jun 9 churn = preserving capital.
- **2W (May 28 → Jun 11):** SPY **~–3.34%** (754.60 → 729.36). Portfolio **~–2.54%**. **Outperforming SPY by ~0.80 pp.**
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.54%** vs SPY **+1.58%** (729.36 vs 718.01 baseline). **Trailing by ~4.12 pp.**
- What is working: Cash preserving capital during risk-off tape. VOO anchor stable. 1W/2W relative outperformance positive.
- What is not working: **Bottom-tick panic exits on Jun 9.** QQQ sold at $690.79, SOXX at $523.12 and $552.30. Market gapped up today; we are flat and missing the rebound. Absolute gap to SPY is widening because SPY is positive since inception.
- What must change today/this week: **Do not chase the gap-up.** Rebuild only if the tape gives us a discount below prior exits. Hot PPI today confirms risk-off macro is intact. With 3+ consecutive losses, maintain reduced size. The next 2.5 months require disciplined deployment, not aggressive catch-up into a macro headwind.

## Goal Check
- **Portfolio since inception:** –2.54% ($9,746.13 vs $10,000 base)
- **S&P 500 since inception:** +1.58% (SPY 729.36 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~4.12 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **late entries / poor execution.** The portfolio sold at the lows on Jun 9 and is now missing the rebound. The 1W/2W data shows we are outperforming on a relative basis due to cash preservation, but the absolute gap is widening.

## Market Intel — Thu Jun 11 (10:35 AM ET)
- **Broad market:** S&P 500 up ~0.54% (SPY 729.36), Nasdaq up ~0.63% (QQQ 701.30), semis up ~4.81% (SOXX 567.56). Market gapped up at open on Iran "completion of strikes" narrative, but PPI hotness may weigh later. SPY pulled back slightly from open gap.
- **PPI report:** May wholesale inflation surged — biggest back-to-back increase since 2022 (MarketWatch confirmed at 13:27Z). Hot CPI + hot PPI = double inflation scare. Fed hawkish pressure increasing. Risk-off macro intact despite equity gap-up.
- **Geopolitical:** US completed fresh round of Iran strikes (Yahoo Finance pre-market headline). Risk premium may be partially priced out, but no de-escalation confirmed. Oil elevated. Tension persists.
- **Semiconductor sector:** SOXX up 4.81% today, but –5.83% on week. Barrons headline: "The AI Rally Keeps Unwinding." Nomura strategist (Charlie McElligott) says Big Tech concentration is preventing new highs. Intel jumps 8%, AMD rises 4% on BofA $170B server-CPU call — rotation within semis, not broad rally.
- **NVDA:** $202.25. Up 1.13% today, –7.30% on week. No re-entry authorized.
- **AVGO:** $376.82. Up 1.60% today, –9.75% on week, –9.84% on month. Post-earnings correction. Broadcom launching $2.5B debt tender — financial engineering, not operational catalyst. No re-entry.
- **GOOG:** $344.19. Down 2.09% today, –6.32% on week. Google in talks with Samsung for next-gen chip (Reuters). Not enough to counter risk-off. No re-entry.
- **QQQ:** $701.30 (Alpaca) / $702.78 (Yahoo). Up ~1.31% today. 24-hour cooldown **EXPIRED.** Rebuild ONLY if price drops to $690 or below. **Do not buy above $690.** Current price is ~$11 above trigger.
- **SOXX:** $564.92 (Alpaca) / $567.56 (Yahoo). Up ~4.81% today. 24-hour cooldown **EXPIRED.** Rebuild ONLY if price drops to $523 or below. **Do not buy above $523.** Current price is ~$41 above trigger.
- **HOOD:** $87.48. Up 1.93% today. No clear catalyst. Avoid.
- **RKLB:** $109.70. Up 4.63% today. No edge. Avoid.
- **META:** $560.46. Down 1.40% today. Banned. Avoid.
- **News access:** Yahoo Finance RSS active. MarketWatch active. Barrons and Nomura headlines actionable. No actionable buy catalysts.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Event detector:** NONE (as of 14:35Z). Prior MAJOR at 14:10Z/14:20Z resolved.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. Only position left. 13.73%, at 20% non-QQQ ETF cap. Cannot add a full share (would breach cap). | 10–20% |
| QQQ | Buy on deep pullback | Core liquid growth. 24-hour cooldown expired. Rebuild exposure ONLY if price drops to $690 or below. Per loss-streak rule, size reduced to 2 shares (baseline was 3–4). | 10–20% |
| SOXX | Buy on deep pullback | Chip exposure. 24-hour cooldown expired. Rebuild exposure ONLY if price drops to $523 or below. Per loss-streak rule, size reduced to 1 share (baseline was 2). | 5–10% |
| NVDA | Avoid | Individual semi risk. News not enough to counter risk-off. | 0% |
| GOOG | Avoid | Down 9.87% on month. No catalyst. | 0% |
| AVGO | Avoid | Post-earnings correction. Down 9.75% on week. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | No edge. Risk-off tape. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **QQQ limit buy RE-AUTHORIZED.** BUY **2 shares** if price drops to **$690.00 or below**. Place limit order at **$689.50**. Target $735.00 (1.8R). Stop at $665.00 (–3.6%). Risk = $49 (0.50% of equity). Well within 2% max.
3. **SOXX limit buy RE-AUTHORIZED.** BUY **1 share** if price drops to **$523.00 or below**. Place limit order at **$522.50**. Target $560.00 (2.1R). Stop at $505.00 (–3.4%). Risk = $17.50 (0.18% of equity). Well within 2% max.
4. **No market orders.** All new orders must be limit orders only.
5. **No discretionary buys above trigger prices.** Buying back above prior sell prices ($690.79 for QQQ, $523.12 for SOXX) is poor execution.
6. **Cash reserve:** ~$8,407 (~86.27%). Preserve for authorized limit orders.
7. **Gross exposure target:** 30–50% defensive band. Current 13.73%. Rebuilding requires ~$1,500+ in new buys. Only execute if triggers hit.
8. **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
9. **Repo vigilance:** The tactical agent and harness must verify git status on every run. The working tree can be silently corrupted. Always check `git diff` against HEAD for memory and code files.

## Macro Themes
- **Actionable now:** Iran-US escalation + CPI 4.2% + PPI surging (back-to-back biggest increase since 2022) = risk-off macro intact. Equities gapped up on Iran "completion" narrative but PPI hotness may reverse the gap. DO NOT chase. Wait for triggers. Gold still NOT acting as safe haven (GLD –0.15% today, –9.06% on week) — inflation fears overriding geopolitical hedges.
- **Worth monitoring:** Chip gear divergence + AI rally unwinding (Barrons). Equipment makers (INTC, AMD) rallying on BofA server-CPU call while SOXX/NVDA/AVGO down on week. Nomura strategist says Big Tech concentration is preventing new highs. SOXX may lag until the rotation completes.
- **Worth monitoring:** US-Iran truce. If talks collapse, risk premium could spike further. If de-escalation occurs, the market could bounce sharply. No de-escalation headlines yet.
- **Interesting but not actionable yet:** NVDA-backed robotics (NEURA $1.4B round). Positive for AI/robotics theme but not enough to counter the risk-off tape. No actionable symbol-specific entry.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance public data used as fallback. Documented.
- **News access:** Yahoo Finance RSS and MarketWatch RSS active. Barrons and Nomura headlines actionable. No actionable buy catalysts.
- **Alpaca `get-latest-price` bars** timestamps at 14:34Z, current within 1 minute.
- **Day-trade status:** 0/3. No same-day round trips today.
- **SOXX liquidity:** 10 trades, 601 vol at 14:34Z — THINNER than 13:34Z (32 trades). Limit orders only. Do not place market orders.
- **QQQ liquidity:** 36 trades, 2,752 vol at 14:34Z — liquid.
- **VOO liquidity:** 7 trades, 194 vol at 14:33Z — thin but acceptable for small 2-share position.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.75K equity, QQQ capped at 6 shares; VOO at 2 shares (at cap); SOXX capped at 3 shares.
- **Repo hygiene:** Clean. No source changes. Working tree matches HEAD. Staged changes in memory/ledger.md and tactical_last_prices.json are from prior tactical agent runs.
- **Event detector:** Working correctly. Classification NONE as of 14:35Z. Prior MAJOR at 14:10Z/14:20Z resolved.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
