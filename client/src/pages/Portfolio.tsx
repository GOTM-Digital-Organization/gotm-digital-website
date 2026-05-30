import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ExternalLink, Phone, ArrowRight } from "lucide-react";
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

const clients = [
  {
    name: "Siesta Key Sport Fishing Charters",
    url: "https://siestakeysportfishingcharters.com",
    industry: "Sport Fishing Charters",
    location: "Siesta Key, FL",
    icon: "🎣",
    color: "#E0EEF5",
    desc: "A premier sport fishing charter service operating out of Siesta Key, Florida. We built a custom HTML website that showcases their trips, pricing, and booking information — optimized for local search terms like 'Siesta Key fishing charters' and 'deep sea fishing Sarasota'.",
    services: ["Custom HTML Website", "Local SEO", "Google Business Profile"],
  },
  {
    name: "Titan Up Marine Services",
    url: "https://titanupmarineservices.com",
    industry: "Marine Services",
    location: "Florida",
    icon: "⚓",
    color: "#E0EAF5",
    desc: "Professional marine services company covering boat maintenance, repair, and detailing. Their website is built for speed and local visibility, targeting boat owners across Florida who need reliable marine service professionals.",
    services: ["Custom HTML Website", "SEO Optimization", "Mobile-First Design"],
  },
  {
    name: "Reel Smart Charters",
    url: "https://reelsmartcharters.com",
    industry: "Fishing Charters",
    location: "Florida",
    icon: "🐟",
    color: "#E0F5EA",
    desc: "A fishing charter business built for conversion. The site is designed to turn visitors into bookings with clear calls-to-action, trip descriptions, and an easy-to-navigate layout that works great on mobile — where most charter bookings happen.",
    services: ["Custom HTML Website", "Conversion Optimization", "Local SEO"],
  },
  {
    name: "Pool Leak Sarasota",
    url: "https://poolleaksarasota.com",
    industry: "Pool Leak Detection & Repair",
    location: "Sarasota, FL",
    icon: "🏊",
    color: "#E0EAF5",
    desc: "A highly targeted local service website for pool leak detection and repair in the Sarasota area. Built with hyper-local SEO in mind — targeting specific neighborhoods and search terms that homeowners use when they have a pool problem.",
    services: ["Custom HTML Website", "Hyper-Local SEO", "Google Business Profile"],
  },
  {
    name: "SRQ Wash",
    url: "https://srqwash.com",
    industry: "Pressure Washing",
    location: "Sarasota, FL",
    icon: "💧",
    color: "#E0F5F5",
    desc: "A pressure washing company serving the Sarasota-Bradenton area. Their website is clean, fast, and built to rank for local pressure washing searches. We also manage their Google Business Profile to keep reviews and posts flowing consistently.",
    services: ["Custom HTML Website", "Google Business Profile", "Weekly Content Posts"],
  },
  {
    name: "Sarasota Wash and Seal",
    url: "https://sarasotawashandseal.com",
    industry: "Exterior Cleaning & Sealing",
    location: "Sarasota, FL",
    icon: "✨",
    color: "#EAEAF5",
    desc: "Full-service exterior cleaning and sealing company. Their website targets homeowners and commercial property managers looking for driveway sealing, roof cleaning, and exterior washing services across the greater Sarasota region.",
    services: ["Custom HTML Website", "Local SEO", "Google Ads Landing Page"],
  },
];

export default function Portfolio() {
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
          position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Our Work</div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}>
            Local Businesses We've<br />
            <span style={{ color: "#F4A12E" }}>Put on the Map</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontSize: "1.1rem",
            color: "#E0E6F0",
            lineHeight: 1.75,
            maxWidth: 580,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}>
            Every one of these businesses started exactly where you are — with no online presence and no idea where to begin. Here's what we built for them.
          </p>
        </div>
      </section>

      {/* ── CLIENT GRID ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="fade-up card-dark"
                data-delay={String(i * 80)}
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Color accent bar */}
                <div style={{ height: 4, background: "linear-gradient(90deg, #F4A12E, #F9C46B)" }} />

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 10,
                      background: client.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.75rem", flexShrink: 0,
                      border: "1px solid rgba(244,161,46,0.25)",
                    }}>
                      {client.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8102E", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.25rem" }}>
                        {client.industry}
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#111111", lineHeight: 1.3 }}>
                        {client.name}
                      </h3>
                      <div style={{ fontSize: "0.75rem", color: "#666666", display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.25rem" }}>
                        <MapPin size={11} /> {client.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#444444", marginBottom: "1.25rem", flex: 1 }}>
                    {client.desc}
                  </p>

                  {/* Services tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {client.services.map((s, j) => (
                      <span key={j} style={{
                        background: "rgba(244,161,46,0.08)",
                        border: "1px solid rgba(200,16,46,0.2)",
                        color: "#E8304A",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        padding: "0.25rem 0.625rem",
                        borderRadius: 100,
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-outline"
                    style={{ justifyContent: "center" }}
                  >
                    <ExternalLink size={14} /> Visit {client.name.split(" ")[0]} Website
                  </a>
                </div>
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
              Want Your Business Here?
            </h2>
            <p style={{ fontSize: "1rem", color: "#E0E6F0", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 480, margin: "0 auto 2rem", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              Every business on this page started with a single conversation. No setup fees, no pressure — just an honest discussion about what's possible for your business.
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
