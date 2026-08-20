import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { deliverContactInquiry, sendToWeb3Forms, validateContactForm } from "@/lib/contactForm";

const serviceOptions = [
  "Complex Organization Digital Transformation",
  "Healthcare or Physician Group Platform",
  "Multi-Location Digital Presence",
  "Website Platform & Search Readiness",
  "Google Business Profile & Local Presence",
  "Paid Media, Social & Demand Programs",
  "Local Service Business Growth Plan",
  "Not sure yet — I need perspective",
];

function useReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function Contact() {
  useReveals();
  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => { setSubmitted(true); toast.success("Your message has been sent."); },
    onError: () => toast.error("Something went wrong. Please call us directly."),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationError = validateContactForm(form);
    if (validationError) { toast.error(validationError); return; }
    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    await deliverContactInquiry(form, web3Key, sendToWeb3Forms, (inquiry) => contactMutation.mutate(inquiry));
  };

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid" style={{ minHeight: "min(710px, 92svh)" }}>
          <div className="container" style={{ display: "grid", alignItems: "end", minHeight: "600px", paddingBottom: "4rem" }}>
            <div className="reveal" style={{ maxWidth: "930px" }}>
              <p className="section-kicker">Start a discovery conversation</p>
              <h1 className="system-display" style={{ marginTop: "1.5rem" }}>Tell us what has become too fragmented to <span className="copper-text">manage well.</span></h1>
              <p className="system-copy" style={{ marginTop: "1.7rem", maxWidth: "630px" }}>Whether you need a complete platform transformation or a sharper first move, we will start by understanding the organization, the audiences you serve, and the digital work already in motion.</p>
            </div>
          </div>
        </section>

        <section className="system-section system-section-paper">
          <div className="container contact-layout" style={{ display: "grid", gridTemplateColumns: "minmax(290px, 0.78fr) minmax(0, 1.05fr)", gap: "clamp(2.5rem, 6vw, 6rem)", alignItems: "start" }}>
            <aside className="reveal">
              <p className="section-kicker">What happens next</p>
              <h2 className="system-headline" style={{ marginTop: "1.25rem", fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>A useful conversation before a proposed solution.</h2>
              <div style={{ display: "grid", gap: "1.3rem", marginTop: "2.4rem" }}>
                {[
                  ["01", "Share the situation", "Tell us where the digital experience, visibility, demand, data, or ownership is no longer working together."],
                  ["02", "We look for the system", "We consider the moving parts and identify the most practical starting point—not a generic package."],
                  ["03", "Decide on the right next move", "If there is a fit, we outline a scoped engagement with the right level of platform, marketing, and operating support."],
                ].map(([number, title, copy]) => (
                  <div key={number} style={{ display: "grid", gridTemplateColumns: "2rem 1fr", gap: "0.85rem", paddingTop: "1.15rem", borderTop: "1px solid var(--line)" }}>
                    <span className="system-mono" style={{ color: "var(--copper)" }}>{number}</span>
                    <div><h3 style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "-0.035em" }}>{title}</h3><p style={{ color: "var(--graphite-soft)", fontSize: "0.86rem", lineHeight: 1.6, marginTop: "0.45rem" }}>{copy}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2.6rem", paddingTop: "1.2rem", borderTop: "1px solid var(--line-strong)" }}>
                <p className="system-mono" style={{ color: "var(--copper)" }}>Direct contact</p>
                <a href="tel:9413288891" style={{ display: "block", marginTop: "0.65rem", color: "var(--graphite)", fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, letterSpacing: "-0.045em", textDecoration: "none" }}>(941) 328-8891</a>
                <a href="mailto:tom@gotmdigital.com" style={{ display: "inline-block", marginTop: "0.4rem", color: "var(--graphite-soft)", fontSize: "0.92rem" }}>tom@gotmdigital.com</a>
              </div>
            </aside>

            <div className="reveal">
              {submitted ? (
                <div style={{ padding: "clamp(2rem, 5vw, 4rem)", border: "1px solid var(--line-strong)", background: "var(--paper-warm)" }}>
                  <p className="section-kicker">Message received</p>
                  <h2 className="system-headline" style={{ marginTop: "1.25rem", fontSize: "clamp(2.25rem, 4vw, 4rem)" }}>Thank you. We will be in touch soon.</h2>
                  <p className="system-copy" style={{ marginTop: "1.35rem", maxWidth: "520px" }}>Your information was submitted to GOTM Digital. You can also call directly if you would like to speak sooner.</p>
                  <div style={{ marginTop: "2rem" }}><Link href="/" className="system-button-outline">Return Home ↖</Link></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem", padding: "clamp(1.4rem, 4vw, 3rem)", border: "1px solid var(--line-strong)", background: "var(--paper-bright)" }}>
                  <div style={{ paddingBottom: "1.15rem", borderBottom: "1px solid var(--line)" }}><p className="system-mono" style={{ color: "var(--copper)" }}>Inquiry details</p><h2 style={{ marginTop: "0.55rem", fontSize: "1.45rem", fontWeight: 600 }}>What should we understand first?</h2></div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }} className="contact-fields-two">
                    <Field label="Name *"><input className="input-field" autoComplete="name" placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></Field>
                    <Field label="Phone *"><input className="input-field" type="tel" autoComplete="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} required /></Field>
                  </div>
                  <Field label="Work email"><input className="input-field" type="email" autoComplete="email" placeholder="you@organization.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></Field>
                  <Field label="Organization"><input className="input-field" autoComplete="organization" placeholder="Organization name" value={form.business} onChange={(event) => setForm({ ...form, business: event.target.value })} /></Field>
                  <Field label="Primary interest"><select className="input-field" value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}><option value="">Choose a starting point</option>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></Field>
                  <Field label="Context"><textarea className="input-field" rows={5} placeholder="What are you trying to improve, consolidate, launch, or make easier to manage?" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} style={{ resize: "vertical" }} /></Field>
                  <button type="submit" className="system-button" disabled={contactMutation.isPending} style={{ width: "100%", opacity: contactMutation.isPending ? 0.65 : 1 }}>{contactMutation.isPending ? "Sending…" : "Send Inquiry ↗"}</button>
                  <p className="system-mono" style={{ textAlign: "center" }}>Your details are used only to respond to this inquiry.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <style>{`@media (max-width: 820px) { .contact-layout { grid-template-columns: 1fr !important; } } @media (max-width: 540px) { .contact-fields-two { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label style={{ display: "grid", gap: "0.45rem", color: "var(--graphite)", fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}{children}</label>;
}
