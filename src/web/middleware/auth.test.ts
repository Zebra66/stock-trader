import { test, expect, describe, beforeAll, afterAll } from 'bun:test';
import { Elysia } from 'elysia';
import { authGuard } from './auth';

describe('auth middleware', () => {
  const originalEnv = process.env;

  beforeAll(() => {
    process.env = { ...originalEnv };
    process.env.ALLOWED_USER_EMAIL = 'test@example.com';
    process.env.SESSION_SECRET = 'test-secret-for-auth-middleware-tests';
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  function createApp() {
    return new Elysia()
      .use(authGuard)
      .get('/api/protected', () => ({ ok: true }))
      .get('/api/health', () => ({ status: 'ok' }))
      .get('/favicon.svg', () => 'favicon')
      .get('/auth/test', () => 'auth');
  }

  test('allows health endpoint without auth', async () => {
    const app = createApp();
    const res = await app.handle(new Request('http://localhost/api/health'));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.status).toBe('ok');
  });

  test('allows favicon without auth', async () => {
    const app = createApp();
    const res = await app.handle(new Request('http://localhost/favicon.svg'));
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('favicon');
  });

  test('allows auth paths without auth', async () => {
    const app = createApp();
    const res = await app.handle(new Request('http://localhost/auth/test'));
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('auth');
  });

  test('redirects unauthenticated browser requests to /auth/google', async () => {
    const app = createApp();
    const res = await app.handle(new Request('http://localhost/'));
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toBe('/auth/google');
  });

  test('returns 401 for unauthenticated API requests', async () => {
    const app = createApp();
    const res = await app.handle(new Request('http://localhost/api/protected'));
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toBe('Unauthorized');
  });

  test('allows requests with valid deploy key', async () => {
    process.env.DEPLOY_API_KEY = 'deploy-secret';
    const app = createApp();
    const res = await app.handle(
      new Request('http://localhost/api/protected', {
        headers: { 'x-deploy-key': 'deploy-secret' },
      })
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    delete process.env.DEPLOY_API_KEY;
  });

  test('rejects requests with invalid deploy key', async () => {
    process.env.DEPLOY_API_KEY = 'deploy-secret';
    const app = createApp();
    const res = await app.handle(
      new Request('http://localhost/api/protected', {
        headers: { 'x-deploy-key': 'wrong-secret' },
      })
    );
    expect(res.status).toBe(401);
    delete process.env.DEPLOY_API_KEY;
  });
});
