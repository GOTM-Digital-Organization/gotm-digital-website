import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const plans = [
  {
    name: "Starter",
    price: "$100",
    detail: "/ month",
    description: "For businesses getting the essentials organized and visible.",
    items: ["Google Business Profile optimization", "Monthly performance report", "Review response management", "One citation listing per month", "Email support"],
  },
  {
    name: "Growth",
    price: "$250",
    detail: "/ month",
    description: "For businesses ready to connect website, local search, and lead generation.",
    items: ["Everything in Starter", "Custom five-page website", "Local SEO and citations", "Google Ads management up to $500 ad spend", "Bi-weekly check-ins"],
  },
  {
    name: "Pro",
    price: "$500",
    detail: "/ month",
    description: "For established businesses needing a more active local growth program.",
    items: ["Everything in Growth", "Expanded website content", "Google Ads management up to $2,000 ad spend", "Two content pieces per month", "Priority support and weekly calls"],
  },
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

export default function LocalServices() {
  useReveals();
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid" style={{ minHeight: "min(700px, 90svh)" }}>
          <div className="container" style={{ display: "grid", alignItems: "end", minHeight: "590px", paddingBottom: "4rem" }}>
            <div className="reveal" style={{ maxWidth: "880px" }}>
              <p className="section-kicker">Local Service Businesses</p>
              <h1 className="system-display" style={{ marginTop: "1.5rem" }}>A straightforward digital growth path for businesses that need to be <span className="copper-text">found locally.</span></h1>
              <p className="system-copy" style={{ maxWidth: "600px", marginTop: "1.65rem" }}>This is our focused offering for established service businesses: a practical combination of website improvements, Google Business Profile management, local search, reviews, and demand generation—without enterprise-level complexity.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.1rem" }}>
                <Link href="/contact" className="system-button">Request a Presence Review ↗</Link>
                <a href="#pricing" className="system-button-outline">See Pricing ↓</a>
              </div>
            </div>
          </div>
        </section>

        <section className="system-section system-section-paper">
          <div className="container">
            <div className="section-intro reveal">
              <div>
                <p className="section-kicker">What is included</p>
                <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "710px" }}>The local digital foundation—handled with consistency and <span className="mineral-text">clear priorities.</span></h2>
              </div>
              <p className="system-copy">The goal is not more marketing activity. It is a cleaner path from a local search to a real phone call, quote request, or booked appointment.</p>
            </div>
            <div className="value-grid">
              {[
                ["01", "Website", "Fast, mobile-friendly pages that explain your services, show where you work, and make calling or requesting help easy."],
                ["02", "Google Business Profile", "Accurate categories, services, updates, photos, reviews, and active local signals that support discovery."],
                ["03", "Local SEO", "On-page optimization, listings, and location-focused content designed to improve maps and organic visibility over time."],
                ["04", "Google Ads", "Buyer-intent campaigns and clear landing pages for businesses that need qualified demand while organic visibility develops."],
                ["05", "Reputation", "A practical process for earning, responding to, and learning from customer reviews."],
                ["06", "Reporting", "Plain-language reporting on calls, leads, visibility, and the next actions—not vanity metrics."],
              ].map(([number, title, copy], index) => (
                <article className="value-cell reveal" style={{ transitionDelay: `${index * 55}ms` }} key={number}>
                  <span className="value-number">{number}</span><h3 className="value-title">{title}</h3><p className="value-copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="system-section system-section-warm">
          <div className="container">
            <div className="section-intro reveal">
              <div><p className="section-kicker">Published local-service pricing</p><h2 className="system-headline" style={{ marginTop: "1.25rem" }}>Clear options for a more capable local presence.</h2></div>
              <p className="system-copy">No setup fees. No long-term contract requirement. For more complex organizations, work is scoped individually through the capabilities and healthcare pathways.</p>
            </div>
            <div className="value-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {plans.map((plan, index) => (
                <article className="value-cell reveal" style={{ minHeight: "430px", transitionDelay: `${index * 80}ms` }} key={plan.name}>
                  <span className="value-number">0{index + 1}</span>
                  <h3 className="value-title">{plan.name}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginTop: "1rem" }}><strong style={{ color: "var(--copper)", fontFamily: "var(--font-display)", fontSize: "2.65rem", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 1 }}>{plan.price}</strong><span className="system-mono">{plan.detail}</span></div>
                  <p className="value-copy" style={{ marginTop: "1rem" }}>{plan.description}</p>
                  <ul style={{ display: "grid", gap: "0.55rem", margin: "1.4rem 0 1.8rem", padding: 0, listStyle: "none" }}>
                    {plan.items.map((item) => <li key={item} style={{ display: "flex", gap: "0.55rem", color: "var(--graphite-soft)", fontSize: "0.82rem", lineHeight: 1.45 }}><span style={{ color: "var(--copper)" }}>+</span>{item}</li>)}
                  </ul>
                  <Link href="/contact" className={index === 1 ? "system-button" : "system-button-outline"} style={{ minHeight: "2.85rem", padding: "0.7rem 0.85rem" }}>Discuss {plan.name} ↗</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="system-cta"><div className="container"><div className="reveal" style={{ maxWidth: "750px" }}><p className="section-kicker">Not sure where to begin?</p><h2 className="system-headline" style={{ marginTop: "1.25rem" }}>Start with an honest review of the digital work that is helping—and the work that is getting in the way.</h2><p className="system-copy" style={{ marginTop: "1.5rem", maxWidth: "600px" }}>We will look at your site, local visibility, Google Business Profile, reviews, and lead path before recommending a practical next move.</p><div style={{ marginTop: "2rem" }}><Link href="/contact" className="system-button">Request a Presence Review ↗</Link></div></div></div></section>
      </main>
      <SiteFooter />
      <style>{`@media (max-width: 680px) { #pricing .value-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
