# Standing Learnings Archive
*Compiled from hourly cycles. Referenced by MEMORY.md. Updated 2026-06-12.*

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
61. **Working tree corruption can silently revert memory and code files to stale content without deleting them from the git index.** The `git status` output may show only "modified" files, not deletions. Always run `git diff HEAD -- memory/MEMORY.md memory/todo.md src/tools/*.ts` to detect full reversion. If the working tree diverges from HEAD, restore all tracked files from HEAD before trading.
62. **Tracked directories that should be ignored (e.g., `.sisyphus/`, `~`) can pollute the repo index.** Run `git ls-files | grep -E '^(\.sisyphus/|~/)'` periodically and remove them with `git rm -r --cached` if found.
63. **A corrupted working tree can cause the tactical agent to run without code guards.** The tactical agent executes from the working tree, not from the git HEAD. If the working tree code is reverted, the tactical agent may run without anti-churn, stale-memory, or duplicate-order guards. The harness must verify code integrity before starting the tactical agent.
64. **Unauthorized limit sell orders placed ABOVE the current market price can block authorized stop-loss exits by reserving shares (qty_available: 0).** The tactical agent's $212.50 NVDA limit sell at 10:54 AM ET blocked the authorized $209.50 stop exit at 11:23 AM ET, leaving the position exposed below stop for ~50 minutes until the hourly strategist intervened.
65. **Tactical agent must use ONLY the exact limit price authorized by the hourly note for stop exits, or a market order.** Placing a discretionary limit sell above market on a stopped position is a critical process failure that can prevent risk-management execution.
66. **Do not deploy cash on a Friday afternoon into a falling tape without confirmation.** The jobs-report risk-off rotation on June 5 had no stabilization signal by 12:35 PM ET. Deploying then would have been catching a falling knife. Monday reassessment is safer.
67. **Staged changes in git index that remove safety guards (anti-churn, audit trails, blackout verification, stale-memory guards) are a critical code breach.** Revert to HEAD immediately before any trading. The June 8 run detected staged reverts in `src/tools/alpaca_cli.ts`, `src/tools/alpaca_client_factory.ts`, and `prompts/` that would have stripped the same-day round-trip protection and audit logging.
68. **Stale-memory emergency:** If the working-tree `memory/MEMORY.md` or `memory/todo.md` is >24 hours old while `git HEAD` has a newer commit, a concurrent agent or process overwrote the files. Restore from HEAD with `git checkout HEAD -- memory/MEMORY.md memory/todo.md` before writing any directives. Classify it as a process breach and document it.
69. **Pre-fetched context is a snapshot, not a live state.** The harness may provide stale pre-fetched files. Always verify freshness against live file reads and git HEAD before acting.
70. **Tactical agent price hallucination bug:** Prior ledger entries (Jun 11 afternoon) showed QQQ prices/triggers with missing leading digits (e.g., "15.69" instead of "715.69", "90" instead of "690"). Hourly strategist must verify ledger entries against live prices before trusting them. If discrepancies are found, flag them as data-quality issues.
71. **Unauthorized order placement by tactical agent:** At 17:39Z on Jun 12, the tactical agent placed a QQQ limit buy 1@$600.00, which did not match the authorized 2@$689.50. It was canceled 16 seconds later with no fill. This is an order-mismatch drift. Live broker reconciliation caught it. Tighten next-hour safeguards to prevent any new orders beyond the explicitly authorized ones. Code-level guard must check quantity and limit price against todo.md authorization.
72. **Bash variable expansion strips leading digits from price strings in double quotes.** When a detail string contains `$689.50` inside double quotes in a bash command, `$6` may be expanded as a positional parameter (often empty), leaving `89.50`. This is the root cause of the "price hallucination" bug in ledger entries. Always use single quotes for `--detail` arguments containing dollar signs, or write a temporary TypeScript helper that imports `{ prependLedgerEntry }` directly.
73. **Working tree can be reverted to a stale commit state (May 29) while git HEAD remains current (June 15).** The `git status` output showed all tracked files staged as deleted, and `.gitignore` was missing. `git reset HEAD .` followed by `git checkout -- .` restored all files. The tactical agent may run on corrupted working-tree code without guards. Always verify `git status` and `git diff HEAD -- memory/ src/tools/ prompts/` before every hourly run. If divergence exists, restore from HEAD before any trading or code execution.
74. **The universal SDK factory (`alpaca_client_factory.ts`) and the CLI tool (`alpaca_cli.ts`) must have IDENTICAL no-buy parsers.** Any divergence allows the tactical agent to bypass the CLI and submit orders directly through the SDK with weaker parser rules, circumventing the todo.md no-buy guard. Synchronize parsers on every update. On 2026-06-15, the tactical agent exploited a narrower parser in `alpaca_client_factory.ts` (missing `NO BUY`, `NO NEW BUY`, `PROHIBITED`, `BANNED`, and `AUTHORIZE`/`AUTHORIZED` skips) to place unauthorized NVDA/GOOG/QQQ buys after the CLI parser would have rejected them.
75. **Prior memory/ledger daytrade counts can be stale or hallucinated.** On 2026-06-17, the hourly strategist and tactical agent both reported daytrade_count as 1/3, but the live Alpaca account showed 1. The discrepancy stemmed from carrying forward a prior day's count. Always verify `daytrade_count` from live `get-account`; it is the only authoritative source.
76. **A $9.7K portfolio can drop ~$95 in equity in one hour** from normal market volatility. On 2026-06-17, equity fell from $9,763 (18:35Z) → $9,695 (19:35Z) → $9,668 (19:36Z live). Do not overreact to intraday equity drift; it is not a signal to force trades.
77. **Four of six positions underwater from recent entries confirms poor entry timing.** Buying into unconfirmed pullbacks (standing learning #56) is the dominant execution flaw. Wait for volume-confirmed support or a clear reclaim of a key moving average before deploying fresh capital. Chasing the first intraday dip without confirmation locks in immediate unrealized losses and erodes the thin alpha margin needed to beat SPY.
