import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import TrustedCompaniesSection from '@/components/sections/TrustedCompaniesSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <TrustedCompaniesSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;