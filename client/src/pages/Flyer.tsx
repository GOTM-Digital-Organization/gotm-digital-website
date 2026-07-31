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

export default function Flyer() {
  useScrollReveal();

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="mesh-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: "68px" }}>
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div className="gradient-badge fade-in" style={{ marginBottom: "1.25rem" }}>
            <span>✦</span><span>Marketing That Works</span>
          </div>
          <h1 className="display-headline fade-up" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", maxWidth: "800px", marginBottom: "1.25rem" }}>
            The Digital Presence{" "}
            <span className="gradient-text">That Gets Your Phone Ringing</span>
          </h1>
          <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.75, fontSize: "1.1rem", marginBottom: "2rem" }}>
            Wherever local service businesses need honest digital marketing — wherever you are, whatever you do — we build the online presence that gets you found.
          </p>
          <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" className="btn-primary">Request a Free Review →</Link>
            <a href="tel:9413288891" className="btn-secondary">(941) 328-8891</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <div style={{ background: "var(--bg-dark)", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {[
              { num: "7+", label: "Local Businesses Served" },
              { num: "<1s", label: "Average Page Load Time" },
              { num: "$100", label: "Starting Monthly Rate" },
              { num: "0", label: "Setup Fees. Ever." },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-orange))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.4rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 01: THE PROBLEM ──────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="slide-left">
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>01 — The Problem</div>
              <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "1.25rem" }}>
                Your Customers Are Searching.{" "}
                <span className="gradient-text">Are You Showing Up?</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                97% of consumers search online before making a purchase or calling a local business. If your website is slow, your Google profile is incomplete, or you're not running ads — you're invisible to the people who are ready to buy right now.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                The businesses that show up at the top of Google, Maps, and AI-powered search tools are getting the calls. The ones that don't are watching their competitors grow.
              </p>
            </div>
            <div className="slide-right">
              <div className="card" style={{ padding: "2.5rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--accent-main)", marginBottom: "1.5rem" }}>
                  Where Customers Search Today
                </div>
                {[
                  { label: "Google Search", pct: 92 },
                  { label: "Google Maps", pct: 78 },
                  { label: "ChatGPT / AI Tools", pct: 34 },
                  { label: "Yelp / Directory Sites", pct: 28 },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500 }}>{item.label}</span>
                      <span style={{ fontSize: "0.82rem", color: "var(--accent-main)", fontWeight: 700 }}>{item.pct}%</span>
                    </div>
                    <div style={{ height: 6, background: "var(--border-subtle)", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${item.pct}%`, background: "linear-gradient(90deg, var(--blob-fuchsia), var(--blob-indigo))", borderRadius: 3, transition: "width 1s cubic-bezier(0.23,1,0.32,1)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: PLATFORM COMPARISON ─────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem", color: "var(--blob-pink)" }}>02 — Why Custom HTML</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", marginBottom: "1rem" }}>
              Not All Websites Are Created Equal
            </h2>
            <p className="fade-up" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Custom HTML sites load faster, rank higher, and cost less to maintain. Google rewards speed and clean code.
            </p>
          </div>

          <div className="fade-up" style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 2fr", padding: "1rem 1.5rem", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              {["Platform", "Speed", "SEO", "Best For"].map((h) => (
                <div key={h} style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.5)" }}>{h}</div>
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
        </div>
      </section>

      {/* ── SECTION 03: SERVICES ─────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>03 — What We Do</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Four Things That Drive{" "}
              <span className="gradient-text">Real Results</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🌐", num: "01", title: "Custom HTML Websites", desc: "Fast, mobile-first, built to rank. No WordPress bloat. No plugins. Just clean code that Google loves.", price: "From $150/mo" },
              { icon: "📍", num: "02", title: "Local SEO & AI Search", desc: "Get found on Google, Maps, ChatGPT, and Perplexity. We optimize for every place your customers search.", price: "From $200/mo" },
              { icon: "🗺️", num: "03", title: "Google Business Profile", desc: "Your most powerful free tool — fully optimized, actively managed, and generating calls.", price: "Included in all plans" },
              { icon: "📢", num: "04", title: "Google Ads", desc: "Targeted campaigns that reach buyers, not browsers. Every click tracked. Every dollar accountable.", price: "From $150/mo + ad spend" },
            ].map((svc, i) => (
              <div key={i} className="card fade-up" style={{ padding: "2rem", animationDelay: `${i * 0.08}s` }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{svc.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--accent-main)", marginBottom: "0.5rem" }}>{svc.num}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{svc.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>{svc.desc}</p>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--blob-fuchsia)" }}>{svc.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: PRICING ──────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-base)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>04 — Simple Pricing</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "0.75rem" }}>
              Starting at{" "}
              <span className="gradient-text">$100/Month</span>
            </h2>
            <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              No setup fees. No long-term contracts. No surprises. Just honest pricing for real results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>
            {[
              { name: "Starter", price: "$100", period: "/mo", desc: "For businesses that need a fast, professional web presence and nothing else.", features: ["Custom HTML website (up to 5 pages)", "Mobile-first design", "Basic on-page SEO", "Google Business Profile setup", "1 monthly update included"] },
              { name: "Growth", price: "$200", period: "/mo", desc: "For businesses ready to dominate local search and generate consistent leads.", features: ["Everything in Starter", "Full local SEO campaign", "AI search optimization", "Weekly GBP posts", "Monthly ranking report", "Priority support"], highlight: true },
              { name: "Authority", price: "$350", period: "/mo", desc: "For businesses that want to own their market and outrank every competitor.", features: ["Everything in Growth", "Google Ads management", "Dedicated landing pages", "Call tracking setup", "Conversion optimization", "Bi-weekly strategy calls"] },
            ].map((plan, i) => (
              <div key={i} className={`card fade-up ${plan.highlight ? "card-featured" : ""}`} style={{ padding: "2.5rem", animationDelay: `${i * 0.1}s`, position: "relative" }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "0.3rem 1rem", borderRadius: "100px", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.75rem" }}>
                  <span className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 800 }}>{plan.price}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{plan.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: "var(--blob-fuchsia)", fontWeight: 700, fontSize: "0.8rem", marginTop: "1px" }}>✓</span>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={plan.highlight ? "btn-primary" : "btn-secondary"} style={{ justifyContent: "center", textAlign: "center" }}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: AI SEARCH ────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="slide-left">
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>05 — The New Search</div>
              <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "1.25rem" }}>
                AI Is Changing How{" "}
                <span className="gradient-text">Customers Find You</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                More and more people are using ChatGPT, Perplexity, and Google's AI Overview to find local businesses. If your website isn't structured correctly, you won't show up in these results — no matter how good your traditional SEO is.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                We build every website with AI search readiness built in from day one: structured data, clear service descriptions, FAQ content, and the technical signals that AI tools use to recommend businesses.
              </p>
            </div>
            <div className="slide-right">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🤖", title: "ChatGPT & AI Assistants", desc: "When someone asks 'who's the best plumber near me?' — we make sure your name comes up." },
                  { icon: "🔍", title: "Google AI Overview", desc: "Google's AI summaries now appear above traditional results. We optimize for both." },
                  { icon: "💡", title: "Perplexity & Gemini", desc: "New AI search engines are gaining fast. We build for all of them, not just Google." },
                ].map((item, i) => (
                  <div key={i} className="card" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem", color: "var(--text-primary)" }}>{item.title}</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "7rem 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow fade-up" style={{ marginBottom: "1.25rem", color: "var(--blob-pink)" }}>Ready to Get Found?</div>
          <h2 className="section-headline fade-up" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", marginBottom: "1.5rem" }}>
            Request a Free Web Presence Review
          </h2>
          <p className="fade-up" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            We'll audit your website, GBP, and local rankings — free, no strings attached. You'll know exactly where you stand and what to do next.
          </p>
          <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Request My Free Review →</Link>
            <a href="tel:9413288891" className="btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>(941) 328-8891</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
