import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up, .fade-in, .slide-left, .slide-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const clients = [
  { name: "Siesta Key Sport Fishing Charters", url: "https://siestakeysportfishingcharters.com", industry: "Sport Fishing Charters", location: "Siesta Key, FL", ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/BCgM3Y9UJiEyufxv5452KL/hero-fishing-charter-UYxgLoGDvzgtZXUvVuv2jJ.webp", desc: "Custom website for a premier sport fishing charter service on Siesta Key. Built for mobile bookings and local SEO.", tags: ["Custom Website", "Local SEO", "GBP Optimization"] },
  { name: "Titan Up Marine Services", url: "https://titanupmarineservices.com", industry: "Marine Services", location: "Sarasota, FL", ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/BEDpW4q6bc7ZsyysM8qY5P/og-image-Hc9i5wVKYYLLf9qVMtGdBY.png", desc: "Professional marine services website built for maximum local visibility and lead generation.", tags: ["Custom Website", "Google Ads", "Local SEO"] },
  { name: "Reel Smart Charters", url: "https://www.reelsmartcharters.com", industry: "Fishing Charters", location: "Florida", ogImage: "https://reelsmartcharters.netlify.app/images/hero-boat.jpeg", desc: "Conversion-focused charter fishing website built for mobile bookings and organic search growth.", tags: ["Custom Website", "Local SEO"] },
  { name: "Pool Leak Sarasota", url: "https://poolleaksarasota.com", industry: "Pool Leak Detection", location: "Sarasota, FL", ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/JMgMHXdyKGkKSmwRvjUx9i/captain-jons-hero-v2-YELGswNeS5Qt2bSPBSodH4.png", desc: "Hyper-local SEO site targeting homeowners searching for pool leak repair in Sarasota.", tags: ["Custom Website", "Local SEO", "GBP"] },
  { name: "SRQ Wash", url: "https://srqwash.com", industry: "Pressure Washing", location: "Sarasota, FL", ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/hero-roof-cleaning-barrel-tile-Fcd9LpuSZXD5dwY46PvXzH.webp", desc: "Pressure washing company with weekly content posts and active Google profile management.", tags: ["Custom Website", "GBP Management", "Content"] },
  { name: "Sarasota Wash and Seal", url: "https://sarasotawashandseal.com", industry: "Exterior Cleaning & Sealing", location: "Sarasota, FL", ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/2odGnpGFJGwoA24EW2bwTc/og-image-7kP2MVeWURhC9SLrBZ2Uqd.png", desc: "Full-service exterior cleaning site targeting homeowners and commercial properties.", tags: ["Custom Website", "Local SEO"] },
  { name: "MNSS Inc.", url: "https://mnss-inc.com", industry: "Commercial Services", location: "Florida", ogImage: "", desc: "New website currently in development — launching soon with full SEO and AI search optimization built in.", tags: ["In Development"], wip: true },
];

const STEPS = [
  { num: "01", title: "Free Web Presence Review", desc: "We audit your current website, GBP, and local rankings. You get a clear picture of where you stand and what's holding you back." },
  { num: "02", title: "Custom Strategy", desc: "We build a plan specific to your business, your market, and your budget. No cookie-cutter packages." },
  { num: "03", title: "Build & Launch", desc: "We build your website, optimize your profiles, and launch your campaigns. You're live and getting found in weeks, not months." },
];

export default function Portfolio() {
  useScrollReveal();

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="mesh-hero" style={{ minHeight: "50vh", display: "flex", alignItems: "center", paddingTop: "68px" }}>
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div className="gradient-badge fade-in" style={{ marginBottom: "1.25rem" }}>
            <span>✦</span><span>Client Work</span>
          </div>
          <h1 className="display-headline fade-up" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
            Real Businesses.{" "}
            <span className="gradient-text">Real Results.</span>
          </h1>
          <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "520px", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Every site we build is custom-coded, mobile-first, and built to rank. Here's a sample of the local businesses we've helped get found online.
          </p>
        </div>
      </section>

      {/* ── CLIENT GRID ──────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.75rem" }}>
            {clients.map((client, i) => (
              <div
                key={i}
                className="card fade-up"
                style={{ overflow: "hidden", animationDelay: `${i * 0.07}s` }}
              >
                {/* Image / WIP placeholder */}
                <div style={{ position: "relative", height: "200px", overflow: "hidden", background: "linear-gradient(135deg, rgba(217,70,239,0.08), rgba(99,102,241,0.08))" }}>
                  {client.wip ? (
                    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <div style={{ fontSize: "2rem" }}>🚧</div>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>In Development</span>
                    </div>
                  ) : client.ogImage ? (
                    <img src={client.ogImage} alt={client.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  ) : (
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "2.5rem" }}>🌐</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", gap: "0.5rem" }}>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{client.industry}</div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.3 }}>{client.name}</h3>
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <span>📍</span>{client.location}
                    </div>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>{client.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                    {client.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: "0.68rem", fontWeight: 600, padding: "0.2rem 0.6rem", borderRadius: "100px", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.18)", color: "var(--accent-indigo)", letterSpacing: "0.04em" }}>{tag}</span>
                    ))}
                  </div>
                  {!client.wip && (
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.78rem", padding: "0.5rem 1.25rem" }}>
                      Visit Site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-base)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>Your Business Could Be Next</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              How We Get You{" "}
              <span className="gradient-text">From Zero to Found</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {STEPS.map((step, i) => (
              <div key={i} className="card fade-up" style={{ padding: "2.5rem", animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800, lineHeight: 1, marginBottom: "1.25rem", background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{step.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-primary fade-up">
              Request a Free Review →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "6rem 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow fade-up" style={{ marginBottom: "1.25rem", color: "var(--blob-pink)" }}>Ready to Join Them?</div>
          <h2 className="section-headline fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "#fff", marginBottom: "1.5rem" }}>
            Let's Build Your Online Presence
          </h2>
          <p className="fade-up" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            No setup fees. No contracts. Just a fast website, better rankings, and more calls.
          </p>
          <Link href="/contact" className="btn-primary fade-up">
            Get Started Today →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
