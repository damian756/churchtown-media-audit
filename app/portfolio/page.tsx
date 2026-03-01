import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Zap, Code2, Gauge, TrendingUp, CheckCircle2, Sparkles, Rocket, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Client Projects & Success Stories",
  description: "See our live Next.js projects in action. From bus shelter manufacturers with 10 #1 rankings in 30 days to professional video capture equipment—real clients, real results, real performance.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/portfolio',
  },
  openGraph: {
    title: 'Our Portfolio | Next.js Web Design Projects | Churchtown Media',
    description: 'Live client projects built with Next.js 16. See the code, the speed, and the results. Real businesses, real growth.',
    url: 'https://www.churchtownmedia.co.uk/portfolio',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media Portfolio - Next.js Web Design Projects',
    }],
  },
};

export default function PortfolioPage() {
  // JSON-LD Schema for Portfolio/Collection
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Churchtown Media Portfolio",
    "description": "Live Next.js web projects showcasing performance-first design and data-driven SEO results",
    "url": "https://www.churchtownmedia.co.uk/portfolio",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.churchtownmedia.co.uk/#organization",
      "name": "Churchtown Media",
      "url": "https://www.churchtownmedia.co.uk"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "Alotek Shelters",
          "description": "Bus shelter manufacturer website rebuilt with Next.js. 10 #1 rankings with AI Overview appearances across all core terms in 30 days.",
          "url": "https://www.alotekshelters.co.uk",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "Forefront Imaging",
          "description": "B2B product catalog for Magewell distributor. 76+ SKUs with real-time stock tracking and reseller portal.",
          "url": "https://forefront-imaging-6zvd.vercel.app",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        },
        {
          "@type": "CreativeWork",
          "position": 3,
          "name": "StreamKit",
          "description": "Professional USB video capture devices for streamers, broadcasters, educators, and healthcare. Driver-free, universal compatibility.",
          "url": "https://www.streamkit.co.uk",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        },
        {
          "@type": "CreativeWork",
          "position": 4,
          "name": "Southport Guide",
          "description": "Complete tourism directory for Southport featuring 999+ businesses. Mobile-first local discovery for 8M annual visitors.",
          "url": "https://www.southportguide.co.uk",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        },
        {
          "@type": "CreativeWork",
          "position": 5,
          "name": "Formby Guide",
          "description": "Your local guide to Formby. Red squirrels, National Trust beach, pinewoods walks, and the best places to eat.",
          "url": "https://www.formbyguide.co.uk",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        },
        {
          "@type": "CreativeWork",
          "position": 6,
          "name": "Sefton Links",
          "description": "The definitive links golf guide to the Sefton Coast. Royal Birkdale, The Open 2026, and championship golf in 17 languages.",
          "url": "https://www.seftonlinks.com",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        },
        {
          "@type": "CreativeWork",
          "position": 7,
          "name": "Sefton Coast Wildlife",
          "description": "Independent species database and field guide to the birds, insects, plants and mammals of the Sefton Coast. 257+ species with Wikipedia-sourced images, seasonal filters, and editorial blog.",
          "url": "https://seftoncoastwildlife.co.uk",
          "creator": {
            "@type": "Organization",
            "@id": "https://www.churchtownmedia.co.uk/#organization"
          }
        }
      ]
    }
  };

  const projects = [
    {
      id: 1,
      name: "Alotek Shelters",
      tagline: "From Invisible to Industry Leader",
      industry: "Manufacturing",
      url: "https://www.alotekshelters.co.uk",
      status: "live",
      image: "/images/alotek-portfolio.jpg",
      description: "A Lancashire bus shelter manufacturer — previously on WordPress with a costly agency doing nothing. We migrated them to Next.js at no charge, then started an SEO retainer. Month one results are below.",
      challenge: "Previous agency delivered zero traffic growth over 12 months. Site averaged position 50 (Page 5) with 52% of pages not indexed. WordPress was the wrong foundation.",
      solution: "Free Next.js migration to fix the technical foundation, then targeted SEO focused on the exact terms parish councils and local authorities search. Content structured for AI Overviews.",
      results: [
        { label: "#1 Rankings", value: "10", description: "Every core commercial keyword" },
        { label: "AI Overviews", value: "All terms", description: "Above organic results on every target query" },
        { label: "Biggest climb", value: "↑15", description: "\"Bus shelter suppliers\" — pos. 16 to #1" },
        { label: "Time to results", value: "30 days", description: "Month 1 of SEO retainer" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Schema.org"],
      caseStudySlug: "alotek-shelters-month-1-seo-results",
      highlights: [
        "#1 for 'bus shelter suppliers' (vol. 210) — up from position 16",
        "AI Overview appearances across every tracked keyword",
        "'Parish council bus shelter' — new entry direct to #1",
        "WordPress replaced with Next.js before retainer started — at no charge",
      ]
    },
    {
      id: 2,
      name: "Forefront Imaging",
      tagline: "Warehouse-to-Web in 48 Hours",
      industry: "B2B Distribution",
      url: "https://forefront-imaging-6zvd.vercel.app",
      status: "development",
      image: "/images/forefront-portfolio.jpg",
      description: "Official UK distributor for Magewell professional video capture solutions. Serving value-added resellers, sub-distributors, and systems integrators. They needed a modern catalog system for 76+ SKUs with real-time stock tracking.",
      challenge: "Legacy site couldn't handle product catalog complexity. Needed warehouse stock visibility, reseller pricing tiers, and fast load times.",
      solution: "Custom product catalog with dynamic filtering, real-time stock badges, and responsive design optimized for B2B buyers.",
      results: [
        { label: "Products Listed", value: "76 SKUs", description: "Full Magewell range" },
        { label: "Target Performance", value: "<1s Load", description: "Product page speed" },
        { label: "Lighthouse Score", value: "95/100", description: "Mobile performance (target)" },
        { label: "Development Time", value: "2 Weeks", description: "Design to deployment" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Responsive Grid"],
      caseStudySlug: null,
      highlights: [
        "76-product catalog with instant filtering",
        "Stock availability indicators (In Stock/Low Stock/Order Soon)",
        "Reseller-focused UX (quote requests, bulk inquiries)",
        "Mobile-first design for on-site decision making",
      ]
    },
    {
      id: 3,
      name: "StreamKit",
      tagline: "Professional Video Capture. Zero Drivers.",
      industry: "Professional AV Equipment",
      url: "https://www.streamkit.co.uk",
      status: "live",
      image: "/images/streamkit-portfolio.jpg",
      description: "StreamKit provides professional USB video capture devices for streamers, broadcasters, educators, and healthcare professionals. Technical specifications presented clearly for diverse audiences.",
      challenge: "Competing in a crowded video capture market dominated by Elgato and AverMedia. Needed to position as the professional-grade alternative.",
      solution: "Industry-focused landing pages with tailored messaging for each audience. Clean product presentation with 'plug & play' positioning.",
      results: [
        { label: "Industries Served", value: "10+", description: "From streaming to surgery" },
        { label: "Zero Latency", value: "Real-time", description: "Hardware-accelerated capture" },
        { label: "Lighthouse Score", value: "94/100", description: "Desktop performance" },
        { label: "Universal Support", value: "3 OS", description: "Windows, Mac, Linux" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Responsive Design"],
      caseStudySlug: null,
      highlights: [
        "Industry-specific landing pages for targeted messaging",
        "Technical specs presented for non-technical buyers",
        "Driver-free positioning vs competitors requiring software",
        "Multi-platform compatibility showcase (Windows, Mac, Linux)",
      ]
    },
    {
      id: 4,
      name: "Southport Guide",
      tagline: "Discover Britain's Great Seaside Town",
      industry: "Tourism & Local Directory",
      url: "https://www.southportguide.co.uk",
      status: "live",
      image: "/images/southportguide-portfolio.jpg",
      description: "The complete guide to eating, staying, and exploring Southport. A comprehensive directory featuring 999+ local businesses across restaurants, hotels, attractions, and more.",
      challenge: "Southport's £2.5 billion visitor economy was fragmented across outdated listing sites. Visitors struggled to discover local businesses.",
      solution: "Built a local directory with 11 categorized industries, mobile-first design, and 'near me' search optimization for 8M annual visitors.",
      results: [
        { label: "Businesses Listed", value: "999+", description: "Across 11 categories" },
        { label: "Categories", value: "11", description: "Industries covered" },
        { label: "Lighthouse Score", value: "96/100", description: "Mobile performance" },
        { label: "Load Time", value: "<1.5s", description: "Mobile 4G average" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Schema.org"],
      caseStudySlug: null,
      highlights: [
        "999+ venues across restaurants, hotels, bars, attractions, beaches, golf, shopping",
        "Home of The Open Championship 2026 positioning",
        "Mobile-first 'near me' search optimization for 8M annual visitors",
        "Category filtering for tourists making real-time decisions",
      ]
    },
    {
      id: 5,
      name: "Formby Guide",
      tagline: "Your Local Guide to Formby",
      industry: "Tourism & Local Directory",
      url: "https://www.formbyguide.co.uk",
      status: "live",
      image: "/images/formbyguide-portfolio.jpg",
      description: "The complete guide to Formby—red squirrels, the National Trust beach, pinewoods walks, and the best places to eat. A local directory built to help visitors and residents discover what makes Formby special.",
      challenge: "Formby attracts visitors for its red squirrel reserve and stunning National Trust coastline, but lacked a central guide. Tourists needed practical information about squirrel spotting, beach parking, and local dining.",
      solution: "Built a local guide with nature-focused content, practical visitor information, and curated restaurant recommendations. Optimized for mobile discovery.",
      results: [
        { label: "Quick Links", value: "4", description: "Beach, squirrels, walks, dining" },
        { label: "Mobile-First", value: "100%", description: "Tourist-focused design" },
        { label: "Lighthouse Score", value: "95/100", description: "Mobile performance" },
        { label: "Load Time", value: "<1.5s", description: "Mobile 4G average" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Schema.org"],
      caseStudySlug: null,
      highlights: [
        "Red squirrel reserve guide with seasonal tips",
        "National Trust beach parking and dog information",
        "Curated local restaurant recommendations",
        "Pinewoods walking trail information",
      ]
    },
    {
      id: 6,
      name: "Sefton Links",
      tagline: "The World's Greatest Links Golf Corridor",
      industry: "Sports Tourism & Golf",
      url: "https://www.seftonlinks.com",
      status: "live",
      image: "/images/seftonlinks-portfolio.jpg",
      description: "The definitive guide to links golf on the Sefton Coast—Royal Birkdale, Hillside, Formby, and four other championship courses. Built for international golf tourists planning trips to England's premier links golf destination ahead of The Open 2026.",
      challenge: "Golf tourists from US, Germany, Japan, and beyond needed comprehensive information about the Sefton Coast's six championship courses. No single authoritative English-language guide existed, and language barriers limited international reach.",
      solution: "Built a comprehensive golf tourism guide with course comparisons, tee time information, and accommodation. Implemented native translations in 17 languages to reach international golf markets.",
      results: [
        { label: "Languages", value: "17", description: "Native translations" },
        { label: "Courses Covered", value: "6", description: "Championship links" },
        { label: "Lighthouse Score", value: "96/100", description: "Mobile performance" },
        { label: "The Open 2026", value: "July", description: "Royal Birkdale host" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "i18n"],
      caseStudySlug: null,
      highlights: [
        "17 native language translations (EN, DE, JA, FR, ES, NL, SV, DA, NO, FI, KO, ZH, PT, IT, PL, CA, CY, AR)",
        "Complete guide to 6 championship courses from Royal Birkdale to Southport Old Links",
        "The Open Championship 2026 countdown and visitor guide",
        "Course conditions, tee times, scorecards, and golf break planning tools",
      ]
    },
    {
      id: 7,
      name: "Sefton Coast Wildlife",
      tagline: "257 Species. One Independent Guide.",
      industry: "Wildlife & Nature Publishing",
      url: "https://seftoncoastwildlife.co.uk",
      status: "live",
      image: "/images/seftoncoastwildlife-portfolio.png",
      description: "An independent species database and editorial field guide to the birds, insects, plants and mammals of the Sefton Coast — from Marshside RSPB to the Formby pinewoods. Built as a genuine public resource, not a scraped aggregator.",
      challenge: "No dedicated wildlife guide existed for the Sefton Coast despite it being one of England's most significant coastal habitats — home to 80,000+ Pink-footed Geese, nationally rare Natterjack Toads, and one of England's last Red Squirrel populations.",
      solution: "Built a full species database with 257+ entries across four categories, Wikipedia API image integration, seasonal and habitat filters, an editorial blog, and structured data for every species page.",
      results: [
        { label: "Species Recorded", value: "257+", description: "Birds, insects, plants, mammals" },
        { label: "Categories", value: "4", description: "Full taxonomic coverage" },
        { label: "Image Source", value: "Wikipedia API", description: "Auto-fetched with fallback" },
        { label: "Schema Types", value: "Taxon + Article", description: "Rich results ready" },
      ],
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Wikipedia API", "Schema.org"],
      caseStudySlug: null,
      highlights: [
        "257-species database with identification tips, seasonal presence, and habitat data",
        "Wikipedia REST API integration with concurrency-limited fetching and retry logic",
        "Client-side filters: search, conservation status, season, habitat, and sort order",
        "FAQPage, Taxon, Article, and BreadcrumbList schema across all pages",
      ]
    }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/10" />
          
          <article className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-bold">Live Projects</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                We Don't Just Talk About Next.js.
                <br />
                We Build With It.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Real clients. Real code. Real results. See the live projects that prove performance-first 
                web design isn't theory—it's revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
                >
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
                >
                  Get Free Audit
                </Link>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full">
                <Gauge className="w-4 h-4 text-green-400" />
                <span>90+ Lighthouse Scores</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Sub-2s Load Times</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Measurable Growth</span>
              </div>
            </div>
          </article>
        </section>

        {/* PROJECT SHOWCASE */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <article 
                  key={project.id} 
                  className={`grid lg:grid-cols-2 gap-12 items-start ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* PROJECT IMAGE/SCREENSHOT */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                    <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-4 hover:border-blue-600/50 transition-all">
                      {/* Status Badge */}
                      <div className="absolute -top-3 -right-3 z-10">
                        {project.status === 'live' ? (
                          <div className="bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-100"></span>
                            </span>
                            LIVE
                          </div>
                        ) : (
                          <div className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <Rocket className="w-3 h-3" />
                            IN DEVELOPMENT
                          </div>
                        )}
                      </div>

                      {/* Browser Chrome */}
                      <div className="bg-slate-800 rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 bg-slate-900 rounded px-3 py-1 text-xs text-slate-500 font-mono">
                          {project.url.replace('https://', '')}
                        </div>
                      </div>

                      {/* Screenshot */}
                      <div className="relative bg-slate-800 rounded-b-xl overflow-hidden aspect-[16/10]">
                        <Image 
                          src={project.image} 
                          alt={`${project.name} website screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6 pt-8 lg:pt-0`}>
                    {/* Header */}
                    <div>
                      <div className="text-sm text-blue-400 font-bold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {project.industry}
                      </div>
                      <h2 className="text-4xl font-black text-white mb-3">
                        {project.name}
                      </h2>
                      <p className="text-xl text-slate-400 font-semibold italic mb-4">
                        {project.tagline}
                      </p>
                      
                      {/* Tech Stack Badges */}
                      <div className="flex gap-2 flex-wrap mb-2">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                        <div className="text-sm text-red-400 font-bold mb-2">THE CHALLENGE</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                        <div className="text-sm text-green-400 font-bold mb-2">THE SOLUTION</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {project.results.map((result) => (
                        <div 
                          key={result.label}
                          className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-600/30 rounded-xl p-4"
                        >
                          <div className="text-3xl font-black text-white mb-1">{result.value}</div>
                          <div className="text-xs text-blue-400 font-bold mb-1">{result.label}</div>
                          <div className="text-xs text-slate-400">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                      <div className="text-sm text-yellow-400 font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        KEY HIGHLIGHTS
                      </div>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      {project.status === 'live' ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
                        >
                          View Live Site <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 bg-slate-700 text-slate-400 px-6 py-3 rounded-full text-sm font-bold cursor-not-allowed opacity-60">
                          <Rocket className="w-4 h-4" />
                          In Progress
                        </div>
                      )}
                      {project.caseStudySlug && (
                        <Link
                          href={`/blog/${project.caseStudySlug}`}
                          className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all border border-slate-700"
                        >
                          Read Case Study <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* WHAT WE BUILD SECTION */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-5xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                What We Build
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From B2B catalogs to local service businesses, we specialize in Next.js sites 
                that turn traffic into revenue.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                <div className="bg-blue-600/20 rounded-xl p-3 w-fit mb-4">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">B2B Catalogs</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Product catalogs with real-time inventory, quote systems, and reseller portals. 
                  Built to handle hundreds of SKUs without breaking a sweat.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                <div className="bg-green-600/20 rounded-xl p-3 w-fit mb-4">
                  <Gauge className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Local Service Sites</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Optimized for "near me" searches with Google Business Profile integration, 
                  schema markup, and mobile-first design.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                <div className="bg-purple-600/20 rounded-xl p-3 w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SEO-First Rebuilds</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Rescuing businesses from slow WordPress sites with technical SEO audits 
                  and performance-first Next.js migrations.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-600/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to See Your Project Here?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you're a B2B distributor, manufacturer, or service business—we build sites 
              that perform. Let's talk about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
