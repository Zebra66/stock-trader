## Tactical Override Log — 2026-07-10 13:50Z (:50 run)
- **Event detector classification:** MAJOR (SOXX +1.42%, SMH +1.33% in 10m — SK Hynix debut semiconductor rally)
- **[AUTONOMOUS_OVERRIDE]** Entered Event Response Mode. No protective action applied — rally is favorable to AVGO, no held positions breached authorized stops.
- **Live broker reconciliation:** SOXX position NOT found in Alpaca holdings (4 positions only). Appears liquidated between 13:35Z and 13:50Z. Stale MEMORY.md / todo.md corrected below.
- **Updated true book:** QQQ 6 ($723.32), VOO 2 ($692.12), AVGO 3 ($401.87), HOOD 5 ($112.74). Cash $2,239.53. Equity $9,732. Gross exposure ~77.0%.
- **Orders this cycle:** NONE
- **Stops active:** AVGO trim 1 share if <$385; HOOD trim 2 shares if <$110.

---

# Hourly Macro Memory
*Updated 2026-07-10 14:35Z (Friday 10:35 AM ET). Market OPEN until 16:00 ET (~5.5 hrs to close).*

## Hourly Cycle Summary — 2026-07-10 14:35Z (Friday 10:35 AM ET)
- **Status:** Market OPEN. ~5.5 hours to close. Next open: Monday July 13, 09:30 ET.
- **Repo integrity:** Clean. Branch up to date with origin/main (0 ahead, 0 behind). Staged changes: `memory/ledger.md`, `memory/tactical_last_prices.json`.
- **Live broker refresh:** Equity **$9,697.34** | Cash **$2,239.53** | Long **$7,457.81** | Gross **76.9%** | Daytrade **0/3**.
- **Holdings confirmed:** QQQ 6, VOO 2, AVGO 3, HOOD 5. **SOXX fully exited** (1 share sold July 10 ~09:40 ET @ ~$569.04 by tactical agent).
- **Open orders:** NONE.
- **Filled trades since last hourly (July 10 13:35Z → 14:35Z):** 1 SOXX limit SELL filled July 10 13:41:40Z @ $569.04 (tactical agent claimed $570 stop breached; hourly authorized $560 stop). **Deviation noted — see Safeguards below.**
- **Goal check:** Portfolio **–3.03%** since inception ($9,697.34 vs $10,000) vs SPY **+4.59%** (750.94 vs 718.01 baseline). **Goal 1 (positive absolute): FAILED.** **Goal 2 (beat SPY): FAILED — trailing by ~7.62 pp.**
- **Regime:** **Neutral**. Target gross exposure 70–85%. Current 76.9% — within band, acceptable.
- **Dominant failure mode:** **Excessive turnover / friction.** June 15/23/26 complete liquidations locked in realized losses. July 9 SOXX add was poorly timed ($589.47 entry). Tactical agent sold SOXX this morning at $569 (better than $560 stop but unauthorized trigger). Churn must stop.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $721.02 | $4,326.12 | 44.6% | +$27.28 | +0.64% |
| VOO | 2 | $676.46 | $690.22 | $1,380.44 | 14.2% | +$27.52 | +2.03% |
| AVGO | 3 | $371.95 | $399.80 | $1,199.40 | 12.4% | +$83.55 | +7.49% |
| HOOD | 5 | $101.50 | $110.31 | $551.55 | 5.7% | +$44.05 | +8.68% |
| Cash | — | — | — | $2,239.53 | 23.1% | — | — |
| **Equity** | — | — | — | **$9,697.34** | **100%** | — | **–3.03%** |

- **Gross long exposure:** 76.9%
- **Net exposure:** 76.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Fri July 10 (10:35 AM ET)
- **1D (today, ~65 min into session):** portfolio **~–0.56%** vs SPY **~–0.23%**. Underperforming due to HOOD –4.17% drag.
- **1W (July 3 → July 10):** portfolio **~+0.4%** (est. $9,659 → $9,697) vs SPY **~+0.9%** (est. $744 → $751). Trailing slightly.
- **2W (June 26 → July 10):** portfolio **~+1.9%** (est. $9,516 → $9,697) vs SPY **~+2.8%** (est. $731 → $751). Gap narrowing slowly.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–3.03%** vs SPY **+4.59%**. Gap is **–7.62 pp**.
- What is working: **AVGO** (+7.5% unrealized, strong weekly momentum +10.5%). **VOO** steady anchor (+2.0%). **QQQ** core holding (+0.6%).
- What is not working: **HOOD** gave back half its unrealized gain today (from +15.9% at open to +8.7% now). **SOXX** was exited at a loss ($–20.43 realized). Portfolio is still negative absolute.
- What must change: **Stop churning.** Every trade that is not high-conviction wastes edge. The next add must have >2% expected return net of costs.

## Goal Check
- **Portfolio since inception:** –3.03% ($9,697.34 vs $10,000 base)
- **S&P 500 since inception:** +4.59% (SPY 750.94 vs baseline 718.01)
- **Status:** **Off track on both goals.** Trailing SPY by ~7.62 pp. Portfolio negative absolute.
- **Dominant failure mode:** **Excessive turnover / friction.** The only path to close a 7.6 pp gap in ~2.5 months is to hold high-conviction positions, let winners run, cut losers decisively at authorized levels, and avoid unauthorized tactical drift.

## Market Intel — Friday 10:35 AM ET
- **Broad market:** S&P 500 down ~0.23%, Nasdaq slightly weaker. Mixed tape ahead of SK Hynix debut and US-Iran headline risk into weekend.
- **Semiconductors:** SK Hynix $26.5B US ADR debut today at $149. Sector whipsawed this week. AVGO holding near $400 despite jitters. NVDA at $207 (+6.5% weekly). No new chip exposure needed; AVGO is the vehicle.
- **AVGO / Broadcom:** Down –0.33% today. 1-week +10.5%, 1-month +7.2%. Healthy momentum. 3-share position at blended $371.95 is core chip exposure. No earnings binary in next 48 hours.
- **Robinhood / HOOD:** Current $110.31, down –4.17% intraday ($115.11 → $110.31). Lost ~$25/share from this morning's highs. Analyst upgrades: KBW raised PT to $100 (still below current), Morgan Stanley raised to $124. Mixed signal. Best performer in book but eroding fast.
- **Alphabet / GOOG:** Fully exited July 9 @ $348.97. 24h cooldown expired at 10:23 AM ET today. No re-entry authorized today — tape is weak (weekly –1.0%, monthly flat).
- **Fed / Macro:** Fed minutes (July 9) exposed deep divide over rate outlook. Q2 earnings season beginning next week. Geopolitical headline risk (US-Iran) into weekend.
- **News access:** Yahoo Finance search API working. FMP disabled. MarketWatch/Reuters blocked.
- **Earnings dates:** No binary events in next 48 hours for held positions. GOOG est. late July; META late July; NVDA Aug; HOOD late July; AVGO already reported.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.6%, near 45% cap. No add capacity. | 36–45% |
| VOO | Hold | Broad-market anchor. 14.2%, within 20% non-QQQ ETF cap. Adding 1 share breaches cap. | 10–20% |
| AVGO | Hold / Stop at $385 | Strong momentum, +7.5% unrealized. 12.4%, within 15% cap. Trim 1 share if $385 breaks. | 8–15% |
| HOOD | Hold / Stop at $110 | Best performer but down –4.2% today. Volatile. Trim 2 shares if $110 breaks to protect gains into weekend. | 3–10% |
| META | Avoid | `bannedSymbols: ["META"]` active. | 0% |
| GOOG | Avoid today | Exited July 9. Cooldown expired but no re-entry today. | 0% |
| NVDA | Avoid today | Re-entry deferred. AVGO is preferred chip exposure. | 0–4% |
| SOXX | Avoid | Sold today. 24h cooldown until Saturday 13:41Z (after market close). Re-entry requires explicit hourly authorization. | 0% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak or no edge. | 0% |

## Priority Actions
1. **HOLD all positions.** No new orders this cycle. Gross exposure 76.9% is within 70–85% band; Friday + geopolitical risk + HOOD volatility = no new risk today.
2. **HOOD protective stop:** SELL 2 shares if price drops below $110.00 with limit $109.50. Rationale: lock in bulk of gain on volatile name into weekend. If triggered, hold remaining 3 shares.
3. **AVGO protective stop:** SELL 1 share if price drops below $385.00 with limit $384.50. Rationale: protect chip gain if sector rotation accelerates.
4. **No same-day round trips.** Anti-churn code guard active in both factory and CLI.
5. **Cash reserve:** ~$2,240 (~23.1%). Reserve for Monday pullback opportunities (AVGO < $390, HOOD < $105, QQQ < $710) — requires explicit hourly authorization.
6. **Tactical discipline tightening:** Tactical agent must use EXACT stop prices authorized in todo.md. Do not round, approximate, or use discretionary levels. Unauthorized SOXX sale at $569 (vs authorized $560) noted; repeat deviation triggers hard lock.
7. **Repo integrity:** .gitignore effective. Staged memory files will be committed this cycle.

## Macro Themes
- **Actionable now:** SK Hynix debut today = semiconductor sector volatility. We are exposed via AVGO only. AVGO stop at $385. Do not add semis until volatility settles.
- **Worth monitoring:** Fed minutes divide = rate uncertainty into July FOMC (late July). Could pressure growth multiples.
- **Worth monitoring:** US-Iran renewed tensions pre-market. Weekend headline risk is real; keeping elevated cash is prudent.
- **Interesting but not actionable yet:** QTUM quantum +65% YTD but thin. META AI cost breakthrough (stock +6% today) — banned for us.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** now includes: HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, todo.md no-buy parser, concentration cap, **and anti-churn same-day round-trip guard**.
- **FMP** disabled (no API key). Yahoo Finance chart/search API used as fallback.
- **News access:** Yahoo Finance search API is primary actionable source. MarketWatch/Reuters blocked.
- **Alpaca `get-latest-price` bars** timestamps at 14:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **AVGO liquidity:** Healthy at 28 trades, 1,643 vol in latest 10-min bar.
- **HOOD liquidity:** 33 trades, 2,833 vol in latest bar — healthy.
- **Earnings dates:** No binary events in next 48 hours.
- **Lock file:** `bannedSymbols: ["META"]`, `active: false`.
- **Integer-share constraint:** With ~$9.7K equity, QQQ capped at 6 shares; AVGO at 3-4 shares; HOOD at ~12 shares; VOO at 2 shares.
- **Code gap CLOSED:** Same-day round trip now code-enforced in `alpaca_cli.ts` and `alpaca_client_factory.ts`.
- **Event detector bug CLOSED:** `loadLastSnapshot` async fix merged.

## Standing Learnings
See `memory/standing_learnings.md` for full archive. Key reminders:
- Size from **account equity**, not raw buying power.
- **No leverage** unless explicitly justified.
- Commission-free does **not** mean friction-free.
- **Never average down.**
- **Do not trade outside the approved universe.** Code-level guards active.
- **Audit every live position against the universe on every run.**
- **If tactical layer violates an explicit no-trade instruction, default next cycle to cleanup-only hard lock.**
- **Repo integrity check on every run:** If `git status` shows tracked files deleted/staged-as-deleted or branch behind origin/main by >5 commits, restore/align before trading.
- **Pre-fetched context can be stale even when git HEAD is current.** Live broker reconciliation is mandatory.
- **With ~$10K equity, concentration caps are extremely tight.** QQQ maxed at 6 shares; AVGO at 3-4 shares; VOO at 2 shares.
- **Adding to a position that was bought the same session is a same-day round trip and is prohibited.** Now also **code-enforced**.
- **Portfolio equity can drift $15–$20 intraday on a $10K book** due to normal market fluctuation. Do not overreact.
- **News access in workspace is severely limited.** Yahoo Finance search API is the primary actionable source.
- **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
- **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker reconciliation is mandatory.
- **A single unauthorized market order can consume a daytrade and force a hard lock, paralyzing execution for the remainder of the session.** Prevention is cheaper than cleanup.
- **Missing .gitignore or stale tracked files cause repo pollution.** Always verify `git status` and `git check-ignore` after any integrity issue.
- **Memorial Day / long weekend headline risk:** Holding elevated cash into a 3-day weekend with unresolved geopolitical talks is prudent risk management.
- **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
- **Geopolitical escalation during an extended sector rally demands immediate cancellation of breakout-limit-buy orders, not passive 'watch and wait.'**
- **Buying the first intraday dip in a profit-taking session without confirmed support often results in immediate unrealized loss.**
- **Unauthorized partial sells can be worse than full stop-outs.**
- **Tactical agent chasing above buy triggers locks in immediate underwater positions.**
- **Concealment by not updating todo.md after trades is as serious as the unauthorized trade itself.**
- **Post-earnings 'priced in' reactions can drift lower for hours; do not chase the open.**
- **The 'stable but tense' macro assessment can flip to 'active escalation' within one hourly cycle.**
- **With $10K equity, a single 1-share stop-out in a $220 stock costs ~$10–$20 in realized losses plus SEC/FINRA fees.** These compound quickly.
- **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation.
- **Record-low consumer sentiment + record-high stock prices = fragile divergence.**
- **Market can rally on 'bad news' if it believes the worst is priced in.**
- **SOXX liquidity can improve dramatically within an hour.** Always check current bar before classifying illiquidity.
- **Chip-sector rotation away from NVDA and toward non-NVDA semis is a real regime signal.**
- **Repo integrity breach recurred after 6 days (May 20 → May 26).** Indicates workspace-level process risk, not a one-off.
- **Post-long-weekend gap-up on geopolitical news can produce significant portfolio gains without trading.**
- **With $10K equity and rising prices, concentration caps are binding.**
- **Positive absolute return is a necessary but not sufficient condition:** We must also beat SPY on a risk-adjusted basis.
- **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.**
- **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing to avoid false positives.
- **If tactical agent is skipped for hours, verify whether the skip was legitimate or a code bug.**
- **If an unauthorized short is opened, covering it on the next trading session avoids a daytrade.**
- **Tactical agent race condition risk:** Code-level guards are the ultimate defense; prompt instructions alone are insufficient.
- **Lock files must NOT contain auto-expiration timestamps.** Hourly strategist must explicitly set `active: false`.
- **Concentration caps must be code-enforced, not just prompt-enforced.**
- **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
- **Unit tests for code guards must account for ALL active defense layers.**
- **Repo integrity restoration via `git pull` is preferred over manual file reconstruction** when remote has correct commits.
- **Limit orders on breakout adds reduce slippage risk on thin names.**
- **File reversion / workspace corruption is a recurring process risk:** Always verify file freshness against broker data before acting.
- **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
- **Alpaca `get-latest-price` bars may lag by hours; always verify `Timestamp` and use `get-positions` `current_price` for real-time pricing.**
- **New Fed Chair regime shifts can reprice the entire tape within hours.**
- **MarketWatch headline risk is real-time sentiment:** Factor into intraday decisions but do not overreact to single articles.
- **With daytrade_count at 0/3, we have full flexibility, but conserve daytrades for true emergencies.**
- **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md `DO NOT BUY` / `DO NOT ADD` parser must be kept in sync.
- **Pre-order concentration cap check:** Compute `max_add_value = (cap_pct * equity) - current_market_value_of_symbol` before any buy.
- **Tactical agent must use EXACT authorized stop prices.** Rounding or discretionary adjustments cause drift.

## Prior Tactical Executions (Key Events Since May 29)
- **2026-07-10 09:43 ET:** SOLD 1 SOXX @ ~$569.04 (tactical agent; claimed $570 stop breached; hourly authorized $560 stop). **Deviation noted.**
- **2026-07-09:** SOXX limit BUY 1 @ $589.47 filled. GOOG stop triggered — sold 1 @ $348.97. All GTC orders cancelled post-close.
- **2026-07-08:** Bought 1 GOOG @ $356.77.
- **2026-07-06:** Sold 5 RKLB @ $93.25 (full exit). Bought 1 QQQ @ $721.94.
- **2026-07-02:** Trimmed HOOD 5 shares @ $114.51 (left 5 shares).
- **2026-06-30:** Bought 10 HOOD @ $101.50.
- **2026-06-29:** Rebuilt core — bought 5 QQQ @ $715.38, 2 VOO @ $676.46, 3 AVGO @ $371.95.
- **2026-06-26:** COMPLETE LIQUIDATION — sold 6 QQQ @ $704.03, 2 VOO @ $668.74, 3 AVGO @ $368.08.
- **2026-06-23:** COMPLETE LIQUIDATION — sold 5 QQQ @ $715.94, 2 AVGO @ $381.95, 2 VOO @ $676.13, 1 NVDA @ $202.15, 1 SOXX @ $609.77.
- **2026-06-15:** COMPLETE LIQUIDATION — sold 5 QQQ @ $742.94, 3 GOOG @ $367.41, 3 NVDA @ $211.90 (market orders 3:22 PM ET). Then rebought 5 QQQ @ $743.45, 3 GOOG @ $368.71, 3 NVDA @ $212.04 (3:11 PM ET — same day, causing 3 day trades). **Catastrophic churn.**
