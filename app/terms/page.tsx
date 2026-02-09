"use client";

import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-slate prose-lg prose-invert">
          <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h3>
          <p>
            By accessing and using the website of Churchtown Media, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Services</h3>
          <p>
            Churchtown Media provides digital marketing, web design, and SEO services. All services are subject to a separate service agreement which will be provided upon engagement.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Intellectual Property</h3>
          <p>
            The content, layout, design, data, and graphics on this website are protected by United Kingdom and other international copyright laws. You agree not to copy, reproduce, or republish any content without our written permission.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Limitation of Liability</h3>
          <p>
            In no event shall Churchtown Media be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Churchtown Media's website.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Governing Law</h3>
          <p>
            Any claim relating to Churchtown Media's website shall be governed by the laws of the United Kingdom without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </main>
  );
}