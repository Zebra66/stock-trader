import { Elysia } from 'elysia';
import { verifySession } from '../session';

export const authGuard = new Elysia()
  .onRequest(({ request, set }) => {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/auth') || url.pathname === '/favicon.svg' || url.pathname === '/api/health') return;

    const cookieHeader = request.headers.get('cookie') || '';
    const match = cookieHeader.match(/auth_session=([^;]+)/);
    const token = match ? match[1] : null;

    const deployKey = request.headers.get('x-deploy-key');
    const deployKeyValid = process.env.DEPLOY_API_KEY && deployKey === process.env.DEPLOY_API_KEY;

    const isAuthenticated = token && verifySession(token, { allowedEmail: process.env.ALLOWED_USER_EMAIL });

    if (!isAuthenticated && !deployKeyValid) {
      if (url.pathname.startsWith('/api/')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(null, {
        status: 302,
        headers: { Location: '/auth/google' }
      });
    }
  });
