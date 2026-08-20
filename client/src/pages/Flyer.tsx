import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function Flyer() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="system-hero site-grid" style={{ minHeight: "min(680px, 90svh)" }}>
          <div className="container" style={{ display: "grid", alignItems: "end", minHeight: "580px", paddingBottom: "4rem" }}>
            <div style={{ maxWidth: "900px" }}>
              <p className="section-kicker">Local service business field guide</p>
              <h1 className="system-display" style={{ marginTop: "1.5rem" }}>What a practical local digital foundation is supposed to <span className="copper-text">do.</span></h1>
              <p className="system-copy" style={{ marginTop: "1.65rem", maxWidth: "610px" }}>It should make the business easier to find, understand, trust, and contact. The pieces below explain the local-service pathway without turning the work into a collection of disconnected tactics.</p>
              <div style={{ marginTop: "2rem" }}><Link href="/local-services" className="system-button">View Local Services & Pricing ↗</Link></div>
            </div>
          </div>
        </section>
        <section className="system-section system-section-paper"><div className="container"><div className="value-grid">{[["01", "Website", "A fast, clear mobile experience that explains the business and gives people a direct path to call, request service, or book."], ["02", "Google Presence", "A complete, accurate Business Profile with useful services, fresh activity, photographs, reviews, and the right local signals."], ["03", "Search Visibility", "Pages and information built around actual services and local search intent, not generic keyword stuffing."], ["04", "Demand", "Paid campaigns and landing paths for businesses that need qualified leads while longer-term visibility develops."], ["05", "Reputation", "Reviews earned and managed through a consistent process that reinforces credibility."], ["06", "Reporting", "Clear visibility into calls, inquiries, rankings, and the next practical action."]].map(([number,title,copy]) => <article className="value-cell" key={number}><span className="value-number">{number}</span><h2 className="value-title">{title}</h2><p className="value-copy">{copy}</p></article>)}</div></div></section>
        <section className="system-cta"><div className="container"><div style={{ maxWidth: "740px" }}><p className="section-kicker">The local-service pathway</p><h2 className="system-headline" style={{ marginTop: "1.25rem" }}>Clear scope, published pricing, and an honest starting point.</h2><p className="system-copy" style={{ marginTop: "1.5rem", maxWidth: "570px" }}>For established local businesses, the Local Service Businesses page contains the current plans and the digital work included in each.</p><div style={{ marginTop: "2rem" }}><Link href="/local-services" className="system-button">View Local Services & Pricing ↗</Link></div></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
