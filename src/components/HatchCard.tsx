import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import OvalHatchTable from "./OvalHatchTable";
import RingHatchTable from "./RingHatchTable";
import HatchFeatures from "./HatchFeatures";
import TechnicalBlueprint from "./TechnicalBlueprint";

interface HatchCardProps {
  hatch: {
    id: number;
    name: string;
    model: string;
    features: string[];
    price: string;
    image: string;
    blueprint: string;
    tableData: any[];
  };
  selectedRow: string | null;
  setSelectedRow: (row: string | null) => void;
  expandedBlueprint: number | null;
  setExpandedBlueprint: (id: number | null) => void;
  expandedFeatures: number | null;
  setExpandedFeatures: (id: number | null) => void;
  onImageClick: (image: { src: string; alt: string }) => void;
  handleContactClick: () => void;
}

const HatchCard: React.FC<HatchCardProps> = ({
  hatch,
  selectedRow,
  setSelectedRow,
  expandedBlueprint,
  setExpandedBlueprint,
  expandedFeatures,
  setExpandedFeatures,
  onImageClick,
  handleContactClick,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 md:p-8">
        {/* Top section: Photo left, Text right */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Left: Hatch photo */}
          <div className="relative">
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
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                {hatch.name}
              </h3>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {hatch.price}
              </div>
              <p className="text-lg text-muted-foreground">{hatch.model}</p>
            </div>

            {/* Список моделей */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                Таблица вариантов изготовления
              </h4>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Стоимость указана с НДС. Не является публичной офертой.
              </p>

              {/* Oval hatch table */}
              {hatch.id === 1 && (
                <OvalHatchTable
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                  handleContactClick={handleContactClick}
                />
              )}

              {/* Ring hatch table */}
              {hatch.id === 2 && (
                <RingHatchTable
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                  handleContactClick={handleContactClick}
                />
              )}
            </div>

            {/* Характеристики */}
            <HatchFeatures
              hatch={hatch}
              expandedFeatures={expandedFeatures}
              setExpandedFeatures={setExpandedFeatures}
            />
          </div>
        </div>

        {/* Technical Blueprint */}
        <TechnicalBlueprint
          hatch={hatch}
          expandedBlueprint={expandedBlueprint}
          setExpandedBlueprint={setExpandedBlueprint}
          onImageClick={onImageClick}
        />
      </CardContent>
    </Card>
  );
};

export default HatchCard;
