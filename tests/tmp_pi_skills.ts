import { loadSkillsFromDir, formatSkillsForPrompt } from '@mariozechner/pi-coding-agent';
import fs from 'fs';
import path from 'path';

async function main() {
  try {
    const dir = path.join(process.cwd(), '.claude/skills');
    if (fs.existsSync(dir)) {
      const skills = loadSkillsFromDir(dir);
      console.log('Skills loaded:', skills);
      console.log('Formatted prompt:', formatSkillsForPrompt(skills));
    } else {
      console.log('No skills directory found.');
    }
  } catch(e) {
    console.error(e);
  }
}
main();
