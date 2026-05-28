import { Elysia } from 'elysia';
import { getLogger } from '../../logger';
import { createTestJob, getTestJob } from '../../test_runner';

const logger = getLogger('web-server');

export const testJobRoutes = new Elysia()
  .post('/api/test/hourly', () => {
    try {
      const { jobId, alreadyRunning } = createTestJob('hourly');
      return { jobId, alreadyRunning, mode: 'hourly', dryRun: true };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'Test hourly job failed to start');
      return new Response(JSON.stringify({ error: msg }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  })
  .post('/api/test/tactical', () => {
    try {
      const { jobId, alreadyRunning } = createTestJob('tactical');
      return { jobId, alreadyRunning, mode: 'tactical', dryRun: true };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'Test tactical job failed to start');
      return new Response(JSON.stringify({ error: msg }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  })
  .get('/api/test/jobs/:id', ({ params }: { params: { id: string } }) => {
    const job = getTestJob(params.id);
    if (!job) {
      return new Response(JSON.stringify({ error: 'Job not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return {
      id: job.id,
      mode: job.mode,
      status: job.status,
      startedAt: job.startedAt,
      completedAt: job.completedAt,
      exitCode: job.exitCode,
      stdout: job.stdout,
      stderr: job.stderr,
    };
  });
