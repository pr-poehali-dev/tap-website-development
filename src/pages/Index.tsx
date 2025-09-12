import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import TrustedCompaniesSection from '@/components/sections/TrustedCompaniesSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/sections/Footer';
import SEOWrapper from '@/components/SEOWrapper';

const Index = () => {
  return (
    <SEOWrapper
      title="Технологии Автоматизации Производств | Корпуса AISI304, Люки, Частотные Преобразователи"
      description="Производство шкафов управления, корпусов из нержавеющей стали AISI304/316, технологических люков, частотных преобразователей. Индивидуальное производство для пищевой, химической промышленности."
      keywords="корпуса aisi304, люки нержавеющие, частотные преобразователи, шкафы управления, нержавеющая сталь, пищевое оборудование, автоматизация производства"
      canonicalUrl="https://tap18.ru/"
      structuredData={{
        name: "Корпуса из нержавеющей стали AISI304",
        description: "Электротехнические корпуса из нержавеющей стали марки AISI304 и AISI316 для агрессивных условий эксплуатации",
        image: "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
        <Header />
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <TrustedCompaniesSection />
        <ContactsSection />
        <Footer />
      </div>
    </SEOWrapper>
  );
};

export default Index;