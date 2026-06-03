import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Phone, CheckCircle2, ChevronDown, ChevronRight,
  MapPin, Star, TrendingUp, Globe, Search, Megaphone, ExternalLink, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

// ── Scroll-reveal hook ──────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Counter animation ───────────────────────────────────────
function useCounter(end: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(value, 1800, started);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.75rem", fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#666666", marginTop: "0.4rem", letterSpacing: "0.05em", fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
    </div>
  );
}

// ── FAQ Accordion ───────────────────────────────────────────
const faqs = [
  {
    icon: "🌱",
    q: "New Websites Take Time — Here's Why",
    a: "A brand-new domain won't rank on Google overnight. It typically takes 1–3 years to fully mature. Your competitors have months or years of search history, backlinks, and reviews ahead of you — you're starting from zero, and that's completely normal. Think of your website as an investment that compounds over time. The businesses that stay consistent are the ones that win.",
  },
  {
    icon: "🏗️",
    q: "Why Custom HTML Beats WordPress & Others",
    a: "Custom HTML sites load faster and rank better — Google rewards speed and clean code. No bloated plugins, no unnecessary scripts. Just lean, purpose-built code. Everything optimized from day one: meta tags, schema markup, mobile layout, image compression, and site structure. Over time, this foundation consistently outperforms WordPress, GoHighLevel, Wix, and Squarespace.",
  },
  {
    icon: "⭐",
    q: "Google Business Profile — Your Most Powerful Free Tool",
    a: "Your Google Business Profile is your most powerful free tool while your website grows. Ask every single customer for a review — every time, no exceptions. Reviews build local trust fast. Keep your profile active: photos, hours, services, and regular posts all signal credibility to Google. This works independently of your website's age and can start showing results within weeks.",
  },
  {
    icon: "⚡",
    q: "Need Leads Right Now? — Google Ads",
    a: "Google Ads put you in front of people actively searching for your services today — not in two years. We build dedicated landing pages in the same clean HTML format — fast, focused, and built to convert. You control the budget and only pay when someone clicks your ad. Ads bridge the gap while your organic SEO matures — scale back once the site takes off.",
  },
  {
    icon: "🗺️",
    q: "The Growth Timeline — What to Expect",
    a: "Months 1–6: Website live, Google profile active, reviews rolling in, ads running if budget allows. Months 6–18: SEO gains traction, domain builds authority, content starts paying off. Year 2–3: Organic leads flow consistently. ROI accelerates. Ads become optional, not essential. The key is staying consistent — most businesses quit before the compounding kicks in.",
  },
];

function FaqItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fade-up" data-delay={String(index * 80)} style={{ marginBottom: "0.625rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: open ? "#F0F0F0" : "#F5F5F5",
          border: `1px solid ${open ? "#C8102E" : "#DEDEDE"}`,
          borderRadius: open ? "8px 8px 0 0" : "8px",
          color: "#111111",
          padding: "1.125rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.875rem",
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 0.2s, background 0.2s",
        }}
      >
        <span style={{ fontSize: "1.375rem", flexShrink: 0 }}>{item.icon}</span>
        <span style={{ flex: 1, fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600 }}>{item.q}</span>
        <ChevronDown
          size={18}
          style={{ color: "#C8102E", flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div style={{
          background: "#F0F0F0",
          border: "1px solid #C8102E",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          padding: "1.25rem 1.25rem 1.375rem",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          color: "#444444",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

// ── Real client portfolio items ─────────────────────────────
const clientSites = [
  {
    name: "Siesta Key Sport Fishing Charters",
    url: "https://siestakeysportfishingcharters.com",
    industry: "Fishing Charters",
    location: "Siesta Key, FL",
    icon: "🎣",
    color: "#E0EEF5",
    desc: "Custom website for a premier sport fishing charter service on Siesta Key.",
  },
  {
    name: "Titan Up Marine Services",
    url: "https://titanupmarineservices.com",
    industry: "Marine Services",
    location: "Florida",
    icon: "⚓",
    color: "#E0EAF5",
    desc: "Professional marine services website built for maximum local visibility.",
  },
  {
    name: "Reel Smart Charters",
    url: "https://reelsmartcharters.com",
    industry: "Fishing Charters",
    location: "Florida",
    icon: "🐟",
    color: "#E0F5EA",
    desc: "Conversion-focused charter fishing website with SEO-optimized content.",
  },
  {
    name: "Pool Leak Sarasota",
    url: "https://poolleaksarasota.com",
    industry: "Pool Services",
    location: "Sarasota, FL",
    icon: "🏊",
    color: "#E0EAF5",
    desc: "Local service website targeting pool leak detection and repair in Sarasota.",
  },
  {
    name: "SRQ Wash",
    url: "https://srqwash.com",
    industry: "Pressure Washing",
    location: "Sarasota, FL",
    icon: "💧",
    color: "#E0F5F5",
    desc: "High-converting pressure washing website with Google Business optimization.",
  },
  {
    name: "Sarasota Wash and Seal",
    url: "https://sarasotawashandseal.com",
    industry: "Exterior Cleaning",
    location: "Sarasota, FL",
    icon: "✨",
    color: "#EAEAF5",
    desc: "Full-service exterior cleaning website built for local search dominance.",
  },
];

// ── Main Home Component ─────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div style={{ background: "#FFFFFF", color: "#111111", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(10,10,20,0.82) 0%, rgba(10,10,20,0.62) 50%, rgba(10,10,20,0.78) 100%)",
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1.5rem" }}>
              Honest Digital Marketing · Local Service Businesses · Nationwide
            </div>

            <h1 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}>
              Get Your Business<br />
              <span style={{ color: "#C8102E" }}>On The Map.</span><br />
              The Honest Way.
            </h1>

            <p className="fade-up" data-delay="160" style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#D0D8E8",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: 580,
            }}>
              No setup fees. No big promises. No disappearing after you sign up.
              Just honest digital marketing that grows with your business — starting at{" "}
              <strong style={{ color: "#FF8A9A" }}>$100/month</strong>.
            </p>

            <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.1rem", padding: "1rem 2.25rem" }}>
                <Phone size={18} /> Call (941) 328-8891
              </a>
              <Link href="/portfolio" className="btn-gold-outline">
                See Our Work <ChevronRight size={16} />
              </Link>
            </div>

            <div className="fade-up" data-delay="320" style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {["No setup fees", "No long-term contracts", "No empty promises"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#A8B8CC" }}>
                  <CheckCircle2 size={15} style={{ color: "#C8102E", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: "#F8F8F8", borderTop: "1px solid #EBEBEB", borderBottom: "1px solid #EBEBEB", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
            <StatCounter value={6} suffix="+" label="Client Websites Live" />
            <StatCounter value={100} suffix="%" label="No Setup Fees" />
            <StatCounter value={3} suffix="yr" label="Avg. Client Growth" />
            <StatCounter value={5} suffix="★" label="Average Review Score" />
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / ABOUT ── */}
      <section style={{ padding: "6rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div className="fade-up" data-delay="0" style={{ position: "relative" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-local-business-gneDyCA3b7hrCUyM7FV78F.webp"
                alt="Local service businesses across the USA"
                style={{ width: "100%", borderRadius: "10px", display: "block", filter: "brightness(0.85)" }}
              />
              <div style={{
                position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(200,16,46,0.3)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <MapPin size={18} style={{ color: "#C8102E", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>Serving Local Businesses</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111111" }}>Anywhere in the USA</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Our Philosophy</div>
              <h2 className="fade-up" data-delay="80" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 900,
                color: "#111111",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}>
                The Honest Truth About<br />
                <span style={{ color: "#C8102E" }}>Growing Online</span>
              </h2>

              <div className="fade-up callout-gold" data-delay="160" style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#333333", fontStyle: "italic" }}>
                  "I started GOTM Digital because I was tired of watching agencies charge big upfront fees and make promises they couldn't keep. The truth is, digital marketing takes time — and that's okay."
                </p>
              </div>

              <div className="fade-up" data-delay="240" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "💰", text: "Zero setup fees on anything. You pay monthly, starting small." },
                  { icon: "📈", text: "Your investment compounds over time — like a savings account for your business." },
                  { icon: "🤝", text: "My services grow with you. No upselling until you're ready." },
                  { icon: "🎯", text: "Focused exclusively on local service businesses across the USA." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                    <span style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#444444" }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="fade-up" data-delay="320" style={{ marginTop: "2rem" }}>
                <Link href="/services" className="btn-gold-outline">
                  Our Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── SERVICES PREVIEW ── */}
      <section id="services" style={{ padding: "6rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>What We Do</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
            }}>
              Everything You Need to<br />
              <span style={{ color: "#C8102E" }}>Get Found & Get Leads</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: <Globe size={28} style={{ color: "#C8102E" }} />,
                title: "Custom HTML Websites",
                desc: "Modern, conversion-focused websites built to clearly communicate who you are, what you do, and where you work — optimized for Google, maps, and AI-powered search from day one.",
              },
              {
                icon: <Search size={28} style={{ color: "#C8102E" }} />,
                title: "Local SEO & AI Search Optimization",
                desc: "Modern search visibility built for how customers search now — traditional rankings, map results, conversational queries, structured content, and AI-answer readiness.",
              },
              {
                icon: <Star size={28} style={{ color: "#C8102E" }} />,
                title: "Google Business Profile Authority",
                desc: "Your most powerful free tool. We optimize your profile so customers, Google, and AI-powered search results can clearly understand your business and local relevance.",
              },
              {
                icon: <Megaphone size={28} style={{ color: "#C8102E" }} />,
                title: "Google Ads & Conversion Tracking",
                desc: "Get leads now while your organic SEO matures. Ads connected to strong landing pages, clear service messaging, and conversion tracking that improves your entire online presence.",
              },
            ].map((service, i) => (
              <div key={i} className="fade-up card-dark" data-delay={String(i * 80)} style={{ padding: "2rem" }}>
                <div style={{ marginBottom: "1.25rem" }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#111111", marginBottom: "0.75rem" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#666666" }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" data-delay="0" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn-gold-outline">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── AI SEARCH SHIFT SECTION ── */}
      <section style={{ padding: "6rem 0", background: "#F8F8F8", borderTop: "1px solid #EBEBEB", borderBottom: "1px solid #EBEBEB" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Modern Search Is Changing Fast</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}>
              Is Your Business Ready for the<br />
              <span style={{ color: "#C8102E" }}>New Way Customers Search?</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444444", maxWidth: 720, margin: "0 auto 1.5rem" }}>
              Search is changing quickly. Customers are not just typing simple keywords into Google anymore. They are asking detailed questions through Google, maps, voice search, and AI tools — questions like who to hire, who serves their area, who has the best reviews, and who can be trusted. If your website and online presence are outdated, unclear, or disconnected, your business may not be the one that gets found.
            </p>
            <p className="fade-up" data-delay="220" style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555555", maxWidth: 680, margin: "0 auto 2rem", fontStyle: "italic" }}>
              Got'm Digital helps local businesses build websites, Google profiles, ads, and content that are ready for modern search.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {[
              {
                icon: "⚠️",
                heading: "An Outdated Website Is a Visibility Problem",
                text: "An outdated website is no longer just a design problem — it can become a visibility problem. If your site is unclear, slow, or built on a platform that is not keeping up, competitors who are easier to find and verify may be the ones customers see first.",
              },
              {
                icon: "🤖",
                heading: "People Are Asking AI Tools Who to Hire",
                text: "Customers are no longer only Googling. They are asking AI tools, Google AI results, map results, and search engines who to hire. Got'm Digital builds your online presence so customers, Google, and AI tools can clearly understand who you are, what you do, and why your business should be trusted.",
              },
              {
                icon: "🏆",
                heading: "The Businesses That Win Online",
                text: "The businesses that win online will be the ones whose websites, Google profiles, reviews, ads, and content are built for how people search now — and how they will search next. Your full presence should work together.",
              },
            ].map((item, i) => (
              <div key={i} className="fade-up card-dark" data-delay={String(i * 80)} style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#111111", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {item.heading}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#555555" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" data-delay="0" style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-gold" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Request a Web Presence Review <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── PORTFOLIO PREVIEW ── */}
      <section style={{ padding: "6rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Our Work</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
            }}>
              Local Businesses We've<br />
              <span style={{ color: "#C8102E" }}>Put on the Map</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#666666", maxWidth: 520, margin: "1rem auto 0", lineHeight: 1.75 }}>
              Real businesses, real websites. Every one of these started exactly where you are right now.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {clientSites.slice(0, 3).map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-up card-dark"
                data-delay={String(i * 80)}
                style={{ padding: "1.75rem", textDecoration: "none", display: "block", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #C8102E, #E8304A)" }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: site.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", flexShrink: 0,
                    border: "1px solid rgba(200,16,46,0.2)",
                  }}>
                    {site.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8102E", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.2rem" }}>{site.industry}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#111111" }}>{site.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#666666", display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.2rem" }}>
                      <MapPin size={10} /> {site.location}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "#444444", marginBottom: "1rem" }}>{site.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "#C8102E" }}>
                  <ExternalLink size={12} /> Visit Website
                </div>
              </a>
            ))}
          </div>

          <div className="fade-up" data-delay="0" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/portfolio" className="btn-gold">
              View All 6 Client Sites <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "6rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Simple, Honest Pricing</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
            }}>
              No Setup Fees.<br />
              <span style={{ color: "#C8102E" }}>No Surprises. Ever.</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#666666", maxWidth: 500, margin: "1rem auto 0", lineHeight: 1.75 }}>
              Start small. Grow at your own pace. Upgrade only when you're ready.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: 1000, margin: "0 auto" }}>
            {[
              {
                name: "Starter",
                tagline: "Your foundation, done right",
                price: "$100",
                featured: false,
                features: [
                  "High-performing custom HTML website",
                  "Fully SEO-optimized from day one",
                  "Faster and cleaner than any template builder",
                  "Updates, edits, and additions whenever you need them",
                  "Mobile-responsive and built to rank over time",
                ],
                note: null,
              },
              {
                name: "Growth",
                tagline: "Stay active, stay visible",
                price: "$300",
                featured: true,
                features: [
                  "Everything in Starter",
                  "Weekly posts added to your website",
                  "Weekly posts to your Google Business Profile",
                  "Consistent content signals that Google rewards over time",
                  "Keeps your profile fresh and your brand active",
                ],
                note: null,
              },
              {
                name: "Full Service",
                tagline: "Leads now + growth long-term",
                price: "$500",
                featured: false,
                features: [
                  "Everything in Growth",
                  "Full Google Ads campaign management",
                  "Custom HTML landing pages built for conversions",
                  "Ongoing ad optimization and performance monitoring",
                ],
                note: "📌 Ad spend is paid directly by you to Google — this fee covers strategy, setup, and management only.",
              },
            ].map((plan, i) => (
              <div key={i} className={`fade-up card-dark${plan.featured ? " featured" : ""}`} data-delay={String(i * 80)} style={{ overflow: "hidden" }}>
                {plan.featured && (
                  <div style={{ background: "#C8102E", color: "#111111", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", padding: "0.4rem" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ padding: "1.75rem 1.75rem 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, color: "#111111", marginBottom: "0.25rem" }}>{plan.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "#666666" }}>{plan.tagline}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{plan.price}</div>
                      <div style={{ fontSize: "0.75rem", color: "#666666", marginTop: "0.2rem" }}>/ month</div>
                    </div>
                  </div>
                  <hr style={{ border: "none", borderTop: "1px solid #EBEBEB", margin: "0 0 1.25rem" }} />
                </div>
                <ul style={{ listStyle: "none", padding: "0 1.75rem 1.5rem", margin: 0 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", lineHeight: 1.6, color: "#444444", marginBottom: "0.75rem" }}>
                      <CheckCircle2 size={15} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.15rem" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <div style={{ background: "rgba(200,16,46,0.06)", borderTop: "1px solid rgba(200,16,46,0.2)", padding: "0.875rem 1.75rem", fontSize: "0.8rem", color: "#E8304A", lineHeight: 1.6 }}>
                    {plan.note}
                  </div>
                )}
                <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
                  <a href="tel:9413288891" className={plan.featured ? "btn-gold" : "btn-gold-outline"} style={{ width: "100%", justifyContent: "center" }}>
                    <Phone size={15} /> {plan.featured ? "Call to Get Started" : "Get Started"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "6rem 0", background: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>What You Need to Know</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
            }}>
              The Honest Answers<br />
              <span style={{ color: "#C8102E" }}>Nobody Else Will Give You</span>
            </h2>
          </div>
          {faqs.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
          <div className="fade-up" data-delay="0" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/flyer" className="btn-gold-outline">
              Download Our Flyer <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "6rem 0", background: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="fade-up" style={{
            background: "linear-gradient(135deg, #F8F8F8, #FFFFFF)",
            border: "1px solid #DEDEDE",
            borderTop: "3px solid #C8102E",
            borderRadius: 12,
            padding: "3rem 2.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#111111",
              marginBottom: "1.25rem",
              lineHeight: 1.2,
            }}>
              Ready to Get on the Map?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#333333", marginBottom: "2rem", fontStyle: "italic", maxWidth: 540, margin: "0 auto 2rem" }}>
              I'm not going to promise overnight results — because nobody who's honest can. What I{" "}
              <strong style={{ color: "#111111", fontStyle: "normal" }}>will</strong> promise is that every dollar you invest is building something that compounds over time. The businesses that stay consistent are the ones that win online.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.2rem", padding: "1rem 2.5rem" }}>
                <Phone size={20} /> (941) 328-8891
              </a>
              <Link href="/contact" className="btn-gold-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                Send a Message <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#666666", textTransform: "uppercase", marginTop: "1.25rem" }}>
              GOTM Digital · Let's get you on the map
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
