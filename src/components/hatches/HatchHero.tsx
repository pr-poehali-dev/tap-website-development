import React from 'react';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HatchHeroProps {
  name: string;
  model: string;
  price: string;
  image: string;
  onImageClick: (image: {src: string, alt: string}) => void;
}

const HatchHero: React.FC<HatchHeroProps> = ({
  name,
  model,
  price,
  image,
  onImageClick
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
      {/* Left: Hatch photo */}
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden rounded-lg group cursor-pointer"
             onClick={() => onImageClick({src: image, alt: name})}>
          <img 
            src={image} 
            alt={name} 
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
            {name}
          </h3>
          <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{price}</div>
          <p className="text-lg text-muted-foreground">
            {model}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HatchHero;