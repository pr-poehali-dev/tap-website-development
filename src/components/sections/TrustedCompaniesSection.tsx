interface TrustedCompaniesSectionProps {
  className?: string;
}

const TrustedCompaniesSection = ({ className = '' }: TrustedCompaniesSectionProps) => {
  const companyLogos = [
    'https://cdn.poehali.dev/files/fcc0a262-51db-4462-a460-1ffa05f9376a.png',
    'https://cdn.poehali.dev/files/b0bfa2d4-b39f-467b-be20-39de38bf0acc.png',
    'https://cdn.poehali.dev/files/6993019b-1939-4ac1-b258-6b1d5ad9ed8b.png',
    'https://cdn.poehali.dev/files/22e944d6-b073-4de9-90cd-de2536cc5d79.png',
    'https://cdn.poehali.dev/files/a1903610-2198-4904-8244-0fc4f0618ce8.png',
    'https://cdn.poehali.dev/files/ee317193-f102-47b2-a08e-46e5294fa91b.png',
    'https://cdn.poehali.dev/files/c9d6a645-4f58-485f-8da7-09139a1174f3.png',
    'https://cdn.poehali.dev/files/f5e50fc7-388b-4950-b027-9c5bef63924a.png',
    'https://cdn.poehali.dev/files/be194f41-3731-46d1-a387-7acd0384ab8a.png',
    'https://cdn.poehali.dev/files/dd50023b-6019-4640-8da5-bcd8f9cf083b.png'
  ];

  return (
    <section className={`py-16 px-6 bg-accent/5 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Нам доверяют</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Компании по всей России доверяют нам решение задач по автоматизации
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1.5 md:gap-5">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-2 md:p-3">
              <img 
                src={logo} 
                alt={`Логотип компании ${index + 1}`}
                className="w-full h-57 md:h-34 object-contain transition-all duration-300"
                style={{ maxWidth: '428px', maxHeight: '294px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;