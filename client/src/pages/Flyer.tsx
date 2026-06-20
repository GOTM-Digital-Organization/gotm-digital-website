import { useState } from "react";
import { Phone, CheckCircle2, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp";

// ── Dark Accordion ──────────────────────────────────────────
function AccordionSection({
  title,
  children,
  defaultOpen = false,
  num,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  num?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          color: "#111111",
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {num && (
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 900,
            color: "rgba(200,16,46,0.5)",
            minWidth: "2rem",
            letterSpacing: "-0.02em",
          }}>{num}</span>
        )}
        <span style={{
          flex: 1,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "#111111",
          letterSpacing: "-0.01em",
        }}>
          {title}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "#C8102E",
            flexShrink: 0,
            transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div style={{
          paddingBottom: "1.75rem",
          paddingLeft: num ? "3rem" : "0",
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Flyer() {
  return (
    <div style={{ background: "#0A0A0A", color: "#FFFFFF", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }} />
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(5,5,10,0.92) 0%, rgba(5,5,10,0.72) 50%, rgba(5,5,10,0.88) 100%)",
        }} />
        {/* Red glow */}
        <div style={{
          position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
          width: 800, height: 800,
          background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Corner accents */}
        <div style={{ position: "absolute", top: 80, left: 32, width: 48, height: 48, borderTop: "1px solid rgba(200,16,46,0.6)", borderLeft: "1px solid rgba(200,16,46,0.6)", zIndex: 2 }} />
        <div style={{ position: "absolute", top: 80, right: 32, width: 48, height: 48, borderTop: "1px solid rgba(200,16,46,0.6)", borderRight: "1px solid rgba(200,16,46,0.6)", zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 3, width: "100%", maxWidth: 900, margin: "0 auto", padding: "8rem 2rem 5rem" }}>

          {/* Logo SVG */}
          <div style={{ marginBottom: "2.5rem" }}>
            <svg width={200} height={200 * (110 / 300)} viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="flyerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#E8304A", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#C8102E", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <g transform="translate(18, 10)">
                <circle cx="36" cy="36" r="30" fill="none" stroke="url(#flyerGrad)" strokeWidth="2.5" />
                <circle cx="36" cy="36" r="18" fill="none" stroke="url(#flyerGrad)" strokeWidth="2" />
                <circle cx="36" cy="36" r="3.5" fill="url(#flyerGrad)" />
                <line x1="36" y1="0"  x2="36" y2="14" stroke="url(#flyerGrad)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="36" y1="58" x2="36" y2="72" stroke="url(#flyerGrad)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="0"  y1="36" x2="14" y2="36" stroke="url(#flyerGrad)" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="58" y1="36" x2="72" y2="36" stroke="url(#flyerGrad)" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              <text x="100" y="58" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="56" fill="#FFFFFF" letterSpacing="-1">GOTM</text>
              <line x1="100" y1="68" x2="294" y2="68" stroke="url(#flyerGrad)" strokeWidth="1" opacity="0.5" />
              <text x="197" y="84" fontFamily="DM Sans, sans-serif" fontWeight="600" fontSize="13" fill="url(#flyerGrad)" textAnchor="middle" letterSpacing="5">DIGITAL</text>
              <text x="197" y="100" fontFamily="DM Sans, sans-serif" fontWeight="400" fontSize="10" fill="#AAAAAA" textAnchor="middle" letterSpacing="2">MARKETING THAT WORKS</text>
            </svg>
          </div>

          <div className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            Honest Digital Marketing · Local Service Businesses
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
          }}>
            Get Your Business Found<br />
            on Google, Maps,<br />
            <span style={{ color: "#C8102E" }}>and AI Search.</span>
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#AAAAAA", lineHeight: 1.8, maxWidth: 560, marginBottom: "2.5rem" }}>
            Websites, local SEO, Google Business Profiles, and Google Ads built for the new way customers search — no setup fees, no big promises, starting at{" "}
            <strong style={{ color: "#FFFFFF" }}>$100/month</strong>.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <a href="tel:9413288891" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              <Phone size={16} /> (941) 328-8891
            </a>
            <a href="mailto:tom@gotmdigital.com" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 2rem",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}>
              tom@gotmdigital.com
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {["No Setup Fees", "No Long-Term Contracts", "No Empty Promises"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#C8C8C8", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <div style={{ width: 6, height: 6, background: "#C8102E", borderRadius: "50%" }} />
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── RED DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C8102E 30%, #C8102E 70%, transparent)" }} />

      {/* ── STATS BAR ── WHITE */}
      <section style={{ background: "#FFFFFF", borderTop: "3px solid #C8102E", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
          {[
            { num: "100+", label: "Clients Served" },
            { num: "$0", label: "Setup Fees. Ever." },
            { num: "6", label: "Active Client Sites" },
            { num: "1–2 wks", label: "Avg. Launch Time" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, color: "#C8102E", lineHeight: 1, marginBottom: "0.4rem" }}>{s.num}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#666666", textTransform: "uppercase", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACCORDION CONTENT ── WHITE SECTION */}
      <section style={{ background: "#F7F7F7", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>

        <div className="eyebrow" style={{ marginBottom: "0.75rem", color: "#555555" }}>The Honest Truth</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 900,
          color: "#111111",
          lineHeight: 1.15,
          marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}>
          What Nobody Else Will Tell You About{" "}
          <span style={{ color: "#C8102E" }}>Digital Marketing</span>
        </h2>
        <AccordionSection num="01" title="New Websites Take Time — Here's Why" defaultOpen={true}>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: 0 }}>
            A brand-new domain won't rank on Google overnight. It typically takes <strong style={{ color: "#111111" }}>1–3 years</strong> to fully mature. Your competitors have months or years of search history, backlinks, and reviews ahead of you — you're starting from zero, and that's completely normal.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: "0.75rem 0 0" }}>
            Think of your website as an investment that <strong style={{ color: "#111111" }}>compounds over time</strong>. The businesses that stay consistent are the ones that win. That's why we keep your monthly costs low — so you can stay in the game long enough for it to pay off.
          </p>
        </AccordionSection>

        <AccordionSection num="02" title="Why Custom HTML Beats WordPress & Others">
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: 0 }}>
            Custom HTML sites <strong style={{ color: "#111111" }}>load faster and rank better</strong> — Google rewards speed and clean code. No bloated plugins, no unnecessary scripts. Just lean, purpose-built code optimized from day one: meta tags, schema markup, mobile layout, image compression, and site structure.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: "0.75rem 0 0" }}>
            Over time, this foundation consistently outperforms WordPress, GoHighLevel, Wix, and Squarespace — especially for local service businesses where page speed and local SEO signals matter most.
          </p>
        </AccordionSection>

        <AccordionSection num="03" title="Google Business Profile — Your Most Powerful Free Tool">
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: 0 }}>
            Your Google Business Profile is your most powerful free tool while your website grows. <strong style={{ color: "#111111" }}>Ask every single customer for a review — every time, no exceptions.</strong> Reviews build local trust fast and can start showing results within weeks.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: "0.75rem 0 0" }}>
            Keep your profile active: photos, hours, services, and regular posts all signal credibility to Google. This works independently of your website's age — it's your fastest path to local visibility right now.
          </p>
        </AccordionSection>

        <AccordionSection num="04" title="Need Leads Right Now? — Google Ads">
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: 0 }}>
            Google Ads put you in front of people <strong style={{ color: "#111111" }}>actively searching for your services today</strong> — not in two years. We build dedicated landing pages in the same clean HTML format — fast, focused, and built to convert.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#333333", margin: "0.75rem 0 0" }}>
            You control the budget and only pay when someone clicks your ad. Ads bridge the gap while your organic SEO matures — scale back once the site takes off. <strong style={{ color: "#111111" }}>Ad spend is paid directly by you to Google</strong> — our fee covers strategy, setup, and management only.
          </p>
        </AccordionSection>

        <AccordionSection num="05" title="The Growth Timeline — What to Expect">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
            {[
              { phase: "Day 1", title: "We Get to Work", desc: "Website live, SEO configured, Google Business Profile optimized." },
              { phase: "Months 1–6", title: "Foundation Built", desc: "Profile active, reviews rolling in, ads running if budget allows." },
              { phase: "Months 6–18", title: "SEO Gains Traction", desc: "Domain builds authority. Content starts paying off. Rankings improve." },
              { phase: "Year 2–3", title: "Organic Leads Flow", desc: "ROI accelerates. Ads become optional. Your website works while you sleep." },
            ].map((step, i) => (
              <div key={i} style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)",
                borderTop: "2px solid #C8102E",
                padding: "1.25rem",
              }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.4rem" }}>{step.phase}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.4rem" }}>{step.title}</div>
                <div style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "#555555" }}>{step.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#555555", margin: 0, fontStyle: "italic" }}>
            The key is staying consistent — most businesses quit before the compounding kicks in.
          </p>
        </AccordionSection>

        <AccordionSection num="06" title="Services & Pricing — No Setup Fees. No Surprises. Ever.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
            {[
              {
                name: "Starter", price: "$100", tagline: "Your foundation, done right", featured: false,
                features: ["Custom HTML website", "Full SEO optimization", "AI search optimization built in", "Google Business Profile setup", "Unlimited updates & edits", "Mobile-responsive design"],
              },
              {
                name: "Growth", price: "$300", tagline: "Stay active, stay visible", featured: true,
                features: ["Everything in Starter", "Weekly website posts", "Weekly Google Business posts", "AI search & conversational query targeting", "Content strategy & keywords", "Monthly performance report"],
              },
              {
                name: "Full Service", price: "$500", tagline: "Leads now + growth long-term", featured: false,
                features: ["Everything in Growth", "Google Ads management", "Custom landing pages", "AI-ready landing page content", "Ongoing ad optimization", "Full ROI reporting"],
              },
            ].map((plan, i) => (
              <div key={i} style={{
                background: plan.featured ? "#C8102E" : "#FFFFFF",
                border: `1px solid ${plan.featured ? "transparent" : "rgba(0,0,0,0.1)"}`,
                borderTop: `3px solid ${plan.featured ? "transparent" : "#C8102E"}`,
                overflow: "hidden",
                boxShadow: plan.featured ? "0 8px 32px rgba(200,16,46,0.25)" : "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                {plan.featured && (
                  <div style={{ background: "rgba(0,0,0,0.2)", color: "#FFFFFF", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", padding: "0.3rem" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: plan.featured ? "#FFFFFF" : "#111111" }}>{plan.name}</div>
                      <div style={{ fontSize: "0.72rem", color: plan.featured ? "rgba(255,255,255,0.75)" : "#777777" }}>{plan.tagline}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 900, color: plan.featured ? "#FFFFFF" : "#C8102E", lineHeight: 1 }}>{plan.price}</div>
                      <div style={{ fontSize: "0.62rem", color: plan.featured ? "rgba(255,255,255,0.7)" : "#888888" }}>/month</div>
                    </div>
                  </div>
                  <div style={{ height: 1, background: plan.featured ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.08)", marginBottom: "1rem" }} />
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {plan.features.map((f, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem", lineHeight: 1.7, color: plan.featured ? "rgba(255,255,255,0.9)" : "#444444", marginBottom: "0.4rem" }}>
                        <CheckCircle2 size={13} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.15rem" }} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: "#FFF5F5",
            border: "1px solid rgba(200,16,46,0.2)",
            padding: "0.875rem 1rem",
            fontSize: "0.78rem",
            color: "#555555",
            lineHeight: 1.65,
          }}>
            📌 <strong style={{ color: "#111111" }}>Ad spend for Google Ads is paid directly by you to Google.</strong> Our fee covers strategy, setup, and management only. You stay in full control of your budget.
          </div>
        </AccordionSection>

        <AccordionSection num="07" title="AI Search Optimization — Built Into Everything We Do">
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#555555", margin: "0 0 1rem" }}>
            Search is changing. Customers are no longer just typing short keywords into Google. They are asking detailed questions through Google, maps, voice search, and AI tools — questions like who to hire, who serves their area, who has the best reviews, and who can be trusted.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#555555", margin: "0 0 1.5rem" }}>
            Got'm Digital builds every website, Google profile, and content strategy so your business is easier to find, understand, and trust in modern search — including traditional rankings, map results, conversational queries, and AI-answer readiness.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.875rem" }}>
            {[
              { title: "AI-Ready Websites", desc: "Clear service pages, FAQs, schema, and structured content AI tools can read and recommend." },
              { title: "Profile & Citation Match", desc: "Business info consistent across your site, Google profile, and directories." },
              { title: "Reviews & Trust Signals", desc: "Review strategy that builds credibility with customers and AI-powered search." },
              { title: "Content That Answers Questions", desc: "What you do, where you work, what it costs — in a format search engines can use." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderTop: "2px solid #C8102E", padding: "1.25rem" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.4rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection num="08" title="Why GOTM Digital — Built Different. On Purpose.">
          <div style={{
            background: "#FFF5F5",
            borderLeft: "3px solid #C8102E",
            border: "1px solid rgba(200,16,46,0.15)",
            padding: "1.25rem 1.5rem",
            marginBottom: "1.5rem",
          }}>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#444444", fontStyle: "italic", margin: 0 }}>
              "I started GOTM Digital because I was tired of watching agencies charge big upfront fees and make promises they couldn't keep. The truth is, digital marketing takes time — and that's okay. I built this company to be honest about how it really works, keep your upfront costs low with no setup fees, and grow with you as you grow."
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "1rem" }}>
            {[
              { title: "Zero Setup Fees", desc: "On anything. You pay monthly, starting small." },
              { title: "Compounds Over Time", desc: "Like a savings account for your business." },
              { title: "Grows With You", desc: "No upselling until you're ready." },
              { title: "Local Service Focus", desc: "Exclusively for local service businesses." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", padding: "1.25rem" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.3rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#555555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </AccordionSection>

      </div>
      </section>

      {/* ── AUDIT OFFER ── DARK SECTION */}
      <section style={{ background: "#111827", padding: "5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>New Offer</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}>
            Web Presence &amp; AI Search<br />
            <span style={{ color: "#C8102E" }}>Readiness Audit</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#AAAAAA", maxWidth: 580, marginBottom: "3rem" }}>
            A clear, honest review of your current website, Google Business Profile, reviews, local citations, and AI search readiness — with specific recommendations for what to fix, update, or improve.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "3rem" }}>
            {[
              { label: "Website Review", items: ["Page speed & mobile", "Service page clarity", "Schema & structured data", "Meta tags & headings"] },
              { label: "Google Business Profile", items: ["Profile completeness", "Category accuracy", "Review patterns", "Posts & Q&A activity"] },
              { label: "AI Search Readiness", items: ["Business description clarity", "FAQ & Q&A content", "Citation consistency", "Trust signal assessment"] },
            ].map((col, i) => (
              <div key={i} style={{ background: "#111827", padding: "2rem" }}>
                <div className="eyebrow" style={{ marginBottom: "1rem" }}>{col.label}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", lineHeight: 1.7, color: "#C0C0C0", marginBottom: "0.5rem" }}>
                      <CheckCircle2 size={13} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.2rem" }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>$97</div>
              <div style={{ fontSize: "0.78rem", color: "#C0C0C0", marginTop: "0.3rem" }}>One-time — credited toward first month if you sign up</div>
            </div>
            <a href="tel:9413288891" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              <Phone size={16} /> Call to Book Your Audit
            </a>
          </div>
        </div>
      </section>

      {/* ── RED DIVIDER ── */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C8102E 30%, #C8102E 70%, transparent)" }} />

      {/* ── CTA FOOTER ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "8rem 2rem" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(5,5,10,0.92) 0%, rgba(5,5,10,0.75) 50%, rgba(5,5,10,0.92) 100%)",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>Ready to Get on the Map?</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
          }}>
            Let's Build Something<br />
            <span style={{ color: "#C8102E" }}>That Lasts.</span>
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#AAAAAA", marginBottom: "2.5rem", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            I'm not going to promise overnight results — because nobody who's honest can. What I <strong style={{ color: "#FFFFFF" }}>will</strong> promise is that every dollar you invest is building something that compounds over time.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            <a href="tel:9413288891" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
              <Phone size={18} /> (941) 328-8891
            </a>
            <a href="mailto:tom@gotmdigital.com" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2.5rem",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}>
              tom@gotmdigital.com
            </a>
          </div>

          <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#AAAAAA", textTransform: "uppercase" }}>
            GOTM Digital · gotmdigital.com · Serving Local Businesses Nationwide
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
