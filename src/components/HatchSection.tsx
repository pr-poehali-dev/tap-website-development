import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HatchSection = () => {
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);
  const hatchData = [
    {
      id: 1,
      name: "Люк овальный самоуплотняющийся",
      size: "340×440 мм",
      model: "Аналог 6009ECO",
      pressure: ["0.6 МПа"],
      features: ["Самоуплотняющийся", "Овальная форма", "Нержавеющая сталь AISI304 крышка 2,5 мм, горловина 3 мм", "Опциональный кронштейн"],
      price: "от 23 800,00 ₽",
      image: "https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg",
      blueprint: "https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png"
    },
    {
      id: 2,
      name: "Люк кольцевой с поворотно-откидной крышкой",
      size: "DN400 / DN450",
      model: "Промышленный тип",
      pressure: [],
      features: ["Поворотно-откидная крышка", "Кольцевая конструкция", "Нержавеющая сталь AISI304 или AISI316", "Высота горловины от 100 мм до 400 мм"],
      price: "от 11 620,00 ₽",
      image: "https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png",
      blueprint: "https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Технологические люки
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Производим люки из нержавеющей стали, предназначены для герметичного закрывания емкостей с хранимыми или транспортируемыми пищевыми продуктами. Используемая для изготовления люков нержавеющая сталь обладает не только высокой устойчивостью к воздействию агрессивной среды, но и химической инертностью.
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
                <div>
                  <CardTitle className="text-xl text-foreground mb-3">
                    {hatch.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary mb-2">{hatch.price}</div>
                  <p className="text-sm text-muted-foreground">
                    {hatch.model}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className={hatch.pressure.length > 0 ? "grid grid-cols-2 gap-4" : "grid grid-cols-1 gap-4"}>
                  <div>
                    <span className="text-sm font-medium text-foreground">Размер:</span>
                    <p className="text-lg font-semibold text-primary">{hatch.size}</p>
                  </div>
                  {hatch.pressure.length > 0 && (
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
                  )}
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



                <div className="mt-4">
                  <img 
                    src={hatch.blueprint} 
                    alt={`Чертеж ${hatch.name}`} 
                    className="w-full rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedBlueprint(hatch.blueprint)}
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Технический чертеж с размерами<br />
                    • Нажмите для увеличения
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
      
      {/* Blueprint Modal */}
      {selectedBlueprint && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBlueprint(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedBlueprint} 
              alt="Увеличенный чертеж" 
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={() => setSelectedBlueprint(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all"
            >
              <Icon name="X" className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HatchSection;