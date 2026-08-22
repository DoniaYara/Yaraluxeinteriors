"use client";

import { useEffect, useState } from "react";

export default function MediaPicker({ onSelect, onClose }) {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [alt, setAlt] = useState("");
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
    form.append("alt", alt);
    const res = await fetch("/api/author/media", { method: "POST", body: form });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Upload failed.");
      return;
    }
    onSelect({ ...data.media, alt: alt || data.media.alt });
  }

  return (
    <div className="cms-modal">
      <div className="cms-modal-card">
        <h2>Media library</h2>
        {error ? <p className="cms-error">{error}</p> : null}
        <div className="cms-actions">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" />
          <button type="button" className="cms-btn ghost" onClick={() => load(q)}>Search</button>
          <input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Alt text for new upload" />
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={upload} />
          <button type="button" className="cms-btn ghost" onClick={onClose}>Close</button>
        </div>
        <div className="cms-media-grid">
          {items.map((item) => (
            <button key={item.id} type="button" className="cms-media-card" onClick={() => onSelect({ ...item, alt: alt || item.alt })}>
              <img src={item.url} alt={item.alt || item.filename} />
              <small>{item.filename}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
