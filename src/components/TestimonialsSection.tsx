import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al Hashimi",
    location: "Dubai Marina",
    text: "EMRS sent a doctor within 30 minutes when my son had a high fever at midnight. Professional, caring, and incredibly efficient. I can't recommend them enough.",
    rating: 5,
  },
  {
    name: "James Richardson",
    location: "Hotel Guest, Downtown Dubai",
    text: "As a business traveler, having access to IV drip therapy at my hotel was a game-changer. The nurse was punctual, professional, and made me feel completely at ease.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    location: "Abu Dhabi",
    text: "The physiotherapy sessions at home for my elderly mother have been wonderful. The therapist is patient, skilled, and genuinely cares about her recovery progress.",
    rating: 5,
  },
  {
    name: "Ahmed Khalid",
    location: "Sharjah",
    text: "Regular blood tests at home for my diabetes management have never been easier. Results come quickly and the phlebotomists are highly skilled. Truly premium service.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 section-alt" id="testimonials">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          What Our Patients Say
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Trusted by thousands of families, expats, and hotel guests across the UAE.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-elevated transition-shadow"
          >
            <Quote className="w-8 h-8 text-secondary/40 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
