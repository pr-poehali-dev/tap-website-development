import HatchSection from '@/components/HatchSection';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';
import { Helmet } from 'react-helmet-async';

const Hatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Helmet>
        <title>Люки Нержавеющие AISI304/316 | Технологические Люки для Пищевого Оборудования</title>
        <meta name="description" content="Производство технологических люков из нержавеющей стали AISI304/316. Люки для емкостей, резервуаров, пищевого оборудования. Коррозионностойкое исполнение с гарантией." />
        <meta name="keywords" content="люки нержавеющие, технологические люки, AISI304 люки, AISI316 люки, люки пищевые, люки емкостей, люки резервуаров" />
        <link rel="canonical" href="https://tap-automation.ru/hatches" />
        <meta property="og:title" content="Люки Нержавеющие AISI304/316 | Технологии Автоматизации" />
        <meta property="og:description" content="Производство технологических люков из нержавеющей стали AISI304/316 для пищевого оборудования" />
        <meta property="og:url" content="https://tap-automation.ru/hatches" />
        <meta property="og:type" content="website" />
      </Helmet>
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