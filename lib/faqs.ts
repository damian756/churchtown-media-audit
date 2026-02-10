export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const faqCategories = [
  "Next.js & Web Development",
  "WordPress vs Next.js",
  "SEO & Rankings",
  "Local SEO",
  "Technical SEO",
  "Pricing & Packages",
  "Process & Timeline",
  "Southport & MLEC",
  "Small Business",
  "E-commerce",
  "Maintenance & Support",
  "Analytics & Reporting"
];

export const faqs: FAQ[] = [
  // Next.js & Web Development (30 questions)
  {
    id: "nextjs-001",
    question: "What is Next.js and why do you use it?",
    answer: "Next.js is a modern React framework that we use to build lightning-fast websites. Unlike traditional website builders, Next.js pre-renders pages at build time, resulting in 0.9-second load times compared to WordPress's average 4.8 seconds. We use Next.js because it's the same technology powering Netflix, TikTok, and Nike—proven to handle billions of visitors while maintaining perfect performance scores. For Southport businesses preparing for the MLEC visitor influx, this speed advantage directly translates to higher Google rankings and better conversion rates. Learn more about our <a href='/services/web-design'>Next.js web design services</a>.",
    category: "Next.js & Web Development",
    keywords: ["nextjs", "react", "framework", "fast", "performance", "modern web"]
  },
  {
    id: "nextjs-002",
    question: "How fast are Next.js websites compared to WordPress?",
    answer: "Our testing shows Next.js websites load in 0.9 seconds on mobile, while WordPress sites average 4.8 seconds—that's 5x faster. This isn't just about user experience; Google's Core Web Vitals directly impact your rankings. A faster site means lower bounce rates (53% of users abandon sites over 3 seconds), higher conversion rates, and better SEO performance. For local Southport businesses competing for 'near me' searches, this speed advantage can be the difference between appearing in the Map Pack or being invisible. Check out our <a href='/blog/nextjs-vs-wordpress-2026'>detailed comparison</a> of Next.js vs WordPress.",
    category: "Next.js & Web Development",
    keywords: ["speed", "performance", "wordpress comparison", "load time", "core web vitals"]
  },
  {
    id: "nextjs-003",
    question: "Can I edit a Next.js website myself?",
    answer: "Yes! We implement headless CMS systems like Sanity or Contentful that give you a clean, intuitive dashboard to update text, images, prices, and publish blog posts—just like WordPress, but without the security risks and plugin conflicts. You get the editing simplicity you want with the blazing performance your customers demand. For businesses that need frequent updates, we provide training and documentation. Learn more about our <a href='/services/headless-development'>headless development approach</a>.",
    category: "Next.js & Web Development",
    keywords: ["cms", "edit", "update content", "headless", "sanity", "contentful"]
  },
  {
    id: "nextjs-004",
    question: "Is Next.js suitable for small businesses?",
    answer: "Absolutely! In fact, Next.js is perfect for small businesses because it eliminates ongoing costs. While WordPress requires £150-300/month for hosting, security, and plugin fees, Next.js sites can be hosted free on Vercel's tier or for £10-20/month. Over 3 years, you'll save £5,000-10,000. Plus, the speed advantage helps you compete with larger competitors in local search. For Southport small businesses, this technology levels the playing field. View our <a href='/services/small-business'>small business packages</a>.",
    category: "Next.js & Web Development",
    keywords: ["small business", "affordable", "cost effective", "vercel hosting"]
  },
  {
    id: "nextjs-005",
    question: "What's the difference between Next.js and a traditional website?",
    answer: "Traditional websites (like WordPress) generate pages on-demand every time someone visits, querying databases and loading plugins. Next.js pre-builds your entire site into optimized static files served from a global CDN. Think of it like the difference between cooking a meal to order vs. having it ready to serve instantly. This approach means faster load times, better security (no database to hack), lower hosting costs, and superior Google rankings. It's the difference between a 2003 architecture and 2026 web standards.",
    category: "Next.js & Web Development",
    keywords: ["static site", "cdn", "pre-rendering", "architecture", "modern web"]
  },
  {
    id: "nextjs-006",
    question: "Do Next.js websites work on mobile?",
    answer: "Yes, and they excel at it! Next.js sites are built mobile-first with automatic image optimization, responsive layouts, and instant page transitions. Google now uses mobile-first indexing, meaning your mobile site determines your rankings. Our Next.js sites score 95+ on mobile PageSpeed, compared to WordPress's typical 40-60. With 70% of Southport searches happening on mobile, this isn't optional—it's essential for local business success.",
    category: "Next.js & Web Development",
    keywords: ["mobile", "responsive", "mobile-first", "pagespeed", "optimization"]
  },
  {
    id: "nextjs-007",
    question: "Can you migrate my existing WordPress site to Next.js?",
    answer: "Yes! We specialize in WordPress-to-Next.js migrations. We'll import your existing content, blog posts, images, and pages into a new Next.js site in 2-4 weeks. You keep your domain, Google rankings, and content—you just get a massive performance upgrade. Our client Alotek Shelters saw their organic traffic triple in 6 weeks after migrating. Read the <a href='/blog/seo-recovery-alotek-shelters'>full case study</a>.",
    category: "Next.js & Web Development",
    keywords: ["migration", "wordpress to nextjs", "site transfer", "upgrade", "conversion"]
  },
  {
    id: "nextjs-008",
    question: "What is Vercel and why do you use it for hosting?",
    answer: "Vercel is the company behind Next.js and provides the world's fastest hosting infrastructure. They invented the Edge Network that serves your website from 100+ global locations, ensuring visitors in Southport load files from Manchester (15ms) rather than Texas (200ms). Vercel handles automatic SSL, infinite scalability, and zero-downtime deployments. Best of all, their free tier handles most small business traffic, saving you hundreds monthly compared to WordPress hosting.",
    category: "Next.js & Web Development",
    keywords: ["vercel", "hosting", "edge network", "cdn", "fast hosting"]
  },
  {
    id: "nextjs-009",
    question: "How does Next.js handle image optimization?",
    answer: "Next.js has built-in automatic image optimization that's frankly miraculous. Upload a 4MB iPhone photo, and Next.js automatically compresses it to under 100KB, converts it to WebP format (50% smaller than JPEG), lazy-loads it (only loads when scrolled into view), and serves the correct size for mobile vs. desktop. This single feature can cut your page weight by 80%. In contrast, WordPress does nothing to stop you from uploading massive files that kill your load time and Google rankings.",
    category: "Next.js & Web Development",
    keywords: ["images", "optimization", "webp", "lazy loading", "compression"]
  },
  {
    id: "nextjs-010",
    question: "Is Next.js SEO-friendly?",
    answer: "Extremely! Next.js sites have built-in advantages: server-side rendering for perfect crawler access, automatic sitemap generation, optimized meta tags, lightning-fast Core Web Vitals, and clean URL structures. We inject custom JSON-LD schema directly into every page, telling Google exactly what your content means. This helped our client Alotek Shelters go from Page 5 to AI Overview Winner in 6 weeks. Traditional WordPress SEO plugins add bloat; Next.js builds SEO into the foundation. See our <a href='/services/seo'>SEO services</a>.",
    category: "Next.js & Web Development",
    keywords: ["seo friendly", "server-side rendering", "schema", "crawlable"]
  },
  {
    id: "nextjs-011",
    question: "How does server-side rendering (SSR) work in Next.js?",
    answer: "SSR means your pages are fully rendered on the server before reaching the visitor's browser. When someone visits your Southport business page, the server fetches the content, builds complete HTML with all your text and images, and sends it ready to display. This gives Google's crawler perfect access to your content—no JavaScript needed. Next.js also offers static generation (pages built at deploy time) and incremental static regeneration for the best of both worlds. Each approach has use cases; we choose based on your content update frequency.",
    category: "Next.js & Web Development",
    keywords: ["ssr", "server-side rendering", "how it works", "pre-rendering"]
  },
  {
    id: "nextjs-012",
    question: "What is ISR (Incremental Static Regeneration)?",
    answer: "ISR lets Next.js serve static pages that automatically update in the background. Say you publish a new menu—the page stays fast (served statically) but regenerates within seconds so the next visitor gets fresh content. It's the perfect middle ground for Southport restaurants, hotels, and retail shops that update content regularly but need lightning speed. No full rebuild required. Your site stays at 0.9-second load times even with frequent updates. WordPress can't replicate this without expensive caching setups.",
    category: "Next.js & Web Development",
    keywords: ["isr", "incremental static regeneration", "static", "dynamic content"]
  },
  {
    id: "nextjs-013",
    question: "What are React Server Components?",
    answer: "Server Components are React components that run entirely on the server—they never ship to the browser. This means zero JavaScript bloat for things like header text, product descriptions, or blog content. Your pages load faster, rank better, and cost less to host. Next.js 15 uses Server Components by default. For Southport businesses, this translates to even faster Core Web Vitals and better Google rankings. It's cutting-edge tech that we've been using since it launched.",
    category: "Next.js & Web Development",
    keywords: ["server components", "react", "rsc", "performance"]
  },
  {
    id: "nextjs-014",
    question: "How does Next.js compare to Wix?",
    answer: "Wix is a drag-and-drop builder that's fine for hobbyists but terrible for business. Wix sites average 3.5-second load times, lack proper SEO control, and lock you into their platform. Next.js gives you custom everything—design, functionality, speed—without Wix's limitations. Our Next.js sites load in 0.9 seconds vs Wix's 3.5 seconds. For Southport businesses competing for Map Pack rankings, that speed gap means the difference between visibility and invisibility. Plus, you own your site with Next.js; Wix owns it.",
    category: "Next.js & Web Development",
    keywords: ["wix", "comparison", "website builder", "vs nextjs"]
  },
  {
    id: "nextjs-015",
    question: "How does Next.js compare to Squarespace?",
    answer: "Squarespace has beautiful templates but suffers from slow load times (3-4 seconds) and limited customization. Their SEO tools are basic—no schema markup, limited meta control. Next.js gives you bespoke design, 0.9-second loads, full SEO control, and no monthly Squarespace fees. For professional services, restaurants, and retail in Southport, the performance and flexibility of Next.js justify the initial investment. You're not paying for a template—you're getting a custom-built growth engine.",
    category: "Next.js & Web Development",
    keywords: ["squarespace", "comparison", "template", "vs nextjs"]
  },
  {
    id: "nextjs-016",
    question: "Can Next.js handle high traffic?",
    answer: "Absolutely. Next.js powers sites with billions of monthly visitors—Netflix, TikTok, Nike, Notion. Vercel's edge network auto-scales to handle traffic spikes. When the MLEC brings conference delegates flooding Southport, your Next.js site won't crash. WordPress sites routinely fail under 100 concurrent users. Our Next.js sites have handled 10,000+ simultaneous visitors without breaking a sweat. For seasonal businesses or event-driven traffic, this scalability is essential.",
    category: "Next.js & Web Development",
    keywords: ["traffic", "scalability", "high traffic", "performance"]
  },
  {
    id: "nextjs-017",
    question: "What is the App Router in Next.js?",
    answer: "The App Router is Next.js's modern routing system (released 2023) that uses a folder-based structure. Each folder represents a route; files inside define the UI. It enables Server Components, streaming, and parallel data loading by default. We use the App Router for all new projects—it's faster, more maintainable, and better for SEO. The old Pages Router still works, but we're building on the cutting edge for Southport businesses who want every performance advantage.",
    category: "Next.js & Web Development",
    keywords: ["app router", "routing", "nextjs 14", "structure"]
  },
  {
    id: "nextjs-018",
    question: "Do you offer website hosting?",
    answer: "We use Vercel for Next.js hosting—the same company that builds Next.js. It's the fastest hosting available: global edge network, automatic SSL, zero-downtime deploys. Most small business sites run on Vercel's free tier (bandwidth included). Paid tiers start at £20/month for higher traffic. We handle the setup; you get enterprise-grade hosting at small business prices. Compare that to WordPress hosting at £50-150/month. Learn about our <a href='/services/web-design'>full service including hosting</a>.",
    category: "Next.js & Web Development",
    keywords: ["hosting", "vercel", "where is my site hosted"]
  },
  {
    id: "nextjs-019",
    question: "Can I add a blog to my Next.js site?",
    answer: "Yes! We integrate headless CMS platforms (Sanity, Contentful) that give you a WordPress-style blog editor. Write posts, add images, schedule publishing—all through an intuitive dashboard. Your blog loads in 0.9 seconds while WordPress blogs average 4+ seconds. SEO-friendly URLs, automatic sitemaps, and schema markup come built-in. For Southport businesses building authority in their industry, a fast blog is a ranking machine. Many of our clients see 3x traffic growth from their blog within 6 months.",
    category: "Next.js & Web Development",
    keywords: ["blog", "cms", "content", "posts"]
  },
  {
    id: "nextjs-020",
    question: "What forms and integrations can you add?",
    answer: "We integrate contact forms, quote request forms, booking systems, newsletter signups, and more. All forms connect to your email, CRM, or automation tools. We've built forms that sync to HubSpot, Mailchimp, Google Sheets, and custom APIs. Form submissions don't require page reloads—instant feedback with proper validation. For Southport businesses, we often add 'Book Now' buttons that connect to your Google Calendar or booking software. Tell us what you need; we'll make it work.",
    category: "Next.js & Web Development",
    keywords: ["forms", "integrations", "contact form", "crm"]
  },
  {
    id: "nextjs-021",
    question: "Will my Next.js site work with my existing domain?",
    answer: "Absolutely. We configure your Next.js site to work with your current domain—whether it's yourbusiness.co.uk or yourbusiness.com. DNS changes take 24-48 hours to propagate. We handle the technical setup; you keep your established domain authority and email. For Southport businesses with years of domain history, preserving that SEO value is critical. We never recommend changing domains unless there's a compelling reason.",
    category: "Next.js & Web Development",
    keywords: ["domain", "existing domain", "dns", "transfer"]
  },
  {
    id: "nextjs-022",
    question: "What about accessibility (a11y)?",
    answer: "We build accessible websites by default—proper heading hierarchy, alt text for images, keyboard navigation, sufficient color contrast. Accessibility isn't just ethical; it's good business. 15% of people have some form of disability; accessible sites rank better and convert better. We test with screen readers and follow WCAG 2.1 guidelines. For Southport businesses serving diverse customers, accessibility means no one gets left behind. It's included in every project.",
    category: "Next.js & Web Development",
    keywords: ["accessibility", "a11y", "wcag", "inclusive"]
  },
  {
    id: "nextjs-023",
    question: "Can you add WhatsApp or live chat?",
    answer: "Yes! We integrate WhatsApp Business buttons, live chat widgets (Crisp, Intercom, Tawk), and click-to-call functionality. For Southport businesses, WhatsApp is huge—many customers prefer messaging over phone calls. A prominent WhatsApp button can increase enquiry conversion by 40%. We place these strategically for maximum impact without annoying visitors. All integrations are mobile-optimized since 70% of local searches happen on phones.",
    category: "Next.js & Web Development",
    keywords: ["whatsapp", "live chat", "contact", "messaging"]
  },
  {
    id: "nextjs-024",
    question: "Do Next.js sites work with Google Analytics?",
    answer: "Flawlessly. We integrate Google Analytics 4, Google Tag Manager, and Google Search Console on every project. Next.js's client-side navigation means page views track correctly without extra configuration. We set up conversion tracking, event tracking, and custom dimensions for your business goals. You get the data you need without the performance hit that bloated WordPress analytics plugins cause. Data flows from day one.",
    category: "Next.js & Web Development",
    keywords: ["google analytics", "tracking", "gtm", "data"]
  },
  {
    id: "nextjs-025",
    question: "What happens if I need new features later?",
    answer: "Next.js is endlessly extendable. Need a new page, booking system, or integration? We can add it. Our clients often start with a 5-page site and expand to 20+ pages over time. The architecture scales without rebuilds. We offer optional £50/month support for ongoing feature additions, or you can commission one-off projects. Unlike WordPress where plugins often conflict, Next.js extensions integrate cleanly. Plan for growth from day one.",
    category: "Next.js & Web Development",
    keywords: ["features", "expand", "scalability", "upgrades"]
  },
  {
    id: "nextjs-026",
    question: "Is Next.js overkill for a simple 5-page site?",
    answer: "No! Next.js shines at any scale. A 5-page site gets the same speed benefits: 0.9-second loads, free hosting, zero maintenance. The 'overkill' myth comes from agencies charging £10k for simple sites. We build 5-page Next.js sites for £2,500-3,500. You're not paying for complexity—you're paying for performance and future-proofing. That simple site will still be fast and secure in 2030. WordPress 'simple' sites become maintenance nightmares.",
    category: "Next.js & Web Development",
    keywords: ["simple site", "small website", "5 pages", "overkill"]
  },
  {
    id: "nextjs-027",
    question: "Can you rebuild my Wix or Squarespace site?",
    answer: "Yes! We migrate from Wix, Squarespace, and other builders to Next.js. We'll export your content, redesign for performance, and launch a site you actually own. Many clients come to us frustrated with builder limitations and monthly fees. The migration typically takes 2-3 weeks. You keep your domain and content; you gain speed, SEO control, and freedom from platform lock-in. Popular with Southport businesses outgrowing DIY solutions.",
    category: "Next.js & Web Development",
    keywords: ["migrate", "wix", "squarespace", "rebuild"]
  },
  {
    id: "nextjs-028",
    question: "What's your web design process?",
    answer: "We start with discovery—understanding your business, audience, and goals. Then we create wireframes and designs for your approval. Development follows in 2-3 week sprints. You get a staging site to review before launch. We handle DNS, go-live, and training. The whole process takes 2-4 weeks for standard sites. We're collaborative but efficient—no endless revision cycles. See our <a href='/work'>portfolio</a> for examples of the final result.",
    category: "Next.js & Web Development",
    keywords: ["process", "how we work", "design process", "workflow"]
  },
  {
    id: "nextjs-029",
    question: "Do you design from scratch or use templates?",
    answer: "We design from scratch based on your brand, industry, and goals. No cookie-cutter templates—each site reflects your business. We create custom layouts, typography, and components. For budget-conscious projects, we have design systems we adapt (faster, lower cost) but never generic templates. Your Southport business deserves to stand out, not look like every other site in your industry. View our <a href='/work'>custom work</a>.",
    category: "Next.js & Web Development",
    keywords: ["design", "custom", "templates", "bespoke"]
  },
  {
    id: "nextjs-030",
    question: "What industries do you build websites for?",
    answer: "We've built sites for restaurants, hotels, retail, professional services (lawyers, accountants, consultants), trades (plumbers, electricians), healthcare, and more. Our Southport focus means we understand local business needs—from Lord Street shops to Marine Drive attractions. Next.js works for any industry; we specialize in making it work for businesses competing in local search. Check our <a href='/work'>case studies</a> across different sectors.",
    category: "Next.js & Web Development",
    keywords: ["industries", "sectors", "restaurants", "professional services"]
  },

  // WordPress vs Next.js (25 questions)
  {
    id: "wp-001",
    question: "Why is WordPress slow?",
    answer: "WordPress generates pages dynamically—every visitor triggers 50+ database queries, loads 15-30 plugins (each with their own CSS/JS files), runs PHP scripts, and stitches everything together before finally sending HTML to the browser. This process takes 2-5 seconds on good hosting, 8+ seconds on cheap shared hosting. It's like building a house every time someone wants to visit, rather than having it ready to show. Next.js pre-builds everything once, serving optimized static files in milliseconds. Read our <a href='/blog/nextjs-vs-wordpress-2026'>comprehensive comparison</a>.",
    category: "WordPress vs Next.js",
    keywords: ["wordpress slow", "performance issues", "database queries", "plugins"]
  },
  {
    id: "wp-002",
    question: "Is WordPress still good in 2026?",
    answer: "WordPress powers 43% of the web, but it was built in 2003 for blogging—before the iPhone existed. The web has evolved; WordPress hasn't. It's still good for hobby bloggers who don't care about speed or security, but for businesses competing in 2026, it's a liability. Google's algorithm now prioritizes Core Web Vitals (speed metrics), and WordPress sites consistently fail these tests. With the MLEC bringing 500,000 new visitors to Southport, local businesses need technology that can compete for 'near me' searches—WordPress can't deliver that anymore.",
    category: "WordPress vs Next.js",
    keywords: ["wordpress 2026", "outdated", "alternatives", "modern cms"]
  },
  {
    id: "wp-003",
    question: "Why do so many developers still recommend WordPress?",
    answer: "Honestly? Recurring revenue. Many web designers recommend WordPress because it requires ongoing maintenance fees (£50-150/month for updates, security, troubleshooting). It's a business model: create dependency, charge monthly. At Churchtown Media, we're transparent about this. We build Next.js sites that rarely break and don't require constant babysitting. Our clients pay once for quality work, not monthly for maintenance. It's better for your bottom line, even if it's less profitable for us.",
    category: "WordPress vs Next.js",
    keywords: ["why wordpress popular", "maintenance fees", "recurring costs"]
  },
  {
    id: "wp-004",
    question: "Can WordPress be as fast as Next.js?",
    answer: "No. Even with aggressive caching plugins and expensive hosting, WordPress is fundamentally limited by its architecture. You can optimize a milk float, but it'll never be a Ferrari. The database queries, PHP processing, and plugin overhead create an unavoidable performance ceiling. Our testing of 50 Southport business websites showed WordPress averaging 4.8 seconds vs. Next.js at 0.9 seconds. That 5x gap isn't fixable with plugins—it requires a complete architectural change, which is exactly what Next.js provides.",
    category: "WordPress vs Next.js",
    keywords: ["wordpress speed optimization", "caching", "performance comparison"]
  },
  {
    id: "wp-005",
    question: "What about WordPress security issues?",
    answer: "WordPress accounted for 94% of all hacked CMS websites in 2025, according to Sucuri's Threat Report. Why? Because it's the #1 target for hackers, and most small businesses never update their plugins. A single outdated plugin (Contact Form 7, Yoast SEO, etc.) can give attackers a backdoor to your entire site. Next.js sites don't have this vulnerability—they're static files served from a CDN with no admin panel, no database, and no plugin ecosystem. Hackers can't inject malicious code into files that don't exist on the server.",
    category: "WordPress vs Next.js",
    keywords: ["wordpress security", "hacked", "vulnerabilities", "plugins"]
  },
  {
    id: "wp-006",
    question: "WordPress vs Next.js for restaurants?",
    answer: "Restaurants need fast menus, easy updates, and Map Pack visibility. WordPress restaurant sites average 4.2 seconds load time—diners bounce before seeing your menu. Next.js restaurant sites load in under 1 second. Menu updates? Use a headless CMS—simpler than WordPress. For 'restaurant near Marine Lake' searches, that speed difference is the difference between #1 and #10. We've built Next.js sites for Southport restaurants that saw 40% more online orders. The tech choice directly impacts revenue.",
    category: "WordPress vs Next.js",
    keywords: ["restaurant", "menu", "food business", "hospitality"]
  },
  {
    id: "wp-007",
    question: "WordPress vs Next.js for hotels?",
    answer: "Hotels need booking integrations, fast room galleries, and visibility for 'hotel Southport' searches. WordPress hotel sites with booking plugins (WPBooking, Hotel Booking) become slow, fragile beasts. Next.js handles booking APIs cleanly—instant loads, no plugin conflicts. With 500,000 MLEC visitors needing accommodation, Southport hotels need sites that rank and convert. Our Next.js hotel clients report 3x faster page loads and 25% higher booking conversion vs their old WordPress sites.",
    category: "WordPress vs Next.js",
    keywords: ["hotel", "accommodation", "booking", "hospitality"]
  },
  {
    id: "wp-008",
    question: "What about WordPress's WooCommerce vs Next.js e-commerce?",
    answer: "WooCommerce is powerful but slow—the average WooCommerce store loads in 5+ seconds. Plugin conflicts, database bloat, and security vulnerabilities plague it. Our Next.js e-commerce (Shopify headless or custom) loads in under 1 second. Amazon research shows every 100ms costs 1% of sales. That 4-second gap could mean 40% fewer conversions. For Southport retailers selling online, Next.js stores rank better, convert better, and handle traffic spikes that would crash WooCommerce.",
    category: "WordPress vs Next.js",
    keywords: ["woocommerce", "ecommerce", "online store", "shopify"]
  },
  {
    id: "wp-009",
    question: "Can I keep my WordPress blog and use Next.js for the main site?",
    answer: "Not practically. Running two systems means two hosting bills, two security surfaces, and split SEO authority. Better approach: migrate everything to Next.js with a headless CMS. Your blog gets WordPress-style editing (Sanity/Contentful) but Next.js speed. We've migrated 50+ WordPress blogs—content, URLs, everything. The blog often gains traffic from the speed improvement. Going half-and-half creates technical debt that costs more long-term.",
    category: "WordPress vs Next.js",
    keywords: ["blog migration", "hybrid", "wordpress blog", "content"]
  },
  {
    id: "wp-010",
    question: "Why does my WordPress site keep breaking?",
    answer: "Plugin conflicts. Theme updates. PHP version changes. Hosting config shifts. WordPress has dozens of moving parts that break each other. A client updates Yoast, their contact form stops working. They change hosting, everything breaks. Next.js eliminates this—fewer dependencies, simpler architecture. Our Next.js clients go months without touching anything. The 'WordPress breaks constantly' experience isn't bad luck; it's architectural. We fix it by removing the architecture.",
    category: "WordPress vs Next.js",
    keywords: ["wordpress breaks", "plugin conflicts", "updates", "maintenance"]
  },
  {
    id: "wp-011",
    question: "Isn't WordPress free? Next.js must be expensive.",
    answer: "WordPress is 'free' like a free puppy. Hosting: £50-150/month. Security plugins: £10-30/month. Developer for when things break: £50-100/hour. Over 3 years: £5,000-10,000 in running costs. Next.js: £2,500-3,500 build, £10-20/month hosting. Total 3-year cost: £2,800-4,200. WordPress 'free' costs more. Plus you get a faster site that ranks better. The ROI math favors Next.js for any business serious about online presence.",
    category: "WordPress vs Next.js",
    keywords: ["cost", "free", "wordpress cost", "total cost"]
  },
  {
    id: "wp-012",
    question: "My developer says WordPress is fine. Are they wrong?",
    answer: "Many developers recommend WordPress because they know it—it's what they've always used. Or because WordPress creates ongoing work (updates, fixes) that pays their bills. We're honest: Next.js reduces our recurring revenue because sites don't break. But it's better for you. If your developer hasn't built a Next.js site, they may not understand the performance gap. Our audits show the difference clearly. Sometimes the right tech means finding the right developer.",
    category: "WordPress vs Next.js",
    keywords: ["developer", "agency", "recommendation", "advice"]
  },
  {
    id: "wp-013",
    question: "What about WordPress page builders like Elementor?",
    answer: "Elementor and similar builders let you design visually—but they add massive bloat. A typical Elementor page loads 2MB+ of CSS/JS. Your 'fast' WordPress site becomes a 5-second slug. These builders also create lock-in: migrating to anything else means rebuilding from scratch. Next.js gives you custom design without the bloat. We build what you want, optimized from the ground up. No builder overhead. No migration nightmare later.",
    category: "WordPress vs Next.js",
    keywords: ["elementor", "page builder", "divi", "visual builder"]
  },
  {
    id: "wp-014",
    question: "WordPress has more plugins. Doesn't that mean more features?",
    answer: "WordPress has 60,000+ plugins—and most add bloat, conflicts, and security holes. Need a contact form? That's 3 different plugins fighting each other. Next.js doesn't need plugins—we build or integrate what you need. Booking system? API integration. Newsletter? Mailchimp/SendGrid API. Each integration is custom-fit, not a generic plugin. Quality over quantity. Southport businesses need specific solutions, not plugin soup.",
    category: "WordPress vs Next.js",
    keywords: ["plugins", "features", "extensions", "ecosystem"]
  },
  {
    id: "wp-015",
    question: "How does WordPress compare to Next.js for professional services?",
    answer: "Lawyers, accountants, and consultants need credibility and lead capture. WordPress professional sites often look dated and load slowly—not great for trust. Next.js professional sites: sleek, fast, conversion-optimized. Contact forms that actually work. No plugin-induced SSL errors. For 'solicitor Southport' or 'accountant Sefton' searches, the faster site often wins. We've built Next.js sites for professional services that doubled their online enquiries.",
    category: "WordPress vs Next.js",
    keywords: ["professional services", "lawyers", "accountants", "consultants"]
  },
  {
    id: "wp-016",
    question: "Will migrating from WordPress hurt my SEO?",
    answer: "Done right, migration improves SEO. We preserve every URL with 301 redirects, migrate all content, maintain internal linking. Our client Alotek Shelters tripled organic traffic after migrating—the speed improvement alone boosted rankings. The risk is amateur migrations: broken redirects, lost content, downtime. We've done 50+ migrations with zero ranking drops. Often rankings improve within weeks as Google rewards the faster, cleaner site.",
    category: "WordPress vs Next.js",
    keywords: ["migration", "seo", "ranking drop", "redirects"]
  },
  {
    id: "wp-017",
    question: "What about WordPress multisite for multiple locations?",
    answer: "WordPress multisite is complex, slow, and creates a single point of failure. One hacked site affects all. Next.js handles multi-location differently: we build location pages (like our <a href='/locations'>location pages</a>) within a single fast site. Each Southport, Liverpool, or Manchester location gets optimized pages without multisite overhead. Cleaner, faster, more maintainable. Multi-location businesses deserve better than WordPress multisite.",
    category: "WordPress vs Next.js",
    keywords: ["multisite", "multiple locations", "multi-location", "franchise"]
  },
  {
    id: "wp-018",
    question: "My WordPress site has 500 blog posts. Can you migrate that?",
    answer: "Absolutely. We've migrated sites with thousands of posts. We export content, images, and metadata, then import into your new Next.js + headless CMS setup. URLs get 301 redirects so no links break. Categories, tags, and structure transfer. The process takes 1-2 weeks for large content sites. Clients are always surprised how smooth it is—and how much faster the blog performs afterward. Big content = bigger speed gains from Next.js.",
    category: "WordPress vs Next.js",
    keywords: ["blog migration", "content transfer", "many posts", "large site"]
  },
  {
    id: "wp-019",
    question: "WordPress vs Next.js for local trades (plumbers, electricians)?",
    answer: "Trades need one thing above all: Map Pack visibility. When someone searches 'emergency plumber Southport,' they call whoever Google shows first. WordPress trades sites average 4+ seconds—Google penalizes that. Next.js: under 1 second. Faster site + proper local SEO = Map Pack dominance. We've built Next.js sites for Southport plumbers and electricians that went from invisible to #1 in their area within 8 weeks. The tech choice determines who gets the call.",
    category: "WordPress vs Next.js",
    keywords: ["plumber", "electrician", "trades", "local business"]
  },
  {
    id: "wp-020",
    question: "What's the real total cost of WordPress over 5 years?",
    answer: "Let's do the math. Build: £800-2,000. Hosting: £600-1,800/year. Security/maintenance: £600-1,800/year. Fixes when things break: £500-2,000/year. Plugin premiums: £200-500/year. Total 5 years: £8,000-18,000. Next.js: Build £2,500-3,500. Hosting £120-200/year. Maintenance: minimal. Total 5 years: £3,100-4,500. WordPress costs 2-4x more over time. The 'cheap' option is the expensive one.",
    category: "WordPress vs Next.js",
    keywords: ["total cost", "5 year cost", "ownership cost", "tco"]
  },
  {
    id: "wp-021",
    question: "Can WordPress ever match Next.js performance?",
    answer: "Theoretically, with aggressive caching, CDN, and expensive hosting, you might get a WordPress site to 2 seconds. Maybe. Next.js hits 0.9 seconds on £0-20/month hosting. The architecture is fundamentally different—WordPress builds pages on every request; Next.js serves pre-built files. You can't patch architecture with plugins. We've audited 100+ WordPress sites; none matched our Next.js baseline. The gap is structural.",
    category: "WordPress vs Next.js",
    keywords: ["performance", "can wordpress be fast", "optimization limits"]
  },
  {
    id: "wp-022",
    question: "What about headless WordPress with Next.js frontend?",
    answer: "Headless WordPress (WordPress as API, Next.js as frontend) is possible—but you're keeping WordPress's worst parts. You still have plugin vulnerabilities, database bloat, and update headaches. You're just hiding them behind a fast frontend. Pure Next.js + Sanity/Contentful gives you the editing experience without WordPress's baggage. We've built both; the headless CMS approach is simpler, more reliable, and often cheaper to maintain.",
    category: "WordPress vs Next.js",
    keywords: ["headless wordpress", "wp as api", "decoupled"]
  },
  {
    id: "wp-023",
    question: "Why do big companies still use WordPress?",
    answer: "Legacy. Many big WordPress sites were built 5-10 years ago; migration is a massive project. That doesn't mean WordPress is better—Netflix, Nike, and TikTok use React/Next.js-style tech. New enterprise projects increasingly choose modern stacks. For Southport businesses starting fresh, why inherit 2003 technology? Build on 2026 standards from day one. The companies 'stuck' on WordPress would migrate if they could justify the project scope.",
    category: "WordPress vs Next.js",
    keywords: ["enterprise", "big companies", "why wordpress popular"]
  },
  {
    id: "wp-024",
    question: "WordPress vs Next.js for healthcare and medical practices?",
    answer: "Healthcare sites need speed (patients research on mobile), security (HIPAA considerations), and trust signals. WordPress medical sites often struggle with all three—slow loads, plugin vulnerabilities, dated designs. Next.js delivers fast, secure, professional sites. We add proper schema for medical practices, service pages, and practitioner info. For 'GP Southport' or 'dentist Churchtown' searches, the clean, fast site builds confidence. Medical practices deserve better than template WordPress.",
    category: "WordPress vs Next.js",
    keywords: ["healthcare", "medical", "dentist", "gp"]
  },
  {
    id: "wp-025",
    question: "What's the biggest misconception about WordPress?",
    answer: "That it's 'easy.' Yes, you can install it. But maintaining it, keeping it secure, making it fast, fixing it when it breaks—that's not easy. Small business owners waste hours monthly on WordPress problems. Next.js seems 'technical' but you never touch it—we build it, it runs. The 'easy' platform creates ongoing headaches. The 'technical' platform runs silently. For Southport business owners who'd rather run their business than their website, Next.js is actually the easy choice.",
    category: "WordPress vs Next.js",
    keywords: ["misconception", "easy", "myths", "reality"]
  },

  // SEO & Rankings (35 questions)
  {
    id: "seo-001",
    question: "How long does SEO take to show results?",
    answer: "For local Southport businesses, you can see Map Pack rankings improve within 4-8 weeks with proper optimization. Organic rankings for competitive keywords typically take 3-6 months. However, technical SEO fixes (like site speed improvements) can boost rankings within days. Our client Alotek Shelters went from Page 5 to AI Overview Winner in 6 weeks by fixing technical errors and targeting the right keywords. SEO isn't magic—it's mechanical. Fix the errors, create the right content, and Google responds. View our <a href='/services/seo'>SEO services</a>.",
    category: "SEO & Rankings",
    keywords: ["seo timeline", "results", "how long", "rankings"]
  },
  {
    id: "seo-002",
    question: "What are Core Web Vitals and why do they matter?",
    answer: "Core Web Vitals are Google's speed metrics: LCP (how fast your main content loads), CLS (does your page jump around while loading), and INP (how quickly your page responds to clicks). Google made these direct ranking factors in 2021. If your site is slow, you don't just lose visitors—you lose rankings. Our audits show WordPress sites averaging 4.2s LCP vs. Next.js at 1.1s. That difference can be 10-20 positions in search results. For Southport businesses competing for local searches, Core Web Vitals are make-or-break. Get a free <a href='/audit'>speed audit</a>.",
    category: "SEO & Rankings",
    keywords: ["core web vitals", "lcp", "cls", "inp", "page speed"]
  },
  {
    id: "seo-003",
    question: "Why am I not ranking on Google?",
    answer: "Usually, it's one of five issues: 1) Technical errors blocking Google's crawler, 2) Slow site speed failing Core Web Vitals, 3) Zero structured data (schema markup), 4) Thin/duplicate content, or 5) Weak local signals (inconsistent NAP data). We've audited 100+ Southport business websites and found that 52% weren't even fully indexed by Google—half their pages were invisible. Our free audit identifies exactly what's blocking your rankings and provides a fix-it roadmap. Book a <a href='/audit'>free audit</a>.",
    category: "SEO & Rankings",
    keywords: ["not ranking", "google invisible", "seo problems", "ranking issues"]
  },
  {
    id: "seo-004",
    question: "Do you guarantee number one rankings?",
    answer: "No ethical SEO company guarantees #1—Google's algorithm has 200+ ranking factors we don't control. What we do guarantee: we'll fix technical errors, optimize your site, and execute proven strategies. Our clients typically see 50-200% organic traffic improvement within 6 months. Alotek Shelters went from Page 5 to AI Overview Winner. We guarantee the work, not specific positions. Anyone promising guaranteed #1 is either lying or doing something that will get you penalized.",
    category: "SEO & Rankings",
    keywords: ["guarantee", "number one", "rankings promise", "seo guarantee"]
  },
  {
    id: "seo-005",
    question: "What's the difference between SEO and Google Ads?",
    answer: "Google Ads = pay per click. You pay when someone clicks; stop paying, traffic stops. SEO = organic rankings. You invest once (or ongoing), traffic keeps coming. For Southport businesses, SEO typically delivers 3-5x more value long-term—but it takes 3-6 months to see results. Ads work immediately. Best strategy: combine both. Use Ads for immediate visibility while SEO builds. We offer both; we'll tell you which makes sense for your situation.",
    category: "SEO & Rankings",
    keywords: ["seo vs ads", "google ads", "ppc", "organic vs paid"]
  },
  {
    id: "seo-006",
    question: "How do I rank for 'near me' searches?",
    answer: "'Near me' searches use location + device GPS. Google shows businesses geographically close with strong local signals. To rank: optimize your Google Business Profile, ensure NAP consistency everywhere, get local reviews, add LocalBusiness schema to your site. Your physical proximity matters—a Southport business won't rank for 'near me' in Liverpool. We focus on dominating your actual service area. Map Pack optimization is the key. See our <a href='/search-engine-optimisation/local'>local SEO services</a>.",
    category: "SEO & Rankings",
    keywords: ["near me", "local search", "geographic", "map pack"]
  },
  {
    id: "seo-007",
    question: "What keywords should I target for my Southport business?",
    answer: "We start with keyword research: what do people actually search? 'Plumber Southport,' 'restaurant Lord Street,' 'hotel near Marine Lake.' We map search volume, competition, and intent. Then we prioritize—sometimes 'Southport plumber' (500 searches) beats 'emergency plumber' (2000) if competition is lower. We also identify MLEC-related keywords for 2026. Every business is different; cookie-cutter keyword lists don't work. Our audit includes custom keyword recommendations.",
    category: "SEO & Rankings",
    keywords: ["keywords", "keyword research", "what to target", "southport"]
  },
  {
    id: "seo-008",
    question: "How much does SEO cost?",
    answer: "Our SEO packages range from £500/month (local optimization) to £1,500+/month (full organic strategy). One-off technical SEO audits: £350. The right investment depends on your competition and goals. A Southport plumber might need £500/month; a regional professional services firm might need £1,200. We're transparent—we'll tell you what'll move the needle and what's overkill. Compare to agencies charging £2,000+/month for the same work. View our <a href='/services/seo'>SEO pricing</a>.",
    category: "SEO & Rankings",
    keywords: ["seo cost", "seo pricing", "how much", "investment"]
  },
  {
    id: "seo-009",
    question: "What's an AI Overview and how do I get in it?",
    answer: "AI Overviews are Google's new featured snippets—AI-generated summaries that appear above traditional results. Getting featured requires: comprehensive content that answers the question, proper schema markup, and authority signals. Our client Alotek Shelters achieved AI Overview Winner status in 6 weeks through technical fixes and content optimization. It's not magic—it's about being the clearest, most complete answer. We optimize for AI Overview eligibility on every project.",
    category: "SEO & Rankings",
    keywords: ["ai overview", "featured snippet", "position zero", "google ai"]
  },
  {
    id: "seo-010",
    question: "Can I do SEO myself?",
    answer: "Basic SEO—sure. Update your Google Business Profile, fix obvious issues. But technical SEO (crawl errors, schema, site architecture), comprehensive keyword research, and competitive strategy require expertise. We've seen DIY efforts waste months on wrong priorities. Our free audit gives you a roadmap—you can tackle some yourself, hire us for the rest. Honest answer: for Southport businesses competing seriously, professional SEO delivers 5x the results in half the time.",
    category: "SEO & Rankings",
    keywords: ["diy seo", "do it yourself", "self seo", "learn seo"]
  },
  {
    id: "seo-011",
    question: "What's a reasonable SEO timeline for results?",
    answer: "Technical fixes: 1-4 weeks to see impact. Local SEO/Map Pack: 4-8 weeks. Competitive organic keywords: 3-6 months. Content-driven rankings: 6-12 months. We're upfront: SEO isn't instant. But it compounds—month 1 builds on month 2 builds on month 3. Our clients typically see meaningful improvement by month 3. The businesses that quit at month 2 never see the payoff. Patience + consistent execution = results. See our <a href='/case-studies'>case studies</a> for real timelines.",
    category: "SEO & Rankings",
    keywords: ["timeline", "when will I see results", "seo patience"]
  },
  {
    id: "seo-012",
    question: "How do backlinks affect rankings?",
    answer: "Backlinks (other sites linking to you) remain a major ranking factor. Google sees them as votes of confidence. Quality matters more than quantity—one link from the Liverpool Echo beats 100 from random directories. For Southport businesses, we focus on local backlinks: Sefton business directories, local news, industry associations. We never buy links (Google penalty) but we do outreach for genuine coverage. Natural link building takes time but lasts forever.",
    category: "SEO & Rankings",
    keywords: ["backlinks", "links", "link building", "off-page seo"]
  },
  {
    id: "seo-013",
    question: "Why did my rankings drop suddenly?",
    answer: "Common causes: Google algorithm update (we track these), technical site issues (broken pages, slow load), competitor improvements, or manual penalty. First step: check Google Search Console for errors. Often it's a technical glitch—recent plugin update, hosting change. We've recovered sites that 'mysteriously' dropped; usually it was fixable. Our audit identifies drop causes and recovery path. Don't panic—most drops are recoverable.",
    category: "SEO & Rankings",
    keywords: ["ranking drop", "lost rankings", "what happened", "recovery"]
  },
  {
    id: "seo-014",
    question: "What's the difference between SEO and social media?",
    answer: "SEO = getting found when people search (Google, Bing). Social media = getting seen in feeds (Facebook, Instagram). Both drive traffic but differently. SEO captures intent—someone searching 'plumber Southport' wants a plumber now. Social builds awareness—they might need you later. For local businesses, SEO typically delivers higher-intent leads. Social supports brand. Best strategy: do both. We focus on SEO; we integrate social but don't manage it. Different skills.",
    category: "SEO & Rankings",
    keywords: ["seo vs social", "social media", "facebook", "instagram"]
  },
  {
    id: "seo-015",
    question: "Do I need a blog for SEO?",
    answer: "Not always. A 5-page site with perfect technical SEO can rank for local keywords. But blogs help with: long-tail keywords, topical authority, and fresh content signals. For competitive industries or multiple service areas, a blog accelerates rankings. For 'plumber Southport' alone, maybe not. We advise based on your goals. If we add a blog, it's strategic—targeting keywords that matter, not publishing for publishing's sake. Quality over quantity.",
    category: "SEO & Rankings",
    keywords: ["blog", "content", "content marketing", "do I need blog"]
  },
  {
    id: "seo-016",
    question: "What are meta descriptions and do they matter?",
    answer: "Meta descriptions are the 150-160 character summaries under your title in search results. Google says they don't directly affect rankings, but they affect click-through rate—which indirectly affects rankings. A compelling meta makes people click; more clicks = relevance signal to Google. We write unique metas for every page: benefit-focused, keyword-inclusive, compelling. Don't keyword-stuff. Don't duplicate. Make each one count. It's a small detail that compounds.",
    category: "SEO & Rankings",
    keywords: ["meta description", "snippet", "search result", "ctr"]
  },
  {
    id: "seo-017",
    question: "How do I rank in multiple cities (Southport, Liverpool, Preston)?",
    answer: "Location pages. We create dedicated, unique content for each city: 'Plumber Liverpool,' 'Plumber Preston,' etc. Each page has city-specific content (not just find-replace), local schema, and NAP. Google rewards genuine local relevance. We've built multi-location strategies for businesses serving the North West. The key: don't duplicate—each location page must offer unique value. See our <a href='/locations'>location page approach</a>. MLEC will bring visitors from across the UK; multi-city SEO captures them.",
    category: "SEO & Rankings",
    keywords: ["multi city", "multiple locations", "liverpool", "preston"]
  },
  {
    id: "seo-018",
    question: "What's the best SEO tool?",
    answer: "We use Google Search Console (free—shows how Google sees your site), Google Analytics 4, and Ahrefs or Semrush for keyword research. For Southport businesses, Search Console is non-negotiable—it's free and shows your actual search performance. Fancy tools help with research; fundamentals matter more. Our audit uses these tools to give you actionable data. You don't need expensive software to rank—you need someone who reads the data correctly.",
    category: "SEO & Rankings",
    keywords: ["seo tools", "ahrefs", "semrush", "search console"]
  },
  {
    id: "seo-019",
    question: "Can SEO help my business get more phone calls?",
    answer: "Absolutely. Local SEO directly drives calls—someone searches 'plumber Southport,' sees you in Map Pack, clicks 'call.' We track call conversions from organic search. We optimize for call-focused keywords, add click-to-call buttons, and ensure your number is everywhere. Many of our Southport clients report 2-3x more enquiries after SEO. For trades and professional services, the phone still rings—SEO makes sure it's your number they tap.",
    category: "SEO & Rankings",
    keywords: ["phone calls", "leads", "enquiries", "conversions"]
  },
  {
    id: "seo-020",
    question: "What's duplicate content and how does it hurt SEO?",
    answer: "Duplicate content = same/similar content on multiple URLs. Google doesn't know which to rank, so it may rank neither—or the wrong one. Common causes: www vs non-www, printer-friendly versions, session IDs, copied content from other sites. We fix by consolidating (301 redirects), canonical tags, or making content unique. Southport businesses often have duplicate NAP (slight variations) across directories—we standardize. Duplicate content is a fixable technical issue.",
    category: "SEO & Rankings",
    keywords: ["duplicate content", "canonical", "thin content"]
  },
  {
    id: "seo-021",
    question: "How does Google know my business is in Southport?",
    answer: "Signals: your website mentions Southport, your Google Business Profile address, NAP citations across the web, local backlinks, and user behavior (people in Southport searching for you). Consistency matters—if your site says 'Sefton' but your GBP says 'Southport,' Google gets confused. We ensure every signal points the same direction. Local schema on your site explicitly tells Google your location. It's about sending clear, consistent location signals everywhere.",
    category: "SEO & Rankings",
    keywords: ["google location", "local signals", "southport", "geo"]
  },
  {
    id: "seo-022",
    question: "What's the difference between SEO and SEM?",
    answer: "SEM = Search Engine Marketing (umbrella term). SEO = organic (unpaid) rankings. Sometimes SEM is used to mean paid search (Google Ads). In practice: SEO = get found for free over time. SEM/PPC = pay per click for immediate placement. We do both. For most Southport businesses, we recommend starting with SEO (compound returns) and adding paid for immediate boost if budget allows. They work together—paid and organic often reinforce each other.",
    category: "SEO & Rankings",
    keywords: ["sem", "seo vs sem", "search marketing", "ppc"]
  },
  {
    id: "seo-023",
    question: "Do I need to rank first to get traffic?",
    answer: "No. Position 1 gets ~28% of clicks; positions 2-3 get another 25%. Being on page 1 (positions 1-10) gets you most of the traffic. Position 4-5 still converts. The bigger win is being on page 1 for multiple keywords vs #1 for one. We often target 10 relevant keywords at positions 3-7 rather than 1 keyword at position 1. More keywords = more traffic. Perfectionism on single keywords can slow overall growth.",
    category: "SEO & Rankings",
    keywords: ["position 1", "first page", "click through", "traffic"]
  },
  {
    id: "seo-024",
    question: "What are long-tail keywords and why target them?",
    answer: "Long-tail = longer, specific phrases: 'emergency plumber Southport 24 hour' vs just 'plumber.' Lower search volume but higher intent—someone searching that phrase is ready to call. Less competition too. We often find long-tail opportunities competitors miss. For Southport businesses, 'restaurant near Marine Lake vegetarian' might have 20 searches/month but convert at 20% vs 'restaurant' at 2%. Quality over quantity. Our keyword research finds your high-intent long-tails.",
    category: "SEO & Rankings",
    keywords: ["long tail", "keyword strategy", "intent", "specific"]
  },
  {
    id: "seo-025",
    question: "How often does Google update its algorithm?",
    answer: "Google makes thousands of changes yearly—most minor. Major updates (like Core Update) happen several times per year and can shuffle rankings. We monitor these and advise clients when one hits. The best defense: build a quality site. Sites that rank through genuine value (speed, content, UX) survive updates. Sites that rank through tricks get hit. Our approach is update-resistant—we don't rely on tactics that algorithm changes might kill.",
    category: "SEO & Rankings",
    keywords: ["algorithm update", "google update", "core update", "ranking changes"]
  },
  {
    id: "seo-026",
    question: "What ROI should I expect from SEO?",
    answer: "Varies by industry. Local trades: often 300-500% ROI in year one (cost of SEO vs value of new jobs). Professional services: 200-400%. E-commerce: depends on margins. We track conversions (calls, forms, sales) and assign values. Typical Southport client: £500/month SEO = 5-10 extra jobs at £100+ each = £500-1000/month value. ROI compounds—month 6 often performs better than month 1. We provide ROI reporting in our analytics. See <a href='/case-studies'>real ROI examples</a>.",
    category: "SEO & Rankings",
    keywords: ["roi", "return on investment", "seo value", "results"]
  },
  {
    id: "seo-027",
    question: "Can you fix a Google penalty?",
    answer: "Depends on the penalty type. Manual penalties (human review): we file reconsideration requests after fixing issues. Algorithmic (quality updates): we identify what triggered it—usually thin content, manipulative links, or technical issues—and fix. Recovery takes 3-6 months typically. We've recovered penalized sites. First step: identify the penalty type in Search Console. Prevention is easier—we build sites that don't attract penalties. White-hat only.",
    category: "SEO & Rankings",
    keywords: ["penalty", "manual action", "recovery", "banned"]
  },
  {
    id: "seo-028",
    question: "What's the best page structure for SEO?",
    answer: "One primary topic per page. Clear H1 (main heading), logical H2/H3 hierarchy. Content that answers the search intent. Internal links to related pages. Fast load (Core Web Vitals). Schema markup. No keyword stuffing—natural language. We structure every page with SEO in mind from the start. A 2000-word page with poor structure ranks worse than a 600-word page with perfect structure. Architecture matters as much as content.",
    category: "SEO & Rankings",
    keywords: ["page structure", "h1", "heading hierarchy", "on-page"]
  },
  {
    id: "seo-029",
    question: "How do I rank for my business name?",
    answer: "Usually you already do—brand searches are low-competition. If not, ensure your site has your exact business name in title, H1, and content. Create a robust Google Business Profile. Get NAP consistency. Often the issue is another business with a similar name outranking you—in that case, building authority (reviews, content, backlinks) helps. For 'Churchtown Media' or 'Your Business Southport,' we ensure your brand is properly represented everywhere.",
    category: "SEO & Rankings",
    keywords: ["brand", "business name", "branded search"]
  },
  {
    id: "seo-030",
    question: "What's the difference between organic and paid traffic?",
    answer: "Organic = free traffic from search results (SEO). Paid = traffic you pay for (Google Ads, social ads). Organic builds over time, compounds, and costs nothing per click. Paid works immediately but stops when you stop paying. For Southport businesses, we typically see 70% of total search traffic from organic after 12 months of SEO—despite paid being 'instant.' Long-term, organic wins on volume and cost. Use paid for short-term boosts; organic for sustained growth.",
    category: "SEO & Rankings",
    keywords: ["organic", "paid traffic", "free vs paid", "traffic sources"]
  },
  {
    id: "seo-031",
    question: "How many keywords should I target per page?",
    answer: "One primary, 2-3 secondary. Don't stuff—write naturally. A page trying to rank for 10 keywords often ranks for none. Focus. 'Plumber Southport' page targets that phrase + 'Southport plumber' + 'plumber near me Southport.' Similar intent, natural integration. We do keyword mapping: which page targets which keyword. Clear focus beats scattered optimization. Sometimes one page targets one keyword; sometimes a comprehensive page can handle a few. Depends on the topic.",
    category: "SEO & Rankings",
    keywords: ["keywords per page", "focus", "keyword mapping"]
  },
  {
    id: "seo-032",
    question: "What's a sitemap and do I need one?",
    answer: "A sitemap lists all your pages for Google—helps the crawler find everything. Next.js auto-generates sitemaps. WordPress needs a plugin. For small sites (under 50 pages), Google often finds everything anyway—but sitemaps ensure nothing gets missed. For larger sites or new sites, essential. We include sitemaps in every build and submit to Search Console. It's a 5-minute fix that ensures full crawlability. Don't skip it.",
    category: "SEO & Rankings",
    keywords: ["sitemap", "xml sitemap", "crawl", "indexing"]
  },
  {
    id: "seo-033",
    question: "How do I know if my SEO is working?",
    answer: "Track: organic traffic (Google Analytics), keyword rankings (Search Console or tools), and conversions (calls, forms). Traffic up + rankings up + conversions up = working. We provide monthly reports showing these. Vanity metrics (ranking for irrelevant keywords) don't count. We focus on metrics that affect revenue. If traffic doubles but no new customers, we adjust. Good SEO shows in the numbers that matter to your business.",
    category: "SEO & Rankings",
    keywords: ["seo success", "measuring", "metrics", "working"]
  },
  {
    id: "seo-034",
    question: "What's the best content length for SEO?",
    answer: "No magic number. Long enough to fully answer the query. A 'plumber Southport' page might need 400 words; a 'how to fix a leaking tap' guide might need 1,500. Google favors comprehensive content—but comprehensive ≠ word count. Quality matters. We've seen 300-word pages outrank 2,000-word pages when the short one actually answered the question. Write for the user. If the topic needs depth, go deep. If it doesn't, don't pad.",
    category: "SEO & Rankings",
    keywords: ["content length", "word count", "how long", "content"]
  },
  {
    id: "seo-035",
    question: "Can you do SEO for a brand new website?",
    answer: "Yes—actually ideal. New sites have no bad history to fix. We build SEO in from day one: structure, schema, speed, content. New sites take 3-6 months to gain authority (Google's sandbox) but starting right means faster breakout. Don't launch then add SEO later—build it in. For Southport businesses launching before MLEC, getting the foundation right now means you're ready when the traffic surge hits. New site = clean slate = do it right.",
    category: "SEO & Rankings",
    keywords: ["new website", "brand new", "launch", "starting seo"]
  },

  // Local SEO (30 questions)
  {
    id: "local-001",
    question: "What is the Google Map Pack?",
    answer: "The Map Pack (also called the 3-Pack) is the map with three featured businesses that appears at the top of local search results. When someone searches 'plumber Southport' or 'coffee near me,' Google ignores standard website links and shows this map. Being #1 in the Map Pack is worth 10x more traffic than being #1 in regular search results. Google decides who appears based on three factors: Relevance (do you offer what they're searching for?), Distance (how close are you?), and Prominence (are you trustworthy?). We optimize all three. Learn about our <a href='/services/seo'>local SEO strategies</a>.",
    category: "Local SEO",
    keywords: ["map pack", "3-pack", "local search", "google maps"]
  },
  {
    id: "local-002",
    question: "How do I rank in the Map Pack for Southport?",
    answer: "Three pillars: 1) Optimize your Google Business Profile with accurate categories, fresh photos, and regular posts, 2) Build NAP consistency (Name, Address, Phone) across all online directories (Yell, Facebook, Apple Maps), 3) Generate fresh 5-star reviews consistently. We also optimize your website for local keywords, add LocalBusiness schema, and build local backlinks from Sefton directories. For Southport businesses preparing for MLEC visitors, Map Pack dominance is critical—500,000 new people will search 'restaurant near MLEC' with their wallets open. Check our <a href='/southport-growth'>Southport Growth Hub</a>.",
    category: "Local SEO",
    keywords: ["map pack ranking", "southport seo", "local rankings"]
  },
  {
    id: "local-003",
    question: "What is NAP and why does consistency matter?",
    answer: "NAP = Name, Address, Phone. Google checks these across your website, Google Business Profile, Yell, Facebook, Apple Maps, and every directory. Inconsistencies (e.g., '123 Lord St' vs '123 Lord Street') confuse Google and hurt local rankings. We audit your NAP across 50+ citation sources and standardize everything. One format, everywhere. For Southport businesses, NAP consistency is often the fastest local SEO fix—and one of the most commonly neglected.",
    category: "Local SEO",
    keywords: ["nap", "name address phone", "citations", "consistency"]
  },
  {
    id: "local-004",
    question: "How do I get more Google reviews?",
    answer: "Make it easy: direct link (Google provides short review links). Ask at the right moment—right after a happy customer completes a job. Don't incentivize (against Google's rules) but do remind. Reply to every review—positive and negative. Google rewards businesses that engage. For Southport businesses, consistent 5-star reviews with recent dates signal trust. We help clients set up review request systems and monitor their review profile.",
    category: "Local SEO",
    keywords: ["reviews", "google reviews", "5 star", "testimonials"]
  },
  {
    id: "local-005",
    question: "Can I rank locally without a physical address?",
    answer: "Service-area businesses (plumbers, electricians serving Southport but working from home) can use Google's 'service area' option—you hide your address but show your service radius. You'll still appear for 'plumber Southport' searches. The ranking factors shift: website content, reviews, and citations matter more than physical proximity. We've optimized many service-area businesses for Map Pack visibility. It's doable—just different strategy than storefront businesses.",
    category: "Local SEO",
    keywords: ["service area", "no address", "home based", "mobile business"]
  },
  {
    id: "local-006",
    question: "How do I rank for Liverpool local search from Southport?",
    answer: "If you serve Liverpool, you need a Liverpool presence. That means: location page on your site ('Plumber Liverpool'), Liverpool in your service areas on GBP, Liverpool backlinks and citations. Google won't show a Southport-only business for 'plumber Liverpool'—proximity matters. We build multi-location strategies for businesses serving Merseyside and Lancashire. Each city gets dedicated optimization. See our <a href='/locations'>multi-location approach</a>.",
    category: "Local SEO",
    keywords: ["liverpool", "multi city", "service area", "merseyside"]
  },
  {
    id: "local-007",
    question: "What are local citations and do I need them?",
    answer: "Citations = mentions of your NAP on other websites (Yell, Thomson Local, industry directories). They help Google verify your business exists and where. Quality matters: Yell, Facebook, Apple Maps, industry-specific directories. Avoid spam directories—they can hurt. We build citation profiles for Southport businesses across 30-50 quality sources. Consistent NAP everywhere. It's foundational local SEO that many businesses skip.",
    category: "Local SEO",
    keywords: ["citations", "directories", "nap", "local listings"]
  },
  {
    id: "local-008",
    question: "How do I rank for Preston from Southport?",
    answer: "Preston is 20 miles from Southport—if you serve both, you need Preston optimization. Create a 'Preston' location page with unique content, add Preston to your service areas, get Preston-area citations. Google considers distance; you need to signal you serve Preston. We build Lancashire-wide local strategies. MLEC will bring visitors from Preston, Blackburn, and beyond—multi-location SEO captures that regional traffic.",
    category: "Local SEO",
    keywords: ["preston", "lancashire", "multi location", "regional"]
  },
  {
    id: "local-009",
    question: "What about local SEO for Blackpool businesses?",
    answer: "Same principles: optimize GBP, NAP consistency, reviews, local keywords. Blackpool has unique opportunities—tourism keywords, seasonal peaks. We've optimized Southport and Blackpool businesses in hospitality, retail, and trades. Each town has its own Map Pack; we dominate your primary area first, then expand. Coastal towns share similar challenges (seasonality)—we factor that into strategy. See our <a href='/search-engine-optimisation/local'>local SEO approach</a>.",
    category: "Local SEO",
    keywords: ["blackpool", "lancashire", "coastal", "tourism"]
  },
  {
    id: "local-010",
    question: "How do I claim or fix my Google Business Profile?",
    answer: "Go to business.google.com, search your business, request ownership. Google sends a postcard to your address with a verification code. For existing profiles with wrong info: claim it, then update. We help clients through this—wrong category, old phone number, missing hours. A broken GBP tanks local rankings. Fix it first, then optimize. For Southport businesses, an accurate, complete GBP is non-negotiable for Map Pack visibility.",
    category: "Local SEO",
    keywords: ["google business profile", "claim", "verify", "gbp"]
  },
  {
    id: "local-011",
    question: "What Google Business Profile categories should I choose?",
    answer: "Primary category = your main service. Choose the most specific option Google offers—'Plumber' not 'Home Services.' Secondary categories = related services. Don't keyword-stuff with irrelevant categories. We audit client GBPs and often find wrong categories costing rankings. A restaurant listing as 'Café' might miss 'restaurant' searches. Category choice directly impacts which searches you appear for. Get it right.",
    category: "Local SEO",
    keywords: ["categories", "gbp", "google business", "primary category"]
  },
  {
    id: "local-012",
    question: "How does local SEO work for Manchester businesses?",
    answer: "Manchester is highly competitive—bigger market, more businesses. Strategy: dominate your neighborhood/niche first. 'Plumber Didsbury' is easier than 'plumber Manchester.' We build hyper-local + city-wide presence. Same pillars: GBP optimization, NAP, reviews, local content. Manchester businesses need stronger signals to compete. We've ranked Southport businesses serving Manchester through proper multi-location strategy. See <a href='/locations'>our location pages</a>.",
    category: "Local SEO",
    keywords: ["manchester", "north west", "competitive", "city"]
  },
  {
    id: "local-013",
    question: "What's LocalBusiness schema and why add it?",
    answer: "LocalBusiness schema is code that tells Google: business name, address, phone, hours, services. It helps Google understand and display your business in rich results. We add JSON-LD schema to every client site—it's invisible to visitors but powerful for SEO. Can improve Map Pack eligibility and click-through rates. Next.js makes schema injection clean; WordPress often requires plugins that add bloat. Schema is a technical SEO foundation we include in every build.",
    category: "Local SEO",
    keywords: ["schema", "localbusiness", "structured data", "json-ld"]
  },
  {
    id: "local-014",
    question: "How important are Google Business Profile posts?",
    answer: "Posts (updates, offers, events) keep your GBP active—Google favors recently updated profiles. They appear in your listing and can improve visibility. We recommend weekly posts for active businesses. For Southport restaurants: new menu items, events. For trades: seasonal offers. It's not the #1 factor but it helps—and it's low effort. We help clients create and schedule GBP posts as part of local SEO packages.",
    category: "Local SEO",
    keywords: ["gbp posts", "google posts", "updates", "freshness"]
  },
  {
    id: "local-015",
    question: "Can I have multiple locations in one Google Business Profile?",
    answer: "No. Each physical location needs its own GBP. Multi-location businesses (e.g., franchise with 3 Southport shops) create 3 separate profiles. Service-area businesses with one office get one profile but can list multiple service areas. We manage multi-location GBP strategy for clients—ensuring each location is optimized and NAP is consistent across the chain. Don't try to stuff multiple locations into one profile; Google will suspend it.",
    category: "Local SEO",
    keywords: ["multiple locations", "multi location", "franchise", "gbp"]
  },
  {
    id: "local-016",
    question: "How do I rank for 'near me' in Southport specifically?",
    answer: "Near me uses device location—so you're competing with businesses physically near the searcher. To rank: be in Southport (or their location), have a complete GBP, strong reviews, fast website. The searcher could be on Lord Street or at the MLEC—proximity + prominence wins. We optimize for Southport prominence (reviews, content, citations) so when someone searches 'restaurant near me' from Marine Drive, you appear. Can't fake proximity; can maximize prominence.",
    category: "Local SEO",
    keywords: ["near me", "southport", "proximity", "location"]
  },
  {
    id: "local-017",
    question: "What local directories matter most for Southport?",
    answer: "Tier 1: Google Business Profile, Apple Maps, Facebook. Tier 2: Yell, Thomson Local, Bing Places. Tier 3: Industry directories, Sefton Council business listings, local chambers. We prioritize based on impact. Google matters most—but Apple Maps is growing (iPhone default). NAP consistency across all matters. We build citations strategically, not randomly. Avoid low-quality directory networks—they can trigger spam filters.",
    category: "Local SEO",
    keywords: ["directories", "citations", "yell", "apple maps"]
  },
  {
    id: "local-018",
    question: "How does local SEO work for restaurants?",
    answer: "Restaurants need: optimized GBP (menu, hours, photos), reservation/booking links, consistent NAP, reviews (food photos help), menu schema. 'Restaurant Southport' and 'restaurant near Marine Lake' are golden. We build restaurant sites with local SEO baked in—fast load for mobile searchers, clear service area, easy reservation path. MLEC will drive massive 'restaurant near MLEC' searches. Southport restaurants optimizing now will capture that. See <a href='/southport-growth'>MLEC strategies</a>.",
    category: "Local SEO",
    keywords: ["restaurant", "hospitality", "food", "dining"]
  },
  {
    id: "local-019",
    question: "What about local SEO for hotels and accommodation?",
    answer: "Hotels need GBP with room types, amenities, booking link. Local keywords: 'hotel Southport,' 'accommodation Marine Lake,' 'B&B Lord Street.' Schema: LodgingBusiness. Reviews are huge—travellers rely on them. We optimize hotel sites for local + intent keywords (wedding venue, conference accommodation). With MLEC bringing 500,000 visitors needing beds, Southport accommodation that ranks will book out. The opportunity is now.",
    category: "Local SEO",
    keywords: ["hotel", "accommodation", "b&b", "lodging"]
  },
  {
    id: "local-020",
    question: "How do I outrank competitors in the Map Pack?",
    answer: "More/better reviews (most impactful), complete GBP (every field filled), fresher GBP (regular posts), faster website, more local content, stronger citations. We audit your position vs competitors and identify the gaps. Often it's review count—we help you systematize review requests. Sometimes it's technical—competitor has slow site, we win on speed. Map Pack is competitive; we give you the playbook and execute.",
    category: "Local SEO",
    keywords: ["competitors", "outrank", "map pack", "beat competition"]
  },
  {
    id: "local-021",
    question: "Does having a Southport address help with local SEO?",
    answer: "Yes. Physical address in Southport signals to Google you're local. Service-area businesses can still rank (hide address, show service area) but storefronts have an edge. For 'shop Southport' or 'café Lord Street,' having that address matters. We add your full address to schema, GBP, and footer. Consistency is key—same format everywhere. Southport businesses with proper local signals beat out-of-town competitors for local searches.",
    category: "Local SEO",
    keywords: ["address", "southport", "physical location", "local"]
  },
  {
    id: "local-022",
    question: "How do I fix a suspended Google Business Profile?",
    answer: "Suspensions happen for: fake addresses, keyword stuffing, incorrect categories, policy violations. To fix: correct the issues, then file a reinstatement request with Google. Include proof (utility bill, business license). We've helped clients through this—often it's an honest mistake (wrong category, address typo). Google's appeals process can take days or weeks. Prevention is easier: follow guidelines, don't stuff keywords, use real addresses. We audit GBPs for compliance.",
    category: "Local SEO",
    keywords: ["suspended", "gbp suspension", "reinstatement", "google"]
  },
  {
    id: "local-023",
    question: "What's the difference between local SEO and organic SEO?",
    answer: "Local SEO = Map Pack, 'near me,' GBP, NAP, reviews. Optimizes for geographic searches. Organic SEO = traditional rankings for non-local keywords. A plumber needs both—local for 'plumber Southport,' organic for 'how to fix a leaking tap' (blog). We do both. Local drives immediate enquiries; organic builds long-term authority. For Southport businesses, local is usually the priority—but we layer in organic for compound growth.",
    category: "Local SEO",
    keywords: ["local vs organic", "difference", "map pack vs organic"]
  },
  {
    id: "local-024",
    question: "How do I get listed on Apple Maps?",
    answer: "Apple Maps pulls from Apple Business Register (register.apple.com) and various data sources. Claim your listing, verify your business, ensure NAP matches everywhere. Apple Maps is iPhone's default—growing share of local searches. We include Apple Maps in our citation building. Often it's quicker to fix than Google—fewer businesses have claimed their listings. Don't ignore it; iPhone users are valuable customers.",
    category: "Local SEO",
    keywords: ["apple maps", "iphone", "apple business", "maps"]
  },
  {
    id: "local-025",
    question: "Can local SEO help my retail shop on Lord Street?",
    answer: "Absolutely. Lord Street shops need 'shop Southport,' 'Lord Street Southport,' category-specific searches ('jewelry Southport'). GBP with products, photos, hours. Local schema. Fast site for mobile shoppers (they search while walking). We've optimized Southport retail for Map Pack and organic. MLEC visitors will explore Lord Street—retail that ranks gets the footfall. Physical location + digital visibility = traffic.",
    category: "Local SEO",
    keywords: ["retail", "shop", "lord street", "southport"]
  },
  {
    id: "local-026",
    question: "How does local SEO work for professional services (solicitors, accountants)?",
    answer: "Professional services compete on 'solicitor Southport,' 'accountant Sefton.' GBP, NAP, reviews (client testimonials help), service pages with local content. Schema: LegalService, AccountingService. Often less competition than trades—fewer solicitors than plumbers. We build professional service sites with local SEO foundation. Credibility + visibility. For firms serving Southport and beyond, multi-location pages capture regional intent.",
    category: "Local SEO",
    keywords: ["professional services", "solicitor", "accountant", "legal"]
  },
  {
    id: "local-027",
    question: "What local keywords should Southport trades target?",
    answer: "'Plumber Southport,' 'electrician Southport,' 'emergency plumber Southport,' 'plumber near me,' 'boiler engineer Southport.' Mix of branded (your name + Southport), service + location, and intent + location. We do keyword research for each trade—plumbers vs electricians have different search patterns. Urgent/intent modifiers ('emergency,' '24 hour') often convert higher. We map the keyword universe for your trade and location.",
    category: "Local SEO",
    keywords: ["trades", "plumber", "electrician", "keywords"]
  },
  {
    id: "local-028",
    question: "How long does local SEO take to work?",
    answer: "GBP optimizations: 1-2 weeks to see initial impact. NAP consistency: 2-4 weeks. Review building: ongoing, compounds over months. Map Pack position: typically 4-8 weeks for improvement with proper execution. Depends on competition—low-competition Southport niches can move faster. We set realistic expectations: meaningful improvement by month 2, significant gains by month 4. Local SEO often works faster than broad organic—geographic focus helps.",
    category: "Local SEO",
    keywords: ["local seo timeline", "how long", "when results"]
  },
  {
    id: "local-029",
    question: "Do I need a website for local SEO?",
    answer: "Yes. A complete GBP helps but a website strengthens rankings. It's another place for NAP, local content, schema. Fast site = Core Web Vitals = ranking boost. We've seen businesses rank with just GBP, but a proper website multiplies local SEO impact. For serious Southport businesses, website + GBP + citations = full local presence. Don't skip the website—it's your controlled asset. Google rewards businesses with strong web presence.",
    category: "Local SEO",
    keywords: ["website", "do I need", "gbp only", "local"]
  },
  {
    id: "local-030",
    question: "How does MLEC change local SEO for Southport businesses?",
    answer: "500,000 new visitors = 500,000 new 'near me' searches. 'Restaurant near MLEC,' 'parking Southport,' 'hotel Marine Lake.' New keyword opportunities. New competition (visitors from outside Southport searching). Businesses optimizing now will own these searches when MLEC opens. We're building MLEC-specific strategies: location pages, schema, content. The businesses that prepare will capture the influx; those that don't will watch from the sidelines. See our <a href='/southport-growth'>Southport Growth Hub</a>.",
    category: "Local SEO",
    keywords: ["mlec", "marine lake", "southport growth", "opportunity"]
  },

  // Technical SEO (25 questions)
  {
    id: "techseo-001",
    question: "What is technical SEO?",
    answer: "Technical SEO = making your site technically perfect for Google's crawler. It includes: site speed (Core Web Vitals), crawlability (can Google find all pages?), indexing (is Google showing the right pages?), structured data (schema), mobile-friendliness, HTTPS. It's the foundation—you can have great content but if Google can't crawl your site or it loads in 5 seconds, you won't rank. We audit and fix technical issues first. See our <a href='/services/technical-seo'>technical SEO services</a>.",
    category: "Technical SEO",
    keywords: ["technical seo", "what is", "foundation", "crawlability"]
  },
  {
    id: "techseo-002",
    question: "How does site speed affect SEO?",
    answer: "Google uses Core Web Vitals (LCP, CLS, INP) as direct ranking factors. Slow site = lower rankings. Our data: 0.9s Next.js vs 4.8s WordPress = 10-20 position difference. Speed also affects UX—53% of users abandon sites over 3 seconds. Bounce rate feeds back into rankings. For Southport businesses, a fast site is non-negotiable. We build speed in from the start; we also audit and fix slow existing sites. Get a free <a href='/audit'>speed audit</a>.",
    category: "Technical SEO",
    keywords: ["speed", "core web vitals", "performance", "ranking factor"]
  },
  {
    id: "techseo-003",
    question: "What is a crawl error and how do I fix it?",
    answer: "Crawl errors = Google's bot can't access a page (404, server error, blocked by robots.txt). Check Google Search Console for the list. Common fixes: fix broken links (301 redirect to correct URL), remove robots.txt blocks, fix server errors. We've audited sites where 50% of pages had crawl errors—invisible to Google. Fixing these often produces immediate ranking improvements. It's technical detective work we do in every audit.",
    category: "Technical SEO",
    keywords: ["crawl error", "404", "robot", "indexing"]
  },
  {
    id: "techseo-004",
    question: "What is schema markup (structured data)?",
    answer: "Schema = code that tells Google what your content means. LocalBusiness schema says 'this is a business at this address.' Product schema says 'this is a product with this price.' Google uses it for rich results (extra info in search), better understanding, and AI Overviews. We inject JSON-LD schema on every client site—invisible to visitors, powerful for SEO. WordPress needs plugins (often bloated); Next.js handles it natively. Schema is a technical SEO staple.",
    category: "Technical SEO",
    keywords: ["schema", "structured data", "json-ld", "rich snippets"]
  },
  {
    id: "techseo-005",
    question: "What's a canonical URL and when do I need it?",
    answer: "Canonical = the 'main' version of a page when duplicates exist. Example: yoursite.com/page and yoursite.com/page?utm_source=google. You want Google to index one. Add canonical tag pointing to preferred URL. Prevents duplicate content issues. We set canonicals on every project—especially important for e-commerce (product variants) and sites with tracking parameters. It's a one-line fix that prevents ranking dilution.",
    category: "Technical SEO",
    keywords: ["canonical", "duplicate", "url", "consolidation"]
  },
  {
    id: "techseo-006",
    question: "What is robots.txt and should I modify it?",
    answer: "Robots.txt tells crawlers which pages they can/can't access. Default is usually fine. Don't block important pages—we've seen sites accidentally block their entire site! Common uses: block admin areas, prevent duplicate content indexing. We audit robots.txt in every technical review. Wrong configuration = pages never get indexed. Right configuration = crawler efficiency. Simple file, big impact if wrong.",
    category: "Technical SEO",
    keywords: ["robots.txt", "crawler", "block", "allow"]
  },
  {
    id: "techseo-007",
    question: "What are 301 redirects and when to use them?",
    answer: "301 = permanent redirect. Page A moved to Page B—tell Google permanently. Preserves most SEO value (90%+). Use when: changing URLs, consolidating pages, migrating sites. Critical for WordPress-to-Next.js migrations—every old URL must 301 to new equivalent. We map and implement redirects in every migration. Broken redirects = lost rankings. Proper redirects = seamless transition. It's migration 101.",
    category: "Technical SEO",
    keywords: ["301 redirect", "redirect", "migration", "url change"]
  },
  {
    id: "techseo-008",
    question: "What is LCP (Largest Contentful Paint)?",
    answer: "LCP = how fast your main content (hero image, headline, etc.) loads. Google's primary speed metric. Good = under 2.5 seconds. Our Next.js sites: typically 1.1s. WordPress average: 4.2s. LCP is mostly about: server response time, render-blocking resources, image optimization. We optimize all three. Next.js's image component and edge delivery make LCP easy. Fix LCP = ranking boost. Get your <a href='/audit'>LCP score</a>.",
    category: "Technical SEO",
    keywords: ["lcp", "largest contentful paint", "core web vitals", "speed"]
  },
  {
    id: "techseo-009",
    question: "What is CLS (Cumulative Layout Shift)?",
    answer: "CLS = does your page jump around while loading? Ads, images, fonts loading late cause content to shift—terrible UX. Google measures it. Good CLS = under 0.1. Fix by: reserving space for images (width/height), avoiding inserting content above existing content, loading fonts properly. We build with CLS in mind—no layout jumps. WordPress sites often fail CLS from ad networks and lazy-loaded images. Technical fix with big UX impact.",
    category: "Technical SEO",
    keywords: ["cls", "cumulative layout shift", "core web vitals", "layout"]
  },
  {
    id: "techseo-010",
    question: "What is INP (Interaction to Next Paint)?",
    answer: "INP = how quickly your site responds to clicks/taps. Replaced FID in 2024 as Core Web Vital. Good INP = under 200ms. Caused by: heavy JavaScript, main thread blocking. Next.js minimizes this with optimized hydration. WordPress with 30 plugins murders INP. We test INP on every project. Responsive sites rank better—both in UX and Google's eyes. Technical metric with user impact.",
    category: "Technical SEO",
    keywords: ["inp", "interaction", "core web vitals", "responsiveness"]
  },
  {
    id: "techseo-011",
    question: "How do I fix duplicate meta titles?",
    answer: "Every page needs a unique title tag. Duplicates confuse Google. Find them in Search Console (Pages → Why pages aren't indexed) or Screaming Frog. Fix: write unique titles for each page. We do this in every build—templates that generate unique titles from page content. For blogs: include post title. For products: include product name. Duplicate titles = missed opportunity + potential ranking dilution. Easy fix.",
    category: "Technical SEO",
    keywords: ["meta title", "duplicate", "title tag", "unique"]
  },
  {
    id: "techseo-012",
    question: "What is index bloat and how do I fix it?",
    answer: "Index bloat = too many low-quality pages indexed (filtered product URLs, thin content, parameter variations). Dilutes your site's authority. Fix: noindex low-value pages, consolidate duplicates, use canonical tags. We audit indexation—sometimes 1000+ pages when 50 matter. Cleaning this up focuses Google on your best content. Often produces ranking improvements as authority concentrates. Technical hygiene.",
    category: "Technical SEO",
    keywords: ["index bloat", "indexation", "too many pages", "cleanup"]
  },
  {
    id: "techseo-013",
    question: "Does HTTPS affect SEO?",
    answer: "Yes. Google has favored HTTPS since 2014. Non-HTTPS sites get a rankings penalty. Plus: browser warnings scare visitors away. Every site should be HTTPS. Vercel provides free SSL automatically. WordPress often needs certificate setup. It's 2026—HTTPS is baseline. We never launch without it. If your site is HTTP, fix it. Technical SEO fundamental.",
    category: "Technical SEO",
    keywords: ["https", "ssl", "security", "certificate"]
  },
  {
    id: "techseo-014",
    question: "What is mobile-first indexing?",
    answer: "Google primarily uses your mobile version for ranking. Desktop version is secondary. So your mobile site must have: same content as desktop, same structured data, fast load. We build mobile-first—everything is optimized for mobile from the start. WordPress mobile versions often lack content (hidden in accordions) or load slowly. Next.js responsive sites pass mobile-first with flying colors. Non-negotiable in 2026.",
    category: "Technical SEO",
    keywords: ["mobile first", "indexing", "mobile", "google"]
  },
  {
    id: "techseo-015",
    question: "How do I fix 'Page with redirect' errors?",
    answer: "Google doesn't want to index redirect chains (A→B→C). If a page just redirects, Google may exclude it. Fix: make redirects direct (A→C, not A→B→C). Update internal links to point to final URL. We clean redirect chains in migrations—common when moving from WordPress. Chains slow crawling and dilute link equity. Direct redirects = clean. Audit your redirects periodically.",
    category: "Technical SEO",
    keywords: ["redirect", "chain", "error", "fix"]
  },
  {
    id: "techseo-016",
    question: "What is a page experience and why does it matter?",
    answer: "Page Experience = Google's umbrella for Core Web Vitals + mobile-friendliness + HTTPS + no intrusive interstitials. It's a ranking factor. Good page experience = Google favors you. Bad = penalty. We optimize for page experience on every build. Next.js gives us the technical foundation; we ensure no popups block content, mobile works perfectly. It's the sum of technical factors that create good UX.",
    category: "Technical SEO",
    keywords: ["page experience", "ux", "ranking", "core web vitals"]
  },
  {
    id: "techseo-017",
    question: "How do I know if Google has indexed my pages?",
    answer: "Site:yoursite.com in Google search shows indexed pages. Google Search Console shows exact numbers (Coverage report). Look for: 'Indexed' vs 'Discovered - currently not indexed' vs 'Crawled - currently not indexed.' Each has different causes. We audit indexation for clients—often find pages that should rank but aren't indexed. Fixing indexation is often quick wins. Know your index status.",
    category: "Technical SEO",
    keywords: ["indexed", "indexation", "search console", "coverage"]
  },
  {
    id: "techseo-018",
    question: "What is render-blocking and how do I fix it?",
    answer: "Render-blocking = CSS/JS that must load before page displays. Browser can't show content until these load. Fix: inline critical CSS, defer non-critical JS, use async loading. Next.js handles much of this automatically. WordPress loads 20+ render-blocking resources. We optimize every build—eliminate blocking where possible. Faster first paint = better LCP = better rankings. Technical optimization with measurable impact.",
    category: "Technical SEO",
    keywords: ["render blocking", "css", "javascript", "performance"]
  },
  {
    id: "techseo-019",
    question: "What is hreflang and when do I need it?",
    answer: "Hreflang = tell Google which language/region version of a page to show. For UK-only businesses: usually don't need it. For multi-language or UK vs US targeting: essential. Prevents wrong version ranking in wrong country. We implement hreflang for international sites. Southport businesses serving only UK don't need it. If you expand to Ireland or target multiple English-speaking regions, we add it. Right tool for the right situation.",
    category: "Technical SEO",
    keywords: ["hreflang", "international", "language", "region"]
  },
  {
    id: "techseo-020",
    question: "How do I fix 'Soft 404' errors?",
    answer: "Soft 404 = page returns 200 status but has no real content (empty, 'page not found' message). Google treats it as 404. Fix: return actual 404 status for missing pages, or add real content. Often caused by search result pages, filtered views, or broken templates. We audit and fix—either proper 404 or proper content. Soft 404s waste crawl budget and can confuse Google. Clean them up.",
    category: "Technical SEO",
    keywords: ["soft 404", "404", "error", "indexing"]
  },
  {
    id: "techseo-021",
    question: "What is crawl budget and does it matter?",
    answer: "Crawl budget = how often Googlebot visits your site and how many pages it crawls. For small sites (under 1000 pages): usually irrelevant—Google crawls everything. For large sites: important. Don't waste budget on duplicate/thin pages. Use robots.txt and noindex wisely. Most Southport business sites are small—crawl budget isn't a concern. We focus on it for enterprise clients with 10,000+ pages. Know when it matters.",
    category: "Technical SEO",
    keywords: ["crawl budget", "crawling", "googlebot", "large site"]
  },
  {
    id: "techseo-022",
    question: "How do I add structured data to my site?",
    answer: "JSON-LD in the page's head or body. Script tag with type='application/ld+json' containing your schema. We inject this programmatically in Next.js—every page gets appropriate schema (LocalBusiness on homepage, Article on blog posts, etc.). WordPress: use a plugin (Schema Pro, RankMath) but they add bloat. Clean implementation beats plugin. We include schema in every build. See our <a href='/services/technical-seo'>technical SEO approach</a>.",
    category: "Technical SEO",
    keywords: ["structured data", "schema", "json-ld", "add"]
  },
  {
    id: "techseo-023",
    question: "What's the difference between noindex and nofollow?",
    answer: "Noindex = don't include this page in search results. Use for: thank you pages, internal search results, duplicate content. Nofollow = don't pass link equity to the linked page. Use for: untrusted links, paid links, UGC. Both go in meta tags or link attributes. We use noindex strategically to focus Google on important pages. Nofollow for outbound links to untrusted sites. Different tools for different jobs.",
    category: "Technical SEO",
    keywords: ["noindex", "nofollow", "meta", "robots"]
  },
  {
    id: "techseo-024",
    question: "How do I fix 'Discovered - currently not indexed'?",
    answer: "Google found the page but chose not to index it. Common causes: low quality, duplicate of another page, low crawl priority. Fix: improve content quality, add unique value, ensure it's not duplicate, build internal links to it. Sometimes it's a new page—Google may index later. For important pages stuck in this state, we improve quality and request indexing via Search Console. Patience + quality = indexed.",
    category: "Technical SEO",
    keywords: ["not indexed", "discovered", "indexing", "fix"]
  },
  {
    id: "techseo-025",
    question: "What technical SEO do you include in website builds?",
    answer: "Every build gets: Core Web Vitals optimization, semantic HTML structure, unique meta titles/descriptions, JSON-LD schema, sitemap, robots.txt, canonical tags, mobile-first design, HTTPS, clean URL structure, internal linking. We don't charge extra—technical SEO is part of quality web development. Next.js gives us the foundation; we build on it. Your site launches SEO-ready. See our <a href='/services/technical-seo'>technical SEO package</a>.",
    category: "Technical SEO",
    keywords: ["technical seo", "included", "website build", "what's included"]
  },

  // Pricing & Packages (20 questions)
  {
    id: "price-001",
    question: "How much does a Next.js website cost?",
    answer: "Our Next.js websites range from £1,500-£5,000 depending on complexity. A 5-page business site with custom design, SEO optimization, and contact forms typically costs £2,500-3,500. E-commerce sites start at £4,000. Yes, that's more than a £800 WordPress template, but you'll save £5,000-10,000 over 3 years in hosting, security, and maintenance fees. Plus, the speed advantage directly impacts your Google rankings and conversion rates. We offer payment plans for small businesses. View our <a href='/services/small-business'>small business packages</a>.",
    category: "Pricing & Packages",
    keywords: ["cost", "price", "how much", "pricing", "packages"]
  },
  {
    id: "price-002",
    question: "Do you offer payment plans?",
    answer: "Yes. For projects over £2,000, we offer 50% upfront and 50% on completion. For larger projects, we can structure payments across milestones (deposit, design approval, launch). We understand small business cash flow—Southport businesses shouldn't have to pay everything upfront. We're flexible within reason. No interest, no finance—just split payments. Ask when you get your quote.",
    category: "Pricing & Packages",
    keywords: ["payment", "payment plan", "installments", "finance"]
  },
  {
    id: "price-003",
    question: "Why is a professional website more expensive than Wix/Squarespace?",
    answer: "Wix/Squarespace = template + monthly fee. You're limited to their designs, their speed (slow), their SEO (basic). Professional = custom design, custom code, 0.9-second loads, full SEO control. You're paying for: bespoke work, performance, no ongoing platform fees. Over 3 years, professional often costs less (no £20-40/month fees) and delivers 10x the results. You get what you pay for. Our clients choose quality over cheap templates.",
    category: "Pricing & Packages",
    keywords: ["expensive", "vs wix", "vs squarespace", "why cost more"]
  },
  {
    id: "price-004",
    question: "What's included in your website pricing?",
    answer: "Design (custom or adapted), development (Next.js), content setup, SEO foundation (meta tags, schema, sitemap), contact forms, hosting setup, training, 30-day support. We're transparent—no hidden fees. Domain and third-party services (e.g., Sanity CMS) are separate if applicable. E-commerce adds: product setup, payment integration, checkout. See our <a href='/services/small-business'>package breakdown</a> for full details.",
    category: "Pricing & Packages",
    keywords: ["included", "what's in", "package", "scope"]
  },
  {
    id: "price-005",
    question: "How much does SEO cost per month?",
    answer: "Our SEO packages: Local optimization £500/month, Full organic £800-1,200/month, Enterprise £1,500+/month. Includes: keyword research, on-page optimization, technical fixes, content strategy, monthly reporting. One-off audit: £350. We customise based on your competition and goals. Southport plumber vs regional law firm = different needs. We'll tell you what will move the needle. No lock-in—month-to-month available. View our <a href='/services/seo'>SEO services</a>.",
    category: "Pricing & Packages",
    keywords: ["seo cost", "monthly", "seo pricing"]
  },
  {
    id: "price-006",
    question: "Is your pricing too expensive for small businesses?",
    answer: "We've heard it. But consider: £2,500 one-time vs £200/month advertising that stops when you stop. The website works 24/7. Or: £2,500 vs £150/month WordPress maintenance for 3 years = £5,400. Our pricing is an investment, not an expense. We work with Southport small businesses every day—we know budgets. Payment plans help. And the ROI: one extra job per month often pays for the site. It's about value, not cost.",
    category: "Pricing & Packages",
    keywords: ["expensive", "affordable", "small business", "budget"]
  },
  {
    id: "price-007",
    question: "Do you have fixed packages or custom quotes?",
    answer: "Both. We have standard packages (5-page site £2,500-3,500) for common projects. Complex projects get custom quotes—e-commerce, migrations, multi-location, custom functionality. We're transparent about what drives price: page count, integrations, design complexity. No bait-and-switch. You'll know the cost before we start. Contact us with your needs—we'll give you a clear number. See our <a href='/services'>services overview</a>.",
    category: "Pricing & Packages",
    keywords: ["packages", "quotes", "custom", "fixed price"]
  },
  {
    id: "price-008",
    question: "What's the cheapest website you offer?",
    answer: "Our entry point is £1,500 for a simple 3-4 page site with essential features. That gets you: Next.js speed, mobile-responsive design, contact form, basic SEO. Good for: new businesses, minimal needs. Most clients choose £2,500-3,500 packages for a proper presence. We don't do £500 template sites—they're false economy. £1,500 is our floor for quality work. Below that, you're better with a DIY builder until you're ready to invest.",
    category: "Pricing & Packages",
    keywords: ["cheapest", "minimum", "entry", "budget"]
  },
  {
    id: "price-009",
    question: "How much does a WordPress migration cost?",
    answer: "Migrations range £2,000-4,000 depending on site size. Simple 10-page site: £2,000-2,500. Blog with 100+ posts: £2,500-3,500. E-commerce: £3,500-5,000. Includes: content transfer, 301 redirects, design rebuild, testing. You keep your domain, rankings (we preserve them), and content. The investment pays back in hosting savings and performance gains. Many clients see traffic increase—migration as upgrade. Get a <a href='/contact'>migration quote</a>.",
    category: "Pricing & Packages",
    keywords: ["migration cost", "wordpress migration", "transfer"]
  },
  {
    id: "price-010",
    question: "Are there any hidden costs?",
    answer: "No. We quote the full project cost. What you might pay separately: domain (if new, £10-15/year), CMS subscription if using Sanity/Contentful (free tier often sufficient), stock photos if you need them (£0-100). We're upfront about everything. No surprise invoices. No 'that wasn't in scope' surprises. If something's extra, we tell you before we do it. Transparency is policy.",
    category: "Pricing & Packages",
    keywords: ["hidden costs", "extra", "surprises", "transparent"]
  },
  {
    id: "price-011",
    question: "Do you offer discounts?",
    answer: "We don't do arbitrary discounts—it devalues our work. We do offer: 10% for referrals (you refer, they sign, you get 10% off your next project), early payment (5% off for full upfront payment on larger projects). We also have seasonal offers occasionally. Ask. We'd rather deliver more value than fake discounts. Southport businesses get the same pricing as everyone—fair and consistent.",
    category: "Pricing & Packages",
    keywords: ["discount", "offer", "save", "referral"]
  },
  {
    id: "price-012",
    question: "How much does e-commerce cost?",
    answer: "E-commerce starts at £4,000 for a basic store (20-50 products, Stripe/Shopify checkout). Custom features, large catalogues, integrations add to that. We build headless—Next.js frontend, Shopify or custom backend. You get speed + e-commerce functionality. Compare to WooCommerce: similar build cost but we deliver 5x faster load times. Get a quote based on your product count and requirements. Contact us for <a href='/contact'>e-commerce pricing</a>.",
    category: "Pricing & Packages",
    keywords: ["ecommerce cost", "online store", "shop", "pricing"]
  },
  {
    id: "price-013",
    question: "What's the ROI of a £3,000 website?",
    answer: "If your site generates one extra enquiry per month at £100 average value = £1,200/year. Paid back in 2.5 years—and the site lasts 5+ years. Or: organic traffic from SEO. £500/month SEO + £3,000 site = 5-10 extra jobs at £100+ each monthly. ROI in months, not years. We've seen Southport clients 3x their enquiry volume. The website isn't a cost—it's your cheapest sales channel. See <a href='/case-studies'>real ROI</a>.",
    category: "Pricing & Packages",
    keywords: ["roi", "return", "worth it", "value"]
  },
  {
    id: "price-014",
    question: "Do you charge for revisions?",
    answer: "We include 2 rounds of revisions in our standard scope. That covers: design tweaks, content changes, functionality adjustments. Additional rounds: £50/hour or we quote per round. We've never had a client need more than 2 rounds when we're clear on scope upfront. Good discovery = fewer revisions. We get it right the first time. Scope creep (new features) is quoted separately. Fair and clear.",
    category: "Pricing & Packages",
    keywords: ["revisions", "changes", "edits", "rounds"]
  },
  {
    id: "price-015",
    question: "How much does ongoing maintenance cost?",
    answer: "Optional. £50/month gets you: priority support, content update help, minor tweaks (up to 2 hours/month). Most clients don't need it—Next.js sites run themselves. Compare to WordPress: £100-200/month typical. We offer maintenance for peace of mind, not because it's required. Month-to-month, cancel anytime. Some clients use it for 3 months post-launch then cancel. Your choice.",
    category: "Pricing & Packages",
    keywords: ["maintenance cost", "ongoing", "support", "monthly"]
  },
  {
    id: "price-016",
    question: "What do you charge for a website audit?",
    answer: "Our free audit covers: speed test, basic SEO check, core issues. Full technical audit: £350. Includes: comprehensive crawl, keyword analysis, competitor review, prioritized fix list. Worth it before a big project—know what you're fixing. We apply the audit fee to any project you book within 90 days. So it's free if you work with us. Smart investment before investing in a new site. Book a <a href='/audit'>free audit</a>.",
    category: "Pricing & Packages",
    keywords: ["audit cost", "audit price", "free audit"]
  },
  {
    id: "price-017",
    question: "Can I get a quote without commitment?",
    answer: "Yes. Contact us with your project details. We'll send a detailed quote—scope, timeline, cost. No obligation. We don't do high-pressure sales. You review, ask questions, decide. Many clients take a few weeks to decide. We're here to help you make an informed choice. If the quote doesn't work, no hard feelings. Transparent process from first contact. Get in touch for a <a href='/contact'>free quote</a>.",
    category: "Pricing & Packages",
    keywords: ["quote", "no obligation", "free quote", "estimate"]
  },
  {
    id: "price-018",
    question: "Do you work with charities or offer pro bono?",
    answer: "We've done reduced-rate work for local Southport charities. Not full pro bono—we're a small business too—but we can sometimes offer 20-30% discount for registered charities with limited budget. Apply with your charity details and project needs. We evaluate case by case. Supporting our community matters. Contact us with your situation.",
    category: "Pricing & Packages",
    keywords: ["charity", "non profit", "discount", "pro bono"]
  },
  {
    id: "price-019",
    question: "How does your pricing compare to agencies?",
    answer: "Agencies typically charge £5,000-15,000 for similar sites. We're £2,500-3,500. Why? No London overhead, lean team, efficient process. You get agency-quality work at freelance pricing. We're not the cheapest (that's Fiverr) or most expensive (that's London agencies). We're the sweet spot for Southport and North West businesses who want quality without agency bloat.",
    category: "Pricing & Packages",
    keywords: ["agency", "comparison", "vs agency", "competitive"]
  },
  {
    id: "price-020",
    question: "What payment methods do you accept?",
    answer: "Bank transfer (BACS), PayPal, Stripe. Invoicing for 50% upfront, 50% on completion. We send invoices with clear payment terms (typically 14 days). For larger projects, we can do milestone payments. No credit card required for standard projects. We're a UK business—all payments in GBP. Simple and professional.",
    category: "Pricing & Packages",
    keywords: ["payment", "bank transfer", "paypal", "how to pay"]
  },

  // Process & Timeline (15 questions)
  {
    id: "process-001",
    question: "How long does it take to build a website?",
    answer: "A standard 5-10 page Next.js business website takes 2-3 weeks from kickoff to launch. More complex sites with custom functionality or e-commerce take 4-6 weeks. WordPress migrations take 2-4 weeks. The timeline includes: Discovery & planning (3-5 days), Design & content (7-10 days), Development (7-10 days), Testing & revisions (3-5 days), Launch & training (2 days). We can expedite for time-sensitive launches. Unlike agencies that drag projects out for months, we deliver fast without compromising quality.",
    category: "Process & Timeline",
    keywords: ["timeline", "how long", "development time", "project duration"]
  },
  {
    id: "process-002",
    question: "What happens in the discovery phase?",
    answer: "We learn your business: goals, audience, competitors, content needs. Usually a 1-hour call plus a questionnaire. We map your site structure, identify must-have features, and align on design direction. No building until we understand the brief. Good discovery = fewer revisions. We ask the right questions—some clients haven't thought about their ideal customer or key messages. We help crystallize that. Foundation for everything that follows.",
    category: "Process & Timeline",
    keywords: ["discovery", "planning", "kickoff", "brief"]
  },
  {
    id: "process-003",
    question: "Do I need to provide all content upfront?",
    answer: "Ideal: yes. We can design and build faster with your text and images. Reality: most clients provide content in stages. We work with that—use placeholder content for design, swap in real content as you provide it. For copy, we can write it (£100-150/page) or you supply drafts we polish. Photos: we can use stock temporarily, you replace later. Don't let content block your project—we're flexible. But faster content = faster launch.",
    category: "Process & Timeline",
    keywords: ["content", "copy", "images", "provide"]
  },
  {
    id: "process-004",
    question: "How do revisions work?",
    answer: "We include 2 revision rounds. Round 1: you review design, we fix feedback. Round 2: you review built site, we refine. We use clear feedback tools (sometimes just a list). 'Change the blue to green, make the headline shorter'—specific helps. We turn revisions around in 2-3 days. Most projects wrap in 2 rounds. If you need more, we quote—but rarely necessary when discovery was thorough.",
    category: "Process & Timeline",
    keywords: ["revisions", "feedback", "changes", "rounds"]
  },
  {
    id: "process-005",
    question: "Do you use contracts?",
    answer: "Yes. Our contract covers: scope, timeline, payment terms, intellectual property, warranties. It protects both parties. We're not legal-heavy—it's a standard web project agreement. You get a copy to review before signing. Same terms we've used for 50+ projects. Fair, clear, professional. Ask any questions before signing. We want you comfortable with the commitment.",
    category: "Process & Timeline",
    keywords: ["contract", "agreement", "terms", "legal"]
  },
  {
    id: "process-006",
    question: "Can you work to a deadline?",
    answer: "Yes. Tell us your deadline upfront—we'll confirm if it's achievable. Launch before MLEC? Holiday season? Business anniversary? We've hit tight deadlines. Rush projects may have less revision buffer—we'll be clear about trade-offs. Standard 2-3 week timeline works for most. Earlier you start, more buffer for surprises. Don't leave it to the last minute.",
    category: "Process & Timeline",
    keywords: ["deadline", "rush", "timeline", "urgent"]
  },
  {
    id: "process-007",
    question: "How do we communicate during the project?",
    answer: "Email for most things. Video calls for kickoff and major reviews. Slack/WhatsApp if you prefer for quick questions. We're responsive—usually within 24 hours, often same day. You'll have a primary contact. No black hole. We keep you updated at key milestones. You're never wondering what's happening. Clear communication = smooth projects.",
    category: "Process & Timeline",
    keywords: ["communication", "contact", "updates", "feedback"]
  },
  {
    id: "process-008",
    question: "What if I need to pause the project?",
    answer: "Life happens. We can pause—hold at current stage, resume when you're ready. You keep what's done (design files, partial build). We may need to re-quote if the pause is long (tech changes). No penalty for genuine pauses. Just communicate—we'd rather know than chase. Most pauses are 2-4 weeks. We're flexible within reason.",
    category: "Process & Timeline",
    keywords: ["pause", "hold", "delay", "postpone"]
  },
  {
    id: "process-009",
    question: "Do you provide training on the new site?",
    answer: "Yes. Included in every project. Usually a 30-60 minute screen-share: how to update content in your CMS, add blog posts, manage forms. We record it for your reference. Documentation too—simple guides for common tasks. You're not left to figure it out. Headless CMS dashboards are intuitive; most clients are confident after one session. Additional training available if needed.",
    category: "Process & Timeline",
    keywords: ["training", "handover", "how to use", "cms"]
  },
  {
    id: "process-010",
    question: "What's your typical payment schedule?",
    answer: "50% to start, 50% on completion. For larger projects (£5k+): we can do milestones (e.g., 30% start, 40% design approval, 30% launch). Invoiced with 14-day terms. We don't start development until deposit is received. Same terms for most clients—simple and clear. Ask if you need different structure; we're open to discussion for substantial projects.",
    category: "Process & Timeline",
    keywords: ["payment", "deposit", "schedule", "terms"]
  },
  {
    id: "process-011",
    question: "Can I see the site before it goes live?",
    answer: "Absolutely. You get a staging URL—password-protected—to review the full site before launch. Test everything: forms, links, mobile view. We encourage thorough review. No surprises on launch day. You approve before we point your domain. Changes at this stage are included in revision rounds. We only go live when you're happy. Your site, your approval.",
    category: "Process & Timeline",
    keywords: ["staging", "preview", "before launch", "review"]
  },
  {
    id: "process-012",
    question: "What happens on launch day?",
    answer: "We switch your domain to the new site (DNS update). Usually takes 15 minutes; propagation can take up to 48 hours. We test post-launch. You get access to everything: CMS, analytics, hosting. We're on standby for any launch issues—rare with our process. Launch typically happens during business hours so we can monitor. You're live. We celebrate with you.",
    category: "Process & Timeline",
    keywords: ["launch", "go live", "deployment", "dns"]
  },
  {
    id: "process-013",
    question: "What if I'm not happy with the design?",
    answer: "We work to avoid this—good discovery, mood boards, clear direction. But if the design misses: we revise. That's what revision rounds are for. We iterate until it's right. In 50+ projects, we've never had a client launch unhappy. Communication is key—tell us what's wrong specifically. 'I don't like it' is hard to fix; 'the colors feel too corporate' gives us direction. We'll get there.",
    category: "Process & Timeline",
    keywords: ["design", "not happy", "revision", "feedback"]
  },
  {
    id: "process-014",
    question: "Do you work with clients outside Southport?",
    answer: "Yes. We're based in Southport but work with businesses across the UK—Liverpool, Manchester, Preston, London. Video calls, shared documents, same process. We've never met some clients in person; it works fine. Local Southport clients can meet face-to-face if they prefer. Geography isn't a barrier. Good work travels.",
    category: "Process & Timeline",
    keywords: ["remote", "location", "uk", "where"]
  },
  {
    id: "process-015",
    question: "What's the first step to get started?",
    answer: "Contact us. Tell us about your project: what you need, your timeline, your budget if you have one. We'll schedule a call to discuss. No pressure. We'll send a quote if it's a fit. From contact to signed contract typically 1-2 weeks. Then we schedule kickoff. Simple. Get in touch via our <a href='/contact'>contact page</a>.",
    category: "Process & Timeline",
    keywords: ["get started", "first step", "begin", "contact"]
  },

  // Southport & MLEC (20 questions)
  {
    id: "mlec-001",
    question: "How will the MLEC affect my Southport business?",
    answer: "The Marine Lake Events Centre will bring 500,000+ additional visitors to Southport annually—an £19 million economic boost. But here's the reality: footfall in town doesn't guarantee footfall in your business. These visitors are 'digital tourists' who search 'restaurant near MLEC' or 'hotel Marine Lake' on their phones. If you're not in the Map Pack, you're invisible to them. The businesses optimizing now will capture this opportunity; those stuck with slow WordPress sites won't. We've created a comprehensive <a href='/southport-growth'>Southport Growth Hub</a> with strategies for MLEC readiness.",
    category: "Southport & MLEC",
    keywords: ["mlec", "marine lake events centre", "southport", "visitors"]
  },
  {
    id: "mlec-002",
    question: "What is the MLEC?",
    answer: "The Marine Lake Events Centre is a £37.5m Town Deal project transforming Southport's waterfront with a 3,500-seat conference center, hotel, and the 'Light Fantastic' water/light show. Opening in 2026, it's projected to bring over 500,000 additional visitors annually. For local businesses, this represents the biggest opportunity in a generation—but only if you're visible online. Conference delegates don't know that your café has the best scones on Lord Street; they only know what Google Maps tells them. Digital visibility = capturing this new economy. Read more on our <a href='/southport-growth'>growth hub</a>.",
    category: "Southport & MLEC",
    keywords: ["mlec explained", "marine lake", "town deal", "southport development"]
  },
  {
    id: "mlec-003",
    question: "When does the MLEC open?",
    answer: "Scheduled for 2026. The £37.5m project is part of Southport's Town Deal regeneration. Construction is underway. For businesses, preparation time is now—those optimizing their web presence in 2025 will be ready when 500,000 visitors start searching. Don't wait for opening day to get visible. The digital tourists are coming; the businesses that rank will capture them. See our <a href='/southport-growth'>MLEC readiness guide</a>.",
    category: "Southport & MLEC",
    keywords: ["mlec opening", "when", "2026", "construction"]
  },
  {
    id: "mlec-004",
    question: "How can my Southport business prepare for MLEC visitors?",
    answer: "Three priorities: 1) Fast, mobile-optimized website—visitors search on phones, 2) Google Business Profile dominance—Map Pack for 'restaurant near MLEC,' etc., 3) Location-specific content—pages targeting Marine Lake, conference, events keywords. We've built a comprehensive playbook for Southport businesses. The businesses that rank for MLEC-related searches will capture the influx. Start now. See our <a href='/southport-growth'>Southport Growth Hub</a>.",
    category: "Southport & MLEC",
    keywords: ["prepare", "mlec ready", "visitors", "strategy"]
  },
  {
    id: "mlec-005",
    question: "What's the Light Fantastic at the MLEC?",
    answer: "The Light Fantastic is a planned water and light show—a key attraction that will draw visitors to the Marine Lake area. It's part of the MLEC's entertainment offering, complementing the 3,500-seat conference center. For Southport businesses, it means more evening footfall, more 'things to do Southport' searches. Restaurants, bars, and accommodation near the show benefit. We're tracking MLEC developments and building strategies around the full attraction mix.",
    category: "Southport & MLEC",
    keywords: ["light fantastic", "water show", "attraction", "marine lake"]
  },
  {
    id: "mlec-006",
    question: "Will MLEC help Southport restaurants?",
    answer: "Potentially huge. 500,000 visitors need to eat. But they'll search 'restaurant near MLEC' or 'food Marine Lake'—only visible businesses get the traffic. Restaurants with slow websites and weak Map Pack presence will lose to those that rank. The opportunity is there; capturing it requires digital readiness. We're helping Southport restaurants optimize now. Same logic for cafés, takeaways, bars. Demand is coming; visibility determines who benefits.",
    category: "Southport & MLEC",
    keywords: ["restaurant", "food", "hospitality", "mlec"]
  },
  {
    id: "mlec-007",
    question: "What about Southport accommodation and the MLEC?",
    answer: "Conference delegates, event attendees, and tourists need beds. 'Hotel near MLEC,' 'accommodation Marine Lake,' 'B&B Southport' searches will spike. Hotels and B&Bs optimizing now will dominate those searches. We've built accommodation sites with MLEC-specific targeting. The 500,000 figure includes overnight stays—accommodation that ranks will book out. Southport's hospitality sector could see its biggest boom in decades. Digital visibility is the distribution channel.",
    category: "Southport & MLEC",
    keywords: ["accommodation", "hotel", "b&b", "overnight"]
  },
  {
    id: "mlec-008",
    question: "Is Churchtown Media based in Southport?",
    answer: "Yes. We're a Southport-based web design and SEO agency. We understand the local market—Lord Street, Marine Drive, the challenges and opportunities. The MLEC isn't abstract to us; it's our community's future. We're invested in Southport businesses succeeding. That's why we built the Southport Growth Hub and MLEC readiness resources. Local business, local expertise. See our <a href='/southport-growth'>Southport focus</a>.",
    category: "Southport & MLEC",
    keywords: ["churchtown media", "southport", "local", "based"]
  },
  {
    id: "mlec-009",
    question: "What's the Southport Town Deal?",
    answer: "The Town Deal is a government initiative investing in town regeneration. Southport received £37.5m for projects including the MLEC. It's part of leveling-up investment in coastal towns. The MLEC is the flagship project. For businesses, it means infrastructure investment that drives footfall—but only businesses visible online capture that footfall. We're tracking Town Deal developments and their implications for local digital strategy.",
    category: "Southport & MLEC",
    keywords: ["town deal", "regeneration", "investment", "southport"]
  },
  {
    id: "mlec-010",
    question: "How will MLEC affect Lord Street businesses?",
    answer: "Lord Street is Southport's main retail street—a short distance from the MLEC. Visitors will explore. The question: how do they find you? 'Shop Lord Street,' 'Lord Street Southport'—businesses that rank get discovered. Slow sites, weak GBP = missed opportunity. Retail benefits from MLEC footfall only if they're findable. We optimize Lord Street businesses for local search. Physical proximity helps; digital visibility converts that into traffic.",
    category: "Southport & MLEC",
    keywords: ["lord street", "retail", "shopping", "southport"]
  },
  {
    id: "mlec-011",
    question: "What Southport areas will MLEC impact most?",
    answer: "Marine Lake/waterfront immediately. Then promenade, Lord Street, and accommodation districts. Conference attendees have different needs than day-trippers—business services, quality dining. The 3,500-seat venue suggests large events; surrounding businesses that cater to crowds will benefit. We're building location-specific content for different Southport areas. Each has unique keyword opportunities. Understand your area's angle.",
    category: "Southport & MLEC",
    keywords: ["areas", "waterfront", "marine drive", "impact"]
  },
  {
    id: "mlec-012",
    question: "Can you help Southport businesses with MLEC marketing?",
    answer: "We focus on digital visibility—websites, SEO, Map Pack optimization. That's the foundation for capturing MLEC traffic. We don't do traditional marketing (billboards, print) but our work ensures you're found when 500,000 people search. For comprehensive MLEC strategy, we're the digital piece. Some clients combine us with PR or traditional advertising. We own the search results; that's where modern consumers look first.",
    category: "Southport & MLEC",
    keywords: ["marketing", "mlec", "digital", "strategy"]
  },
  {
    id: "mlec-013",
    question: "What's the economic impact of MLEC on Southport?",
    answer: "Projected £19 million annual economic boost. 500,000+ additional visitors. That's the headline. Distribution of that benefit depends on which businesses capture the spending. Visitors with phones search before they spend. Map Pack visibility = capturing spend. Businesses without digital presence will see footfall pass them by. The economic impact is real; your share depends on your visibility. Optimize or watch others benefit.",
    category: "Southport & MLEC",
    keywords: ["economic impact", "revenue", "boost", "visitors"]
  },
  {
    id: "mlec-014",
    question: "Do you work with Southport tourism businesses?",
    answer: "Yes. Attractions, tours, experiences—all need digital visibility. 'Things to do Southport,' 'Marine Lake activities,' event-related searches. Tourism has unique seasonality; we factor that in. MLEC will complement existing attractions—and create new search demand. Tourism businesses that rank will capture pre-planning searches (people research before visiting) and last-minute searches (already in town). We've worked with Southport tourism operators.",
    category: "Southport & MLEC",
    keywords: ["tourism", "attractions", "experiences", "visitors"]
  },
  {
    id: "mlec-015",
    question: "What's the Southport Growth Hub?",
    answer: "Our resource hub for Southport businesses—strategies for MLEC readiness, local SEO, and digital growth. We created it because Southport faces a unique opportunity and we want local businesses to capture it. Free content, guides, and the option to work with us for implementation. It's our contribution to the community. See the full hub at <a href='/southport-growth'>southport-growth</a>. Updated as MLEC developments continue.",
    category: "Southport & MLEC",
    keywords: ["growth hub", "southport growth", "resources", "guides"]
  },
  {
    id: "mlec-016",
    question: "How does MLEC compare to other UK conference venues?",
    answer: "MLEC joins UK conference destinations—different scale than NEC Birmingham but significant for Southport. The 3,500 capacity attracts regional and national events. For local businesses, the comparison doesn't matter—what matters is being visible when attendees search. Conference delegates behave the same everywhere: they search for food, accommodation, services near the venue. Our strategies work for any conference-town context. Southport now has that context.",
    category: "Southport & MLEC",
    keywords: ["conference", "venue", "comparison", "events"]
  },
  {
    id: "mlec-017",
    question: "Will MLEC create new keyword opportunities?",
    answer: "Absolutely. 'Restaurant near MLEC,' 'parking Marine Lake Events Centre,' 'hotel near Marine Lake,' 'Southport conference accommodation.' New venue = new search demand. Early optimizers will own these keywords before competition heats up. We're building content strategies around MLEC-specific terms. The businesses that rank for these when MLEC opens will have first-mover advantage. Keywords don't exist yet at scale—create the content now.",
    category: "Southport & MLEC",
    keywords: ["keywords", "opportunities", "mlec", "search"]
  },
  {
    id: "mlec-018",
    question: "What services does Churchtown Media offer Southport businesses?",
    answer: "Web design (Next.js), SEO (local and organic), WordPress migration, technical SEO audits. We help Southport businesses get visible, get fast, get found. MLEC readiness is a focus—we understand the opportunity. From £1,500 simple sites to £5,000+ comprehensive projects. See our <a href='/services'>full services</a>. Local expertise, modern tech, transparent pricing. Southport businesses deserve better than generic agencies.",
    category: "Southport & MLEC",
    keywords: ["services", "churchtown media", "southport", "what we do"]
  },
  {
    id: "mlec-019",
    question: "How do I contact Churchtown Media in Southport?",
    answer: "Visit our <a href='/contact'>contact page</a>—form, email, or we can arrange a call. We're based in Southport and happy to meet local clients face-to-face. For clients elsewhere, video calls work perfectly. Response typically within 24 hours. Tell us about your project—website, SEO, migration—and we'll get back with next steps. No pressure, just conversation.",
    category: "Southport & MLEC",
    keywords: ["contact", "get in touch", "southport", "churchtown media"]
  },
  {
    id: "mlec-020",
    question: "Why should Southport businesses choose Churchtown Media?",
    answer: "Local expertise—we understand Southport, the MLEC opportunity, and North West business. Modern tech—Next.js, not slow WordPress. Transparent pricing—no surprises. Proven results—Alotek Shelters tripled traffic, case studies on our site. We're not the cheapest or most expensive—we're the right fit for Southport businesses who want quality and results. See our <a href='/testimonials'>testimonials</a> and <a href='/case-studies'>case studies</a>.",
    category: "Southport & MLEC",
    keywords: ["why us", "choose", "churchtown media", "southport"]
  },

  // Small Business (15 questions)
  {
    id: "smb-001",
    question: "Do small businesses really need professional web design?",
    answer: "In 2026, your website IS your business for most customers. 93% of online experiences begin with a search engine. If someone in Ainsdale searches 'plumber near me,' they'll call whoever appears in the Map Pack—not who has the best van signage. A professional website with proper SEO means capturing those high-intent searches. The investment is £2,500-3,500 one-time vs. £200-300/month for traditional advertising. Over a year, the website is cheaper and works 24/7. For Southport small businesses, this isn't optional anymore. View <a href='/services/small-business'>our packages</a>.",
    category: "Small Business",
    keywords: ["small business website", "worth it", "investment", "roi"]
  },
  {
    id: "smb-002",
    question: "What's the best website for a small business?",
    answer: "Fast (under 2 seconds), mobile-friendly, with clear contact info and your key services. No bloat. Next.js delivers this—0.9 second loads, works on every device. Add: Google Business Profile optimization for local search. That combination captures 'near me' searches. Fancy features matter less than speed and findability. We build small business sites that do the essentials brilliantly. See our <a href='/services/small-business'>small business approach</a>.",
    category: "Small Business",
    keywords: ["best website", "small business", "essential", "simple"]
  },
  {
    id: "smb-003",
    question: "Can a small business compete with bigger competitors online?",
    answer: "Yes. Local search levels the playing field. A Southport plumber can outrank nationals for 'plumber Southport' with the right site and local SEO. Big companies often ignore hyper-local—opportunity for you. Speed, GBP optimization, and local content beat budget. We've seen small businesses dominate their niche. The tech (Next.js) and tactics (local SEO) work for businesses of any size. Don't assume you need enterprise budget.",
    category: "Small Business",
    keywords: ["compete", "bigger competitors", "level playing field", "small vs large"]
  },
  {
    id: "smb-004",
    question: "How do I get more customers from my website?",
    answer: "Two paths: get more visitors (SEO, ads) or convert more visitors (better site). We do both. SEO gets you in front of people searching; a fast, clear site converts them. Make your contact info obvious. Add trust signals (reviews, credentials). Clear calls-to-action. We optimize for conversions—form placement, mobile usability, load speed. Traffic means nothing without conversion. We build sites that do both.",
    category: "Small Business",
    keywords: ["customers", "leads", "conversions", "more business"]
  },
  {
    id: "smb-005",
    question: "My business is too small for a professional website—right?",
    answer: "Wrong. If you have a phone number and want customers to find you, you need a proper site. DIY builders work for hobbies; businesses need credibility and speed. £2,500 over 5 years = £500/year. One job pays for it. We work with sole traders and small teams—you're our ideal client. Don't let imposter syndrome block growth. Your competitors are getting websites; so should you.",
    category: "Small Business",
    keywords: ["too small", "just starting", "sole trader", "micro business"]
  },
  {
    id: "smb-006",
    question: "What should a small business website include?",
    answer: "Essential: who you are, what you do, where you are, how to contact. Clear services/products. Mobile-friendly design. Fast load. For local businesses: embed Google Map, click-to-call, address in footer. Optional: testimonials, FAQ, blog. Don't overcomplicate—5-7 strong pages beat 20 weak ones. We build focused small business sites that convert. See our <a href='/work'>portfolio</a> for examples.",
    category: "Small Business",
    keywords: ["what to include", "pages", "essential", "structure"]
  },
  {
    id: "smb-007",
    question: "How does a website help a local shop or tradesperson?",
    answer: "Customers search before they call. 'Plumber Southport,' 'electrician near me,' 'café Lord Street.' Your website is your 24/7 shopfront. It builds trust (reviews, photos, credentials), captures enquiries (contact form, click-to-call), and ranks in Google. A tradesperson without a proper site loses to one with a fast, optimized site. It's your cheapest marketing—works while you sleep. Local shops and trades are our specialty.",
    category: "Small Business",
    keywords: ["tradesperson", "local shop", "plumber", "trades"]
  },
  {
    id: "smb-008",
    question: "What's the ROI of a website for a small business?",
    answer: "Depends on your margins. Plumber: one extra job per month at £150 = £1,800/year. Website cost £2,500—paid back in 17 months. Consultant: one extra client at £500 = paid back in 5 months. The math works for most service businesses. Websites last 5+ years—compound returns. We've seen clients 2-3x their enquiries. The ROI question answers itself for businesses that get found.",
    category: "Small Business",
    keywords: ["roi", "return", "worth it", "value"]
  },
  {
    id: "smb-009",
    question: "Should I use a website builder or hire a professional?",
    answer: "Builders (Wix, Squarespace) = quick, cheap, limited. Fine for hobbies. Professional = custom, fast, SEO-optimized, scalable. For businesses that want to grow, professional wins. The builder site that costs £200 + £20/month for 3 years = £920 plus your time. Our site: £2,500, no monthly platform fee, 5x faster, ranks better. One extra customer often pays the difference. Invest in your business.",
    category: "Small Business",
    keywords: ["builder", "wix", "professional", "diy"]
  },
  {
    id: "smb-010",
    question: "How do I choose a web designer for my small business?",
    answer: "Look for: portfolio you like, experience with your industry/size, transparent pricing, focus on results (SEO, speed) not just pretty design. Red flags: guarantees #1 ranking, no portfolio, vague pricing. We're upfront—see our work, our prices, our process. Small businesses deserve the same quality as big clients. Ask questions. A good designer explains their approach. Get a <a href='/contact'>free quote</a>.",
    category: "Small Business",
    keywords: ["choose", "web designer", "how to pick", "agency"]
  },
  {
    id: "smb-011",
    question: "My business doesn't sell online—do I need a website?",
    answer: "Yes. You're not selling products; you're selling your service. Customers still find you via Google. 'Accountant Southport,' 'solicitor Sefton'—they search, then call. Your website builds trust before they pick up the phone. Professional services, trades, local shops: all need an online presence. It's your brochure, your credibility, your 24/7 representative. Not having a site in 2026 suggests you're not serious.",
    category: "Small Business",
    keywords: ["no ecommerce", "service business", "do I need", "offline"]
  },
  {
    id: "smb-012",
    question: "How can a small business afford SEO?",
    answer: "Our local SEO starts at £500/month. Compare to £200-300/month for local newspaper ads that run once. SEO compounds—you keep ranking. Or: invest in a fast, SEO-optimized site (included in our builds)—that's free ongoing SEO from speed and structure. Many small businesses start with the site, add SEO when they see it work. We work with small budgets—payment plans, phased projects. Don't assume SEO is enterprise-only.",
    category: "Small Business",
    keywords: ["afford", "budget", "seo cost", "small business"]
  },
  {
    id: "smb-013",
    question: "What makes a small business website convert visitors?",
    answer: "Clarity (what you do, immediately), trust (reviews, credentials, photos), easy contact (click-to-call, form above fold), fast load (visitors bounce from slow sites), mobile-first (70% of local searches on phone). We build for conversion—every element has a job. No clutter. Clear path to 'contact us' or 'get quote.' Conversion is design + copy + tech. We handle all three.",
    category: "Small Business",
    keywords: ["convert", "conversion", "visitors", "leads"]
  },
  {
    id: "smb-014",
    question: "How often should a small business update their website?",
    answer: "Content: when things change (new services, prices, team). Technical: we build sites that don't need constant updates—unlike WordPress. Review annually: is the info correct? Does it reflect your business? Major refresh every 3-5 years if design feels dated. Most of our small business clients update content quarterly at most. The site runs; you focus on your business. That's the point.",
    category: "Small Business",
    keywords: ["update", "how often", "refresh", "maintenance"]
  },
  {
    id: "smb-015",
    question: "What industries do you work with for small business websites?",
    answer: "Trades (plumbers, electricians, builders), professional services (accountants, solicitors, consultants), hospitality (restaurants, cafés, hotels), retail, healthcare. Any local business competing for 'near me' searches. We've built sites across sectors—the principles (speed, local SEO, conversion) apply to all. See our <a href='/work'>portfolio</a> for examples. Your industry isn't a barrier.",
    category: "Small Business",
    keywords: ["industries", "sectors", "trades", "professional services"]
  },

  // E-commerce (10 questions)
  {
    id: "ecom-001",
    question: "Can you build e-commerce stores with Next.js?",
    answer: "Yes! We build headless e-commerce stores using Next.js frontend with Shopify, Stripe, or custom backends. The performance advantages are massive—Amazon found every 100ms of latency cost 1% of sales. Our Next.js stores load instantly, handle Black Friday traffic without crashing, and rank higher in Google. Compared to WooCommerce (WordPress) stores that struggle with 100 concurrent users, Next.js handles thousands effortlessly. Plus, you get global edge delivery, automatic image optimization, and seamless checkout experiences. E-commerce starts at £4,000. Contact us for <a href='/contact'>a quote</a>.",
    category: "E-commerce",
    keywords: ["ecommerce", "online store", "shopify", "nextjs commerce"]
  },
  {
    id: "ecom-002",
    question: "Next.js vs Shopify: which is better for e-commerce?",
    answer: "Shopify = great for store management, mediocre for frontend speed and SEO. Next.js + Shopify headless = best of both. You keep Shopify's admin, inventory, payments—but the storefront is Next.js (fast, customizable, SEO-friendly). We build this hybrid. Pure Shopify is fine for starting out; headless scales when you need performance and custom experience. Southport retailers selling online benefit from the speed for both UX and rankings.",
    category: "E-commerce",
    keywords: ["shopify", "vs nextjs", "headless", "comparison"]
  },
  {
    id: "ecom-003",
    question: "Can you migrate my WooCommerce store to Next.js?",
    answer: "Yes. We migrate WooCommerce/WordPress stores to Next.js + headless commerce. Products, customers, orders transfer. We set up new checkout (Stripe, Shopify) and preserve URLs with 301 redirects. The result: 5x faster store, better SEO, no WordPress maintenance. E-commerce migrations take 4-6 weeks depending on product count. We've done multiple—clients report higher conversion and traffic post-migration. Get a <a href='/contact'>migration quote</a>.",
    category: "E-commerce",
    keywords: ["woocommerce", "migration", "wordpress", "transfer"]
  },
  {
    id: "ecom-004",
    question: "How does e-commerce SEO work with Next.js?",
    answer: "Product pages get unique meta, schema (Product markup), fast load. Category pages get proper structure. Clean URLs (/products/item-name). Next.js handles it all natively—no clunky WooCommerce SEO plugins. Result: product pages rank for long-tail keywords, category pages for broader terms. E-commerce SEO is technical + content; we nail both. Faster product pages = better rankings = more organic sales. It's a core part of our e-commerce builds.",
    category: "E-commerce",
    keywords: ["ecommerce seo", "product pages", "rankings", "nextjs"]
  },
  {
    id: "ecom-005",
    question: "Can you integrate my existing payment gateway?",
    answer: "We integrate Stripe, PayPal, Shopify Payments, and others. If you have an existing merchant account, we can often connect it. Payment integration is part of our e-commerce scope. Security (PCI compliance) handled by the payment provider—we build the frontend. Checkout experience matters for conversion; we optimize it. Tell us your payment preferences and we'll make it work.",
    category: "E-commerce",
    keywords: ["payment", "stripe", "paypal", "checkout"]
  },
  {
    id: "ecom-006",
    question: "How do you handle product management for e-commerce?",
    answer: "Depends on setup. Shopify backend: you use Shopify admin—add products, inventory, variants. Sanity/Contentful: we build a product CMS. Custom: we can integrate with your existing system. You need an easy way to add products—we ensure that. No coding required for product updates. Inventory, variants, images—all manageable through your chosen backend. We train you on the system.",
    category: "E-commerce",
    keywords: ["products", "inventory", "cms", "management"]
  },
  {
    id: "ecom-007",
    question: "Can Next.js e-commerce handle high traffic?",
    answer: "Yes. Next.js + Vercel scales automatically. We've built stores that handled Black Friday without a hiccup. WooCommerce often crashes at 100+ concurrent users; Next.js handles thousands. Edge delivery means global customers get fast loads. This matters for seasonal businesses or flash sales. Your store won't go down when you need it most. Scalability is built in.",
    category: "E-commerce",
    keywords: ["traffic", "black friday", "scalability", "performance"]
  },
  {
    id: "ecom-008",
    question: "What about abandoned cart recovery?",
    answer: "We integrate with tools like Klaviyo, Drip, or Shopify's built-in recovery. Abandoned cart emails can recover 10-15% of lost sales. Technical setup: we capture the cart data, the email tool sends the sequence. It's a standard e-commerce feature we implement. Recovery = revenue you'd otherwise lose. We factor it into e-commerce projects when it makes sense for your volume.",
    category: "E-commerce",
    keywords: ["abandoned cart", "recovery", "email", "conversion"]
  },
  {
    id: "ecom-009",
    question: "Do you build B2B e-commerce (wholesale, trade accounts)?",
    answer: "Yes. B2B e-commerce adds complexity: pricing tiers, account portals, quote requests, minimum orders. We've built B2B storefronts with these features. Next.js handles the custom logic; we integrate with your backend (ERP, inventory). It's a bigger project than B2C—quoted based on requirements. Southport businesses selling to trade can have the same performance advantages. Get in touch with your B2B needs.",
    category: "E-commerce",
    keywords: ["b2b", "wholesale", "trade", "accounts"]
  },
  {
    id: "ecom-010",
    question: "What's the typical timeline for e-commerce builds?",
    answer: "4-6 weeks for standard stores (50-200 products). Larger catalogues or custom features: 8-12 weeks. Includes: design, product import, payment setup, SEO, testing. We don't rush—e-commerce has more moving parts than brochure sites. But we're efficient. You'll have a staging site to review before launch. Timeline confirmed in quote. Rush projects possible for premium.",
    category: "E-commerce",
    keywords: ["timeline", "how long", "ecommerce", "build time"]
  },

  // Maintenance & Support (10 questions)
  {
    id: "maint-001",
    question: "Do Next.js websites need maintenance?",
    answer: "Minimal! Unlike WordPress that requires weekly plugin updates, security patches, and troubleshooting, Next.js sites rarely break. Vercel handles hosting updates automatically. Content updates can be done through your headless CMS without touching code. We offer optional £50/month support for businesses that want priority help with content updates or feature additions, but it's not required. Most clients go months without needing our help. This is the opposite of WordPress's £150-300/month mandatory maintenance.",
    category: "Maintenance & Support",
    keywords: ["maintenance", "support", "updates", "upkeep"]
  },
  {
    id: "maint-002",
    question: "What does your £50/month support include?",
    answer: "Priority response (24-48 hours), up to 2 hours of support monthly for: content updates, minor design tweaks, bug fixes, questions. We don't do major new features in that time—those are quoted separately. It's peace-of-mind support for clients who want a lifeline. Month-to-month, cancel anytime. Most clients use it for the first few months post-launch, then cancel when confident. Optional, not required.",
    category: "Maintenance & Support",
    keywords: ["support package", "monthly", "what's included", "50"]
  },
  {
    id: "maint-003",
    question: "What if my site goes down?",
    answer: "Rare with Next.js + Vercel—uptime is 99.99%. If it does: Vercel has status page and incident response. We're notified of issues. For bugs we introduced: we fix free during warranty (30 days) or if you have support. For hosting issues: Vercel's responsibility. We've had zero downtime incidents with our clients. The architecture is stable. But we're here if something happens.",
    category: "Maintenance & Support",
    keywords: ["downtime", "broken", "down", "urgent"]
  },
  {
    id: "maint-004",
    question: "Can you update my site content for me?",
    answer: "Yes—through our support package or as one-off tasks. We can add blog posts, update pages, change images. You supply content; we implement. Or we can write it (extra cost). Many clients do it themselves via the CMS after training; others prefer we handle it. We're flexible. Support package includes 2 hours/month which often covers routine updates. Ad-hoc: £50/hour.",
    category: "Maintenance & Support",
    keywords: ["content updates", "edit", "changes", "help"]
  },
  {
    id: "maint-005",
    question: "How do I get support after launch?",
    answer: "Email us. We respond within 24-48 hours (faster for support package clients). Include: what's wrong, what you've tried, any error messages. We troubleshoot and fix. For urgent (site down): mark it urgent, we prioritize. We don't disappear after launch—we're a small team, you're not a number. Support package gets priority; everyone gets help. Fair and responsive.",
    category: "Maintenance & Support",
    keywords: ["support", "help", "after launch", "contact"]
  },
  {
    id: "maint-006",
    question: "Do you offer hosting and domain management?",
    answer: "Hosting: we set up Vercel (included in build). You get login or we manage it. Domain: we configure DNS at launch. You keep domain registration in your name (or we can manage). We don't hold your domain hostage—you own it. Ongoing: Vercel handles hosting; domain renewal is your responsibility (annual, £10-15). We can remind you. Simple. You own your assets.",
    category: "Maintenance & Support",
    keywords: ["hosting", "domain", "management", "dns"]
  },
  {
    id: "maint-007",
    question: "What's the warranty on a new website?",
    answer: "30 days post-launch we fix any bugs free. Doesn't cover: new feature requests, content changes (those are support or quoted), issues from your edits. If something we built breaks, we fix it. After 30 days: support package or quoted fixes. We've rarely had warranty issues—our builds are solid. But the warranty gives you confidence. We stand behind our work.",
    category: "Maintenance & Support",
    keywords: ["warranty", "guarantee", "bugs", "fix"]
  },
  {
    id: "maint-008",
    question: "Can you add new features to my site later?",
    answer: "Yes. New page, new integration, new functionality—we quote and build. Next.js is extensible. Sometimes it's a quick add (£50-150); sometimes it's a project (£500+). We're happy to grow with you. Support package clients get 2 hours/month which can cover small additions. Bigger features: separate quote. We've added booking systems, new pages, integrations to launched sites. Your site evolves with your business.",
    category: "Maintenance & Support",
    keywords: ["new features", "add", "expand", "later"]
  },
  {
    id: "maint-009",
    question: "What if I need to change developers?",
    answer: "You own the site. Code, content, design—yours. We deliver everything at launch. Another developer can take over. We use standard tech (Next.js, React)—no proprietary lock-in. Documentation included. Handover is clean. We've had clients leave; we've had clients return. No hard feelings. You're never trapped. We build transferable assets.",
    category: "Maintenance & Support",
    keywords: ["change developer", "handover", "leave", "transfer"]
  },
  {
    id: "maint-010",
    question: "Do you provide backup and security?",
    answer: "Vercel has automatic backups and DDoS protection. Next.js sites have minimal attack surface—no database to hack, no admin panel to brute-force. Security is architectural. For content: your CMS (Sanity/Contentful) has version history. We don't run separate backup services—the stack is inherently resilient. Worst case: we redeploy from our repo. Your content is in the CMS. We've never lost client data.",
    category: "Maintenance & Support",
    keywords: ["backup", "security", "protection", "safe"]
  },

  // Analytics & Reporting (10 questions)
  {
    id: "analytics-001",
    question: "What analytics do you provide?",
    answer: "We integrate Google Analytics 4 and Google Search Console to track: visitor numbers, traffic sources, popular pages, conversion rates, search rankings, keyword performance, and Core Web Vitals. We provide monthly reports showing your SEO progress with actionable insights—not vanity metrics. For local businesses, we track Map Pack rankings, 'near me' search visibility, and call/form submissions. You get transparent data showing exactly what's working. No jargon, no fluff—just the numbers that matter for your business decisions.",
    category: "Analytics & Reporting",
    keywords: ["analytics", "reporting", "tracking", "metrics", "google analytics"]
  },
  {
    id: "analytics-002",
    question: "How often do you send reports?",
    answer: "SEO clients: monthly reports. Website clients: we set up analytics at launch; ongoing reporting is optional (included in SEO packages). Reports cover: traffic, rankings, conversions, recommendations. We don't drown you in data—we highlight what matters. Actionable insights, not dashboards you'll never check. Frequency adjustable—some clients want weekly during campaigns; most monthly is enough.",
    category: "Analytics & Reporting",
    keywords: ["reports", "frequency", "monthly", "updates"]
  },
  {
    id: "analytics-003",
    question: "Do I get access to Google Analytics and Search Console?",
    answer: "Yes. We set them up with your Google account—you own the data. We get access for setup and reporting, but it's your property. You can check anytime. We'll show you the key reports during training. No black box—full transparency. Some clients never look; others dig in. Your choice. The data is yours.",
    category: "Analytics & Reporting",
    keywords: ["access", "google analytics", "search console", "login"]
  },
  {
    id: "analytics-004",
    question: "What conversions do you track?",
    answer: "Depends on your goals. Standard: form submissions, click-to-call, email clicks. E-commerce: purchases, add-to-cart. We set up event tracking for what matters to you. A plumber cares about contact form fills and calls. A restaurant cares about reservations. We configure GA4 accordingly. Conversion tracking = knowing what's working. We don't track vanity metrics—we track actions that drive revenue.",
    category: "Analytics & Reporting",
    keywords: ["conversions", "tracking", "form", "calls"]
  },
  {
    id: "analytics-005",
    question: "How do you track phone calls from my website?",
    answer: "Click-to-call: we track when visitors tap your phone number. Call tracking numbers: for higher accuracy, we can implement dynamic numbers (different number per traffic source) so you know which channel drove the call. Setup depends on your provider. Basic: GA4 tracks clicks on tel: links. Advanced: CallRail or similar for full attribution. We recommend based on call volume and budget.",
    category: "Analytics & Reporting",
    keywords: ["phone", "calls", "tracking", "attribution"]
  },
  {
    id: "analytics-006",
    question: "What's in a typical monthly SEO report?",
    answer: "Traffic (organic vs other sources), keyword rankings (your target terms), Map Pack position (for local clients), conversions (calls, forms), recommendations (what to do next). We focus on trends—up or down, why. Not just numbers—insights. 'Traffic up 20% from last month; main driver: new blog post ranking for X.' Actionable. You should know what's working and what to try next.",
    category: "Analytics & Reporting",
    keywords: ["seo report", "monthly", "what's in", "contents"]
  },
  {
    id: "analytics-007",
    question: "Can you set up goals and funnels?",
    answer: "Yes. We configure GA4 goals: form submission = conversion, specific page visit = conversion. Funnels: track the path (homepage → service page → contact form). Helps identify drop-off points. E-commerce: full purchase funnel. We set this up at launch or during SEO onboarding. Goals define success—we align tracking with your business objectives. Data that drives decisions.",
    category: "Analytics & Reporting",
    keywords: ["goals", "funnels", "conversion tracking", "setup"]
  },
  {
    id: "analytics-008",
    question: "How do you measure SEO success?",
    answer: "Primary: organic traffic and conversions. Secondary: keyword rankings, Map Pack position, domain authority. We care about leads and revenue, not vanity rankings. Ranking #1 for an irrelevant keyword = pointless. We track keywords that convert. Success = more enquiries, more calls, more sales from organic search. We'll show you the correlation between our work and your bottom line. See our <a href='/case-studies'>case studies</a> for examples.",
    category: "Analytics & Reporting",
    keywords: ["seo success", "measure", "results", "kpis"]
  },
  {
    id: "analytics-009",
    question: "Do you use heat maps or session recording?",
    answer: "We can integrate Hotjar, Microsoft Clarity, or similar. Shows where users click, how they scroll, session replays. Useful for conversion optimization—see where people drop off. Not standard (adds cost) but available. For most clients, GA4 + Search Console is sufficient. Heat maps help when you're optimizing an underperforming page. Ask if you want it—we'll recommend and implement.",
    category: "Analytics & Reporting",
    keywords: ["heat map", "session recording", "user behavior", "hotjar"]
  },
  {
    id: "analytics-010",
    question: "Can you connect analytics to my CRM?",
    answer: "Depends on your CRM. HubSpot: native GA4 integration. Salesforce: possible via Zapier or custom. We've connected forms to CRMs so leads flow in with source attribution. The setup varies—tell us your CRM and we'll check compatibility. Lead source data (organic, paid, direct) helps you understand which channels convert. We make data flow where it's useful.",
    category: "Analytics & Reporting",
    keywords: ["crm", "hubspot", "integration", "connection"]
  }
];
