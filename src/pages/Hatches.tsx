import HatchSection from '@/components/HatchSection';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';

const Hatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Header currentPage="hatches" />

      <div className="pt-24">
        <HatchSection />
      </div>

      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Hatches;