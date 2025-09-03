import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const Aisi = () => {
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
      <Header currentPage="pricing" />

      {/* Price Section */}
      <section className="py-20 px-6 pt-44">
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
                Контакты
              </h3>
              <p className="text-muted-foreground mb-6">
                Производим корпуса по индивидуальным требованиям. Любые размеры, степень защиты до IP68, 
                специальные материалы и покрытия.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                  <a href="tel:+79225106088" className="text-sm text-muted-foreground hover:text-primary transition-colors">+7 (922) 510-60-88</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@tap18.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@tap18.ru</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Адрес</h4>
                  <p className="text-sm text-muted-foreground">г. Ижевск, ул. Молодёжная 12Б</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aisi;