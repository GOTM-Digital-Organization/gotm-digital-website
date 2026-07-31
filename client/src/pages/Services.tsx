import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

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

const SERVICES = [
  {
    num: "01",
    title: "Custom HTML Websites",
    tagline: "Built to rank. Built to convert.",
    desc: "We build fast, mobile-first websites in clean HTML/CSS — not WordPress, not Wix, not GoHighLevel. Custom code means faster load times, better Google rankings, and zero plugin bloat.",
    bullets: [
      "Loads in under 1 second — Google rewards speed",
      "Mobile-first, fully responsive design",
      "Schema markup & structured data built in",
      "AI-search ready from day one",
      "Clear service pages for every location you serve",
    ],
    timeline: "2–3 weeks to launch",
    price: "Starting at $150/mo",
  },
  {
    num: "02",
    title: "Local SEO & AI Search Optimization",
    tagline: "Get found where customers are looking.",
    desc: "Modern search visibility built for how customers search today — traditional Google rankings, map pack results, conversational queries, and AI-powered answer boxes. We cover all of it.",
    bullets: [
      "On-page SEO: titles, meta, headings, content",
      "Local citation building & cleanup",
      "Google Maps ranking optimization",
      "AI search readiness (ChatGPT, Perplexity, Gemini)",
      "Monthly ranking reports",
    ],
    timeline: "Results in 60–90 days",
    price: "Starting at $200/mo",
  },
  {
    num: "03",
    title: "Google Business Profile Authority",
    tagline: "Your most powerful free tool — optimized.",
    desc: "Your Google Business Profile is the single most important free marketing asset for a local business. We optimize it, keep it active, and turn it into a lead-generation machine.",
    bullets: [
      "Full profile audit and optimization",
      "Category, service, and attribute setup",
      "Weekly posts to signal activity to Google",
      "Review response management",
      "Photo strategy and upload schedule",
    ],
    timeline: "Active within 1 week",
    price: "Included in all plans",
  },
  {
    num: "04",
    title: "Google Ads & Conversion Tracking",
    tagline: "Leads now, while SEO matures.",
    desc: "Pay-per-click campaigns that target buyers, not browsers. Every click is tracked. Every dollar is accountable. We build dedicated landing pages that convert — not just drive traffic.",
    bullets: [
      "Keyword research targeting buyer intent",
      "Dedicated high-converting landing pages",
      "Call tracking & form conversion setup",
      "Google conversion tracking integration",
      "Monthly performance reporting",
    ],
    timeline: "Live within 5–7 days",
    price: "Starting at $150/mo + ad spend",
  },
];

const PLATFORM_COMPARISON = [
  { platform: "Custom HTML/CSS", speed: 5, seo: 5, note: "WE BUILD THIS", highlight: true },
  { platform: "Astro / Next.js", speed: 5, seo: 5, note: "" },
  { platform: "Webflow", speed: 3, seo: 4, note: "" },
  { platform: "WordPress (optimized)", speed: 3, seo: 3, note: "" },
  { platform: "GoHighLevel (GHL)", speed: 2, seo: 2, note: "" },
  { platform: "Wix / Squarespace", speed: 2, seo: 2, note: "" },
];

function Dots({ count, filled }: { count: number; filled: number }) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          width: 10, height: 10, borderRadius: "50%",
          background: i < filled
            ? i < 2 ? "#ef4444" : i < 4 ? "#f59e0b" : "#22c55e"
            : "rgba(99,102,241,0.15)",
        }} />
      ))}
    </div>
  );
}

export default function Services() {
  useScrollReveal();

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="mesh-hero" style={{ minHeight: "55vh", display: "flex", alignItems: "center", paddingTop: "68px" }}>
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div className="gradient-badge fade-in" style={{ marginBottom: "1.25rem" }}>
            <span>✦</span><span>What We Offer</span>
          </div>
          <h1 className="display-headline fade-up" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
            Services That Actually{" "}
            <span className="gradient-text">Move the Needle</span>
          </h1>
          <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "520px", lineHeight: 1.75, fontSize: "1.05rem" }}>
            No bloated retainers. No vanity metrics. Just the four things that drive real results for local service businesses.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ─────────────────────────────────── */}
      {SERVICES.map((svc, i) => (
        <section
          key={i}
          style={{
            padding: "6rem 0",
            background: i % 2 === 0 ? "var(--bg-base)" : "var(--bg-section)",
          }}
        >
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
              {/* Number + visual */}
              <div className={i % 2 === 0 ? "slide-left" : "slide-right"} style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{
                  borderRadius: "24px",
                  padding: "3rem",
                  background: `linear-gradient(135deg, rgba(217,70,239,0.08), rgba(99,102,241,0.08), rgba(249,115,22,0.06))`,
                  border: "1px solid var(--border-subtle)",
                  display: "flex", flexDirection: "column", gap: "1.5rem",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 800, lineHeight: 1, background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {svc.num}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {svc.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                          <span style={{ color: "#fff", fontSize: "0.6rem", fontWeight: 700 }}>✓</span>
                        </div>
                        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "0.5rem", borderTop: "1px solid var(--border-subtle)" }}>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Timeline</div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--blob-indigo)" }}>{svc.timeline}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Pricing</div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--blob-fuchsia)" }}>{svc.price}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className={i % 2 === 0 ? "slide-right" : "slide-left"} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Service {svc.num}</div>
                <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "0.75rem" }}>
                  {svc.title}
                </h2>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--accent-main)", marginBottom: "1.25rem" }}>
                  {svc.tagline}
                </p>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
                  {svc.desc}
                </p>
                <Link href="/contact" className="btn-primary">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── PLATFORM COMPARISON ──────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem", color: "var(--blob-pink)" }}>Why Custom HTML</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", marginBottom: "1rem" }}>
              Platform Comparison
            </h2>
            <p className="fade-up" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Custom HTML sites load faster, rank higher, and cost less to maintain — Google rewards speed and clean code.
            </p>
          </div>

          <div className="fade-up" style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 2fr", padding: "1rem 1.5rem", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              {["Platform", "Speed", "SEO", "Best For"].map((h) => (
                <div key={h} style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{h}</div>
              ))}
            </div>
            {PLATFORM_COMPARISON.map((row, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr 2fr",
                padding: "1rem 1.5rem",
                background: row.highlight ? "rgba(217,70,239,0.08)" : "transparent",
                borderBottom: i < PLATFORM_COMPARISON.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                borderLeft: row.highlight ? "3px solid var(--blob-fuchsia)" : "3px solid transparent",
                alignItems: "center",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontWeight: row.highlight ? 700 : 400, color: row.highlight ? "#fff" : "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>{row.platform}</span>
                  {row.note && (
                    <span style={{ background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", color: "#fff", fontSize: "0.6rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{row.note}</span>
                  )}
                </div>
                <Dots count={5} filled={row.speed} />
                <Dots count={5} filled={row.seo} />
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>
                  {row.platform === "Custom HTML/CSS" ? "Maximum speed, local service businesses" :
                   row.platform === "Astro / Next.js" ? "Large professional / e-commerce sites" :
                   row.platform === "Webflow" ? "Marketing / design-heavy sites" :
                   row.platform === "WordPress (optimized)" ? "Blogs, content sites, plugins" :
                   row.platform === "GoHighLevel (GHL)" ? "Funnels, CRM, automation" :
                   "Basic DIY sites"}
                </span>
              </div>
            ))}
          </div>

          <div className="fade-up" style={{ marginTop: "2rem", padding: "1.5rem", borderLeft: "3px solid var(--blob-fuchsia)", background: "rgba(217,70,239,0.06)", borderRadius: "0 12px 12px 0" }}>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>
              <span style={{ color: "var(--blob-pink)", fontWeight: 700 }}>The bottom line: </span>
              <em>The fastest websites on the internet are not WordPress. They are static or hand-coded HTML sites delivered through a CDN. A 20-page business site built in clean HTML can load in under one second — and Google notices.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── AUDIT OFFER ──────────────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>Special Offer</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>
              Web Presence &{" "}
              <span className="gradient-text">AI Search Readiness Audit</span>
            </h2>
            <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
              A full audit of your website, Google Business Profile, local citations, and AI search visibility — delivered as a clear, actionable report.
            </p>
            <div className="fade-up" style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "baseline", gap: "0.5rem" }}>
              <span className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800 }}>$97</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>one-time</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              { icon: "🌐", title: "Website Audit", items: ["Page speed & Core Web Vitals", "Mobile usability check", "On-page SEO review", "Schema markup analysis"] },
              { icon: "📍", title: "GBP Audit", items: ["Profile completeness score", "Category & attribute review", "Review velocity analysis", "Photo & post strategy"] },
              { icon: "🤖", title: "AI Search Audit", items: ["ChatGPT visibility check", "Perplexity & Gemini presence", "Structured data review", "Content gap analysis"] },
            ].map((col, i) => (
              <div key={i} className="card fade-up" style={{ padding: "2rem", animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{col.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "1rem", color: "var(--text-primary)" }}>{col.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {col.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--blob-fuchsia)", fontWeight: 700, fontSize: "0.8rem" }}>✓</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-primary fade-up">
              Request Your Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "6rem 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow fade-up" style={{ marginBottom: "1.25rem", color: "var(--blob-pink)" }}>Ready to Start?</div>
          <h2 className="section-headline fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "#fff", marginBottom: "1.5rem" }}>
            Request a Free Web Presence Review
          </h2>
          <p className="fade-up" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            We'll audit your current online presence and show you exactly what's holding you back. Free. No strings attached.
          </p>
          <Link href="/contact" className="btn-primary fade-up">
            Request My Free Review →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
