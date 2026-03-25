import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import CoverageSection from "@/components/CoverageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>Home Healthcare UAE | Doctor on Call Dubai | CareAtHome</title>
      <meta
        name="description"
        content="CareAtHome is UAE's leading home healthcare provider. Doctor on call, blood tests at home, IV drips, nursing care, physiotherapy, and health checkups across Dubai, Abu Dhabi, Sharjah, and all Emirates. Book now!"
      />
      <meta name="keywords" content="home healthcare UAE, doctor on call Dubai, blood tests at home Abu Dhabi, IV drips at home UAE, health checkup at home Dubai, nursing care at home UAE" />
      <link rel="canonical" href="https://careathome.ae" />
    </Helmet>
    <Navbar />
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <HowItWorks />
      <CoverageSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
