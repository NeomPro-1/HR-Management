'use server';

/**
 * @fileOverview An HR helpdesk chatbot that answers employee queries.
 *
 * - hrHelpdeskChatbot - A function that handles the chatbot interaction.
 * - HRHelpdeskChatbotInput - The input type for the hrHelpdeskChatbot function.
 * - HRHelpdeskChatbotOutput - The return type for the hrHelpdeskChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HRHelpdeskChatbotInputSchema = z.object({
  query: z.string().describe('The employee\'s question or query.'),
  context: z
    .string()
    .optional()
    .describe('Any relevant context for the query, such as previous conversation history.'),
});
export type HRHelpdeskChatbotInput = z.infer<typeof HRHelpdeskChatbotInputSchema>;

const HRHelpdeskChatbotOutputSchema = z.object({
  answer: z.string().describe('The chatbot\'s answer to the employee\'s query.'),
});
export type HRHelpdeskChatbotOutput = z.infer<typeof HRHelpdeskChatbotOutputSchema>;

export async function hrHelpdeskChatbot(input: HRHelpdeskChatbotInput): Promise<HRHelpdeskChatbotOutput> {
  return hrHelpdeskChatbotFlow(input);
}

const shouldIncludeToolResult = ai.defineTool({
  name: 'shouldIncludeToolResult',
  description: 'Determine if the tool result is relevant to the user query and should be included in the final answer.',
  inputSchema: z.object({
    query: z.string().describe('The original user query.'),
    toolResult: z.string().describe('The result from the tool execution.'),
  }),
  outputSchema: z.boolean().describe('A boolean value indicating whether the tool result should be included in the final answer.'),
},
async (input) => {
    const {
      text
    } = await ai.generate({
        prompt: `Given the user query: "${input.query}" and the tool result: "${input.toolResult}", determine if the tool result is relevant to the query and should be included in the final answer. Return true if it should be included, false otherwise.`,
        model: 'gemini-2.5-flash'
    });
    return text?.toLowerCase().includes('true') ?? false;
});

const prompt = ai.definePrompt({
  name: 'hrHelpdeskChatbotPrompt',
  input: {schema: HRHelpdeskChatbotInputSchema},
  output: {schema: HRHelpdeskChatbotOutputSchema},
  prompt: `You are an AI-powered HR helpdesk chatbot. Your goal is to answer employee queries accurately and efficiently.

  Context: {{{context}}}

  Question: {{{query}}}

  Answer:`,
});

const hrHelpdeskChatbotFlow = ai.defineFlow(
  {
    name: 'hrHelpdeskChatbotFlow',
    inputSchema: HRHelpdeskChatbotInputSchema,
    outputSchema: HRHelpdeskChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
