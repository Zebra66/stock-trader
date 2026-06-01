import { Elysia } from 'elysia';
import { getLogger } from '../../logger';

const logger = getLogger('web-server');

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

const SEV_RANKS: Record<string, number> = {
  'DEFAULT': 0,
  'DEBUG': 1,
  'INFO': 2,
  'WARNING': 3,
  'ERROR': 4,
  'CRITICAL': 5
};

export const logRoutes = new Elysia()
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

    let filter = `resource.type="cloud_run_revision" AND resource.labels.service_name="${SERVICE_NAME}" AND resource.labels.location="${REGION}"`;
    if (severity && severity !== 'DEFAULT') filter += ` AND (severity>=${severity} OR severity=DEFAULT)`;
    if (search) filter += ` AND textPayload:"${search.replace(/"/g, '')}"`;
    if (hideHttp) filter += ' AND NOT httpRequest.requestUrl:*';

    try {
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

      const body = {
        resourceNames: [`projects/${GCP_PROJECT}`],
        filter,
        orderBy: 'timestamp desc',
        pageSize: limit,
      };
      if (pageToken) (body as any).pageToken = pageToken;

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

      const data = await logsRes.json() as LogsApiResponse;
      const rawEntries = data.entries ?? [];

      const entries = rawEntries.map((e) => {
        let message = '';
        if (e.textPayload) {
          message = e.textPayload;
        } else if (e.jsonPayload) {
          const jp = e.jsonPayload;
          const msg = jp['msg'] ?? jp['message'] ?? jp['log'];
          message = typeof msg === 'string' ? msg : JSON.stringify(jp);
        } else if (e.httpRequest) {
          const r = e.httpRequest;
          const latency = r.latency ? ` ${r.latency}` : '';
          const size = r.responseSize ? ` ${r.responseSize}B` : '';
          message = `${r.requestMethod ?? 'GET'} ${r.requestUrl ?? ''} → ${r.status ?? '?'}${latency}${size}`;
        } else if (e.protoPayload) {
          const pp = e.protoPayload;
          const methodName = pp['methodName'];
          const status = (pp['status'] as Record<string, unknown> | undefined);
          message = typeof methodName === 'string'
            ? `${methodName}${status ? ` [${JSON.stringify(status)}]` : ''}`
            : JSON.stringify(pp);
        }

        let resolvedSeverity = (e.severity ?? 'DEFAULT').toUpperCase();

        if (e.jsonPayload && resolvedSeverity === 'DEFAULT') {
          const level = e.jsonPayload['level'];
          if (typeof level === 'number') {
            if (level >= 60) resolvedSeverity = 'CRITICAL';
            else if (level >= 50) resolvedSeverity = 'ERROR';
            else if (level >= 40) resolvedSeverity = 'WARNING';
            else if (level >= 30) resolvedSeverity = 'INFO';
            else if (level >= 20) resolvedSeverity = 'DEBUG';
          }
        }

        if (resolvedSeverity === 'DEFAULT' || resolvedSeverity === '') {
          const match = message.match(/\|\s*(DEBUG|INFO|WARN|WARNING|ERROR|FATAL|CRITICAL)\s*\|/i);
          if (match) {
            let matchedSev = match[1].toUpperCase();
            if (matchedSev === 'WARN') matchedSev = 'WARNING';
            if (matchedSev === 'FATAL') matchedSev = 'CRITICAL';
            resolvedSeverity = matchedSev;
          }
        }

        return {
          timestamp: e.timestamp ?? '',
          severity: resolvedSeverity,
          message,
          insertId: e.insertId ?? '',
        };
      });

      const targetRank = severity ? (SEV_RANKS[severity] ?? 0) : 0;
      const filteredEntries = entries.filter((e) => {
        const rank = SEV_RANKS[e.severity] ?? 0;
        return rank >= targetRank;
      });

      return {
        entries: filteredEntries,
        nextPageToken: data.nextPageToken ?? '',
        total: filteredEntries.length,
      };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      logger.warn({ err: msg }, 'cloud logs fetch failed');
      return { error: msg, entries: [], nextPageToken: '' };
    }
  });
