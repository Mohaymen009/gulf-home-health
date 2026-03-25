import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  "Doctor on Call",
  "At-Home Blood Tests",
  "IV Drip Therapy",
  "Health Checkups",
  "Nursing Care",
  "Physiotherapy",
  "Elderly Care",
  "Mother & Baby Care",
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <img src="/logo.png" alt="EMRS Logo" className="h-20 w-auto object-contain -mr-4 -ml-2" />
            <span className="font-heading font-bold text-xl text-primary-foreground">EMRS</span>
          </div>
          <p className="text-xs text-primary-foreground/60 font-medium tracking-widest mb-4 uppercase">E M R S Ambulance Services L.L.C</p>
          <p className="text-sm leading-relaxed mb-6">
            UAE's trusted home healthcare provider. Licensed professionals delivering compassionate medical care at your doorstep, 24/7.
          </p>
          <div className="flex gap-3">
            {[
              { name: "facebook", href: "https://facebook.com" },
              { name: "instagram", href: "https://instagram.com" },
              { name: "twitter", href: "https://twitter.com" },
              { name: "linkedin", href: "https://ae.linkedin.com/in/emrs-ambulance-services-llc-9270011b5" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${s.name}`}
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <span className="text-xs font-bold uppercase text-primary-foreground">{s.name[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="text-sm hover:text-secondary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "How It Works", "Coverage Areas", "Testimonials", "FAQ", "Privacy Policy", "Terms of Service"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm hover:text-secondary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <div>
                <a href="tel:+971554728133" className="hover:text-secondary transition-colors">+971 55 472 8133</a>
                <p className="text-primary-foreground/50 text-xs">24/7 Hotline</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <a href="mailto:info@emrs.ae" className="hover:text-secondary transition-colors">info@emrs.ae</a>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <span>Al Qusais Industrial Area, Dubai, UAE</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
              <span>Available 24/7, 365 days</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} EMRS Home Healthcare. All rights reserved.</p>
        <p>Al Qusais Industrial Area, Dubai, United Arab Emirates</p>
        <p>Home Healthcare UAE — Doctor on Call Dubai — Blood Tests at Home Abu Dhabi</p>
      </div>
    </div>
  </footer>
);

export default Footer;
