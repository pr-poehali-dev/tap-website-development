import React from 'react';
import Icon from '@/components/ui/icon';

interface HatchSpecificationsProps {
  hatchId: number;
  features: string[];
  expandedFeatures: number | null;
  setExpandedFeatures: (id: number | null) => void;
  selectedRow: string | null;
  setSelectedRow: (row: string | null) => void;
  handleContactClick: () => void;
}

const HatchSpecifications: React.FC<HatchSpecificationsProps> = ({
  hatchId,
  features,
  expandedFeatures,
  setExpandedFeatures,
  selectedRow,
  setSelectedRow,
  handleContactClick
}) => {
  return (
    <div>
      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">Список моделей</h4>
      <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Стоимость указана с НДС. Не является публичной офертой.</p>
      
      {/* Oval hatch table */}
      {hatchId === 1 && (
        <div className="overflow-x-auto -mx-2 md:mx-0">
          <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm min-w-[500px] md:min-w-0">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Рабочее<br className="md:hidden"/><span className="hidden md:inline"> </span>давление</th>
                <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Кронштейн</th>
                <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Срок<br className="md:hidden"/><span className="hidden md:inline"> </span>поставки</th>
                <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'oval-04-no' ? null : 'oval-04-no')}
              >
                <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center ${
                  selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
                }`} rowSpan={2}>0.4 МПа</td>
                <td className="border border-gray-300 px-2 md:px-3 py-2 text-center">Нет</td>
                <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">23 800,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'oval-04-yes' ? null : 'oval-04-yes')}
              >
                <td className={`border border-gray-300 px-3 py-2 text-center ${
                  selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
                }`}>Да</td>
                <td className={`border border-gray-300 px-3 py-2 text-center ${
                  selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
                }`}>
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold ${
                  selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
                }`}>26 600,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'oval-06-no' ? null : 'oval-06-no')}
              >
                <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center ${
                  selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
                }`} rowSpan={2}>0.6 МПа</td>
                <td className="border border-gray-300 px-2 md:px-3 py-2 text-center">Нет</td>
                <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">26 600,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'oval-06-yes' ? null : 'oval-06-yes')}
              >
                <td className={`border border-gray-300 px-3 py-2 text-center ${
                  selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
                }`}>Да</td>
                <td className={`border border-gray-300 px-3 py-2 text-center ${
                  selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
                }`}>
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold ${
                  selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
                }`}>29 400,00 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Ring hatch table */}
      {hatchId === 2 && (
        <div className="overflow-x-auto -mx-2 md:mx-0">
          <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Материал</th>
                <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Диаметр</th>
                <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Высота<br className="md:hidden"/><span className="hidden md:inline"> </span>горловины</th>
                <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Срок<br className="md:hidden"/><span className="hidden md:inline"> </span>поставки</th>
                <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi304-dn400-100' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi304-dn400-100' ? null : 'ring-aisi304-dn400-100')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={6}>AISI304</td>
                <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={2}>DN400</td>
                <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">11 620,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi304-dn400-150' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi304-dn400-150' ? null : 'ring-aisi304-dn400-150')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">13 580,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi304-dn450-100' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi304-dn450-100' ? null : 'ring-aisi304-dn450-100')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={4}>DN450</td>
                <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">12 600,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi304-dn450-150' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi304-dn450-150' ? null : 'ring-aisi304-dn450-150')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">14 000,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi304-dn450-300' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi304-dn450-300' ? null : 'ring-aisi304-dn450-300')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center">300 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">19 600,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi304-dn450-400' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi304-dn450-400' ? null : 'ring-aisi304-dn450-400')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center">400 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    В наличии
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">22 400,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi316-dn400-100' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi316-dn400-100' ? null : 'ring-aisi316-dn400-100')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={4}>AISI316</td>
                <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={2}>DN400</td>
                <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    Под заказ
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">17 780,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi316-dn400-150' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi316-dn400-150' ? null : 'ring-aisi316-dn400-150')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    Под заказ
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">19 740,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi316-dn450-100' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi316-dn450-100' ? null : 'ring-aisi316-dn450-100')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={2}>DN450</td>
                <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    Под заказ
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">21 980,00 ₽</td>
              </tr>
              <tr 
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === 'ring-aisi316-dn450-150' ? 'bg-red-100' : ''
                }`}
                onClick={() => setSelectedRow(selectedRow === 'ring-aisi316-dn450-150' ? null : 'ring-aisi316-dn450-150')}
              >
                <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={handleContactClick}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    Под заказ
                  </button>
                </td>
                <td className="border border-gray-300 px-2 py-2 text-center font-semibold">22 820,00 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Характеристики под спойлером */}
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mt-4 md:mt-6">
        <button 
          onClick={() => setExpandedFeatures(expandedFeatures === hatchId ? null : hatchId)}
          className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[50px]"
        >
          <h4 className="text-base md:text-lg font-semibold text-gray-800 flex-1 pr-2">ХАРАКТЕРИСТИКИ</h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
              {expandedFeatures === hatchId ? 'Скрыть' : 'Показать'}
            </span>
            <span className={`transform transition-transform duration-300 ${expandedFeatures === hatchId ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
        </button>
        
        {expandedFeatures === hatchId && (
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HatchSpecifications;