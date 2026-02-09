const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const postPrompt = async (prompt) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:5173",
      "X-Title": "My Chat App",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("API Error Details:", errorData);
    throw new Error(errorData?.error?.message || "Request failed");
  }

  const data = await res.json();

  return data;
};
