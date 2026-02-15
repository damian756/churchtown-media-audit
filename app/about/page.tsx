import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Zap, Target, Users, Code, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | SEO & Web Design Experts | Churchtown Media",
  description: "Meet the team behind Churchtown Media. 15+ years in SEO, 20+ years in web design. Obsessive about client ROI. Family-run agency in Southport specializing in Next.js and technical SEO.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/about',
  },
  openGraph: {
    title: 'About Us | Churchtown Media - Southport Web Design & SEO Agency',
    description: 'Meet the team behind Churchtown Media. 15+ years in SEO, 20+ years in web design. Family-run agency obsessed with client results.',
    url: 'https://www.churchtownmedia.co.uk/about',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media - About Our Team',
    }],
  },
};

export default function AboutPage() {
  // JSON-LD Schema - Person linked to LocalBusiness
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.churchtownmedia.co.uk/#organization",
        "name": "Churchtown Media",
        "url": "https://www.churchtownmedia.co.uk",
        "logo": "https://www.churchtownmedia.co.uk/icon.png",
        "description": "High-performance web design and technical SEO agency specializing in Next.js development and data-driven SEO strategies.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cambridge Avenue",
          "addressLocality": "Southport",
          "postalCode": "PR9 9SA",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.6479,
          "longitude": -3.0051
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Southport"
          },
          {
            "@type": "City",
            "name": "Liverpool"
          },
          {
            "@type": "City",
            "name": "Manchester"
          }
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://www.churchtownmedia.co.uk/about#founder"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.churchtownmedia.co.uk/about#founder",
        "name": "Damian Roche",
        "jobTitle": "Founder & Lead Developer",
        "worksFor": {
          "@id": "https://www.churchtownmedia.co.uk/#organization"
        },
        "url": "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
        "sameAs": [
          "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
          "https://twitter.com/churchtownmedia",
          "https://github.com/churchtownmedia"
        ],
        "alumniOf": "Self-taught developer with 20+ years experience",
        "knowsAbout": [
          "Next.js Development",
          "Technical SEO",
          "Core Web Vitals Optimization",
          "Headless CMS",
          "React",
          "TypeScript"
        ],
        "homeLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Southport",
            "addressCountry": "GB"
          }
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-950 text-white pt-24">
        
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />
          
          <article className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Headshot */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-3xl"></div>
                  <Image
                    src="/images/about/damian-headshot.jpg"
                    alt="Damian Roche - Founder of Churchtown Media"
                    width={600}
                    height={600}
                    className="relative rounded-3xl border border-slate-800 shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Text */}
              <div className="order-1 md:order-2">
                <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                  Hi, I'm Damian.
                </h1>
                
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  I've spent the last 20 years building websites and the last 15 obsessing over how to make them rank, 
                  convert, and actually make money for the people who own them.
                </p>

                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  No fluff. No vanity metrics. Just sites that work and SEO strategies that deliver results you can measure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
                  >
                    Let's Talk <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
                  >
                    See What I've Built
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* THE ORIGIN STORY - Split Layout */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Column */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                  How This All Started
                </h2>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I grew up in the '90s watching my dad—a software engineer—work from home. While other kids were outside playing football, 
                    I was next to him, watching code turn into actual working programs. He taught me Dreamweaver when I was probably too young 
                    to understand it properly, but I was hooked anyway.
                  </p>
                  
                  <p>
                    The real fun though? My dad and I playing <strong>Doom on LAN</strong>. We'd play for hours, then I'd start building my own 
                    levels—<strong>custom WAD files</strong>. That's when I realized: creating something from scratch, testing it, watching people 
                    use it... that's what I wanted to do. That feeling never went away.
                  </p>
                  
                  <p>
                    Fast forward through <strong>Mambo, PHPNuke, Joomla, Interspire, BigCommerce</strong>—I built e-commerce stores before Shopify 
                    was even a thing. I was optimizing sites for Google before anyone cared about Core Web Vitals. Seen it all: table layouts, Flash 
                    sites (don't ask), WordPress everything, and now modern headless architecture.
                  </p>

                  <p className="text-blue-400 font-semibold">
                    These days? <strong>Next.js, Sanity CMS, and proper technical SEO</strong>. The stack that actually delivers speed and performance 
                    instead of just promising it.
                  </p>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-3xl p-8 backdrop-blur-sm">
                  <Image
                    src="/images/about/doom-90s-setup.jpg"
                    alt="90s computer setup with Doom game on CRT monitor"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                  <p className="text-center text-sm text-slate-400 mt-4 italic">
                    "Building Doom levels in the 90s taught me more about UX than most design courses ever could."
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* THE PHILOSOPHY - Bento Box Style */}
        <section className="py-16 px-4 sm:px-6">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                How I Work
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Look, I'm not interested in building "pretty" websites. I build sites that make you money. Here's what that actually means:
              </p>
            </header>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 - ROI Obsession */}
              <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-600/30 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                <div className="bg-blue-600/20 rounded-xl p-3 w-fit mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">I Actually Get Excited About Your Numbers</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Genuinely—when a client's organic traffic jumps or their conversion rate improves, I'm checking the graphs 
                  multiple times a day. It's not just work. It's validation that what we're doing actually works.
                </p>
              </div>

              {/* Card 2 - Technical Excellence */}
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-600/30 rounded-2xl p-6 hover:border-purple-600/50 transition-all">
                <div className="bg-purple-600/20 rounded-xl p-3 w-fit mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Speed is Money</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A 1-second delay = 7% fewer conversions. That's not theory—that's your money. I obsess over Core Web Vitals 
                  and load times because slow sites literally lose you sales.
                </p>
              </div>

              {/* Card 3 - No Fluff */}
              <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-600/30 rounded-2xl p-6 hover:border-green-600/50 transition-all">
                <div className="bg-green-600/20 rounded-xl p-3 w-fit mb-4">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Zero Bullshit Metrics</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "Brand awareness" and "engagement" don't pay your bills. Rankings, traffic, leads, revenue—that's what matters. 
                  If it doesn't move those numbers, I'm not interested.
                </p>
              </div>

              {/* Card 4 - Long-term Partnerships (Spans 2 columns) */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                <div className="bg-blue-600/20 rounded-xl p-3 w-fit mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">No Shortcuts, No Gimmicks</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I'm not touching black-hat SEO or quick-fix tactics that'll get you penalized in 6 months. Everything I build 
                  is designed to compound over time. Year 2 is better than year 1. Year 3 is better than year 2. That's how this works.
                </p>
              </div>

              {/* Card 5 - Family Values */}
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-600/5 border border-yellow-600/30 rounded-2xl p-6 hover:border-yellow-600/50 transition-all">
                <div className="bg-yellow-600/20 rounded-xl p-3 w-fit mb-4">
                  <Heart className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Family-Run (Actually)</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Not a corporate agency with account managers you never talk to. Just me and my team, treating your 
                  business like it matters—because it does.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* LIFESTYLE & LOCATION - Split Layout (Reversed) */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Column (First on desktop) */}
              <div className="relative order-2 md:order-1">
                <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-600/30 rounded-3xl p-8 backdrop-blur-sm">
                  <Image
                    src="/images/about/southport-golf.jpg"
                    alt="Beautiful Southport golf course with coastal views"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                  <p className="text-center text-sm text-slate-400 mt-4 italic">
                    "Building sites that perform by day. Badly playing golf by weekend."
                  </p>
                </div>
              </div>

              {/* Text Column (Second on desktop) */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                  Life Outside of SEO
                </h2>
                
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm based in <strong>Southport</strong>. Love it here—Victorian seafront, decent coffee shops, 
                    and just far enough from the city that you can actually think clearly.
                  </p>
                  
                  <p>
                    When I'm not staring at ranking graphs or obsessing over load times, you'll find me at the 
                    <strong> Owl & Bird of Prey Sanctuary</strong> with my kids, walking the <strong>Marshside reserve</strong>, 
                    or badly playing golf (emphasis on "badly").
                  </p>
                  
                  <p>
                    The best part? My kids have picked up the same tech obsession I got from my dad. Watching them mess around 
                    in Minecraft or start learning to code—that's the good stuff. That's why I got into this in the first place.
                  </p>

                  <p>
                    Also, <strong>I like dogs</strong>. They're honestly better listeners than half my clients.
                  </p>

                  <aside className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 mt-6">
                    <p className="text-blue-400 font-semibold text-sm">
                      🏠 The name "Churchtown Media"? That's the area of Southport where this all started. Seemed fitting.
                    </p>
                  </aside>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* TIMELINE - Evolution */}
        <section className="py-16 px-4 sm:px-6">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                The Journey (So Far)
              </h2>
              <p className="text-slate-400">
                20+ years of learning what works, what doesn't, and how to actually make sites perform.
              </p>
            </header>

            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 border border-blue-600/50 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  90s
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Where It Started</h3>
                  <p className="text-slate-300 text-sm">
                    Doom LAN parties with my dad. Building custom levels. Learning Dreamweaver way too young. 
                    This is where the obsession began.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 border border-blue-600/50 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  00s
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Building Everything</h3>
                  <p className="text-slate-300 text-sm">
                    Mambo. PHPNuke. Joomla. Interspire. BigCommerce. Building e-commerce stores before 
                    Shopify existed. This was the "figure it out as you go" era.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 border border-blue-600/50 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  10s
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Going All-In on SEO</h3>
                  <p className="text-slate-300 text-sm">
                    15 years ago I realized: beautiful sites that nobody finds are useless. Went deep on technical SEO, 
                    Core Web Vitals, schema markup—everything that makes Google happy.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 border border-green-600/50 rounded-full flex items-center justify-center text-green-400 font-bold">
                  Now
                </div>
                <div className="flex-1 bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">The Modern Stack</h3>
                  <p className="text-slate-300 text-sm">
                    Next.js 14. Sanity CMS. React Server Components. TypeScript. Building sites that are genuinely fast, 
                    not just "fast enough."
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-600/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Talk About Your Site
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Need a site that actually performs? Want SEO that delivers real results instead of vanity metrics? 
              Let's see if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
              >
                Free SEO Audit
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
