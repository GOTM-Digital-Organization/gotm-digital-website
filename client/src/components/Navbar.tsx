import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import GotmLogo from "./GotmLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/enterprise", label: "Enterprise", badge: true },
  { href: "/contact", label: "Contact" },
  { href: "/flyer", label: "Our Flyer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: 68,
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          background: scrolled ? "rgba(255,251,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(99,102,241,0.12)" : "1px solid transparent",
          transition: "background 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <GotmLogo size={120} textColor={scrolled ? "#1E1040" : "#1E1040"} />
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
              {navLinks.map(({ href, label, badge }) => (
                badge ? (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "999px",
                      background: location === href
                        ? "linear-gradient(135deg, #D946EF, #6366F1)"
                        : "linear-gradient(135deg, #D946EF99, #6366F199)",
                      transition: "background 0.2s, box-shadow 0.2s",
                      boxShadow: location === href ? "0 2px 12px rgba(217,70,239,0.35)" : "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #D946EF, #6366F1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(217,70,239,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      if (location !== href) {
                        (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #D946EF99, #6366F199)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }
                    }}
                  >
                    <span style={{ fontSize: "0.65rem" }}>✦</span> {label}
                  </Link>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: location === href ? "#D946EF" : "#4A3F6B",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      borderBottom: location === href ? "2px solid #D946EF" : "2px solid transparent",
                      paddingBottom: "2px",
                    }}
                    onMouseEnter={(e) => {
                      if (location !== href) (e.currentTarget as HTMLElement).style.color = "#D946EF";
                    }}
                    onMouseLeave={(e) => {
                      if (location !== href) (e.currentTarget as HTMLElement).style.color = "#4A3F6B";
                    }}
                  >
                    {label}
                  </Link>
                )
              ))}
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: "0.55rem 1.4rem", fontSize: "0.78rem" }}
              >
                Free Review →
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{ background: "none", border: "none", padding: "0.5rem", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px" }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block", width: 24, height: 2,
                    background: "#1E1040",
                    borderRadius: 2,
                    transition: "transform 0.25s, opacity 0.25s",
                    transform: mobileOpen
                      ? i === 0 ? "translateY(7px) rotate(45deg)"
                      : i === 2 ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                      : "none",
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 99,
            background: "#FFFBFF",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
            display: "flex", flexDirection: "column",
            paddingTop: 80, paddingLeft: "2rem", paddingRight: "2rem",
          }}
        >
          {/* Gradient top bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #D946EF, #6366F1, #F97316)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: location === link.href ? "#D946EF" : "#1E1040",
                  textDecoration: "none",
                  padding: "0.6rem 0",
                  borderBottom: "1px solid rgba(99,102,241,0.1)",
                  transition: `color 0.2s, opacity 0.35s ${i * 50}ms, transform 0.35s ${i * 50}ms`,
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(30px)",
                  lineHeight: 1.1,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingBottom: "3rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="tel:9413288891"
              className="btn-primary"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              Call (941) 328-8891
            </a>
            <Link
              href="/contact"
              className="btn-secondary"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
