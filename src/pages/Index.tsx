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
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-6 w-full md:w-auto">
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
                <span>г. Ижевск, ул. Молодёжная 12Б</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://t.me/tap18_channel" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <img src="/img/telegram_icon.svg" alt="Telegram" className="w-4 h-4 mr-1 filter invert" />
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://vk.com/asutp_tap18" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <img src="/img/vk_icon.svg" alt="VK" className="w-5 h-5 mr-1 filter invert" />
                <span className="sr-only">VK</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Header */}
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
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
      </header>

      {/* Hero Section */}
      <HeroSlideshow 
        images={[
          'https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg',
          'https://cdn.poehali.dev/files/73911082-3977-447a-8c36-910277fc705f.jpg',
          'https://cdn.poehali.dev/files/ac6854fd-7479-42aa-b248-3daabe79d90e.jpg'
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
              Полный кил разработки и производства шкафов управления, корпусов и люков из нержавеющей стали, а также поставка оборудования для промышленной автоматизации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/projects">
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/b14bf4f8-e72d-4de2-b587-57718327eee4.jpg" 
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

            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg" 
                  alt="Частотные преобразователи" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Частотные преобразователи Optimus Drive</CardTitle>
                <CardDescription>
                  Поставка частотных преобразователей для управления электродвигателями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Мощность от 0.75 до 500 кВт</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Векторное управление</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Встроенные фильтры EMC</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Интерфейсы связи RS485, Ethernet</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8 justify-center max-w-4xl mx-auto">
            <a href="/pricing">
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/img/86918c3f-7be5-4655-8644-89472c4c28ef.jpg" 
                    alt="Корпуса из нержавеющей стали" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800">Корпуса из нержавеющей стали</CardTitle>
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

            <a href="/hatches">
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg" 
                    alt="Люки из нержавеющей стали" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800">Люки из нержавеющей стали</CardTitle>
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

      {/* Trusted Companies Section */}
      <section className="py-16 px-6 bg-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Нам доверяют</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Компании по всей России доверяют нам решение задач по автоматизации
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              '/img/logo_01.svg',
              'https://cdn.poehali.dev/files/b0bfa2d4-b39f-467b-be20-39de38bf0acc.png',
              'https://cdn.poehali.dev/files/6993019b-1939-4ac1-b258-6b1d5ad9ed8b.png',
              'https://cdn.poehali.dev/files/22e944d6-b073-4de9-90cd-de2536cc5d79.png',
              'https://cdn.poehali.dev/files/a1903610-2198-4904-8244-0fc4f0618ce8.png',
              '/img/43f1d3ce-f111-45f3-863b-16fff168d572.jpg',
              '/img/a120d517-d80d-4dfc-b335-dae2d45558bb.jpg',
              '/img/20104128-452a-4e3c-bb20-133aa50014d7.jpg',
              '/img/edb09d29-1d5d-40f2-9dbe-39ddc6c83097.jpg',
              '/img/2dc5a2ad-d3a0-4812-a541-ae9fd738b1f3.jpg'
            ].map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img 
                  src={logo} 
                  alt={`Логотип компании ${index + 1}`}
                  className="w-full h-24 object-contain transition-all duration-300"
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
                <p className="text-white">ул. Молодёжная 12Б</p>
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
    </div>
  );
};

export default Index;