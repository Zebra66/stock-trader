import { Elysia } from 'elysia';
import { getModeButtonsFunctionSource } from '../dashboard_client_script';

const indexHtmlPath = new URL('../index.html', import.meta.url).pathname;

export const staticRoutes = new Elysia()
  .get('/favicon.svg', () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0a0f1e"/><polyline points="4,24 10,16 16,20 22,10 28,14" stroke="#00d4ff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="22" cy="10" r="2.5" fill="#00ff88"/></svg>`;
    return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' } });
  })
  .get('/', async () => {
    let html = await Bun.file(indexHtmlPath).text();
    html = html.replace('__MODE_BUTTONS_FUNCTION__', getModeButtonsFunctionSource());
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  });
