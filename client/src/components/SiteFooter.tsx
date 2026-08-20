import { Link } from "wouter";

const links = [
  { href: "/services", label: "Capabilities" },
  { href: "/enterprise", label: "Healthcare & Multi-Location" },
  { href: "/portfolio", label: "Selected Work" },
  { href: "/local-services", label: "Local Service Businesses" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line-strong)" }}>
      <div className="container" style={{ paddingTop: "4.75rem", paddingBottom: "1.45rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(180px, 0.6fr) minmax(230px, 0.7fr)", gap: "3rem", paddingBottom: "3.5rem" }} className="footer-grid">
          <div>
            <p className="section-kicker">GOTM Digital</p>
            <p style={{ maxWidth: "440px", marginTop: "1.1rem", color: "var(--graphite)", fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 2.4vw, 2.2rem)", fontWeight: 600, letterSpacing: "-0.055em", lineHeight: 1 }}>
              Digital systems that make complex organizations easier to find, choose, and grow.
            </p>
          </div>
          <div>
            <p className="system-mono" style={{ color: "var(--copper)", marginBottom: "1rem" }}>Navigate</p>
            <div style={{ display: "grid", gap: "0.55rem" }}>
              {links.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} style={{ color: "var(--graphite-soft)", fontSize: "0.88rem", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="system-mono" style={{ color: "var(--copper)", marginBottom: "1rem" }}>Start a conversation</p>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              <a href="tel:9413288891" style={{ color: "var(--graphite)", fontFamily: "var(--font-display)", fontSize: "1.22rem", fontWeight: 600, letterSpacing: "-0.04em", textDecoration: "none" }}>(941) 328-8891</a>
              <a href="mailto:tom@gotmdigital.com" style={{ color: "var(--graphite-soft)", fontSize: "0.92rem", textDecoration: "none" }}>tom@gotmdigital.com</a>
              <span className="system-mono">Nationwide / Remote collaboration</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", paddingTop: "1.25rem", borderTop: "1px solid var(--line)" }}>
          <span className="system-mono">© {new Date().getFullYear()} GOTM Digital. All rights reserved.</span>
          <span className="system-mono">Platform · Presence · Demand · Intelligence</span>
        </div>
      </div>
      <style>{`@media (max-width: 780px) { .footer-grid { grid-template-columns: 1fr !important; gap: 2.25rem !important; } }`}</style>
    </footer>
  );
}
