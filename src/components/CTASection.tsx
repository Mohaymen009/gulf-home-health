import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 md:py-28 gradient-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
    </div>
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
          Ready for Premium Healthcare<br className="hidden md:block" /> at Your Doorstep?
        </h2>
        <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-10">
          Book a doctor, nurse, or therapist now. Available 24/7 across all Emirates.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="gradient-cta text-secondary-foreground border-0 hover:opacity-90 font-bold text-base px-10 py-6 shadow-elevated">
            <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="w-5 h-5 mr-2" /> Book Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-bold text-base px-10 py-6">
            <a href="tel:+971554728133">
              <Phone className="w-5 h-5 mr-2" /> Call +971 55 472 8133
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
