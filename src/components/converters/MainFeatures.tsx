import React from 'react';

interface MainFeaturesProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const MainFeatures = ({ isExpanded, setIsExpanded }: MainFeaturesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">Основные функции</h3>
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
              <span>Регулирование скорости или момента асинхронных двигателей</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Поддержание регулируемого параметра (давления, температуры)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Векторный и скалярный режимы работы</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Нормальный и легкий режимы работы</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>4 дискретных входа (PNP/NPN), 1 дискретный (импульсный) выход и 1 аналоговый выход</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>1 аналоговый вход и 1 аналоговый выход</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Торможение постоянным током</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Защита двигателя</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Встроенный тормозной модуль</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Встроенный фильтр ЭМС</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Потенциометр задания на пульте</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainFeatures;