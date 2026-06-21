import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export type ContactService = {
  title: string;
};

export type ContactProps = {
  services: ContactService[];
};

export default function Contact({ services }: ContactProps) {
  return (
    <section
      id="contact"
      className="reveal reveal-delay-800 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
            Book your visit to <span className="ember-grad-text">Denta</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tell us a little about you and our front desk will reach out within the hour to confirm
            your appointment.
          </p>
          <ul className="mt-10 space-y-3">
            {[
              { Icon: MapPin, text: "24 Carrer del Pi, Barcelona, Spain" },
              { Icon: Phone, text: "+34 932 000 121" },
              { Icon: Mail, text: "hello@denta.care" },
              { Icon: Clock, text: "Mon–Sat · 09:00 – 19:00" },
            ].map(({ Icon, text }, i) => (
              <li
                key={text}
                className={`reveal reveal-delay-${(i + 1) * 100} flex items-center gap-3 rounded-2xl border border-border bg-card-gradient px-4 py-3 text-sm`}
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
          className="reveal reveal-delay-500 rounded-3xl border border-border bg-card-gradient p-6 shadow-card sm:p-8"
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
