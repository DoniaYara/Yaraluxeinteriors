"use client";

import { useEffect, useState } from "react";

export default function MediaPage() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [error, setError] = useState("");

  async function load(query = q) {
    const res = await fetch(`/api/author/media?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setItems(data.media || []);
  }

  useEffect(() => { load(); }, []);

  async function upload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/author/media", { method: "POST", body: form });
    const data = await res.json();
    if (!res.ok) setError(data.error || "Upload failed.");
    else load();
  }

  async function saveAlt(id, alt) {
    await fetch(`/api/author/media/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alt })
    });
  }

  async function remove(id) {
    const res = await fetch(`/api/author/media/${id}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (res.status === 409) {
      if (window.confirm(`${data.error} Delete anyway?`)) {
        await fetch(`/api/author/media/${id}?confirm=1`, { method: "DELETE" });
      } else return;
    }
    load();
  }

  return (
    <>
      <h1>Media</h1>
      {error ? <p className="cms-error">{error}</p> : null}
      <div className="cms-actions">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" />
        <button className="cms-btn ghost" type="button" onClick={() => load(q)}>Search</button>
        <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={upload} />
      </div>
      <div className="cms-media-grid">
        {items.map((item) => (
          <div key={item.id} className="cms-media-card">
            <img src={item.url} alt={item.alt || item.filename} />
            <input defaultValue={item.alt} onBlur={(e) => saveAlt(item.id, e.target.value)} placeholder="Alt text" />
            <button type="button" className="cms-btn ghost" onClick={() => navigator.clipboard.writeText(item.url)}>Copy URL</button>
            <button type="button" className="cms-btn danger" onClick={() => remove(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
