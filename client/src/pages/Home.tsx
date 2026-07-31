import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";

/* ── Scroll-reveal hook ─────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up, .fade-in, .slide-left, .slide-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Animated counter ───────────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const SERVICES = [
  { icon: "🌐", title: "Custom Websites", desc: "Fast, mobile-first websites built in clean HTML/CSS — not WordPress. They load in under a second and rank higher from day one.", c: "rgba(217,70,239,0.07)", b: "rgba(217,70,239,0.18)" },
  { icon: "📍", title: "Google Business Profile", desc: "Your GBP is your most powerful free marketing tool. We optimize it so you show up when local customers search for what you do.", c: "rgba(99,102,241,0.07)", b: "rgba(99,102,241,0.18)" },
  { icon: "🔍", title: "Local SEO", desc: "Rank in the local map pack and organic results. We build citations, manage reviews, and create content that earns trust with Google.", c: "rgba(249,115,22,0.07)", b: "rgba(249,115,22,0.18)" },
  { icon: "📣", title: "Google Ads", desc: "Pay-per-click campaigns that target buyers, not browsers. Every dollar is tracked. No wasted spend on people who will never call.", c: "rgba(217,70,239,0.07)", b: "rgba(217,70,239,0.18)" },
  { icon: "⭐", title: "Review Management", desc: "More 5-star reviews, fewer headaches. We help you get them, respond to them, and turn them into a competitive moat.", c: "rgba(99,102,241,0.07)", b: "rgba(99,102,241,0.18)" },
  { icon: "📊", title: "Monthly Reporting", desc: "Plain-English reports every month. No vanity metrics — just calls, leads, rankings, and what we're doing next.", c: "rgba(249,115,22,0.07)", b: "rgba(249,115,22,0.18)" },
];

const MARQUEE = [
  "Custom Websites","Google Ads","Local SEO","Review Management",
  "Google Business Profile","Monthly Reporting","No Setup Fees","No Contracts",
  "Custom Websites","Google Ads","Local SEO","Review Management",
  "Google Business Profile","Monthly Reporting","No Setup Fees","No Contracts",
];

const PRICING = [
  {
    name: "Starter", price: "$100", period: "/mo",
    desc: "Perfect for businesses just getting started with digital marketing.",
    features: ["Google Business Profile optimization","Monthly performance report","Review response management","1 citation listing per month","Email support"],
    cta: "Get Started", highlight: false,
  },
  {
    name: "Growth", price: "$250", period: "/mo",
    desc: "The most popular plan for local businesses ready to grow.",
    features: ["Everything in Starter","Custom 5-page website","Local SEO (on-page + citations)","Google Ads management (up to $500 ad spend)","Bi-weekly check-ins"],
    cta: "Most Popular", highlight: true,
  },
  {
    name: "Pro", price: "$500", period: "/mo",
    desc: "Full-service digital marketing for businesses ready to dominate locally.",
    features: ["Everything in Growth","Unlimited website pages","Advanced Google Ads (up to $2,000 ad spend)","Content marketing (2 posts/mo)","Priority support + weekly calls"],
    cta: "Go Pro", highlight: false,
  },
];

const FAQS = [
  { q: "Do you require long-term contracts?", a: "No. We work month-to-month. If you're not seeing results, you can cancel anytime. We believe in earning your business every month." },
  { q: "Are there any setup fees?", a: "Never. The price you see is the price you pay. No onboarding fees, no hidden charges, no surprises." },
  { q: "How long before I see results?", a: "Google Ads can drive calls within the first week. SEO and GBP optimization typically show meaningful results within 60–90 days and compound over time." },
  { q: "Do you work with businesses outside the US?", a: "We primarily serve US-based local service businesses, but we do work with select clients in Canada and Australia. Reach out and let's talk." },
  { q: "What types of businesses do you work with?", a: "Plumbers, electricians, HVAC, landscapers, roofers, cleaners, contractors, dentists, chiropractors — any local service business that needs more calls." },
];

export default function Home() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="mesh-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "68px" }}>
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="mesh-blob mesh-blob-4" />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "800px" }}>
            <div className="gradient-badge fade-in" style={{ marginBottom: "1.5rem" }}>
              <span>✦</span>
              <span>Honest Digital Marketing for Local Service Businesses</span>
            </div>

            <h1 className="display-headline fade-up" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: "1.5rem", lineHeight: 1.02 }}>
              Wherever You Are,<br />Whatever You Do —{" "}
              <span className="gradient-text">We Build the Digital Presence</span>{" "}
              That Gets Your Phone Ringing.
            </h1>

            <p className="fade-up" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "var(--text-secondary)", maxWidth: "560px", marginBottom: "2.5rem", lineHeight: 1.75 }}>
              Get found on Google, Maps, and AI-powered search with a modern online presence that clearly shows who you are, what you do, and where you work. No setup fees. No big promises. Just results that compound.
            </p>

            <div className="fade-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <Link href="/contact" className="btn-primary">Request a Free Review →</Link>
              <Link href="/services" className="btn-secondary">See What We Do</Link>
            </div>

            <p className="fade-in" style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
              No setup fees · No long-term contracts · Starting at $100/month
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", overflow: "hidden", padding: "0.875rem 0", background: "var(--bg-section)" }}>
        <div className="marquee-track">
          {MARQUEE.map((item, i) => (
            <span key={i} className="marquee-item">{item}<span className="marquee-dot" /></span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="stats-bar" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", boxShadow: "var(--shadow-card)" }}>
          {[
            { n: 200, s: "+", label: "Businesses Helped" },
            { n: 100, s: "%", label: "Month-to-Month" },
            { n: 0, s: "", label: "Setup Fees" },
            { n: 97, s: "%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="stats-bar-item fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="stats-bar-number"><Counter target={stat.n} suffix={stat.s} /></div>
              <div className="stats-bar-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>What We Do</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: "600px", margin: "0 auto 1.25rem" }}>
              Everything a local business needs to{" "}
              <span className="gradient-text">get found and get calls</span>
            </h2>
            <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              We handle the digital side so you can focus on the work. No jargon, no bloated retainers — just the services that actually move the needle.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map((svc, i) => (
              <div key={i} className="card fade-up" style={{ padding: "2rem", background: svc.c, border: `1px solid ${svc.b}`, animationDelay: `${i * 0.07}s` }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: "var(--text-primary)" }}>{svc.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>{svc.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" className="btn-primary fade-up">See All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-base)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            {/* Visual panel */}
            <div className="slide-left" style={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(217,70,239,0.10) 0%, rgba(99,102,241,0.10) 50%, rgba(249,115,22,0.08) 100%)",
              padding: "3rem",
              border: "1px solid var(--border-subtle)",
              display: "flex", flexDirection: "column", gap: "1.5rem",
            }}>
              {[
                { label: "Website Speed Score", val: 98, color: "var(--blob-fuchsia)" },
                { label: "Google Rankings Improvement", val: 87, color: "var(--blob-indigo)" },
                { label: "Lead Conversion Rate", val: 74, color: "var(--blob-orange)" },
                { label: "Client Satisfaction", val: 97, color: "var(--blob-fuchsia)" },
              ].map((bar, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>{bar.label}</span>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: bar.color }}>{bar.val}%</span>
                  </div>
                  <div style={{ height: "8px", borderRadius: "100px", background: "rgba(99,102,241,0.1)" }}>
                    <div style={{ height: "100%", borderRadius: "100px", width: `${bar.val}%`, background: `linear-gradient(90deg, ${bar.color}, rgba(99,102,241,0.5))` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Copy */}
            <div className="slide-right">
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>Why Honest Growth</div>
              <h2 className="section-headline" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "1.5rem" }}>
                We don't sell you a dream.{" "}
                <span className="gradient-text">We build you a system.</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Most marketing agencies promise the moon and deliver a PowerPoint. We're different — a small, focused team that works exclusively with local service businesses.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Build a fast website, get you found on Google, manage your reputation, and run ads that pay for themselves. No bloated retainers. No vanity metrics. Just more calls.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {["No setup fees — ever","Month-to-month, cancel anytime","Plain-English reporting every month","One point of contact, always"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: "0.65rem", fontWeight: 700 }}>✓</span>
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">Let's Talk →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-section)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>Simple, Honest Pricing</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Starting at <span className="gradient-text">$100/month.</span>
            </h2>
            <p className="fade-up" style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto" }}>
              No setup fees. No contracts. No surprises. Just clear, honest pricing for real results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            {PRICING.map((plan, i) => (
              <div key={i} className="fade-up" style={{
                background: plan.highlight ? "linear-gradient(135deg, rgba(217,70,239,0.07), rgba(99,102,241,0.07))" : "#fff",
                border: plan.highlight ? "2px solid rgba(99,102,241,0.32)" : "1px solid var(--border-subtle)",
                borderRadius: "20px", padding: "2.5rem",
                boxShadow: plan.highlight ? "var(--shadow-hover)" : "var(--shadow-card)",
                position: "relative", animationDelay: `${i * 0.1}s`,
              }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))", color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", padding: "0.3rem 1rem", borderRadius: "100px", whiteSpace: "nowrap" }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.75rem" }}>
                  <span className="gradient-text" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "3rem", lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{plan.period}</span>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{plan.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <span style={{ color: "var(--blob-fuchsia)", fontWeight: 700, fontSize: "0.85rem", marginTop: "1px" }}>✓</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={plan.highlight ? "btn-primary" : "btn-secondary"} style={{ width: "100%", justifyContent: "center" }}>
                  {plan.cta} →
                </Link>
              </div>
            ))}
          </div>
          <p className="fade-up" style={{ textAlign: "center", marginTop: "2rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
            All plans include a free web presence review. No credit card required to get started.
          </p>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "6rem 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow fade-up" style={{ marginBottom: "1.25rem", color: "var(--blob-pink)" }}>Ready to Grow?</div>
          <h2 className="section-headline fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", color: "#fff", marginBottom: "1.5rem" }}>
            Request a Free Web Presence Review
          </h2>
          <p className="fade-up" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            We'll audit your website, Google Business Profile, and local rankings — and show you exactly what's holding you back. Free. No strings attached.
          </p>
          <div className="fade-up" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Request My Free Review →</Link>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.28)", borderRadius: "100px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "7rem 0", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow fade-up" style={{ marginBottom: "1rem" }}>FAQ</div>
            <h2 className="section-headline fade-up" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>Common Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="fade-up" style={{ background: "#fff", border: `1px solid ${openFaq === i ? "rgba(99,102,241,0.3)" : "var(--border-subtle)"}`, borderRadius: "14px", overflow: "hidden", transition: "border-color 0.2s", animationDelay: `${i * 0.06}s` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)" }}>{faq.q}</span>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: openFaq === i ? "linear-gradient(135deg, var(--blob-fuchsia), var(--blob-indigo))" : "var(--bg-section)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s", color: openFaq === i ? "#fff" : "var(--text-muted)", fontSize: "1.1rem", fontWeight: 700 }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
