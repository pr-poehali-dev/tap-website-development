import ProjectGallery from '@/components/ProjectGallery';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Header />

      <ProjectGallery />

      <Footer />
    </div>
  );
};

export default Projects;