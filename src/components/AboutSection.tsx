import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Licensed Professionals" },
  { icon: Award, value: "24/7", label: "Availability" },
  { icon: ShieldCheck, value: "7", label: "Emirates Covered" },
  { icon: Heart, value: "100%", label: "Patient Commitment" },
];

const AboutSection = () => (
  <section className="py-20 md:py-28 bg-card" id="about">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About EMRS Home Healthcare</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground mb-6">
            Compassionate Home Healthcare Built for the UAE
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in the heart of the UAE, EMRS Home Healthcare is a DHA-licensed and MOH-approved home healthcare provider
              dedicated to bringing world-class medical services directly to patients across all seven Emirates.
            </p>
            <p>
              Our mission is simple: eliminate barriers to quality healthcare. Whether you're a busy professional in Dubai,
              a family in Abu Dhabi, an elderly resident in Sharjah, or a hotel guest seeking medical assistance — our team
              of over 150 licensed doctors, nurses, and therapists is ready to serve you.
            </p>
            <p>
              We combine cutting-edge medical expertise with genuine compassion, cultural sensitivity, and the highest
              standards of patient privacy. Every member of our team is carefully vetted, continuously trained, and
              committed to delivering care that exceeds expectations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-6 gradient-hero text-primary-foreground text-center"
              >
                <s.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <p className="font-heading font-extrabold text-3xl">{s.value}</p>
                <p className="text-primary-foreground/80 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
