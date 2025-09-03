import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className = '' }: AboutSectionProps) => {
  return (
    <section className={`py-16 px-6 bg-white ${className}`}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">О компании ТАП</h2>
            <p className="text-muted-foreground mb-4">
              Основываясь на богатом практическом опыте, мы разрабатываем системы автоматизации, 
              которые решают реальные проблемы промышленных предприятий. Наше глубокое понимание технологий 
              ведущих мировых брендов позволяет нам создавать уникальные, под ключ решения именно для вашего дела.
            </p>
            <p className="text-muted-foreground mb-6">
              Мы гарантируем высокое качество продукции, соблюдение сроков поставки 
              и комплексную техническую поддержку на всех этапах реализации проекта.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Выполненных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/5 to-background p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-4">Наши преимущества:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Icon name="Award" className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-foreground">Практичный опыт</h4>
                  <p className="text-sm text-muted-foreground">От проекта до пуска в эксплуатацию</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="Headphones" className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-foreground">Техподдержка</h4>
                  <p className="text-sm text-muted-foreground">Гарантийное и удалённое постгарантийное обслуживание</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="ShieldCheck" className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-foreground">Сертифицированное производство корпусов и люков</h4>
                  <p className="text-sm text-muted-foreground">ISO 9001, все необходимые разрешения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;