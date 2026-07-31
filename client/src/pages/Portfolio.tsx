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
  {
    name: "MNSS Inc.",
    url: "https://mnss-inc.com",
    industry: "Commercial Services",
    location: "Florida",
    ogImage: "",
    desc: "New custom HTML website currently in active development — built from scratch with full SEO structure, AI search optimization, and mobile-first design. Launching soon.",
    services: ["Custom HTML Website", "SEO Optimization", "AI Search Ready"],
    wip: true,
  },
];

export default function Portfolio() {
  useScrollReveal();

  return (
    <div style={{ background: "#0A0A0A", color: "#E8E8E8", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          PAGE HERO — editorial full-bleed
          ═══════════════════════════════════════════════ */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "flex-end", background: "#0A0A0A", borderBottom: "3px solid #C8102E" }}>
        <div className="container" style={{ paddingTop: "9rem", paddingBottom: "5rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", maxWidth: 860 }}>
            <div className="accent-bar" style={{ height: 120, marginTop: "0.5rem" }} />
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.25rem" }}>Our Work</div>
              <h1
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 6rem)",
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                  maxWidth: 800,
                }}
              >
                Local Businesses We've<br />
                <span style={{ color: "#C8102E" }}>Put on the Map.</span>
              </h1>
              <p className="fade-up" data-delay="160" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.85,
                maxWidth: 540,
              }}>
                Every one of these businesses started exactly where you are — with no online presence and no idea where to begin. Here's what we built for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS BAR — DARK
          ═══════════════════════════════════════════════ */}
      <section style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {[
              { num: "7", label: "Active Client Websites" },
              { num: "100%", label: "Custom HTML — No Templates" },
              { num: "5★", label: "Average Client Review Score" },
              { num: "$0", label: "Setup Fees. Ever." },
            ].map((stat, i) => (
              <div key={i} className="fade-up" data-delay={String(i * 60)} style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#C8102E", lineHeight: 1, letterSpacing: "0.01em", marginBottom: "0.4rem" }}>{stat.num}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#666666", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CLIENT GRID — LIGHT
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "6rem 0", background: "#F5F4F2" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="fade-up"
                data-delay={String((i % 3) * 80)}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,16,46,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* OG Image thumbnail or WIP placeholder */}
                {(client as any).wip ? (
                  <div style={{
                    height: 200, display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    background: "linear-gradient(135deg, #0A0A0A 0%, #1A0A0D 50%, #0A0A0A 100%)",
                    gap: "0.75rem", position: "relative",
                  }}>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, border: "1px solid rgba(200,16,46,0.5)", padding: "0.3rem 0.75rem" }}>🔧 In Progress</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em", textTransform: "uppercase" }}>mnss-inc.com</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>Launching Soon</div>
                  </div>
                ) : (
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
                        height: 200,
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                        transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                    />
                  </a>
                )}

                {/* Red accent bar */}
                <div style={{ height: 3, background: "#C8102E" }} />

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8102E", marginBottom: "0.4rem" }}>
                    {client.industry}
                  </div>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "#0A0A0A",
                    lineHeight: 1.2,
                    marginBottom: "0.35rem",
                  }}>
                    {client.name}
                  </h3>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#888888", display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.875rem" }}>
                    <MapPin size={10} /> {client.location}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.825rem", lineHeight: 1.8, color: "#555555", marginBottom: "1.25rem", flex: 1 }}>
                    {client.desc}
                  </p>

                  {/* Services tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                    {client.services.map((s, j) => (
                      <span key={j} style={{
                        border: "1px solid rgba(200,16,46,0.3)",
                        color: "#C8102E",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.6rem",
                        background: "rgba(200,16,46,0.04)",
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {(client as any).wip ? (
                    <Link href="/contact" className="btn-primary" style={{ justifyContent: "center" }}>
                      Get a Website Like This →
                    </Link>
                  ) : (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark"
                      style={{ justifyContent: "center" }}
                    >
                      <ExternalLink size={13} /> Visit {client.name.split(" ")[0]} Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WORK IN PROGRESS BANNER — DARK
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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ position: "relative", width: 52, height: 52 }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(200,16,46,0.15)", animation: "pulse 2s ease-in-out infinite" }} />
                <div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.9rem" }}>🔧</span>
                </div>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, whiteSpace: "nowrap" }}>This Week</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "#666666", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.35rem" }}>Work in Progress</div>
              <h3 className="editorial-headline" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "#FFFFFF", marginBottom: "0.4rem" }}>
                Currently Building: <span style={{ color: "#C8102E" }}>mnss-inc.com</span>
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#AAAAAA", lineHeight: 1.7, margin: 0, maxWidth: 500 }}>
                A new custom HTML website in active development this week — built from scratch with full SEO structure, AI search optimization, and mobile-first design. Launching soon.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/contact" className="btn-gold-outline">
                Get One Like This →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT'S NEXT — DARK
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#0A0A0A" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Your Business Could Be Next</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#FFFFFF",
                  marginBottom: "1.25rem",
                }}
              >
                Every Business Here<br />
                Started With a<br />
                <span style={{ color: "#C8102E" }}>Single Conversation.</span>
              </h2>
              <p className="fade-up" data-delay="160" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.85, fontStyle: "italic", color: "#AAAAAA", marginBottom: "2rem" }}>
                No setup fees, no pressure — just an honest discussion about what's possible for your business and what timeline is realistic.
              </p>
              <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:9413288891" className="btn-primary">
                  <Phone size={16} /> (941) 328-8891
                </a>
                <Link href="/contact" className="btn-outline">
                  Send a Message →
                </Link>
              </div>
            </div>
            <div className="fade-up" data-delay="120">
              {[
                { num: "01", title: "Quick call to understand your business", desc: "We talk through your goals, your market, and what's realistic." },
                { num: "02", title: "Honest assessment of what's possible", desc: "No inflated promises — just a clear picture of what we can build and when." },
                { num: "03", title: "Website live within 1–2 weeks", desc: "Fast launch, no setup fees, and you start building from day one." },
              ].map((step, i) => (
                <div key={i} style={{
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  padding: "1.5rem 0",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}>
                  <div className="section-number" style={{ fontSize: "2rem", minWidth: "2.5rem", flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: "0.3rem" }}>{step.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#888888", lineHeight: 1.7 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA — full-bleed dark photo
          ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0A0A0A", borderTop: "3px solid #C8102E", padding: "8rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", maxWidth: 700 }}>
            <div className="accent-bar" style={{ height: 100, marginTop: "0.5rem" }} />
            <div>
              <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.5rem" }}>Ready to Start?</div>
              <h2
                className="fade-up editorial-headline"
                data-delay="80"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#FFFFFF", marginBottom: "1.5rem" }}
              >
                Want Your Business Here?
              </h2>
              <p className="fade-up" data-delay="160" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.85,
                marginBottom: "3rem",
                maxWidth: 480,
              }}>
                Every business on this page started with a single conversation. No setup fees, no pressure — just an honest discussion about what's possible for your business.
              </p>
              <div className="fade-up" data-delay="240" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:9413288891" className="btn-primary">
                  <Phone size={16} /> (941) 328-8891
                </a>
                <Link href="/contact" className="btn-outline">
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
