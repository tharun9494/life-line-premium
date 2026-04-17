import { Siren, Cpu, UserCog, HeartHandshake } from "lucide-react";

const rows = [
  { icon: Siren, title: "24-Hour Emergency Services", desc: "Our doors never close. Critical GI emergencies handled with rapid response and expert intervention, day or night." },
  { icon: Cpu, title: "State-of-the-Art Equipment", desc: "Modern endoscopy suites, advanced laparoscopic tools and diagnostic technology for accurate, minimally invasive care." },
  { icon: UserCog, title: "Experienced Medical Staff", desc: "A dedicated team of nurses, technicians and specialists supporting Dr. Reddy at every step of your journey." },
  { icon: HeartHandshake, title: "Personalized Patient Care", desc: "Treatment plans built around you — your history, your goals, your comfort. Every patient matters." },
];

export const WhyChoose = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">Why Choose Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Care that <em className="not-italic text-accent">earns</em> trust.
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-base text-muted-foreground leading-relaxed">
              At Life Line Hospital, every detail is engineered around patient outcomes — from the moment you call to the day you walk out, healed.
            </p>
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-gold text-accent-foreground shadow-soft">
              <span className="text-2xl font-display font-bold">15+</span>
              <span className="text-sm font-semibold">Years serving Tirupati</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {rows.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group flex gap-4 sm:gap-6 items-start p-5 sm:p-7 rounded-2xl border border-border/60 transition-all duration-300 hover:shadow-card hover:border-primary/30 ${
                  i % 2 === 0 ? "bg-secondary/40" : "bg-card"
                }`}
              >
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-teal text-primary-foreground grid place-items-center shadow-soft group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.7} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-xl font-display font-semibold text-primary">{title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <span className="hidden sm:block text-3xl font-display text-accent/40 font-bold">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
