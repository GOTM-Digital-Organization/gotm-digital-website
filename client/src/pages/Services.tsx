import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const capabilities = [
  ["01", "Digital Platform", "A fast, resilient web foundation with an information architecture that can represent every location, provider, service, and decision path clearly."],
  ["02", "Search & AI Readiness", "Useful content, structured information, and technical standards that help people and modern search systems understand what you do."],
  ["03", "Local Presence", "Accurate Google Business Profiles, locations, listings, reviews, and reputation signals maintained as one connected network."],
  ["04", "Demand Programs", "Search campaigns, paid social, landing pages, and conversion paths that direct investment toward real business outcomes."],
  ["05", "Content Systems", "Provider expertise, service-line education, social content, and resource libraries planned for the questions your audiences actually ask."],
  ["06", "Measurement & Governance", "Tracking, reporting, ownership, and operating standards that turn marketing activity into dependable decision support."],
];

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function Services() {
  useReveals();

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid" style={{ minHeight: "min(740px, 92svh)" }}>
          <div className="container" style={{ display: "grid", alignItems: "end", minHeight: "620px", paddingBottom: "4rem" }}>
            <div className="reveal" style={{ maxWidth: "940px" }}>
              <p className="section-kicker">Capabilities / 01–06</p>
              <h1 className="system-display" style={{ marginTop: "1.6rem" }}>
                The connected work behind a digital presence that <span className="copper-text">performs.</span>
              </h1>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.42fr)", gap: "2rem", marginTop: "2rem", paddingTop: "1.4rem", borderTop: "1px solid var(--line-strong)" }} className="capability-hero-copy">
                <p className="system-copy">We do not sell isolated marketing tasks. We design the platform, visibility, demand, and operating standards around the way your organization actually works.</p>
                <p className="system-mono">FOR HEALTHCARE · MULTI-LOCATION ORGANIZATIONS · ESTABLISHED SERVICE COMPANIES</p>
              </div>
            </div>
          </div>
        </section>

        <section className="system-section system-section-paper">
          <div className="container">
            <div className="section-intro reveal">
              <div>
                <p className="section-kicker">The system</p>
                <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "690px" }}>Six connected capabilities. One clearer path to <span className="mineral-text">growth.</span></h2>
              </div>
              <p className="system-copy">Each capability is designed to make the next one more useful. A better website supports better ads. Accurate locations improve local search. Better measurement improves the next investment.</p>
            </div>
            <div className="value-grid">
              {capabilities.map(([number, title, copy], index) => (
                <article key={number} className="value-cell reveal" style={{ transitionDelay: `${index * 55}ms` }}>
                  <span className="value-number">{number}</span>
                  <h3 className="value-title">{title}</h3>
                  <p className="value-copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="system-section system-section-warm">
          <div className="container">
            <div className="section-intro reveal">
              <div>
                <p className="section-kicker">Engagement model</p>
                <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "680px" }}>Start with what must be true before the next marketing dollar is spent.</h2>
              </div>
              <p className="system-copy">The first step for larger organizations is often a working blueprint—not a generic package. We determine what exists, what is fragmented, what should connect, and the right sequence to improve it.</p>
            </div>
            <div className="process-grid">
              {[
                ["01", "Digital Presence Review", "A practical audit of web platforms, ownership, data, locations, provider or service pages, listings, content, campaigns, and conversion paths."],
                ["02", "Transformation Blueprint", "A prioritized plan for architecture, content, technology, search, reputation, demand, reporting, and rollout—built around your actual organizational complexity."],
                ["03", "Build & Operating Support", "The work is implemented in a measured sequence, with the right mix of platform work, activation, maintenance, and accountability."],
              ].map(([index, title, copy], itemIndex) => (
                <article className="process-step reveal" style={{ transitionDelay: `${itemIndex * 70}ms` }} key={index}>
                  <span className="process-index">{index}</span>
                  <h3 className="process-title">{title}</h3>
                  <p className="process-copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="system-cta">
          <div className="container">
            <div className="reveal" style={{ maxWidth: "780px" }}>
              <p className="section-kicker">A more complete digital presence starts here</p>
              <h2 className="system-headline" style={{ marginTop: "1.25rem" }}>Tell us what is fragmented, underperforming, or simply no longer reflective of your organization.</h2>
              <p className="system-copy" style={{ marginTop: "1.5rem", maxWidth: "610px" }}>We will help you identify the right place to begin—and whether the work calls for a complete platform transformation or a focused first move.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.1rem" }}>
                <Link href="/contact" className="system-button">Start a Conversation ↗</Link>
                <Link href="/enterprise" className="system-button-outline">Explore Complex Organizations ↗</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <style>{`@media (max-width: 680px) { .capability-hero-copy { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
