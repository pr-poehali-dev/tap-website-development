import Navigation from '@/components/ui/navigation';

interface MainHeaderProps {
  className?: string;
}

const MainHeader = ({ className = '' }: MainHeaderProps) => {
  return (
    <div className={`container mx-auto px-6 py-2 ${className}`}>
      <div className="flex items-center justify-between scale-125 origin-center">
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
          <Navigation href="/" className="text-primary font-medium">Главная</Navigation>
          <Navigation href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Проекты</Navigation>
          <Navigation href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Корпуса AISI304</Navigation>
          <Navigation href="/hatches" className="text-muted-foreground hover:text-primary transition-colors">Люки</Navigation>
          <Navigation href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Navigation>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;