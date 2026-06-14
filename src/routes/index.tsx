import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
          "Advanced dental treatments and personalized care for your family. Implants, whitening, orthodontics, and emergency care.",
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
  { icon: Stethoscope, title: "Experienced Doctors", desc: "Board-certified specialists with 10+ years of practice." },
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
  { name: "Sofia M.", text: "The team made my implant procedure feel effortless. My smile has never looked better.", rating: 5 },
  { name: "Liam R.", text: "Modern, warm, and remarkably gentle. The whitening results blew me away.", rating: 5 },
  { name: "Priya N.", text: "I finally found a dentist my kids actually look forward to visiting.", rating: 5 },
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
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Stats />
      <FAQ />
      <Contact />
      <Footer />
      <AppointmentModalMount />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-primary shadow-glow">
        <span className="grid grid-cols-2 gap-[2px]">
          <span className="h-1.5 w-1.5 bg-background" />
          <span className="h-1.5 w-1.5 bg-background/70" />
          <span className="h-1.5 w-1.5 bg-background/70" />
          <span className="h-1.5 w-1.5 bg-background" />
        </span>
      </span>
      <span className="font-display text-2xl tracking-tight">Denta</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#doctors", label: "Doctors" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="flex items-center gap-2 transition-colors hover:text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-surface md:inline-block"
        >
          Health Check
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
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
                  className="block rounded-md px-3 py-3 text-sm hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-2 block rounded-full bg-gradient-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Health Check
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
    <section className="relative px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative overflow-hidden rounded-3xl bg-hero shadow-elegant">
        <div className="grid gap-6 px-6 pb-10 pt-8 lg:grid-cols-12 lg:gap-4 lg:px-12 lg:pb-16 lg:pt-14">
          {/* left copy */}
          <div className="lg:col-span-3 lg:pr-4">
            <p className="text-sm leading-relaxed text-accent">
              From preventive care to complex restorations, a comprehensive approach to your dental health.
            </p>
            <div className="mt-12 hidden lg:block">
              <h1 className="font-display text-6xl leading-[0.95] text-accent/80">
                Modern<br />Care for
              </h1>
            </div>
          </div>

          {/* center image */}
          <div className="relative order-first lg:order-none lg:col-span-6">
            <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
            <img
              src={heroImplant}
              alt="Modern dental implant rendering"
              width={1024}
              height={1024}
              className="relative mx-auto w-full max-w-md drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* right column: copy + doctor card */}
          <div className="lg:col-span-3">
            <p className="text-sm leading-relaxed text-accent">
              Select from our team of highly skilled and experienced dentists.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/40 bg-card-gradient">
              <div className="relative">
                <img
                  src={doc1}
                  alt="Dr. Clara Collins"
                  width={640}
                  height={800}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-64"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
                  Next ›
                </span>
              </div>
              <div className="px-4 py-3 text-sm font-medium">Clara Collins</div>
            </div>
          </div>
        </div>

        {/* mobile big headline */}
        <div className="px-6 pb-10 lg:hidden">
          <h1 className="font-display text-5xl leading-[0.95] text-balance">
            <span className="text-accent/80">Modern Care for</span>{" "}
            <span className="text-foreground">a Perfect Smile</span>
          </h1>
          <p className="mt-5 text-sm text-accent">
            Providing advanced dental treatments and personalized care for your family.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Book Appointment
            </a>
            <a href="#services" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">
              Learn More
            </a>
          </div>
        </div>

        {/* desktop big headline overlaying lower portion */}
        <div className="hidden px-12 pb-10 lg:block">
          <h1 className="font-display text-7xl leading-[0.95] text-balance">
            <span className="block text-accent/80">a <span className="text-foreground">Perfect</span></span>
            <span className="block text-foreground">Smile</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Book Appointment
            </a>
            <a href="#services" className="rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-surface">
              Learn More
            </a>
          </div>
        </div>

        {/* footer strip */}
        <div className="grid grid-cols-2 gap-4 border-t border-border/40 px-6 py-5 text-xs text-accent lg:grid-cols-4 lg:px-12">
          <div><div className="opacity-70">Best Dentistry</div><div>2025</div></div>
          <div><div className="opacity-70">Barcelona, Spain</div><div>17:17:03 GMT+1</div></div>
          <div className="hidden lg:block" />
          <div className="text-right lg:text-left"><div className="opacity-70">Advanced Dental</div><div>Technologies</div></div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sections ---------------- */
function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-4 font-display text-4xl text-balance sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeader kicker="Our Services" title="Treatments tailored to every smile" sub="A complete suite of preventive, restorative, and cosmetic care under one roof." />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="relative mt-6 font-display text-2xl">{s.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <a href="#contact" className="relative mt-6 inline-flex items-center gap-2 text-sm text-accent">
              Learn more <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader kicker="Why Choose Us" title="A practice built on trust, comfort and craft" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card-gradient p-6">
              <r.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeader kicker="Meet the Team" title="Specialists who genuinely care" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((d) => (
          <article key={d.name} className="group overflow-hidden rounded-2xl border border-border bg-card-gradient">
            <div className="relative overflow-hidden">
              <img src={d.img} alt={d.name} width={640} height={800} loading="lazy" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest text-accent backdrop-blur">
                {d.years}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl">{d.name}</h3>
              <p className="text-sm text-muted-foreground">{d.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const go = (n: number) => setI((n + total) % total);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setI((p) => (p + 1) % total), 5500);
    return () => window.clearInterval(id);
  }, [paused, total]);

  // Swipe support
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
      className="bg-surface/40 py-24"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <SectionHeader kicker="Patient Stories" title="Loved by thousands of smiles" />
        <div
          className="mt-14 overflow-hidden rounded-3xl border border-border bg-card-gradient"
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
              <div key={k} className="w-full shrink-0 p-8 sm:p-12" aria-hidden={k !== i}>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl leading-snug text-balance sm:text-3xl">"{t.text}"</p>
                <p className="mt-6 text-sm text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={prev} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Previous testimonial">
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
                className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${k === i ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
              />
            ))}
          </div>
          <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-6 rounded-3xl border border-border bg-card-gradient p-8 sm:grid-cols-2 sm:p-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl text-accent sm:text-6xl">{s.value}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader kicker="FAQ" title="Questions, answered" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, k) => {
            const isOpen = open === k;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card-gradient">
                <button onClick={() => setOpen(isOpen ? null : k)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left">
                  <span className="font-display text-lg">{f.q}</span>
                  {isOpen ? <Minus className="h-4 w-4 text-accent" /> : <Plus className="h-4 w-4 text-accent" />}
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl text-balance sm:text-5xl">Book your visit to Denta</h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Tell us a little about you and our front desk will reach out within the hour to confirm your appointment.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> 24 Carrer del Pi, Barcelona, Spain</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +34 932 000 121</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> hello@denta.care</li>
            <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-accent" /> Mon–Sat · 09:00 – 19:00</li>
          </ul>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll be in touch shortly.");
          }}
          className="rounded-3xl border border-border bg-card-gradient p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jane Doe" />
            <Field label="Phone" name="phone" placeholder="+34 ..." />
          </div>
          <div className="mt-4">
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
            <select className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary">
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea rows={4} className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us what brings you in..." />
          </div>
          <button type="submit" className="mt-6 w-full rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]">
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Modern dental care with a human touch. Barcelona, Spain.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, k) => (
              <a key={k} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-surface" aria-label="Social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 5).map((s) => <li key={s.title}><a href="#services" className="hover:text-accent">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>24 Carrer del Pi</li>
            <li>Barcelona, Spain</li>
            <li>+34 932 000 121</li>
            <li>hello@denta.care</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Working Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Mon – Fri · 09:00 – 19:00</li>
            <li>Saturday · 10:00 – 16:00</li>
            <li>Sunday · Closed</li>
            <li className="text-accent">Emergency · 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Denta. All rights reserved.
      </div>
    </footer>
  );
}

function AppointmentModalMount() {
  // Reserved for a future appointment modal trigger.
  return null;
}
