import OpenAI from "openai";

export async function POST(req) {
  const { jobPosition, jobDescription, duration, types } = await req.json();
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    // defaultHeaders: {
    //   ${getHeaderLines().join('\n        ')}
    // },
  });
  const completion = await openai.chat.completions.create({
    model: "google/gemini-2.5-pro-exp-03-25",
    messages: [{ role: "user", content: "Say this is a test" }],
  });
}
