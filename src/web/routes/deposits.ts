import { Elysia } from 'elysia';
import { getLogger } from '../../logger';
import { readDeposits, addDeposit, type DepositEntry } from '../deposits';

const logger = getLogger('web-server');

export const depositRoutes = new Elysia()
  .get('/api/deposits', async () => {
    try {
      const entries = await readDeposits();
      return { deposits: entries };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg, deposits: [] };
    }
  })
  .post('/api/deposits', async ({ body }: { body: unknown }) => {
    try {
      const b = body as Partial<DepositEntry>;
      const amount = Number(b.amount);
      if (!Number.isFinite(amount) || amount === 0) {
        return { error: 'amount must be a non-zero number (positive = deposit, negative = withdrawal)' };
      }
      const at = b.at ? String(b.at) : new Date().toISOString();
      const note = b.note ? String(b.note) : undefined;
      const entry: DepositEntry = { amount, at, ...(note ? { note } : {}) };
      const entries = await addDeposit(entry);
      logger.info({ amount, at, note }, 'New investment deposit recorded');
      return { ok: true, deposits: entries };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.error({ err: msg }, 'Failed to record deposit');
      return { error: msg };
    }
  });
