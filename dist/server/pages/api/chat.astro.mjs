import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
export { renderers } from '../../renderers.mjs';

dotenv.config();
const api_key = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(api_key);
async function getChatResponse(message) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    return "Sorry, there was an error processing your request.";
  }
}
async function POST({ request }) {
  try {
    const body = await request.json();
    const response = await getChatResponse(body.message);
    return new Response(JSON.stringify({ response }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Failed to process request"
    }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
