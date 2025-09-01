import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import CostCalculator from '@/components/CostCalculator';
import ProjectGallery from '@/components/ProjectGallery';
import Cabinet3DViewer from '@/components/Cabinet3DViewer';

const Index = () => {
  const priceData = [
    { size: "300x400x200", material: "AISI 304", price: "45,000", features: ["IP65", "Смотровое окно", "Замок"] },
    { size: "400x500x250", material: "AISI 304", price: "62,000", features: ["IP66", "Вентиляция", "DIN-рейка"] },
    { size: "500x600x300", material: "AISI 316", price: "85,000", features: ["IP67", "Подогрев", "Кабельные вводы"] },
    { size: "600x800x350", material: "AISI 316L", price: "120,000", features: ["IP68", "Антивандальный", "Терморегулятор"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Icon name="Settings" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">ТАП</h1>
                <p className="text-sm text-slate-600">Технологии автоматизации производств</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#products" className="text-slate-600 hover:text-blue-600 transition-colors">Продукция</a>
              <a href="#price" className="text-slate-600 hover:text-blue-600 transition-colors">Прайс</a>
              <a href="#contacts" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🏭 Промышленная автоматизация
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Шкафы управления<br/>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Разрабатываем и производим шкафы управления с программированием ПЛК 
              и сенсорных панелей оператора. Поставляем КИПиА и корпуса из нержавеющей стали.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
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
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Полный цикл разработки и производства систем автоматизации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Cpu" className="text-white" size={24} />
                </div>
                <CardTitle className="text-slate-800">Шкафы управления</CardTitle>
                <CardDescription>
                  Проектирование и сборка шкафов управления с программированием ПЛК
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Siemens, ABB, Schneider</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Программирование ПЛК</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Сенсорные панели HMI</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Пуско-наладочные работы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Gauge" className="text-white" size={24} />
                </div>
                <CardTitle className="text-slate-800">КИПиА</CardTitle>
                <CardDescription>
                  Поставка контрольно-измерительных приборов и средств автоматизации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Датчики и преобразователи</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Регулирующая арматура</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Приборы учёта и контроля</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Системы связи и передачи данных</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <CardTitle className="text-slate-800">Корпуса из нержавейки</CardTitle>
                <CardDescription>
                  Производство и поставка корпусов из нержавеющей стали для промышленности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />AISI 304, 316, 316L</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Степень защиты до IP68</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Любые размеры под заказ</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-600 mr-2" size={16} />Быстрая поставка со склада</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Прайс на корпуса из нержавеющей стали</h2>
            <p className="text-slate-600">Актуальные цены на складские позиции</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceData.map((item, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {item.material}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">{item.price} ₽</div>
                      <div className="text-xs text-slate-500">с НДС</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-800">{item.size} мм</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Icon name="CheckCircle2" className="text-green-600 mr-2" size={14} />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" size="sm">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">Нужны другие размеры или характеристики?</p>
            <Button variant="outline" size="lg">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость под заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Калькулятор стоимости
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Рассчитайте стоимость вашего проекта и оставьте заявку
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* Project Gallery */}
      <ProjectGallery />

      {/* 3D Viewer */}
      <Cabinet3DViewer />

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">О компании ТАП</h2>
              <p className="text-slate-600 mb-4">
                Более 10 лет мы специализируемся на разработке и производстве систем автоматизации 
                для промышленных предприятий. Наша команда инженеров имеет богатый опыт работы 
                с ведущими мировыми брендами промышленной автоматизации.
              </p>
              <p className="text-slate-600 mb-6">
                Мы гарантируем высокое качество продукции, соблюдение сроков поставки 
                и комплексную техническую поддержку на всех этапах реализации проекта.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-slate-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Наши преимущества:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Award" className="text-blue-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-800">Сертифицированное производство</h4>
                    <p className="text-sm text-slate-600">ISO 9001, все необходимые разрешения</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="text-blue-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-800">Быстрые сроки</h4>
                    <p className="text-sm text-slate-600">От проекта до пуска в эксплуатацию</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Headphones" className="text-blue-600 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-800">Техподдержка 24/7</h4>
                    <p className="text-sm text-slate-600">Гарантийное и постгарантийное обслуживание</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-slate-300">Свяжитесь с нами для обсуждения вашего проекта</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 mb-2">+7 (495) 123-45-67</p>
                <p className="text-slate-300">+7 (800) 987-65-43</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 mb-2">info@tap-auto.ru</p>
                <p className="text-slate-300">sales@tap-auto.ru</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 mb-2">г. Москва,</p>
                <p className="text-slate-300">ул. Промышленная, д. 15</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Icon name="Settings" className="text-white" size={16} />
              </div>
              <div>
                <div className="text-white font-bold">ТАП</div>
                <div className="text-xs text-slate-400">Технологии автоматизации производств</div>
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 ТАП. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;