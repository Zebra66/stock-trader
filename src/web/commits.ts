export interface GithubCommit {
  sha: string;
  commit: {
    author: { name: string; date: string };
    message: string;
  };
}

export interface AgentCommitSummary {
  hash: string;
  shortHash: string;
  author: string;
  date: string;
  message: string;
}

const AGENT_COMMIT_PREFIX = '[agent]';
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
export const AGENT_COMMITS_LIMIT = 100;

export function getAgentCommitsSince(now = Date.now()): string {
  return new Date(now - ONE_WEEK_MS).toISOString();
}

export function summarizeRecentAgentCommits(data: GithubCommit[], now = Date.now()): AgentCommitSummary[] {
  const sinceMs = now - ONE_WEEK_MS;

  return data
    .filter((c) => {
      if (!c.commit.message.startsWith(AGENT_COMMIT_PREFIX)) {
        return false;
      }

      const commitDateMs = Date.parse(c.commit.author.date);
      return Number.isFinite(commitDateMs) && commitDateMs >= sinceMs;
    })
    .slice(0, AGENT_COMMITS_LIMIT)
    .map((c) => ({
      hash: c.sha,
      shortHash: c.sha.substring(0, 7),
      author: c.commit.author.name,
      date: c.commit.author.date,
      message: c.commit.message.split('\n')[0] ?? c.commit.message,
    }));
}
