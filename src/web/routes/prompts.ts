import { Elysia } from 'elysia';
import { readPrompts, addPrompt, updatePrompt, deletePrompt } from '../user_prompts';

export const promptRoutes = new Elysia()
  .get('/api/prompts', async () => {
    try {
      const prompts = await readPrompts();
      return { prompts };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg, prompts: [] };
    }
  })
  .post('/api/prompts', async ({ body }: { body: unknown }) => {
    try {
      const b = body as { text: string };
      if (!b.text || !b.text.trim()) return { error: 'Text is required' };
      const newPrompt = await addPrompt(b.text.trim());
      return { ok: true, prompt: newPrompt };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg };
    }
  })
  .put('/api/prompts/:id', async ({ params, body }: { params: { id: string }, body: unknown }) => {
    try {
      const b = body as { text: string };
      if (!b.text || !b.text.trim()) return { error: 'Text is required' };
      const updated = await updatePrompt(params.id, b.text.trim());
      if (!updated) return { error: 'Prompt not found or already executed' };
      return { ok: true, prompt: updated };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg };
    }
  })
  .delete('/api/prompts/:id', async ({ params }: { params: { id: string } }) => {
    try {
      const deleted = await deletePrompt(params.id);
      if (!deleted) return { error: 'Prompt not found or already executed' };
      return { ok: true };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg };
    }
  });
