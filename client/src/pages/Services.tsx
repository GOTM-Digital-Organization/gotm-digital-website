import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Globe, Search, Star, Megaphone, Clock, TrendingUp, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

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

const services = [
  {
    icon: <Globe size={28} />,
    num: "01",
    title: "Website Design & AI-Ready Local SEO",
    tagline: "The foundation of everything",
    desc: "Your website should do more than look good. It should help Google, AI tools, and real customers understand exactly who you are, what you do, where you work, and why your business can be trusted. Got'm Digital builds modern websites with clear service pages, local SEO structure, trust signals, FAQs, conversion tracking, and AI-search-ready content built in from the start.",
    bullets: [
      "Mobile-first responsive design that looks great on every device",
      "Schema markup, meta optimization, and structured data baked in",
      "Lightning-fast load times — Google's #1 ranking signal",
      "Clear service pages, FAQs, and trust signals AI tools can understand",
      "Unlimited updates, edits, and new pages included",
      "Built to outrank WordPress, Wix, and Squarespace over time",
    ],
    timeline: "Live within 1–2 weeks of getting started",
    price: "Included in all plans starting at $100/month",
    note: null,
    light: false,
  },
  {
    icon: <Search size={28} />,
    num: "02",
    title: "Local SEO & AI Search Optimization",
    tagline: "The long game that pays off",
    desc: "Local SEO is no longer just about ranking for short keywords. Customers are asking detailed questions like who to hire, what a service costs, who serves their area, and which company is most trusted. Got'm Digital helps structure your website, content, Google profile, reviews, and online mentions so your business is easier to find, understand, and trust in modern search.",
    bullets: [
      "Weekly blog posts and service pages added to your website",
      "Weekly posts to your Google Business Profile",
      "Local keyword research targeting conversational and AI-style queries",
      "Structured content, schema markup, and citation consistency",
      "Internal linking strategy to build site authority",
      "Monthly performance reporting so you can see the progress",
    ],
    timeline: "Results typically visible at 6–18 months",
    price: "Included in Growth ($300/mo) and Full Service ($500/mo)",
    note: null,
    light: true,
  },
  {
    icon: <Star size={28} />,
    num: "03",
    title: "Google Business Profile Authority Build",
    tagline: "Your most powerful free tool",
    desc: "Your Google Business Profile is one of the most important parts of your local online presence. We help optimize your profile with accurate services, categories, photos, updates, review strategy, and business information that matches your website — reinforcing the same services, locations, and business facts shown on your website.",
    bullets: [
      "Complete profile setup and optimization with accurate categories and services",
      "Regular photo uploads and service updates that match your website",
      "Weekly Google Business posts to stay active and relevant",
      "Review request strategy — we show you exactly how to ask",
      "Q&A monitoring and response management",
      "Tracking of profile views, calls, and direction requests",
    ],
    timeline: "Can start generating results within 2–8 weeks",
    price: "Included in all plans starting at $100/month",
    note: null,
    light: false,
  },
  {
    icon: <Megaphone size={28} />,
    num: "04",
    title: "Google Ads & Conversion Tracking",
    tagline: "Leads today, not in two years",
    desc: "Google Ads can bring in leads now, but the best results happen when ads are connected to strong landing pages, clear service messaging, and accurate conversion tracking. Got'm Digital builds and manages ad campaigns that send customers to pages designed to convert — while using ad data to improve the rest of your online presence.",
    bullets: [
      "Full campaign setup, keyword research, and ad copywriting",
      "Custom HTML landing pages built specifically for conversions",
      "Conversion tracking that feeds insights back into your SEO and content",
      "Ongoing bid optimization and A/B testing",
      "Negative keyword management to eliminate wasted spend",
      "Monthly performance reports with clear ROI tracking",
    ],
    timeline: "Campaigns live within 3–5 business days",
    price: "Included in Full Service ($500/mo) — ad spend paid directly to Google",
    note: "Ad spend is paid directly by you to Google. Our fee covers strategy, setup, and management only. You stay in full control of your budget.",
    light: true,
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <div style={{ background: "#0A0A0A", color: "#E8E8E8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          PAGE HEADER — cinematic dark hero
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.9) 80%, rgba(10,10,10,1) 100%)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "9rem", paddingBottom: "5rem", width: "100%" }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.25rem" }}>What We Do</div>
          <h1 className="fade-up" data-delay="80" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
            maxWidth: 800,
          }}>
            Websites, Google Ads,<br />
            and Local SEO Built for<br />
            <span style={{ color: "#C8102E" }}>the New Way Customers Search.</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#C8C8C8", lineHeight: 1.8, maxWidth: 560 }}>
            Get found on Google, Maps, and AI-powered search with a modern online presence that clearly shows who you are, what you do, where you work, and why customers should trust you.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY BAR — WHITE SECTION
          ═══════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", borderTop: "3px solid #C8102E" }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {[
              { icon: <Shield size={18} />, title: "No Setup Fees", desc: "You pay monthly. Nothing upfront, ever." },
              { icon: <Clock size={18} />, title: "No Long Contracts", desc: "Stay because it's working, not because you're locked in." },
              { icon: <TrendingUp size={18} />, title: "Grows With You", desc: "Start small, upgrade when you're ready." },
            ].map((item, i) => (
              <div key={i} className="fade-up" data-delay={String(i * 80)} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                padding: "2rem 1.75rem",
                borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
              }}>
                <div style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.25rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#555555", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICE DETAILS — alternating dark / light rows
          ═══════════════════════════════════════════════ */}
      {services.map((service, i) => (
        <section
          key={i}
          style={{
            padding: "6rem 0",
            background: service.light ? "#F7F7F7" : "#0A0A0A",
            borderTop: service.light ? "none" : "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div className="container">
            <div
              className="fade-up"
              data-delay="0"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "0",
                borderBottom: `1px solid ${service.light ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.05)"}`,
                paddingBottom: "0",
              }}
            >
              {/* Left: Info */}
              <div style={{
                padding: "4rem 3rem 4rem 0",
                borderRight: `1px solid ${service.light ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.05)"}`,
              }}>
                <div style={{
                  fontSize: "4rem",
                  fontWeight: 900,
                  color: service.light ? "rgba(200,16,46,0.55)" : "rgba(200,16,46,0.72)",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.05em",
                }}>
                  {service.num}
                </div>
                <div style={{ color: "#C8102E", marginBottom: "1.25rem" }}>{service.icon}</div>
                <div className="eyebrow" style={{ marginBottom: "0.75rem", color: service.light ? "#555555" : undefined }}>{service.tagline}</div>
                <h2 style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 800,
                  color: service.light ? "#111111" : "#FFFFFF",
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.85, color: service.light ? "#444444" : "#C0C0C0", marginBottom: "1.75rem" }}>
                  {service.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: service.note ? "1.5rem" : "0" }}>
                  <div style={{ display: "flex", gap: "0.625rem", alignItems: "center", fontSize: "0.75rem", color: service.light ? "#444444" : "#AAAAAA" }}>
                    <Clock size={12} style={{ color: "#C8102E", flexShrink: 0 }} />
                    {service.timeline}
                  </div>
                  <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", fontSize: "0.75rem", color: service.light ? "#444444" : "#AAAAAA" }}>
                    <TrendingUp size={12} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.1rem" }} />
                    {service.price}
                  </div>
                </div>
                {service.note && (
                  <div style={{
                    borderLeft: "2px solid rgba(200,16,46,0.4)",
                    paddingLeft: "1rem",
                    fontSize: "0.75rem",
                    color: service.light ? "#444444" : "#AAAAAA",
                    lineHeight: 1.7,
                  }}>
                    {service.note}
                  </div>
                )}
              </div>

              {/* Right: Bullets */}
              <div style={{ padding: "4rem 0 4rem 3rem" }}>
                <div className="eyebrow" style={{ marginBottom: "1.5rem", color: service.light ? "#555555" : undefined }}>What's Included</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.bullets.map((bullet, j) => (
                    <li key={j} style={{ display: "flex", gap: "1rem", fontSize: "0.875rem", lineHeight: 1.7, color: service.light ? "#444444" : "#C8C8C8", marginBottom: "1rem" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8102E", flexShrink: 0, marginTop: "0.5rem" }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════
          AI SEARCH OPTIMIZATION — DARK SECTION
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Modern Search Strategy</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 700,
            }}>
              AI Search Optimization Built Into<br />
              Every Digital Strategy.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {[
              { num: "01", title: "Websites Built for AI Readability", text: "Clear service pages, structured content, schema markup, FAQs, and business details that AI tools can read, understand, and use to recommend your business." },
              { num: "02", title: "Google Profile & Citation Consistency", text: "Your business name, address, phone, services, and categories match across your website, Google Business Profile, and online directories — a key trust signal for AI-powered search." },
              { num: "03", title: "Reviews & Trust Signals", text: "Reviews, response patterns, and verified business information help AI tools identify your business as a credible local option worth recommending." },
              { num: "04", title: "Content That Answers Real Questions", text: "We create content that answers the questions customers actually ask — what you do, where you work, what it costs, and why you can be trusted — in a format search engines and AI tools can use." },
            ].map((item, i) => (
              <div key={i} className="fade-up" data-delay={String(i * 80)} style={{
                background: "#111111",
                padding: "2.5rem 2rem",
                transition: "background 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#161616"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#111111"}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "rgba(200,16,46,0.72)", lineHeight: 1, marginBottom: "1.25rem", letterSpacing: "-0.04em" }}>
                  {item.num}
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.825rem", lineHeight: 1.8, color: "#C0C0C0" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WEB PRESENCE AUDIT OFFER — WHITE SECTION
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#FFFFFF", borderTop: "3px solid #C8102E" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem", color: "#555555" }}>New Offer</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              Web Presence &amp; AI Search<br />
              <span style={{ color: "#C8102E" }}>Readiness Audit.</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#444444", maxWidth: 600, marginTop: "1.25rem" }}>
              A clear, honest review of your current website, Google Business Profile, reviews, local citations, and overall AI search readiness — with specific recommendations for what to fix, update, or improve.
            </p>
          </div>

          <div className="fade-up" style={{
            border: "1px solid rgba(0,0,0,0.1)",
            background: "#F7F7F7",
            padding: "3rem",
            marginBottom: "2rem",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
              {[
                {
                  section: "Website Review",
                  items: ["Page speed and mobile performance", "Service page clarity and completeness", "Schema markup and structured data", "Meta titles, descriptions, and headings", "Internal linking and site structure"],
                },
                {
                  section: "Google Business Profile Review",
                  items: ["Profile completeness and category accuracy", "Service and product listings", "Photo quality and recency", "Review volume, rating, and response patterns", "Posts and Q&A activity"],
                },
                {
                  section: "AI Search Readiness Review",
                  items: ["Business description clarity for AI tools", "FAQ and question-answer content", "Citation and directory consistency", "Trust signal assessment", "Content gap analysis"],
                },
              ].map((col, i) => (
                <div key={i}>
                  <div className="eyebrow" style={{ marginBottom: "1.25rem", color: "#555555" }}>{col.section}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.825rem", lineHeight: 1.7, color: "#444444", marginBottom: "0.75rem" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8102E", flexShrink: 0, marginTop: "0.45rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
              <div>
                <div style={{ fontSize: "3rem", fontWeight: 900, color: "#111111", lineHeight: 1, letterSpacing: "-0.04em" }}>$97</div>
                <div style={{ fontSize: "0.75rem", color: "#555555", marginTop: "0.3rem", letterSpacing: "0.05em" }}>One-time fee — no ongoing commitment required</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:9413288891" className="btn-gold">
                  <Phone size={15} /> Call to Book Your Audit
                </a>
                <Link href="/contact" className="btn-primary-light">
                  Request Audit Online →
                </Link>
              </div>
            </div>
          </div>

          <p className="fade-up" style={{ fontSize: "0.8rem", color: "#555555", lineHeight: 1.75, maxWidth: 580 }}>
            If you become a Got'm Digital client after the audit, the $97 fee is credited toward your first month. The audit report is yours to keep regardless.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRICING SUMMARY — DARK SECTION
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "8rem 0", background: "#111827", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Simple Pricing</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              All Services.<br />
              No Setup Fees.<br />
              Start at $100/Month.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: "Starter", price: "$100", period: "/mo", featured: false, includes: ["Custom HTML Website", "SEO Setup", "AI Search Optimization Built In", "Google Business Profile", "Unlimited Updates"] },
              { name: "Growth", price: "$300", period: "/mo", featured: true, includes: ["Everything in Starter", "Weekly Website Posts", "Weekly GBP Posts", "AI Search & Conversational Query Targeting", "Content Strategy"] },
              { name: "Full Service", price: "$500", period: "/mo", featured: false, includes: ["Everything in Growth", "Google Ads Management", "AI-Ready Landing Page Content", "Custom Landing Pages", "Ad Optimization"] },
            ].map((plan, i) => (
              <div key={i} className="fade-up" data-delay={String(i * 80)} style={{
                background: plan.featured ? "#C8102E" : "#FFFFFF",
                padding: "2.5rem 2rem",
                borderTop: plan.featured ? "none" : "3px solid rgba(255,255,255,0.15)",
                position: "relative",
                boxShadow: plan.featured ? "0 8px 32px rgba(200,16,46,0.35)" : "0 2px 12px rgba(0,0,0,0.25)",
              }}>
                {plan.featured && (
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginBottom: "1rem" }}>Most Popular</div>
                )}
                <div style={{ fontSize: "1rem", fontWeight: 800, color: plan.featured ? "#FFFFFF" : "#111111", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 900, color: plan.featured ? "#FFFFFF" : "#111111", letterSpacing: "-0.04em" }}>{plan.price}</span>
                  <span style={{ fontSize: "0.75rem", color: plan.featured ? "rgba(255,255,255,0.7)" : "#777777", letterSpacing: "0.1em", textTransform: "uppercase" }}>{plan.period}</span>
                </div>
                <div style={{ height: 1, background: plan.featured ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)", marginBottom: "1.5rem" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                  {plan.includes.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.825rem", color: plan.featured ? "rgba(255,255,255,0.9)" : "#444444", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: plan.featured ? "rgba(255,255,255,0.7)" : "#C8102E", flexShrink: 0, marginTop: "0.45rem" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:9413288891" className={plan.featured ? "btn-white" : "btn-primary-light"} style={{ width: "100%", justifyContent: "center" }}>
                  <Phone size={13} /> Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA — full-bleed dark photo
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.7)" }} />
        <div className="container" style={{ maxWidth: 700, textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.5rem" }}>Ready to Start?</div>
          <h2 className="fade-up" data-delay="80" style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}>
            Not Sure Where to Start?
          </h2>
          <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#C8C8C8", lineHeight: 1.8, marginBottom: "3rem", maxWidth: 480, margin: "0 auto 3rem" }}>
            Call me and we'll talk through your situation honestly. No sales pitch, no pressure — just a real conversation about what makes sense for your business right now.
          </p>
          <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:9413288891" className="btn-gold">
              <Phone size={16} /> (941) 328-8891
            </a>
            <Link href="/contact" className="btn-primary">
              Send a Message →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
