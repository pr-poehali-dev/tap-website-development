import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface HatchData {
  id: number;
  name: string;
  model: string;
  features: string[];
  price: string;
  image: string;
  blueprint: string;
  tableData: any[];
}

interface HatchCardProps {
  hatch: HatchData;
  onImageClick: (imageData: {src: string, alt: string}) => void;
}

const HatchCard: React.FC<HatchCardProps> = ({ hatch, onImageClick }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 md:p-8">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Left: Hatch photo */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden rounded-lg group cursor-pointer"
                 onClick={() => onImageClick({src: hatch.image, alt: hatch.name})}>
              <img 
                src={hatch.image} 
                alt={hatch.name} 
                loading="lazy"
                className="w-3/4 md:w-full h-full mx-auto object-cover transition-all duration-300 group-hover:scale-105"
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
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 break-words">{hatch.name}</h3>
              <div className="text-xl md:text-3xl font-bold text-primary mb-4">{hatch.price}</div>
              <p className="text-sm md:text-lg text-muted-foreground mb-6 break-words">{hatch.model}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HatchCard;