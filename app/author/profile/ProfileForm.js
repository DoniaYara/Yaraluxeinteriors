"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MediaPicker from "@/components/cms/MediaPicker";

export default function ProfilePage({ author }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: author.name || "",
    bio: author.bio || "",
    imageUrl: author.imageUrl || "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [mediaOpen, setMediaOpen] = useState(false);

  async function save(event) {
    event.preventDefault();
    setError("");
    const res = await fetch("/api/author/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Could not update profile.");
      return;
    }
    if (data.passwordChanged) {
      setMessage("Password updated. Please sign in again.");
      await fetch("/api/author/logout", { method: "POST" });
      router.replace("/author/login");
      return;
    }
    setMessage("Profile saved.");
    router.refresh();
  }

  return (
    <>
      <h1>Profile</h1>
      {error ? <p className="cms-error">{error}</p> : null}
      {message ? <p>{message}</p> : null}
      <form className="cms-form" onSubmit={save}>
        <div className="cms-field"><label>Name</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
        <div className="cms-field"><label>Bio</label><textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></div>
        <div className="cms-field">
          <label>Profile image</label>
          {form.imageUrl ? <p><img src={form.imageUrl} alt="" style={{ maxWidth: 160 }} /></p> : null}
          <input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="Or paste a URL" />
          <button type="button" className="cms-btn ghost" onClick={() => setMediaOpen(true)}>Upload / select image</button>
        </div>
        <div className="cms-field"><label>New password</label><input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Leave blank to keep the current password" /></div>
        <button className="cms-btn" type="submit">Save profile</button>
      </form>
      {mediaOpen ? (
        <MediaPicker
          onClose={() => setMediaOpen(false)}
          onSelect={(item) => {
            setForm((prev) => ({ ...prev, imageUrl: item.url }));
            setMediaOpen(false);
          }}
        />
      ) : null}
    </>
  );
}
