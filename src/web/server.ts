import '../env';
import { Elysia } from 'elysia';
import { getPaused, setPaused } from '../harness';
import * as fs from 'fs/promises';
import { getLogger } from '../logger';
import { createAlpacaClient, getAlpacaModeLabel, getConfiguredAlpacaModes, resolveAlpacaCredentials, type AlpacaMode } from '../tools/alpaca_client_factory';
import { getModeButtonsFunctionSource } from './dashboard_client_script';
import { buildDashboardData, type ChartPeriod } from './dashboard_data';
import { AGENT_COMMITS_LIMIT, getAgentCommitsSince, summarizeRecentAgentCommits } from './commits';
import { readDeposits, addDeposit, type DepositEntry } from './deposits';
import { deriveLogSeverity } from './log_severity';
import { createAuthCookie, getOrigin, signSession, verifySession } from './session';

const logger = getLogger('web-server');
const PORT = process.env.PORT || 3000;

// ─── Market Clock Cache ───────────────────────────────────────────────────────
// Caches the Alpaca /v2/clock response for TTL_MS to avoid hammering the API.
const CLOCK_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
interface ClockCache {
  data: MarketClockData;
  expiresAt: number;
}
interface MarketClockData {
  is_open: boolean;
  next_open: string;   // ISO-8601
  next_close: string;  // ISO-8601
}
let clockCache: ClockCache | null = null;

// ─── API Caches ──────────────────────────────────────────────────────────────
interface CacheEntry {
  data: any;
  expiresAt: number;
}
const chartDataCache = new Map<string, CacheEntry>();
const CHART_CACHE_TTL_MS = 60 * 1000; // 1 minute

let sp500Cache: CacheEntry | null = null;
const SP500_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
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
  .onRequest(({ request, set }) => {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/auth') || url.pathname === '/favicon.svg') return;
    
    const cookieHeader = request.headers.get('cookie') || '';
    const match = cookieHeader.match(/auth_session=([^;]+)/);
    const token = match ? match[1] : null;

    /*
    if (!token || !verifySession(token, { allowedEmail: process.env.ALLOWED_USER_EMAIL })) {
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
    */
  })
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
    .stats-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:1rem;margin:1.25rem 0}
    .stat-card{background:var(--bgc);border:1px solid var(--border);border-radius:12px;padding:1.1rem 1.25rem;position:relative;overflow:hidden;transition:all .3s}
    .stat-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--cyan),transparent)}
    .stat-card:hover{border-color:var(--border-h);transform:translateY(-2px)}
    .stat-lbl{font-size:.7rem;color:var(--t2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem}
    .stat-val{font-size:1.4rem;font-weight:700;font-variant-numeric:tabular-nums}
    .stat-val.cyan{color:var(--cyan)}.stat-val.green{color:var(--green)}.stat-val.red{color:var(--red)}
    .stat-ico{position:absolute;top:.9rem;right:.9rem;font-size:1.1rem;opacity:.6}
    /* CHART */
    .chart-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:.5rem}
    .chart-hdr h2{font-size:.9375rem;font-weight:600;display:flex;align-items:center;gap:.5rem}
    .chart-hdr h2 span{font-size:.75rem;color:var(--t3);font-weight:400}
    .legend{display:flex;gap:.875rem;font-size:.75rem;color:var(--t2)}
    .legend-item{display:flex;align-items:center;gap:.35rem}
    .ldot{width:8px;height:8px;border-radius:50%}
    .chart-box{position:relative;height:340px;width:100%}
    /* PERIOD NAV */
    .chart-period-nav{display:flex;align-items:center;gap:.25rem}
    .btn-period{padding:.3rem .65rem;font-size:.78rem;font-weight:600;border-radius:6px;border:1px solid #334155;background:transparent;color:var(--t2);cursor:pointer;font-family:var(--font);transition:all .18s;letter-spacing:.03em}
    .btn-period:hover:not(:disabled){border-color:var(--cyan);color:var(--cyan)}
    .btn-period.active{background:rgba(0,212,255,0.12);border-color:rgba(0,212,255,0.5);color:var(--cyan);box-shadow:0 0 8px rgba(0,212,255,0.12)}
    .btn-period:disabled{opacity:.3;cursor:not-allowed}
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
    @media(max-width:1100px){.stats-grid{grid-template-columns:repeat(3,1fr)}}
    @media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}.bottom-grid{grid-template-columns:1fr}}
    @media(max-width:600px){.stats-grid{grid-template-columns:1fr}.hdr-right .status-badge{display:none}}
    /* ── MARKET TIMER ── */
    .market-timer-bar{display:flex;align-items:center;justify-content:center;gap:1.5rem;padding:.65rem 1.5rem;border-bottom:1px solid transparent;backdrop-filter:blur(8px);transition:all .6s ease;position:relative;overflow:hidden;flex-wrap:wrap}
    .market-timer-bar::before{content:'';position:absolute;inset:0;opacity:0;transition:opacity .6s ease;pointer-events:none}
    .market-timer-bar.market-open{background:linear-gradient(90deg,rgba(0,255,136,0.06),rgba(0,255,136,0.12),rgba(0,255,136,0.06));border-bottom-color:rgba(0,255,136,0.2)}
    .market-timer-bar.market-open::before{background:radial-gradient(ellipse at center,rgba(0,255,136,0.08) 0%,transparent 70%);opacity:1}
    .market-timer-bar.market-closed{background:linear-gradient(90deg,rgba(245,158,11,0.04),rgba(245,158,11,0.09),rgba(245,158,11,0.04));border-bottom-color:rgba(245,158,11,0.18)}
    .market-timer-bar.market-closed::before{background:radial-gradient(ellipse at center,rgba(245,158,11,0.06) 0%,transparent 70%);opacity:1}
    .mkt-status-pill{display:flex;align-items:center;gap:.5rem;padding:.28rem .8rem;border-radius:100px;font-size:.72rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;border:1px solid;white-space:nowrap}
    .mkt-ny-time{font-family:var(--mono);font-variant-numeric:tabular-nums;white-space:nowrap}
    .mkt-status-pill.open{background:rgba(0,255,136,0.12);border-color:rgba(0,255,136,0.5);color:#00ff88;box-shadow:0 0 12px rgba(0,255,136,0.15)}
    .mkt-status-pill.closed{background:rgba(245,158,11,0.1);border-color:rgba(245,158,11,0.4);color:#fbbf24}
    .mkt-pill-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
    .mkt-status-pill.open .mkt-pill-dot{animation:mkt-pulse-g 1.8s ease infinite}
    .mkt-status-pill.closed .mkt-pill-dot{animation:mkt-pulse-a 2.4s ease infinite}
    @keyframes mkt-pulse-g{0%,100%{box-shadow:0 0 0 0 rgba(0,255,136,0.6)}50%{box-shadow:0 0 0 4px rgba(0,255,136,0)}}
    @keyframes mkt-pulse-a{0%,100%{opacity:1}50%{opacity:.35}}
    .mkt-label{font-size:.72rem;color:var(--t2);text-transform:uppercase;letter-spacing:.07em;white-space:nowrap}
    .mkt-countdown{display:flex;align-items:baseline;gap:.35rem}
    .mkt-digits{font-family:var(--mono);font-size:1.35rem;font-weight:700;font-variant-numeric:tabular-nums;letter-spacing:.03em;line-height:1}
    .market-timer-bar.market-open .mkt-digits{color:#00ff88;text-shadow:0 0 18px rgba(0,255,136,0.45)}
    .market-timer-bar.market-closed .mkt-digits{color:#fbbf24;text-shadow:0 0 18px rgba(251,191,36,0.35)}
    .mkt-unit{font-size:.65rem;color:var(--t3);font-weight:500;letter-spacing:.06em;text-transform:uppercase;margin-left:-.2rem}
    .mkt-sub{font-size:.7rem;color:var(--t3);white-space:nowrap}
    @media(max-width:600px){.mkt-digits{font-size:1.1rem}.mkt-label{display:none}}
    /* ── LOGS BUTTON ── */
    .btn-logs{display:flex;align-items:center;gap:.4rem;padding:.45rem 1rem;font-size:.8125rem;font-weight:600;border-radius:8px;border:1px solid rgba(0,212,255,0.35);background:rgba(0,212,255,0.08);color:var(--cyan);cursor:pointer;font-family:var(--font);transition:all .2s}
    .btn-logs:hover{background:rgba(0,212,255,0.18);border-color:var(--cyan);box-shadow:0 0 12px rgba(0,212,255,0.2)}
    /* ── LOGS MODAL ── */
    .logs-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);z-index:1000;display:none;flex-direction:column;padding:1.25rem}
    .logs-overlay.open{display:flex}
    .logs-modal{background:#0a0f1e;border:1px solid rgba(0,212,255,0.25);border-radius:16px;display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden;box-shadow:0 25px 80px rgba(0,0,0,0.6)}
    .logs-header{display:flex;align-items:center;gap:.875rem;padding:1rem 1.25rem;border-bottom:1px solid rgba(0,212,255,0.12);flex-shrink:0}
    .logs-title{font-size:1rem;font-weight:700;background:linear-gradient(90deg,#fff,var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-right:auto}
    .logs-close{background:none;border:1px solid #334155;color:#94a3b8;border-radius:8px;cursor:pointer;padding:.35rem .75rem;font-size:.8rem;font-family:var(--font);transition:all .2s}
    .logs-close:hover{border-color:var(--cyan);color:var(--cyan)}
    .logs-toolbar{display:flex;align-items:center;gap:.75rem;padding:.875rem 1.25rem;border-bottom:1px solid rgba(0,212,255,0.08);flex-shrink:0;flex-wrap:wrap}
    .sev-pills{display:flex;gap:.375rem}
    .sev-pill{padding:.3rem .75rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;border:1px solid;cursor:pointer;transition:all .2s;font-family:var(--font);text-transform:uppercase}
    .sev-pill.all{border-color:#475569;color:#94a3b8;background:transparent}
    .sev-pill.all.active{background:#1e293b;border-color:#94a3b8;color:#f1f5f9}
    .sev-pill.debug{border-color:#6366f1;color:#818cf8;background:transparent}
    .sev-pill.debug.active{background:rgba(99,102,241,0.15);border-color:#6366f1;color:#a5b4fc}
    .sev-pill.info{border-color:#0ea5e9;color:#38bdf8;background:transparent}
    .sev-pill.info.active{background:rgba(14,165,233,0.12);border-color:#0ea5e9;color:#7dd3fc}
    .sev-pill.warning{border-color:#f59e0b;color:#fbbf24;background:transparent}
    .sev-pill.warning.active{background:rgba(245,158,11,0.12);border-color:#f59e0b;color:#fde68a}
    .sev-pill.error{border-color:#ef4444;color:#f87171;background:transparent}
    .sev-pill.error.active{background:rgba(239,68,68,0.12);border-color:#ef4444;color:#fca5a5}
    .sev-pill.critical{border-color:#dc2626;color:#f87171;background:transparent}
    .sev-pill.critical.active{background:rgba(220,38,38,0.2);border-color:#dc2626;color:#fca5a5;box-shadow:0 0 8px rgba(220,38,38,0.25)}
    .logs-search{flex:1;min-width:180px;background:#111827;border:1px solid #1e293b;border-radius:8px;padding:.4rem .8rem;color:#f1f5f9;font-family:var(--mono);font-size:.78rem;outline:none;transition:border-color .2s}
    .logs-search:focus{border-color:rgba(0,212,255,0.45);box-shadow:0 0 0 3px rgba(0,212,255,0.08)}
    .logs-search::placeholder{color:#475569}
    .btn-refresh{padding:.4rem .875rem;background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(0,212,255,0.08));border:1px solid rgba(0,212,255,0.35);color:var(--cyan);border-radius:8px;cursor:pointer;font-size:.78rem;font-family:var(--font);font-weight:600;transition:all .2s}
    .btn-refresh:hover{background:rgba(0,212,255,0.2);transform:scale(1.03)}
    .logs-body{flex:1;overflow-y:auto;padding:.5rem 0}
    .logs-table{width:100%;border-collapse:collapse}
    .logs-table th{text-align:left;padding:.5rem 1.25rem;color:#475569;font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid #0f172a;position:sticky;top:0;background:#0a0f1e;z-index:1}
    .logs-table td{padding:.45rem 1.25rem;border-bottom:1px solid rgba(255,255,255,0.03);font-size:.75rem;vertical-align:top;font-family:var(--mono)}
    .log-ts{color:#475569;white-space:nowrap;min-width:170px}
    .log-sev{font-weight:700;white-space:nowrap;min-width:70px;text-transform:uppercase;font-size:.68rem;letter-spacing:.06em}
    .log-sev.DEFAULT,.log-sev.DEBUG{color:#818cf8}
    .log-sev.INFO{color:#38bdf8}
    .log-sev.WARNING{color:#fbbf24}
    .log-sev.ERROR{color:#f87171}
    .log-sev.CRITICAL{color:#f87171;text-shadow:0 0 8px rgba(248,113,113,0.5)}
    .log-msg{color:#cbd5e1;word-break:break-word;line-height:1.5}
    .log-row:hover td{background:rgba(0,212,255,0.03)}
    .logs-footer{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.25rem;border-top:1px solid rgba(0,212,255,0.08);flex-shrink:0;font-size:.78rem;color:#475569}
    .logs-count{font-family:var(--mono)}
    .logs-pager{display:flex;align-items:center;gap:.5rem}
    .btn-page{padding:.3rem .75rem;background:#111827;border:1px solid #1e293b;border-radius:6px;color:#94a3b8;cursor:pointer;font-size:.75rem;font-family:var(--font);transition:all .2s}
    .btn-page:hover:not(:disabled){border-color:var(--cyan);color:var(--cyan)}
    .btn-page:disabled{opacity:.35;cursor:not-allowed}
    .logs-empty{text-align:center;padding:3rem;color:#475569;font-family:var(--mono);font-size:.82rem}
    .logs-loading{text-align:center;padding:3rem;color:var(--cyan);font-size:.82rem;animation:fade-pulse 1.4s ease infinite}
    @keyframes fade-pulse{0%,100%{opacity:.5}50%{opacity:1}}
    .log-highlight{background:rgba(253,224,71,0.15);border-radius:2px;color:#fde047}
    /* ── NAV BAR ── */
    nav.nav-bar{display:flex;align-items:center;gap:.25rem}
    .nav-btn{display:flex;align-items:center;gap:.4rem;padding:.4rem .9rem;font-size:.8125rem;font-weight:600;border-radius:8px;border:1px solid transparent;background:transparent;color:var(--t2);cursor:pointer;font-family:var(--font);transition:all .2s;white-space:nowrap}
    .nav-btn:hover{background:rgba(0,212,255,0.08);border-color:rgba(0,212,255,0.25);color:var(--t1)}
    /* ── PORTFOLIO MODAL ── */
    .portfolio-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);z-index:1000;display:none;flex-direction:column;padding:1.25rem}
    .portfolio-overlay.open{display:flex}
    .portfolio-modal{background:#0a0f1e;border:1px solid rgba(0,212,255,0.25);border-radius:16px;display:flex;flex-direction:column;width:100%;max-width:1200px;margin:0 auto;max-height:100%;overflow:hidden;box-shadow:0 25px 80px rgba(0,0,0,0.6)}
    .portfolio-header{display:flex;align-items:center;gap:.875rem;padding:1rem 1.25rem;border-bottom:1px solid rgba(0,212,255,0.12);flex-shrink:0}
    .portfolio-title{font-size:1rem;font-weight:700;background:linear-gradient(90deg,#fff,var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-right:auto}
    .portfolio-close{background:none;border:1px solid #334155;color:#94a3b8;border-radius:8px;cursor:pointer;padding:.35rem .75rem;font-size:.8rem;font-family:var(--font);transition:all .2s}
    .portfolio-close:hover{border-color:var(--cyan);color:var(--cyan)}
    .portfolio-body{flex:1;overflow-y:auto;padding:1.25rem;display:flex;flex-direction:column;gap:1.5rem}
    .portfolio-section-title{font-size:.875rem;font-weight:600;color:var(--t1);margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--border)}
    .ptable{width:100%;border-collapse:collapse}
    .ptable th{text-align:left;padding:.5rem .75rem;color:var(--t2);font-weight:500;text-transform:uppercase;font-size:.65rem;letter-spacing:.08em;border-bottom:1px solid #1e293b}
    .ptable td{padding:.55rem .75rem;border-bottom:1px solid #0f172a;vertical-align:middle;font-family:var(--mono);font-size:.78rem}
    .ptable tr:last-child td{border-bottom:none}
    .ptable tbody tr:hover td{background:rgba(0,212,255,0.03)}
    .p-pos{color:var(--green)}.p-neg{color:var(--red)}
    .p-buy{color:var(--green);font-weight:700}.p-sell{color:var(--red);font-weight:700}
    .portfolio-loading{text-align:center;padding:3rem;color:var(--cyan);font-size:.82rem;animation:fade-pulse 1.4s ease infinite}
    .portfolio-empty{text-align:center;padding:2rem;color:#475569;font-family:var(--mono);font-size:.82rem}
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
  <nav class="nav-bar">
    <button class="nav-btn" onclick="openPortfolio()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12V6L7 2l5 4v6h-3.5V9h-3v3H2z" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round"/></svg>
      Portfolio
    </button>
    <button class="nav-btn" onclick="openLogs()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="12" height="2" rx="1" fill="currentColor"/><rect x="1" y="6" width="9" height="2" rx="1" fill="currentColor"/><rect x="1" y="10" width="11" height="2" rx="1" fill="currentColor"/></svg>
      Logs
    </button>
  </nav>
  <div class="hdr-right">
    <div class="status-badge active" id="status-badge"><span class="sdot" id="status-dot"></span><span id="status-text">Loading...</span></div>
    <button id="toggle-btn" class="btn-toggle pause" onclick="togglePause()">Loading...</button>
  </div>
</header>
<!-- ── MARKET TIMER BAR ── -->
<div class="market-timer-bar" id="market-timer-bar">
  <div class="mkt-status-pill" id="mkt-pill">
    <span id="mkt-ny-time" class="mkt-ny-time">--:-- ET</span>
    <span class="mkt-pill-dot"></span>
    <span id="mkt-pill-text">Loading</span>
  </div>
  <span class="mkt-label" id="mkt-direction-label">—</span>
  <div class="mkt-countdown">
    <span class="mkt-digits" id="mkt-hours">—</span><span class="mkt-unit">h</span>
    <span class="mkt-digits" id="mkt-mins">—</span><span class="mkt-unit">m</span>
  </div>
  <span class="mkt-sub" id="mkt-sub"></span>
</div>
<div class="wrap">
  <div class="stats-grid">
    <div class="stat-card"><span class="stat-ico">💰</span><div class="stat-lbl">Total Equity</div><div class="stat-val cyan" id="eq-val">—</div><div class="stat-sub" id="eq-pnl-pct" style="font-size:.75rem;margin-top:.2rem;font-weight:600"></div></div>
    <div class="stat-card"><span class="stat-ico">💵</span><div class="stat-lbl">Cash</div><div class="stat-val cyan" id="cash-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">📅</span><div class="stat-lbl">Day Change</div><div class="stat-val" id="dc-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">📈</span><div class="stat-lbl">Total P&amp;L</div><div class="stat-val" id="pnl-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">⚡</span><div class="stat-lbl">Buying Power</div><div class="stat-val cyan" id="bp-val">—</div></div>
    <div class="stat-card"><span class="stat-ico">📊</span><div class="stat-lbl">vs S&amp;P 500</div><div class="stat-val" id="sp500-val">—</div><div class="stat-sub" id="sp500-sub" style="font-size:.68rem;margin-top:.2rem;color:var(--t3)"></div></div>
  </div>
  <div class="card" style="margin-bottom:1rem">
    <div class="chart-hdr" style="margin-bottom:0">
      <h2>🏦 Account Mode <span id="mode-note">Loading...</span></h2>
      <div class="legend" id="mode-switcher"></div>
    </div>
  </div>
  <div class="card" style="margin-bottom:1rem">
    <div class="chart-hdr">
      <h2>📊 Portfolio Performance <span id="chart-note" style="color:var(--t3);font-size:.75rem;font-weight:400"></span></h2>
      <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap">
        <div class="legend">
          <div class="legend-item"><span class="ldot" style="background:#00d4ff"></span>P&amp;L</div>
          <div class="legend-item"><span class="ldot" style="background:#00ff88"></span>Buy</div>
          <div class="legend-item"><span class="ldot" style="background:#ff4757"></span>Sell</div>
        </div>
        <div class="chart-period-nav">
          <button class="btn-period" id="btn-nav-prev" onclick="chartNav(-1)" title="Previous window">&#8592;</button>
          <button class="btn-period active" id="btn-period-1D" onclick="setPeriod('1D')">D</button>
          <button class="btn-period" id="btn-period-1W" onclick="setPeriod('1W')">W</button>
          <button class="btn-period" id="btn-period-1M" onclick="setPeriod('1M')">M</button>
          <button class="btn-period" id="btn-nav-next" onclick="chartNav(1)" title="Next window">&#8594;</button>
          <button class="btn-refresh" onclick="renderChart(true)" style="margin-left:.25rem" title="Refresh chart">⟳</button>
        </div>
      </div>
    </div>
    <div class="chart-box"><canvas id="portfolioChart"></canvas></div>
  </div>
  <div class="bottom-grid">
    <div class="card">
      <div class="sec-title">🧠 Agent Memory <button class="btn-refresh" onclick="fetchMemory()" style="margin-left:.5rem;font-size:.7rem;padding:.25rem .6rem" title="Refresh memory">⟳</button></div>
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

<!-- ── PORTFOLIO MODAL ─────────────────────────────────────────────────────── -->
<div class="portfolio-overlay" id="portfolio-overlay" onclick="handlePortfolioOverlayClick(event)">
  <div class="portfolio-modal" onclick="event.stopPropagation()">
    <div class="portfolio-header">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 15V7.5L9 3l6 4.5V15h-4.5v-4.5h-3V15H3z" stroke="#00d4ff" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>
      <span class="portfolio-title">📈 Portfolio</span>
      <button class="btn-refresh" onclick="loadPortfolio()" style="font-size:.75rem;padding:.3rem .7rem" title="Refresh">⟳ Refresh</button>
      <button class="portfolio-close" onclick="closePortfolio()">✕ Close</button>
    </div>
    <div class="portfolio-body" id="portfolio-body">
      <div class="portfolio-loading">Loading portfolio…</div>
    </div>
  </div>
</div>

<!-- ── CLOUD LOGS MODAL ────────────────────────────────────────────────────── -->
<div class="logs-overlay" id="logs-overlay" onclick="handleOverlayClick(event)">
  <div class="logs-modal" onclick="event.stopPropagation()">
    <div class="logs-header">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="2" width="16" height="2.5" rx="1.25" fill="#00d4ff"/><rect x="1" y="7.75" width="12" height="2.5" rx="1.25" fill="#00d4ff" opacity=".7"/><rect x="1" y="13.5" width="14" height="2.5" rx="1.25" fill="#00d4ff" opacity=".45"/></svg>
      <span class="logs-title">☁️ Cloud Logs</span>
      <span class="logs-count" id="logs-count"></span>
      <button class="logs-close" onclick="closeLogs()">✕ Close</button>
    </div>
    <div class="logs-toolbar">
      <div class="sev-pills">
        <button class="sev-pill all active" id="pill-all" onclick="setSeverity('')">All</button>
        <button class="sev-pill debug" id="pill-debug" onclick="setSeverity('DEBUG')">Debug</button>
        <button class="sev-pill info" id="pill-info" onclick="setSeverity('INFO')">Info</button>
        <button class="sev-pill warning" id="pill-warning" onclick="setSeverity('WARNING')">Warning</button>
        <button class="sev-pill error" id="pill-error" onclick="setSeverity('ERROR')">Error</button>
        <button class="sev-pill critical" id="pill-critical" onclick="setSeverity('CRITICAL')">Critical</button>
      </div>
      <button class="sev-pill all" id="pill-hide-http" onclick="toggleHideHttp()" title="Toggle Cloud Run HTTP access logs">Hide HTTP</button>
      <input class="logs-search" id="logs-search" type="search" placeholder="Search logs…" oninput="debounceSearch()">
      <button class="btn-refresh" onclick="loadLogs(true)">⟳ Refresh</button>
    </div>
    <div class="logs-body" id="logs-body">
      <div class="logs-loading">Loading cloud logs…</div>
    </div>
    <div class="logs-footer">
      <span class="logs-count" id="logs-footer-count">—</span>
      <div class="logs-pager">
        <button class="btn-page" id="btn-prev" onclick="goPage(-1)" disabled>← Prev</button>
        <span id="page-label" style="font-family:var(--mono);color:#94a3b8">Page 1</span>
        <button class="btn-page" id="btn-next" onclick="goPage(1)" disabled>Next →</button>
      </div>
    </div>
  </div>
</div>

<script>
  let chart=null;
  let selectedMode=null;
  // ── Chart time-window state ──────────────────────────────────────────────────
  // activePeriod: current zoom level ('1D' | '1W' | '1M')
  // chartOffset:  how many windows back from "now" are we viewing (0 = latest)
  // allHistory / allBuys / allSells: full dataset loaded from API for slicing
  let activePeriod='1D';
  let chartOffset=0;
  let allHistory=[];
  let allBuys=[];
  let allSells=[];
  let fullPeriodStart=0;
  let fullPeriodEnd=0;

  const WINDOW_MS={'1D':86400000,'1W':7*86400000,'1M':30*86400000};

  function formatMoney(value){
    return '$'+Number(value||0).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
  }
  ${getModeButtonsFunctionSource()}
  function clearDashboardStats(){
    document.getElementById('eq-val').innerText='—';
    document.getElementById('cash-val').innerText='—';
    document.getElementById('bp-val').innerText='—';
    document.getElementById('dc-val').innerText='—';
    document.getElementById('dc-val').className='stat-val';
    const pnlClr=document.getElementById('pnl-val');
    if(pnlClr){pnlClr.innerText='—';pnlClr.className='stat-val';}
    if(chart){chart.destroy();chart=null;}
  }
  async function selectMode(mode){
    selectedMode=mode;
    chartOffset=0;
    await renderChart(true);
  }

  function setPeriod(p){
    activePeriod=p;
    chartOffset=0;
    document.querySelectorAll('.btn-period[id^="btn-period-"]').forEach(b=>b.classList.remove('active'));
    document.getElementById('btn-period-'+p)?.classList.add('active');
    renderChart(true);
  }

  function chartNav(dir){
    chartOffset=Math.max(0,chartOffset-dir);
    sliceAndRenderWindow();
  }

  /** Slice allHistory/buys/sells to the active time window + offset, then update chart */
  function sliceAndRenderWindow(){
    if(!chart||allHistory.length===0) return;
    const winMs=WINDOW_MS[activePeriod]||WINDOW_MS['1W'];
    // windowEnd = fullPeriodEnd - (offset * winMs)
    const windowEnd=fullPeriodEnd - chartOffset*winMs;
    const windowStart=windowEnd - winMs;

    const slicedHistory=allHistory.filter(p=>p.x>=windowStart&&p.x<=windowEnd);
    const slicedBuys=allBuys.filter(p=>p.x>=windowStart&&p.x<=windowEnd);
    const slicedSells=allSells.filter(p=>p.x>=windowStart&&p.x<=windowEnd);

    chart.data.datasets[0].data=slicedHistory;
    chart.data.datasets[1].data=slicedBuys;
    chart.data.datasets[2].data=slicedSells;
    chart.options.scales.x.min=windowStart;
    chart.options.scales.x.max=windowEnd;
    chart.update('none');

    // Update nav button states
    const canGoBack=windowStart>fullPeriodStart;
    const canGoFwd=chartOffset>0;
    document.getElementById('btn-nav-prev').disabled=!canGoBack;
    document.getElementById('btn-nav-next').disabled=!canGoFwd;

    // Update note label
    const fmtDate=ms=>new Date(ms).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    document.getElementById('chart-note').innerText='· '+fmtDate(windowStart)+' — '+fmtDate(windowEnd);
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

  async function renderChart(forceReload){
    try{
      // Only hit the API when forceReload is true; otherwise just re-slice existing data
      if(!forceReload&&chart&&allHistory.length>0){
        sliceAndRenderWindow();
        return;
      }

      const params=new URLSearchParams();
      if(selectedMode) params.set('mode',selectedMode);
      params.set('period','1M'); // always fetch max history from API; we slice client-side
      const d=await(await fetch('/api/chart-data?'+params.toString())).json();

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

      const pnlVal=d.currentPnl??0;
      const pnlEl=document.getElementById('pnl-val');
      if(pnlEl){
        pnlEl.innerText=(pnlVal>=0?'+$':'-$')+Math.abs(pnlVal).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
        pnlEl.className='stat-val '+(pnlVal>=0?'green':'red');
      }

      // Show P&L% in parentheses under Total Equity
      const pnlPct=d.currentPnlPct??0;
      const pnlPctEl=document.getElementById('eq-pnl-pct');
      if(pnlPctEl){
        const sign=pnlPct>=0?'+':'';
        pnlPctEl.innerText='('+sign+pnlPct.toFixed(2)+'% return)';
        pnlPctEl.style.color=pnlPct>=0?'var(--green)':'var(--red)';
      }

      const changeLabel=(d.dayChange>=0?'+':'-')+formatMoney(Math.abs(d.dayChange)).replace('$','')+' ('+((d.dayChangePct*100)>=0?'+':'')+(d.dayChangePct*100).toFixed(2)+'%)';
      document.getElementById('dc-val').innerText=changeLabel;
      document.getElementById('dc-val').className='stat-val '+(d.dayChange>=0?'green':'red');
      document.getElementById('mode-note').innerText='· '+d.modeLabel;
      setModeButtons(d.availableModes||[], d.mode);

      // Store full dataset
      allHistory=d.history||[];
      allBuys=d.buys||[];
      allSells=d.sells||[];
      fullPeriodStart=d.periodStart||0;
      fullPeriodEnd=d.periodEnd||Date.now();

      if(allHistory.length===0){
        document.getElementById('chart-note').innerText=d.historyUnavailableMessage?'· '+d.historyUnavailableMessage:'';
      }

      // Build initial window: activePeriod from the latest data point
      const winMs=WINDOW_MS[activePeriod]||WINDOW_MS['1D'];
      const windowEnd=fullPeriodEnd;
      const windowStart=windowEnd-winMs;

      const slicedHistory=allHistory.filter(p=>p.x>=windowStart&&p.x<=windowEnd);
      const slicedBuys=allBuys.filter(p=>p.x>=windowStart&&p.x<=windowEnd);
      const slicedSells=allSells.filter(p=>p.x>=windowStart&&p.x<=windowEnd);

      const ctx=document.getElementById('portfolioChart').getContext('2d');
      if(chart){chart.destroy();}

      const timeUnit=activePeriod==='1D'?'hour':(activePeriod==='1W'?'day':'week');

      chart=new Chart(ctx,{
        type:'line',
        data:{datasets:[
          {
            label:'P&L ($)',
            data:slicedHistory,
            borderColor:'#00d4ff',
            // Fill green above zero, red below zero — determined dynamically in tooltip
            backgroundColor:'rgba(0,212,255,0.07)',
            borderWidth:2,
            fill:true,
            pointRadius:0,
            pointHoverRadius:3,
            tension:0.2,
            order:2
          },
          {
            type:'scatter',
            label:'Buy',
            data:slicedBuys,
            backgroundColor:'#00ff88',
            borderColor:'#0a0f1e',
            borderWidth:1.5,
            pointRadius:8,
            pointHoverRadius:11,
            pointStyle:'triangle',
            order:1
          },
          {
            type:'scatter',
            label:'Sell',
            data:slicedSells,
            backgroundColor:'#ff4757',
            borderColor:'#0a0f1e',
            borderWidth:1.5,
            pointRadius:8,
            pointHoverRadius:11,
            pointStyle:'rectRot',
            order:1
          }
        ]},
        options:{
          responsive:true,
          maintainAspectRatio:false,
          animation:false,
          interaction:{mode:'nearest',intersect:false,axis:'x'},
          plugins:{
            legend:{display:false},
            tooltip:{
              backgroundColor:'rgba(15,23,42,0.95)',
              borderColor:'rgba(0,212,255,0.35)',
              borderWidth:1,
              titleColor:'#94a3b8',
              bodyColor:'#f1f5f9',
              padding:12,
              cornerRadius:8,
              callbacks:{
                title:function(items){
                  const ts=items[0]?.parsed?.x;
                  if(!ts) return '';
                  return new Date(ts).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:true});
                },
                label:function(c){
                  const raw=c.raw;
                  if(raw&&typeof raw==='object'&&raw.symbol){
                    const action=c.dataset.label;
                    const val=parseFloat(raw.price).toFixed(2);
                    const qty=raw.qty;
                    const total=(parseFloat(raw.price)*parseFloat(raw.qty)).toFixed(2);
                    return action+': '+raw.symbol+' — '+qty+' shs @ $'+val+' = $'+total;
                  }
                  const pnl=c.parsed.y;
                  const sign=pnl>=0?'+':'';
                  return 'P&L: '+sign+'$'+pnl.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
                }
              }
            }
          },
          scales:{
            x:{
              type:'time',
              min:windowStart,
              max:windowEnd,
              time:{unit:timeUnit,displayFormats:{hour:'h:mm a',day:'MMM d',week:'MMM d'}},
              ticks:{color:'#475569',maxRotation:0,autoSkip:true,maxTicksLimit:8},
              grid:{color:'rgba(0,212,255,0.05)'}
            },
            y:{
              ticks:{color:'#475569',callback:function(v){
                const n=Number(v);
                const sign=n>=0?'+':'-';
                return sign+'$'+Math.abs(n).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
              }},
              grid:{color:'rgba(0,212,255,0.05)'},
              // Draw a zero-line in a distinct colour
              border:{color:'rgba(0,212,255,0.2)'}
            }
          }
        }
      });

      sliceAndRenderWindow();
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

  async function fetchSP500(){
    try{
      const d=await(await fetch('/api/sp500-comparison')).json();
      const el=document.getElementById('sp500-val');
      const sub=document.getElementById('sp500-sub');
      if(d.error||d.changePct==null){if(el)el.innerText='N/A';return;}
      const pct=d.changePct;
      const sign=pct>=0?'+':'';
      if(el){
        el.innerText=sign+pct.toFixed(2)+'%';
        el.className='stat-val '+(pct>=0?'green':'red');
      }
      if(sub){
        const startDate=d.startDate?new Date(d.startDate).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'';
        sub.innerText='SPY since '+startDate;
      }
    }catch(e){console.warn('sp500 fetch failed',e);}
  }

  // ── PORTFOLIO ────────────────────────────────────────────────────────────────
  function fmtNum(v){return parseFloat(v||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
  function openPortfolio(){
    document.getElementById('portfolio-overlay').classList.add('open');
    document.body.style.overflow='hidden';
    loadPortfolio();
  }
  function closePortfolio(){
    document.getElementById('portfolio-overlay').classList.remove('open');
    document.body.style.overflow='';
  }
  function handlePortfolioOverlayClick(e){
    if(e.target===document.getElementById('portfolio-overlay')) closePortfolio();
  }
  async function loadPortfolio(){
    const body=document.getElementById('portfolio-body');
    body.innerHTML='<div class="portfolio-loading">Loading portfolio…</div>';
    const params=new URLSearchParams();
    if(selectedMode) params.set('mode',selectedMode);
    try{
      const d=await(await fetch('/api/portfolio?'+params.toString())).json();
      if(d.error){
        body.innerHTML='<div class="portfolio-empty">⚠ '+escH(d.error)+'</div>';
        return;
      }
      let html='';
      // ── Holdings ──
      html+='<div><div class="portfolio-section-title">🏦 Current Holdings</div>';
      const positions=d.positions||[];
      if(positions.length===0){
        html+='<div class="portfolio-empty">No open positions.</div>';
      }else{
        html+='<table class="ptable"><thead><tr><th>Symbol</th><th>Qty</th><th>Avg Entry</th><th>Current Price</th><th>Market Value</th><th>Cost Basis</th><th>Unrealized P&L</th><th>P&L %</th></tr></thead><tbody>';
        for(const p of positions){
          const pnl=parseFloat(p.unrealized_pl||0);
          const pnlPct=parseFloat(p.unrealized_plpc||0)*100;
          const cls=pnl>=0?'p-pos':'p-neg';
          html+='<tr><td style="color:var(--t1);font-weight:600">'+escH(p.symbol)+'</td>';
          html+='<td>'+escH(String(p.qty))+'</td>';
          html+='<td>$'+fmtNum(p.avg_entry_price)+'</td>';
          html+='<td>$'+fmtNum(p.current_price)+'</td>';
          html+='<td>$'+fmtNum(p.market_value)+'</td>';
          html+='<td>$'+fmtNum(p.cost_basis)+'</td>';
          html+='<td class="'+cls+'">'+(pnl>=0?'+':'')+fmtNum(pnl)+'</td>';
          html+='<td class="'+cls+'">'+(pnlPct>=0?'+':'')+pnlPct.toFixed(2)+'%</td></tr>';
        }
        html+='</tbody></table>';
      }
      html+='</div>';
      // ── Trade History ──
      html+='<div><div class="portfolio-section-title">📋 Trade History</div>';
      const trades=d.trades||[];
      if(trades.length===0){
        html+='<div class="portfolio-empty">No trades found.</div>';
      }else{
        html+='<table class="ptable"><thead><tr><th>Date</th><th>Symbol</th><th>Action</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>';
        for(const t of trades){
          const dt=new Date(t.transaction_time).toLocaleString('en-US',{month:'short',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:true});
          const total=(parseFloat(t.price||0)*parseFloat(t.qty||0)).toFixed(2);
          const cls=t.side==='buy'?'p-buy':'p-sell';
          html+='<tr><td style="color:var(--t2);white-space:nowrap">'+escH(dt)+'</td>';
          html+='<td style="color:var(--t1);font-weight:600">'+escH(t.symbol||'—')+'</td>';
          html+='<td class="'+cls+'">'+escH((t.side||'').toUpperCase())+'</td>';
          html+='<td>'+escH(String(t.qty||'—'))+'</td>';
          html+='<td>$'+fmtNum(t.price)+'</td>';
          html+='<td>$'+escH(total)+'</td></tr>';
        }
        html+='</tbody></table>';
      }
      html+='</div>';
      body.innerHTML=html;
    }catch(err){
      body.innerHTML='<div class="portfolio-empty">Failed to load portfolio: '+escH(String(err))+'</div>';
    }
  }

  // ── CLOUD LOGS ──────────────────────────────────────────────────────────────
  const logsState={
    severity:'',
    search:'',
    hideHttp:true,     // hide Cloud Run HTTP access logs by default
    page:0,
    pageTokens:[''],   // pageTokens[i] = token to fetch page i
    lastCount:0,
    debounceTimer:null,
  };

  function toggleHideHttp(){
    logsState.hideHttp=!logsState.hideHttp;
    const btn=document.getElementById('pill-hide-http');
    if(logsState.hideHttp){btn.classList.add('active');}else{btn.classList.remove('active');}
    loadLogs(true);
  }

  // Start with hide-http active (matches default state)
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('pill-hide-http')?.classList.add('active');
  });

  function openLogs(){
    document.getElementById('logs-overlay').classList.add('open');
    document.body.style.overflow='hidden';
    if(logsState.lastCount===0) loadLogs(true);
  }
  function closeLogs(){
    document.getElementById('logs-overlay').classList.remove('open');
    document.body.style.overflow='';
  }
  function handleOverlayClick(e){
    if(e.target===document.getElementById('logs-overlay')) closeLogs();
  }

  function setSeverity(sev){
    logsState.severity=sev;
    document.querySelectorAll('.sev-pill').forEach(p=>p.classList.remove('active'));
    const id=sev?'pill-'+sev.toLowerCase():'pill-all';
    document.getElementById(id)?.classList.add('active');
    loadLogs(true);
  }

  let _searchTimer=null;
  function debounceSearch(){
    clearTimeout(_searchTimer);
    _searchTimer=setTimeout(()=>{
      logsState.search=document.getElementById('logs-search').value.trim();
      loadLogs(true);
    },400);
  }

  function goPage(dir){
    const next=logsState.page+dir;
    if(next<0) return;
    logsState.page=next;
    if(!logsState.pageTokens[next]) return;
    loadLogs(false);
  }

  function escH(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

  function displaySeverity(severity,message){
    const normalized=String(severity||'').toUpperCase();
    if(normalized && normalized!=='DEFAULT') return normalized;
    if(/\|\s*ERROR\s*\|/i.test(message)) return 'ERROR';
    if(/\|\s*WARN\s*\|/i.test(message)) return 'WARNING';
    if(/\|\s*INFO\s*\|/i.test(message)) return 'INFO';
    if(/\|\s*DEBUG\s*\|/i.test(message)) return 'DEBUG';
    return 'DEFAULT';
  }

  function highlight(text,search){
    if(!search) return escH(text);
    const esc=escH(text);
    const idx=esc.toLowerCase().indexOf(search.toLowerCase());
    if(idx<0) return esc;
    return esc.substring(0,idx)+'<mark class="log-highlight">'+esc.substring(idx,idx+search.length)+'</mark>'+esc.substring(idx+search.length);
  }

  function fmtTs(iso){
    if(!iso) return '';
    try{
      const d=new Date(iso);
      return d.toLocaleString('en-US',{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
    }catch{return iso;}
  }

  async function loadLogs(reset){
    if(reset){
      logsState.page=0;
      logsState.pageTokens=[''];
    }
    const body=document.getElementById('logs-body');
    body.innerHTML='<div class="logs-loading">Fetching logs…</div>';
    document.getElementById('btn-prev').disabled=true;
    document.getElementById('btn-next').disabled=true;

    const token=logsState.pageTokens[logsState.page]??'';
    const params=new URLSearchParams({limit:'50'});
    if(logsState.severity) params.set('severity',logsState.severity);
    if(logsState.search) params.set('search',logsState.search);
    if(logsState.hideHttp) params.set('hideHttp','1');
    if(token) params.set('pageToken',token);

    try{
      const res=await fetch('/api/logs?'+params.toString());
      const data=await res.json();

      if(data.error){
        body.innerHTML='<div class="logs-empty">⚠ '+escH(data.error)+'</div>';
        document.getElementById('logs-footer-count').textContent='Error fetching logs';
        return;
      }

      const entries=data.entries||[];
      logsState.lastCount=entries.length;

      if(data.nextPageToken && !logsState.pageTokens[logsState.page+1]){
        logsState.pageTokens[logsState.page+1]=data.nextPageToken;
      }

      // Render table
      if(entries.length===0){
        body.innerHTML='<div class="logs-empty">No log entries found.</div>';
      } else {
        let h='<table class="logs-table"><thead><tr><th>Timestamp</th><th>Level</th><th>Message</th></tr></thead><tbody>';
        for(const e of entries){
          const sev=displaySeverity(e.severity,e.message||'');
          h+='<tr class="log-row">';
          h+='<td class="log-ts">'+escH(fmtTs(e.timestamp))+'</td>';
          h+='<td class="log-sev '+escH(sev)+'">'+escH(sev)+'</td>';
          h+='<td class="log-msg">'+highlight(e.message||'',logsState.search)+'</td>';
          h+='</tr>';
        }
        h+='</tbody></table>';
        body.innerHTML=h;
      }

      const pageNum=logsState.page+1;
      document.getElementById('page-label').textContent='Page '+pageNum;
      document.getElementById('logs-footer-count').textContent=entries.length+' entries (page '+pageNum+')';
      document.getElementById('btn-prev').disabled=logsState.page===0;
      document.getElementById('btn-next').disabled=!logsState.pageTokens[logsState.page+1];

    }catch(err){
      body.innerHTML='<div class="logs-empty">Failed to load logs: '+escH(String(err))+'</div>';
    }
  }

  // Keyboard shortcut: Escape closes open modals
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeLogs();closePortfolio();}
  });

  fetchStatus();fetchMemory();renderChart(true);fetchCommits();fetchSP500();
  // Only poll status (paused/active badge) — everything else is on-demand via refresh buttons.
  setInterval(fetchStatus, 20000);

  // ── MARKET TIMER (Alpaca-powered) ───────────────────────────────────────────
  (function initMarketTimer(){
    // clock snapshot fetched once from /api/market-clock (Alpaca /v2/clock)
    // { is_open: bool, next_open: ISO, next_close: ISO }
    let clockSnapshot=null;
    // When the current target timestamp expires we re-fetch
    let targetMs=null;   // next_close (if open) or next_open (if closed) as ms
    let marketIsOpen=false;

    function pad2(n){return String(n).padStart(2,'0');}

    function fmtEtTime(ms){
      return new Date(ms).toLocaleTimeString('en-US',{timeZone:'America/New_York',hour:'numeric',minute:'2-digit',hour12:true});
    }
    function fmtCurrentEtTime(){
      return new Date().toLocaleTimeString('en-US',{timeZone:'America/New_York',hour:'2-digit',minute:'2-digit',hour12:false})+' ET';
    }
    function fmtEtDate(ms){
      const d=new Date(ms);
      const today=new Date();
      const tomorrow=new Date(today);tomorrow.setDate(today.getDate()+1);
      const etDate=d.toLocaleDateString('en-US',{timeZone:'America/New_York',weekday:'long',month:'short',day:'numeric'});
      const todayEt=today.toLocaleDateString('en-US',{timeZone:'America/New_York',month:'short',day:'numeric'});
      const tomorrowEt=tomorrow.toLocaleDateString('en-US',{timeZone:'America/New_York',month:'short',day:'numeric'});
      const justDate=d.toLocaleDateString('en-US',{timeZone:'America/New_York',month:'short',day:'numeric'});
      if(justDate===todayEt) return 'today';
      if(justDate===tomorrowEt) return 'tomorrow';
      return etDate;
    }

    function renderTimer(){
      if(!clockSnapshot) return;
      const nowMs=Date.now();
      const diffMs=Math.max(0,targetMs-nowMs);
      const diffMin=Math.floor(diffMs/60000);
      const hh=Math.floor(diffMin/60);
      const mm=diffMin%60;

      const bar=document.getElementById('market-timer-bar');
      const pill=document.getElementById('mkt-pill');
      const nyTimeEl=document.getElementById('mkt-ny-time');
      const pillTxt=document.getElementById('mkt-pill-text');
      const dirLabel=document.getElementById('mkt-direction-label');
      const hoursEl=document.getElementById('mkt-hours');
      const minsEl=document.getElementById('mkt-mins');
      const subEl=document.getElementById('mkt-sub');

      nyTimeEl.textContent=fmtCurrentEtTime();

      if(marketIsOpen){
        bar.className='market-timer-bar market-open';
        pill.className='mkt-status-pill open';
        pillTxt.textContent='Market Open';
        dirLabel.textContent='Closes in';
        subEl.textContent='Closes '+fmtEtDate(targetMs)+' at '+fmtEtTime(targetMs)+' ET';
      } else {
        bar.className='market-timer-bar market-closed';
        pill.className='mkt-status-pill closed';
        pillTxt.textContent='Market Closed';
        dirLabel.textContent='Opens in';
        subEl.textContent='Opens '+fmtEtDate(targetMs)+' at '+fmtEtTime(targetMs)+' ET';
      }
      hoursEl.textContent=pad2(hh);
      minsEl.textContent=pad2(mm);

      // If the target has passed, re-fetch fresh clock data
      if(diffMs===0) fetchClock();
    }

    async function fetchClock(){
      try{
        const d=await(await fetch('/api/market-clock')).json();
        if(d.error){console.warn('market-clock error:',d.error);return;}
        clockSnapshot=d;
        marketIsOpen=!!d.is_open;
        targetMs=marketIsOpen ? new Date(d.next_close).getTime() : new Date(d.next_open).getTime();
        renderTimer();
      }catch(e){console.warn('market-clock fetch failed',e);}
    }

    // Fetch once on load, then re-fetch when the target passes
    fetchClock();
    // Tick every 60 s to keep countdown current; aligned to minute boundary
    const secNow=new Date().getSeconds();
    setTimeout(()=>{renderTimer();setInterval(renderTimer,60000);},(60-secNow)*1000);
  })();
</script>
</body>
</html>`, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  })

  .get('/api/status', () => {
    return { paused: getPaused() };
  })
  .post('/api/toggle', () => {
    setPaused(!getPaused());
    return { paused: getPaused() };
  })
  .get('/api/market-clock', async () => {
    // Return cached result if still fresh
    if (clockCache && Date.now() < clockCache.expiresAt) {
      return clockCache.data;
    }
    try {
      const { defaultMode } = getConfiguredAlpacaModes();
      const creds = resolveAlpacaCredentials(defaultMode);
      if (!creds) throw new Error('Alpaca credentials not configured');
      const baseUrl = creds.paper
        ? 'https://paper-api.alpaca.markets'
        : 'https://api.alpaca.markets';
      const res = await fetch(`${baseUrl}/v2/clock`, {
        headers: {
          'APCA-API-KEY-ID': creds.keyId,
          'APCA-API-SECRET-KEY': creds.secretKey,
        },
      });
      if (!res.ok) {
        const errText = await res.text();
        logger.warn({ status: res.status, body: errText }, 'Alpaca clock API error');
        return { error: `Alpaca clock API ${res.status}` };
      }
      const data = await res.json() as MarketClockData;
      clockCache = { data, expiresAt: Date.now() + CLOCK_CACHE_TTL_MS };
      return data;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'market-clock fetch failed');
      return { error: msg };
    }
  })
  .get('/api/memory', async () => {
    try {
      const memory = await fs.readFile('memory/MEMORY.md', 'utf8');
      return memory;
    } catch (e) {
      return "Memory file not found.";
    }
  })
  .get('/api/chart-data', async ({ query }: { query: { mode?: string; period?: string } }) => {
    const mode = resolveDashboardMode(query.mode);
    const { modes } = getConfiguredAlpacaModes();
    // Accept period override; default to '1M' so we fetch max history and slice client-side
    const validPeriods: ChartPeriod[] = ['1D', '1W', '1M'];
    const period: ChartPeriod = validPeriods.includes(query.period as ChartPeriod)
      ? (query.period as ChartPeriod)
      : '1M';

    const cacheKey = `${mode}:${period}`;
    const cached = chartDataCache.get(cacheKey);
    if (cached && Date.now() < cached.expiresAt) {
      return cached.data;
    }

    try {
      const alpaca = createAlpacaClient(mode);
      const deposits = await readDeposits();
      const data = await buildDashboardData(alpaca, period, deposits);

      const result = {
        ...data,
        mode,
        modeLabel: getAlpacaModeLabel(mode),
        availableModes: modes,
      };

      chartDataCache.set(cacheKey, { data: result, expiresAt: Date.now() + CHART_CACHE_TTL_MS });
      return result;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.error({ err: msg, mode }, 'chart-data API error');
      return {
        error: msg,
        mode,
        modeLabel: getAlpacaModeLabel(mode),
        availableModes: modes,
      };
    }
  })

  // ─── Investment Deposits Ledger ──────────────────────────────────────────────
  .get('/api/deposits', async () => {
    try {
      const entries = await readDeposits();
      return { deposits: entries };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg, deposits: [] };
    }
  })
  .post('/api/deposits', async ({ body }: { body: unknown }) => {
    try {
      const b = body as Partial<DepositEntry>;
      const amount = Number(b.amount);
      if (!Number.isFinite(amount) || amount === 0) {
        return { error: 'amount must be a non-zero number (positive = deposit, negative = withdrawal)' };
      }
      const at = b.at ? String(b.at) : new Date().toISOString();
      const note = b.note ? String(b.note) : undefined;
      const entry: DepositEntry = { amount, at, ...(note ? { note } : {}) };
      const entries = await addDeposit(entry);
      logger.info({ amount, at, note }, 'New investment deposit recorded');
      return { ok: true, deposits: entries };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.error({ err: msg }, 'Failed to record deposit');
      return { error: msg };
    }
  })
  // ─── S&P 500 Comparison ──────────────────────────────────────────────────────
  // Fetches SPY bar on first-deposit day and latest bar, returns % change.
  .get('/api/sp500-comparison', async () => {
    if (sp500Cache && Date.now() < sp500Cache.expiresAt) {
      return sp500Cache.data;
    }
    try {
      const deposits = await readDeposits();
      if (deposits.length === 0) {
        return { error: 'No deposits recorded yet', changePct: null };
      }

      // Use the earliest deposit as day-1 baseline
      const firstDeposit = deposits[0]!;
      const startDate = firstDeposit.at;

      const { defaultMode } = getConfiguredAlpacaModes();
      const creds = resolveAlpacaCredentials(defaultMode);
      if (!creds) return { error: 'Alpaca credentials not configured', changePct: null };

      // Alpaca market data API (separate host from brokerage API)
      const dataBase = 'https://data.alpaca.markets';
      const headers = {
        'APCA-API-KEY-ID': creds.keyId,
        'APCA-API-SECRET-KEY': creds.secretKey,
      };

      // ── Get original SPY value ──
      let spyStart: number;
      let spyStartDateStr: string | undefined;
      try {
        const spyCsv = await fs.readFile('./memory/spy.csv', 'utf8');
        spyStart = parseFloat(spyCsv.trim());
        if (Number.isNaN(spyStart)) throw new Error('Invalid spy.csv');
        spyStartDateStr = startDate;
      } catch (err) {
        // Fallback to fetch if file is missing
        const startDay = startDate.substring(0, 10);
        const endScan = new Date(startDay);
        endScan.setDate(endScan.getDate() + 7);
        const endScanStr = endScan.toISOString().substring(0, 10);

        const startRes = await fetch(
          `${dataBase}/v2/stocks/SPY/bars?timeframe=1Day&start=${startDay}&end=${endScanStr}&limit=1&feed=iex`,
          { headers },
        );

        if (!startRes.ok) {
          const errText = await startRes.text();
          logger.warn({ status: startRes.status, body: errText }, 'SPY start bar fetch failed');
          return { error: `Alpaca data API ${startRes.status}`, changePct: null };
        }
        const startData = await startRes.json() as { bars: { c: number, t: string }[] | null };
        const startBar = startData.bars?.[0];
        if (!startBar) {
          return { error: 'No SPY data found near first deposit date', changePct: null };
        }
        spyStart = startBar.c;
        spyStartDateStr = startBar.t;
        await fs.mkdir('./memory', { recursive: true }).catch(() => {});
        await fs.writeFile('./memory/spy.csv', spyStart.toString(), 'utf8');
      }

      interface AlpacaBar { t: string; o: number; c: number; h: number; l: number; v: number; }
      interface AlpacaBarsResponse { bars: AlpacaBar[] | null; }

      // ── Fetch latest SPY bar ──
      const today = new Date();
      const todayStr = today.toISOString().substring(0, 10);
      // Go back 7 days to ensure we capture the most recent closed trading day
      const lookbackDate = new Date(today);
      lookbackDate.setDate(lookbackDate.getDate() - 7);
      const lookbackStr = lookbackDate.toISOString().substring(0, 10);

      const latestRes = await fetch(
        `${dataBase}/v2/stocks/SPY/bars?timeframe=1Day&start=${lookbackStr}&end=${todayStr}&limit=10&feed=iex`,
        { headers },
      );
      if (!latestRes.ok) {
        const errText = await latestRes.text();
        logger.warn({ status: latestRes.status, body: errText }, 'SPY latest bar fetch failed');
        return { error: `Alpaca data API ${latestRes.status}`, changePct: null };
      }
      const latestData = await latestRes.json() as AlpacaBarsResponse;
      const bars = latestData.bars ?? [];
      const latestBar = bars[bars.length - 1];
      if (!latestBar) {
        return { error: 'No recent SPY bar found', changePct: null };
      }
      const spyCurrent = latestBar.c;

      const changePct = ((spyCurrent - spyStart) / spyStart) * 100;

      const result = {
        changePct: Math.round(changePct * 100) / 100,
        startDate: spyStartDateStr,
        latestDate: latestBar.t,
        spyStart: Math.round(spyStart * 100) / 100,
        spyCurrent: Math.round(spyCurrent * 100) / 100,
      };
      
      sp500Cache = { data: result, expiresAt: Date.now() + SP500_CACHE_TTL_MS };
      return result;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'sp500-comparison failed');
      return { error: msg, changePct: null };
    }
  })
  .get('/api/commits', async () => {
    const GITHUB_PAT = process.env.GITHUB_PAT ?? '';
    const GITHUB_REPO = process.env.GITHUB_REPO ?? 'Zebra66/stock-trader';
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'auto-stock-trader-dashboard',
    };
    if (GITHUB_PAT) headers['Authorization'] = `Bearer ${GITHUB_PAT}`;

    try {
      const since = getAgentCommitsSince();
      // Fetch up to 100 commits from the last week.
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/commits?per_page=${AGENT_COMMITS_LIMIT}&since=${encodeURIComponent(since)}`,
        { headers },
      );
      if (!res.ok) {
        const errText = await res.text();
        logger.warn({ status: res.status, body: errText }, 'GitHub commits API error');
        return { error: `GitHub API ${res.status}: ${errText}`, commits: [] };
      }
      const data = await res.json();
      const commits = summarizeRecentAgentCommits(data as Parameters<typeof summarizeRecentAgentCommits>[0]);

      return { commits };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'GitHub commits fetch failed');
      return { error: msg, commits: [] };
    }
  })
  .get('/api/commit/:hash', async ({ params }: { params: { hash: string } }) => {
    const { hash } = params;
    if (!/^[a-f0-9]{4,40}$/.test(hash)) {
      return { error: 'Invalid commit hash' };
    }
    const GITHUB_PAT = process.env.GITHUB_PAT ?? '';
    const GITHUB_REPO = process.env.GITHUB_REPO ?? 'Zebra66/stock-trader';
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'auto-stock-trader-dashboard',
    };
    if (GITHUB_PAT) headers['Authorization'] = `Bearer ${GITHUB_PAT}`;

    try {
      // GitHub's compare API returns a patch diff for a single commit
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/commits/${hash}`,
        { headers: { ...headers, 'Accept': 'application/vnd.github.diff' } },
      );
      if (!res.ok) {
        const errText = await res.text();
        return { error: `GitHub API ${res.status}: ${errText}` };
      }
      const diff = await res.text();
      return { hash, diff };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return { error: msg };
    }
  })

  // ─── Cloud Logs API ──────────────────────────────────────────────────────────
  // Query params:
  //   severity  – DEFAULT | DEBUG | INFO | WARNING | ERROR | CRITICAL
  //   search    – free-text filter (matched against textPayload)
  //   pageToken – opaque cursor returned by previous response
  //   limit     – max entries per page (default 50, max 200)
  .get('/api/logs', async ({ query }: { query: { severity?: string; search?: string; pageToken?: string; limit?: string; hideHttp?: string } }) => {
    const GCP_PROJECT = process.env.GCP_PROJECT ?? 'stock-auto-trader-495209';
    const SERVICE_NAME = process.env.CLOUD_RUN_SERVICE ?? 'stock-trader';
    const REGION = process.env.CLOUD_RUN_REGION ?? 'us-central1';

    const VALID_SEVERITIES = new Set(['DEFAULT', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']);
    const severity = query.severity && VALID_SEVERITIES.has(query.severity.toUpperCase())
      ? query.severity.toUpperCase()
      : '';
    const search = (query.search ?? '').trim();
    const pageToken = (query.pageToken ?? '').trim();
    const limit = Math.min(Math.max(parseInt(query.limit ?? '50', 10) || 50, 10), 200);
    const hideHttp = query.hideHttp === '1';

    // Build Cloud Logging filter (same syntax as gcloud logging read)
    let filter = `resource.type="cloud_run_revision" AND resource.labels.service_name="${SERVICE_NAME}" AND resource.labels.location="${REGION}"`;
    if (severity) filter += ` AND severity>=${severity}`;
    if (search) filter += ` AND textPayload:"${search.replace(/"/g, '')}"` ;
    // Exclude Cloud Run HTTP access logs (generated by the dashboard's own polling)
    if (hideHttp) filter += ' AND NOT httpRequest.requestUrl:*';
    try {
      // ── Get access token from GCP metadata server (works automatically in Cloud Run) ──
      const tokenRes = await fetch(
        'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token',
        { headers: { 'Metadata-Flavor': 'Google' } },
      );
      if (!tokenRes.ok) {
        const msg = `Metadata server returned ${tokenRes.status}. Is this running in Cloud Run?`;
        logger.warn(msg);
        return { error: msg, entries: [], nextPageToken: '' };
      }
      const { access_token } = await tokenRes.json() as { access_token: string };

      // ── Call Cloud Logging entries:list REST API ──
      interface LoggingRequestBody {
        resourceNames: string[];
        filter: string;
        orderBy: string;
        pageSize: number;
        pageToken?: string;
      }
      const body: LoggingRequestBody = {
        resourceNames: [`projects/${GCP_PROJECT}`],
        filter,
        orderBy: 'timestamp desc',
        pageSize: limit,
      };
      if (pageToken) body.pageToken = pageToken;

      const logsRes = await fetch('https://logging.googleapis.com/v2/entries:list', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!logsRes.ok) {
        const errText = await logsRes.text();
        logger.warn({ status: logsRes.status, body: errText }, 'Cloud Logging API error');
        return { error: `Cloud Logging API ${logsRes.status}: ${errText}`, entries: [], nextPageToken: '' };
      }

      interface HttpRequest {
        requestMethod?: string;
        requestUrl?: string;
        status?: number;
        latency?: string;
        responseSize?: string;
        userAgent?: string;
        remoteIp?: string;
      }
      interface LogEntry {
        timestamp?: string;
        severity?: string;
        textPayload?: string;
        jsonPayload?: Record<string, unknown>;
        httpRequest?: HttpRequest;
        protoPayload?: Record<string, unknown>;
        insertId?: string;
      }
      interface LogsApiResponse {
        entries?: LogEntry[];
        nextPageToken?: string;
      }
      const data = await logsRes.json() as LogsApiResponse;
      const rawEntries = data.entries ?? [];

      const entries = rawEntries.map((e) => {
        let message = '';
        if (e.textPayload) {
          // Plain-text log (formatted pino output via stdout)
          message = e.textPayload;
        } else if (e.jsonPayload) {
          // Structured JSON log — pino fields or arbitrary JSON
          const jp = e.jsonPayload;
          const msg = jp['msg'] ?? jp['message'] ?? jp['log'];
          message = typeof msg === 'string' ? msg : JSON.stringify(jp);
        } else if (e.httpRequest) {
          // Cloud Run HTTP access log
          const r = e.httpRequest;
          const latency = r.latency ? ` ${r.latency}` : '';
          const size = r.responseSize ? ` ${r.responseSize}B` : '';
          message = `${r.requestMethod ?? 'GET'} ${r.requestUrl ?? ''} → ${r.status ?? '?'}${latency}${size}`;
        } else if (e.protoPayload) {
          // Audit / proto log
          const pp = e.protoPayload;
          const methodName = pp['methodName'];
          const status = (pp['status'] as Record<string, unknown> | undefined);
          message = typeof methodName === 'string'
            ? `${methodName}${status ? ` [${JSON.stringify(status)}]` : ''}`
            : JSON.stringify(pp);
        }
        return {
          timestamp: e.timestamp ?? '',
          severity: deriveLogSeverity(e.severity, message),
          message,
          insertId: e.insertId ?? '',
        };
      });

      return {
        entries,
        nextPageToken: data.nextPageToken ?? '',
        total: entries.length,
      };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'cloud logs fetch failed');
      return { error: msg, entries: [], nextPageToken: '' };
    }
  })
  
  // ─── Portfolio Endpoint ──────────────────────────────────────────────────────
  .get('/api/portfolio', async ({ query }: { query: { mode?: string } }) => {
    const mode = resolveDashboardMode(query.mode);
    try {
      const creds = resolveAlpacaCredentials(mode);
      if (!creds) {
        return { error: `${getAlpacaModeLabel(mode)} credentials not configured`, positions: [], trades: [] };
      }
      const baseUrl = creds.paper ? 'https://paper-api.alpaca.markets' : 'https://api.alpaca.markets';
      const headers = {
        'APCA-API-KEY-ID': creds.keyId,
        'APCA-API-SECRET-KEY': creds.secretKey,
      };

      interface AlpacaPosition {
        symbol: string;
        qty: string;
        avg_entry_price: string;
        current_price: string;
        market_value: string;
        cost_basis: string;
        unrealized_pl: string;
        unrealized_plpc: string;
        side: string;
      }
      interface AlpacaTradeActivity {
        id: string;
        symbol?: string;
        side?: string;
        qty?: string;
        price?: string;
        transaction_time?: string;
      }

      const [posRes, actRes] = await Promise.all([
        fetch(`${baseUrl}/v2/positions`, { headers }),
        fetch(`${baseUrl}/v2/account/activities?activity_type=FILL&page_size=100`, { headers }),
      ]);

      if (!posRes.ok) {
        const errText = await posRes.text();
        logger.warn({ status: posRes.status }, 'portfolio positions API error');
        return { error: `Alpaca positions API ${posRes.status}: ${errText}`, positions: [], trades: [] };
      }
      if (!actRes.ok) {
        const errText = await actRes.text();
        logger.warn({ status: actRes.status }, 'portfolio activities API error');
        return { error: `Alpaca activities API ${actRes.status}: ${errText}`, positions: [], trades: [] };
      }

      const positions = await posRes.json() as AlpacaPosition[];
      const activities = await actRes.json() as AlpacaTradeActivity[];

      const trades = activities
        .filter((a) => !!a.transaction_time)
        .sort((a, b) => new Date(b.transaction_time!).getTime() - new Date(a.transaction_time!).getTime());

      return { positions, trades, mode };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.error({ err: msg, mode }, 'portfolio API error');
      return { error: msg, positions: [], trades: [] };
    }
  })

  // ─── Authentication Endpoints ────────────────────────────────────────────────
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
  })
  .listen(PORT);

logger.info({ port: PORT }, `Dashboard running at http://localhost:${PORT}`);

// Start background task to sync deposits hourly
import { syncDepositsFromAlpaca } from './deposits';
setInterval(syncDepositsFromAlpaca, 60 * 60 * 1000);
syncDepositsFromAlpaca().catch(err => logger.warn({ err }, 'Initial deposit sync failed'));
