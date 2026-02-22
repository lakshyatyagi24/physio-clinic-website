import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import AboutUs from "@/components/AboutUs";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import CTA from "@/components/CTA";
import HealthTips from "@/components/HealthTips";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChoose />
      <Mission />
      <Services />
      <Testimonials />
      <CTA />
      <ContactForm />
      <LocationMap />
      <HealthTips />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
