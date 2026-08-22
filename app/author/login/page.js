"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/author/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") })
    });
    const data = await res.json().catch(() => ({}));
    setPending(false);
    if (!res.ok) {
      setError(data.error || "Could not sign in.");
      return;
    }
    router.replace("/author");
    router.refresh();
  }

  return (
    <div className="cms-login">
      <form onSubmit={onSubmit}>
        <h1>Author Dashboard</h1>
        <p>Yara Luxe Interiors — sign in to manage articles.</p>
        {error ? <p className="cms-error">{error}</p> : null}
        <input name="email" type="email" placeholder="Email" required autoComplete="username" data-testid="login-email" />
        <input name="password" type="password" placeholder="Password" required autoComplete="current-password" data-testid="login-password" />
        <button className="cms-btn" type="submit" disabled={pending} data-testid="login-submit">{pending ? "Signing in…" : "Sign in"}</button>
      </form>
    </div>
  );
}
