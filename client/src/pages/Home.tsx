import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const pillars = [
  {
    number: "01",
    title: "Web Platform",
    copy: "An owned, scalable foundation that makes your organization understandable to people and search engines.",
  },
  {
    number: "02",
    title: "Provider & Location Presence",
    copy: "Accurate pages, profiles, and pathways for every expert, service line, and place you operate.",
  },
  {
    number: "03",
    title: "Search & AI Visibility",
    copy: "Information architecture, useful content, and structured data built for how decisions are now made.",
  },
  {
    number: "04",
    title: "Demand Generation",
    copy: "Paid media and social programs that direct the right audiences into a system that can receive them.",
  },
  {
    number: "05",
    title: "Reputation & Local Presence",
    copy: "Google Business Profiles, directories, reviews, and local signals managed as a single source of truth.",
  },
  {
    number: "06",
    title: "Measurement & Governance",
    copy: "Clear reporting, ownership, and operating standards so the system becomes stronger over time.",
  },
];

const pathways = [
  {
    code: "01",
    title: "Physician Groups & Healthcare",
    copy: "One digital platform for providers, locations, specialty content, patient pathways, and local visibility.",
    href: "/enterprise",
  },
  {
    code: "02",
    title: "Multi-Location Organizations",
    copy: "Connected digital infrastructure for teams with multiple offices, experts, services, or markets.",
    href: "/enterprise",
  },
  {
    code: "03",
    title: "Established Local Service Businesses",
    copy: "A focused, straightforward path to a stronger website, Google presence, reviews, and lead flow.",
    href: "/services",
  },
];

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function DigitalNetwork() {
  return (
    <div className="network-frame" role="img" aria-label="An animated network connecting an organization website, providers, locations, search, campaigns, and local presence">
      <span className="network-label network-label-a">Platform</span>
      <span className="network-label network-label-b">Search + AI</span>
      <span className="network-label network-label-c">Demand</span>
      <span className="network-label network-label-d">Local Presence</span>
      <span className="network-label network-label-e">People + Places</span>
      <svg className="network-canvas" viewBox="0 0 500 500" aria-hidden="true">
        <path className="network-path" d="M82 156 C160 102, 207 163, 250 248 S366 345, 420 319" />
        <path className="network-path" d="M83 339 C148 320, 197 296, 250 248 S334 143, 412 125" />
        <path className="network-path network-path-copper" d="M104 240 C163 223, 186 248, 250 248 S342 250, 402 227" />
        <path className="network-path" d="M164 72 C190 141, 207 187, 250 248 S322 344, 328 424" />
        <path className="network-path" d="M335 72 C318 142, 301 187, 250 248 S181 344, 162 423" />
        <circle className="network-node" cx="82" cy="156" r="8" />
        <circle className="network-node network-node-copper" cx="83" cy="339" r="8" />
        <circle className="network-node" cx="104" cy="240" r="7" />
        <circle className="network-node network-node-graphite" cx="164" cy="72" r="7" />
        <circle className="network-node" cx="335" cy="72" r="7" />
        <circle className="network-node" cx="412" cy="125" r="8" />
        <circle className="network-node network-node-copper" cx="420" cy="319" r="8" />
        <circle className="network-node" cx="402" cy="227" r="7" />
        <circle className="network-node" cx="328" cy="424" r="7" />
        <circle className="network-node network-node-graphite" cx="162" cy="423" r="7" />
        <circle className="network-center" cx="250" cy="248" r="30" />
        <circle fill="var(--copper)" cx="250" cy="248" r="7" />
      </svg>
      <div style={{ position: "absolute", inset: "50% auto auto 50%", width: "106px", transform: "translate(-50%, -50%)", color: "var(--graphite)", fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.05em", lineHeight: 1.45, textAlign: "center", textTransform: "uppercase" }}>
        Unified<br />Digital System
      </div>
      <div className="hero-index"><span>System Map</span><span>001–006</span></div>
    </div>
  );
}

export default function Home() {
  useReveals();

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid">
          <div className="container hero-layout">
            <div className="hero-statement">
              <p className="section-kicker">Digital systems for complex organizations</p>
              <h1 className="system-display" style={{ marginTop: "1.65rem", maxWidth: "790px" }}>
                Make every digital touchpoint <span className="copper-text">work together.</span>
              </h1>
              <p className="system-copy" style={{ marginTop: "1.75rem", maxWidth: "610px" }}>
                GOTM designs and operates connected digital systems for organizations with multiple locations, providers, service lines, and audiences—from the website and Google presence to search, social, paid media, and measurement.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.2rem" }}>
                <Link href="/contact" className="system-button">Start a Discovery Conversation <span aria-hidden="true">↗</span></Link>
                <a href="#system" className="system-button-outline">See the System <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-rule" />
              <div className="hero-signal">
                <strong>Built for</strong>
                <span>Physician groups · Multi-location organizations · Established service businesses</span>
              </div>
            </div>
            <DigitalNetwork />
          </div>
        </section>

        <section className="system-rail" aria-label="Connected capabilities">
          <div className="container system-rail-inner">
            {[
              ["01", "Platform"],
              ["02", "Presence"],
              ["03", "Discoverability"],
              ["04", "Demand"],
              ["05", "Intelligence"],
            ].map(([number, label]) => (
              <div className="rail-item" key={number}>
                <span className="rail-number">{number}</span>
                <span className="rail-label">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="system" className="system-section system-section-paper">
          <div className="container">
            <div className="section-intro reveal">
              <div>
                <p className="section-kicker">One operating system, not six disconnected vendors</p>
                <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "700px" }}>
                  A better online presence is not a new website. It is a <span className="copper-text">connected system.</span>
                </h2>
              </div>
              <p className="system-copy">
                When every touchpoint is planned independently, customers and patients encounter conflicting information, dead ends, and a brand that feels less capable than the organization behind it. We connect the moving parts around one clear operating model.
              </p>
            </div>

            <div className="value-grid">
              {pillars.map((pillar, index) => (
                <article className="value-cell reveal" style={{ transitionDelay: `${index * 55}ms` }} key={pillar.number}>
                  <span className="value-number">{pillar.number}</span>
                  <h3 className="value-title">{pillar.title}</h3>
                  <p className="value-copy">{pillar.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="system-section system-section-warm">
          <div className="container">
            <div className="pathway-grid">
              <div className="pathway-statement reveal">
                <p className="section-kicker">Who we help</p>
                <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "520px" }}>
                  Built for organizations ready to outgrow <span className="mineral-text">fragmentation.</span>
                </h2>
                <p className="system-copy" style={{ marginTop: "1.35rem", maxWidth: "500px" }}>
                  Different industries have different decision journeys. The underlying challenge is often the same: important information and valuable demand are spread across too many disconnected channels.
                </p>
              </div>
              <div className="pathway-list reveal">
                {pathways.map((path) => (
                  <Link className="pathway-row" key={path.code} href={path.href}>
                    <span className="pathway-code">{path.code}</span>
                    <span>
                      <span className="pathway-title">{path.title}</span>
                      <span className="pathway-copy">{path.copy}</span>
                    </span>
                    <span className="pathway-arrow" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="system-section system-section-paper">
          <div className="container">
            <div className="section-intro reveal">
              <div>
                <p className="section-kicker">How we work</p>
                <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "650px" }}>
                  A practical path from scattered digital work to an <span className="copper-text">operating advantage.</span>
                </h2>
              </div>
              <p className="system-copy">We begin with the facts of your organization, define a platform that can support the next stage of growth, and activate each channel around a shared measurement model.</p>
            </div>
            <div className="process-grid">
              {[
                ["01", "Assess", "We map your platforms, domains, provider and location data, local listings, content, campaigns, ownership, and patient or customer paths."],
                ["02", "Architect", "We turn the findings into a practical digital blueprint: information structure, content priorities, technology decisions, conversion paths, and governance."],
                ["03", "Activate", "We launch the system in the right sequence and continuously improve its visibility, performance, content, and demand programs."],
              ].map(([index, title, copy], itemIndex) => (
                <article className="process-step reveal" style={{ transitionDelay: `${itemIndex * 80}ms` }} key={index}>
                  <span className="process-index">{index}</span>
                  <h3 className="process-title">{title}</h3>
                  <p className="process-copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="system-section system-section-warm">
          <div className="container">
            <div className="proof-strip reveal">
              <p className="proof-copy">
                <span className="system-mono" style={{ display: "block", marginBottom: "0.7rem", color: "var(--copper)" }}>CURRENT WORK / 07 ACTIVE &amp; IN-PROGRESS DIGITAL PROGRAMS</span>
                We build from a practical foundation: real businesses, real websites, and a clear plan for what needs to work next. Explore current client work or discuss a more complex digital transformation.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link href="/portfolio" className="system-button-outline">Selected Work <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="system-cta">
          <div className="container">
            <div className="reveal" style={{ maxWidth: "820px" }}>
              <p className="section-kicker">Begin with the system, not a tactic</p>
              <h2 className="system-headline" style={{ marginTop: "1.25rem", maxWidth: "780px" }}>
                Let’s make your digital presence feel as capable as the organization behind it.
              </h2>
              <p className="system-copy" style={{ marginTop: "1.5rem", maxWidth: "650px" }}>
                Start with a discovery conversation about the platform, visibility, demand, and operational complexity you are trying to solve. Each engagement is scoped to the work that matters—not forced into a generic package.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.2rem" }}>
                <Link href="/contact" className="system-button">Start a Conversation <span aria-hidden="true">↗</span></Link>
                <Link href="/enterprise" className="system-button-outline">Explore Complex Organizations <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
