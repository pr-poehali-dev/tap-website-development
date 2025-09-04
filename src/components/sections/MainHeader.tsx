import Navigation from '@/components/ui/navigation';

interface MainHeaderProps {
  className?: string;
  currentPage?: string;
}

const MainHeader = ({ className = '', currentPage = 'home' }: MainHeaderProps) => {
  return (
    <div className={`container mx-auto px-6 py-2 ${className}`}>
      <div className="flex items-center justify-between px-0 mx-[55px]">
        <div className="flex items-center space-x-3">
          <a href="/" className="block">
            <img 
              src="/Текст логотипа.svg" 
              alt="ТАП" 
              className="h-8 hover:scale-105 transition-transform cursor-pointer"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a href="/" className="block">
            <img 
              src="/Логотип.svg" 
              alt="ТАП Логотип" 
              className="w-12 h-12 hover:scale-105 transition-transform cursor-pointer"
            />
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