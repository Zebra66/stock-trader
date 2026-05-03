import { Elysia } from 'elysia';
import { getPaused, setPaused } from '../harness';
import { alpaca } from '../tools/alpaca';
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
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
          <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 2rem; background: #0f172a; color: #f8fafc; }
              .card { background: #1e293b; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; }
              h1, h2 { color: #38bdf8; }
              button { padding: 10px 20px; font-size: 16px; font-weight: bold; cursor: pointer; border-radius: 4px; border: none; }
              .btn-pause { background: #ef4444; color: white; }
              .btn-resume { background: #22c55e; color: white; }
              .btn-back { background: #334155; color: #f8fafc; padding: 6px 14px; font-size: 0.875em; font-weight: normal; }
              pre { background: #020617; padding: 1rem; border-radius: 4px; overflow-x: auto; color: #a5b4fc; }
              .chart-container { position: relative; height: 400px; width: 100%; }
              .commit-row { cursor: pointer; }
              .commit-row:hover { background: #0f172a; }
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
              <h2>Portfolio Performance</h2>
              <div class="chart-container">
                  <canvas id="portfolioChart"></canvas>
              </div>
          </div>

          <div class="card">
              <h2>Strategy & Memory (MEMORY.md)</h2>
              <pre id="memory-content">Loading...</pre>
          </div>

          <div class="card">
              <h2>Commit History</h2>
              <div id="commits-list"><em style="color:#94a3b8">Loading...</em></div>
              <div id="commit-diff-view" style="display:none">
                  <div style="margin-bottom:1rem;display:flex;align-items:center;gap:1rem">
                      <button class="btn-back" onclick="closeCommitDiff()">&#8592; Back</button>
                      <strong id="diff-commit-title" style="color:#38bdf8;font-family:monospace;font-size:0.9em"></strong>
                  </div>
                  <pre id="diff-content" style="max-height:600px;overflow-y:auto;font-size:0.82em;line-height:1.45;color:#f8fafc"></pre>
              </div>
          </div>

          <script>
              let portfolioChart = null;

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

              async function renderChart() {
                  try {
                      const res = await fetch('/api/chart-data');
                      const data = await res.json();

                      const ctx = document.getElementById('portfolioChart').getContext('2d');
                      if (portfolioChart) {
                          portfolioChart.destroy();
                      }

                      portfolioChart = new Chart(ctx, {
                          type: 'line',
                          data: {
                              datasets: [
                                  {
                                      label: 'Equity ($)',
                                      data: data.history,
                                      borderColor: '#38bdf8',
                                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                      borderWidth: 2,
                                      fill: true,
                                      pointRadius: 0,
                                      tension: 0.1,
                                      order: 2
                                  },
                                  {
                                      type: 'scatter',
                                      label: 'Buy Activities',
                                      data: data.buys,
                                      backgroundColor: '#22c55e',
                                      borderColor: '#fff',
                                      pointRadius: 6,
                                      pointHoverRadius: 8,
                                      order: 1
                                  },
                                  {
                                      type: 'scatter',
                                      label: 'Sell Activities',
                                      data: data.sells,
                                      backgroundColor: '#ef4444',
                                      borderColor: '#fff',
                                      pointRadius: 6,
                                      pointHoverRadius: 8,
                                      order: 1
                                  }
                              ]
                          },
                          options: {
                              responsive: true,
                              maintainAspectRatio: false,
                              interaction: {
                                  mode: 'index',
                                  intersect: false,
                              },
                              plugins: {
                                  tooltip: {
                                      callbacks: {
                                          label: function(context) {
                                              let label = context.dataset.label || '';
                                              if (label) {
                                                  label += ': ';
                                              }
                                              if (context.raw !== null && typeof context.raw === 'object' && context.raw.symbol) {
                                                  label += context.raw.symbol + ' @ $' + parseFloat(context.raw.price).toFixed(2) + ' (' + context.raw.qty + ' shs)';
                                              } else {
                                                  label += '$' + context.parsed.y;
                                              }
                                              return label;
                                          }
                                      }
                                  }
                              },
                              scales: {
                                  x: {
                                      type: 'time',
                                      time: {
                                          unit: 'day'
                                      },
                                      ticks: { color: '#94a3b8' },
                                      grid: { color: '#334155' }
                                  },
                                  y: {
                                      ticks: { color: '#94a3b8' },
                                      grid: { color: '#334155' }
                                  }
                              }
                          }
                      });
                  } catch(e) {
                      console.error("Failed to load chart data", e);
                  }
              }

              function escHtml(s) {
                  return String(s)
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;')
                      .replace(/"/g, '&quot;');
              }

              async function fetchCommits() {
                  try {
                      const res = await fetch('/api/commits');
                      const data = await res.json();
                      const list = document.getElementById('commits-list');
                      if (!data.commits || data.commits.length === 0) {
                          list.innerHTML = '<em style="color:#94a3b8">No commits found.</em>';
                          return;
                      }
                      let html = '<table style="width:100%;border-collapse:collapse;font-size:0.875em">';
                      html += '<thead><tr style="color:#94a3b8;text-align:left;border-bottom:2px solid #334155">';
                      html += '<th style="padding:6px 10px">Hash</th>';
                      html += '<th style="padding:6px 10px">Date</th>';
                      html += '<th style="padding:6px 10px">Author</th>';
                      html += '<th style="padding:6px 10px">Message</th>';
                      html += '</tr></thead><tbody>';
                      for (const c of data.commits) {
                          const date = new Date(c.date).toLocaleString();
                          html += '<tr class="commit-row"';
                          html += ' data-hash="' + escHtml(c.hash) + '"';
                          html += ' data-msg="' + escHtml(c.message.substring(0, 80)) + '"';
                          html += ' onclick="viewCommit(this.dataset.hash, this.dataset.msg)"';
                          html += ' style="border-top:1px solid #1e3a5f">';
                          html += '<td style="padding:6px 10px;font-family:monospace;color:#a5b4fc">' + escHtml(c.shortHash) + '</td>';
                          html += '<td style="padding:6px 10px;color:#94a3b8;white-space:nowrap">' + escHtml(date) + '</td>';
                          html += '<td style="padding:6px 10px;color:#94a3b8">' + escHtml(c.author) + '</td>';
                          html += '<td style="padding:6px 10px">' + escHtml(c.message) + '</td>';
                          html += '</tr>';
                      }
                      html += '</tbody></table>';
                      list.innerHTML = html;
                  } catch(e) {
                      document.getElementById('commits-list').innerHTML = '<em style="color:#ef4444">Failed to load commits.</em>';
                  }
              }

              async function viewCommit(hash, title) {
                  document.getElementById('commits-list').style.display = 'none';
                  const diffView = document.getElementById('commit-diff-view');
                  diffView.style.display = 'block';
                  document.getElementById('diff-commit-title').textContent = hash.substring(0, 8) + ' - ' + title;
                  const pre = document.getElementById('diff-content');
                  pre.innerHTML = '<em style="color:#94a3b8">Loading diff...</em>';
                  try {
                      const res = await fetch('/api/commit/' + hash);
                      const data = await res.json();
                      if (data.error) {
                          pre.textContent = 'Error: ' + data.error;
                          return;
                      }
                      const lines = data.diff.split('\\n');
                      let out = '';
                      for (const line of lines) {
                          let color = '#cbd5e1';
                          if (line.startsWith('+') && !line.startsWith('+++')) color = '#86efac';
                          else if (line.startsWith('-') && !line.startsWith('---')) color = '#fca5a5';
                          else if (line.startsWith('@@')) color = '#7dd3fc';
                          else if (line.startsWith('diff ') || line.startsWith('index ') || line.startsWith('--- ') || line.startsWith('+++ ')) color = '#c4b5fd';
                          else if (line.startsWith('commit ') || line.startsWith('Author:') || line.startsWith('Date:')) color = '#f9a8d4';
                          out += '<span style="color:' + color + '">' + escHtml(line) + '</span>\\n';
                      }
                      pre.innerHTML = out;
                  } catch(e) {
                      pre.textContent = 'Failed to load diff.';
                  }
              }

              function closeCommitDiff() {
                  document.getElementById('commit-diff-view').style.display = 'none';
                  document.getElementById('commits-list').style.display = 'block';
              }

              fetchStatus();
              fetchMemory();
              renderChart();
              fetchCommits();

              setInterval(fetchStatus, 5000);
              setInterval(fetchMemory, 10000);
              setInterval(renderChart, 60000); // refresh graph every 60s
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
  .get('/api/chart-data', async () => {
    try {
      // Fetch 1 Week history, 1 Hour timeframe
      const hist = await alpaca.getPortfolioHistory({ period: '1W', timeframe: '1H' } as any);
      const historyData: any[] = [];
      if (hist.timestamp && hist.equity) {
          for (let i = 0; i < hist.timestamp.length; i++) {
              historyData.push({
                  x: hist.timestamp[i] * 1000, // Unix to ms
                  y: hist.equity[i]
              });
          }
      }

      // Fetch FILL activities (buy/sells)
      const acts = await alpaca.getAccountActivities({ activityTypes: ['FILL'] } as any);
      const buys: any[] = [];
      const sells: any[] = [];

      for (const act of acts) {
          if (!act.transaction_time || !act.price) continue;
          const timeMs = new Date(act.transaction_time).getTime();

          // Map point's Y position to the portfolio's equity line
          let nearestEquity = historyData.length > 0 ? historyData[historyData.length - 1].y : 0;
          for (const h of historyData) {
              if (h.x >= timeMs) {
                  nearestEquity = h.y;
                  break;
              }
          }

          const point = {
              x: timeMs,
              y: nearestEquity,
              symbol: act.symbol,
              qty: act.qty,
              price: act.price
          };

          if (act.side === 'buy') {
              buys.push(point);
          } else {
              sells.push(point);
          }
      }

      return {
          history: historyData,
          buys,
          sells
      };
    } catch (e: any) {
      console.error(e);
      return { error: e.message };
    }
  })
  .get('/api/commits', async () => {
    try {
      const result = await Bun.$`git log --format=%H%x01%h%x01%an%x01%ai%x01%s -n 100`.quiet().text();
      const lines = result.trim().split('\n').filter(line => line.length > 0);
      const commits = lines.map(line => {
        const parts = line.split('\x01');
        return {
          hash: parts[0] ?? '',
          shortHash: parts[1] ?? '',
          author: parts[2] ?? '',
          date: parts[3] ?? '',
          message: parts.slice(4).join('\x01'),
        };
      });
      return { commits };
    } catch (e: any) {
      return { error: e.message, commits: [] };
    }
  })
  .get('/api/commit/:hash', async ({ params }: { params: { hash: string } }) => {
    const { hash } = params;
    if (!/^[a-f0-9]{4,40}$/.test(hash)) {
      return { error: 'Invalid commit hash' };
    }
    try {
      const diff = await Bun.$`git show ${hash}`.quiet().text();
      return { hash, diff };
    } catch (e: any) {
      return { error: e.message };
    }
  })
  .listen(PORT);

console.log(`Dashboard running at http://localhost:${PORT}`);
