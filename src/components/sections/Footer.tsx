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
                src="https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png" 
                alt="ТАП Логотип" 
                loading="lazy"
                className="h-8 hover:scale-105 transition-transform cursor-pointer"
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