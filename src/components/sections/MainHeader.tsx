import Navigation from '@/components/ui/navigation';

interface MainHeaderProps {
  className?: string;
  currentPage?: string;
}

const MainHeader = ({ className = '', currentPage = 'home' }: MainHeaderProps) => {
  return (
    <div className={`container mx-auto px-6 py-2 ${className}`}>
      <div className="flex items-center justify-between px-0 mx-[55px]">
        <div className="flex items-center space-x-3 md:scale-125 md:origin-center">
          <a href="/" className="block">
            <img 
              src="https://cdn.poehali.dev/files/176ac5ba-384c-4c88-8fdb-feb18c2c8ea7.png" 
              alt="ТАП Логотип" 
              className="w-10 h-10 hover:scale-105 transition-transform cursor-pointer mx-0"
            />
          </a>
          <a href="/" className="block">
            <h1 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">ТАП</h1>
            <p className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer hidden md:block px-0 mx-0">Технологии автоматизации производств</p>
          </a>
        </div>
        <nav className="hidden md:flex space-x-8 md:scale-125 md:origin-center">
          <Navigation href="/" className={currentPage === 'home' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary transition-colors'}>Главная</Navigation>
          <Navigation href="/projects" className={currentPage === 'projects' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary transition-colors'}>Проекты</Navigation>
          <Navigation href="/pricing" className={currentPage === 'pricing' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary transition-colors'}>Корпуса AISI304</Navigation>
          <Navigation href="/hatches" className={currentPage === 'hatches' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary transition-colors'}>Люки</Navigation>
          <Navigation href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Navigation>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;