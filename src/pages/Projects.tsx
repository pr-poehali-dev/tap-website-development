import ProjectGallery from '@/components/ProjectGallery';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Helmet>
        <title>Проекты и Решения | Шкафы управления, Корпуса AISI304, Люки</title>
        <meta name="description" content="Наши проекты: изготовление шкафов управления, корпусов из нержавеющей стали AISI304/316, технологических люков. Портфолио выполненных работ для пищевой и химической промышленности." />
        <meta name="keywords" content="проекты автоматизации, шкафы управления проекты, корпуса aisi304 примеры, технологические люки, портфолио" />
        <link rel="canonical" href="https://tap-automation.ru/projects" />
        <meta property="og:title" content="Проекты и Решения | Технологии Автоматизации" />
        <meta property="og:description" content="Портфолио выполненных проектов по изготовлению шкафов управления и корпусов из нержавеющей стали" />
        <meta property="og:url" content="https://tap-automation.ru/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header currentPage="projects" />

      <div className="pt-24">
        <ProjectGallery />
      </div>

      <ContactsSection />
      
      <Footer />
    </div>
  );
};

export default Projects;