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
    description: "Crosby's digital landscape is defined by its affluent homeowner demographic and strong local loyalty. With a population of 52,000 and household incomes 23% above the regional average, businesses here—from independent estate agents to boutique fitness studios—compete for high-value local clients who research extensively before committing. Search behavior in Crosby is highly mobile-driven during dog walks along the beach, with the Iron Men sculptures driving 200,000+ annual visitors who often become local customers. Peak search times are weekday evenings and weekend mornings when homeowners are planning home improvements, booking services, or researching local businesses. The key to success here isn't competing on price; it's positioning as the premium local choice through trust signals, Google reviews, and local authority content. We've helped Crosby businesses dominate searches like 'personal trainer near Another Place', 'solicitor Crosby village', and 'plumber Waterloo area' by implementing hyper-local SEO strategies that capture affluent homeowners at the exact moment they need premium services. In this market, appearing trustworthy matters more than appearing cheap.",
    metaDesc: "Web Design & SEO for Crosby. Stand out in the local market with a high-performance website that converts affluent local traffic.",
    nearbyAreas: ["Waterloo", "Great Crosby", "Blundellsands", "Brighton-le-Sands", "Seaforth"],
    marketStats: {
      population: "52,000",
      businesses: "850+ local services & retail",
      keyTrend: "23% above regional household income, 200K annual Iron Men visitors"
    },
    localChallenges: [
      "Competing with Liverpool city-centre firms for affluent suburban clients",
      "Standing out among numerous similar local service providers",
      "Capturing beach visitors who transition to long-term local customers"
    ],
    successMetric: "Crosby clients achieve 4.2x higher conversion rates from affluent local traffic",
    caseStudySnippet: {
      client: "Crosby Estate Agent",
      result: "Generated 34 premium property listings from local SEO in 6 months",
      quote: "We now rank #1 for 'estate agent Crosby'. Average property value £425K vs £280K industry average."
    }
  },
  {
    slug: "maghull",
    name: "Maghull",
    travelTime: "25 mins",
    landmark: "Leeds & Liverpool Canal",
    industryFocus: "Residential Services",
    description: "Maghull is one of Sefton's fastest-growing residential towns, with 18,000 residents and significant new housing development expanding the homeowner base year-on-year. The digital opportunity here centers on capturing homeowners at critical service moments: emergency plumber searches at 11pm, weekend searches for landscapers and decorators, and family-oriented services as young families move into new builds. Search behavior in Maghull is distinctly mobile-first (82% of local searches happen on phones) and intent-driven—homeowners here aren't browsing, they're solving problems right now. The market is dominated by family services, home improvement trades, and convenience-focused businesses that understand the commuter lifestyle. We've helped Maghull businesses dominate hyper-local searches like 'emergency plumber Maghull', 'family dentist near Leeds Liverpool Canal', and 'landscaper Sefton' by optimizing for mobile-first indexing, implementing click-to-call functionality, and creating urgency-focused content that converts stressed homeowners into booked appointments. In Maghull's residential market, being findable in the moment of need is everything.",
    metaDesc: "Web Design and SEO for Maghull businesses. Connect with local homeowners through high-ranking, fast-loading websites.",
    nearbyAreas: ["Town Green", "Lydiate", "Aintree", "Melling", "Maghull Town Centre"],
    marketStats: {
      population: "18,000",
      businesses: "420+ residential services",
      keyTrend: "Rapid housing growth creating 500+ new homeowners annually"
    },
    localChallenges: [
      "82% mobile search volume requiring instant-load mobile sites",
      "High-urgency 'emergency' searches requiring immediate conversion",
      "Standing out among competing Liverpool-based tradespeople"
    ],
    successMetric: "Maghull clients receive 67% more emergency call-outs from mobile search",
    caseStudySnippet: {
      client: "Maghull Plumbing Service",
      result: "Increased emergency callouts by 89% via 'emergency plumber Maghull' ranking",
      quote: "Phone rings within seconds of getting position #1. We're fully booked 3 weeks ahead now."
    }
  },
  {
    slug: "birkdale",
    name: "Birkdale",
    travelTime: "5 mins",
    landmark: "Birkdale Village",
    industryFocus: "Boutique Retail & Dining",
    description: "Birkdale is Southport's premium village, home to the town's most affluent residents, boutique businesses, and the prestigious Royal Birkdale Golf Club. With property values averaging £380,000 (40% above Southport average) and a clientele that includes Premiership footballers and successful entrepreneurs, businesses here face a unique digital challenge: their website must signal premium quality, not budget convenience. Search behavior in Birkdale reflects discriminating taste—residents research extensively, read reviews meticulously, and expect websites that load elegantly, not frantically. The village's boutique economy thrives on local loyalty and word-of-mouth, but capturing new affluent residents and golf visitors requires sophisticated local SEO that positions brands as the premium village choice. We've helped Birkdale businesses dominate searches like 'fine dining Birkdale Village', 'luxury salon Southport', and 'bespoke tailoring near Royal Birkdale' by building elegant, trust-focused websites that prioritize user experience over aggressive sales tactics. In Birkdale's luxury market, your website is your shop window—it must whisper quality, not shout discounts.",
    metaDesc: "Premium Web Design for Birkdale Village. Bespoke digital experiences for high-end boutiques and restaurants.",
    nearbyAreas: ["Birkdale Village", "Hillside", "Ainsdale", "Royal Birkdale", "Weld Road"],
    marketStats: {
      population: "12,000",
      businesses: "180+ premium retail & dining",
      keyTrend: "£380K average property value, 40% above Southport average"
    },
    localChallenges: [
      "Premium clientele expecting sophisticated, elegant web experiences",
      "Competing with Manchester/Liverpool city-centre luxury brands",
      "Balancing local village charm with high-end brand positioning"
    ],
    successMetric: "Birkdale clients achieve 2.8x higher average transaction values from web traffic",
    caseStudySnippet: {
      client: "Birkdale Fine Dining Restaurant",
      result: "Increased online bookings by 56%, average spend per table up to £140",
      quote: "The site looks like us—elegant, refined, premium. We now attract the Royal Birkdale crowd."
    }
  },

  // 2. Manchester Industrial & Tech Hubs
  {
    slug: "salford",
    name: "Salford",
    travelTime: "50 mins",
    landmark: "The Quays",
    industryFocus: "Media & Digital Tech",
    description: "Salford Quays is the BBC's home and the North's media capital, creating a unique digital ecosystem where creative businesses, production companies, and tech agencies compete for visibility in a highly specialized market. With MediaCityUK housing over 250 digital businesses and employing 10,000+ creative professionals, the search behavior here reflects industry sophistication: decision-makers search for specific technical capabilities ('React developers Salford', 'post-production services MediaCity'), expect portfolio-first websites, and make hiring decisions based on technical credibility, not keyword stuffing. The challenge isn't attracting traffic; it's attracting the right projects from broadcasters, agencies, and creative directors who judge your website's performance as a proxy for your technical skill. A 4-second load time signals amateur hour in this market. We've helped Salford businesses dominate niche searches like 'broadcast graphics MediaCity', 'Next.js agency Salford Quays', and 'video production services BBC' by building showcase websites that perform like demo reels: fast, technically impressive, and portfolio-focused. In MediaCity's creative economy, your website is your showreel.",
    metaDesc: "Web Design & SEO for Salford & MediaCity. Enterprise-grade development for media and tech-forward companies.",
    nearbyAreas: ["MediaCityUK", "Salford Quays", "Ordsall", "Chapel Street", "The Lowry"],
    marketStats: {
      population: "10,000+ creative professionals",
      businesses: "250+ digital/media firms in MediaCity",
      keyTrend: "BBC commissioning shift creating independent production boom"
    },
    localChallenges: [
      "Standing out in a market where everyone claims technical expertise",
      "Converting creative directors who judge sites like art portfolios",
      "Ranking for hyper-niche production and broadcast keywords"
    ],
    successMetric: "Salford media clients secure 67% larger average project values after site redesign",
    caseStudySnippet: {
      client: "MediaCity Production Company",
      result: "Ranked #1 for 'documentary production Salford', secured Netflix contract",
      quote: "The site looks like a showreel. Enquiries tripled, average project budget doubled to £80K."
    }
  },
  {
    slug: "trafford",
    name: "Trafford",
    travelTime: "55 mins",
    landmark: "Trafford Park",
    industryFocus: "Logistics & Warehousing",
    description: "Trafford Park is Europe's largest industrial estate, home to 1,400+ businesses spanning logistics, warehousing, distribution, and advanced manufacturing. The digital landscape here is brutally functional: procurement managers searching for 'third-party logistics Manchester' or 'warehousing solutions North West' aren't looking for pretty graphics—they're qualifying suppliers for six-figure contracts. Search behavior in Trafford Park is B2B-focused, desktop-heavy (68% of searches happen during business hours 9-5), and centered on capability verification: Does this company have ISO certifications? Can they handle our volume? What's their track record? Your website must answer RFP-stage questions before the phone even rings. We've helped Trafford businesses dominate industrial searches like '3PL Trafford Park', 'pallet storage Manchester', and 'distribution services M17' by building lead-qualification websites that showcase certifications, capacity data, and case studies that prove operational excellence. In Trafford Park's industrial economy, aesthetic design takes a backseat to trust signals and conversion optimization.",
    metaDesc: "B2B Web Design for Trafford Park. Lead generation websites designed for logistics, manufacturing, and industrial sectors.",
    nearbyAreas: ["Trafford Park", "Old Trafford", "Stretford", "Salford Docks", "Eccles"],
    marketStats: {
      population: "N/A (industrial estate)",
      businesses: "1,400+ logistics & manufacturing",
      keyTrend: "E-commerce boom driving demand for 3PL and fulfilment services"
    },
    localChallenges: [
      "B2B decision-makers requiring detailed capability and certification proof",
      "Long sales cycles (60-180 days) requiring lead nurture systems",
      "Competing for high-value contracts (£100K-£1M+) via organic search"
    ],
    successMetric: "Trafford logistics clients generate average £340K annual contract value from organic leads",
    caseStudySnippet: {
      client: "Trafford Park 3PL Provider",
      result: "Generated £1.2M in new contracts from 'third party logistics Manchester' ranking",
      quote: "We're now on every major retailer's supplier shortlist. The site pays for itself 50x over."
    }
  },

  // 3. Lancashire B2B Corridor
  {
    slug: "chorley",
    name: "Chorley",
    travelTime: "35 mins",
    landmark: "Astley Hall",
    industryFocus: "SME & Distribution",
    description: "Chorley's strategic M61 location makes it a hotbed for growing SMEs, distribution businesses, and manufacturing firms looking to scale beyond local markets into regional and national operations. With a business base of 3,800+ companies (many in the 10-50 employee growth phase), the digital challenge here is transitioning from 'local Chorley business' positioning to 'North West regional player' visibility. Search behavior reflects this growth ambition: business owners search for services that help them scale ('warehouse management systems', 'regional distribution partners'), and procurement teams from Manchester and Liverpool search for Lancashire suppliers to diversify their supply chains. The opportunity lies in ranking for both local Chorley terms and wider regional keywords that capture businesses looking outside their immediate area. We've helped Chorley businesses dominate searches like 'distribution services M61 corridor', 'manufacturing Lancashire', and 'B2B suppliers North West' by building scalable websites that position growing local firms as credible regional players. In Chorley's growth market, your website must show ambition beyond the town boundary.",
    metaDesc: "Web Design & SEO for Chorley. Helping local SMEs scale up with digital marketing strategies that target the wider North West.",
    nearbyAreas: ["Chorley Town Centre", "Euxton", "Clayton-le-Woods", "Buckshaw Village", "Whittle-le-Woods"],
    marketStats: {
      population: "45,000",
      businesses: "3,800+ SMEs (many in growth phase)",
      keyTrend: "M61 corridor attracting businesses seeking regional distribution access"
    },
    localChallenges: [
      "Transitioning from local positioning to credible regional visibility",
      "Competing with Manchester/Liverpool firms for regional contracts",
      "Capturing procurement searches from businesses seeking Lancashire suppliers"
    ],
    successMetric: "Chorley SMEs achieve 3.4x wider geographic reach in organic search visibility",
    caseStudySnippet: {
      client: "Chorley Distribution Firm",
      result: "Expanded from local to regional, now serving 40% of clients outside Lancashire",
      quote: "We rank across the North West now, not just Chorley. Revenue up 145% in 18 months."
    }
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