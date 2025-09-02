import HatchSection from '@/components/HatchSection';
import Navigation from '@/components/ui/navigation';
import Icon from '@/components/ui/icon';

const Hatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="/" className="block">
                <img 
                  src="https://cdn.poehali.dev/files/176ac5ba-384c-4c88-8fdb-feb18c2c8ea7.png" 
                  alt="ТАП Логотип" 
                  className="w-10 h-10 hover:scale-105 transition-transform cursor-pointer"
                />
              </a>
              <a href="/" className="block">
                <h1 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">ТАП</h1>
                <p className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Технологии автоматизации производств</p>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Navigation href="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Navigation>
              <Navigation href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Проекты</Navigation>
              <Navigation href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Корпуса AISI304</Navigation>
              <Navigation href="/hatches" className="text-primary font-medium">Люки</Navigation>
              <Navigation href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Navigation>
            </nav>
          </div>
        </div>
      </header>

      <HatchSection />

      {/* Footer */}
      <footer className="bg-secondary py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <a href="/" className="block">
                <img 
                  src="https://cdn.poehali.dev/files/176ac5ba-384c-4c88-8fdb-feb18c2c8ea7.png" 
                  alt="ТАП Логотип" 
                  className="w-8 h-8 hover:scale-105 transition-transform cursor-pointer"
                />
              </a>
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

export default Hatches;