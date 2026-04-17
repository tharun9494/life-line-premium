import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, MapPin } from "lucide-react";

export const BookingCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-teal text-primary-foreground overflow-hidden">
      {/* Decorative cross pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="crosses" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="36" y="20" width="8" height="40" rx="1" fill="white" />
              <rect x="20" y="36" width="40" height="8" rx="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosses)" />
        </svg>
      </div>

      <div className="container-page relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            Schedule a Visit
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Book Your Appointment <em className="not-italic text-accent-soft">Today</em>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
            Visit us at Reddy & Reddy's Colony, Tirupati, Andhra Pradesh 517501. We're open 24 hours — your health doesn't wait, and neither do we.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-gold hover:opacity-95 text-accent-foreground rounded-full px-8 h-13 shadow-lift">
              <a href="https://book-appointment.healthplix.com" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5 mr-1" /> Book Online
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-13 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              <a href="tel:08772228633"><Phone className="w-5 h-5 mr-1" /> 0877 222 8633</a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-soft mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Visit Us</div>
                  <div className="mt-1 font-semibold">Reddy & Reddy's Colony</div>
                  <div className="text-primary-foreground/80 text-sm">Tirupati, Andhra Pradesh 517501</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent-soft mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Call</div>
                  <div className="mt-1 font-semibold">0877 222 8633</div>
                  <div className="text-primary-foreground/80 text-sm">Open 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
