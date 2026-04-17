import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck, ShieldCheck, Clock, Award } from "lucide-react";
import { WHATSAPP_LINK, HOSPITAL_PHONE_TEL } from "@/lib/contact";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-gradient-hero overflow-hidden">
      {/* Subtle medical cross motifs */}
      <div className="absolute inset-0 medical-bg pointer-events-none" />
      <div className="absolute top-32 right-12 opacity-[0.06] hidden md:block">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="hsl(var(--primary))">
          <rect x="40" y="10" width="20" height="80" rx="4" />
          <rect x="10" y="40" width="80" height="20" rx="4" />
        </svg>
      </div>

      <div className="container-page relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-accent-soft text-accent text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Trusted GI Care · Tirupati
          </span>
          <h1 className="mt-5 sm:mt-6 text-[2rem] leading-[1.08] sm:text-5xl lg:text-7xl font-bold text-primary break-words">
            Expert Care for Your <em className="text-accent not-italic font-semibold">Digestive Health</em>
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Led by <span className="text-primary font-semibold">Dr. Mahendra Reddy</span> — Gastrointestinal Surgeon, Tirupati. Compassionate care, precision surgery.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 shadow-card hover:shadow-lift transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5 mr-1" /> Book on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              <a href={HOSPITAL_PHONE_TEL}><Phone className="w-5 h-5 mr-1" /> Call Now</a>
            </Button>
          </div>

          {/* Trust badges - horizontal scroll on mobile, grid on larger */}
          <div className="mt-8 sm:mt-10 -mx-5 sm:mx-0 px-5 sm:px-0 flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 max-w-lg overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { icon: Award, label: "4.0★ Google" },
              { icon: Clock, label: "24/7 Available" },
              { icon: ShieldCheck, label: "Experienced" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="snap-start shrink-0 sm:shrink flex items-center gap-2 px-4 py-2.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-card sm:bg-transparent border sm:border-0 border-border/60 shadow-soft sm:shadow-none text-sm font-medium text-foreground/80 whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-accent shrink-0" /> {label}
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="lg:col-span-5 animate-fade-in [animation-delay:200ms]">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-teal rounded-[2rem] opacity-10 blur-2xl" />
            <div className="relative rounded-[2rem] bg-card shadow-lift p-8 border border-border/60">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary via-background to-accent-soft grid place-items-center relative overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 text-primary/25" fill="currentColor">
                  <path d="M100 30c-25 0-45 18-45 42 0 35 45 78 45 78s45-43 45-78c0-24-20-42-45-42zm0 60a18 18 0 1 1 0-36 18 18 0 0 1 0 36z" />
                </svg>
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold text-primary text-lg">Dr. Mahendra Reddy</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">GI Surgeon · MBBS, MS</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-bold">4.0 ★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heartbeat line */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 80" className="w-full h-16" preserveAspectRatio="none">
          <path
            className="heartbeat-line"
            d="M0 40 L200 40 L240 40 L260 20 L280 60 L300 10 L320 70 L340 40 L600 40 L640 40 L660 25 L680 55 L700 15 L720 65 L740 40 L1200 40"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
