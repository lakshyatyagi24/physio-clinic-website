import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import AboutUs from "@/components/AboutUs";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChoose />
      <Mission />
      <Services />
      <CTA />
      <ContactForm />
      <LocationMap />
      <Footer />
    </>
  );
}
