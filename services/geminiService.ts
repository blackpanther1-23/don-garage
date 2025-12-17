import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Ești "Don", asistentul virtual inteligent al Don Garage, un service auto premium din România.
Rolul tău este să ajuți clienții cu informații despre servicii, programări și sfaturi generale auto.

Stilul tău:
- Ești prietenos, dar profesionist și pasionat de mașini (petrolhead).
- Vorbești limba română.
- Ești "cool", folosești termeni tehnici corecți dar explici simplu.

Informații despre Don Garage:
- Servicii: Tuning (Stage 1-3), Detailing, Mecanică, Diagnoză, Electrice.
- Locație: Strada Performanței nr. 1, București.
- Program: Luni-Vineri 09:00 - 18:00.
- Telefon: 0722 000 000.

Reguli:
- Nu oferi prețuri fixe exacte, ci doar estimări ("de la X euro").
- Încurajează mereu utilizatorul să facă o programare pentru o ofertă exactă.
- Dacă nu știi ceva, recunoaște și direcționează clientul către numărul de telefon.
- Nu diagnostica probleme grave de siguranță prin chat; recomandă vizita urgentă la service.
`;

export const initializeChat = (): Chat => {
  try {
    const apiKey = process.env.API_KEY || '';
    // Graceful fallback if key is missing (for UI demo purposes, prevents crash)
    if (!apiKey) {
      console.warn("API Key missing for Gemini");
    }

    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
     return "Eroare de conexiune la serverul AI. Te rugăm să suni la service.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Îmi pare rău, nu am înțeles. Poți repeta?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Momentan întâmpinăm dificultăți tehnice. Te rugăm să ne contactezi telefonic.";
  }
};