import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Specializations from "@/components/site/Specializations";
import WhyChoose from "@/components/site/WhyChoose";
import Reviews from "@/components/site/Reviews";
import BookingCTA from "@/components/site/BookingCTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

const Index = () => {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Life Line Hospital",
    medicalSpecialty: "Gastroenterology",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Reddy & Reddy's Colony",
      addressLocality: "Tirupati",
      addressRegion: "Andhra Pradesh",
      postalCode: "517501",
      addressCountry: "IN",
    },
    telephone: "+91-877-222-8633",
    openingHours: "Mo-Su 00:00-23:59",
    employee: {
      "@type": "Physician",
      name: "Dr. Mahendra Reddy",
      medicalSpecialty: "Gastrointestinal Surgery",
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Navbar />
      <Hero />
      <About />
      <Specializations />
      <WhyChoose />
      <Reviews />
      <BookingCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
