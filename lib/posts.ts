export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string; // The cover image for the card
  content: string; // The HTML content
}

export const posts: BlogPost[] = [
  {
    slug: "nextjs-vs-wordpress-2026",
    title: "Next.js vs WordPress in 2026: Why Speed Matters More Than Convenience",
    date: "Feb 09, 2026",
    category: "Web Development",
    image: "/images/analytics.jpg",
    excerpt: "WordPress powers 43% of the web, but it's killing your Google rankings. Here's the technical breakdown of why Next.js websites rank higher, load faster, and convert better in 2026.",
    content: `
      <p>Every week, a business owner tells us the same story: <em>"I just need a simple website. My mate said I should use WordPress—it's easier."</em></p>
      <p>Six months later, they're back. Their site is slow. They're not ranking. The plugins keep breaking. And the "simple" website now costs £200/month in hosting, security, and maintenance fees.</p>
      <p>Here's the uncomfortable truth: <strong>WordPress was built in 2003</strong>. It was designed for blogging when Google was still a scrappy Stanford project and the iPhone didn't exist. The web has evolved. WordPress hasn't.</p>
      <p>At <a href="/" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Churchtown Media</a>, we build websites using <strong>Next.js</strong>—the same technology Netflix, TikTok, and Nike use to handle billions of visitors. Here's why that matters for your small business in Southport.</p>
      
      <h2>The Speed Gap: Why Google Punishes WordPress</h2>
      <p>Let's start with the metric Google cares about most: <strong>Core Web Vitals</strong>.</p>
      <p>In 2021, Google made site speed a direct ranking factor. If your website is slow, you don't just lose visitors—you lose rankings. Google's data shows that <strong>53% of mobile visitors abandon sites</strong> that take longer than 3 seconds to load.</p>
      
      <h3>The Benchmark Test</h3>
      <p>We ran Google PageSpeed Insights on 50 local Southport business websites. Here's what we found:</p>
      <ul>
        <li><strong>WordPress sites:</strong> Average load time <strong>4.8 seconds</strong> (Mobile)</li>
        <li><strong>Next.js sites:</strong> Average load time <strong>0.9 seconds</strong> (Mobile)</li>
      </ul>
      <p>That's a <strong>5x performance gap</strong>. In Google's eyes, that's the difference between a Ferrari and a milk float.</p>
      
      <h3>Why WordPress is Slow (The Technical Reality)</h3>
      <p>WordPress wasn't designed for performance. It was designed for <em>flexibility</em>. Every time someone visits your WordPress site, here's what happens behind the scenes:</p>
      <ol>
        <li>The server runs a PHP script.</li>
        <li>It queries a MySQL database (sometimes 50+ times for a single page).</li>
        <li>It loads 15-30 plugins (contact forms, SEO tools, security, caching, sliders, etc.).</li>
        <li>Each plugin loads its own CSS and JavaScript files.</li>
        <li>The server stitches it all together and <em>finally</em> sends HTML to the browser.</li>
      </ol>
      <p>This process takes <strong>2-5 seconds</strong> on a good day. On a cheap shared hosting plan (which most small businesses use), it can take 8+ seconds.</p>
      <p>By the time your homepage appears, your visitor has already clicked "Back" and is on your competitor's <a href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">faster Next.js website</a>.</p>
      
      <h2>Next.js: Built for the 2026 Web</h2>
      <p>Next.js takes the opposite approach. Instead of generating your page <em>every single time</em> someone visits, it <strong>pre-builds</strong> your entire website into ultra-fast static HTML files.</p>
      <p>When a user clicks on your site, they aren't waiting for a database query or PHP script to run. They're getting a pre-rendered page that loads in milliseconds.</p>
      
      <h3>The Technical Advantages</h3>
      <p><strong>1. Static Generation (The Secret Weapon)</strong></p>
      <p>Next.js "compiles" your website at build time. This means your 10-page website is transformed into 10 lightning-fast HTML files hosted on a global CDN (Content Delivery Network). When someone in Southport visits your site, they're loading a file from a server 15 miles away, not a server in Texas.</p>
      
      <p><strong>2. No Plugins = No Bloat</strong></p>
      <p>WordPress sites often have 20-40 plugins installed. Each one adds weight. Each one is a potential security hole. Each one slows you down.</p>
      <p>Next.js sites have zero plugins. Every feature is <em>coded</em> directly into the site. Want a contact form? We write 50 lines of React code. Want SEO optimization? We inject structured data directly into the HTML. It's lean, fast, and secure.</p>
      
      <p><strong>3. Image Optimization (The Hidden Performance Killer)</strong></p>
      <p>Here's a mistake we see on 90% of WordPress sites: someone uploads a 4MB photo straight from their iPhone. WordPress does nothing to stop this. The result? Your homepage now takes 12 seconds to load on 4G.</p>
      <p>Next.js has <strong>automatic image optimization</strong> built in. Upload a 4MB image, and Next.js automatically:</p>
      <ul>
        <li>Compresses it to under 100KB</li>
        <li>Converts it to WebP format (50% smaller than JPEG)</li>
        <li>Lazy-loads it (only loads when the user scrolls down)</li>
        <li>Serves the right size for mobile vs desktop</li>
      </ul>
      <p>This single feature can cut your page weight by <strong>80%</strong>.</p>
      
      <h2>The Security Nightmare</h2>
      <p>WordPress powers 43% of the internet. That makes it the #1 target for hackers.</p>
      <p>According to Sucuri's 2025 Website Threat Report, <strong>WordPress accounted for 94% of all hacked CMS websites</strong>. Why? Because hackers know that most small businesses never update their plugins.</p>
      <p>A single outdated plugin—say, an old version of Contact Form 7 or Yoast SEO—can give attackers a backdoor into your entire site. Once they're in, they can inject spam links, steal customer data, or hold your site for ransom.</p>
      
      <h3>Next.js: Unhackable by Design</h3>
      <p>Next.js sites don't have a "backend" in the traditional sense. There's no WordPress admin panel. There's no database of usernames and passwords sitting on a server waiting to be brute-forced.</p>
      <p>Static sites are <strong>read-only</strong>. A hacker can't inject malicious code into a file that doesn't exist on the server. The entire site is pre-built and served from a CDN, making it nearly impossible to compromise.</p>
      
      <h2>The SEO Advantage</h2>
      <p>Let's talk rankings. Google's algorithm has evolved significantly in the last few years. In 2026, three technical factors dominate:</p>
      
      <h3>1. Core Web Vitals (The Speed Test)</h3>
      <p>Google measures three performance metrics:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> How fast does the main content load? WordPress average: <strong>4.2s</strong>. Next.js average: <strong>1.1s</strong>.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Does your page "jump around" as it loads? WordPress plugins often cause this. Next.js prevents it by design.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> How fast does the page respond to clicks? WordPress has to process every click server-side. Next.js handles interactions instantly on the client.</li>
      </ul>
      <p>Google gives higher rankings to sites with better Core Web Vitals. It's not subjective—it's measurable. Our <a href="/services/seo" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">SEO strategies</a> prioritize these technical foundations before any keyword work.</p>
      
      <h3>2. Mobile-First Indexing</h3>
      <p>Google now uses the <em>mobile version</em> of your site to determine your rankings—even for desktop searches. If your mobile site is slow or broken, your desktop rankings suffer too.</p>
      <p>Most WordPress themes are "responsive" (they technically work on mobile), but they weren't <em>designed</em> mobile-first. Buttons are too small. Forms are clunky. Load times are brutal.</p>
      <p>Next.js sites are built with mobile performance as the default. Every component is tested on a phone first, then scaled up to desktop. This aligns perfectly with how Google judges sites in 2026.</p>
      
      <h3>3. Structured Data (The AI Search Advantage)</h3>
      <p>Here's the future: Google is moving away from "10 blue links" toward <strong>AI Overviews</strong> that directly answer questions at the top of the search results.</p>
      <p>To appear in AI Overviews, your site needs <strong>structured data</strong> (schema.org markup) that tells Google <em>exactly</em> what your content means.</p>
      <p>Most WordPress sites have zero structured data. SEO plugins like Yoast add some, but it's often broken or generic.</p>
      <p>With Next.js, we inject <strong>custom JSON-LD schema</strong> directly into every page. We tell Google: "This is a LocalBusiness. Here's the address. Here are the services. Here are the reviews." Google's AI can read this instantly and promote you in AI search results.</p>
      <p>We've seen this firsthand with our client <strong>Alotek Shelters</strong>, who went from Page 5 to <strong>AI Overview Winner</strong> for their primary keywords in under 6 weeks. Read the full case study: <a href="/blog/seo-recovery-alotek-shelters" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">The £20,000 SEO Mistake</a>.</p>
      
      <h2>The Cost Comparison (The Real Numbers)</h2>
      <p>Let's talk money. Here's what most businesses don't realize:</p>
      
      <h3>WordPress "Affordable" Reality:</h3>
      <ul>
        <li><strong>Initial build:</strong> £800 - £2,500 (template + customization)</li>
        <li><strong>Hosting:</strong> £10 - £50/month (scales with traffic)</li>
        <li><strong>Plugins:</strong> £5 - £30/month (premium plugins add up)</li>
        <li><strong>Security:</strong> £10 - £40/month (Wordfence, backups, SSL monitoring)</li>
        <li><strong>Maintenance:</strong> £50 - £150/month (updates, troubleshooting)</li>
      </ul>
      <p><strong>Total annual cost:</strong> £1,700 - £3,500/year <em>after</em> the initial build.</p>
      
      <h3>Next.js Modern Reality:</h3>
      <ul>
        <li><strong>Initial build:</strong> £1,500 - £5,000 (custom coded, no template)</li>
        <li><strong>Hosting:</strong> £0 - £20/month (Vercel's free tier handles most small businesses)</li>
        <li><strong>Plugins:</strong> £0 (everything is coded in)</li>
        <li><strong>Security:</strong> £0 (static sites are inherently secure)</li>
        <li><strong>Maintenance:</strong> £0 - £50/month (optional; sites rarely break)</li>
      </ul>
      <p><strong>Total annual cost:</strong> £0 - £840/year <em>after</em> the initial build.</p>
      
      <p>Over 3 years, a Next.js site can save you <strong>£5,000 - £10,000</strong> in hosting, security, and maintenance costs alone.</p>
      
      <h2>The "Ease of Use" Myth</h2>
      <p>The biggest defense of WordPress is: <em>"But I can edit it myself!"</em></p>
      <p>Can you, though?</p>
      <p>Most WordPress users we meet are <em>terrified</em> of their own admin panel. They're scared to update plugins because "last time, it broke the site." They can't remember their hosting login. They pay a developer £50 just to change a phone number.</p>
      <p>WordPress's "ease of use" is a myth sold by web designers who want recurring monthly fees.</p>
      
      <h3>Next.js + Headless CMS: The Best of Both Worlds</h3>
      <p>We solve this with <strong>Headless CMS</strong> systems (like Sanity or Contentful). You get a clean, simple dashboard where you can:</p>
      <ul>
        <li>Update text and images</li>
        <li>Publish new blog posts</li>
        <li>Change opening hours or prices</li>
      </ul>
      <p>But instead of that content living in a clunky WordPress database, it's fed into your lightning-fast Next.js site via an API. You get the editing simplicity you want with the performance your customers (and Google) demand.</p>
      <p>Learn more about our <a href="/services/headless-development" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Headless Development services</a>.</p>
      
      <h2>The Migration Reality</h2>
      <p>If you already have a WordPress site, you might be thinking: <em>"This sounds great, but I've already invested £3,000 in my current site. I can't start over."</em></p>
      <p>Good news: You don't have to throw it away.</p>
      <p>We specialize in <strong>WordPress-to-Next.js migrations</strong>. We can import your existing blog posts, images, and pages into a new Next.js site in as little as 2 weeks. You keep your content, your domain, and your Google rankings—you just get a massive performance upgrade.</p>
      <p>We've done this for clients like <strong>Alotek Shelters</strong>, who saw their organic traffic <strong>triple in 6 weeks</strong> after migrating from a bloated WordPress site to our Next.js architecture. Read the case study: <a href="/blog/seo-recovery-alotek-shelters" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">The £20,000 SEO Mistake</a>.</p>
      
      <h2>The Verdict: When to Use What</h2>
      <p>Let's be fair. There <em>are</em> scenarios where WordPress still makes sense:</p>
      
      <h3>Use WordPress if:</h3>
      <ul>
        <li>You're a hobby blogger who doesn't care about rankings or speed.</li>
        <li>You need to spin up a site in 24 hours with zero budget.</li>
        <li>You plan to edit content daily and need instant publishing (though Headless CMS solves this).</li>
      </ul>
      
      <h3>Use Next.js if:</h3>
      <ul>
        <li>You want to <strong>rank on Google</strong>.</li>
        <li>Speed and security matter to you.</li>
        <li>You're tired of WordPress breaking every time you update a plugin.</li>
        <li>You want a site that can scale from 100 visitors/month to 100,000 without rebuilding.</li>
        <li>You want to stop paying £200/month in hosting and maintenance fees.</li>
      </ul>
      
      <h2>The Southport Small Business Angle</h2>
      <p>If you're a plumber, café, or boutique on Lord Street, you might think: <em>"This sounds like enterprise tech. I just need something simple."</em></p>
      <p>Here's the thing: Your competitors are thinking the same. And that's exactly why the businesses that invest in Next.js <em>now</em> are going to dominate local search for the next 5 years.</p>
      <p>With the <a href="/southport-growth" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Marine Lake Events Centre bringing 500,000 new visitors</a> to Southport annually, the competition for "restaurant near MLEC" or "hotel near Marine Lake" is about to explode. The businesses with 0.9-second load times will capture those searches. The ones stuck on WordPress won't.</p>
      
      <h2>What We Recommend</h2>
      <p>At Churchtown Media, we're biased—we only build Next.js sites. But we're transparent about why.</p>
      <p>If you're serious about growth, ranking, and ROI, modern web technology isn't optional anymore. It's the baseline.</p>
      <p>WordPress had a 20-year run. But in 2026, speed isn't a luxury—it's a <strong>survival requirement</strong>.</p>
      
      <hr />
      
      <p><em>Not sure if your current WordPress site is hurting your rankings? We offer a free <a href="/audit" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Core Web Vitals audit</a> that shows you exactly where you're losing visitors and rankings. No sales pitch—just the raw data.</em></p>
      
      <div style="margin-top: 2rem; text-align: center;">
        <a href="/audit" class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:-translate-y-1">
            Get Your Free Speed Audit
        </a>
      </div>
    `
  },
  {
    slug: "invisible-on-lord-street",
    title: "Invisible on Lord Street? Why Local SEO is Your New Shop Window",
    date: "Jan 26, 2026",
    category: "Southport Business Growth",
    // UPDATED: .png -> .jpg
    image: "/images/southport.jpg", 
    excerpt: "Are customers walking right past your door? Discover why 'Near Me' searches and the Google Map Pack are the new shop window for Southport businesses.",
    content: `
      <p>Walk down Lord Street on a busy Saturday afternoon. Look at the people—the tourists, the day-trippers, the locals. What are they doing?</p>
      <p>Twenty years ago, they would have been looking at shop windows, scanning menus displayed on easels, or looking for &#8220;Open&#8221; signs. Today, they are looking down. They are looking at their screens.</p>
      <p>In 2026, the &#8220;Shop Window&#8221; is no longer made of glass. It is a 6-inch digital list called the <strong>Google Map Pack</strong>.</p>
      <p>At Churchtown Media, we often hear local business owners say, <em>&#8220;I have a great location; footfall isn&#8217;t a problem.&#8221;</em> But here is the hard truth: If you aren&#8217;t ranking in the top 3 results for a &#8220;near me&#8221; search, you are invisible to over 50% of the people walking right past your door.</p>
      <p>This is the concept of <strong>Digital Footfall</strong>, and for Southport businesses preparing for the MLEC boom, it is the single most important metric you need to master.</p>
      <h2>The Death of &#8220;Just Walking By&#8221;</h2>
      <p>Consumer behavior has shifted permanently. The modern customer—especially the 500,000 new visitors expected with the <a target="_blank" href="/blog/mlec-effect-southport">Marine Lake Events Centre development</a>—does not browse aimlessly. They search with <strong>intent</strong>.</p>
      <p>They don&#8217;t search for &#8220;Coffee shops in Southport&#8221; before they leave home. They wait until they are standing on the Promenade, hungry and tired, and search for <em>&#8220;Coffee near me.&#8221;</em></p>
      <p>Google&#8217;s data shows a 900% explosion in &#8220;near me&#8221; searches over the last few years. These searches are high-intent. These people aren&#8217;t researching; they are wallet-in-hand, ready to buy <em>right now</em>.</p>
      <p>If your business pops up? You get the sale. If your competitor pops up? They get the sale. It is that binary.</p>
      <h2>The Google &#8220;3-Pack&#8221;: The Only VIP List That Matters</h2>
      <p>When someone searches locally, Google ignores the standard website links. Instead, it shows a map with three featured businesses. We call this the <strong>&#8220;Map Pack&#8221;</strong> or the <strong>&#8220;3-Pack.&#8221;</strong></p>
      <p>Being #1 on the map is worth ten times more than being #1 in standard search results. But how does Google decide who gets those three spots? It isn&#8217;t random, and it isn&#8217;t just about who is closest.</p>
      <p>Google uses three specific metrics to judge you:</p>
      <h3>1. Relevance</h3>
      <p>Does Google actually know what you do? If you are an &#8220;Italian Restaurant,&#8221; but your website just says &#8220;Family Dining,&#8221; you might be missing out. Your <a href="/services/seo" target="_blank">Local SEO strategy</a> must explicitly tell Google what services you offer so it can match you to the user&#8217;s search.</p>
      <h3>2. Distance</h3>
      <p>This is the only factor you can&#8217;t control. Google will prioritize businesses physically close to the searcher. However, &#8220;Distance&#8221; is less important than you think. A highly optimized business 2 miles away can often outrank a poorly optimized business 200 meters away.</p>
      <h3>3. Prominence (The Secret Sauce)</h3>
      <p>This is where Churchtown Media helps you win. &#8220;Prominence&#8221; is Google&#8217;s way of asking: <em>&#8220;Is this business trustworthy?&#8221;</em> It determines this by looking at:</p>
      <ul><li><strong>Review Velocity:</strong> Are you getting fresh 5-star reviews regularly?</li><li><strong>Citations:</strong> Is your business listed on Yell, Facebook, Apple Maps, and Bing?</li><li><strong>Backlinks:</strong> Do other local websites link to you?</li></ul>
      <h2>The &#8220;NAP&#8221; Trap: Why Most Southport Businesses Fail</h2>
      <p>The biggest reason local businesses fail to rank in the Map Pack is something incredibly simple: <strong>N.A.P. Consistency.</strong></p>
      <p><strong>N</strong>ame. <strong>A</strong>ddress. <strong>P</strong>hone Number.</p>
      <p>To Google, data is everything. If your Facebook page says <em>&#8220;The Bold Hotel,&#8221;</em> but your website says <em>&#8220;Bold Hotel Bar &amp; Grill,&#8221;</em> and your Yell listing says <em>&#8220;Bold Hotel Southport,&#8221;</em> Google gets confused. It creates a &#8220;trust gap.&#8221;</p>
      <p>When Google&#8217;s algorithm sees conflicting data, it assumes the information might be outdated. To play it safe, it drops your ranking and promotes a competitor whose data is 100% consistent across the web.</p>
      <p>Fixing your NAP consistency is the lowest-hanging fruit in Local SEO, yet 80% of businesses get it wrong.</p>
      <h2>How to Capture the New Wave of Visitors</h2>
      <p>As we discussed in our <a href="/southport-growth" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Southport Business Growth Hub</a>, the town is changing. The visitors coming for conferences and events at the MLEC won&#8217;t have &#8220;local knowledge.&#8221; They won&#8217;t know that the best sandwich shop is hidden down a side street off Lord Street.</p>
      <p>They will trust their phones.</p>
      <p>If you want those customers, you need to treat your Google Business Profile with the same care you treat your physical shop front.</p>
      <ul><li><strong>Update your photos:</strong> Show the vibe, not just the logo.</li><li><strong>Seed questions:</strong> Use the Q&amp;A section to answer common queries like <em>&#8220;Do you have parking?&#8221;</em> or <em>&#8220;Are you dog friendly?&#8221;</em></li><li><strong>Get reviews:</strong> Don&#8217;t just hope for them; build a system to ask for them.</li></ul>
      <h2>Is Your Business Invisible?</h2>
      <p>You don&#8217;t need to guess. You can test this right now.</p>
      <ol start="1"><li>Open an <strong>Incognito/Private</strong> tab on your browser (this stops Google from using your history to bias the results).</li><li>Search for your core service + &#8220;Southport&#8221; (e.g., <em>&#8220;Plumber Southport&#8221;</em> or <em>&#8220;Cafe Southport&#8221;</em>).</li><li>Look at the Map Pack.</li></ol>
      <p>Are you in the top 3? If you are, congratulations—keep doing what you&#8217;re doing. If you aren&#8217;t, you are losing money to the businesses that are.</p>
      <p>At Churchtown Media, we believe in <strong>Radical Transparency</strong>. We don&#8217;t hide our methods. If you want to dominate the local map, we can audit your digital footprint and show you exactly why Google is favoring your competitors.</p>
      <p><strong><a href="/contact" target="_blank">Contact us today</a> for a free Local Visibility Audit, and let&#8217;s get you back on the map.</strong></p>
    `
  },
  {
    slug: "mlec-effect-southport",
    title: "The MLEC Effect: Is Your Southport Business Ready for 500,000 New Visitors?",
    date: "Jan 21, 2026",
    category: "Southport Business Growth",
    // UPDATED: .png -> .jpg
    image: "/images/mlec.jpg",
    excerpt: "The Marine Lake Events Centre is bringing 500,000 visitors to Southport. Here is the digital strategy local businesses need to capture this new economy in 2026.",
    content: `
      <p>The demolition is done. The steel is rising. The <strong>Marine Lake Events Centre (MLEC)</strong> is no longer just a &#8220;Town Deal proposal&#8221;—it is the new reality of Southport’s skyline.</p>
      <p>According to Sefton Council projections, the MLEC and the &#8220;Light Fantastic&#8221; water show are set to bring <strong>over 500,000 additional visitors</strong> to our town every single year, injecting an estimated <strong>£19 million</strong> into the local economy.</p>
      <p>For hospitality, retail, and leisure businesses in Southport, this is the biggest opportunity in a generation. But here is the hard truth: <strong>Footfall in the town doesn&#8217;t guarantee footfall in your shop.</strong> <a href="/blog/invisible-on-lord-street" title="">How to capture this new footfall</a>.</p>
      <p>These 500,000 new visitors aren&#8217;t locals. They don&#8217;t know that your café has the best scones on Lord Street or that your boutique stocks unique brands. They only know what their phone tells them.</p>
      <p>At <strong>Churchtown Media</strong>, we call this the &#8220;Digital Tourist&#8221; phenomenon. Here is how to ensure that when MLEC delegates search for &#8220;dinner near me,&#8221; your business is the first one they see. For more insights on preparing for this opportunity, explore our <a href="/southport-growth" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Southport Business Growth Hub</a>.</p>
      <h4><strong>1. The &#8220;Near Me&#8221; Battleground</strong></h4>
      <p>Conference delegates have short windows of time. When they step out of the MLEC for lunch, they won&#8217;t walk down Lord Street hoping to find something; they will pull out their phone and search:</p>
      <ul><li><em>&#8220;Coffee near Marine Lake&#8221;</em></li><li><em>&#8220;Best italian restaurant Southport&#8221;</em></li><li><em>&#8220;Shops open now&#8221;</em></li></ul>
      <p>If you aren&#8217;t in the <strong>Google Map Pack</strong> (the top 3 map results), you are invisible to them.</p>
      <ul><li><strong>Action Step:</strong> Ensure your Google Business Profile is categorized correctly. If you are a pub that serves food, ensure &#8220;Gastropub&#8221; or &#8220;Restaurant&#8221; is a primary category, not just &#8220;Pub&#8221;.</li></ul>
      <h4><strong>2. Speed is the New Service</strong></h4>
      <p>Imagine 1,200 delegates leaving a conference at 5 PM. They are all on mobile data, looking for a place to eat. If your website takes 10 seconds to load on 4G, they have already clicked &#8220;Back&#8221; and booked a table at your competitor&#8217;s place.</p>
      <ul><li><strong>The Benchmark:</strong> In 2026, your mobile site needs to load in <strong>under 2.5 seconds</strong>. (Not sure if yours is fast enough? <a href="/contact" target="_blank">Contact us for a free audit</a>).</li></ul>
      <h4><strong>3. The &#8220;Light Fantastic&#8221; Late Night Economy</strong></h4>
      <p>The new water and light show isn&#8217;t just a daytime attraction; it’s a night-time anchor. This means thousands of people will be in the town centre <em>after</em> 8 PM.</p>
      <ul><li><strong>The Pivot:</strong> Does your website explicitly state your evening hours? Do you have &#8220;Pre-Theatre&#8221; or &#8220;Post-Show&#8221; menus optimized on your site?</li><li><strong>SEO Tip:</strong> Create a dedicated page on your site titled &#8220;Dining Near Marine Lake Events Centre.&#8221; It signals relevance to Google and convenience to the user.</li></ul>
      <h4><strong>4. How to Fund Your Upgrade</strong></h4>
      <p>Transforming your digital presence to meet this demand costs money, but you might not have to pay for all of it yourself. As we detailed in our <strong><a href="/southport-growth" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Southport Business Growth Hub</a></strong>, there are active grants available right now—like the <strong>InvestSefton Growth Hub</strong> support—that can help fund digital consultancy and technical upgrades. Learn more about <a href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">our web design services</a> to maximize your MLEC opportunity.</p>
      <h4><strong>The Verdict</strong></h4>
      <p>The visitors are coming. The question is: Will they find you, or will they find a national chain that optimized their SEO six months ago?</p>
      <p>Don&#8217;t wait for the ribbon-cutting ceremony. The race to capture the MLEC economy starts today.</p>
    `
  },
  {
    slug: "why-new-local-seo-company-is-your-business-best-friend",
    title: "Why a New Local SEO Company is Your Business’s Best Friend",
    date: "Jan 14, 2026",
    category: "SEO Demystified",
    // UPDATED: .png -> .jpg
    image: "/images/seo-robot.jpg",
    excerpt: "Unlock Your Local Potential: Why a New Local SEO Company is Your Business's Best Friend In today's digital age, simply having a website isn't enough.",
    content: `
      <h2>Unlock Your Local Potential: Why a New Local SEO Company is Your Business&#8217;s Best Friend</h2>
      <p>In today&#8217;s digital age, simply having a website isn&#8217;t enough – especially for local businesses. If you&#8217;re not showing up when potential customers search for your products or services &#8220;near me,&#8221; you&#8217;re leaving money on the table. This is where a new, dynamic local SEO company can be a game-changer for your business. Let&#8217;s explore the compelling benefits of partnering with the right local SEO experts.</p>
      <h3>Precision Targeting: Reaching Customers Right Next Door</h3>
      <p>Imagine a customer in Southport searching for &#8220;best coffee shop near me&#8221; or &#8220;emergency plumber in Churchtown.&#8221; Do you appear in those results? A local SEO company specializes in optimizing your online presence to capture these highly specific, geographically-driven searches. They understand the nuances of local keywords, Google My Business optimization, and localized content strategies that larger, national SEO firms often overlook. This precision targeting ensures your marketing efforts aren&#8217;t wasted on distant prospects, but instead focus on the people most likely to walk through your door or call your service.</p>
      <h3>Dominate the Local Pack: Your Business on the Map</h3>
      <p>One of the most valuable pieces of digital real estate for any local business is the &#8220;Local Pack&#8221; – the map section that appears at the top of Google&#8217;s search results for local queries. This prominent display, featuring your business name, address, phone number, and reviews, is where countless customers make their initial decisions. A dedicated local SEO company works tirelessly to ensure your business ranks high in this coveted section, driving immediate visibility and foot traffic. They’ll optimize your Google Business Profile, build local citations, and manage your online reviews – all crucial factors for Local Pack dominance.</p>
      <p>For further information on our <a href="/services/web-design" title="">web design</a> and <a href="/services/seo" title="">SEO services</a> in Southport and surrounding areas feel free to visit our service pages or <a href="/contact" title="">contact us</a>.</p>
    `
  },
  {
    slug: "seo-recovery-alotek-shelters",
    title: "The £20,000 SEO Mistake: How We Tripled Traffic in 6 Weeks",
    date: "Feb 02, 2026",
    category: "Case Studies",
    // UPDATED: .png -> .jpg
    image: "/images/alotek-cover.jpg",
    excerpt: "Alotek Shelters spent £20k for zero growth. See the exact strategy Churchtown Media used to fix their 'zombie' site and capture #1 AI rankings in under 45 days.",
    content: `
      <p>Our client, <strong>Alotek Shelters</strong>, invested a significant amount in SEO with their previous agency over the last 12 months. For that price, you’d expect market dominance. You’d expect the phone to be ringing off the hook.</p>
      <p>Instead, when we logged into their analytics in November, we saw a flat line.</p>
      <p>The website was technically &#8220;there,&#8221; but it was a zombie. It wasn&#8217;t living, breathing, or growing. It was averaging position 50 (Page 5) on Google. It was invisible.</p>
      <p>Here is the story of how we fixed the mechanical failure, fired the &#8220;vanity metrics,&#8221; and <strong>tripled their visibility in under 6 weeks</strong>.</p>
      <hr />
      <h3><strong>The Audit: Why Money Doesn&#8217;t Buy Rankings</strong></h3>
      <p>When we took over, we didn’t just want to &#8220;do better.&#8221; We wanted to know <em>why</em> the previous budget had failed. We opened the hood and found three smoking guns that explained the flatline:</p>
      
      <h4><strong>1. The &#8220;50% Invisible&#8221; Problem</strong></h4>
      <p>This was the shocker. We found that <strong>52% of the website was not indexed.</strong> Effectively, for every two pages Alotek paid for, Google only saw one. The previous agency had left 28 pages blocked by technical errors—broken redirects, 404 dead ends, and messy canonical tags. The site was trying to run a marathon with one leg tied behind its back.</p>
      
      <h4><strong>2. The &#8220;Ghost Town&#8221; Keywords</strong></h4>
      <p>They were ranking, sure—but for terms nobody used. They were ranking on Page 1 for technical jargon, but invisible for the words buyers actually type into Google.</p>
      <hr />
      <h3><strong>The Fix: Engineering the Hockey Stick</strong></h3>
      
      <p>We didn&#8217;t start with a magic wand. We started with a wrench.</p>
      <p><strong>Phase 1</strong> was purely mechanical. We went into the code and fixed the indexation blocks. We cleared the 404 errors, fixed the redirect loops, and submitted the sitemap.</p>
      <ul><li><strong>Result:</strong> We increased the number of indexed pages from <strong>26 to 41</strong>.</li><li><strong>Impact:</strong> By simply letting Google see the rest of the website, we instantly doubled the opportunities for the site to rank.</li></ul>
      <p><strong>Phase 2</strong> was strategic. We stopped targeting &#8220;vanity&#8221; terms and went after <strong>Commercial Intent</strong> keywords—the specific phrases people search when they have a company credit card in their hand.</p>
      <hr />
      <h3><strong>The Data: Dominating the &#8220;AI Future&#8221;</strong></h3>
      <p>We don&#8217;t do &#8220;fluff&#8221; reports. Here is the raw data from Google Search Console and Semrush, comparing November (The Old Agency) to January (Churchtown Media).</p>
      
      <figure>
        <img src="/images/alotek-graph-1.jpg" alt="Google Search Console data showing 86% increase in impressions" width="800" height="400" />
        <figcaption class="text-sm text-slate-500 text-center mt-2">Figure 1: The visibility explosion after fixing technical indexation errors.</figcaption>
      </figure>

      <h4><strong>1. The Visibility Explosion</strong></h4>
      <p>We effectively shocked the patient back to life.</p>
      <ul><li><strong>Daily Impressions:</strong> Up <strong>86%</strong> (From 238/day to 442/day).</li><li><strong>Average Position:</strong> Improved from <strong>50 (Page 5)</strong> to <strong>37 (Page 4)</strong> across the entire site.</li><li><strong>Peak Visibility:</strong> On Jan 11th, the site hit nearly <strong>600 impressions</strong> in a single day—a 3x increase from the November baseline.</li></ul>
      <h4><strong>2. The &#8220;New Google&#8221; Wins (AI Overviews)</strong></h4>
      <p>This is the most exciting part. We aren&#8217;t just ranking in the traditional &#8220;blue links.&#8221; Our data shows Alotek is now triggering and <strong>owning the AI Overviews (AI Snapshots)</strong> for their biggest terms.</p>
      
      <p>This means when a user asks a question, Google&#8217;s AI is recommending <em>Alotek</em> as the direct answer at the very top of the page.</p>
      <ul><li><strong>&#8220;Bus Shelter Manufacturers&#8221;</strong><ul><li><strong>Then:</strong> Position 8 (Buried at bottom of Page 1)</li><li><strong>Now:</strong> <strong>AI Overview Winner</strong> (Position 1)</li><li><em>Why it matters:</em> We have replaced the &#8220;search result&#8221; with the &#8220;answer.&#8221; Google AI now presents Alotek as the primary manufacturer to check.</li></ul></li><li><strong>&#8220;Outdoor Pram Storage&#8221;</strong><ul><li><strong>Then:</strong> Position 11 (The &#8220;Graveyard&#8221; of Page 2)</li><li><strong>Now:</strong> <strong>AI Overview Winner</strong> (Position 1)</li><li><em>Why it matters:</em> We jumped 10 spots to become the default recommendation.</li></ul></li><li><strong>&#8220;Bus Shelters for Parish Councils&#8221;</strong><ul><li><strong>Then:</strong> Not Ranked (100+)</li><li><strong>Now:</strong> <strong>Position #1</strong></li><li><em>Why it matters:</em> This is a specific B2B contract term. We took Alotek from &#8220;Who?&#8221; to the <strong>#1 option in the UK</strong> for local government buyers.</li></ul></li></ul>
      
      <hr />
      <h3><strong>What&#8217;s Next? (The &#8220;Striking Distance&#8221; Plan)</strong></h3>
      <p>This is <strong>Phase 1</strong>. We have successfully turned the lights on and secured the top spot in Google&#8217;s AI results for key terms.</p>
      <p>Now, we pivot to <strong>Phase 2: Traffic &amp; Clicks.</strong></p>
      <p>Our data shows that a massive opportunity—<em>&#8220;Covered Walkways for Schools&#8221;</em>—is currently sitting at <strong>Position 11</strong>. It is knocking on the door of Page 1. The previous agency ignored it. We are now optimizing specifically to push that term from Page 2 to Page 1, which will unlock over <strong>1,500 monthly views</strong>.</p>
      <p><strong>Watch this space.</strong> In our next update (Month 3), we won&#8217;t just be showing you graphs of <em>rankings</em> going up. We’ll be showing you the <strong>Clicks</strong>—and the leads that follow.</p>
      <hr />
      <p><em>Has your agency spent 12 months sending you reports that say &#8220;work done&#8221; while your traffic stays flat? Let’s check under the hood. It might be a quick fix.</em></p>
      <div style="margin-top: 2rem;">
        <a href="/audit" class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:-translate-y-1">
            Book a Free &#8220;No-Nonsense&#8221; Audit
        </a>
      </div>
    `
  },
  {
    slug: "eating-our-own-dog-food",
    title: "Eating Our Own Dog Food: Why We Ignored Google’s Advice on Our New Ad Campaign",
    date: "Jan 29, 2026",
    category: "Agency Life",
    // UPDATED: .png -> .jpg
    image: "/images/google-ads.jpg",
    excerpt: "We ignored Google’s advice and launched a £15/day ad campaign. See the exact settings, keywords, and strategy Churchtown Media uses to get local leads.",
    content: `
      <p>It’s a strange feeling for a digital marketer to press &#8220;Publish&#8221; on their <em>own</em> ad campaign.</p>
      <p>I spend my days managing budgets for clients, obsessing over their ROI and technical SEO. I know this stuff works. But when it’s your own debit card attached to the account, the stakes feel different. It becomes personal.</p>
      <p>Welcome to the &#8220;Radical Transparency&#8221; section of our blog. This is where we pull back the curtain on agency life in Southport. No shiny case studies, just the real-time grinding of growing a business.</p>
      <p>Today, I’m sharing the exact setup of the very first Google Ads campaign for Churchtown Media.</p>
      <p>Why? Because most local businesses get ripped off by Google Ads, and I want to show you exactly how we set ours up to avoid the common traps.</p>
      <p>This is the &#8220;Default&#8221; Trap</h3>
      <p>If you are a local business owner—say, a plumber in Birkdale or a solicitor in town—and you try to set up Google Ads yourself, Google makes it incredibly easy. Too easy. For comprehensive support with your digital marketing strategy, check out our <a href="/southport-growth" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">local business growth resources</a>.</p>
      <p>They push you toward &#8220;Smart Campaigns&#8221; and automated settings. They encourage you to use broad keywords and let their AI handle the rest.</p>
      <p>If you follow their default advice, here is what usually happens: You spend £500 in a month. You get 200 clicks. 150 of them are from people outside the UK, 40 are students looking for &#8220;free tips,&#8221; and maybe 10 are actual prospects.</p>
      <p>You burn through cash, get zero leads, and decide &#8220;Google Ads doesn&#8217;t work.&#8221;</p>
      <p>It does work, but only if you put a leash on it.</p>
      <h3>Our Blueprint: The &#8220;Anti-Volume&#8221; Strategy</h3>
      <p>For our campaign, we did the opposite of what Google recommends for new accounts. We don&#8217;t want <em>volume</em>; we want <em>value</em>. We don&#8217;t want 1,000 clicks; we want 5 phone calls from serious business owners in Southport.</p>
      <p>Here are the three constraints we put on our own campaign:</p>
      <h4>1. Hyper-Local Geography (The Southport Fence)</h4>
      <p>Google will encourage you to target &#8220;Merseyside&#8221; or the &#8220;North West&#8221; to get more views.</p>
      <p>We said no. Our ads only trigger if someone is physically standing in Southport, Formby, or Ormskirk, or if they specifically type &#8220;Southport&#8221; into their search.</p>
      <p>If someone in Manchester searches for &#8220;best SEO agency,&#8221; they won&#8217;t see us. We don&#8217;t want to pay for that click right now. We are building a local fortress first.</p>
      <h4>2. The &#8220;Kill List&#8221; (Negative Keywords)</h4>
      <p>The secret to a profitable campaign isn&#8217;t just what you target; it&#8217;s what you <em>block</em>.</p>
      <p>Before we went live, we loaded up a list of &#8220;negative keywords.&#8221; These are words that tell Google <em>not</em> to show our ad.</p>
      <p>Our kill list includes words like: &#8220;cheap,&#8221; &#8220;affordable,&#8221; &#8220;free,&#8221; &#8220;jobs,&#8221; &#8220;course,&#8221; and &#8220;DIY.&#8221;</p>
      <p>If someone searches for &#8220;Cheap web design Southport,&#8221; we do not want to appear. We aren&#8217;t competing in the race to the bottom. We want clients who understand that a fast, technical website is an investment, not a cost.</p>
      <h4>3. Ignoring the AI &#8220;Help&#8221;</h4>
      <p>During setup, Google kept flashing warnings: <em>&#8220;Your audience is too small!&#8221;</em> <em>&#8220;Add these broad keywords to get more clicks!&#8221;</em> <em>&#8220;Switch to AI-powered ads!&#8221;</em></p>
      <p>We ignored every single one.</p>
      <p>We are using &#8220;Phrase Match&#8221; keywords. This means if we target <strong>&#8220;Web Design Southport&#8221;</strong>, someone has to type that exact phrase (or a very close variation) to see us. We won&#8217;t show up for loosely related terms like &#8220;graphic design.&#8221;</p>
      <p>This makes Google’s algorithm nervous because it can&#8217;t spend our money as fast as it wants to. But it makes <em>us</em> sleep better.</p>
      <h3>The Numbers: £15 a Day</h3>
      <figure><img decoding="async" width="1024" height="576" src="/images/google-ads.jpg" alt="Churchtown Media Google Ads dashboard showing the active 'MLEC Readiness Audit' campaign with a strict £15 daily budget and manual bidding strategy." /></figure>
      <p>We set our initial budget to exactly £15.00 per day.</p>
      <p>Why? In the Southport market for our niche, a good click costs between £3 and £5. This budget guarantees us about 3 to 5 highly qualified visitors to our site every single day.</p>
      <p>That is enough data to know if our message is resonating, but not so much that we burn money while testing.</p>
      <h3>What Happens Next?</h3>
      <p>Right now, the campaign status is &#8220;Learning.&#8221;</p>
      <p>Over the next 7 days, Google will test our ads at different times of day. We might spend £2 one day and £18 the next. It will be volatile.</p>
      <p>The hardest part is doing nothing. The temptation to tinker with bids or change headlines on Day 2 is immense. But you have to let the data accumulate.</p>
      <p>In two weeks, I’ll write a follow-up post right here. I’ll share the actual results—how much we spent, what the Cost Per Click was, and most importantly, did anyone actually call us?</p>
      <p>Win or lose, we’ll post the numbers.</p>
      <p><em>If you’re a local business owner worried that your current agency or your own Google Ads efforts are leaking money on bad clicks, we do offer a free audit of your setup. We apply the same level of scrutiny to your account that we do to our own. <a href="/contact" title="">Get in touch if you want a second pair of eyes.</a></em></p>
    `
  }
];