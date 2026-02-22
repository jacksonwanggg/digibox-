import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import EventCard from "../components/EventCard";
import type { DigiEvent } from "../data/events";

const FIELDS = [
  { key: "title", label: "title", placeholder: "Event title", required: true },
  { key: "description", label: "description", placeholder: "What's this event about?", required: true },
  { key: "date", label: "date", placeholder: "YYYY-MM-DD", required: true },
  { key: "time", label: "time", placeholder: "e.g. 11:30 AM - 1:30 PM", required: true },
  { key: "location", label: "location", placeholder: "e.g. Library Walkway", required: true },
  { key: "instagramUrl", label: "instagram_url", placeholder: "https://instagram.com/p/...", required: false },
  { key: "image", label: "image", placeholder: "Paste an image URL", required: false },
] as const;

type FormData = Record<string, string>;

export default function DigiPost() {
  const [form, setForm] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    instagramUrl: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  };

  const canSubmit = form.title && form.description && form.date && form.time && form.location;

  const previewEvent: DigiEvent = {
    id: 0,
    title: form.title || "Event Title",
    description: form.description || "Event description will appear here.",
    date: form.date || "2026-01-01",
    time: form.time || "TBD",
    location: form.location || "TBD",
    instagramUrl: form.instagramUrl || "#",
    image: form.image || undefined,
  };

  const jsonOutput = JSON.stringify(
    {
      id: "auto",
      title: form.title,
      description: form.description,
      date: form.date,
      time: form.time,
      location: form.location,
      instagramUrl: form.instagramUrl || "",
      image: form.image || "",
    },
    null,
    2
  );

  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-purple animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            <span className="gradient-text">/digi-post</span>
          </h1>
          <p>
            Fill in the fields below to generate an event entry for the website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="digi-post-layout">
            <ScrollReveal>
              <div className="digi-post-terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="terminal-title">#digi-post</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-command-line">
                    <span className="terminal-slash">/</span>
                    <span className="terminal-cmd">digi-post</span>
                  </div>

                  {FIELDS.map((field) => (
                    <div className="terminal-field" key={field.key}>
                      <label className="terminal-label">
                        {field.label}
                        {field.required && <span className="terminal-required">*</span>}
                      </label>
                      <input
                        type="text"
                        className="terminal-input"
                        placeholder={field.placeholder}
                        value={form[field.key]}
                        onChange={(e) => update(field.key, e.target.value)}
                      />
                    </div>
                  ))}

                  <button
                    className="terminal-send"
                    disabled={!canSubmit}
                    onClick={() => setSubmitted(true)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <div className="digi-post-preview">
              <ScrollReveal delay={100}>
                <h3 className="digi-post-preview-title">Live Preview</h3>
                <EventCard event={previewEvent} />
              </ScrollReveal>

              {submitted && (
                <ScrollReveal delay={200}>
                  <div className="digi-post-output">
                    <h3 className="digi-post-preview-title">JSON Output</h3>
                    <pre className="digi-post-json">{jsonOutput}</pre>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
