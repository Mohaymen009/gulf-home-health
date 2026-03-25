import { motion } from "framer-motion";
import { Stethoscope, TestTube, Droplets, HeartPulse, Activity, Baby, UserRound, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Stethoscope, title: "Doctor on Call", desc: "Board-certified physicians visit your home for consultations, diagnosis, and treatment plans.", slug: "/doctor-on-call" },
  { icon: TestTube, title: "At-Home Blood Tests", desc: "Comprehensive blood work collected at your doorstep with fast, accurate lab results delivered digitally.", slug: "/home-blood-tests" },
  { icon: Droplets, title: "IV Drip Therapy", desc: "Hydration, vitamin, immunity, and recovery IV drips administered by certified nurses at home.", slug: "/iv-drips-at-home" },
  { icon: HeartPulse, title: "Health Checkups", desc: "Full-body health screenings and preventive checkups in the comfort of your home or hotel.", slug: "/health-checkup-at-home" },
  { icon: UserRound, title: "Nursing Care", desc: "Skilled nursing services including wound care, injections, post-surgery care, and chronic disease management.", slug: "/nursing-care-at-home" },
  { icon: Activity, title: "Physiotherapy", desc: "Licensed physiotherapists for rehabilitation, sports injuries, pain management, and mobility improvement.", slug: "/physiotherapy-at-home" },
  { icon: Syringe, title: "Elderly Care", desc: "Compassionate elderly care with trained caregivers for daily assistance, monitoring, and companionship.", slug: "/elderly-care-at-home" },
  { icon: Baby, title: "Mother & Baby Care", desc: "Postnatal care, lactation support, newborn care, and pediatric visits for new mothers and babies.", slug: "/mother-baby-care" },
];

const ServicesSection = () => (
  <section className="py-20 md:py-28 section-alt" id="services">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Comprehensive Home Healthcare Services in UAE
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          From doctor visits to IV therapy, we deliver a full spectrum of medical services directly to your home, office, or hotel across all seven Emirates.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card rounded-xl p-6 border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:gradient-hero group-hover:text-primary-foreground transition-all">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <span className="text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
              Learn More →
            </span>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="gradient-cta text-secondary-foreground border-0 hover:opacity-90 font-bold px-10 py-6">
          View All Services
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
