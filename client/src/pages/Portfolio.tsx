import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ExternalLink, Phone } from "lucide-react";
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

const clients = [
  {
    name: "Siesta Key Sport Fishing Charters",
    url: "https://siestakeysportfishingcharters.com",
    industry: "Sport Fishing Charters",
    location: "Siesta Key, FL",
    ogImage: "/manus-storage/siesta_e3b43ce3.png",
    desc: "A premier sport fishing charter service operating out of Siesta Key, Florida. We built a custom HTML website that showcases their trips, pricing, and booking information — optimized for local search terms like 'Siesta Key fishing charters' and 'deep sea fishing Sarasota'.",
    services: ["Custom HTML Website", "Local SEO", "Google Business Profile"],
  },
  {
    name: "Titan Up Marine Services",
    url: "https://titanupmarineservices.com",
    industry: "Marine Services",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/titan-og_debe9c5d.png",
    desc: "Professional marine services company covering boat maintenance, repair, and detailing. Their website is built for speed and local visibility, targeting boat owners across Florida who need reliable marine service professionals.",
    services: ["Custom HTML Website", "SEO Optimization", "Mobile-First Design"],
  },
  {
    name: "Reel Smart Charters",
    url: "https://www.reelsmartcharters.com",
    industry: "Fishing Charters",
    location: "Florida",
    ogImage: "/manus-storage/reel-og_b3fb7408.jpg",
    desc: "A fishing charter business built for conversion. The site is designed to turn visitors into bookings with clear calls-to-action, trip descriptions, and an easy-to-navigate layout that works great on mobile — where most charter bookings happen.",
    services: ["Custom HTML Website", "Conversion Optimization", "Local SEO"],
  },
  {
    name: "Pool Leak Sarasota",
    url: "https://poolleaksarasota.com",
    industry: "Pool Leak Detection & Repair",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/pool_0c57702f.webp",
    desc: "A highly targeted local service website for pool leak detection and repair in the Sarasota area. Built with hyper-local SEO in mind — targeting specific neighborhoods and search terms that homeowners use when they have a pool problem.",
    services: ["Custom HTML Website", "Hyper-Local SEO", "Google Business Profile"],
  },
  {
    name: "SRQ Wash",
    url: "https://srqwash.com",
    industry: "Pressure Washing",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/srqwash_fc8827dc.webp",
    desc: "A pressure washing company serving the Sarasota-Bradenton area. Their website is clean, fast, and built to rank for local pressure washing searches. We also manage their Google Business Profile to keep reviews and posts flowing consistently.",
    services: ["Custom HTML Website", "Google Business Profile", "Weekly Content Posts"],
  },
  {
    name: "Sarasota Wash and Seal",
    url: "https://sarasotawashandseal.com",
    industry: "Exterior Cleaning & Sealing",
    location: "Sarasota, FL",
    ogImage: "/manus-storage/sarasotawashandseal_45ddc10a.png",
    desc: "Full-service exterior cleaning and sealing company. Their website targets homeowners and commercial property managers looking for driveway sealing, roof cleaning, and exterior washing services across the greater Sarasota region.",
    services: ["Custom HTML Website", "Local SEO", "Google Ads Landing Page"],
  },
];

export default function Portfolio() {
  useScrollReveal();

  return (
    <div style={{ background: "#0A0A0A", color: "#E8E8E8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          PAGE HEADER — full-bleed cinematic
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
          background: "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.9) 80%, rgba(10,10,10,1) 100%)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "9rem", paddingBottom: "5rem", width: "100%" }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.25rem" }}>Our Work</div>
          <h1 className="fade-up" data-delay="80" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
            maxWidth: 800,
          }}>
            Local Businesses We've<br />
            <span style={{ color: "#C8102E" }}>Put on the Map.</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#C8C8C8", lineHeight: 1.8, maxWidth: 540 }}>
            Every one of these businesses started exactly where you are — with no online presence and no idea where to begin. Here's what we built for them.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLIENT GRID
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "6rem 0", background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="fade-up"
                data-delay={String((i % 3) * 80)}
                style={{
                  background: "#0A0A0A",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#0F0F0F"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#0A0A0A"}
              >
                {/* OG Image thumbnail — clickable */}
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", overflow: "hidden", lineHeight: 0, position: "relative" }}
                >
                  <img
                    src={client.ogImage}
                    alt={`${client.name} website preview`}
                    style={{
                      width: "100%",
                      height: 210,
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                  />
                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(200,16,46,0.0)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.3s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(200,16,46,0.15)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(200,16,46,0)"}
                  >
                    <ExternalLink size={28} style={{ color: "#FFFFFF", opacity: 0, transition: "opacity 0.3s" }}
                      onMouseEnter={e => (e.currentTarget as SVGElement).style.opacity = "1"}
                    />
                  </div>
                </a>

                {/* Red accent bar */}
                <div style={{ height: 2, background: "linear-gradient(90deg, #C8102E 0%, rgba(200,16,46,0.2) 100%)" }} />

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <div style={{ marginBottom: "1rem" }}>
                    <div className="eyebrow" style={{ marginBottom: "0.4rem", fontSize: "0.6rem" }}>
                      {client.industry}
                    </div>
                    <h3 style={{
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                      marginBottom: "0.35rem",
                      letterSpacing: "-0.01em",
                    }}>
                      {client.name}
                    </h3>
                    <div style={{ fontSize: "0.72rem", color: "#AAAAAA", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <MapPin size={10} /> {client.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.825rem", lineHeight: 1.8, color: "#C0C0C0", marginBottom: "1.25rem", flex: 1 }}>
                    {client.desc}
                  </p>

                  {/* Services tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                    {client.services.map((s, j) => (
                      <span key={j} style={{
                        border: "1px solid rgba(200,16,46,0.25)",
                        color: "#C8102E",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.6rem",
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
                    className="btn-primary"
                    style={{ justifyContent: "center" }}
                  >
                    <ExternalLink size={13} /> Visit {client.name.split(" ")[0]} Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA — full-bleed dark
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.12)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.75)" }} />
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
            Want Your Business Here?
          </h2>
          <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#C8C8C8", lineHeight: 1.8, marginBottom: "3rem", maxWidth: 480, margin: "0 auto 3rem" }}>
            Every business on this page started with a single conversation. No setup fees, no pressure — just an honest discussion about what's possible for your business.
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
