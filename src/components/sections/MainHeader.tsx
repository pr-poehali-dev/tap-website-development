import Navigation from '@/components/ui/navigation';

interface MainHeaderProps {
  className?: string;
  currentPage?: string;
}

const MainHeader = ({ className = '', currentPage = 'home' }: MainHeaderProps) => {
  return (
    <div className={`container mx-auto px-6 py-2 ${className}`}>
      <div className="flex items-center justify-between px-0 mx-0 md:flex-row flex-col md:space-y-0 space-y-4">
        <div className="flex items-center space-x-4 md:justify-start justify-center w-full md:w-auto">
          <a href="/" className="block">
            <img 
              src="https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png" 
              alt="ТАП Логотип" 
              className="h-16 hover:scale-105 transition-transform cursor-pointer my-0 px-[5px]"
            />
          </a>
          <a href="/" className="block">
            <div className="flex flex-col -space-y-1 md:block hidden">
              <h1 className="text-black hover:text-primary transition-colors cursor-pointer leading-tight font-bold" style={{fontSize: '22px'}}>
                <span className="text-red-600">Т</span>ехнологии
              </h1>
              <h2 className="text-black hover:text-primary transition-colors cursor-pointer leading-tight font-bold" style={{fontSize: '22px'}}>
                <span className="text-red-600">А</span>втоматизации
              </h2>
              <h3 className="text-black hover:text-primary transition-colors cursor-pointer leading-tight font-bold" style={{fontSize: '22px'}}>
                <span className="text-red-600">П</span>роизводств
              </h3>
            </div>
            <div className="flex flex-col -space-y-1 md:hidden block text-center">
              <h1 className="text-black hover:text-primary transition-colors cursor-pointer leading-tight text-lg font-bold">
                <span className="text-red-600">Т</span>ехнологии
              </h1>
              <h2 className="text-black hover:text-primary transition-colors cursor-pointer leading-tight text-lg font-bold">
                <span className="text-red-600">А</span>втоматизации
              </h2>
              <h3 className="text-black hover:text-primary transition-colors cursor-pointer leading-tight text-lg font-bold">
                <span className="text-red-600">П</span>роизводств
              </h3>
            </div>
          </a>
        </div>
        <nav className="hidden md:flex space-x-8 text-xl">
          <Navigation href="/" className={currentPage === 'home' ? 'text-primary font-medium' : 'text-black hover:text-primary transition-colors'}>Главная</Navigation>
          <Navigation href="/projects" className={currentPage === 'projects' ? 'text-primary font-medium' : 'text-black hover:text-primary transition-colors'}>Проекты</Navigation>
          <Navigation href="/pricing" className={currentPage === 'pricing' ? 'text-primary font-medium' : 'text-black hover:text-primary transition-colors'}>Корпуса AISI304</Navigation>
          <Navigation href="/hatches" className={currentPage === 'hatches' ? 'text-primary font-medium' : 'text-black hover:text-primary transition-colors'}>Люки</Navigation>
          <Navigation href="#contacts" className="text-black hover:text-primary transition-colors">Контакты</Navigation>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;