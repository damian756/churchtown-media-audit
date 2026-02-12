"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Script from "next/script";

// NOTE: Since this is a "use client" component, we cannot export 'metadata' directly here.
// In Next.js 13+, you usually keep the page server-side and put the form in a client component.
// HOWEVER, for simplicity in your current setup, we will use a workaround or you should move this logic to layout if possible.
// BETTER APPROACH: We will treat this as the client component and assume you might have a wrapper layout or accept that metadata might need to be in a separate layout.tsx for this route.
// FOR NOW: I will provide the schema script which works in client components.

export default function ContactPage() {
  const FORMSPREE_ID = "mpqjzyby"; 

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        alert("Something went wrong. Please try again.");
        setStatus('idle');
      }
    } catch (error) {
      alert("Error connecting to server.");
      setStatus('idle');
    }
  };

  // 1. JSON-LD SCHEMA (Contact & LocalBusiness)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'LocalBusiness',
      'name': 'Churchtown Media',
      'image': 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      'telephone': '+447545934360',
      'email': 'hello@churchtownmedia.co.uk',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Cambridge Avenue',
        'addressLocality': 'Southport',
        'addressRegion': 'Merseyside',
        'postalCode': 'PR9 9SA',
        'addressCountry': 'UK'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '17:30'
      }
    }
  };

  return (
    <main className="min-h-screen h-auto w-full bg-slate-950 pt-24 pb-24 overflow-x-hidden">
      
      {/* INJECT SCHEMA */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 1. HEADER */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-5 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Open for new projects
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Let's build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">impossible.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ready to scale? Whether it's an Enterprise Web App or a high-performance Marketing Site, we engineer revenue.
            </p>
        </div>

        {/* 2. MAIN GRID (40% Info Left, 60% Form Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-start">
            
            {/* LEFT COL: Contact Info & Map */}
            <div className="flex flex-col gap-8">
                
                {/* Info Card */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[2rem] shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                    
                    <div className="space-y-6">
                        
                        {/* EMAIL */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Email</p>
                                <a href="mailto:hello@churchtownmedia.co.uk" className="text-base md:text-lg font-medium text-white hover:text-blue-400 transition-colors break-all">
                                    hello@churchtownmedia.co.uk
                                </a>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                                <a href="tel:01704635785" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                                    01704 635785
                                </a>
                                <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 5pm</p>
                            </div>
                        </div>

                        {/* ADDRESS */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">HQ</p>
                                <p className="text-lg font-medium text-white">
                                    Cambridge Avenue<br/>
                                    Southport, PR9 9SA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Card */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-2 rounded-[2rem] shadow-xl h-80 overflow-hidden relative group">
                    <iframe 
                        title="Churchtown Media HQ Location Map"
                        src="https://maps.google.com/maps?q=Cambridge%20Avenue%20Southport&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg group-hover:filter-none transition-all duration-500"
                    ></iframe>
                    <div className="absolute bottom-6 left-6 bg-slate-800/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-white shadow-lg pointer-events-none border border-slate-700">
                        📍 Based in Southport, Serving the UK
                    </div>
                </div>

            </div>

            {/* RIGHT COL: The Form (60%) */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 md:p-8 rounded-xl shadow-2xl relative">
                
                {status === 'success' ? (
                    <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-emerald-900/50 border border-emerald-800 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                        <p className="text-slate-400 mb-6 max-w-xs mx-auto text-sm">
                            Thank you for reaching out. We will review your project and get back to you within 24 hours.
                        </p>
                        <button onClick={() => setStatus('idle')} className="text-blue-400 font-bold hover:underline">
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Your Name</label>
                            <input 
                                name="name" type="text" required placeholder="John Doe"
                                className="w-full h-14 px-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-white font-medium placeholder:text-slate-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Email Address</label>
                            <input 
                                name="email" type="email" required placeholder="john@company.com"
                                className="w-full h-14 px-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-white font-medium placeholder:text-slate-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Project Type</label>
                            <select name="service" className="w-full h-14 px-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-white font-medium">
                                <option>Custom Website Development</option>
                                <option>Small Business Website</option>
                                <option>SEO & Performance Audit</option>
                                <option>E-Commerce / Shopify</option>
                                <option>Software / SaaS Dev</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Tell us about the project</label>
                            <textarea 
                                name="message" required rows={4} placeholder="We need a new website that converts..."
                                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-white font-medium placeholder:text-slate-500 resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-full h-14 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>Sending...</>
                            ) : (
                                <>Send Message <ArrowRight className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>
                )}
            </div>

        </div>

        {/* PRICING GUIDE */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Pricing Guide</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-sm text-slate-400 mb-2">Web Design</div>
                <div className="text-2xl font-black text-white">From £2,500</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-2">Small Business Sites</div>
                <div className="text-2xl font-black text-white">From £1,500</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-2">SEO Services</div>
                <div className="text-2xl font-black text-white">From £500/mo</div>
              </div>
            </div>
            <p className="text-center text-slate-400 text-sm">
              <a href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline font-semibold">View full pricing details</a> • Payment plans available • No hidden fees
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}