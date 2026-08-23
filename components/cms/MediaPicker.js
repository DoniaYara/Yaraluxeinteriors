"use client";

import { useEffect, useState } from "react";

export default function MediaPicker({ onSelect, onClose }) {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [alt, setAlt] = useState("");
  const [pendingFile, setPendingFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load(query = q) {
    const res = await fetch(`/api/author/media?q=${encodeURIComponent(query)}`);
    const data = await res.json().catch(() => ({}));
    setItems(data.media || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function uploadFile(file) {
    if (!file || busy) return;
    setBusy(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("alt", alt);
      const res = await fetch("/api/author/media", { method: "POST", body: form });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Upload failed.");
        return;
      }
      onSelect({ ...data.media, alt: alt || data.media.alt });
    } catch (err) {
      setError(err?.message || "Upload failed.");
    } finally {
      setBusy(false);
    }
  }

  function onFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setPendingFile(file);
    uploadFile(file);
  }

  return (
    <div className="cms-modal">
      <div className="cms-modal-card">
        <h2>Media library</h2>
        <p className="cms-hint">
          Click an existing image to use it, or choose a new file and press Upload &amp; use.
        </p>
        {error ? <p className="cms-error">{error}</p> : null}
        {busy ? <p className="cms-hint">Uploading…</p> : null}
        <div className="cms-actions">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" />
          <button type="button" className="cms-btn ghost" onClick={() => load(q)}>Search</button>
          <input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Alt text for new upload" />
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={onFileChange}
            disabled={busy}
          />
          <button
            type="button"
            className="cms-btn"
            data-testid="media-upload"
            disabled={!pendingFile || busy}
            onClick={() => uploadFile(pendingFile)}
          >
            {busy ? "Uploading…" : "Upload & use"}
          </button>
          <button type="button" className="cms-btn ghost" onClick={onClose} disabled={busy}>Close</button>
        </div>
        {pendingFile ? (
          <p className="cms-hint">Selected file: {pendingFile.name}</p>
        ) : null}
        <div className="cms-media-grid">
          {items.length === 0 && !busy ? (
            <p className="cms-hint">No images in the library yet. Upload one above.</p>
          ) : null}
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="cms-media-card"
              disabled={busy}
              onClick={() => onSelect({ ...item, alt: alt || item.alt })}
            >
              <img src={item.url} alt={item.alt || item.filename} />
              <small>{item.filename}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
