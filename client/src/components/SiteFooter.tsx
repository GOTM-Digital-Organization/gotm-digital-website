import { Link } from "wouter";
import GotmLogo from "./GotmLogo";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/flyer", label: "Our Flyer" },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--bg-dark)", color: "var(--text-on-dark)", fontFamily: "var(--font-body)" }}>
      {/* Gradient top border */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, var(--blob-fuchsia), var(--blob-indigo), var(--blob-orange))" }} />

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <GotmLogo size={120} textColor="#FFFFFF" />
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "240px" }}>
              Honest digital marketing for local service businesses. No setup fees. No contracts. Just results.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--blob-pink)", marginBottom: "1.25rem" }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E879F9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--blob-pink)", marginBottom: "1.25rem" }}>
              Get In Touch
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="tel:9413288891"
                style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E879F9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              >
                (941) 328-8891
              </a>
              <a
                href="mailto:tom@gotmdigital.com"
                style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E879F9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              >
                tom@gotmdigital.com
              </a>
              <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
                Serving businesses across the USA
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © {new Date().getFullYear()} Got'm Digital · All rights reserved
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", margin: 0, letterSpacing: "0.06em" }}>
            No Setup Fees · No Contracts · Marketing That Works
          </p>
        </div>
      </div>
    </footer>
  );
}
