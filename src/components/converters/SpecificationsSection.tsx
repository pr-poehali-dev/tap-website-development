import React from 'react';

interface SpecificationsSectionProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const SpecificationsSection = ({ isExpanded, setIsExpanded }: SpecificationsSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
      >
        <h3 className="text-xl font-bold text-gray-800">ХАРАКТЕРИСТИКИ</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{isExpanded ? 'Скрыть' : 'Показать'}</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Напряжение питания</td>
                  <td className="border border-gray-300 px-4 py-3">1×220В ± 15% / 3×380В ± 15%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Частота питания</td>
                  <td className="border border-gray-300 px-4 py-3">50/60 Гц ± 5%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Напряжение на выходе</td>
                  <td className="border border-gray-300 px-4 py-3">3×(0~напряжение питания)В</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Частота на выходе</td>
                  <td className="border border-gray-300 px-4 py-3">0.5~400 Гц (векторный режим), 0.5~3200 Гц (скалярный режим)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Перегрузочная способность</td>
                  <td className="border border-gray-300 px-4 py-3">150% номинального тока в течение 60 с, 180% номинального тока в течение 10 с</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Точность управления скоростью</td>
                  <td className="border border-gray-300 px-4 py-3">± 0.2% номинальной скорости (векторный режим)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Температура эксплуатации</td>
                  <td className="border border-gray-300 px-4 py-3">-10°C ~ +40°C</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Влажность</td>
                  <td className="border border-gray-300 px-4 py-2">≤ 95% (без конденсации)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Высота</td>
                  <td className="border border-gray-300 px-4 py-3">≤ 1000м над уровнем моря</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Степень защиты</td>
                  <td className="border border-gray-300 px-4 py-3">IP20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificationsSection;