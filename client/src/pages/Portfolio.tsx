import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const clients = [
  { name: "Siesta Key Sport Fishing Charters", url: "https://siestakeysportfishingcharters.com", industry: "Sport Fishing Charters", location: "Siesta Key, FL", image: "/manus-storage/siesta_e3b43ce3.png", tags: ["Website", "Local SEO", "Google Profile"] },
  { name: "Titan Up Marine Services", url: "https://titanupmarineservices.com", industry: "Marine Services", location: "Sarasota, FL", image: "/manus-storage/titan-og_debe9c5d.png", tags: ["Website", "Google Ads", "Local SEO"] },
  { name: "Reel Smart Charters", url: "https://www.reelsmartcharters.com", industry: "Fishing Charters", location: "Florida", image: "/manus-storage/reel-og_b3fb7408.jpg", tags: ["Website", "Local SEO"] },
  { name: "Pool Leak Sarasota", url: "https://poolleaksarasota.com", industry: "Pool Leak Detection", location: "Sarasota, FL", image: "/manus-storage/pool_0c57702f.webp", tags: ["Website", "Local SEO", "Google Profile"] },
  { name: "SRQ Wash", url: "https://srqwash.com", industry: "Pressure Washing", location: "Sarasota, FL", image: "/manus-storage/srqwash_fc8827dc.webp", tags: ["Website", "Google Profile", "Content"] },
  { name: "Sarasota Wash and Seal", url: "https://sarasotawashandseal.com", industry: "Exterior Cleaning & Sealing", location: "Sarasota, FL", image: "/manus-storage/sarasotawashandseal_45ddc10a.png", tags: ["Website", "Local SEO"] },
  { name: "MNSS Inc.", url: "https://mnss-inc.com", industry: "Commercial Services", location: "Florida", image: "", tags: ["In Development"], wip: true },
];

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function Portfolio() {
  useReveals();
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid" style={{ minHeight: "min(690px, 90svh)" }}>
          <div className="container" style={{ display: "grid", alignItems: "end", minHeight: "590px", paddingBottom: "4rem" }}>
            <div className="reveal" style={{ maxWidth: "900px" }}>
              <p className="section-kicker">Selected work / current foundation</p>
              <h1 className="system-display" style={{ marginTop: "1.5rem" }}>Practical digital work for organizations ready to be <span className="copper-text">easier to choose.</span></h1>
              <p className="system-copy" style={{ maxWidth: "620px", marginTop: "1.65rem" }}>Our active portfolio shows the disciplined foundation behind the next phase of GOTM: clear websites, useful local visibility, trustworthy information, and conversion paths designed for real organizations.</p>
            </div>
          </div>
        </section>

        <section className="system-section system-section-paper"><div className="container"><div className="proof-strip reveal"><p className="proof-copy"><span className="system-mono" style={{ display: "block", marginBottom: "0.65rem", color: "var(--copper)" }}>07 / ACTIVE &amp; IN-PROGRESS CLIENT PROGRAMS</span>These examples represent current local-service work. The same principles of clarity, technical quality, local presence, and connected pathways scale into more complex organizations.</p><Link href="/enterprise" className="system-button-outline">Explore Complex Organizations ↗</Link></div></div></section>

        <section className="system-section system-section-warm"><div className="container"><div className="work-grid">{clients.map((client, index) => <article className="work-card reveal" style={{ transitionDelay: `${index * 55}ms` }} key={client.name}><div className="work-visual">{client.wip ? <div className="work-wip"><span className="system-mono" style={{ color: "var(--copper)" }}>IN DEVELOPMENT</span><span style={{ color: "var(--graphite)", fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 600, letterSpacing: "-0.045em" }}>MNSS Inc.</span></div> : <img src={client.image} alt={`${client.name} website preview`} />}</div><div className="work-content"><div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "start" }}><div><p className="system-mono" style={{ color: "var(--copper)" }}>{client.industry}</p><h2 style={{ marginTop: "0.45rem", fontSize: "1.38rem", fontWeight: 600, letterSpacing: "-0.045em" }}>{client.name}</h2></div><span className="system-mono" style={{ textAlign: "right" }}>{client.location}</span></div><div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.2rem" }}>{client.tags.map((tag) => <span key={tag} style={{ padding: "0.26rem 0.42rem", border: "1px solid var(--line)", color: "var(--graphite-soft)", fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.02em", textTransform: "uppercase" }}>{tag}</span>)}</div>{!client.wip && <a className="work-link" href={client.url} target="_blank" rel="noreferrer">Visit live site <span>↗</span></a>}</div></article>)}</div></div></section>

        <section className="system-cta"><div className="container"><div className="reveal" style={{ maxWidth: "760px" }}><p className="section-kicker">Your organization is not a template</p><h2 className="system-headline" style={{ marginTop: "1.25rem" }}>The next website should be part of a system—not another disconnected property.</h2><p className="system-copy" style={{ marginTop: "1.5rem", maxWidth: "600px" }}>Let’s discuss what needs to be clearer, more connected, and easier for your audiences to act on.</p><div style={{ marginTop: "2rem" }}><Link href="/contact" className="system-button">Start a Conversation ↗</Link></div></div></div></section>
      </main>
      <SiteFooter />
      <style>{`.work-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border-top:1px solid var(--line-strong); border-left:1px solid var(--line-strong); } .work-card { border-right:1px solid var(--line-strong); border-bottom:1px solid var(--line-strong); background:var(--paper-bright); } .work-visual { aspect-ratio:16/8.7; overflow:hidden; border-bottom:1px solid var(--line); background:var(--paper); } .work-visual img { display:block; width:100%; height:100%; object-fit:cover; filter:saturate(.8) contrast(.98); transition:transform 300ms cubic-bezier(.23,1,.32,1), filter 300ms ease; } .work-card:hover .work-visual img { transform:scale(1.035); filter:saturate(1) contrast(1); } .work-wip { display:grid; align-content:center; gap:.55rem; height:100%; padding:1.75rem; background:repeating-linear-gradient(135deg, var(--paper-bright) 0 16px, var(--paper-warm) 16px 17px); } .work-content { padding:1.5rem; } .work-link { display:inline-flex; gap:.55rem; margin-top:1.6rem; color:var(--copper); font-family:var(--font-mono); font-size:.63rem; letter-spacing:.04em; text-decoration:none; text-transform:uppercase; } .work-link span { font-size:.95rem; } @media(max-width:720px) { .work-grid { grid-template-columns:1fr; } }`}</style>
    </div>
  );
}
