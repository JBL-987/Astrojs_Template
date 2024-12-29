import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCrHlXMQMxxzHIZ_U0FQoA3eRCevFTQwSM');

async function getChatResponse(message: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    return 'Sorry, there was an error processing your request.';
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const response = await getChatResponse(body.message);
    
    return new Response(JSON.stringify({ response }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Failed to process request' 
    }), { 
      status: 500 
    });
  }
}