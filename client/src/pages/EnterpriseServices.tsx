import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const steps = [
  ["01", "Assess the digital estate", "We inventory domains, websites, provider and location pages, listings, content, ownership, systems, and the paths people take to reach you."],
  ["02", "Architect the unified platform", "We define the information structure, technology approach, migration priorities, search model, and governance required to scale without losing clarity."],
  ["03", "Activate visibility and demand", "We connect local profiles, useful content, paid media, social presence, and measurement to a platform built to support them."],
];

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function EnterpriseServices() {
  useReveals();
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid" style={{ minHeight: "min(760px, 94svh)" }}>
          <div className="container" style={{ display: "grid", alignItems: "end", minHeight: "650px", paddingBottom: "4rem" }}>
            <div className="reveal" style={{ maxWidth: "990px" }}>
              <p className="section-kicker">Healthcare & multi-location organizations</p>
              <h1 className="system-display" style={{ marginTop: "1.6rem" }}>One platform for every provider, location, service, and <span className="copper-text">next decision.</span></h1>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(250px, 0.38fr)", gap: "2rem", marginTop: "2rem", paddingTop: "1.4rem", borderTop: "1px solid var(--line-strong)" }} className="enterprise-hero-copy">
                <p className="system-copy">When information is distributed across individual sites, profiles, locations, and vendors, the organization loses authority and people lose the path to take action. We help consolidate the system without erasing the expertise that makes each provider or location valuable.</p>
                <p className="system-mono">FOR PHYSICIAN GROUPS · SPECIALTY PRACTICES · MULTI-LOCATION ORGANIZATIONS</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}><Link href="/contact" className="system-button">Discuss Your Organization ↗</Link><a href="#approach" className="system-button-outline">See the Approach ↓</a></div>
            </div>
          </div>
        </section>

        <section className="system-section system-section-paper">
          <div className="container">
            <div className="section-intro reveal"><div><p className="section-kicker">The transformation</p><h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "700px" }}>Move from scattered digital properties to a system that gives people a <span className="mineral-text">clear next step.</span></h2></div><p className="system-copy">The work is about more than consolidation. It creates an accountable digital foundation for patient access, customer experience, search visibility, location growth, and provider or service-line authority.</p></div>
            <div className="value-grid">
              {[
                ["01", "Provider Centers", "Detailed physician or expert profiles, credentials, specialty pages, educational content, video, and a direct path to take action."],
                ["02", "Location Intelligence", "Accurate locations, services, insurance or service-area information, contact routes, and local search data maintained together."],
                ["03", "Patient & Customer Paths", "Clear, mobile-ready paths from research to the correct location, provider, scheduling route, or form—without confusing handoffs."],
                ["04", "Search Authority", "Structured data, useful expertise, and technical standards that help traditional and AI-driven search understand the organization."],
                ["05", "Controlled Transition", "Thoughtful content migration, redirect decisions, and domain pathways that protect valuable equity while removing duplication."],
                ["06", "Governed Growth", "Operating standards for updates, content, profiles, campaigns, reporting, and decision-making as the organization evolves."],
              ].map(([number, title, copy], index) => <article className="value-cell reveal" style={{ transitionDelay: `${index * 55}ms` }} key={number}><span className="value-number">{number}</span><h3 className="value-title">{title}</h3><p className="value-copy">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section id="approach" className="system-section system-section-warm"><div className="container"><div className="section-intro reveal"><div><p className="section-kicker">How complex work gets done</p><h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "680px" }}>A measured transformation plan, built around your realities—not a forced package.</h2></div><p className="system-copy">Every organization has a different combination of existing domains, stakeholders, locations, patient or customer pathways, marketing investments, and technical constraints. The engagement starts by making that system visible.</p></div><div className="process-grid">{steps.map(([index, title, copy], itemIndex) => <article className="process-step reveal" style={{ transitionDelay: `${itemIndex * 80}ms` }} key={index}><span className="process-index">{index}</span><h3 className="process-title">{title}</h3><p className="process-copy">{copy}</p></article>)}</div></div></section>

        <section className="system-section system-section-paper"><div className="container"><div className="pathway-grid"><div className="pathway-statement reveal"><p className="section-kicker">Industry depth, inclusive model</p><h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "550px" }}>Healthcare is a clear example of the problem. It is not the only organization we can solve it for.</h2><p className="system-copy" style={{ marginTop: "1.35rem" }}>The same model applies where a company needs a clearer relationship between its people, locations, services, audience, and marketing activity.</p></div><div className="pathway-list reveal">{[["A", "Physician Groups & Specialty Practices", "Provider expertise, patient journeys, locations, local visibility, and trustworthy information."], ["B", "Professional & Multi-Office Firms", "Individual professionals, service lines, offices, referrals, and reputation built into one coherent platform."], ["C", "Multi-Location Service Organizations", "Markets, locations, local demand, reviews, customer paths, and reporting connected across the business."]].map(([code, title, copy]) => <div className="pathway-row" key={code}><span className="pathway-code">{code}</span><span><span className="pathway-title">{title}</span><span className="pathway-copy">{copy}</span></span><span className="pathway-arrow">→</span></div>)}</div></div></div></section>

        <section className="system-cta"><div className="container"><div className="reveal" style={{ maxWidth: "790px" }}><p className="section-kicker">Project scope is determined by the system you need</p><h2 className="system-headline" style={{ marginTop: "1.25rem" }}>Start with a conversation about what has become too fragmented to manage well.</h2><p className="system-copy" style={{ marginTop: "1.5rem", maxWidth: "620px" }}>We will help you decide whether the next move is an assessment, a migration blueprint, a new platform, or a focused visibility and demand program.</p><div style={{ marginTop: "2rem" }}><Link href="/contact" className="system-button">Discuss Your Organization ↗</Link></div></div></div></section>
      </main>
      <SiteFooter />
      <style>{`@media (max-width: 680px) { .enterprise-hero-copy { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
