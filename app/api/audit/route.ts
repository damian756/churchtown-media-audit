import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Call Google PageSpeed Insights API
    const apiKey = process.env.GOOGLE_API_KEY;
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=mobile&category=PERFORMANCE&category=SEO`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
       return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    const lighthouseResult = data.lighthouseResult;
    
    // Extract Scores
    const performance = Math.round((lighthouseResult.categories?.performance?.score ?? 0) * 100);
    const seo = Math.round((lighthouseResult.categories?.seo?.score ?? 0) * 100);
    const lcp = lighthouseResult.audits?.["largest-contentful-paint"]?.displayValue ?? "N/A";
    const cls = lighthouseResult.audits?.["cumulative-layout-shift"]?.displayValue ?? "N/A";
    const tbt = lighthouseResult.audits?.["total-blocking-time"]?.displayValue ?? "N/A";

    // AI Analysis
    let analysis = "";
    try {
      const completion = await openai.chat.completions.create({
        model: "meta-llama/llama-3.3-70b-instruct",
        messages: [
          {
            role: "user",
            content: `Analyze these PageSpeed scores. Perf: ${performance}, SEO: ${seo}, LCP: ${lcp}, CLS: ${cls}. Give 3 short, punchy sentences on how to fix it.`,
          },
        ],
      });
      analysis = completion.choices[0]?.message?.content || "Analysis unavailable.";
    } catch (e) {
      analysis = "AI Analysis unavailable at this moment.";
    }

    return NextResponse.json({ performance, seo, lcp, cls, tbt, analysis });

  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}