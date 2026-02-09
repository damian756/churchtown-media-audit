"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg prose-invert">
          <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h3>
          <p>
            Churchtown Media ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Information We Collect</h3>
          <p>We collect information that you provide directly to us, such as when you fill out a contact form, request an audit, or communicate with us. This may include:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li>Name and contact information (email, phone number).</li>
            <li>Business details (URL, company name).</li>
            <li>Technical data (IP address, browser type) via Google Analytics.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 text-slate-300">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to your comments, questions, and requests.</li>
            <li>Send you technical notices, updates, and support messages.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <br/>
            <strong>hello@churchtownmedia.co.uk</strong>
          </p>
        </div>
      </div>
    </main>
  );
}