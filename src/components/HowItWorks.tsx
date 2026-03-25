import { motion } from "framer-motion";
import { ListChecks, CalendarCheck, Truck, HeartHandshake } from "lucide-react";

const steps = [
  { icon: ListChecks, num: "01", title: "Choose Your Service", desc: "Browse our range of home healthcare services and select the one you need." },
  { icon: CalendarCheck, num: "02", title: "Book an Appointment", desc: "Schedule online or call us. Pick a date and time that works for you." },
  { icon: Truck, num: "03", title: "We Come to You", desc: "Our licensed professional arrives at your location within 45 minutes." },
  { icon: HeartHandshake, num: "04", title: "Care Delivered", desc: "Receive world-class medical care in the comfort and privacy of your home." },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-card" id="how-it-works">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Healthcare at Home in 4 Simple Steps
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative text-center"
          >
            {/* Connector line */}
            {i < 3 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
            )}
            <div className="relative z-10 w-20 h-20 rounded-full gradient-hero mx-auto flex items-center justify-center mb-5">
              <s.icon className="w-9 h-9 text-primary-foreground" />
            </div>
            <span className="text-secondary font-heading font-extrabold text-sm">{s.num}</span>
            <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
