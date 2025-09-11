import React from 'react';
import Icon from '@/components/ui/icon';

interface HatchBlueprintProps {
  hatchId: number;
  name: string;
  blueprint: string;
  expandedBlueprint: number | null;
  setExpandedBlueprint: (id: number | null) => void;
  onImageClick: (image: {src: string, alt: string}) => void;
}

const HatchBlueprint: React.FC<HatchBlueprintProps> = ({
  hatchId,
  name,
  blueprint,
  expandedBlueprint,
  setExpandedBlueprint,
  onImageClick
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mt-6 md:mt-8">
      <button 
        onClick={() => setExpandedBlueprint(expandedBlueprint === hatchId ? null : hatchId)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 flex-1 pr-2">ТЕХНИЧЕСКИЙ ЧЕРТЁЖ</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
            {expandedBlueprint === hatchId ? 'Скрыть' : 'Показать'}
          </span>
          <span className={`transform transition-transform duration-300 ${expandedBlueprint === hatchId ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {expandedBlueprint === hatchId && (
        <div className="space-y-6">
          <div className="relative group cursor-pointer"
               onClick={() => onImageClick({src: blueprint, alt: `Чертеж ${name}`})}>
            <img 
              src={blueprint} 
              alt={`Чертеж ${name}`} 
              loading="lazy"
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
  );
};

export default HatchBlueprint;