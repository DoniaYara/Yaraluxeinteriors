"use client";

import { useEffect, useState } from "react";

const empty = { name: "", slug: "", description: "", seoTitle: "", metaDescription: "" };

export default function CategoriesPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState("");
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/author/categories");
    const data = await res.json();
    setItems(data.categories || []);
  }
  useEffect(() => { load(); }, []);

  async function save(event) {
    event.preventDefault();
    setError("");
    const res = await fetch(editingId ? `/api/author/categories/${editingId}` : "/api/author/categories", {
      method: editingId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) setError(data.error || "Could not save.");
    else {
      setForm(empty);
      setEditingId("");
      load();
    }
  }

  async function remove(item) {
    const res = await fetch(`/api/author/categories/${item.id}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (res.status === 409) {
      setError(`${data.error} Choose Edit, or confirm reassignment below.`);
      const other = items.find((c) => c.id !== item.id);
      if (!other) return;
      if (!window.confirm(`${data.error} Reassign ${data.count} articles to “${other.name}”?`)) return;
      const again = await fetch(`/api/author/categories/${item.id}?reassignTo=${other.id}`, { method: "DELETE" });
      if (!again.ok) {
        const againData = await again.json().catch(() => ({}));
        setError(againData.error || "Could not reassign.");
        return;
      }
    }
    load();
  }

  return (
    <>
      <h1>Categories</h1>
      {error ? <p className="cms-error">{error}</p> : null}
      <form className="cms-form" onSubmit={save}>
        <div className="cms-grid-2">
          <div className="cms-field"><label>Name</label><input data-testid="category-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
          <div className="cms-field"><label>Slug</label><input data-testid="category-slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} /></div>
        </div>
        <div className="cms-field"><label>Description</label><textarea data-testid="category-description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
        <div className="cms-field"><label>SEO title</label><input data-testid="category-seo-title" value={form.seoTitle} onChange={(e) => setForm({ ...form, seoTitle: e.target.value })} /></div>
        <div className="cms-field"><label>Meta description</label><textarea data-testid="category-meta" value={form.metaDescription} onChange={(e) => setForm({ ...form, metaDescription: e.target.value })} /></div>
        <button className="cms-btn" type="submit" data-testid="category-save">{editingId ? "Update category" : "Create category"}</button>
        {editingId ? <button type="button" className="cms-btn ghost" onClick={() => { setEditingId(""); setForm(empty); }}>Cancel edit</button> : null}
      </form>
      <div className="cms-table">
        <table>
          <thead><tr><th>Name</th><th>Slug</th><th>Articles</th><th></th></tr></thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.slug}</td>
                <td>{item.articleCount}</td>
                <td className="cms-actions">
                  <button type="button" className="cms-btn ghost" onClick={() => {
                    setEditingId(item.id);
                    setForm({
                      name: item.name,
                      slug: item.slug,
                      description: item.description || "",
                      seoTitle: item.seoTitle || "",
                      metaDescription: item.metaDescription || ""
                    });
                  }}>Edit</button>
                  <button type="button" className="cms-btn danger" data-testid={`category-delete-${item.slug}`} onClick={() => remove(item)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
