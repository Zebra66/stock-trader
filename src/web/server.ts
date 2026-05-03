import { Elysia } from 'elysia';
import { getPaused, setPaused } from '../harness';
import * as fs from 'fs/promises';

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .get('/', () => {
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Autonomous Stock Trader Dashboard</title>
          <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 2rem; background: #0f172a; color: #f8fafc; }
              .card { background: #1e293b; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; }
              h1, h2 { color: #38bdf8; }
              button { padding: 10px 20px; font-size: 16px; font-weight: bold; cursor: pointer; border-radius: 4px; border: none; }
              .btn-pause { background: #ef4444; color: white; }
              .btn-resume { background: #22c55e; color: white; }
              pre { background: #020617; padding: 1rem; border-radius: 4px; overflow-x: auto; color: #a5b4fc; }
          </style>
      </head>
      <body>
          <h1>Stock Trader Dashboard</h1>
          
          <div class="card">
              <h2>Master Control</h2>
              <p>Current Status: <strong id="status-text">Loading...</strong></p>
              <button id="toggle-btn" onclick="togglePause()">Loading...</button>
          </div>

          <div class="card">
              <h2>Strategy & Memory (MEMORY.md)</h2>
              <pre id="memory-content">Loading...</pre>
          </div>

          <script>
              async function fetchStatus() {
                  const res = await fetch('/api/status');
                  const data = await res.json();
                  const btn = document.getElementById('toggle-btn');
                  const txt = document.getElementById('status-text');
                  if (data.paused) {
                      txt.innerText = 'PAUSED';
                      txt.style.color = '#ef4444';
                      btn.innerText = 'RESUME TRADING';
                      btn.className = 'btn-resume';
                  } else {
                      txt.innerText = 'ACTIVE';
                      txt.style.color = '#22c55e';
                      btn.innerText = 'PAUSE TRADING';
                      btn.className = 'btn-pause';
                  }
              }

              async function fetchMemory() {
                  const res = await fetch('/api/memory');
                  const data = await res.text();
                  document.getElementById('memory-content').innerText = data;
              }

              async function togglePause() {
                  await fetch('/api/toggle', { method: 'POST' });
                  fetchStatus();
              }

              fetchStatus();
              fetchMemory();
              setInterval(fetchStatus, 5000);
              setInterval(fetchMemory, 10000);
          </script>
      </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' },
    });
  })
  .get('/api/status', () => {
    return { paused: getPaused() };
  })
  .post('/api/toggle', () => {
    setPaused(!getPaused());
    return { paused: getPaused() };
  })
  .get('/api/memory', async () => {
    try {
      const memory = await fs.readFile('memory/MEMORY.md', 'utf8');
      return memory;
    } catch (e) {
      return "Memory file not found.";
    }
  })
  .listen(PORT);
console.log(`Dashboard running at http://localhost:${PORT}`);
