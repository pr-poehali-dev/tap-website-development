import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HatchSection = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [expandedBlueprint, setExpandedBlueprint] = useState<number | null>(null);
  
  const hatchData = [
    {
      id: 1,
      name: "Люк овальный самоуплотняющийся",
      model: "Аналог 6009ECO",
      features: ["Самоуплотняющийся", "Овальная форма", "Нержавеющая сталь AISI304 крышка 2,5 мм, горловина 3 мм", "Опциональный кронштейн"],
      price: "от 23 800,00 ₽",
      image: "https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg",
      blueprint: "https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png",
      tableData: [
        { workingPressure: "0.4 МПа", bracket: "Нет", deliveryTime: "В наличии", price: "23 800,00 ₽" },
        { workingPressure: "", bracket: "Да", deliveryTime: "В наличии", price: "26 600,00 ₽" },
        { workingPressure: "0.6 МПа", bracket: "Нет", deliveryTime: "В наличии", price: "26 600,00 ₽" },
        { workingPressure: "", bracket: "Да", deliveryTime: "В наличии", price: "29 400,00 ₽" }
      ]
    },
    {
      id: 2,
      name: "Люк кольцевой с поворотно-откидной крышкой",
      model: "Промышленный тип", 
      features: ["Поворотно-откидная крышка", "Кольцевая конструкция", "Нержавеющая сталь AISI304 или AISI316", "Высота горловины от 100 мм до 400 мм"],
      price: "от 11 620,00 ₽",
      image: "https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png",
      blueprint: "https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png",
      tableData: [
        { material: "AISI304", diameter: "DN400", neckHeight: "100 мм", deliveryTime: "В наличии", price: "11 620,00 ₽" },
        { material: "", diameter: "", neckHeight: "150 мм", deliveryTime: "В наличии", price: "13 580,00 ₽" },
        { material: "", diameter: "DN450", neckHeight: "100 мм", deliveryTime: "В наличии", price: "12 600,00 ₽" },
        { material: "", diameter: "", neckHeight: "150 мм", deliveryTime: "В наличии", price: "14 000,00 ₽" },
        { material: "", diameter: "", neckHeight: "300 мм", deliveryTime: "В наличии", price: "19 600,00 ₽" },
        { material: "", diameter: "", neckHeight: "400 мм", deliveryTime: "В наличии", price: "22 400,00 ₽" },
        { material: "AISI316", diameter: "DN400", neckHeight: "100 мм", deliveryTime: "Под заказ", price: "17 780,00 ₽" },
        { material: "", diameter: "", neckHeight: "150 мм", deliveryTime: "Под заказ", price: "19 740,00 ₽" },
        { material: "", diameter: "DN450", neckHeight: "100 мм", deliveryTime: "Под заказ", price: "21 980,00 ₽" },
        { material: "", diameter: "", neckHeight: "150 мм", deliveryTime: "Под заказ", price: "22 820,00 ₽" }
      ]
    }
  ];

  const onImageClick = (image: {src: string, alt: string}) => {
    setSelectedImage(image);
  };

  const handleContactClick = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        <div className="space-y-16 max-w-7xl mx-auto">
          {hatchData.map((hatch) => (
            <Card key={hatch.id} className="overflow-hidden">
              <CardContent className="p-8">
                {/* Top section: Photo left, Text right */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Left: Hatch photo */}
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden rounded-lg group cursor-pointer"
                         onClick={() => onImageClick({src: hatch.image, alt: hatch.name})}>
                      <img 
                        src={hatch.image} 
                        alt={hatch.name} 
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Icon name="ZoomIn" className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Новинка
                      </Badge>
                    </div>
                  </div>

                  {/* Right: Text content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {hatch.name}
                      </h3>
                      <div className="text-3xl font-bold text-primary mb-2">{hatch.price}</div>
                      <p className="text-lg text-muted-foreground">
                        {hatch.model}
                      </p>
                    </div>



                    <div>
                      <span className="text-sm font-medium text-foreground block mb-3">
                        Характеристики:
                      </span>
                      <div className="grid grid-cols-1 gap-3">
                        {hatch.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spoiler for Technical Blueprint */}
                <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                  <button 
                    onClick={() => setExpandedBlueprint(expandedBlueprint === hatch.id ? null : hatch.id)}
                    className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">ТЕХНИЧЕСКИЙ ЧЕРТЁЖ</h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
                        {expandedBlueprint === hatch.id ? 'Скрыть' : 'Показать'}
                      </span>
                      <span className={`transform transition-transform duration-300 ${expandedBlueprint === hatch.id ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </button>
                  
                  {expandedBlueprint === hatch.id && (
                    <div className="space-y-6">
                      <div className="relative group cursor-pointer"
                           onClick={() => onImageClick({src: hatch.blueprint, alt: `Чертеж ${hatch.name}`})}>
                        <img 
                          src={hatch.blueprint} 
                          alt={`Чертеж ${hatch.name}`} 
                          className="w-full rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-lg">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Icon name="ZoomIn" className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Нажмите для увеличения
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={() => setSelectedImage(null)}
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