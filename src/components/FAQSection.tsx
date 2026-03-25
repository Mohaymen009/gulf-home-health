import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What areas do you cover for home healthcare services?",
    a: "We provide home healthcare services across all seven Emirates of the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah. Our teams are strategically located to ensure rapid response times throughout the country.",
  },
  {
    q: "Are your doctors and nurses licensed in the UAE?",
    a: "Absolutely. All our medical professionals hold valid licenses from the Dubai Health Authority (DHA), the Ministry of Health (MOH), or the Department of Health Abu Dhabi (DoH). Every team member undergoes thorough background checks and continuous professional development.",
  },
  {
    q: "How quickly can a doctor arrive at my location?",
    a: "In most areas across Dubai, Abu Dhabi, and Sharjah, our doctors can arrive within 45 minutes of booking. Response times in other Emirates may vary slightly but are typically within 60 to 90 minutes.",
  },
  {
    q: "Can hotel guests use your home healthcare services?",
    a: "Yes! We serve hotel guests, tourists, and business travelers across the UAE. Our medical professionals can visit you directly at your hotel room. We work with many leading hotels and can coordinate with hotel concierge services as needed.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, Apple Pay, bank transfers, and cash. We also work with major insurance providers in the UAE. Contact us to verify if your insurance plan covers our home healthcare services.",
  },
  {
    q: "How do I book an at-home blood test or IV drip?",
    a: "You can book through our website by clicking 'Book Now', calling our 24/7 hotline at +971 55 472 8133, or sending us a WhatsApp message. Our team will confirm your appointment, explain any preparation needed, and ensure a licensed professional arrives at your scheduled time.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-card" id="faq">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Everything you need to know about our home healthcare services in the UAE.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`item-${i}`} className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-card">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
