import { Star, Clock, Stethoscope } from "lucide-react";

const badges = [
  { icon: Star, label: "4.0★ Google Rating" },
  { icon: Clock, label: "24/7 Available" },
  { icon: Stethoscope, label: "Experienced Surgeon" },
];

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-32 bg-background">
      <div className="container-page grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[200px] sm:max-w-[260px] lg:max-w-xs">
            <div className="absolute -inset-3 bg-gradient-teal rounded-3xl opacity-15 blur-xl" />
            <div className="relative rounded-3xl p-1.5 sm:p-2 bg-gradient-teal shadow-lift">
              <div className="rounded-[1.35rem] aspect-[4/5] bg-gradient-to-br from-secondary via-background to-accent-soft grid place-items-center relative overflow-hidden">
                <svg viewBox="0 0 120 160" className="w-1/2 sm:w-3/5 text-primary/30" fill="currentColor">
                  <circle cx="60" cy="45" r="22" />
                  <path d="M20 150c0-25 18-44 40-44s40 19 40 44z" />
                </svg>
                <span className="absolute bottom-3 sm:bottom-4 left-4 right-4 text-center text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70">
                  Dr. Mahendra Reddy
                </span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-card rounded-xl sm:rounded-2xl shadow-card px-3 py-2 sm:px-4 sm:py-2.5 border border-border/60">
              <div className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-primary">15+</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Years Exp.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 text-center lg:text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-bold">About the Doctor</span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold text-primary leading-tight">
            Precision surgery, <br className="hidden sm:block" /> with a human touch.
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-foreground leading-relaxed">
            Dr. Mahendra Reddy is a specialist Gastrointestinal Surgeon with extensive experience in advanced GI procedures. Known for compassionate care and precision surgery, he leads Life Line Hospital with a commitment to outcomes that change lives.
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-muted-foreground leading-relaxed">
            From routine endoscopy to complex laparoscopic and colorectal procedures, every patient receives a personalised treatment plan grounded in evidence and empathy.
          </p>

          {/* Badges - horizontal scroll on mobile */}
          <div className="mt-6 sm:mt-8 -mx-4 sm:mx-0 px-4 sm:px-0 flex sm:flex-wrap gap-2.5 sm:gap-3 overflow-x-auto sm:overflow-visible snap-x pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-center lg:justify-start">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="snap-start shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-semibold border border-border/60 whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
