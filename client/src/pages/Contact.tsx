import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up, .fade-in, .slide-left, .slide-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const SERVICE_OPTIONS = [
  "Custom Website",
  "Local SEO & AI Search",
  "Google Business Profile",
  "Google Ads",
  "Web Presence Audit ($97)",
  "Full Package",
  "Not Sure — Let's Talk",
];

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    },
    onError: () => {
      toast.error("Something went wrong. Please try calling us directly.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Please enter your name."); return; }
    if (!form.phone.trim()) { toast.error("Please enter your phone number."); return; }

    // Web3Forms submission
    try {
      const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (web3Key) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_key: web3Key, ...form, subject: `New Contact: ${form.name} — ${form.service || "General Inquiry"}` }),
        });
      }
    } catch (_) { /* silent */ }

    contactMutation.mutate(form);
  };

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="mesh-hero" style={{ minHeight: "45vh", display: "flex", alignItems: "center", paddingTop: "68px" }}>
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div className="gradient-badge fade-in" style={{ marginBottom: "1.25rem" }}>
            <span>✦</span><span>Let's Talk</span>
          </div>
          <h1 className="display-headline fade-up" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
            Start With a{" "}
            <span className="gradient-text">Free Review</span>
          </h1>
          <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "480px", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Tell us about your business. We'll audit your current online presence and show you exactly what's holding you back — free, no strings attached.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>

            {/* Left: info */}
            <div className="slide-left">
              <h2 className="section-headline" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "1.5rem" }}>
                What Happens Next
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
                {[
                  { num: "01", title: "We review your submission", desc: "Within 24 hours, we'll look at your current website, GBP, and local rankings." },
                  { num: "02", title: "Free audit call", desc: "We'll walk you through what we found and what we'd recommend — no sales pressure." },
                  { num: "03", title: "You decide", desc: "If it makes sense to work together, we'll put together a simple plan. No contracts, no setup fees." },
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: "0.72rem", fontWeight: 700 }}>{step.num}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem", color: "var(--text-primary)" }}>{step.title}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="card" style={{ padding: "1.75rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--accent-main)", marginBottom: "1.25rem" }}>
                  Direct Contact
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a href="tel:9413288891" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-primary)", textDecoration: "none", fontSize: "1.1rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    <span style={{ fontSize: "1.1rem" }}>📞</span> (941) 328-8891
                  </a>
                  <a href="mailto:jonathansmart4@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.88rem" }}>
                    <span>✉️</span> jonathansmart4@gmail.com
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
                    <span>📍</span> Serving businesses across the USA
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="slide-right">
              {submitted ? (
                <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1.25rem" }}>🎉</div>
                  <h3 className="section-headline" style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>
                    <span className="gradient-text">Message Sent!</span>
                  </h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                    We'll review your information and reach out within 24 hours with your free audit findings.
                  </p>
                  <Link href="/" className="btn-secondary">← Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.25rem", color: "var(--text-primary)" }}>
                    Request Your Free Review
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Name *</label>
                      <input className="input-field" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Phone *</label>
                      <input className="input-field" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Email</label>
                    <input className="input-field" type="email" placeholder="you@yourbusiness.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Business Name</label>
                    <input className="input-field" placeholder="Your business name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>I'm Interested In</label>
                    <select className="input-field" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                    <textarea className="input-field" rows={4} placeholder="Tell us about your business and what you're looking to achieve..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={contactMutation.isPending}
                    style={{ justifyContent: "center", opacity: contactMutation.isPending ? 0.7 : 1 }}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send My Request →"}
                  </button>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
                    No spam. No setup fees. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>Common Questions</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Before You Reach Out
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { q: "Is the web presence review really free?", a: "Yes. We'll look at your current site, GBP, and local rankings and give you honest feedback — no charge, no obligation." },
              { q: "Are there setup fees?", a: "No setup fees, ever. You pay the monthly rate and that's it. We don't believe in charging you to start working with us." },
              { q: "Do I need to sign a contract?", a: "No long-term contracts. We work month-to-month. If you're not happy, you can cancel anytime." },
              { q: "How quickly can you get my site live?", a: "Most websites are live within 2–3 weeks. Google Ads campaigns go live in 5–7 days." },
            ].map((faq, i) => (
              <div key={i} className="card fade-up" style={{ padding: "1.5rem", animationDelay: `${i * 0.08}s` }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>{faq.q}</div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
