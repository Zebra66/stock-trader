import { Elysia } from 'elysia';
import { getOrigin, signSession, createAuthCookie } from '../session';

export const authGoogleRoutes = new Elysia()
  .get('/auth/google', ({ request, set }) => {
    const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
    if (!clientId) {
      set.status = 500;
      return 'GOOGLE_OAUTH_CLIENT_ID not set. Check environment variables.';
    }

    const origin = getOrigin(request);
    const redirectUri = process.env.OAUTH_REDIRECT_URI || `${origin}/auth/google/callback`;
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=email%20profile&access_type=online`;

    return new Response(null, {
      status: 302,
      headers: { Location: authUrl }
    });
  })
  .get('/auth/google/callback', async ({ request, set }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    if (!code) {
      set.status = 400;
      return 'No code provided in callback.';
    }

    const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      set.status = 500;
      return 'OAuth credentials not set in environment.';
    }

    const origin = getOrigin(request);
    const redirectUri = process.env.OAUTH_REDIRECT_URI || `${origin}/auth/google/callback`;

    try {
      const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code'
        })
      });
      const tokenData = await tokenRes.json();
      if (!tokenData.access_token) {
        set.status = 400;
        return `OAuth token error: ${JSON.stringify(tokenData)}`;
      }

      const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${tokenData.access_token}` }
      });
      const userData = await userRes.json();

      const allowedEmail = process.env.ALLOWED_USER_EMAIL;
      if (!allowedEmail || userData.email !== allowedEmail) {
        set.status = 403;
        return `Access denied for ${userData.email}. Only ${allowedEmail} is allowed.`;
      }

      const sessionToken = signSession(userData.email);
      set.headers['Set-Cookie'] = createAuthCookie(sessionToken);

      return new Response(null, {
        status: 302,
        headers: { Location: '/' }
      });
    } catch (e: any) {
      set.status = 500;
      return `Error processing OAuth callback: ${e.message}`;
    }
  });
