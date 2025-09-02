import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const priceData = [
    { size: "300x400x200", material: "AISI 304", price: "45,000", features: ["IP65", "Смотровое окно", "Замок"] },
    { size: "400x500x250", material: "AISI 304", price: "62,000", features: ["IP66", "Вентиляция", "DIN-рейка"] },
    { size: "500x600x300", material: "AISI 316", price: "85,000", features: ["IP67", "Подогрев", "Кабельные вводы"] },
    { size: "600x800x350", material: "AISI 316L", price: "120,000", features: ["IP68", "Антивандальный", "Терморегулятор"] },
    { size: "800x1000x400", material: "AISI 316L", price: "165,000", features: ["IP68", "Морское исполнение", "Усиленная конструкция"] },
    { size: "1000x1200x500", material: "AISI 316L", price: "220,000", features: ["IP68", "Взрывозащита Ex", "Специальные уплотнения"] }
  ];

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
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="sr-only">Telegram</span>
              </a>
              <a href="https://vk.com/asutp_tap18" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 2.842-4.004 3.138-5.36.153-.699 0-1.215-.994-1.215h-3.28c-.836 0-1.215.441-1.411.932 0 0-1.635 3.993-3.953 6.591-.75.75-.108.994-.108 1.578v3.262c0 .441.357.798.798.798h2.506c.836 0 1.006-.357 1.006-.798v-2.366s3.393.241 3.393 3.262c0 .441.357.798.798.798h2.506c.836 0 1.215-.535.994-1.215-.304-1.356-3.133-5.355-3.138-5.36z"/>
                </svg>
                <span className="sr-only">VK</span>
              </a>
            </div>
          </div>
        </div>
        
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
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="/pricing" className="text-primary font-medium">Корпуса AISI304</a>
              <a href="/hatches" className="text-muted-foreground hover:text-primary transition-colors">Люки</a>
              <a href="/#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Price Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Прайс-лист на корпуса из нержавеющей стали
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Актуальные цены на складские позиции с доставкой по России
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceData.map((item, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {item.material}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{item.price} ₽</div>
                      <div className="text-xs text-muted-foreground">с НДС</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">{item.size} мм</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Icon name="CheckCircle2" className="text-primary mr-3" size={16} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Card className="inline-block p-8 max-w-2xl mx-auto bg-accent/5">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Нужны другие размеры или характеристики?
              </h3>
              <p className="text-muted-foreground mb-6">
                Производим корпуса по индивидуальным требованиям. Любые размеры, степень защиты до IP68, 
                специальные материалы и покрытия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/calculator">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="Calculator" className="mr-2" size={20} />
                    Рассчитать стоимость
                  </Button>
                </a>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 px-6">
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

export default Pricing;