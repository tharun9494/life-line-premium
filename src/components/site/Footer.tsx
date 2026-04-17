const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#specializations", label: "Specializations" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary-foreground/15">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <div>
                <div className="font-display font-bold text-xl">Life Line Hospital</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">Tirupati · Andhra Pradesh</div>
              </div>
            </div>
            <p className="mt-5 text-primary-foreground/75 text-sm max-w-sm leading-relaxed italic font-display">
              "Caring for Tirupati, Every Hour of Every Day."
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold">Explore</div>
            <ul className="mt-5 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/85 hover:text-accent-soft transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold">Reach Us</div>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/85">
              <li>Reddy & Reddy's Colony</li>
              <li>Tirupati, Andhra Pradesh 517501</li>
              <li><a href="tel:08772228633" className="hover:text-accent-soft">0877 222 8633</a></li>
              <li>Open 24 Hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© 2025 Life Line Hospital. All rights reserved.</div>
          <div>Designed with care for the Tirupati community.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
