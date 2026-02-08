export const locations = [
    // --- THE STRATEGIC "BIG 5" ---
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
  
    // --- HIGH VALUE NEIGHBORS (Recommended to keep for SEO) ---
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