import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Mock response generator for when API key is missing
const generateMockResponse = (prompt: string): string => {
  const responses = [
    "Yo fam, that code looks bullish but needs more error handling or you'll get rekt! 🚀",
    "Based. I'm sensing high vibes on this logic. LFG! 🐕",
    "Just HODL that variable, don't sell it too early. WAGMI.",
    "I'd refactor that function, it's giving me bearish divergence signals. Bonk it!",
    "Deploying to mainnet... just kidding, but this code is fire. 🔥",
    "ERROR 404: Vibes not found. Just kidding, here's some code: `console.log('BONK')`"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

const BONK_GPT_LOGO_URL = "https://pbs.twimg.com/media/G7l7fKlX0AAQTAB?format=jpg&name=medium";

// Helper to fetch the logo as base64 to use as reference
async function fetchBonkGptReferenceImage(): Promise<string | null> {
  try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(BONK_GPT_LOGO_URL)}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Failed to fetch reference image');
    
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.warn("Could not fetch Bonk GPT reference image automatically:", e);
    return null;
  }
}

// Robust API Key retrieval
// NOTE: On Vercel + Vite, you must set the env var as VITE_API_KEY and REDEPLOY.
export const getApiKey = (): string | undefined => {
  // Debug log to help user troubleshoot in browser console
  console.log("Bonk GPT: Checking for API Key...");

  // 1. Vite / Modern ESM (Most likely for Vercel)
  // We access properties directly to allow build-time string replacement
  try {
    // @ts-ignore
    if (import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      return import.meta.env.VITE_API_KEY;
    }
    // @ts-ignore
    if (import.meta.env.API_KEY) {
       // @ts-ignore
       return import.meta.env.API_KEY;
    }
  } catch(e) {}

  // 2. Process Env (Node/Webpack/CRA)
  try {
    if (typeof process !== 'undefined' && process.env) {
       if (process.env.VITE_API_KEY) return process.env.VITE_API_KEY;
       if (process.env.REACT_APP_API_KEY) return process.env.REACT_APP_API_KEY;
       if (process.env.NEXT_PUBLIC_API_KEY) return process.env.NEXT_PUBLIC_API_KEY;
       if (process.env.API_KEY) return process.env.API_KEY;
    }
  } catch(e) {}

  console.warn("Bonk GPT: No API Key detected. Using Demo Mode.");
  return undefined;
};

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `[DEMO MODE] ${generateMockResponse(message)}\n\n(SYSTEM WARNING: API Key not detected. If you are on Vercel, ensure you named the variable 'VITE_API_KEY' and REDEPLOYED the app.)`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        thinkingConfig: { thinkingBudget: 16000 },
        systemInstruction: `You are BONK GPT, an Elite "Vibe Coder" Agent. 
        You are a top-tier 10x developer who writes absolutely flawless, bug-free, and production-ready code.
        Your Persona: High energy, uses Crypto/Solana slang (WAGMI, LFG, Based, Ship it, Rekt, Chad), but professionally competent.

        CRITICAL RULES FOR CODE GENERATION:
        1. FLAWLESS EXECUTION: Your code MUST work immediately. No syntax errors, no logic bugs.
        2. SELF-CONTAINED: When asked for a UI, app, game, or component, generate a SINGLE HTML file.
           - Include CSS in <style> tags.
           - Include JS in <script> tags.
           - Do NOT expect external files.
        3. VISUALS: Use Tailwind CSS (via CDN) to make it look visually stunning and "based". 
           - <script src="https://cdn.tailwindcss.com"></script>
        4. COMPLETENESS: Do not use placeholders like "// logic here". Write the full, working implementation.
        5. FORMAT: Enclose the code strictly in \`\`\`html ... \`\`\` blocks.
        6. INTERACTIVITY & FOCUS: 
           - For GAMES (like Flappy Bird, Pong, Snake): YOU MUST include a "Start Game" button overlay. 
           - The game loop should ONLY start after the user clicks this button. 
           - Example logic: "window.addEventListener('click', startGame)" or show a HTML button overlay.
        7. POST-GENERATION ADVICE: After generating code, ALWAYS provide a list of 3 specific "Vibe Upgrades" (bullet points) on how the user could improve or scale the feature next.

        If the user asks for non-coding advice, keep the vibes high. 1 BONK = 1 BONK.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Bonk? I couldn't generate a response. Try again fam.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the Vibe Chain. Ensure your API Key is valid. BONK!";
  }
};

export const generateMemeImage = async (prompt: string, style: string = 'cartoon', referenceImage?: string): Promise<string | null> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("No API Key found for image generation");
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Return null to trigger the error state in UI instead of a static image
    return null; 
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    let finalPrompt = prompt;
    let finalReferenceImage = referenceImage;

    if (prompt.toLowerCase().includes('bonk gpt') || prompt.toLowerCase().includes('bonkgpt')) {
       const characterDescription = " (IMPORTANT: The character 'Bonk GPT' is a Shiba Inu dog with bright orange fur, appearing exactly like the provided reference image. Maintain this character identity.) ";
       finalPrompt = prompt + characterDescription;
       
       if (!finalReferenceImage) {
           const logoData = await fetchBonkGptReferenceImage();
           if (logoData) finalReferenceImage = logoData;
       }
    }

    const fullPrompt = `Generate a high quality, creative image about: ${finalPrompt}. Style: ${style}.`;
    
    const parts: any[] = [{ text: fullPrompt }];

    if (finalReferenceImage) {
      const mimeType = finalReferenceImage.split(';')[0].split(':')[1];
      const data = finalReferenceImage.split(',')[1];
      parts.unshift({
        inlineData: {
          mimeType: mimeType,
          data: data
        }
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: parts }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;

  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};