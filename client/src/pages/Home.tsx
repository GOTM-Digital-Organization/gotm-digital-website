import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Phone, ChevronDown, MapPin, Star, TrendingUp, Globe, Search, Megaphone, ExternalLink, ArrowRight, CheckCircle2
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
      { threshold: 0.08 }
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
    <div ref={ref} style={{ padding: "2rem 1.5rem" }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.03em" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.62rem", color: "#AAAAAA", marginTop: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
    </div>
  );
}

// ── FAQ Accordion ───────────────────────────────────────────
const faqs = [
  {
    q: "New Websites Take Time — Here's Why",
    a: "A brand-new domain won't rank on Google overnight. It typically takes 1–3 years to fully mature. Your competitors have months or years of search history, backlinks, and reviews ahead of you — you're starting from zero, and that's completely normal. Think of your website as an investment that compounds over time. The businesses that stay consistent are the ones that win.",
  },
  {
    q: "Why Custom HTML Beats WordPress & Others",
    a: "Custom HTML sites load faster and rank better — Google rewards speed and clean code. No bloated plugins, no unnecessary scripts. Just lean, purpose-built code. Everything optimized from day one: meta tags, schema markup, mobile layout, image compression, and site structure. Over time, this foundation consistently outperforms WordPress, GoHighLevel, Wix, and Squarespace.",
  },
  {
    q: "Google Business Profile — Your Most Powerful Free Tool",
    a: "Your Google Business Profile is your most powerful free tool while your website grows. Ask every single customer for a review — every time, no exceptions. Reviews build local trust fast. Keep your profile active: photos, hours, services, and regular posts all signal credibility to Google. This works independently of your website's age and can start showing results within weeks.",
  },
  {
    q: "Need Leads Right Now? — Google Ads",
    a: "Google Ads put you in front of people actively searching for your services today — not in two years. We build dedicated landing pages in the same clean HTML format — fast, focused, and built to convert. You control the budget and only pay when someone clicks your ad. Ads bridge the gap while your organic SEO matures — scale back once the site takes off.",
  },
  {
    q: "The Growth Timeline — What to Expect",
    a: "Months 1–6: Website live, Google profile active, reviews rolling in, ads running if budget allows. Months 6–18: SEO gains traction, domain builds authority, content starts paying off. Year 2–3: Organic leads flow consistently. ROI accelerates. Ads become optional, not essential. The key is staying consistent — most businesses quit before the compounding kicks in.",
  },
];

function FaqItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fade-up" data-delay={String(index * 60)} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          color: "#FFFFFF",
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ flex: 1, fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.01em" }}>{item.q}</span>
        <ChevronDown
          size={16}
          style={{ color: "#C8102E", flexShrink: 0, transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div style={{
          paddingBottom: "1.5rem",
          fontSize: "0.9rem",
          lineHeight: 1.8,
          color: "#C8C8C8",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

// ── All 6 client portfolio items ────────────────────────────
const clientSites = [
  {
    name: "Siesta Key Sport Fishing Charters",
    url: "https://siestakeysportfishingcharters.com",
    industry: "Sport Fishing Charters",
    location: "Siesta Key, FL",
    ogImage: "/manus-storage/siesta_e3b43ce3.png",
    desc: "Custom website for a premier sport fishing charter service on Siesta Key.",
  },
  {
    name: "Titan Up Marine Services",
    url: "https://titanupmarineservices.com",
    industry: "Marine Services",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/titan-og_debe9c5d.png",
    desc: "Professional marine services website built for maximum local visibility.",
  },
  {
    name: "Reel Smart Charters",
    url: "https://www.reelsmartcharters.com",
    industry: "Fishing Charters",
    location: "Florida",
    ogImage: "/manus-storage/reel-og_b3fb7408.jpg",
    desc: "Conversion-focused charter fishing website built for mobile bookings.",
  },
  {
    name: "Pool Leak Sarasota",
    url: "https://poolleaksarasota.com",
    industry: "Pool Leak Detection",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/pool_0c57702f.webp",
    desc: "Hyper-local SEO site targeting homeowners searching for pool leak repair.",
  },
  {
    name: "SRQ Wash",
    url: "https://srqwash.com",
    industry: "Pressure Washing",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/srqwash_fc8827dc.webp",
    desc: "Pressure washing company with weekly content posts and Google profile management.",
  },
  {
    name: "Sarasota Wash and Seal",
    url: "https://sarasotawashandseal.com",
    industry: "Exterior Cleaning & Sealing",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/sarasotawashandseal_45ddc10a.png",
    desc: "Full-service exterior cleaning site targeting homeowners and commercial properties.",
  },
];

// ── Services data ───────────────────────────────────────────
const services = [
  { icon: <Globe size={22} />, title: "Custom HTML Websites", desc: "Modern, conversion-focused websites built to clearly communicate who you are, what you do, and where you work — optimized for Google, maps, and AI-powered search from day one." },
  { icon: <Search size={22} />, title: "Local SEO & AI Search Optimization", desc: "Modern search visibility built for how customers search now — traditional rankings, map results, conversational queries, structured content, and AI-answer readiness." },
  { icon: <Star size={22} />, title: "Google Business Profile Authority", desc: "Your most powerful free tool. We optimize your profile so customers, Google, and AI-powered search results can clearly understand your business and local relevance." },
  { icon: <Megaphone size={22} />, title: "Google Ads & Conversion Tracking", desc: "Get leads now while your organic SEO matures. Ads connected to strong landing pages, clear service messaging, and conversion tracking that improves your entire online presence." },
];

// ── Main Home Component ─────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div style={{ background: "#0A0A0A", color: "#E8E8E8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO — Full-bleed cinematic
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.85) 75%, rgba(10,10,10,1) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "5%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "10rem", paddingBottom: "7rem", width: "100%" }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.75rem" }}>
            Honest Digital Marketing · Local Service Businesses
          </div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            marginBottom: "2rem",
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}>
            Get Your Business<br />
            Found on Google,<br />
            <span style={{ color: "#C8102E" }}>Maps & AI Search.</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            color: "#C8C8C8",
            lineHeight: 1.8,
            marginBottom: "3rem",
            maxWidth: 520,
          }}>
            No setup fees. No big promises. No disappearing after you sign up.
            Honest digital marketing starting at <span style={{ color: "#FFFFFF", fontWeight: 700 }}>$100/month</span>.
          </p>
          <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>
            <a href="tel:9413288891" className="btn-gold">
              <Phone size={16} /> Call (941) 328-8891
            </a>
            <Link href="/portfolio" className="btn-primary">
              View Our Work →
            </Link>
          </div>
          <div className="fade-up" data-delay="320" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {["No setup fees", "No long-term contracts", "No empty promises"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "#AAAAAA", letterSpacing: "0.05em" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8102E", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: "2rem", right: "2rem", zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))" }} />
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "#444444", textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
            {[
              { value: 6, suffix: "+", label: "Client Websites Live" },
              { value: 100, suffix: "%", label: "No Setup Fees" },
              { value: 3, suffix: "yr", label: "Avg. Client Growth" },
              { value: 5, suffix: "★", label: "Average Review Score" },
            ].map((stat, i) => (
              <div key={i} style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHILOSOPHY / ABOUT — split layout with photo
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            {/* Image side */}
            <div className="fade-up" data-delay="0" style={{ position: "relative" }}>
              <div style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                background: "#111111",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Local business owner working on digital marketing"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) contrast(1.1)" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(200,16,46,0.15) 0%, transparent 60%)",
                }} />
                {/* Floating stat card */}
                <div style={{
                  position: "absolute", bottom: "2rem", right: "-1.5rem",
                  background: "#C8102E",
                  padding: "1.25rem 1.5rem",
                  minWidth: 160,
                }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.04em" }}>6+</div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.25rem" }}>Local Businesses<br />Ranked & Growing</div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Why Got'm Digital</div>
              <h2 className="fade-up" data-delay="80" style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}>
                Marketing That<br />
                <span style={{ color: "#C8102E" }}>Actually Works</span><br />
                for Local Businesses.
              </h2>
              <p className="fade-up" data-delay="160" style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#C4C4C4", marginBottom: "1.5rem" }}>
                Most digital marketing agencies overpromise and underdeliver. We don't. Got'm Digital works exclusively with local service businesses — the plumbers, charter captains, marine techs, and pressure washers who need real customers, not vanity metrics.
              </p>
              <p className="fade-up" data-delay="200" style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#C4C4C4", marginBottom: "2.5rem" }}>
                Every strategy we build is designed to compound over time — your website, Google profile, reviews, and content all working together to make your business the obvious choice in your market.
              </p>
              <div className="fade-up" data-delay="280" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {[
                  "No setup fees — ever",
                  "Custom HTML websites that outrank templates",
                  "Google & AI search optimization built in",
                  "Honest timelines, no overnight promises",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "#C8C8C8" }}>
                    <CheckCircle2 size={15} style={{ color: "#C8102E", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="fade-up" data-delay="320">
                <Link href="/contact" className="btn-gold">Start a Conversation →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHOTO BREAK — Florida coastal / local business
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "40vh", minHeight: 280, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          alt="Florida coast"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.35) saturate(0.8)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.9) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "0.75rem", textAlign: "center", padding: "0 1.5rem",
        }}>
          <div className="fade-up eyebrow" data-delay="0">Serving Local Businesses Across Florida</div>
          <p className="fade-up" data-delay="80" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em", maxWidth: 700 }}>
            From Siesta Key to Sarasota — we build the digital presence that gets your phone ringing.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES — 4-column grid
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>What We Do</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}>
              Four Services.<br />
              One Unified Strategy.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {services.map((service, i) => (
              <div
                key={i}
                className="fade-up"
                data-delay={String(i * 80)}
                style={{
                  background: "#111111",
                  padding: "2.5rem 2rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#161616"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#111111"}
              >
                <div style={{ color: "#C8102E", marginBottom: "1.5rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.875rem", letterSpacing: "-0.01em" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#C0C0C0" }}>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="fade-up" data-delay="200" style={{ marginTop: "3rem" }}>
            <Link href="/services" className="btn-link">See Full Service Details →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PORTFOLIO — ALL 6 clients, always visible
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Selected Work</div>
              <h2 className="fade-up" data-delay="80" style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}>
                Local Businesses We've<br />
                Put on the Map.
              </h2>
            </div>
            <div className="fade-up" data-delay="120">
              <Link href="/portfolio" className="btn-link">View Full Portfolio →</Link>
            </div>
          </div>

          {/* 3-column grid — all 6 cards always visible */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {clientSites.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-up"
                data-delay={String((i % 3) * 80)}
                style={{
                  background: "#111111",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,16,46,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* OG image thumbnail */}
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#0D0D0D" }}>
                  <img
                    src={site.ogImage}
                    alt={site.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"}
                  />
                  {/* Red accent bar */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #C8102E, rgba(200,16,46,0.3))" }} />
                  {/* Visit overlay on hover */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(200,16,46,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "opacity 0.2s",
                  }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = "1"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = "0"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(10,10,10,0.85)", padding: "0.5rem 1rem", fontSize: "0.7rem", color: "#FFFFFF", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
                      <ExternalLink size={12} /> Visit Site
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>{site.industry}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.4rem", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{site.name}</h3>
                  <div style={{ fontSize: "0.72rem", color: "#888888", display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.875rem" }}>
                    <MapPin size={10} /> {site.location}
                  </div>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#BBBBBB", flex: 1 }}>{site.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <ExternalLink size={11} /> Visit Website
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          AI SEARCH SHIFT — dark section with photo accent
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Modern Search Is Changing Fast</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 700,
            }}>
              Is Your Business Ready for<br />
              the <span style={{ color: "#C8102E" }}>New Way Customers Search?</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3.5rem" }}>
            {[
              {
                num: "01",
                heading: "An Outdated Website Is a Visibility Problem",
                text: "An outdated website is no longer just a design problem — it can become a visibility problem. If your site is unclear, slow, or built on a platform that is not keeping up, competitors who are easier to find and verify may be the ones customers see first.",
              },
              {
                num: "02",
                heading: "People Are Asking AI Tools Who to Hire",
                text: "Customers are no longer only Googling. They are asking AI tools, Google AI results, map results, and search engines who to hire. Got'm Digital builds your online presence so customers, Google, and AI tools can clearly understand who you are, what you do, and why your business should be trusted.",
              },
              {
                num: "03",
                heading: "The Businesses That Win Online",
                text: "The businesses that win online will be the ones whose websites, Google profiles, reviews, ads, and content are built for how people search now — and how they will search next. Your full presence should work together.",
              },
            ].map((item, i) => (
              <div key={i} className="fade-up" data-delay={String(i * 80)}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "3rem", fontWeight: 900, color: "rgba(200,16,46,0.72)", lineHeight: 1, marginBottom: "1.25rem", letterSpacing: "-0.04em" }}>
                  {item.num}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.875rem", letterSpacing: "-0.01em" }}>
                  {item.heading}
                </h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#C0C0C0" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" data-delay="0">
            <Link href="/contact" className="btn-gold">
              Request a Web Presence Review →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHOTO BREAK 2 — dark boat / water
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "35vh", minHeight: 240, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
          alt="Florida fishing boat on the water"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%", filter: "brightness(0.3) saturate(0.7)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(17,17,17,1) 0%, transparent 20%, transparent 80%, rgba(10,10,10,1) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "0.5rem", textAlign: "center", padding: "0 1.5rem",
        }}>
          <div className="fade-up eyebrow" data-delay="0">Simple, Honest Pricing</div>
          <p className="fade-up" data-delay="80" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
            Starting at $100/month. No setup fees. No surprises.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRICING — dark cards
          ═══════════════════════════════════════════════ */}
      <section id="pricing" style={{ padding: "8rem 0", background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Simple, Honest Pricing</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              No Setup Fees.<br />
              No Surprises. Ever.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", maxWidth: 1000 }}>
            {[
              {
                name: "Starter",
                tagline: "Your foundation, done right",
                price: "$100",
                featured: false,
                features: [
                  "High-performing custom HTML website",
                  "Fully SEO-optimized from day one",
                  "AI Search Optimization Built In",
                  "Faster and cleaner than any template builder",
                  "Updates, edits, and additions whenever you need",
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
                  "AI Search & Conversational Query Targeting",
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
                  "AI-Ready Landing Page Content",
                  "Ongoing ad optimization and performance monitoring",
                ],
                note: "Ad spend is paid directly by you to Google — this fee covers strategy, setup, and management only.",
              },
            ].map((plan, i) => (
              <div key={i} style={{
                background: plan.featured ? "#111111" : "#0A0A0A",
                padding: "2.5rem 2rem",
                position: "relative",
                borderTop: plan.featured ? "2px solid #C8102E" : "2px solid transparent",
              }}
                className="fade-up"
                data-delay={String(i * 80)}
              >
                {plan.featured && (
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>{plan.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#AAAAAA" }}>{plan.tagline}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.04em" }}>{plan.price}</div>
                    <div style={{ fontSize: "0.65rem", color: "#AAAAAA", letterSpacing: "0.1em", textTransform: "uppercase" }}>/ month</div>
                  </div>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "1.5rem" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.85rem", lineHeight: 1.6, color: "#C8C8C8", marginBottom: "0.875rem" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8102E", flexShrink: 0, marginTop: "0.45rem" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <div style={{ fontSize: "0.75rem", color: "#AAAAAA", lineHeight: 1.6, marginBottom: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {plan.note}
                  </div>
                )}
                <a href="tel:9413288891" className={plan.featured ? "btn-gold" : "btn-primary"} style={{ width: "100%", justifyContent: "center" }}>
                  <Phone size={14} /> {plan.featured ? "Call to Get Started" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ — dark editorial
          ═══════════════════════════════════════════════ */}
      <section id="faq" style={{ padding: "8rem 0", background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>What You Need to Know</div>
              <h2 className="fade-up" data-delay="80" style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}>
                The Honest Answers<br />
                Nobody Else<br />
                Will Give You.
              </h2>
              <div className="fade-up" data-delay="160">
                <Link href="/flyer" className="btn-link">Download Our Flyer →</Link>
              </div>
            </div>
            <div>
              {faqs.map((item, i) => (
                <FaqItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA — full-bleed dark
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "10rem 0", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.7)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.5rem" }}>Ready to Build?</div>
          <h2 className="fade-up" data-delay="80" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
          }}>
            Let's Get Your Business<br />
            <span style={{ color: "#C8102E" }}>On the Map.</span>
          </h2>
          <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", lineHeight: 1.8, color: "#C8C8C8", marginBottom: "3rem", maxWidth: 560, margin: "0 auto 3rem" }}>
            I'm not going to promise overnight results — because nobody who's honest can. What I <strong style={{ color: "#FFFFFF" }}>will</strong> promise is that every dollar you invest is building something that compounds over time.
          </p>
          <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
              <Phone size={18} /> (941) 328-8891
            </a>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
              Send a Message →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
