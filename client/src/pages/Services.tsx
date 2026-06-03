import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle2, Globe, Search, Star, Megaphone, ArrowRight, Clock, TrendingUp, Shield } from "lucide-react";
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
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const services = [
  {
    icon: <Globe size={36} style={{ color: "#C8102E" }} />,
    title: "Website Design & AI-Ready Local SEO",
    tagline: "The foundation of everything",
    desc: "Your website should do more than look good. It should help Google, AI tools, and real customers understand exactly who you are, what you do, where you work, and why your business can be trusted. Got'm Digital builds modern websites with clear service pages, local SEO structure, trust signals, FAQs, conversion tracking, and AI-search-ready content built in from the start. Search is changing quickly — if your website is outdated, unclear, or built on a platform that is not keeping up with modern SEO and AI-driven search, your business may become harder to find while competitors gain visibility.",
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
    color: "#E0EEF5",
  },
  {
    icon: <Search size={36} style={{ color: "#C8102E" }} />,
    title: "Local SEO & AI Search Optimization",
    tagline: "The long game that pays off",
    desc: "Local SEO is no longer just about ranking for short keywords. Customers are asking detailed questions like who to hire, what a service costs, who serves their area, and which company is most trusted. Got'm Digital helps structure your website, content, Google profile, reviews, and online mentions so your business is easier to find, understand, and trust in modern search — including traditional Google rankings, map visibility, conversational search, structured content, schema, citations, and AI-answer readiness.",
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
    color: "#E0F5EA",
  },
  {
    icon: <Star size={36} style={{ color: "#C8102E" }} />,
    title: "Google Business Profile Authority Build",
    tagline: "Your most powerful free tool",
    desc: "Your Google Business Profile is one of the most important parts of your local online presence. We help optimize your profile with accurate services, categories, photos, updates, review strategy, and business information that matches your website. This helps customers, Google, and AI-powered search results better understand your business and local relevance — reinforcing the same services, locations, and business facts shown on your website.",
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
    color: "#1A1A0A",
  },
  {
    icon: <Megaphone size={36} style={{ color: "#C8102E" }} />,
    title: "Google Ads & Conversion Tracking",
    tagline: "Leads today, not in two years",
    desc: "Google Ads can bring in leads now, but the best results happen when ads are connected to strong landing pages, clear service messaging, and accurate conversion tracking. Got'm Digital builds and manages ad campaigns that send customers to pages designed to convert — while using ad data to improve the rest of your online presence. Ads bridge the gap while your organic SEO matures, and the data they generate helps guide website and content improvements over time.",
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
    color: "#1A0A1A",
    note: "Ad spend is paid directly by you to Google. Our fee covers strategy, setup, and management only. You stay in full control of your budget.",
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <div style={{ background: "#FFFFFF", color: "#222222", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section style={{
        paddingTop: "9rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(200,16,46,0.4)",
      }}>
        {/* Hero background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }} />
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(11,15,24,0.88) 0%, rgba(11,15,24,0.75) 50%, rgba(11,15,24,0.92) 100%)",
        }} />
        {/* Red radial glow */}
        <div style={{
          position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>What We Do</div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}>
            Websites, Google Ads, and Local SEO<br />
            <span style={{ color: "#C8102E" }}>Built for the New Way Customers Search</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontSize: "1.1rem",
            color: "#E0E6F0",
            lineHeight: 1.75,
            maxWidth: 620,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}>
            Get found on Google, Maps, and AI-powered search with a modern online presence that clearly shows who you are, what you do, where you work, and why customers should trust you.
          </p>
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section style={{ padding: "4rem 0", background: "#F5F5F5", borderBottom: "1px solid #252E42" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Shield size={22} style={{ color: "#C8102E" }} />, title: "No Setup Fees", desc: "You pay monthly. Nothing upfront, ever." },
              { icon: <Clock size={22} style={{ color: "#C8102E" }} />, title: "No Long Contracts", desc: "Stay because it's working, not because you're locked in." },
              { icon: <TrendingUp size={22} style={{ color: "#C8102E" }} />, title: "Grows With You", desc: "Start small, upgrade when you're ready." },
            ].map((item, i) => (
              <div key={i} className="fade-up" data-delay={String(i * 80)} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#111111", marginBottom: "0.25rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "#666666", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAILS ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {services.map((service, i) => (
              <div
                key={i}
                className="fade-up"
                data-delay="0"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "3rem",
                  alignItems: "start",
                  paddingBottom: "4rem",
                  borderBottom: i < services.length - 1 ? "1px solid #252E42" : "none",
                }}
              >
                {/* Left: Info */}
                <div>
                  <div style={{ marginBottom: "1.25rem" }}>{service.icon}</div>
                  <div className="section-label" style={{ marginBottom: "0.5rem" }}>{service.tagline}</div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 900,
                    color: "#111111",
                    lineHeight: 1.2,
                    marginBottom: "1.25rem",
                  }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#444444", marginBottom: "1.5rem" }}>
                    {service.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.8rem", color: "#666666" }}>
                      <Clock size={13} style={{ color: "#C8102E", flexShrink: 0 }} />
                      {service.timeline}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.8rem", color: "#666666" }}>
                      <TrendingUp size={13} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.1rem" }} />
                      {service.price}
                    </div>
                  </div>

                  {service.note && (
                    <div style={{
                      background: "rgba(200,16,46,0.06)",
                      border: "1px solid rgba(200,16,46,0.2)",
                      borderRadius: 8,
                      padding: "0.875rem 1rem",
                      fontSize: "0.8rem",
                      color: "#E8304A",
                      lineHeight: 1.65,
                    }}>
                      📌 {service.note}
                    </div>
                  )}
                </div>

                {/* Right: Bullets */}
                <div className="card-dark" style={{ padding: "1.75rem" }}>
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase", fontWeight: 600, marginBottom: "1.25rem" }}>
                    What's Included
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.bullets.map((bullet, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", lineHeight: 1.65, color: "#444444", marginBottom: "0.875rem" }}>
                        <CheckCircle2 size={16} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.1rem" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── AI SEARCH OPTIMIZATION SECTION ── */}
      <section style={{ padding: "5rem 0", background: "#F8F8F8", borderBottom: "1px solid #EBEBEB" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Modern Search Strategy</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}>
              AI Search Optimization Built Into<br />
              <span style={{ color: "#C8102E" }}>Every Digital Strategy</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444444", maxWidth: 700, margin: "0 auto" }}>
              Modern search is not just about keywords anymore. AI tools, voice search, and Google's own AI-powered results are changing how customers find and choose local businesses. Got'm Digital builds every website, Google profile, and content strategy with this in mind.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {[
              {
                icon: "🌐",
                title: "Websites Built for AI Readability",
                text: "Clear service pages, structured content, schema markup, FAQs, and business details that AI tools can read, understand, and use to recommend your business.",
              },
              {
                icon: "📍",
                title: "Google Profile & Citation Consistency",
                text: "Your business name, address, phone, services, and categories match across your website, Google Business Profile, and online directories — a key trust signal for AI-powered search.",
              },
              {
                icon: "⭐",
                title: "Reviews & Trust Signals",
                text: "Reviews, response patterns, and verified business information help AI tools identify your business as a credible local option worth recommending.",
              },
              {
                icon: "📝",
                title: "Content That Answers Real Questions",
                text: "We create content that answers the questions customers actually ask — what you do, where you work, what it costs, and why you can be trusted — in a format search engines and AI tools can use.",
              },
            ].map((item, i) => (
              <div key={i} className="fade-up card-dark" data-delay={String(i * 80)} style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#111111", marginBottom: "0.625rem", lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#555555" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── WEB PRESENCE AUDIT OFFER ── */}
      <section style={{ padding: "5rem 0", background: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>New Offer</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Web Presence &amp; AI Search<br />
              <span style={{ color: "#C8102E" }}>Readiness Audit</span>
            </h2>
            <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444444", maxWidth: 640, margin: "0 auto" }}>
              A clear, honest review of your current website, Google Business Profile, reviews, local citations, and overall AI search readiness — with specific recommendations for what to fix, update, or improve.
            </p>
          </div>

          <div className="fade-up card-dark" style={{ padding: "2.5rem", marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
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
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
                    {col.section}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.625rem", fontSize: "0.875rem", lineHeight: 1.65, color: "#444444", marginBottom: "0.625rem" }}>
                        <CheckCircle2 size={14} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.15rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #EBEBEB", marginTop: "2rem", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>$97</div>
                <div style={{ fontSize: "0.8rem", color: "#666666", marginTop: "0.25rem" }}>One-time fee — no ongoing commitment required</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:9413288891" className="btn-gold" style={{ padding: "0.875rem 1.75rem" }}>
                  <Phone size={15} /> Call to Book Your Audit
                </a>
                <Link href="/contact" className="btn-gold-outline" style={{ padding: "0.875rem 1.75rem" }}>
                  Request Audit Online <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          <p className="fade-up" style={{ fontSize: "0.85rem", color: "#666666", lineHeight: 1.75, textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            If you become a Got'm Digital client after the audit, the $97 fee is credited toward your first month. The audit report is yours to keep regardless.
          </p>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── PRICING SUMMARY ── */}
      <section style={{ padding: "5rem 0", background: "#F5F5F5" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Simple Pricing</div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#111111",
              lineHeight: 1.2,
            }}>
              All Services. No Setup Fees.<br />
              <span style={{ color: "#C8102E" }}>Start at $100/Month.</span>
            </h2>
          </div>

          <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { name: "Starter", price: "$100/mo", includes: ["Custom HTML Website", "SEO Setup", "AI Search Optimization Built In", "Google Business Profile", "Unlimited Updates"] },
              { name: "Growth", price: "$300/mo", featured: true, includes: ["Everything in Starter", "Weekly Website Posts", "Weekly GBP Posts", "AI Search & Conversational Query Targeting", "Content Strategy"] },
              { name: "Full Service", price: "$500/mo", includes: ["Everything in Growth", "Google Ads Management", "AI-Ready Landing Page Content", "Custom Landing Pages", "Ad Optimization"] },
            ].map((plan, i) => (
              <div key={i} className={`card-dark${plan.featured ? " featured" : ""}`} style={{ padding: "1.5rem", textAlign: "center" }}>
                {plan.featured && (
                  <div style={{ background: "#C8102E", color: "#111111", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.3rem", borderRadius: "4px 4px 0 0", margin: "-1.5rem -1.5rem 1.25rem", textAlign: "center" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#111111", marginBottom: "0.25rem" }}>{plan.name}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 900, color: "#C8102E", marginBottom: "1rem" }}>{plan.price}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", textAlign: "left" }}>
                  {plan.includes.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem", color: "#444444", marginBottom: "0.5rem" }}>
                      <span style={{ color: "#C8102E", fontWeight: 900, flexShrink: 0 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:9413288891" className={plan.featured ? "btn-gold" : "btn-gold-outline"} style={{ width: "100%", justifyContent: "center", fontSize: "0.85rem" }}>
                  <Phone size={13} /> Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule" />

      {/* ── CTA ── */}
      <section style={{
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(200,16,46,0.4)",
      }}>
        {/* Layer 1: Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }} />
        {/* Layer 2: Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(11,15,24,0.88) 0%, rgba(11,15,24,0.75) 50%, rgba(11,15,24,0.92) 100%)",
        }} />
        {/* Layer 3: Red radial glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ maxWidth: 700, textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="fade-up">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: "1rem", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Not Sure Where to Start?
            </h2>
            <p style={{ fontSize: "1rem", color: "#E0E6F0", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 480, margin: "0 auto 2rem", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              Call me and we'll talk through your situation honestly. No sales pitch, no pressure — just a real conversation about what makes sense for your business right now.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.1rem", padding: "0.875rem 2rem" }}>
                <Phone size={18} /> (941) 328-8891
              </a>
              <Link href="/contact" className="btn-gold-outline" style={{ padding: "0.875rem 2rem" }}>
                Send a Message <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
