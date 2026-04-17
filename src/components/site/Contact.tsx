import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, HOSPITAL_PHONE_TEL, HOSPITAL_PHONE_DISPLAY } from "@/lib/contact";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">Find Us</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary leading-tight">Location & Contact</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We're easy to reach in the heart of Tirupati — open every hour of every day.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-card border border-border/60 bg-secondary/50 min-h-[420px] relative">
            <iframe
              title="Life Line Hospital Location"
              src="https://www.google.com/maps?q=Reddy+%26+Reddy%27s+Colony,+Tirupati,+Andhra+Pradesh+517501&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, title: "Address", value: "Reddy & Reddy's Colony, Tirupati, AP 517501" },
              { icon: Phone, title: "Phone", value: HOSPITAL_PHONE_DISPLAY, href: HOSPITAL_PHONE_TEL },
              { icon: Clock, title: "Hours", value: "Open 24 Hours · 7 days a week" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with us instantly", href: WHATSAPP_LINK },
            ].map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="group p-6 rounded-2xl bg-secondary/40 border border-border/60 hover:bg-secondary/80 hover:shadow-soft transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card grid place-items-center text-primary shadow-soft shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block mt-1 font-semibold text-primary hover:text-accent transition-colors break-words">
                        {value}
                      </a>
                    ) : (
                      <div className="mt-1 font-semibold text-primary break-words">{value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
