# Hourly Macro Memory
*Updated 2026-06-12 18:35Z (Friday 2:35 PM ET). Market OPEN until 20:00Z.*

## Hourly Cycle Summary — 2026-06-12 18:35Z (Friday 2:35 PM ET)
- **Status:** Market OPEN. ~1h 25m to close. Next hourly: Monday 13:35Z (9:35 AM ET).
- **Repo integrity:** Clean. No divergence. Staged ledger.md + tactical_last_prices.json are legitimate tactical updates.
- **Live broker refresh:** Equity $9,770.69 | Cash $8,406.91 | Long $1,363.78 | Gross 13.96% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 only. Current price $681.89. Unrealized +$6.375 (+0.47% from avg entry $678.7025).
- **Open orders:** QQQ limit buy 2@$689.50 (day, status new), SOXX limit buy 1@$522.50 (day, status new).
- **Filled trades since prior hourly (17:35Z):** NONE. No concealment risk.
- **Order-mismatch drift detected:** At 17:39:03Z, tactical agent placed QQQ limit buy 1@$600.00 (unauthorized — todo.md authorized 2@$689.50). Order canceled at 17:39:19Z with zero fills. No monetary impact. Tightened safeguards for next hour. Live broker reconciliation mandatory.
- **Tactical agent today:** Ran at 09:30, 09:40, 09:50, 10:11 (CRITICAL override), 10:20, 10:30, 10:40, 10:50, 11:12 (CRITICAL resolved), 12:10, 12:20, 12:30, 15:40, 15:50, 16:00, 16:10, 16:20, 16:30, 17:10, 17:20, 17:30, 17:40. No trades executed.
- **Tactical agent price hallucination bug:** Ledger entries from 17:10, 17:20, 17:30 still show truncated prices. Code-level fix in `ledger_cli.ts` rejects prices < 20% of reference.
- **Goal check:** Portfolio **–2.29%** since inception ($9,770.69 vs $10,000 base) vs SPY **+3.29%** (741.66 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~5.6 pp.
- **Regime:** **OFFENSIVE CATCH-UP.** Target gross exposure 60–90%. Current 13.96% — far below band. Macro backdrop improving (Iran de-escalation + cooler PPI + SpaceX IPO risk-on sentiment + AMD Citi upgrade), but we are missing the rebound. Discipline demands we do NOT chase.
- **Trading-best-practices check:** Consecutive realized losses exceed 3-loss threshold. Position sizing for new entries reduced 50% from baseline. QQQ 2-share risk = $49 (0.50% of equity); SOXX 1-share risk = $17.50 (0.18% of equity). Portfolio heat = $27.40 (0.28% of equity). Well below 6% daily limit.
- **Fresh macro intel:** Market rallying into close. SPY +0.56%, QQQ +0.41%, SOXX +1.95%. AMD upgraded by Citi (target $575, +6%). Intel up +8%. NVDA flat. Semi rotation within SOXX is strong. SpaceX IPO at $135 opened $150, now ~$175. Space stocks (RKLB) weak. Oil dropped to $88 on Iran peace deal hopes. No new negative catalysts.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $681.89 | $1,363.78 | 13.96% | +$6.375 | +0.47% |
| Cash | — | — | — | $8,406.91 | 86.04% | — | — |
| **Equity** | — | — | — | **$9,770.69** | **100%** | — | **–2.29%** |

- **Gross long exposure:** 13.96%
- **Net exposure:** 13.96%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** QQQ limit buy 2@$689.50 (day), SOXX limit buy 1@$522.50 (day)

## Performance Review — Fri Jun 12 (2:35 PM ET)
- **1D (today):** SPY **+0.56%** (est. 737.5 → 741.66). Portfolio **+0.07%** (VOO +0.54% * 13.96% weight). **Underperforming SPY by ~0.49 pp.** Cash drag severe.
- **1W (Jun 5 → Jun 12):** SPY **+0.56%** (est. 737.5 → 741.66). Portfolio **–0.19%** (est. $9,789 → $9,770.69). **Underperforming SPY by ~0.75 pp.** June 9 panic exits crystallized losses and removed upside capture.
- **2W (May 29 → Jun 12):** SPY **–1.95%** (VOO proxy). Portfolio **–4.19%** (est. $10,201.51 → $9,770.69). **Underperforming SPY by ~2.24 pp.** Cash preserved some capital during the early-June drawdown, but the realized losses from June 9 dominate.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.29%** vs SPY **+3.29%** (741.66 vs 718.01 baseline). **Trailing by ~5.6 pp.**
- What is working: Cash preserved capital during the risk-off drawdown. VOO anchor is stable.
- What is not working: **Bottom-tick panic exits on Jun 9** crystallized losses. QQQ sold at $690.79, SOXX at $523.12 and $552.30. Market has rallied sharply since; we are flat and missing the rebound. Cash drag is now the dominant headwind.
- What must change today/this week: **Do not chase the rally.** Rebuild only if the tape gives a discount below prior exits. With 3+ consecutive losses, maintain reduced size. The next 2.5 months require disciplined deployment, not panic chasing. However, with the target band now 60–90%, we must be ready to deploy quickly if triggers hit. If triggers are not hit by Monday, reassess whether to raise them slightly to avoid missing the entire rebound.

## Goal Check
- **Portfolio since inception:** –2.29% ($9,770.69 vs $10,000 base)
- **S&P 500 since inception:** +3.29% (SPY 741.66 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~5.6 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **late entries / poor execution.** The portfolio sold at the lows on Jun 9 and is now missing the rebound. The 2W data confirms the realized losses are the dominant driver, not just cash drag.

## Market Intel — Fri Jun 12 (2:35 PM ET)
- **Broad market:** SPY +0.56% (741.66), Nasdaq +0.41% (QQQ 722.24), semis +1.95% (SOXX 599.62). Market rallying into close. No major sector rotation.
- **Geopolitical:** Iran de-escalation continues. Oil dropped to $88 on peace deal hopes. Risk premium compressing. Material bullish macro shift if confirmed.
- **Semiconductor / AI:** AMD upgraded by Citi (+6%) on GPU/data center narrative. Intel up +8%. NVDA flat. Oracle AI spending fears (-12%) still weigh on AI capex sentiment. Mixed signals for NVDA specifically, but SOXX components are strong.
- **SpaceX IPO:** Opened at $150, now ~$175. Space stocks hammered (sell the news). RKLB down 6.59% but joining Nasdaq 100 on June 22. No edge for us.
- **NVDA:** $205.06. Flat 1W (–0.04%), –4.68% 1M. No re-entry authorized.
- **AVGO:** $380.42. Down –1.42% 1W, –8.18% 1M. Post-earnings correction deepening. No re-entry.
- **GOOG:** $359.23. Down –1.73% 1W, –5.26% 1M. No catalyst. No re-entry.
- **QQQ:** $722.24 (Alpaca). 24-hour cooldown **EXPIRED.** Rebuild ONLY if price drops to $690 or below. **Do not buy above $690.** Current price is ~$32.24 above trigger.
- **SOXX:** $599.62 (Alpaca). 24-hour cooldown **EXPIRED.** CRITICAL event from 14:10Z **RESOLVED.** Rebuild ONLY if price drops to $523 or below. **Do not buy above $523.** Current price is ~$76.62 above trigger.
- **HOOD:** $93.06. Up +12.84% 1W, +26.37% 1M. No clear catalyst. Avoid.
- **RKLB:** $103.91. Down –5.61% 1W, –23.46% 1M. No edge. Avoid.
- **META:** $566.24. Banned. Avoid.
- **News access:** Yahoo Finance RSS working. MarketWatch blocked. Actionable headlines: SpaceX IPO, AMD upgrade, Intel rally, Iran peace deal hopes.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours. (Fresh earnings data could not be retrieved from primary or fallback sources; relying on known dates from memory.)
- **Event detector:** NONE at 18:35Z. Broad market OK. Buy suspension LIFTED for SOXX.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. Only position left. 13.96%, below 20% non-QQQ ETF cap. Adding 1 share would breach cap (~21.0%). | 10–20% |
| QQQ | Buy on deep pullback | Core liquid growth. 24-hour cooldown expired. Rebuild exposure ONLY if price drops to $690 or below. Per loss-streak rule, size reduced to 2 shares. | 10–20% |
| SOXX | Buy on deep pullback | Chip exposure. 24-hour cooldown expired. CRITICAL event resolved. Rebuild exposure ONLY if price drops to $523 or below. Per loss-streak rule, size reduced to 1 share. | 5–10% |
| NVDA | Avoid | Individual semi risk. Oracle AI spending fears spillover risk. Flat 1W. | 0% |
| GOOG | Avoid | No catalyst. | 0% |
| AVGO | Avoid | Post-earnings correction. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | No edge. Risk-on tape. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **QQQ limit buy ACTIVE.** BUY **2 shares** if price drops to **$690.00 or below**. Limit order at **$689.50** (day order). Target $735.00 (1.8R). Stop at $665.00 (–3.6%). Risk = $49 (0.50% of equity). Well within 2% max.
3. **SOXX limit buy ACTIVE.** CRITICAL event resolved. BUY **1 share** if price drops to **$523.00 or below**. Limit order at **$522.50** (day order). Target $560.00 (2.1R). Stop at $505.00 (–3.4%). Risk = $17.50 (0.18% of equity). Well within 2% max.
4. **NO NEW ORDERS beyond the two authorized limit buys.** If any unauthorized order appears in the system, cancel it immediately and report to hourly.
5. **No market orders.** All new orders must be limit orders only.
6. **No discretionary buys above trigger prices.** Buying back above prior sell prices ($690.79 for QQQ, $523.12 for SOXX) is poor execution.
7. **Cash reserve:** ~$8,407 (~86.04%). Preserve for authorized limit orders.
8. **Gross exposure target:** 60–90% offensive catch-up band. Current 13.96%. Rebuilding to 60% requires ~$4,500 in new buys. Only execute if triggers hit.
9. **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
10. **If market closes higher and triggers remain unfilled, reassess on Monday (June 15).** Do not let triggers drift stale over the weekend without fresh price confirmation.
11. **Order-mismatch drift incident:** Tactical agent placed QQQ 1@$600 at 17:39Z. Canceled 16s later. No fill. Tightened safeguards.

## Macro Themes
- **Actionable now:** Iran de-escalation (oil down to $88) + cooler PPI + AMD Citi upgrade + Intel rally = bullish macro shift. Market rallied sharply yesterday. Risk-off tape is weakening. **BUT:** chasing a +1.7% SPY day into a +0.4% follow-through is poor execution. DO NOT chase. Wait for triggers.
- **Worth monitoring:** Chip gear divergence. AMD/Intel strong, NVDA/AVGO weak. Mixed signals for semi sector. SOXX is outperforming NVDA, validating the ETF approach.
- **Worth monitoring:** US-Iran talks. If de-escalation is confirmed, risk premium could compress further. If talks collapse, the market could reverse. The market is currently pricing in de-escalation.
- **Interesting but not actionable yet:** SpaceX IPO oversubscribed. Positive for space economy (RKLB) but not enough to counter the risk-off tape. No actionable symbol-specific entry.
- **Interesting but not actionable yet:** RKLB joining Nasdaq 100 on June 22. Potential short-term catalyst but stock is in a downtrend (–23.46% 1M). No edge.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. No-buy parser fixed for conditional lines.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance public data used as fallback for performance and prices. Documented.
- **News access:** Yahoo Finance RSS working. MarketWatch blocked. No actionable buy catalysts beyond Iran de-escalation and AMD upgrade.
- **Alpaca `get-latest-price` bars** timestamps at 18:34Z, current within 1 minute.
- **Day-trade status:** 0/3. No same-day round trips today.
- **SOXX liquidity:** 12 trades, 252 vol at 18:34Z — thin but improved. Limit orders only.
- **QQQ liquidity:** 27 trades, 833 vol at 18:34Z — acceptable. Limit orders still preferred.
- **VOO liquidity:** 1 trade, 40 vol at 18:34Z — very thin. Acceptable for small 2-share position.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours. (Fresh data retrieval failed; relying on memory.)
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.77K equity, QQQ capped at 6 shares; VOO at 2 shares (at cap); SOXX capped at 3 shares.
- **Repo hygiene:** Clean. No breaches this cycle.
- **Event detector:** Working correctly. Classification NONE at 18:35Z. Prior CRITICAL semi melt-up (14:10Z) fully resolved.
- **Tactical agent price hallucination bug:** Ledger entries from Jun 12 afternoon show QQQ prices/triggers with missing leading digits. Code-level validation now rejects such entries. Prompts updated.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
- **New learning:** Order-mismatch drift: tactical agent placed unauthorized QQQ 1@$600 at 17:39Z. Canceled 16s later. Live broker reconciliation mandatory on every hourly run.
