import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import GotmLogo from "./GotmLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
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
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          transition: "background 0.5s cubic-bezier(0.23,1,0.32,1), border-color 0.5s, backdrop-filter 0.5s",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 2.5rem",
            height: 76,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <GotmLogo size={130} textColor="#FFFFFF" />
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "2.75rem" }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase" as const,
                    color: location === href ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    borderBottom: location === href ? "1px solid #C8102E" : "1px solid transparent",
                    paddingBottom: "3px",
                  }}
                  onMouseEnter={(e) => {
                    if (location !== href) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    if (location !== href) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:9413288891"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  background: "#C8102E",
                  padding: "0.6rem 1.4rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#E8304A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C8102E";
                }}
              >
                (941) 328-8891
              </a>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "none",
                padding: "0.5rem",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 24,
                    height: 1.5,
                    background: "#FFFFFF",
                    borderRadius: 0,
                    transition: "transform 0.25s, opacity 0.25s",
                    transform: mobileOpen
                      ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                      : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
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

      {/* Mobile full-screen drawer */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#080808",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
            display: "flex",
            flexDirection: "column",
            paddingTop: 96,
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
          }}
        >
          {/* Red accent line at top */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "#C8102E",
          }} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2.5rem, 9vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: location === link.href ? "#C8102E" : "#FFFFFF",
                  textDecoration: "none",
                  padding: "0.65rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
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
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                background: "#C8102E",
                padding: "1rem 1.5rem",
                textAlign: "center",
              }}
            >
              Call (941) 328-8891
            </a>
            <Link
              href="/contact"
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "1rem 1.5rem",
                textAlign: "center",
              }}
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
