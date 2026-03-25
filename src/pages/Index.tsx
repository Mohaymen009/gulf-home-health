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
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Helmet>
      <title>EMRS 24/7 Home Healthcare</title>
      <meta
        name="description"
        content="Home healthcare UAE: Doctor on call, at-home blood tests, IV drips & health checkups. Fast, licensed, and convenient care at your doorstep."
      />
      <meta name="keywords" content="home healthcare UAE, doctor on call Dubai, blood tests at home Abu Dhabi, IV drips at home UAE, health checkup at home Dubai, nursing care at home UAE" />
      <link rel="canonical" href="https://emrs.ae" />
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
    <FloatingButtons />
  </>
);

export default Index;
