import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Web Design & SEO | Southport & Blackpool | Churchtown Media',
  description: 'Get in touch with Churchtown Media. Based in Churchtown, Southport, covering Southport and Blackpool. Available for a call, Zoom, or in-person meeting. No hard sell.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/contact',
  },
  openGraph: {
    title: 'Contact Churchtown Media | Web Design & SEO | Southport & Blackpool',
    description: 'Talk to us about your website or SEO project. Based in Southport, covering Southport and Blackpool. We can meet in person, jump on a call, or reply by email.',
    url: 'https://www.churchtownmedia.co.uk/contact',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{ url: 'https://www.churchtownmedia.co.uk/opengraph-image.png', width: 1200, height: 630, alt: 'Contact Churchtown Media' }],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
