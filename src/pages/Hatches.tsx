import HatchSection from '@/components/HatchSection';
import Navigation from '@/components/ui/navigation';
import Icon from '@/components/ui/icon';

const Hatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        {/* Contact Bar */}
        <div className="bg-secondary text-white py-2 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-6 w-full md:w-auto">
              <div className="flex items-center">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                <span>+7 (3412) 555-123</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                <span>info@tap18.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="w-4 h-4 mr-2" />
                <span>г. Ижевск, ул. Молодёжная 12Б</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://t.me/tap18_channel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <img src="/img/telegram_icon.svg" alt="Telegram" className="w-4 h-4 mr-1 filter invert" />
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://vk.com/asutp_tap18" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <img src="/img/vk_icon.svg" alt="VK" className="w-5 h-5 mr-1 filter invert" />
                <span className="sr-only">VK</span>
              </a>
            </div>
          </div>
        </div>
        
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