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
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // Validate URL format
    let validatedUrl: URL;
    try {
      validatedUrl = new URL(url);
    } catch {
      return NextResponse.json(
        { error: "Invalid URL format" },
        { status: 400 }
      );
    }

    // Call Google PageSpeed Insights API
    const apiKey = process.env.GOOGLE_API_KEY;
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      validatedUrl.toString()
    )}&key=${apiKey}&strategy=mobile&category=PERFORMANCE&category=SEO`;

    console.log("[Audit API] Fetching PageSpeed data for:", validatedUrl.toString());

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[Audit API] Google PageSpeed API error:", {
        status: response.status,
        statusText: response.statusText,
        error: errorData.error?.message || errorData,
      });
      return NextResponse.json(
        {
          error:
            errorData.error?.message ||
            `Failed to fetch PageSpeed data: ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("[Audit API] Successfully fetched PageSpeed data");

    // Extract the required metrics
    const lighthouseResult = data.lighthouseResult;

    if (!lighthouseResult) {
      console.error("[Audit API] Invalid response structure:", {
        hasLighthouseResult: !!lighthouseResult,
        dataKeys: Object.keys(data),
      });
      return NextResponse.json(
        { error: "Invalid response from PageSpeed API" },
        { status: 500 }
      );
    }

    const performance =
      Math.round((lighthouseResult.categories?.performance?.score ?? 0) * 100);
    const seo =
      Math.round((lighthouseResult.categories?.seo?.score ?? 0) * 100);

    const lcp =
      lighthouseResult.audits?.["largest-contentful-paint"]?.displayValue ??
      "N/A";
    const cls =
      lighthouseResult.audits?.["cumulative-layout-shift"]?.displayValue ??
      "N/A";
    const tbt =
      lighthouseResult.audits?.["total-blocking-time"]?.displayValue ?? "N/A";

    // Generate AI analysis using OpenRouter
    console.log("[Audit API] Generating AI analysis...");
    let analysis = "";
    
    try {
      const completion = await openai.chat.completions.create({
        model: "meta-llama/llama-3.3-70b-instruct",
        messages: [
          {
            role: "user",
            content: `You are a web performance expert. Analyze these PageSpeed scores and provide a 3-sentence diagnosis:

Performance Score: ${performance}/100
SEO Score: ${seo}/100
Largest Contentful Paint (LCP): ${lcp}
Cumulative Layout Shift (CLS): ${cls}
Total Blocking Time (TBT): ${tbt}

Provide exactly 3 sentences: 
1. Overall assessment
2. Biggest issue to fix
3. One specific recommendation

Be direct and actionable.`,
          },
        ],
      });

      analysis = completion.choices[0]?.message?.content || "Analysis unavailable.";
      console.log("[Audit API] AI analysis generated successfully");
    } catch (aiError) {
      console.error("[Audit API] AI analysis failed:", {
        message: aiError instanceof Error ? aiError.message : "Unknown error",
        error: aiError,
      });
      // Fallback to a generic message if AI fails
      analysis = "Unable to generate detailed analysis at this time. Please review your Core Web Vitals scores above.";
    }

    // Return clean, filtered data
    console.log("[Audit API] Returning results:", {
      performance,
      seo,
      lcp,
      cls,
      tbt,
      analysisLength: analysis.length,
    });
    return NextResponse.json({
      performance,
      seo,
      lcp,
      cls,
      tbt,
      analysis,
    });
  } catch (error) {
    console.error("[Audit API] Unexpected error:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      error,
    });
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
