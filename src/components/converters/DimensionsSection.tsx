import React from 'react';

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
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
      >
        <h3 className="text-xl font-bold text-gray-800">ГАБАРИТЫ И ВЕС</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{isExpanded ? 'Скрыть' : 'Показать'}</span>
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
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onImageClick({src: 'https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png', alt: 'Габаритные размеры AD30'})}
                title="Нажмите для увеличения"
              >
                <img 
                  src="https://cdn.poehali.dev/files/56a32b05-f2cc-4e05-b955-50850ca5beba.png" 
                  alt="Габаритные размеры AD30" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-xs">Номинальная мощность<br/>(нормальный режим)<br/>кВт</th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs" colSpan={3}>габаритные размеры, мм</th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs" colSpan={2}>Монтажные размеры, мм</th>
                      <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-xs">Вес, кг</th>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2"></th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs text-blue-600">Ш</th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs text-red-600">В</th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs text-green-600">Г</th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs text-blue-600">А</th>
                      <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-xs text-red-600">В</th>
                      <th className="border border-gray-300 px-3 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-center font-medium text-xs">0,4 - 2,2</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-blue-600 font-medium text-xs">83</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-red-600 font-medium text-xs">149</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-green-600 font-medium text-xs">111</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-blue-600 text-xs">66</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-red-600 text-xs">136</td>
                      <td className="border border-gray-300 px-3 py-2 text-center text-xs">0,9</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-center font-medium text-xs">4,0 - 7,5</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-blue-600 font-medium text-xs">98</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-red-600 font-medium text-xs">170</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-green-600 font-medium text-xs">124</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-blue-600 text-xs">80</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-red-600 text-xs">157</td>
                      <td className="border border-gray-300 px-3 py-2 text-center text-xs">1,3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-center font-medium text-xs">11 - 15</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-blue-600 font-medium text-xs">135</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-red-600 font-medium text-xs">228</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-green-600 font-medium text-xs">160</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-blue-600 text-xs">112</td>
                      <td className="border border-gray-300 px-2 py-2 text-center text-red-600 text-xs">200</td>
                      <td className="border border-gray-300 px-3 py-2 text-center text-xs">3,5</td>
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