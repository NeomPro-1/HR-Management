"use server";

import { parseResume } from "@/ai/flows/resume-parsing";
import type { ParseResumeOutput } from "@/ai/flows/resume-parsing";

type State = {
  data: ParseResumeOutput | null;
  error: string | null;
};

async function convertFileToDataUri(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString('base64');
    return `data:${file.type};base64,${base64}`;
}

export async function parseResumeAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const resumeFile = formData.get("resume") as File;

  if (!resumeFile || resumeFile.size === 0) {
    return { data: null, error: "Please upload a resume file." };
  }

  try {
    const resumeDataUri = await convertFileToDataUri(resumeFile);
    
    const parsedData = await parseResume({ resumeDataUri });

    if (!parsedData) {
        return { data: null, error: "Failed to parse resume. The AI model returned no data." };
    }

    return { data: parsedData, error: null };
  } catch (error) {
    console.error("Error parsing resume:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { data: null, error: `Failed to parse resume: ${errorMessage}` };
  }
}
