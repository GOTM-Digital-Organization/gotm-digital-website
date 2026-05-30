import { useEffect } from "react";
import { Phone, CheckCircle2, Globe, Search, Star, Megaphone, TrendingUp, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import GotmLogo from "@/components/GotmLogo";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Flyer() {
  useScrollReveal();

  return (
    <div style={{ background: "#FFFFFF", color: "#222222", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── FLYER WRAPPER ── */}
      <div style={{ paddingTop: "5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>

          {/* ── FLYER HEADER ── */}
          <div style={{
            background: "linear-gradient(135deg, #0B0F18 0%, #141922 60%, #0B0F18 100%)",
            border: "2px solid rgba(244,161,46,0.4)",
            borderRadius: "16px 16px 0 0",
            padding: "3rem 2.5rem 2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Gold corner accents */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 60, height: 60, borderTop: "3px solid #F4A12E", borderLeft: "3px solid #F4A12E", borderRadius: "16px 0 0 0" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, borderTop: "3px solid #F4A12E", borderRight: "3px solid #F4A12E", borderRadius: "0 16px 0 0" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 60, height: 60, borderBottom: "3px solid rgba(200,16,46,0.3)", borderLeft: "3px solid rgba(200,16,46,0.3)" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, borderBottom: "3px solid rgba(200,16,46,0.3)", borderRight: "3px solid rgba(200,16,46,0.3)" }} />

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <GotmLogo size={220} />
            </div>

            <div style={{
              display: "inline-block",
              background: "rgba(244,161,46,0.1)",
              border: "1px solid rgba(200,16,46,0.3)",
              borderRadius: 100,
              padding: "0.4rem 1.25rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#C8102E",
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
              color: "#111111",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}>
              Get Your Business<br />
              <span style={{ color: "#C8102E" }}>On The Map.</span>
            </h1>

            <p style={{ fontSize: "1rem", color: "#444444", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 1.5rem" }}>
              No setup fees. No big promises. No disappearing after you sign up. Just honest digital marketing that grows with your business — starting at <strong style={{ color: "#E8304A" }}>$100/month</strong>.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {["No Setup Fees", "No Long-Term Contracts", "No Empty Promises"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "#666666" }}>
                  <CheckCircle2 size={13} style={{ color: "#C8102E" }} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div style={{ height: 4, background: "linear-gradient(90deg, transparent, #F4A12E, transparent)" }} />

          {/* ── THE HONEST TRUTH SECTION ── */}
          <div style={{
            background: "#F5F5F5",
            border: "1px solid #252E42",
            borderTop: "none",
            padding: "2.5rem",
          }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>The Honest Truth</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 900, color: "#111111", lineHeight: 1.2 }}>
                What Nobody Else Will Tell You About<br />
                <span style={{ color: "#C8102E" }}>Digital Marketing</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {[
                {
                  icon: "🌱",
                  title: "New Websites Take Time",
                  body: "A brand-new domain won't rank on Google overnight. It typically takes 1–3 years to fully mature. Your competitors have months or years of search history, backlinks, and reviews ahead of you — you're starting from zero, and that's completely normal. Think of your website as an investment that compounds over time.",
                },
                {
                  icon: "🏗️",
                  title: "Custom HTML Beats WordPress",
                  body: "Custom HTML sites load faster and rank better — Google rewards speed and clean code. No bloated plugins, no unnecessary scripts. Just lean, purpose-built code optimized from day one: meta tags, schema markup, mobile layout, image compression, and site structure.",
                },
                {
                  icon: "⭐",
                  title: "Google Business Profile is Free Power",
                  body: "Your Google Business Profile is your most powerful free tool while your website grows. Ask every single customer for a review — every time, no exceptions. Reviews build local trust fast. Keep your profile active: photos, hours, services, and regular posts all signal credibility to Google.",
                },
                {
                  icon: "⚡",
                  title: "Need Leads Right Now? — Google Ads",
                  body: "Google Ads put you in front of people actively searching for your services today — not in two years. We build dedicated landing pages in the same clean HTML format — fast, focused, and built to convert. You control the budget and only pay when someone clicks your ad.",
                },
              ].map((item, i) => (
                <div key={i} className="card-dark" style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#111111", marginBottom: "0.625rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#666666" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── GROWTH TIMELINE ── */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #252E42",
            borderTop: "none",
            padding: "2.5rem",
          }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>The Growth Timeline</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 900, color: "#111111", lineHeight: 1.2 }}>
                What to Expect & <span style={{ color: "#C8102E" }}>When to Expect It</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              {[
                { phase: "Day 1", icon: "🚀", title: "We Get to Work", desc: "Website live, SEO configured, Google Business Profile optimized." },
                { phase: "Months 1–6", icon: "📈", title: "Foundation Built", desc: "Profile active, reviews rolling in, ads running if budget allows." },
                { phase: "Months 6–18", icon: "⭐", title: "SEO Gains Traction", desc: "Domain builds authority. Content starts paying off. Rankings improve." },
                { phase: "Year 2–3", icon: "🏆", title: "Organic Leads Flow", desc: "ROI accelerates. Ads become optional. Your website works while you sleep." },
              ].map((step, i) => (
                <div key={i} style={{
                  background: "#F5F5F5",
                  border: "1px solid #252E42",
                  borderTop: "2px solid rgba(244,161,46,0.4)",
                  borderRadius: 8,
                  padding: "1.25rem",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{step.icon}</div>
                  <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#C8102E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.4rem" }}>{step.phase}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.4rem" }}>{step.title}</div>
                  <div style={{ fontSize: "0.78rem", lineHeight: 1.6, color: "#666666" }}>{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SERVICES & PRICING ── */}
          <div style={{
            background: "#F5F5F5",
            border: "1px solid #252E42",
            borderTop: "none",
            padding: "2.5rem",
          }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>Services & Pricing</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 900, color: "#111111", lineHeight: 1.2 }}>
                No Setup Fees. <span style={{ color: "#C8102E" }}>No Surprises. Ever.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
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
                <div key={i} className={`card-dark${plan.featured ? " featured" : ""}`} style={{ overflow: "hidden" }}>
                  {plan.featured && (
                    <div style={{ background: "#C8102E", color: "#111111", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", padding: "0.35rem" }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#111111" }}>{plan.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "#666666" }}>{plan.tagline}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{plan.price}</div>
                        <div style={{ fontSize: "0.65rem", color: "#666666" }}>/month</div>
                      </div>
                    </div>
                    <hr style={{ border: "none", borderTop: "1px solid #252E42", margin: "0 0 1rem" }} />
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {plan.features.map((f, j) => (
                        <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem", lineHeight: 1.6, color: "#444444", marginBottom: "0.5rem" }}>
                          <CheckCircle2 size={13} style={{ color: "#C8102E", flexShrink: 0, marginTop: "0.15rem" }} /> {f}
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
              padding: "1rem 1.25rem",
              fontSize: "0.8rem",
              color: "#E8304A",
              lineHeight: 1.65,
              textAlign: "center",
            }}>
              📌 <strong>Ad spend for Google Ads is paid directly by you to Google.</strong> Our fee covers strategy, setup, and management only. You stay in full control of your budget.
            </div>
          </div>

          {/* ── WHY GOTM ── */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #252E42",
            borderTop: "none",
            padding: "2.5rem",
          }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>Why GOTM Digital</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 900, color: "#111111", lineHeight: 1.2 }}>
                Built Different. <span style={{ color: "#C8102E" }}>On Purpose.</span>
              </h2>
            </div>

            <div className="callout-gold" style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#333333", fontStyle: "italic", margin: 0 }}>
                "I started GOTM Digital because I was tired of watching agencies charge big upfront fees and make promises they couldn't keep. The truth is, digital marketing takes time — and that's okay. I built this company to be honest about how it really works, keep your upfront costs low with no setup fees, and grow with you as you grow."
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { icon: "💰", title: "Zero Setup Fees", desc: "On anything. You pay monthly, starting small." },
                { icon: "📈", title: "Compounds Over Time", desc: "Like a savings account for your business." },
                { icon: "🤝", title: "Grows With You", desc: "No upselling until you're ready." },
                { icon: "🎯", title: "Local Service Focus", desc: "Exclusively for local service businesses." },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#F5F5F5",
                  border: "1px solid #252E42",
                  borderRadius: 8,
                  padding: "1.25rem",
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 700, color: "#111111", marginBottom: "0.25rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.8rem", color: "#666666", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FLYER CTA / FOOTER ── */}
          <div style={{
            background: "linear-gradient(135deg, #141922, #0B0F18)",
            border: "2px solid rgba(244,161,46,0.4)",
            borderTop: "none",
            borderRadius: "0 0 16px 16px",
            padding: "2.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Bottom corner accents */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 60, height: 60, borderBottom: "3px solid #F4A12E", borderLeft: "3px solid #F4A12E", borderRadius: "0 0 0 16px" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 60, height: 60, borderBottom: "3px solid #F4A12E", borderRight: "3px solid #F4A12E", borderRadius: "0 0 16px 0" }} />

            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎯</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 900, color: "#111111", marginBottom: "0.875rem" }}>
              Ready to Get on the Map?
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#333333", marginBottom: "1.75rem", maxWidth: 500, margin: "0 auto 1.75rem" }}>
              I'm not going to promise overnight results — because nobody who's honest can. What I <strong style={{ color: "#111111" }}>will</strong> promise is that every dollar you invest is building something that compounds over time.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
              <a href="tel:9413288891" className="btn-gold" style={{ fontSize: "1.1rem", padding: "0.875rem 2rem" }}>
                <Phone size={18} /> (941) 328-8891
              </a>
              <a href="mailto:info@gotmdigital.com" className="btn-gold-outline" style={{ padding: "0.875rem 2rem" }}>
                info@gotmdigital.com
              </a>
            </div>

            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#666666", textTransform: "uppercase" }}>
              GOTM Digital · gotmdigital.com · Serving Local Businesses Nationwide
            </div>
          </div>

        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
