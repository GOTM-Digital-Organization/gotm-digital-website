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
    title: "Custom HTML Websites",
    tagline: "The foundation of everything",
    desc: "Every website we build is hand-coded in clean HTML, CSS, and JavaScript — no WordPress, no Wix, no page builders. This means your site loads faster, ranks better, and is built exactly to your needs without the bloat that slows most local business websites down.",
    bullets: [
      "Mobile-first responsive design that looks great on every device",
      "Schema markup and meta optimization baked in from day one",
      "Lightning-fast load times — Google's #1 ranking signal",
      "Unlimited updates, edits, and new pages included",
      "Hosted and maintained — you never touch the technical side",
      "Built to outrank WordPress, Wix, and Squarespace over time",
    ],
    timeline: "Live within 1–2 weeks of getting started",
    price: "Included in all plans starting at $100/month",
    color: "#E0EEF5",
  },
  {
    icon: <Search size={36} style={{ color: "#C8102E" }} />,
    title: "SEO & Content Strategy",
    tagline: "The long game that pays off",
    desc: "Search engine optimization is not a switch you flip — it's a compounding investment. We publish weekly content to your website and Google Business Profile, building the consistent signal that Google uses to determine who deserves to rank on page one. The businesses that publish consistently are the ones that win.",
    bullets: [
      "Weekly blog posts and service pages added to your website",
      "Weekly posts to your Google Business Profile",
      "Local keyword research and targeting for your service area",
      "Internal linking strategy to build site authority",
      "Image optimization and alt text for every upload",
      "Monthly performance reporting so you can see the progress",
    ],
    timeline: "Results typically visible at 6–18 months",
    price: "Included in Growth ($300/mo) and Full Service ($500/mo)",
    color: "#E0F5EA",
  },
  {
    icon: <Star size={36} style={{ color: "#C8102E" }} />,
    title: "Google Business Profile Management",
    tagline: "Your most powerful free tool",
    desc: "While your website builds authority over time, your Google Business Profile can start generating calls and leads within weeks. We set it up correctly, keep it active with regular posts and photos, and help you build a consistent review pipeline that signals trust to both Google and potential customers.",
    bullets: [
      "Complete profile setup and optimization",
      "Regular photo uploads and service updates",
      "Weekly Google Business posts to stay active",
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
    title: "Google Ads Management",
    tagline: "Leads today, not in two years",
    desc: "Google Ads are the bridge between where you are now and where your organic SEO will eventually take you. We build and manage campaigns that put your business in front of people actively searching for your services right now. You control the budget — we handle the strategy, the ads, and the landing pages.",
    bullets: [
      "Full campaign setup, keyword research, and ad copywriting",
      "Custom HTML landing pages built specifically for conversions",
      "Ongoing bid optimization and A/B testing",
      "Negative keyword management to eliminate wasted spend",
      "Monthly performance reports with clear ROI tracking",
      "Scale back or pause anytime — you're always in control",
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
            Services Built for<br />
            <span style={{ color: "#C8102E" }}>Local Service Businesses</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontSize: "1.1rem",
            color: "#E0E6F0",
            lineHeight: 1.75,
            maxWidth: 580,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}>
            No fluff. No upsells. Just the four things that actually move the needle for local service businesses — done honestly and affordably.
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
              { name: "Starter", price: "$100/mo", includes: ["Custom HTML Website", "SEO Setup", "Google Business Profile", "Unlimited Updates"] },
              { name: "Growth", price: "$300/mo", featured: true, includes: ["Everything in Starter", "Weekly Website Posts", "Weekly GBP Posts", "Content Strategy"] },
              { name: "Full Service", price: "$500/mo", includes: ["Everything in Growth", "Google Ads Management", "Custom Landing Pages", "Ad Optimization"] },
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
