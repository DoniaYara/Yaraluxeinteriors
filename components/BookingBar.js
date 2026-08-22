"use client";

import { useState } from "react";
import { SERVICE_LINKS } from "@/lib/urls";

const PHONE_DISPLAY = "0433 211 875";
const WA_HREF = "https://wa.me/61433211875";

export default function BookingBar() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          name: data.get("name"),
          phone: data.get("phone"),
          address: data.get("address"),
          service: data.get("service"),
          email: data.get("email"),
          company: data.get("company")
        })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Could not send the enquiry.");
      }
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Could not send the enquiry.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="book-bar" id="book-online">
      <div className="book-bar-inner">
        <div className="book-form-box">
          <h2 className="book-bar-title">Booking Online</h2>
          {sent ? (
            <p className="book-bar-ok">Thank you. Your enquiry has been sent — we will be in touch shortly.</p>
          ) : (
            <form className="book-form" onSubmit={onSubmit}>
              <input className="hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="text" name="name" placeholder="Name" autoComplete="name" aria-label="Name" required />
              <input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" aria-label="Phone number" required />
              <input type="text" name="address" placeholder="Address" autoComplete="street-address" aria-label="Address" />
              <select name="service" defaultValue="" aria-label="Service type" required>
                <option value="" disabled>
                  Service type
                </option>
                {SERVICE_LINKS.map((s) => (
                  <option key={s.key} value={s.label}>
                    {s.label}
                  </option>
                ))}
              </select>
              <input type="email" name="email" placeholder="Email" autoComplete="email" aria-label="Email" required />
              <button type="submit" disabled={busy}>{busy ? "Sending…" : "Send"}</button>
              {error ? <p className="book-bar-err">{error}</p> : null}
            </form>
          )}
        </div>

        <a className="book-call-box" href={WA_HREF} target="_blank" rel="noopener noreferrer">
          <h2 className="book-bar-title">Call Now</h2>
          <div className="book-call-row">
            <span className="book-call-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 24a14 14 0 0 1 28 0" />
                <rect x="8" y="22" width="6" height="12" rx="2" />
                <rect x="34" y="22" width="6" height="12" rx="2" />
                <path d="M40 28v6a8 8 0 0 1-8 8h-3" strokeLinecap="round" />
                <circle cx="24" cy="21" r="6" />
                <path d="M14 40c1.6-6 5.2-9 10-9s8.4 3 10 9" />
              </svg>
            </span>
            <span className="book-call-text">
              <span className="book-call-label">Direct on WhatsApp</span>
              <span className="book-call-num">{PHONE_DISPLAY}</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
