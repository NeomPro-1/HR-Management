"use server";

import { hrHelpdeskChatbot } from "@/ai/flows/hr-helpdesk-chatbot";
import type { HRHelpdeskChatbotInput, HRHelpdeskChatbotOutput } from "@/ai/flows/hr-helpdesk-chatbot";

type ChatResult = {
    answer?: string;
    error?: string;
}

export async function hrHelpdeskChatbotAction(input: HRHelpdeskChatbotInput): Promise<ChatResult> {
    try {
        const result: HRHelpdeskChatbotOutput = await hrHelpdeskChatbot(input);
        return { answer: result.answer };
    } catch (error) {
        console.error("Error in chatbot action:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return { error: errorMessage };
    }
}
