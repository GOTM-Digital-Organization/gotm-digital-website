import { useState } from "react";
import { Phone, CheckCircle2, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import GotmLogo from "@/components/GotmLogo";

// ── Accordion Item ──────────────────────────────────────────
function AccordionSection({
  emoji,
  title,
  children,
  defaultOpen = false,
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: open ? "#FFFFFF" : "#F4F4F4",
          border: `1px solid ${open ? "#C8102E" : "#DEDEDE"}`,
          borderBottom: open ? "none" : `1px solid ${open ? "#C8102E" : "#DEDEDE"}`,
          borderRadius: open ? "10px 10px 0 0" : "10px",
          color: "#111111",
          padding: "1.1rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.875rem",
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 0.2s, background 0.2s",
        }}
      >
        <span style={{ fontSize: "1.375rem", flexShrink: 0 }}>{emoji}</span>
        <span style={{
          flex: 1,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#111111",
          letterSpacing: "0.01em",
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
          background: "#FFFFFF",
          border: "1px solid #C8102E",
          borderTop: "none",
          borderRadius: "0 0 10px 10px",
          padding: "1.25rem 1.5rem 1.5rem",
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Flyer() {
  return (
    <div style={{ background: "#F0F0F0", color: "#222222", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      <div style={{ paddingTop: "5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>

          {/* ── FLYER HEADER ── */}
          <div style={{
            border: "2px solid rgba(200,16,46,0.5)",
            borderRadius: "14px 14px 0 0",
            padding: "3rem 2.5rem 2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Hero background image */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.45,
            }} />
            {/* Dark overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg, rgba(10,10,20,0.82) 0%, rgba(10,10,20,0.62) 50%, rgba(10,10,20,0.78) 100%)",
            }} />
            {/* Radial red glow */}
            <div style={{
              position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
              width: 600, height: 600,
              background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            {/* Red corner accents */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 60, height: 60, borderTop: "3px solid #C8102E", borderLeft: "3px solid #C8102E", borderRadius: "14px 0 0 0", zIndex: 2 }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, borderTop: "3px solid #C8102E", borderRight: "3px solid #C8102E", borderRadius: "0 14px 0 0", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 60, height: 60, borderBottom: "3px solid rgba(200,16,46,0.3)", borderLeft: "3px solid rgba(200,16,46,0.3)", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, borderBottom: "3px solid rgba(200,16,46,0.3)", borderRight: "3px solid rgba(200,16,46,0.3)", zIndex: 2 }} />

            {/* Content wrapper — sits above background layers */}
            <div style={{ position: "relative", zIndex: 3 }}>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <GotmLogo size={220} />
            </div>

            <div style={{
              display: "inline-block",
              background: "rgba(200,16,46,0.35)",
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: 100,
              padding: "0.4rem 1.25rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}>
              Honest Digital Marketing for Local Service Businesses
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "1rem",
              textShadow: "0 2px 12px rgba(0,0,0,0.9)",
            }}>
              Get Your Business<br />
              <span style={{ color: "#C8102E" }}>On The Map.</span>
            </h1>

            <p style={{ fontSize: "1rem", color: "#FFFFFF", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 1.5rem", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              No setup fees. No big promises. No disappearing after you sign up. Just honest digital marketing that grows with your business — starting at{" "}
              <strong style={{ color: "#FFB3C1", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>$100/month</strong>.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {["No Setup Fees", "No Long-Term Contracts", "No Empty Promises"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                  <CheckCircle2 size={13} style={{ color: "#C8102E" }} /> {item}
                </div>
              ))}
            </div>
            </div>{/* end content wrapper */}
          </div>

          {/* ── GOLD DIVIDER ── */}
          <div style={{ height: 4, background: "linear-gradient(90deg, transparent, #C8102E, transparent)" }} />

          {/* ── ACCORDION SECTIONS ── */}
          <div style={{
            background: "#E8E8E8",
            border: "1px solid #D0D0D0",
            borderTop: "none",
            padding: "2rem 2rem 2.5rem",
            borderRadius: "0 0 14px 14px",
          }}>

            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div style={{
                display: "inline-block",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#C8102E",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}>
                The Honest Truth
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 900,
                color: "#111111",
                lineHeight: 1.2,
                margin: 0,
              }}>
                What Nobody Else Will Tell You About{" "}
                <span style={{ color: "#C8102E" }}>Digital Marketing</span>
              </h2>
            </div>

            {/* ── DROPDOWN 1: New Websites Take Time ── */}
            <AccordionSection emoji="🌱" title="New Websites Take Time — Here's Why" defaultOpen={true}>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: 0 }}>
                A brand-new domain won't rank on Google overnight. It typically takes <strong>1–3 years</strong> to fully mature. Your competitors have months or years of search history, backlinks, and reviews ahead of you — you're starting from zero, and that's completely normal.
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: "0.75rem 0 0" }}>
                Think of your website as an investment that <strong>compounds over time</strong>. The businesses that stay consistent are the ones that win. That's why we keep your monthly costs low — so you can stay in the game long enough for it to pay off.
              </p>
            </AccordionSection>

            {/* ── DROPDOWN 2: Custom HTML ── */}
            <AccordionSection emoji="🏗️" title="Why Custom HTML Beats WordPress & Others">
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: 0 }}>
                Custom HTML sites <strong>load faster and rank better</strong> — Google rewards speed and clean code. No bloated plugins, no unnecessary scripts. Just lean, purpose-built code optimized from day one: meta tags, schema markup, mobile layout, image compression, and site structure.
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: "0.75rem 0 0" }}>
                Over time, this foundation consistently outperforms WordPress, GoHighLevel, Wix, and Squarespace — especially for local service businesses where page speed and local SEO signals matter most.
              </p>
            </AccordionSection>

            {/* ── DROPDOWN 3: Google Business Profile ── */}
            <AccordionSection emoji="⭐" title="Google Business Profile — Your Most Powerful Free Tool">
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: 0 }}>
                Your Google Business Profile is your most powerful free tool while your website grows. <strong>Ask every single customer for a review — every time, no exceptions.</strong> Reviews build local trust fast and can start showing results within weeks.
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: "0.75rem 0 0" }}>
                Keep your profile active: photos, hours, services, and regular posts all signal credibility to Google. This works independently of your website's age — it's your fastest path to local visibility right now.
              </p>
            </AccordionSection>

            {/* ── DROPDOWN 4: Google Ads ── */}
            <AccordionSection emoji="⚡" title="Need Leads Right Now? — Google Ads">
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: 0 }}>
                Google Ads put you in front of people <strong>actively searching for your services today</strong> — not in two years. We build dedicated landing pages in the same clean HTML format — fast, focused, and built to convert.
              </p>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#444444", margin: "0.75rem 0 0" }}>
                You control the budget and only pay when someone clicks your ad. Ads bridge the gap while your organic SEO matures — scale back once the site takes off. <strong>Ad spend is paid directly by you to Google</strong> — our fee covers strategy, setup, and management only.
              </p>
            </AccordionSection>

            {/* ── DROPDOWN 5: Growth Timeline ── */}
            <AccordionSection emoji="🗺️" title="The Growth Timeline — What to Expect">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "0.875rem", marginBottom: "1rem" }}>
                {[
                  { phase: "Day 1", icon: "🚀", title: "We Get to Work", desc: "Website live, SEO configured, Google Business Profile optimized." },
                  { phase: "Months 1–6", icon: "📈", title: "Foundation Built", desc: "Profile active, reviews rolling in, ads running if budget allows." },
                  { phase: "Months 6–18", icon: "⭐", title: "SEO Gains Traction", desc: "Domain builds authority. Content starts paying off. Rankings improve." },
                  { phase: "Year 2–3", icon: "🏆", title: "Organic Leads Flow", desc: "ROI accelerates. Ads become optional. Your website works while you sleep." },
                ].map((step, i) => (
                  <div key={i} style={{
                    background: "#F8F8F8",
                    border: "1px solid #DEDEDE",
                    borderTop: "2px solid #C8102E",
                    borderRadius: 8,
                    padding: "1rem",
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: "1.375rem", marginBottom: "0.4rem" }}>{step.icon}</div>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem" }}>{step.phase}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", fontWeight: 700, color: "#111111", marginBottom: "0.3rem" }}>{step.title}</div>
                    <div style={{ fontSize: "0.75rem", lineHeight: 1.6, color: "#666666" }}>{step.desc}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#666666", margin: 0, textAlign: "center", fontStyle: "italic" }}>
                The key is staying consistent — most businesses quit before the compounding kicks in.
              </p>
            </AccordionSection>

            {/* ── DROPDOWN 6: Services & Pricing ── */}
            <AccordionSection emoji="💰" title="Services & Pricing — No Setup Fees. No Surprises. Ever.">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                {[
                  {
                    name: "Starter", price: "$100", tagline: "Your foundation, done right", featured: false,
                    features: ["Custom HTML website", "Full SEO optimization", "Google Business Profile setup", "Unlimited updates & edits", "Mobile-responsive design"],
                  },
                  {
                    name: "Growth", price: "$300", tagline: "Stay active, stay visible", featured: true,
                    features: ["Everything in Starter", "Weekly website posts", "Weekly Google Business posts", "Content strategy & keywords", "Monthly performance report"],
                  },
                  {
                    name: "Full Service", price: "$500", tagline: "Leads now + growth long-term", featured: false,
                    features: ["Everything in Growth", "Google Ads management", "Custom landing pages", "Ongoing ad optimization", "Full ROI reporting"],
                  },
                ].map((plan, i) => (
                  <div key={i} style={{
                    background: plan.featured ? "#FFFFFF" : "#F8F8F8",
                    border: `1px solid ${plan.featured ? "#C8102E" : "#DEDEDE"}`,
                    borderTop: `3px solid ${plan.featured ? "#C8102E" : "#DEDEDE"}`,
                    borderRadius: 8,
                    overflow: "hidden",
                  }}>
                    {plan.featured && (
                      <div style={{ background: "#C8102E", color: "#FFFFFF", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", padding: "0.3rem" }}>
                        Most Popular
                      </div>
                    )}
                    <div style={{ padding: "1.1rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                        <div>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "#111111" }}>{plan.name}</div>
                          <div style={{ fontSize: "0.72rem", color: "#666666" }}>{plan.tagline}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{plan.price}</div>
                          <div style={{ fontSize: "0.62rem", color: "#666666" }}>/month</div>
                        </div>
                      </div>
                      <hr style={{ border: "none", borderTop: "1px solid #EBEBEB", margin: "0 0 0.875rem" }} />
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {plan.features.map((f, j) => (
                          <li key={j} style={{ display: "flex", gap: "0.4rem", fontSize: "0.78rem", lineHeight: 1.6, color: "#444444", marginBottom: "0.4rem" }}>
                            <CheckCircle2 size={12} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.15rem" }} /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                background: "rgba(200,16,46,0.06)",
                border: "1px solid rgba(200,16,46,0.2)",
                borderRadius: 8,
                padding: "0.875rem 1rem",
                fontSize: "0.78rem",
                color: "#C8102E",
                lineHeight: 1.65,
                textAlign: "center",
              }}>
                📌 <strong>Ad spend for Google Ads is paid directly by you to Google.</strong> Our fee covers strategy, setup, and management only. You stay in full control of your budget.
              </div>
            </AccordionSection>

            {/* ── DROPDOWN 7: Why GOTM Digital ── */}
            <AccordionSection emoji="🎯" title="Why GOTM Digital — Built Different. On Purpose.">
              <div style={{
                background: "rgba(200,16,46,0.04)",
                border: "1px solid rgba(200,16,46,0.15)",
                borderLeft: "3px solid #C8102E",
                borderRadius: "0 8px 8px 0",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
              }}>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#333333", fontStyle: "italic", margin: 0 }}>
                  "I started GOTM Digital because I was tired of watching agencies charge big upfront fees and make promises they couldn't keep. The truth is, digital marketing takes time — and that's okay. I built this company to be honest about how it really works, keep your upfront costs low with no setup fees, and grow with you as you grow."
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "0.875rem" }}>
                {[
                  { icon: "💰", title: "Zero Setup Fees", desc: "On anything. You pay monthly, starting small." },
                  { icon: "📈", title: "Compounds Over Time", desc: "Like a savings account for your business." },
                  { icon: "🤝", title: "Grows With You", desc: "No upselling until you're ready." },
                  { icon: "🎯", title: "Local Service Focus", desc: "Exclusively for local service businesses." },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: "#F8F8F8",
                    border: "1px solid #DEDEDE",
                    borderRadius: 8,
                    padding: "1rem",
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.875rem", fontWeight: 700, color: "#111111", marginBottom: "0.2rem" }}>{item.title}</div>
                      <div style={{ fontSize: "0.78rem", color: "#666666", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionSection>

          </div>

          {/* ── FLYER CTA FOOTER ── */}
          <div style={{
            border: "2px solid rgba(200,16,46,0.4)",
            borderTop: "none",
            borderRadius: "0 0 14px 14px",
            padding: "2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            marginTop: "0.5rem",
          }}>
            {/* Hero background image */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.45,
            }} />
            {/* Dark overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg, rgba(10,10,20,0.82) 0%, rgba(10,10,20,0.62) 50%, rgba(10,10,20,0.78) 100%)",
            }} />
            {/* Radial red glow */}
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: 500, height: 500,
              background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 60, height: 60, borderBottom: "3px solid #C8102E", borderLeft: "3px solid #C8102E", borderRadius: "0 0 0 14px", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, borderBottom: "3px solid #C8102E", borderRight: "3px solid #C8102E", borderRadius: "0 0 14px 0", zIndex: 2 }} />

            {/* Content wrapper — sits above background layers */}
            <div style={{ position: "relative", zIndex: 3 }}>

            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎯</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              marginBottom: "0.875rem",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}>
              Ready to Get on the Map?
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#FFFFFF", marginBottom: "1.75rem", maxWidth: 500, margin: "0 auto 1.75rem", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              I'm not going to promise overnight results — because nobody who's honest can. What I <strong style={{ color: "#FFFFFF", fontWeight: 800 }}>will</strong> promise is that every dollar you invest is building something that compounds over time.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
              <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.1rem", padding: "0.875rem 2rem" }}>
                <Phone size={18} /> (941) 328-8891
              </a>
              <a href="mailto:info@gotmdigital.com" className="btn-gold-outline" style={{ padding: "0.875rem 2rem", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.7)" }}>
                info@gotmdigital.com
              </a>
            </div>

            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#FFFFFF", textTransform: "uppercase", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
              GOTM Digital · gotmdigital.com · Serving Local Businesses Nationwide
            </div>

            </div>{/* end content wrapper */}
          </div>

        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
