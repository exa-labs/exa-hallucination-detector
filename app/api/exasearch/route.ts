// app/api/exasearch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY as string);

export async function POST(req: NextRequest) {
  const requestId = crypto.randomUUID();
  const clientIp = req.headers.get('x-forwarded-for') ?? 'unknown';
  console.log(`[exasearch] ${requestId} request received ip=${clientIp}`);
  try {
    const { claim } = await req.json();
    if (!claim) {
      console.warn(`[exasearch] ${requestId} rejected: missing claim ip=${clientIp}`);
      return NextResponse.json({ error: 'Claim is required' }, { status: 400 });
    }

    // Use Exa to search for content related to the claim
    const result = await exa.searchAndContents(
      `${claim} \n\nHere is a web page to help verify this content:`,
      {
        type: "auto",
        numResults: 3,
        livecrawl: 'always',
        text: true,
      }
    );

    // Extract only url and text from each result and reverse the order
    const simplifiedResults = result.results.map((item: any) => ({
      text: item.text,
      url: item.url
    })).reverse();

    console.log(`[exasearch] ${requestId} succeeded ip=${clientIp} results=${simplifiedResults.length}`);
    return NextResponse.json({ results: simplifiedResults });
  } catch (error) {
    console.error(`[exasearch] ${requestId} failed ip=${clientIp} error=${error}`);
    return NextResponse.json({ error: `Failed to perform search | ${error}` }, { status: 500 });
  }
}