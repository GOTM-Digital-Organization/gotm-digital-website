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
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

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

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch soon.");
    },
    onError: (err) => {
      toast.error("Something went wrong. Please call us directly at (941) 328-8891.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please provide your name and phone number.");
      return;
    }
    submitContact.mutate(form);
  };

  return (
    <div style={{ background: "#FFFFFF", color: "#222222", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section style={{
        paddingTop: "9rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(200,16,46,0.4)",
      }}>
        {/* Layer 1: Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/Y9UzuBYSjHjJVLgWHPPpvA/gotm-hero-bg-mdRDU6srReC2h3CwXmSnNa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }} />
        {/* Layer 2: Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(11,15,24,0.88) 0%, rgba(11,15,24,0.75) 50%, rgba(11,15,24,0.92) 100%)",
        }} />
        {/* Layer 3: Red radial glow */}
        <div style={{
          position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(200,16,46,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label fade-up" data-delay="0" style={{ marginBottom: "1rem" }}>Get In Touch</div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}>
            Let's Talk About<br />
            <span style={{ color: "#F4A12E" }}>Your Business</span>
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontSize: "1.1rem",
            color: "#E0E6F0",
            lineHeight: 1.75,
            maxWidth: 560,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}>
            No sales pitch. No pressure. Just an honest conversation about where your business is and what digital marketing can realistically do for you.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>

            {/* Left: Contact Info */}
            <div>
              <div className="fade-up" data-delay="0">
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111111", marginBottom: "1.5rem" }}>
                  The Fastest Way to Reach Me
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                  <a href="tel:9413288891" style={{
                    display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none",
                    background: "#F5F5F5", border: "1px solid #252E42", borderRadius: 10, padding: "1.25rem",
                    transition: "border-color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#C8102E")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#DEDEDE")}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(244,161,46,0.1)", border: "1px solid rgba(200,16,46,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={18} style={{ color: "#C8102E" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#666666", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.2rem" }}>Call or Text</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111111" }}>(941) 328-8891</div>
                    </div>
                  </a>

                  <a href="mailto:info@gotmdigital.com" style={{
                    display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none",
                    background: "#F5F5F5", border: "1px solid #252E42", borderRadius: 10, padding: "1.25rem",
                    transition: "border-color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#C8102E")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#DEDEDE")}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(244,161,46,0.1)", border: "1px solid rgba(200,16,46,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={18} style={{ color: "#C8102E" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#666666", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.2rem" }}>Email</div>
                      <div style={{ fontSize: "1rem", fontWeight: 600, color: "#111111" }}>info@gotmdigital.com</div>
                    </div>
                  </a>

                  <div style={{
                    display: "flex", gap: "1rem", alignItems: "center",
                    background: "#F5F5F5", border: "1px solid #252E42", borderRadius: 10, padding: "1.25rem",
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(244,161,46,0.1)", border: "1px solid rgba(200,16,46,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={18} style={{ color: "#C8102E" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#666666", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.2rem" }}>Service Area</div>
                      <div style={{ fontSize: "1rem", fontWeight: 600, color: "#111111" }}>Serving Local Businesses Nationwide</div>
                    </div>
                  </div>
                </div>

                <div className="callout-gold" style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "#333333", margin: 0 }}>
                    <strong style={{ color: "#E8304A" }}>What to expect:</strong> I'll ask about your business, your goals, and your budget. I'll tell you honestly what I think will work and what timeline is realistic. No pressure, no upsell.
                  </p>
                </div>
              </div>

              <div className="fade-up" data-delay="160" style={{ marginTop: "2.5rem" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#111111", marginBottom: "1rem" }}>
                  What Happens After You Reach Out
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    "We have a quick call to understand your business and goals",
                    "I give you an honest assessment of what's possible and when",
                    "If it's a fit, we get your website live within 1–2 weeks",
                    "You start building your online presence from day one",
                  ].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: "50%",
                        background: "rgba(200,16,46,0.15)", border: "1px solid rgba(200,16,46,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.65rem", fontWeight: 700, color: "#C8102E",
                        flexShrink: 0, marginTop: "0.1rem",
                      }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#444444" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="fade-up" data-delay="80">
              {submitted ? (
                <div className="card-dark" style={{ padding: "3rem", textAlign: "center" }}>
                  <CheckCircle2 size={48} style={{ color: "#C8102E", margin: "0 auto 1.25rem" }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111111", marginBottom: "0.75rem" }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#444444", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                    I'll be in touch within 24 hours. If you need to talk sooner, call or text me directly at (941) 328-8891.
                  </p>
                  <a href="tel:9413288891" className="btn-gold" style={{ justifyContent: "center" }}>
                    <Phone size={16} /> (941) 328-8891
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark" style={{ padding: "2rem" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#111111", marginBottom: "1.5rem" }}>
                    Send a Message
                  </h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        required
                        style={{
                          width: "100%", background: "#FFFFFF", border: "1px solid #252E42", borderRadius: 6,
                          padding: "0.625rem 0.875rem", color: "#222222", fontSize: "0.9rem",
                          outline: "none", boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => (e.target.style.borderColor = "#C8102E")}
                        onBlur={e => (e.target.style.borderColor = "#DEDEDE")}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        required
                        style={{
                          width: "100%", background: "#FFFFFF", border: "1px solid #252E42", borderRadius: 6,
                          padding: "0.625rem 0.875rem", color: "#222222", fontSize: "0.9rem",
                          outline: "none", boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => (e.target.style.borderColor = "#C8102E")}
                        onBlur={e => (e.target.style.borderColor = "#DEDEDE")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="john@yourbusiness.com"
                      style={{
                        width: "100%", background: "#FFFFFF", border: "1px solid #252E42", borderRadius: 6,
                        padding: "0.625rem 0.875rem", color: "#222222", fontSize: "0.9rem",
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#C8102E")}
                      onBlur={e => (e.target.style.borderColor = "#DEDEDE")}
                    />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={e => setForm({ ...form, business: e.target.value })}
                      placeholder="Your Business LLC"
                      style={{
                        width: "100%", background: "#FFFFFF", border: "1px solid #252E42", borderRadius: 6,
                        padding: "0.625rem 0.875rem", color: "#222222", fontSize: "0.9rem",
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#C8102E")}
                      onBlur={e => (e.target.style.borderColor = "#DEDEDE")}
                    />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                      I'm Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{
                        width: "100%", background: "#FFFFFF", border: "1px solid #252E42", borderRadius: 6,
                        padding: "0.625rem 0.875rem", color: form.service ? "#222222" : "#666666", fontSize: "0.9rem",
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#C8102E")}
                      onBlur={e => (e.target.style.borderColor = "#DEDEDE")}
                    >
                      <option value="">Select a service...</option>
                      <option value="starter">Starter — Website Only ($100/mo)</option>
                      <option value="growth">Growth — Website + SEO ($300/mo)</option>
                      <option value="full-service">Full Service — Website + SEO + Ads ($500/mo)</option>
                      <option value="not-sure">Not sure yet — just want to talk</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontSize: "0.75rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                      Tell Me About Your Business
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="What do you do, where are you located, and what are your goals?"
                      rows={4}
                      style={{
                        width: "100%", background: "#FFFFFF", border: "1px solid #252E42", borderRadius: 6,
                        padding: "0.625rem 0.875rem", color: "#222222", fontSize: "0.9rem",
                        outline: "none", boxSizing: "border-box", resize: "vertical",
                        fontFamily: "'DM Sans', sans-serif",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#C8102E")}
                      onBlur={e => (e.target.style.borderColor = "#DEDEDE")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="btn-gold"
                    style={{ width: "100%", justifyContent: "center", opacity: submitContact.isPending ? 0.7 : 1 }}
                  >
                    <Send size={16} />
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "#666666", textAlign: "center", marginTop: "1rem", lineHeight: 1.6 }}>
                    Or call/text directly: <a href="tel:9413288891" style={{ color: "#C8102E", textDecoration: "none" }}>(941) 328-8891</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
