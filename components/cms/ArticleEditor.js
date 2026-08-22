"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import RichEditor from "./RichEditor";
import MediaPicker from "./MediaPicker";
import { SEO_TITLE_HINT, META_DESC_HINT } from "@/lib/cms/constants";
import { MELBOURNE_TZ, melbourneInputToUtc, utcToMelbourneInput } from "@/lib/cms/timezone";

export default function ArticleEditor({ article, authors = [], categories = [], currentAuthor }) {
  const router = useRouter();
  const editorRef = useRef(null);
  const [form, setForm] = useState(() => ({
    title: article?.title || "",
    slug: article?.slug || "",
    excerpt: article?.excerpt || "",
    featuredImage: article?.featuredImage || "",
    featuredImageAlt: article?.featuredImageAlt || "",
    seoTitle: article?.seoTitle || "",
    metaDescription: article?.metaDescription || "",
    canonicalUrl: article?.canonicalUrl || "",
    tags: article?.tags || "",
    notes: article?.notes || "",
    authorId: article?.authorId || currentAuthor?.id || "",
    categoryIds: article?.categoryIds || [],
    intendedPublishOn: article?.intendedPublishOn || "",
    publishAt: article?.publishAt ? utcToMelbourneInput(article.publishAt) : ""
  }));
  const [status, setStatus] = useState(article?.status || "draft");
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mediaMode, setMediaMode] = useState("featured");
  const [pending, setPending] = useState(false);
  const [newCat, setNewCat] = useState("");

  useEffect(() => {
    const onLeave = (event) => {
      if (!dirty) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", onLeave);
    return () => window.removeEventListener("beforeunload", onLeave);
  }, [dirty]);

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
    setDirty(true);
  }

  function payload() {
    return {
      ...form,
      content: editorRef.current?.getHTML() || "",
      categoryIds: form.categoryIds
    };
  }

  async function save(action, extra = {}) {
    setPending(true);
    setError("");
    const body = { ...payload(), ...extra };
    let res;
    if (!article?.id) {
      res = await fetch("/api/author/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, status: action === "planned" ? "planned" : "draft" })
      });
    } else if (action === "update") {
      res = await fetch(`/api/author/articles/${article.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } else {
      res = await fetch(`/api/author/articles/${article.id}/action`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...body })
      });
    }
    const data = await res.json().catch(() => ({}));
    setPending(false);
    if (!res.ok) {
      if (data.error?.includes("slug") && action === "update") {
        if (window.confirm("This article is published. Changing the slug will create a permanent redirect from the old URL. Continue?")) {
          return save("update", { confirmSlugChange: true });
        }
      }
      setError(data.error || "Could not save.");
      return;
    }
    setDirty(false);
    if (data.article) {
      setStatus(data.article.status);
      if (!article?.id) router.replace(`/author/articles/${data.article.id}`);
      else router.refresh();
    }
    if (data.deleted) router.replace("/author/articles?status=trash");
  }

  async function addCategory() {
    const name = newCat.trim();
    if (!name) return;
    const res = await fetch("/api/author/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Could not create category.");
      return;
    }
    setForm((prev) => ({ ...prev, categoryIds: [...prev.categoryIds, data.category.id] }));
    setNewCat("");
    router.refresh();
  }

  const previewHref = article?.slug ? `/blog/preview/${article.slug}` : null;

  return (
    <div>
      {error ? <p className="cms-error">{error}</p> : null}
      <div className="cms-actions">
        {status === "planned" || !article ? (
          <>
            {!article ? <button className="cms-btn ghost" type="button" disabled={pending} onClick={() => save("planned")}>Save as planned</button> : null}
            <button className="cms-btn ghost" type="button" data-testid="save-draft" disabled={pending} onClick={() => save(article ? "save-draft" : "draft")}>Save draft</button>
            <button className="cms-btn" type="button" disabled={pending} onClick={() => save(article ? "publish" : "draft")}>{article ? "Publish now" : "Create draft"}</button>
          </>
        ) : null}
        {status === "draft" ? (
          <>
            <button className="cms-btn ghost" type="button" data-testid="save-draft" disabled={pending} onClick={() => save("save-draft")}>Save draft</button>
            <button className="cms-btn" type="button" disabled={pending} onClick={() => save("publish")}>Publish now</button>
            <button className="cms-btn ghost" type="button" disabled={pending} onClick={() => save("schedule", { publishAt: melbourneInputToUtc(form.publishAt) })}>Schedule</button>
            {previewHref ? <a className="cms-btn ghost" href={previewHref} target="_blank" rel="noreferrer">Preview</a> : null}
            <button className="cms-btn danger" type="button" onClick={() => save("trash")}>Move to trash</button>
          </>
        ) : null}
        {status === "scheduled" ? (
          <>
            <button className="cms-btn ghost" type="button" disabled={pending} onClick={() => save("update")}>Update article</button>
            <button className="cms-btn ghost" type="button" disabled={pending} onClick={() => save("schedule", { publishAt: melbourneInputToUtc(form.publishAt) })}>Update schedule</button>
            <button className="cms-btn" type="button" disabled={pending} onClick={() => save("publish")}>Publish now</button>
            <button className="cms-btn ghost" type="button" onClick={() => save("cancel-schedule")}>Cancel schedule</button>
            {previewHref ? <a className="cms-btn ghost" href={previewHref} target="_blank" rel="noreferrer">Preview</a> : null}
            <button className="cms-btn danger" type="button" onClick={() => save("trash")}>Move to trash</button>
          </>
        ) : null}
        {status === "published" ? (
          <>
            <button className="cms-btn" type="button" disabled={pending} onClick={() => save("update")}>Update article</button>
            {previewHref ? <a className="cms-btn ghost" href={`/blog/${article.slug}`} target="_blank" rel="noreferrer">View live</a> : null}
            <button className="cms-btn ghost" type="button" onClick={() => save("unpublish")}>Unpublish</button>
            <button className="cms-btn danger" type="button" onClick={() => save("trash")}>Move to trash</button>
          </>
        ) : null}
        {status === "trash" ? (
          <>
            <button className="cms-btn" type="button" onClick={() => save("restore")}>Restore</button>
            <button className="cms-btn danger" type="button" onClick={() => {
              if (window.confirm("Permanently delete this article? This cannot be undone.")) save("delete", { confirm: true });
            }}>Delete permanently</button>
          </>
        ) : null}
        {status === "planned" && article ? (
          <>
            <button className="cms-btn" type="button" disabled={pending} onClick={() => save("save-draft")}>Start writing / save draft</button>
            <button className="cms-btn ghost" type="button" disabled={pending} onClick={() => save("schedule", { publishAt: melbourneInputToUtc(form.publishAt) })}>Schedule</button>
            <button className="cms-btn" type="button" disabled={pending} onClick={() => save("publish")}>Publish now</button>
          </>
        ) : null}
      </div>

      <div className="cms-grid-2">
        <div className="cms-form">
          <div className="cms-field"><label>Title</label><input data-testid="article-title" value={form.title} onChange={(e) => setField("title", e.target.value)} /></div>
          <div className="cms-field"><label>Slug</label><input data-testid="article-slug" value={form.slug} onChange={(e) => setField("slug", e.target.value)} /></div>
          <RichEditor ref={editorRef} initialHtml={article?.content || ""} onDirty={() => setDirty(true)} onImage={() => { setMediaMode("inline"); setMediaOpen(true); }} />
        </div>
        <div>
          <div className="cms-form">
            <div className="cms-field">
              <label>Featured image</label>
              {form.featuredImage ? <p><img src={form.featuredImage} alt={form.featuredImageAlt} style={{ maxWidth: "100%" }} /></p> : null}
              <button type="button" className="cms-btn ghost" onClick={() => { setMediaMode("featured"); setMediaOpen(true); }}>Select image</button>
            </div>
            <div className="cms-field"><label>Featured image alt</label><input value={form.featuredImageAlt} onChange={(e) => setField("featuredImageAlt", e.target.value)} /></div>
            <div className="cms-field"><label>Excerpt</label><textarea value={form.excerpt} onChange={(e) => setField("excerpt", e.target.value)} /></div>
            <div className="cms-field">
              <label>Categories</label>
              <select multiple value={form.categoryIds} onChange={(e) => setField("categoryIds", [...e.target.selectedOptions].map((o) => o.value))} style={{ minHeight: 90 }}>
                {categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>
              <div className="cms-actions">
                <input value={newCat} onChange={(e) => setNewCat(e.target.value)} placeholder="New category" />
                <button type="button" className="cms-btn ghost" onClick={addCategory}>+ Add category</button>
              </div>
            </div>
            <div className="cms-field"><label>Tags</label><input value={form.tags} onChange={(e) => setField("tags", e.target.value)} placeholder="Comma separated" /></div>
            {currentAuthor?.role === "admin" ? (
              <div className="cms-field">
                <label>Author</label>
                <select value={form.authorId} onChange={(e) => setField("authorId", e.target.value)}>
                  {authors.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
            ) : null}
            <div className="cms-field"><label>Intended date (planned calendar)</label><input type="date" value={form.intendedPublishOn || ""} onChange={(e) => setField("intendedPublishOn", e.target.value)} /><p className="cms-hint">Does not auto-publish.</p></div>
            <div className="cms-field">
              <label>Schedule publish at ({MELBOURNE_TZ})</label>
              <input type="datetime-local" data-testid="schedule-at" value={form.publishAt} onChange={(e) => setField("publishAt", e.target.value)} />
              <p className="cms-hint">Interpreted as Australia/Melbourne, including daylight saving. Stored as UTC. Vercel Hobby cron runs once per day, so the exact minute is not guaranteed on that plan. Vercel Pro uses the five-minute job in vercel.json.</p>
            </div>
            <div className="cms-field"><label>SEO title</label><input value={form.seoTitle} onChange={(e) => setField("seoTitle", e.target.value)} /><p className="cms-hint">{form.seoTitle.length}/{SEO_TITLE_HINT} recommended</p></div>
            <div className="cms-field"><label>Meta description</label><textarea value={form.metaDescription} onChange={(e) => setField("metaDescription", e.target.value)} /><p className="cms-hint">{form.metaDescription.length}/{META_DESC_HINT} recommended</p></div>
            <div className="cms-field"><label>Canonical URL</label><input value={form.canonicalUrl} onChange={(e) => setField("canonicalUrl", e.target.value)} placeholder="Leave blank to use the article URL" /></div>
            <div className="cms-field"><label>Notes</label><textarea value={form.notes} onChange={(e) => setField("notes", e.target.value)} /></div>
            <p>Status: <span className={`cms-badge ${status}`}>{status}</span></p>
          </div>
        </div>
      </div>
      {mediaOpen ? (
        <MediaPicker
          onClose={() => setMediaOpen(false)}
          onSelect={(item) => {
            if (mediaMode === "featured") {
              setField("featuredImage", item.url);
              if (item.alt) setField("featuredImageAlt", item.alt);
            } else {
              editorRef.current?.insertImage(item.url, item.alt || "");
            }
            setMediaOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}

