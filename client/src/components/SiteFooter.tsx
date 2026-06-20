import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
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
    <footer style={{
      background: "#0D0D0D",
      borderTop: "3px solid #C8102E",
      padding: "5rem 0 2.5rem",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "3.5rem",
        }}>
          {/* Brand */}
          <div>
            <GotmLogo size={130} />
            <p style={{ fontSize: "0.82rem", color: "#999999", marginTop: "1.25rem", lineHeight: 1.8, maxWidth: 260 }}>
              Honest digital marketing for local service businesses across the USA. No setup fees. No big promises. Just results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "#C8102E",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ color: "#AAAAAA", textDecoration: "none", fontSize: "0.825rem", transition: "color 0.2s", letterSpacing: "0.02em" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#AAAAAA")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "#C8102E",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: "1.25rem",
            }}>
              Get In Touch
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="tel:9413288891" style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                color: "#FFFFFF", textDecoration: "none",
                fontSize: "1rem", fontWeight: 700,
                transition: "color 0.2s",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8102E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
              >
                <Phone size={14} style={{ color: "#C8102E", flexShrink: 0 }} /> (941) 328-8891
              </a>
              <a href="mailto:tom@gotmdigital.com" style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                color: "#AAAAAA", textDecoration: "none", fontSize: "0.825rem",
                transition: "color 0.2s",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#AAAAAA")}
              >
                <Mail size={13} style={{ color: "#C8102E", flexShrink: 0 }} /> tom@gotmdigital.com
              </a>
              <p style={{ fontSize: "0.775rem", color: "#777777", lineHeight: 1.7, margin: 0 }}>
                Serving local service businesses<br />anywhere in the USA
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "0 0 1.5rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.7rem", color: "#666666", margin: 0 }}>
            © {new Date().getFullYear()} GOTM Digital. All rights reserved.
          </p>
          <p style={{ fontSize: "0.7rem", color: "#666666", margin: 0, letterSpacing: "0.05em" }}>
            No setup fees · No long-term contracts · Honest results
          </p>
        </div>
      </div>
    </footer>
  );
}
