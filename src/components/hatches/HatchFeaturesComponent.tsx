import React from 'react';
import Icon from '@/components/ui/icon';

interface HatchFeaturesProps {
  hatchId: number;
  features: string[];
  expanded: boolean;
  onToggle: () => void;
}

const HatchFeaturesComponent: React.FC<HatchFeaturesProps> = ({ 
  features, 
  expanded, 
  onToggle 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mt-4 md:mt-6">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[50px]"
      >
        <h4 className="text-base md:text-lg font-semibold text-gray-800 flex-1 pr-2">ХАРАКТЕРИСТИКИ</h4>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
            {expanded ? 'Скрыть' : 'Показать'}
          </span>
          <span className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {expanded && (
        <div className="grid grid-cols-1 gap-3 px-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground break-words leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HatchFeaturesComponent;