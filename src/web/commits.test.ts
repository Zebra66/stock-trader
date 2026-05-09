import { describe, expect, test } from 'bun:test';

import { AGENT_COMMITS_LIMIT, getAgentCommitsSince, summarizeRecentAgentCommits, type GithubCommit } from './commits';

function buildCommit(index: number, message: string, date: string): GithubCommit {
  return {
    sha: `abcdef${String(index).padStart(34, '0')}`,
    commit: {
      author: { name: `Author ${index}`, date },
      message,
    },
  };
}

describe('commits helpers', () => {
  test('computes an ISO timestamp for one week ago', () => {
    expect(getAgentCommitsSince(Date.parse('2026-05-08T00:00:00.000Z'))).toBe('2026-05-01T00:00:00.000Z');
  });

  test('keeps only agent commits from the last week', () => {
    const now = Date.parse('2026-05-08T00:00:00.000Z');
    const commits = summarizeRecentAgentCommits([
      buildCommit(1, '[agent] recent commit\nbody', '2026-05-07T23:00:00.000Z'),
      buildCommit(2, '[agent] stale commit', '2026-04-30T23:59:59.000Z'),
      buildCommit(3, 'feat: human commit', '2026-05-07T22:00:00.000Z'),
    ], now);

    expect(commits).toEqual([
      {
        hash: 'abcdef0000000000000000000000000000000001',
        shortHash: 'abcdef0',
        author: 'Author 1',
        date: '2026-05-07T23:00:00.000Z',
        message: '[agent] recent commit',
      },
    ]);
  });

  test('caps the list at 100 entries', () => {
    const now = Date.parse('2026-05-08T00:00:00.000Z');
    const entries = Array.from({ length: AGENT_COMMITS_LIMIT + 5 }, (_, index) =>
      buildCommit(index, `[agent] commit ${index}`, '2026-05-07T12:00:00.000Z'),
    );

    const commits = summarizeRecentAgentCommits(entries, now);

    expect(commits).toHaveLength(AGENT_COMMITS_LIMIT);
    expect(commits[0]?.message).toBe('[agent] commit 0');
    expect(commits.at(-1)?.message).toBe(`[agent] commit ${AGENT_COMMITS_LIMIT - 1}`);
  });
});
