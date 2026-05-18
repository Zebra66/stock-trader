import { describe, expect, test } from 'bun:test';
import { createAuthCookie, getOrigin, signSession, verifySession } from './session';

describe('web session helpers', () => {
  test('signs and verifies a session using explicit secret and allowed email', () => {
    const token = signSession('user@example.com', { secret: 'secret', now: 1_000 });

    expect(verifySession(token, {
      allowedEmail: 'user@example.com',
      secret: 'secret',
      now: 1_000,
    })).toBe(true);
  });

  test('rejects sessions for a different allowed email', () => {
    const token = signSession('user@example.com', { secret: 'secret', now: 1_000 });

    expect(verifySession(token, {
      allowedEmail: 'other@example.com',
      secret: 'secret',
      now: 1_000,
    })).toBe(false);
  });

  test('creates secure auth cookie attributes', () => {
    const cookie = createAuthCookie('token');

    expect(cookie).toContain('auth_session=token');
    expect(cookie).toContain('Path=/');
    expect(cookie).toContain('HttpOnly');
    expect(cookie).toContain('Secure');
    expect(cookie).toContain('SameSite=Lax');
    expect(cookie).toContain('Max-Age=604800');
  });

  test('resolves forwarded Cloud Run origin', () => {
    const request = new Request('http://localhost/auth', {
      headers: {
        'x-forwarded-proto': 'https',
        'x-forwarded-host': 'example.run.app',
      },
    });

    expect(getOrigin(request)).toBe('https://example.run.app');
  });
});
