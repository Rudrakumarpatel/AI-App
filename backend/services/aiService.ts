import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const analyzeCode = async (code: string): Promise<string> => {
  const prompt = `Analyze the following code snippet for performance bottlenecks and provide optimizations:\n${code}`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 300,
  });

  return response.data.choices[0]?.text?.trim() || "No suggestions provided.";
};
