import ProjectGallery from '@/components/ProjectGallery';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
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