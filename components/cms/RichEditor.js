"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useImperativeHandle, forwardRef, useState } from "react";
import { isSafeHttpUrl } from "@/lib/cms/constants";

const TOOLS = [
  { key: "paragraph", label: "P", run: (e) => e.chain().focus().setParagraph().run(), active: (e) => e.isActive("paragraph") },
  { key: "h2", label: "H2", run: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(), active: (e) => e.isActive("heading", { level: 2 }) },
  { key: "h3", label: "H3", run: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(), active: (e) => e.isActive("heading", { level: 3 }) },
  { key: "bold", label: "Bold", run: (e) => e.chain().focus().toggleBold().run(), active: (e) => e.isActive("bold") },
  { key: "italic", label: "Italic", run: (e) => e.chain().focus().toggleItalic().run(), active: (e) => e.isActive("italic") },
  { key: "underline", label: "Underline", run: (e) => e.chain().focus().toggleUnderline().run(), active: (e) => e.isActive("underline") },
  { key: "strike", label: "Strike", run: (e) => e.chain().focus().toggleStrike().run(), active: (e) => e.isActive("strike") },
  { key: "bullet", label: "Bullets", run: (e) => e.chain().focus().toggleBulletList().run(), active: (e) => e.isActive("bulletList") },
  { key: "ordered", label: "Numbers", run: (e) => e.chain().focus().toggleOrderedList().run(), active: (e) => e.isActive("orderedList") },
  { key: "quote", label: "Quote", run: (e) => e.chain().focus().toggleBlockquote().run(), active: (e) => e.isActive("blockquote") },
  { key: "hr", label: "Rule", run: (e) => e.chain().focus().setHorizontalRule().run(), active: () => false },
  { key: "code", label: "Code", run: (e) => e.chain().focus().toggleCode().run(), active: (e) => e.isActive("code") },
  { key: "codeBlock", label: "Code block", run: (e) => e.chain().focus().toggleCodeBlock().run(), active: (e) => e.isActive("codeBlock") },
  { key: "undo", label: "Undo", run: (e) => e.chain().focus().undo().run(), active: () => false },
  { key: "redo", label: "Redo", run: (e) => e.chain().focus().redo().run(), active: () => false }
];

const RichEditor = forwardRef(function RichEditor({ initialHtml = "", onDirty, onImage }, ref) {
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [tick, setTick] = useState(0);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Image.configure({ allowBase64: false }),
      Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { rel: "noopener noreferrer" } }),
      Placeholder.configure({ placeholder: "Write the article…" })
    ],
    content: initialHtml || "<p></p>",
    editorProps: { attributes: { "data-testid": "article-body" } },
    onUpdate: () => onDirty?.(),
    onSelectionUpdate: () => setTick((n) => n + 1),
    onTransaction: () => setTick((n) => n + 1)
  });

  useEffect(() => {
    if (editor && initialHtml !== undefined && editor.getHTML() !== initialHtml && !editor.isFocused) {
      editor.commands.setContent(initialHtml || "<p></p>", false);
    }
  }, [editor, initialHtml]);

  useImperativeHandle(ref, () => ({
    getHTML: () => editor?.getHTML() || "",
    insertImage: (src, alt = "") => {
      editor?.chain().focus().setImage({ src, alt }).run();
    }
  }), [editor]);

  if (!editor) return <p>Loading editor…</p>;

  function applyLink() {
    const value = linkUrl.trim();
    if (!value) {
      editor.chain().focus().unsetLink().run();
    } else {
      const href = value.startsWith("/") || /^https?:\/\//i.test(value) ? value : `https://${value}`;
      if (!isSafeHttpUrl(href)) return;
      editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
    }
    setLinkOpen(false);
  }

  return (
    <div className="cms-editor">
      <div className="cms-toolbar">
        {TOOLS.map((tool) => (
          <button
            key={tool.key}
            type="button"
            data-testid={`toolbar-${tool.key}`}
            className={tool.active(editor) ? "is-active" : undefined}
            onMouseDown={(event) => {
              event.preventDefault();
              tool.run(editor);
            }}
          >
            {tool.label}
          </button>
        ))}
        <button
          type="button"
          data-testid="toolbar-link"
          className={editor.isActive("link") ? "is-active" : undefined}
          onMouseDown={(event) => {
            event.preventDefault();
            setLinkUrl(editor.getAttributes("link").href || "");
            setLinkOpen(true);
          }}
        >
          Link
        </button>
        <button
          type="button"
          data-testid="toolbar-unlink"
          onMouseDown={(event) => {
            event.preventDefault();
            editor.chain().focus().unsetLink().run();
          }}
        >
          Unlink
        </button>
        <button
          type="button"
          data-testid="toolbar-image"
          onMouseDown={(event) => {
            event.preventDefault();
            onImage?.();
          }}
        >
          Image
        </button>
      </div>
      {linkOpen ? (
        <div className="cms-field">
          <input data-testid="link-url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="https:// or /internal-page" />
          <div className="cms-actions">
            <button type="button" data-testid="link-apply" className="cms-btn" onClick={applyLink}>Apply link</button>
            <button type="button" className="cms-btn ghost" onClick={() => setLinkOpen(false)}>Cancel</button>
          </div>
        </div>
      ) : null}
      <EditorContent editor={editor} />
      <span hidden>{tick}</span>
    </div>
  );
});

export default RichEditor;
