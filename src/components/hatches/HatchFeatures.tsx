import React from 'react';
import Icon from '@/components/ui/icon';
import { HatchData } from './HatchCard';

interface HatchFeaturesProps {
  hatch: HatchData;
  expandedBlueprint: number | null;
  setExpandedBlueprint: (id: number | null) => void;
  expandedFeatures: number | null;
  setExpandedFeatures: (id: number | null) => void;
  onImageClick: (imageData: {src: string, alt: string}) => void;
}

const HatchFeatures: React.FC<HatchFeaturesProps> = ({
  hatch,
  expandedBlueprint,
  setExpandedBlueprint,
  expandedFeatures,
  setExpandedFeatures,
  onImageClick
}) => {
  return (
    <>
      {/* Характеристики под спойлером */}
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mt-6">
        <button 
          onClick={() => setExpandedFeatures(expandedFeatures === hatch.id ? null : hatch.id)}
          className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[50px]"
        >
          <h4 className="text-base md:text-lg font-semibold text-gray-800 flex-1 pr-2 break-words">ХАРАКТЕРИСТИКИ</h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
              {expandedFeatures === hatch.id ? 'Скрыть' : 'Показать'}
            </span>
            <span className={`transform transition-transform duration-300 ${expandedFeatures === hatch.id ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
        </button>
        
        {expandedFeatures === hatch.id && (
          <div className="grid grid-cols-1 gap-3">
            {hatch.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground break-words">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Spoiler for Technical Blueprint */}
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mt-6 md:mt-8">
        <button 
          onClick={() => setExpandedBlueprint(expandedBlueprint === hatch.id ? null : hatch.id)}
          className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
        >
          <h3 className="text-base md:text-lg font-bold text-gray-800 flex-1 pr-2 break-words">ТЕХНИЧЕСКИЙ ЧЕРТЁЖ</h3>
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
            <p className="text-xs text-muted-foreground mt-2 text-center break-words">
              Нажмите для увеличения
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default HatchFeatures;