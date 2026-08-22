"use client";

import { useState } from "react";

export default function ContactForm() {
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
          type: "contact",
          name: data.get("your-name"),
          email: data.get("your-email"),
          message: data.get("your-message"),
          company: data.get("company")
        })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Could not send the message.");
      }
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Could not send the message.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="cf7" onSubmit={onSubmit}>
      <p className="hp" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <p>
        <label>
          Your name
          <br />
          <input type="text" name="your-name" autoComplete="name" required />
        </label>
      </p>
      <p>
        <label>
          Your email
          <br />
          <input type="email" name="your-email" autoComplete="email" required />
        </label>
      </p>
      <p>
        <label>
          Your message (optional)
          <br />
          <textarea name="your-message" rows={10} maxLength={2000} />
        </label>
      </p>
      <p>
        <button className="octf-btn" type="submit" disabled={busy}>
          {busy ? "Sending…" : "Submit"}
        </button>
      </p>
      {sent ? <div className="cf7-ok">Thank you for your message. It has been sent.</div> : null}
      {error ? <div className="cf7-err">{error}</div> : null}
    </form>
  );
}
