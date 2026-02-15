"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg prose-invert">
          <p className="text-slate-300 mb-6">Last updated: February 2026</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h3>
          <p>
            Churchtown Media ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at churchtownmedia.co.uk, use our services, or interact with us in any way.
          </p>
          <p>
            We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our website, you consent to the data practices described in this policy.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Information We Collect</h3>
          <p>We collect information that you provide directly to us, such as when you fill out a contact form, request a free SEO audit, subscribe to updates, or communicate with us by phone or email. This may include:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li>Name and contact information (email address, phone number)</li>
            <li>Business details (website URL, company name, industry)</li>
            <li>Project requirements and budget information shared during consultations</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p>We also automatically collect certain technical information when you visit our website:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li>IP address, browser type, and operating system</li>
            <li>Pages visited, time spent on pages, and referring URLs</li>
            <li>Device information (screen size, device type)</li>
            <li>Cookie data and similar tracking technologies</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h3>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li>To provide, maintain, and improve our web design and SEO services</li>
            <li>To respond to your enquiries, comments, and requests</li>
            <li>To send you project updates, technical notices, and support messages</li>
            <li>To prepare proposals, quotes, and service agreements</li>
            <li>To monitor and analyse website traffic, usage patterns, and trends</li>
            <li>To detect, prevent, and address technical issues or security threats</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Cookies</h3>
          <p>
            Our website uses cookies and similar tracking technologies to improve your browsing experience and analyse site traffic. We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect anonymous data about page views, session duration, and user behaviour.
          </p>
          <p>
            You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when a cookie is being sent. However, disabling cookies may affect the functionality of certain parts of our website.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Data Sharing and Third Parties</h3>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting our business, including:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li>Vercel (website hosting and deployment)</li>
            <li>Formspree (contact form processing)</li>
            <li>Google Analytics (website analytics)</li>
          </ul>
          <p>These third parties are obligated to keep your information confidential and use it only for the purposes we specify.</p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Data Retention</h3>
          <p>
            We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy. Contact form submissions are retained for up to 24 months. Analytics data is retained in accordance with Google Analytics' default retention settings. Client project data is retained for the duration of our business relationship and for up to 6 years thereafter for legal and accounting purposes.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">7. Your Rights Under UK GDPR</h3>
          <p>Under the UK General Data Protection Regulation, you have the following rights:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li><strong>Right of access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Right to rectification</strong> — request correction of inaccurate or incomplete data</li>
            <li><strong>Right to erasure</strong> — request deletion of your personal data</li>
            <li><strong>Right to restrict processing</strong> — request that we limit how we use your data</li>
            <li><strong>Right to data portability</strong> — request a copy of your data in a structured format</li>
            <li><strong>Right to object</strong> — object to our processing of your personal data</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the details below. We will respond to your request within 30 days.</p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">8. Data Security</h3>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our website is served over HTTPS with TLS encryption. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">9. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">10. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:
          </p>
          <ul className="list-none pl-0 text-slate-300">
            <li><strong>Email:</strong> hello@churchtownmedia.co.uk</li>
            <li><strong>Phone:</strong> 01704 635785</li>
            <li><strong>Address:</strong> Cambridge Avenue, Southport, Merseyside, PR9 9SA</li>
          </ul>
          <p>
            You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <strong>ico.org.uk</strong> if you believe your data protection rights have been violated.
          </p>
        </div>
      </div>
    </main>
  );
}