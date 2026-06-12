# Hourly Macro Memory
*Updated 2026-06-12 16:35Z (Friday 12:35 PM ET). Market OPEN until 20:00Z.*

## Hourly Cycle Summary — 2026-06-12 16:35Z (Friday 12:35 PM ET)
- **Status:** Market OPEN. ~3h 25m to close. Next hourly: 17:35Z (1:35 PM ET).
- **Repo integrity:** Clean. No divergence. Staged ledger.md + tactical_last_prices.json are legitimate tactical updates.
- **Live broker refresh:** Equity $9,769.62 | Cash $8,406.91 | Long $1,362.71 | Gross 13.95% | Daytrade 0/3.
- **Holdings confirmed:** VOO 2 only. Current price $681.355. Unrealized +$5.305 (+0.391% from avg entry $678.7025).
- **Open orders:** NONE.
- **Filled trades since prior hourly (15:36Z):** NONE. No concealment risk.
- **Tactical agent today:** Ran at 09:30, 09:40, 09:50, 10:11 (CRITICAL override), 10:20, 10:30, 10:40, 10:50, 11:12 (CRITICAL resolved), 12:10, 12:20, 12:30, 15:40, 15:50, 16:00, 16:10, 16:20, 16:30. No trades executed.
- **Tactical agent price hallucination bug:** Ledger entries from 16:30 and earlier still show truncated prices (e.g., "QQQ 20.01" instead of "QQQ 720.01"). Updated tactical prompt to explicitly require full prices. Hourly strategist must verify ledger entries against live prices.
- **Goal check:** Portfolio **–2.30%** since inception ($9,769.62 vs $10,000 base) vs SPY **+3.21%** (741.05 vs 718.01 baseline). **FAILING BOTH GOALS.** Trailing SPY by ~5.5 pp.
- **Regime:** **OFFENSIVE CATCH-UP.** Target gross exposure 60–90%. Current 13.95% — far below band. Macro backdrop improving (Iran de-escalation + cooler PPI + SpaceX IPO risk-on sentiment), but we are missing the rebound. Discipline demands we do NOT chase.
- **Trading-best-practices check:** Consecutive realized losses exceed 3-loss threshold. Position sizing for new entries reduced 50% from baseline. QQQ 2-share risk = $49 (0.50% of equity); SOXX 1-share risk = $17.50 (0.18% of equity). Portfolio heat = $0. Well below 6% daily limit.
- **Fresh macro intel:** Market slightly lower from 15:35Z but still positive on day. SPY +0.38%, QQQ +0.41%, SOXX +1.95%. SpaceX IPO at $135 opened $150, trading ~$168.75 — space stocks hammered (sell the news). RKLB down 6.59% but joining Nasdaq 100 on June 22. AMD upgraded by Citi (+5%). Oil dropped to $88 on Iran peace deal hopes. No new negative catalysts.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| VOO | 2 | $678.7025 | $681.355 | $1,362.71 | 13.95% | +$5.305 | +0.391% |
| Cash | — | — | — | $8,406.91 | 86.05% | — | — |
| **Equity** | — | — | — | **$9,769.62** | **100%** | — | **–2.30%** |

- **Gross long exposure:** 13.95%
- **Net exposure:** 13.95%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Fri Jun 12 (12:35 PM ET)
- **1D (today):** SPY **+0.38%** (est. 739.25 → 741.05). Portfolio **+0.05%** (VOO +0.38% * 13.95% weight). **Underperforming SPY by ~0.33 pp.** Cash drag severe.
- **1W (Jun 5 → Jun 12):** SPY **+0.2%** (est. 740.0 → 741.05). Portfolio **–0.4%** (est. $9,809 → $9,769.62). **Underperforming SPY by ~0.6 pp.** June 9 panic exits crystallized losses and removed upside capture.
- **2W (May 29 → Jun 12):** SPY **–2.36%** (VOO proxy). Portfolio **–4.20%** (est. $10,201.51 → $9,769.62). **Underperforming SPY by ~1.84 pp.** Cash preserved some capital during the early-June drawdown, but the realized losses from June 9 dominate.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.30%** vs SPY **+3.21%** (741.05 vs 718.01 baseline). **Trailing by ~5.5 pp.**
- What is working: Cash preserved capital during the risk-off drawdown. VOO anchor is stable.
- What is not working: **Bottom-tick panic exits on Jun 9** crystallized losses. QQQ sold at $690.79, SOXX at $523.12 and $552.30. Market has rallied sharply since; we are flat and missing the rebound. Cash drag is now the dominant headwind.
- What must change today/this week: **Do not chase the rally.** Rebuild only if the tape gives a discount below prior exits. With 3+ consecutive losses, maintain reduced size. The next 2.5 months require disciplined deployment, not panic chasing. However, with the target band now 60–90%, we must be ready to deploy quickly if triggers hit.

## Goal Check
- **Portfolio since inception:** –2.30% ($9,769.62 vs $10,000 base)
- **S&P 500 since inception:** +3.21% (SPY 741.05 vs baseline 718.01)
- **Status:** **FAILING BOTH GOALS.** Trailing SPY by ~5.5 pp. Goal 1 (positive absolute) BREACHED. Goal 2 (beat SPY) BREACHED.
- **Dominant failure mode:** **late entries / poor execution.** The portfolio sold at the lows on Jun 9 and is now missing the rebound. The 2W data confirms the realized losses are the dominant driver, not just cash drag.

## Market Intel — Fri Jun 12 (12:35 PM ET)
- **Broad market:** SPY +0.38% (741.05), Nasdaq +0.41% (QQQ 720.72), semis +1.95% (SOXX 599.09). Market slightly lower from 15:35Z highs but still positive on day. No major sector rotation.
- **Geopolitical:** Iran de-escalation continues. Oil dropped to $88 on peace deal hopes. Risk premium compressing. This is a material bullish macro shift if confirmed.
- **Semiconductor / AI:** AMD upgraded by Citi (+5%) on AI accelerator narrative. Oracle AI spending fears still weigh on AI capex sentiment. Mixed signals.
- **SpaceX IPO:** Opened at $150, now ~$168.75. Space stocks hammered (sell the news). RKLB down 6.59% but joining Nasdaq 100 on June 22. No edge for us.
- **NVDA:** $205.07. Down –0.04% today, –1.85% 1W, –8.73% 2W. No re-entry authorized.
- **AVGO:** $380.86. Down –1.17% today, –3.92% 1W, –17.16% 2W. Post-earnings correction deepening. No re-entry.
- **GOOG:** $359.635. Up +0.77% today, –0.52% 1W, –3.56% 2W. No catalyst. No re-entry.
- **QQQ:** $720.72 (Alpaca). 24-hour cooldown **EXPIRED.** Rebuild ONLY if price drops to $690 or below. **Do not buy above $690.** Current price is ~$30.72 above trigger.
- **SOXX:** $599.09 (Alpaca). 24-hour cooldown **EXPIRED.** CRITICAL event from 14:10Z **RESOLVED.** Rebuild ONLY if price drops to $523 or below. **Do not buy above $523.** Current price is ~$76.09 above trigger.
- **HOOD:** $93.35. Up +1.10% today, +9.64% 1W, +15.54% 1M. No clear catalyst. Avoid.
- **RKLB:** $107.09. Down –6.59% today. SpaceX IPO sell-the-news + Nasdaq 100 inclusion on June 22. No edge. Avoid.
- **META:** $570.74. Banned. Avoid.
- **News access:** Yahoo Finance RSS working. MarketWatch blocked (captcha). Actionable headlines: SpaceX IPO, AMD upgrade, Iran peace deal hopes.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Event detector:** NONE at 16:35Z. Broad market OK. Buy suspension LIFTED for SOXX.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---|---|
| VOO | Hold | Broad-market anchor. Only position left. 13.95%, below 20% non-QQQ ETF cap. Cannot add a full share (would breach cap at ~21.0%). | 10–20% |
| QQQ | Buy on deep pullback | Core liquid growth. 24-hour cooldown expired. Rebuild exposure ONLY if price drops to $690 or below. Per loss-streak rule, size reduced to 2 shares. | 10–20% |
| SOXX | Buy on deep pullback | Chip exposure. 24-hour cooldown expired. CRITICAL event resolved. Rebuild exposure ONLY if price drops to $523 or below. Per loss-streak rule, size reduced to 1 share. | 5–10% |
| NVDA | Avoid | Individual semi risk. Oracle AI spending fears spillover risk. | 0% |
| GOOG | Avoid | No catalyst. | 0% |
| AVGO | Avoid | Post-earnings correction. | 0% |
| META | Avoid | bannedSymbols active. | 0% |
| RKLB / HOOD / SHLD / ARKX / EIS / QTUM / GLD | Avoid | No edge. Risk-on tape. Thin liquidity. | 0% |

## Priority Actions
1. **HOLD VOO 2.** DO NOT SELL VOO under any circumstances today.
2. **QQQ limit buy MAINTAINED.** BUY **2 shares** if price drops to **$690.00 or below**. Place limit order at **$689.50**. Target $735.00 (1.8R). Stop at $665.00 (–3.6%). Risk = $49 (0.50% of equity). Well within 2% max.
3. **SOXX limit buy MAINTAINED.** CRITICAL event resolved at 15:36Z. BUY **1 share** if price drops to **$523.00 or below**. Place limit order at **$522.50**. Target $560.00 (2.1R). Stop at $505.00 (–3.4%). Risk = $17.50 (0.18% of equity). Well within 2% max.
4. **No market orders.** All new orders must be limit orders only.
5. **No discretionary buys above trigger prices.** Buying back above prior sell prices ($690.79 for QQQ, $523.12 for SOXX) is poor execution.
6. **Cash reserve:** ~$8,407 (~86.05%). Preserve for authorized limit orders.
7. **Gross exposure target:** 60–90% offensive catch-up band. Current 13.95%. Rebuilding to 60% requires ~$4,500 in new buys. Only execute if triggers hit.
8. **No same-day round trips.** If a symbol is bought today, it may NOT be sold today unless the hourly note explicitly authorizes the exit.
9. **Repo vigilance:** The tactical agent and harness must verify git status on every run. The working tree can be silently corrupted. Always check `git diff` against HEAD for memory and code files.
10. **If market closes higher and triggers remain unfilled, reassess on Monday (June 15).** Do not let triggers drift stale over the weekend without fresh price confirmation.
11. **Tactical prompt updated:** Added explicit instruction to write full prices in ledger entries (e.g., $720.05, not $20.05).

## Macro Themes
- **Actionable now:** Iran de-escalation (oil down to $88, peace deal hopes) + cooler PPI + SpaceX IPO risk-on = bullish macro shift. Market rallied sharply yesterday. Risk-off tape is weakening. **BUT:** chasing a +1.7% SPY day into a +0.4% follow-through is poor execution. DO NOT chase. Wait for triggers. If the market truly has bottomed, a pullback will come.
- **Worth monitoring:** Chip gear divergence + AI rally unwinding. AMD upgraded on AI accelerator narrative while NVDA/AVGO remain weak. Mixed signals for semi sector.
- **Worth monitoring:** US-Iran talks. If de-escalation is confirmed, risk premium could compress further. If talks collapse, the market could reverse. The market is currently pricing in de-escalation.
- **Interesting but not actionable yet:** SpaceX IPO oversubscribed. Positive for space economy (RKLB) but not enough to counter the risk-off tape. No actionable symbol-specific entry.
- **Interesting but not actionable yet:** RKLB joining Nasdaq 100 on June 22. Potential short-term catalyst but stock is in a downtrend (–12.39% 2W). No edge.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** active for HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, and todo.md no-buy parser.
- **FMP** disabled. Yahoo Finance public data used as fallback. Documented.
- **News access:** Yahoo Finance RSS working. MarketWatch blocked. No actionable buy catalysts beyond Iran de-escalation.
- **Alpaca `get-latest-price` bars** timestamps at 16:34Z, current within 1 minute.
- **Day-trade status:** 0/3. No same-day round trips today.
- **SOXX liquidity:** 3 trades, 190 vol at 16:34Z — very thin. Limit orders only.
- **QQQ liquidity:** 69 trades, 3,643 vol at 16:34Z — acceptable but limit orders still preferred.
- **VOO liquidity:** 4 trades, 139 vol at 16:34Z — thin but acceptable for small 2-share position.
- **Earnings dates:** AVGO passed June 3. GOOG est. Jul 23; META est. Jul 29; NVDA Aug 26; HOOD Jul 29; RKLB est. Aug 6. No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.77K equity, QQQ capped at 6 shares; VOO at 2 shares (at cap); SOXX capped at 3 shares.
- **Repo hygiene:** Clean. No breaches this cycle.
- **Event detector:** Working correctly. Classification NONE at 16:35Z. Prior CRITICAL semi melt-up (14:10Z) fully resolved.
- **Tactical agent price hallucination bug:** Ledger entries from Jun 11 afternoon and Jun 12 morning show QQQ prices/triggers with missing leading digits (e.g., "15.69" instead of "715.69", "90" instead of "690"). Hourly strategist must verify ledger entries against live prices.
- **Standing learnings:** See `memory/standing_learnings.md` for full archive.
- **New learning:** Tactical prompt must explicitly instruct the agent to write full prices in ledger entries. Added to `prompts/tactical.txt`.
