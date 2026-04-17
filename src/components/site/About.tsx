import { Star, Clock, Stethoscope } from "lucide-react";

const badges = [
  { icon: Star, label: "4.0★ Google Rating" },
  { icon: Clock, label: "24/7 Available" },
  { icon: Stethoscope, label: "Experienced Surgeon" },
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container-page grid lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-xs sm:max-w-md">
            <div className="absolute -inset-3 bg-gradient-teal rounded-3xl opacity-15 blur-xl" />
            <div className="relative rounded-3xl p-2 bg-gradient-teal shadow-lift">
              <div className="rounded-[1.35rem] aspect-[4/5] bg-gradient-to-br from-secondary via-background to-accent-soft grid place-items-center relative overflow-hidden">
                <svg viewBox="0 0 120 160" className="w-3/5 text-primary/30" fill="currentColor">
                  <circle cx="60" cy="45" r="22" />
                  <path d="M20 150c0-25 18-44 40-44s40 19 40 44z" />
                </svg>
                <span className="absolute bottom-4 left-4 right-4 text-center text-xs uppercase tracking-[0.2em] text-primary/70">
                  Dr. Mahendra Reddy
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-card rounded-2xl shadow-card px-4 py-2.5 sm:px-5 sm:py-3 border border-border/60">
              <div className="text-xl sm:text-2xl font-display font-bold text-primary">15+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">About the Doctor</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Precision surgery, <br className="hidden sm:block" /> with a human touch.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dr. Mahendra Reddy is a specialist Gastrointestinal Surgeon with extensive experience in advanced GI procedures. Known for compassionate care and precision surgery, he leads Life Line Hospital with a commitment to outcomes that change lives.
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            From routine endoscopy to complex laparoscopic and colorectal procedures, every patient receives a personalised treatment plan grounded in evidence and empathy.
          </p>

          {/* Badges - horizontal scroll on mobile */}
          <div className="mt-7 sm:mt-8 -mx-5 sm:mx-0 px-5 sm:px-0 flex sm:flex-wrap gap-3 overflow-x-auto sm:overflow-visible snap-x pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="snap-start shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold border border-border/60 whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-accent shrink-0" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
