# Trading Ledger

Per-cycle summary of the hourly and tactical agent findings and decisions.
Format: `<YYYY-MM-DD : HH:MM> : [mode] TL;DR`, followed by up to 5 bullets.
2026-05-14 : 10:38 : [hourly] Stayed offensive catch-up, refreshed research, and rebuilt the deployment queue because the book is profitable but still badly underexposed.
- Live broker data shows only GOOG 1, NVDA 1, and QQQ 6 with 48.3% gross exposure; portfolio is +2.35% since the fixed 2026-05-04 baseline versus SPY +3.90%, so cash drag remains the dominant failure mode.
- Fresh capital is queued into SOXX, GOOG, AVGO, and NVDA on explicit breakout levels to lift gross exposure back toward 60-68% without breaching the QQQ or single-name concentration caps.

2026-05-14 : 10:30 : [tactical] Held positions; QQQ stayed above the 04.50 stop so no trade was triggered.
- Live QQQ price was 718.26, which did not meet the sell condition.
- Positions and account were checked; no authorized buy or sell levels were hit.

2026-05-14 : 10:20 : [tactical] No conditions met; held QQQ because it stayed above the sell trigger.
- QQQ last traded at 718.59, above the 704.50 stop.
- No other actionable orders were present in memory/todo.md.

2026-05-14 : 10:10 : [tactical] Sold GOOG, NVDA, SOXX, and QTUM as their sell thresholds were hit; held QQQ.
- GOOG, NVDA, SOXX, and QTUM were all above their respective stop/trim levels at the time of execution.
- QQQ remained above its 04.50 stop, so no QQQ order was placed.

2026-05-14 : 09:50 : [tactical] Bought GOOG and NVDA on breakout signals.
- GOOG traded above the hourly buy threshold, so a 1-share market buy was submitted.
- NVDA traded above the hourly buy threshold, so a 1-share market buy was submitted.

2026-05-14 : 09:41 : [tactical] No conditions met; held all positions.
- QQQ traded at 717.09, above the 704.50 sell trigger.
- GOOG at 395.18, NVDA at 230.745, SOXX at 528.88, and QTUM at 146.72 were all outside their authorized trade levels.

2026-05-14 : 09:39 : [hourly] Stayed offensive catch-up, kept winners, and redirected fresh deployment to GOOG/NVDA because QQQ is near its cap.
- Portfolio is +2.33% since the fixed 2026-05-04 baseline versus SPY +3.76%, so the book remains off track because of earlier cash drag.
- Gross exposure improved to 63.7%, which is back inside the target band; new risk should only go to GOOG or NVDA on clean breakouts, not QQQ.

2026-05-14 : 09:33 : [tactical] Submitted market buys for SOXX and NVDA to reduce cash drag and lift exposure toward the 60-70% target.
- Checked live account, positions, and prices during regular session; SOXX and NVDA conditions were met.
- Placed SOXX 1 share, NVDA 1 share, and a second NVDA 1 share because cash remained above the deployment threshold.
- No sells were made; QQQ, GOOG, and QTUM remain held.

2026-05-13 : 20:45 : [tactical] No trades executed; market was outside regular session hours.
- Live prices were checked for SOXX, NVDA, QQQ, GOOG, QTUM, and AVGO.
- SOXX and NVDA buy conditions remain pending for the next regular-session cycle.

2026-05-13 : 12:01 : [hourly] Shifted to offensive catch-up as semis regained leadership and the still-underdeployed book remained behind SPY.
- Broker-confirmed book: $10,182.19 equity, $4,705.34 cash, 53.8% gross exposure; portfolio +1.82% since inception vs SPY +3.05%.
- Recent execution improved: 1D +0.45% vs SPY +0.24% and 1W +1.53% vs SPY +0.81%, but early cash drag still dominates.
- Refreshed tactical plan: SOXX first, NVDA second, AVGO conditional third; QQQ stays hold-only due to 41.9% concentration.
- FMP remained unavailable, so Yahoo Finance chart API was used for multi-timeframe returns; Google News RSS failed again and Bing fallback coverage was sparse.

2026-05-12 : 15:02 : [hourly] Confirmed the book still trails SPY, kept a neutral stance, and refreshed semis-first reclaim triggers with tighter spread safeguards.
- Direct Alpaca REST fallback confirmed $10,098.41 equity, $4,705.34 cash, and 53.4% gross exposure after Alpaca CLI and FMP CLI timed out again.
- Portfolio is +0.98% since inception versus SPY +2.54%, so cash drag remains the dominant failure mode.
- Semiconductors remain the strongest 1m-6m sleeve, but live tape was still digesting a sharp intraday pullback rather than offering a clean breakout.
- Refreshed the tactical queue to SOXX -> NVDA -> AVGO, with AVGO gated by abnormal-spread safeguards and QQQ remaining hold-only.

2026-05-12 : 13:03 : [hourly] Restored live visibility, confirmed the book still trails SPY, and shifted to confirmation-only tech adds after a sharp intraday pullback.
- Direct Alpaca REST succeeded after Alpaca CLI timeouts; live equity is $10,047.82 with 53.2% gross exposure and 47% cash.
- Portfolio remains positive at +0.48% since inception but trails SPY at +1.60%, so cash drag is still the dominant failure mode.
- Semis and AI remain the strongest medium-term sleeves, but live tape was risk-off with QQQ down about 2.2% and SOXX down about 6.7% at refresh time.
- Reactivated the tactical queue as SOXX -> NVDA -> AVGO on reclaim confirmation while keeping QQQ and QTUM hold-only.

2026-05-12 : 12:55 : [tactical] Fresh broker data returned, but the session was already closed, so I held QQQ/GOOG/QTUM/SOXX and kept the next-session queue intact.
- Current book is QQQ 6, GOOG 1, QTUM 2, SOXX 1 with about $10,067.62 equity and 53.3% gross exposure.
- No regular-session equity orders were authorized after the close.
- SOXX remains the first re-entry candidate, followed by AVGO and GOOG, once the next open confirms a live window.
- EIS looked stale on the trade print, so it was monitored only.

2026-05-11 : 12:04 : [hourly] Reconciled the live book, stayed offensive catch-up, and redirected fresh deployment from QQQ to SOXX/AVGO because QQQ is already overweight.
- Portfolio is +2.08% since inception but still trails SPY at +2.72%, so cash drag remains the dominant problem.
- Live account is $10,207.68 equity with 53.9% gross exposure; target band is now 58-66%.
- QQQ is already about 42% of equity, so it is hold-only this hour unless a future run writes an explicit override.
- Primary tactical queue is SOXX above 531.40, then AVGO above 431.20, then GOOG on a 392.50 reclaim.

2026-05-11 : 12:07 : [tactical] No trade: SOXX stayed just below its breakout trigger, so the book remained held.
- Authoritative live holdings are QQQ 6, GOOG 1, QTUM 2, SOXX 1.
- Gross exposure is 53.9%, below the 58-66% target band but QQQ is already hold-only.
- Alpaca and Yahoo quotes were fresh and aligned; no symbol-specific adverse catalyst forced action.

2026-05-11 : 12:33 : [tactical] No trade: SOXX, AVGO, and GOOG all stayed below their live buy triggers, so cash drag remains but risk stayed disciplined.
- SOXX printed 530.93 versus the 531.40 breakout threshold.
- AVGO at 429.23 and GOOG at 390.97 also missed their confirmation levels.
- Alpaca and Yahoo quotes stayed aligned and no adverse catalyst forced action.

2026-05-11 : 16:25 : [tactical] No trade: market was closed and the live after-hours quotes did not meet the regular-session triggers.
- Live holdings remain GOOG 1, QQQ 6, QTUM 2, SOXX 1; gross exposure is still about 53.9%.
- SOXX stayed below 533, GOOG did not reclaim 391 in regular-session conditions, and NVDA did not reach its breakout band.
- Kept the queue unchanged for the next session: SOXX → GOOG → NVDA.

2026-05-11 : 16:26 : [hourly] Data blackout: preserved the last confirmed book and disabled trading until fresh data returns.
- Broker refresh and market-data refresh both failed across primary and fallback paths, so this run used the last confirmed 11:57 ET state only.
- Last confirmed live holdings remain QQQ 6, GOOG 1, QTUM 2, SOXX 1 with $10,207.68 equity, $4,705.34 cash, and 53.9% gross exposure.
- The portfolio is still positive in dollars but trails SPY since inception, so cash drag remains the dominant issue once data visibility is restored.
- All prior tactical entry/exit thresholds were invalidated as stale and replaced with no-trade / hold-only instructions.

2026-05-11 : 17:43 : [tactical] No trade: the run was already in blackout mode, so I preserved the last confirmed book.
- Market close and data-blackout directives made all prior breakout/reclaim triggers stale.
- Hold-only book remains QQQ 6, GOOG 1, QTUM 2, SOXX 1 at 53.9% gross exposure.
- Next-session queue stays SOXX → AVGO → GOOG after fresh data returns.

