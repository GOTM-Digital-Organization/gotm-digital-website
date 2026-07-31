import { useState } from "react";
import { Link } from "wouter";

const styles = [
  {
    id: "A",
    name: "Executive Dark",
    tagline: "Premium agency feel — dark charcoal, gold accents, serif headlines",
    description: "Think McKinsey meets digital agency. Deep charcoal backgrounds (#1A1A2E), warm gold accents (#C9A84C), and elegant serif headings (Playfair Display). Clean white body text. Feels expensive, authoritative, and trustworthy. Best for attracting established businesses who want a premium partner.",
    bg: "#1A1A2E",
    accent: "#C9A84C",
    text: "#FFFFFF",
    subtext: "#B8B8C8",
    cardBg: "#252540",
    cardBorder: "#C9A84C",
    navBg: "#12122A",
    font: "Playfair Display",
    bodyFont: "Inter",
    preview: {
      eyebrow: "HONEST DIGITAL MARKETING",
      headline: "Get Your Business Found on Google,",
      headlineAccent: "Maps & AI Search.",
      sub: "No setup fees. No big promises. Starting at $100/month.",
      btn1: "CALL (941) 328-8891",
      btn2: "VIEW OUR WORK →",
    }
  },
  {
    id: "B",
    name: "Clean Pro White",
    tagline: "Modern, airy, and professional — white dominant with bold red CTAs",
    description: "Inspired by top B2B agencies like Collins and Beyond. Predominantly white with generous whitespace, near-black headings, and your existing red (#C8102E) as the sole accent color. Bold sans-serif headlines (DM Sans or Sora). Feels clean, modern, and confident. Best for attracting any business type — universally professional.",
    bg: "#FFFFFF",
    accent: "#C8102E",
    text: "#111111",
    subtext: "#555555",
    cardBg: "#F5F5F5",
    cardBorder: "#E0E0E0",
    navBg: "#111111",
    font: "Sora",
    bodyFont: "DM Sans",
    preview: {
      eyebrow: "HONEST DIGITAL MARKETING",
      headline: "Get Your Business Found on Google,",
      headlineAccent: "Maps & AI Search.",
      sub: "No setup fees. No big promises. Starting at $100/month.",
      btn1: "CALL (941) 328-8891",
      btn2: "VIEW OUR WORK →",
    }
  },
  {
    id: "C",
    name: "Deep Navy & Electric",
    tagline: "Bold, modern, high-tech — deep navy with electric blue/teal accents",
    description: "Inspired by top-performing SaaS and tech-forward agencies. Deep navy (#0D1B2A) backgrounds, electric teal/blue accents (#00B4D8), and sharp modern sans-serif (Space Grotesk). Feels cutting-edge, data-driven, and forward-thinking. Best for positioning GOTM Digital as the tech-savvy, AI-first marketing partner.",
    bg: "#0D1B2A",
    accent: "#00B4D8",
    text: "#FFFFFF",
    subtext: "#94A3B8",
    cardBg: "#162032",
    cardBorder: "#00B4D8",
    navBg: "#080F18",
    font: "Space Grotesk",
    bodyFont: "Inter",
    preview: {
      eyebrow: "HONEST DIGITAL MARKETING",
      headline: "Get Your Business Found on Google,",
      headlineAccent: "Maps & AI Search.",
      sub: "No setup fees. No big promises. Starting at $100/month.",
      btn1: "CALL (941) 328-8891",
      btn2: "VIEW OUR WORK →",
    }
  },
  {
    id: "D",
    name: "Warm Slate & Crimson",
    tagline: "Sophisticated and approachable — warm slate gray, deep crimson, off-white",
    description: "A refined take on your current red-and-dark palette. Warm slate gray (#1C1C1E like Apple's dark UI), deep crimson (#A50E2D — darker, richer red), and warm off-white (#F5F0EB) for light sections. Uses a premium rounded sans-serif (Plus Jakarta Sans). Feels sophisticated, trustworthy, and approachable — like a high-end local business partner.",
    bg: "#1C1C1E",
    accent: "#A50E2D",
    text: "#F5F0EB",
    subtext: "#AAAAAA",
    cardBg: "#2C2C2E",
    cardBorder: "#A50E2D",
    navBg: "#111111",
    font: "Plus Jakarta Sans",
    bodyFont: "Plus Jakarta Sans",
    preview: {
      eyebrow: "HONEST DIGITAL MARKETING",
      headline: "Get Your Business Found on Google,",
      headlineAccent: "Maps & AI Search.",
      sub: "No setup fees. No big promises. Starting at $100/month.",
      btn1: "CALL (941) 328-8891",
      btn2: "VIEW OUR WORK →",
    }
  }
];

function StyleCard({ style, selected, onSelect }: { style: typeof styles[0], selected: boolean, onSelect: () => void }) {
  return (
    <div
      onClick={onSelect}
      style={{
        border: selected ? `3px solid #C8102E` : "3px solid transparent",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: selected ? "0 0 0 4px rgba(200,16,46,0.2)" : "0 4px 24px rgba(0,0,0,0.15)",
        transform: selected ? "scale(1.01)" : "scale(1)",
      }}
    >
      {/* Mini Hero Preview */}
      <div style={{
        background: style.bg,
        padding: "32px 28px 28px",
        fontFamily: style.font + ", serif",
        position: "relative",
        minHeight: "280px",
      }}>
        {/* Mini Nav */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          paddingBottom: "16px",
          borderBottom: `1px solid ${style.cardBorder}22`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              border: `2px solid ${style.accent}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: style.accent }} />
            </div>
            <div>
              <div style={{ color: style.text, fontWeight: 700, fontSize: "13px", letterSpacing: "1px" }}>GOTM</div>
              <div style={{ color: style.accent, fontSize: "8px", letterSpacing: "2px" }}>DIGITAL</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {["SERVICES", "PORTFOLIO", "CONTACT"].map(item => (
              <div key={item} style={{ color: style.subtext, fontSize: "9px", letterSpacing: "1.5px" }}>{item}</div>
            ))}
            <div style={{
              background: "transparent",
              border: `1px solid ${style.accent}`,
              color: style.accent,
              padding: "4px 10px",
              fontSize: "9px",
              letterSpacing: "1px",
              borderRadius: "3px",
            }}>
              (941) 328-8891
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{ color: style.accent, fontSize: "9px", letterSpacing: "3px", marginBottom: "10px", fontFamily: style.bodyFont + ", sans-serif" }}>
          {style.preview.eyebrow}
        </div>
        <div style={{
          color: style.text,
          fontSize: "22px",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: "6px",
          fontFamily: style.font + (style.id === "A" ? ", serif" : ", sans-serif"),
        }}>
          {style.preview.headline}
        </div>
        <div style={{
          color: style.accent,
          fontSize: "22px",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: "14px",
          fontFamily: style.font + (style.id === "A" ? ", serif" : ", sans-serif"),
        }}>
          {style.preview.headlineAccent}
        </div>
        <div style={{ color: style.subtext, fontSize: "11px", marginBottom: "20px", fontFamily: style.bodyFont + ", sans-serif", lineHeight: 1.5 }}>
          {style.preview.sub}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{
            background: style.accent,
            color: "#FFFFFF",
            padding: "8px 16px",
            fontSize: "9px",
            letterSpacing: "1.5px",
            fontWeight: 700,
            borderRadius: "3px",
            fontFamily: style.bodyFont + ", sans-serif",
          }}>
            {style.preview.btn1}
          </div>
          <div style={{
            background: "transparent",
            border: `1px solid ${style.id === "B" ? "#111111" : "#FFFFFF"}55`,
            color: style.id === "B" ? "#111111" : "#FFFFFF",
            padding: "8px 16px",
            fontSize: "9px",
            letterSpacing: "1.5px",
            fontWeight: 600,
            borderRadius: "3px",
            fontFamily: style.bodyFont + ", sans-serif",
          }}>
            {style.preview.btn2}
          </div>
        </div>

        {/* Style badge */}
        {selected && (
          <div style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "#C8102E",
            color: "#FFFFFF",
            padding: "4px 12px",
            fontSize: "10px",
            fontWeight: 700,
            borderRadius: "20px",
            letterSpacing: "1px",
          }}>
            ✓ SELECTED
          </div>
        )}
      </div>

      {/* Card Info */}
      <div style={{ background: "#FFFFFF", padding: "20px 24px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <div style={{
            background: "#C8102E",
            color: "#FFFFFF",
            width: "26px", height: "26px",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "12px",
          }}>
            {style.id}
          </div>
          <div style={{ fontWeight: 700, fontSize: "16px", color: "#111111" }}>{style.name}</div>
        </div>
        <div style={{ fontSize: "12px", color: "#C8102E", fontWeight: 600, marginBottom: "10px", letterSpacing: "0.5px" }}>
          {style.tagline}
        </div>
        <div style={{ fontSize: "13px", color: "#444444", lineHeight: 1.6 }}>
          {style.description}
        </div>

        {/* Color Swatches */}
        <div style={{ display: "flex", gap: "8px", marginTop: "14px", alignItems: "center" }}>
          <div style={{ fontSize: "11px", color: "#888888", marginRight: "4px" }}>Colors:</div>
          {[style.bg, style.accent, style.cardBg, style.text === "#FFFFFF" ? "#F5F5F5" : style.text].map((c, i) => (
            <div key={i} style={{
              width: "20px", height: "20px", borderRadius: "50%",
              background: c,
              border: "2px solid #E0E0E0",
            }} title={c} />
          ))}
          <div style={{ fontSize: "11px", color: "#888888", marginLeft: "8px" }}>Font: <strong>{style.font}</strong></div>
        </div>

        <button
          onClick={onSelect}
          style={{
            marginTop: "16px",
            width: "100%",
            padding: "12px",
            background: selected ? "#C8102E" : "transparent",
            color: selected ? "#FFFFFF" : "#C8102E",
            border: "2px solid #C8102E",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {selected ? "✓ THIS ONE" : `CHOOSE STYLE ${style.id}`}
        </button>
      </div>
    </div>
  );
}

export default function StyleOptions() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#111111", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "18px" }}>GOTM Digital — Style Options</div>
          <div style={{ color: "#888888", fontSize: "12px", marginTop: "2px" }}>Choose your new design direction</div>
        </div>
        <Link href="/">
          <a style={{ color: "#C8102E", fontSize: "13px", textDecoration: "none", border: "1px solid #C8102E", padding: "8px 16px", borderRadius: "4px" }}>
            ← Back to Site
          </a>
        </Link>
      </div>

      {/* Intro */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: "#C8102E", fontSize: "11px", letterSpacing: "3px", fontWeight: 700, marginBottom: "12px" }}>
            DESIGN DIRECTION OPTIONS
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#111111", marginBottom: "16px", lineHeight: 1.2 }}>
            4 Modern, Professional Styles for Your Site
          </h1>
          <p style={{ color: "#555555", fontSize: "15px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Each option below shows a live mini-preview of what your homepage hero would look like in that style. Click any card to select it, then tell me which one you want and I'll rebuild the entire site in that direction.
          </p>
        </div>

        {/* Style Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px" }}>
          {styles.map(style => (
            <StyleCard
              key={style.id}
              style={style}
              selected={selected === style.id}
              onSelect={() => setSelected(style.id)}
            />
          ))}
        </div>

        {/* Selection CTA */}
        {selected && (
          <div style={{
            marginTop: "40px",
            background: "#111111",
            borderRadius: "12px",
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}>
            <div>
              <div style={{ color: "#C8102E", fontSize: "11px", letterSpacing: "2px", fontWeight: 700, marginBottom: "6px" }}>
                YOU SELECTED
              </div>
              <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "20px" }}>
                Style {selected} — {styles.find(s => s.id === selected)?.name}
              </div>
              <div style={{ color: "#888888", fontSize: "13px", marginTop: "4px" }}>
                Tell me "go with Style {selected}" in the chat and I'll rebuild the entire site in this direction.
              </div>
            </div>
            <div style={{
              background: "#C8102E",
              color: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
            }}>
              Style {selected} Selected ✓
            </div>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "40px", color: "#888888", fontSize: "13px", lineHeight: 1.7 }}>
          Not sure? You can also mix and match — e.g. "Style B layout but Style A's gold accent color" or "Style C's navy background with Style D's font."<br />
          Just describe what you like and I'll make it happen.
        </div>
      </div>
    </div>
  );
}
