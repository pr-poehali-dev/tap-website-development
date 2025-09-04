import Navigation from '@/components/ui/navigation';

interface MainHeaderProps {
  className?: string;
  currentPage?: string;
}

const MainHeader = ({ className = '', currentPage = 'home' }: MainHeaderProps) => {
  return (
    <div className={`container mx-auto px-6 py-2 ${className}`}>
      <div className="flex items-center justify-between px-0 mx-0">
        <div className="flex items-center space-x-4">
          <a href="/" className="block">
            <img 
              src="https://cdn.poehali.dev/files/acfcc0af-ddd4-4f5f-92da-04dddb78431e.png" 
              alt="ТАП Логотип" 
              className="w-16 h-16 hover:scale-105 transition-transform cursor-pointer px-0.5 my-0"
            />
          </a>
          <a href="/" className="block">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer leading-tight">
                <span className="text-red-600">Т</span>ехнологии
              </h1>
              <h2 className="font-bold text-foreground hover:text-primary transition-colors cursor-pointer leading-tight text-xl">
                <span className="text-red-600">А</span>втоматизации
              </h2>
              <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer leading-tight">
                <span className="text-red-600">П</span>роизводств
              </h3>
            </div>
          </a>
        </div>
        <nav className="hidden md:flex space-x-8 text-xl">
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