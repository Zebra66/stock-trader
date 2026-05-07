# Tactical Todo For Next Execution
*Reset 2026-05-07 by interactive review to keep only live execution directives.*

## Mandatory First Step
- [ ] Refresh **Alpaca account**, **positions**, **clock**, and **latest prices** before doing anything else.
- [ ] Treat the refreshed Alpaca state as authoritative. If it disagrees with any old note in `memory/MEMORY.md` or this file, overwrite the stale state first.

## Regime And Exposure Rules
- [ ] Current regime is **offensive catch-up** unless fresh evidence shows a true risk-off tape.
- [ ] Use **account equity** as the sizing base. Do **not** size from raw margin buying power.
- [ ] If the market is **closed**, place **no after-hours or pre-market equity orders**.
- [ ] During regular hours, if the tape is orderly and gross exposure is still **below 45%**, default to executing the top-ranked confirmed add rather than preserving cash.
- [ ] Target gross exposure for the current regime is **45-60%**.
- [ ] **No leverage.**
- [ ] **Do not average down.**
- [ ] Use **marketable limit orders** when spreads are not very tight.
- [ ] Skip any trade where expected edge to the first trim / exit is not clearly at least **3x** estimated total round-trip friction.
- [ ] If a quote is stale, has very low trade count, or looks abnormal, require a **second source** before trading.
- [ ] If a quote is healthy and liquid during regular hours and the trigger is already confirmed, do **not** invent extra delay.
- [ ] After any fill or suspected fill, refresh **positions** before considering another order.
- [ ] At most **one trade per tactical cycle**, but do **not** treat that as a ban on later same-session adds if the hourly target exposure is still unmet.

## Ranked Fresh Capital Queue
- [ ] **Priority 1: QQQ**
- [ ] **Priority 2: GOOG**
- [ ] **Priority 3: SOXX or AVGO** if semiconductors are clearly leading and concentration remains acceptable.

## Active Buy Conditions
- [ ] **BUY GOOG 1 share** if **QQQ** is already at target or does not confirm cleanly, and **GOOG** clears its refreshed regular-hours trigger with healthy tape and no adverse same-day catalyst.
- [ ] **BUY SOXX 1 share or AVGO 1 share** only if both higher-ranked adds are already satisfied / blocked and semiconductor leadership is clearly stronger than the broad market at that moment.

## Existing Position Rules
- [ ] **HOLD / MANAGE QQQ** — now **4 shares** after today’s add. Do not trim on marginal strength. If exposure is still below target on the next cycle and the tape remains orderly, QQQ stays the first add candidate.
- [ ] **HOLD / MANAGE GOOG** — valid core AI / cloud exposure; do not average down.
- [ ] **HOLD / MANAGE AVGO** — valid AI infrastructure leader; only add if the hourly regime still needs more exposure after higher-ranked choices.
- [ ] **HOLD / MANAGE SOXX** — valid semiconductor ETF; use for exposure only after the higher-ranked catch-up candidates.
- [ ] **HOLD / MANAGE QTUM** — hold-only unless a refreshed regular-hours stop fails or a later hourly cycle explicitly upgrades it.

## Avoid / Low-Priority Names
- [ ] **AVOID META, HOOD, SHLD, ARKX, and EIS** for fresh capital unless a later hourly review explicitly upgrades them.
- [ ] **AVOID GLD** unless a true risk-off regime emerges and the hourly strategist explicitly authorizes hedge posture.
- [ ] **AVOID VOO** while **QQQ** remains the preferred broad catch-up vehicle.

## No-Trade Conditions
- [ ] If the market is closed, do nothing.
- [ ] If the tape turns disorderly, do nothing.
- [ ] If a same-day symbol-specific catalyst materially conflicts with the trigger, do nothing and log the conflict.
- [ ] If the live book is already inside the hourly target exposure band and no top-ranked setup is confirmed, do nothing.

## Update Rules
- [ ] Keep this file **short and current**. Remove completed triggers instead of piling on old cycle logs.
- [ ] Put detailed history in `memory/intraday_execution_log_2026-05-05.md` or a new dated log, not here.
