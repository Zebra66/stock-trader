# Tactical Todo For Next Execution
*Updated 2026-05-16 (Saturday). Next session: Monday 2026-05-18 regular hours.*

## Current State
- **Regime:** neutral
- **Live book:** QQQ 6, SOXX 3, GOOG 3, XLK 8, NVDA 3, AVGO 2
- **Equity:** $10,030.93 | **Cash:** $135.41 | **Buying power:** $10,166.34
- **Gross exposure:** 98.65% of equity
- **Daytrade count:** 3 | **PDT flag:** false
- Portfolio +0.31% since baseline vs SPY +2.95% — **off track, trailing by 2.64pp**

## Monday Hard Rules
1. **UNIVERSE CHECK — BEFORE ANY BUY ORDER:** verify the symbol is in the approved universe (AVGO, EIS, GLD, GOOG, HOOD, META, NVDA, QQQ, QTUM, RKLB, SHLD, SOXX, VOO, ARKX). If NOT in the universe, **REJECT the order immediately** and log the violation.
2. **24-HOUR COOLDOWN:** Do NOT re-buy any symbol that was sold within the previous 24 hours unless a fresh hourly note explicitly authorizes re-entry.
3. **ONE TRADE PER CYCLE** unless this todo explicitly authorizes more.
4. **NO SAME-DAY ROUND TRIPS** in any symbol.
5. **DO NOT average down.** Adds only to winners or on confirmed breakout.
6. **NO discretionary buys Monday** except for the ranked deployment queue items below, and only after XLK is fully gone and cash is at least 10% of equity.
7. If a broker quote differs from Yahoo Finance by >0.5%, **do nothing** and log stale-data conflict.
8. If regular hours are not active, convert to **next-session** triggers; do NOT send pre-market/after-hours equity orders.

## Ranked Execution Priority for Monday
1. **SELL XLK 8 shares at market open** — compliance breach, outside universe. This is the ONLY mandatory order for the first tactical cycle Monday.
2. **HOLD all approved names** unless a stop level below is breached.
3. **Trim SOXX 1 share if SOXX breaks $500.00** on a 5-minute close — reduce semi concentration if weakness continues.
4. **No other sells Monday** unless a hard stop is hit.
5. **No buys Monday** except if an exceptional dip-buying opportunity appears in GOOG, QQQ, or GLD AFTER XLK is sold and cash is confirmed >$1,000.

## Stop-Loss / Protective Levels
- **QQQ** — SELL 1 share if price breaks **$700.00** on a 5-minute close. Otherwise HOLD. Current ref ~$708.93.
- **GOOG** — SELL 1 share if price breaks **$389.00** on a 5-minute close. Otherwise HOLD. Current ref ~$393.32.
- **SOXX** — SELL 1 share if price breaks **$500.00** on a 5-minute close. Otherwise HOLD. Current ref ~$508.52.
- **NVDA** — SELL 1 share if price breaks **$220.00** on a 5-minute close. Otherwise HOLD. Current ref ~$225.32.
- **AVGO** — SELL 1 share if price breaks **$420.00** on a 5-minute close. Otherwise HOLD. Current ref ~$425.19.

## Post-Cleanup Deployment Queue
*Only valid after XLK is fully exited, cash >$1,000, and this note is updated by a later hourly run.*
1. **GOOG** — quality AI/cloud, best Friday relative strength. Add 1 share if it reclaims $395 with volume.
2. **QQQ** — core liquid growth. Add 1 share on a clean dip to ~$695 with market stabilization.
3. **GLD** — inflation/fear hedge. Add 1–2 shares if SPY drops below $730 and yields keep climbing.

## Explicit No-Trade Conditions
- **Do NOT buy XLK, MSFT, AAPL, TSLA, or any symbol outside the universe.**
- **Do NOT buy any symbol that was sold today or yesterday** unless hourly note explicitly overrides.
- **Do NOT chase NVDA or SOXX into weakness** — they are already overweight and were the weakest sleeve Friday.
- **Do NOT add to any position if gross exposure is >90%** after the XLK sale.
- **Do NOT submit more than one order per tactical cycle** unless a protective stop is triggered in a separate symbol.
- **Do NOT place orders if broker quote trade count is <10** for the target symbol — confirm with Yahoo Finance first.

## Weekend State
- Market closed (Saturday). No regular-session trading possible.
- All directives above convert to **next regular-session triggers** for Monday 2026-05-18 open.
- If the market opens with a large gap down (>2% on QQQ or SPY), suspend all new buy triggers and re-read `memory/MEMORY.md` for updated guidance before acting.

## This Cycle — 2026-05-16
- **No orders placed.** Market closed.
- **Next expected action:** Monday 2026-05-18 market open — sell XLK 8 shares.
