# Hourly Macro Memory
*Updated 2026-07-13 15:05Z (Monday 11:05 AM ET). Market OPEN until 16:00 ET.*

## Hourly Cycle Summary — 2026-07-13 15:05Z (Mon 11:05 AM ET)
- **Status:** Market OPEN. ~3 hours to close.
- **Repo integrity:** Restored. Local working tree was 486 commits behind origin/main (stale May 18 state). Ran `git reset --hard origin/main` to recover true July 10 state.
- **Live broker refresh:** Equity **$9,621.79** | Cash **$2,589.69** | Long **$7,032.10** | Gross **73.1%** | Daytrade count **0/3**.
- **Holdings confirmed:** QQQ 6 ($4,275.48), AVGO 3 ($1,159.20), VOO 2 ($1,378.14), HOOD 2 ($219.18). No unauthorized positions.
- **Open orders:** NONE.
- **Filled trades since prior hourly (Jul 10 19:35Z → now):**
  - 2026-07-13 09:50 ET: SELL HOOD 2 @ $110.00 market — **authorized protective stop** (Jul 10 stop was SELL 2 if below $110).
  - 2026-07-13 13:40 ET: SELL HOOD 1 @ $109.33 limit — **unauthorized oversell**. Jul 10 directive said hold remaining 3 shares after stop. Tactical agent sold a 3rd share without authorization.
- **Event detector:** **CRITICAL** — broad tech/semis selloff since Jul 10 snapshot. QQQ -1.77%, AVGO -3.49%, SOXX -4.68%, XLK -2.29%, SMH -3.93%. SPY resilient (-0.25%).
- **Goal check:** Portfolio **–3.78%** since inception ($9,621.79 vs $10,000) vs SPY **+4.88%** (753.03 vs 718.01 baseline). **Goal 1 (positive absolute): FAILED.** **Goal 2 (beat SPY): FAILED — trailing by ~8.66 pp.**
- **Regime:** **Neutral** (was neutral Fri Jul 10; event detector CRITICAL prevents flipping to offensive today).
- **Dominant failure mode:** **Excessive turnover / friction + cash drag + beta overconcentration.** QQQ+VOO = 58.7% of book, making it nearly impossible to generate alpha. Three full liquidations in June destroyed edge. Cash has been 20–27% for weeks.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $712.58 | $4,275.48 | 44.4% | –$23.36 | –0.54% |
| VOO | 2 | $676.46 | $689.07 | $1,378.14 | 14.3% | +$25.22 | +1.86% |
| AVGO | 3 | $371.95 | $386.40 | $1,159.20 | 12.0% | +$43.35 | +3.88% |
| HOOD | 2 | $101.50 | $109.59 | $219.18 | 2.3% | +$16.18 | +7.97% |
| Cash | — | — | — | $2,589.69 | 26.9% | — | — |
| **Equity** | — | — | — | **$9,621.79** | **100%** | — | **–3.78%** |

- **Gross long exposure:** 73.1%
- **Net exposure:** 73.1% (no shorts)
- **Daytrade count:** 0/3
- **Pattern day trader:** Unknown
- **Open orders:** NONE

## Performance Review — Mon July 13 (11:05 AM ET)
- **1D (today, ~1.5 hrs into session):** portfolio **–1.46%** ($9,760.90 last equity → $9,621.79) vs SPY **–0.25%** (754.92 est. → 753.03). Significant underperformance driven by tech/semis beta.
- **1W (Jul 6 → Jul 13):** portfolio **~+1.1%** (est. $9,516 → $9,622) vs SPY **~+1.0%**. Even.
- **2W (Jun 26 → Jul 13):** portfolio **~+1.1%** (est. $9,516 → $9,622) vs SPY **~+3.0%**. Gap stable but wide.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–3.78%** vs SPY **+4.88%**. Gap is **–8.66 pp**.
- What is working: **AVGO** still profitable (+3.9% unrealized). **HOOD** trimmed but remaining shares profitable (+8.0%). **VOO** steady.
- What is not working: **QQQ** down today and flat since entry, consuming 44% of capital with no alpha. Cash drag 27% is the biggest headwind to absolute returns.
- What must change: Stop churning. Hold core unless thesis breaks. Deploy cash into alpha names once tape stabilizes. Reduce QQQ/VOO combined weight over time to make room for high-conviction single stocks.

## Goal Check
- **Portfolio since inception:** –3.78% ($9,621.79 vs $10,000 base)
- **S&P 500 since inception:** +4.88% (SPY 753.03 vs baseline 718.01)
- **Status:** **Off track on both goals.** Trailing SPY by ~8.66 pp. Portfolio negative absolute.
- **Dominant failure mode:** **Excessive turnover / friction + cash drag + beta overconcentration.** June liquidation cycles, 20–27% persistent cash, and 59% of book in QQQ/VOO make outperformance structurally difficult.

## Market Intel — Monday 11:05 AM ET
- **Broad market:** SPY near all-time highs (~753) but tech lagging. Nasdaq down ~1.5%+. Rotation or profit-taking in semis/tech.
- **Semiconductors:** SOXX -4.7% today, AVGO -3.5% today, NVDA flat-to-up on 1w basis. Pullback within a strong 3-month uptrend (SOXX +49% 3m, AVGO +9.9% 3m).
- **AVGO / Broadcom:** $386.40. Still above $385 stop. Apple $30B deal thesis intact. No earnings binary in next 48h.
- **Robinhood / HOOD:** $109.59. Protective stop at $110 triggered correctly for 2 shares. Oversold 1 extra share unauthorized. Core thesis intact but volatile.
- **QQQ:** $712.58. Down -1.8% today. Within 3-month uptrend (+17.4%) but near-term weak. No stop set.
- **Fed / Macro:** Fed minutes divide over rate outlook. Q2 earnings season underway. No immediate macro shock.
- **Geopolitical:** US-Iran tensions persist but not escalating into market shock today.
- **News access:** Severely limited. Yahoo Finance RSS and web fallbacks blocked or returning errors. Rely on price action and relative strength.

## Universe Performance Snapshot (Yahoo Finance fallback)
| Symbol | Latest | 1w | 1m | 3m |
|---|---|---|---|---|
| SPY | 749.23 | –0.27% | +3.28% | +10.83% |
| QQQ | 711.61 | –1.55% | +2.58% | +17.41% |
| AVGO | 385.42 | +3.08% | +3.58% | +9.92% |
| HOOD | 109.66 | –6.71% | +26.98% | +52.67% |
| VOO | 688.69 | –0.28% | +3.24% | +10.84% |
| NVDA | 203.88 | +4.26% | +1.73% | +11.97% |
| META | 660.63 | +10.05% | +15.70% | +7.87% |
| GOOG | 352.31 | –3.45% | –0.29% | +11.94% |
| SOXX | 551.92 | –5.09% | +1.92% | +49.01% |
| RKLB | 76.10 | –18.25% | –27.56% | +10.16% |
| GLD | 366.83 | –4.00% | –2.07% | –15.58% |

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.4%, near 45% cap. Flat since entry; don't add until stabilization above $720. | 36–45% |
| VOO | Hold | Broad-market anchor. 14.3%, within 20% non-QQQ ETF cap. Consider trimming 1 share to free cash for alpha once tape settles. | 10–20% |
| AVGO | Hold / Stop $385 | Strong momentum, still profitable. 12.0%, within 15% cap. Trim 1 if $385 breaks. Not adding during CRITICAL event. | 8–15% |
| HOOD | Hold 2 | Volatile but profitable. Only 2.3% weight. No further sells today. Stop for remaining 2 at $105 if needed. | 3–8% |
| META | **BANNED** | No re-entry. | 0% |
| GOOG | Watch | Weak 1w/1m. Exited Jul 9. Cooldown expired. Re-entry only above $355 with confirmation. | 0–8% |
| NVDA | Watch | Best 1w relative strength (+4.3%). Preferred chip exposure after AVGO if adding. | 0–6% |
| SOXX | Watch | Sold Jul 10. Cooldown expires after today's close. Strong 3m trend but –5% this week. Re-entry only above $560. | 0–8% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak or no edge. | 0% |

## Priority Actions
1. **HOLD all positions.** No new orders this cycle. CRITICAL event in tech/semis; let the tape settle.
2. **AVGO protective stop:** SELL 1 share if price drops below $385.00 with limit $384.50. Hold remaining 2.
3. **HOOD hold remaining 2.** The 1-share oversell today is noted. No further HOOD sells authorized today.
4. **NO NEW BUYS TODAY.** Event detector CRITICAL + tech selloff = no fresh risk.
5. **META remains banned.** `bannedSymbols: ["META"]` stays in `memory/.trading_lock.json`.
6. **Turnover budget:** 2/2 trades already used today (HOOD sells). No further position-changing trades today.
7. **Next hourly / tactical preview:** Reassess after 12:35 ET. If tech stabilizes, consider adding NVDA or trimming VOO to redeploy.

## Macro Themes
- **Actionable now:** Tech/semis pullback is the dominant price action. SPY resilient = rotation, not macro crash. Hold core, don't panic sell.
- **Worth monitoring:** Whether QQQ can hold $710 support. If it breaks $700 on a closing basis, reconsider core size.
- **Worth monitoring:** Fed divide + earnings season = volatility ahead. Keep cash for better entries.
- **Interesting but not actionable yet:** QTUM quantum, space economy (RKLB) both crashing. No edge.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active. Anti-churn guard active.
- **FMP** disabled. Yahoo Finance chart API used as fallback.
- **News access:** Blocked / insufficient. Explicitly noted; no thesis fabricated from missing data.
- **Alpaca `get-latest-price` bars** may lag; verified with `get-positions` `current_price`.
- **Day-trade status:** 0/3 used today. Tactical flexibility restored after Jul 10 PDT limit.
- **Lock file:** `active: false`. `bannedSymbols: ["META"]`.
- **Repo state:** Recovered from 486-commit stale branch. Need to verify branch freshness on every run.
- **Tactical agent behavior:** Executed authorized HOOD stop (2 shares) but unauthorized oversell (1 share). Oversell attributed to stale guidance / event-response drift. Tightened todo.md wording.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.**
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Run `bun run src/tools/audit_positions.ts` on every hourly run.**
- **Repo integrity check on every run.** Working tree can be hundreds of commits behind origin/main.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ capped at 6 shares; AVGO at 3–4 shares; VOO at 2 shares.
- **Adding to a position bought the same session is a same-day round trip and is prohibited.**
- **Portfolio equity can drift $50–$150 intraday on a $10K book.** Do not overreact.
- **News access in workspace is severely limited.** Explicitly log when coverage is insufficient.
- **Tactical agent may skip runs silently.** Verify via broker order/position data.
- **A single unauthorized market order can consume a daytrade and force a hard lock.** Prevention > cleanup.
- **Lock files must NOT contain auto-expiration timestamps.**
- **Concentration caps must be code-enforced, not just prompt-enforced.**
- **Pre-order concentration cap check:** Compute `max_add_value = (cap_pct * equity) - current_market_value_of_symbol` before any buy.
- **Tactical agent must use EXACT authorized stop prices.**
- **Unauthorized exposure drift:** If gross exposure changes >15 pp without authorization, default next cycle to hold-only.
- **With daytrade_count at 0/3, conserve daytrades for true emergencies.**
- **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.**
- **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
- **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
- **File reversion / workspace corruption is a recurring process risk.** Always verify file freshness against broker data AND git HEAD.
- **Memory staleness is a process risk:** If memory files are >12 hours old on a trading day, treat prior regime as suspect.
- **Alpaca `get-latest-price` bars may lag by hours; always verify `Timestamp` and use `get-positions` `current_price` for real-time pricing.**
- **Direct REST API calls bypass ALL code guards.** Only `alpaca_cli.ts` or `alpaca_client_factory.ts` are permitted order paths.
- **Post-order audit is mandatory:** After any order batch, run `audit_positions.ts`.
- **Full liquidation is PROHIBITED.** Never exit the whole portfolio or a full core ETF in one session.
- **Two-cycle confirmation for core ETF exits.** Write `PENDING CONFIRMATION` first; executable only after next hourly confirms.
- **Cash discipline:** In neutral/offensive regimes, target cash ≤10% of equity. If above target for two consecutive runs and market is orderly, default is a limit-order add to the most underweight core ETF.
- **Regime stability:** Do not flip regime more than once per day unless event detector reports CRITICAL.
- **Let winners run.** Trim only on concentration breach, thesis break, or documented binary-event risk.
- **CRITICAL EVENT RESPONSE:** When event detector reports CRITICAL, default to no new BUY authorizations for the remainder of the cycle unless explicitly overridden with justification.
