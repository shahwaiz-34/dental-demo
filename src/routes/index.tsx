import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Stethoscope,
  Sparkles,
  Bone,
  Activity,
  Smile,
  Gem,
  ShieldCheck,
  Cpu,
  Wallet,
  Phone,
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import heroImplant from "@/assets/hero-implant.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denta — Modern Care For A Perfect Smile" },
      {
        name: "description",
        content:
          "Advanced dental treatments and personalized care for your family. Implants, whitening, orthodontics, and emergency care in Barcelona.",
      },
      { property: "og:title", content: "Denta — Modern Care For A Perfect Smile" },
      {
        property: "og:description",
        content: "Advanced dental treatments and personalized care for your family.",
      },
    ],
  }),
  component: Landing,
});

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Routine check-ups, cleanings, and family dental care." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening that brightens up to 8 shades." },
  { icon: Bone, title: "Dental Implants", desc: "Titanium implants that restore function and confidence." },
  { icon: Activity, title: "Root Canal", desc: "Pain-free endodontic therapy with modern microscopy." },
  { icon: Smile, title: "Orthodontics", desc: "Clear aligners and braces for every age and budget." },
  { icon: Gem, title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers." },
];

const reasons = [
  { icon: ShieldCheck, title: "Experienced Doctors", desc: "Board-certified specialists with 10+ years of practice." },
  { icon: Cpu, title: "Latest Technology", desc: "Digital scans, 3D imaging, and laser dentistry." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent rates and flexible payment plans." },
  { icon: Phone, title: "Emergency Support", desc: "24/7 hotline for urgent dental emergencies." },
];

const doctors = [
  { img: doc1, name: "Dr. Clara Collins", role: "Implantologist", years: "12 yrs" },
  { img: doc2, name: "Dr. Mason Reid", role: "Orthodontist", years: "9 yrs" },
  { img: doc3, name: "Dr. Aiko Tanaka", role: "Cosmetic Dentist", years: "8 yrs" },
  { img: doc4, name: "Dr. Henry Vance", role: "Endodontist", years: "20 yrs" },
];

const testimonials = [
  { name: "Sofia M.", role: "Implant patient", text: "The team made my implant procedure feel effortless. My smile has never looked better.", rating: 5 },
  { name: "Liam R.", role: "Whitening patient", text: "Modern, warm, and remarkably gentle. The whitening results blew me away.", rating: 5 },
  { name: "Priya N.", role: "Family patient", text: "I finally found a dentist my kids actually look forward to visiting.", rating: 5 },
];

const stats = [
  { value: "12K+", label: "Happy Patients" },
  { value: "18", label: "Years Experience" },
  { value: "26K+", label: "Treatments Completed" },
  { value: "24", label: "Expert Dentists" },
];

const faqs = [
  { q: "Do you accept dental insurance?", a: "Yes, we work with most major providers and offer in-house financing for uncovered procedures." },
  { q: "How often should I visit?", a: "We recommend a check-up and cleaning every six months for most patients." },
  { q: "Are implants painful?", a: "Procedures are performed under local anesthesia or sedation. Most patients report minimal discomfort." },
  { q: "Do you treat children?", a: "Absolutely — our pediatric team makes every visit fun, calm, and educational." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Logo ---------------- */
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary shadow-glow">
        <span className="grid grid-cols-2 gap-[3px]">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight">Denta</span>
    </a>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#doctors", label: "Doctors" },
    { href: "#why", label: "Why Us" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <ul className="hidden items-center gap-9 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 md:inline-flex"
        >
          Book Visit <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <ul className="space-y-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-xl px-3 py-3 text-sm hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-2 block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book Visit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="px-5 pt-10 pb-6 lg:px-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Premium Dental Studio
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Artistry in every <span className="ember-grad-text">smile.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              From preventive care to complex restorations, we provide a comprehensive
              approach to your dental health using cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card-gradient p-4 shadow-elegant">
              <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <img
                src={heroImplant}
                alt="Modern dental implant rendering"
                width={1024}
                height={1024}
                className="relative h-[360px] w-full rounded-2xl object-cover sm:h-[460px]"
              />
              <div className="relative mt-4 flex items-center justify-between px-2 py-1">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Featured</div>
                  <div className="mt-1 font-display text-lg font-bold">Titanium Implants</div>
                </div>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  99% success
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats (bento) ---------------- */
function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="col-span-2 rounded-3xl border border-border bg-card-gradient p-7 shadow-card">
          <h3 className="font-display text-2xl font-bold">Why patients choose Denta</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A team of highly skilled dentists using the latest medical advancements to
            ensure your comfort and care at every step.
          </p>
        </div>
        <div className="rounded-3xl bg-primary p-7 text-center shadow-glow">
          <div className="font-display text-4xl font-black text-white">15+</div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
            Years Experience
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-secondary/40 p-7 text-center shadow-card">
          <div className="font-display text-4xl font-black">4.9</div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trust Score
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section Header ---------------- */
function SectionHeader({
  kicker,
  title,
  sub,
  cta,
}: {
  kicker: string;
  title: string;
  sub?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{kicker}</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">{title}</h2>
        {sub && <p className="mt-4 text-sm text-muted-foreground sm:text-base">{sub}</p>}
      </div>
      {cta && (
        <a
          href={cta.href}
          className="group inline-flex items-center gap-2 self-start text-sm font-bold text-primary md:self-end"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}

/* ---------------- Services (bento) ---------------- */
function Services() {
  const [first, second, third, fourth, fifth, sixth] = services;
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeader
        kicker="Our Services"
        title="Premium treatments, tailored to every smile"
        sub="State-of-the-art treatments tailored to your unique needs."
        cta={{ href: "#contact", label: "Book a consult" }}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {/* Hero service card */}
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-card-gradient p-8 md:col-span-2 md:p-10">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <first.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-7 font-display text-2xl font-bold sm:text-3xl">{first.title}</h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{first.desc}</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <ServiceCard s={second} />
        <ServiceCard s={third} />
        <ServiceCard s={fourth} />

        {/* CTA banner spanning 2 */}
        <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl bg-primary p-8 shadow-glow md:col-span-2 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready for a dental consultation?
            </h3>
            <p className="mt-2 max-w-md text-white/85">
              Join 12,000+ happy patients who found their perfect smile at Denta.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-background shadow-lg"
          >
            Schedule Now <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
        </div>

        <ServiceCard s={fifth} />
        <ServiceCard s={sixth} />
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  return (
    <div className="group rounded-3xl border border-border bg-card-gradient p-7 transition-all hover:-translate-y-1 hover:border-primary/50">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <s.icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
    </div>
  );
}

/* ---------------- Why Choose Us ---------------- */
function WhyChooseUs() {
  return (
    <section id="why" className="border-y border-border bg-surface/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Why Choose Us"
          title="A practice built on trust, comfort and craft"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group rounded-3xl border border-border p-7 transition-all hover:-translate-y-1 hover:border-primary/50 ${
                i === 0 ? "bg-primary text-white shadow-glow" : "bg-card-gradient"
              }`}
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl ${
                  i === 0 ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                }`}
              >
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{r.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-muted-foreground"}`}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Doctors ---------------- */
function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeader
        kicker="Meet the Team"
        title="Specialists who genuinely care"
        sub="A team of dedicated experts committed to excellence."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((d) => (
          <article
            key={d.name}
            className="group overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                width={640}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                {d.years}
              </span>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold">{d.name}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {d.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const go = (n: number) => setI((n + total) % total);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setI((p) => (p + 1) % total), 5500);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section
      className="border-y border-border bg-surface/30 py-20 lg:py-28"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeader kicker="Patient Stories" title="Loved by thousands of smiles" />
        <div
          className="mt-12 overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            else if (e.key === "ArrowLeft") prev();
          }}
          tabIndex={0}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${total}`}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
            aria-live={paused ? "polite" : "off"}
          >
            {testimonials.map((t, k) => (
              <div key={k} className="w-full shrink-0 p-8 sm:p-14" aria-hidden={k !== i}>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl font-bold leading-snug text-balance sm:text-3xl">
                  "{t.text}"
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <div className="font-display text-base font-bold">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5" role="tablist" aria-label="Select testimonial">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => go(k)}
                role="tab"
                aria-selected={k === i}
                aria-label={`Go to testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  k === i ? "w-6 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-glow transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card-gradient p-6 sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-black ember-grad-text sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeader kicker="FAQ" title="Questions, answered" />
      <div className="mt-12 space-y-3">
        {faqs.map((f, k) => {
          const isOpen = open === k;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-border bg-card-gradient transition-colors hover:border-primary/40"
            >
              <button
                onClick={() => setOpen(isOpen ? null : k)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg font-bold">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
            Book your visit to <span className="ember-grad-text">Denta</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tell us a little about you and our front desk will reach out within the hour
            to confirm your appointment.
          </p>
          <ul className="mt-10 space-y-3">
            {[
              { Icon: MapPin, text: "24 Carrer del Pi, Barcelona, Spain" },
              { Icon: Phone, text: "+34 932 000 121" },
              { Icon: Mail, text: "hello@denta.care" },
              { Icon: Clock, text: "Mon–Sat · 09:00 – 19:00" },
            ].map(({ Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card-gradient px-4 py-3 text-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll be in touch shortly.");
          }}
          className="rounded-3xl border border-border bg-card-gradient p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jane Doe" />
            <Field label="Phone" name="phone" placeholder="+34 ..." />
          </div>
          <div className="mt-4">
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Service
            </label>
            <select className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary">
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Tell us what brings you in..."
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110"
          >
            Request Appointment <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Redefining the dental experience through clinical excellence and a
            human-centric approach to modern dentistry.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, k) => (
              <a
                key={k}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.22em] text-foreground/80">
            Clinic
          </h4>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition-colors hover:text-primary">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.22em] text-foreground/80">
            Working Hours
          </h4>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>Mon – Fri · 09:00 – 19:00</li>
            <li>Saturday · 10:00 – 16:00</li>
            <li>Sunday · Closed</li>
            <li className="text-primary">Emergency · 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Denta Dental Group. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
