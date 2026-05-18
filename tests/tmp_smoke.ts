import { runOpencodePrompt } from '../src/opencode_runner';

async function main() {
  console.log("Starting prompt with google provider...");
  try {
    await runOpencodePrompt({
      mode: 'hourly',
      model: 'google/gemini-3.1-pro-preview',
      prompt: "Say 'Hello World' and do nothing else. Don't use tools."
    });
    console.log("Finished successfully");
  } catch (e) {
    console.error("Failed:", e);
  }
}
main();
