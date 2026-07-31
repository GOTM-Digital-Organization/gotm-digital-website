import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, MapPin, ExternalLink, CheckCircle2, ChevronDown, Globe, Search, Star, Megaphone } from "lucide-react";
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
    <div ref={ref} className="stats-bar-item">
      <div className="stats-bar-number">{count}{suffix}</div>
      <div className="stats-bar-label">{label}</div>
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
    <div
      className="fade-up"
      data-delay={String(index * 60)}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          color: "#111111",
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{
          flex: 1,
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#111111",
          letterSpacing: "-0.01em",
        }}>
          {item.q}
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "#C8102E",
            flexShrink: 0,
            transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div style={{
          paddingBottom: "1.5rem",
          fontSize: "0.875rem",
          lineHeight: 1.85,
          color: "#444444",
          fontFamily: "'Inter', sans-serif",
          fontStyle: "italic",
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

// ── Client portfolio data ────────────────────────────────────
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
  {
    name: "MNSS Inc.",
    url: "https://mnss-inc.com",
    industry: "Commercial Services",
    location: "Florida",
    ogImage: "",
    desc: "New website currently in development — launching soon with full SEO and AI search optimization built in.",
    wip: true,
  },
];

// ── Services data ────────────────────────────────────────────
const services = [
  { icon: <Globe size={20} />, title: "Custom HTML Websites", desc: "Modern, conversion-focused websites built to clearly communicate who you are, what you do, and where you work — optimized for Google, maps, and AI-powered search from day one." },
  { icon: <Search size={20} />, title: "Local SEO & AI Search Optimization", desc: "Modern search visibility built for how customers search now — traditional rankings, map results, conversational queries, structured content, and AI-answer readiness." },
  { icon: <Star size={20} />, title: "Google Business Profile Authority", desc: "Your most powerful free tool. We optimize your profile so customers, Google, and AI-powered search results can clearly understand your business and local relevance." },
  { icon: <Megaphone size={20} />, title: "Google Ads & Conversion Tracking", desc: "Get leads now while your organic SEO matures. Ads connected to strong landing pages, clear service messaging, and conversion tracking that improves your entire online presence." },
];

// ── Marquee items ────────────────────────────────────────────
const marqueeItems = [
  "Custom HTML Websites",
  "Local SEO",
  "Google Business Profile",
  "Google Ads",
  "AI Search Optimization",
  "No Setup Fees",
  "Conversion Tracking",
  "Mobile-First Design",
  "Honest Timelines",
  "Local Service Businesses",
];

// ── Main Home Component ──────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div style={{ background: "#0A0A0A", color: "#E8E8E8", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO — Editorial full-bleed split layout
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Full-bleed background photo */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }} />
        {/* Gradient overlay — lighter so photo shows */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.55) 45%, rgba(8,8,8,0.25) 100%)",
        }} />

        {/* Hero content */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "10rem",
          paddingBottom: "6rem",
        }}>
          <div className="container" style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", maxWidth: 900 }}>
              {/* Vertical red accent bar */}
              <div className="accent-bar" style={{ height: "auto", alignSelf: "stretch", minHeight: 180, marginTop: "0.5rem" }} />

              {/* Text block */}
              <div style={{ flex: 1 }}>
                <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.5rem" }}>
                  Honest Digital Marketing · Local Service Businesses Nationwide
                </div>
                <h1
                  className="fade-up editorial-headline"
                  data-delay="80"
                  style={{
                    fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
                    color: "#FFFFFF",
                    marginBottom: "2rem",
                    maxWidth: 820,
                  }}
                >
                  Honest Digital<br />
                  Marketing That<br />
                  <span style={{ color: "#C8102E" }}>Gets Your Phone<br />Ringing.</span>
                </h1>
                <p
                  className="fade-up"
                  data-delay="160"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.85,
                    marginBottom: "2.75rem",
                    maxWidth: 520,
                  }}
                >
                  No setup fees. No big promises. No disappearing after you sign up.
                  Custom websites, local SEO, and Google Ads starting at{" "}
                  <span style={{ color: "#FFFFFF", fontStyle: "normal", fontWeight: 700 }}>$100/month</span>.
                </p>
                <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", marginBottom: "2.5rem" }}>
                  <a href="tel:9413288891" className="btn-primary">
                    <Phone size={15} /> Call (941) 328-8891
                  </a>
                  <Link href="/portfolio" className="btn-outline">
                    View Our Work →
                  </Link>
                </div>
                <div className="fade-up" data-delay="320" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                  {["No setup fees", "No long-term contracts", "No empty promises"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      <span style={{ width: 4, height: 4, background: "#C8102E", flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "6rem", right: "2.5rem", zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}>
          <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))" }} />
          <span style={{ fontSize: "0.5rem", letterSpacing: "0.35em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
        </div>

        {/* Marquee strip at bottom of hero */}
        <div style={{
          position: "relative", zIndex: 2,
          background: "#C8102E",
          overflow: "hidden",
          padding: "0.85rem 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                padding: "0 2.5rem",
                whiteSpace: "nowrap",
                opacity: i % 2 === 0 ? 1 : 0.6,
              }}>
                {item}
                {i % 2 === 0 && <span style={{ marginLeft: "2.5rem", color: "rgba(255,255,255,0.4)" }}>—</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS BAR  [DARK]
          ═══════════════════════════════════════════════ */}
      <section style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="stats-bar">
            <StatCounter value={7} suffix="+" label="Client Websites Live" />
            <StatCounter value={100} suffix="%" label="No Setup Fees" />
            <StatCounter value={3} suffix="yr" label="Avg. Client Growth" />
            <StatCounter value={5} suffix="★" label="Average Review Score" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHILOSOPHY / ABOUT  [LIGHT]
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#F5F4F2" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            {/* Image side */}
            <div className="fade-up" data-delay="0" style={{ position: "relative" }}>
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Local business owner working on digital marketing"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85) contrast(1.05)" }}
                />
                {/* Floating stat card */}
                <div style={{
                  position: "absolute", bottom: "2rem", right: "-1.5rem",
                  background: "#C8102E",
                  padding: "1.25rem 1.5rem",
                  minWidth: 160,
                }}>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    letterSpacing: "0.01em",
                  }}>7+</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.3rem" }}>Local Businesses<br />Ranked & Growing</div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Why Got'm Digital</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#0A0A0A",
                  marginBottom: "2rem",
                }}
              >
                Marketing That<br />
                <span style={{ color: "#C8102E" }}>Actually Works</span><br />
                for Local Businesses.
              </h2>
              <p className="fade-up" data-delay="160" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                fontStyle: "italic",
                color: "#444444",
                marginBottom: "1.5rem",
              }}>
                Most digital marketing agencies overpromise and underdeliver. We don't. Got'm Digital works exclusively with local service businesses — the plumbers, charter captains, marine techs, and pressure washers who need real customers, not vanity metrics.
              </p>
              <p className="fade-up" data-delay="200" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "#444444",
                marginBottom: "2.5rem",
              }}>
                Every strategy we build is designed to compound over time — your website, Google profile, reviews, and content all working together to make your business the obvious choice in your market.
              </p>
              <div className="fade-up" data-delay="280" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {[
                  "No setup fees — ever",
                  "Custom HTML websites that outrank templates",
                  "Google & AI search optimization built in",
                  "Honest timelines, no overnight promises",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#333333" }}>
                    <CheckCircle2 size={15} style={{ color: "#C8102E", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="fade-up" data-delay="320">
                <Link href="/contact" className="btn-primary">Start a Conversation →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHOTO BREAK — coastal  [PHOTO]
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "42vh", minHeight: 300, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          alt="Coastal landscape"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.85) saturate(1.05)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(8,8,8,0.65) 0%, rgba(8,8,8,0.2) 50%, rgba(8,8,8,0.5) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center",
          padding: "0 4rem",
        }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", maxWidth: 700 }}>
            <div style={{ width: 3, background: "#C8102E", alignSelf: "stretch", minHeight: 80, flexShrink: 0 }} />
            <div>
              <div className="eyebrow" style={{ marginBottom: "1rem", color: "rgba(255,255,255,0.6)" }}>
                Wherever Local Service Businesses Need Honest Digital Marketing
              </div>
              <p className="fade-up editorial-headline" data-delay="0" style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                color: "#FFFFFF",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}>
                Wherever you are, whatever you do — we build the digital presence that gets your phone ringing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES  [DARK]
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "5rem" }}>
            <div className="accent-bar" style={{ height: 80, marginTop: "0.5rem" }} />
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>What We Do</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#FFFFFF",
                  maxWidth: 600,
                }}
              >
                Four Services.<br />
                One Unified Strategy.
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {services.map((service, i) => (
              <div
                key={i}
                className="fade-up"
                data-delay={String(i * 80)}
                style={{
                  background: "#0A0A0A",
                  padding: "2.5rem 2rem",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#111111"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#0A0A0A"}
              >
                <div style={{ color: "#C8102E", marginBottom: "1.5rem" }}>{service.icon}</div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#FFFFFF",
                  marginBottom: "0.875rem",
                }}>
                  {service.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.8, color: "#AAAAAA" }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" data-delay="200" style={{ marginTop: "3rem" }}>
            <Link href="/services" className="btn-link">See Full Service Details →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PORTFOLIO  [LIGHT]
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div className="accent-bar" style={{ height: 80, marginTop: "0.5rem" }} />
              <div>
                <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Selected Work</div>
                <h2
                  className="fade-up editorial-headline"
                  data-delay="80"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "#0A0A0A",
                  }}
                >
                  Local Businesses We've<br />
                  Put on the Map.
                </h2>
              </div>
            </div>
            <div className="fade-up" data-delay="120">
              <Link href="/portfolio" className="btn-link" style={{ color: "#C8102E", borderBottomColor: "rgba(200,16,46,0.3)" }}>View Full Portfolio →</Link>
            </div>
          </div>

          {/* 3-column grid — all 7 cards */}
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
                  background: "#F5F4F2",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,16,46,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* OG image thumbnail or WIP placeholder */}
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#EBEBEB" }}>
                  {(site as any).wip ? (
                    <div style={{
                      width: "100%", height: "100%",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      background: "linear-gradient(135deg, #0A0A0A 0%, #1A0A0D 50%, #0A0A0A 100%)",
                      gap: "0.75rem",
                    }}>
                      <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, border: "1px solid rgba(200,16,46,0.5)", padding: "0.3rem 0.75rem" }}>🔧 In Progress</div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em", textTransform: "uppercase" }}>mnss-inc.com</div>
                    </div>
                  ) : (
                    <img
                      src={site.ogImage}
                      alt={site.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"}
                    />
                  )}
                  {/* Red accent bar at bottom of image */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#C8102E" }} />
                </div>

                {/* Card body */}
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>{site.industry}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em", color: "#0A0A0A", marginBottom: "0.4rem", lineHeight: 1.2 }}>{site.name}</h3>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#888888", display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.875rem" }}>
                    <MapPin size={10} /> {site.location}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.7, color: "#555555", flex: 1 }}>{site.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                    <ExternalLink size={11} /> Visit Website
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WORK IN PROGRESS  [DARK]
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "4rem 0", background: "#111111", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container">
          <div className="fade-up" data-delay="0" style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "2rem",
            alignItems: "center",
            borderLeft: "3px solid #C8102E",
            paddingLeft: "2rem",
          }}>
            {/* Pulsing badge */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ position: "relative", width: 56, height: 56 }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(200,16,46,0.15)", animation: "pulse 2s ease-in-out infinite" }} />
                <div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "1rem" }}>🔧</span>
                </div>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, whiteSpace: "nowrap" }}>This Week</div>
            </div>
            {/* Content */}
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "#666666", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.4rem" }}>Work in Progress</div>
              <h3 className="editorial-headline" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#FFFFFF", marginBottom: "0.5rem" }}>
                Currently Building: <span style={{ color: "#C8102E" }}>mnss-inc.com</span>
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#AAAAAA", lineHeight: 1.7, margin: 0, maxWidth: 520 }}>
                A new custom HTML website in active development this week — built from scratch with full SEO structure, AI search optimization, and mobile-first design. Launching soon.
              </p>
            </div>
            {/* CTA */}
            <div style={{ flexShrink: 0 }}>
              <Link href="/contact" className="btn-gold-outline">
                Get One Like This →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          AI SEARCH SHIFT  [LIGHT]
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#F5F4F2" }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "5rem" }}>
            <div className="accent-bar" style={{ height: 80, marginTop: "0.5rem" }} />
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Modern Search Is Changing Fast</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#0A0A0A",
                  maxWidth: 700,
                }}
              >
                Is Your Business Ready for<br />
                the <span style={{ color: "#C8102E" }}>New Way Customers Search?</span>
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0", background: "rgba(0,0,0,0.06)", marginBottom: "3.5rem" }}>
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
              <div
                key={i}
                className="fade-up"
                data-delay={String(i * 80)}
                style={{
                  background: "#FFFFFF",
                  padding: "3rem 2.5rem",
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  position: "relative",
                }}
              >
                <div className="section-number" style={{ marginBottom: "1.5rem" }}>{item.num}</div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#0A0A0A",
                  marginBottom: "1rem",
                }}>
                  {item.heading}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.85, color: "#555555", fontStyle: "italic" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" data-delay="0">
            <Link href="/contact" className="btn-primary">
              Request a Web Presence Review →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHOTO BREAK 2 — boat / water  [PHOTO]
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "35vh", minHeight: 240, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
          alt="Fishing boat on the water"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%", filter: "brightness(0.85) saturate(1.0)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.7) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "2.5rem", left: 0, right: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "0.5rem", textAlign: "center", padding: "0 1.5rem",
        }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Simple, Honest Pricing</div>
          <p className="fade-up editorial-headline" data-delay="0" style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#FFFFFF",
            textShadow: "0 2px 20px rgba(0,0,0,0.7)",
          }}>
            Starting at $100/month. No setup fees. No surprises.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRICING  [DARK]
          ═══════════════════════════════════════════════ */}
      <section id="pricing" style={{ padding: "8rem 0", background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "5rem" }}>
            <div className="accent-bar" style={{ height: 80, marginTop: "0.5rem" }} />
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Simple, Honest Pricing</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#FFFFFF",
                }}
              >
                No Setup Fees.<br />
                No Surprises. Ever.
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: 1000 }}>
            {[
              {
                name: "Starter",
                tagline: "Your foundation, done right",
                price: "$100",
                featured: false,
                bg: "#111111",
                textColor: "#FFFFFF",
                mutedColor: "#AAAAAA",
                border: "1px solid rgba(255,255,255,0.08)",
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
                bg: "#C8102E",
                textColor: "#FFFFFF",
                mutedColor: "rgba(255,255,255,0.75)",
                border: "2px solid #C8102E",
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
                bg: "#111111",
                textColor: "#FFFFFF",
                mutedColor: "#AAAAAA",
                border: "1px solid rgba(255,255,255,0.08)",
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
              <div
                key={i}
                className="fade-up"
                data-delay={String(i * 80)}
                style={{
                  background: plan.bg,
                  padding: "2.5rem 2rem",
                  position: "relative",
                  border: plan.border,
                }}
              >
                {plan.featured && (
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.85)", textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em", color: plan.textColor, marginBottom: "0.25rem" }}>{plan.name}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: plan.mutedColor }}>{plan.tagline}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "3rem", fontWeight: 900, color: plan.textColor, lineHeight: 1, letterSpacing: "0.01em" }}>{plan.price}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: plan.mutedColor, letterSpacing: "0.15em", textTransform: "uppercase" }}>/ month</div>
                  </div>
                </div>
                <div style={{ height: 1, background: plan.featured ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)", marginBottom: "1.5rem" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.75rem", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.6, color: plan.featured ? "rgba(255,255,255,0.9)" : "#CCCCCC", marginBottom: "0.875rem" }}>
                      <span style={{ width: 5, height: 5, background: plan.featured ? "rgba(255,255,255,0.8)" : "#C8102E", flexShrink: 0, marginTop: "0.45rem" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: plan.mutedColor, lineHeight: 1.6, marginBottom: "1.5rem", paddingTop: "1rem", borderTop: `1px solid ${plan.featured ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"}` }}>
                    {plan.note}
                  </div>
                )}
                <a href="tel:9413288891" className={plan.featured ? "btn-white" : "btn-outline"} style={{ width: "100%", justifyContent: "center" }}>
                  <Phone size={14} /> {plan.featured ? "Call to Get Started" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ  [LIGHT]
          ═══════════════════════════════════════════════ */}
      <section id="faq" style={{ padding: "8rem 0", background: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>What You Need to Know</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#0A0A0A",
                  marginBottom: "2rem",
                }}
              >
                The Honest Answers<br />
                Nobody Else<br />
                Will Give You.
              </h2>
              <p className="fade-up" data-delay="160" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.85, color: "#555555", fontStyle: "italic", marginBottom: "2.5rem" }}>
                We believe in setting realistic expectations. These are the things most agencies won't tell you upfront — but we will.
              </p>
              <div className="fade-up" data-delay="200">
                <Link href="/flyer" className="btn-outline-dark">Download Our Flyer →</Link>
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
          FINAL CTA  [DARK — full-bleed photo]
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "10rem 0", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.12)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.75)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", maxWidth: 800 }}>
            <div className="accent-bar" style={{ height: 120, marginTop: "0.5rem" }} />
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.5rem" }}>Ready to Build?</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  color: "#FFFFFF",
                  marginBottom: "2rem",
                }}
              >
                Let's Get Your Business<br />
                <span style={{ color: "#C8102E" }}>On the Map.</span>
              </h2>
              <p className="fade-up" data-delay="160" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.65)",
                marginBottom: "3rem",
                maxWidth: 520,
              }}>
                I'm not going to promise overnight results — because nobody who's honest can. What I{" "}
                <strong style={{ color: "#FFFFFF", fontStyle: "normal" }}>will</strong>{" "}
                promise is that every dollar you invest is building something that compounds over time.
              </p>
              <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:9413288891" className="btn-primary" style={{ fontSize: "0.8rem", padding: "1rem 2.5rem" }}>
                  <Phone size={16} /> (941) 328-8891
                </a>
                <Link href="/contact" className="btn-outline" style={{ fontSize: "0.8rem", padding: "1rem 2.5rem" }}>
                  Send a Message →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
