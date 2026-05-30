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
    <footer style={{ background: "#F5F5F5", borderTop: "1px solid #DEDEDE", padding: "3rem 0 2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <GotmLogo size={130} />
            <p style={{ fontSize: "0.85rem", color: "#666666", marginTop: "1rem", lineHeight: 1.7, maxWidth: 280 }}>
              Honest digital marketing for local service businesses across the USA. No setup fees. No big promises. Just results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ color: "#555555", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8102E")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555555")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
              Get In Touch
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a href="tel:9413288891" style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#C8102E", textDecoration: "none", fontSize: "1rem", fontWeight: 700 }}>
                <Phone size={16} /> (941) 328-8891
              </a>
              <a href="mailto:info@gotmdigital.com" style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#555555", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8102E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555555")}
              >
                <Mail size={14} /> info@gotmdigital.com
              </a>
              <p style={{ fontSize: "0.8rem", color: "#666666", lineHeight: 1.6 }}>
                Serving local service businesses<br />anywhere in the USA
              </p>
            </div>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #DEDEDE", margin: "0 0 1.5rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#888888" }}>
            © {new Date().getFullYear()} GOTM Digital. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "#888888" }}>
            No setup fees · No long-term contracts · Honest results
          </p>
        </div>
      </div>
    </footer>
  );
}
