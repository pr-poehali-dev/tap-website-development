import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HatchSection = () => {
  const hatchData = [
    {
      id: 1,
      name: "Люк овальный самоуплотняющийся",
      size: "340×440 мм",
      model: "Аналог 6009ECO",
      pressure: ["0.4 МПа", "0.6 МПа"],
      features: ["Самоуплотняющийся", "Овальная форма", "Нержавеющая сталь", "Быстрое открытие"],
      price: "от 25,000 ₽",
      image: "/img/093c540c-9b4d-433d-863c-453b74e39adc.jpg"
    },
    {
      id: 2,
      name: "Люк кольцевой с поворотно-откидной крышкой",
      size: "DN400 / DN450",
      model: "Промышленный тип",
      pressure: ["0.4 МПа", "0.6 МПа"],
      features: ["Поворотно-откидная крышка", "Кольцевая конструкция", "Уплотнение EPDM", "Болтовое соединение"],
      price: "от 35,000 ₽",
      image: "/img/b494f9d9-478f-4f1e-8bd3-5fe9068d30d8.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Технологические люки
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Производим овальные и кольцевые люки из нержавеющей стали для промышленного применения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {hatchData.map((hatch) => (
            <Card key={hatch.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden">
                <img 
                  src={hatch.image} 
                  alt={hatch.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Новинка
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {hatch.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {hatch.model}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{hatch.price}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-foreground">Размер:</span>
                    <p className="text-lg font-semibold text-primary">{hatch.size}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Давление:</span>
                    <div className="flex gap-2 mt-1">
                      {hatch.pressure.map((p, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-sm font-medium text-foreground block mb-2">
                    Характеристики:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {hatch.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Icon name="CheckCircle2" className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex gap-3">
                    <Button className="flex-1" size="sm">
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                      Заказать
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="FileText" className="w-4 h-4 mr-2" />
                      Чертеж
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-6 max-w-md mx-auto bg-accent/5">
            <div className="text-center">
              <Icon name="Settings" className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Индивидуальные решения
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Производим люки по индивидуальным чертежам и техническим требованиям заказчика
              </p>
              <Button variant="outline" size="sm">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Обсудить проект
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HatchSection;