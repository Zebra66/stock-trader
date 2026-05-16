import { getLogger } from './logger';
import type { AgentMode } from './types';

const logger = getLogger('test-runner');
const repoRoot = new URL('..', import.meta.url).pathname;

export interface TestJob {
  id: string;
  mode: AgentMode;
  status: 'running' | 'completed' | 'failed';
  startedAt: number;
  completedAt?: number;
  exitCode?: number;
  stdout: string;
  stderr: string;
}

const jobs = new Map<string, TestJob>();
const MAX_CONCURRENT_PER_MODE = 1;
const MAX_JOBS_PER_HOUR = 3;
const runningJobs = new Map<AgentMode, string>();

/** Reset all jobs — intended for tests only. */
export function _resetTestJobs(): void {
  jobs.clear();
  runningJobs.clear();
}

/** Manually inject a completed job — intended for tests only. */
export function _injectCompletedJob(job: TestJob): void {
  jobs.set(job.id, job);
}

export function createTestJob(mode: AgentMode): { jobId: string; alreadyRunning: boolean } {
  // Concurrent limit per mode
  const existingRunning = [...jobs.values()].filter(
    (j) => j.mode === mode && j.status === 'running',
  );
  if (existingRunning.length >= MAX_CONCURRENT_PER_MODE) {
    return { jobId: existingRunning[0]!.id, alreadyRunning: true };
  }

  // Hourly rate limit per mode
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  const recentJobs = [...jobs.values()].filter(
    (j) => j.mode === mode && j.startedAt > oneHourAgo,
  );
  if (recentJobs.length >= MAX_JOBS_PER_HOUR) {
    throw new Error(
      `Rate limit exceeded: max ${MAX_JOBS_PER_HOUR} test jobs per hour for ${mode} mode`,
    );
  }

  const jobId = `test-${mode}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const job: TestJob = {
    id: jobId,
    mode,
    status: 'running',
    startedAt: Date.now(),
    stdout: '',
    stderr: '',
  };
  jobs.set(jobId, job);
  runningJobs.set(mode, jobId);

  spawnTestProcess(job);

  return { jobId, alreadyRunning: false };
}

function spawnTestProcess(job: TestJob) {
  const proc = Bun.spawn(['bun', 'run', 'src/agent.ts', job.mode, '--dry-run'], {
    stdout: 'pipe',
    stderr: 'pipe',
    cwd: repoRoot,
  });

  // Collect stdout
  (async () => {
    const reader = proc.stdout.getReader();
    const decoder = new TextDecoder();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        job.stdout += decoder.decode(value, { stream: true });
      }
    } catch {
      // ignore
    }
  })();

  // Collect stderr
  (async () => {
    const reader = proc.stderr.getReader();
    const decoder = new TextDecoder();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        job.stderr += decoder.decode(value, { stream: true });
      }
    } catch {
      // ignore
    }
  })();

  proc.exited.then((exitCode) => {
    job.status = exitCode === 0 ? 'completed' : 'failed';
    job.exitCode = exitCode;
    job.completedAt = Date.now();
    runningJobs.delete(job.mode);
    logger.info(
      { jobId: job.id, mode: job.mode, exitCode, durationMs: job.completedAt - job.startedAt },
      'Test job completed',
    );
  });
}

export function getTestJob(jobId: string): TestJob | undefined {
  return jobs.get(jobId);
}

/** Remove completed jobs older than maxAgeMs (defaults to 1 hour). */
export function cleanupOldJobs(maxAgeMs = 60 * 60 * 1000) {
  const cutoff = Date.now() - maxAgeMs;
  for (const [id, job] of jobs) {
    if ((job.completedAt ?? job.startedAt) < cutoff) {
      jobs.delete(id);
    }
  }
}
