import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import HatchTable from "./HatchTable";
import HatchFeaturesComponent from "./HatchFeaturesComponent";
import HatchBlueprintComponent from "./HatchBlueprintComponent";

interface HatchData {
  id: number;
  name: string;
  model: string;
  features: string[];
  price: string;
  image: string;
  blueprint: string;
}

interface HatchCardProps {
  hatch: HatchData;
  selectedRow: string | null;
  expandedBlueprint: number | null;
  expandedFeatures: number | null;
  onImageClick: (image: { src: string; alt: string }) => void;
  onRowSelect: (rowId: string | null) => void;
  onBlueprintToggle: (hatchId: number) => void;
  onFeaturesToggle: (hatchId: number) => void;
  onContactClick: () => void;
}

const HatchCardComponent: React.FC<HatchCardProps> = ({
  hatch,
  selectedRow,
  expandedBlueprint,
  expandedFeatures,
  onImageClick,
  onRowSelect,
  onBlueprintToggle,
  onFeaturesToggle,
  onContactClick,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-2 md:p-8">
        {/* Top section: Photo left, Text right */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Left: Hatch photo */}
          <div className="relative w-full max-w-[250px] mx-auto lg:max-w-full">
            <div
              className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() =>
                onImageClick({ src: hatch.image, alt: hatch.name })
              }
            >
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
            <div className="px-2 md:px-0">
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 break-words leading-tight">
                {hatch.name}
              </h3>
              <div className="text-xl md:text-3xl font-bold text-primary mb-2">
                {hatch.price}
              </div>
              <p className="text-base md:text-lg text-muted-foreground break-words">
                {hatch.model}
              </p>
            </div>

            {/* Список моделей */}
            <div className="px-2 md:px-0">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                Таблица вариантов изготовления
              </h4>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 break-words leading-relaxed">
                Стоимость указана с НДС. Не является публичной офертой.
              </p>

              <HatchTable
                hatchId={hatch.id}
                selectedRow={selectedRow}
                onRowSelect={onRowSelect}
                onContactClick={onContactClick}
              />
            </div>

            {/* Характеристики под спойлером */}
            <HatchFeaturesComponent
              hatchId={hatch.id}
              features={hatch.features}
              expanded={expandedFeatures === hatch.id}
              onToggle={() => onFeaturesToggle(hatch.id)}
            />
          </div>
        </div>

        {/* Spoiler for Technical Blueprint */}
        <HatchBlueprintComponent
          hatchId={hatch.id}
          hatchName={hatch.name}
          blueprintSrc={hatch.blueprint}
          expanded={expandedBlueprint === hatch.id}
          onToggle={() => onBlueprintToggle(hatch.id)}
          onImageClick={onImageClick}
        />
      </CardContent>
    </Card>
  );
};

export default HatchCardComponent;
