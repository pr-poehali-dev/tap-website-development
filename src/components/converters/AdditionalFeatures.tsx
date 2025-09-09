import React from 'react';

interface AdditionalFeaturesProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const AdditionalFeatures = ({ isExpanded, setIsExpanded }: AdditionalFeaturesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">{isExpanded ? 'Скрыть' : 'Показать'}</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-3">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Автонастройка на двигатель</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Останов насоса при отсутствии расхода (спящий режим)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Энергосберегающий режим</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Встроенный ПЛК (работа в цикле по фиксированным скоростям)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Функция качания частоты (вобуляция)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Встроенный порт Modbus</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Пожарный режим</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Защитное покрытие плат 3C3</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Опциональный выносной пульт с возможностью копирования параметров</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>3 года гарантии</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdditionalFeatures;