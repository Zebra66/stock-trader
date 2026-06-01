---
name: trading-best-practices
description: Daily aggressive trading best practices — quantitative rules, proven formulas, and ruthless risk management to maximize short-term returns. No vague advice; only math and executable rules.
---

# Aggressive Daily Trading Protocol

Execute with discipline. Every decision is a formula. Emotion is a bug.

---

## 1. Capital Preservation = Offense

**Rule:** If you lose 50%, you need a 100% gain to break even. If you lose 10%, you need 11%.

**Maximum Risk Per Trade**
```
Risk$ = AccountBalance * 0.02
PositionSize = Risk$ / (EntryPrice - StopLossPrice)
```
- Never risk more than **2% of account balance** on a single trade.
- Aggressive traders may use **1.5%–2%**; never exceed 2%.
- If you have 3 open positions, total portfolio heat must not exceed **6%**.

**Daily Loss Limit (Circuit Breaker)**
```
MaxDailyLoss = AccountBalance * 0.06
```
- Hit it? **Stop trading for the day.** Close all positions. Walk away.

---

## 2. The R-Multiple Framework

Every trade is measured in **R** = the amount risked.

```
Profit = R-Multiple * Risk$
```

**Target Distribution (per 100 trades):**
| R-Multiple | Count | P&L Contribution |
|---|---|---|
| -1R (loss) | 40 trades | -40R |
| +1R to +2R | 30 trades | +45R |
| +3R to +5R | 20 trades | +80R |
| +10R (home run) | 10 trades | +100R |
| **Net** | 100 trades | **+185R** |

**Rule:** One +10R trade per month pays for 10 -1R losses. Cut losers fast so you survive to catch the +10R.

---

## 3. Expected Value (EV) — The Only Filter

Do not take a trade unless:

```
EV = (WinProbability * AvgWin$) - (LossProbability * AvgLoss$)
EV > 0
```

**Minimum viable setup:**
```
WinRate * Reward : (1 - WinRate) * Risk  >  1
```

**Practical thresholds:**
- If win rate is 40%, minimum reward:risk = **1.5:1**
- If win rate is 50%, minimum reward:risk = **1:1** (but aim for 2:1)
- If win rate is 30%, minimum reward:risk = **2.5:1**

**Aggressive shortcut:** Only take trades with a **2:1 reward:risk minimum**, ideally **5:1**.

---

## 4. Stop Losses — Non-Negotiable

**Hard Rules:**
1. Set stop loss **before** you set target.
2. Never move a stop loss to increase risk.
3. Trailing stops only move in your favor.

**ATR-Based Stop (Volatility-Adjusted)**
```
StopDistance = ATR(14) * Multiplier
Multiplier = 2.0 (tight) to 3.0 (normal)
StopPrice = EntryPrice - StopDistance  (for longs)
```

**Time Stop**
- If a trade does not move in your favor within **3–5 bars** (or 30–60 min intraday), exit at breakeven or small loss.
- Money tied up in dead trades is money not catching runners.

---

## 5. Position Sizing Algorithms

### Fixed Fractional (Base)
```
Shares = Floor( (Account * Risk%) / (Entry - Stop) )
```

### Kelly Criterion (Aggressive Edge Sizing)
```
Kelly% = (WinRate / LossRatio) - (LossProbability / WinRatio)
f = p - (q / b)
where:
  p = win probability
  q = 1 - p
  b = avg win / avg loss
```

**Practical Kelly:** Use **Half-Kelly** to reduce variance.
```
HalfKelly = Kelly% / 2
```

**Example:** Win rate 45%, avg win $300, avg loss $150 → b = 2.0
```
Kelly = 0.45 - (0.55 / 2.0) = 0.175  →  17.5% of bankroll per trade
HalfKelly = 8.75% per trade
```

**Warning:** Full Kelly is optimal for growth but causes ~50% drawdowns. Half-Kelly is aggressive yet survivable.

---

## 6. Entry Criteria — Confirmation Only

**Jesse Livermore Rule:** *"Don't trust your opinion until the action of the market itself confirms it."*

**Aggressive Entry Checklist (all must be true):**
1. Stock is making a **new high** (long) or **new low** (short) after a normal reaction.
2. Volume on the breakout is **> 150% of 20-day average volume**.
3. The broader market index is moving in the same direction (long in bull, short in bear).
4. Reward:risk ≥ 2:1.
5. No major economic news / earnings within 30 minutes.

**Pyramiding (Adding to Winners)**
```
Initial Position = 50% of intended size
Add 1 = +25% when up +1R
Add 2 = +25% when up +2R
Never add if price returns to entry or below.
```

---

## 7. Exit Rules — Let Winners Run

**Profit Targets (Tiered Exit):**
```
Target 1 (50% position) = +2R
Target 2 (25% position) = +4R
Target 3 (25% position) = Trail with ATR(10) * 1.5
```

**Trend Exhaustion Signals (Close Remainder):**
- Volume divergence: price makes new high, volume < prior swing volume
- Momentum divergence on RSI or MACD
- Break of the 20-period moving average on a daily chart

**Paul Tudor Jones Rule:** *"I'm always thinking about losing money as opposed to making money, but when a trade works, maximize it."*

---

## 8. Volatility Targeting (Portfolio Level)

Normalize your portfolio risk so drawdowns are predictable.

```
TargetVolatility = 15% annualized  (aggressive)
CurrentVolatility = StdDev(returns, 20) * Sqrt(252)
PositionScalar = TargetVolatility / CurrentVolatility
AdjustedPosition = BasePosition * PositionScalar
```

**Rule:** When volatility spikes (VIX > 30, ATR doubles), reduce position size by 50% or stand aside.

---

## 9. The Daily Routine (Pre-Market)

1. **Overnight scan:** Identify 5–10 stocks with > 2x average volume and > 3% pre-market move.
2. **Set alerts** at pivotal points (yesterday's high/low, key moving averages).
3. **Write down:** Entry, Stop, Target, R-multiple for every planned trade.
4. **Check economic calendar:** Avoid first 15 min after major reports (NFP, CPI, FOMC).
5. **Mental reset:** Yesterday's P&L is zero. Today is a new sample.

---

## 10. Psychology = Systematic Elimination of Bias

**Prohibited Behaviors (Instant Violation):**
- Averaging down (adding to a losing position)
- Moving stop loss further away
- Revenge trading after a loss
- Trading without a written plan
- Risking > 2% per trade

**Stanley Druckenmiller:** *"It takes courage to be a pig... when you're right on something, you can't own enough."*

**Jesse Livermore:** *"There is nothing like losing all you have in the world for teaching you what not to do."*

---

## 11. Performance Review (Weekly)

Track these metrics in a spreadsheet:

| Metric | Formula | Target |
|---|---|---|
| Win Rate | Wins / Total Trades | > 40% |
| Average R | Sum(R) / Total Trades | > +0.5R |
| Profit Factor | Gross Profit / Gross Loss | > 1.5 |
| Sharpe Ratio | Mean(Return) / StdDev(Return) * Sqrt(252) | > 1.0 |
| Max Drawdown | Peak - Trough / Peak | < 20% |
| Recovery Factor | Net Profit / Max Drawdown | > 3.0 |

**Rule:** If Profit Factor < 1.3 over 30 trades, stop and audit your edge. Do not trade until the system is fixed.

---

## 12. Summary: The Aggressive Trader's Creed

1. **Cut losses at -1R. No exceptions.**
2. **Let winners run to +5R or beyond.**
3. **Risk 2% max per trade, 6% max per day.**
4. **Only enter on confirmation, never anticipation.**
5. **Add to winners, never to losers.**
6. **If EV ≤ 0, do not trade.**
7. **If volatility doubles, size halves.**
8. **After 3 losses in a row, reduce size by 50%.**
9. **After 2 wins in a row, increase size by 25% (pyramid).**
10. **Every day starts at zero. Process > outcome.**
