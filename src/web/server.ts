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
              pre { background: #020617; padding: 1rem; border-radius: 4px; overflow-x: auto; color: #a5b4fc; }
              .chart-container { position: relative; height: 400px; width: 100%; }
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

              fetchStatus();
              fetchMemory();
              renderChart();
              
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
  .listen(PORT);

console.log(`Dashboard running at http://localhost:${PORT}`);
