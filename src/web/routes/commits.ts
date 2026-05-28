import { Elysia } from 'elysia';
import { getLogger } from '../../logger';

const logger = getLogger('web-server');

interface GithubCommit {
  sha: string;
  commit: {
    author: { name: string; date: string };
    message: string;
  };
}

export const commitRoutes = new Elysia()
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
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/commits?per_page=100`,
        { headers },
      );
      if (!res.ok) {
        const errText = await res.text();
        logger.warn({ status: res.status, body: errText }, 'GitHub commits API error');
        return { error: `GitHub API ${res.status}: ${errText}`, commits: [] };
      }

      const data = await res.json() as GithubCommit[];
      const commits = data
        .filter((c) => c.commit.message.startsWith('[agent]'))
        .map((c) => ({
          hash: c.sha,
          shortHash: c.sha.substring(0, 7),
          author: c.commit.author.name,
          date: c.commit.author.date,
          message: c.commit.message.split('\n')[0] ?? c.commit.message,
        }));

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
  });
