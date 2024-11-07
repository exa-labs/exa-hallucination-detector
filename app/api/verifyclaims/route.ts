// app/api/verifyclaims/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { anthropic } from "@ai-sdk/anthropic"
import { generateText } from 'ai';

export async function POST(req: NextRequest) {
  try {
    const { claim, exasources } = await req.json();
    if (!claim && !exasources) {
      return NextResponse.json({ error: 'Claim and sources are required' }, { status: 400 });
    }

    // Run the prompt to extract claims
    const { text } = await generateText({
      model: anthropic('claude-3-5-sonnet-20241022'),
      prompt: 
    `You are an expert fact-checker.
    Given a claim and a set of sources, determine whether the claim is supported, refuted, or if there is insufficient information in the sources to make a determination.
    For your analysis, consider all the sources collectively.

    Here is the claim: ${claim}

    and here are the sources (in JSON): ${exasources}

    Provide your answer as a JSON object with the following structure:
    {
        "claim": "...",
        "assessment": "supported" or "refuted" or "Insufficient information",
        "summary": "Why is this claim correct and if it isn't correct, then what's correct. In a single line.",
        "confidence_score": a number between 0 and 1 (1 means fully confident the claim is true, 0 means fully confident the claim is false),
        "sources": [list of sources that support the decision],
    }
    Do not include any additional text.`,
    });

    return NextResponse.json({ claims: text });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to extract claims' }, { status: 500 });
  }
}