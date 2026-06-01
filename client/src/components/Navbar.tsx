import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import GotmLogo from "./GotmLogo";

const navLinks = [
  { href: "/", label: "Home" },
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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled || mobileOpen ? "rgba(255,255,255,0.98)" : "#FFFFFF",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid #DEDEDE",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s, background 0.3s",
        padding: "0 1.5rem",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <GotmLogo size={140} />
        </Link>

        {/* Desktop nav — hidden on mobile */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: location === href ? "#C8102E" : "#444444",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: location === href ? 700 : 500,
                  transition: "color 0.2s",
                  letterSpacing: "0.02em",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { if (location !== href) (e.currentTarget as HTMLElement).style.color = "#C8102E"; }}
                onMouseLeave={(e) => { if (location !== href) (e.currentTarget as HTMLElement).style.color = "#444444"; }}
              >
                {label}
              </Link>
            ))}
            <a href="tel:9413288891" className="btn-gold" style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}>
              <Phone size={14} /> (941) 328-8891
            </a>
          </div>
        )}

        {/* Mobile hamburger button */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#111111",
              padding: "0.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 70,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#FFFFFF",
            zIndex: 99,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.28s cubic-bezier(0.23,1,0.32,1)",
            overflowY: "auto",
            borderTop: "1px solid #EBEBEB",
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                color: location === href ? "#C8102E" : "#222222",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: location === href ? 700 : 500,
                padding: "1rem 0",
                borderBottom: "1px solid #F0F0F0",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:9413288891"
            className="btn-gold"
            style={{ display: "flex", marginTop: "2rem", justifyContent: "center", fontSize: "1.1rem", padding: "0.875rem 1.5rem" }}
          >
            <Phone size={18} /> (941) 328-8891
          </a>
        </div>
      )}
    </nav>
  );
}
