import { useEffect, useRef } from "react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";

// Scroll-reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const problems = [
  {
    icon: "🔗",
    title: "Fragmented Patient Journey",
    desc: "Patients navigate 4–8 separate websites to find a physician, verify a location, watch a video, or book an appointment. Every extra click is a lost patient.",
  },
  {
    icon: "📉",
    title: "Outdated SEO & AI Visibility",
    desc: "Older template sites built before 2020 lack structured data, mobile performance, and the content signals that Google and AI search engines now require.",
  },
  {
    icon: "🔄",
    title: "Duplicate Maintenance Burden",
    desc: "The same phone numbers, locations, and physician facts must be updated across multiple independently managed properties — creating errors and inconsistency.",
  },
  {
    icon: "🏥",
    title: "No Unified Practice Identity",
    desc: "When each physician's site looks and feels different, the group loses the authority and trust that comes from a cohesive, professional brand presence.",
  },
];

const physicianFeatures = [
  { title: "Detailed Profile & Credentials", desc: "Training, board certifications, hospital affiliations, clinical focus, and professional biography — all in one authoritative place." },
  { title: "Specialty & Treatment Content", desc: "Condition-specific pages written for patients, optimized for Google and AI search, linked to the physician's expertise." },
  { title: "Video Library", desc: "Physician explainer videos, patient education, and media appearances — organized and discoverable, not scattered across YouTube." },
  { title: "Patient Resources Hub", desc: "Approved forms, post-operative guides, visit preparation, and FAQs — reducing front-desk calls and improving patient readiness." },
  { title: "Publications & Media", desc: "Research, speaking engagements, press coverage, and awards — building the physician's authority and differentiating their expertise." },
  { title: "Individual Appointment Path", desc: "Direct routing to the correct phone number, online scheduler, or approved request form — no dead ends, no confusion." },
];

const phases = [
  {
    number: "01",
    title: "Digital Authority & Migration Blueprint",
    color: "from-fuchsia-500 to-purple-500",
    items: [
      "Domain and access inventory — what the group owns vs. what each physician owns",
      "Website and content audit — what to keep, what to retire",
      "Provider and location data review — accurate facts for the new platform",
      "Site map and physician-center plan — agreed structure before a single line of code",
      "Patient-pathway review — clear routing for calls, forms, and scheduling",
      "Transition plan — physician-by-physician redirect, landing page, or separate site decision",
    ],
  },
  {
    number: "02",
    title: "Website Design & Build",
    color: "from-purple-500 to-indigo-500",
    items: [
      "Modern, mobile-first group platform with consistent design language",
      "Complete provider directory with individual physician centers of expertise",
      "Condition and treatment pages built for Google's helpful-content standard",
      "Location, insurance, and appointment pages — centrally managed",
      "Structured data markup for AI search, Google Knowledge Panels, and Maps",
      "Performance-optimized HTML — fast load times that Google rewards",
    ],
  },
  {
    number: "03",
    title: "Content Transition & Launch",
    color: "from-indigo-500 to-blue-500",
    items: [
      "Selective migration of the strongest existing assets — bios, videos, resources",
      "Retirement of thin, outdated, or duplicate content",
      "Permanent redirect setup for physician-owned domains (with owner approval)",
      "Google Search Console verification and crawl monitoring",
      "Google Business Profile updates for each location and physician",
      "Submission to key healthcare directories — Healthgrades, Zocdoc, Vitals, WebMD",
    ],
  },
  {
    number: "04",
    title: "Ongoing Visibility & Content Support",
    color: "from-blue-500 to-cyan-500",
    items: [
      "Monthly review of public information accuracy across all platforms",
      "Local profile and directory maintenance — citations, reviews, Q&A",
      "Publishing approved educational content and physician updates",
      "Monitoring of appointment pathways, call tracking, and form submissions",
      "Support for physicians creating videos, articles, or new specialty content",
      "Quarterly performance reporting — traffic, rankings, patient inquiries",
    ],
  },
];

const domainOptions = [
  {
    option: "Option A",
    label: "Direct to Group Profile",
    desc: "Once content is moved, the physician's personal domain permanently redirects to their group-site center. Best for physicians who don't want to maintain a separate site.",
    recommended: true,
  },
  {
    option: "Option B",
    label: "Simple Personal Landing Page",
    desc: "The personal domain stays active with a concise biography and a prominent link to the physician's group-site center. Good for physicians who value their personal web address.",
    recommended: false,
  },
  {
    option: "Option C",
    label: "Maintain Separate Full Site",
    desc: "The physician continues managing a distinct personal site with separate, current content and clear group affiliation. Appropriate only when there is a genuine independent brand.",
    recommended: false,
  },
];

const benefits = [
  { patient: "One clear place to find care, providers, locations, and appointments", practice: "A single platform for managing shared facts and patient pathways" },
  { patient: "Consistent, modern experience across all physicians", practice: "Less duplicate maintenance and fewer outdated or conflicting pages" },
  { patient: "Easy access to physician-specific education and videos", practice: "Stronger platform for sharing expertise and differentiating services" },
  { patient: "Fewer confusing links between unrelated-looking websites", practice: "Clearer practice identity and more efficient marketing investment" },
  { patient: "More reliable contact and scheduling routes", practice: "Better visibility into calls, forms, referrals, and appointment requests" },
];

export default function EnterpriseServices() {
  return (
    <div className="min-h-screen bg-[#FFFEF9] text-[#1E1040]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full opacity-25 blur-[120px]"
            style={{ background: "radial-gradient(circle, #D946EF 0%, transparent 70%)" }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
            style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-200 bg-white/60 backdrop-blur-sm text-sm font-semibold text-fuchsia-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
            Enterprise Digital Transformation
          </div>

          <h1 className="font-syne font-black text-5xl md:text-7xl leading-[1.05] mb-6 text-[#1E1040]">
            One Platform.<br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Every Physician.
            </span><br />
            Clearer Patient Access.
          </h1>

          <p className="text-xl md:text-2xl text-[#4A4060] max-w-3xl leading-relaxed mb-10 font-plus-jakarta">
            Physician groups and multi-location practices are losing patients every day to fragmented, outdated web presences. We rebuild the entire digital ecosystem — one authoritative platform, individual physician centers, and the structured data that Google and AI search now require.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl font-bold text-lg text-white"
                style={{ background: "linear-gradient(135deg, #D946EF, #6366F1)" }}>
                Start the Conversation →
              </button>
            </Link>
            <a href="#phases" className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#1E1040]/20 text-[#1E1040] hover:border-fuchsia-400 transition-colors">
              See the 4-Phase Plan ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 px-6 bg-[#F7F5FF]">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-fuchsia-600 font-bold tracking-widest text-sm uppercase mb-3">The Problem We Solve</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-[#1E1040] mb-4">
                Why Fragmented Web Presences<br />Are Costing You Patients
              </h2>
              <p className="text-lg text-[#4A4060] max-w-2xl mx-auto font-plus-jakarta">
                Most physician groups built their digital presence one site at a time, over many years, with different vendors and different standards. The result is a maze that patients can't navigate — and that Google can't properly index.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 border border-purple-100 hover:border-fuchsia-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-syne font-bold text-xl text-[#1E1040] mb-3">{p.title}</h3>
                  <p className="text-[#4A4060] leading-relaxed font-plus-jakarta">{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3">Before vs. After</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-[#1E1040]">
                What Changes When You Centralize
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
              <div className="grid grid-cols-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white">
                <div className="p-5 font-syne font-bold text-lg border-r border-white/20">Current Situation</div>
                <div className="p-5 font-syne font-bold text-lg">After Transformation</div>
              </div>
              {[
                ["Group and physician information distributed across several websites", "One clear, centrally maintained group platform"],
                ["Website quality and updates vary by physician", "Consistent patient experience, design standard, and content-review process"],
                ["Dated layouts and outdated SEO practices", "Modern, mobile-friendly pages with clear titles, useful content, and direct patient pathways"],
                ["Videos, expertise, and resources spread across domains", "Physician-specific centers that preserve and showcase those assets"],
                ["Patient contact information and CTAs can be inconsistent", "Accurate, centrally managed location, appointment, and provider information"],
              ].map(([before, after], i) => (
                <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-[#FAFAFA]" : "bg-white"}`}>
                  <div className="p-5 text-[#4A4060] border-r border-purple-50 font-plus-jakarta text-sm leading-relaxed flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>{before}
                  </div>
                  <div className="p-5 text-[#1E1040] font-plus-jakarta text-sm leading-relaxed flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>{after}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PHYSICIAN CENTER FEATURES ── */}
      <section className="py-24 px-6 bg-[#1E1040] relative overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #D946EF 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-fuchsia-400 font-bold tracking-widest text-sm uppercase mb-3">Individual Physician Centers</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-white mb-4">
                Every Physician Gets Their Own<br />
                <span className="bg-gradient-to-r from-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                  Center of Expertise
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto font-plus-jakarta">
                The goal is not to eliminate physician individuality. It is to give every physician a stronger, more useful presence within a single, authoritative practice platform.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicianFeatures.map((f, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-fuchsia-400/40 transition-all duration-300 h-full">
                  <div className="w-10 h-1 rounded-full mb-5"
                    style={{ background: "linear-gradient(90deg, #D946EF, #6366F1)" }} />
                  <h3 className="font-syne font-bold text-lg text-white mb-3">{f.title}</h3>
                  <p className="text-white/65 leading-relaxed font-plus-jakarta text-sm">{f.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-PHASE PLAN ── */}
      <section id="phases" className="py-24 px-6 bg-[#FFFEF9]">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-fuchsia-600 font-bold tracking-widest text-sm uppercase mb-3">Our Approach</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-[#1E1040] mb-4">
                A Practical, 4-Phase<br />Transformation Plan
              </h2>
              <p className="text-lg text-[#4A4060] max-w-2xl mx-auto font-plus-jakarta">
                We don't rebuild everything at once. We start with a clear blueprint, build on a solid foundation, and migrate carefully — so patients are never left without a clear path to your practice.
              </p>
            </div>
          </RevealSection>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-purple-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className={`bg-gradient-to-r ${phase.color} p-6 flex items-center gap-5`}>
                    <span className="font-syne font-black text-5xl text-white/30 leading-none">{phase.number}</span>
                    <h3 className="font-syne font-black text-2xl text-white">{phase.title}</h3>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-3">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3 text-sm text-[#4A4060] font-plus-jakarta">
                        <span className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs text-white font-bold"
                          style={{ background: "linear-gradient(135deg, #D946EF, #6366F1)" }}>
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAIN OPTIONS ── */}
      <section className="py-24 px-6 bg-[#F7F5FF]">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3">Respecting Physician-Owned Domains</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-[#1E1040] mb-4">
                Every Physician Chooses<br />Their Own Path
              </h2>
              <p className="text-lg text-[#4A4060] max-w-2xl mx-auto font-plus-jakarta">
                No domain is changed, redirected, or transferred without the owner's explicit approval. Each physician selects the level of participation that best fits their preference.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {domainOptions.map((opt, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className={`relative bg-white rounded-2xl p-7 border-2 h-full transition-all duration-300 ${opt.recommended ? "border-fuchsia-400 shadow-lg shadow-fuchsia-100" : "border-purple-100 hover:border-purple-300"}`}>
                  {opt.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #D946EF, #6366F1)" }}>
                      Recommended
                    </div>
                  )}
                  <div className="text-xs font-bold tracking-widest text-fuchsia-500 uppercase mb-2">{opt.option}</div>
                  <h3 className="font-syne font-bold text-xl text-[#1E1040] mb-4">{opt.label}</h3>
                  <p className="text-[#4A4060] text-sm leading-relaxed font-plus-jakarta">{opt.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT & PRACTICE BENEFITS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-fuchsia-600 font-bold tracking-widest text-sm uppercase mb-3">Why It Matters</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-[#1E1040]">
                Better for Patients.<br />Better for the Practice.
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
              <div className="grid grid-cols-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white">
                <div className="p-5 font-syne font-bold text-lg border-r border-white/20">Patient Benefit</div>
                <div className="p-5 font-syne font-bold text-lg">Practice Benefit</div>
              </div>
              {benefits.map((b, i) => (
                <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-[#FAFAFA]" : "bg-white"}`}>
                  <div className="p-5 text-[#4A4060] border-r border-purple-50 font-plus-jakarta text-sm leading-relaxed flex items-start gap-3">
                    <span className="text-fuchsia-500 mt-0.5 shrink-0">★</span>{b.patient}
                  </div>
                  <div className="p-5 text-[#1E1040] font-plus-jakarta text-sm leading-relaxed flex items-start gap-3">
                    <span className="text-indigo-500 mt-0.5 shrink-0">★</span>{b.practice}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-24 px-6 bg-[#F7F5FF]">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3">Who This Is For</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-[#1E1040] mb-4">
                Built for Complex,<br />Multi-Provider Organizations
              </h2>
              <p className="text-lg text-[#4A4060] max-w-2xl mx-auto font-plus-jakarta">
                While our work with physician groups is the clearest example, this approach applies to any organization managing multiple professionals, locations, or service lines under one brand.
              </p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏥", label: "Physician Groups & Medical Practices" },
              { icon: "⚖️", label: "Law Firms with Multiple Attorneys" },
              { icon: "🦷", label: "Dental & Specialty Health Groups" },
              { icon: "🏢", label: "Multi-Location Service Businesses" },
              { icon: "🎓", label: "Educational & Training Organizations" },
              { icon: "💼", label: "Professional Services Firms" },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-purple-100 hover:border-fuchsia-300 hover:shadow-md transition-all duration-300 flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="font-syne font-bold text-[#1E1040]">{item.label}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE & AI SEARCH ── */}
      <section className="py-24 px-6 bg-[#1E1040] relative overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-orange-400 font-bold tracking-widest text-sm uppercase mb-3">The Search Landscape Has Changed</p>
              <h2 className="font-syne font-black text-4xl md:text-5xl text-white mb-4">
                Google and AI Search Now Require<br />
                <span className="bg-gradient-to-r from-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                  Structured, Authoritative Content
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto font-plus-jakarta">
                The old approach of having multiple thin sites with duplicate content is actively penalized. Google's helpful-content standard and AI-powered search both reward practices that demonstrate clear expertise, accurate information, and a trustworthy patient experience.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Google's Helpful Content Standard",
                points: [
                  "People-first content that genuinely helps patients",
                  "Clear demonstration of expertise, authoritativeness, and trust (E-E-A-T)",
                  "Fast, mobile-friendly page experience",
                  "Accurate, consistent information across all platforms",
                ],
              },
              {
                title: "AI Search & Knowledge Panels",
                points: [
                  "Structured data markup (Schema.org) for physicians, locations, and services",
                  "Google Business Profiles optimized for each location and provider",
                  "Consistent NAP (Name, Address, Phone) across all directories",
                  "Content that directly answers the questions patients are asking AI",
                ],
              },
            ].map((card, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                  <h3 className="font-syne font-bold text-xl text-white mb-5">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/70 font-plus-jakarta text-sm">
                        <span className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs text-white font-bold"
                          style={{ background: "linear-gradient(135deg, #D946EF, #F97316)" }}>
                          ✓
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#FFFEF9]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{ background: "radial-gradient(circle, #D946EF 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
            style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <p className="text-fuchsia-600 font-bold tracking-widest text-sm uppercase mb-4">Ready to Start?</p>
            <h2 className="font-syne font-black text-4xl md:text-6xl text-[#1E1040] mb-6 leading-tight">
              Let's Build Your<br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Unified Digital Platform
              </span>
            </h2>
            <p className="text-xl text-[#4A4060] mb-10 leading-relaxed font-plus-jakarta">
              Every project is scoped individually. We start with a Digital Authority and Migration Blueprint — a practical planning engagement that gives you a clear picture of what you own, what needs to change, and exactly what it will take to get there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-10 py-5 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-fuchsia-200 transition-shadow"
                  style={{ background: "linear-gradient(135deg, #D946EF, #6366F1)" }}>
                  Request a Discovery Call →
                </button>
              </Link>
              <Link href="/services">
                <button className="px-10 py-5 rounded-xl font-bold text-lg border-2 border-[#1E1040]/20 text-[#1E1040] hover:border-fuchsia-400 transition-colors">
                  View All Services
                </button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#4A4060]/60 font-plus-jakarta">
              Pricing is determined by project scope. No setup fees. No long-term contracts required.
            </p>
          </RevealSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
