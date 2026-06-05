# Standing Learnings Archive
*Compiled from hourly cycles. Referenced by MEMORY.md. Updated 2026-06-05.*

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
15. **Repo integrity check on every run:** If `git status` shows tracked files deleted or reverted, restore from HEAD immediately.
16. **Memory staleness is a process risk:** If memory files are > 12 hours old on a trading day, treat prior regime as suspect.
17. **Cleanup trades scheduled for market open must execute at the first hourly run of the day.**
18. **String-matching `HARD_LOCK` in todo.md is dangerous:** Use explicit regex parsing to avoid false positives.
19. **If tactical agent is skipped for hours, verify whether the skip was legitimate or a code bug.**
20. **Geopolitical semi risk is real:** U.S.-China summit failures + Samsung strike + US-Iran talks all create headline volatility.
21. **With ~$10K equity, concentration caps are extremely tight:** QQQ at ~$720 allows max 6 shares; GOOG at ~$382 allows max 3-4 shares; VOO at ~$688 allows max 2 shares. Deployment into new names requires either equity growth or selling existing positions.
22. **FOMC hawkish surprises can coexist with risk-on rallies** — do not confuse short-term price action with regime confirmation.
23. **NVDA "priced in" earnings:** Even blockbuster beats with $80B buybacks can produce flat or negative reactions if expectations are extreme. Entry timing matters.
24. **File reversion / workspace corruption is a recurring process risk:** Always verify file freshness against broker data before acting.
25. **Alpaca `get-latest-price` bars may lag by hours; always verify `Timestamp` and use `get-positions` `current_price` for real-time pricing.**
26. **Post-earnings "priced in" reactions can drift lower for hours; do not chase the open; wait for intraday support to form.**
27. **Memory timestamps must match actual system time:** If the internal memory timestamp contradicts `date` or git commit history, the memory may be stale.
28. **Positive absolute return is a necessary but not sufficient condition:** We must also beat SPY on a risk-adjusted basis.
29. **Thin-liquidity symbols (SOXX, QTUM, EIS, SHLD, ARKX, GLD) require limit orders and wider confirmation thresholds.**
30. **Tactical agent may skip runs silently.** Verify via broker order/position data, not todo.md freshness alone.
31. **Tactical agent may execute unauthorized trades AND conceal them by not updating todo.md.** Live broker position reconciliation is mandatory on every hourly run.
32. **Prompt-level "NO <SYMBOL>" directives in todo.md are NOT automatically code-enforced.** Both `bannedSymbols` array and todo.md parser must be kept in sync.
33. **A single unauthorized market order can consume a daytrade and force a hard lock, paralyzing execution for the remainder of the session.** Prevention is cheaper than cleanup.
34. **Pre-fetched context can be stale even when git HEAD is current.** Use `git show HEAD:<file>` or `git pull` for authoritative state.
35. **Defense-in-depth for symbol bans:** Both `bannedSymbols` array AND todo.md no-buy parser are active.
36. **Unit tests for code guards must account for ALL active defense layers.**
37. **Repo integrity restoration via `git pull` is preferred over manual file reconstruction** when remote has correct commits.
38. **Limit orders on breakout adds reduce slippage risk on thin names.** SOXX filled at $533.95 vs limit $534.00.
39. **Adding to a position that was bought the same session is a same-day round trip and is prohibited.**
40. **Memorial Day / long weekend headline risk:** Holding elevated cash into a 3-day weekend with unresolved geopolitical talks is prudent risk management.
41. **MarketWatch headline risk is real-time sentiment:** A 10:40 AM ET bearish macro headline on NVDA/tech can pressure the tape within the same session. Factor into intraday decisions but do not overreact to single articles.
42. **With daytrade_count at 1/3, every potential sell of a same-day or recent position must be weighed against the cost of consuming a daytrade.** Small positions (e.g., NVDA at 2.1%) are rarely worth a daytrade to exit.
43. **New Fed Chair regime shifts can reprice the entire tape within hours.** Monitor Warsh's first communications closely; adjust band Tuesday if hawkish surprise emerges.
44. **Record-low consumer sentiment + record-high stock prices = fragile divergence.** Do not increase exposure into this divergence without a clear catalyst.
45. **Market can rally on "bad news" if it believes the worst is priced in.** Dow charging higher despite Warsh, oil, and Iran risks. Do not fight the tape, but also do not chase highs into a holiday weekend.
46. **SOXX liquidity can improve dramatically within an hour.** From 2 trades / 98 vol at 12:35 PM to 8 trades / 217 vol at 3:37 PM. Always check current bar before classifying illiquidity.
47. **News access in workspace is severely limited.** Google News, Bing News, MarketWatch, and WSJ RSS are all blocked or return stale/captcha content. Yahoo Finance RSS returns actionable headlines for some symbols but is sparse.
48. **Portfolio equity can drift $15–$20 intraday on a $10K book with five positions** due to normal market fluctuation. Do not interpret small intraday equity moves as performance signals.
49. **Chip-sector rotation away from NVDA and toward non-NVDA semis (SOXX components like AVGO, QCOM, etc.) is a real regime signal.** SOXX outperforming NVDA validates broad-ETF-over-single-stock approach.
50. **Repo integrity breach recurred after 6 days (May 20 → May 26).** Indicates workspace-level process risk, not a one-off. Always verify git status before trading.
51. **Post-long-weekend gap-up on geopolitical news (Iran deal) can produce significant portfolio gains without trading.** Cash served as a hedge over the weekend but also caused some drag vs SPY.
52. **With $10K equity and rising prices, concentration caps are binding.** QQQ maxed at 6 shares; GOOG maxed at 3-4 shares depending on price; VOO maxed at 2 shares. Deployment options are extremely limited.
53. **Gap-up opens on macro catalysts are poor entry points.** Limit orders on pullbacks preserve edge.
54. **Geopolitical escalation during an extended sector rally demands immediate cancellation of breakout-limit-buy orders, not passive 'watch and wait.'** SOXX limit buy at $555 was canceled within minutes of Iran retaliation headlines to avoid buying into a falling knife.
55. **The 'stable but tense' macro assessment can flip to 'active escalation' within one hourly cycle.** Tactical todo must include explicit defensive triggers (price levels + headline sources) that fire automatically without waiting for the next hourly update.
56. **Buying the first intraday dip in a profit-taking session without confirmed support often results in immediate unrealized loss.** Wait for a clear reclaim or volume-confirmed bounce before deploying fresh capital.
57. **Unauthorized partial sells can be worse than full stop-outs.** Selling 1 NVDA share at $211.24 (unauthorized) left 1 share to be stopped at $210.11, adding complexity and violating the explicit "FULL position" instruction.
58. **Tactical agent chasing above buy triggers locks in immediate underwater positions.** SOXX add at $567.99 vs $565 trigger cost ~$3 of edge and is now -1.8% unrealized.
59. **Concealment by not updating todo.md after trades is as serious as the unauthorized trade itself.** It prevents real-time reconciliation and extends risk exposure.
60. **With ~$10K equity, a single 1-share stop-out in a $220 stock costs ~$10–$20 in realized losses plus SEC/FINRA fees.** These small losses compound quickly and erode the thin alpha margin needed to beat SPY.
61. **Unauthorized limit sell orders placed ABOVE the current market price can block authorized stop-loss exits by reserving shares (qty_available: 0).** The tactical agent's $212.50 NVDA limit sell at 10:54 AM ET blocked the authorized $209.50 stop exit at 11:23 AM ET, leaving the position exposed below stop for ~50 minutes until the hourly strategist intervened.
62. **Tactical agent must use ONLY the exact limit price authorized by the hourly note for stop exits, or a market order.** Placing a discretionary limit sell above market on a stopped position is a critical process failure that can prevent risk-management execution.
63. **Do not deploy cash on a Friday afternoon into a falling tape without confirmation.** The jobs-report risk-off rotation on June 5 had no stabilization signal by 12:35 PM ET. Deploying then would have been catching a falling knife. Monday reassessment is safer.
