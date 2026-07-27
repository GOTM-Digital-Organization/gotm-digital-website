import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

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
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid rgba(0,0,0,0.15)",
  padding: "0.75rem 1rem",
  color: "#111111",
  fontSize: "0.875rem",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "'DM Sans', sans-serif",
  transition: "border-color 0.2s",
  borderRadius: 0,
};

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitContact = trpc.contact.submit.useMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit directly to Web3Forms (client-side — free tier)
      const web3Payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `New Lead from GOTM Digital: ${form.name} — ${form.phone}`,
        from_name: "GOTM Digital Contact Form",
        name: form.name,
        phone: form.phone,
        email: form.email || "(not provided)",
        business: form.business || "(not provided)",
        service_interest: form.service || "(not provided)",
        message: form.message || "(not provided)",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(web3Payload),
      });
      const data = await res.json() as { success: boolean; message?: string };

      if (!data.success) {
        throw new Error(data.message || "Web3Forms submission failed");
      }

      // Also fire the tRPC mutation for Manus owner notification (best-effort)
      submitContact.mutate(form);

      setSubmitted(true);
      toast.success("Message sent! We'll be in touch soon.");
    } catch (err) {
      console.error("[Contact] Submission error:", err);
      toast.error("Something went wrong. Please call us directly at (941) 328-8891.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "#0A0A0A", color: "#E8E8E8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          PAGE HEADER — full-bleed cinematic
          ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.8) 80%, rgba(10,10,10,1) 100%)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "9rem", paddingBottom: "5rem", width: "100%" }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1.25rem" }}>Get In Touch</div>
          <h1 className="fade-up" data-delay="80" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
            maxWidth: 700,
          }}>
            Let's Talk About<br />
            <span style={{ color: "#C8102E" }}>Your Business.</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{ fontSize: "1rem", color: "#C8C8C8", lineHeight: 1.8, maxWidth: 520 }}>
            No sales pitch. No pressure. Just an honest conversation about where your business is and what digital marketing can realistically do for you.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT CONTENT — two-column — WHITE SECTION
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#FFFFFF", borderTop: "3px solid #C8102E" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>

            {/* ── Left: Contact Info ── */}
            <div>
              <div className="fade-up" data-delay="0">
                <h2 style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  marginBottom: "2rem",
                  lineHeight: 1.2,
                }}>
                  The Fastest Way<br />to Reach Me
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "2.5rem" }}>
                  <a href="tel:9413288891" style={{
                    display: "flex", gap: "1.25rem", alignItems: "center", textDecoration: "none",
                    background: "#F7F7F7", padding: "1.5rem",
                    transition: "background 0.2s",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FFF5F5")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#F7F7F7")}
                  >
                    <div style={{ width: 40, height: 40, border: "1px solid rgba(200,16,46,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={16} style={{ color: "#C8102E" }} />
                    </div>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: "0.2rem", fontSize: "0.6rem", color: "#555555" }}>Call or Text</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111111" }}>(941) 328-8891</div>
                    </div>
                  </a>

                  <a href="mailto:tom@gotmdigital.com" style={{
                    display: "flex", gap: "1.25rem", alignItems: "center", textDecoration: "none",
                    background: "#F7F7F7", padding: "1.5rem",
                    transition: "background 0.2s",
                    border: "1px solid rgba(0,0,0,0.08)",
                    marginTop: "0.75rem",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FFF5F5")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#F7F7F7")}
                  >
                    <div style={{ width: 40, height: 40, border: "1px solid rgba(200,16,46,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={16} style={{ color: "#C8102E" }} />
                    </div>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: "0.2rem", fontSize: "0.6rem", color: "#555555" }}>Email</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111111" }}>tom@gotmdigital.com</div>
                    </div>
                  </a>

                  <div style={{
                    display: "flex", gap: "1.25rem", alignItems: "center",
                    background: "#F7F7F7", padding: "1.5rem",
                    border: "1px solid rgba(0,0,0,0.08)",
                    marginTop: "0.75rem",
                  }}>
                    <div style={{ width: 40, height: 40, border: "1px solid rgba(200,16,46,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={16} style={{ color: "#C8102E" }} />
                    </div>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: "0.2rem", fontSize: "0.6rem", color: "#555555" }}>Service Area</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111111" }}>Serving Local Businesses Nationwide</div>
                    </div>
                  </div>
                </div>

                {/* What to expect callout */}
                <div style={{
                  borderLeft: "2px solid #C8102E",
                  paddingLeft: "1.25rem",
                  marginBottom: "2.5rem",
                }}>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "#555555", margin: 0 }}>
                    <span style={{ color: "#111111", fontWeight: 600 }}>What to expect:</span> I'll ask about your business, your goals, and your budget. I'll tell you honestly what I think will work and what timeline is realistic. No pressure, no upsell.
                  </p>
                </div>
              </div>

              <div className="fade-up" data-delay="160">
                <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>What Happens After You Reach Out</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    "We have a quick call to understand your business and goals",
                    "I give you an honest assessment of what's possible and when",
                    "If it's a fit, we get your website live within 1–2 weeks",
                    "You start building your online presence from day one",
                  ].map((step, i) => (
                    <div key={i} style={                    { display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1rem 0", borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                      <div style={{
                        width: 24, height: 24,
                        border: "1px solid rgba(200,16,46,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.65rem", fontWeight: 700, color: "#C8102E",
                        flexShrink: 0, marginTop: "0.1rem",
                      }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#444444" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="fade-up" data-delay="80">
              {submitted ? (
                <div style={{
                  border: "1px solid rgba(200,16,46,0.2)",
                  background: "#FFF5F5",
                  padding: "3.5rem 2.5rem",
                  textAlign: "center",
                }}>
                  <CheckCircle2 size={44} style={{ color: "#C8102E", margin: "0 auto 1.5rem" }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111111", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                    Message Received.
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#555555", lineHeight: 1.8, marginBottom: "2rem" }}>
                    I'll be in touch within 24 hours. If you need to talk sooner, call or text me directly at (941) 328-8891.
                  </p>
                  <a href="tel:9413288891" className="btn-gold" style={{ justifyContent: "center" }}>
                    <Phone size={16} /> (941) 328-8891
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "#F7F7F7",
                  padding: "2.5rem",
                }}>
                  <div className="eyebrow" style={{ marginBottom: "1.5rem" }}>Send a Message</div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#666666", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        required
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "#C8102E")}
                        onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#666666", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        required
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "#C8102E")}
                        onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#666666", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="john@yourbusiness.com"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "#C8102E")}
                        onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#666666", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={form.business}
                        onChange={e => setForm({ ...form, business: e.target.value })}
                        placeholder="Your Business LLC"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "#C8102E")}
                        onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#444444", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                      I'm Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, color: form.service ? "#111111" : "#888888" }}
                      onFocus={e => (e.target.style.borderColor = "#C8102E")}
                      onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                    >
                      <option value="">Select a service...</option>
                      <option value="starter">Starter — Website Only ($100/mo)</option>
                      <option value="growth">Growth — Website + SEO ($300/mo)</option>
                      <option value="full-service">Full Service — Website + SEO + Ads ($500/mo)</option>
                      <option value="not-sure">Not sure yet — just want to talk</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#444444", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                      Tell Me About Your Business
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="What do you do, where are you located, and what are your goals?"
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => (e.target.style.borderColor = "#C8102E")}
                      onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold"
                    style={{ width: "100%", justifyContent: "center", opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    <Send size={15} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p style={{ fontSize: "0.72rem", color: "#555555", textAlign: "center", marginTop: "1rem", lineHeight: 1.6 }}>
                    Or call/text directly: <a href="tel:9413288891" style={{ color: "#C8102E", textDecoration: "none" }}>(941) 328-8891</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ — DARK SECTION
          ═══════════════════════════════════════════════ */}
      <section style={{ padding: "7rem 0", background: "#111827", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="fade-up eyebrow" data-delay="0" style={{ marginBottom: "1rem" }}>Common Questions</div>
          <h2 className="fade-up" data-delay="80" style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}>
            Questions Before You Call?
          </h2>
          {[
            { q: "Is there really no setup fee?", a: "Correct — zero setup fees on anything. You pay monthly, starting at $100. That's it." },
            { q: "How long does it take to get a website live?", a: "Typically 1–2 weeks from the time we get started. We move fast once we have your content and preferences." },
            { q: "Do I have to sign a long-term contract?", a: "No long-term contracts. You stay because it's working, not because you're locked in." },
            { q: "How long does SEO take to work?", a: "Honestly? 6–18 months for meaningful organic results. We'll tell you this upfront because it's the truth. Google Ads can bridge the gap while your site matures." },
            { q: "What kinds of businesses do you work with?", a: "Local service businesses — contractors, marine services, outdoor recreation, cleaning, landscaping, and similar trades. If you run a local service business and need honest digital marketing, we work with you regardless of where you’re located." },
          ].map((faq, i) => (
            <div key={i} className="fade-up" data-delay={String(i * 60)} style={{
              padding: "1.75rem 0",
              borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{faq.q}</h3>
              <p style={{ fontSize: "0.85rem", color: "#AAAAAA", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
