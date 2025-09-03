import HatchSection from '@/components/HatchSection';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const Hatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Header />

      <HatchSection />

      <Footer />
    </div>
  );
};

export default Hatches;