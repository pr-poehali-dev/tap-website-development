interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`bg-accent py-8 px-6 ${className}`}>
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
  );
};

export default Footer;