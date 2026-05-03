import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
async function main() {
  try {
    const res = await ai.models.list();
    for await (const m of res) console.log(m.name);
  } catch (e) { console.error(e); }
}
main();
