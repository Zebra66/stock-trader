import { beforeEach, describe, expect, test } from 'bun:test';
import { createTestJob, getTestJob, cleanupOldJobs, _resetTestJobs, _injectCompletedJob, type TestJob } from './test_runner';

describe('test runner', () => {
  beforeEach(() => {
    _resetTestJobs();
  });

  test('creates a test job with dry-run mode', () => {
    const { jobId, alreadyRunning } = createTestJob('tactical');

    expect(jobId).toStartWith('test-tactical-');
    expect(alreadyRunning).toBe(false);

    const job = getTestJob(jobId);
    expect(job).toBeDefined();
    expect(job!.mode).toBe('tactical');
    expect(job!.status).toBe('running');
  });

  test('returns already-running job id when concurrent limit exceeded', () => {
    const { jobId: firstId, alreadyRunning: firstRunning } = createTestJob('hourly');
    expect(firstRunning).toBe(false);

    // Attempt second concurrent hourly job
    const { jobId: secondId, alreadyRunning: secondRunning } = createTestJob('hourly');
    expect(secondRunning).toBe(true);
    expect(secondId).toBe(firstId);
  });

  test('allows independent modes to run concurrently', () => {
    const { jobId: hourlyId, alreadyRunning: hRunning } = createTestJob('hourly');
    const { jobId: tacticalId, alreadyRunning: tRunning } = createTestJob('tactical');

    expect(hRunning).toBe(false);
    expect(tRunning).toBe(false);
    expect(hourlyId).not.toBe(tacticalId);
  });

  test('rate limits after 3 jobs per hour per mode', () => {
    // Inject 3 completed tactical jobs from the past hour so they count toward the limit
    const now = Date.now();
    for (let i = 0; i < 3; i++) {
      _injectCompletedJob({
        id: `test-tactical-past-${i}`,
        mode: 'tactical',
        status: 'completed',
        startedAt: now - i * 1000,
        completedAt: now - i * 1000,
        stdout: '',
        stderr: '',
      });
    }

    // 4th should throw because we've hit the hourly max
    expect(() => createTestJob('tactical')).toThrow('Rate limit exceeded');
  });

  test('cleanupOldJobs removes stale completed jobs', () => {
    const { jobId } = createTestJob('tactical');

    // Simulate job completion with old timestamp
    const job = getTestJob(jobId)!;
    job.status = 'completed';
    job.completedAt = Date.now() - 2 * 60 * 60 * 1000; // 2 hours ago

    expect(getTestJob(jobId)).toBeDefined();
    cleanupOldJobs(60 * 60 * 1000); // 1 hour max age
    expect(getTestJob(jobId)).toBeUndefined();
  });

  test('cleanupOldJobs preserves recent jobs', () => {
    const { jobId } = createTestJob('tactical');

    cleanupOldJobs(60 * 60 * 1000);
    expect(getTestJob(jobId)).toBeDefined();
  });

  test('getTestJob returns undefined for unknown job', () => {
    expect(getTestJob('test-unknown-123')).toBeUndefined();
  });
});
