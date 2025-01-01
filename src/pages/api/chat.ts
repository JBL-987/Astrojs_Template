import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import type { RequestEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is required');
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

interface ChatRequest {
  message: string;
}

async function getChatResponse(message: string): Promise<string> {
  if (!message.trim()) {
    throw new Error('Message cannot be empty');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Gemini API error:', errorMessage);
    throw new Error(`Failed to get Gemini response: ${errorMessage}`);
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

export async function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

export async function POST({ request }: RequestEvent) {
  try {
    const body = await request.json() as ChatRequest;
    const response = await getChatResponse(body.message);
    
    return new Response(
      JSON.stringify({ response }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  } catch (error) {
    const status = error instanceof Error ? 400 : 500;
    const message = error instanceof Error ? error.message : 'Internal server error';
    
    return new Response(
      JSON.stringify({ error: message }),
      {
        status,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
}