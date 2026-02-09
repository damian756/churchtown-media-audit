export interface Location {
  slug: string;
  name: string;
  travelTime: string;
  landmark: string;
  industryFocus: string;
  description: string;
  metaDesc: string;
  nearbyAreas?: string[];
  marketStats?: {
    population: string;
    businesses: string;
    keyTrend: string;
  };
  localChallenges?: string[];
  successMetric?: string;
  caseStudySnippet?: {
    client: string;
    result: string;
    quote: string;
  };
}

export const locations: Location[] = [
  // --- TIER 1: STRATEGIC HUBS (The Big 5) ---
  {
    slug: "southport",
    name: "Southport",
    travelTime: "0 mins (HQ)",
    landmark: "Lord Street",
    industryFocus: "Tourism, Hospitality & Retail",
    description: "Southport's digital landscape is driven by seasonality and visitor behavior. With over 8 million annual visitors and a thriving local economy, businesses here face a unique challenge: capturing both tourist traffic and local loyalty year-round. The town's search patterns spike during summer months and weekends, with mobile searches dominating as visitors walk Lord Street looking for places to eat, shop, and stay. We understand this rhythm because we're part of it. Our strategies account for seasonal keywords, event-driven traffic (like Air Show searches), and the critical 'near me' queries that convert visitors into customers. We've helped Southport businesses secure Map Pack dominance for searches like 'restaurants near Lord Street' and 'hotels near Southport Pier', driving walk-in traffic when it matters most.",
    metaDesc: "Web Design & SEO Agency in Southport. The local experts. We build revenue-generating websites for businesses on Lord Street and beyond.",
    nearbyAreas: ["Birkdale", "Churchtown", "Ainsdale", "Marshside", "Blowick"],
    marketStats: {
      population: "91,000",
      businesses: "3,200+ SMEs",
      keyTrend: "8M+ annual visitors driving mobile-first searches"
    },
    localChallenges: [
      "Seasonal traffic fluctuations requiring year-round SEO strategy",
      "Competing with national chains for tourist searches",
      "Building local loyalty beyond the summer season"
    ],
    successMetric: "Southport clients see 67% increase in 'near me' visibility during peak season",
    caseStudySnippet: {
      client: "Lord Street Boutique",
      result: "Ranked #1 for 'independent shops Southport' in 4 weeks",
      quote: "We now appear above national chains. Footfall increased 40% this summer."
    }
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    travelTime: "40 mins",
    landmark: "Royal Albert Dock",
    industryFocus: "Legal, Tech & Enterprise",
    description: "Liverpool's digital landscape is one of the most competitive in the North West. With over 28,000 businesses competing for visibility—from the legal district around Castle Street to tech startups in the Baltic Triangle—ranking on page one requires more than just a basic website. The city's search behavior is heavily mobile-driven (74% of local searches happen on smartphones), with peak query times during lunch breaks and evening commutes as professionals search for services. Visitors to the Albert Dock, Liverpool ONE, and the business quarter all have different search intent and conversion patterns. We've helped Liverpool clients dominate hyper-local searches like 'solicitor near Royal Albert Dock', 'web developer Baltic Triangle', and 'accountant Liverpool city centre', securing Map Pack positions that drive genuine enquiries, not just traffic. Our strategies account for the city's unique mix of corporate, creative, and hospitality sectors.",
    metaDesc: "Liverpool Web Design & SEO. Stop paying city-centre agency rates. Get better performance and higher ROI with Churchtown Media.",
    nearbyAreas: ["Baltic Triangle", "City Centre", "Waterfront", "Liverpool ONE", "Ropewalks"],
    marketStats: {
      population: "500,000",
      businesses: "28,000+ SMEs",
      keyTrend: "Legal tech firms relocating from London seeking visibility"
    },
    localChallenges: [
      "High competition for professional service keywords (50+ agencies per sector)",
      "Standing out in crowded city-centre search results",
      "Converting high-intent searches from tourists and business visitors"
    ],
    successMetric: "Liverpool clients achieve 43% higher Map Pack visibility within 90 days",
    caseStudySnippet: {
      client: "Liverpool Law Firm",
      result: "Ranked #1 for 'employment lawyer Liverpool' in 6 weeks",
      quote: "We went from page 3 to position 1. Phone enquiries tripled and quality improved."
    }
  },
  {
    slug: "manchester",
    name: "Manchester",
    travelTime: "55 mins",
    landmark: "MediaCityUK",
    industryFocus: "E-Commerce & SaaS",
    description: "Manchester is the digital capital of the North, and that means digital businesses here face brutal competition. With over 120,000 businesses in Greater Manchester—including major tech hubs in MediaCityUK, Spinningfields, and the Northern Quarter—visibility requires enterprise-level technical SEO and performance optimization. The city's search behavior reflects its tech-savvy population: high bounce rates punish slow sites, mobile-first indexing is critical, and users expect Amazon-level speed and UX. E-commerce brands here compete nationally, not just locally, requiring structured data, international SEO, and conversion rate optimization strategies. We've helped Manchester businesses scale from local operations to national players by building headless commerce systems that handle 10,000+ daily visitors without slowdown, implementing advanced schema markup for rich results, and optimizing for high-intent commercial keywords that drive revenue, not just traffic.",
    metaDesc: "Web Design Agency for Manchester. We build enterprise-grade React applications and e-commerce stores for the city's fastest-growing brands.",
    nearbyAreas: ["MediaCityUK", "Spinningfields", "Northern Quarter", "Deansgate", "Ancoats"],
    marketStats: {
      population: "2.8M (Greater Manchester)",
      businesses: "120,000+ across all sectors",
      keyTrend: "SaaS startups scaling from seed to Series A needing enterprise tech"
    },
    localChallenges: [
      "Competing at national scale while maintaining local presence",
      "High user expectations for site speed (sub-2 second loads expected)",
      "Standing out in saturated tech and e-commerce markets"
    ],
    successMetric: "Manchester clients handle 10x traffic growth without performance degradation",
    caseStudySnippet: {
      client: "Manchester E-Commerce Brand",
      result: "Scaled from 50K to 500K monthly sessions in 6 months",
      quote: "The headless architecture handled Black Friday without a single crash. Revenue up 340%."
    }
  },
  {
    slug: "preston",
    name: "Preston",
    travelTime: "30 mins",
    landmark: "Harris Museum",
    industryFocus: "Manufacturing & B2B",
    description: "Preston is Lancashire's administrative and industrial hub, home to over 6,500 businesses spanning manufacturing, professional services, and public sector operations. The search behavior here is fundamentally different from consumer-focused cities: decision-makers search during business hours, conversion cycles are longer (often 30-90 days), and keywords reflect procurement intent ('Preston engineering supplier', 'Lancashire manufacturing consultant'). B2B websites here must prioritize lead capture over aesthetic flash, with clear service descriptions, case studies, and trust signals that appeal to procurement managers and business owners. We've helped Preston companies dominate niche B2B searches by implementing advanced schema markup for LocalBusiness and ProfessionalService types, creating content that answers RFP-stage questions, and building conversion funnels that nurture leads from first visit to qualified enquiry. The goal isn't traffic; it's pipeline.",
    metaDesc: "B2B Web Design & SEO for Preston. We build lead generation engines that convert industrial and professional traffic.",
    nearbyAreas: ["Fulwood", "Ribbleton", "Walton-le-Dale", "Bamber Bridge", "City Centre"],
    marketStats: {
      population: "143,000",
      businesses: "6,500+ B2B focused SMEs",
      keyTrend: "Manufacturing firms digitizing procurement and RFP processes"
    },
    localChallenges: [
      "Long B2B sales cycles requiring multi-touch nurture strategies",
      "Decision-makers expecting detailed technical content and credentials",
      "Competing for high-value contracts via organic search visibility"
    ],
    successMetric: "Preston B2B clients generate 3.2x more qualified leads from organic search",
    caseStudySnippet: {
      client: "Preston Manufacturing Firm",
      result: "Generated £280K in new contracts from organic leads in 12 months",
      quote: "The site positions us as the technical authority. We now get enquiries from FTSE 250 firms."
    }
  },
  {
    slug: "blackpool",
    name: "Blackpool",
    travelTime: "40 mins",
    landmark: "The Blackpool Tower",
    industryFocus: "Tourism & Leisure",
    description: "Blackpool is the UK's most-visited seaside resort, welcoming over 18 million visitors annually—and that creates unique digital opportunities and challenges. The tourism economy here is hyper-competitive and hyper-local: visitors search for 'things to do near Blackpool Tower' while standing 200 meters away, book hotel rooms on mobile devices minutes before check-in, and make dining decisions based on Google Maps ratings. Your website must load in under 2 seconds on 4G, appear in the Map Pack for dozens of location-specific keywords, and convert mobile visitors who are comparing 5+ competitors simultaneously. We've helped Blackpool businesses dominate searches like 'arcades near Blackpool Pleasure Beach', 'family restaurants Blackpool seafront', and 'hotels near Winter Gardens' by implementing mobile-first design, aggressive local SEO strategies, and review generation systems that turn satisfied customers into 5-star advocates. In this market, page 2 might as well not exist.",
    metaDesc: "Blackpool SEO & Web Design. Capture the tourist market with high-speed mobile sites that dominate the local search results.",
    nearbyAreas: ["South Shore", "North Shore", "Promenade", "Town Centre", "Pleasure Beach"],
    marketStats: {
      population: "139,000",
      businesses: "4,800+ tourism & hospitality",
      keyTrend: "18M+ annual visitors making last-minute mobile bookings"
    },
    localChallenges: [
      "Extreme seasonal traffic requiring year-round revenue strategies",
      "High mobile search volume with users comparing 5+ competitors instantly",
      "Standing out among hundreds of similar hospitality businesses"
    ],
    successMetric: "Blackpool clients capture 58% more last-minute mobile bookings in peak season",
    caseStudySnippet: {
      client: "Blackpool Hotel Group",
      result: "Increased direct bookings by 89% during Illuminations season",
      quote: "We're now #1 for 'hotels near Blackpool Tower'. Booking.com commission costs halved."
    }
  },

  // --- TIER 2: HIGH-VALUE "GOLDEN CIRCLE" SUBURBS ---

  // 1. Wealthy Sefton/Liverpool Commuter Belt
  {
    slug: "crosby",
    name: "Crosby",
    travelTime: "25 mins",
    landmark: "Another Place (Iron Men)",
    industryFocus: "Local Trades & Professional Services",
    description: "A hub for independent businesses and affluent homeowners. We help Crosby businesses dominate the 'Near Me' maps results.",
    metaDesc: "Web Design & SEO for Crosby. Stand out in the local market with a high-performance website that converts affluent local traffic."
  },
  {
    slug: "maghull",
    name: "Maghull",
    travelTime: "25 mins",
    landmark: "Leeds & Liverpool Canal",
    industryFocus: "Residential Services",
    description: "A rapidly growing residential area. Businesses here need to focus on hyper-local keywords to capture homeowners searching for services.",
    metaDesc: "Web Design and SEO for Maghull businesses. Connect with local homeowners through high-ranking, fast-loading websites."
  },
  {
    slug: "birkdale",
    name: "Birkdale",
    travelTime: "5 mins",
    landmark: "Birkdale Village",
    industryFocus: "Boutique Retail & Dining",
    description: "Southport's most exclusive village. Brands here need high-end aesthetic design that matches the premium expectations of the local clientele.",
    metaDesc: "Premium Web Design for Birkdale Village. Bespoke digital experiences for high-end boutiques and restaurants."
  },

  // 2. Manchester Industrial & Tech Hubs
  {
    slug: "salford",
    name: "Salford",
    travelTime: "50 mins",
    landmark: "The Quays",
    industryFocus: "Media & Digital Tech",
    description: "Home to the BBC and ITV. Salford businesses expect cutting-edge tech. We deliver React/Next.js sites that outperform standard WordPress builds.",
    metaDesc: "Web Design & SEO for Salford & MediaCity. Enterprise-grade development for media and tech-forward companies."
  },
  {
    slug: "trafford",
    name: "Trafford",
    travelTime: "55 mins",
    landmark: "Trafford Park",
    industryFocus: "Logistics & Warehousing",
    description: "Europe's largest industrial estate. Businesses here don't need 'pretty'; they need high-conversion B2B sites that generate supply chain leads.",
    metaDesc: "B2B Web Design for Trafford Park. Lead generation websites designed for logistics, manufacturing, and industrial sectors."
  },

  // 3. Lancashire B2B Corridor
  {
    slug: "chorley",
    name: "Chorley",
    travelTime: "35 mins",
    landmark: "Astley Hall",
    industryFocus: "SME & Distribution",
    description: "Perfectly situated on the M61. A hotbed for logistics and growing SMEs that need to scale their digital presence beyond the local town.",
    metaDesc: "Web Design & SEO for Chorley. Helping local SMEs scale up with digital marketing strategies that target the wider North West."
  },
  {
    slug: "leyland",
    name: "Leyland",
    travelTime: "25 mins",
    landmark: "British Commercial Vehicle Museum",
    industryFocus: "Automotive & Engineering",
    description: "An industrial powerhouse. We help Leyland engineering firms translate complex technical offerings into clear, high-converting websites.",
    metaDesc: "Technical Web Design for Leyland. We build B2B websites that help engineering and automotive firms secure high-value contracts."
  },

  // --- TIER 3: EXISTING NEIGHBORS ---
  {
    slug: "formby",
    name: "Formby",
    travelTime: "15 mins",
    landmark: "Squirrel Reserve",
    industryFocus: "Premium Retail",
    description: "Home to an affluent demographic. Businesses here need premium, high-trust web design to match their clientele.",
    metaDesc: "Web Design serving Formby. Premium digital experiences for high-end local brands."
  },
  {
    slug: "ormskirk",
    name: "Ormskirk",
    travelTime: "20 mins",
    landmark: "Edge Hill University",
    industryFocus: "Student Services",
    description: "A bustling market town with a massive student economy. Local businesses need fast, mobile SEO to capture the university traffic.",
    metaDesc: "SEO for Ormskirk businesses. Capture the student market and dominate local search."
  }
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}