"use client";

import { useEffect, useState } from "react";

export default function AuthorsAdminPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "author", bio: "" });

  async function load() {
    const res = await fetch("/api/author/authors");
    const data = await res.json();
    if (!res.ok) setError(data.error || "Admin only.");
    else setItems(data.authors || []);
  }
  useEffect(() => { load(); }, []);

  async function create(event) {
    event.preventDefault();
    const res = await fetch("/api/author/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) setError(data.error || "Could not create author.");
    else {
      setForm({ name: "", email: "", password: "", role: "author", bio: "" });
      load();
    }
  }

  async function patch(id, body) {
    const res = await fetch(`/api/author/authors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) setError(data.error || "Update failed.");
    load();
  }

  async function remove(id) {
    if (!window.confirm("Delete this author? Articles must already be reassigned or trashed.")) return;
    const res = await fetch(`/api/author/authors/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) setError(data.error || "Could not delete.");
    load();
  }

  return (
    <>
      <h1>Authors</h1>
      {error ? <p className="cms-error">{error}</p> : null}
      <form className="cms-form" onSubmit={create}>
        <div className="cms-grid-2">
          <div className="cms-field"><label>Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
          <div className="cms-field"><label>Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
        </div>
        <div className="cms-grid-2">
          <div className="cms-field"><label>Password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></div>
          <div className="cms-field">
            <label>Role</label>
            <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="cms-field"><label>Bio</label><textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></div>
        <button className="cms-btn" type="submit">Create author</button>
      </form>
      <div className="cms-table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td><span className={`cms-badge ${item.status}`}>{item.status}</span></td>
                <td className="cms-actions">
                  <button type="button" className="cms-btn ghost" onClick={() => patch(item.id, { status: item.status === "active" ? "disabled" : "active" })}>
                    {item.status === "active" ? "Disable" : "Enable"}
                  </button>
                  <button type="button" className="cms-btn ghost" onClick={() => {
                    const password = window.prompt("New password (min 10 characters)");
                    if (password) patch(item.id, { password });
                  }}>Reset password</button>
                  <button type="button" className="cms-btn danger" onClick={() => remove(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
