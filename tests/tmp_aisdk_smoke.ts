import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = google('gemini-3.1-pro-preview');

console.log('Generating text...');
try {
  const { text } = await generateText({
    model,
    prompt: 'Say "Hello World" and do nothing else.',
  });
  console.log('Result:', text);
} catch (e) {
  console.error('Error:', e);
}
