import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/ui/navigation';
import HeroSlideshow from '@/components/ui/hero-slideshow';


const Index = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        {/* Contact Bar */}
        <div className="bg-secondary text-white py-2 px-6">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                <span>+7 (3412) 555-123</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                <span>info@tap18.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="w-4 h-4 mr-2" />
                <span>г. Ижевск, ул. Промышленная, д. 15</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://t.me/tap18_channel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://vk.com/asutp_tap18" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zM18.777 16.637c.3.345.618.671.879 1.058.117.172.23.351.304.547.105.28.009.588-.231.604l-1.527-.001c-.4.033-.717-.126-.993-.4-.219-.219-.42-.457-.639-.677-.092-.093-.19-.177-.307-.236-.23-.118-.436-.056-.564.184-.131.245-.161.518-.177.785-.023.398-.18.502-.578.523-1.043.054-2.027-.081-2.907-.65-.767-.493-1.358-1.146-1.849-1.895-.983-1.497-1.75-3.116-2.463-4.764-.154-.357-.047-.549.357-.558.324-.007.647-.006.971-.001.265.004.414.157.51.405.488 1.252 1.073 2.441 1.8 3.558.184.283.377.558.649.75.304.215.521.146.644-.197.088-.246.12-.504.134-.76.048-.835.057-1.671-.011-2.503-.039-.477-.203-.787-.678-.864-.239-.039-.204-.115-.088-.232.186-.188.361-.305.711-.305l2.599-.002c.411.081.502.266.558.678l.001 2.888c-.001.201.1.798.461.93.289.104.482-.15.656-.324.737-.736 1.262-1.608 1.724-2.515.2-.394.378-.802.533-1.223.123-.338.321-.501.702-.493l1.722.002c.051 0 .102.001.152.007.478.056.607.199.46.667-.201.637-.548 1.188-.894 1.748-.37.598-.77 1.178-1.121 1.795-.318.559-.29.837.108 1.291z"/>
                </svg>
                <span className="sr-only">VK</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Header */}
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
              <Navigation href="/" className="text-primary font-medium">Главная</Navigation>
              <Navigation href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Проекты</Navigation>
              <Navigation href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Корпуса AISI304</Navigation>
              <Navigation href="/hatches" className="text-muted-foreground hover:text-primary transition-colors">Люки</Navigation>
              <Navigation href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Navigation>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSlideshow 
        images={[
          '/img/00de617f-f004-44aa-9e7d-a72d08bd6c1a.jpg',
          '/img/5cc96a7a-52ef-426d-b7dd-7bdd32d6ffe0.jpg',
          '/img/08a7b2f8-a71b-42ac-afcc-b2090d6e4a3c.jpg'
        ]}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="text-white">
              Шкафы управления
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Разрабатываем и производим шкафы управления с программированием ПЛК 
            и сенсорных панелей оператора. Поставляем КИПиА и корпуса из нержавеющей стали.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </HeroSlideshow>

      {/* Products Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наша продукция</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки и производства систем автоматизации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/projects">
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/img/919342b2-436f-4d1d-b772-d8c6950c11e4.jpg" 
                    alt="Шкафы управления" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">Шкафы управления</CardTitle>
                  <CardDescription>
                    Проектирование и сборка шкафов управления с программированием ПЛК
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Siemens, ABB, Schneider</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Программирование ПЛК</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Сенсорные панели HMI</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Пуско-наладочные работы</li>
                  </ul>
                </CardContent>
              </Card>
            </a>

            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="/img/5ede963c-a634-44a4-8c90-fc72858951c2.jpg" 
                  alt="КИПиА" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">КИПиА</CardTitle>
                <CardDescription>
                  Поставка контрольно-измерительных приборов и средств автоматизации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Датчики и преобразователи</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Регулирующая арматура</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Приборы учёта и контроля</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Системы связи и передачи данных</li>
                </ul>
              </CardContent>
            </Card>

            <a href="/pricing">
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/img/86918c3f-7be5-4655-8644-89472c4c28ef.jpg" 
                    alt="Корпуса из нержавейки" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800">Корпуса AISI</CardTitle>
                  <CardDescription>
                    Производство корпусов из нержавеющей стали
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Корпуса AISI 304, 316, 316L</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Различные размеры</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Степень защиты IP65/IP66</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Индивидуальные проекты</li>
                  </ul>
                </CardContent>
              </Card>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <a href="/hatches">
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/img/86918c3f-7be5-4655-8644-89472c4c28ef.jpg" 
                    alt="Люки из нержавейки" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800">Люки из нержавейки</CardTitle>
                  <CardDescription>
                    Технологические люки для промышленного применения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Люки овальные 340×440</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Люки кольцевые DN400, DN450</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Давление до 0.6 МПа</li>
                    <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />AISI 304, 316</li>
                  </ul>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">О компании ТАП</h2>
              <p className="text-muted-foreground mb-4">
                Более 10 лет мы специализируемся на разработке и производстве систем автоматизации 
                для промышленных предприятий. Наша команда инженеров имеет богатый опыт работы 
                с ведущими мировыми брендами промышленной автоматизации.
              </p>
              <p className="text-muted-foreground mb-6">
                Мы гарантируем высокое качество продукции, соблюдение сроков поставки 
                и комплексную техническую поддержку на всех этапах реализации проекта.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
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
                    <h4 className="font-medium text-foreground">Сертифицированное производство</h4>
                    <p className="text-sm text-muted-foreground">ISO 9001, все необходимые разрешения</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="text-primary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-foreground">Быстрые сроки</h4>
                    <p className="text-sm text-muted-foreground">От проекта до пуска в эксплуатацию</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Headphones" className="text-primary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-foreground">Техподдержка 24/7</h4>
                    <p className="text-sm text-muted-foreground">Гарантийное и постгарантийное обслуживание</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 px-6 bg-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Нам доверяют</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Более 200 компаний выбрали нас для решения задач автоматизации
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              '/img/ef171e51-72a0-49f2-aa0a-5d509cdde490.jpg',
              '/img/a72157e5-9cad-44fc-afa8-54ea64d4297c.jpg',
              '/img/dec724ca-f7a7-4bfc-b536-618aa2371fa5.jpg',
              '/img/7560d116-37fb-45dd-a18c-2cabd6279d8a.jpg',
              '/img/43f1d3ce-f111-45f3-863b-16fff168d572.jpg',
              '/img/a120d517-d80d-4dfc-b335-dae2d45558bb.jpg',
              '/img/20104128-452a-4e3c-bb20-133aa50014d7.jpg',
              '/img/1b9a2294-7232-449e-bae2-e90b86b8cbf9.jpg',
              '/img/edb09d29-1d5d-40f2-9dbe-39ddc6c83097.jpg',
              '/img/2dc5a2ad-d3a0-4812-a541-ae9fd738b1f3.jpg',
              '/img/8c2cd75b-82aa-4481-ae60-7bd321e009ce.jpg',
              '/img/64aa0a18-d1db-498d-b335-ed292fb33e65.jpg'
            ].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img 
                  src={logo} 
                  alt={`Логотип компании ${index + 1}`}
                  className="w-full h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  style={{ maxWidth: '180px', maxHeight: '150px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-slate-300">Свяжитесь с нами для обсуждения вашего проекта</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-accent border-border">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white">+7 (3412) 555-123</p>
              </CardContent>
            </Card>
            <Card className="bg-accent border-border">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white">info@tap18.ru</p>
              </CardContent>
            </Card>
            <Card className="bg-accent border-border">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white mb-2">г. Ижевск,</p>
                <p className="text-white">ул. Промышленная, д. 15</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://t.me/tap18_channel" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Написать в Телеграмм
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-8 px-6">
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
                <div className="text-xs text-white/70">Технологии автоматизации производств</div>
              </div>
            </div>
            <div className="text-white text-sm">
              © 2025 ООО "ТАП". Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;