"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Script from "next/script";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Churchtown Media",
                  email: "damian@churchtownmedia.co.uk",
    url: "https://www.churchtownmedia.co.uk",
    founder: {
      "@type": "Person",
      name: "Damian Roche",
    },
  },
};

export default function ContactForm() {
  const FORMSPREE_ID = "mpqjzyby";
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
      } else {
        alert("Something went wrong. Please try again or email directly.");
        setStatus("idle");
      }
    } catch {
      alert("Error connecting to server. Please email damian@churchtownmedia.co.uk directly.");
      setStatus("idle");
    }
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
            Contact
          </p>
          <h1 className="mb-6">Start a conversation.</h1>
          <p className="text-[17px] leading-relaxed text-[#3d3d3d] max-w-lg">
            We work with a small number of clients at any one time. Tell us about your organisation and the challenge. If it is the right fit, we will respond directly.
          </p>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* Main */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[1fr_320px] gap-16 items-start">

            {/* Form */}
            <div>
              {status === "success" ? (
                <div className="py-16 flex flex-col items-start">
                  <CheckCircle2 className="w-8 h-8 text-[#2c4a52] mb-6" />
                  <h2 className="mb-3" style={{ fontSize: "clamp(1.3rem, 1rem + 1vw, 1.75rem)" }}>
                    Message received.
                  </h2>
                  <p className="text-[15px] text-[#3d3d3d] leading-relaxed mb-8 max-w-sm">
                    We will review your message and respond directly if this is the right fit.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-[#2c4a52] hover:text-[#1c1c1c] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium text-[#6b6b6b] uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium text-[#6b6b6b] uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@yourorganisation.co.uk"
                      className="input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium text-[#6b6b6b] uppercase tracking-wider">
                      Service area
                    </label>
                    <select name="service" className="input">
                      <option>Technical SEO & AI Search Architecture</option>
                      <option>Headless Development Consultancy</option>
                      <option>Digital Footprint Intelligence</option>
                      <option>AI Infrastructure Advisory</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium text-[#6b6b6b] uppercase tracking-wider">
                      The challenge
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your organisation and the problem you are trying to solve."
                      className="input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-2 bg-[#112d6e] text-white text-sm px-6 py-3 hover:bg-[#0d2358] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : <>Send message <ArrowRight size={13} /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-[#f5f5f0] border border-[#e0e0d8] p-6 space-y-5">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:damian@churchtownmedia.co.uk"
                    className="text-[14px] text-[#1c1c1c] hover:text-[#112d6e] transition-colors"
                  >
                    damian@churchtownmedia.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#1c1c1c] hover:text-[#112d6e] transition-colors"
                  >
                    Damian Roche
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                    Based
                  </p>
                  <p className="text-[14px] text-[#3d3d3d]">Churchtown, Southport</p>
                </div>
              </div>

              <div className="space-y-3 text-[13px] leading-relaxed text-[#6b6b6b]">
                <p>We do not take on every enquiry.</p>
                <p>
                  If the challenge is a good fit, you will hear back directly. If it is not, we will say so honestly.
                </p>
                <p>
                  For service detail before getting in touch:{" "}
                  <Link href="/services" className="text-[#2c4a52] hover:text-[#1c1c1c] transition-colors">
                    Services
                  </Link>{" "}
                  or{" "}
                  <Link href="/case-studies" className="text-[#2c4a52] hover:text-[#1c1c1c] transition-colors">
                    Case Studies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
