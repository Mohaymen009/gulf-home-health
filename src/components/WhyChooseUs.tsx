import { motion } from "framer-motion";
import { ShieldCheck, Clock, UserCheck, Lock } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Licensed Professionals", desc: "All our doctors, nurses, and therapists are DHA-licensed and MOH-approved with verified credentials." },
  { icon: Clock, title: "Fast Response Time", desc: "Our medical team arrives within 45 minutes across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates." },
  { icon: UserCheck, title: "Ultimate Convenience", desc: "No waiting rooms, no traffic. Receive premium healthcare at your home, office, or hotel room." },
  { icon: Lock, title: "Complete Privacy", desc: "Discreet, confidential medical services in your private space. Your health information stays secure." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-card" id="why-us">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose CareAtHome</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Trusted Home Healthcare Across the UAE
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          We bring hospital-quality care to your doorstep with compassion, professionalism, and speed.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl p-6 bg-background border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <r.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
