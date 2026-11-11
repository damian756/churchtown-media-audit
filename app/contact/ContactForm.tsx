"use client";

import { useState } from "react";
import { NAP } from "@/lib/site";

/** The message form (Formspree). The page around it is app/contact/page.tsx. */
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

  if (status === "success") {
    return (
      <div className="form" role="status">
        <p>Thank you. Your message has been sent, and Damian will reply by email.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="pair">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className="input" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className="input"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service">This is about</label>
        <select id="service" name="service" className="input">
          <option>A consultation</option>
          <option>Institrace for my team</option>
          <option>A report, data feed or dashboard</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Your question</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="A line about you, your question, and any dates that matter."
          className="input"
        />
      </div>
      <div>
        <button type="submit" disabled={status === "submitting"} className="btn">
          {status === "submitting" ? "Sending" : "Send message"}
        </button>
      </div>
    </form>
  );
}
