import { motion } from "framer-motion";
import { Phone, CalendarCheck, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-healthcare.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20" id="hero">
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />

    <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-primary-foreground"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-medium">DHA Licensed &amp; MOH Approved</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Premium Healthcare
          <br />
          <span className="text-secondary">At Your Doorstep</span>
          <br />
          Across the UAE
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-8 leading-relaxed">
          From doctor-on-call visits and at-home blood tests to IV drips, nursing care, and physiotherapy — experience world-class medical care in the comfort of your home or hotel.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button size="lg" asChild className="gradient-cta text-secondary-foreground border-0 hover:opacity-90 font-bold text-base px-8 py-6 shadow-elevated">
            <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="w-5 h-5 mr-2" /> Book Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-bold text-base px-8 py-6 backdrop-blur-sm">
            <a href="tel:+971554728133">
              <Phone className="w-5 h-5 mr-2" /> Call a Doctor
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Availability</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Licensed Professionals</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hidden lg:block"
      >
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Licensed healthcare professional providing home medical care in Dubai, UAE"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-elevated border border-border/50 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Available 24/7</p>
                <p className="font-heading font-bold text-foreground text-sm">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
