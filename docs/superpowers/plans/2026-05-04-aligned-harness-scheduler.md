# Aligned Harness Scheduler Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the harness run `hourly` immediately on startup and then on each top-of-hour boundary, while `tactical` runs immediately on startup and then on `:10/:20/:30/:40/:50` wall-clock boundaries.

**Architecture:** Keep `src/harness.ts` as the single scheduler entrypoint, but replace the current heartbeat-plus-last-run logic with two aligned self-rescheduling timers. Add pure exported delay helpers so the wall-clock calculations are testable without starting the harness.

**Tech Stack:** Bun, TypeScript, Bun test

---

### Task 1: Add failing scheduler timing tests

**Files:**
- Create: `src/harness.test.ts`
- Modify: `src/harness.ts`
- Test: `src/harness.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, test } from 'bun:test';
import { getDelayUntilNextHourlyRun, getDelayUntilNextTacticalRun } from './harness';

describe('harness scheduler alignment', () => {
  test('hourly delay aligns to the top of the next hour', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');
    expect(getDelayUntilNextHourlyRun(now)).toBe(52 * 60 * 1000 + 45 * 1000);
  });

  test('tactical delay aligns to the next 10-minute boundary after startup', () => {
    const now = new Date('2026-05-04T09:07:15.000Z');
    expect(getDelayUntilNextTacticalRun(now)).toBe(2 * 60 * 1000 + 45 * 1000);
  });

  test('tactical skips :00 and waits for :10', () => {
    const now = new Date('2026-05-04T10:00:05.000Z');
    expect(getDelayUntilNextTacticalRun(now)).toBe(9 * 60 * 1000 + 55 * 1000);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/harness.test.ts`
Expected: FAIL because `getDelayUntilNextHourlyRun` and `getDelayUntilNextTacticalRun` do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```ts
export function getDelayUntilNextHourlyRun(now: Date): number {
  const next = new Date(now);
  next.setMinutes(0, 0, 0);
  next.setHours(next.getHours() + 1);
  return next.getTime() - now.getTime();
}

export function getDelayUntilNextTacticalRun(now: Date): number {
  const next = new Date(now);
  const currentMinute = next.getMinutes();
  const tacticalMinutes = [10, 20, 30, 40, 50];
  const nextMinute = tacticalMinutes.find((minute) => minute > currentMinute);

  if (nextMinute === undefined) {
    next.setHours(next.getHours() + 1, 10, 0, 0);
    return next.getTime() - now.getTime();
  }

  next.setMinutes(nextMinute, 0, 0);
  return next.getTime() - now.getTime();
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/harness.test.ts`
Expected: PASS

### Task 2: Replace interval-based scheduler with aligned self-rescheduling timers

**Files:**
- Modify: `src/harness.ts`
- Test: `src/harness.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
test('tactical delay rolls over to the next hour when after :50', () => {
  const now = new Date('2026-05-04T09:58:00.000Z');
  expect(getDelayUntilNextTacticalRun(now)).toBe(12 * 60 * 1000);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/harness.test.ts`
Expected: FAIL if rollover logic is wrong.

- [ ] **Step 3: Write minimal implementation**

```ts
function scheduleAlignedRun(name: string, getDelay: () => number, run: () => Promise<void>): void {
  const delay = getDelay();

  setTimeout(async () => {
    try {
      await run();
    } finally {
      scheduleAlignedRun(name, getDelay, run);
    }
  }, delay);
}

export async function startHarnessLoop(): Promise<void> {
  await import('./web/server');

  await runHourlyCycle();
  await runTacticalCycle();

  scheduleAlignedRun('hourly', () => getDelayUntilNextHourlyRun(new Date()), runHourlyCycle);
  scheduleAlignedRun('tactical', () => getDelayUntilNextTacticalRun(new Date()), runTacticalCycle);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/harness.test.ts`
Expected: PASS

### Task 3: Verify harness behavior stays green

**Files:**
- Modify: `src/agent.test.ts`
- Test: `src/agent.test.ts`

- [ ] **Step 1: Run targeted regression tests**

Run: `bun test src/harness.test.ts src/agent.test.ts`
Expected: PASS

- [ ] **Step 2: Run the full suite**

Run: `bun test`
Expected: PASS
