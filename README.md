# Churchtown Media Website

Official website for Churchtown Media - Digital Growth Partner for Southport & North West businesses.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4
- **Cookie Consent**: CookieYes

## 📋 Prerequisites

- Node.js 20+ (LTS recommended)
- npm or yarn
- Git

## 🛠️ Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/churchtown-media.git
cd churchtown-media
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your API keys to `.env.local`:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
GOOGLE_API_KEY=your_google_api_key_here
```

### Required API Keys

- **OpenRouter API Key**: Used for AI-powered audit analysis
  - Get yours at: https://openrouter.ai/
  
- **Google PageSpeed Insights API Key**: Used for website performance audits
  - Get yours at: https://console.cloud.google.com/apis/credentials

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Build & Deploy

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The site is automatically deployed to Vercel on push to the `main` branch.

## 📁 Project Structure

```
churchtown-media/
├── app/
│   ├── api/              # API routes (audit)
│   ├── audit/            # Free SEO audit tool
│   ├── blog/             # Blog posts & articles
│   ├── components/       # Reusable components
│   ├── contact/          # Contact page
│   ├── locations/        # Location-specific pages
│   ├── services/         # Service pages (SEO, Web Design, etc.)
│   ├── work/             # Portfolio/case studies
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── opengraph-image.tsx  # Dynamic OG image
│   ├── icon.tsx          # Dynamic favicon
│   └── not-found.tsx     # Custom 404 page
├── lib/
│   ├── locations.ts      # Location data
│   └── posts.ts          # Blog post data
├── public/
│   └── images/           # Static images
├── .env.example          # Environment variables template
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Key Features

- **AI-Powered SEO Audits**: Free website analysis using OpenAI and Google PageSpeed Insights
- **Dynamic Location Pages**: Automated SEO-optimized pages for 15+ locations
- **Blog System**: Built-in blog with TypeScript-based content management
- **Schema.org Markup**: Full JSON-LD structured data for better SEO
- **Performance Optimized**: Server-side rendering, image optimization, and route prefetching
- **Mobile-First Design**: Responsive design with Tailwind CSS

## 📝 Content Management

### Adding Blog Posts

Edit `lib/posts.ts` and add a new entry to the `posts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  date: "Feb 10, 2026",
  category: "Category Name",
  image: "/images/your-image.jpg",
  excerpt: "Short description...",
  content: `<p>Your HTML content here...</p>`
}
```

### Adding Location Pages

Edit `lib/locations.ts` and add a new location to the `locations` array.

## 🔍 SEO Features

- Dynamic sitemaps (`/sitemap.xml`)
- robots.txt configuration (`/robots.txt`)
- Automatic canonical URLs
- OpenGraph & Twitter Card metadata
- Schema.org structured data
- 301 redirects for legacy URLs (see `next.config.ts`)

## 🧪 Testing

Run the linter:

```bash
npm run lint
```

## 📊 Analytics & Tracking

- **Google Analytics 4**: Tracking ID configured in `app/layout.tsx`
- **CookieYes**: GDPR-compliant cookie consent banner

## 🔐 Security

- No database (static site = fewer vulnerabilities)
- Environment variables for sensitive data
- HTTPS enforced via Vercel
- CSP headers recommended for production

## 📞 Contact

**Churchtown Media**
- Website: https://www.churchtownmedia.co.uk
- Email: hello@churchtownmedia.co.uk
- Phone: 01704 635785
- Address: Cambridge Avenue, Southport, PR9 9SA

## 📄 License

© 2026 Churchtown Media Ltd. Company No. 16960442. All rights reserved.
