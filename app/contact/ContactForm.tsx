"use client";

import { useState } from "react";
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

      <section className="pt-16 pb-2">
        <p className="kicker mb-6">Contact</p>
        <h1 className="mb-6">Write.</h1>
        <p className="lede">
          Say who you are, the question, and the timescale. If it is the right fit, I
          will respond. If it is not, I will say so.
        </p>
      </section>

      <hr className="rule" />

      <section className="pb-8">
        <div className="grid gap-16 md:grid-cols-[1fr_240px] items-start">
          <div>
            {status === "success" ? (
              <div className="py-8">
                <h2 className="mb-4">Received.</h2>
                <p className="text-[var(--ink-secondary)] mb-6">
                  I will read it and reply if the work belongs here.
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="submit">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="kicker block mb-2">Name</label>
                  <input name="name" type="text" required placeholder="Your name" className="input" />
                </div>
                <div>
                  <label className="kicker block mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@organisation.co.uk"
                    className="input"
                  />
                </div>
                <div>
                  <label className="kicker block mb-2">This is about</label>
                  <select name="service" className="input">
                    <option>A consultation</option>
                    <option>Institrace for a team</option>
                    <option>A SIBA audit (I will point you there)</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="kicker block mb-2">The question</label>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    placeholder="Who you are, what you need to know, and when."
                    className="input"
                  />
                </div>
                <button type="submit" disabled={status === "submitting"} className="submit">
                  {status === "submitting" ? "Sending…" : "Send"}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6 text-[0.98rem] text-[var(--ink-secondary)]">
            <p>
              <span className="kicker block mb-2">Email</span>
              <a href="mailto:damian@churchtownmedia.co.uk" className="out">
                damian@churchtownmedia.co.uk
              </a>
            </p>
            <p>
              <span className="kicker block mb-2">Based</span>
              Churchtown, Southport
            </p>
            <p>
              Before you write, it may help to read{" "}
              <Link href="/services" className="out">
                consultation
              </Link>
              ,{" "}
              <a href="https://www.siba.digital" target="_blank" rel="noopener noreferrer" className="out">
                SIBA Digital
              </a>
              , or{" "}
              <a href="https://www.institrace.co.uk" target="_blank" rel="noopener noreferrer" className="out">
                Institrace
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
