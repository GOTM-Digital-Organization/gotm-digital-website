import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/services", label: "Capabilities" },
  { href: "/enterprise", label: "Healthcare & Multi-Location" },
  { href: "/portfolio", label: "Selected Work" },
  { href: "/local-services", label: "Local Service Businesses" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 100,
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
          background: scrolled ? "rgba(244, 241, 234, 0.94)" : "rgba(244, 241, 234, 0.72)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transition: "background 180ms ease, border-color 180ms ease",
        }}
      >
        <div className="container" style={{ display: "flex", minHeight: "76px", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", color: "var(--graphite)", textDecoration: "none" }} aria-label="GOTM Digital home">
            <span style={{ display: "inline-grid", width: "1.65rem", height: "1.65rem", placeItems: "center", border: "1px solid var(--copper)", color: "var(--copper)", fontFamily: "var(--font-mono)", fontSize: "0.62rem" }}>G</span>
            <span style={{ display: "grid", gap: "0.05rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.08rem", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 1 }}>GOTM</span>
              <span style={{ color: "var(--ink-muted)", fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.09em", lineHeight: 1.2 }}>DIGITAL SYSTEMS</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation" style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 2vw, 2rem)" }}>
            {navLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                style={{
                  color: location === link.href ? "var(--copper)" : "var(--graphite-soft)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.63rem",
                  fontWeight: 500,
                  letterSpacing: "0.035em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(event) => { event.currentTarget.style.color = "var(--copper)"; }}
                onMouseLeave={(event) => { event.currentTarget.style.color = location === link.href ? "var(--copper)" : "var(--graphite-soft)"; }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ minHeight: "2.55rem", padding: "0.65rem 0.8rem", fontSize: "0.6rem" }}>
              Start a Conversation <span aria-hidden="true">↗</span>
            </Link>
          </nav>

          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ display: "none", width: "2.55rem", height: "2.55rem", padding: 0, border: "1px solid var(--line-strong)", borderRadius: 0, background: "var(--paper-bright)", color: "var(--graphite)" }}
          >
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "1rem", transform: mobileOpen ? "rotate(45deg)" : "none", transition: "transform 180ms ease" }}>{mobileOpen ? "+" : "="}</span>
          </button>
        </div>
      </header>

      <aside
        aria-hidden={!mobileOpen}
        style={{
          position: "fixed",
          inset: "76px 0 0 0",
          zIndex: 90,
          display: "grid",
          alignContent: "start",
          gap: "0.25rem",
          padding: "1rem 1.25rem 2rem",
          background: "var(--paper)",
          borderTop: "1px solid var(--line)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-115%)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), opacity 180ms ease",
        }}
      >
        {[{ href: "/", label: "Home" }, ...navLinks].map((link, index) => (
          <Link
            key={`${link.href}-${link.label}-mobile`}
            href={link.href}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "4.3rem",
              borderBottom: "1px solid var(--line)",
              color: location === link.href ? "var(--copper)" : "var(--graphite)",
              fontFamily: "var(--font-display)",
              fontSize: "1.45rem",
              fontWeight: 600,
              letterSpacing: "-0.05em",
              textDecoration: "none",
              transform: mobileOpen ? "translateX(0)" : "translateX(14px)",
              transition: `transform 240ms cubic-bezier(0.23,1,0.32,1) ${index * 35}ms, color 150ms ease`,
            }}
          >
            {link.label}<span style={{ color: "var(--copper)", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>↗</span>
          </Link>
        ))}
        <Link href="/contact" className="btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>Start a Conversation ↗</Link>
      </aside>
    </>
  );
}
