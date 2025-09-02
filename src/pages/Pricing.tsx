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