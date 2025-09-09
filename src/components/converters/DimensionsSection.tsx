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
                onClick={() => onImageClick({src: 'https://cdn.poehali.dev/files/1e7a7c84-5bb2-4a2a-9e2f-c6d8e4a3b1f0.jpg', alt: 'Габаритные размеры AD30'})}
                title="Нажмите для увеличения"
              >
                <img 
                  src="https://cdn.poehali.dev/files/1e7a7c84-5bb2-4a2a-9e2f-c6d8e4a3b1f0.jpg" 
                  alt="Габаритные размеры AD30" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Модель</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">A, мм</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">B, мм</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">C, мм</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Вес, кг</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">0.4-2.2кВт</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">155</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">100</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">145</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1.2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">4-5.5кВт</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">200</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">120</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">165</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">2.1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-center">7.5-18.5кВт</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">250</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">150</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">195</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">4.2</td>
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