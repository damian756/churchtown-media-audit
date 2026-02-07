export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
  }
  
  export const posts: BlogPost[] = [
    {
      slug: "invisible-on-lord-street",
      title: "Invisible on Lord Street: Why 'Near Me' Searches are the New Shop Window",
      date: "Jan 29, 2026",
      category: "Local SEO",
      excerpt: "If you aren't in the Google Map Pack, your Lord Street shop front might as well be bricked up. Here is the data on local footfall.",
      content: `
        <p class="lead"><strong>The Southport high street has changed. Footfall isn't just physical anymore; it's digital.</strong></p>
        <p>If a tourist stands outside The Atkinson and searches for "coffee near me," and your cafe doesn't appear in the top 3 map results, you have lost that customer instantly. You didn't lose them to a better cafe; you lost them to a better algorithm.</p>
        <h2>The "Zero-Click" Reality</h2>
        <p>65% of Google searches end without a click. Why? Because Google Maps gives the answer directly. If your Google Business Profile (GBP) isn't optimized with correct categories, photos, and reviews, you are invisible.</p>
        <h3>How to Fix It Today</h3>
        <ul>
          <li><strong>Claim your profile:</strong> Ensure you own your GBP.</li>
          <li><strong>Primary Category:</strong> Be specific. Don't just be a "Restaurant"; be an "Italian Restaurant".</li>
          <li><strong>Citations:</strong> Ensure your Name, Address, and Phone Number (NAP) are identical across Yell, Facebook, and your website.</li>
        </ul>
      `
    },
    {
      slug: "mlec-effect-southport",
      title: "The MLEC Effect: Is Your Business Ready for 500,000 New Visitors?",
      date: "Jan 29, 2026",
      category: "Market Analysis",
      excerpt: "The Marine Lake Events Centre is coming. This £73m investment will bring a tidal wave of corporate visitors. Is your SEO ready to capture them?",
      content: `
        <p class="lead"><strong>The £73m Marine Lake Events Centre (MLEC) is the biggest economic shift Southport has seen in decades.</strong></p>
        <p>It is projected to bring 500,000 new visitors annually. These aren't just day-trippers; these are conference delegates with corporate expense accounts.</p>
        <h2>Who Wins?</h2>
        <p>The businesses that rank for <em>"business lunch southport"</em>, <em>"hotels near MLEC"</em>, and <em>"corporate event catering"</em> will see a revenue explosion.</p>
        <p>The businesses that rely on "word of mouth" will miss 100% of this new traffic, because these visitors don't know the locals. They only know what Google tells them.</p>
      `
    },
    {
      slug: "eating-our-own-dog-food",
      title: "Eating Our Own Dog Food: Why We Ignored Google's Advice",
      date: "Jan 29, 2026",
      category: "Agency Life",
      excerpt: "We migrated our own agency site to Next.js because we couldn't sell performance if we didn't live it. Radical transparency in action.",
      content: `
        <p class="lead"><strong>In the tech world, "eating your own dog food" means using the products you sell.</strong></p>
        <p>Most SEO agencies sell "fast websites" but run their own business on a bloated £5 hosting plan. We refused to do that.</p>
        <h2>The Ferrari Standard</h2>
        <p>We rebuilt Churchtown Media on <strong>Next.js 14</strong>. We aim for 100/100 Lighthouse scores. Why? Because our website is our ultimate sales brochure.</p>
        <p>If we can't rank our own site for "SEO Southport" (which we do), how can we promise to rank yours?</p>
      `
    },
    {
      slug: "why-new-seo-company-best-friend",
      title: "Why a 'New' Local SEO Company is Your Business's Best Friend",
      date: "Jan 29, 2026",
      category: "Strategy",
      excerpt: "Old agencies get comfortable. They rely on tactics from 2015. Here is why agility and a modern tech stack beat 'experience' every time.",
      content: `
        <p class="lead"><strong>Experience is valuable, but in SEO, agility is everything.</strong></p>
        <p>Many established agencies are still selling monthly retainer packages that consist of "blogging" and "link building" on outdated WordPress architectures.</p>
        <h2>The Legacy Trap</h2>
        <p>Older agencies often have "Vendor Lock-in." They are stuck using tools and methods they learned 10 years ago. A new, technical agency (like us) starts with a clean slate.</p>
        <p>We build on <strong>Headless Architecture</strong>. We use AI for data analysis, not just for writing cheap copy. We don't have overheads or fancy offices to pay for—we invest 100% of your budget into performance.</p>
      `
    },
    {
      slug: "seo-recovery-alotek-shelters",
      title: "Case Study: The SEO Recovery of Alotek Shelters",
      date: "Feb 02, 2026",
      category: "Case Study",
      excerpt: "How we took a manufacturing firm from zero visibility to #1 for 'Bus Shelters' in 30 days using semantic HTML and technical fixes.",
      content: `
        <p class="lead"><strong>Alotek Shelters had a great product but a broken website.</strong></p>
        <p>They were relying entirely on paid ads. When they turned the ads off, the phone stopped ringing. That is a broken business model.</p>
        <h2>The Fix</h2>
        <p>We didn't just write blogs. We fixed the <strong>Technical Infrastructure</strong>.</p>
        <ul>
          <li><strong>Speed:</strong> Reduced load times to 1.2s.</li>
          <li><strong>Structure:</strong> Implemented Schema markup for "Industrial Products".</li>
          <li><strong>Result:</strong> +85% organic traffic in month one.</li>
        </ul>
        <p><a href="/case-studies/alotek-shelters">Read the full deep-dive Case Study here.</a></p>
      `
    }
  ];