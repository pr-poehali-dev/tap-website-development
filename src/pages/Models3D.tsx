import Cabinet3DViewer from '@/components/Cabinet3DViewer';

const Models3D = () => {
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
              <a href="/models3d" className="text-primary font-medium">3D Модели</a>
              <a href="/hatches" className="text-muted-foreground hover:text-primary transition-colors">Люки</a>
              <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Прайс</a>
              <a href="/calculator" className="text-muted-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="/#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <Cabinet3DViewer />

      {/* Footer */}
      <footer className="bg-secondary py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/176ac5ba-384c-4c88-8fdb-feb18c2c8ea7.png" 
                alt="ТАП Логотип" 
                className="w-8 h-8"
              />
              <div>
                <div className="text-white font-bold">ТАП</div>
                <div className="text-xs text-muted-foreground">Технологии автоматизации производств</div>
              </div>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 ТАП. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Models3D;