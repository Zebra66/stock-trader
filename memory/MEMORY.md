# Hourly Macro Memory
*Updated 2026-07-10 13:35Z (Friday 9:35 AM ET). Market OPEN until 16:00 ET (~6.5 hrs to close).*

## Hourly Cycle Summary — 2026-07-10 13:35Z (Friday 9:35 AM ET)
- **Status:** Market OPEN. ~6.5 hours to close. Next open: Monday July 13, 09:30 ET.
- **Repo integrity:** CRITICAL BREACH RESOLVED. `.gitignore` was missing from working tree; `node_modules/` and `temp_files/` were staged. Restored `.gitignore` from HEAD, unstaged all ignored paths, verified clean.
- **Branch:** Up to date with origin/main (0 ahead, 0 behind).
- **Live broker refresh:** Equity **$9,747.84** | Cash **$1,670.49** | Long **$8,077.35** | Gross **82.9%** | Daytrade **0/3**.
- **Holdings confirmed:** QQQ 6, VOO 2, AVGO 3, HOOD 5, SOXX 1. **GOOG fully exited** (last share stopped July 9 at $348.97).
- **Open orders:** NONE.
- **Filled trades since last hourly (July 9 18:35Z):** 1 SOXX limit BUY filled July 9 14:48Z @ $589.47; 1 GOOG limit SELL filled July 9 14:23Z @ $348.97 (protective stop). GTC orders for HOOD and NVDA cancelled July 9 post-close.
- **Goal check:** Portfolio **–2.52%** since inception ($9,747.84 vs $10,000) vs SPY **+4.82%** (752.78 vs 718.01 baseline). **Goal 1 (positive absolute): FAILED.** **Goal 2 (beat SPY): FAILED — trailing by ~7.35 pp.**
- **Regime:** **Neutral**. Target gross exposure 80–85%. Current 82.9% — within band. No deployment today.
- **Dominant failure mode:** **Excessive turnover / friction.** The portfolio suffered complete liquidations on June 15, June 23, and June 26 (market-order panic sells followed by rebuys), locking in large realized losses. Churn consumed the edge from good symbol selection.
- **Code fixes applied this cycle:**
  1. `event_detector.ts`: Fixed `loadLastSnapshot()` — was synchronously `JSON.parse()`-ing a `BunFile` object, always throwing and returning `null`, causing `priorTimestamp: null` on every run. Now async with `await file.text()`.
  2. `alpaca_client_factory.ts` + `alpaca_cli.ts`: Added `hasSameDayTradeToday` anti-churn guard. Both factory interceptor and CLI wrapper now query today's filled orders and reject same-day round trips (buy→sell or sell→buy in the same symbol). Unit tests added and passing.

---

## Live Book (Alpaca) — TRUE STATE
| Symbol | Qty | Avg Entry | Current | Market Value | Weight | Unrealized P&L | Unrealized % |
|---|---|---|---|---|---|---|---|
| QQQ | 6 | $716.47 | $722.60 | $4,335.60 | 44.5% | +$36.76 | +0.86% |
| VOO | 2 | $676.46 | $691.75 | $1,383.50 | 14.2% | +$30.58 | +2.26% |
| AVGO | 3 | $371.95 | $398.61 | $1,195.82 | 12.3% | +$79.97 | +7.17% |
| HOOD | 5 | $101.50 | $117.64 | $588.20 | 6.0% | +$80.70 | +15.90% |
| SOXX | 1 | $589.47 | $574.23 | $574.23 | 5.9% | –$15.24 | –2.59% |
| Cash | — | — | — | $1,670.49 | 17.1% | — | — |
| **Equity** | — | — | — | **$9,747.84** | **100%** | — | **–2.52%** |

- **Gross long exposure:** 82.9%
- **Net exposure:** 82.9%
- **Daytrade count:** 0/3
- **Pattern day trader:** false
- **Open orders:** NONE

## Performance Review — Fri July 10 (9:35 AM ET)
- **1D (today, ~30 min into session):** portfolio **~flat** vs SPY **+0.14%**. Early tape mixed.
- **1W (July 3 → July 10):** portfolio **~+1.0%** (est. $9,650 → $9,748) vs SPY **~+1.1%** (est. $744 → $753). Roughly tracking SPY.
- **2W (June 26 → July 10):** portfolio **~+2.5%** (est. $9,510 → $9,748) vs SPY **~+3.0%** (est. $731 → $753). Narrowing gap slightly.
- **Since inception (2026-05-04 baseline $10,000):** portfolio **–2.52%** vs SPY **+4.82%**. Gap is **–7.35 pp**.
- What is working: **HOOD** (+15.9% unrealized, strong momentum since $101.50 entry June 30). **AVGO** (+7.2% unrealized, semiconductor strength). **VOO** steady anchor (+2.3%).
- What is not working: **SOXX** underwater (–2.6% unrealized at $589.47 entry July 9). The July 9 add was poorly timed; price has drifted lower.
- What must change: **Stop churning.** The only path to close a 7.35 pp gap in ~1 month is to let winners run, cut losers decisively, and avoid realized losses from panic liquidation. Any new trade must have >2% expected edge to overcome transaction costs.

## Goal Check
- **Portfolio since inception:** –2.52% ($9,747.84 vs $10,000 base)
- **S&P 500 since inception:** +4.82% (SPY 752.78 vs baseline 718.01)
- **Status:** **Off track on both goals.** Trailing SPY by ~7.35 pp. Portfolio is negative absolute.
- **Dominant failure mode:** **Excessive turnover / friction.** Complete liquidations on June 15, 23, 26 erased unrealized gains and locked in realized losses. Symbol selection is not the problem; behavioral churn is.

## Market Intel — Friday 9:35 AM ET
- **Broad market:** S&P 500 flat to slightly positive (+0.14%). Nasdaq mildly weaker pre-bell. Mixed futures ahead of SK Hynix Nasdaq debut.
- **Semiconductors:** SK Hynix $26.5B US ADR offering at $149 debuts today. Major event for AI/memory chip sentiment. Potential volatility in SOXX/SMH/AVGO/NVDA.
- **AVGO / Broadcom:** Down –0.6% today at ~$399. 5-day +10.7%, 20-day +7.2%. Strong momentum. 3-share position at blended $371.95 is healthy. No earnings binary in next 48 hours.
- **Alphabet / GOOG:** Fully exited. 3 shares sold July 9 @ $348.97 (protective stop). 24-hour cooldown expired at 10:23 AM ET today. Not authorized for re-entry today — tape is weak and portfolio needs stability, not bottom-fishing.
- **Robinhood / HOOD:** Current $117.64, up +15.9% unrealized from $101.50 entry. Down –1.3% in early session (Yahoo) but Alpaca quote shows ~flat to slightly positive. Momentum remains strongest in book. Trim risk if it breaks $110.
- **Fed / Macro:** Fed minutes (July 9) exposed deep divide over rate outlook. Adds uncertainty. Q2 earnings season beginning.
- **US-Iran:** Renewed tensions headline pre-market Friday. Geopolitical headline risk into the weekend.
- **News access:** Yahoo Finance RSS is working. FMP disabled.
- **Earnings dates:** No binary events in next 48 hours for held positions. GOOG est. late July; META late July; NVDA Aug; HOOD late July; AVGO already reported.

## Position Map
| Symbol | Bias | Rationale | Target % |
|---|---|---:|---:|
| QQQ | Hold | Core liquid growth. 44.5%, near 45% cap. No add capacity. | 36–45% |
| VOO | Hold | Broad-market anchor. 14.2%, within 20% non-QQQ ETF cap. | 10–20% |
| AVGO | Hold / Stop at $385 | Strong momentum, +7.2% unrealized. 12.3%, within 15% cap. Trim 1 share if $385 breaks. | 8–15% |
| HOOD | Hold / Stop at $110 | Best performer (+15.9%). Volatile. Trim 2 shares if $110 breaks to protect gains. | 3–10% |
| SOXX | Hold / Cut at $560 | Underwater add at $589.47. Small 5.9% weight. Cut if $560 breaks to stop bleed. | 0–8% |
| META | Avoid | `bannedSymbols: ["META"]` active. | 0% |
| GOOG | Avoid today | Exited July 9. Cooldown expired but no re-entry authorized today. | 0% |
| NVDA | Avoid today | Re-entry deferred. Focus on AVGO for chip exposure. | 0–4% |
| RKLB / SHLD / ARKX / EIS / QTUM / GLD | Avoid | Weak or no edge. | 0% |

## Priority Actions
1. **HOLD all positions.** No new orders this cycle. Gross exposure 82.9% is within 80–85% band; Friday + SK Hynix debut + Iran headline risk = no new risk today.
2. **HOOD protective stop:** SELL 2 shares if price drops below $110.00 with limit $109.50. Rationale: lock in bulk of 15% gain on volatile name into weekend.
3. **AVGO protective stop:** SELL 1 share if price drops below $385.00 with limit $384.50. Rationale: protect chip gain if SK Hynix debut sparks sector rotation.
4. **SOXX defensive cut:** SELL 1 share if price drops below $560.00 with limit $559.50. Rationale: stop loss on poorly timed July 9 add.
5. **No same-day round trips.** Anti-churn code guard now active in both factory and CLI.
6. **Cash reserve:** ~$1,670 (~17.1%). Reserve for Monday pullback opportunities (AVGO < $390, HOOD < $105, QQQ < $710) — requires explicit hourly authorization.
7. **Event detector fix verified:** `loadLastSnapshot` now async; `priorTimestamp` should populate correctly on next run.
8. **Repo integrity:** .gitignore restored. All ignored paths unstaged. Clean.

## Macro Themes
- **Actionable now:** SK Hynix debut today = semiconductor sector volatility. We are exposed via AVGO + SOXX. AVGO stop raised to $385; SOXX cut at $560. Do not add to semis until debut volatility settles.
- **Worth monitoring:** Fed minutes divide = rate uncertainty into July FOMC. Could pressure growth multiples.
- **Worth monitoring:** US-Iran renewed tensions pre-market. Weekend headline risk is real; keeping elevated cash is prudent.
- **Interesting but not actionable yet:** QTUM quantum +65% YTD but thin. META AI cost breakthrough (stock +6% today) — banned for us.

## Data / Process Notes
- **Alpaca CLI** working. Concentration cap guard active.
- **Universal factory guard** now includes: HARD_LOCK, trading lock file, universe gate, short-sale block, bannedSymbols, todo.md no-buy parser, concentration cap, **and anti-churn same-day round-trip guard**.
- **FMP** disabled (no API key). Yahoo Finance chart API v8 used as fallback.
- **News access:** Yahoo Finance RSS feeds are primary actionable source.
- **Alpaca `get-latest-price` bars** timestamps at 13:34Z, current within 15 minutes.
- **Day-trade status:** 0/3. Clean slate.
- **SOXX liquidity:** 18 trades, 1,148 vol at 13:34Z — thin, limit orders only.
- **AVGO liquidity:** Healthy at 28 trades, 1,643 vol in latest 10-min bar.
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
- **News access in workspace is severely limited.** Yahoo Finance RSS is the primary actionable source.
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

## Prior Tactical Executions (Key Events Since May 29)
- **2026-06-15:** COMPLETE LIQUIDATION — sold 5 QQQ @ $742.94, 3 GOOG @ $367.41, 3 NVDA @ $211.90 (market orders 3:22 PM ET). Then rebought 5 QQQ @ $743.45, 3 GOOG @ $368.71, 3 NVDA @ $212.04 (3:11 PM ET — same day, causing 3 day trades). **Catastrophic churn.**
- **2026-06-23:** COMPLETE LIQUIDATION — sold 5 QQQ @ $715.94, 2 AVGO @ $381.95, 2 VOO @ $676.13, 1 NVDA @ $202.15, 1 SOXX @ $609.77.
- **2026-06-26:** COMPLETE LIQUIDATION — sold 6 QQQ @ $704.03, 2 VOO @ $668.74, 3 AVGO @ $368.08.
- **2026-06-29:** Rebuilt core — bought 5 QQQ @ $715.38, 2 VOO @ $676.46, 3 AVGO @ $371.95.
- **2026-06-30:** Bought 10 HOOD @ $101.50.
- **2026-07-01:** RKLB GTC buy 5 @ $98 filled (from June 30 order).
- **2026-07-02:** Trimmed HOOD 5 shares @ $114.51 (left 5 shares).
- **2026-07-06:** Sold 5 RKLB @ $93.25 (full exit). Bought 1 QQQ @ $721.94.
- **2026-07-08:** Bought 1 GOOG @ $356.77.
- **2026-07-09:** SOXX limit buy 1 @ $589.47 filled. GOOG stop triggered — sold 1 @ $348.97. All GTC orders cancelled post-close.
