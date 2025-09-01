import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import ProjectGallery from '@/components/ProjectGallery';

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
                <Icon name="MapPin" className="w-4 h-4 mr-2" />
                <span>г. Ижевск, ул. Промышленная, д. 15</span>
              </div>
            </div>
            <div className="flex items-center">
              <a href="https://vk.com/tap_tech" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <Icon name="Users" className="w-4 h-4 mr-2" />
                <span>ВКонтакте</span>
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
              <a href="/" className="text-primary font-medium">Главная</a>
              <a href="/models3d" className="text-muted-foreground hover:text-primary transition-colors">3D Модели</a>
              <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Корпуса AISI304</a>
              <a href="/hatches" className="text-muted-foreground hover:text-primary transition-colors">Люки</a>
              <a href="/calculator" className="text-muted-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('/img/00de617f-f004-44aa-9e7d-a72d08bd6c1a.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-primary/90 text-white hover:bg-primary border-primary">
              🏭 Промышленная автоматизация
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Шкафы управления<br/>
              <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                нового поколения
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
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 shadow-lg">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки и производства систем автоматизации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Cpu" className="text-white" size={24} />
                </div>
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

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Gauge" className="text-white" size={24} />
                </div>
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

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <CardTitle className="text-slate-800">Корпуса и люки из нержавейки</CardTitle>
                <CardDescription>
                  Производство корпусов из нержавеющей стали и технологических люков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Корпуса AISI 304, 316, 316L</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Люки овальные 340×440</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Люки кольцевые DN400, DN450</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Давление до 0.6 МПа</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши решения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ознакомьтесь с нашими продуктами и рассчитайте стоимость
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/models3d">
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Box" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-foreground">3D Модели</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">
                    Интерактивный просмотр шкафов управления
                  </p>
                </CardContent>
              </Card>
            </a>
            
            <a href="/hatches">
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Circle" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-foreground">Люки</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">
                    Овальные и кольцевые люки из нержавейки
                  </p>
                </CardContent>
              </Card>
            </a>
            
            <a href="/pricing">
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="DollarSign" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-foreground">Прайс</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">
                    Цены на корпуса из нержавеющей стали
                  </p>
                </CardContent>
              </Card>
            </a>
            
            <a href="/calculator">
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/80 to-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Calculator" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-foreground">Калькулятор</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">
                    Рассчет стоимости индивидуального проекта
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <ProjectGallery />

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
                <p className="text-white mb-2">+7 (3412) 555-123</p>
                <p className="text-white">+7 (800) 987-65-43</p>
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
                <p className="text-white mb-2">info@tap-tech.ru</p>
                <p className="text-white">sales@tap-tech.ru</p>
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
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Написать в WhatsApp
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
              © 2024 ТАП. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;