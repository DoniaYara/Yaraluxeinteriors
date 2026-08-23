"use client";

import { useEffect, useState } from "react";

export default function MediaPage() {
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

  useEffect(() => { load(); }, []);

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
      if (!res.ok) setError(data.error || "Upload failed.");
      else {
        setPendingFile(null);
        setAlt("");
        load();
      }
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

  async function saveAlt(id, value) {
    await fetch(`/api/author/media/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alt: value })
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
      {busy ? <p className="cms-hint">Uploading…</p> : null}
      <div className="cms-actions">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" />
        <button className="cms-btn ghost" type="button" onClick={() => load(q)}>Search</button>
        <input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Alt text for new upload" />
        <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={onFileChange} disabled={busy} />
        <button
          type="button"
          className="cms-btn"
          disabled={!pendingFile || busy}
          onClick={() => uploadFile(pendingFile)}
        >
          {busy ? "Uploading…" : "Upload"}
        </button>
      </div>
      {pendingFile ? <p className="cms-hint">Selected file: {pendingFile.name}</p> : null}
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
