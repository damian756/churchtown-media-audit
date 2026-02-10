import { Metadata } from 'next';
import FAQClient from './FAQClient';
import { faqs } from '@/lib/faqs';

// 1. METADATA FOR 10/10 SEO
export const metadata: Metadata = {
  title: '200+ Frequently Asked Questions | Web Design & SEO | Churchtown Media',
  description: 'Get expert answers to 200+ questions about Next.js web design, local SEO, WordPress migration, pricing, and digital marketing in Southport and the North West.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/frequently-asked-questions',
  },
  openGraph: {
    title: '200+ FAQs - Web Design, SEO & Digital Marketing',
    description: 'Expert answers to all your questions about Next.js, WordPress, local SEO, and growing your business online.',
    url: 'https://www.churchtownmedia.co.uk/frequently-asked-questions',
    type: 'website',
  },
};

// 2. FAQ PAGE SCHEMA (For Rich Results)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'name': 'Frequently Asked Questions - Churchtown Media',
  'description': 'Comprehensive FAQ covering web design, SEO, Next.js development, and digital marketing strategies.',
  'url': 'https://www.churchtownmedia.co.uk/frequently-asked-questions',
  'publisher': {
    '@type': 'Organization',
    'name': 'Churchtown Media',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://www.churchtownmedia.co.uk/icon.png'
    }
  },
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer.replace(/<[^>]*>/g, '') // Strip HTML for schema
    }
  }))
};

// 3. BREADCRUMBS SCHEMA
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.churchtownmedia.co.uk'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'FAQ',
      'item': 'https://www.churchtownmedia.co.uk/frequently-asked-questions'
    }
  ]
};

export default function FrequentlyAskedQuestions() {
  return (
    <>
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* RENDER CLIENT COMPONENT */}
      <FAQClient />
    </>
  );
}
