import '../env';
import { Elysia } from 'elysia';
import { getPaused, setPaused } from '../harness';
import * as fs from 'fs/promises';
import { getLogger } from '../logger';
import { createAlpacaClient, getAlpacaModeLabel, getConfiguredAlpacaModes, type AlpacaMode } from '../tools/alpaca_client_factory';
import { getModeButtonsFunctionSource } from './dashboard_client_script';
import { buildDashboardData } from './dashboard_data';

const logger = getLogger('web-server');
const PORT = process.env.PORT || 3000;

function parseRequestedMode(value: string | undefined): AlpacaMode | undefined {
  return value === 'paper' || value === 'live' ? value : undefined;
}

function resolveDashboardMode(requestedMode?: string): AlpacaMode {
  const explicitMode = parseRequestedMode(requestedMode);

  if (explicitMode) {
    return explicitMode;
  }

  return getConfiguredAlpacaModes().defaultMode;
}

const app = new Elysia()
  .get('/favicon.svg', () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0a0f1e"/><polyline points="4,24 10,16 16,20 22,10 28,14" stroke="#00d4ff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="22" cy="10" r="2.5" fill="#00ff88"/></svg>`;
    return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' } });
  })
  .get('/', () => {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Stock — Autonomous Trading Dashboard</title>
  <meta name="description" content="Real-time autonomous stock trading dashboard with portfolio performance and AI agent activity.">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
  <style>
    :root{
      --bg:#0a0f1e;--bg2:#0f172a;--bgc:#111827;
      --border:rgba(0,212,255,0.15);--border-h:rgba(0,212,255,0.4);
      --cyan:#00d4ff;--green:#00ff88;--red:#ff4757;
      --t1:#f1f5f9;--t2:#94a3b8;--t3:#475569;
      --font:'Inter',system-ui,sans-serif;--mono:'JetBrains Mono',monospace;
    }
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;overflow-x:hidden}
    body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px);background-size:40px 40px;pointer-events:none;z-index:0}
    .wrap{position:relative;z-index:1;max-width:1400px;margin:0 auto;padding:0 1.5rem 2rem}
    /* HEADER */
    header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-bottom:1px solid var(--border);background:rgba(10,15,30,0.85);backdrop-filter:blur(12px);position:sticky;top:0;z-index:100}
    .brand{display:flex;align-items:center;gap:.75rem}
    .brand-icon{width:36px;height:36px;background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(0,212,255,0.3));border:1px solid var(--cyan);border-radius:8px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(0,212,255,0.25)}
    .brand-name{font-size:1.2rem;font-weight:700;background:linear-gradient(90deg,#fff,var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hdr-right{display:flex;align-items:center;gap:.875rem}
    .status-badge{display:flex;align-items:center;gap:.4rem;padding:.3rem .8rem;border-radius:100px;font-size:.75rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;border:1px solid;transition:all .3s}
    .status-badge.active{background:rgba(0,255,136,0.1);border-color:rgba(0,255,136,0.4);color:var(--green)}
    .status-badge.paused{background:rgba(255,71,87,0.1);border-color:rgba(255,71,87,0.4);color:var(--red)}
    .sdot{width:7px;height:7px;border-radius:50%;background:currentColor}
    .status-badge.active .sdot{animation:pulse-g 2s ease infinite}
    @keyframes pulse-g{0%,100%{box-shadow:0 0 0 0 rgba(0,255,136,0.5)}50%{box-shadow:0 0 0 5px rgba(0,255,136,0)}}
    .btn-toggle{padding:.45rem 1.1rem;font-size:.8125rem;font-weight:600;border-radius:8px;border:none;cursor:pointer;font-family:var(--font);transition:all .2s}
    .btn-toggle.pause{background:linear-gradient(135deg,#ff4757,#ff6b81);color:#fff;box-shadow:0 4px 14px rgba(255,71,87,0.3)}
    .btn-toggle.pause:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(255,71,87,0.45)}
    .btn-toggle.resume{background:linear-gradient(135deg,#00ff88,#00cc6a);color:#0a0f1e;box-shadow:0 4px 14px rgba(0,255,136,0.3)}
    .btn-toggle.resume:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,255,136,0.45)}
    /* CARDS */
    .card{background:var(--bgc);border:1px solid var(--border);border-radius:12px;padding:1.25rem;transition:border-color .3s}
    .card:hover{border-color:var(--border-h)}
    /* STATS */
    .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin:1.25rem 0}
    .stat-card{background:var(--bgc);border:1px solid var(--border);border-radius:12px;padding:1.1rem 1.25rem;position:relative;overflow:hidden;transition:all .3s}
    .stat-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--cyan),transparent)}
    .stat-card:hover{border-color:var(--border-h);transform:translateY(-2px)}
    .stat-lbl{font-size:.7rem;color:var(--t2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem}
    .stat-val{font-size:1.4rem;font-weight:700;font-variant-numeric:tabular-nums}
    .stat-val.cyan{color:var(--cyan)}.stat-val.green{color:var(--green)}.stat-val.red{color:var(--red)}
    .stat-ico{position:absolute;top:.9rem;right:.9rem;font-size:1.1rem;opacity:.6}
    /* CHART */
    .chart-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}
    .chart-hdr h2{font-size:.9375rem;font-weight:600;display:flex;align-items:center;gap:.5rem}
    .chart-hdr h2 span{font-size:.75rem;color:var(--t3);font-weight:400}
    .legend{display:flex;gap:.875rem;font-size:.75rem;color:var(--t2)}
    .legend-item{display:flex;align-items:center;gap:.35rem}
    .ldot{width:8px;height:8px;border-radius:50%}
    .chart-box{position:relative;height:340px;width:100%}
    /* BOTTOM GRID */
    .bottom-grid{display:grid;grid-template-columns:2fr 3fr;gap:1rem;margin-top:1rem}
    .sec-title{font-size:.875rem;font-weight:600;color:var(--t1);margin-bottom:.875rem;display:flex;align-items:center;gap:.4rem}
    pre.mem{font-family:var(--mono);font-size:.72rem;line-height:1.65;color:#a5b4fc;background:#020617;padding:.875rem;border-radius:8px;overflow-y:auto;max-height:380px;white-space:pre-wrap;word-break:break-word}
    /* TABLE */
    .ctable{width:100%;border-collapse:collapse;font-size:.8rem}
    .ctable th{text-align:left;padding:.5rem .7rem;color:var(--t2);font-weight:500;text-transform:uppercase;font-size:.65rem;letter-spacing:.08em;border-bottom:1px solid #1e293b}
    .ctable td{padding:.55rem .7rem;border-bottom:1px solid #0f172a;vertical-align:middle}
    .crow{cursor:pointer;transition:background .15s}
    .crow:hover{background:rgba(0,212,255,0.05)}
    .chash{font-family:var(--mono);color:#a5b4fc;font-size:.72rem}
    .cdate{color:var(--t2);white-space:nowrap}.cauthor{color:var(--t2)}
    /* DIFF */
    .diff-hdr{display:flex;align-items:center;gap:.875rem;margin-bottom:.875rem}
    .btn-back{padding:.35rem .8rem;background:#1e293b;color:var(--t2);border:1px solid #334155;border-radius:6px;cursor:pointer;font-size:.8rem;font-family:var(--font);transition:all .2s}
    .btn-back:hover{border-color:var(--cyan);color:var(--cyan)}
    pre.diff{font-family:var(--mono);font-size:.72rem;line-height:1.5;background:#020617;padding:.875rem;border-radius:8px;max-height:420px;overflow-y:auto}
    @media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}.bottom-grid{grid-template-columns:1fr}}
    @media(max-width:600px){.stats-grid{grid-template-columns:1fr}.hdr-right .status-badge{display:none}}
  </style>
</head>
<body>
<header>
  <div class="brand">
    <div class="brand-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><polyline points="2,15 6,9 10,12 14,5 18,8" stroke="#00d4ff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="5" r="1.5" fill="#00ff88"/></svg>
    </div>
    <span class="brand-name">Auto Stock</span>
  </div>
  <div class="hdr-right">
    <div class="status-badge active" id="status-badge"><span class="sdot" id="status-dot"></span><span id="status-text">Loading...</span></div>
    <button id="toggle-btn" class="btn-toggle pause" onclick="togglePause()">Loading...</button>
  </div>
</header>
<div class="wrap">
  <div class="stats-grid">
    <div class="stat-card"><span class="stat-ico">💰</span><div class="stat-lbl">Total Equity</div><div class="stat-val cyan" id="eq-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">💵</span><div class="stat-lbl">Cash</div><div class="stat-val cyan" id="cash-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">📅</span><div class="stat-lbl">Day Change</div><div class="stat-val" id="dc-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">⚡</span><div class="stat-lbl">Buying Power</div><div class="stat-val cyan" id="bp-val">—</div></div>
  </div>
  <div class="card" style="margin-bottom:1rem">
    <div class="chart-hdr" style="margin-bottom:0">
      <h2>🏦 Account Mode <span id="mode-note">Loading...</span></h2>
      <div class="legend" id="mode-switcher"></div>
    </div>
  </div>
  <div class="card" style="margin-bottom:1rem">
    <div class="chart-hdr">
      <h2>📊 Portfolio Performance <span id="chart-note">· 1 Week</span></h2>
      <div class="legend">
        <div class="legend-item"><span class="ldot" style="background:#00d4ff"></span>Equity</div>
        <div class="legend-item"><span class="ldot" style="background:#00ff88"></span>Buy</div>
        <div class="legend-item"><span class="ldot" style="background:#ff4757"></span>Sell</div>
      </div>
    </div>
    <div class="chart-box"><canvas id="portfolioChart"></canvas></div>
  </div>
  <div class="bottom-grid">
    <div class="card">
      <div class="sec-title">🧠 Agent Memory</div>
      <pre class="mem" id="memory-content">Loading...</pre>
    </div>
    <div class="card">
      <div class="sec-title">📜 Agent Commits</div>
      <div id="commits-list"><em style="color:var(--t2)">Loading...</em></div>
      <div id="commit-diff-view" style="display:none">
        <div class="diff-hdr">
          <button class="btn-back" onclick="closeCommitDiff()">← Back</button>
          <strong id="diff-commit-title" style="color:#a5b4fc;font-family:var(--mono);font-size:.8rem"></strong>
        </div>
        <pre class="diff" id="diff-content"></pre>
      </div>
    </div>
  </div>
</div>
<script>
  let chart=null;
  let selectedMode=null;
  function formatMoney(value){
    return '$'+Number(value||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  }
  ${getModeButtonsFunctionSource()}
  function clearDashboardStats(){
    document.getElementById('eq-val').innerText='—';
    document.getElementById('cash-val').innerText='—';
    document.getElementById('bp-val').innerText='—';
    document.getElementById('dc-val').innerText='—';
    document.getElementById('dc-val').className='stat-val';
    if(chart){chart.destroy();chart=null;}
  }
  async function selectMode(mode){
    selectedMode=mode;
    await renderChart();
  }
  async function fetchStatus(){
    try{
      const d=await(await fetch('/api/status')).json();
      const btn=document.getElementById('toggle-btn');
      const txt=document.getElementById('status-text');
      const badge=document.getElementById('status-badge');
      if(d.paused){
        txt.innerText='PAUSED';badge.className='status-badge paused';
        btn.innerText='RESUME TRADING';btn.className='btn-toggle resume';
      }else{
        txt.innerText='ACTIVE';badge.className='status-badge active';
        btn.innerText='PAUSE TRADING';btn.className='btn-toggle pause';
      }
    }catch(e){}
  }
  async function togglePause(){await fetch('/api/toggle',{method:'POST'});fetchStatus();}
  async function fetchMemory(){
    try{const t=await(await fetch('/api/memory')).text();document.getElementById('memory-content').innerText=t;}catch(e){}
  }
  async function renderChart(){
    try{
      const query=selectedMode?'?mode='+encodeURIComponent(selectedMode):'';
      const d=await(await fetch('/api/chart-data'+query)).json();
      if(d.error){
        clearDashboardStats();
        document.getElementById('mode-note').innerText='· '+(d.modeLabel||'Unavailable');
        document.getElementById('chart-note').innerText='· '+d.error;
        setModeButtons(d.availableModes||[], d.mode);
        return;
      }
      selectedMode=d.mode;
      document.getElementById('eq-val').innerText=formatMoney(d.equity);
      document.getElementById('cash-val').innerText=formatMoney(d.cash);
      document.getElementById('bp-val').innerText=formatMoney(d.buyingPower);

      const changeLabel=(d.dayChange >= 0 ? '+' : '-')+formatMoney(Math.abs(d.dayChange)).replace('$','')+' ('+((d.dayChangePct*100)>=0?'+':'')+(d.dayChangePct*100).toFixed(2)+'%)';
      document.getElementById('dc-val').innerText=changeLabel;
      document.getElementById('dc-val').className='stat-val '+(d.dayChange >= 0 ? 'green' : 'red');
      document.getElementById('mode-note').innerText='· '+d.modeLabel;
      document.getElementById('chart-note').innerText=d.historyUnavailableMessage ? '· '+d.historyUnavailableMessage : '· 1 Week';
      setModeButtons(d.availableModes||[], d.mode);
      const ctx=document.getElementById('portfolioChart').getContext('2d');
      if(chart){chart.destroy();}
      chart=new Chart(ctx,{
        type:'line',
        data:{datasets:[
          {label:'Equity ($)',data:d.history,borderColor:'#00d4ff',backgroundColor:'rgba(0,212,255,0.08)',borderWidth:2,fill:true,pointRadius:0,tension:0.3,order:2},
          {type:'scatter',label:'Buy',data:d.buys,backgroundColor:'#00ff88',borderColor:'#0a0f1e',borderWidth:1.5,pointRadius:7,pointHoverRadius:9,order:1},
          {type:'scatter',label:'Sell',data:d.sells,backgroundColor:'#ff4757',borderColor:'#0a0f1e',borderWidth:1.5,pointRadius:7,pointHoverRadius:9,order:1}
        ]},
        options:{responsive:true,maintainAspectRatio:false,
          interaction:{mode:'index',intersect:false},
          plugins:{legend:{display:false},tooltip:{backgroundColor:'#1e293b',borderColor:'rgba(0,212,255,0.3)',borderWidth:1,titleColor:'#94a3b8',bodyColor:'#f1f5f9',padding:10,callbacks:{label:function(c){let l=c.dataset.label+': ';if(c.raw&&typeof c.raw==='object'&&c.raw.symbol)l+=c.raw.symbol+' @$'+parseFloat(c.raw.price).toFixed(2)+' ('+c.raw.qty+' shs)';else l+='$'+c.parsed.y;return l;}}}},
          scales:{
            x:{type:'time',time:{unit:'day'},ticks:{color:'#475569'},grid:{color:'rgba(0,212,255,0.06)'}},
            y:{ticks:{color:'#475569',callback:v=>'$'+v},grid:{color:'rgba(0,212,255,0.06)'}}
          }
        }
      });
    }catch(e){console.error(e);}
  }
  function escH(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  async function fetchCommits(){
    try{
      const d=await(await fetch('/api/commits')).json();
      const el=document.getElementById('commits-list');
      if(!d.commits||d.commits.length===0){el.innerHTML='<em style="color:#475569">No agent commits found.</em>';return;}
      let h='<table class="ctable"><thead><tr><th>Hash</th><th>Date</th><th>Author</th><th>Message</th></tr></thead><tbody>';
      for(const c of d.commits){
        const dt=new Date(c.date).toLocaleString();
        h+='<tr class="crow" data-hash="'+escH(c.hash)+'" data-msg="'+escH(c.message.substring(0,80))+'" onclick="viewCommit(this.dataset.hash,this.dataset.msg)">';
        h+='<td class="chash">'+escH(c.shortHash)+'</td>';
        h+='<td class="cdate">'+escH(dt)+'</td>';
        h+='<td class="cauthor">'+escH(c.author)+'</td>';
        h+='<td>'+escH(c.message)+'</td></tr>';
      }
      h+='</tbody></table>';el.innerHTML=h;
    }catch(e){document.getElementById('commits-list').innerHTML='<em style="color:#ff4757">Failed to load commits.</em>';}
  }
  async function viewCommit(hash,title){
    document.getElementById('commits-list').style.display='none';
    const dv=document.getElementById('commit-diff-view');dv.style.display='block';
    document.getElementById('diff-commit-title').textContent=hash.substring(0,8)+' — '+title;
    const pre=document.getElementById('diff-content');pre.innerHTML='<em style="color:#475569">Loading diff...</em>';
    try{
      const d=await(await fetch('/api/commit/'+hash)).json();
      if(d.error){pre.textContent='Error: '+d.error;return;}
      const lines=d.diff.split('\\n');let out='';
      for(const ln of lines){
        let col='#cbd5e1';
        if(ln.startsWith('+')&&!ln.startsWith('+++'))col='#86efac';
        else if(ln.startsWith('-')&&!ln.startsWith('---'))col='#fca5a5';
        else if(ln.startsWith('@@'))col='#7dd3fc';
        else if(ln.startsWith('diff ')||ln.startsWith('index ')||ln.startsWith('--- ')||ln.startsWith('+++ '))col='#c4b5fd';
        else if(ln.startsWith('commit ')||ln.startsWith('Author:')||ln.startsWith('Date:'))col='#f9a8d4';
        out+='<span style="color:'+col+'">'+escH(ln)+'</span>\\n';
      }
      pre.innerHTML=out;
    }catch(e){pre.textContent='Failed to load diff.';}
  }
  function closeCommitDiff(){document.getElementById('commit-diff-view').style.display='none';document.getElementById('commits-list').style.display='block';}
  fetchStatus();fetchMemory();renderChart();fetchCommits();
  setInterval(fetchStatus,5000);setInterval(fetchMemory,15000);setInterval(renderChart,60000);
</script>
</body>
</html>`, {
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
  .get('/api/chart-data', async ({ query }: { query: { mode?: string } }) => {
    const mode = resolveDashboardMode(query.mode);
    const { modes } = getConfiguredAlpacaModes();

    try {
      const alpaca = createAlpacaClient(mode);
      const data = await buildDashboardData(alpaca);

      return {
        ...data,
        mode,
        modeLabel: getAlpacaModeLabel(mode),
        availableModes: modes,
      };
    } catch (e: any) {
      logger.error({ err: (e as Error).message, mode }, 'chart-data API error');
      return {
        error: e.message,
        mode,
        modeLabel: getAlpacaModeLabel(mode),
        availableModes: modes,
      };
    }
  })
  .get('/api/commits', async () => {
    try {
      const result = await Bun.$`git log --grep=^\\[agent\\] --format=%H%x01%h%x01%an%x01%ai%x01%s -n 100`.quiet().text();
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

logger.info({ port: PORT }, `Dashboard running at http://localhost:${PORT}`);
