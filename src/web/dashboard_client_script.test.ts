import { describe, expect, test } from 'bun:test';

import { getModeButtonsFunctionSource } from './dashboard_client_script';

describe('getModeButtonsFunctionSource', () => {
  test('keeps the onclick mode argument properly escaped in delivered HTML', () => {
    const source = getModeButtonsFunctionSource();

    expect(source).toContain(`onclick="selectMode(\\'`);
    expect(source).not.toContain(`onclick="selectMode(''+mode.mode+'')"`);
  });
});
