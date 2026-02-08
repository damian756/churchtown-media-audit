export const locations = [
  // --- TIER 1: STRATEGIC HUBS (The Big 5) ---
  {
    slug: "southport",
    name: "Southport",
    travelTime: "0 mins (HQ)",
    landmark: "Lord Street",
    industryFocus: "Tourism, Hospitality & Retail",
    description: "Our home turf. We understand the unique seasonality of Southport's economy. We build digital storefronts that capture tourists and locals alike.",
    metaDesc: "Web Design & SEO Agency in Southport. The local experts. We build revenue-generating websites for businesses on Lord Street and beyond."
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    travelTime: "40 mins",
    landmark: "Royal Albert Dock",
    industryFocus: "Legal, Tech & Enterprise",
    description: "A global city with fierce competition. To rank here, you need aggressive Technical SEO and high-authority backlinks. Standard websites get buried.",
    metaDesc: "Liverpool Web Design & SEO. Stop paying city-centre agency rates. Get better performance and higher ROI with Churchtown Media."
  },
  {
    slug: "manchester",
    name: "Manchester",
    travelTime: "55 mins",
    landmark: "MediaCityUK",
    industryFocus: "E-Commerce & SaaS",
    description: "The digital capital of the North. Manchester businesses demand scalability. We build headless commerce and custom apps that handle serious traffic.",
    metaDesc: "Web Design Agency for Manchester. We build enterprise-grade React applications and e-commerce stores for the city's fastest-growing brands."
  },
  {
    slug: "preston",
    name: "Preston",
    travelTime: "30 mins",
    landmark: "Harris Museum",
    industryFocus: "Manufacturing & B2B",
    description: "The administrative center of Lancashire. B2B companies here need structured data and lead-generation funnels, not just pretty brochures.",
    metaDesc: "B2B Web Design & SEO for Preston. We build lead generation engines that convert industrial and professional traffic."
  },
  {
    slug: "blackpool",
    name: "Blackpool",
    travelTime: "40 mins",
    landmark: "The Blackpool Tower",
    industryFocus: "Tourism & Leisure",
    description: "The UK's playground. Competition for the 'tourist pound' is brutal. We build mobile-first sites that capture visitors the moment they arrive.",
    metaDesc: "Blackpool SEO & Web Design. Capture the tourist market with high-speed mobile sites that dominate the local search results."
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

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}