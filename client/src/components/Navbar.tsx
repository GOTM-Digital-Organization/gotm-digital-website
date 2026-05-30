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
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#FFFFFF",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid #DEDEDE",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s, background 0.3s",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <GotmLogo size={140} />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="hidden md:flex">
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

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#111111", padding: "0.5rem" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid #EBEBEB", padding: "1rem 1.5rem 1.5rem" }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                color: location === href ? "#C8102E" : "#222222",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: location === href ? 700 : 500,
                padding: "0.75rem 0",
                borderBottom: "1px solid #EBEBEB",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:9413288891"
            className="btn-gold"
            style={{ display: "flex", marginTop: "1.25rem", justifyContent: "center" }}
          >
            <Phone size={16} /> (941) 328-8891
          </a>
        </div>
      )}
    </nav>
  );
}
