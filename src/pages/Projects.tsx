import ProjectGallery from '@/components/ProjectGallery';
import Icon from '@/components/ui/icon';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/176ac5ba-384c-4c88-8fdb-feb18c2c8ea7.png" 
                alt="ТАП Логотип" 
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground">ТАП</h1>
                <p className="text-sm text-muted-foreground">Технологии автоматизации производств</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/projects" className="text-primary font-medium">Проекты</a>
              <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Корпуса AISI304</a>
              <a href="/hatches" className="text-muted-foreground hover:text-primary transition-colors">Люки</a>
              <a href="/#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <ProjectGallery />

      {/* Footer */}
      <footer className="bg-secondary py-8 px-6">
        <div className="container mx-auto">
          {/* Contact Bar */}
          <div className="border-b border-white/20 pb-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <div className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  <span>+7 (3412) 555-123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  <span>г. Ижевск, ул. Промышленная, д. 15</span>
                </div>
              </div>
              <div className="flex items-center">
                <a href="https://vk.com/asutp_tap18" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <Icon name="Users" className="w-4 h-4 mr-2" />
                  <span>ВКонтакте</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/176ac5ba-384c-4c88-8fdb-feb18c2c8ea7.png" 
                alt="ТАП Логотип" 
                className="w-8 h-8"
              />
              <div>
                <div className="text-white font-bold">ТАП</div>
                <div className="text-xs text-white/70">Технологии автоматизации производств</div>
              </div>
            </div>
            <div className="text-white text-sm">
              © 2025 ООО "ТАП". Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;