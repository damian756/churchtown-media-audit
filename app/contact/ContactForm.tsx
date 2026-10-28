"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tail from "../components/Tail";
import { NAP } from "@/lib/site";
import { INSTITRACE_CONTACT_URL, INSTITRACE_URL } from "@/lib/institrace";

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
        alert(`Sorry, something went wrong. Please try again, or email ${NAP.emailDamian} directly.`);
        setStatus("idle");
      }
    } catch {
      alert(`Sorry, the message could not be sent. Please email ${NAP.emailDamian} directly.`);
      setStatus("idle");
    }
  };

  return (
    <section className="band-hero">
      <div className="page grid items-start gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div>
          <p className="kicker mb-4">Contact</p>
          <div className="mb-5 flex items-center gap-4">
            <Image
              src="/images/damian-roche.webp"
              alt="Damian Roche"
              width={144}
              height={144}
              className="h-16 w-16 rounded-full border border-[var(--rule)] object-cover object-top md:h-[72px] md:w-[72px]"
            />
            <h1 className="m-0">Let&apos;s talk</h1>
          </div>
          <p className="lede mb-8 max-w-[38rem]">
            <Tail>
              Tell me a little about your question and I&apos;ll get back to you. If I&apos;m not
              the right person, I&apos;ll happily point you to someone who is.
            </Tail>
          </p>

          {status === "success" ? (
            <div className="card">
              <h2 className="mb-3">Thank you</h2>
              <p className="mb-5">
                Thanks for getting in touch. I&apos;ll read your message and reply as soon as I
                can.
              </p>
              <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-7 !p-6 md:!p-8">
              <div className="grid gap-7 md:grid-cols-2 md:gap-8">
                <div>
                  <label htmlFor="name" className="kicker mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="kicker mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@organisation.co.uk"
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="kicker mb-2 block">
                  This is about
                </label>
                <select id="service" name="service" className="input">
                  <option>A consultation</option>
                  <option>Institrace for my team</option>
                  <option>A report, data feed or dashboard</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="kicker mb-2 block">
                  Your question
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="A little about you, your question, and any timings that matter."
                  className="input"
                />
              </div>
              <div className="btn-row">
                <button type="submit" disabled={status === "submitting"} className="btn btn-primary">
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28">
          <div className="card space-y-5 text-[0.98rem] text-[var(--ink-secondary)]">
            <div>
              <span className="kicker mb-1.5 block text-[var(--ink-muted)]">Email</span>
              <a href={`mailto:${NAP.emailHello}`} className="out block break-words">
                {NAP.emailHello}
              </a>
              <a href={`mailto:${NAP.emailDamian}`} className="out block break-words">
                {NAP.emailDamian}
              </a>
            </div>
            <div>
              <span className="kicker mb-1.5 block text-[var(--ink-muted)]">Telephone</span>
              <a href={`tel:${NAP.telephone}`} className="out">
                {NAP.telephoneDisplay}
              </a>
            </div>
            <div>
              <span className="kicker mb-1.5 block text-[var(--ink-muted)]">Address</span>
              <address className="not-italic leading-snug">
                <span className="block">{NAP.streetAddress}</span>
                <span className="block">
                  {NAP.addressLocality} {NAP.postalCode}
                </span>
              </address>
            </div>
          </div>

          <div className="card">
            <h3>What helps</h3>
            <p>
              <Tail>
                A line about you and your organisation. The question, and what you would like to
                end up with. Any dates that matter.
              </Tail>
            </p>
            <p className="mt-3">
              You&apos;re welcome to read about{" "}
              <Link href="/services" className="out whitespace-nowrap">
                a consultation
              </Link>{" "}
              or{" "}
              <a href={INSTITRACE_URL} target="_blank" rel="noopener noreferrer" className="out">
                Institrace
              </a>{" "}
              first, but there&apos;s no need. For a demo or a sample, Institrace has its own{" "}
              <a href={INSTITRACE_CONTACT_URL} target="_blank" rel="noopener noreferrer" className="out">
                contact page
              </a>
              .
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
