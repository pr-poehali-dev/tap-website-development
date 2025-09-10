import React from 'react';
import Icon from '@/components/ui/icon';

interface DimensionsSectionProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  onImageClick: (image: {src: string, alt: string}) => void;
}

const DimensionsSection = ({ isExpanded, setIsExpanded, onImageClick }: DimensionsSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">ГАБАРИТЫ И ВЕС</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">{isExpanded ? 'Скрыть' : 'Показать'}</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <div 
                className="relative overflow-hidden cursor-pointer group/image rounded-lg"
                onClick={() => onImageClick({src: 'https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png', alt: 'Габаритные размеры AD30'})}
                title="Нажмите для увеличения"
              >
                <img 
                  src="https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png" 
                  alt="Габаритные размеры AD30" 
                  className="w-full h-auto rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                    <Icon name="ZoomIn" className="text-gray-800" size={20} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 min-w-[600px] text-xs sm:text-sm lg:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-1 sm:px-3 py-2 text-center font-semibold whitespace-nowrap text-xs sm:text-sm">Мощность<br className="hidden sm:inline"/><span className="sm:hidden"> </span>(кВт)</th>
                      <th className="border border-gray-300 px-1 sm:px-2 py-2 text-center font-semibold text-xs sm:text-sm" colSpan={3}>Габариты, мм</th>
                      <th className="border border-gray-300 px-1 sm:px-2 py-2 text-center font-semibold text-xs sm:text-sm" colSpan={2}>Монтаж, мм</th>
                      <th className="border border-gray-300 px-1 sm:px-3 py-2 text-center font-semibold text-xs sm:text-sm">Вес</th>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2"></th>
                      <th className="border border-gray-300 px-1 py-1 sm:py-2 text-center font-semibold text-blue-600 text-xs sm:text-sm">Ш</th>
                      <th className="border border-gray-300 px-1 py-1 sm:py-2 text-center font-semibold text-red-600 text-xs sm:text-sm">В</th>
                      <th className="border border-gray-300 px-1 py-1 sm:py-2 text-center font-semibold text-green-600 text-xs sm:text-sm">Г</th>
                      <th className="border border-gray-300 px-1 py-1 sm:py-2 text-center font-semibold text-blue-600 text-xs sm:text-sm">А</th>
                      <th className="border border-gray-300 px-1 py-1 sm:py-2 text-center font-semibold text-red-600 text-xs sm:text-sm">В</th>
                      <th className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center font-medium text-xs sm:text-sm whitespace-nowrap">0,4-2,2</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-blue-600 font-medium text-xs sm:text-sm">83</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-red-600 font-medium text-xs sm:text-sm">149</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-green-600 font-medium text-xs sm:text-sm">111</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-blue-600 text-xs sm:text-sm">66</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-red-600 text-xs sm:text-sm">136</td>
                      <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center text-xs sm:text-sm">0,9</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center font-medium text-xs sm:text-sm whitespace-nowrap">4,0-7,5</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-blue-600 font-medium text-xs sm:text-sm">98</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-red-600 font-medium text-xs sm:text-sm">170</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-green-600 font-medium text-xs sm:text-sm">124</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-blue-600 text-xs sm:text-sm">80</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-red-600 text-xs sm:text-sm">157</td>
                      <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center text-xs sm:text-sm">1,3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center font-medium text-xs sm:text-sm whitespace-nowrap">11-15</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-blue-600 font-medium text-xs sm:text-sm">135</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-red-600 font-medium text-xs sm:text-sm">228</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-green-600 font-medium text-xs sm:text-sm">160</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-blue-600 text-xs sm:text-sm">112</td>
                      <td className="border border-gray-300 px-1 py-1 sm:py-2 text-center text-red-600 text-xs sm:text-sm">200</td>
                      <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center text-xs sm:text-sm">3,5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DimensionsSection;