import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, HOSPITAL_PHONE_TEL, HOSPITAL_PHONE_DISPLAY } from "@/lib/contact";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#specializations", label: "Specializations" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-teal text-primary-foreground shadow-soft">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold text-primary text-xl tracking-tight">Life Line</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">Hospital · Tirupati</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={HOSPITAL_PHONE_TEL} className="flex items-center gap-2 text-sm text-primary font-semibold hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> {HOSPITAL_PHONE_DISPLAY}
          </a>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 shadow-soft hover:shadow-card transition-shadow">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-primary"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container-page py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a href={HOSPITAL_PHONE_TEL} className="flex items-center gap-2 text-sm text-primary font-semibold pt-1">
              <Phone className="w-4 h-4" /> {HOSPITAL_PHONE_DISPLAY}
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book on WhatsApp</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
