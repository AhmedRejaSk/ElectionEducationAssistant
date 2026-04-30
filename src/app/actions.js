'use server'

import { generateElectionResponse } from '@/lib/google-services';

export async function checkMyth(myth, language = "English") {
  const prompt = `Evaluate the following statement regarding elections: "${myth}". State clearly if it is a FACT or a MYTH. Provide a brief explanation. Your entire response must be in ${language}.`;
  return await generateElectionResponse(prompt);
}
