/* ============================================================
   GOTM DIGITAL — Home Page
   Design: Dark Gold Authority
   Sections: Nav, Hero, Trust Bar, About/Philosophy, Services,
             How It Works (Timeline), Pricing, Portfolio, FAQ, CTA, Footer
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import {
  Phone, Menu, X, CheckCircle2, ChevronDown, ChevronRight,
  MapPin, Star, TrendingUp, Globe, Search, Megaphone, ArrowRight
} from "lucide-react";

// ── GOTM SVG Logo ──────────────────────────────────────────
function GotmLogo({ size = 200 }: { size?: number }) {
  const scale = size / 300;
  return (
    <svg
      width={size}
      height={size * (110 / 300)}
      viewBox="0 0 300 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#F9C46B", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#F4A12E", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(18, 10)" filter="url(#glow)">
        <circle cx="36" cy="36" r="32" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" />
        <circle cx="36" cy="36" r="20" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
        <circle cx="36" cy="36" r="5" fill="url(#goldGrad)" />
        <line x1="36" y1="0" x2="36" y2="13" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="59" x2="36" y2="72" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="36" x2="13" y2="36" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="59" y1="36" x2="72" y2="36" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <text x="100" y="58" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="56" fill="#FFFFFF" letterSpacing="-1">GOTM</text>
      <line x1="100" y1="68" x2="294" y2="68" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.5" />
      <text x="197" y="84" fontFamily="DM Sans, sans-serif" fontWeight="600" fontSize="13" fill="url(#goldGrad)" textAnchor="middle" letterSpacing="5">DIGITAL</text>
      <text x="197" y="100" fontFamily="DM Sans, sans-serif" fontWeight="400" fontSize="10" fill="#7A8599" textAnchor="middle" letterSpacing="2">MARKETING THAT WORKS</text>
    </svg>
  );
}

// ── Scroll-reveal hook ──────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Counter animation hook ──────────────────────────────────
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

// ── Stat counter component ──────────────────────────────────
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
    <div ref={ref} className="text-center">
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.75rem", fontWeight: 900, color: "#F4A12E", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.85rem", color: "#7A8599", marginTop: "0.4rem", letterSpacing: "0.05em" }}>{label}</div>
    </div>
  );
}

// ── FAQ Accordion ───────────────────────────────────────────
const faqs = [
  {
    icon: "🌱",
    q: "New Websites Take Time — Here's Why",
    a: "A brand-new domain won't rank on Google overnight. It typically takes 1–3 years to fully mature. Your competitors have months or years of search history, backlinks, and reviews ahead of you — you're starting from zero, and that's completely normal. Think of your website as an investment that compounds over time. The businesses that stay consistent are the ones that win."
  },
  {
    icon: "🏗️",
    q: "Why Custom HTML Beats WordPress & Others",
    a: "Custom HTML sites load faster and rank better — Google rewards speed and clean code. No bloated plugins, no unnecessary scripts. Just lean, purpose-built code. Everything optimized from day one: meta tags, schema markup, mobile layout, image compression, and site structure. Over time, this foundation consistently outperforms WordPress, GoHighLevel, Wix, and Squarespace."
  },
  {
    icon: "⭐",
    q: "Google Business Profile — Your Most Powerful Free Tool",
    a: "Your Google Business Profile is your most powerful free tool while your website grows. Ask every single customer for a review — every time, no exceptions. Reviews build local trust fast. Keep your profile active: photos, hours, services, and regular posts all signal credibility to Google. This works independently of your website's age and can start showing results within weeks."
  },
  {
    icon: "⚡",
    q: "Need Leads Right Now? — Google Ads",
    a: "Google Ads put you in front of people actively searching for your services today — not in two years. We build dedicated landing pages in the same clean HTML format — fast, focused, and built to convert. You control the budget and only pay when someone clicks your ad. Ads bridge the gap while your organic SEO matures — scale back once the site takes off."
  },
  {
    icon: "🗺️",
    q: "The Growth Timeline — What to Expect",
    a: "Months 1–6: Website live, Google profile active, reviews rolling in, ads running if budget allows. Months 6–18: SEO gains traction, domain builds authority, content starts paying off. Year 2–3: Organic leads flow consistently. ROI accelerates. Ads become optional, not essential. The key is staying consistent — most businesses quit before the compounding kicks in."
  }
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fade-up" data-delay={String(index * 80)} style={{ marginBottom: "0.625rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: open ? "#1C2333" : "#141922",
          border: `1px solid ${open ? "#F4A12E" : "#252E42"}`,
          borderRadius: open ? "8px 8px 0 0" : "8px",
          color: "#FFFFFF",
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
        <span style={{ flex: 1, fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.01em" }}>{item.q}</span>
        <ChevronDown
          size={18}
          style={{ color: "#F4A12E", flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div style={{
          background: "#1C2333",
          border: "1px solid #F4A12E",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          padding: "1.25rem 1.25rem 1.375rem",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "#B8C4D8",
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

// ── Pricing cards ───────────────────────────────────────────
const plans = [
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
    cta: "Get Started",
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
    cta: "Most Popular",
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
    note: "📌 Ad spend is paid directly by you to Google — this fee covers strategy, setup, and management only. You stay in full control of your budget.",
    cta: "Get Started",
  },
];

// ── Portfolio examples ──────────────────────────────────────
const portfolioItems = [
  {
    industry: "Plumbing",
    name: "Clearwater Plumbing Co.",
    location: "Tampa, FL",
    result: "First page Google in 4 months",
    color: "#1C3A5C",
    icon: "🔧",
  },
  {
    industry: "HVAC",
    name: "Arctic Air Solutions",
    location: "Phoenix, AZ",
    result: "3x leads via Google Ads in 60 days",
    color: "#1A3A2A",
    icon: "❄️",
  },
  {
    industry: "Landscaping",
    name: "GreenEdge Lawn Care",
    location: "Austin, TX",
    result: "Google Business top-3 map pack",
    color: "#2A2A1A",
    icon: "🌿",
  },
  {
    industry: "Roofing",
    name: "Summit Roofing Pros",
    location: "Denver, CO",
    result: "Organic traffic up 180% in year one",
    color: "#2A1A1A",
    icon: "🏠",
  },
  {
    industry: "Electrical",
    name: "Bright Wire Electric",
    location: "Charlotte, NC",
    result: "Consistent 5-star review pipeline",
    color: "#1A1A3A",
    icon: "⚡",
  },
  {
    industry: "Cleaning",
    name: "Spotless Pro Cleaning",
    location: "Nashville, TN",
    result: "Fully booked within 6 months",
    color: "#1A2A2A",
    icon: "✨",
  },
];

// ── Main Home Component ─────────────────────────────────────
export default function Home() {
  useScrollReveal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#0B0F18", color: "#D8E0EE", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAVIGATION ── */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(11,15,24,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(37,46,66,0.8)" : "none",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        padding: "0 1.5rem",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <GotmLogo size={140} />
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
            {[["#services", "Services"], ["#how-it-works", "How It Works"], ["#pricing", "Pricing"], ["#portfolio", "Portfolio"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} style={{ color: "#7A8599", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, transition: "color 0.2s", letterSpacing: "0.02em" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F4A12E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#7A8599")}>
                {label}
              </a>
            ))}
            <a href="tel:9413288891" className="btn-gold" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>
              <Phone size={15} /> (941) 328-8891
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "none", color: "#D8E0EE", padding: "0.5rem" }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ background: "#141922", borderTop: "1px solid #252E42", padding: "1.25rem 1.5rem 1.5rem" }}>
            {[["#services", "Services"], ["#how-it-works", "How It Works"], ["#pricing", "Pricing"], ["#portfolio", "Portfolio"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
                style={{ display: "block", color: "#D8E0EE", textDecoration: "none", fontSize: "1rem", fontWeight: 500, padding: "0.75rem 0", borderBottom: "1px solid #252E42" }}>
                {label}
              </a>
            ))}
            <a href="tel:9413288891" className="btn-gold" style={{ display: "flex", marginTop: "1.25rem", justifyContent: "center" }}>
              <Phone size={16} /> (941) 328-8891
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        {/* Hero background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }} />
        {/* Dark overlay gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(11,15,24,0.85) 0%, rgba(11,15,24,0.6) 50%, rgba(11,15,24,0.9) 100%)",
        }} />
        {/* Radial gold glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(244,161,46,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "7rem", paddingBottom: "5rem" }}>
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
              <span style={{ color: "#F4A12E" }}>On The Map.</span><br />
              The Honest Way.
            </h1>

            <p className="fade-up" data-delay="160" style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#B8C4D8",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: 580,
            }}>
              No setup fees. No big promises. No disappearing after you sign up.
              Just honest digital marketing that grows with your business — starting at <strong style={{ color: "#F9C46B" }}>$100/month</strong>.
            </p>

            <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.1rem", padding: "1rem 2.25rem" }}>
                <Phone size={18} /> Call (941) 328-8891
              </a>
              <a href="#pricing" className="btn-gold-outline">
                See Pricing <ChevronRight size={16} />
              </a>
            </div>

            <div className="fade-up" data-delay="320" style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {["No setup fees", "No long-term contracts", "No empty promises"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#7A8599" }}>
                  <CheckCircle2 size={15} style={{ color: "#F4A12E", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: "#141922", borderTop: "1px solid #252E42", borderBottom: "1px solid #252E42", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
            <StatCounter value={50} suffix="+" label="Websites Built" />
            <StatCounter value={100} suffix="%" label="No Setup Fees" />
            <StatCounter value={3} suffix="yr" label="Avg. Client Growth" />
            <StatCounter value={5} suffix="★" label="Average Review Score" />
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / ABOUT ── */}
      <section style={{ padding: "6rem 0", background: "#0B0F18" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            {/* Left: Image */}
            <div className="fade-up" data-delay="0" style={{ position: "relative" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-local-business-gneDyCA3b7hrCUyM7FV78F.webp"
                alt="Local service businesses across the USA"
                style={{ width: "100%", borderRadius: "10px", display: "block", filter: "brightness(0.85)" }}
              />
              <div style={{
                position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem",
                background: "rgba(11,15,24,0.92)",
                border: "1px solid rgba(244,161,46,0.3)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <MapPin size={18} style={{ color: "#F4A12E", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#7A8599", letterSpacing: "0.1em", textTransform: "uppercase" }}>Serving Local Businesses</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF" }}>Anywhere in the USA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Our Philosophy</div>
              <h2 className="fade-up" data-delay="80" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}>
                The Honest Truth About<br />
                <span style={{ color: "#F4A12E" }}>Growing Online</span>
              </h2>

              <div className="fade-up callout-gold" data-delay="160" style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#C8D4E8", fontStyle: "italic" }}>
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
                    <span style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#B8C4D8" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "6rem 0", background: "#0B0F18" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>What We Do</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}>
              Everything You Need to<br />
              <span style={{ color: "#F4A12E" }}>Get Found & Get Leads</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: <Globe size={28} style={{ color: "#F4A12E" }} />,
                title: "Custom HTML Websites",
                desc: "Lightning-fast, SEO-optimized websites built from scratch. No WordPress bloat, no template limitations. Just clean code that Google loves.",
                bullets: ["Mobile-first responsive design", "Schema markup & meta optimization", "Unlimited updates included"],
              },
              {
                icon: <Search size={28} style={{ color: "#F4A12E" }} />,
                title: "SEO & Content Strategy",
                desc: "Weekly content posts to your website and Google Business Profile. Consistent signals that build authority over time.",
                bullets: ["Weekly website blog posts", "Google Business Profile posts", "Local keyword targeting"],
              },
              {
                icon: <Star size={28} style={{ color: "#F4A12E" }} />,
                title: "Google Business Profile",
                desc: "Your most powerful free tool. We keep it active, optimized, and review-ready so you show up in the local map pack.",
                bullets: ["Profile setup & optimization", "Review strategy & monitoring", "Photo & post management"],
              },
              {
                icon: <Megaphone size={28} style={{ color: "#F4A12E" }} />,
                title: "Google Ads Management",
                desc: "Get leads today while your organic SEO matures. We build and manage campaigns that put you in front of buyers right now.",
                bullets: ["Campaign setup & strategy", "Custom landing pages", "Ongoing optimization"],
              },
            ].map((service, i) => (
              <div key={i} className="fade-up card-dark" data-delay={String(i * 80)} style={{ padding: "2rem" }}>
                <div style={{ marginBottom: "1.25rem" }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#7A8599", marginBottom: "1.25rem" }}>{service.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", color: "#B8C4D8", marginBottom: "0.5rem" }}>
                      <span style={{ color: "#F4A12E", fontWeight: 900, flexShrink: 0 }}>→</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── HOW IT WORKS / TIMELINE ── */}
      <section id="how-it-works" style={{ padding: "6rem 0", background: "#0B0F18", position: "relative", overflow: "hidden" }}>
        {/* Subtle growth chart background */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "45%",
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-growth-chart-3iTCXy4kmMfjbBfsa5DR6z.webp)`,
          backgroundSize: "cover", backgroundPosition: "left center",
          opacity: 0.06, pointerEvents: "none",
        }} />
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>The Growth Timeline</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}>
              What to Expect &<br />
              <span style={{ color: "#F4A12E" }}>When to Expect It</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#7A8599", maxWidth: 560, margin: "1rem auto 0", lineHeight: 1.75 }}>
              I'll be straight with you — this isn't overnight. But the businesses that stay consistent are the ones that win online.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(180deg, transparent, rgba(244,161,46,0.3), rgba(244,161,46,0.3), transparent)",
              transform: "translateX(-50%)",
            }} className="hidden md:block" />

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                {
                  phase: "Day 1",
                  title: "We Get to Work Immediately",
                  desc: "Website built, SEO configured, Google Business Profile optimized. Everything is live and working from day one — no waiting period.",
                  side: "left",
                  icon: "🚀",
                },
                {
                  phase: "Months 1–6",
                  title: "Foundation & Early Momentum",
                  desc: "Website live, Google profile active, reviews rolling in, ads running if budget allows. You'll start seeing activity — calls, clicks, and profile views increasing.",
                  side: "right",
                  icon: "📈",
                },
                {
                  phase: "Months 6–18",
                  title: "SEO Gains Traction",
                  desc: "Your domain builds authority. Content starts paying off. Organic rankings improve. The investment you made in month one starts compounding.",
                  side: "left",
                  icon: "⭐",
                },
                {
                  phase: "Year 2–3",
                  title: "Organic Leads Flow Consistently",
                  desc: "ROI accelerates. Ads become optional, not essential. Your website is now a lead-generating asset that works while you sleep.",
                  side: "right",
                  icon: "🏆",
                },
              ].map((step, i) => (
                <div key={i} className="fade-up" data-delay={String(i * 100)} style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "2rem",
                  alignItems: "center",
                }}>
                  {step.side === "left" ? (
                    <>
                      <div style={{ textAlign: "right" }}>
                        <div className="card-dark" style={{ display: "inline-block", textAlign: "left", padding: "1.5rem", maxWidth: 380 }}>
                          <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{step.icon}</div>
                          <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#F4A12E", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>{step.phase}</div>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.625rem" }}>{step.title}</h3>
                          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#7A8599" }}>{step.desc}</p>
                        </div>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div>
                        <div className="card-dark" style={{ padding: "1.5rem", maxWidth: 380 }}>
                          <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{step.icon}</div>
                          <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#F4A12E", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>{step.phase}</div>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.625rem" }}>{step.title}</h3>
                          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#7A8599" }}>{step.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "6rem 0", background: "#0B0F18" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Simple, Honest Pricing</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}>
              No Setup Fees.<br />
              <span style={{ color: "#F4A12E" }}>No Surprises. Ever.</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#7A8599", maxWidth: 500, margin: "1rem auto 0", lineHeight: 1.75 }}>
              Start small. Grow at your own pace. Upgrade only when you're ready.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: 1000, margin: "0 auto" }}>
            {plans.map((plan, i) => (
              <div key={i} className={`fade-up card-dark${plan.featured ? " featured" : ""}`} data-delay={String(i * 80)} style={{ overflow: "hidden" }}>
                {plan.featured && (
                  <div style={{
                    background: "#F4A12E",
                    color: "#0B0F18",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    padding: "0.4rem",
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ padding: "1.75rem 1.75rem 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.25rem" }}>{plan.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "#7A8599" }}>{plan.tagline}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 900, color: "#F4A12E", lineHeight: 1 }}>{plan.price}</div>
                      <div style={{ fontSize: "0.75rem", color: "#7A8599", marginTop: "0.2rem" }}>/ month</div>
                    </div>
                  </div>
                  <hr style={{ border: "none", borderTop: "1px solid #252E42", margin: "0 0 1.25rem" }} />
                </div>
                <ul style={{ listStyle: "none", padding: "0 1.75rem 1.5rem", margin: 0 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", lineHeight: 1.6, color: "#B8C4D8", marginBottom: "0.75rem" }}>
                      <CheckCircle2 size={15} style={{ color: "#F4A12E", flexShrink: 0, marginTop: "0.15rem" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <div style={{
                    background: "rgba(244,161,46,0.07)",
                    borderTop: "1px solid rgba(244,161,46,0.2)",
                    padding: "0.875rem 1.75rem",
                    fontSize: "0.8rem",
                    color: "#F9C46B",
                    lineHeight: 1.6,
                  }}>
                    {plan.note}
                  </div>
                )}
                <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
                  <a href="tel:9413288891" className={plan.featured ? "btn-gold" : "btn-gold-outline"} style={{ width: "100%", justifyContent: "center" }}>
                    <Phone size={15} /> {plan.featured ? "Call to Get Started" : plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" style={{ padding: "6rem 0", background: "#0B0F18" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Our Work</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}>
              Local Businesses We've<br />
              <span style={{ color: "#F4A12E" }}>Put on the Map</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#7A8599", maxWidth: 520, margin: "1rem auto 0", lineHeight: 1.75 }}>
              Real businesses, real results. Every one of these started exactly where you are right now.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {portfolioItems.map((item, i) => (
              <div key={i} className="fade-up card-dark" data-delay={String(i * 60)} style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, #F4A12E, #F9C46B)",
                }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: item.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", flexShrink: 0,
                    border: "1px solid rgba(244,161,46,0.2)",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#F4A12E", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.2rem" }}>{item.industry}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>{item.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "#7A8599", display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.2rem" }}>
                      <MapPin size={11} /> {item.location}
                    </div>
                  </div>
                </div>
                <div style={{
                  background: "rgba(244,161,46,0.07)",
                  border: "1px solid rgba(244,161,46,0.15)",
                  borderRadius: 6,
                  padding: "0.625rem 0.875rem",
                  fontSize: "0.825rem",
                  color: "#F9C46B",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <TrendingUp size={13} style={{ flexShrink: 0 }} />
                  {item.result}
                </div>
              </div>
            ))}
          </div>

          {/* Website mockup image */}
          <div className="fade-up" data-delay="0" style={{ marginTop: "3rem", textAlign: "center" }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-website-mockup-BfAoH6drbHPfkE7FK6vfkC.webp"
              alt="Example website built by GOTM Digital"
              style={{ maxWidth: 600, width: "100%", borderRadius: 12, border: "1px solid #252E42", display: "inline-block" }}
            />
            <p style={{ fontSize: "0.8rem", color: "#7A8599", marginTop: "0.75rem" }}>Example of a custom HTML website we built for a local service business</p>
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "6rem 0", background: "#0B0F18" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>What You Need to Know</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}>
              The Honest Answers<br />
              <span style={{ color: "#F4A12E" }}>Nobody Else Will Give You</span>
            </h2>
          </div>
          {faqs.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "6rem 0", background: "#0B0F18" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="fade-up" style={{
            background: "linear-gradient(135deg, #141922, #0B0F18)",
            border: "1px solid #252E42",
            borderTop: "3px solid #F4A12E",
            borderRadius: 12,
            padding: "3rem 2.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              marginBottom: "1.25rem",
              lineHeight: 1.2,
            }}>
              Ready to Get on the Map?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#C8D4E8", marginBottom: "2rem", fontStyle: "italic", maxWidth: 540, margin: "0 auto 2rem" }}>
              I'm not going to promise overnight results — because nobody who's honest can. What I <strong style={{ color: "#FFFFFF", fontStyle: "normal" }}>will</strong> promise is that every dollar you invest is building something that compounds over time. The businesses that stay consistent are the ones that win online.
            </p>
            <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.2rem", padding: "1rem 2.5rem" }}>
              <Phone size={20} /> (941) 328-8891
            </a>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#7A8599", textTransform: "uppercase", marginTop: "1.25rem" }}>
              GOTM Digital · Let's get you on the map
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#141922", borderTop: "1px solid #252E42", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <GotmLogo size={120} />
              <p style={{ fontSize: "0.8rem", color: "#7A8599", marginTop: "0.75rem", maxWidth: 280, lineHeight: 1.6 }}>
                Honest digital marketing for local service businesses across the USA.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
              <a href="tel:9413288891" style={{ color: "#F4A12E", textDecoration: "none", fontSize: "1.1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} /> (941) 328-8891
              </a>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[["#services", "Services"], ["#pricing", "Pricing"], ["#portfolio", "Portfolio"], ["#faq", "FAQ"]].map(([href, label]) => (
                  <a key={href} href={href} style={{ fontSize: "0.8rem", color: "#7A8599", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F4A12E")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#7A8599")}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <hr style={{ border: "none", borderTop: "1px solid #252E42", margin: "1.5rem 0" }} />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.75rem" }}>
            <p style={{ fontSize: "0.75rem", color: "#7A8599" }}>
              © {new Date().getFullYear()} GOTM Digital. All rights reserved.
            </p>
            <p style={{ fontSize: "0.75rem", color: "#7A8599" }}>
              Serving local service businesses nationwide · No setup fees · No contracts
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
