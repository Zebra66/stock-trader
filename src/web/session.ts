import * as crypto from 'node:crypto';

const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;
const SESSION_MAX_AGE_MS = SESSION_MAX_AGE_SECONDS * 1000;

interface SessionOptions {
  secret?: string;
  now?: number;
}

interface VerifySessionOptions extends SessionOptions {
  allowedEmail?: string;
}

export function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET || process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  if (!secret) {
    throw new Error('SESSION_SECRET or GOOGLE_OAUTH_CLIENT_SECRET must be configured');
  }
  return secret;
}

export function signSession(email: string, options: SessionOptions = {}): string {
  const expires = (options.now ?? Date.now()) + SESSION_MAX_AGE_MS;
  const data = `${email}|${expires}`;
  const secret = options.secret ?? getSessionSecret();
  const hmac = crypto.createHmac('sha256', secret).update(data).digest('hex');
  return Buffer.from(`${data}|${hmac}`).toString('base64');
}

export function verifySession(token: string, options: VerifySessionOptions = {}): boolean {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const [email, expiresStr, hmac] = decoded.split('|');
    if (!options.allowedEmail || email !== options.allowedEmail) return false;
    if ((options.now ?? Date.now()) > parseInt(expiresStr, 10)) return false;
    const secret = options.secret ?? getSessionSecret();
    const expectedHmac = crypto.createHmac('sha256', secret).update(`${email}|${expiresStr}`).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(expectedHmac));
  } catch {
    return false;
  }
}

export function getOrigin(request: Request): string {
  const proto = request.headers.get('x-forwarded-proto');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (proto && host) {
    return `${proto}://${host}`;
  }
  return new URL(request.url).origin;
}

export function createAuthCookie(sessionToken: string): string {
  return `auth_session=${sessionToken}; Path=/; HttpOnly; Secure; Max-Age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
}
