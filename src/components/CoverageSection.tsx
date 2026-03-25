import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Umm Al Quwain",
  "Fujairah",
];

const CoverageSection = () => (
  <section className="py-20 md:py-28 gradient-hero relative overflow-hidden" id="coverage">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary-foreground blur-3xl" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Coverage Areas</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-primary-foreground">
          Serving All 7 Emirates of the UAE
        </h2>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
          No matter where you are in the United Arab Emirates, our medical professionals are ready to come to you.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {emirates.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-sm border transition-all hover:scale-105 bg-primary-foreground/15 border-primary-foreground/30"
          >
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="font-heading font-bold text-primary-foreground text-lg">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoverageSection;
