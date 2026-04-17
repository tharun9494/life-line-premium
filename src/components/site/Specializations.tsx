import { Scissors, Activity, HeartPulse, Microscope, Stethoscope, Siren } from "lucide-react";

const items = [
  { icon: Scissors, title: "Gastrointestinal Surgery", desc: "Advanced surgical interventions for stomach, intestine and digestive tract conditions." },
  { icon: Activity, title: "Laparoscopic Procedures", desc: "Minimally invasive surgery for faster recovery and minimal scarring." },
  { icon: HeartPulse, title: "Digestive Disorder Treatment", desc: "Comprehensive care for IBS, GERD, ulcers and chronic digestive conditions." },
  { icon: Stethoscope, title: "Colorectal Surgery", desc: "Specialised surgical care for colon, rectum and anal conditions." },
  { icon: Microscope, title: "Endoscopy & Diagnostics", desc: "Precise diagnostic procedures with state-of-the-art endoscopic equipment." },
  { icon: Siren, title: "Emergency GI Care", desc: "Round-the-clock emergency response for acute gastrointestinal cases." },
];

export const Specializations = () => {
  return (
    <section id="specializations" className="py-24 lg:py-32 bg-secondary/60 relative">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">Our Expertise</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary leading-tight">Specialized Care, Tailored to You</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Comprehensive gastrointestinal and surgical services delivered with precision and care.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-lift bg-card rounded-2xl p-7 border border-border/60 group">
              <div className="w-14 h-14 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-gradient-teal group-hover:text-primary-foreground transition-all duration-300">
                <Icon className="w-7 h-7" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-5 inline-flex items-center text-sm font-semibold text-accent">
                Learn more
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
