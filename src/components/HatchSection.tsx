import React, { useState } from 'react';
import HatchCardComponent from '@/components/hatches/HatchCardComponent';
import ImageModal from '@/components/hatches/ImageModal';

const HatchSection = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [expandedBlueprint, setExpandedBlueprint] = useState<number | null>(null);
  const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set([1, 2]));
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  
  const hatchData = [
    {
      id: 1,
      name: "Люк овальный самоуплотняющийся 340х440",
      model: "Аналог 6009ECO",
      features: ["Самоуплотняющийся", "Овальная форма", "Нержавеющая сталь AISI304 крышка 2,5 мм, горловина 3 мм, для 0.4 МПа", "Нержавеющая сталь AISI304 крышка 3 мм, горловина 3 мм, для 0.6 МПа", "Опциональный кронштейн"],
      price: "от 23 800,00 ₽",
      image: "https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg",
      blueprint: "https://cdn.poehali.dev/files/970282f0-86f2-42b7-89cc-ce45f9ead2a8.png"
    },
    {
      id: 2,
      name: "Люк кольцевой с поворотно-откидной крышкой",
      model: "Промышленный тип", 
      features: ["Поворотно-откидная крышка", "Кольцевая конструкция", "Нержавеющая сталь AISI304 или AISI316", "Высота горловины от 100 мм до 400 мм"],
      price: "от 11 620,00 ₽",
      image: "https://cdn.poehali.dev/files/e57d06e3-e0fd-4542-8719-4a013db706a7.png",
      blueprint: "https://cdn.poehali.dev/files/4eff3f2e-7965-475d-845b-5e70ee4647f2.png"
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

  const handleRowSelect = (rowId: string | null) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  const handleBlueprintToggle = (hatchId: number) => {
    setExpandedBlueprint(expandedBlueprint === hatchId ? null : hatchId);
  };

  const handleFeaturesToggle = (hatchId: number) => {
    setExpandedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(hatchId)) {
        newSet.delete(hatchId);
      } else {
        newSet.add(hatchId);
      }
      return newSet;
    });
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
            <HatchCardComponent
              key={hatch.id}
              hatch={hatch}
              selectedRow={selectedRow}
              expandedBlueprint={expandedBlueprint}
              expandedFeatures={expandedFeatures}
              onImageClick={onImageClick}
              onRowSelect={handleRowSelect}
              onBlueprintToggle={handleBlueprintToggle}
              onFeaturesToggle={handleFeaturesToggle}
              onContactClick={handleContactClick}
            />
          ))}
        </div>
      </div>
      
      <ImageModal 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default HatchSection;